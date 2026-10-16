// The browser suite keeps its heavy tests apart (playwright.config.ts): beside a software-WebGL showcase test on a CI
// runner the one-round slice slowed from 17 s to 2 minutes and ran out of its time (run 38609311138, Edge).
import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import config from '../../playwright.config.ts';

const projects = config.projects ?? [];
const heavy = projects.filter(project => project.name?.endsWith('-heavy'));
const light = projects.filter(project => project.name !== 'perf' && !project.name?.endsWith('-heavy'));
const matches = (pattern: unknown, file: string): boolean =>
  (Array.isArray(pattern) ? pattern : [pattern]).some(p => p instanceof RegExp ? p.test(file) : false);

describe('browser suite projects', () => {
  it('give every engine a heavy project that runs one test at a time', () => {
    expect(heavy.map(project => project.name)).toEqual(light.map(project => `${project.name}-heavy`));
    for (const project of heavy) expect(project.workers, project.name).toBe(1);
  });

  it('run the heavy tests only after every light project and the heavy project before them', () => {
    heavy.forEach((project, i) => {
      expect(project.dependencies, project.name).toEqual(expect.arrayContaining(light.map(l => l.name)));
      if (i) expect(project.dependencies, project.name).toContain(heavy[i - 1]!.name);
    });
  });

  it('keep the heavy specs out of the light projects and the light specs out of the heavy ones', () => {
    for (const file of ['tests/e2e/showcase.spec.ts', 'tests/e2e/rehearsal.spec.ts']) {
      for (const project of light) expect(matches(project.testIgnore, file), `${project.name} ignores ${file}`).toBe(true);
      for (const project of heavy) expect(matches(project.testMatch, file), `${project.name} runs ${file}`).toBe(true);
    }
    for (const project of heavy) expect(matches(project.testMatch, 'tests/e2e/slice.spec.ts'), project.name).toBe(false);
  });

  it('measure performance after everything else', () => {
    const perf = projects.find(project => project.name === 'perf');
    if (perf) expect(perf.dependencies).toEqual(expect.arrayContaining([...light, ...heavy].map(project => project.name)));
  });

  // Contexts a test opens itself outlived it with Playwright's own `test` (G3, run 38958721130); helpers' `test` closes them.
  it('take `test` from the helpers, which close the contexts a test opened, never from Playwright directly', () => {
    const specs = readdirSync('tests/e2e').filter(file => file.endsWith('.spec.ts'));
    expect(specs.length).toBeGreaterThan(10);
    for (const file of specs) {
      const source = readFileSync(`tests/e2e/${file}`, 'utf8');
      expect(source, file).not.toMatch(/import \{[^}]*\btest\b[^}]*\} from '@playwright\/test'/);
      expect(source, file).toMatch(/import \{[^}]*\btest\b[^}]*\} from '\.\/helpers\.ts'/);
    }
  });
});
