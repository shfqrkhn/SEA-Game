// G2 item 6 (Omni 5.1.1 §6.2, AGENTS.md rule 18): docs/MPES.md alone rebuilds the project, without code. It has no
// code block, names every tracked source, test, script, configuration and document file, every npm script and every
// pinned package at its exact version, and states the Content-Security-Policy the build writes.
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const MPES = readFileSync('docs/MPES.md', 'utf8');
const pkg = JSON.parse(readFileSync('package.json', 'utf8')) as {
  scripts: Record<string, string>; dependencies: Record<string, string>; devDependencies: Record<string, string>; overrides: Record<string, string>;
};

describe('docs/MPES.md', () => {
  it('holds no code block', () => {
    const fences = MPES.split('\n').map((line, i) => [i + 1, line] as const).filter(([, line]) => /^\s*(```|~~~)/.test(line));
    expect(fences.map(([n]) => n)).toEqual([]);
  });

  it('names every tracked file a rebuild writes by hand', () => {
    const tracked = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8', maxBuffer: 1 << 26 }).split('\0').filter(Boolean);
    // Generated or bulk files are named by their folder and the command that makes them: renders, the model, visual
    // baselines, legacy fixtures (copied from the previous application) and recycled files. Omni is not tracked.
    const byFolder = /^(content\/renders\/.+\.avif|content\/models\/showcase\.glb|tests\/e2e\/visual\.spec\.ts-snapshots\/|tests\/fixtures\/legacy\/|_archive\/)/;
    const missing = tracked.filter(path => !byFolder.test(path) && !MPES.includes(`\`${path}\``));
    expect(missing).toEqual([]);
    for (const folder of ['content/renders/', 'content/models/showcase.glb', 'tests/e2e/visual.spec.ts-snapshots/', 'tests/fixtures/legacy/']) {
      expect(MPES, folder).toContain(`\`${folder}`);
    }
  });

  it('names every npm script', () => {
    for (const name of Object.keys(pkg.scripts)) expect(MPES, name).toContain(`\`npm run ${name}\``);
  });

  it('pins every package at its exact version', () => {
    const pins = { ...pkg.dependencies, ...pkg.devDependencies, ...pkg.overrides };
    const lines = MPES.split('\n');
    for (const [name, version] of Object.entries(pins)) {
      expect(lines.some(line => line.includes(`\`${name}\``) && line.includes(version)), `${name} ${version}`).toBe(true);
    }
  });

  it('states the Content-Security-Policy directives the build writes', () => {
    const build = readFileSync('build/render.ts', 'utf8');
    const written = [...build.matchAll(/^\s*[`"]([a-z-]+) /gm)].map(m => m[1]!).sort();
    const section = MPES.split('### 13.1')[1]!.split('\n### ')[0]!;
    const stated = [...section.matchAll(/^\| `([a-z-]+)` \|/gm)].map(m => m[1]!).sort();
    expect(written.length).toBeGreaterThan(10);
    expect(stated).toEqual(written);
  });

  it('plans G3 to G8 with their versions', () => {
    const plan = MPES.split('## 17.')[1]!.split('\n## ')[0]!;
    for (const [goal, version] of [['G3', '0.6.0.0'], ['G4', '0.7.0.0'], ['G5', '0.8.0.0'], ['G6', '0.9.0.0'], ['G7', '0.9.1.0'], ['G8', '1.0.0.0']] as const) {
      expect(plan, goal).toMatch(new RegExp(`\\*\\*${goal}\\b[^|]*\\|[^\\n]*${version.replace(/\./g, '\\.')}`));
    }
  });
});
