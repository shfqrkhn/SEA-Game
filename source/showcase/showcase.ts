// Vehicle showcase (MPES §10): the team's vehicle with its installed parts, as a slowly turning 3D model the
// player can drag, pause and turn by button. Without WebGL, or if the model cannot load, it stacks the still
// renders instead (base vehicle, then one layer per installed part; front, rear and a turntable). Both modes list
// the installed parts as text and show process cards as badges.
import type { Group } from 'three';
import type { MissionId } from '../domain/data.ts';
import { h } from '../ui/dom.ts';
import { loadVehicle, ModelStage, partSlots, webglAvailable } from './model.ts';
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

/**
 * Decoded still images, reused so no layer is ever decoded twice (MPES §10.3). Decoding runs off the main thread
 * and dominates update time on slow machines; a new <img> for an unchanged layer would decode it again. Never dropped:
 * an image on screen, or one in the prepared set (`keep`): a fully built vehicle has up to 20 layers and a base per
 * angle, and the next view is prepared on top of the shown one, so no fixed count covers both. `limit` bounds only the
 * rest, the most recently used images of views left behind.
 */
export class DecodedImages {
  readonly #images = new Map<string, HTMLImageElement>();
  #kept = new Set<string>();
  readonly limit: number;
  readonly #create: (src: string) => HTMLImageElement;
  constructor(limit = 24, create = (src: string) => h('img', { src, alt: '', decoding: 'async', draggable: 'false' })) {
    this.limit = limit;
    this.#create = create;
  }

  /** The image for this source, decoded once; the least recently used one neither on screen nor kept is dropped. */
  get(src: string): HTMLImageElement {
    let img = this.#images.get(src);
    if (img) this.#images.delete(src);
    else img = this.#create(src);
    this.#images.set(src, img);
    let spare = [...this.#images].filter(([key, old]) => !old.isConnected && !this.#kept.has(key)).length;
    for (const [key, old] of this.#images) {
      if (spare <= this.limit) break;
      if (!old.isConnected && !this.#kept.has(key)) { this.#images.delete(key); spare--; }
    }
    return img;
  }

  /** The images of the next views, held until the next call replaces the set; nearest first, as given. */
  keep(srcs: readonly string[]): HTMLImageElement[] {
    this.#kept = new Set(srcs);
    return srcs.map(src => this.get(src));
  }

  /** Decodes ahead of need; settles either way. */
  prepare(src: string): Promise<void> {
    return this.get(src).decode().catch(() => undefined);
  }

  get size(): number { return this.#images.size; }
}

const LAYER_ATTRS = ['data-layer', 'data-frame', 'data-angle'];

function place(img: HTMLImageElement, render: Render, attrs: Record<string, string>): HTMLImageElement {
  for (const name of LAYER_ATTRS) img.removeAttribute(name);
  for (const [name, value] of Object.entries(attrs)) img.setAttribute(name, value);
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
  #model: { stage: ModelStage; libraries: Map<string, Group>; element: HTMLElement } | null = null;
  #last: (() => void) | null = null;

  constructor() {
    this.element = h('section', { class: 'panel showcase stack', id: 'showcase', 'aria-labelledby': 'showcase-heading' });
  }

  /** `upcoming` is the card the player has loaded: the part most likely recorded next. */
  update(mission: MissionId, parts: readonly ShowcasePart[], label: string, text: ShowcaseText, upcoming: ShowcasePart | null = null): HTMLElement {
    this.#upcoming = upcoming;
    this.#last = () => this.update(mission, parts, label, text, upcoming);
    if (this.#mode === 'pending') this.#start(VEHICLE[mission]);
    return this.#mode === '3d' ? this.#update3d(mission, parts, label, text) : this.#updateStills(mission, parts, label, text);
  }

  /**
   * Decides the mode once: stills at first, then 3D once WebGL is confirmed and the team's vehicle model has
   * loaded. Only that vehicle is decoded (MPES §14 model-ready budget); another is decoded if the mission changes.
   */
  #start(vehicle: string): void {
    this.#mode = 'stills';
    if (!webglAvailable()) return;
    void loadVehicle(vehicle).then(library => {
      if (!library) return;
      const stage = new ModelStage();
      const element = h('div', { class: 'showcase-stage showcase-3d', role: 'img', 'data-mode': '3d', 'data-ready': 'false' });
      element.appendChild(stage.canvas);
      stage.onTurn = azimuth => element.setAttribute('data-azimuth', azimuth.toFixed(3));
      this.#model = { stage, libraries: new Map([[vehicle, library]]), element };
      this.#mode = '3d';
      if (this.element.isConnected) this.#last?.();
    });
  }

  #update3d(mission: MissionId, parts: readonly ShowcasePart[], label: string, text: ShowcaseText): HTMLElement {
    const { stage, libraries, element } = this.#model!;
    const vehicle = VEHICLE[mission];
    const library = libraries.get(vehicle);
    if (!library) {
      // A different mission: show its stills while its model decodes, then redraw (stills for good if it cannot load).
      void loadVehicle(vehicle).then(loaded => {
        if (loaded) libraries.set(vehicle, loaded); else this.#mode = 'stills';
        if (this.element.isConnected) this.#last?.();
      });
      return this.#updateStills(mission, parts, label, text);
    }
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

  /** The layers of one view, farthest first: a turntable frame, or the base and one part per mount at an angle. */
  #layers(vehicle: string, view: ShowcaseView, parts: readonly ShowcasePart[], frame: number): [Render, Record<string, string>][] {
    const table = renders();
    if (view === 'turntable') {
      const turntable = frames(vehicle);
      const key = turntable[(frame + turntable.length) % turntable.length];
      const render = key ? table.get(key) : undefined;
      return render ? [[render, { 'data-layer': 'base', 'data-frame': String((frame + turntable.length) % turntable.length) }]] : [];
    }
    const base = table.get(`${vehicle}-${view}-base`);
    return [
      ...(base ? [[base, { 'data-layer': 'base', 'data-angle': view }] as [Render, Record<string, string>]] : []),
      ...stackOrder(table, vehicle, view, parts).map(part =>
        [table.get(`${vehicle}-${view}-${part.id}`)!, { 'data-layer': part.id, 'data-angle': view }] as [Render, Record<string, string>]),
    ];
  }

  #draw(stage: HTMLElement, layers: [Render, Record<string, string>][]): void {
    const first = layers[0]?.[0];
    if (first) stage.style.aspectRatio = `${first.frame.width} / ${first.frame.height}`;
    stage.replaceChildren(...layers.map(([render, attrs]) => place(this.#images.get(render.src), render, attrs)));
  }

  /**
   * Prepares what the player can ask for next, nearest first: the loaded card's layers, at this angle and then the
   * other, so recording it never waits for a decode (CI run 38135172580: a fresh layer took 190 ms, budget 100); from
   * an angle, the other angle and the turntable frame shown on entry with the frames either side; when turning, the
   * frames ahead in the direction of travel, then behind. The images exist at once, so a step never creates one, and decode one at a time once the shown view has
   * decoded, so they never delay it. Not left for idle time: a busy machine may have none before the next step (CI run
   * 38106258905). `data-prepared` reports when it is done.
   */
  #prepare(stage: HTMLElement, vehicle: string, parts: readonly ShowcasePart[]): void {
    const generation = ++this.#generation;
    this.element.setAttribute('data-prepared', 'false');
    const d = this.#direction;
    const next: [Render, Record<string, string>][] = this.#view === 'turntable'
      ? [d, -d, 2 * d, -2 * d, 3 * d].flatMap(step => this.#layers(vehicle, 'turntable', parts, this.#frame + step))
      : [...this.#layers(vehicle, this.#view === 'front' ? 'rear' : 'front', parts, 0),
        ...[0, 1, -1].flatMap(step => this.#layers(vehicle, 'turntable', parts, this.#frame + step))];
    const id = this.#upcoming?.id, table = renders();
    const upcoming = id && this.#view !== 'turntable' && !parts.some(p => p.id === id)
      ? [this.#view, this.#view === 'front' ? 'rear' : 'front'].flatMap(view => table.get(`${vehicle}-${view}-${id}`) ?? []) : [];
    // Kept by the pool until the next view replaces them, so no prepared image is dropped and decoded again.
    const images = this.#images.keep([...upcoming, ...next.map(([render]) => render)].map(render => render.src));
    // One at a time, nearest first, stopping when the view changes: each background decode competes with the next
    // image the player waits for (CI run 38133130929: four at once made a purchase take 117 ms).
    void (async () => {
      await Promise.all([...stage.querySelectorAll('img')].map(img => img.decode().catch(() => undefined)));
      for (const img of images) {
        await this.#background; // a decode an earlier view started is still running
        if (generation !== this.#generation) return;
        this.#background = img.decode().catch(() => undefined);
        await this.#background;
      }
      if (generation === this.#generation) this.element.setAttribute('data-prepared', 'true');
    })();
  }

  #updateStills(mission: MissionId, parts: readonly ShowcasePart[], label: string, text: ShowcaseText): HTMLElement {
    const vehicle = VEHICLE[mission], table = renders();
    const turntable = frames(vehicle);
    if (this.#frame >= turntable.length) this.#frame = 0;
    const turning = this.#view === 'turntable';
    const stage = h('div', { class: 'showcase-stage', role: 'img', 'data-mode': 'stills', 'aria-label': turning ? text.turntableLabel : label });
    this.#draw(stage, this.#layers(vehicle, this.#view, parts, this.#frame));
    const views = h('fieldset', { class: 'cluster showcase-views' }, h('legend', { class: 'visually-hidden', text: text.view }),
      VIEWS.map(view => h('label', { class: 'choice' },
        h('input', { type: 'radio', name: 'showcase-view', id: `showcase-view-${view}`, value: view, checked: view === this.#view,
          on: { change: () => { this.#view = view; this.update(mission, parts, label, text); } } }),
        h('span', { text: text[view] }))));
    // Turntable scrubbing swaps one image without rebuilding the controls, so the slider keeps focus.
    const scrub = turning && turntable.length > 1
      ? h('div', { class: 'field' }, h('label', { for: 'showcase-turn', text: text.rotate }),
        h('input', { type: 'range', id: 'showcase-turn', min: '0', max: String(turntable.length - 1), step: '1', value: String(this.#frame),
          on: { input: e => {
            const frame = Number((e.target as HTMLInputElement).value), count = turntable.length;
            // Direction of travel on the ring: End from frame 0 is one step back.
            this.#direction = (frame - this.#frame + count) % count <= count / 2 ? 1 : -1;
            this.#frame = frame;
            this.#draw(stage, this.#layers(vehicle, 'turntable', parts, this.#frame));
            this.#prepare(stage, vehicle, parts);
          } } }))
      : null;
    const physical = parts.filter(p => p.category !== 'SE_PROCESS');
    const slotNote = !turning && latestPerSlot(table, vehicle, physical).length < physical.length ? h('p', { class: 'muted small', text: text.slotNote }) : '';
    const focused = document.activeElement?.id;
    const note = turning ? h('p', { class: 'muted small', text: text.turntableNote }) : '';
    this.element.replaceChildren(h('h2', { id: 'showcase-heading', text: text.title }), stage, note, slotNote, views, scrub ?? '', ...this.#lists(parts, text));
    if (focused?.startsWith('showcase-')) document.getElementById(focused)?.focus();
    this.#prepare(stage, vehicle, parts);
    return this.element;
  }

  readonly #images = new DecodedImages();
  #generation = 0;
  #direction: 1 | -1 = 1;
  #upcoming: ShowcasePart | null = null;
  #background: Promise<void> = Promise.resolve();
}
