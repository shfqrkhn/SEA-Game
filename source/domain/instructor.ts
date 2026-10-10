// Instructor role: authoritative session, auction and results (MPES §6). Commands are pure:
// they return a complete new state or throw DomainError without changing anything.
import { LOTS, ROUNDS, isMissionId, type MissionId } from './data.ts';
import { ensure, fail, isInt } from './errors.ts';
import { effectiveOutcomes, hasCapacity, type LedgerEntry, type Outcome } from './ledger.ts';
import { deal, SEED_PATTERN, type MarketCard } from './market.ts';
import { add, INCREMENT_CENTS, parseAmount, price as checkPrice } from './money.ts';
import {
  DEFAULT_BID_SECONDS, EXTEND_MS, MAX_BID_SECONDS, MIN_BID_SECONDS, REVEAL_MODES, makeSessionCode,
  type Language, type Phase, type RevealMode, type TimingMode,
} from './session.ts';
import { acquire, canWin, createTeams, removePurchase, type Team } from './team.ts';

export interface Practice { readonly revealed: boolean; readonly open: boolean; readonly leader: boolean; readonly closed: boolean }
export interface ResultDraft { readonly team: string; readonly price: string; readonly reason: string }

/** Schema-3 instructor state (MPES §8.3). */
export interface InstructorState {
  readonly schema: 3;
  readonly phase: Phase;
  readonly lang: Language;
  readonly vehiclesLocked: boolean;
  readonly sessionCode: string | null;
  readonly marketSeed: string | null;
  readonly market: readonly (readonly MarketCard[])[];
  readonly teams: readonly Team[];
  readonly teamCount: number;
  readonly revealMode: RevealMode;
  readonly timingMode: TimingMode;
  readonly bidSeconds: number;
  readonly round: number;
  readonly lot: number;
  readonly revealed: boolean;
  readonly open: boolean;
  readonly pausedRemaining: number | null;
  readonly deadline: number | null;
  readonly leader: number | null;
  readonly currentBid: number | null;
  readonly ledger: readonly LedgerEntry[];
  readonly seq: number;
  readonly practice: Practice;
  readonly privateEntry: boolean;
  readonly resultDraft: ResultDraft | null;
  readonly finalCallAnnounced?: boolean;
}

const EMPTY_PRACTICE: Practice = { revealed: false, open: false, leader: false, closed: false };

export function instructorShell(lang: Language = 'en'): InstructorState {
  return {
    schema: 3, phase: 'setup', lang, vehiclesLocked: false, sessionCode: null, marketSeed: null, market: [], teams: [],
    teamCount: 4, revealMode: 'JIT', timingMode: 'TIMED', bidSeconds: DEFAULT_BID_SECONDS, round: 0, lot: 0, revealed: true,
    open: false, pausedRemaining: null, deadline: null, leader: null, currentBid: null, ledger: [], seq: 0,
    practice: EMPTY_PRACTICE, privateEntry: false, resultDraft: null,
  };
}

function inPhase(state: InstructorState, ...phases: Phase[]): void {
  if (!phases.includes(state.phase)) fail('phase');
}
function time(value: number): number {
  if (!Number.isFinite(value) || value < 0 || value > Number.MAX_SAFE_INTEGER) fail('time');
  return value;
}
function reasonText(reason: unknown): string {
  if (typeof reason !== 'string' || reason.trim().length === 0 || reason.length > 120) fail('reason');
  return reason;
}

export function setLanguage(state: InstructorState, lang: Language): InstructorState {
  return { ...state, lang };
}

export interface SessionOptions {
  readonly teamCount: number;
  readonly revealMode: RevealMode;
  readonly timingMode: TimingMode;
  readonly bidSeconds: number;
  /** 16 uppercase hex characters from crypto randomness (supplied by the app). */
  readonly token: string;
  /** 32 uppercase hex characters from crypto randomness, independent of the token. */
  readonly seed: string;
}

export function generateSession(state: InstructorState, options: SessionOptions): InstructorState {
  inPhase(state, 'setup');
  ensure(isInt(options.teamCount, 2, 10), 'team');
  ensure((REVEAL_MODES as readonly string[]).includes(options.revealMode), 'invalid-state');
  ensure(options.timingMode === 'TIMED' || options.timingMode === 'UNTIMED', 'invalid-state');
  ensure(isInt(options.bidSeconds, MIN_BID_SECONDS, MAX_BID_SECONDS), 'time');
  ensure(SEED_PATTERN.test(options.seed), 'invalid-state');
  return {
    ...instructorShell(state.lang),
    sessionCode: makeSessionCode(options.teamCount, options.token), marketSeed: options.seed, market: deal(options.seed),
    teams: createTeams(options.teamCount), teamCount: options.teamCount, revealMode: options.revealMode,
    timingMode: options.timingMode, bidSeconds: options.bidSeconds, revealed: options.revealMode !== 'MANUAL',
  };
}

/** Deliberate reset to an empty setup (UI confirms first). */
export function newSession(state: InstructorState): InstructorState {
  return { ...instructorShell(state.lang), teamCount: state.teamCount, revealMode: state.revealMode, timingMode: state.timingMode, bidSeconds: state.bidSeconds };
}

// ---- Practice (MPES §6.8) ----
export type PracticeAction = 'reveal' | 'open' | 'accept' | 'close' | 'reset';

export function startPractice(state: InstructorState): InstructorState {
  inPhase(state, 'setup');
  ensure(state.sessionCode !== null, 'phase');
  return { ...state, phase: 'practice', practice: EMPTY_PRACTICE, privateEntry: false };
}

export function practiceStep(state: InstructorState, action: PracticeAction): InstructorState {
  inPhase(state, 'practice');
  const p = state.practice;
  const next = ((): Practice | null => {
    switch (action) {
      case 'reveal': return !p.revealed ? { ...p, revealed: true } : null;
      case 'open': return p.revealed && !p.open && !p.closed ? { ...p, open: true } : null;
      case 'accept': return p.open && !p.leader ? { ...p, leader: true } : null;
      case 'close': return p.open && p.leader ? { ...p, open: false, closed: true } : null;
      case 'reset': return EMPTY_PRACTICE;
    }
  })();
  if (!next) fail('phase');
  return { ...state, practice: next };
}

export function openPlanning(state: InstructorState): InstructorState {
  inPhase(state, 'practice');
  if (!state.practice.closed) fail('phase');
  return { ...state, phase: 'planning', practice: EMPTY_PRACTICE, privateEntry: false };
}

// ---- Planning ----
export function selectMission(state: InstructorState, teamId: number, mission: MissionId | null): InstructorState {
  inPhase(state, 'setup', 'planning');
  ensure(!state.vehiclesLocked, 'phase');
  ensure(isInt(teamId, 1, state.teams.length), 'team');
  ensure(mission === null || isMissionId(mission), 'mission');
  ensure(state.sessionCode !== null, 'phase');
  return { ...state, teams: state.teams.map(team => team.id === teamId ? { ...team, mission } : team) };
}

export function startAuction(state: InstructorState): InstructorState {
  inPhase(state, 'planning');
  if (state.teams.some(team => team.mission === null)) fail('mission');
  return {
    ...state, phase: 'auction', vehiclesLocked: true, teams: state.teams.map(team => ({ ...team, lockedMission: team.mission })),
    round: 0, lot: 0, revealed: state.revealMode !== 'MANUAL', open: false, pausedRemaining: null, deadline: null,
    leader: null, currentBid: null, resultDraft: null, privateEntry: false,
  };
}

// ---- Auction (MPES §6.5) ----
export function currentCard(state: InstructorState): MarketCard {
  const card = state.market[state.round]?.[state.lot];
  if (!card) fail('invalid-state');
  return card;
}

export function currentOutcome(state: InstructorState): Outcome | null {
  return effectiveOutcomes(state.ledger).get(state.round * LOTS + state.lot) ?? null;
}

export function nextOffer(state: InstructorState): number | null {
  if (state.phase !== 'auction') return null;
  const card = currentCard(state);
  return state.leader === null ? card.start : add(state.currentBid ?? 0, INCREMENT_CENTS);
}

export interface AuctionStatus {
  readonly outcome: Outcome | null;
  readonly nextOffer: number | null;
  readonly remainingMs: number | null;
  readonly timedOut: boolean;
  readonly biddingActive: boolean;
}

function remaining(state: InstructorState, now: number): number | null {
  if (!state.open || state.timingMode === 'UNTIMED') return null;
  if (state.pausedRemaining !== null) return state.pausedRemaining;
  if (state.deadline === null) return 0;
  return Math.max(0, state.deadline - now);
}

export function auctionStatus(state: InstructorState, now: number): AuctionStatus {
  const outcome = state.phase === 'auction' ? currentOutcome(state) : null;
  const remainingMs = remaining(state, time(now));
  const timedOut = state.open && state.timingMode === 'TIMED' && state.pausedRemaining === null && remainingMs === 0;
  const live = state.phase === 'auction' && state.open && outcome === null;
  return { outcome, nextOffer: nextOffer(state), remainingMs, timedOut, biddingActive: live && state.pausedRemaining === null && !timedOut };
}

function auction(state: InstructorState): void {
  inPhase(state, 'auction');
  ensure(state.vehiclesLocked, 'phase');
}
function live(state: InstructorState): void {
  auction(state);
  if (!state.open || currentOutcome(state)) fail('phase');
}

export function reveal(state: InstructorState): InstructorState {
  auction(state);
  if (state.revealed || currentOutcome(state)) fail('phase');
  return { ...state, revealed: true };
}

export function openBidding(state: InstructorState, now: number): InstructorState {
  auction(state);
  if (state.open || currentOutcome(state)) fail('phase');
  const deadline = state.timingMode === 'TIMED' ? time(time(now) + state.bidSeconds * 1000) : null;
  return { ...state, revealed: true, open: true, pausedRemaining: null, deadline, finalCallAnnounced: false };
}

/** `intended` is the offer shown on screen, so a repeated click cannot raise the bid twice. */
export function acceptBid(state: InstructorState, teamId: number, intended: number, now: number): InstructorState {
  live(state);
  if (state.pausedRemaining !== null) fail('paused');
  if (state.timingMode === 'TIMED' && remaining(state, time(now)) === 0) fail('expired');
  ensure(isInt(teamId, 1, state.teams.length), 'team');
  const team = state.teams[teamId - 1]!;
  if (state.leader === teamId) fail('leader');
  if (!canWin(team, state.round + 1)) fail('limit');
  const amount = nextOffer(state)!;
  if (intended !== amount) fail('stale');
  add(team.cost, amount, team.profit);
  return { ...state, leader: teamId, currentBid: amount, resultDraft: null };
}

export function pause(state: InstructorState, now: number): InstructorState {
  live(state);
  if (state.pausedRemaining !== null) fail('paused');
  return { ...state, pausedRemaining: remaining(state, time(now)) ?? 0 };
}

export function resume(state: InstructorState, now: number): InstructorState {
  live(state);
  if (state.pausedRemaining === null) fail('phase');
  return { ...state, pausedRemaining: null, deadline: state.timingMode === 'TIMED' ? time(time(now) + state.pausedRemaining) : null };
}

export function extend(state: InstructorState, now: number): InstructorState {
  live(state);
  if (state.timingMode !== 'TIMED') fail('phase');
  if (state.pausedRemaining !== null) return { ...state, pausedRemaining: time(state.pausedRemaining + EXTEND_MS), finalCallAnnounced: false };
  return { ...state, deadline: time(time(now) + remaining(state, now)! + EXTEND_MS), finalCallAnnounced: false };
}

function closeWith(state: InstructorState, teams: readonly Team[], entry: LedgerEntry, leader: number | null, bid: number | null): InstructorState {
  const position = state.round * LOTS + state.lot;
  if (!hasCapacity(position, state.ledger.length, entry.kind)) fail('ledger-limit');
  return {
    ...state, teams, ledger: [...state.ledger, entry], seq: entry.seq, leader, currentBid: bid,
    open: false, pausedRemaining: null, deadline: null, resultDraft: null, finalCallAnnounced: false,
  };
}
function closing(state: InstructorState): void {
  live(state);
  if (state.pausedRemaining !== null) fail('paused');
}

/** SALE to the leader at the current bid, or a corrected sale (other team/price) with a reason. */
export function commitSale(state: InstructorState, teamId: number, paid: number, reason = ''): InstructorState {
  closing(state);
  ensure(isInt(teamId, 1, state.teams.length), 'team');
  const card = currentCard(state);
  checkPrice(card.start, paid);
  const corrected = state.leader !== teamId || state.currentBid !== paid;
  const team = acquire(state.teams[teamId - 1]!, card, paid);
  const entry: LedgerEntry = corrected
    ? { seq: state.seq + 1, kind: 'SALE', round: card.round, lot: card.lot, card: card.id, team: teamId, price: paid, reason: reasonText(reason) }
    : { seq: state.seq + 1, kind: 'SALE', round: card.round, lot: card.lot, card: card.id, team: teamId, price: paid };
  return closeWith(state, state.teams.map(t => t.id === teamId ? team : t), entry, teamId, paid);
}

export function commitUnsold(state: InstructorState): InstructorState {
  closing(state);
  const card = currentCard(state);
  return closeWith(state, state.teams, { seq: state.seq + 1, kind: 'UNSOLD', round: card.round, lot: card.lot, card: card.id, team: null, price: null }, null, null);
}

export function voidCurrent(state: InstructorState, reason: string): InstructorState {
  auction(state);
  const prior = currentOutcome(state);
  if (!prior) fail('phase');
  const text = reasonText(reason);
  const teams = prior.kind === 'SALE'
    ? state.teams.map(t => t.id === prior.team ? removePurchase(t, currentCard(state).instance) : t)
    : state.teams;
  const entry: LedgerEntry = { seq: state.seq + 1, kind: 'VOID', round: prior.round, lot: prior.lot, card: prior.card, team: prior.team, price: prior.price, ref: prior.seq, reason: text };
  return closeWith(state, teams, entry, null, null);
}

export function advance(state: InstructorState): InstructorState {
  auction(state);
  if (!currentOutcome(state)) fail('phase');
  const position = state.round * LOTS + state.lot;
  const reset = { open: false, pausedRemaining: null, deadline: null, resultDraft: null, finalCallAnnounced: false } as const;
  if (position === ROUNDS * LOTS - 1) return { ...state, ...reset, phase: 'build' };
  const next = position + 1;
  return { ...state, ...reset, round: Math.floor(next / LOTS), lot: next % LOTS, revealed: state.revealMode !== 'MANUAL', leader: null, currentBid: null };
}

export function setResultDraft(state: InstructorState, draft: ResultDraft | null): InstructorState {
  auction(state);
  if (draft) ensure(draft.team.length <= 10 && draft.price.length <= 20 && draft.reason.length <= 120, 'text');
  return { ...state, resultDraft: draft };
}

// ---- Build, submissions, debrief (MPES §6.11–6.13) ----
export function openSubmissions(state: InstructorState): InstructorState {
  inPhase(state, 'build');
  return { ...state, phase: 'submit', privateEntry: false };
}

export function setPrivateEntry(state: InstructorState, on: boolean): InstructorState {
  inPhase(state, 'submit');
  return { ...state, privateEntry: on };
}

function submissionTeam(state: InstructorState, teamId: number): Team {
  inPhase(state, 'submit');
  if (!state.privateEntry) fail('phase');
  ensure(isInt(teamId, 1, state.teams.length), 'team');
  return state.teams[teamId - 1]!;
}

export function setProfit(state: InstructorState, teamId: number, input: string): InstructorState {
  const team = submissionTeam(state, teamId);
  const profit = parseAmount(input);
  add(team.cost, profit);
  return { ...state, teams: state.teams.map(t => t.id === teamId ? { ...t, profit } : t) };
}

export function setSubmitted(state: InstructorState, teamId: number, submitted: boolean): InstructorState {
  submissionTeam(state, teamId);
  return { ...state, teams: state.teams.map(t => t.id === teamId ? { ...t, submitted } : t) };
}

export function pendingSubmissions(state: InstructorState): number[] {
  return state.teams.filter(t => !t.submitted).map(t => t.id);
}

export function closeSubmissions(state: InstructorState): InstructorState {
  inPhase(state, 'submit');
  return { ...state, phase: 'debrief', privateEntry: false };
}

export function closeRoom(state: InstructorState): InstructorState {
  inPhase(state, 'debrief');
  return { ...state, phase: 'closed', privateEntry: false };
}

/** Entries grouped for display: newest first is a UI choice; this keeps append order. */
export function ledgerFor(state: InstructorState, round: number): LedgerEntry[] {
  return state.ledger.filter(entry => entry.round === round);
}

