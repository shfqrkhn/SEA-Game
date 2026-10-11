// G2 item 7: docs/CODEBASE.md rebuilds the tree. This test reads it with its own parser, following only the rules the
// file states, writes every text file into a temp dir and checks every tracked file's SHA-256 against the repository.
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { codebase } from '../../scripts/codebase.ts';

const sha = (data: Buffer | string) => createHash('sha256').update(data).digest('hex');
// Scratch stays inside the project (MPES C-13): .artifacts/tmp, which archive:prep lists as regenerable.
const TMP = resolve(import.meta.dirname, '../../.artifacts/tmp');
const scratch = (prefix: string) => { mkdirSync(TMP, { recursive: true }); return mkdtempSync(join(TMP, prefix)); };
const DOC = readFileSync('docs/CODEBASE.md', 'utf8');

/** Text sections: paths, hash, size and the file content rebuilt from the fenced block. */
function textFiles(doc: string): { paths: string[]; hash: string; bytes: number; content: string }[] {
  const lines = doc.split('\n');
  const start = lines.indexOf('## Text files'), end = lines.indexOf('## Binary files');
  const out: { paths: string[]; hash: string; bytes: number; content: string }[] = [];
  for (let i = start; i < end; i++) {
    const head = /^Paths: (.+)\. SHA-256 `([0-9a-f]{64})`, (\d+) bytes(, no final line end)?\.$/.exec(lines[i]!);
    if (!head) continue;
    const open = /^(`{3,})[a-z]*$/.exec(lines[i + 2]!);
    if (!open) throw new Error(`no fence after line ${i + 1}`);
    const body: string[] = [];
    let j = i + 3;
    for (; lines[j] !== open[1]; j++) body.push(lines[j]!);
    let content = body.length ? `${body.join('\n')}\n` : '';
    if (head[4]) content = content.slice(0, -1);
    out.push({ paths: [...head[1]!.matchAll(/`([^`]+)`/g)].map(m => m[1]!), hash: head[2]!, bytes: Number(head[3]), content });
    i = j;
  }
  return out;
}

/** Rows of a table section: path and hash. */
function rows(doc: string, title: string): Map<string, string> {
  const section = doc.split(`## ${title}\n`)[1]!.split('\n## ')[0]!;
  return new Map([...section.matchAll(/^\| `([^`]+)` \| *\d* *\| *(?:`([0-9a-f]{64})`)? *\|/gm)].map(m => [m[1]!, m[2] ?? '']));
}

describe('docs/CODEBASE.md', () => {
  it('rebuilds every tracked file: text verbatim, binaries and separate documents by hash', () => {
    const tracked = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8', maxBuffer: 1 << 26 }).split('\0').filter(Boolean);
    const dir = scratch('sea-codebase-');
    const listed = new Map<string, string>();
    for (const { paths, hash, bytes, content } of textFiles(DOC)) {
      expect(sha(content), paths[0]).toBe(hash);
      expect(Buffer.byteLength(content), paths[0]).toBe(bytes);
      for (const path of paths) {
        mkdirSync(dirname(join(dir, path)), { recursive: true });
        writeFileSync(join(dir, path), content);
        listed.set(path, sha(readFileSync(join(dir, path))));
      }
    }
    const binaries = rows(DOC, 'Binary files'), separate = rows(DOC, 'Documents kept separately');
    for (const [path, hash] of [...binaries, ...separate]) {
      expect(listed.has(path), `${path} listed twice`).toBe(false);
      listed.set(path, hash);
    }
    for (const path of tracked) {
      if (path === 'docs/CODEBASE.md') { expect(separate.has(path)).toBe(true); continue; }
      expect(listed.get(path), path).toBe(sha(readFileSync(path)));
    }
    expect(new Set(listed.keys())).toEqual(new Set([...tracked, 'docs/CODEBASE.md']));
    expect(binaries.size).toBeGreaterThan(800);
    // Explicit bound: it writes about 150 files and hashes about 1,000 (60 MB). Usually 0.2-0.4 s, but one run on
    // 2026-10-11 took 7.1 s and hit the 5 s default (cause unknown; correct result; not reproduced in 22 runs).
  }, 60_000);

  it('keeps the specification out and has no hand edits', () => {
    expect(DOC).not.toMatch(/^Paths: .*`docs\/MPES\.md`/m);
    expect(DOC, 'run npm run codebase').toBe(codebase());
  }, 60_000); // The same hashing as above, so the same bound.
});
