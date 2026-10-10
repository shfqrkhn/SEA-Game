// Vehicle bay (MPES §10): one persistent renderer, render on demand only, never owns game state.
// Studio look: image-based room lighting, filmic tone mapping, one soft-shadowed key light and a
// contact shadow under the vehicle. Geometry comes from vehicles.ts (hulls) and parts.ts (one part per card).
import {
  ACESFilmicToneMapping, Box3, CanvasTexture, DirectionalLight, Group, HemisphereLight, Mesh, MeshBasicMaterial,
  Object3D, PCFSoftShadowMap, PerspectiveCamera, PlaneGeometry, PMREMGenerator, Scene, ShadowMaterial, Sphere,
  SRGBColorSpace, Vector2, Vector3, WebGLRenderer, type BufferGeometry,
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import type { Category, MissionId } from '../domain/data.ts';
import { h } from '../ui/dom.ts';
import { buildPart } from './parts.ts';
import { buildMission } from './vehicles.ts';

export interface BayModel {
  readonly mission: MissionId;
  readonly parts: readonly { readonly id: string; readonly category: Category }[];
}
export interface BayText {
  readonly unavailable: string;
  readonly hint: string;
  /** Shown instead of the canvas when WebGL is unavailable (for example the 2D vehicle illustration). */
  readonly fallback?: () => Node;
}

const DEFAULT_VIEW = { yaw: 0.95, pitch: 0.2, zoom: 0.86 };
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export class VehicleBay {
  readonly element: HTMLElement;
  readonly #canvasHolder: HTMLElement;
  readonly #caption: HTMLElement;
  #renderer: WebGLRenderer | null = null;
  #scene = new Scene();
  #camera = new PerspectiveCamera(30, 16 / 9, 0.1, 200);
  #vehicle: Group | null = null;
  #focus = new Sphere(new Vector3(0, 1.2, 0), 5);
  #key = '';
  #available: boolean | null = null;
  #view = { ...DEFAULT_VIEW };
  #text: BayText;
  #sun: DirectionalLight | null = null;
  #composer: EffectComposer | null = null;

  constructor(text: BayText) {
    this.#text = text;
    this.#canvasHolder = h('div', { class: 'bay-canvas' });
    this.#caption = h('figcaption', { class: 'muted small' });
    // No buttons: drag or arrow keys rotate, the wheel or +/- zoom, double-click resets (MPES §10.2).
    this.element = h('figure', { class: 'bay', id: 'vehicle-bay' }, this.#canvasHolder, this.#caption);
  }

  get available(): boolean { return this.#available === true; }

  /** Update labels after a language change without rebuilding geometry. */
  setText(text: BayText): void {
    this.#text = text;
    if (this.#renderer) this.#renderer.domElement.title = text.hint;
    if (this.#fallback) this.#showUnavailable();
  }

  #init(): boolean {
    if (this.#available !== null) return this.#available;
    try {
      // Probe quietly first: a missing WebGL must not log errors (MPES §9).
      const canvas = document.createElement('canvas');
      const attributes = { antialias: true, alpha: true, powerPreference: 'high-performance' } as const;
      const context = (canvas.getContext('webgl2', attributes) ?? canvas.getContext('webgl', attributes)) as WebGLRenderingContext | null;
      if (!context) throw new Error('no WebGL');
      const renderer = new WebGLRenderer({ canvas, context, ...attributes });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.outputColorSpace = SRGBColorSpace;
      renderer.toneMapping = ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.92;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = PCFSoftShadowMap;
      canvas.setAttribute('role', 'img');
      canvas.tabIndex = 0;
      canvas.title = this.#text.hint;
      this.#canvasHolder.appendChild(canvas);
      this.#renderer = renderer;
      this.#stage(renderer);
      // Ground-truth ambient occlusion adds contact darkening in seams and under parts.
      const composer = new EffectComposer(renderer);
      composer.addPass(new RenderPass(this.#scene, this.#camera));
      const ao = new GTAOPass(this.#scene, this.#camera, 512, 288);
      ao.updateGtaoMaterial({ radius: 0.8, distanceExponent: 1.4, thickness: 2, scale: 1.6, samples: 16 });
      ao.blendIntensity = 1;
      composer.addPass(ao);
      composer.addPass(new OutputPass());
      this.#composer = composer;
      this.#bindControls(canvas);
      // Context loss keeps the canvas (hidden) so the restored context can draw again (MPES §9).
      canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); this.#showUnavailable(); });
      canvas.addEventListener('webglcontextrestored', () => this.#restore());
      new ResizeObserver(() => this.#resize()).observe(this.#canvasHolder);
      this.#available = true;
    } catch {
      this.#showUnavailable();
      this.#available = false;
    }
    return this.#available;
  }

  /** Image-based room lighting. It lives in a GPU render target, so it is rebuilt after a context restore. */
  #environment(renderer: WebGLRenderer): void {
    const pmrem = new PMREMGenerator(renderer);
    this.#scene.environment?.dispose();
    this.#scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.035).texture;
    this.#scene.environmentIntensity = 0.55;
    pmrem.dispose();
  }

  /** Studio: room environment for reflections, key + sky light, shadow catcher and contact shadow. */
  #stage(renderer: WebGLRenderer): void {
    this.#environment(renderer);
    this.#scene.add(new HemisphereLight(0xf4f1e8, 0x5b5a50, 0.55));
    const sun = new DirectionalLight(0xfff3e0, 3.2);
    sun.position.set(4, 14, 5);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.02;
    sun.shadow.radius = 4;
    Object.assign(sun.shadow.camera, { left: -7, right: 7, top: 7, bottom: -7, near: 1, far: 40 });
    this.#scene.add(sun, sun.target);
    this.#sun = sun;
    const catcher = new Mesh(new PlaneGeometry(40, 40), new ShadowMaterial({ opacity: 0.32 }));
    catcher.rotation.x = -Math.PI / 2;
    catcher.receiveShadow = true;
    this.#scene.add(catcher);
    // Contact shadow: soft radial gradient drawn into a canvas texture (no image files, no network).
    const size = 256, canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      g.addColorStop(0, 'rgba(0,0,0,0.55)'); g.addColorStop(0.55, 'rgba(0,0,0,0.25)'); g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, size, size);
      const contact = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: new CanvasTexture(canvas), transparent: true, depthWrite: false }));
      contact.name = 'contact';
      contact.rotation.x = -Math.PI / 2;
      contact.position.y = 0.005;
      this.#scene.add(contact);
    }
  }

  #bindControls(canvas: HTMLCanvasElement): void {
    let last: { x: number; y: number } | null = null;
    canvas.addEventListener('pointerdown', e => { last = { x: e.clientX, y: e.clientY }; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointermove', e => {
      if (!last) return;
      this.#view.yaw += (e.clientX - last.x) * 0.008;
      this.#view.pitch = clamp(this.#view.pitch + (e.clientY - last.y) * 0.006, 0.02, 1.1);
      last = { x: e.clientX, y: e.clientY };
      this.#draw();
    });
    const stop = () => { last = null; };
    canvas.addEventListener('pointerup', stop);
    canvas.addEventListener('dblclick', () => this.resetView());
    canvas.addEventListener('pointercancel', stop);
    canvas.addEventListener('wheel', e => { e.preventDefault(); this.#view.zoom = clamp(this.#view.zoom * (e.deltaY > 0 ? 1.08 : 0.93), 0.55, 1.6); this.#draw(); }, { passive: false });
    canvas.addEventListener('keydown', e => {
      const actions: Record<string, () => void> = {
        ArrowLeft: () => { this.#view.yaw -= 0.2; }, ArrowRight: () => { this.#view.yaw += 0.2; },
        ArrowUp: () => { this.#view.pitch = clamp(this.#view.pitch + 0.08, 0.02, 1.1); },
        ArrowDown: () => { this.#view.pitch = clamp(this.#view.pitch - 0.08, 0.02, 1.1); },
        '+': () => { this.#view.zoom = clamp(this.#view.zoom * 0.9, 0.55, 1.6); },
        '-': () => { this.#view.zoom = clamp(this.#view.zoom * 1.1, 0.55, 1.6); },
      };
      const action = actions[e.key];
      if (!action) return;
      e.preventDefault();
      action();
      this.#draw();
    });
  }

  #showUnavailable(): void {
    const canvas = this.#renderer?.domElement;
    if (canvas) canvas.hidden = true;
    this.#fallback?.remove();
    this.#fallback = this.#text.fallback
      ? h('div', { class: 'bay-fallback' }, this.#text.fallback(), h('span', { class: 'small muted', text: this.#text.unavailable }))
      : h('span', { class: 'bay-fallback', text: this.#text.unavailable });
    this.#canvasHolder.classList.add('unavailable');
    if (this.#text.fallback) this.#canvasHolder.classList.add('with-art');
    this.#canvasHolder.append(this.#fallback);
  }
  #fallback: HTMLElement | null = null;

  #restore(): void {
    if (!this.#renderer) return;
    this.#fallback?.remove();
    this.#fallback = null;
    this.#canvasHolder.classList.remove('unavailable', 'with-art');
    this.#renderer.domElement.hidden = false;
    this.#environment(this.#renderer);
    this.#draw();
  }

  rotate(delta: number): void { this.#view.yaw += delta; this.#draw(); }
  resetView(): void { this.#view = { ...DEFAULT_VIEW }; this.#draw(); }

  #resize(): void {
    if (!this.#renderer) return;
    const width = Math.max(1, Math.round(this.#canvasHolder.clientWidth));
    // Match the box the CSS gives us (aspect-ratio), so the image is never stretched.
    const height = Math.max(1, Math.round(this.#canvasHolder.clientHeight || width * 9 / 16));
    const size = this.#renderer.getSize(new Vector2());
    if (size.x === width && size.y === height) return;
    this.#renderer.setSize(width, height, false);
    this.#composer?.setSize(width, height);
    this.#camera.aspect = width / height;
    this.#camera.updateProjectionMatrix();
    this.#draw();
  }

  #draw(): void {
    if (!this.#renderer) return;
    const { yaw, pitch, zoom } = this.#view;
    const halfFov = (this.#camera.fov * Math.PI) / 360;
    const fit = (this.#focus.radius / Math.sin(halfFov)) * zoom * (this.#camera.aspect < 1.4 ? 1.2 : 1) * 0.78;
    const c = this.#focus.center;
    this.#camera.position.set(c.x + Math.sin(yaw) * Math.cos(pitch) * fit, c.y + Math.sin(pitch) * fit, c.z + Math.cos(yaw) * Math.cos(pitch) * fit);
    this.#camera.lookAt(c);
    // Progressive quality: draw a fast frame now; add ambient occlusion once the view settles.
    this.#renderer.render(this.#scene, this.#camera);
    if (this.#refine !== null) clearTimeout(this.#refine);
    this.#refine = this.#composer ? setTimeout(() => { this.#refine = null; this.#composer?.render(); }, 140) : null;
  }
  #refine: ReturnType<typeof setTimeout> | null = null;
  #pending: { model: BayModel; label: string } | null = null;

  /** Rebuild only when the model changed (render on demand). */
  update(model: BayModel, label: string): void {
    this.#caption.textContent = label;
    // First use: let the page paint and become interactive, then start WebGL (about half a second).
    if (this.#available === null) {
      const first = this.#pending === null;
      this.#pending = { model, label };
      if (first) setTimeout(() => { const p = this.#pending!; this.#pending = null; this.#init(); this.update(p.model, p.label); }, 30);
      return;
    }
    if (!this.#available) return;
    this.#renderer!.domElement.setAttribute('aria-label', label);
    const key = `${model.mission}|${model.parts.map(p => p.id).join(',')}`;
    if (key === this.#key) return;
    this.#key = key;
    if (this.#vehicle) { this.#scene.remove(this.#vehicle); disposeGeometry(this.#vehicle); }
    this.#vehicle = buildVehicle(model);
    this.#scene.add(this.#vehicle);
    const box = new Box3().setFromObject(this.#vehicle);
    box.getBoundingSphere(this.#focus);
    const contact = this.#scene.getObjectByName('contact');
    if (contact) { const s = box.getSize(new Vector3()); contact.scale.set(s.x * 1.25, s.z * 1.6, 1); contact.position.x = (box.min.x + box.max.x) / 2; }
    this.#resize();
    this.#draw();
  }

  /** Mesh and triangle counts for budget checks (MPES §10.3). */
  stats(): { meshes: number; triangles: number } { return vehicleStats(this.#vehicle); }
  get sun(): DirectionalLight | null { return this.#sun; }
}

/** Hull plus one part group per card. */
export function buildVehicle(model: BayModel): Group {
  const { body, mounts } = buildMission(model.mission);
  const vehicle = new Group();
  vehicle.add(body);
  const seen: Partial<Record<Category, number>> = {};
  for (const p of model.parts) {
    const index = (seen[p.category] = (seen[p.category] ?? 0) + 1) - 1;
    const built = buildPart(p.id, p.category, mounts, index);
    if (!built) continue;
    vehicle.add(built);
  }
  return vehicle;
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

function disposeGeometry(root: Object3D): void {
  root.traverse(object => { if (object instanceof Mesh) object.geometry.dispose(); });
}
