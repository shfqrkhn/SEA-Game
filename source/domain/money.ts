import { DomainError, safeBigInt, safeInteger } from './validation';

declare const centsBrand: unique symbol;
export type Cents = number & { readonly [centsBrand]: true };
export const BID_INCREMENT_CENTS = 5_000_000;
export const MAX_PERCENT_BPS = 1_000_000n;

export function cents(value: unknown): Cents {
  const result = safeInteger(value, 'money');
  if (result < 0) throw new DomainError('money');
  return result as Cents;
}

function decimalHundredths(raw: unknown, maxLength: number, code: 'money' | 'percent'): bigint {
  if (typeof raw !== 'string' && typeof raw !== 'number') throw new DomainError(code);
  const input = String(raw).trim();
  const match = /^(\d+)(?:[.,](\d{1,2}))?$/.exec(input);
  if (input.length > maxLength || !match) throw new DomainError(code);
  return BigInt(match[1]!) * 100n + BigInt((match[2] ?? '').padEnd(2, '0'));
}

export function parseAmount(raw: unknown): Cents {
  return cents(safeBigInt(decimalHundredths(raw, 20, 'money'), 'money'));
}

export function parseWholeDollars(raw: unknown): Cents {
  if (typeof raw !== 'string' && typeof raw !== 'number') throw new DomainError('money');
  const input = String(raw).trim();
  if (input.length > 17 || !/^\d+$/.test(input)) throw new DomainError('money');
  return cents(safeBigInt(BigInt(input) * 100n, 'money'));
}

export function parsePercentBps(raw: unknown): number {
  const value = decimalHundredths(raw, 10, 'percent');
  if (value > MAX_PERCENT_BPS) throw new DomainError('percent');
  return Number(value);
}

export function addCents(left: number, right: number): Cents {
  return cents(safeBigInt(BigInt(cents(left)) + BigInt(cents(right)), 'money'));
}

export function profitFromBps(cost: number, basisPoints: number | bigint): Cents {
  cents(cost);
  if (typeof basisPoints !== 'bigint' && (typeof basisPoints !== 'number' || !Number.isSafeInteger(basisPoints))) throw new DomainError('percent');
  const bps = BigInt(basisPoints);
  if (bps < 0n || bps > MAX_PERCENT_BPS) throw new DomainError('percent');
  return cents(safeBigInt((BigInt(cost) * bps + 5_000n) / 10_000n, 'money'));
}

export function validatePurchasePrice(start: number, paid: number): Cents {
  cents(start);
  const amount = cents(paid);
  if (amount < start || (BigInt(amount) - BigInt(start)) % BigInt(BID_INCREMENT_CENTS) !== 0n) throw new DomainError('money');
  return amount;
}
