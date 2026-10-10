// Locale display for money and numbers (MPES §6.4). Deterministic; does not depend on Intl data.
import type { Language } from './i18n.ts';

const NBSP = ' ';

function group(digits: string, separator: string): string {
  return digits.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}

/** EN `$1,234,567.89`, FR `1 234 567,89 $`. Cents shown when non-zero or when `always` is set. */
export function money(cents: number, lang: Language, always = false): string {
  const negative = cents < 0;
  const value = BigInt(Math.abs(cents));
  const whole = (value / 100n).toString(), fraction = (value % 100n).toString().padStart(2, '0');
  const showCents = always || fraction !== '00';
  const body = lang === 'fr'
    ? group(whole, NBSP) + (showCents ? ',' + fraction : '') + NBSP + '$'
    : '$' + group(whole, ',') + (showCents ? '.' + fraction : '');
  return (negative ? '−' : '') + body;
}

export function signed(value: number): string {
  return value > 0 ? `+${value}` : value < 0 ? `−${Math.abs(value)}` : '0';
}

export function list(items: readonly string[], lang: Language): string {
  if (items.length <= 1) return items.join('');
  const last = items[items.length - 1]!;
  return `${items.slice(0, -1).join(', ')} ${lang === 'fr' ? 'et' : 'and'} ${last}`;
}

export function seconds(ms: number): string {
  const total = Math.ceil(ms / 1000);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`;
}

/** "Label: " with French spacing ("Libellé : "). */
export function labelled(text: string, lang: Language): string {
  return lang === 'fr' ? `${text}${NBSP}: ` : `${text}: `;
}
