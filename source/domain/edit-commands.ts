import { cardForSlot } from './catalog';
import { instructorLiveSnapshot, studentLiveSnapshot } from './live-state';
import { addCents, parseAmount, parseWholeDollars } from './money';
import { acquirePurchase, removePurchase } from './transactions';
import { invalidState, type Team } from './teams';
import { type ScratchEntry } from './role-saves';

export function instructorOpenSubmissions(raw: unknown): { readonly phase: 'submit'; readonly privateEntry: false } {
  if (instructorLiveSnapshot(raw).phase !== 'build') throw new Error('phase');
  return Object.freeze({ phase: 'submit', privateEntry: false });
}
export function instructorAuthorizePrivateEntry(raw: unknown): { readonly privateEntry: true } {
  const state = instructorLiveSnapshot(raw);
  if (state.phase !== 'submit' || state.privateEntry) throw new Error('phase');
  return Object.freeze({ privateEntry: true });
}
function submissionTeam(raw: unknown, id: unknown): { teams: Team[]; index: number } {
  const state = instructorLiveSnapshot(raw);
  if (state.phase !== 'submit' || !state.privateEntry) throw new Error('phase');
  if (typeof id !== 'number' || !Number.isInteger(id) || id < 1 || id > state.teamCount) return invalidState();
  return { teams: [...state.teams], index: id - 1 };
}
export function instructorSetProfit(raw: unknown, id: unknown, input: unknown): { readonly teams: readonly Team[] } {
  const { teams, index } = submissionTeam(raw, id), team = teams[index]!;
  const profit = parseAmount(input);
  addCents(team.cost, profit);
  teams[index] = { ...team, profit };
  return Object.freeze({ teams });
}
export function instructorSetSubmitted(raw: unknown, id: unknown, submitted: unknown): { readonly teams: readonly Team[] } {
  const { teams, index } = submissionTeam(raw, id);
  if (typeof submitted !== 'boolean') return invalidState();
  teams[index] = { ...teams[index]!, submitted };
  return Object.freeze({ teams });
}
/** UI retains the explicit pending-team confirmation and stale-session intent. */
export function instructorCloseSubmissions(raw: unknown): { readonly phase: 'debrief'; readonly privateEntry: false } {
  if (instructorLiveSnapshot(raw).phase !== 'submit') throw new Error('phase');
  return Object.freeze({ phase: 'debrief', privateEntry: false });
}
export function instructorCloseRoom(raw: unknown): { readonly phase: 'closed'; readonly privateEntry: false } {
  if (instructorLiveSnapshot(raw).phase !== 'debrief') throw new Error('phase');
  return Object.freeze({ phase: 'closed', privateEntry: false });
}
export function studentEditScratch(raw: unknown, field: unknown, input: unknown): { readonly scratch: Readonly<Record<string, ScratchEntry>> } {
  const state = studentLiveSnapshot(raw);
  if (state.phase !== 'auction') throw new Error('phase');
  if (field !== 'wtp' && field !== 'note') return invalidState();
  if (typeof input !== 'string' || input.length > (field === 'wtp' ? 20 : 600)) throw new Error('text');
  const value = field === 'wtp' ? String(parseWholeDollars(input) / 100) : input;
  const key = `${state.round + 1}-${state.lot + 1}`, previous = state.scratch[key] ?? { wtp: '', note: '' };
  return Object.freeze({ scratch: { ...state.scratch, [key]: { ...previous, [field]: value } } });
}
export function studentAddMissingPurchase(raw: unknown, id: unknown, round: unknown, lot: unknown, input: unknown): { readonly team: Team } {
  const state = studentLiveSnapshot(raw);
  if (state.phase !== 'build') throw new Error('phase');
  if (typeof id !== 'string' || id.length > 20 || typeof round !== 'number' || typeof lot !== 'number') return invalidState();
  const card = cardForSlot(id.trim().toUpperCase(), round, lot);
  return Object.freeze({ team: acquirePurchase(state.team, {
    id: card.id, title: card.title, start: card.startCents, e: card.effects,
    cat: card.category, round: card.round, lot: card.lot, instance: card.instance,
  }, parseWholeDollars(input)) });
}
export function studentRemoveReconciledPurchase(raw: unknown, instance: unknown): { readonly team: Team } {
  const state = studentLiveSnapshot(raw);
  if (state.phase !== 'build') throw new Error('phase');
  if (typeof instance !== 'string') return invalidState();
  return Object.freeze({ team: removePurchase(state.team, instance) });
}
