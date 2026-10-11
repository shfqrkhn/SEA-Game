// MPES §10.3: the 3D showcase never takes more than half the machine. A frame that drew is timed by the gap
// to the next animation frame; the stage then waits at least twice that long before drawing again.
import { describe, expect, it } from 'vitest';
import { FRAME_MS, FramePacer } from '../../source/showcase/pace.ts';

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
});
