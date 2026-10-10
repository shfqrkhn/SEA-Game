// Session codes, phases and reveal visibility (MPES §6.1, §6.2, §6.5).
import { MAX_TEAMS, MIN_TEAMS } from './data.ts';
import { fail } from './errors.ts';

export const PHASES = ['setup', 'practice', 'planning', 'auction', 'build', 'submit', 'debrief', 'closed'] as const;
export type Phase = typeof PHASES[number];
export type Language = 'en' | 'fr';
export const REVEAL_MODES = ['ROUND', 'JIT', 'MANUAL'] as const;
export type RevealMode = typeof REVEAL_MODES[number];
export type TimingMode = 'TIMED' | 'UNTIMED';
export const MIN_BID_SECONDS = 10;
export const MAX_BID_SECONDS = 120;
export const DEFAULT_BID_SECONDS = 30;
export const EXTEND_MS = 30_000;
export const TOKEN_PATTERN = /^[0-9A-F]{16}$/;

export interface SessionCode { readonly code: string; readonly teamCount: number; readonly token: string }

export function parseSessionCode(raw: unknown): SessionCode {
  if (typeof raw !== 'string' || raw.length > 32) fail('code');
  const match = /^SEA3-T(10|[2-9])-([0-9A-F]{16})$/i.exec(raw.trim());
  if (!match) fail('code');
  const teamCount = Number(match[1]);
  if (teamCount < MIN_TEAMS || teamCount > MAX_TEAMS) fail('code');
  return { code: match[0].toUpperCase(), teamCount, token: match[2]!.toUpperCase() };
}

export function makeSessionCode(teamCount: number, token: string): string {
  if (!TOKEN_PATTERN.test(token)) fail('code');
  return parseSessionCode(`SEA3-T${teamCount}-${token}`).code;
}

export function isPhase(value: unknown): value is Phase {
  return typeof value === 'string' && (PHASES as readonly string[]).includes(value);
}
export function phaseIndex(phase: Phase): number {
  return PHASES.indexOf(phase);
}
export function nextPhase(phase: Phase): Phase | undefined {
  return PHASES[phaseIndex(phase) + 1];
}
export function atOrAfter(phase: Phase, reference: Phase): boolean {
  return phaseIndex(phase) >= phaseIndex(reference);
}

/**
 * Whether a lot of the CURRENT round is visible on the instructor's market view (0-based lots).
 * Earlier rounds are always visible as history; later rounds never are. Within the current round,
 * ROUND shows all ten lots, JIT shows lots up to the current one, MANUAL shows earlier lots and the
 * current lot once revealed. The visible set never shrinks.
 */
export function lotVisible(mode: RevealMode, currentLot: number, currentRevealed: boolean, lot: number): boolean {
  if (mode === 'ROUND') return true;
  if (lot < currentLot) return true;
  return lot === currentLot && (mode === 'JIT' || currentRevealed);
}
