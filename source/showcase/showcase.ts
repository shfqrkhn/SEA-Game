// Vehicle showcase (MPES §10): the team's vehicle with its installed parts, as a slowly turning 3D model the
// player can drag, pause and turn by button. Without WebGL, or if the model cannot load, it stacks the still
// renders instead (base vehicle, then one layer per installed part; front, rear and a turntable). Both modes list
// the installed parts as text and show process cards as badges.
import type { Group } from 'three';
import type { MissionId } from '../domain/data.ts';
import { h } from '../ui/dom.ts';
import { loadLibrary, ModelStage, partSlots, webglAvailable } from './model.ts';
import { renders, VEHICLE, type Render } from './renders.ts';

export type ShowcaseView = 'front' | 'rear' | 'turntable';
export interface ShowcasePart { readonly id: string; readonly title: string; readonly category?: string }
export interface ShowcaseText {
  readonly title: string; readonly view: string; readonly front: string; readonly rear: string;
  readonly turntable: string; readonly rotate: string; readonly installed: string; readonly none: string;
  /** Text alternative and visible note for the turntable, which shows the base vehicle only. */
  readonly turntableLabel: string; readonly turntableNote: string;
  /** Heading of the SE_PROCESS badges, and the note shown when a mount holds more than one part. */
  readonly process: string; readonly slotNote: string;
  /** The 3D stage's hint and its pause and turn buttons. */
  readonly drag: string; readonly pause: string; readonly left: string; readonly right: string;
}

/** One press of a turn button turns the 3D vehicle by this much (radians). */
export const TURN_STEP = Math.PI / 8;

const VIEWS: readonly ShowcaseView[] = ['front', 'rear', 'turntable'];

function frames(vehicle: string): string[] {
  return [...renders().keys()].filter(k => k.startsWith(`${vehicle}-turntable-`)).sort();
}

/**
 * Parts drawn at this vehicle and angle, farthest from the camera first (MPES §10.2). Parts share mount
 * slots; only the most recently recorded part of each slot is drawn (`parts` is in purchase order).
 * The slot is read from either angle, so a part hidden behind the hull at one angle still replaces the
 * older part in its slot there.
 */
export function stackOrder<P extends ShowcasePart>(table: ReadonlyMap<string, Render>, vehicle: string, angle: string, parts: readonly P[]): P[] {
  const depth = (p: P) => table.get(`${vehicle}-${angle}-${p.id}`)?.depth ?? 0;
  return latestPerSlot(table, vehicle, parts).filter(p => table.has(`${vehicle}-${angle}-${p.id}`)).sort((a, b) => depth(b) - depth(a));
}

/** The most recently recorded part of each mount slot, in purchase order (parts with no slot are dropped). */
export function latestBySlot<P extends ShowcasePart>(parts: readonly P[], slotOf: (p: P) => string | undefined): P[] {
  const latest = new Map<string, P>();
  for (const p of parts) {
    const slot = slotOf(p);
    if (slot) { latest.delete(slot); latest.set(slot, p); }
  }
  return [...latest.values()];
}

/** latestBySlot for the still renders; the slot is read from either angle. */
export function latestPerSlot<P extends ShowcasePart>(table: ReadonlyMap<string, Render>, vehicle: string, parts: readonly P[]): P[] {
  return latestBySlot(parts, p => {
    const front = table.get(`${vehicle}-front-${p.id}`), rear = table.get(`${vehicle}-rear-${p.id}`);
    return front || rear ? front?.slot ?? rear?.slot ?? p.id : undefined;
  });
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
  #mode: 'pending' | '3d' | 'stills' = 'pending';
  #model: { stage: ModelStage; library: Group; element: HTMLElement } | null = null;
  #last: (() => void) | null = null;

  constructor() {
    this.element = h('section', { class: 'panel showcase stack', id: 'showcase', 'aria-labelledby': 'showcase-heading' });
  }

  update(mission: MissionId, parts: readonly ShowcasePart[], label: string, text: ShowcaseText): HTMLElement {
    this.#last = () => this.update(mission, parts, label, text);
    if (this.#mode === 'pending') this.#start();
    return this.#mode === '3d' ? this.#update3d(mission, parts, label, text) : this.#updateStills(mission, parts, label, text);
  }

  /** Decides the mode once: stills at first, then 3D once WebGL is confirmed and the embedded model has loaded. */
  #start(): void {
    this.#mode = 'stills';
    if (!webglAvailable()) return;
    void loadLibrary().then(library => {
      if (!library) return;
      const stage = new ModelStage();
      const element = h('div', { class: 'showcase-stage showcase-3d', role: 'img', 'data-mode': '3d', 'data-ready': 'false' });
      element.appendChild(stage.canvas);
      stage.onTurn = azimuth => element.setAttribute('data-azimuth', azimuth.toFixed(3));
      this.#model = { stage, library, element };
      this.#mode = '3d';
      if (this.element.isConnected) this.#last?.();
    });
  }

  #update3d(mission: MissionId, parts: readonly ShowcasePart[], label: string, text: ShowcaseText): HTMLElement {
    const { stage, library, element } = this.#model!;
    const vehicle = VEHICLE[mission];
    const group = library.getObjectByName(vehicle);
    const slots = group ? partSlots(group) : new Map<string, string>();
    const physical = parts.filter(p => p.category !== 'SE_PROCESS');
    const shown = latestBySlot(physical, p => slots.get(p.id));
    if (!stage.show(library, vehicle, shown.map(p => p.id))) {
      this.#mode = 'stills';
      return this.#updateStills(mission, parts, label, text);
    }
    element.setAttribute('aria-label', label);
    element.setAttribute('data-layers', shown.map(p => p.id).sort().join(' '));
    element.setAttribute('data-ready', 'true');
    const pause = h('button', { type: 'button', class: 'btn ghost', id: 'showcase-pause', 'aria-pressed': String(!stage.turning), text: text.pause, on: {
      click: e => { stage.turning = !stage.turning; (e.currentTarget as HTMLElement).setAttribute('aria-pressed', String(!stage.turning)); },
    } });
    const turn = (id: string, name: string, radians: number) => h('button', { type: 'button', class: 'btn ghost', id, text: name, on: { click: () => stage.turn(radians) } });
    const controls = h('div', { class: 'cluster showcase-controls' }, pause, turn('showcase-left', text.left, -TURN_STEP), turn('showcase-right', text.right, TURN_STEP));
    const slotNote = shown.length < physical.filter(p => slots.has(p.id)).length ? h('p', { class: 'muted small', text: text.slotNote }) : '';
    const focused = document.activeElement?.id;
    this.element.replaceChildren(h('h2', { id: 'showcase-heading', text: text.title }), element,
      h('p', { class: 'muted small', text: text.drag }), slotNote, controls, ...this.#lists(parts, text));
    stage.attached();
    if (focused?.startsWith('showcase-')) document.getElementById(focused)?.focus();
    return this.element;
  }

  /** The SE_PROCESS badges (process cards have no geometry, MPES §10.2) and the text list of installed parts. */
  #lists(parts: readonly ShowcasePart[], text: ShowcaseText): (HTMLElement | string)[] {
    const process = parts.filter(p => p.category === 'SE_PROCESS');
    const badges = process.length ? h('div', { class: 'stack' }, h('h3', { class: 'small', text: text.process }),
      h('ul', { class: 'badges' }, process.map(p => h('li', { class: 'badge' }, h('span', { class: 'mono', text: p.id }), ' ', p.title)))) : '';
    const installed = h('div', {}, h('h3', { class: 'small', text: text.installed }),
      parts.length ? h('ul', { class: 'installed' }, parts.map(p => h('li', {}, h('span', { class: 'mono small', text: p.id }), ' ', p.title)))
        : h('p', { class: 'muted small', text: text.none }));
    return [badges, installed];
  }

  #updateStills(mission: MissionId, parts: readonly ShowcasePart[], label: string, text: ShowcaseText): HTMLElement {
    const vehicle = VEHICLE[mission], table = renders();
    const turntable = frames(vehicle);
    if (this.#frame >= turntable.length) this.#frame = 0;
    const turning = this.#view === 'turntable';
    const stage = h('div', { class: 'showcase-stage', role: 'img', 'data-mode': 'stills', 'aria-label': turning ? text.turntableLabel : label });
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
    const physical = parts.filter(p => p.category !== 'SE_PROCESS');
    const slotNote = !turning && latestPerSlot(table, vehicle, physical).length < physical.length ? h('p', { class: 'muted small', text: text.slotNote }) : '';
    if (this.#view === 'turntable') this.#warm(turntable);
    const focused = document.activeElement?.id;
    const note = turning ? h('p', { class: 'muted small', text: text.turntableNote }) : '';
    this.element.replaceChildren(h('h2', { id: 'showcase-heading', text: text.title }), stage, note, slotNote, views, scrub ?? '', ...this.#lists(parts, text));
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
