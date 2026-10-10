// J1 + J3 + J5 + J7 (MPES §16.3): full English session, 2 teams, TIMED, JIT, all 70 lots, with
// pause/expiry/extend, unsold-with-leader, void and replacement, corrected sale, keyboard bidding,
// the two-win limit, reloads (open lot restores paused), a missed student purchase reconciled in build,
// private submissions, award and close. Every number is checked against the independent oracle.
import { expect, test, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { collectConsoleErrors, expectAccessible, gameUrl, guardNetwork } from './helpers.ts';
import { compliant, dollars, score, startCents, totals, winners, type OracleTeam } from './oracle.ts';
import { confirmDialog, instructorSetup, studentJoin } from './roles.ts';

test.setTimeout(600_000);

const TEAM1_LOTS: Record<number, number[]> = { 1: [1, 3], 2: [2, 4], 3: [2, 5], 4: [1, 6], 5: [2, 4], 6: [1, 6], 7: [1, 2] };
const TEAM2_LOTS = [7, 8];
const MISSED = '5-4';
const money = (text: string) => Math.round(Number(text.replace(/[$,]/g, '')) * 100);

async function outcome(ip: Page): Promise<{ team: number; cents: number } | null> {
  const text = (await ip.locator('#outcome').textContent())!;
  const match = /Team (\d+) for (\$[\d,.]+)/.exec(text);
  return match ? { team: Number(match[1]), cents: money(match[2]!) } : null;
}

test('J1/J3: full English timed session with every correction path', async ({ browser }, info) => {
  const ic = await browser.newContext(), sc = await browser.newContext({ acceptDownloads: true });
  const ip = await ic.newPage(), sp = await sc.newPage();
  const net = [guardNetwork(ip), guardNetwork(sp)], errors = [collectConsoleErrors(ip), collectConsoleErrors(sp)];
  await ip.clock.install();
  await ip.goto(gameUrl('?role=instructor&lang=en'));
  const code = await instructorSetup(ip, { teams: 2, reveal: 'JIT', timed: true, missions: ['TROOP', 'RECOVERY'] });
  await sp.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(sp, code, 1, 'TROOP');
  await sp.fill('#plan-plan', 'Capacity first, then protection.');
  await sp.check('#plan-confirm');
  await sp.click('#student-start-auction');
  await confirmDialog(sp);

  const teams: Record<number, OracleTeam> = {
    1: { mission: 'TROOP', cards: [], paidCents: 0, profitCents: 0, submitted: false },
    2: { mission: 'RECOVERY', cards: [], paidCents: 0, profitCents: 0, submitted: false },
  };
  let missed: { id: string; round: number; lot: number; cents: number } | null = null;

  for (let round = 1; round <= 7; round++) {
    for (let lot = 1; lot <= 10; lot++) {
      await expect(ip.locator('#lot-heading')).toHaveText(`Round ${round} · Lot ${lot} of 10`);
      const card = (await ip.locator('.card-figure[data-card]').getAttribute('data-card'))!;
      const start = startCents(card);
      const winner = TEAM1_LOTS[round]!.includes(lot) ? 1 : TEAM2_LOTS.includes(lot) ? 2 : 0;
      const at = `${round}-${lot}`;
      if (at === '1-1') {
        await ip.click('#open-bidding');
        await ip.click('#bid-2');
        await ip.click('#pause');
        await expect(ip.locator('#bid-1')).toBeDisabled();
        await ip.click('#resume');
        await ip.clock.fastForward('00:31');
        await expect(ip.locator('#timer')).toHaveText('Time is up.');
        await expect(ip.locator('#bid-1')).toBeDisabled();
        await ip.click('#extend');
        await expect(ip.locator('#bid-1')).toBeEnabled();
        await ip.click('#bid-1');
        await ip.click('#sell');
      } else if (at === '1-4') {
        await ip.click('#open-bidding');
        await expect(ip.locator('#bid-1')).toBeDisabled(); // Team 1 already won lots 1 and 3
        await ip.click('#bid-2');
        await ip.click('#unsold');
        await confirmDialog(ip);
      } else if (at === '2-2') {
        await ip.click('#open-bidding');
        await ip.click('#bid-1');
        await ip.click('#sell');
        await ip.click('#void');
        await ip.fill('#void-reason', 'Sold before final call');
        await confirmDialog(ip);
        await ip.click('#open-bidding');
        await ip.click('#bid-2');
        await ip.click('#bid-1');
        await ip.click('#sell');
      } else if (at === '3-1') {
        await ip.click('#open-bidding');
        await ip.click('#bid-1');
        await ip.reload(); // an open lot comes back paused for review
        await expect(ip.locator('#resume')).toBeVisible();
        await ip.click('#resume');
        await ip.click('#unsold');
        await confirmDialog(ip);
      } else if (at === '3-5') {
        await ip.click('#open-bidding');
        await ip.click('#bid-2');
        await ip.click('#correct');
        await ip.selectOption('#correct-team', '1');
        await ip.fill('#correct-price', String((start + 10_000_000) / 100));
        await ip.fill('#correct-reason', 'Team 1 bid was missed');
        await confirmDialog(ip);
      } else if (at === '4-1') {
        await ip.locator('body').press('o');
        await ip.locator('body').press('2');
        await ip.locator('body').press('1');
        await ip.locator('body').press('s');
      } else if (winner) {
        await ip.click('#open-bidding');
        if (winner === 1 && lot % 2 === 0) await ip.click('#bid-2'); // Team 2 still has capacity before lot 7
        await ip.click(`#bid-${winner}`);
        await ip.click('#sell');
      } else {
        await ip.click('#open-bidding');
        await ip.click('#unsold');
      }
      const result = await outcome(ip);
      if (at === '3-1') expect(result).toBeNull();
      else if (winner) expect(result?.team).toBe(winner);
      if (result) {
        teams[result.team]!.cards.push(card);
        teams[result.team]!.paidCents += result.cents;
        if (['1-1', '2-2', '4-1'].includes(at) || (winner === 1 && lot % 2 === 0 && at !== '3-5')) expect(result.cents).toBe(start + 5_000_000);
        else if (at !== '3-5') expect(result.cents).toBe(start);
        if (at === '3-5') expect(result.cents).toBe(start + 10_000_000);
      }
      // Student mirrors the announcement.
      await sp.fill('#card-id', card);
      await sp.click('#load-card');
      if (result?.team === 1 && at !== MISSED) {
        await sp.fill('#paid', String(result.cents / 100));
        await sp.click('#record-win');
      } else {
        if (at === MISSED) missed = { id: card, round, lot, cents: result!.cents };
        await sp.click('#not-ours');
      }
      if (at === '4-1') await ip.locator('body').press('n');
      else await ip.click('#next-lot');
      if (at === '2-5') { await sp.reload(); await expect(sp.locator('#track-heading')).toHaveText('Round 2 · Lot 6 of 10'); }
    }
  }

  // Build: instructor table matches the oracle; student adds the missed purchase.
  await expect(ip.getByRole('heading', { name: 'Results to reconcile' })).toBeVisible();
  for (const id of [1, 2]) {
    const team = teams[id]!, t = totals(team.cards);
    const row = ip.locator('tbody tr', { has: ip.locator('th', { hasText: new RegExp(`^Team ${id}$`) }) }).first();
    await expect(row).toContainText(dollars(team.paidCents));
    await expect(row.locator('td').nth(4)).toHaveText(String(score(team.mission, t)));
  }
  await expectAccessible(ip, 'instructor build');
  await expect(sp.getByRole('heading', { name: 'Check your purchases' })).toBeVisible();
  await sp.locator('details:has-text("Add a missing purchase") summary').click();
  await sp.fill('#add-id', missed!.id);
  await sp.fill('#add-round', String(missed!.round));
  await sp.fill('#add-lot', String(missed!.lot));
  await sp.fill('#add-paid', String(missed!.cents / 100));
  await sp.click('#add-purchase');
  await expect(sp.locator('main')).toContainText(`Spent: ${dollars(teams[1]!.paidCents)}`);
  await expectAccessible(sp, 'student build');
  await sp.click('#open-submit');

  // Submissions: student computes privately; instructor enters in private mode only.
  await sp.fill('#profit-input', '100000.25');
  await expect(sp.locator('#bid-preview')).toContainText(dollars(teams[1]!.paidCents + 10_000_025));
  await sp.click('#finish-submit');
  await expect(sp.locator('main')).toContainText('Tell the instructor privately: Team 1, profit $100,000.25.');
  await ip.click('#open-submissions');
  await ip.reload();
  await ip.click('#enter-private');
  await expect(ip.getByRole('alert')).toHaveText('Private: do not project');
  for (const [id, profit] of [[1, '100000.25'], [2, '50000']] as const) {
    await ip.fill(`#profit-${id}`, profit);
    await ip.click(`#save-profit-${id}`);
    await ip.check(`#submitted-${id}`);
    teams[id]!.profitCents = Math.round(Number(profit) * 100);
    teams[id]!.submitted = true;
  }
  await ip.click('#leave-private');
  await expect(ip.locator('main')).not.toContainText('100,000.25');
  await expect(ip.locator('main')).toContainText('2 of 2 teams submitted.');
  await ip.click('#close-submissions');
  await confirmDialog(ip);

  // Debrief: award and every bid match the oracle.
  const expected = winners(teams);
  const award = ip.locator('#award');
  if (expected.length === 0) await expect(award).toContainText('No award');
  else await expect(award).toContainText(`Team ${expected.join(', ')}`);
  for (const id of [1, 2]) await expect(ip.locator('main')).toContainText(dollars(teams[id]!.paidCents + teams[id]!.profitCents).replace(/(\.\d)$/, '$10'));
  info.annotations.push({ type: 'oracle', description: JSON.stringify(Object.entries(teams).map(([id, t]) => ({ id, mission: t.mission, cards: t.cards.length, compliant: compliant(t.mission, totals(t.cards)), score: score(t.mission, totals(t.cards)) }))) });
  await expectAccessible(ip, 'instructor debrief');
  await ip.reload();
  await ip.click('#close-room');
  await confirmDialog(ip);
  await expect(ip.getByRole('heading', { name: 'Session closed' })).toBeVisible();

  // Student debrief, close and a private export with no class data (J5).
  await expect(sp.locator('main')).toContainText('Capacity first, then protection.');
  await sp.click('#student-close');
  await confirmDialog(sp);
  const download = sp.waitForEvent('download');
  await sp.click('#export-final');
  const file = info.outputPath('student-final.json');
  await (await download).saveAs(file);
  const backup = JSON.parse(readFileSync(file, 'utf8'));
  for (const key of ['market', 'marketSeed', 'teams', 'ledger', 'leader', 'currentBid']) expect(backup.state).not.toHaveProperty(key);
  expect(backup.state.team.purchases).toHaveLength(teams[1]!.cards.length);
  const shown = await sp.locator('#app').innerText();
  for (const other of teams[2]!.cards) expect(shown, `student 1 must not show team 2 card ${other}`).not.toContain(other);

  expect(net.flat()).toEqual([]);
  expect(errors.flat()).toEqual([]);
});
