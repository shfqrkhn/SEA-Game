// RQ-05 display and RQ-19 French typography (MPES §6.4, §7.6).
import { describe, expect, it } from 'vitest';
import { labelled, list, money, seconds, signed } from '../../source/ui/format.ts';

const NBSP = ' ';

describe('money display', () => {
  it('formats English and French amounts', () => {
    expect(money(123_456_789, 'en')).toBe('$1,234,567.89');
    expect(money(123_456_789, 'fr')).toBe(`1${NBSP}234${NBSP}567,89${NBSP}$`);
    expect(money(40_000_000, 'en')).toBe('$400,000');
    expect(money(40_000_000, 'fr')).toBe(`400${NBSP}000${NBSP}$`);
    expect(money(40_000_000, 'en', true)).toBe('$400,000.00');
    expect(money(1_897_059, 'en', true)).toBe('$18,970.59');
    expect(money(0, 'en')).toBe('$0');
  });
  it('formats labels, lists, signs and time', () => {
    expect(labelled('Score', 'en')).toBe('Score: ');
    expect(labelled('Score', 'fr')).toBe(`Score${NBSP}: `);
    expect(list(['A', 'B', 'C'], 'en')).toBe('A, B and C');
    expect(list(['A', 'B'], 'fr')).toBe('A et B');
    expect(signed(-10)).toBe('−10');
    expect(signed(4)).toBe('+4');
    expect(seconds(30_000)).toBe('0:30');
    expect(seconds(61_001)).toBe('1:02');
  });
});
