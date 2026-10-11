// Review aid: each vehicle's base with one part per slot (variant letter A..G), stacked farthest first by the
// recorded camera distance, as the stills showcase draws them. Feed the results to contact-sheet.ts.
//   node art/tools/build-composites.ts <renders dir> <out dir> <letters, e.g. A,D,G>
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const [dir, out, letters] = process.argv.slice(2);
if (!dir || !out || !letters) throw new Error('usage: build-composites.ts <renders dir> <out dir> <letters>');
const manifest = JSON.parse(readFileSync(join(dir, 'renders.json'), 'utf8')) as { outputs: { file: string; depth: number | null }[] };
const depth = new Map(manifest.outputs.map(e => [e.file, e.depth ?? 0]));
const vehicles = ['combat', 'recce', 'troop-carrier', 'command-post', 'recovery', 'mine-clearing'];
const slots = ['ACC', 'CAP', 'COM', 'FP', 'MOB', 'PRO', 'SA'];
for (const letter of letters.split(',')) {
  for (const v of vehicles) for (const angle of ['front', 'rear']) {
    const layers = slots.map(s => `${v}-${angle}-${s}-${letter}.png`).sort((a, b) => (depth.get(b) ?? 0) - (depth.get(a) ?? 0));
    await sharp(join(dir, `${v}-${angle}-base.png`)).composite(layers.map(f => ({ input: join(dir, f) })))
      .png().toFile(join(out, `${v}-${angle}-${letter}.png`));
  }
}
console.log(`${letters.split(',').length * vehicles.length * 2} composites -> ${out}`);
