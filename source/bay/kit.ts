// Geometry kit for procedural vehicles (MPES §10). Parts are assembled from simple primitives,
// transformed, then merged per material so a whole part costs a handful of draw calls.
import {
  BufferGeometry, CatmullRomCurve3, CylinderGeometry, Euler, ExtrudeGeometry, Group, LatheGeometry, Matrix4, Mesh,
  Quaternion, Shape, SphereGeometry, TorusGeometry, TubeGeometry, Vector2, Vector3,
} from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { mat, type MaterialKey } from './materials.ts';

export type V3 = readonly [number, number, number];
export interface Place { readonly p?: V3; readonly r?: V3; readonly s?: V3 }

function matrix(place: Place): Matrix4 {
  const q = new Quaternion().setFromEuler(new Euler(...(place.r ?? [0, 0, 0])));
  return new Matrix4().compose(new Vector3(...(place.p ?? [0, 0, 0])), q, new Vector3(...(place.s ?? [1, 1, 1])));
}

/** Collects transformed geometries by material and merges them into one mesh per material. */
export class Assembly {
  readonly #byMaterial = new Map<MaterialKey, BufferGeometry[]>();

  add(geometry: BufferGeometry, key: MaterialKey, place: Place = {}): this {
    geometry.applyMatrix4(matrix(place));
    const list = this.#byMaterial.get(key) ?? [];
    list.push(geometry.index ? geometry.toNonIndexed() : geometry);
    this.#byMaterial.set(key, list);
    return this;
  }

  /** Add every geometry of another assembly with an extra transform (for mirrored or repeated sub-assemblies). */
  addAll(other: Assembly, place: Place = {}): this {
    const m = matrix(place);
    for (const [key, list] of other.#byMaterial) for (const g of list) this.add(g.clone().applyMatrix4(m), key);
    return this;
  }

  /** Merge in place to one geometry per material (for templates that are cloned many times). */
  compact(): this {
    for (const [key, list] of this.#byMaterial) {
      if (list.length < 2) continue;
      const merged = mergeGeometries(list.map(g => strip(g)), false);
      if (merged) { for (const g of list) g.dispose(); this.#byMaterial.set(key, [merged]); }
    }
    return this;
  }

  build(name = ''): Group {
    const group = new Group();
    group.name = name;
    for (const [key, list] of this.#byMaterial) {
      const merged = mergeGeometries(list.map(g => strip(g)), false);
      if (!merged) continue;
      merged.computeBoundingSphere();
      const mesh = new Mesh(merged, mat(key));
      mesh.castShadow = key !== 'glass' && key !== 'lamp';
      mesh.receiveShadow = true;
      group.add(mesh);
      for (const g of list) g.dispose();
    }
    this.#byMaterial.clear();
    return group;
  }
}

/** Keep position, normal and uv so geometries from different generators merge cleanly (uv drives surface maps). */
function strip(g: BufferGeometry): BufferGeometry {
  for (const name of Object.keys(g.attributes)) if (name !== 'position' && name !== 'normal' && name !== 'uv') g.deleteAttribute(name);
  if (!g.getAttribute('normal')) g.computeVertexNormals();
  if (!g.getAttribute('uv')) throw new Error('geometry without uv');
  return g;
}

// ---- Primitives ----
export const rbox = (w: number, h: number, d: number, radius = 0.03, segments = 2): BufferGeometry =>
  new RoundedBoxGeometry(w, h, d, segments, Math.min(radius, w / 2.01, h / 2.01, d / 2.01));

export const cyl = (rTop: number, rBottom: number, h: number, segments = 18): BufferGeometry =>
  new CylinderGeometry(rTop, rBottom, h, segments);

export const ball = (r: number, segments = 12): BufferGeometry => new SphereGeometry(r, segments, Math.max(6, segments / 2));

/** Extrude a side-view profile (x forward, y up) across z, with bevelled (chamfered) edges, centred on z. */
export function profile(points: readonly (readonly [number, number])[], depth: number, bevel = 0.04): BufferGeometry {
  const shape = new Shape(points.map(([x, y]) => new Vector2(x, y)));
  const g = new ExtrudeGeometry(shape, { depth: depth - 2 * bevel, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 2, curveSegments: 6 });
  g.translate(0, 0, -(depth - 2 * bevel) / 2);
  return g;
}

/** Cylinder between two points (struts, rails, pipes, rods). */
export function between(a: V3, b: V3, radius: number, segments = 10): { geometry: BufferGeometry; place: Place } {
  const start = new Vector3(...a), end = new Vector3(...b);
  const length = start.distanceTo(end);
  const geometry = new CylinderGeometry(radius, radius, length, segments);
  const mid = start.clone().add(end).multiplyScalar(0.5);
  const q = new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), end.clone().sub(start).normalize());
  const e = new Euler().setFromQuaternion(q);
  return { geometry, place: { p: [mid.x, mid.y, mid.z], r: [e.x, e.y, e.z] } };
}

export function tube(points: readonly V3[], radius: number, segments = 24): BufferGeometry {
  return new TubeGeometry(new CatmullRomCurve3(points.map(p => new Vector3(...p))), segments, radius, 8, false);
}

export function hook(size = 0.16): BufferGeometry {
  const g = new TorusGeometry(size, size * 0.24, 8, 20, Math.PI * 1.45);
  g.rotateZ(Math.PI * 0.78);
  return g;
}

// ---- Wheels ----
/** Off-road tyre with rounded shoulders and a staggered chevron tread; axis along z. */
const wheelTemplates = new Map<string, Assembly>();
/** Cached per design: building ~60 lugs per wheel is the costliest step, so each design is built once and cloned. */
export function wheel(asm: Assembly, at: V3, radius: number, width: number, outward: 1 | -1, rimKey: MaterialKey = 'paintDark'): void {
  const key = `${radius}|${width}|${outward}|${rimKey}`;
  let template = wheelTemplates.get(key);
  if (!template) { template = new Assembly(); buildWheel(template, [0, 0, 0], radius, width, outward, rimKey); template.compact(); wheelTemplates.set(key, template); }
  asm.addAll(template, { p: at });
}

function buildWheel(asm: Assembly, at: V3, radius: number, width: number, outward: 1 | -1, rimKey: MaterialKey): void {
  const R = radius, W = width, inner = R * 0.64;
  const section: Vector2[] = [];
  const shoulder = W * 0.18;
  section.push(new Vector2(inner, -W / 2), new Vector2(R - shoulder, -W / 2));
  for (let i = 0; i <= 6; i++) { const a = -Math.PI / 2 + (i / 6) * (Math.PI / 2); section.push(new Vector2(R - shoulder + Math.cos(a) * shoulder, -W / 2 + shoulder + Math.sin(a) * shoulder)); }
  for (let i = 0; i <= 6; i++) { const a = (i / 6) * (Math.PI / 2); section.push(new Vector2(R - shoulder + Math.cos(a) * shoulder, W / 2 - shoulder + Math.sin(a) * shoulder)); }
  section.push(new Vector2(inner, W / 2));
  const carcass = new LatheGeometry(section, 40);
  carcass.rotateX(Math.PI / 2);
  asm.add(carcass, 'rubber', { p: at });
  // Tread lugs: two staggered rows of angled blocks.
  const lugs = 28;
  for (let i = 0; i < lugs; i++) {
    for (const row of [-1, 1]) {
      const a = ((i + (row > 0 ? 0.5 : 0)) / lugs) * Math.PI * 2;
      const lug = rbox(0.11 * R, 0.08 * R, W * 0.42, 0.012, 1);
      lug.rotateY(row * 0.35);
      lug.translate(0, R + 0.02 * R, row * W * 0.22);
      lug.rotateZ(a);
      asm.add(lug, 'tread', { p: at });
    }
  }
  // Dished rim, hub and bolt circle on the outer face.
  const rimProfile = [new Vector2(0.001, W * 0.05), new Vector2(inner * 0.42, W * 0.08), new Vector2(inner * 0.7, 0), new Vector2(inner * 0.98, -W * 0.12), new Vector2(inner, W * 0.42)];
  const rim = new LatheGeometry(rimProfile, 28);
  rim.rotateX(outward > 0 ? -Math.PI / 2 : Math.PI / 2);
  asm.add(rim, rimKey, { p: at });
  const hub = cyl(inner * 0.28, inner * 0.34, W * 0.3, 16);
  hub.rotateX(Math.PI / 2);
  asm.add(hub, 'gunmetal', { p: [at[0], at[1], at[2] + outward * W * 0.18] });
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    const bolt = cyl(0.018, 0.018, 0.05, 6);
    bolt.rotateX(Math.PI / 2);
    asm.add(bolt, 'steel', { p: [at[0] + Math.cos(a) * inner * 0.46, at[1] + Math.sin(a) * inner * 0.46, at[2] + outward * W * 0.22] });
  }
}

/** Row of bolt heads along a line (armour panels, plates). */
export function bolts(asm: Assembly, from: V3, to: V3, count: number, normal: 'x' | 'z', key: MaterialKey = 'gunmetal'): void {
  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0.5 : i / (count - 1);
    const head = cyl(0.022, 0.022, 0.025, 6);
    if (normal === 'z') head.rotateX(Math.PI / 2); else head.rotateZ(Math.PI / 2);
    asm.add(head, key, { p: [from[0] + (to[0] - from[0]) * t, from[1] + (to[1] - from[1]) * t, from[2] + (to[2] - from[2]) * t] });
  }
}

/** Lamp: housing plus glowing lens, facing +x (or -x when `facing` is -1). */
export function lamp(asm: Assembly, at: V3, radius: number, facing: 1 | -1 = 1, lens: MaterialKey = 'lamp'): void {
  const housing = cyl(radius * 1.15, radius * 1.25, radius * 0.9, 16);
  housing.rotateZ(Math.PI / 2);
  asm.add(housing, 'gunmetal', { p: at });
  const glass = cyl(radius, radius, 0.02, 16);
  glass.rotateZ(Math.PI / 2);
  asm.add(glass, lens, { p: [at[0] + facing * radius * 0.46, at[1], at[2]] });
}

export function group(...children: Group[]): Group {
  const g = new Group();
  for (const c of children) g.add(c);
  return g;
}
