// RQ-12, RQ-14: student companion commands (MPES §6.9–6.11).
import { describe, expect, it } from 'vitest';
import { DomainError } from '../../source/domain/errors.ts';
import * as S from '../../source/domain/student.ts';
import { validateStudent } from '../../source/domain/saves.ts';
import { specDealVectors } from './spec.ts';

const VECTOR = specDealVectors()['00000000000000000000000000000000']!;
const code = (fn: () => unknown) => { try { fn(); } catch (e) { return e instanceof DomainError ? e.code : String(e); } return 'no error'; };
const valid = (s: S.StudentState) => expect(validateStudent(JSON.parse(JSON.stringify(s)))).toEqual(s);

function planning(): S.StudentState {
  let s = S.join(S.studentShell('fr'), 'sea3-t4-0123456789abcdef', 3, 'TROOP');
  s = S.openPlanning(S.recordPracticeWin(s));
  return s;
}
function auction(): S.StudentState {
  return S.startAuction(S.confirmVehicle(planning(), true));
}

describe('join and practice', () => {
  it('normalizes the code and keeps only its own team', () => {
    const s = S.join(S.studentShell(), ' Sea3-T4-0123456789abcdef ', 4, 'MINE');
    expect(s).toMatchObject({ phase: 'practice', sessionCode: 'SEA3-T4-0123456789ABCDEF', teamCount: 4, teamId: 4 });
    expect(s.team!.mission).toBe('MINE');
    expect(code(() => S.join(S.studentShell(), 'SEA3-T4-0123456789ABCDEF', 5, 'MINE'))).toBe('team');
    expect(code(() => S.join(S.studentShell(), 'SEA3-4-0123', 1, 'MINE'))).toBe('code');
    valid(s);
  });
  it('requires a recorded practice win before planning and clears it after', () => {
    const s = S.join(S.studentShell(), 'SEA3-T2-0123456789ABCDEF', 1, 'COMBAT');
    expect(code(() => S.openPlanning(s))).toBe('phase');
    const won = S.recordPracticeWin(s);
    expect(S.resetPractice(won).practiceWon).toBe(false);
    expect(S.openPlanning(won)).toMatchObject({ phase: 'planning', practiceWon: false });
  });
});

describe('planning', () => {
  it('changing mission clears the confirmation and shows a notice', () => {
    let s = S.confirmVehicle(planning(), true);
    s = S.selectMission(s, 'RECCE');
    expect(s).toMatchObject({ vehicleConfirmed: false, vehicleChangeNotice: true });
    expect(code(() => S.startAuction(s))).toBe('confirmation');
    s = S.confirmVehicle(s, true);
    expect(s.vehicleChangeNotice).toBe(false);
  });
  it('bounds plan text, parses WTP in whole dollars and captures the plan baseline at auction start', () => {
    let s = S.setPlanText(planning(), 'plan', 'Treuil  + radio 📻');
    expect(code(() => S.setPlanText(s, 'risks', 'x'.repeat(1201)))).toBe('text');
    s = S.setMaxWtp(s, '900000');
    expect(s.maxWtpCents).toBe(90_000_000);
    expect(code(() => S.setMaxWtp(s, '900000.50'))).toBe('money');
    s = S.startAuction(S.confirmVehicle(s, true));
    expect(s).toMatchObject({ phase: 'auction', lockedMission: 'TROOP', planBaseline: 'Treuil  + radio 📻' });
    expect(code(() => S.setPlanText(s, 'plan', 'later'))).toBe('phase');
    valid(s);
  });
});

describe('auction tracking (RQ-12)', () => {
  it('loads only a card that fits the announced slot and records a confirmed win', () => {
    let s = auction();
    expect(code(() => S.loadCard(s, 'MOB-A'))).toBe('card');
    expect(code(() => S.recordWin(s, '400000'))).toBe('card');
    s = S.loadCard(s, ' cap-g ');
    expect(s.currentCard!.instance).toBe('R1-L1-CAP-G');
    expect(code(() => S.recordWin(s, '425000'))).toBe('money');
    s = S.recordWin(s, '450000');
    expect(s.team!.cost).toBe(45_000_000);
    expect([s.round, s.lot, s.currentCard]).toEqual([0, 1, null]);
    valid(s);
  });
  it('allows moving backward or skipping without affecting purchases, and enforces two wins per round', () => {
    let s = auction();
    s = S.setPosition(s, 3, 5);
    expect([s.round, s.lot]).toEqual([2, 4]);
    s = S.setPosition(s, 1, 2);
    expect(code(() => S.setPosition(s, 8, 1))).toBe('position');
    for (const lot of [2, 3]) s = S.recordWin(S.loadCard(S.setPosition(s, 1, lot), VECTOR[0]![lot - 1]!), '1000000');
    s = S.loadCard(S.setPosition(s, 1, 5), VECTOR[0]![4]!);
    expect(code(() => S.recordWin(s, '1000000'))).toBe('limit');
  });
  it('keeps private notes per lot and finishes after the last lot or early', () => {
    let s = S.editScratch(auction(), 'note', 'Bon rapport « qualité-prix »');
    s = S.editScratch(s, 'wtp', '410000');
    expect(s.scratch['1-1']).toEqual({ wtp: '410000', note: 'Bon rapport « qualité-prix »' });
    expect(code(() => S.editScratch(s, 'wtp', '41k'))).toBe('money');
    s = S.notOurs(S.setPosition(s, 7, 10));
    expect(s.phase).toBe('build');
    expect(S.finishAuction(auction()).phase).toBe('build');
  });
});

describe('build reconciliation and submission (RQ-12)', () => {
  function built(): S.StudentState {
    let s = auction();
    s = S.recordWin(S.loadCard(s, 'CAP-G'), '400000');
    s = S.recordWin(S.loadCard(S.setPosition(s, 2, 2), 'MOB-G'), '450000');
    return S.finishAuction(s);
  }
  it('removes mistaken entries and adds missing confirmed purchases with full validation', () => {
    let s = built();
    s = S.removeOwnPurchase(s, 'R2-L2-MOB-G');
    expect(s.team!.purchases.map(p => p.id)).toEqual(['CAP-G']);
    expect(code(() => S.removeOwnPurchase(s, 'R9-L9-NONE'))).toBe('not-found');
    expect(code(() => S.addMissingPurchase(s, 'CAP-G', 1, 1, '400000'))).toBe('duplicate');
    expect(code(() => S.addMissingPurchase(s, 'MOB-B', 1, 3, '550000'))).toBe('card');
    s = S.addMissingPurchase(s, 'mob-b', 1, 2, '600000');
    expect(s.team!.cost).toBe(100_000_000);
    valid(s);
  });
  it('converts profit between amount and percent of cost and finishes with the exact profit', () => {
    let s = S.openSubmit(built());
    expect(s.team!.cost).toBe(85_000_000);
    s = S.setProfitMode(S.setProfitInput(s, '85000'), 'PERCENT');
    expect(s).toMatchObject({ profitMode: 'PERCENT', profitInput: '10.00', profitCents: 8_500_000 });
    s = S.setProfitInput(s, '12.5');
    expect(S.draftProfit(s)).toBe(10_625_000);
    s = S.setProfitMode(s, 'AMOUNT');
    expect(s.profitInput).toBe('106250');
    s = S.finishSubmit(S.setProfitInput(s, '100000.25'));
    expect(s).toMatchObject({ phase: 'debrief', profitCents: 10_000_025 });
    s = S.closeStudent(s);
    expect(s.phase).toBe('closed');
    valid(s);
  });
  it('refuses a percent of zero cost with a non-zero profit', () => {
    const s = S.openSubmit(S.finishAuction(auction()));
    expect(code(() => S.setProfitMode(S.setProfitInput(s, '5'), 'PERCENT'))).toBe('zero-cost');
    expect(S.setProfitMode(S.setProfitInput(s, '0'), 'PERCENT').profitInput).toBe('0.00');
  });
});
