// The embedded model holds every vehicle as a root node of one scene (art/tools/pack-models.ts). Parsing all of them
// would build six vehicles' geometry to show one, so the loader first narrows the scene to the vehicle it shows:
// GLTFLoader then reads only the meshes, materials and accessors that node references (MPES §14 model-ready budget).

const MAGIC = 0x46546c67; // 'glTF'
const JSON_CHUNK = 0x4e4f534a; // 'JSON'

interface Gltf { scene?: number; scenes?: { nodes?: number[] }[]; nodes?: { name?: string }[] }

/** A copy of `glb` whose only scene holds the root node named `vehicle`; null if there is none or it is not a GLB. */
export function vehicleGlb(glb: ArrayBuffer, vehicle: string): ArrayBuffer | null {
  if (glb.byteLength < 20) return null;
  const view = new DataView(glb);
  if (view.getUint32(0, true) !== MAGIC || view.getUint32(16, true) !== JSON_CHUNK) return null;
  const jsonLen = view.getUint32(12, true);
  let json: Gltf;
  try {
    json = JSON.parse(new TextDecoder().decode(new Uint8Array(glb, 20, jsonLen))) as Gltf;
  } catch {
    return null;
  }
  const roots = json.scenes?.[json.scene ?? 0]?.nodes ?? [];
  const node = roots.find(i => json.nodes?.[i]?.name === vehicle);
  if (node === undefined) return null;
  json.scenes = [{ nodes: [node] }];
  json.scene = 0;
  const text = new TextEncoder().encode(JSON.stringify(json));
  const padded = Math.ceil(text.length / 4) * 4;
  const rest = new Uint8Array(glb, 20 + jsonLen); // the binary chunk, header included, unchanged
  const out = new Uint8Array(20 + padded + rest.length);
  const outView = new DataView(out.buffer);
  outView.setUint32(0, MAGIC, true);
  outView.setUint32(4, view.getUint32(4, true), true);
  outView.setUint32(8, out.length, true);
  outView.setUint32(12, padded, true);
  outView.setUint32(16, JSON_CHUNK, true);
  out.fill(0x20, 20, 20 + padded);
  out.set(text, 20);
  out.set(rest, 20 + padded);
  return out.buffer;
}
