import { describe, expect, it } from 'vitest';
import { MIN_SAMPLES, p95 } from '../perf/measure.ts';

describe('perf measurement protocol (MPES §14)', () => {
  it('takes the nearest-rank p95', () => {
    const values = Array.from({ length: 40 }, (_, i) => i + 1);
    expect(p95(values)).toBe(38);
    expect(p95(values.slice(0, 30).reverse())).toBe(29);
    expect(p95(Array.from({ length: 100 }, (_, i) => i + 1))).toBe(95);
  });

  it('refuses too few samples instead of passing on them', () => {
    expect(MIN_SAMPLES).toBeGreaterThanOrEqual(30);
    expect(() => p95([])).toThrow(/at least 30/);
    expect(() => p95([1, 2, 3])).toThrow();
    expect(() => p95(Array.from({ length: 30 }, () => Number.NaN))).toThrow();
    expect(p95([5, 7], 2)).toBe(7);
  });
});
