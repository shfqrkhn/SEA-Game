import { MISSION_IDS, type MissionId } from './missions';

/** Schema-3 lifecycle: the instructor remains the classroom authority. */
export const PHASES = Object.freeze(['setup', 'practice', 'planning', 'auction', 'build', 'submit', 'debrief', 'closed'] as const);
export type Phase = typeof PHASES[number];
export type Language = 'en' | 'fr';
export type RevealMode = 'ROUND' | 'JIT' | 'MANUAL';
export const MAX_SESSION_CODE_CHARS = 32;
export interface SessionConfig { readonly code: string; readonly teamCount: number; readonly token: string }

/** Inert textual input only: never invoke user objects' String/toString hooks. */
export function parseSessionCode(raw: unknown): SessionConfig {
  if (typeof raw !== 'string' || raw.length > MAX_SESSION_CODE_CHARS) throw new Error('code');
  const text = raw.trim();
  const match = /^SEA3-T(10|[2-9])-([0-9A-F]{16})$/i.exec(text);
  if (!match) throw new Error('code');
  return Object.freeze({code: match[0].toUpperCase(), teamCount: Number(match[1]), token: match[2]!.toUpperCase()});
}

function isPhase(value: unknown): value is Phase {
  return typeof value === 'string' && PHASES.includes(value as Phase);
}
function validPosition(round: unknown, lot: unknown): boolean {
  return typeof round === 'number' && Number.isInteger(round) && round >= 0 && round < 7
    && typeof lot === 'number' && Number.isInteger(lot) && lot >= 0 && lot < 10;
}
function isMission(value: unknown): value is MissionId {
  return typeof value === 'string' && MISSION_IDS.includes(value as MissionId);
}

/** Common persisted base only. Role-specific shape, ledger and privacy validation is separate. */
export function validateBase(raw: unknown): SessionConfig {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error('invalid-state');
  const state = raw as Record<string, unknown>;
  if (state.schema !== 3 || !isPhase(state.phase) || !['en', 'fr'].includes(state.lang as string)) throw new Error('invalid-state');
  const config = parseSessionCode(state.sessionCode);
  if (state.teamCount !== config.teamCount || !validPosition(state.round, state.lot)) throw new Error('invalid-state');
  return config;
}

/** Same phase or exactly one forward handoff. Reset/recovery have separate commands. */
export function phaseStepAllowed(current: unknown, target: unknown): boolean {
  if (!isPhase(current) || !isPhase(target)) return false;
  const from = PHASES.indexOf(current), to = PHASES.indexOf(target);
  return to === from || to === from + 1;
}

export interface InstructorPhaseGuards {
  readonly vehiclesLocked: unknown;
  readonly round: unknown;
  readonly lot: unknown;
  readonly committed: unknown;
}
export function instructorPhaseAllowed(current: unknown, target: unknown, guards: InstructorPhaseGuards): boolean {
  if (!phaseStepAllowed(current, target)) return false;
  if (target === 'auction' && guards.vehiclesLocked !== true) return false;
  if (target === 'build' && !(guards.round === 6 && guards.lot === 9 && guards.committed === true)) return false;
  return true;
}

export interface StudentPhaseGuards { readonly lockedMission: unknown }
export function studentPhaseAllowed(current: unknown, target: unknown, guards: StudentPhaseGuards): boolean {
  if (!phaseStepAllowed(current, target)) return false;
  return target !== 'auction' || isMission(guards.lockedMission);
}

export interface StudentAuctionStart {
  readonly phase: unknown;
  readonly lockedMission: unknown;
  readonly teamMission: unknown;
  readonly vehicleConfirmed: unknown;
}
/** Planning command guard; successful command records mission and plan baseline before phase change. */
export function studentAuctionStartAllowed(state: StudentAuctionStart): boolean {
  return state.phase === 'planning' && state.lockedMission === null
    && isMission(state.teamMission) && state.vehicleConfirmed === true;
}

/** Zero-based current/queried lots. Previously revealed lots remain visible. */
export function auctionVisible(mode: unknown, currentLot: unknown, currentRevealed: unknown, lot: unknown): boolean {
  if (!['ROUND', 'JIT', 'MANUAL'].includes(mode as string) || !validPosition(0, currentLot)
    || !validPosition(0, lot) || typeof currentRevealed !== 'boolean') return false;
  if (mode === 'ROUND') return true;
  if ((lot as number) < (currentLot as number)) return true;
  return lot === currentLot && (mode === 'JIT' || currentRevealed);
}

export function canWin(used: unknown): boolean {
  return typeof used === 'number' && Number.isInteger(used) && used >= 0 && used < 2;
}
