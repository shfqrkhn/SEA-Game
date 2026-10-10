// Student companion: private planning, tracking, reconciliation and bid (MPES §6.9–6.11).
// The student never knows the market order; it only records what the instructor announces.
import { LOTS, ROUNDS, isMissionId, type MissionId } from './data.ts';
import { ensure, fail, isInt } from './errors.ts';
import { slotCard, type MarketCard } from './market.ts';
import { add, amountText, bpsFromProfit, cents, parseAmount, parsePercentBps, parseWholeDollars, percentText, profitFromBps } from './money.ts';
import { parseSessionCode, type Language, type Phase } from './session.ts';
import { acquire, createTeams, removePurchase, type Team } from './team.ts';

export type ProfitMode = 'AMOUNT' | 'PERCENT';
export interface ScratchEntry { readonly wtp: string; readonly note: string }
export const PLAN_MAX = 1200;
export const NOTE_MAX = 600;
export const DEFAULT_MAX_WTP_CENTS = 85_000_000;
export const DEFAULT_PROFIT_CENTS = 25_000_000;

/** Schema-3 student state (MPES §8.4). Session fields are null only before joining. */
export interface StudentState {
  readonly schema: 3;
  readonly phase: Phase;
  readonly lang: Language;
  readonly vehicleConfirmed: boolean;
  readonly lockedMission: MissionId | null;
  readonly sessionCode: string | null;
  readonly teamCount: number;
  readonly teamId: number | null;
  readonly team: Team | null;
  readonly round: number;
  readonly lot: number;
  readonly currentCard: MarketCard | null;
  readonly plan: string;
  readonly planBaseline: string | null;
  readonly risks: string;
  readonly maxWtpCents: number;
  readonly scratch: Readonly<Record<string, ScratchEntry>>;
  readonly profitMode: ProfitMode;
  readonly profitInput: string;
  readonly profitCents: number;
  readonly practiceWon: boolean;
  readonly vehicleChangeNotice: boolean;
}
export type JoinedStudent = StudentState & { readonly sessionCode: string; readonly teamId: number; readonly team: Team };

export function studentShell(lang: Language = 'en'): StudentState {
  return {
    schema: 3, phase: 'setup', lang, vehicleConfirmed: false, lockedMission: null, sessionCode: null, teamCount: 0,
    teamId: null, team: null, round: 0, lot: 0, currentCard: null, plan: '', planBaseline: null, risks: '',
    maxWtpCents: DEFAULT_MAX_WTP_CENTS, scratch: {}, profitMode: 'AMOUNT', profitInput: amountText(DEFAULT_PROFIT_CENTS),
    profitCents: DEFAULT_PROFIT_CENTS, practiceWon: false, vehicleChangeNotice: false,
  };
}

function joined(state: StudentState, ...phases: Phase[]): JoinedStudent {
  if (!phases.includes(state.phase)) fail('phase');
  if (state.sessionCode === null || state.teamId === null || state.team === null) fail('phase');
  return state as JoinedStudent;
}
function text(value: unknown, max: number): string {
  if (typeof value !== 'string' || value.length > max) fail('text');
  return value;
}
function withTeam(state: StudentState, team: Team): StudentState {
  return { ...state, team };
}

export function setLanguage(state: StudentState, lang: Language): StudentState {
  return { ...state, lang };
}

export function join(state: StudentState, rawCode: string, teamId: number, mission: MissionId): StudentState {
  if (state.phase !== 'setup' || state.team !== null) fail('phase');
  const session = parseSessionCode(rawCode);
  ensure(isInt(teamId, 1, session.teamCount), 'team');
  ensure(isMissionId(mission), 'mission');
  const team = { ...createTeams(session.teamCount)[teamId - 1]!, mission };
  return { ...state, phase: 'practice', sessionCode: session.code, teamCount: session.teamCount, teamId, team };
}

/** Deliberate reset (UI confirms first). */
export function newSession(state: StudentState): StudentState {
  return studentShell(state.lang);
}

// ---- Practice ----
export function recordPracticeWin(state: StudentState): StudentState {
  joined(state, 'practice');
  if (state.practiceWon) fail('phase');
  return { ...state, practiceWon: true };
}
export function resetPractice(state: StudentState): StudentState {
  joined(state, 'practice');
  return { ...state, practiceWon: false };
}
export function openPlanning(state: StudentState): StudentState {
  joined(state, 'practice');
  if (!state.practiceWon) fail('phase');
  return { ...state, phase: 'planning', practiceWon: false };
}

// ---- Planning ----
export function selectMission(state: StudentState, mission: MissionId): StudentState {
  const s = joined(state, 'planning');
  ensure(isMissionId(mission), 'mission');
  if (s.team.mission === mission) return state;
  return { ...withTeam(s, { ...s.team, mission }), vehicleConfirmed: false, vehicleChangeNotice: true };
}
export function confirmVehicle(state: StudentState, confirmed: boolean): StudentState {
  joined(state, 'planning');
  return { ...state, vehicleConfirmed: confirmed, vehicleChangeNotice: confirmed ? false : state.vehicleChangeNotice };
}
export function setPlanText(state: StudentState, field: 'plan' | 'risks', value: string): StudentState {
  joined(state, 'planning');
  return { ...state, [field]: text(value, PLAN_MAX) };
}
export function setMaxWtp(state: StudentState, input: string): StudentState {
  joined(state, 'planning');
  return { ...state, maxWtpCents: parseWholeDollars(input) };
}
export function startAuction(state: StudentState): StudentState {
  const s = joined(state, 'planning');
  if (!s.vehicleConfirmed || s.team.mission === null) fail('confirmation');
  return {
    ...withTeam(s, { ...s.team, lockedMission: s.team.mission }), lockedMission: s.team.mission, planBaseline: s.plan,
    phase: 'auction', round: 0, lot: 0, currentCard: null,
  };
}

// ---- Auction tracking (MPES §6.9) ----
export function setPosition(state: StudentState, round: number, lot: number): StudentState {
  joined(state, 'auction');
  ensure(isInt(round, 1, ROUNDS) && isInt(lot, 1, LOTS), 'position');
  return { ...state, round: round - 1, lot: lot - 1, currentCard: null };
}
export function loadCard(state: StudentState, rawId: string): StudentState {
  joined(state, 'auction');
  const id = text(rawId, 20).trim().toUpperCase();
  return { ...state, currentCard: slotCard(id, state.round + 1, state.lot + 1) };
}
export function scratchKey(round: number, lot: number): string {
  return `${round}-${lot}`;
}
export function editScratch(state: StudentState, field: 'wtp' | 'note', value: string): StudentState {
  joined(state, 'auction');
  const input = text(value, field === 'wtp' ? 20 : NOTE_MAX);
  const stored = field === 'wtp' && input.trim() !== '' ? String(parseWholeDollars(input) / 100) : input;
  const key = scratchKey(state.round + 1, state.lot + 1), previous = state.scratch[key] ?? { wtp: '', note: '' };
  return { ...state, scratch: { ...state.scratch, [key]: { ...previous, [field]: stored } } };
}
function step(state: StudentState): StudentState {
  const index = state.round * LOTS + state.lot;
  if (index === ROUNDS * LOTS - 1) return { ...state, phase: 'build', currentCard: null };
  return { ...state, round: Math.floor((index + 1) / LOTS), lot: (index + 1) % LOTS, currentCard: null };
}
/** Record a win confirmed aloud by the instructor, then move to the next lot. */
export function recordWin(state: StudentState, paidInput: string): StudentState {
  const s = joined(state, 'auction');
  if (!s.currentCard) fail('card');
  return step(withTeam(s, acquire(s.team, s.currentCard, parseWholeDollars(paidInput))));
}
export function notOurs(state: StudentState): StudentState {
  joined(state, 'auction');
  return step(state);
}
export function finishAuction(state: StudentState): StudentState {
  joined(state, 'auction');
  return { ...state, phase: 'build', currentCard: null };
}

// ---- Build reconciliation (MPES §6.10) ----
export function addMissingPurchase(state: StudentState, rawId: string, round: number, lot: number, paidInput: string): StudentState {
  const s = joined(state, 'build');
  ensure(isInt(round, 1, ROUNDS) && isInt(lot, 1, LOTS), 'position');
  const card = slotCard(text(rawId, 20).trim().toUpperCase(), round, lot);
  return withTeam(s, acquire(s.team, card, parseWholeDollars(paidInput)));
}
export function removeOwnPurchase(state: StudentState, instance: string): StudentState {
  const s = joined(state, 'build');
  return withTeam(s, removePurchase(s.team, instance));
}
export function openSubmit(state: StudentState): StudentState {
  joined(state, 'build');
  return { ...state, phase: 'submit', currentCard: null };
}

// ---- Submission (MPES §6.11) ----
export function draftProfit(state: StudentState): number {
  const s = joined(state, 'submit', 'debrief', 'closed');
  const profit = s.profitMode === 'AMOUNT' ? parseAmount(s.profitInput) : profitFromBps(s.team.cost, parsePercentBps(s.profitInput));
  add(s.team.cost, profit);
  return profit;
}
export function setProfitInput(state: StudentState, input: string): StudentState {
  joined(state, 'submit');
  return { ...state, profitInput: text(input, 20) };
}
export function setProfitMode(state: StudentState, mode: ProfitMode): StudentState {
  const s = joined(state, 'submit');
  ensure(mode === 'AMOUNT' || mode === 'PERCENT', 'invalid-state');
  if (mode === s.profitMode) return state;
  const current = draftProfit(s);
  const input = mode === 'AMOUNT' ? amountText(current) : percentText(bpsFromProfit(s.team.cost, current));
  return { ...state, profitMode: mode, profitInput: input, profitCents: current };
}
export function finishSubmit(state: StudentState): StudentState {
  joined(state, 'submit');
  return { ...state, profitCents: cents(draftProfit(state)), phase: 'debrief', currentCard: null };
}
export function closeStudent(state: StudentState): StudentState {
  joined(state, 'debrief');
  return { ...state, phase: 'closed' };
}
