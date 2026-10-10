// Money in integer cents (MPES §6.4).
import { ensure, fail, safe } from './errors.ts';

export const INCREMENT_CENTS = 5_000_000;
export const MAX_PERCENT_BPS = 1_000_000n;

export function isCents(value: unknown): value is number {
  return typeof value === 'number' && Number.isSafeInteger(value) && value >= 0;
}
export function cents(value: unknown): number {
  ensure(isCents(value), 'money');
  return value;
}

function hundredths(raw: unknown, maxLength: number, code: 'money' | 'percent'): bigint {
  if (typeof raw !== 'string') fail(code);
  const text = raw.trim();
  const match = /^(\d+)(?:[.,](\d{1,2}))?$/.exec(text);
  if (text.length > maxLength || !match) fail(code);
  return BigInt(match[1]!) * 100n + BigInt((match[2] ?? '').padEnd(2, '0'));
}

/** "1234", "1234.5", "1234,56" dollars to cents. */
export function parseAmount(raw: unknown): number {
  return cents(safe(hundredths(raw, 20, 'money'), 'money'));
}
/** Whole dollars only (paid price, willingness-to-pay). */
export function parseWholeDollars(raw: unknown): number {
  if (typeof raw !== 'string') fail('money');
  const text = raw.trim();
  if (text.length > 17 || !/^\d+$/.test(text)) fail('money');
  return cents(safe(BigInt(text) * 100n, 'money'));
}
/** Percent with up to two decimals, returned as basis points (1% = 100). */
export function parsePercentBps(raw: unknown): number {
  const value = hundredths(raw, 10, 'percent');
  if (value > MAX_PERCENT_BPS) fail('percent');
  return Number(value);
}

export function add(...values: number[]): number {
  let total = 0n;
  for (const value of values) total += BigInt(cents(value));
  return cents(safe(total, 'money'));
}

/** profit = round_half_up(cost × bps / 10 000). */
export function profitFromBps(cost: number, bps: number): number {
  cents(cost);
  if (!Number.isSafeInteger(bps) || bps < 0 || BigInt(bps) > MAX_PERCENT_BPS) fail('percent');
  return cents(safe((BigInt(cost) * BigInt(bps) + 5_000n) / 10_000n, 'money'));
}
/** bps = round_half_up(profit × 10 000 / cost); refused when cost is 0 and profit is not. */
export function bpsFromProfit(cost: number, profit: number): number {
  cents(cost); cents(profit);
  if (cost === 0) { if (profit !== 0) fail('zero-cost'); return 0; }
  const c = BigInt(cost);
  return safe((BigInt(profit) * 10_000n + c / 2n) / c, 'percent');
}

export function validPrice(start: number, price: unknown): price is number {
  return isCents(price) && isCents(start) && price >= start && (price - start) % INCREMENT_CENTS === 0;
}
export function price(start: number, value: unknown): number {
  if (!validPrice(start, value)) fail('money');
  return value;
}

/** Text form used to prefill inputs: "1234" or "1234.50". */
export function amountText(value: number): string {
  const n = BigInt(cents(value)), fraction = n % 100n;
  return (n / 100n).toString() + (fraction ? '.' + fraction.toString().padStart(2, '0') : '');
}
export function percentText(bps: number): string {
  const n = BigInt(bps);
  return `${n / 100n}.${(n % 100n).toString().padStart(2, '0')}`;
}
