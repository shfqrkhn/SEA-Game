import { DomainError, safeBigInt, safeInteger } from './validation';

export const CAPABILITY_KEYS = Object.freeze(['CAP', 'MOB', 'FP', 'PRO', 'COM', 'SA', 'REC', 'MC'] as const);
export type Capability = typeof CAPABILITY_KEYS[number];
export type Totals = Readonly<Record<Capability, number>>;
export type Effects = Readonly<Partial<Record<Capability, number>>>;

export function blankCapabilities(): Record<Capability, number> {
  return { CAP: 0, MOB: 0, FP: 0, PRO: 0, COM: 0, SA: 0, REC: 0, MC: 0 };
}

export function validateCapabilities(value: unknown, partial?: false): asserts value is Totals;
export function validateCapabilities(value: unknown, partial: true): asserts value is Effects;
export function validateCapabilities(value: unknown, partial = false): void {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new DomainError('capability');
  const candidate = value as Record<string, unknown>;
  if (Object.keys(candidate).some(key => !CAPABILITY_KEYS.includes(key as Capability))) throw new DomainError('capability');
  for (const key of CAPABILITY_KEYS) {
    if (partial && !Object.hasOwn(candidate, key)) continue;
    if (!Object.hasOwn(candidate, key)) throw new DomainError('capability');
    safeInteger(candidate[key], 'capability');
  }
}

/** Signed penalties survive accumulation. A failure cannot mutate the inputs. */
export function sumCapabilities(effects: readonly Effects[]): Totals {
  if (!Array.isArray(effects)) throw new DomainError('capability');
  const result = blankCapabilities();
  for (const effect of effects) {
    validateCapabilities(effect, true);
    for (const key of CAPABILITY_KEYS) result[key] = safeBigInt(BigInt(result[key]) + BigInt(effect[key] ?? 0), 'capability');
  }
  return Object.freeze(result);
}
