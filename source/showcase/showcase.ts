// Vehicle showcase (MPES §10): stacks pre-rendered layers (base vehicle, then one layer per installed part)
// from the same camera; a turntable of the base vehicle; a text list of installed parts. No runtime 3D.
import type { MissionId } from '../domain/data.ts';
import { h } from '../ui/dom.ts';
import { renders, VEHICLE, type Render } from './renders.ts';

export type ShowcaseView = 'front' | 'rear' | 'turntable';
export interface ShowcasePart { readonly id: string; readonly title: string }
export interface ShowcaseText {
  readonly title: string; readonly view: string; readonly front: string; readonly rear: string;
  readonly turntable: string; readonly rotate: string; readonly installed: string; readonly none: string;
}

const VIEWS: readonly ShowcaseView[] = ['front', 'rear', 'turntable'];

function frames(vehicle: string): string[] {
  return [...renders().keys()].filter(k => k.startsWith(`${vehicle}-turntable-`)).sort();
}

/** Parts with a layer at this vehicle and angle, farthest from the camera first (MPES §10.2). */
export function stackOrder<P extends ShowcasePart>(table: ReadonlyMap<string, Render>, vehicle: string, angle: string, parts: readonly P[]): P[] {
  const depth = (p: P) => table.get(`${vehicle}-${angle}-${p.id}`)?.depth ?? 0;
  return parts.filter(p => table.has(`${vehicle}-${angle}-${p.id}`)).sort((a, b) => depth(b) - depth(a));
}

/** True when the embedded renders include this mission's vehicle. */
export function hasShowcase(mission: MissionId): boolean {
  return renders().has(`${VEHICLE[mission]}-front-base`);
}

function layer(render: Render, attrs: Record<string, string>): HTMLImageElement {
  const img = h('img', { src: render.src, alt: '', decoding: 'async', draggable: 'false', ...attrs });
  // Placement through the CSSOM (allowed by the hash-pinned CSP; style attributes are not).
  img.style.left = `${(render.offset.left / render.frame.width) * 100}%`;
  img.style.top = `${(render.offset.top / render.frame.height) * 100}%`;
  img.style.width = `${(render.size.width / render.frame.width) * 100}%`;
  return img;
}

export class Showcase {
  readonly element: HTMLElement;
  #view: ShowcaseView = 'front';
  #frame = 0;

  constructor() {
    this.element = h('section', { class: 'panel showcase stack', id: 'showcase', 'aria-labelledby': 'showcase-heading' });
  }

  update(mission: MissionId, parts: readonly ShowcasePart[], label: string, text: ShowcaseText): HTMLElement {
    const vehicle = VEHICLE[mission], table = renders();
    const turntable = frames(vehicle);
    if (this.#frame >= turntable.length) this.#frame = 0;
    const stage = h('div', { class: 'showcase-stage', role: 'img', 'aria-label': label });
    if (this.#view === 'turntable') {
      const key = turntable[this.#frame];
      const render = key ? table.get(key) : undefined;
      if (render) {
        stage.style.aspectRatio = `${render.frame.width} / ${render.frame.height}`;
        stage.appendChild(layer(render, { 'data-layer': 'base', 'data-frame': String(this.#frame) }));
      }
    } else {
      const base = table.get(`${vehicle}-${this.#view}-base`);
      if (base) {
        stage.style.aspectRatio = `${base.frame.width} / ${base.frame.height}`;
        stage.appendChild(layer(base, { 'data-layer': 'base', 'data-angle': this.#view }));
      }
      for (const part of stackOrder(table, vehicle, this.#view, parts)) {
        stage.appendChild(layer(table.get(`${vehicle}-${this.#view}-${part.id}`)!, { 'data-layer': part.id, 'data-angle': this.#view }));
      }
    }
    const views = h('fieldset', { class: 'cluster showcase-views' }, h('legend', { class: 'visually-hidden', text: text.view }),
      VIEWS.map(view => h('label', { class: 'choice' },
        h('input', { type: 'radio', name: 'showcase-view', id: `showcase-view-${view}`, value: view, checked: view === this.#view,
          on: { change: () => { this.#view = view; this.update(mission, parts, label, text); } } }),
        h('span', { text: text[view] }))));
    const scrub = this.#view === 'turntable' && turntable.length > 1
      ? h('div', { class: 'field' }, h('label', { for: 'showcase-turn', text: text.rotate }),
        h('input', { type: 'range', id: 'showcase-turn', min: '0', max: String(turntable.length - 1), step: '1', value: String(this.#frame),
          on: { input: e => { this.#frame = Number((e.target as HTMLInputElement).value); this.#swapFrame(stage, turntable); } } }))
      : null;
    const installed = h('div', {}, h('h3', { class: 'small', text: text.installed }),
      parts.length ? h('ul', { class: 'installed' }, parts.map(p => h('li', {}, h('span', { class: 'mono small', text: p.id }), ' ', p.title)))
        : h('p', { class: 'muted small', text: text.none }));
    if (this.#view === 'turntable') this.#warm(turntable);
    const focused = document.activeElement?.id;
    this.element.replaceChildren(h('h2', { id: 'showcase-heading', text: text.title }), stage, views, scrub ?? '', installed);
    if (focused?.startsWith('showcase-')) document.getElementById(focused)?.focus();
    return this.element;
  }

  /** Turntable scrubbing swaps one image without rebuilding the controls, so the slider keeps focus. */
  #swapFrame(stage: HTMLElement, turntable: readonly string[]): void {
    const key = turntable[this.#frame];
    const render = key ? renders().get(key) : undefined;
    if (!render) return;
    stage.replaceChildren(layer(render, { 'data-layer': 'base', 'data-frame': String(this.#frame) }));
    this.#warm(turntable);
  }

  /** Decode the frames either side of the current one, so the next scrub step shows at once. */
  #warm(turntable: readonly string[]): void {
    for (const step of [-2, -1, 1, 2]) {
      const key = turntable[(this.#frame + step + turntable.length) % turntable.length];
      const render = key ? renders().get(key) : undefined;
      if (!render || this.#warmed.has(render.src)) continue;
      this.#warmed.add(render.src);
      const img = new Image();
      img.src = render.src;
      void img.decode().catch(() => this.#warmed.delete(render.src));
    }
  }
  readonly #warmed = new Set<string>();
}
