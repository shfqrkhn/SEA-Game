// Vehicle bay (MPES §10): one persistent renderer, render on demand only, never owns game state.
// M2 placeholder geometry; M5 replaces buildVehicle with the full stylised part set.
import {
  AmbientLight, BoxGeometry, Color, CylinderGeometry, DirectionalLight, Group, Mesh, MeshStandardMaterial,
  PerspectiveCamera, Scene, Vector2, WebGLRenderer,
} from 'three';
import type { Category, MissionId } from '../domain/data.ts';
import { h } from '../ui/dom.ts';

export interface BayModel {
  readonly mission: MissionId;
  readonly parts: readonly { readonly id: string; readonly category: Category }[];
}

export class VehicleBay {
  readonly element: HTMLElement;
  readonly #canvasHolder: HTMLElement;
  readonly #caption: HTMLElement;
  #renderer: WebGLRenderer | null = null;
  #scene = new Scene();
  #camera = new PerspectiveCamera(35, 16 / 9, 0.1, 100);
  #vehicle: Group | null = null;
  #key = '';
  #observer: ResizeObserver | null = null;
  #available: boolean | null = null;
  #unavailableText: string;

  constructor(unavailableText: string) {
    this.#unavailableText = unavailableText;
    this.#canvasHolder = h('div', { class: 'bay-canvas' });
    this.#caption = h('figcaption', { class: 'muted small' });
    this.element = h('figure', { class: 'bay', id: 'vehicle-bay' }, this.#canvasHolder, this.#caption);
  }

  get available(): boolean { return this.#available === true; }

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
      this.#canvasHolder.appendChild(canvas);
      this.#renderer = renderer;
      this.#scene.add(new AmbientLight(0xffffff, 1.2));
      const sun = new DirectionalLight(0xffffff, 2.2);
      sun.position.set(4, 6, 5);
      this.#scene.add(sun);
      this.#camera.position.set(5.5, 3.2, 6.5);
      this.#camera.lookAt(0, 0.6, 0);
      canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); this.#showUnavailable(); });
      canvas.addEventListener('webglcontextrestored', () => { this.#canvasHolder.classList.remove('unavailable'); this.#key = ''; });
      this.#observer = new ResizeObserver(() => this.#resize());
      this.#observer.observe(this.#canvasHolder);
      this.#available = true;
    } catch {
      this.#showUnavailable();
      this.#available = false;
    }
    return this.#available;
  }

  #showUnavailable(): void {
    this.#canvasHolder.classList.add('unavailable');
    this.#canvasHolder.textContent = this.#unavailableText;
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
    this.#renderer?.render(this.#scene, this.#camera);
  }

  /** Rebuild and draw only when the model changed (render on demand). */
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
    this.#resize();
    this.#draw();
  }
}

function dispose(group: Group): void {
  group.traverse(object => {
    if (object instanceof Mesh) {
      object.geometry.dispose();
      (Array.isArray(object.material) ? object.material : [object.material]).forEach(m => m.dispose());
    }
  });
}

const PART_COLOURS: Record<Category, number> = {
  CAPACITY: 0x8a7a5c, MOBILITY: 0x3c4a52, FIREPOWER: 0x5a4636, PROTECTION: 0x6b7a5a, COMMS: 0x7c7c86,
  SA: 0x4d5d6e, ACCESSORIES: 0x9a6a3a, SE_PROCESS: 0x6c6c6c,
};

/** Placeholder: a hull with wheels and one block per installed part, grouped by category. */
function buildVehicle(model: BayModel): Group {
  const group = new Group();
  const paint = new MeshStandardMaterial({ color: new Color(0x6f7a5c), roughness: 0.8 });
  const hull = new Mesh(new BoxGeometry(4.2, 1.1, 2.0), paint);
  hull.position.y = 0.95;
  group.add(hull);
  const tyre = new MeshStandardMaterial({ color: 0x222222, roughness: 0.95 });
  for (const x of [-1.4, 0, 1.4]) for (const z of [-1.05, 1.05]) {
    const wheel = new Mesh(new CylinderGeometry(0.42, 0.42, 0.3, 20), tyre);
    wheel.rotation.x = Math.PI / 2;
    wheel.position.set(x, 0.42, z);
    group.add(wheel);
  }
  model.parts.filter(p => p.category !== 'SE_PROCESS').forEach((part, i) => {
    const block = new Mesh(new BoxGeometry(0.5, 0.3, 0.5), new MeshStandardMaterial({ color: PART_COLOURS[part.category], roughness: 0.7 }));
    block.position.set(-1.6 + (i % 6) * 0.64, 1.65 + Math.floor(i / 6) * 0.32, (i % 2 ? 0.45 : -0.45));
    group.add(block);
  });
  return group;
}
