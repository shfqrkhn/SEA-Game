// Independent role/privacy/edit expectations; generated engine integration is checked separately.
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { build } from '../samples/threejs-recovery/node_modules/esbuild/lib/main.js';
const root = fileURLToPath(new URL('../', import.meta.url));
const output = await build({ stdin: { contents: "export * from './source/domain/index';", resolveDir: root, loader: 'ts' }, bundle: true, platform: 'node', format: 'esm', write: false, logLevel: 'silent' });
const d = await import('data:text/javascript;base64,' + Buffer.from(output.outputFiles[0].text).toString('base64'));
const seed = '0123456789ABCDEF0123456789ABCDEF', market = d.marketFromSeed(seed);
const instructor = () => ({ schema: 3, phase: 'build', lang: 'fr', sessionCode: 'SEA3-T2-0123456789ABCDEF', teamCount: 2,
  round: 6, lot: 9, vehiclesLocked: true, marketSeed: seed, market: structuredClone(market),
  teams: d.createTeams(2).map(team => ({ ...team, mission: 'COMBAT', lockedMission: 'COMBAT' })),
  revealMode: 'ROUND', timingMode: 'UNTIMED', bidSeconds: 30, revealed: true, open: false, pausedRemaining: null, deadline: null,
  leader: null, currentBid: null, ledger: market.flat().map((card, i) => ({ seq: i + 1, kind: 'UNSOLD', round: card.round, lot: card.lot, card: card.id, team: null, price: null })),
  seq: 70, practice: { revealed: false, open: false, leader: false, closed: false }, privateEntry: false, resultDraft: null });
const student = () => ({ schema: 3, phase: 'auction', lang: 'fr', sessionCode: 'SEA3-T2-0123456789ABCDEF', teamCount: 2,
  round: 0, lot: 0, teamId: 1, team: { ...d.createTeams(2)[0], mission: 'COMBAT', lockedMission: 'COMBAT' },
  vehicleConfirmed: true, lockedMission: 'COMBAT', currentCard: null, plan: 'Plan privé', planBaseline: 'Plan privé', risks: 'Risques privés',
  maxWtpCents: 85000000, scratch: { '2-4': { wtp: '500000', note: 'Note indépendante' } }, profitMode: 'AMOUNT', profitInput: '250000', profitCents: 25000000,
  practiceWon: false, vehicleChangeNotice: false });
const freeze = value => { if (value && typeof value === 'object') { Object.values(value).forEach(freeze); Object.freeze(value); } return value; };
const rejection = (state, command) => { const before = JSON.stringify(state); assert.throws(command); assert.equal(JSON.stringify(state), before, 'Rejected command never changes input'); };
let teacher = freeze(instructor());
assert.deepEqual(d.instructorOpenSubmissions(teacher), { phase: 'submit', privateEntry: false });
teacher = { ...teacher, phase: 'submit' };
rejection(teacher, () => d.instructorSetProfit(teacher, 1, '1234.56'));
rejection(teacher, () => d.instructorSetSubmitted(teacher, 1, true));
assert.deepEqual(d.instructorAuthorizePrivateEntry(teacher), { privateEntry: true });
teacher = freeze({ ...teacher, privateEntry: true });
const profits = d.instructorSetProfit(teacher, 1, '1234,56');
assert.equal(profits.teams[0].profit, 123456); assert.equal(profits.teams[1].profit, 0);
assert.equal(profits.teams[0].submitted, false); assert.equal(teacher.teams[0].profit, 0);
assert.deepEqual(profits.teams.map(team => team.purchases), [[], []]);
const submitted = d.instructorSetSubmitted(teacher, 2, true);
assert.equal(submitted.teams[1].submitted, true); assert.equal(submitted.teams[0].submitted, false);
assert.equal(teacher.teams[1].submitted, false);
assert.deepEqual(d.instructorCloseSubmissions(teacher), { phase: 'debrief', privateEntry: false }, 'Explicit pending-team confirmation remains a UI authority');
assert.deepEqual(d.instructorCloseRoom({ ...teacher, phase: 'debrief' }), { phase: 'closed', privateEntry: false });
for (const phase of ['setup', 'auction', 'debrief', 'closed']) {
  const bad = { ...teacher, phase }; rejection(bad, () => d.instructorSetProfit(bad, 1, '1'));
}
for (const id of [0, 3, 1.5, '1', null]) rejection(teacher, () => d.instructorSetSubmitted(teacher, id, true));
for (const value of [1, 'true', null]) rejection(teacher, () => d.instructorSetSubmitted(teacher, 1, value));
const incomplete = { ...teacher, ledger: teacher.ledger.slice(1), seq: 69 };
rejection(incomplete, () => d.instructorAuthorizePrivateEntry(incomplete));
const soldCard = market[0][0], overflow = instructor();
overflow.ledger[0] = { seq: 1, kind: 'SALE', round: 1, lot: 1, card: soldCard.id, team: 1, price: soldCard.start };
overflow.teams[0] = d.acquirePurchase(overflow.teams[0], soldCard, soldCard.start);
overflow.phase = 'submit'; overflow.privateEntry = true;
rejection(overflow, () => d.instructorSetProfit(overflow, 1, '90071992547409.91'));
const companion = freeze(student()), before = JSON.stringify(companion);
const note = d.studentEditScratch(companion, 'note', 'Décision privée');
assert.deepEqual(note.scratch['1-1'], { wtp: '', note: 'Décision privée' });
assert.deepEqual(note.scratch['2-4'], { wtp: '500000', note: 'Note indépendante' });
const wtp = d.studentEditScratch({ ...companion, ...note }, 'wtp', '000450000');
assert.deepEqual(wtp.scratch['1-1'], { wtp: '450000', note: 'Décision privée' });
assert.equal(JSON.stringify(companion), before);
for (const [field, input] of [['note', 'x'.repeat(601)], ['wtp', '450000.50'], ['note', {}], ['__proto__', 'x']]) rejection(companion, () => d.studentEditScratch(companion, field, input));
const buildState = freeze({ ...student(), phase: 'build' });
const added = d.studentAddMissingPurchase(buildState, ' cap-a ', 1, 1, '300000');
assert.equal(added.team.cost, 30000000); assert.equal(added.team.totals.CAP, 6); assert.equal(added.team.totals.MOB, -10);
assert.deepEqual(added.team.purchasesByRound, [1, 0, 0, 0, 0, 0, 0]);
assert.deepEqual(d.studentRemoveReconciledPurchase({ ...buildState, ...added }, 'R1-L1-CAP-A').team.purchases, []);
rejection(companion, () => d.studentAddMissingPurchase(companion, 'CAP-A', 1, 1, '300000'));
rejection(buildState, () => d.studentRemoveReconciledPurchase(buildState, 'missing'));
rejection(buildState, () => d.studentAddMissingPurchase(buildState, 'CAP-A', 1, 2, '300000'));
const inconsistent = { ...student(), team: { ...student().team, cost: 1 } };
rejection(inconsistent, () => d.studentEditScratch(inconsistent, 'note', 'x'));
const badPosition = { ...student(), currentCard: { ...market[0][0], round: 2 } };
rejection(badPosition, () => d.studentEditScratch(badPosition, 'note', 'x'));
let reads = 0;
const hooked = { ...student(), get scratch() { reads++; return {}; } };
assert.throws(() => d.studentEditScratch(hooked, 'note', 'x')); assert.equal(reads, 0);
console.log('Private submissions, bounded scratch editors, canonical build reconciliation, live consistency, frozen inputs and no hook/mutation PASS');
