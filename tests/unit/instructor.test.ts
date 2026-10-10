// RQ-03, RQ-06, RQ-07, RQ-08, RQ-10, RQ-11: instructor commands and their rejections.
import fc from 'fast-check';
import { describe, expect, it } from 'vitest';
import { DomainError } from '../../source/domain/errors.ts';
import * as I from '../../source/domain/instructor.ts';
import { instructorForSave, validateInstructor } from '../../source/domain/saves.ts';
import type { RevealMode } from '../../source/domain/session.ts';
import { specDealVectors } from './spec.ts';

const SEED = '00000000000000000000000000000000';
const VECTOR = specDealVectors()[SEED]!;
const code = (fn: () => unknown) => { try { fn(); } catch (e) { return e instanceof DomainError ? e.code : String(e); } return 'no error'; };
let t = 1_900_000_000_000;
const now = (step = 1000) => (t += step);

function session(teams = 3, revealMode: RevealMode = 'JIT', timingMode: 'TIMED' | 'UNTIMED' = 'TIMED'): I.InstructorState {
  let s = I.generateSession(I.instructorShell('en'), { teamCount: teams, revealMode, timingMode, bidSeconds: 30, token: '0123456789ABCDEF', seed: SEED });
  s = I.startPractice(s);
  for (const a of ['reveal', 'open', 'accept', 'close'] as const) s = I.practiceStep(s, a);
  s = I.openPlanning(s);
  for (let id = 1; id <= teams; id++) s = I.selectMission(s, id, 'TROOP');
  return I.startAuction(s);
}
const bidFor = (s: I.InstructorState, team: number) => I.acceptBid(s, team, I.nextOffer(s)!, now());
const valid = (s: I.InstructorState) => expect(validateInstructor(JSON.parse(JSON.stringify(instructorForSave(s))))).toEqual(instructorForSave(s));

describe('setup, practice and planning (RQ-03, RQ-11)', () => {
  it('generates a session whose market is the Appendix B deal', () => {
    const s = I.generateSession(I.instructorShell(), { teamCount: 4, revealMode: 'MANUAL', timingMode: 'UNTIMED', bidSeconds: 45, token: 'ABCDEF0123456789', seed: SEED });
    expect(s.sessionCode).toBe('SEA3-T4-ABCDEF0123456789');
    expect(s.market.map(r => r.map(c => c.id))).toEqual(VECTOR);
    expect(s.teams).toHaveLength(4);
    expect(s.revealed).toBe(false);
    valid(s);
  });
  it('rejects bad options', () => {
    const shell = I.instructorShell();
    const base = { teamCount: 4, revealMode: 'JIT', timingMode: 'TIMED', bidSeconds: 30, token: '0123456789ABCDEF', seed: SEED } as const;
    expect(code(() => I.generateSession(shell, { ...base, teamCount: 11 }))).toBe('team');
    expect(code(() => I.generateSession(shell, { ...base, bidSeconds: 9 }))).toBe('time');
    expect(code(() => I.generateSession(shell, { ...base, token: 'xyz' }))).toBe('code');
    expect(code(() => I.generateSession(shell, { ...base, seed: 'abc' }))).toBe('invalid-state');
  });
  it('keeps practice isolated and requires a closed practice lot before planning', () => {
    let s = I.generateSession(I.instructorShell(), { teamCount: 2, revealMode: 'JIT', timingMode: 'TIMED', bidSeconds: 30, token: '0123456789ABCDEF', seed: SEED });
    s = I.startPractice(s);
    expect(code(() => I.openPlanning(s))).toBe('phase');
    expect(code(() => I.practiceStep(s, 'open'))).toBe('phase');
    for (const a of ['reveal', 'open', 'accept', 'close'] as const) { s = I.practiceStep(s, a); valid(s); }
    expect(s.ledger).toEqual([]);
    expect(s.teams.every(team => team.purchases.length === 0 && team.cost === 0)).toBe(true);
    s = I.openPlanning(s);
    expect(s.practice).toEqual({ revealed: false, open: false, leader: false, closed: false });
  });
  it('requires every mission before the auction and then locks them', () => {
    let s = I.generateSession(I.instructorShell(), { teamCount: 2, revealMode: 'JIT', timingMode: 'TIMED', bidSeconds: 30, token: '0123456789ABCDEF', seed: SEED });
    s = I.startPractice(s);
    for (const a of ['reveal', 'open', 'accept', 'close'] as const) s = I.practiceStep(s, a);
    s = I.openPlanning(s);
    s = I.selectMission(s, 1, 'COMBAT');
    expect(code(() => I.startAuction(s))).toBe('mission');
    s = I.startAuction(I.selectMission(s, 2, 'MINE'));
    expect(s.teams.map(team => team.lockedMission)).toEqual(['COMBAT', 'MINE']);
    expect(code(() => I.selectMission(s, 1, 'RECCE'))).toBe('phase');
  });
});

describe('live bidding (RQ-06, RQ-07)', () => {
  it('starts at the start price, steps by $50,000 and ignores a stale repeated click', () => {
    let s = I.openBidding(session(), now());
    expect(I.nextOffer(s)).toBe(40_000_000); // CAP-G
    const shown = I.nextOffer(s)!;
    s = I.acceptBid(s, 1, shown, now());
    expect(s.currentBid).toBe(40_000_000);
    expect(code(() => I.acceptBid(s, 2, shown, now()))).toBe('stale');
    s = bidFor(s, 2);
    expect(s.currentBid).toBe(45_000_000);
    expect(code(() => bidFor(s, 2))).toBe('leader');
  });
  it('rejects bids while paused, after expiry until extended, and before opening', () => {
    let s = session();
    expect(code(() => I.acceptBid(s, 1, 40_000_000, now()))).toBe('phase');
    s = I.openBidding(s, now());
    s = I.pause(s, now());
    expect(code(() => bidFor(s, 1))).toBe('paused');
    expect(code(() => I.pause(s, now()))).toBe('paused');
    s = I.resume(s, now());
    now(31_000);
    expect(I.auctionStatus(s, t).timedOut).toBe(true);
    expect(code(() => bidFor(s, 1))).toBe('expired');
    s = I.extend(s, t);
    expect(I.auctionStatus(s, t).remainingMs).toBe(30_000);
    s = bidFor(s, 1);
    expect(s.leader).toBe(1);
  });
  it('untimed lots never expire', () => {
    let s = I.openBidding(session(2, 'JIT', 'UNTIMED'), now());
    now(10_000_000);
    expect(I.auctionStatus(s, t)).toMatchObject({ remainingMs: null, timedOut: false, biddingActive: true });
    s = bidFor(s, 1);
    expect(code(() => I.extend(s, now()))).toBe('phase');
  });
  it('MANUAL mode requires reveal; JIT reveals automatically', () => {
    let s = session(2, 'MANUAL');
    expect(s.revealed).toBe(false);
    s = I.reveal(s);
    expect(code(() => I.reveal(s))).toBe('phase');
    expect(session(2, 'JIT').revealed).toBe(true);
  });
});

describe('outcomes, corrections and void (RQ-06, RQ-08)', () => {
  it('commits a sale to the leader and requires a reason for a correction', () => {
    let s = bidFor(I.openBidding(session(), now()), 1);
    expect(code(() => I.commitSale(s, 2, 40_000_000))).toBe('reason');
    expect(code(() => I.commitSale(s, 1, 42_000_000, 'typo'))).toBe('money');
    const corrected = I.commitSale(s, 2, 50_000_000, 'Team 2 bid was missed');
    expect(corrected.ledger.at(-1)).toMatchObject({ kind: 'SALE', team: 2, price: 50_000_000, reason: 'Team 2 bid was missed' });
    s = I.commitSale(s, 1, 40_000_000);
    expect(s.ledger.at(-1)).toEqual({ seq: 1, kind: 'SALE', round: 1, lot: 1, card: 'CAP-G', team: 1, price: 40_000_000 });
    expect(s.teams[0]!.cost).toBe(40_000_000);
    expect(s.teams[0]!.totals.CAP).toBe(4);
    expect(code(() => I.commitUnsold(s))).toBe('phase');
    valid(s);
  });
  it('allows unsold with a leader, and void then requires a replacement before advancing', () => {
    let s = bidFor(I.openBidding(session(), now()), 3);
    s = I.commitUnsold(s);
    expect(s.leader).toBeNull();
    s = I.voidCurrent(s, 'Team 3 did bid');
    expect(code(() => I.advance(s))).toBe('phase');
    expect(code(() => I.voidCurrent(s, 'again'))).toBe('phase');
    s = I.commitSale(bidFor(I.openBidding(s, now()), 3), 3, 40_000_000);
    s = I.voidCurrent(s, 'Price disputed');
    expect(s.teams[2]!.purchases).toEqual([]);
    expect(s.ledger.map(e => e.kind)).toEqual(['UNSOLD', 'VOID', 'SALE', 'VOID']);
    expect(s.ledger.at(-1)).toMatchObject({ ref: 3, team: 3, price: 40_000_000 });
    s = I.commitUnsold(I.openBidding(s, now()));
    s = I.advance(s);
    expect([s.round, s.lot]).toEqual([0, 1]);
    valid(s);
  });
  it('enforces two wins per team per round, including corrected sales', () => {
    let s = session();
    for (let lot = 0; lot < 2; lot++) s = I.advance(I.commitSale(bidFor(I.openBidding(s, now()), 1), 1, I.currentCard(s).start));
    s = I.openBidding(s, now());
    expect(code(() => bidFor(s, 1))).toBe('limit');
    s = bidFor(s, 2);
    expect(code(() => I.commitSale(s, 1, s.currentBid!, 'correction'))).toBe('limit');
  });
  it('stops repeated corrections before the 210-entry ledger is exhausted', () => {
    let s = session();
    let cycles = 0;
    for (;;) {
      s = I.commitSale(bidFor(I.openBidding(s, now()), 1), 1, 40_000_000);
      const attempt = code(() => I.voidCurrent(s, 'retry'));
      if (attempt !== 'no error') { expect(attempt).toBe('ledger-limit'); break; }
      s = I.voidCurrent(s, 'retry');
      cycles++;
    }
    expect(s.ledger.length + 69).toBeLessThanOrEqual(210);
    expect(cycles).toBe(70);
    valid(s);
  });
});

function playToBuild(s: I.InstructorState): I.InstructorState {
  while (s.phase === 'auction') {
    if (!I.currentOutcome(s)) {
      s = I.openBidding(s, now());
      const team = s.teams.find(x => x.purchasesByRound[s.round]! < 2 && (s.lot + x.id) % 3 === 0);
      if (team) { const leading = bidFor(s, team.id); s = I.commitSale(leading, team.id, leading.currentBid!); } else s = I.commitUnsold(s);
    }
    s = I.advance(s);
  }
  return s;
}

describe('build, private submissions and close (RQ-03, RQ-13)', () => {
  it('runs all 70 lots into build, then submissions in private mode, debrief and closed', () => {
    let s = playToBuild(session(3, 'ROUND'));
    expect(s.phase).toBe('build');
    expect(s.ledger).toHaveLength(70);
    expect(s.teams.every(team => team.purchasesByRound.every(n => n <= 2))).toBe(true);
    valid(s);
    s = I.openSubmissions(s);
    expect(code(() => I.setProfit(s, 1, '100'))).toBe('phase');
    s = I.setPrivateEntry(s, true);
    s = I.setSubmitted(I.setProfit(s, 1, '100000.25'), 1, true);
    expect(code(() => I.setProfit(s, 2, '-5'))).toBe('money');
    expect(I.pendingSubmissions(s)).toEqual([2, 3]);
    expect(instructorForSave(s).privateEntry).toBe(false);
    s = I.closeRoom(I.closeSubmissions(s));
    expect(s.phase).toBe('closed');
    expect(s.teams[0]!.profit).toBe(10_000_025);
    valid(s);
  });
});

describe('every reachable state validates and equals its ledger replay (RQ-08 property)', () => {
  it('holds for random command sequences', () => {
    const action = fc.oneof(
      fc.constant({ kind: 'open' as const }), fc.constant({ kind: 'unsold' as const }), fc.constant({ kind: 'advance' as const }),
      fc.constant({ kind: 'pause' as const }), fc.constant({ kind: 'resume' as const }), fc.constant({ kind: 'extend' as const }),
      fc.record({ kind: fc.constant('bid' as const), team: fc.integer({ min: 1, max: 4 }) }),
      fc.record({ kind: fc.constant('sale' as const), team: fc.integer({ min: 1, max: 4 }), steps: fc.integer({ min: 0, max: 3 }) }),
      fc.record({ kind: fc.constant('void' as const) }),
    );
    fc.assert(fc.property(fc.array(action, { maxLength: 120 }), fc.constantFrom<RevealMode>('ROUND', 'JIT', 'MANUAL'), (actions, mode) => {
      let s = session(4, mode);
      for (const a of actions) {
        const before = s;
        try {
          switch (a.kind) {
            case 'open': s = I.openBidding(s.revealed ? s : I.reveal(s), now()); break;
            case 'bid': s = bidFor(s, a.team); break;
            case 'sale': s = I.commitSale(s, a.team, I.currentCard(s).start + a.steps * 5_000_000, 'adjusted'); break;
            case 'unsold': s = I.commitUnsold(s); break;
            case 'void': s = I.voidCurrent(s, 'property'); break;
            case 'advance': s = I.advance(s); break;
            case 'pause': s = I.pause(s, now()); break;
            case 'resume': s = I.resume(s, now()); break;
            case 'extend': s = I.extend(s, now()); break;
          }
        } catch (e) {
          expect(e).toBeInstanceOf(DomainError);
          expect(s).toBe(before);
        }
        valid(s);
      }
    }), { numRuns: 60, seed: 20261009 });
  });
});
