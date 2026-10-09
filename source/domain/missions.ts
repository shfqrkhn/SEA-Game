import { CAPABILITY_KEYS, type Capability, type Effects, type Totals, validateCapabilities } from './capabilities';
import { DomainError, safeBigInt } from './validation';

export const MISSION_IDS = Object.freeze(['COMBAT', 'RECCE', 'TROOP', 'COMMAND', 'RECOVERY', 'MINE'] as const);
export type MissionId = typeof MISSION_IDS[number];
export interface MissionDefinition { readonly title: Readonly<{ en: string; fr: string }>; readonly requirements: Effects }
function definition(en: string, fr: string, requirements: Effects): MissionDefinition {
  return Object.freeze({title: Object.freeze({en, fr}), requirements: Object.freeze(requirements)});
}
// Canonical requirements from the independent baseline, not inferred from geometry.
export const MISSIONS: Readonly<Record<MissionId, MissionDefinition>> = Object.freeze({
  COMBAT: definition('Combat','Combat',{CAP:4,MOB:80,FP:10,PRO:10,COM:25,SA:1}),
  RECCE: definition('RECCE','Reconnaissance',{CAP:3,MOB:120,FP:4,PRO:2,COM:75,SA:5}),
  TROOP: definition('Troop Carrier','Transport de troupes',{CAP:10,MOB:100,FP:2,PRO:4,COM:25,SA:2}),
  COMMAND: definition('Command Post','Poste de commandement',{CAP:5,MOB:60,FP:2,PRO:4,COM:125,SA:4}),
  RECOVERY: definition('Recovery','Dépannage',{CAP:3,MOB:80,FP:4,PRO:6,COM:75,SA:2,REC:3}),
  MINE: definition('Mine Clearing','Déminage',{CAP:4,MOB:40,FP:8,PRO:10,COM:25,SA:1,MC:3}),
});

export function missionId(value: unknown): MissionId {
  if (typeof value !== 'string' || !MISSION_IDS.includes(value as MissionId)) throw new DomainError('mission');
  return value as MissionId;
}

export interface Shortfall { readonly capability: Capability; readonly required: number; readonly actual: number; readonly missing: number }
export function missionShortfalls(mission: MissionId, totals: Totals): readonly Shortfall[] {
  const requirements = MISSIONS[missionId(mission)].requirements;
  validateCapabilities(totals);
  const result: Shortfall[] = [];
  for (const capability of CAPABILITY_KEYS) {
    const required = requirements[capability];
    if (required !== undefined && totals[capability] < required) result.push(Object.freeze({ capability, required, actual: totals[capability], missing: safeBigInt(BigInt(required) - BigInt(totals[capability]), 'capability') }));
  }
  return Object.freeze(result);
}

export function isCompliant(mission: MissionId, totals: Totals): boolean {
  const requirements = MISSIONS[missionId(mission)].requirements;
  validateCapabilities(totals);
  return CAPABILITY_KEYS.every(key => requirements[key] === undefined || totals[key] >= requirements[key]!);
}

/** MPES excess-only score; BigInt intermediates prevent unsafe numeric products. */
export function missionScore(mission: MissionId, totals: Totals): number {
  const id = missionId(mission);
  validateCapabilities(totals);
  const excess = (key: Capability, threshold: number): bigint => {
    const value = BigInt(totals[key]) - BigInt(threshold);
    return value > 0n ? value : 0n;
  };
  let result: bigint;
  switch (id) {
    case 'COMBAT': result = 20n * (excess('MOB',80) / 10n + excess('FP',10)); break;
    case 'RECCE': result = 20n * (excess('COM',75) / 25n + excess('SA',5)); break;
    case 'TROOP': result = 20n * (excess('CAP',10) + excess('PRO',4)); break;
    case 'COMMAND': result = 20n * (excess('CAP',5) + excess('COM',125) / 25n); break;
    case 'RECOVERY': result = 20n * excess('PRO',6) + 40n * excess('REC',3); break;
    case 'MINE': result = 20n * excess('SA',1) + 40n * excess('MC',3); break;
  }
  return safeBigInt(result, 'capability');
}
