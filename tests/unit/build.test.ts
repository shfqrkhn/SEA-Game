import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { inflateRawSync } from 'node:zlib';
import { describe, expect, it } from 'vitest';
import { MAX_BYTES, MODELS_DIR, RENDERS_DIR, render, sha256 } from '../../build/render.ts';

const COPYRIGHT = 'Copyright (c) 2026 SEA Game authors';

describe('single-file build (RQ-01, RQ-24, RQ-25, RQ-27)', async () => {
  const html = await render();
  const script = /<script>([\s\S]*)<\/script>\s*<\/body>/.exec(html)?.[1] ?? '';
  const style = /<style>([\s\S]*?)<\/style>/.exec(html)?.[1] ?? '';
  const csp = /http-equiv="Content-Security-Policy" content="([^"]+)"/.exec(html)?.[1] ?? '';

  it('embeds the four-part game version; npm holds its first three parts (MPES §19.2)', () => {
    const pkg = JSON.parse(readFileSync('package.json', 'utf8')) as { version: string; gameVersion: string };
    expect(pkg.gameVersion).toMatch(/^\d+\.\d+\.\d+\.\d+$/);
    expect(pkg.version).toBe(pkg.gameVersion.split('.').slice(0, 3).join('.'));
    expect(script).toContain(JSON.stringify(pkg.gameVersion));
  });
  it('is deterministic', async () => {
    expect(await render()).toBe(html);
  });
  it('has one executable inline script and one inline style, both hash-pinned in the CSP', () => {
    expect(html.match(/<script>/g)).toHaveLength(1);
    expect(html.match(/<script\b/g)).toHaveLength(3); // plus the inert renders and models data blocks
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
    // Imagery and models are embedded data only; the models carry no textures, so nothing creates blob: URLs or workers.
    expect(csp).toContain('img-src data:;');
    expect(csp).not.toContain('blob:');
  });
  it('never mentions GitHub, which is temporary QA space (D-13)', () => {
    expect(html).not.toMatch(/github/i);
  });
  it('references no external resources', () => {
    expect(html).not.toMatch(/<(link|img|iframe|object|embed)\b/i);
    expect(html).not.toMatch(/\b(src|href)="(https?:)?\/\//i);
  });
  it('caps the file at 50 MB (MPES §14)', () => {
    expect(MAX_BYTES).toBe(50 * 1024 * 1024);
  });
  it('embeds the licence and third-party notices and stays within the size limit', () => {
    expect(html).toContain('bundles one third-party library, three.js');
    expect(html).toContain('Copyright © 2010-2026 three.js authors');
    expect(html).toContain(COPYRIGHT);
    expect(Buffer.byteLength(html)).toBeLessThanOrEqual(MAX_BYTES);
  });
  // Creator credit (owner, 2026-10-12): the owner's name appears once in About and once on the chooser, in each language,
  // and in a few named documents; nowhere else. The licence names "SEA Game authors", the package has no author, and the
  // game never holds the owner's account handle.
  it('credits the creator in About and the chooser only; the licence names SEA Game authors', () => {
    for (const file of ['LICENSE', 'library/LICENSE']) expect(readFileSync(file, 'utf8'), file).toContain(COPYRIGHT);
    expect((JSON.parse(readFileSync('package.json', 'utf8')) as { author?: string }).author).toBeUndefined();
    const name = new RegExp(['sha' + 'fiq', 'rah' + 'man khan'].join('|'), 'i'); // split so this file does not match itself
    const tracked = execFileSync('git', ['ls-files', '-z'], { encoding: 'utf8' }).split(String.fromCharCode(0))
      .filter(file => file && file !== 'docs/CODEBASE.md' && existsSync(file) && !/\.(png|avif|glb|zip|blend)$/.test(file));
    const credited = ['content/strings.en.json', 'content/strings.fr.json', 'README.md', 'docs/owner/instructor-review.md',
      'docs/MPES.md', 'docs/HANDOVER.md', 'docs/verification/0.5.1.0.md', 'tests/e2e/chooser.spec.ts'];
    for (const file of tracked) if (!credited.includes(file)) expect(name.test(readFileSync(file, 'utf8')), file).toBe(false);
    const full = new RegExp(['Sha' + 'fiqur', 'Rah' + 'man', 'Khan'].join(' '), 'g');
    for (const lang of ['en', 'fr']) {
      const strings = JSON.parse(readFileSync(`content/strings.${lang}.json`, 'utf8')) as Record<string, string>;
      expect(strings['about.body'], lang).toContain('MIT');
      expect(strings['about.body']!.match(full), lang).toHaveLength(1);
      expect(strings['chooser.version']!.match(full), lang).toHaveLength(1);
      const others = Object.entries(strings).filter(([key]) => key !== 'about.body' && key !== 'chooser.version');
      for (const [key, value] of others) expect(name.test(value), `${lang} ${key}`).toBe(false);
    }
    expect(html.match(full), 'dist/index.html').toHaveLength(4);
    expect(new RegExp('shfq' + 'rkhn', 'i').test(html), 'dist/index.html').toBe(false);
  });
  it('embeds the committed renders once, as an inert JSON block of AVIF data URIs matching the manifest (MPES §11)', () => {
    const block = /<script type="application\/json" id="sea-renders">([^<]*)<\/script>/.exec(html)?.[1];
    expect(block).toBeDefined();
    const embedded = JSON.parse(block!) as Record<string, { src: string; kind: string; depth?: unknown }>;
    const manifest = JSON.parse(readFileSync(`${RENDERS_DIR}/manifest.json`, 'utf8')) as { entries: { id: string; file: string }[] };
    expect(Object.keys(embedded).sort()).toEqual(manifest.entries.map(e => e.id).sort());
    for (const e of manifest.entries) {
      expect(embedded[e.id]!.src).toBe('data:image/avif;base64,' + readFileSync(`${RENDERS_DIR}/${e.file}`).toString('base64'));
    }
    // Every build layer carries its camera distance, the draw order of MPES §10.2.
    const layers = Object.values(embedded).filter(r => r.kind === 'build-layer');
    expect(layers.length).toBeGreaterThan(0);
    for (const r of layers) expect(typeof r.depth === 'number' && r.depth > 0).toBe(true);
  });
  it('embeds the committed showcase models once, raw-deflated and base64-encoded, matching the manifest (MPES §10)', () => {
    const block = /<script type="application\/octet-stream" id="sea-models">([A-Za-z0-9+/=]*)<\/script>/.exec(html)?.[1];
    expect(block).toBeTruthy();
    const glb = inflateRawSync(Buffer.from(block!, 'base64'));
    const manifest = JSON.parse(readFileSync(`${MODELS_DIR}/manifest.json`, 'utf8')) as { file: string };
    expect(glb.equals(readFileSync(`${MODELS_DIR}/${manifest.file}`))).toBe(true);
    expect(glb.subarray(0, 4).toString('latin1')).toBe('glTF');
    // No textures: GLTFLoader would need blob: URLs for them, which the CSP forbids.
    const json = JSON.parse(glb.subarray(20, 20 + glb.readUInt32LE(12)).toString('utf8')) as { images?: unknown[] };
    expect(json.images ?? []).toHaveLength(0);
  });
  it('has no duplicate static ids', () => {
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
