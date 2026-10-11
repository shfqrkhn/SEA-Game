// Packs the Blender glTF exports (art/blender/export.py) into the one model file the game embeds (MPES §10).
//
//   node art/tools/pack-models.ts <dir of <stem>.glb> <out .glb>
//
// One scene; a group node per vehicle (named by its stem) holding `base` and one node per part card. Identical
// meshes and materials are shared, vertices welded and reordered for locality (meshoptimizer: the deflated file is
// smaller and draws the same), and attributes quantised (KHR_mesh_quantization), which three.js GLTFLoader reads
// natively, so the game needs no decoder beyond the browser's own DecompressionStream. Measured and rejected (G2):
// simplification at an error of 0.001 visibly changed the hull's shading; 8-bit normals together with the reorder
// made a purchase's model update about 30 ms slower on the reference profile.
import { readdirSync, writeFileSync } from 'node:fs';
import { join, basename } from 'node:path';
import { deflateRawSync } from 'node:zlib';
import { NodeIO, type Document } from '@gltf-transform/core';
import { KHRMaterialsEmissiveStrength, KHRMeshQuantization } from '@gltf-transform/extensions';
import { dedup, mergeDocuments, prune, quantize, reorder, unpartition, weld } from '@gltf-transform/functions';
import { MeshoptEncoder } from 'meshoptimizer';

const [dir, out] = process.argv.slice(2);
if (!dir || !out) throw new Error('usage: pack-models.ts <dir> <out.glb>');
const io = new NodeIO().registerExtensions([KHRMaterialsEmissiveStrength, KHRMeshQuantization]);

const files = readdirSync(dir).filter(f => f.endsWith('.glb') && f !== basename(out)).sort();
const doc: Document = new (await import('@gltf-transform/core')).Document();
const root = doc.getRoot();
const scene = doc.createScene('showcase');
for (const file of files) {
  const source = await io.read(join(dir, file));
  const map = mergeDocuments(doc, source);
  const group = doc.createNode(file.replace(/\.glb$/, ''));
  scene.addChild(group);
  for (const s of source.getRoot().listScenes()) {
    const merged = map.get(s);
    if (!merged) continue;
    // three.js renames repeated node names (base, base_1, ...), so each node also carries its layer in extras.
    for (const child of (merged as typeof scene).listChildren()) {
      child.setExtras({ ...child.getExtras(), layer: child.getName() });
      group.addChild(child);
    }
    (merged as typeof scene).dispose();
  }
}
root.setDefaultScene(scene);
await MeshoptEncoder.ready;
await doc.transform(
  unpartition(),
  dedup(),
  weld(),
  reorder({ encoder: MeshoptEncoder }),
  quantize({ quantizePosition: 14, quantizeNormal: 10, quantizeColor: 8 }),
  dedup(),
  prune({ keepAttributes: false }),
);
const glb = await io.writeBinary(doc);
writeFileSync(out, glb);
const meshes = root.listMeshes();
const tris = meshes.flatMap(m => m.listPrimitives()).reduce((n, p) => n + (p.getIndices()?.getCount() ?? 0) / 3, 0);
console.log(JSON.stringify({ vehicles: files.length, meshes: meshes.length, materials: root.listMaterials().length,
  uniqueTriangles: Math.round(tris), glb: glb.byteLength, deflated: deflateRawSync(glb, { level: 9 }).byteLength }));
