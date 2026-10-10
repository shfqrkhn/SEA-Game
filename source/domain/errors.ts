/** Every rejected command throws a DomainError; codes map to localized messages in the UI. */
export type ErrorCode =
  | 'money' | 'percent' | 'zero-cost' | 'capability' | 'mission' | 'card' | 'team' | 'phase'
  | 'limit' | 'game-limit' | 'duplicate' | 'leader' | 'stale' | 'paused' | 'expired' | 'reason'
  | 'ledger-limit' | 'code' | 'text' | 'time' | 'confirmation' | 'position' | 'not-found'
  | 'invalid-state' | 'backup-format' | 'backup-role' | 'backup-session' | 'backup-size' | 'backup-json';

export class DomainError extends Error {
  readonly code: ErrorCode;
  constructor(code: ErrorCode, detail?: string) {
    super(detail ? `${code}: ${detail}` : code);
    this.name = 'DomainError';
    this.code = code;
  }
}

export function fail(code: ErrorCode, detail?: string): never {
  throw new DomainError(code, detail);
}

export function ensure(condition: unknown, code: ErrorCode = 'invalid-state', detail?: string): asserts condition {
  if (!condition) fail(code, detail);
}

export function safe(value: bigint, code: ErrorCode): number {
  const limit = BigInt(Number.MAX_SAFE_INTEGER);
  if (value < -limit || value > limit) fail(code);
  return Number(value);
}

export function isInt(value: unknown, min: number, max: number): value is number {
  return typeof value === 'number' && Number.isInteger(value) && value >= min && value <= max;
}
