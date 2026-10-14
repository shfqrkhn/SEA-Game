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
import { distanceAt, extentAt, fitTable, zoomed, type FitTable } from './frame.ts';
import { FramePacer, SCALES, nextTier } from './pace.ts';

/** Seconds per full turn when the stage turns by itself. */
export const TURN_SECONDS = 40;
const UP = new Vector3(0, 1, 0);
/** The opening view: three-quarter front, a little above (MPES §10.5 camera). */
const OPENING = new Vector3(0.62, 0.32, 0.72).normalize();
/** How far the player can drag the view up and down (polar angle from straight up). */
const POLAR_MIN = 0.6, POLAR_MAX = 1.45;

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
  /** A change the player asked for (a purchase, turn, zoom or resize) waiting to be drawn: it skips the pacer's wait. */
  #urgent = false;
  /** Index into SCALES: the render resolution this machine can draw in time (adaptive tiers). */
  #tier = 0;
  #visible = true;
  #observer: IntersectionObserver;
  #resize: ResizeObserver;
  #motion = matchMedia('(prefers-reduced-motion: reduce)');
  /** The bounds of the vehicle as fitted, the distance that frames them, and the player's zoom (a multiple of it). */
  #kit = new Box3();
  #fitted: FitTable = { polars: [0], distances: [1] };
  /** The aspect the fitted distance was found for; a showcase update re-attaches the canvas at the same size. */
  #fittedAspect = 0;
  #zoom = 1;
  /** Called after every draw with the camera's azimuth (radians), how far the kit reaches from the frame centre
   * (1 = the frame edge) and the zoom. */
  onView: ((azimuth: number, extent: number, zoom: number) => void) | null = null;
  /** Called after each draw has reached the canvas: what the player sees now matches the last `show`. */
  onDraw: (() => void) | null = null;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'showcase-canvas';
    this.#renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
    this.#renderer.setPixelRatio(this.#ratio());
    this.#renderer.outputColorSpace = SRGBColorSpace;
    this.#renderer.toneMapping = ACESFilmicToneMapping;
    this.#renderer.toneMappingExposure = 0.85;
    this.#renderer.shadowMap.enabled = true;
    this.#renderer.shadowMap.type = PCFShadowMap;
    // Baked shadows: the sun and the vehicle stand still while the camera orbits, so the shadow map only changes with the
    // fitted parts; drawing it every frame doubled each turning draw (G3). show() asks for it again.
    this.#renderer.shadowMap.autoUpdate = false;
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
    // Rim light from behind the vehicle as seen from the camera, whichever way it turns: a cool, unshadowed edge
    // that lifts each part's outline off the dark stage and off the parts behind it (MPES §10.5 legibility).
    const rim = new DirectionalLight(new Color(0.85, 0.9, 1), 0.5);
    rim.position.set(6, 5, -18);
    rim.target.position.set(0, 0, -10);
    this.#camera.add(rim, rim.target);
    this.#scene.add(this.#camera);
    const floor = new Mesh(new PlaneGeometry(30, 30), new ShadowMaterial({ opacity: 0.35 }));
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.#scene.add(floor);
    this.#controls = new OrbitControls(this.#camera, this.canvas);
    Object.assign(this.#controls, {
      enableDamping: true, enablePan: false, enableZoom: false, autoRotate: !this.#motion.matches,
      autoRotateSpeed: 60 / TURN_SECONDS, minPolarAngle: POLAR_MIN, maxPolarAngle: POLAR_MAX,
    });
    this.#controls.addEventListener('change', () => this.#invalidate());
    this.#controls.addEventListener('start', () => this.#loop());
    this.#motion.addEventListener('change', () => { this.turning = !this.#motion.matches; });
    this.#observer = new IntersectionObserver(([entry]) => { this.#visible = !!entry?.isIntersecting; this.#loop(); });
    this.#observer.observe(this.canvas);
    this.#resize = new ResizeObserver(() => this.#size());
    this.#resize.observe(this.canvas);
    document.addEventListener('visibilitychange', () => this.#loop());
  }

  /** Whether the stage turns by itself (off under reduced motion until the player turns it on). */
  get turning(): boolean { return this.#controls.autoRotate; }
  set turning(on: boolean) { this.#controls.autoRotate = on; if (!on) this.#halt(); this.#loop(); }

  /** Pause stops the model where it is: the controls' easing would carry the turn on, for seconds on a slow
   *  renderer. One update without damping clears what is left of it; the camera stays where it was. */
  #halt(): void {
    const at = this.#camera.position.clone();
    this.#controls.enableDamping = false;
    this.#controls.update();
    this.#camera.position.copy(at);
    this.#controls.update();
    this.#controls.enableDamping = true;
    this.#invalidate();
    this.#report();
  }

  /** Turns the vehicle by `radians` about the vertical axis (keyboard and button control). */
  turn(radians: number): void {
    const offset = this.#camera.position.clone().sub(this.#controls.target).applyAxisAngle(UP, radians);
    this.#camera.position.copy(this.#controls.target).add(offset);
    this.#controls.update();
    this.#invalidate(true);
    this.#report();
  }

  /** Zooms in (`+1`) or out (`-1`) one step, within the limits (MPES §10.2). */
  zoom(press: 1 | -1): void {
    this.#zoom = zoomed(this.#zoom, press);
    this.#place();
    this.#invalidate(true);
  }

  /**
   * Builds the vehicle and compiles every shader it can need, each part's material whether fitted or not, without
   * blocking the page where the browser compiles in parallel (KHR_parallel_shader_compile). The first draw and the
   * first draw of each purchase then have nothing left to compile (G3 profile: the first draw was one task of 0.3 to
   * 2.7 s on a software renderer). Draws nothing: the canvas is not on the page yet. False if there is no such vehicle.
   */
  async prepare(lib: Group, vehicle: string): Promise<boolean> {
    if (!this.show(lib, vehicle, [])) return false;
    await this.#renderer.compileAsync(this.#scene, this.#camera);
    // Then every part, without delaying the first draw. three.js compiles only what is visible, but only the call itself
    // needs the parts shown: the browser finishes compiling them in parallel after they are hidden again.
    const parts = this.#vehicle!.children.filter(node => !node.visible);
    for (const node of parts) node.visible = true;
    void this.#renderer.compileAsync(this.#scene, this.#camera).catch(() => undefined);
    for (const node of parts) node.visible = false;
    return true;
  }

  /** Shows one vehicle with the given part nodes; returns false if the library has no such vehicle. */
  show(lib: Group, vehicle: string, parts: readonly string[]): boolean {
    const source = lib.getObjectByName(vehicle);
    if (!source) return false;
    const fresh = this.#vehicle?.name !== vehicle;
    if (fresh) {
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
    }
    const shown = new Set(parts);
    for (const node of this.#vehicle!.children) node.visible = layerOf(node) === 'base' || shown.has(layerOf(node));
    this.#renderer.shadowMap.needsUpdate = true;
    this.#frameCamera(fresh);
    this.#invalidate(true);
    return true;
  }

  /**
   * Frames the vehicle as fitted, so every installed part stays in view at every turn and drag height however fully it
   * is kitted out (the whole catalogue spans 13 m, so framing every possible part would leave a bare vehicle tiny).
   * A new vehicle opens on the three-quarter view at full frame; a purchase keeps the player's view and zoom.
   */
  #frameCamera(fresh: boolean): void {
    if (!this.#vehicle) return;
    const kit = new Box3();
    for (const node of this.#vehicle.children) if (node.visible) kit.union(new Box3().setFromObject(node));
    if (!fresh && kit.equals(this.#kit)) { this.#invalidate(); return; }
    const offset = this.#camera.position.clone().sub(this.#controls.target);
    this.#kit.copy(kit);
    this.#kit.getCenter(this.#controls.target);
    if (fresh) { offset.copy(OPENING); this.#zoom = 1; }
    this.#camera.position.copy(this.#controls.target).add(offset);
    this.#refit();
  }

  /** The distance that frames the kit at this aspect, then the camera placed at the player's zoom of it. */
  #refit(): void {
    if (!this.#vehicle) return;
    this.#fittedAspect = this.#camera.aspect;
    this.#fitted = fitTable(this.#kit, this.#controls.target, POLAR_MIN, POLAR_MAX, this.#camera.fov, this.#camera.aspect);
    this.#place();
  }

  /** Moves the camera along its current direction to the zoomed distance. */
  #place(): void {
    this.#distance();
    this.#controls.update();
    this.#invalidate();
    this.#report();
  }

  /** Sets the camera's distance for its height (a drag up needs it farther back) at the player's zoom. */
  #distance(): void {
    const offset = this.#camera.position.clone().sub(this.#controls.target);
    if (offset.lengthSq() === 0) offset.copy(OPENING);
    const polar = Math.acos(Math.min(1, Math.max(-1, offset.y / offset.length())));
    this.#camera.position.copy(this.#controls.target).add(offset.setLength(distanceAt(this.#fitted, polar) * this.#zoom));
  }

  #size(): void {
    const { clientWidth: w, clientHeight: h } = this.canvas;
    if (!w || !h) return;
    this.#renderer.setSize(w, h, false);
    this.#camera.aspect = w / h;
    this.#camera.updateProjectionMatrix();
    if (this.#camera.aspect !== this.#fittedAspect) this.#refit();
    this.#invalidate(true);
  }

  /**
   * Asks for a redraw: in the next paced frame, or, for a change the player asked for (`urgent`), in the next animation
   * frame whatever the pacer's wait. The pacer times a draw by the gap to the next frame, so the page work of a
   * purchase (its re-render) reads as drawing cost and stretched the wait to half a second (G3, CI showcase budget);
   * one draw per action cannot load the machine. Nothing draws synchronously.
   */
  #invalidate(urgent = false): void {
    this.#dirty = true;
    if (urgent) this.#urgent = true;
    this.#loop();
  }

  /** The pixel ratio to draw at: the screen's, at most 1.5, at the tier's share. */
  #ratio(): number {
    return Math.min(devicePixelRatio, 1.5) * SCALES[this.#tier]!;
  }

  /** Steps the resolution down when the recent draws show this machine cannot draw in time (see nextTier). */
  #adapt(): void {
    const tier = nextTier(this.#tier, this.#pacer.floor);
    if (tier === this.#tier) return;
    this.#tier = tier;
    this.#pacer.forget();
    this.#renderer.setPixelRatio(this.#ratio());
    this.canvas.setAttribute('data-tier', String(tier));
    this.#dirty = true;
  }

  #draw(): void {
    this.#dirty = false;
    this.#urgent = false;
    this.#distance();
    this.#renderer.render(this.#scene, this.#camera);
    this.#report();
    this.onDraw?.();
    // Observable without reaching into the stage: the reference-laptop run times real draws by this event (MPES §14).
    this.canvas.dispatchEvent(new Event('sea-draw'));
  }

  /** Tells `onView` where the camera is: each draw, and at once after a pause, turn, zoom or refit, so the reading never
   *  lags a player's action by a paced draw (or for good while the stage is off screen and not drawing). */
  #report(): void {
    if (this.onView) {
      const offset = this.#camera.position.clone().sub(this.#controls.target), distance = offset.length();
      const extent = extentAt(this.#kit, this.#controls.target, offset.divideScalar(distance), distance, this.#camera.fov, this.#camera.aspect);
      this.onView(this.#controls.getAzimuthalAngle(), extent, this.#zoom);
    }
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
      if (!this.#pacer.due(now) && !this.#urgent) return;
      this.#timer.update(now);
      const moved = this.#controls.update(this.#timer.getDelta());
      this.#adapt();
      if (this.#dirty) { this.#draw(); this.#pacer.drew(now); }
      if (!moved && !this.#controls.autoRotate && !this.#dirty) this.#stop();
    };
    this.#frame = requestAnimationFrame(tick);
  }

  /**
   * Restarts the loop after the canvas is re-attached to the page. The size is left to the ResizeObserver: it reports
   * after the next layout if the size changed. Reading it here would force a layout of the page being replaced
   * (G3 profile: about 15 ms per purchase at 4x).
   */
  attached(): void {
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
