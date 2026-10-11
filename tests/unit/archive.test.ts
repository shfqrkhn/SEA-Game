// G2 item 8: npm run archive:prep -- --apply leaves the smallest folder that restores to the same build. On a fresh
// clone in a temp dir: install and build, plant what must stay and what may go, apply, then restore by RESTORE.md.
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, symlinkSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { plan, prepare } from '../../scripts/archive-prep.ts';

const ROOT = resolve(import.meta.dirname, '../..');
const npm = (cwd: string, ...args: string[]) => execFileSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', args, { cwd, stdio: 'pipe', shell: process.platform === 'win32' });
const hash = (path: string) => createHash('sha256').update(readFileSync(path)).digest('hex');
const put = (path: string, text = 'x') => { mkdirSync(dirname(path), { recursive: true }); writeFileSync(path, text); };

describe('archive:prep', () => {
  it('removes only the regenerable, keeps the irreplaceable, and restores to the same build', () => {
    const dir = mkdtempSync(join(tmpdir(), 'sea-archive-'));
    execFileSync('git', ['clone', '--quiet', '--no-hardlinks', ROOT, dir]);
    npm(dir, 'ci', '--prefer-offline', '--no-audit', '--no-fund');
    npm(dir, 'run', 'build');
    const built = hash(join(dir, 'dist', 'index.html'));

    const keep = ['.artifacts/renders/v3/combat-hero.png', '.artifacts/concepts-v3/FP-C.png', '.artifacts/models/combat.glb',
      '.artifacts/logs/verify.log', '.artifacts/review/0.5.0.0.html', '_archive/recycle/old.txt', '_archive/x/__pycache__/keep.pyc'];
    const go = ['.artifacts/ms-playwright/chromium/chrome.exe', '.artifacts/gallery/after/chooser.png', '.artifacts/tools/blender/blender.exe',
      '.artifacts/packed/models.glb', 'test-results/a.txt', 'art/blender/sea/__pycache__/geo.pyc'];
    for (const p of [...keep, ...go]) put(join(dir, p));
    // A gallery tag tree links to a kept folder: removing the link must not touch its target.
    mkdirSync(join(dir, '.artifacts', 'gallery', 'v0'));
    symlinkSync(join(dir, '.artifacts', 'renders'), join(dir, '.artifacts', 'gallery', 'v0', 'node_modules'), 'junction');

    expect(plan(dir).map(e => e.path)).toEqual(expect.arrayContaining(['node_modules', 'dist', '.artifacts/gallery', 'art/blender/sea/__pycache__']));
    prepare(dir, true);
    for (const p of keep) expect(existsSync(join(dir, p)), `kept ${p}`).toBe(true);
    for (const p of [...go, 'node_modules', 'dist']) expect(existsSync(join(dir, p)), `removed ${p}`).toBe(false);
    expect(execFileSync('git', ['status', '--porcelain', '--untracked-files=no'], { cwd: dir, encoding: 'utf8' })).toBe('');
    const restore = readFileSync(join(dir, 'RESTORE.md'), 'utf8');
    expect(restore).toContain(built);

    npm(dir, 'ci', '--prefer-offline', '--no-audit', '--no-fund');
    npm(dir, 'run', 'build');
    expect(hash(join(dir, 'dist', 'index.html'))).toBe(built);
  }, 600_000);

  it('refuses a path that holds a tracked file', () => {
    const dir = mkdtempSync(join(tmpdir(), 'sea-archive-tracked-'));
    const git = (...args: string[]) => execFileSync('git', args, { cwd: dir, stdio: 'pipe' });
    git('init', '--quiet');
    put(join(dir, 'dist', 'index.html'));
    git('add', 'dist/index.html');
    expect(() => plan(dir)).toThrow(/tracked/);
  });
});
