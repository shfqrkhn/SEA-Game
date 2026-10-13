// Visual review gallery (G2 item 4, AGENTS.md visual check). Usage: npm run gallery [-- --since <tag>] [--notes <file>]
// Builds this checkout and the tag (default: the latest tag), captures every shot of scripts/gallery/shots.ts from
// both, and writes one offline captioned page, .artifacts/review/<gameVersion>.html: after beside before, changed
// shots first in each group. Nothing is fetched; the images are embedded.
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, statSync, symlinkSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import sharp from 'sharp';
import { reflow } from '../source/ui/reflow.ts';
import { DISPLAYS, shots, type Shot } from './gallery/shots.ts';

const ROOT = resolve(import.meta.dirname, '..');
const WORK = join(ROOT, '.artifacts', 'gallery');
const arg = (name: string) => { const i = process.argv.indexOf(name); return i > 0 ? process.argv[i + 1] : undefined; };
const git = (...args: string[]) => execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' }).trim();
const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';

/** The tag's game file, built once from `git archive` into .artifacts/gallery/<tag>/: with this checkout's packages when
 *  the tag's lockfile is the same, otherwise with the tag's own (`npm ci`), so the before-image is the tag as released. */
function buildTag(tag: string): string {
  const tree = join(WORK, tag);
  const out = join(tree, 'dist', 'index.html');
  if (existsSync(out)) return out;
  mkdirSync(tree, { recursive: true });
  const archive = execFileSync('git', ['archive', '--format=tar', tag], { cwd: ROOT, maxBuffer: 1 << 30 });
  // Windows' own tar: the Git Bash tar earlier on PATH cannot open drive-letter paths.
  const tar = process.platform === 'win32' ? join(process.env.SystemRoot ?? 'C:\\Windows', 'System32', 'tar.exe') : 'tar';
  execFileSync(tar, ['-x', '-C', tree], { input: archive });
  if (!existsSync(join(tree, 'node_modules'))) {
    const same = readFileSync(join(tree, 'package-lock.json'), 'utf8') === readFileSync(join(ROOT, 'package-lock.json'), 'utf8');
    if (same) symlinkSync(join(ROOT, 'node_modules'), join(tree, 'node_modules'), 'junction');
    else execFileSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['ci', '--no-audit', '--no-fund'], { cwd: tree, stdio: 'inherit', shell: process.platform === 'win32' });
  }
  execFileSync(process.execPath, ['build/build.ts'], { cwd: tree, stdio: 'inherit' });
  return out;
}

/** Captures every shot of one game file; a shot that fails (a view an older tag lacks) leaves no fresh file. True when
 *  every shot was captured. */
function capture(dist: string, out: string): boolean {
  mkdirSync(out, { recursive: true });
  const run = spawnSync(npx, ['playwright', 'test', '--config', 'scripts/gallery/playwright.config.ts'], {
    cwd: ROOT, stdio: 'inherit', shell: process.platform === 'win32',
    env: { ...process.env, SEA_GALLERY_DIST: dist, SEA_GALLERY_OUT: out },
  });
  if (run.status !== 0) console.warn(`Some shots of ${dist} failed; they are marked missing in the gallery.`);
  return run.status === 0;
}

/** A capture written since `after` (ms); older files are left from earlier runs and count as missing. */
async function image(path: string, after = 0): Promise<{ uri: string; raw: Buffer; width: number; height: number } | null> {
  if (!existsSync(path) || statSync(path).mtimeMs < after) return null;
  const { data, info } = await sharp(path).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const webp = await sharp(path).webp({ quality: 80 }).toBuffer();
  return { uri: `data:image/webp;base64,${webp.toString('base64')}`, raw: data, width: info.width, height: info.height };
}

/** Changed when the size differs or more than 0.1 % of pixels differ noticeably. */
function changed(a: { raw: Buffer; width: number; height: number }, b: { raw: Buffer; width: number; height: number }): boolean {
  if (a.width !== b.width || a.height !== b.height) return true;
  let differing = 0;
  for (let i = 0; i < a.raw.length; i += 3) {
    if (Math.abs(a.raw[i]! - b.raw[i]!) + Math.abs(a.raw[i + 1]! - b.raw[i + 1]!) + Math.abs(a.raw[i + 2]! - b.raw[i + 2]!) > 24) differing++;
  }
  return differing > 0.001 * a.width * a.height;
}

const escape = (s: string) => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

async function main(): Promise<void> {
  const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8')) as { gameVersion: string };
  const since = arg('--since') ?? git('describe', '--tags', '--abbrev=0');
  const notes = arg('--notes');
  execFileSync(process.execPath, ['build/build.ts'], { cwd: ROOT, stdio: 'inherit' });
  const after = join(WORK, 'after'), before = join(WORK, `before-${since}`);
  const started = Date.now() - 1000;
  capture(join(ROOT, 'dist', 'index.html'), after);
  // The baseline is kept only when every shot of it was captured; otherwise it is captured again next time, so a failed
  // capture never passes for a view the tag lacked ("New since").
  if (!existsSync(join(before, '.complete')) && capture(buildTag(since), before)) writeFileSync(join(before, '.complete'), since);

  const list = shots();
  const rows: { shot: Shot; status: 'changed' | 'new' | 'same' | 'missing'; html: string }[] = [];
  for (const shot of list) {
    const [a, b] = await Promise.all([image(join(after, `${shot.id}.png`), started), image(join(before, `${shot.id}.png`))]);
    const status = !a ? 'missing' : !b ? 'new' : changed(a, b) ? 'changed' : 'same';
    const label = { changed: 'Changed', new: `New since ${since}`, same: `Unchanged since ${since}`, missing: 'Capture failed' }[status];
    const figure = (img: typeof a, name: string) => img
      ? `<figure><figcaption>${escape(name)}</figcaption><img src="${img.uri}" width="${img.width}" height="${img.height}" alt="${escape(`${shot.title}, ${name}`)}" loading="lazy" decoding="async"></figure>`
      : '';
    rows.push({ shot, status, html: `<article id="${shot.id}" class="shot ${status}"><h3>${escape(shot.title)} <span class="badge">${label}</span></h3>
<p>${escape(shot.caption)} <span class="muted">${escape(shot.display.name)}.</span></p>
<div class="pair">${figure(a, `After: ${pkg.gameVersion}`)}${status === 'changed' ? figure(b, `Before: ${since}`) : ''}</div></article>` });
  }
  const groups = [...new Set(list.map(s => s.group))];
  const order = { changed: 0, new: 1, missing: 2, same: 3 } as const;
  const count = (status: string) => rows.filter(r => r.status === status).length;
  const intro = notes ? reflow(readFileSync(notes, 'utf8')).map(b => b.kind === 'list'
    ? `<ul>${b.items.map(i => `<li>${escape(i)}</li>`).join('')}</ul>` : b.kind === 'heading' ? `<h3>${escape(b.text)}</h3>` : `<p>${escape(b.text)}</p>`).join('\n') : '';
  const page = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>SEA Game ${pkg.gameVersion} visual review</title>
<style>
:root { color-scheme: dark light; --bg: #0d1412; --panel: #15201c; --ink: #e6efe9; --muted: #9db3a8; --accent: #7fdcb0; --warn: #f0c060; --line: #2a3a33; }
@media (prefers-color-scheme: light) { :root { --bg: #f4f6f4; --panel: #ffffff; --ink: #14201b; --muted: #4c5f56; --accent: #0d5a3a; --warn: #8a5a00; --line: #cfd8d3; } }
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); font: 16px/1.5 system-ui, "Segoe UI", sans-serif; }
header, main { max-width: 1500px; margin: 0 auto; padding: 16px; }
h1 { font-size: 1.6rem; margin: .5rem 0; } h2 { margin-top: 2rem; border-bottom: 1px solid var(--line); padding-bottom: .25rem; }
h3 { font-size: 1.05rem; margin: 0 0 .25rem; }
nav a { color: var(--accent); margin-right: 1rem; }
.muted { color: var(--muted); }
.shot { background: var(--panel); border: 1px solid var(--line); border-radius: 6px; padding: 12px; margin: 12px 0; }
.shot.changed, .shot.new { border-color: var(--accent); } .shot.missing { border-color: var(--warn); }
.badge { font-size: .75rem; font-weight: 600; text-transform: uppercase; letter-spacing: .05em; border: 1px solid currentColor; border-radius: 4px; padding: 0 .4rem; margin-left: .5rem; color: var(--muted); }
.changed .badge, .new .badge { color: var(--accent); } .missing .badge { color: var(--warn); }
.pair { display: grid; gap: 12px; grid-template-columns: repeat(auto-fit, minmax(min(100%, 560px), 1fr)); align-items: start; }
figure { margin: 0; } figcaption { font-size: .85rem; color: var(--muted); margin-bottom: 4px; }
img { display: block; max-width: 100%; height: auto; border: 1px solid var(--line); cursor: zoom-in; }
img.zoom { max-width: none; cursor: zoom-out; }
.pair:has(img.zoom) { overflow-x: auto; display: block; }
</style></head><body>
<header><h1>SEA Game ${pkg.gameVersion}: visual review</h1>
<p>Compared with <strong>${escape(since)}</strong>. ${count('changed')} changed, ${count('new')} new, ${count('same')} unchanged${count('missing') ? `, <strong>${count('missing')} failed to capture</strong>` : ''}, of ${rows.length} shots. Displays: ${DISPLAYS.map(d => escape(d.name)).join('; ')}. Changed shots show the version before them; select an image to see it at full size.</p>
${intro}
<p><strong>Reply GO if this version looks right, or FIX with what to change.</strong></p>
<nav>${groups.map(g => `<a href="#${g.replace(/\W+/g, '-')}">${escape(g)}</a>`).join('')}</nav></header>
<main>
${groups.map(g => `<h2 id="${g.replace(/\W+/g, '-')}">${escape(g)}</h2>\n${rows.filter(r => r.shot.group === g).sort((x, y) => order[x.status] - order[y.status]).map(r => r.html).join('\n')}`).join('\n')}
</main>
<script>document.addEventListener('click', e => { if (e.target instanceof HTMLImageElement) e.target.classList.toggle('zoom'); });</script>
</body></html>
`;
  const out = join(ROOT, '.artifacts', 'review', `${pkg.gameVersion}.html`);
  mkdirSync(join(ROOT, '.artifacts', 'review'), { recursive: true });
  writeFileSync(out, page);
  console.log(`${out}: ${rows.length} shots, ${count('changed')} changed, ${count('new')} new, ${count('missing')} missing, ${(Buffer.byteLength(page) / 1048576).toFixed(1)} MB`);
  if (count('missing')) process.exitCode = 1;
}

await main();
