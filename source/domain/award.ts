// Eligibility, ranking and ties (MPES §6.12).
import { compliant, score } from './missions.ts';
import { bid, type Team } from './team.ts';

export interface Standing {
  readonly team: number;
  readonly bid: number;
  readonly score: number;
  readonly compliant: boolean;
  readonly eligible: boolean;
}

export function standing(team: Team): Standing {
  const mission = team.lockedMission ?? team.mission;
  const s = mission ? score(mission, team.totals) : 0;
  const ok = mission ? compliant(mission, team.totals) : false;
  return { team: team.id, bid: bid(team), score: s, compliant: ok, eligible: team.submitted && ok && s > 0 };
}

/** Lower exact bid/score first, then lower bid, then higher score, then team number for a stable order. */
export function compareStandings(a: Standing, b: Standing): number {
  const left = BigInt(a.bid) * BigInt(b.score), right = BigInt(b.bid) * BigInt(a.score);
  if (left !== right) return left < right ? -1 : 1;
  if (a.bid !== b.bid) return a.bid < b.bid ? -1 : 1;
  if (a.score !== b.score) return a.score > b.score ? -1 : 1;
  return a.team - b.team;
}

export interface AwardResult { readonly ranked: readonly Standing[]; readonly winners: readonly number[] }

export function rankAwards(teams: readonly Team[]): AwardResult {
  const ranked = teams.map(standing).filter(s => s.eligible).sort(compareStandings);
  const top = ranked[0];
  return { ranked, winners: top ? ranked.filter(s => s.bid === top.bid && s.score === top.score).map(s => s.team) : [] };
}

/** Display-only cost per point, rounded half up to cents; ranking never uses it. */
export function costPerPointCents(standing: Pick<Standing, 'bid' | 'score'>): number | null {
  if (standing.score <= 0) return null;
  const s = BigInt(standing.score);
  return Number((BigInt(standing.bid) + s / 2n) / s);
}
