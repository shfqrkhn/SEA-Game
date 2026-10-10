// Encode Blender render masters (16-bit RGBA PNG) for embedding (MPES §10, §11).
//   node art/tools/encode-renders.ts measure <masters> <report.json>   AVIF vs WebP quality sweep
//   node art/tools/encode-renders.ts encode <masters> <out-dir> <avif|webp> <quality>
// Layers are trimmed to their visible pixels; the manifest records each file's offset in its frame.
import { createHash } from 'node:crypto';
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join, resolve } from 'node:path';
import sharp, { type OutputInfo } from 'sharp';

type Format = 'avif' | 'webp';
const BACKDROP = { r: 20, g: 27, b: 24 }; // HUD panel colour used to judge visible quality

interface Master { readonly file: string; readonly kind: string; readonly id: string }

function classify(file: string): Master {
  const name = basename(file, '.png');
  if (name.startsWith('card-')) return { file, kind: 'card', id: name };
  if (/-turntable-\d+$/.test(name)) return { file, kind: 'turntable', id: name };
  if (name.endsWith('-hero')) return { file, kind: 'hero', id: name };
  return { file, kind: name.endsWith('-base') ? 'build-base' : 'build-layer', id: name };
}

async function trimmed(path: string): Promise<{ data: Buffer; info: OutputInfo; left: number; top: number; frameWidth: number; frameHeight: number }> {
  const meta = await sharp(path).metadata();
  const image = sharp(path).toColourspace('srgb');
  // Trim fully transparent margins (threshold on alpha only), keeping a 2 px apron for soft shadows.
  const { info } = await image.clone().trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 1 }).toBuffer({ resolveWithObject: true });
  const left = Math.max(0, -(info.trimOffsetLeft ?? 0) - 2), top = Math.max(0, -(info.trimOffsetTop ?? 0) - 2);
  const width = Math.min(meta.width! - left, info.width + 4), height = Math.min(meta.height! - top, info.height + 4);
  const out = await image.extract({ left, top, width, height }).png({ compressionLevel: 0 }).toBuffer({ resolveWithObject: true });
  return { data: out.data, info: out.info, left, top, frameWidth: meta.width!, frameHeight: meta.height! };
}

async function encode(input: Buffer, format: Format, quality: number): Promise<Buffer> {
  const s = sharp(input);
  return format === 'avif' ? s.avif({ quality, effort: 6, chromaSubsampling: '4:4:4' }).toBuffer() : s.webp({ quality, alphaQuality: 90, effort: 6, smartSubsample: true }).toBuffer();
}

/** PSNR of the encoded image against the master, both flattened onto the HUD backdrop. */
async function psnr(master: Buffer, encoded: Buffer): Promise<number> {
  const flat = async (b: Buffer) => sharp(b).flatten({ background: BACKDROP }).removeAlpha().raw().toBuffer();
  const [a, b] = await Promise.all([flat(master), flat(encoded)]);
  let sum = 0;
  for (let i = 0; i < a.length; i++) { const d = a[i]! - b[i]!; sum += d * d; }
  const mse = sum / a.length;
  return mse === 0 ? 99 : 10 * Math.log10(255 * 255 / mse);
}

async function measure(dir: string, report: string): Promise<void> {
  const masters = readdirSync(dir).filter(f => f.endsWith('.png')).map(classify);
  const settings: [Format, number][] = [['avif', 45], ['avif', 55], ['avif', 65], ['webp', 75], ['webp', 85], ['webp', 92]];
  const rows: Record<string, unknown>[] = [];
  for (const [format, quality] of settings) {
    const byKind: Record<string, { files: number; bytes: number; psnr: number }> = {};
    for (const m of masters) {
      const t = await trimmed(join(dir, m.file));
      const enc = await encode(t.data, format, quality);
      const k = (byKind[m.kind] ??= { files: 0, bytes: 0, psnr: 0 });
      k.files++; k.bytes += enc.length; k.psnr += await psnr(t.data, enc);
    }
    for (const [kind, k] of Object.entries(byKind)) rows.push({ format, quality, kind, files: k.files, bytes: k.bytes, avgBytes: Math.round(k.bytes / k.files), avgPsnr: +(k.psnr / k.files).toFixed(2) });
  }
  writeFileSync(report, JSON.stringify(rows, null, 2) + '\n');
  console.table(rows);
}

async function encodeAll(dir: string, out: string, format: Format, quality: number): Promise<void> {
  mkdirSync(out, { recursive: true });
  const renders = JSON.parse(readFileSync(join(dir, 'renders.json'), 'utf8')) as { blender: string; seed: number };
  const entries = [];
  for (const m of readdirSync(dir).filter(f => f.endsWith('.png')).sort().map(classify)) {
    const t = await trimmed(join(dir, m.file));
    const data = await encode(t.data, format, quality);
    const file = basename(m.file, '.png') + '.' + format;
    writeFileSync(join(out, file), data);
    entries.push({
      file, kind: m.kind, id: m.id, bytes: data.length, sha256: createHash('sha256').update(data).digest('hex'),
      frame: { width: t.frameWidth, height: t.frameHeight }, offset: { left: t.left, top: t.top }, size: { width: t.info.width, height: t.info.height },
    });
  }
  const total = entries.reduce((n, e) => n + e.bytes, 0);
  writeFileSync(join(out, 'manifest.json'), JSON.stringify({ blender: renders.blender, seed: renders.seed, format, quality, totalBytes: total, entries }, null, 2) + '\n');
  console.log(`${entries.length} files, ${total} bytes -> ${out}`);
}

const [mode, a, b, format, quality] = process.argv.slice(2);
if (mode === 'measure' && a && b) await measure(resolve(a), resolve(b));
else if (mode === 'encode' && a && b && (format === 'avif' || format === 'webp')) await encodeAll(resolve(a), resolve(b), format, Number(quality));
else { console.error('usage: measure <masters> <report.json> | encode <masters> <out> <avif|webp> <quality>'); process.exit(2); }
