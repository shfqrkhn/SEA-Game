// MPES §10.2 (owner FIX 2026-10-12): the 3D showcase frames the vehicle as fitted, however fully kitted out, every part
// in view at every turn and at every height the player can drag to, and zooms in and out within set limits.
import { describe, expect, it } from 'vitest';
import { Box3, Vector3 } from 'three';
import { distanceAt, extentAt, FIT_MARGIN, fitDistance, fitTable, viewDirection, ZOOM_IN_LIMIT, ZOOM_OUT_LIMIT, zoomed } from '../../source/showcase/frame.ts';

const FOV = 30, POLARS = [0.6, 1.25, 1.45];
const boxes = {
  long: new Box3(new Vector3(-1.4, 0, -4), new Vector3(1.4, 2.6, 4)),
  tall: new Box3(new Vector3(-1.2, 0, -2), new Vector3(1.2, 5.5, 2)),
  offCentre: new Box3(new Vector3(0.5, 0.2, -1), new Vector3(3.5, 3, 6.5)),
};

describe('showcase framing (MPES §10.2)', () => {
  for (const [name, box] of Object.entries(boxes)) for (const aspect of [16 / 9, 1, 9 / 16]) {
    it(`fits the ${name} kit at every turn and height, aspect ${aspect.toFixed(2)}`, () => {
      const target = box.getCenter(new Vector3());
      const distance = fitDistance(box, target, POLARS, FOV, aspect);
      let worst = 0;
      for (const polar of POLARS) for (let i = 0; i < 360; i += 5) {
        const extent = extentAt(box, target, viewDirection(polar, (i * Math.PI) / 180), distance, FOV, aspect);
        expect(extent, `polar ${polar}, azimuth ${i}`).toBeLessThanOrEqual(1);
        worst = Math.max(worst, extent);
      }
      // Tight, not merely safe: the worst view uses the frame up to the margin.
      expect(worst).toBeGreaterThan(FIT_MARGIN - 0.03);
    });
  }

  for (const [name, box] of Object.entries(boxes)) it(`keeps the ${name} kit in view at every height the player drags to`, () => {
    const target = box.getCenter(new Vector3());
    const table = fitTable(box, target, 0.6, 1.45, FOV, 16 / 9);
    for (let polar = 0.6; polar <= 1.45 + 1e-9; polar += 0.025) for (let i = 0; i < 360; i += 5) {
      const extent = extentAt(box, target, viewDirection(polar, (i * Math.PI) / 180), distanceAt(table, polar), FOV, 16 / 9);
      expect(extent, `polar ${polar.toFixed(3)}, azimuth ${i}`).toBeLessThanOrEqual(1);
    }
    expect(distanceAt(table, 0.1)).toBe(table.distances[0]);
    expect(distanceAt(table, 3)).toBe(table.distances.at(-1));
  });

  it('zooms in and out by steps, within its limits', () => {
    expect(zoomed(1, 1)).toBeLessThan(1);
    expect(zoomed(1, -1)).toBeGreaterThan(1);
    let zoom = 1;
    for (let i = 0; i < 20; i++) zoom = zoomed(zoom, 1);
    expect(zoom).toBe(ZOOM_IN_LIMIT);
    for (let i = 0; i < 20; i++) zoom = zoomed(zoom, -1);
    expect(zoom).toBe(ZOOM_OUT_LIMIT);
    expect(ZOOM_IN_LIMIT).toBeLessThan(1);
    expect(ZOOM_OUT_LIMIT).toBeGreaterThan(1);
  });
});
