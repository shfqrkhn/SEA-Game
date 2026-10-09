/** Explicit domain errors support localization without coupling rules to UI text. */
export class DomainError extends Error {
  constructor(public readonly code: 'money' | 'percent' | 'capability' | 'mission' | 'card' | 'team') {
    super(code);
    this.name = 'DomainError';
  }
}

export function safeInteger(value: unknown, code: ConstructorParameters<typeof DomainError>[0]): number {
  if (typeof value !== 'number' || !Number.isSafeInteger(value)) throw new DomainError(code);
  return value;
}

export function safeBigInt(value: bigint, code: ConstructorParameters<typeof DomainError>[0]): number {
  const limit = BigInt(Number.MAX_SAFE_INTEGER);
  if (value < -limit || value > limit) throw new DomainError(code);
  return Number(value);
}
