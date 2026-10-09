import { blankCapabilities, CAPABILITY_KEYS, type Effects, type Totals, sumCapabilities, validateCapabilities } from './capabilities';
import { cardForSlot, MAX_PURCHASES, MAX_WINS_PER_ROUND, ROUNDS, type CardCategory } from './catalog';
import { type MissionId, missionId } from './missions';
import { addCents, cents, type Cents, validatePurchasePrice } from './money';

export interface Purchase {
  readonly id: string;
  readonly title: Readonly<{ en: string; fr: string }>;
  readonly start: Cents;
  readonly e: Effects;
  readonly cat: CardCategory;
  readonly round: number;
  readonly lot: number;
  readonly instance: string;
  readonly paid: Cents;
}
export interface Team {
  readonly id: number;
  readonly mission: MissionId | null;
  readonly lockedMission: MissionId | null;
  readonly totals: Totals;
  readonly cost: Cents;
  readonly purchases: readonly Purchase[];
  readonly purchasesByRound: readonly number[];
  readonly profit: Cents;
  readonly submitted: boolean;
}
const TEAM_KEYS = ['id','mission','lockedMission','totals','cost','purchases','purchasesByRound','profit','submitted'] as const;
const PURCHASE_KEYS = ['id','title','start','e','cat','round','lot','instance','paid'] as const;

export function invalidState(): never { throw new Error('invalid-state'); }
/** Passive plain records only: no input coercion or accessor execution. */
export function dataRecord(value: unknown, allowed: readonly string[]): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return invalidState();
  const descriptors = Object.getOwnPropertyDescriptors(value);
  for (const key of Reflect.ownKeys(descriptors)) {
    if (typeof key !== 'string' || !allowed.includes(key)) return invalidState();
    const descriptor = descriptors[key];
    if (!descriptor || !Object.hasOwn(descriptor, 'value')) return invalidState();
  }
  return value as Record<string, unknown>;
}
function required(record: Record<string, unknown>, key: string): unknown {
  if (!Object.hasOwn(record,key)) return invalidState();
  return record[key];
}
function dataArray(value: unknown, maximum: number): unknown[] {
  if (!Array.isArray(value) || value.length > maximum) return invalidState();
  const descriptors = Object.getOwnPropertyDescriptors(value);
  for (const key of Reflect.ownKeys(descriptors)) {
    if (key === 'length') continue;
    if (typeof key !== 'string' || !/^(0|[1-9]\d*)$/.test(key) || Number(key) >= value.length) return invalidState();
  }
  for (let index=0;index<value.length;index++) {
    const descriptor = descriptors[String(index)];
    if (!descriptor || !Object.hasOwn(descriptor,'value')) return invalidState();
  }
  return value;
}
function position(value: unknown): number {
  if (typeof value !== 'number' || !Number.isInteger(value)) return invalidState();
  return value;
}
/** Rebuild authored purchase fields from the one canonical catalog. */
export function canonicalPurchase(value: unknown): Purchase {
  const record = dataRecord(value,PURCHASE_KEYS);
  const id = required(record,'id');
  if (typeof id !== 'string') return invalidState();
  let card;
  try { card = cardForSlot(id,position(required(record,'round')),position(required(record,'lot'))); }
  catch { return invalidState(); }
  if (required(record,'instance') !== card.instance) return invalidState();
  return {
    id: card.id, title: { ...card.title }, start: card.startCents, e: { ...card.effects }, cat: card.category,
    round: card.round, lot: card.lot, instance: card.instance,
    paid: validatePurchasePrice(card.startCents,required(record,'paid') as number),
  };
}
/** Initial teams are independently owned plain data, ready for legacy role adapters. */
export function createTeams(teamCount: number): Team[] {
  if (!Number.isInteger(teamCount) || teamCount < 2 || teamCount > 10) return invalidState();
  return Array.from({length:teamCount},(_,index) => ({
    id:index+1, mission:null, lockedMission:null, totals:blankCapabilities(), cost:cents(0),
    purchases:[], purchasesByRound:Array<number>(ROUNDS).fill(0), profit:cents(0), submitted:false,
  }));
}
/** Schema-3 derived fields are untrusted. Replaying purchases is lossless and canonical. */
export function normalizeTeam(value: unknown, allowUnset = false): Team {
  const record = dataRecord(value,TEAM_KEYS);
  const id = required(record,'id');
  if (typeof id !== 'number' || !Number.isInteger(id) || id < 1 || id > 10) return invalidState();
  const rawMission = required(record,'mission');
  let mission: MissionId | null;
  try { mission = rawMission === null && allowUnset ? null : missionId(rawMission); }
  catch { return invalidState(); }
  const rawLock = Object.hasOwn(record,'lockedMission') ? record.lockedMission : null;
  let lockedMission: MissionId | null;
  try { lockedMission = rawLock === null ? null : missionId(rawLock); }
  catch { return invalidState(); }
  if (lockedMission !== null && lockedMission !== mission) return invalidState();
  const submitted = required(record,'submitted');
  if (typeof submitted !== 'boolean') return invalidState();
  const profit = cents(required(record,'profit'));
  const input = dataArray(required(record,'purchases'),MAX_PURCHASES);
  if (mission === null && input.length !== 0) return invalidState();
  const purchases: Purchase[] = [], purchasesByRound = Array<number>(ROUNDS).fill(0);
  const cards = new Set<string>(), slots = new Set<string>();
  let cost = cents(0);
  for (let index=0;index<input.length;index++) {
    const purchase = canonicalPurchase(input[index]), slot = purchase.round+'-'+purchase.lot;
    if (cards.has(purchase.id) || slots.has(slot)) throw new Error('duplicate');
    const count = purchasesByRound[purchase.round-1]!;
    if (count >= MAX_WINS_PER_ROUND) throw new Error('limit');
    cost = addCents(cost,purchase.paid);
    purchasesByRound[purchase.round-1] = count+1;
    cards.add(purchase.id); slots.add(slot); purchases.push(purchase);
  }
  addCents(cost,profit);
  return { id,mission,lockedMission,totals:sumCapabilities(purchases.map(p=>p.e)),cost,purchases,purchasesByRound,profit,submitted };
}
/** Commands require a consistent live snapshot; recovery alone may rebuild derived data. */
export function validateTeamSnapshot(value: unknown): Team {
  const normalized = normalizeTeam(value,true);
  const record = value as Record<string, unknown>;
  const totals = dataRecord(required(record,'totals'),CAPABILITY_KEYS);
  validateCapabilities(totals);
  if (CAPABILITY_KEYS.some(key=>totals[key] !== normalized.totals[key])) return invalidState();
  if (cents(required(record,'cost')) !== normalized.cost) return invalidState();
  const counts = dataArray(required(record,'purchasesByRound'),ROUNDS);
  if (counts.length !== ROUNDS) return invalidState();
  for (let index=0;index<ROUNDS;index++) if (!Number.isInteger(counts[index]) || counts[index] !== normalized.purchasesByRound[index]) return invalidState();
  return normalized;
}

/** Preserve a canonical row's identity without JSON/coercion hooks or key-order assumptions. */
export function canonicalPurchaseReference(value: unknown, next: Purchase): Purchase {
  function equalPassive(actual: unknown, expected: unknown): boolean {
    if (actual === expected) return true;
    if (!actual || !expected || typeof actual !== 'object' || typeof expected !== 'object' || Array.isArray(actual)) return false;
    // An inherited serializer must never survive into mutable role state.
    let prototype: object | null = Object.getPrototypeOf(actual), depth = 0;
    while (prototype) {
      if (++depth > 3 || Object.hasOwn(prototype,'toJSON')) return false;
      prototype = Object.getPrototypeOf(prototype);
    }
    const descriptors = Object.getOwnPropertyDescriptors(actual), keys = Object.keys(expected);
    if (Reflect.ownKeys(descriptors).length !== keys.length) return false;
    const canonical = expected as Record<string,unknown>;
    return keys.every(key => {
      const descriptor = descriptors[key];
      return descriptor && Object.hasOwn(descriptor,'value') && descriptor.enumerable === true && equalPassive(descriptor.value,canonical[key]);
    });
  }
  return equalPassive(value,next) ? value as Purchase : next;
}
