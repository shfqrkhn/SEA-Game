// Deterministic single-file renderer (MPES §5.5). The CLI is build/build.ts.
import { build } from 'esbuild';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

export const MAX_BYTES = 8 * 1024 * 1024;
export const ROOT = fileURLToPath(new URL('..', import.meta.url));
export const OUT = join(ROOT, 'dist', 'index.html');
const REQUIRED_NOTICES = ['three.js', 'Copyright © 2010-2026 three.js authors'];

function read(path: string): string {
  return readFileSync(join(ROOT, path), 'utf8');
}

/** Builds must not depend on the checkout's line endings. */
function assertLf(dir: string): void {
  for (const name of readdirSync(join(ROOT, dir))) {
    const path = join(dir, name);
    if (statSync(join(ROOT, path)).isDirectory()) { assertLf(path); continue; }
    if (/\.(ts|css|json|html|md|svg)$/.test(name) && read(path).includes('\r')) {
      throw new Error(`CRLF line ending in ${relative(ROOT, join(ROOT, path))}`);
    }
  }
}

export function sha256(text: string): string {
  return createHash('sha256').update(text, 'utf8').digest('base64');
}

interface RenderEntry {
  readonly file: string; readonly id: string; readonly kind: string; readonly sha256: string; readonly depth: number | null;
  readonly frame: { width: number; height: number }; readonly offset: { left: number; top: number }; readonly size: { width: number; height: number };
}
export const RENDERS_DIR = 'content/renders/spike';

/** Committed renders (MPES §11) as one inert JSON object: id -> data URI and placement. Hashes are checked. */
function renders(): string {
  const manifest = JSON.parse(read(`${RENDERS_DIR}/manifest.json`)) as { format: string; entries: RenderEntry[] };
  const out: Record<string, unknown> = {};
  for (const e of manifest.entries) {
    const bytes = readFileSync(join(ROOT, RENDERS_DIR, e.file));
    if (createHash('sha256').update(bytes).digest('hex') !== e.sha256) throw new Error(`Render hash mismatch: ${e.file}`);
    out[e.id] = { src: `data:image/${manifest.format};base64,${bytes.toString('base64')}`, kind: e.kind, depth: e.depth, frame: e.frame, offset: e.offset, size: e.size };
  }
  const json = JSON.stringify(out);
  if (json.includes('<')) throw new Error('Unsafe renders content');
  return json;
}

export async function render(): Promise<string> {
  for (const dir of ['source', 'content', 'build']) assertLf(dir);
  for (const file of ['LICENSE', 'THIRD_PARTY_NOTICES.md']) if (read(file).includes('\r')) throw new Error(`CRLF in ${file}`);
  const version = (JSON.parse(read('package.json')) as { version: string }).version;
  const notices = read('THIRD_PARTY_NOTICES.md');
  for (const needle of REQUIRED_NOTICES) if (!notices.includes(needle)) throw new Error(`Missing notice: ${needle}`);

  const common = { bundle: true, write: false, minify: true, legalComments: 'none', charset: 'utf8', logLevel: 'silent' } as const;
  const script = await build({
    ...common,
    entryPoints: [join(ROOT, 'source', 'main.ts')],
    format: 'iife',
    target: 'es2022',
    define: {
      __SEA_VERSION__: JSON.stringify(version),
      __SEA_NOTICES__: JSON.stringify(notices),
      __SEA_LICENSE__: JSON.stringify(read('LICENSE')),
    },
  });
  const style = await build({ ...common, entryPoints: [join(ROOT, 'source', 'ui', 'styles.css')], loader: { '.css': 'css' } });
  const js = script.outputFiles[0]!.text.trim().replace(/<\/(script)/gi, '<\\/$1').replace(/<!--/g, '<\\!--');
  const css = style.outputFiles[0]!.text.trim();
  if (css.includes('</style')) throw new Error('Unsafe style content');

  const csp = [
    "default-src 'none'",
    `script-src 'sha256-${sha256(js)}'`,
    `style-src 'sha256-${sha256(css)}'`,
    "img-src data: blob:",
    "font-src 'none'",
    "connect-src 'none'",
    "media-src 'none'",
    "object-src 'none'",
    "frame-src 'none'",
    "worker-src 'none'",
    "manifest-src 'none'",
    "base-uri 'none'",
    "form-action 'none'",
  ].join('; ');
  const template = read('build/template.html');
  const html = template
    .replace('{{CSP}}', () => csp)
    .replace('{{VERSION}}', () => version)
    .replace('{{STYLE}}', () => css)
    .replace('{{RENDERS}}', () => renders())
    .replace('{{SCRIPT}}', () => js);
  if (/\{\{[A-Z]+\}\}/.test(html)) throw new Error('Unfilled template placeholder');
  const bytes = Buffer.byteLength(html, 'utf8');
  if (bytes > MAX_BYTES) throw new Error(`dist/index.html is ${bytes} bytes; limit ${MAX_BYTES}`);
  return html;
}

