// Passive copying and the backup envelope v1 (MPES §8.6).
import { DECK, RULESET } from './data.ts';
import { DomainError, ensure, fail } from './errors.ts';
import { parseSessionCode } from './session.ts';

export const BACKUP_FORMAT = 'SEA-GAME-BACKUP';
export const BACKUP_VERSION = 1;
export const MAX_BACKUP_CHARS = 500_000;
export const MAX_BACKUP_BYTES = 1_500_000;
export type BackupRole = 'INSTRUCTOR' | 'STUDENT';
const ENVELOPE_KEYS = ['appVersion', 'deck', 'format', 'role', 'ruleset', 'schema', 'sessionCode', 'state', 'version'];
export const FORBIDDEN_KEYS: Readonly<Record<BackupRole, readonly string[]>> = {
  STUDENT: ['market', 'marketSeed', 'teams', 'ledger', 'privateEntry', 'resultDraft', 'leader', 'currentBid'],
  INSTRUCTOR: ['team', 'teamId', 'scratch', 'plan', 'planBaseline', 'risks', 'profitInput', 'maxWtpCents', 'vehicleConfirmed'],
};

/**
 * Copy plain JSON-like data through own data descriptors only. Accessors, toJSON hooks, symbols,
 * cycles, non-finite numbers, depth over 32 and oversized structures are rejected, never executed.
 */
export function passiveCopy(value: unknown): unknown {
  let budget = MAX_BACKUP_CHARS;
  const active = new Set<object>();
  const copy = (input: unknown, depth: number): unknown => {
    if (--budget < 0 || depth > 32) fail('invalid-state', 'too large');
    if (input === null || typeof input === 'boolean') return input;
    if (typeof input === 'string') { budget -= input.length; if (budget < 0) fail('invalid-state', 'too large'); return input; }
    if (typeof input === 'number') { ensure(Number.isFinite(input)); return input; }
    if (typeof input !== 'object' || active.has(input)) fail('invalid-state', 'not plain data');
    const proto = Object.getPrototypeOf(input) as object | null;
    ensure(proto === null || proto === Object.prototype || proto === Array.prototype, 'invalid-state', 'prototype');
    const descriptors = Object.getOwnPropertyDescriptors(input);
    active.add(input);
    try {
      if (Array.isArray(input)) {
        ensure(input.length <= MAX_BACKUP_CHARS);
        for (const key of Reflect.ownKeys(descriptors)) {
          if (key !== 'length') ensure(typeof key === 'string' && /^(0|[1-9]\d*)$/.test(key) && Number(key) < input.length);
        }
        const result: unknown[] = [];
        for (let i = 0; i < input.length; i++) {
          const d = descriptors[String(i)];
          ensure(d && 'value' in d, 'invalid-state', 'sparse or accessor');
          result.push(d.value === undefined ? null : copy(d.value, depth + 1));
        }
        return result;
      }
      const result: Record<string, unknown> = {};
      for (const key of Reflect.ownKeys(descriptors)) {
        ensure(typeof key === 'string' && key !== 'toJSON' && key !== '__proto__', 'invalid-state', 'key');
        const d = descriptors[key]!;
        ensure('value' in d, 'invalid-state', 'accessor');
        if (d.value === undefined || !d.enumerable) continue;
        budget -= key.length;
        result[key] = copy(d.value, depth + 1);
      }
      return result;
    } finally {
      active.delete(input);
    }
  };
  return copy(value, 0);
}

function stateFor(value: unknown, role: BackupRole, envelopeCode?: unknown): Record<string, unknown> {
  ensure(value !== null && typeof value === 'object' && !Array.isArray(value), 'backup-format');
  const state = value as Record<string, unknown>;
  ensure(state.schema === 3, 'backup-format');
  if (FORBIDDEN_KEYS[role].some(key => Object.hasOwn(state, key))) fail('backup-role');
  const code = parseSessionCode(state.sessionCode).code;
  if (envelopeCode !== undefined && parseSessionCode(envelopeCode).code !== code) fail('backup-session');
  return { ...state, sessionCode: code };
}

export function makeBackup(role: BackupRole, state: unknown, appVersion: string): string {
  ensure(appVersion.length <= 40, 'invalid-state');
  const copy = stateFor(passiveCopy(state), role);
  const raw = JSON.stringify({ format: BACKUP_FORMAT, version: BACKUP_VERSION, appVersion, ruleset: RULESET, deck: DECK, schema: 3, sessionCode: copy.sessionCode, role, state: copy });
  if (raw.length > MAX_BACKUP_CHARS) fail('backup-size');
  return raw;
}

/** Decode inert bounded JSON, check the envelope and role, then run the role validator. */
export function parseBackup<T>(raw: string, role: BackupRole, validate: (state: unknown) => T): T {
  if (raw.length > MAX_BACKUP_CHARS) fail('backup-size');
  let parsed: unknown;
  try { parsed = JSON.parse(raw); } catch { fail('backup-json'); }
  ensure(parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed), 'backup-format');
  const envelope = parsed as Record<string, unknown>;
  const keys = Object.keys(envelope).sort();
  ensure(keys.length === ENVELOPE_KEYS.length && keys.every((key, i) => key === ENVELOPE_KEYS[i]), 'backup-format');
  ensure(envelope.format === BACKUP_FORMAT && envelope.version === BACKUP_VERSION && envelope.schema === 3
    && envelope.ruleset === RULESET && envelope.deck === DECK
    && typeof envelope.appVersion === 'string' && envelope.appVersion.length <= 40, 'backup-format');
  if (envelope.role !== role) fail(envelope.role === 'INSTRUCTOR' || envelope.role === 'STUDENT' ? 'backup-role' : 'backup-format');
  const state = stateFor(envelope.state, role, envelope.sessionCode);
  try {
    return validate(state);
  } catch (error) {
    if (error instanceof DomainError && error.code.startsWith('backup-')) throw error;
    throw new DomainError('invalid-state', error instanceof Error ? error.message : 'state');
  }
}
