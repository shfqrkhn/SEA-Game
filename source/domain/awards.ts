import { type Totals } from './capabilities';
import { addCents, type Cents } from './money';
import { isCompliant, type MissionId, missionScore } from './missions';
import { DomainError } from './validation';

export interface RuleTeam {
  readonly id: number;
  readonly mission: MissionId;
  readonly totals: Totals;
  readonly cost: number;
  readonly profit: number;
  readonly submitted: boolean;
}
export interface AwardResult { readonly rankedIds: readonly number[]; readonly winnerIds: readonly number[] }
function validateTeam(team: RuleTeam): void {
  if (!team || !Number.isInteger(team.id) || team.id < 1 || team.id > 10 || typeof team.submitted !== 'boolean') throw new DomainError('team');
  bidCents(team);
  isCompliant(team.mission, team.totals);
  missionScore(team.mission, team.totals);
}
export function bidCents(team: Pick<RuleTeam, 'cost' | 'profit'>): Cents {
  if (!team || typeof team !== 'object') throw new DomainError('team');
  return addCents(team.cost, team.profit);
}
export function awardEligible(team: RuleTeam): boolean {
  validateTeam(team);
  return team.submitted && isCompliant(team.mission, team.totals) && missionScore(team.mission, team.totals) > 0;
}
function values(team: RuleTeam): { bid: number; score: number } {
  validateTeam(team);
  return { bid: bidCents(team), score: missionScore(team.mission, team.totals) };
}
/** Comparator is also safe for valid ineligible teams; filter before ranking awards. */
export function awardComparator(left: RuleTeam, right: RuleTeam): -1 | 0 | 1 {
  const a = values(left), b = values(right);
  const first = BigInt(a.bid) * BigInt(b.score), second = BigInt(b.bid) * BigInt(a.score);
  if (first !== second) return first < second ? -1 : 1;
  if (a.bid !== b.bid) return a.bid < b.bid ? -1 : 1;
  if (a.score !== b.score) return a.score > b.score ? -1 : 1;
  return left.id === right.id ? 0 : left.id < right.id ? -1 : 1;
}
export function exactAwardTie(left: RuleTeam, right: RuleTeam): boolean {
  const a = values(left), b = values(right);
  return a.bid === b.bid && a.score === b.score;
}
export function rankAwards(teams: readonly RuleTeam[]): AwardResult {
  if (!Array.isArray(teams) || teams.length > 10) throw new DomainError('team');
  const seen = new Set<number>();
  for (const team of teams) {
    validateTeam(team);
    if (seen.has(team.id)) throw new DomainError('team');
    seen.add(team.id);
  }
  const ranked = teams.filter(awardEligible).sort(awardComparator);
  const top = ranked[0];
  return Object.freeze({ rankedIds: Object.freeze(ranked.map(team => team.id)), winnerIds: Object.freeze(top ? ranked.filter(team => exactAwardTie(top,team)).map(team => team.id) : []) });
}
