// Still-angle analysis (owner FIX, G2): which camera angles show the vehicles' parts best. Renders the packed model
// (content/models/showcase.glb) in headless Chromium from a grid of yaw and pitch, framed as art/blender/render.py
// frames a build still (55 mm lens on a 36 mm sensor, every layer of the vehicle in frame, margin 1.06), and counts
// each part's visible pixels with only the base in front of it: in the layered stills a team shows at most one part
// per mount, so parts never hide one another. Prints per vehicle the best front and rear angles and writes the grid.
//
//   node art/tools/angles.ts [out.json]
//
// Yaw and pitch follow art/blender/sea/scene.py: yaw 0 looks at the vehicle's left side, 90 at its front.
import { build } from 'esbuild';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { chromium } from '@playwright/test';

const out = process.argv[2] ?? '.artifacts/angles.json';
// A 10° grid plus the current build angles (render.py ANGLES: front 38/10, rear 218/12).
const YAWS = [...Array.from({ length: 36 }, (_, i) => i * 10), 38, 218].sort((a, b) => a - b);
const PITCHES = [6, 10, 12, 14, 18, 22, 26, 30, 35];
const SIZE = { width: 480, height: 270 };

const page = `
import { Box3, Color, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
const layerOf = o => String(o.userData.layer ?? o.name);
window.analyse = async (yaws, pitches, size) => {
  const glb = await (await fetch('http://sea.local/model.glb')).arrayBuffer();
  const root = (await new GLTFLoader().parseAsync(glb, '')).scene;
  const renderer = new WebGLRenderer({ antialias: false, preserveDrawingBuffer: true });
  renderer.setSize(size.width, size.height, false);
  const gl = renderer.getContext();
  const pixels = new Uint8Array(size.width * size.height * 4);
  const hFov = 2 * Math.atan(18 / 55), tanH = Math.tan(hFov / 2), tanV = tanH * size.height / size.width;
  const camera = new PerspectiveCamera(2 * Math.atan(tanV) * 180 / Math.PI, size.width / size.height, 0.05, 500);
  const result = {};
  for (const vehicle of root.children) {
    const scene = new Scene();
    scene.background = new Color(1, 1, 1);
    const copy = vehicle.clone();
    scene.add(copy);
    copy.updateMatrixWorld(true);
    const box = new Box3().setFromObject(copy), centre = box.getCenter(new Vector3());
    const corners = [];
    for (const x of [box.min.x, box.max.x]) for (const y of [box.min.y, box.max.y]) for (const z of [box.min.z, box.max.z]) corners.push(new Vector3(x, y, z));
    const base = copy.children.filter(n => layerOf(n) === 'base');
    const parts = copy.children.filter(n => layerOf(n) !== 'base');
    const black = new MeshBasicMaterial({ color: 0x000000 });
    const red = new MeshBasicMaterial({ color: 0xff0000 });
    const paint = (nodes, material) => nodes.forEach(n => n.traverse(o => { if (o instanceof Mesh) o.material = material; }));
    paint(base, black); paint(parts, red);
    const counts = {};
    for (const yaw of yaws) for (const pitch of pitches) {
      const y = yaw * Math.PI / 180, p = pitch * Math.PI / 180;
      // Blender (x, y, z) is glTF (x, z, -y).
      const dir = new Vector3(Math.sin(y) * Math.cos(p), Math.sin(p), Math.cos(y) * Math.cos(p));
      camera.position.copy(centre).addScaledVector(dir, 50);
      camera.lookAt(centre);
      camera.updateMatrixWorld();
      // Distance that fits every corner, then the margin; the subject is centred on its projected extents.
      const inv = camera.matrixWorldInverse;
      let distance = 0;
      for (const c of corners) {
        // v.z is minus the depth from the camera, 50 away: the corner sits 50 + v.z nearer the camera than the centre.
        const v = c.clone().applyMatrix4(inv), nearer = 50 + v.z;
        distance = Math.max(distance, Math.abs(v.x) / tanH + nearer, Math.abs(v.y) / tanV + nearer);
      }
      camera.position.copy(centre).addScaledVector(dir, distance * 1.06);
      camera.updateMatrixWorld();
      const key = yaw + '/' + pitch, row = {};
      // Sanity: the whole vehicle with every part fills a fair share of the frame.
      parts.forEach(n => { n.visible = true; });
      renderer.render(scene, camera);
      gl.readPixels(0, 0, size.width, size.height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
      let filled = 0;
      for (let i = 0; i < pixels.length; i += 4) if (pixels[i] < 250 || pixels[i + 1] < 250) filled++;
      row.filled = filled / (size.width * size.height);
      for (const part of parts) {
        parts.forEach(n => { n.visible = n === part; });
        renderer.render(scene, camera);
        gl.readPixels(0, 0, size.width, size.height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
        let n = 0;
        for (let i = 0; i < pixels.length; i += 4) if (pixels[i] > 200 && pixels[i + 1] < 60) n++;
        row[layerOf(part)] = n;
      }
      counts[key] = row;
    }
    result[vehicle.name] = counts;
    console.log('[angles] ' + vehicle.name);
  }
  return result;
};
`;
const bundle = await build({ stdin: { contents: page, resolveDir: resolve('.'), loader: 'js' }, bundle: true, write: false, format: 'iife', minify: true });
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const tab = await browser.newPage();
tab.on('console', m => { if (m.text().startsWith('[angles]')) console.log(m.text()); });
await tab.route('http://sea.local/**', route => route.request().url().endsWith('/model.glb')
  ? route.fulfill({ body: readFileSync('content/models/showcase.glb'), contentType: 'model/gltf-binary' })
  : route.fulfill({ body: '<!doctype html><title>angles</title>', contentType: 'text/html' }));
await tab.goto('http://sea.local/');
await tab.addScriptTag({ content: bundle.outputFiles[0]!.text });
type Grid = Record<string, Record<string, Record<string, number>>>;
const grid = await tab.evaluate(([y, p, s]) => (window as unknown as { analyse: (...a: unknown[]) => Promise<unknown> }).analyse(y, p, s), [YAWS, PITCHES, SIZE] as const) as Grid;
await browser.close();
writeFileSync(out, JSON.stringify({ yaws: YAWS, pitches: PITCHES, size: SIZE, grid }));

// Score of one angle: the sum over parts of log(1 + visible pixels), which rewards showing every part over
// enlarging the big ones. A pair is scored on its front angle alone (the view a tracker opens on) plus, per part,
// the better of the two (what the player can see by switching). Front angles have the camera ahead of the
// vehicle's middle (yaw 0..90 or 270..360), rear angles behind it.
const partsOf = (row: Record<string, number>) => Object.entries(row).filter(([k]) => k !== 'filled');
const score = (row: Record<string, number>) => partsOf(row).reduce((s, [, n]) => s + Math.log1p(n), 0);
const front = (yaw: number) => yaw <= 90 || yaw >= 270;
for (const [vehicle, counts] of Object.entries(grid)) {
  const keys = Object.keys(counts);
  let best = { s: -1, f: '', r: '' };
  for (const f of keys.filter(k => front(Number(k.split('/')[0])))) for (const r of keys.filter(k => !front(Number(k.split('/')[0])))) {
    const a = counts[f]!, b = counts[r]!;
    const s = score(a) + partsOf(a).map(([k]) => k).reduce((t, part) => t + Math.log1p(Math.max(a[part]!, b[part]!)), 0);
    if (s > best.s) best = { s, f, r };
  }
  const current = (k: string) => `${score(counts[k]!).toFixed(1)}, fills ${Math.round(counts[k]!['filled']! * 100)}%`;
  const hidden = (k: string) => partsOf(counts[k]!).filter(([, n]) => n < 200).map(([p]) => p).join(' ') || '-';
  console.log(`${vehicle}: best front ${best.f} (${current(best.f)}), rear ${best.r} (${current(best.r)}); current front 38/10 (${current('38/10')}), rear 218/12 (${current('218/12')})`);
  console.log(`  barely visible (<200 px): best front ${hidden(best.f)} | best rear ${hidden(best.r)} | current front ${hidden('38/10')} | current rear ${hidden('218/12')}`);
}
