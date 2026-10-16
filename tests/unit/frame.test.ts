// MPES §10.2 (owner FIX 2026-10-12): the 3D showcase frames the vehicle as fitted, however fully kitted out, every part
// in view at every turn and at every height the player can drag to, and zooms in and out within set limits.
import { describe, expect, it, vi } from 'vitest';
import { Box3, Object3D, Vector3 } from 'three';
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

  // A purchase refits the camera inside the click: a numerical search placed the camera some 30 times a view, 13 000
  // times a refit, 22 to 58 ms of a purchase at a 4x CPU throttle (red run 38931516133). Each view is now solved directly.
  it('fits a whole drag table without placing a camera', () => {
    const box = boxes.long, target = box.getCenter(new Vector3());
    const lookAt = vi.spyOn(Object3D.prototype, 'lookAt');
    try {
      fitTable(box, target, 0.6, 1.45, FOV, 16 / 9);
      expect(lookAt).not.toHaveBeenCalled();
    } finally { lookAt.mockRestore(); }
  });

  for (const [name, box] of Object.entries(boxes)) for (const aspect of [16 / 9, 1, 9 / 16]) {
    it(`fits the ${name} kit, aspect ${aspect.toFixed(2)}, as close as the margin allows at its worst view`, () => {
      const target = box.getCenter(new Vector3());
      for (const polar of POLARS) {
        const distance = fitDistance(box, target, [polar], FOV, aspect);
        let worst = 0;
        for (let i = 0; i < 48; i++) worst = Math.max(worst, extentAt(box, target, viewDirection(polar, (i / 48) * Math.PI * 2), distance, FOV, aspect));
        // At the margin at the worst sampled view: as close as it can stand.
        expect(worst, `polar ${polar}`).toBeLessThanOrEqual(FIT_MARGIN + 1e-6);
        expect(worst, `polar ${polar}`).toBeGreaterThan(FIT_MARGIN - 1e-6);
      }
    });
  }

  // Codex review: straight up, three.js tilts the camera's aim off the vertical but not its position. (Straight down,
  // sin(pi) is not quite 0 and the aim three.js takes is set by rounding: no fit can match it, and no player reaches it.)
  it('fits tight at the poles too, where the camera aim is nudged', () => {
    for (const [name, box] of Object.entries(boxes)) for (const polar of [0, 1e-10, Math.PI - 1e-10]) {
      const target = box.getCenter(new Vector3()), distance = fitDistance(box, target, [polar], FOV, 16 / 9);
      let worst = 0;
      for (let i = 0; i < 48; i++) worst = Math.max(worst, extentAt(box, target, viewDirection(polar, (i / 48) * Math.PI * 2), distance, FOV, 16 / 9));
      expect(worst, `${name} at polar ${polar}`).toBeLessThanOrEqual(FIT_MARGIN + 1e-6);
      expect(worst, `${name} at polar ${polar}`).toBeGreaterThan(FIT_MARGIN - 1e-6);
    }
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
