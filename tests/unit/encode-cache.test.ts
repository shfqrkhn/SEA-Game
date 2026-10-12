// Encode cache (art/tools/encode-renders.ts): an unchanged master is not re-encoded, the cached bytes equal a clean
// encode, and changing any setting or the master misses.
import { mkdtempSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import sharp from 'sharp';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { cacheKey, trimAndEncode } from '../../art/tools/encode-renders.ts';

let dir = '', cache = '', master = '';
beforeAll(async () => {
  dir = mkdtempSync(join(tmpdir(), 'sea-encode-'));
  cache = join(dir, 'cache');
  master = join(dir, 'card-test.png');
  // 32x32 transparent frame with a visible 12x12 square, so the trim has something to do.
  const square = await sharp({ create: { width: 12, height: 12, channels: 4, background: { r: 200, g: 80, b: 40, alpha: 1 } } }).png().toBuffer();
  await sharp({ create: { width: 32, height: 32, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } }).composite([{ input: square, left: 10, top: 9 }]).png().toFile(master);
});
afterAll(() => { rmSync(dir, { recursive: true, force: true }); });

describe('encode cache', () => {
  it('misses once, then hits, and a hit is byte-identical to an uncached encode', async () => {
    const first = await trimAndEncode(master, 'card', 'webp', 80, cache);
    const second = await trimAndEncode(master, 'card', 'webp', 80, cache);
    const clean = await trimAndEncode(master, 'card', 'webp', 80, null);
    expect(first.hit).toBe(false);
    expect(second.hit).toBe(true);
    expect(second.data.equals(clean.data)).toBe(true);
    expect(second.data.equals(first.data)).toBe(true);
    expect([second.left, second.top, second.width, second.height]).toEqual([clean.left, clean.top, clean.width, clean.height]);
  });

  it('misses when quality or format changes', async () => {
    await trimAndEncode(master, 'card', 'webp', 80, cache);
    expect((await trimAndEncode(master, 'card', 'webp', 81, cache)).hit).toBe(false);
    expect((await trimAndEncode(master, 'card', 'avif', 80, cache)).hit).toBe(false);
    expect((await trimAndEncode(master, 'card', 'webp', 81, cache)).hit).toBe(true);
  });

  it('keys on the master bytes and the kind', async () => {
    const bytes = await sharp(master).toBuffer();
    expect(cacheKey(bytes, 'card', 'webp', 80)).toBe(cacheKey(bytes, 'card', 'webp', 80));
    expect(cacheKey(bytes, 'card', 'webp', 80)).not.toBe(cacheKey(bytes, 'hero', 'webp', 80));
    expect(cacheKey(Buffer.concat([bytes, Buffer.from([0])]), 'card', 'webp', 80)).not.toBe(cacheKey(bytes, 'card', 'webp', 80));
  });

  it('re-encodes a corrupted entry instead of trusting it', async () => {
    await trimAndEncode(master, 'card', 'webp', 70, cache);
    for (const f of readdirSync(cache).filter(n => n.endsWith('.webp'))) writeFileSync(join(cache, f), Buffer.from('corrupt'));
    const again = await trimAndEncode(master, 'card', 'webp', 70, cache);
    expect(again.hit).toBe(false);
    expect(again.data.equals((await trimAndEncode(master, 'card', 'webp', 70, null)).data)).toBe(true);
  });
});
