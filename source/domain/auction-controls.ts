import { LOTS_PER_ROUND, ROUNDS } from './catalog';
import { type SaleEntry, type UnsoldEntry } from './commands';
import { instructorLiveSnapshot, type LiveInstructor } from './live-state';
import { addCents, BID_INCREMENT_CENTS, type Cents } from './money';
import { type InstructorSave } from './role-saves';
import { canWin, instructorPhaseAllowed } from './session';
import { invalidState } from './teams';

/** Complete field patches only. Adapters preflight/commit these before timer, UI or storage effects. */
export type InstructorAuctionPatch = Readonly<Partial<Pick<InstructorSave,
  'phase'|'round'|'lot'|'revealed'|'open'|'pausedRemaining'|'deadline'|'leader'|'currentBid'|'resultDraft'|'finalCallAnnounced'>>>;
export interface InstructorAuctionStatus {
  readonly effectiveEntry: SaleEntry | UnsoldEntry | null;
  readonly committed: boolean;
  readonly nextOffer: Cents | null;
  readonly remainingMs: number | null;
  readonly timedOut: boolean;
  readonly biddingActive: boolean;
  readonly liveClosing: boolean;
}

/** Millisecond values may be fractional, but arithmetic must stay finite and precisely bounded. */
function milliseconds(value: unknown): number {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0 || value > Number.MAX_SAFE_INTEGER) throw new Error('time');
  return value;
}
function sumTime(left: number, right: number): number {
  const result = milliseconds(left + right);
  if (right > 0 && result <= left) throw new Error('time');
  return result;
}
function snapshot(raw: unknown): LiveInstructor {
  const state = instructorLiveSnapshot(raw);
  // Schema3 permits an already-expired negative deadline. It needs no subtraction to expire.
  if (state.deadline !== null && (!Number.isFinite(state.deadline) || Math.abs(state.deadline) > Number.MAX_SAFE_INTEGER)) throw new Error('time');
  if (state.pausedRemaining !== null) milliseconds(state.pausedRemaining);
  return state;
}
function auction(state: LiveInstructor): void {
  if (state.phase !== 'auction' || !state.vehiclesLocked) throw new Error('phase');
}
function effective(state: LiveInstructor): SaleEntry | UnsoldEntry | null {
  for (let index=state.ledger.length-1;index>=0;index--) {
    const entry = state.ledger[index]!;
    if (entry.round === state.round+1 && entry.lot === state.lot+1) return entry.kind === 'VOID' ? null : entry;
  }
  return null;
}
function live(state: LiveInstructor): void {
  auction(state);
  if (!state.open || effective(state)) throw new Error('phase');
}
function remaining(state: LiveInstructor, now: number): number | null {
  if (!state.open || state.timingMode === 'UNTIMED') return null;
  if (state.pausedRemaining !== null) return state.pausedRemaining;
  if (state.deadline === null) return invalidState();
  return state.deadline <= now ? 0 : state.deadline-now;
}
function offer(state: LiveInstructor): Cents | null {
  try { return state.leader === null ? state.market[state.round]![state.lot]!.start : addCents(state.currentBid!,BID_INCREMENT_CENTS); }
  catch { return null; }
}

/** Query canonical live data without changing it or sampling a global clock. */
export function instructorAuctionStatus(raw: unknown, clock: unknown): InstructorAuctionStatus {
  const now = milliseconds(clock), state = snapshot(raw), entry = effective(state);
  const remainingMs = remaining(state,now), timedOut = state.open && state.timingMode === 'TIMED' && state.pausedRemaining === null && remainingMs === 0;
  const liveClosing = state.phase === 'auction' && state.vehiclesLocked && state.open && entry === null && state.pausedRemaining === null;
  return {effectiveEntry:entry,committed:entry!==null,nextOffer:offer(state),remainingMs,timedOut,liveClosing,biddingActive:liveClosing&&!timedOut};
}

export function instructorRevealAuction(raw: unknown): InstructorAuctionPatch {
  const state = snapshot(raw); auction(state);
  if (effective(state) || state.revealed) throw new Error('phase');
  return {revealed:true};
}

export function instructorOpenAuction(raw: unknown, clock: unknown): InstructorAuctionPatch {
  const now = milliseconds(clock), state = snapshot(raw); auction(state);
  if (state.open || effective(state)) throw new Error('phase');
  const deadline = state.timingMode === 'TIMED' ? sumTime(now,state.bidSeconds*1000) : null;
  return {revealed:true,open:true,pausedRemaining:null,deadline,finalCallAnnounced:false};
}

/** Intended amount pins the rendered bid; repeating the same action cannot increase it again. */
export function instructorAcceptBid(raw: unknown, teamId: unknown, intended: unknown, clock: unknown): InstructorAuctionPatch {
  const now = milliseconds(clock), state = snapshot(raw); live(state);
  if (state.pausedRemaining !== null) throw new Error('paused');
  if (state.timingMode === 'TIMED' && remaining(state,now) === 0) throw new Error('expired');
  if (typeof teamId !== 'number' || !Number.isInteger(teamId) || teamId < 1 || teamId > state.teams.length) throw new Error('team');
  const team = state.teams[teamId-1]!;
  if (state.leader === teamId) throw new Error('leader');
  if (!canWin(team.purchasesByRound[state.round])) throw new Error('limit');
  const amount = offer(state);
  if (amount === null) throw new Error('money');
  if (typeof intended !== 'number' || intended !== amount) throw new Error('stale');
  // Reserve the complete total needed by the eventual sale, including canonical profit headroom.
  addCents(addCents(team.cost,amount),team.profit);
  return {leader:teamId,currentBid:amount,resultDraft:null};
}

/** Separate pause/resume commands reject repeated actions instead of toggling back accidentally. */
export function instructorPauseAuction(raw: unknown, clock: unknown): InstructorAuctionPatch {
  const now = milliseconds(clock), state = snapshot(raw); live(state);
  if (state.pausedRemaining !== null) throw new Error('paused');
  return {pausedRemaining:remaining(state,now) ?? 0};
}
export function instructorResumeAuction(raw: unknown, clock: unknown): InstructorAuctionPatch {
  const now = milliseconds(clock), state = snapshot(raw); live(state);
  if (state.pausedRemaining === null) throw new Error('phase');
  const deadline = state.timingMode === 'TIMED' ? sumTime(now,state.pausedRemaining) : null;
  return {pausedRemaining:null,deadline};
}

/** Expired lots may be extended deliberately; pause preserves its clock until explicit resume. */
export function instructorExtendAuction(raw: unknown, clock: unknown): InstructorAuctionPatch {
  const now = milliseconds(clock), state = snapshot(raw); live(state);
  if (state.timingMode !== 'TIMED') throw new Error('phase');
  if (state.pausedRemaining !== null) return {pausedRemaining:sumTime(state.pausedRemaining,30_000),finalCallAnnounced:false};
  return {deadline:sumTime(now,sumTime(remaining(state,now)!,30_000)),pausedRemaining:null,finalCallAnnounced:false};
}

export function instructorAdvanceAuction(raw: unknown): InstructorAuctionPatch {
  const state = snapshot(raw); auction(state);
  if (!effective(state)) throw new Error('phase');
  if (state.round === ROUNDS-1 && state.lot === LOTS_PER_ROUND-1) {
    if (!instructorPhaseAllowed(state.phase,'build',{vehiclesLocked:state.vehiclesLocked,round:state.round,lot:state.lot,committed:true})) throw new Error('phase');
    // Canonical schema3 validator above requires all preceding outcomes; this is the 70th.
    return {phase:'build',open:false,pausedRemaining:null,deadline:null,resultDraft:null,finalCallAnnounced:false};
  }
  const position = state.round*LOTS_PER_ROUND+state.lot+1;
  return {round:Math.floor(position/LOTS_PER_ROUND),lot:position%LOTS_PER_ROUND,revealed:state.revealMode!=='MANUAL',open:false,
    pausedRemaining:null,deadline:null,leader:null,currentBid:null,resultDraft:null,finalCallAnnounced:false};
}
