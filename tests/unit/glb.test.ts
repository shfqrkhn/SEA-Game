// MPES §10, §14: the embedded model holds all six vehicles, but the game parses only the team's vehicle, so the
// 3D stage is ready within budget. vehicleGlb narrows the GLB's scene to that vehicle's node; the loader then
// fetches only what that node references.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { vehicleGlb } from '../../source/showcase/glb.ts';
import { VEHICLE } from '../../source/showcase/renders.ts';

interface Gltf { scene?: number; scenes: { nodes: number[] }[]; nodes: { name?: string; children?: number[] }[] }

function glb(json: object, bin: Uint8Array): ArrayBuffer {
  const text = new TextEncoder().encode(JSON.stringify(json));
  const jsonLen = Math.ceil(text.length / 4) * 4, binLen = Math.ceil(bin.length / 4) * 4;
  const out = new Uint8Array(12 + 8 + jsonLen + 8 + binLen);
  const view = new DataView(out.buffer);
  view.setUint32(0, 0x46546c67, true); view.setUint32(4, 2, true); view.setUint32(8, out.length, true);
  view.setUint32(12, jsonLen, true); view.setUint32(16, 0x4e4f534a, true);
  out.fill(0x20, 20, 20 + jsonLen); out.set(text, 20);
  view.setUint32(20 + jsonLen, binLen, true); view.setUint32(24 + jsonLen, 0x004e4942, true);
  out.set(bin, 28 + jsonLen);
  return out.buffer;
}

function parse(buffer: ArrayBuffer): { json: Gltf; bin: Uint8Array; length: number } {
  const view = new DataView(buffer);
  const jsonLen = view.getUint32(12, true);
  const json = JSON.parse(new TextDecoder().decode(new Uint8Array(buffer, 20, jsonLen))) as Gltf;
  const binLen = view.getUint32(20 + jsonLen, true);
  return { json, bin: new Uint8Array(buffer, 28 + jsonLen, binLen), length: view.getUint32(8, true) };
}

describe('vehicleGlb (MPES §10, §14)', () => {
  const json = { asset: { version: '2.0' }, scene: 0, scenes: [{ nodes: [0, 1] }], nodes: [{ name: 'combat', children: [2] }, { name: 'recce' }, { name: 'base' }] };
  const bin = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]);

  it("keeps only the vehicle's root node in the scene, and the binary chunk unchanged", () => {
    const out = parse(vehicleGlb(glb(json, bin), 'recce')!);
    expect(out.json.scenes).toEqual([{ nodes: [1] }]);
    expect(out.json.scene).toBe(0);
    expect(out.json.nodes).toEqual(json.nodes);
    expect([...out.bin]).toEqual([...bin]);
  });

  it('writes a valid GLB: 4-byte aligned chunks and the total length in the header', () => {
    const buffer = vehicleGlb(glb(json, bin), 'combat')!;
    const out = parse(buffer);
    expect(out.length).toBe(buffer.byteLength);
    expect(new DataView(buffer).getUint32(12, true) % 4).toBe(0);
    expect(out.json.scenes).toEqual([{ nodes: [0] }]);
  });

  it('returns null for a vehicle that is not a root node, or for data that is not a GLB', () => {
    expect(vehicleGlb(glb(json, bin), 'base')).toBeNull();
    expect(vehicleGlb(glb(json, bin), 'mine-clearing')).toBeNull();
    expect(vehicleGlb(new Uint8Array(32).buffer, 'combat')).toBeNull();
  });

  it('finds every vehicle in the committed model', () => {
    const manifest = JSON.parse(readFileSync('content/models/manifest.json', 'utf8')) as { file: string };
    const file = readFileSync(`content/models/${manifest.file}`);
    const buffer = file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength);
    for (const stem of Object.values(VEHICLE)) {
      const out = parse(vehicleGlb(buffer, stem)!);
      expect(out.json.scenes[0]!.nodes.map(i => out.json.nodes[i]!.name)).toEqual([stem]);
    }
  });
});
