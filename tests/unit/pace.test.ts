// MPES §10.3: the 3D showcase never takes more than half the machine. A frame that drew is timed by the gap
// to the next animation frame; the stage then waits at least twice that long before drawing again.
import { describe, expect, it } from 'vitest';
import { FRAME_MS, FramePacer, TIERS, nextTier, startTier } from '../../source/showcase/pace.ts';

/** Runs `ms` of animation frames where each drawn frame costs `cost` ms; returns the draw times. */
function run(pacer: FramePacer, start: number, ms: number, cost: number, vsync = 1000 / 60): number[] {
  const draws: number[] = [];
  for (let now = start; now < start + ms;) {
    if (pacer.due(now)) { pacer.drew(now); draws.push(now); now += Math.max(vsync, cost); } else now += vsync;
  }
  return draws;
}

describe('frame pacer (MPES §10.3)', () => {
  it('draws at 30 fps on a 60 Hz display when frames are cheap', () => {
    const draws = run(new FramePacer(), 0, 1000, 2);
    expect(draws.length).toBeGreaterThanOrEqual(29);
    expect(draws.length).toBeLessThanOrEqual(31);
  });

  it('keeps 30 fps on a 144 Hz display', () => {
    const draws = run(new FramePacer(), 0, 1000, 2, 1000 / 144);
    expect(draws.length).toBeGreaterThanOrEqual(28);
    expect(draws.length).toBeLessThanOrEqual(31);
  });

  it('spends at most half the time drawing when frames are slow (software rendering)', () => {
    const pacer = new FramePacer();
    const cost = 400, draws = run(pacer, 0, 20_000, cost);
    expect(draws.length * cost).toBeLessThanOrEqual(20_000 / 2 + cost * 2);
    expect(draws.length).toBeGreaterThan(5); // it still turns
  });

  it('never waits longer than a second between frames', () => {
    const pacer = new FramePacer(), draws = run(pacer, 0, 30_000, 3000);
    for (let i = 1; i < draws.length; i++) expect(draws[i]! - draws[i - 1]!).toBeLessThanOrEqual(3000 + 1000 + 17);
    expect(pacer.interval).toBeLessThanOrEqual(1000);
  });

  it('returns to 30 fps once frames are cheap again', () => {
    const pacer = new FramePacer();
    run(pacer, 0, 5000, 300);
    expect(pacer.interval).toBeGreaterThan(FRAME_MS * 2);
    run(pacer, 5000, 3000, 2);
    expect(pacer.interval).toBeLessThan(FRAME_MS + 1);
  });

  it('does not count time spent stopped as drawing time', () => {
    const pacer = new FramePacer();
    expect(pacer.due(0)).toBe(true);
    pacer.drew(0);
    pacer.pause();
    expect(pacer.due(60_000)).toBe(true);
    expect(pacer.interval).toBeLessThan(FRAME_MS + 1);
  });

  // G3 (CI run 38571533524): a purchase drawn right after a paced turning draw waited for it on a slow renderer.
  it('holds paced draws after input from the player, so an answer to it never queues behind one', () => {
    const pacer = new FramePacer();
    expect(pacer.due(0)).toBe(true);
    pacer.drew(0);
    pacer.hold(1000);
    expect(pacer.due(500)).toBe(false);
    expect(pacer.due(999)).toBe(false);
    expect(pacer.due(1000)).toBe(true);
  });

  it('reports the cheapest of the last eight draws, and nothing before eight', () => {
    const pacer = new FramePacer();
    run(pacer, 0, 7 * 50, 50, 50);
    expect(pacer.floor).toBeNaN();
    run(pacer, 350, 20 * 50, 50, 50);
    expect(pacer.floor).toBe(50);
    pacer.forget();
    expect(pacer.floor).toBeNaN();
  });
});

describe('adaptive tiers (MPES §10.3)', () => {
  it('stays at full resolution while a draw fits in a 30 fps frame', () => {
    expect(nextTier(0, 1000 / 60)).toBe(0);
    expect(nextTier(0, FRAME_MS)).toBe(0);
    expect(nextTier(0, Number.NaN)).toBe(0);
  });

  it('steps down one tier when even the cheapest recent draw is too slow, never below the last', () => {
    expect(nextTier(0, 60)).toBe(1);
    expect(nextTier(1, 60)).toBe(2);
    expect(nextTier(TIERS.length - 1, 600)).toBe(TIERS.length - 1);
  });

  it('never steps back up', () => {
    expect(nextTier(2, 1)).toBe(2);
  });
});

// G3 (CI run 38571533524): on a software renderer multisampling made a draw 3.6 times dearer, and each fresh page began
// at full resolution, so its first purchases waited on draws of about 170 ms before the tiers could step down.
describe('starting tier (MPES §10.3)', () => {
  it('runs from dearest to cheapest, and multisampling goes before the last step of resolution', () => {
    for (let i = 1; i < TIERS.length; i++) {
      const [a, b] = [TIERS[i - 1]!, TIERS[i]!];
      expect(b.scale <= a.scale && (b.samples <= a.samples)).toBe(true);
      expect(b.scale < a.scale || b.samples < a.samples).toBe(true);
    }
    expect(TIERS[0]).toEqual({ scale: 1, samples: 4 });
    expect(TIERS.at(-1)!.samples).toBe(0);
  });

  it('keeps full quality where one draw fits a 30 fps frame, timing only that one', () => {
    const timed: number[] = [];
    expect(startTier(tier => { timed.push(tier); return 4; })).toBe(0);
    expect(timed).toEqual([0]);
  });

  it('starts at the first tier whose draw fits', () => {
    const costs = [50, 30, 12, 8];
    expect(startTier(tier => costs[tier]!)).toBe(1);
  });

  it('skips a tier that only lowers resolution when the area alone cannot bring the draw within the frame', () => {
    const costs = [250, 200, 65, 45], timed: number[] = [];
    expect(startTier(tier => { timed.push(tier); return costs[tier]!; })).toBe(TIERS.length - 1);
    expect(timed).not.toContain(1);
    expect(timed).toContain(2);
  });
});
