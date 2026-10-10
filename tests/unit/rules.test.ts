// RQ-04, RQ-05, RQ-09: canonical data, deal, money, scoring and awards against MPES text and hand-computed values.
import { describe, expect, it } from 'vitest';
import { CARDS, CATEGORIES, MISSIONS, ROUND_SLOTS, type MissionId, type Totals } from '../../source/domain/data.ts';
import { DomainError } from '../../source/domain/errors.ts';
import { deal, slotCard } from '../../source/domain/market.ts';
import { compliant, score, shortfalls, sumEffects, blankTotals } from '../../source/domain/missions.ts';
import { add, bpsFromProfit, parseAmount, parsePercentBps, parseWholeDollars, profitFromBps, validPrice, amountText, percentText } from '../../source/domain/money.ts';
import { costPerPointCents, rankAwards } from '../../source/domain/award.ts';
import { createTeams, type Team } from '../../source/domain/team.ts';
import { parseSessionCode, lotVisible } from '../../source/domain/session.ts';
import { specCards, specDealVectors, specMissions } from './spec.ts';

const code = (fn: () => unknown) => { try { fn(); } catch (e) { return e instanceof DomainError ? e.code : String(e); } return 'no error'; };

describe('canonical data equals MPES Appendix A and §6.6 (RQ-04)', () => {
  it('has the 70 cards with exact titles, prices and signed effects', () => {
    const spec = specCards();
    expect(spec).toHaveLength(70);
    expect(CARDS.map(c => ({ id: c.id, en: c.title.en, fr: c.title.fr, startDollars: c.startCents / 100, effects: c.effects })))
      .toEqual(spec);
  });
  it('has 7 cards per ordinary category and 21 process cards', () => {
    for (const category of CATEGORIES) expect(CARDS.filter(c => c.category === category).length).toBe(category === 'SE_PROCESS' ? 21 : 7);
    expect(ROUND_SLOTS).toEqual(['CAPACITY', 'MOBILITY', 'FIREPOWER', 'PROTECTION', 'COMMS', 'SA', 'ACCESSORIES', 'SE_PROCESS', 'SE_PROCESS', 'SE_PROCESS']);
  });
  it('has the six missions with exact minimums', () => {
    expect(MISSIONS.map(m => ({ id: m.id, en: m.title.en, fr: m.title.fr, minimums: m.minimums }))).toEqual(specMissions());
  });
});

describe('market deal (RQ-04, MPES §6.3, Appendix B)', () => {
  const vectors = specDealVectors();
  it.each(Object.keys(vectors))('reproduces vector %s exactly', seed => {
    expect(deal(seed).map(row => row.map(card => card.id))).toEqual(vectors[seed]);
  });
  it('places every card once in a slot of its category with canonical metadata', () => {
    const market = deal('7F3A00C1D2E3F4051627384950617283');
    const ids = market.flat().map(c => c.id);
    expect(new Set(ids).size).toBe(70);
    market.forEach((row, r) => row.forEach((card, l) => {
      expect(card.cat).toBe(ROUND_SLOTS[l]);
      expect(card.instance).toBe(`R${r + 1}-L${l + 1}-${card.id}`);
      expect(card.start).toBe(CARDS.find(c => c.id === card.id)!.startCents);
    }));
  });
  it('rejects malformed seeds and cards in the wrong slot', () => {
    expect(code(() => deal('abc'))).toBe('invalid-state');
    expect(code(() => deal('0'.repeat(31) + 'g'))).toBe('invalid-state');
    expect(code(() => slotCard('CAP-A', 1, 2))).toBe('card');
    expect(code(() => slotCard('SE-A', 8, 8))).toBe('card');
    expect(slotCard('SE-A', 3, 9).instance).toBe('R3-L9-SE-A');
  });
});

describe('money (RQ-05, MPES §6.4)', () => {
  it('parses amounts, whole dollars and percents exactly', () => {
    expect(parseAmount('1234')).toBe(123_400);
    expect(parseAmount('1234.5')).toBe(123_450);
    expect(parseAmount('1234,56')).toBe(123_456);
    expect(parseAmount(' 7 ')).toBe(700);
    expect(parseAmount('100000.25')).toBe(10_000_025);
    expect(parseWholeDollars('850000')).toBe(85_000_000);
    expect(parsePercentBps('12.5')).toBe(1250);
    expect(parsePercentBps('10000')).toBe(1_000_000);
  });
  it.each(['-1', '1e3', '1,234.00', '1.234', 'abc', '', '+5', '1 000', '9'.repeat(21)])('rejects amount %j', raw => {
    expect(code(() => parseAmount(raw))).toBe('money');
  });
  it('rejects fractional whole dollars, oversized percents and overflow', () => {
    expect(code(() => parseWholeDollars('850000.5'))).toBe('money');
    expect(code(() => parseWholeDollars('99999999999999999'))).toBe('money');
    expect(code(() => parsePercentBps('10000.01'))).toBe('percent');
    expect(code(() => add(Number.MAX_SAFE_INTEGER, 1))).toBe('money');
    expect(code(() => add(-1))).toBe('money');
    expect(code(() => add(0.5))).toBe('money');
  });
  it('enforces the $50,000 increment above the start price', () => {
    expect(validPrice(30_000_000, 30_000_000)).toBe(true);
    expect(validPrice(30_000_000, 35_000_000)).toBe(true);
    expect(validPrice(30_000_000, 32_500_000)).toBe(false);
    expect(validPrice(30_000_000, 25_000_000)).toBe(false);
  });
  it('converts profit and percent with half-up rounding', () => {
    expect(profitFromBps(635_000_000, 1575)).toBe(100_012_500);
    expect(profitFromBps(333, 5000)).toBe(167);
    expect(profitFromBps(1, 4999)).toBe(0);
    expect(bpsFromProfit(300, 100)).toBe(3333);
    expect(bpsFromProfit(300, 150)).toBe(5000);
    expect(bpsFromProfit(0, 0)).toBe(0);
    expect(code(() => bpsFromProfit(0, 1))).toBe('zero-cost');
    expect(amountText(10_000_025)).toBe('100000.25');
    expect(amountText(700)).toBe('7');
    expect(percentText(1250)).toBe('12.50');
  });
});

function totals(values: Partial<Totals>): Totals {
  return { ...blankTotals(), ...values };
}

describe('capabilities, compliance and score (RQ-09, MPES §6.6, §6.7)', () => {
  it('sums signed effects without clamping', () => {
    expect(sumEffects([{ CAP: 6, MOB: -10 }, { CAP: 8, MOB: -20 }])).toEqual(totals({ CAP: 14, MOB: -30 }));
  });
  const cases: [MissionId, Partial<Totals>, number][] = [
    ['COMBAT', { MOB: 99, FP: 12 }, 60],
    ['COMBAT', { MOB: 80, FP: 10 }, 0],
    ['COMBAT', { MOB: 50, FP: 2 }, 0],
    ['RECCE', { COM: 149, SA: 6 }, 60],
    ['RECCE', { COM: 100, SA: 5 }, 20],
    ['TROOP', { CAP: 18, PRO: 13 }, 340],
    ['COMMAND', { CAP: 7, COM: 175 }, 80],
    ['COMMAND', { CAP: 5, COM: 149 }, 0],
    ['RECOVERY', { PRO: 8, REC: 5 }, 120],
    ['MINE', { SA: 2, MC: 4 }, 60],
    ['MINE', { SA: -3, MC: 1 }, 0],
  ];
  it.each(cases)('%s %j scores %d', (mission, values, expected) => {
    expect(score(mission, totals(values))).toBe(expected);
  });
  it('checks every minimum including special REC and MC', () => {
    const troop = totals({ CAP: 18, MOB: 180, FP: 4, PRO: 13, COM: 50, SA: 5 });
    expect(compliant('TROOP', troop)).toBe(true);
    expect(shortfalls('TROOP', { ...troop, MOB: 99 })).toEqual([{ capability: 'MOB', required: 100, actual: 99, missing: 1 }]);
    const recovery = totals({ CAP: 3, MOB: 80, FP: 4, PRO: 6, COM: 75, SA: 2, REC: 2 });
    expect(shortfalls('RECOVERY', recovery).map(s => s.capability)).toEqual(['REC']);
    expect(compliant('RECOVERY', { ...recovery, REC: 3 })).toBe(true);
    expect(compliant('MINE', totals({ CAP: 4, MOB: 40, FP: 8, PRO: 10, COM: 25, SA: 1, MC: 2 }))).toBe(false);
  });
});

function team(id: number, mission: MissionId, t: Partial<Totals>, cost: number, profit: number, submitted = true): Team {
  return { ...createTeams(10)[id - 1]!, mission, lockedMission: mission, totals: totals(t), cost, profit, submitted };
}
const troopOk = { CAP: 18, MOB: 180, FP: 4, PRO: 13, COM: 50, SA: 5 };

describe('award ranking and ties (RQ-09, MPES §6.12, §6.14)', () => {
  it('reproduces the worked example', () => {
    const t = team(1, 'TROOP', troopOk, 635_000_000, 10_000_025);
    const result = rankAwards([t]);
    expect(result.winners).toEqual([1]);
    expect(result.ranked[0]).toMatchObject({ bid: 645_000_025, score: 340, eligible: true });
    expect(costPerPointCents(result.ranked[0]!)).toBe(1_897_059);
  });
  it('uses the exact ratio, then lower bid, then higher score; equal bid and score share first place', () => {
    const a = team(1, 'TROOP', { ...troopOk, CAP: 27, PRO: 4 }, 34_000_000, 0);        // score 340, bid 340k: ratio 1000
    const b = team(2, 'TROOP', { ...troopOk, CAP: 18, PRO: 4 }, 17_000_000, 0);       // score 160, bid 170k: ratio 1062.5
    const c = team(3, 'TROOP', { ...troopOk, CAP: 18, PRO: 4 }, 16_000_000, 0);        // score 160, bid 160k: ratio 1000, lower bid
    const d = team(4, 'TROOP', { ...troopOk, CAP: 18, PRO: 4 }, 16_000_000, 0);        // identical to c
    const e = team(5, 'TROOP', { ...troopOk, CAP: 18, PRO: 4 }, 1_000_000, 0, false);  // not submitted
    const f = team(6, 'TROOP', { ...troopOk, CAP: 10, PRO: 4 }, 1_000_000, 0);         // score 0
    const g = team(7, 'TROOP', { ...troopOk, MOB: 10 }, 1_000_000, 0);                 // not compliant
    const result = rankAwards([a, b, c, d, e, f, g]);
    expect(result.ranked.map(s => s.team)).toEqual([3, 4, 1, 2]);
    expect(result.winners).toEqual([3, 4]);
  });
  it('breaks an exact ratio tie by the lower bid', () => {
    const x = team(1, 'TROOP', { ...troopOk, CAP: 20, PRO: 4 }, 20_000_000, 0); // score 200, ratio 1000
    const y = team(2, 'TROOP', { ...troopOk, CAP: 15, PRO: 4 }, 10_000_000, 0); // score 100, ratio 1000, lower bid
    expect(rankAwards([x, y]).ranked.map(s => s.team)).toEqual([2, 1]);
  });
  it('declares no award when nobody is eligible', () => {
    expect(rankAwards([team(1, 'COMBAT', {}, 0, 0)]).winners).toEqual([]);
  });
});

describe('session codes and reveal visibility (MPES §6.2, §6.5)', () => {
  it('parses codes case-insensitively and rejects bad input', () => {
    expect(parseSessionCode(' sea3-t4-0a1b2c3d4e5f6071 ').code).toBe('SEA3-T4-0A1B2C3D4E5F6071');
    expect(parseSessionCode('SEA3-T10-0A1B2C3D4E5F6071').teamCount).toBe(10);
    for (const bad of ['SEA3-T1-0A1B2C3D4E5F6071', 'SEA3-T11-0A1B2C3D4E5F6071', 'SEA3-T4-0A1B2C3D4E5F607', 'SEA2-T4-0A1B2C3D4E5F6071', 'x'.repeat(33)]) {
      expect(code(() => parseSessionCode(bad)), bad).toBe('code');
    }
  });
  it('never shrinks the visible set and never shows later lots in JIT/MANUAL', () => {
    const visible = (mode: 'ROUND' | 'JIT' | 'MANUAL', current: number, revealed: boolean) =>
      Array.from({ length: 10 }, (_, lot) => lotVisible(mode, current, revealed, lot));
    expect(visible('ROUND', 0, false).every(Boolean)).toBe(true);
    expect(visible('JIT', 3, false)).toEqual([true, true, true, true, false, false, false, false, false, false]);
    expect(visible('MANUAL', 3, false)).toEqual([true, true, true, false, false, false, false, false, false, false]);
    expect(visible('MANUAL', 3, true)[3]).toBe(true);
    for (const mode of ['JIT', 'MANUAL'] as const) for (let lot = 0; lot < 9; lot++) {
      const before = visible(mode, lot, true), after = visible(mode, lot + 1, false);
      before.forEach((v, i) => { if (v) expect(after[i], `${mode} ${lot}->${i}`).toBe(true); });
    }
  });
});
