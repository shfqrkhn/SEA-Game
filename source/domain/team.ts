// Team inventory (MPES §6.5 win limits, §8.5 team object).
import { MAX_PURCHASES, MAX_WINS_PER_ROUND, ROUNDS, MAX_TEAMS, MIN_TEAMS, type MissionId, type Totals } from './data.ts';
import { ensure, fail } from './errors.ts';
import type { MarketCard } from './market.ts';
import { blankTotals, sumEffects } from './missions.ts';
import { add, price } from './money.ts';

export interface Purchase extends MarketCard { readonly paid: number }

/** Schema-3 team object. Totals, cost and purchasesByRound are always derived from purchases. */
export interface Team {
  readonly id: number;
  readonly mission: MissionId | null;
  readonly lockedMission: MissionId | null;
  readonly totals: Totals;
  readonly cost: number;
  readonly purchases: readonly Purchase[];
  readonly purchasesByRound: readonly number[];
  readonly profit: number;
  readonly submitted: boolean;
}

export function createTeams(count: number): Team[] {
  ensure(Number.isInteger(count) && count >= MIN_TEAMS && count <= MAX_TEAMS, 'team');
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1, mission: null, lockedMission: null, totals: blankTotals(), cost: 0,
    purchases: [], purchasesByRound: Array<number>(ROUNDS).fill(0), profit: 0, submitted: false,
  }));
}

/** Recompute derived fields from a purchase list, enforcing uniqueness and win limits. */
export function withPurchases(team: Team, purchases: readonly Purchase[]): Team {
  ensure(purchases.length <= MAX_PURCHASES, 'game-limit');
  const byRound = Array<number>(ROUNDS).fill(0), ids = new Set<string>(), slots = new Set<string>();
  let cost = 0;
  for (const purchase of purchases) {
    const slot = `${purchase.round}-${purchase.lot}`;
    if (ids.has(purchase.id) || slots.has(slot)) fail('duplicate');
    ids.add(purchase.id); slots.add(slot);
    const used = byRound[purchase.round - 1]!;
    if (used >= MAX_WINS_PER_ROUND) fail('limit');
    byRound[purchase.round - 1] = used + 1;
    cost = add(cost, price(purchase.start, purchase.paid));
  }
  add(cost, team.profit);
  return { ...team, purchases: [...purchases], purchasesByRound: byRound, cost, totals: sumEffects(purchases.map(p => p.e)) };
}

export function canWin(team: Team, round: number): boolean {
  return (team.purchasesByRound[round - 1] ?? 0) < MAX_WINS_PER_ROUND && team.purchases.length < MAX_PURCHASES;
}

/** Add a won card. Rejects off-step prices, duplicates, the 2-per-round and 14-per-game limits and overflow. */
export function acquire(team: Team, card: MarketCard, paid: number): Team {
  price(card.start, paid);
  if (team.purchases.length >= MAX_PURCHASES) fail('game-limit');
  if ((team.purchasesByRound[card.round - 1] ?? 0) >= MAX_WINS_PER_ROUND) fail('limit');
  return withPurchases(team, [...team.purchases, { ...card, title: { ...card.title }, e: { ...card.e }, paid }]);
}

export function removePurchase(team: Team, instance: string): Team {
  const index = team.purchases.findIndex(p => p.instance === instance);
  if (index < 0) fail('not-found');
  return withPurchases(team, team.purchases.filter((_, i) => i !== index));
}

export function bid(team: Team): number {
  return add(team.cost, team.profit);
}
