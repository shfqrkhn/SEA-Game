// Real-time vehicle showcase (MPES §10): the embedded glTF model on a slowly turning stage the player can drag.
// One renderer per page; it draws only while visible, in one paced animation frame (at most 30 a second and at
// most half the machine, MPES §10.3), and never turns by itself
// when the player prefers reduced motion. Without WebGL the caller shows the still renders instead.
import {
  ACESFilmicToneMapping, Box3, Color, DirectionalLight, Group, Mesh, MeshStandardMaterial, type Object3D,
  PCFShadowMap, PerspectiveCamera, PlaneGeometry, PMREMGenerator, Scene, ShadowMaterial, SRGBColorSpace,
  Timer, Vector3, WebGLRenderer,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { vehicleGlb } from './glb.ts';
import { FramePacer } from './pace.ts';

/** Seconds per full turn when the stage turns by itself. */
export const TURN_SECONDS = 40;
const UP = new Vector3(0, 1, 0);

let packed: Promise<ArrayBuffer | null> | null = null;
const libraries = new Map<string, Promise<Group | null>>();
const preparing = new Set<string>();

/** Base64 to bytes: the browser's own decoder where it has one (a quarter of the time), else atob. */
function base64Bytes(text: string): Uint8Array<ArrayBuffer> {
  const native = (Uint8Array as unknown as { fromBase64?: (s: string) => Uint8Array<ArrayBuffer> }).fromBase64;
  if (native) return native(text);
  const binary = atob(text);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

/** The embedded model file (every vehicle): base64 of a raw-deflated GLB in an inert script block, inflated once. */
function embedded(): Promise<ArrayBuffer | null> {
  packed ??= (async () => {
    const text = document.getElementById('sea-models')?.textContent?.trim();
    if (!text) return null;
    const bytes = base64Bytes(text);
    return new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw'))).arrayBuffer();
  })().catch(() => null);
  return packed;
}

/**
 * One vehicle's model: the group named by its file stem, holding its base and every part. Only that vehicle's
 * geometry is parsed (vehicleGlb), the first time it is shown; it is then reused.
 */
export function loadVehicle(vehicle: string): Promise<Group | null> {
  let library = libraries.get(vehicle);
  if (!library) {
    library = (async () => {
      const file = await embedded();
      const glb = file && vehicleGlb(file, vehicle);
      if (!glb) return null;
      const scene = (await new GLTFLoader().parseAsync(glb, '')).scene;
      performance.mark(`sea-model:${vehicle}`);
      return scene;
    })().catch(() => null);
    libraries.set(vehicle, library);
  }
  return library;
}

/**
 * Decodes and parses a vehicle's model in idle time, so the tracker opens with it ready (MPES §10.3). Called once the
 * team confirms its vehicle in planning; nothing happens without WebGL, where the tracker shows stills.
 */
export function prepareVehicle(vehicle: string): void {
  if (libraries.has(vehicle) || preparing.has(vehicle)) return;
  preparing.add(vehicle);
  const run = () => { if (webglAvailable()) void loadVehicle(vehicle); };
  // Idle time, but within two seconds even on a busy page.
  if ('requestIdleCallback' in globalThis) requestIdleCallback(run, { timeout: 2000 }); else setTimeout(run, 200);
}

/** Software renderers draw on the CPU, which a turning model would saturate (no GPU, remote desktop). */
const SOFTWARE = /swiftshader|llvmpipe|softpipe|basic render|software/i;

/** WebGL 2 on a hardware GPU. Without one the showcase shows its still renders (performance over looks). */
export function webglAvailable(): boolean {
  try {
    const gl = document.createElement('canvas').getContext('webgl2');
    if (!gl) return false;
    const info = gl.getExtension('WEBGL_debug_renderer_info');
    const renderer = String(gl.getParameter(info ? info.UNMASKED_RENDERER_WEBGL : gl.RENDERER));
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return !SOFTWARE.test(renderer);
  } catch {
    return false;
  }
}

/** The layer a vehicle's child node draws: 'base' or a part card ID (node extras; three.js de-duplicates names). */
export function layerOf(node: Object3D): string {
  return String(node.userData['layer'] ?? node.name);
}

/** Part card IDs in a vehicle group, and the mount slot each fills (node extras). */
export function partSlots(vehicle: Object3D): Map<string, string> {
  const slots = new Map<string, string>();
  for (const node of vehicle.children) if (layerOf(node) !== 'base') slots.set(layerOf(node), String(node.userData['slot'] ?? layerOf(node)));
  return slots;
}

export class ModelStage {
  readonly canvas: HTMLCanvasElement;
  #renderer: WebGLRenderer;
  #scene = new Scene();
  #camera = new PerspectiveCamera(30, 16 / 9, 0.1, 200);
  #controls: OrbitControls;
  #timer = new Timer();
  #vehicle: Object3D | null = null;
  #frame = 0;
  #pacer = new FramePacer();
  #dirty = true;
  #visible = true;
  #observer: IntersectionObserver;
  #resize: ResizeObserver;
  #motion = matchMedia('(prefers-reduced-motion: reduce)');
  /** Called with the camera's azimuth (radians) whenever the view turns. */
  onTurn: ((azimuth: number) => void) | null = null;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'showcase-canvas';
    this.#renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
    this.#renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    this.#renderer.outputColorSpace = SRGBColorSpace;
    this.#renderer.toneMapping = ACESFilmicToneMapping;
    this.#renderer.toneMappingExposure = 0.85;
    this.#renderer.shadowMap.enabled = true;
    this.#renderer.shadowMap.type = PCFShadowMap;
    const pmrem = new PMREMGenerator(this.#renderer);
    // A 64 px environment lights matte paint as well as the default 256 px, with a sixteenth of the pixels to render and blur.
    this.#scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04, 0.1, 100, { size: 64 }).texture;
    pmrem.dispose();
    this.#scene.background = null;
    const sun = new DirectionalLight(new Color(1, 0.97, 0.92), 1.6);
    sun.position.set(6, 12, 5);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    Object.assign(sun.shadow.camera, { left: -6, right: 6, top: 6, bottom: -6, near: 1, far: 30 });
    sun.shadow.bias = -0.0005;
    sun.shadow.radius = 4;
    this.#scene.add(sun);
    const floor = new Mesh(new PlaneGeometry(30, 30), new ShadowMaterial({ opacity: 0.35 }));
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.#scene.add(floor);
    this.#controls = new OrbitControls(this.#camera, this.canvas);
    Object.assign(this.#controls, {
      enableDamping: true, enablePan: false, enableZoom: false, autoRotate: !this.#motion.matches,
      autoRotateSpeed: 60 / TURN_SECONDS, minPolarAngle: 0.6, maxPolarAngle: 1.45,
    });
    this.#controls.addEventListener('change', () => this.#invalidate());
    this.#controls.addEventListener('start', () => this.#loop());
    this.#motion.addEventListener('change', () => { this.turning = !this.#motion.matches; });
    this.#observer = new IntersectionObserver(([entry]) => { this.#visible = !!entry?.isIntersecting; this.#loop(); });
    this.#observer.observe(this.canvas);
    this.#resize = new ResizeObserver(() => this.#fit());
    this.#resize.observe(this.canvas);
    document.addEventListener('visibilitychange', () => this.#loop());
  }

  /** Whether the stage turns by itself (off under reduced motion until the player turns it on). */
  get turning(): boolean { return this.#controls.autoRotate; }
  set turning(on: boolean) { this.#controls.autoRotate = on; this.#loop(); }

  /** Turns the vehicle by `radians` about the vertical axis (keyboard and button control). */
  turn(radians: number): void {
    const offset = this.#camera.position.clone().sub(this.#controls.target).applyAxisAngle(UP, radians);
    this.#camera.position.copy(this.#controls.target).add(offset);
    this.#controls.update();
  }

  /** Shows one vehicle with the given part nodes; returns false if the library has no such vehicle. */
  show(lib: Group, vehicle: string, parts: readonly string[]): boolean {
    const source = lib.getObjectByName(vehicle);
    if (!source) return false;
    if (this.#vehicle?.name !== vehicle) {
      if (this.#vehicle) this.#scene.remove(this.#vehicle);
      this.#vehicle = source.clone();
      this.#vehicle.traverse(o => {
        if (o instanceof Mesh) {
          o.castShadow = true;
          const m = o.material as MeshStandardMaterial;
          m.envMapIntensity = 0.9;
        }
      });
      this.#scene.add(this.#vehicle);
      this.#frameCamera();
    }
    const shown = new Set(parts);
    for (const node of this.#vehicle.children) node.visible = layerOf(node) === 'base' || shown.has(layerOf(node));
    this.#invalidate();
    return true;
  }

  #frameCamera(): void {
    const base = this.#vehicle?.children.find(n => layerOf(n) === 'base');
    if (!base) return;
    const box = new Box3().setFromObject(base), centre = box.getCenter(new Vector3()), size = box.getSize(new Vector3());
    const radius = size.length() / 2;
    this.#controls.target.set(centre.x, centre.y * 0.8, centre.z);
    const distance = radius / Math.sin((this.#camera.fov * Math.PI) / 360) * 0.62;
    this.#camera.position.set(centre.x + distance * 0.62, centre.y + distance * 0.32, centre.z + distance * 0.72);
    this.#controls.update();
  }

  #fit(): void {
    const { clientWidth: w, clientHeight: h } = this.canvas;
    if (!w || !h) return;
    this.#renderer.setSize(w, h, false);
    this.#camera.aspect = w / h;
    this.#camera.updateProjectionMatrix();
    this.#invalidate();
  }

  /** Asks for a redraw in the next paced frame; drags and key turns never draw synchronously. */
  #invalidate(): void {
    this.#dirty = true;
    this.#loop();
  }

  #draw(): void {
    this.#dirty = false;
    this.#renderer.render(this.#scene, this.#camera);
    this.onTurn?.(this.#controls.getAzimuthalAngle());
  }

  #stop(): void {
    cancelAnimationFrame(this.#frame);
    this.#frame = 0;
    this.#pacer.pause();
  }

  /** Animates only while the stage is visible and turning or waiting to redraw; the pacer picks the frames that draw. */
  #loop(): void {
    const running = this.#visible && document.visibilityState === 'visible' && this.canvas.isConnected;
    if (!running) { this.#stop(); return; }
    if (this.#frame) return;
    this.#timer.update();
    const tick = (now: number) => {
      this.#frame = requestAnimationFrame(tick);
      if (!this.#pacer.due(now)) return;
      this.#timer.update(now);
      const moved = this.#controls.update(this.#timer.getDelta());
      if (this.#dirty) { this.#draw(); this.#pacer.drew(now); }
      if (!moved && !this.#controls.autoRotate && !this.#dirty) this.#stop();
    };
    this.#frame = requestAnimationFrame(tick);
  }

  /** Restarts the loop after the canvas is re-attached to the page. */
  attached(): void {
    this.#fit();
    this.#loop();
  }

  dispose(): void {
    cancelAnimationFrame(this.#frame);
    this.#observer.disconnect();
    this.#resize.disconnect();
    this.#controls.dispose();
    this.#renderer.dispose();
  }
}
