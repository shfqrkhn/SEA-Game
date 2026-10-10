// MPES §10.2: stacked part layers are drawn in manifest draw order (farthest from the camera first),
// never in purchase order, so nearer parts always cover farther ones.
import { describe, expect, it } from 'vitest';
import { stackOrder } from '../../source/showcase/showcase.ts';
import type { Render } from '../../source/showcase/renders.ts';

const layer = (depth: number): Render => ({
  src: 'data:image/avif;base64,', kind: 'build-layer', depth,
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
});
