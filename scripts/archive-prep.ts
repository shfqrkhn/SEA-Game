// Backup preparation (G2 item 8, AGENTS.md): the smallest project folder that still rebuilds, runs and is maintained
// the same. Usage: npm run archive:prep (dry run: lists what would go and what stays) or, only when the owner asks for
// a cleanup, npm run archive:prep -- --apply. Only the regenerable paths below are removed; everything else is kept:
// git history, source, content, renders, models, costly masters (.artifacts/renders, concepts, models), evidence and
// logs, and _archive/. Apply refuses any path that holds a tracked file or lies outside the project, unlinks links
// and junctions without following them, then writes RESTORE.md with the steps and the hashes to check.
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { existsSync, lstatSync, readFileSync, readdirSync, rmdirSync, unlinkSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Everything removable: each one comes back from a command in RESTORE.md. */
export const REGENERABLE: readonly { readonly path: string; readonly how: string }[] = [
  { path: 'node_modules', how: '`npm ci`' },
  { path: 'dist', how: '`npm run build`' },
  { path: '.artifacts/ms-playwright', how: '`npm run browsers` (Edge: the copy installed with Windows)' },
  { path: '.artifacts/npm-cache', how: 'npm fills it again' },
  { path: '.artifacts/tools', how: 'Blender 5.2.2: download and unzip (art/README.md, URL and SHA-256 there)' },
  { path: '.artifacts/gallery', how: '`npm run gallery`' },
  { path: '.artifacts/packed', how: '`node art/tools/pack-models.ts .artifacts/models .artifacts/packed/models.glb`' },
  { path: '.artifacts/test-results', how: '`npm run e2e`' },
  { path: '.artifacts/test-results-sw', how: '`npm run e2e`' },
  { path: '.artifacts/coverage', how: '`npx vitest run --coverage`' },
  { path: '.artifacts/tmp', how: 'scratch folders of the unit tests, made again by `npm test`' },
  { path: 'test-results', how: '`npm run e2e`' },
  { path: 'playwright-report', how: '`npm run e2e`' },
  { path: 'coverage', how: '`npx vitest run --coverage`' },
];
/** Python bytecode caches, wherever they are outside the removed folders. */
const CACHE_DIR = '__pycache__';

const ROOT = resolve(import.meta.dirname, '..');

interface Entry { readonly path: string; readonly how: string; readonly bytes: number; readonly files: number }

/** Size of a tree, not following links (a junction counts as nothing: its target is elsewhere). */
function measure(path: string): { bytes: number; files: number } {
  const stat = lstatSync(path);
  if (stat.isSymbolicLink() || !stat.isDirectory()) return { bytes: stat.isSymbolicLink() ? 0 : stat.size, files: 1 };
  let bytes = 0, files = 0;
  for (const name of readdirSync(path)) { const m = measure(join(path, name)); bytes += m.bytes; files += m.files; }
  return { bytes, files };
}

/** Removes a tree; links and junctions are unlinked, never followed. */
function remove(path: string): void {
  const stat = lstatSync(path);
  if (stat.isSymbolicLink()) { try { unlinkSync(path); } catch { rmdirSync(path); } return; }
  if (stat.isDirectory()) { for (const name of readdirSync(path)) remove(join(path, name)); rmdirSync(path); return; }
  unlinkSync(path);
}

function pycaches(root: string, dir = root, found: string[] = []): string[] {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    if (!name.isDirectory() || name.name === '.git' || name.name === '_archive') continue;
    const rel = relative(root, join(dir, name.name)).split(sep).join('/');
    if (REGENERABLE.some(r => rel === r.path)) continue;
    if (name.name === CACHE_DIR) found.push(rel); else pycaches(root, join(dir, name.name), found);
  }
  return found;
}

export function plan(root = ROOT): Entry[] {
  const tracked = execFileSync('git', ['ls-files', '-z'], { cwd: root, encoding: 'utf8', maxBuffer: 1 << 26 }).split('\0').filter(Boolean);
  const targets = [...REGENERABLE, ...pycaches(root).map(path => ({ path, how: 'Python writes it again' }))];
  const entries: Entry[] = [];
  for (const { path, how } of targets) {
    const full = resolve(root, path);
    if (!full.startsWith(root + sep)) throw new Error(`${path}: outside the project`);
    // A link or junction above the target (say .artifacts itself) would lead removal outside the project.
    for (let up = dirname(full); up.length > root.length; up = dirname(up)) {
      if (lstatSync(up, { throwIfNoEntry: false })?.isSymbolicLink()) throw new Error(`${path}: ${relative(root, up).split(sep).join('/')} is a link, refusing`);
    }
    if (tracked.some(t => t === path || t.startsWith(`${path}/`))) throw new Error(`${path}: holds tracked files, refusing`);
    if (!existsSync(full)) continue;
    entries.push({ path, how, ...measure(full) });
  }
  return entries;
}

const sha256 = (data: Buffer) => createHash('sha256').update(data).digest('hex');

/** RESTORE.md: the steps back to a working project and the hashes that prove it. */
export function restoreText(root: string, removed: readonly Entry[]): string {
  const git = (...args: string[]) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
  const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8')) as { gameVersion: string };
  const build = existsSync(join(root, 'dist', 'index.html')) ? sha256(readFileSync(join(root, 'dist', 'index.html'))) : '';
  const dirty = git('status', '--porcelain', '--untracked-files=no');
  return [
    '# Restore this project',
    '',
    `Written by \`npm run archive:prep -- --apply\` (scripts/archive-prep.ts) for SEA Game ${pkg.gameVersion}, commit \`${git('rev-parse', 'HEAD')}\`${dirty ? ' with uncommitted changes to tracked files' : ''}. It removed only what the commands below make again.`,
    '',
    '## Steps',
    '',
    '1. Install Node.js 22 or later (CI uses Node 24) and Git.',
    '2. `npm ci` installs the exact packages of package-lock.json.',
    '3. `npm run browsers` installs Chromium and Firefox into .artifacts/ms-playwright, where playwright.config.ts looks (plain `npx playwright install` would use the user cache); Edge is the copy installed with Windows.',
    '4. `npm run build` writes dist/index.html.',
    `5. Check it: its SHA-256 must be \`${build || 'not recorded: dist/ was absent at preparation'}\`.`,
    '6. `npm run verify` runs every check; it must pass.',
    '7. Only for art work: Blender 5.2.2 into .artifacts/tools/ (art/README.md gives the URL and SHA-256).',
    '',
    '## Removed',
    '',
    '| Path | Files | MB | Comes back from |',
    '|---|---:|---:|---|',
    ...removed.map(e => `| \`${e.path}\` | ${e.files} | ${(e.bytes / 1048576).toFixed(1)} | ${e.how} |`),
    '',
    'Kept: the git history, every tracked file, render masters, models, concept images, logs and evidence in .artifacts/, and _archive/.',
    '',
  ].join('\n');
}

export function prepare(root = ROOT, apply = false): { entries: Entry[]; restore?: string } {
  const entries = plan(root);
  if (!apply) return { entries };
  const restore = restoreText(root, entries);
  for (const e of entries) remove(resolve(root, e.path));
  writeFileSync(join(root, 'RESTORE.md'), restore);
  return { entries, restore };
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const apply = process.argv.includes('--apply');
  const { entries } = prepare(ROOT, apply);
  const total = entries.reduce((n, e) => n + e.bytes, 0);
  for (const e of entries) console.log(`${(e.bytes / 1048576).toFixed(1).padStart(9)} MB  ${e.path}  (back from ${e.how.replace(/`/g, '')})`);
  console.log(`${(total / 1048576).toFixed(1).padStart(9)} MB  ${apply ? 'removed; RESTORE.md written' : 'would be removed (dry run; --apply only when the owner asks for a cleanup)'}`);
}
