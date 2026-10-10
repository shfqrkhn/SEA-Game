// Physically based material library for the vehicle bay (MPES §10). Shared across builds; the bay
// disposes them only with the renderer. Colours are original, chosen for a matte military-olive look.
import { CanvasTexture, Color, MeshStandardMaterial, RepeatWrapping, Vector2, type Material, type Texture } from 'three';

/** Procedural value noise drawn into a canvas: subtle paint wear and rubber grain without image files. */
function noiseTexture(seed: number, scale: number, contrast: number): Texture | null {
  if (typeof document === 'undefined') return null;
  const size = 256, canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  const image = ctx.createImageData(size, size);
  let s = seed;
  const rand = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  const grid = Array.from({ length: (scale + 1) * (scale + 1) }, rand);
  const at = (x: number, y: number) => grid[(y % scale) * (scale + 1) + (x % scale)]!;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const fx = (x / size) * scale, fy = (y / size) * scale, ix = Math.floor(fx), iy = Math.floor(fy), tx = fx - ix, ty = fy - iy;
    const smooth = (t: number) => t * t * (3 - 2 * t);
    const v = (at(ix, iy) * (1 - smooth(tx)) + at(ix + 1, iy) * smooth(tx)) * (1 - smooth(ty)) + (at(ix, iy + 1) * (1 - smooth(tx)) + at(ix + 1, iy + 1) * smooth(tx)) * smooth(ty);
    const grain = rand() * 0.25;
    const value = Math.round(128 + (v - 0.5 + grain - 0.125) * 255 * contrast);
    const i = (y * size + x) * 4;
    image.data[i] = image.data[i + 1] = image.data[i + 2] = Math.max(0, Math.min(255, value));
    image.data[i + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
  const texture = new CanvasTexture(canvas);
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(2, 2);
  return texture;
}
let paintNoise: Texture | null | undefined;
let rubberNoise: Texture | null | undefined;
function painted(colour: string, roughness: number, _clearcoat: number): MeshStandardMaterial {
  paintNoise ??= noiseTexture(7, 24, 0.35);
  const m = new MeshStandardMaterial({ color: new Color(colour), roughness, metalness: 0.1 });
  if (paintNoise) { m.roughnessMap = paintNoise; m.bumpMap = paintNoise; m.bumpScale = 0.04; }
  return m;
}
function rubbery(colour: string): MeshStandardMaterial {
  rubberNoise ??= noiseTexture(11, 48, 0.9);
  const m = new MeshStandardMaterial({ color: new Color(colour), roughness: 0.95, metalness: 0 });
  if (rubberNoise) { m.bumpMap = rubberNoise; m.bumpScale = 0.3; m.normalScale = new Vector2(1, 1); }
  return m;
}

export type MaterialKey =
  | 'paint' | 'paintDark' | 'paintLight' | 'rubber' | 'gunmetal' | 'steel' | 'chrome' | 'glass'
  | 'lamp' | 'amber' | 'red' | 'brass' | 'canvas' | 'black' | 'cable' | 'tread';

const SPECS: Record<MaterialKey, () => Material> = {
  paint: () => painted('#3f462f', 0.72, 0.12),
  paintDark: () => painted('#2e3324', 0.78, 0.08),
  paintLight: () => painted('#4d5537', 0.7, 0.14),
  rubber: () => rubbery('#161718'),
  tread: () => rubbery('#1d1e20'),
  gunmetal: () => new MeshStandardMaterial({ color: new Color('#34383b'), roughness: 0.42, metalness: 0.75 }),
  steel: () => new MeshStandardMaterial({ color: new Color('#8d9398'), roughness: 0.32, metalness: 0.9 }),
  chrome: () => new MeshStandardMaterial({ color: new Color('#d6dadd'), roughness: 0.12, metalness: 1 }),
  glass: () => new MeshStandardMaterial({ color: new Color('#1a2629'), roughness: 0.04, metalness: 0.2, envMapIntensity: 1.6, transparent: true, opacity: 0.9 }),
  lamp: () => new MeshStandardMaterial({ color: new Color('#fff6e0'), emissive: new Color('#ffe8b0'), emissiveIntensity: 1.6, roughness: 0.2 }),
  amber: () => new MeshStandardMaterial({ color: new Color('#ff9a1f'), emissive: new Color('#ff7a00'), emissiveIntensity: 0.9, roughness: 0.3 }),
  red: () => new MeshStandardMaterial({ color: new Color('#a01c14'), emissive: new Color('#600808'), emissiveIntensity: 0.6, roughness: 0.35 }),
  brass: () => new MeshStandardMaterial({ color: new Color('#b9902e'), roughness: 0.38, metalness: 0.85 }),
  canvas: () => new MeshStandardMaterial({ color: new Color('#5d5a43'), roughness: 0.95, metalness: 0 }),
  black: () => new MeshStandardMaterial({ color: new Color('#0f1011'), roughness: 0.6, metalness: 0.2 }),
  cable: () => new MeshStandardMaterial({ color: new Color('#2a2b2b'), roughness: 0.55, metalness: 0.6 }),
};

const cache = new Map<MaterialKey, Material>();

export function mat(key: MaterialKey): Material {
  let m = cache.get(key);
  if (!m) { m = SPECS[key](); cache.set(key, m); }
  return m;
}

export function disposeMaterials(): void {
  for (const m of cache.values()) m.dispose();
  cache.clear();
  paintNoise?.dispose(); rubberNoise?.dispose();
  paintNoise = rubberNoise = undefined;
}
