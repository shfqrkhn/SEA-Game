// MPES §10.3, Codex G3 review: a disposed 3D stage leaves nothing listening. A listener left on the document, the
// motion query or the canvas kept a disposed stage alive and could restart its lost-context check after disposal.
// The stage cannot be built without WebGL here, so this reads its source: every listener it adds, except on the orbit
// controls (which their own dispose removes), carries the stage's abort signal, and dispose aborts it.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const SOURCE = readFileSync('source/showcase/model.ts', 'utf8');

/** Each `addEventListener(` call: its receiver and its full argument text, matched to the closing parenthesis. */
function listenerCalls(source: string): { receiver: string; args: string }[] {
  const calls: { receiver: string; args: string }[] = [];
  for (const match of source.matchAll(/([\w.#]+)\.addEventListener\(/g)) {
    let depth = 1, i = match.index + match[0].length;
    for (; depth > 0 && i < source.length; i++) depth += source[i] === '(' ? 1 : source[i] === ')' ? -1 : 0;
    calls.push({ receiver: match[1]!, args: source.slice(match.index + match[0].length, i - 1) });
  }
  return calls;
}

describe('3D stage disposal (MPES §10.3)', () => {
  const calls = listenerCalls(SOURCE);

  it('finds the stage listeners', () => {
    expect(calls.length).toBeGreaterThanOrEqual(8);
  });

  it('gives every listener outside the orbit controls the stage signal', () => {
    const unsigned = calls.filter(c => c.receiver !== 'this.#controls' && !/\bsignal\b/.test(c.args)).map(c => c.receiver);
    expect(unsigned).toEqual([]);
  });

  it('aborts that signal on dispose', () => {
    const dispose = /\n {2}dispose\(\): void \{([\s\S]*?)\n {2}\}/.exec(SOURCE)?.[1] ?? '';
    expect(dispose).toMatch(/\.abort\(\)/);
  });
});
