// MPES §10.3, Codex G3 review: a disposed 3D stage leaves nothing listening. A listener left on the document, the
// motion query or the canvas kept a disposed stage alive and could restart its lost-context check after disposal.
// The stage cannot be built without WebGL here, so this reads its source: every listener it adds, except on the orbit
// controls (which their own dispose removes), passes an options object whose `signal` is the stage's own controller's,
// and dispose aborts that same controller. A second review found the first version of this check satisfied by the word
// `signal` anywhere in the call (a comment, another controller's signal), so the check now proves itself against those.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const SOURCE = readFileSync('source/showcase/model.ts', 'utf8');

/** Each `addEventListener(` call: its receiver and its top-level arguments, matched to the closing parenthesis. */
function listenerCalls(source: string): { receiver: string; args: string[] }[] {
  const calls: { receiver: string; args: string[] }[] = [];
  for (const match of source.matchAll(/([\w.#]+)\.addEventListener\(/g)) {
    const args: string[] = [];
    let depth = 1, i = match.index + match[0].length, from = i;
    for (; depth > 0 && i < source.length; i++) {
      const c = source[i];
      if (c === '(' || c === '{' || c === '[') depth++;
      else if (c === ')' || c === '}' || c === ']') depth--;
      if ((c === ',' && depth === 1) || depth === 0) { args.push(source.slice(from, i).trim()); from = i + 1; }
    }
    calls.push({ receiver: match[1]!, args });
  }
  return calls;
}

/** What is wrong with a stage source's listener disposal; empty when every listener goes with the stage. */
function disposalFaults(source: string): string[] {
  const faults: string[] = [];
  const code = source.replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*/g, '');
  if (!/readonly #listening = new AbortController\(\);/.test(code)) faults.push('no #listening controller');
  // The one `signal` in scope is the controller's: destructured from it once, and bound nowhere else.
  const bindings = code.match(/\b(?:const|let|var)\s*\{?[^=;]*\bsignal\b[^=;]*=/g) ?? [];
  if (bindings.length !== 1 || !/const \{ signal \} = this\.#listening;/.test(code)) faults.push('signal is not the #listening signal');
  for (const { receiver, args } of listenerCalls(code)) {
    if (receiver === 'this.#controls') continue;
    const options = args.length === 3 ? args[2]! : '';
    const props = options.startsWith('{') && options.endsWith('}') ? options.slice(1, -1).split(',').map(p => p.trim()) : [];
    if (!props.some(p => p === 'signal' || p === 'signal: signal' || p === 'signal: this.#listening.signal')) faults.push(`${receiver} ${args[0]} has no stage signal`);
  }
  const dispose = /\n {2}dispose\(\): void \{([\s\S]*?)\n {2}\}/.exec(code)?.[1] ?? '';
  if (!/this\.#listening\.abort\(\);/.test(dispose)) faults.push('dispose does not abort #listening');
  return faults;
}

describe('3D stage disposal (MPES §10.3)', () => {
  it('finds the stage listeners', () => {
    expect(listenerCalls(SOURCE).length).toBeGreaterThanOrEqual(8);
  });

  it('removes every listener outside the orbit controls on dispose', () => {
    expect(disposalFaults(SOURCE)).toEqual([]);
  });

  it('catches a listener the stage controller would not remove', () => {
    const mutations: [string, string][] = [
      ["}, { signal });\n    this.canvas.addEventListener('webglcontextrestored', event", "}, { /* signal */ });\n    this.canvas.addEventListener('webglcontextrestored', event"],
      ["() => this.#loop(), { signal });", "() => this.#loop(), { signal: new AbortController().signal });"],
      ["() => this.#loop(), { signal });", "() => this.#loop() /* signal */);"],
      ['const { signal } = this.#listening;', 'const { signal } = new AbortController();'],
      ['this.#listening.abort();', '// this.#listening.abort();'],
    ];
    for (const [from, to] of mutations) {
      expect(SOURCE, from).toContain(from);
      expect(disposalFaults(SOURCE.replace(from, to)), to).not.toEqual([]);
    }
  });
});
