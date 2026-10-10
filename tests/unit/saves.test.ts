// RQ-08, RQ-14, RQ-16, RQ-17: legacy schema-3 backups from 4.1.0-dev.1 import; invariants reject tampering.
import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { makeBackup, parseBackup, passiveCopy, MAX_BACKUP_CHARS, type BackupRole } from '../../source/domain/backup.ts';
import { DomainError } from '../../source/domain/errors.ts';
import { instructorForSave, validateInstructor, validateStudent } from '../../source/domain/saves.ts';

const DIR = new URL('../fixtures/legacy/', import.meta.url);
const fixture = (name: string) => readFileSync(new URL(`${name}.json`, DIR), 'utf8');
const files = readdirSync(DIR).filter(f => f.endsWith('.json')).map(f => f.slice(0, -5));
const roleOf = (name: string): BackupRole => name.startsWith('instructor') ? 'INSTRUCTOR' : 'STUDENT';
const validatorOf = (role: BackupRole): ((raw: unknown) => object) => role === 'INSTRUCTOR' ? validateInstructor : validateStudent;
const code = (fn: () => unknown) => { try { fn(); } catch (e) { return e instanceof DomainError ? e.code : String(e); } return 'no error'; };

describe('legacy 4.1.0-dev.1 backups import (RQ-17, MPES §8.8)', () => {
  it('has fixtures for both roles and every save-relevant phase', () => {
    expect(files.length).toBeGreaterThanOrEqual(10);
  });
  it.each(files)('%s imports and round-trips unchanged', name => {
    const role = roleOf(name);
    const state = parseBackup(fixture(name), role, validatorOf(role));
    const again = parseBackup(makeBackup(role, role === 'INSTRUCTOR' ? instructorForSave(state as never) : state, '5.0.0'), role, validatorOf(role));
    expect(again).toEqual(role === 'INSTRUCTOR' ? instructorForSave(state as never) : state);
  });
  it('reconstructs the maximum 210-entry ledger', () => {
    const state = parseBackup(fixture('instructor-max-ledger'), 'INSTRUCTOR', validateInstructor);
    expect(state.ledger).toHaveLength(210);
    expect(state.phase).toBe('build');
  });
  it('restores an open, paused lot with its leader', () => {
    const state = parseBackup(fixture('instructor-auction-open-paused'), 'INSTRUCTOR', validateInstructor);
    expect(state.open).toBe(true);
    expect(state.pausedRemaining).not.toBeNull();
    expect(state.leader).not.toBeNull();
  });
  it('keeps French text, emoji and repeated spaces exactly', () => {
    const state = parseBackup(fixture('student-planning-fr'), 'STUDENT', validateStudent);
    expect(state.plan).toBe('Priorité : treuil + radio 📻\n\n  deux  espaces');
    expect(state.lang).toBe('fr');
  });
  it('accepts a mixed-case envelope code and any key order', () => {
    const a = parseBackup(fixture('student-closed'), 'STUDENT', validateStudent);
    const b = parseBackup(fixture('student-closed-mixedcase'), 'STUDENT', validateStudent);
    expect(b).toEqual(a);
    expect(b.sessionCode).toBe(b.sessionCode.toUpperCase());
  });
});

describe('backup envelope rejections (RQ-16)', () => {
  const raw = fixture('student-auction');
  it('rejects the wrong role, bad JSON, extra keys, other rulesets and oversize text', () => {
    expect(code(() => parseBackup(raw, 'INSTRUCTOR', validateInstructor))).toBe('backup-role');
    expect(code(() => parseBackup('{', 'STUDENT', validateStudent))).toBe('backup-json');
    const env = JSON.parse(raw);
    expect(code(() => parseBackup(JSON.stringify({ ...env, extra: 1 }), 'STUDENT', validateStudent))).toBe('backup-format');
    expect(code(() => parseBackup(JSON.stringify({ ...env, ruleset: 'OTHER' }), 'STUDENT', validateStudent))).toBe('backup-format');
    expect(code(() => parseBackup(JSON.stringify({ ...env, version: 2 }), 'STUDENT', validateStudent))).toBe('backup-format');
    expect(code(() => parseBackup(JSON.stringify({ ...env, sessionCode: 'SEA3-T3-FFFFFFFFFFFFFFFF' }), 'STUDENT', validateStudent))).toBe('backup-session');
    expect(code(() => parseBackup(' '.repeat(MAX_BACKUP_CHARS + 1), 'STUDENT', validateStudent))).toBe('backup-size');
  });
  it('rejects private keys of the other role (privacy, RQ-14)', () => {
    const env = JSON.parse(raw);
    expect(code(() => parseBackup(JSON.stringify({ ...env, state: { ...env.state, marketSeed: '0'.repeat(32) } }), 'STUDENT', validateStudent))).toBe('backup-role');
    const inst = JSON.parse(fixture('instructor-planning'));
    expect(code(() => parseBackup(JSON.stringify({ ...inst, state: { ...inst.state, plan: 'x' } }), 'INSTRUCTOR', validateInstructor))).toBe('backup-role');
  });
  it('never executes accessors or toJSON hooks and rejects cycles', () => {
    let called = false;
    const hostile = { get x() { called = true; return 1; } };
    expect(code(() => passiveCopy(hostile))).toBe('invalid-state');
    expect(code(() => passiveCopy({ toJSON: () => { called = true; } }))).toBe('invalid-state');
    const cycle: Record<string, unknown> = {}; cycle.self = cycle;
    expect(code(() => passiveCopy(cycle))).toBe('invalid-state');
    expect(code(() => passiveCopy(new Date()))).toBe('invalid-state');
    expect(called).toBe(false);
  });
});

type Mutation = [string, (s: Record<string, any>) => void];
function rejects(name: string, validate: (raw: unknown) => unknown, mutations: Mutation[]) {
  const state = JSON.parse(fixture(name)).state;
  expect(() => validate(state)).not.toThrow();
  it.each(mutations)(`${name}: rejects %s`, (_label, mutate) => {
    const copy = structuredClone(state);
    mutate(copy);
    expect(code(() => validate(copy))).not.toBe('no error');
  });
}

describe('instructor invariants (RQ-08, MPES §8.3)', () => {
  rejects('instructor-closed', validateInstructor, [
    ['tampered market order', s => { [s.market[0][0], s.market[1][0]] = [s.market[1][0], s.market[0][0]]; }],
    ['changed seed', s => { s.marketSeed = 'F'.repeat(32); }],
    ['off-step sale price', s => { const e = s.ledger.find((x: any) => x.kind === 'SALE'); e.price += 1; }],
    ['seq gap', s => { s.ledger[3].seq = 99; }],
    ['seq mismatch', s => { s.seq += 1; }],
    ['purchase not in ledger', s => { s.teams[0].purchases.pop(); }],
    ['duplicate sale on a lot', s => { const e = s.ledger.find((x: any) => x.kind === 'SALE'); s.ledger.push({ ...e, seq: s.ledger.length + 1 }); s.seq += 1; }],
    ['void without reason', s => { const v = s.ledger.find((x: any) => x.kind === 'VOID'); v.reason = '  '; }],
    ['void of wrong entry', s => { const v = s.ledger.find((x: any) => x.kind === 'VOID'); v.ref += 1; }],
    ['unlocked mission after auction', s => { s.teams[0].lockedMission = null; }],
    ['wrong team count', s => { s.teams.pop(); }],
    ['unknown key', s => { s.extra = true; }],
    ['bad phase', s => { s.phase = 'finished'; }],
    ['session code team count mismatch', s => { s.teamCount = 4; }],
    ['practice flags outside practice', s => { s.practice.revealed = true; }],
    ['negative profit', s => { s.teams[0].profit = -1; }],
    ['bid seconds out of range', s => { s.bidSeconds = 5; }],
    ['card from the wrong slot', s => { s.ledger[0].card = 'SE-A'; }],
  ]);
  rejects('instructor-auction-open-paused', validateInstructor, [
    ['open lot that already has an outcome', s => { s.ledger.push({ seq: s.ledger.length + 1, kind: 'UNSOLD', round: s.round + 1, lot: s.lot + 1, card: s.market[s.round][s.lot].id, team: null, price: null }); s.seq += 1; }],
    ['missing earlier outcome', s => { s.lot += 3; }],
    ['leader without bid', s => { s.currentBid = null; }],
    ['off-step current bid', s => { s.currentBid += 1; }],
  ]);
  rejects('instructor-planning', validateInstructor, [
    ['ledger before auction', s => { s.ledger = [{ seq: 1, kind: 'UNSOLD', round: 1, lot: 1, card: s.market[0][0].id, team: null, price: null }]; s.seq = 1; }],
    ['locked before auction', s => { s.vehiclesLocked = true; }],
  ]);
});

describe('student invariants (RQ-14, MPES §8.4)', () => {
  rejects('student-auction', validateStudent, [
    ['third win in a round', s => { const p = s.team.purchases[0]; s.team.purchases.push({ ...p, id: 'SE-U', lot: 9, instance: `R${p.round}-L9-SE-U`, start: 20000000, paid: 20000000, cat: 'SE_PROCESS', e: { SA: 1 } }, { ...p, id: 'SE-T', lot: 10, instance: `R${p.round}-L10-SE-T`, start: 20000000, paid: 20000000, cat: 'SE_PROCESS', e: { MOB: 10 } }); }],
    ['duplicate card', s => { s.team.purchases.push({ ...s.team.purchases[0] }); }],
    ['off-step paid price', s => { s.team.purchases[0].paid += 100; }],
    ['team id beyond count', s => { s.teamId = 9; s.team.id = 9; }],
    ['mission not locked in auction', s => { s.lockedMission = null; }],
    ['oversized plan', s => { s.plan = 'x'.repeat(1201); }],
    ['bad scratch key', s => { s.scratch['8-1'] = { wtp: '', note: '' }; }],
    ['current card in wrong slot', s => { s.currentCard.instance = 'R1-L1-CAP-A'; }],
    ['market leaked into student state', s => { s.market = []; }],
    ['practice win outside practice', s => { s.practiceWon = true; }],
  ]);
});
