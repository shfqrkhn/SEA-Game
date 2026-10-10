// Vehicle bay (MPES §10): one persistent renderer, render on demand only, never owns game state.
// Stylised low-poly vehicles: a hull per mission plus a visible part for every installed card,
// mounted by category (CAPACITY rear module, MOBILITY powerpack or tracks, FIREPOWER turret,
// PROTECTION side armour, COMMS masts, SA sensor masts, ACCESSORIES kits). SE_PROCESS cards have no
// geometry; the caption and the purchases table list them.
import {
  AmbientLight, BoxGeometry, Color, CylinderGeometry, DirectionalLight, Group, Mesh, MeshStandardMaterial,
  Object3D, PerspectiveCamera, Scene, SphereGeometry, Vector2, Vector3, WebGLRenderer, type BufferGeometry,
} from 'three';
import { card as cardDef, type Category, type MissionId } from '../domain/data.ts';
import { h } from '../ui/dom.ts';

export interface BayModel {
  readonly mission: MissionId;
  readonly parts: readonly { readonly id: string; readonly category: Category }[];
}
export interface BayText {
  readonly unavailable: string;
  readonly rotateLeft: string;
  readonly rotateRight: string;
  readonly exploded: string;
  readonly reset: string;
  readonly hint: string;
}

const PALETTE: Record<Category | 'HULL' | 'TYRE' | 'METAL', number> = {
  HULL: 0x6f7a5c, TYRE: 0x23262a, METAL: 0x8f9890,
  CAPACITY: 0xb9773b, MOBILITY: 0x3f6f8f, FIREPOWER: 0x9b3d2e, PROTECTION: 0x4f7a4a, COMMS: 0x6a5a9a,
  SA: 0xb08a1e, ACCESSORIES: 0x8a4f7a, SE_PROCESS: 0x3f7f78,
};

interface Hull { length: number; height: number; width: number; axles: number; nose: number }
const HULLS: Record<MissionId, Hull> = {
  COMBAT: { length: 4.4, height: 1.0, width: 2.1, axles: 4, nose: 0.6 },
  RECCE: { length: 3.4, height: 1.1, width: 1.9, axles: 2, nose: 0.5 },
  TROOP: { length: 4.8, height: 1.35, width: 2.2, axles: 4, nose: 0.7 },
  COMMAND: { length: 4.6, height: 1.5, width: 2.2, axles: 4, nose: 0.4 },
  RECOVERY: { length: 4.6, height: 1.1, width: 2.2, axles: 4, nose: 0.6 },
  MINE: { length: 4.2, height: 1.2, width: 2.2, axles: 3, nose: 0.9 },
};
const DEFAULT_VIEW = { yaw: -0.7, pitch: 0.32, distance: 11 };

export class VehicleBay {
  readonly element: HTMLElement;
  readonly #canvasHolder: HTMLElement;
  readonly #caption: HTMLElement;
  readonly #explodeButton: HTMLButtonElement;
  #renderer: WebGLRenderer | null = null;
  #scene = new Scene();
  #camera = new PerspectiveCamera(32, 16 / 9, 0.1, 100);
  #vehicle: Group | null = null;
  #key = '';
  #available: boolean | null = null;
  #view = { ...DEFAULT_VIEW };
  #exploded = false;
  #text: BayText;

  constructor(text: BayText) {
    this.#text = text;
    this.#canvasHolder = h('div', { class: 'bay-canvas' });
    this.#caption = h('figcaption', { class: 'muted small' });
    const button = (label: string, action: () => void, id: string) =>
      h('button', { type: 'button', class: 'btn', id, text: label, on: { click: action } });
    this.#explodeButton = h('button', { type: 'button', class: 'btn', id: 'bay-explode', 'aria-pressed': 'false', text: text.exploded, on: { click: () => this.setExploded(!this.#exploded) } });
    this.element = h('figure', { class: 'bay', id: 'vehicle-bay' },
      this.#canvasHolder,
      h('div', { class: 'cluster no-print' },
        button(text.rotateLeft, () => this.rotate(-0.4), 'bay-left'),
        button(text.rotateRight, () => this.rotate(0.4), 'bay-right'),
        this.#explodeButton,
        button(text.reset, () => this.resetView(), 'bay-reset'),
      ),
      this.#caption,
    );
  }

  get available(): boolean { return this.#available === true; }

  /** Update labels after a language change without rebuilding geometry. */
  setText(text: BayText): void {
    this.#text = text;
    const labels: [string, string][] = [['bay-left', text.rotateLeft], ['bay-right', text.rotateRight], ['bay-explode', text.exploded], ['bay-reset', text.reset]];
    for (const [id, label] of labels) { const b = this.element.querySelector(`#${id}`); if (b) b.textContent = label; }
    if (this.#renderer) this.#renderer.domElement.title = text.hint;
    if (this.#available === false) this.#canvasHolder.textContent = text.unavailable;
  }

  #init(): boolean {
    if (this.#available !== null) return this.#available;
    try {
      // Probe quietly first: a missing WebGL must not log errors (MPES §9).
      const canvas = document.createElement('canvas');
      const attributes = { antialias: true, alpha: true, powerPreference: 'low-power' } as const;
      const context = (canvas.getContext('webgl2', attributes) ?? canvas.getContext('webgl', attributes)) as WebGLRenderingContext | null;
      if (!context) throw new Error('no WebGL');
      const renderer = new WebGLRenderer({ canvas, context, ...attributes });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      canvas.setAttribute('role', 'img');
      canvas.tabIndex = 0;
      canvas.title = this.#text.hint;
      this.#canvasHolder.appendChild(canvas);
      this.#renderer = renderer;
      this.#scene.add(new AmbientLight(0xffffff, 1.3));
      const sun = new DirectionalLight(0xffffff, 2.4);
      sun.position.set(5, 8, 6);
      const fill = new DirectionalLight(0xffffff, 0.6);
      fill.position.set(-6, 3, -4);
      this.#scene.add(sun, fill);
      this.#bindControls(canvas);
      canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); this.#showUnavailable(); });
      canvas.addEventListener('webglcontextrestored', () => { this.#canvasHolder.classList.remove('unavailable'); this.#key = ''; });
      new ResizeObserver(() => this.#resize()).observe(this.#canvasHolder);
      this.#available = true;
    } catch {
      this.#showUnavailable();
      this.#available = false;
    }
    return this.#available;
  }

  #bindControls(canvas: HTMLCanvasElement): void {
    let last: { x: number; y: number } | null = null;
    canvas.addEventListener('pointerdown', e => { last = { x: e.clientX, y: e.clientY }; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointermove', e => {
      if (!last) return;
      this.#view.yaw += (e.clientX - last.x) * 0.01;
      this.#view.pitch = clamp(this.#view.pitch + (e.clientY - last.y) * 0.01, 0.05, 1.2);
      last = { x: e.clientX, y: e.clientY };
      this.#draw();
    });
    const stop = () => { last = null; };
    canvas.addEventListener('pointerup', stop);
    canvas.addEventListener('pointercancel', stop);
    canvas.addEventListener('keydown', e => {
      const actions: Record<string, () => void> = {
        ArrowLeft: () => { this.#view.yaw -= 0.2; }, ArrowRight: () => { this.#view.yaw += 0.2; },
        ArrowUp: () => { this.#view.pitch = clamp(this.#view.pitch + 0.1, 0.05, 1.2); },
        ArrowDown: () => { this.#view.pitch = clamp(this.#view.pitch - 0.1, 0.05, 1.2); },
        '+': () => { this.#view.distance = clamp(this.#view.distance - 1, 7, 16); },
        '-': () => { this.#view.distance = clamp(this.#view.distance + 1, 7, 16); },
      };
      const action = actions[e.key];
      if (!action) return;
      e.preventDefault();
      action();
      this.#draw();
    });
  }

  #showUnavailable(): void {
    this.#canvasHolder.classList.add('unavailable');
    this.#canvasHolder.textContent = this.#text.unavailable;
    for (const button of this.element.querySelectorAll('button')) button.disabled = true;
  }

  rotate(delta: number): void { this.#view.yaw += delta; this.#draw(); }
  resetView(): void { this.#view = { ...DEFAULT_VIEW }; this.setExploded(false); }

  setExploded(on: boolean): void {
    this.#exploded = on;
    this.#explodeButton.setAttribute('aria-pressed', String(on));
    for (const child of this.#vehicle?.children ?? []) {
      const base = child.userData.base as Vector3 | undefined, out = child.userData.out as Vector3 | undefined;
      if (base && out) child.position.copy(on ? base.clone().add(out) : base);
    }
    this.#draw();
  }

  #resize(): void {
    if (!this.#renderer) return;
    const width = Math.max(1, Math.round(this.#canvasHolder.clientWidth));
    const height = Math.round(width * 9 / 16);
    const size = this.#renderer.getSize(new Vector2());
    if (size.x === width && size.y === height) return;
    this.#renderer.setSize(width, height, false);
    this.#camera.aspect = width / height;
    this.#camera.updateProjectionMatrix();
    this.#draw();
  }

  #draw(): void {
    if (!this.#renderer) return;
    const { yaw, pitch, distance } = this.#view;
    this.#camera.position.set(Math.sin(yaw) * Math.cos(pitch) * distance, 0.9 + Math.sin(pitch) * distance, Math.cos(yaw) * Math.cos(pitch) * distance);
    this.#camera.lookAt(0, 0.9, 0);
    this.#renderer.render(this.#scene, this.#camera);
  }

  /** Rebuild only when the model changed (render on demand). */
  update(model: BayModel, label: string): void {
    this.#caption.textContent = label;
    if (!this.#init()) return;
    this.#renderer!.domElement.setAttribute('aria-label', label);
    const key = `${model.mission}|${model.parts.map(p => p.id).join(',')}`;
    if (key === this.#key) return;
    this.#key = key;
    if (this.#vehicle) { this.#scene.remove(this.#vehicle); dispose(this.#vehicle); }
    this.#vehicle = buildVehicle(model);
    this.#scene.add(this.#vehicle);
    this.setExploded(this.#exploded);
    this.#resize();
  }

  /** Mesh and triangle counts for budget checks (MPES §10.3). */
  stats(): { meshes: number; triangles: number } {
    return vehicleStats(this.#vehicle);
  }
}

export function vehicleStats(vehicle: Object3D | null): { meshes: number; triangles: number } {
  let meshes = 0, triangles = 0;
  vehicle?.traverse(o => {
    if (o instanceof Mesh) {
      meshes++;
      const geometry = o.geometry as BufferGeometry;
      triangles += (geometry.index ? geometry.index.count : geometry.attributes.position!.count) / 3;
    }
  });
  return { meshes, triangles };
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

function dispose(root: Object3D): void {
  root.traverse(object => {
    if (object instanceof Mesh) {
      object.geometry.dispose();
      (Array.isArray(object.material) ? object.material : [object.material]).forEach(m => m.dispose());
    }
  });
}

function material(colour: number): MeshStandardMaterial {
  return new MeshStandardMaterial({ color: new Color(colour), roughness: 0.75, metalness: 0.05, flatShading: true });
}
function box(w: number, hgt: number, d: number, colour: number, x: number, y: number, z: number): Mesh {
  const mesh = new Mesh(new BoxGeometry(w, hgt, d), material(colour));
  mesh.position.set(x, y, z);
  return mesh;
}
function cylinder(r: number, hgt: number, colour: number, x: number, y: number, z: number, segments = 14, axis: 'x' | 'y' | 'z' = 'y'): Mesh {
  const mesh = new Mesh(new CylinderGeometry(r, r, hgt, segments), material(colour));
  if (axis === 'x') mesh.rotation.z = Math.PI / 2;
  if (axis === 'z') mesh.rotation.x = Math.PI / 2;
  mesh.position.set(x, y, z);
  return mesh;
}
function sphere(r: number, colour: number, x: number, y: number, z: number): Mesh {
  const mesh = new Mesh(new SphereGeometry(r, 8, 6), material(colour));
  mesh.position.set(x, y, z);
  return mesh;
}
/** A part group that moves outward by `out` in the exploded view. */
function part(name: string, out: [number, number, number], ...children: Object3D[]): Group {
  const g = new Group();
  g.name = name;
  for (const child of children) g.add(child);
  g.userData.base = new Vector3();
  g.userData.out = new Vector3(...out);
  return g;
}

export function buildVehicle(model: BayModel): Group {
  const hull = HULLS[model.mission];
  const L = hull.length, W = hull.width, Hh = hull.height, top = 0.6 + Hh;
  const vehicle = new Group();
  vehicle.add(
    box(L - hull.nose, Hh, W, PALETTE.HULL, -hull.nose / 2, 0.6 + Hh / 2, 0),
    box(hull.nose, Hh * 0.7, W * 0.96, PALETTE.HULL, L / 2 - hull.nose / 2, 0.6 + Hh * 0.35, 0),
  );
  if (model.mission === 'MINE') vehicle.add(box(L * 0.8, 0.3, W * 0.6, PALETTE.HULL, 0, 0.45, 0));
  for (let i = 0; i < hull.axles; i++) {
    const x = -L / 2 + 0.6 + (i * (L - 1.2)) / Math.max(1, hull.axles - 1);
    for (const z of [-W / 2, W / 2]) vehicle.add(cylinder(0.42, 0.32, PALETTE.TYRE, x, 0.42, z, 16, 'z'), cylinder(0.2, 0.34, PALETTE.METAL, x, 0.42, z, 8, 'z'));
  }
  if (model.mission === 'RECOVERY' && !model.parts.some(p => p.id === 'ACC-F' || p.id === 'ACC-A')) {
    vehicle.add(box(0.12, 0.12, 1.6, PALETTE.METAL, -L / 2 + 0.3, top + 0.7, 0));
  }

  const seen: Partial<Record<Category, number>> = {};
  for (const p of model.parts) {
    const i = (seen[p.category] = (seen[p.category] ?? 0) + 1) - 1;
    const effects = cardDef(p.id)?.effects ?? {};
    const v = p.id.charCodeAt(p.id.length - 1) - 65;
    const colour = PALETTE[p.category];
    switch (p.category) {
      case 'CAPACITY': {
        const size = 0.5 + (effects.CAP ?? 4) * 0.05;
        vehicle.add(part(p.id, [-0.7 - i * 0.2, 0.6, 0], box(size, 0.5 + (v === 3 ? 0.3 : 0), W * 0.8, colour, -L / 2 + 0.45 + i * (size + 0.06), top + 0.25 + (v === 3 ? 0.15 : 0), 0)));
        break;
      }
      case 'MOBILITY': {
        if (p.id === 'MOB-G') {
          vehicle.add(part(p.id, [0, 0, 0], ...[-1, 1].flatMap(side => [
            box(L - 0.4, 0.1, 0.36, colour, 0, 0.9, side * (W / 2 + 0.05)), box(L - 0.4, 0.1, 0.36, colour, 0, 0.02, side * (W / 2 + 0.05))])));
          vehicle.children.at(-1)!.userData.out = new Vector3(0, 0, 0);
          break;
        }
        const x = L / 2 - hull.nose - 0.45 - i * 0.55;
        const pieces: Object3D[] = [box(0.45, 0.35, W * 0.6, colour, x, top + 0.18, 0)];
        if (v === 4) pieces.push(cylinder(0.16, W * 0.7, colour, x, top + 0.5, 0, 10, 'z'));
        if (v === 3) for (const z of [-W / 2 + 0.25, W / 2 - 0.25]) pieces.push(cylinder(0.07, 0.45, PALETTE.METAL, x, 0.85, z, 6));
        vehicle.add(part(p.id, [0.9, 0.5, 0], ...pieces));
        break;
      }
      case 'FIREPOWER': {
        const fp = effects.FP ?? 2, x = -0.2, y = top + 0.25 + i * 0.5;
        const pieces: Object3D[] = [cylinder(0.5, 0.4, colour, x, y, 0, 12), cylinder(0.07, 0.6 + fp * 0.2, PALETTE.METAL, x + 0.5 + fp * 0.1 + 0.3, y + 0.05, 0, 8, 'x')];
        if (p.id === 'FP-G') pieces.push(cylinder(0.05, 0.8, PALETTE.METAL, x + 0.9, y + 0.05, 0.18, 8, 'x'));
        if ((effects.SA ?? 0) > 0) pieces.push(box(0.22, 0.16, 0.22, PALETTE.SA, x - 0.2, y + 0.3, 0));
        vehicle.add(part(p.id, [0, 1.2 + i * 0.3, 0], ...pieces));
        break;
      }
      case 'PROTECTION': {
        const thickness = 0.06 + (effects.PRO ?? 3) * 0.012, side = i % 2 ? 1 : -1, x = -L / 4 + Math.floor(i / 2) * (L / 3);
        vehicle.add(part(p.id, [0, 0, side * 0.9], box(L / 3, Hh * 0.7, thickness, colour, x, 0.6 + Hh * 0.45, side * (W / 2 + thickness / 2 + 0.02))));
        break;
      }
      case 'COMMS': {
        const height = 0.6 + (effects.COM ?? 50) * 0.007, x = -L / 2 + 0.35 + i * 0.3, z = -W / 2 + 0.25;
        vehicle.add(part(p.id, [-0.3, 0.9, -0.4], cylinder(0.035, height, colour, x, top + height / 2, z, 6), sphere(0.07, colour, x, top + height, z)));
        break;
      }
      case 'SA': {
        const height = 0.3 + (effects.SA ?? 1) * 0.15 + (v === 3 ? 0.5 : 0), x = L / 2 - hull.nose - 0.3 - i * 0.35, z = W / 2 - 0.3;
        vehicle.add(part(p.id, [0.3, 1, 0.4], cylinder(0.05, height, PALETTE.METAL, x, top + height / 2, z, 6), box(0.28, 0.2, 0.28, colour, x, top + height + 0.1, z)));
        break;
      }
      case 'ACCESSORIES': {
        if (p.id === 'ACC-B') vehicle.add(part(p.id, [-1, 0.3, 0], box(1.3, 0.7, W * 0.8, colour, -L / 2 - 1.1, 0.75, 0),
          cylinder(0.32, 0.25, PALETTE.TYRE, -L / 2 - 1.1, 0.32, W * 0.4, 12, 'z'), cylinder(0.32, 0.25, PALETTE.TYRE, -L / 2 - 1.1, 0.32, -W * 0.4, 12, 'z')));
        else if (p.id === 'ACC-C' || p.id === 'ACC-E') vehicle.add(part(p.id, [1, 0.3, 0], box(0.25, 0.5, W * 1.05, colour, L / 2 + 0.45, 0.35, 0),
          cylinder(0.25, W, PALETTE.METAL, L / 2 + 0.75, 0.25, 0, 10, 'z')));
        else if (p.id === 'ACC-F' || p.id === 'ACC-A') vehicle.add(part(p.id, [-0.8, 0.3, 0], cylinder(0.25, 0.5, colour, -L / 2 - 0.15, 0.9, 0, 12, 'z'),
          box(0.1, 0.1, 0.6, PALETTE.METAL, -L / 2 - 0.4, 0.9, 0)));
        else vehicle.add(part(p.id, [0, 0.8, 0.5], box(0.7, 0.4, 0.5, colour, -L / 4 + i * 0.3, top + 0.2, W / 2 - 0.35)));
        break;
      }
      case 'SE_PROCESS': break;
    }
  }
  for (const child of vehicle.children) if (child.userData.base) (child.userData.base as Vector3).copy(child.position);
  return vehicle;
}
