// Canonical data (MPES §6.3, §6.6, Appendix A). Content files are generated from the MPES tables
// and verified against them by tests/unit/data.test.ts.
import cardData from '../../content/cards.json';
import missionData from '../../content/missions.json';

export const RULESET = 'STANDARD';
export const DECK = 'synthetic-v1';
export const ROUNDS = 7;
export const LOTS = 10;
export const TOTAL_LOTS = ROUNDS * LOTS;
export const MAX_WINS_PER_ROUND = 2;
export const MAX_PURCHASES = 14;
export const LEDGER_CAPACITY = 210;
export const MIN_TEAMS = 2;
export const MAX_TEAMS = 10;

export const CAPABILITIES = ['CAP', 'MOB', 'FP', 'PRO', 'COM', 'SA', 'REC', 'MC'] as const;
export type Capability = typeof CAPABILITIES[number];
export type Totals = Record<Capability, number>;
export type Effects = Partial<Record<Capability, number>>;

export const CATEGORIES = ['CAPACITY', 'MOBILITY', 'FIREPOWER', 'PROTECTION', 'COMMS', 'SA', 'ACCESSORIES', 'SE_PROCESS'] as const;
export type Category = typeof CATEGORIES[number];
export const ROUND_SLOTS: readonly Category[] = ['CAPACITY', 'MOBILITY', 'FIREPOWER', 'PROTECTION', 'COMMS', 'SA', 'ACCESSORIES', 'SE_PROCESS', 'SE_PROCESS', 'SE_PROCESS'];

export const MISSION_IDS = ['COMBAT', 'RECCE', 'TROOP', 'COMMAND', 'RECOVERY', 'MINE'] as const;
export type MissionId = typeof MISSION_IDS[number];

export interface Bilingual { readonly en: string; readonly fr: string }
export interface CardDef {
  readonly id: string;
  readonly category: Category;
  readonly title: Bilingual;
  readonly startCents: number;
  readonly effects: Effects;
}
export interface MissionDef {
  readonly id: MissionId;
  readonly title: Bilingual;
  readonly minimums: Effects;
}

function freezeDeep<T>(value: T): T {
  if (value && typeof value === 'object') { Object.values(value).forEach(freezeDeep); Object.freeze(value); }
  return value;
}

export const CARDS: readonly CardDef[] = freezeDeep(cardData.map(card => ({
  id: card.id,
  category: card.category as Category,
  title: { en: card.en, fr: card.fr },
  startCents: card.startCents,
  effects: card.effects as Effects,
})));
export const MISSIONS: readonly MissionDef[] = freezeDeep(missionData.map(mission => ({
  id: mission.id as MissionId,
  title: { en: mission.en, fr: mission.fr },
  minimums: mission.minimums as Effects,
})));

const cardIndex = new Map(CARDS.map(card => [card.id, card]));
const missionIndex = new Map(MISSIONS.map(mission => [mission.id, mission]));

export function card(id: string): CardDef | undefined {
  return cardIndex.get(id);
}
export function mission(id: MissionId): MissionDef {
  return missionIndex.get(id)!;
}
export function isMissionId(value: unknown): value is MissionId {
  return typeof value === 'string' && (MISSION_IDS as readonly string[]).includes(value);
}
export function categoryOfLot(lot: number): Category | undefined {
  return ROUND_SLOTS[lot - 1];
}

/** Practice card (MPES §6.8). It never enters scored state. */
export const PRACTICE_CARD = freezeDeep({ id: 'TRAIN-CAP', title: { en: 'Training capacity', fr: 'Capacité de formation' } });
