// Review aid: composite transparent render masters over a war-room HUD backdrop (dark gradient, grid).
// Usage: node art/tools/preview.ts <dir-with-pngs> [<out-dir>]   Output: <name>.preview.jpg
import { mkdirSync, readdirSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import sharp from 'sharp';

function backdrop(width: number, height: number): Buffer {
  const step = Math.round(width / 32);
  const lines: string[] = [];
  for (let x = 0; x <= width; x += step) lines.push(`<line x1="${x}" y1="0" x2="${x}" y2="${height}"/>`);
  for (let y = 0; y <= height; y += step) lines.push(`<line x1="0" y1="${y}" x2="${width}" y2="${y}"/>`);
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <defs><radialGradient id="g" cx="50%" cy="62%" r="70%"><stop offset="0" stop-color="#26302a"/><stop offset="1" stop-color="#0a0e0d"/></radialGradient></defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <g stroke="#7fd8b0" stroke-opacity="0.07" stroke-width="1">${lines.join('')}</g></svg>`);
}

const dir = resolve(process.argv[2] ?? '.');
const out = resolve(process.argv[3] ?? dir);
mkdirSync(out, { recursive: true });
for (const name of readdirSync(dir).filter(f => f.endsWith('.png'))) {
  const image = sharp(join(dir, name));
  const { width = 0, height = 0 } = await image.metadata();
  await sharp(backdrop(width, height)).composite([{ input: join(dir, name) }]).jpeg({ quality: 88 })
    .toFile(join(out, basename(name, '.png') + '.preview.jpg'));
}
console.log(`previews written to ${out}`);
