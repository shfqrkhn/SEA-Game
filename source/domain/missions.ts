// Capabilities, compliance and score (MPES §6.6, §6.7).
import { CAPABILITIES, isMissionId, mission, type Capability, type Effects, type MissionId, type Totals } from './data.ts';
import { ensure, safe } from './errors.ts';

export function blankTotals(): Totals {
  return { CAP: 0, MOB: 0, FP: 0, PRO: 0, COM: 0, SA: 0, REC: 0, MC: 0 };
}

/** Plain signed sum; penalties are never clamped. */
export function sumEffects(effects: readonly Effects[]): Totals {
  const totals = blankTotals();
  for (const effect of effects) {
    for (const key of CAPABILITIES) totals[key] = safe(BigInt(totals[key]) + BigInt(effect[key] ?? 0), 'capability');
  }
  return totals;
}

export interface Shortfall { readonly capability: Capability; readonly required: number; readonly actual: number; readonly missing: number }

export function shortfalls(id: MissionId, totals: Totals): Shortfall[] {
  ensure(isMissionId(id), 'mission');
  const result: Shortfall[] = [];
  for (const capability of CAPABILITIES) {
    const required = mission(id).minimums[capability];
    if (required !== undefined && totals[capability] < required) {
      result.push({ capability, required, actual: totals[capability], missing: required - totals[capability] });
    }
  }
  return result;
}

export function compliant(id: MissionId, totals: Totals): boolean {
  return shortfalls(id, totals).length === 0;
}

export function score(id: MissionId, totals: Totals): number {
  ensure(isMissionId(id), 'mission');
  const p = (key: Capability, threshold: number): bigint => {
    const value = BigInt(totals[key]) - BigInt(threshold);
    return value > 0n ? value : 0n;
  };
  let result: bigint;
  switch (id) {
    case 'COMBAT': result = 20n * (p('MOB', 80) / 10n) + 20n * p('FP', 10); break;
    case 'RECCE': result = 20n * (p('COM', 75) / 25n) + 20n * p('SA', 5); break;
    case 'TROOP': result = 20n * p('CAP', 10) + 20n * p('PRO', 4); break;
    case 'COMMAND': result = 20n * p('CAP', 5) + 20n * (p('COM', 125) / 25n); break;
    case 'RECOVERY': result = 20n * p('PRO', 6) + 40n * p('REC', 3); break;
    case 'MINE': result = 20n * p('SA', 1) + 40n * p('MC', 3); break;
  }
  return safe(result, 'capability');
}
