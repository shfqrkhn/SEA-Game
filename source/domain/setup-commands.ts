import { marketFromSeed } from './market';
import { instructorLiveSnapshot, studentLiveSnapshot } from './live-state';
import { missionId, type MissionId } from './missions';
import { cents, type Cents } from './money';
import { passiveSnapshot } from './recovery';
import { type InstructorSave, type PracticeState, type StudentSave } from './role-saves';
import { parseSessionCode, type Phase, type RevealMode } from './session';
import { createTeams, invalidState, type Team } from './teams';

export interface SessionGenerationOptions {
  readonly teamCount: number;
  readonly bidSeconds: number;
  readonly revealMode: RevealMode;
  readonly timingMode: 'TIMED' | 'UNTIMED';
  /** Entropy is supplied by the role adapter; commands never consult crypto/time/random. */
  readonly sessionToken: string;
  readonly marketSeed: string;
}
export type InstructorGenerationPatch = Pick<InstructorSave,
  'sessionCode' | 'teamCount' | 'marketSeed' | 'market' | 'teams' | 'revealMode' | 'timingMode' | 'bidSeconds'
  | 'vehiclesLocked' | 'round' | 'lot' | 'revealed' | 'open' | 'pausedRemaining' | 'deadline'
  | 'leader' | 'currentBid' | 'ledger' | 'seq' | 'resultDraft'>;
export type StudentJoinPatch = Pick<StudentSave,
  'sessionCode' | 'teamCount' | 'teamId' | 'team' | 'lockedMission' | 'vehicleConfirmed' | 'round' | 'lot' | 'currentCard' | 'phase'>;
export interface InstructorMissionPatch { readonly teams: readonly Team[] }
export interface StudentMissionPatch {
  readonly team: Team;
  readonly vehicleConfirmed?: false;
  readonly vehicleChangeNotice?: true;
}
export interface InstructorPracticePatch {
  readonly practice: PracticeState;
  readonly phase?: 'practice' | 'planning';
  readonly privateEntry?: false;
}
export interface StudentPracticePatch { readonly practiceWon: boolean; readonly phase?: 'planning' }
export type InstructorAuctionStartPatch = Pick<InstructorSave,
  'teams' | 'vehiclesLocked' | 'round' | 'lot' | 'revealed' | 'resultDraft' | 'phase' | 'privateEntry'>;
export type StudentAuctionStartPatch = Pick<StudentSave,'team' | 'lockedMission' | 'planBaseline' | 'phase'>;
export type InstructorPracticeAction = 'start' | 'reveal' | 'open' | 'accept' | 'close' | 'reset' | 'planning';
export type StudentPracticeAction = 'record' | 'reset' | 'planning';

type RecordValue = Record<string, unknown>;
/** Passive copy rejects accessors/methods/cycles before any field read. No returned patch aliases input. */
function snapshot(value: unknown): RecordValue {
  const result = passiveSnapshot(value);
  if (!result || typeof result !== 'object' || Array.isArray(result)) return invalidState();
  return result as RecordValue;
}
function integer(value: unknown, minimum: number, maximum: number): number {
  if (typeof value !== 'number' || !Number.isInteger(value) || value < minimum || value > maximum) return invalidState();
  return value;
}
function boolean(value: unknown): boolean {
  if (typeof value !== 'boolean') return invalidState();
  return value;
}
function phase(state: RecordValue, allowed: readonly Phase[]): Phase {
  if (state.schema !== 3) return invalidState();
  if (typeof state.phase !== 'string' || !allowed.includes(state.phase as Phase)) throw new Error('phase');
  return state.phase as Phase;
}
function instructor(state: RecordValue): Team[] {
  const live = instructorLiveSnapshot(state);
  if (live.vehiclesLocked || live.teams.some(team=>team.lockedMission !== null || team.purchases.length !== 0)) return invalidState();
  return [...live.teams];
}
function student(state: RecordValue): Team {
  const live = studentLiveSnapshot(state), team = live.team;
  if (live.lockedMission !== null || team.lockedMission !== null || team.purchases.length !== 0 || team.mission === null) return invalidState();
  return team;
}
function revealMode(value: unknown): RevealMode {
  if (value !== 'ROUND' && value !== 'JIT' && value !== 'MANUAL') return invalidState();
  return value;
}
function text(value: unknown): string {
  if (typeof value !== 'string' || value.length > 1200) return invalidState();
  return value;
}
function emptyPractice(): PracticeState { return {revealed:false,open:false,leader:false,closed:false}; }
function practiceFlags(value: unknown): PracticeState {
  const p = snapshot(value), revealed = boolean(p.revealed), open = boolean(p.open), leader = boolean(p.leader), closed = boolean(p.closed);
  if (Object.keys(p).length !== 4) return invalidState();
  return {revealed,open,leader,closed};
}
function practice(value: unknown): PracticeState {
  const p = practiceFlags(value), {revealed,open,leader,closed} = p;
  if (open && (!revealed || closed) || leader && (!revealed || !open && !closed)
    || closed && (!revealed || !leader || open)) return invalidState();
  return p;
}

function emptyArray(value: unknown): boolean { return Array.isArray(value) && value.length === 0; }
/** Only the uninitialized role shell lacks a session. Validate its sentinels, then reuse complete role policies. */
function instructorSetup(state: RecordValue): void {
  if (state.sessionCode !== null) { instructorLiveSnapshot(state); return; }
  if (state.marketSeed !== null || !emptyArray(state.market) || !emptyArray(state.teams)
    || state.vehiclesLocked !== false || state.round !== 0 || state.lot !== 0 || state.revealed !== true
    || state.open !== false || state.pausedRemaining !== null || state.deadline !== null || state.leader !== null
    || state.currentBid !== null || !emptyArray(state.ledger) || state.seq !== 0
    || state.privateEntry !== undefined && state.privateEntry !== false || state.resultDraft !== undefined && state.resultDraft !== null
    || state.finalCallAnnounced !== undefined && state.finalCallAnnounced !== false) return invalidState();
  const p = practice(state.practice);
  if (p.revealed || p.open || p.leader || p.closed) return invalidState();
  const teamCount = integer(state.teamCount,2,10), seed = '0'.repeat(32);
  instructorLiveSnapshot({...state,sessionCode:'SEA3-T'+teamCount+'-'+'0'.repeat(16),marketSeed:seed,
    market:marketFromSeed(seed),teams:createTeams(teamCount)});
}
function studentSetup(state: RecordValue): void {
  if (state.sessionCode !== null || state.teamCount !== 0 || state.teamId !== null || state.team !== null
    || state.vehicleConfirmed !== false || state.lockedMission !== null || state.round !== 0 || state.lot !== 0
    || state.currentCard !== null || state.planBaseline !== null || state.practiceWon !== false
    || state.vehicleChangeNotice !== undefined && state.vehicleChangeNotice !== false) return invalidState();
  // Private text, scratch and commercial fields are deliberately checked by the canonical validator
  // after the join patch supplies a session/team. No alternate text/array/money limits are introduced.
}

/** Deliberate setup replacement; confirmation/stale identity and effects remain in the role adapter. */
export function instructorGenerateSession(value: unknown, options: SessionGenerationOptions): InstructorGenerationPatch {
  const state = snapshot(value); phase(state,['setup']);
  instructorSetup(state);
  const x = snapshot(options), teamCount = integer(x.teamCount,2,10), bidSeconds = integer(x.bidSeconds,10,120), reveal = revealMode(x.revealMode);
  if (x.timingMode !== 'TIMED' && x.timingMode !== 'UNTIMED' || typeof x.sessionToken !== 'string'
    || !/^[0-9A-F]{16}$/.test(x.sessionToken) || typeof x.marketSeed !== 'string' || !/^[0-9A-F]{32}$/.test(x.marketSeed)) return invalidState();
  const sessionCode = parseSessionCode('SEA3-T'+teamCount+'-'+x.sessionToken).code;
  return {
    sessionCode,teamCount,marketSeed:x.marketSeed,market:marketFromSeed(x.marketSeed),teams:createTeams(teamCount),
    revealMode:reveal,timingMode:x.timingMode,bidSeconds,vehiclesLocked:false,round:0,lot:0,revealed:reveal !== 'MANUAL',
    open:false,pausedRemaining:null,deadline:null,leader:null,currentBid:null,ledger:[],seq:0,resultDraft:null,
  };
}

/** Student receives only its own selected team; the session code never derives a market seed. */
export function studentJoinSession(value: unknown, rawCode: unknown, teamId: number, mission: MissionId): StudentJoinPatch {
  const state = snapshot(value); phase(state,['setup']);
  if (state.team !== null) throw new Error('phase');
  studentSetup(state);
  const config = parseSessionCode(rawCode), id = integer(teamId,1,config.teamCount), selected = missionId(mission), team = createTeams(config.teamCount)[id-1];
  if (!team) return invalidState();
  const patch: StudentJoinPatch = {sessionCode:config.code,teamCount:config.teamCount,teamId:id,team:{...team,mission:selected},
    lockedMission:null,vehicleConfirmed:false,round:0,lot:0,currentCard:null,phase:'practice'};
  studentLiveSnapshot({...state,...patch});
  return patch;
}

export function instructorSelectMission(value: unknown, teamId: number, mission: MissionId): InstructorMissionPatch {
  const state = snapshot(value); phase(state,['setup','planning']);
  const teams = instructor(state), id = integer(teamId,1,teams.length), selected = missionId(mission);
  return {teams:teams.map(team=>team.id === id ? {...team,mission:selected} : team)};
}
export function studentSelectMission(value: unknown, mission: MissionId): StudentMissionPatch {
  const state = snapshot(value); phase(state,['planning']);
  const team = student(state), selected = missionId(mission);
  if (team.mission === selected) return {team};
  return {team:{...team,mission:selected},vehicleConfirmed:false,vehicleChangeNotice:true};
}
export function studentConfirmVehicle(value: unknown, confirmed: boolean): Pick<StudentSave,'vehicleConfirmed'> {
  const state = snapshot(value); phase(state,['planning']); student(state);
  return {vehicleConfirmed:boolean(confirmed)};
}
export function studentSetPlanningText(value: unknown, field: 'plan' | 'risks', input: string): Partial<Pick<StudentSave,'plan' | 'risks'>> {
  const state = snapshot(value); phase(state,['planning']); student(state);
  if (field !== 'plan' && field !== 'risks') return invalidState();
  return {[field]:text(input)};
}
/** Role adapter retains existing whole-dollar parsing; this command validates the resulting exact cents. */
export function studentSetMaxWtp(value: unknown, amount: Cents): Pick<StudentSave,'maxWtpCents'> {
  const state = snapshot(value); phase(state,['planning']); student(state);
  return {maxWtpCents:cents(amount)};
}

/** Practice patches contain no inventory, money, market, ledger or private-plan fields. */
export function instructorPracticeCommand(value: unknown, action: InstructorPracticeAction): InstructorPracticePatch {
  const state = snapshot(value);
  if (action === 'reset') {
    phase(state,['setup','practice']);
    practiceFlags(state.practice);
    const clean = {...state,practice:emptyPractice()};
    if (state.phase === 'setup') instructorSetup(clean); else instructorLiveSnapshot(clean);
    return {practice:emptyPractice()};
  }
  if (action === 'start') {
    phase(state,['setup']); practiceFlags(state.practice);
    // Tutorial entry historically clears stale practice flags, while all other role data stays validated.
    instructor({...state,practice:emptyPractice()});
    return {practice:emptyPractice(),phase:'practice',privateEntry:false};
  }
  phase(state,['practice']); instructor(state);
  const p = practice(state.practice);
  switch (action) {
    case 'reveal': if (p.revealed || p.closed) break; return {practice:{...p,revealed:true}};
    case 'open': if (!p.revealed || p.open || p.closed) break; return {practice:{...p,open:true}};
    case 'accept': if (!p.revealed || !p.open || p.leader || p.closed) break; return {practice:{...p,leader:true}};
    case 'close': if (!p.revealed || !p.open || !p.leader || p.closed) break; return {practice:{...p,open:false,closed:true}};
    case 'planning': if (!p.closed) break; return {practice:emptyPractice(),phase:'planning',privateEntry:false};
  }
  throw new Error('phase');
}
export function studentPracticeCommand(value: unknown, action: StudentPracticeAction): StudentPracticePatch {
  const state = snapshot(value); phase(state,['practice']); student(state);
  const won = boolean(state.practiceWon);
  switch (action) {
    case 'record': if (won) break; return {practiceWon:true};
    case 'reset': if (!won) break; return {practiceWon:false};
    case 'planning': if (!won) break; return {practiceWon:false,phase:'planning'};
  }
  throw new Error('phase');
}

/** Complete mission locks are prepared before any adapter assignment, save or render. */
export function instructorStartAuction(value: unknown): InstructorAuctionStartPatch {
  const state = snapshot(value); phase(state,['planning']);
  const teams = instructor(state), reveal = revealMode(state.revealMode);
  if (teams.some(team=>team.mission === null)) throw new Error('mission');
  return {teams:teams.map(team=>({...team,lockedMission:team.mission})),vehiclesLocked:true,round:0,lot:0,
    revealed:reveal !== 'MANUAL',resultDraft:null,phase:'auction',privateEntry:false};
}
export function studentStartAuction(value: unknown): StudentAuctionStartPatch {
  const state = snapshot(value); phase(state,['planning']);
  const team = student(state);
  if (!boolean(state.vehicleConfirmed)) throw new Error('confirmation');
  return {team:{...team,lockedMission:team.mission},lockedMission:team.mission,planBaseline:text(state.plan),phase:'auction'};
}
