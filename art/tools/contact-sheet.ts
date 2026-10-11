// Review aid: tile rendered masters onto one JPEG over the HUD backdrop, for checking many renders at once.
//   node art/tools/contact-sheet.ts <out.jpg> <columns> <tile-width> <square|wide> <image>...
import sharp from 'sharp';

const [out, cols, width, shape, ...files] = process.argv.slice(2);
if (!out || !files.length || (shape !== 'square' && shape !== 'wide')) {
  console.error('usage: contact-sheet.ts <out.jpg> <columns> <tile-width> <square|wide> <image>...');
  process.exit(2);
}
const W = Number(width), H = shape === 'square' ? W : Math.round(W * 9 / 16), C = Number(cols);
const BACKDROP = { r: 20, g: 27, b: 24 };
const tiles = await Promise.all(files.map(f => sharp(f).resize(W, H, { fit: 'contain', background: { ...BACKDROP, alpha: 1 } }).flatten({ background: BACKDROP }).png().toBuffer()));
const rows = Math.ceil(tiles.length / C);
await sharp({ create: { width: W * C, height: H * rows, channels: 3, background: BACKDROP } })
  .composite(tiles.map((input, i) => ({ input, left: (i % C) * W, top: Math.floor(i / C) * H }))).jpeg({ quality: 82 }).toFile(out);
console.log(`${files.length} images -> ${out}`);
