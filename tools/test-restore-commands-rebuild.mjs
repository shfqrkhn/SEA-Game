// Actual controller boundaries plus independent reset/recovery expectations; no generated writes.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { fileURLToPath } from 'node:url';
import { build } from '../samples/threejs-recovery/node_modules/esbuild/lib/main.js';
const root = fileURLToPath(new URL('../', import.meta.url));
const output = await build({ stdin: { contents: "export * from './source/domain/runtime';", resolveDir: root, loader: 'ts' }, bundle: true, platform: 'browser', format: 'iife', globalName: 'SEADomain', write: false, logLevel: 'silent' });
const payload = output.outputFiles[0].text;
const engine = readFileSync(new URL('../source/shared/engine.js', import.meta.url), 'utf8').replace(/\/\/ BEGIN TYPED DOMAIN[^\n]*\n[\s\S]*?\/\/ END TYPED DOMAIN\n/, () => payload + '\n');
const d = runInNewContext(payload + '\nSEADomain');
const seed = '0123456789ABCDEF0123456789ABCDEF', code = 'SEA3-T2-0123456789ABCDEF', market = JSON.parse(JSON.stringify(d.marketFromSeed(seed)));
const teacher = () => ({ schema: 3, phase: 'closed', lang: 'fr', sessionCode: code, teamCount: 2, round: 6, lot: 9, vehiclesLocked: true, marketSeed: seed, market: structuredClone(market),
  teams: JSON.parse(JSON.stringify(d.createTeams(2))).map(team => ({ ...team, mission: 'COMBAT', lockedMission: 'COMBAT' })), revealMode: 'ROUND', timingMode: 'UNTIMED', bidSeconds: 30,
  revealed: true, open: false, pausedRemaining: null, deadline: null, leader: null, currentBid: null,
  ledger: market.flat().map((card, i) => ({ seq: i + 1, kind: 'UNSOLD', round: card.round, lot: card.lot, card: card.id, team: null, price: null })), seq: 70,
  practice: { revealed: false, open: false, leader: false, closed: false }, privateEntry: false, resultDraft: null });
const companion = () => ({ schema: 3, phase: 'closed', lang: 'fr', sessionCode: code, teamCount: 2, round: 6, lot: 9, teamId: 1,
  team: { ...JSON.parse(JSON.stringify(d.createTeams(2)))[0], mission: 'TROOP', lockedMission: 'TROOP' }, vehicleConfirmed: true, lockedMission: 'TROOP', currentCard: null,
  plan: 'Plan privé', planBaseline: 'Plan privé', risks: 'Risques privés', maxWtpCents: 85000000, scratch: { '1-1': { wtp: '300000', note: 'Décision privée' } },
  profitMode: 'AMOUNT', profitInput: '100000.25', profitCents: 10000025, practiceWon: false, vehicleChangeNotice: false });
function extract(source, name) {
  const start = source.indexOf('function ' + name + '('), end = source.indexOf('\n}', start);
  assert.ok(start >= 0 && end > start, name + ' actual source function found');
  return source.slice(start, end + 2);
}
function harness(role, changes = {}, { downloadFails = false, storageFails = false } = {}) {
  const state = role === 'INSTRUCTOR' ? teacher() : companion();
  const source = readFileSync(new URL('../source/' + role.toLowerCase() + '.js', import.meta.url), 'utf8');
  const fields = Object.fromEntries(['#teamCount', '#bidSeconds', '#revealMode', '#timingMode', '#sessionInput', '#teamSelect', '#joinStatus'].map(id => [id, { value: id === '#teamCount' ? '4' : id === '#bidSeconds' ? '45' : id === '#revealMode' ? 'MANUAL' : id === '#timingMode' ? 'UNTIMED' : '', innerHTML: '', textContent: '', className: '' }]));
  Object.assign(fields, changes);
  const calls = { effects: [], statuses: [], pending: null, approved: false }, stored = new Map();
  const context = { state, lang: 'fr', STORE_KEY: 'SEA_' + role + '_V300', backupImportGeneration: 7, pendingBackupImport: null, storageFailed: false, recoveryBlocked: false,
    $: id => fields[id], t: key => key, backupStatus: key => calls.statuses.push(key), storageNotice: key => calls.statuses.push(key), Date: { now: () => 10000 },
    seaConfirmGate(key, message, callback) { if (calls.approved) { calls.approved = false; return true; } calls.pending = callback; return false; },
    saveBackupDownload(raw, suffix) { calls.effects.push(['download', suffix, raw]); if (downloadFails) throw Error('download'); },
    sessionStorage: { setItem(key, raw) { calls.effects.push(['store', key, raw]); if (storageFails) throw Error('denied'); stored.set(key, raw); }, removeItem(key) { calls.effects.push(['remove', key]); if (storageFails) throw Error('denied'); stored.delete(key); }, getItem: key => stored.get(key) ?? null },
    stopTimer() { calls.effects.push(['stop']); }, phase(p) { calls.effects.push(['phase', p]); }, renderAll() { calls.effects.push(['render']); }, saveState() { calls.effects.push(['save']); return !storageFails; }, populateTeamSelect() {} };
  const functions = ['resetClosedSession', 'startNewSession', 'commitBackupImport', 'restoreState', 'restorePreviousBackup'].map(name => extract(source, name)).join('\n') + '\nasync ' + extract(source, 'readBackupFile');
  const api = runInNewContext(engine + '\n' + functions + '\n({startNewSession,commitBackupImport,restoreState,restorePreviousBackup,readBackupFile,getState:()=>state})', context);
  return { api, context, state, calls, fields, stored };
}
for (const role of ['INSTRUCTOR', 'STUDENT']) {
  const malformed = harness(role); (role === 'INSTRUCTOR' ? malformed.state.teams[0] : malformed.state.team).cost = 1;
  const malformedBefore = JSON.stringify(malformed.state);
  assert.equal(malformed.api.startNewSession(), false);
  assert.equal(malformed.calls.pending, null, role + ' malformed live cost rejected before confirmation');
  assert.equal(JSON.stringify(malformed.state), malformedBefore); assert.deepEqual(malformed.calls.effects, []);
  const good = harness(role), before = JSON.stringify(good.state);
  assert.equal(good.api.startNewSession(), false); assert.deepEqual(good.calls.effects, []); assert.equal(JSON.stringify(good.state), before);
  assert.equal(good.calls.pending(), true); const fresh = good.api.getState();
  assert.equal(fresh.phase, 'setup'); assert.equal(fresh.lang, 'fr'); assert.equal(fresh.sessionCode, null);
  const download = good.calls.effects.find(e => e[0] === 'download'); assert.equal(download[1], 'pre-reset');
  assert.equal(JSON.parse(download[2]).role, role); assert.equal(JSON.parse(download[2]).state.phase, 'closed');
  assert.ok(good.calls.effects.findIndex(e => e[0] === 'download') < good.calls.effects.findIndex(e => e[0] === 'remove'));
  assert.ok(good.stored.has('SEA_' + role + '_V300_PRE_IMPORT'));
  if (role === 'INSTRUCTOR') { assert.equal(fresh.teamCount, 4); assert.equal(fresh.bidSeconds, 45); assert.equal(fresh.revealMode, 'MANUAL'); assert.equal(fresh.timingMode, 'UNTIMED'); assert.deepEqual(JSON.parse(JSON.stringify(fresh.teams)), []); }
  else { assert.equal(fresh.team, null); assert.equal(fresh.plan, ''); assert.equal(fresh.profitCents, 25000000); assert.equal(fresh.maxWtpCents, 85000000); }
  for (const failure of [{ downloadFails: true }, { storageFails: true }]) { const h = harness(role, {}, failure); h.api.startNewSession(); const result = h.calls.pending(); assert.equal(result, !failure.downloadFails); assert.equal(h.api.getState().phase, failure.downloadFails ? 'closed' : 'setup'); }
  const stale = harness(role); stale.api.startNewSession(); stale.state.lang = 'en'; assert.equal(stale.calls.pending(), false); assert.deepEqual(stale.calls.effects, []);
  const replacement = harness(role); replacement.api.startNewSession(); replacement.context.state = structuredClone(replacement.state); assert.equal(replacement.calls.pending(), false); assert.deepEqual(replacement.calls.effects, []);
}
for (const [id, invalid] of [['#revealMode', 'SURPRISE'], ['#timingMode', 'FOREVER'], ['#teamCount', '1'], ['#bidSeconds', '9']]) {
  const h = harness('INSTRUCTOR', { [id]: { value: invalid } }), before = JSON.stringify(h.state);
  assert.equal(h.api.startNewSession(), false); assert.equal(h.calls.pending, null, 'Invalid reset option ' + id + ' rejected before confirmation');
  assert.equal(JSON.stringify(h.state), before); assert.deepEqual(h.calls.effects, []);
}
console.log('Actual closed reset validation, predecessor backup order, stale identity, storage-denied continuation PASS');
const freeze = value => { if (value && typeof value === 'object') { Object.values(value).forEach(freeze); Object.freeze(value); } return value; };
for (const role of ['INSTRUCTOR', 'STUDENT']) {
  const current = freeze(role === 'INSTRUCTOR' ? teacher() : companion()), candidate = freeze(role === 'INSTRUCTOR' ? { ...teacher(), lang: 'en' } : { ...companion(), lang: 'en' });
  const prepare = (raw, next) => role === 'INSTRUCTOR' ? d.instructorPrepareRestore(raw, next, 10000) : d.studentPrepareRestore(raw, next);
  const prepared = prepare(current, candidate), currentBefore = JSON.stringify(current), candidateBefore = JSON.stringify(candidate);
  assert.equal(prepared.next.lang, 'en'); assert.equal(prepared.previous.lang, 'fr');
  assert.notEqual(prepared.next, candidate); assert.notEqual(prepared.previous, current);
  assert.equal(JSON.stringify(current), currentBefore); assert.equal(JSON.stringify(candidate), candidateBefore);
  const h = harness(role), before = JSON.stringify(h.state);
  h.context.pendingBackupImport = { token: 7, candidate: structuredClone(candidate), before, original: h.state };
  assert.equal(h.api.commitBackupImport(7), false); assert.deepEqual(h.calls.effects, []);
  h.calls.approved = true; assert.equal(h.calls.pending(), true); assert.equal(h.api.getState().lang, 'en');
  const backup = h.calls.effects.find(e => e[0] === 'download'); assert.equal(backup[1], 'pre-import'); assert.equal(JSON.parse(backup[2]).state.lang, 'fr');
  assert.ok(h.calls.effects.findIndex(e => e[0] === 'download') < h.calls.effects.findIndex(e => e[0] === 'save'));
  for (const bad of ['candidate', 'current', 'generation']) {
    const invalid = harness(role), initial = JSON.stringify(invalid.state), next = structuredClone(candidate);
    if (bad === 'candidate') next.schema = 4;
    if (bad === 'current') (role === 'INSTRUCTOR' ? invalid.state.teams[0] : invalid.state.team).cost = 1;
    invalid.context.pendingBackupImport = { token: 7, candidate: next, before: JSON.stringify(invalid.state), original: invalid.state };
    if (bad === 'generation') invalid.context.backupImportGeneration = 8;
    const unchanged = JSON.stringify(invalid.state); assert.equal(invalid.api.commitBackupImport(7), false);
    assert.equal(invalid.calls.pending, null); assert.deepEqual(invalid.calls.effects, []); assert.equal(JSON.stringify(invalid.state), unchanged);
    if (bad !== 'current') assert.equal(JSON.stringify(invalid.state), initial);
  }
  const stale = harness(role); stale.context.pendingBackupImport = { token: 7, candidate: structuredClone(candidate), before: JSON.stringify(stale.state), original: stale.state };
  stale.api.commitBackupImport(7); stale.context.state = structuredClone(stale.state); stale.calls.approved = true;
  assert.equal(stale.calls.pending(), false); assert.deepEqual(stale.calls.effects, []); assert.deepEqual(stale.calls.statuses, ['backup.changed']);
  const changedCandidate = harness(role); changedCandidate.context.pendingBackupImport = { token: 7, candidate: structuredClone(candidate), before: JSON.stringify(changedCandidate.state), original: changedCandidate.state };
  changedCandidate.api.commitBackupImport(7); changedCandidate.context.pendingBackupImport.candidate.schema = 4; changedCandidate.calls.approved = true;
  assert.equal(changedCandidate.calls.pending(), false); assert.deepEqual(changedCandidate.calls.effects, []); assert.deepEqual(changedCandidate.calls.statuses, ['backup.invalid']);
  const empty = role === 'INSTRUCTOR' ? d.instructorPrepareClosedReset(current, { teamCount: 4, bidSeconds: 45, revealMode: 'MANUAL', timingMode: 'UNTIMED' }).next : d.studentPrepareClosedReset(current).next;
  assert.equal(prepare(empty, candidate).previous, null, 'Canonical empty shell does not masquerade as active save');
  const startup = harness(role); startup.context.state = structuredClone(empty); startup.stored.set('SEA_' + role + '_V300', JSON.stringify(candidate));
  assert.equal(startup.api.restoreState(), true); assert.equal(startup.api.getState().lang, 'en'); assert.deepEqual(startup.calls.effects, []);
  const malformedStartup = harness(role); malformedStartup.context.state = structuredClone(empty); malformedStartup.stored.set('SEA_' + role + '_V300', '{');
  assert.equal(malformedStartup.api.restoreState(), false); assert.equal(malformedStartup.api.getState().sessionCode, null); assert.equal(malformedStartup.context.recoveryBlocked, true);
  assert.equal(malformedStartup.stored.get('SEA_' + role + '_V300'), '{'); assert.deepEqual(malformedStartup.calls.effects, []);
  assert.throws(() => prepare({ ...empty, unexpected: 'directive' }, candidate));
  const hook = Object.defineProperty(structuredClone(candidate), 'lang', { get() { throw Error('hook executed'); }, enumerable: true });
  assert.throws(() => prepare(current, hook), /invalid-state/);
}
const open = { ...teacher(), phase: 'auction', round: 0, lot: 0, ledger: [], seq: 0, timingMode: 'TIMED', open: true, deadline: 15000, privateEntry: true, leader: 1, currentBid: market[0][0].start };
for (const [deadline, remaining, expected] of [[15000, null, 5000], [5000, null, 0], [15000, 1234, 1234]]) {
  const next = d.instructorPrepareRestore(teacher(), { ...open, deadline, pausedRemaining: remaining }, 10000).next;
  assert.equal(next.pausedRemaining, expected); assert.equal(next.privateEntry, false); assert.equal(next.leader, 1); assert.equal(next.currentBid, market[0][0].start);
}
for (const now of [NaN, Infinity, -1, 1.5]) assert.throws(() => d.instructorPrepareRestore(teacher(), open, now));
const changedOptions = harness('INSTRUCTOR'); changedOptions.api.startNewSession(); changedOptions.fields['#revealMode'].value = 'JIT';
assert.equal(changedOptions.calls.pending(), false); assert.deepEqual(changedOptions.calls.effects, []); assert.deepEqual(changedOptions.calls.statuses, ['backup.changed']);
console.log('Actual validated import boundaries, generation/stale/candidate guards, canonical empty shells, frozen detached data and paused/private recovery PASS');
for (const role of ['INSTRUCTOR', 'STUDENT']) for (const action of ['startNewSession', 'readBackupFile', 'restorePreviousBackup']) for (const hook of ['getter', 'toJSON']) {
  const h = harness(role); let hooks = 0, fileReads = 0;
  if (hook === 'getter') Object.defineProperty(h.state, 'phase', { get() { hooks++; return 'closed'; }, enumerable: true });
  else h.state.toJSON = () => { hooks++; return {}; };
  if (action === 'readBackupFile') await h.api.readBackupFile({ size: 10, text() { fileReads++; return Promise.resolve('{}'); } });
  else h.api[action]();
  assert.equal(hooks, 0, role + ' ' + action + ' rejects passive hook without invoking it'); assert.equal(fileReads, 0);
  assert.equal(h.calls.pending, null); assert.deepEqual(h.calls.effects, []);
}
for (const role of ['INSTRUCTOR', 'STUDENT']) {
  const h = harness(role), candidate = role === 'INSTRUCTOR' ? teacher() : companion();
  h.context.pendingBackupImport = { token: 7, candidate, before: JSON.stringify(h.state), original: h.state };
  h.api.commitBackupImport(7); let hooks = 0; Object.defineProperty(h.state, 'phase', { get() { hooks++; return 'closed'; }, enumerable: true }); h.calls.approved = true;
  assert.equal(h.calls.pending(), false); assert.equal(hooks, 0); assert.deepEqual(h.calls.effects, []);
  const failure = harness(role); failure.context.pendingBackupImport = { token: 7, candidate, before: JSON.stringify(failure.state), original: failure.state };
  failure.api.commitBackupImport(7); failure.context.makeBackup = () => { throw Error('preservation failed'); }; failure.calls.approved = true;
  assert.equal(failure.calls.pending(), false); assert.equal(failure.api.getState(), failure.state); assert.deepEqual(failure.calls.effects, []); assert.deepEqual(failure.calls.statuses, ['backup.failed']);
}
console.log('Actual read/reset/previous/import callbacks reject serializer/accessor hooks without execution; failed preservation never replaces or writes PASS');
