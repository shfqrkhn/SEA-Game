import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { MAX_BYTES, OUT, render, sha256 } from '../../build/render.ts';

describe('single-file build (RQ-01, RQ-24, RQ-25, RQ-27)', async () => {
  const html = await render();
  const script = /<script>([\s\S]*)<\/script>\s*<\/body>/.exec(html)?.[1] ?? '';
  const style = /<style>([\s\S]*?)<\/style>/.exec(html)?.[1] ?? '';
  const csp = /http-equiv="Content-Security-Policy" content="([^"]+)"/.exec(html)?.[1] ?? '';

  it('is deterministic', async () => {
    expect(await render()).toBe(html);
  });
  it('matches the committed dist/index.html', () => {
    expect(readFileSync(OUT, 'utf8')).toBe(html);
  });
  it('has one executable inline script and one inline style, both hash-pinned in the CSP', () => {
    expect(html.match(/<script>/g)).toHaveLength(1);
    expect(html.match(/<script\b/g)).toHaveLength(2); // plus the inert renders data block
    expect(html.match(/<style/g)).toHaveLength(1);
    expect(csp).toContain(`'sha256-${sha256(script)}'`);
    expect(csp).toContain(`'sha256-${sha256(style)}'`);
  });
  it('locks the CSP down', () => {
    for (const directive of ["default-src 'none'", "connect-src 'none'", "object-src 'none'", "base-uri 'none'", "form-action 'none'", "frame-src 'none'"]) {
      expect(csp).toContain(directive);
    }
    expect(csp).not.toMatch(/unsafe-(inline|eval)/);
    expect(csp).not.toMatch(/https?:/);
  });
  it('references no external resources', () => {
    expect(html).not.toMatch(/<(link|img|iframe|object|embed)\b/i);
    expect(html).not.toMatch(/\b(src|href)="(https?:)?\/\//i);
  });
  it('embeds the licence and third-party notices and stays within the size limit', () => {
    expect(html).toContain('three.js authors');
    expect(html).toContain('SEA Game contributors');
    expect(Buffer.byteLength(html)).toBeLessThanOrEqual(MAX_BYTES);
  });
  it('embeds the committed renders once, as an inert JSON block of AVIF data URIs matching the manifest (MPES §11)', () => {
    const block = /<script type="application\/json" id="sea-renders">([^<]*)<\/script>/.exec(html)?.[1];
    expect(block).toBeDefined();
    const embedded = JSON.parse(block!) as Record<string, { src: string }>;
    const manifest = JSON.parse(readFileSync('content/renders/spike/manifest.json', 'utf8')) as { entries: { id: string; file: string }[] };
    expect(Object.keys(embedded).sort()).toEqual(manifest.entries.map(e => e.id).sort());
    for (const e of manifest.entries) {
      expect(embedded[e.id]!.src).toBe('data:image/avif;base64,' + readFileSync('content/renders/spike/' + e.file).toString('base64'));
    }
  });
  it('has no duplicate static ids', () => {
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
