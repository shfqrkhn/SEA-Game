// Independent oracle for browser journeys: card data from the MPES text, scoring re-derived here from
// MPES §6.6–6.7 and §6.12 (not imported from source/domain).
import { specCards, specMissions } from '../unit/spec.ts';

const CARDS = new Map(specCards().map(c => [c.id, c]));
const MINIMUMS = new Map(specMissions().map(m => [m.id, m.minimums]));
const KEYS = ['CAP', 'MOB', 'FP', 'PRO', 'COM', 'SA', 'REC', 'MC'] as const;

export interface OracleTeam { mission: string; cards: string[]; paidCents: number; profitCents: number; submitted: boolean }

export function startCents(id: string): number {
  return CARDS.get(id)!.startDollars * 100;
}

export function totals(cards: readonly string[]): Record<string, number> {
  const t: Record<string, number> = Object.fromEntries(KEYS.map(k => [k, 0]));
  for (const id of cards) for (const [k, v] of Object.entries(CARDS.get(id)!.effects)) t[k] = t[k]! + v;
  return t;
}

export function compliant(mission: string, t: Record<string, number>): boolean {
  return Object.entries(MINIMUMS.get(mission)!).every(([k, min]) => t[k]! >= min);
}

export function score(mission: string, t: Record<string, number>): number {
  const p = (k: string, v: number) => Math.max(t[k]! - v, 0);
  switch (mission) {
    case 'COMBAT': return 20 * Math.floor(p('MOB', 80) / 10) + 20 * p('FP', 10);
    case 'RECCE': return 20 * Math.floor(p('COM', 75) / 25) + 20 * p('SA', 5);
    case 'TROOP': return 20 * p('CAP', 10) + 20 * p('PRO', 4);
    case 'COMMAND': return 20 * p('CAP', 5) + 20 * Math.floor(p('COM', 125) / 25);
    case 'RECOVERY': return 20 * p('PRO', 6) + 40 * p('REC', 3);
    case 'MINE': return 20 * p('SA', 1) + 40 * p('MC', 3);
  }
  throw new Error(mission);
}

/** Winners per MPES §6.12: eligible teams, lowest exact bid/score, then lower bid, then higher score; full ties share. */
export function winners(teams: Record<number, OracleTeam>): number[] {
  const eligible = Object.entries(teams).map(([id, team]) => {
    const t = totals(team.cards), s = score(team.mission, t);
    return { id: Number(id), bid: BigInt(team.paidCents + team.profitCents), score: BigInt(s), ok: team.submitted && compliant(team.mission, t) && s > 0 };
  }).filter(x => x.ok);
  eligible.sort((a, b) => {
    const l = a.bid * b.score, r = b.bid * a.score;
    if (l !== r) return l < r ? -1 : 1;
    if (a.bid !== b.bid) return a.bid < b.bid ? -1 : 1;
    if (a.score !== b.score) return a.score > b.score ? -1 : 1;
    return a.id - b.id;
  });
  const top = eligible[0];
  return top ? eligible.filter(x => x.bid === top.bid && x.score === top.score).map(x => x.id) : [];
}

export function dollars(cents: number): string {
  return '$' + (cents / 100).toLocaleString('en-US', { minimumFractionDigits: cents % 100 ? 2 : 0, maximumFractionDigits: 2 });
}
