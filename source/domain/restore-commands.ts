import { instructorLiveSnapshot, studentLiveSnapshot } from './live-state';
import { cents } from './money';
import { passiveSnapshot } from './recovery';
import { type InstructorSave, type StudentSave, validateInstructorSave, validateStudentSave } from './role-saves';
import { type Language, type RevealMode } from './session';
import { instructorGenerateSession, studentJoinSession } from './setup-commands';
import { invalidState } from './teams';

export interface InstructorResetOptions {
  readonly teamCount: number; readonly bidSeconds: number;
  readonly revealMode: RevealMode; readonly timingMode: 'TIMED' | 'UNTIMED';
}
export type EmptyInstructorSetup = Omit<InstructorSave, 'sessionCode' | 'marketSeed'> & { readonly sessionCode: null; readonly marketSeed: null };
export type EmptyStudentSetup = Omit<StudentSave, 'sessionCode' | 'teamId' | 'team'> & { readonly sessionCode: null; readonly teamId: null; readonly team: null };
type Replacement<T, P> = { readonly next: T; readonly previous: P | null };
function record(raw: unknown): Record<string, unknown> {
  const value = passiveSnapshot(raw);
  if (!value || typeof value !== 'object' || Array.isArray(value)) return invalidState();
  return value as Record<string, unknown>;
}
const shellOptions = { teamCount: 2, bidSeconds: 30, revealMode: 'ROUND', timingMode: 'TIMED', sessionToken: '0'.repeat(16), marketSeed: '0'.repeat(32) } as const;
/** Reuse established setup/join validation for the uninitialized shell, never a weakened active-save validator. */
function instructorPrevious(raw: unknown): InstructorSave | null {
  const state = record(raw);
  if (state.sessionCode !== null) return { ...instructorLiveSnapshot(state), privateEntry: false };
  instructorGenerateSession(state, shellOptions);
  return null;
}
function studentPrevious(raw: unknown): StudentSave | null {
  const state = record(raw);
  if (state.sessionCode !== null) return studentLiveSnapshot(state);
  studentJoinSession(state, 'SEA3-T2-' + '0'.repeat(16), 1, 'COMBAT');
  return null;
}
/** Bind confirmation to all passive original fields, including transient privacy/draft flags. */
export function instructorRestoreFingerprint(raw: unknown): string {
  instructorPrevious(raw);
  return JSON.stringify(passiveSnapshot(raw));
}
export function studentRestoreFingerprint(raw: unknown): string {
  studentPrevious(raw);
  return JSON.stringify(passiveSnapshot(raw));
}
function instructorShell(lang: Language, rawOptions: unknown): EmptyInstructorSetup {
  const options = record(rawOptions);
  if (Object.keys(options).length !== 4 || !['teamCount', 'bidSeconds', 'revealMode', 'timingMode'].every(key => Object.hasOwn(options, key))
    || typeof options.teamCount !== 'number' || !Number.isInteger(options.teamCount) || options.teamCount < 2 || options.teamCount > 10
    || typeof options.bidSeconds !== 'number' || !Number.isInteger(options.bidSeconds) || options.bidSeconds < 10 || options.bidSeconds > 120
    || options.revealMode !== 'ROUND' && options.revealMode !== 'JIT' && options.revealMode !== 'MANUAL'
    || options.timingMode !== 'TIMED' && options.timingMode !== 'UNTIMED') return invalidState();
  return { schema: 3, phase: 'setup', lang, sessionCode: null, marketSeed: null, market: [], teams: [],
    teamCount: options.teamCount, bidSeconds: options.bidSeconds, revealMode: options.revealMode, timingMode: options.timingMode,
    vehiclesLocked: false, round: 0, lot: 0, revealed: true, open: false, pausedRemaining: null, deadline: null,
    leader: null, currentBid: null, ledger: [], seq: 0, practice: { revealed: false, open: false, leader: false, closed: false }, privateEntry: false, resultDraft: null };
}
function studentShell(lang: Language): EmptyStudentSetup {
  return { schema: 3, phase: 'setup', lang, sessionCode: null, teamCount: 0, teamId: null, team: null,
    vehicleConfirmed: false, lockedMission: null, round: 0, lot: 0, currentCard: null, plan: '', planBaseline: null, risks: '',
    maxWtpCents: cents(85000000), scratch: {}, profitMode: 'AMOUNT', profitInput: '250000', profitCents: cents(25000000), practiceWon: false, vehicleChangeNotice: false };
}
/** Complete preparations are pure and detached; adapters own confirmation, preservation and effects. */
export function instructorPrepareClosedReset(raw: unknown, options: InstructorResetOptions): Replacement<EmptyInstructorSetup, InstructorSave> {
  const previous = instructorLiveSnapshot(raw);
  if (previous.phase !== 'closed') throw new Error('phase');
  const next = instructorShell(previous.lang, options);
  instructorPrevious(next);
  return { next, previous: { ...previous, privateEntry: false } };
}
export function studentPrepareClosedReset(raw: unknown): Replacement<EmptyStudentSetup, StudentSave> {
  const previous = studentLiveSnapshot(raw);
  if (previous.phase !== 'closed') throw new Error('phase');
  const next = studentShell(previous.lang);
  studentPrevious(next);
  return { next, previous };
}
export function instructorPrepareRestore(raw: unknown, candidate: unknown, now: number): Replacement<InstructorSave, InstructorSave> {
  const previous = instructorPrevious(raw), next = validateInstructorSave(candidate);
  if (!Number.isSafeInteger(now) || now < 0) return invalidState();
  const paused = next.open ? { ...next, pausedRemaining: next.pausedRemaining ?? (next.timingMode === 'TIMED' ? Math.max(0, next.deadline! - now) : 0) } : next;
  return { next: paused, previous: previous ? { ...previous, privateEntry: false } : null };
}
export function studentPrepareRestore(raw: unknown, candidate: unknown): Replacement<StudentSave, StudentSave> {
  return { next: validateStudentSave(candidate), previous: studentPrevious(raw) };
}
