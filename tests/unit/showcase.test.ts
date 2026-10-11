// MPES §10.2: stacked part layers are drawn in manifest draw order (farthest from the camera first),
// never in purchase order, so nearer parts always cover farther ones.
import { describe, expect, it } from 'vitest';
import { DecodedImages, stackOrder } from '../../source/showcase/showcase.ts';
import type { Render } from '../../source/showcase/renders.ts';

const layer = (depth: number, slot?: string): Render => ({
  src: 'data:image/avif;base64,', kind: 'build-layer', depth, ...(slot ? { slot } : {}),
  frame: { width: 10, height: 10 }, offset: { left: 0, top: 0 }, size: { width: 1, height: 1 },
});

describe('showcase layer order (MPES §10.2)', () => {
  const table = new Map<string, Render>([
    ['recovery-front-NEAR', layer(9.5)],
    ['recovery-front-FAR', layer(14.25)],
    ['recovery-front-MID', layer(11)],
  ]);

  it('draws the farthest part first, whatever the purchase order', () => {
    const parts = ['NEAR', 'FAR', 'MID'].map(id => ({ id, title: id }));
    expect(stackOrder(table, 'recovery', 'front', parts).map(p => p.id)).toEqual(['FAR', 'MID', 'NEAR']);
  });

  it('leaves out parts that have no layer for this vehicle and angle', () => {
    const parts = [{ id: 'NEAR', title: '' }, { id: 'NONE', title: '' }];
    expect(stackOrder(table, 'recovery', 'front', parts).map(p => p.id)).toEqual(['NEAR']);
  });

  it('draws only the most recently recorded part of each slot (MPES §10.2); the others stay in the text list', () => {
    const slotted = new Map<string, Render>([
      ['recce-front-CAP-A', layer(12, 'module')],
      ['recce-front-CAP-B', layer(11, 'module')],
      ['recce-front-COM-A', layer(10, 'antenna-left')],
    ]);
    // Purchase order: CAP-B, then COM-A, then CAP-A. CAP-A replaces CAP-B in the module slot.
    const parts = ['CAP-B', 'COM-A', 'CAP-A'].map(id => ({ id, title: id }));
    expect(stackOrder(slotted, 'recce', 'front', parts).map(p => p.id)).toEqual(['CAP-A', 'COM-A']);
  });
});

describe('decoded still images (MPES §10.3)', () => {
  const pool = (limit: number) => {
    const made: string[] = [];
    const images = new DecodedImages(limit, src => { made.push(src); return { src, isConnected: false } as unknown as HTMLImageElement; });
    return { images, made };
  };

  it('decodes each source once and returns the same image again', () => {
    const { images, made } = pool(4);
    const a = images.get('a');
    expect(images.get('a')).toBe(a);
    expect(made).toEqual(['a']);
  });

  it('drops the least recently used image beyond the limit', () => {
    const { images, made } = pool(2);
    images.get('a'); images.get('b'); images.get('a'); images.get('c');
    expect(images.size).toBe(2);
    images.get('a');
    images.get('b');
    expect(made).toEqual(['a', 'b', 'c', 'b']);
  });

  it('never drops an image that is on screen', () => {
    const { images } = pool(1);
    const a = images.get('a');
    (a as unknown as { isConnected: boolean }).isConnected = true;
    images.get('b');
    expect(images.get('a')).toBe(a);
  });
});
