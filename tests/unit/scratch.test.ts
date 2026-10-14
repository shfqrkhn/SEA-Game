// Unit tests that make scratch folders in .artifacts/tmp remove them afterwards: the archive and codebase tests once
// left 104 clones (29 with node_modules) behind, one set per verify (2026-10-12).
import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

const DIR = resolve(import.meta.dirname);

describe('unit-test scratch', () => {
  it('every test file that makes a scratch folder removes it in afterAll', () => {
    const makers = readdirSync(DIR).filter(f => f.endsWith('.ts') && f !== 'scratch.test.ts').map(f => [f, readFileSync(join(DIR, f), 'utf8')] as const)
      .filter(([, text]) => /mkdtemp(Sync)?\(/.test(text));
    expect(makers.map(([f]) => f).sort()).toEqual(['archive.test.ts', 'codebase.test.ts', 'encode-cache.test.ts']);
    for (const [f, text] of makers) expect(text, f).toMatch(/afterAll\(\(\) => \{ for \(const dir of made\) rmSync\(dir, \{ recursive: true/);
  });
});
