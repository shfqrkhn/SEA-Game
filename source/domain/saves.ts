// Schema-3 validation and canonical reconstruction for both roles (MPES §8.3–8.5, §8.8).
// Input is untrusted: it is copied passively, every invariant is checked, derived values are rebuilt.
import { LOTS, MAX_PURCHASES, TOTAL_LOTS, isMissionId, type MissionId } from './data.ts';
import { ensure, fail, isInt } from './errors.ts';
import type { InstructorState, Practice, ResultDraft } from './instructor.ts';
import { effectiveOutcomes, lotIndex, type LedgerEntry, type Outcome } from './ledger.ts';
import { deal, slotCard, SEED_PATTERN, type MarketCard } from './market.ts';
import { add, cents, isCents, validPrice } from './money.ts';
import { atOrAfter, isPhase, parseSessionCode, REVEAL_MODES, MIN_BID_SECONDS, MAX_BID_SECONDS, type Phase, type RevealMode } from './session.ts';
import type { JoinedStudent, ScratchEntry } from './student.ts';
import { acquire, createTeams, withPurchases, type Purchase, type Team } from './team.ts';
import { passiveCopy } from './backup.ts';

type Rec = Record<string, unknown>;
const INSTRUCTOR_KEYS = ['schema', 'phase', 'lang', 'vehiclesLocked', 'sessionCode', 'marketSeed', 'market', 'teams', 'teamCount', 'revealMode', 'timingMode', 'bidSeconds', 'round', 'lot', 'revealed', 'open', 'pausedRemaining', 'deadline', 'leader', 'currentBid', 'ledger', 'seq', 'practice', 'privateEntry', 'resultDraft', 'finalCallAnnounced'];
const STUDENT_KEYS = ['schema', 'phase', 'lang', 'vehicleConfirmed', 'lockedMission', 'sessionCode', 'teamCount', 'teamId', 'team', 'round', 'lot', 'currentCard', 'plan', 'planBaseline', 'risks', 'maxWtpCents', 'scratch', 'profitMode', 'profitInput', 'profitCents', 'practiceWon', 'vehicleChangeNotice'];
const TEAM_KEYS = ['id', 'mission', 'lockedMission', 'totals', 'cost', 'purchases', 'purchasesByRound', 'profit', 'submitted'];
const PURCHASE_KEYS = ['id', 'title', 'start', 'e', 'cat', 'round', 'lot', 'instance', 'paid'];

function record(value: unknown, allowed: readonly string[], required: readonly string[] = allowed): Rec {
  ensure(value !== null && typeof value === 'object' && !Array.isArray(value), 'invalid-state', 'object');
  const rec = value as Rec;
  for (const key of Object.keys(rec)) ensure(allowed.includes(key), 'invalid-state', `unexpected key ${key}`);
  for (const key of required) ensure(Object.hasOwn(rec, key), 'invalid-state', `missing ${key}`);
  return rec;
}
function array(value: unknown, max: number): unknown[] {
  ensure(Array.isArray(value) && value.length <= max, 'invalid-state', 'array');
  return value;
}
function bool(value: unknown): boolean {
  ensure(typeof value === 'boolean', 'invalid-state', 'boolean');
  return value;
}
function str(value: unknown, max: number): string {
  ensure(typeof value === 'string' && value.length <= max, 'invalid-state', 'text');
  return value;
}
function nullableNumber(value: unknown): number | null {
  ensure(value === null || (typeof value === 'number' && Number.isFinite(value)), 'invalid-state', 'number');
  return value;
}
function reason(value: unknown): string {
  ensure(typeof value === 'string' && value.length <= 120 && value.trim().length > 0, 'invalid-state', 'reason');
  return value;
}
function base(x: Rec): { phase: Phase; lang: 'en' | 'fr'; code: string; teamCount: number; round: number; lot: number } {
  ensure(x.schema === 3, 'invalid-state', 'schema');
  ensure(isPhase(x.phase), 'invalid-state', 'phase');
  ensure(x.lang === 'en' || x.lang === 'fr', 'invalid-state', 'lang');
  const session = parseSessionCode(x.sessionCode);
  ensure(x.teamCount === session.teamCount, 'invalid-state', 'teamCount');
  ensure(isInt(x.round, 0, 6) && isInt(x.lot, 0, 9), 'invalid-state', 'position');
  return { phase: x.phase, lang: x.lang, code: session.code, teamCount: session.teamCount, round: x.round, lot: x.lot };
}

/** Rebuild a purchase from canonical data; only id/round/lot/instance/paid are trusted. */
function purchase(value: unknown): Purchase {
  const p = record(value, PURCHASE_KEYS);
  ensure(typeof p.id === 'string' && isInt(p.round, 1, 7) && isInt(p.lot, 1, 10), 'invalid-state', 'purchase');
  const card = slotCard(p.id, p.round, p.lot);
  ensure(p.instance === card.instance, 'invalid-state', 'instance');
  ensure(validPrice(card.start, p.paid), 'invalid-state', 'paid');
  return { ...card, paid: p.paid };
}

function team(value: unknown, index: number, allowUnset: boolean): Team {
  const t = record(value, TEAM_KEYS, TEAM_KEYS.filter(k => k !== 'lockedMission'));
  ensure(t.id === index + 1, 'invalid-state', 'team id');
  const mission = t.mission === null && allowUnset ? null : (isMissionId(t.mission) ? t.mission : fail('invalid-state', 'mission'));
  const locked = t.lockedMission === undefined || t.lockedMission === null ? null : (isMissionId(t.lockedMission) ? t.lockedMission : fail('invalid-state', 'locked'));
  ensure(locked === null || locked === mission, 'invalid-state', 'locked mission');
  ensure(isCents(t.profit), 'invalid-state', 'profit');
  const purchases = array(t.purchases, MAX_PURCHASES).map(purchase);
  ensure(mission !== null || purchases.length === 0, 'invalid-state', 'purchases without mission');
  const blank = createTeams(2)[0]!;
  return withPurchases({ ...blank, id: index + 1, mission, lockedMission: locked, profit: t.profit, submitted: bool(t.submitted) }, purchases);
}

/** Order-insensitive deep equality for plain data (JSON key order may vary). */
function same(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (!a || !b || typeof a !== 'object' || typeof b !== 'object') return false;
  if (Array.isArray(a) || Array.isArray(b)) return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((v, i) => same(v, b[i]));
  const ka = Object.keys(a), kb = Object.keys(b);
  return ka.length === kb.length && ka.every(k => Object.hasOwn(b, k) && same((a as Rec)[k], (b as Rec)[k]));
}

function ledgerEntries(raw: unknown[], market: readonly (readonly MarketCard[])[], teamCount: number): LedgerEntry[] {
  const entries: LedgerEntry[] = [];
  const active = new Map<number, Outcome>();
  raw.forEach((value, i) => {
    const kind = (value as Rec | null)?.kind;
    const keys = kind === 'VOID' ? ['seq', 'kind', 'round', 'lot', 'card', 'team', 'price', 'ref', 'reason']
      : kind === 'SALE' ? ['seq', 'kind', 'round', 'lot', 'card', 'team', 'price', 'reason'] : ['seq', 'kind', 'round', 'lot', 'card', 'team', 'price'];
    const e = record(value, keys, keys.filter(k => k !== 'reason' || kind === 'VOID'));
    ensure(kind === 'SALE' || kind === 'UNSOLD' || kind === 'VOID', 'invalid-state', 'ledger kind');
    ensure(e.seq === i + 1 && isInt(e.round, 1, 7) && isInt(e.lot, 1, 10), 'invalid-state', 'ledger position');
    const slot = market[e.round - 1]![e.lot - 1]!;
    ensure(e.card === slot.id, 'invalid-state', 'ledger card');
    const key = lotIndex(e.round, e.lot), prior = active.get(key);
    const head = { seq: i + 1, round: e.round, lot: e.lot, card: slot.id };
    let entry: LedgerEntry;
    if (kind === 'VOID') {
      ensure(prior !== undefined && e.ref === prior.seq && e.team === prior.team && e.price === prior.price, 'invalid-state', 'void');
      entry = { ...head, kind, team: prior.team, price: prior.price, ref: prior.seq, reason: reason(e.reason) };
      active.delete(key);
    } else if (kind === 'SALE') {
      ensure(prior === undefined && isInt(e.team, 1, teamCount) && validPrice(slot.start, e.price), 'invalid-state', 'sale');
      entry = e.reason === undefined ? { ...head, kind, team: e.team, price: e.price } : { ...head, kind, team: e.team, price: e.price, reason: reason(e.reason) };
      active.set(key, entry);
    } else {
      ensure(prior === undefined && e.team === null && e.price === null, 'invalid-state', 'unsold');
      entry = { ...head, kind, team: null, price: null };
      active.set(key, entry);
    }
    entries.push(entry);
  });
  return entries;
}

function practice(value: unknown, phase: Phase): Practice {
  const p = record(value, ['revealed', 'open', 'leader', 'closed']);
  const result = { revealed: bool(p.revealed), open: bool(p.open), leader: bool(p.leader), closed: bool(p.closed) };
  if (result.open) ensure(result.revealed && !result.closed, 'invalid-state', 'practice');
  if (result.leader) ensure(result.revealed && (result.open || result.closed), 'invalid-state', 'practice');
  if (result.closed) ensure(result.revealed && result.leader && !result.open, 'invalid-state', 'practice');
  if (phase !== 'practice') ensure(!result.revealed && !result.open && !result.leader && !result.closed, 'invalid-state', 'practice');
  return result;
}

export function validateInstructor(raw: unknown): InstructorState {
  const x = record(passiveCopy(raw), INSTRUCTOR_KEYS, INSTRUCTOR_KEYS.filter(k => !['privateEntry', 'resultDraft', 'finalCallAnnounced'].includes(k)));
  const b = base(x);
  const locked = bool(x.vehiclesLocked);
  ensure((REVEAL_MODES as readonly unknown[]).includes(x.revealMode), 'invalid-state', 'reveal');
  ensure(x.timingMode === 'TIMED' || x.timingMode === 'UNTIMED', 'invalid-state', 'timing');
  ensure(isInt(x.bidSeconds, MIN_BID_SECONDS, MAX_BID_SECONDS), 'invalid-state', 'bidSeconds');
  ensure(typeof x.marketSeed === 'string' && SEED_PATTERN.test(x.marketSeed), 'invalid-state', 'seed');
  const market = deal(x.marketSeed);
  ensure(same(x.market, market), 'invalid-state', 'market');
  const rawTeams = array(x.teams, 10);
  ensure(rawTeams.length === b.teamCount, 'invalid-state', 'team count');
  const rawLedger = array(x.ledger, 210);
  ensure(x.seq === rawLedger.length, 'invalid-state', 'seq');
  const postPlanning = atOrAfter(b.phase, 'auction');
  ensure(locked === postPlanning, 'invalid-state', 'lock');
  let teams = rawTeams.map((t, i) => team(t, i, !locked));
  if (locked) for (const t of teams) ensure(t.mission !== null && t.lockedMission === t.mission, 'invalid-state', 'locked');
  else { ensure(rawLedger.length === 0, 'invalid-state', 'ledger before auction'); for (const t of teams) ensure(t.lockedMission === null, 'invalid-state', 'lock'); }

  const ledger = ledgerEntries(rawLedger, market, b.teamCount);
  const active = effectiveOutcomes(ledger);
  // Rebuild inventories from the ledger and require the saved purchases to match exactly, in order.
  const rebuilt = teams.map(t => withPurchases({ ...t }, []));
  for (const outcome of active.values()) {
    if (outcome.kind === 'SALE') rebuilt[outcome.team - 1] = acquire(rebuilt[outcome.team - 1]!, market[outcome.round - 1]![outcome.lot - 1]!, outcome.price);
  }
  teams.forEach((t, i) => {
    const want = rebuilt[i]!.purchases, have = t.purchases;
    ensure(want.length === have.length && want.every((p, j) => p.instance === have[j]!.instance && p.paid === have[j]!.paid), 'invalid-state', 'purchases differ from ledger');
  });
  teams = rebuilt;

  const position = b.round * LOTS + b.lot;
  if (postPlanning) for (let i = 0; i < position; i++) ensure(active.has(i), 'invalid-state', 'missing outcome');
  if (atOrAfter(b.phase, 'build')) ensure(active.size === TOTAL_LOTS, 'invalid-state', 'incomplete auction');
  if (b.phase === 'auction') for (const key of active.keys()) ensure(key <= position, 'invalid-state', 'future outcome');

  const leader = x.leader === null ? null : (isInt(x.leader, 1, b.teamCount) ? x.leader : fail('invalid-state', 'leader'));
  const currentBid = x.currentBid === null ? null : cents(x.currentBid);
  ensure((leader === null) === (currentBid === null), 'invalid-state', 'leader/bid');
  if (currentBid !== null) ensure(validPrice(market[b.round]![b.lot]!.start, currentBid), 'invalid-state', 'bid');
  const open = bool(x.open), revealed = bool(x.revealed);
  const deadline = nullableNumber(x.deadline), pausedRemaining = nullableNumber(x.pausedRemaining);
  const current = active.get(position);
  if (b.phase === 'auction' && !open) {
    if (current?.kind === 'SALE') ensure(leader === current.team && currentBid === current.price, 'invalid-state', 'closed lot');
    else ensure(leader === null && currentBid === null, 'invalid-state', 'closed lot');
  }
  if (open) {
    ensure(b.phase === 'auction' && revealed && current === undefined, 'invalid-state', 'open');
    if (x.timingMode === 'TIMED') ensure(deadline !== null || pausedRemaining !== null, 'invalid-state', 'deadline');
    ensure(pausedRemaining === null || pausedRemaining >= 0, 'invalid-state', 'paused');
  }
  let resultDraft: ResultDraft | null = null;
  if (x.resultDraft !== undefined && x.resultDraft !== null) {
    const d = record(x.resultDraft, ['team', 'price', 'reason']);
    resultDraft = { team: str(d.team, 10), price: str(d.price, 20), reason: str(d.reason, 120) };
  }
  ensure(x.finalCallAnnounced === undefined || typeof x.finalCallAnnounced === 'boolean', 'invalid-state', 'final call');
  for (const t of teams) add(t.cost, t.profit);
  const state: InstructorState = {
    schema: 3, phase: b.phase, lang: b.lang, vehiclesLocked: locked, sessionCode: b.code, marketSeed: x.marketSeed, market,
    teams, teamCount: b.teamCount, revealMode: x.revealMode as RevealMode, timingMode: x.timingMode, bidSeconds: x.bidSeconds,
    round: b.round, lot: b.lot, revealed, open, pausedRemaining, deadline, leader, currentBid, ledger, seq: ledger.length,
    practice: practice(x.practice, b.phase), privateEntry: x.privateEntry === true && b.phase === 'submit', resultDraft,
  };
  return typeof x.finalCallAnnounced === 'boolean' ? { ...state, finalCallAnnounced: x.finalCallAnnounced } : state;
}

/** Saved form: private entry never restores open (MPES §8.3). */
export function instructorForSave(state: InstructorState): InstructorState {
  return { ...state, privateEntry: false };
}

export function validateStudent(raw: unknown): JoinedStudent {
  const x = record(passiveCopy(raw), STUDENT_KEYS, STUDENT_KEYS.filter(k => k !== 'vehicleChangeNotice'));
  const b = base(x);
  const t = team(x.team, isInt(x.teamId, 1, b.teamCount) ? x.teamId - 1 : fail('invalid-state', 'teamId'), false);
  const teamId = t.id;
  let lockedMission: MissionId | null = null;
  if (atOrAfter(b.phase, 'auction')) {
    ensure(x.lockedMission === t.mission && t.lockedMission === t.mission, 'invalid-state', 'locked mission');
    lockedMission = t.mission;
  } else {
    ensure(x.lockedMission === null && t.lockedMission === null && t.purchases.length === 0, 'invalid-state', 'unlocked');
  }
  const practiceWon = bool(x.practiceWon);
  ensure(b.phase === 'practice' || !practiceWon, 'invalid-state', 'practiceWon');
  ensure(x.profitMode === 'AMOUNT' || x.profitMode === 'PERCENT', 'invalid-state', 'profitMode');
  const profitCents = cents(x.profitCents);
  add(t.cost, profitCents);
  const scratchIn = record(x.scratch, Object.keys(x.scratch as Rec ?? {}), []);
  ensure(Object.keys(scratchIn).length <= TOTAL_LOTS, 'invalid-state', 'scratch');
  const scratch: Record<string, ScratchEntry> = {};
  for (const [key, value] of Object.entries(scratchIn)) {
    ensure(/^[1-7]-(10|[1-9])$/.test(key), 'invalid-state', 'scratch key');
    const entry = record(value, ['wtp', 'note']);
    scratch[key] = { wtp: str(entry.wtp, 20), note: str(entry.note, 600) };
  }
  let currentCard: MarketCard | null = null;
  if (x.currentCard !== null) {
    const c = record(x.currentCard, PURCHASE_KEYS, ['id', 'instance']);
    ensure(typeof c.id === 'string', 'invalid-state', 'card');
    currentCard = slotCard(c.id, b.round + 1, b.lot + 1);
    ensure(c.instance === currentCard.instance, 'invalid-state', 'card instance');
  }
  ensure(x.vehicleChangeNotice === undefined || typeof x.vehicleChangeNotice === 'boolean', 'invalid-state', 'notice');
  return {
    schema: 3, phase: b.phase, lang: b.lang, vehicleConfirmed: bool(x.vehicleConfirmed), lockedMission, sessionCode: b.code,
    teamCount: b.teamCount, teamId, team: t, round: b.round, lot: b.lot, currentCard, plan: str(x.plan, 1200),
    planBaseline: x.planBaseline === null ? null : str(x.planBaseline, 1200), risks: str(x.risks, 1200),
    maxWtpCents: cents(x.maxWtpCents), scratch, profitMode: x.profitMode, profitInput: str(x.profitInput, 20), profitCents,
    practiceWon, vehicleChangeNotice: x.vehicleChangeNotice === true,
  };
}
