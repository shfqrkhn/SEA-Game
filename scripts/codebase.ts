// docs/CODEBASE.md (G2 item 7): every tracked text file verbatim, each unique content once, with its paths and SHA-256;
// every binary file listed with its SHA-256, size and the command that regenerates it. Usage: npm run codebase
// [-- --check] (exit 1 when docs/CODEBASE.md is out of date). The output is deterministic: no dates, no commit hashes.
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(import.meta.dirname, '..');
export const OUTPUT = 'docs/CODEBASE.md';
/** Kept out of the codebase file: the specification is its own clean-room document, and this file cannot hold itself. */
export const SEPARATE: Readonly<Record<string, string>> = {
  'docs/MPES.md': 'The specification, a clean-room document of its own (Omni 5.1.1 §333).',
  [OUTPUT]: 'This file.',
};

/** How each kind of binary file is made again; the first matching pattern applies. */
export const REGENERATE: readonly { readonly key: string; readonly pattern: RegExp; readonly how: string }[] = [
  {
    key: 'R', pattern: /^content\/renders\/.+\.avif$/,
    how: 'Render the masters with Blender 5.2.2 (art/README.md): `blender -b --factory-startup --python-exit-code 1 -P art/blender/render.py -- --out .artifacts/renders/v3`, then encode them and write content/renders/manifest.json: `node art/tools/encode-renders.ts encode .artifacts/renders/v3 content/renders avif 65`. Cycles output varies slightly by GPU and driver, so new files match in look and size, not byte for byte.',
  },
  {
    key: 'M', pattern: /^content\/models\/.+\.glb$/,
    how: 'Export with Blender 5.2.2: `blender -b --factory-startup -P art/blender/export.py -- --out .artifacts/models`, pack: `node art/tools/pack-models.ts .artifacts/models .artifacts/packed/models.glb`, copy the result to content/models/showcase.glb and put its SHA-256 and size in content/models/manifest.json.',
  },
  {
    key: 'S', pattern: /^tests\/e2e\/visual\.spec\.ts-snapshots\/.+\.png$/,
    how: 'Visual test baselines, Chromium on Windows: `npm run build`, then `npx playwright test tests/e2e/visual.spec.ts --project=chromium --update-snapshots`; review every changed image before committing it.',
  },
];

const LANGUAGE: Readonly<Record<string, string>> = { ts: 'ts', mjs: 'js', js: 'js', json: 'json', md: 'markdown', py: 'python', yml: 'yaml', yaml: 'yaml', css: 'css', html: 'html', svg: 'xml', sh: 'sh' };

export const sha256 = (data: Buffer | string) => createHash('sha256').update(data).digest('hex');

/** Text means valid UTF-8 with no NUL byte; everything else is binary. */
export function isText(data: Buffer): boolean {
  return !data.includes(0) && Buffer.from(data.toString('utf8'), 'utf8').equals(data);
}

/** The fence: backticks, one more than the longest run in the content, at least three. */
export function fence(content: string): string {
  const longest = Math.max(0, ...[...content.matchAll(/`+/g)].map(m => m[0].length));
  return '`'.repeat(Math.max(3, longest + 1));
}

export function trackedFiles(root = ROOT): string[] {
  return execFileSync('git', ['ls-files', '-z'], { cwd: root, encoding: 'utf8', maxBuffer: 1 << 26 }).split('\0').filter(Boolean).sort();
}

export function codebase(root = ROOT): string {
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { gameVersion: string };
  // This file describes itself the same way whether or not it is tracked yet.
  const files = [...trackedFiles(root).filter(p => p !== OUTPUT), OUTPUT];
  const unique = new Map<string, { paths: string[]; content: string; bytes: number }>();
  const binaries: { path: string; hash: string; bytes: number; key: string }[] = [];
  const separate: { path: string; hash: string; bytes: number; why: string }[] = [];
  for (const path of files) {
    if (path === OUTPUT) { separate.push({ path, hash: '', bytes: 0, why: SEPARATE[path]! }); continue; }
    const data = readFileSync(join(root, path));
    const hash = sha256(data);
    if (path in SEPARATE) { separate.push({ path, hash, bytes: data.length, why: SEPARATE[path]! }); continue; }
    if (isText(data)) {
      const entry = unique.get(hash);
      if (entry) entry.paths.push(path); else unique.set(hash, { paths: [path], content: data.toString('utf8'), bytes: data.length });
      continue;
    }
    const rule = REGENERATE.find(r => r.pattern.test(path));
    if (!rule) throw new Error(`${path}: binary file with no regenerating command in scripts/codebase.ts`);
    binaries.push({ path, hash, bytes: data.length, key: rule.key });
  }
  const textCount = [...unique.values()].reduce((n, u) => n + u.paths.length, 0);
  const out: string[] = [
    '# SEA Game codebase',
    '',
    `Version ${pkg.gameVersion}. Written by \`npm run codebase\` (scripts/codebase.ts); do not edit by hand. It holds all ${files.length} tracked files of the repository: ${textCount} text files as ${unique.size} unique contents, ${binaries.length} binary files by hash with the command that regenerates them, and ${separate.length} documents kept separately. With docs/MPES.md it is enough to rebuild the project.`,
    '',
    '## How to rebuild the tree',
    '',
    '1. For each section under "Text files", write the fenced block to every path on its "Paths" line, byte for byte, in UTF-8 with LF line ends. The block is everything between the opening fence line and the closing fence line, which is the same run of backticks alone on a line.',
    '2. Each block ends with a line end, which belongs to the file unless the section says "no final line end"; then drop that one last LF. A section of 0 bytes has an empty block and makes an empty file.',
    '3. Check every file against the SHA-256 on its section.',
    '4. Make each binary file with the command of its key (table "Binary files"); check its hash when the command is deterministic.',
    '5. Then: `npm ci`, `npx playwright install chromium firefox msedge`, `npm run verify`.',
    '',
    '## Text files',
    '',
  ];
  for (const [hash, { paths, content, bytes }] of unique) {
    const ext = paths[0]!.includes('.') ? paths[0]!.split('.').pop()!.toLowerCase() : '';
    const final = content.length === 0 || content.endsWith('\n');
    const mark = fence(content);
    out.push(`### ${paths[0]}`, '', `Paths: ${paths.map(p => `\`${p}\``).join(', ')}. SHA-256 \`${hash}\`, ${bytes} bytes${final ? '' : ', no final line end'}.`, '',
      `${mark}${LANGUAGE[ext] ?? 'text'}`, ...(content ? [final ? content.slice(0, -1) : content] : []), mark, '');
  }
  out.push('## Binary files', '', 'Keys and the commands that make each kind again:', '');
  for (const rule of REGENERATE) if (binaries.some(b => b.key === rule.key)) out.push(`- **${rule.key}**: ${rule.how}`);
  out.push('', '| Path | Bytes | SHA-256 | Key |', '|---|---:|---|---|');
  for (const b of binaries) out.push(`| \`${b.path}\` | ${b.bytes} | \`${b.hash}\` | ${b.key} |`);
  out.push('', '## Documents kept separately', '', '| Path | Bytes | SHA-256 | Why |', '|---|---:|---|---|');
  for (const s of separate) out.push(s.path === OUTPUT ? `| \`${s.path}\` | | | ${s.why} |` : `| \`${s.path}\` | ${s.bytes} | \`${s.hash}\` | ${s.why} |`);
  return `${out.join('\n')}\n`;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const current = (() => { try { return readFileSync(join(ROOT, OUTPUT), 'utf8'); } catch { return ''; } })();
  const next = codebase();
  if (process.argv.includes('--check')) {
    if (current !== next) { console.error(`${OUTPUT} is out of date: run npm run codebase.`); process.exitCode = 1; }
  } else {
    writeFileSync(join(ROOT, OUTPUT), next);
    console.log(`${OUTPUT}: ${(Buffer.byteLength(next) / 1048576).toFixed(2)} MB`);
  }
}
