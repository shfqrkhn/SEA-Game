// Append-only auction ledger (MPES §6.5).
import { LEDGER_CAPACITY, LOTS, TOTAL_LOTS } from './data.ts';

export type LedgerEntry =
  | { readonly seq: number; readonly kind: 'SALE'; readonly round: number; readonly lot: number; readonly card: string; readonly team: number; readonly price: number; readonly reason?: string }
  | { readonly seq: number; readonly kind: 'UNSOLD'; readonly round: number; readonly lot: number; readonly card: string; readonly team: null; readonly price: null }
  | { readonly seq: number; readonly kind: 'VOID'; readonly round: number; readonly lot: number; readonly card: string; readonly team: number | null; readonly price: number | null; readonly ref: number; readonly reason: string };
export type Outcome = Extract<LedgerEntry, { kind: 'SALE' | 'UNSOLD' }>;

/** 0-based position in the 70-lot sequence. */
export function lotIndex(round: number, lot: number): number {
  return (round - 1) * LOTS + (lot - 1);
}

/** Effective outcome per lot index after applying VOIDs, in ledger order. */
export function effectiveOutcomes(ledger: readonly LedgerEntry[]): Map<number, Outcome> {
  const active = new Map<number, Outcome>();
  for (const entry of ledger) {
    const key = lotIndex(entry.round, entry.lot);
    if (entry.kind === 'VOID') active.delete(key);
    else active.set(key, entry);
  }
  return active;
}

/** After appending `kind` at `position` (0-based), each later lot must still fit one outcome. */
export function hasCapacity(position: number, length: number, kind: LedgerEntry['kind']): boolean {
  const remaining = TOTAL_LOTS - 1 - position;
  return length + 1 + remaining + (kind === 'VOID' ? 1 : 0) <= LEDGER_CAPACITY;
}
