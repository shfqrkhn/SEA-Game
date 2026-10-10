// M2 vertical slice (MPES §17): both roles over file://, one full round, corrections, persistence,
// export/import, EN/FR switching, confirmations, accessibility scans, no network.
import { expect, test } from '@playwright/test';
import { writeFileSync } from 'node:fs';
import { collectConsoleErrors, expectAccessible, gameUrl, guardNetwork } from './helpers.ts';
import { confirmDialog, instructorLot, instructorSetup, studentJoin, studentRecord } from './roles.ts';

test('one-round slice: instructor and student, corrections, backup round trip', async ({ browser }, info) => {
  const instructorContext = await browser.newContext();
  const studentContext = await browser.newContext();
  const ip = await instructorContext.newPage(), sp = await studentContext.newPage();
  const requests = [guardNetwork(ip), guardNetwork(sp)];
  const errors = [collectConsoleErrors(ip), collectConsoleErrors(sp)];

  await ip.goto(gameUrl('?role=instructor&lang=en'));
  await expectAccessible(ip, 'instructor setup');
  const code = await instructorSetup(ip, { teams: 3, reveal: 'JIT', timed: false, missions: ['TROOP', 'RECCE', 'COMBAT'] });
  expect(code).toMatch(/^SEA3-T3-[0-9A-F]{16}$/);
  await expectAccessible(ip, 'instructor auction');

  await sp.goto(gameUrl('?role=student&lang=en'));
  await expectAccessible(sp, 'student join');
  await studentJoin(sp, code, 1, 'TROOP');

  // Planning in French; typed text survives switching language back and forth.
  await sp.click('#lang-toggle');
  await expect(sp.locator('html')).toHaveAttribute('lang', 'fr');
  await sp.fill('#plan-plan', 'Capacité d’abord  ✓');
  await sp.click('#lang-toggle');
  await expect(sp.locator('#plan-plan')).toHaveValue('Capacité d’abord  ✓');
  await sp.check('#plan-confirm');
  await expectAccessible(sp, 'student planning');
  await sp.click('#student-start-auction');
  await confirmDialog(sp);

  // Round 1: read each lot's card ID from the instructor screen and mirror it on the student side.
  const plan: { bids: number[]; result: 'sell' | 'unsold' }[] = [
    { bids: [1], result: 'sell' }, { bids: [2, 1], result: 'sell' }, { bids: [], result: 'unsold' }, { bids: [2], result: 'sell' },
    { bids: [3, 2], result: 'unsold' }, { bids: [3], result: 'sell' }, { bids: [2], result: 'sell' }, { bids: [2], result: 'sell' },
    { bids: [], result: 'unsold' }, { bids: [], result: 'unsold' },
  ];
  let studentCost = 0;
  for (const [i, lot] of plan.entries()) {
    const cardId = (await ip.locator('.card-figure[data-card]').getAttribute('data-card'))!;
    await instructorLot(ip, lot.bids, lot.result);
    if (i === 3) {
      // Void and replace with a corrected sale to Team 3; Team 1 is at its 2-win limit.
      await ip.click('#void');
      await ip.fill('#void-reason', 'Wrong team heard');
      await confirmDialog(ip);
      await ip.click('#open-bidding');
      await expect(ip.locator('#bid-1')).toBeDisabled(); // Team 1 already has 2 wins this round
      await ip.click('#correct');
      await ip.selectOption('#correct-team', '3');
      await ip.fill('#correct-price', '9999');
      await ip.fill('#correct-reason', 'Team 3 bid at the back');
      await confirmDialog(ip);
      await expect(ip.locator('#status')).toContainText('not valid');
      await ip.click('#correct');
      await ip.selectOption('#correct-team', '3');
      await ip.fill('#correct-reason', 'Team 3 bid at the back');
      await confirmDialog(ip);
      await expect(ip.locator('#outcome')).toContainText('Team 3');
    }
    const final = /Team (\d+) for \$([\d,]+)/.exec((await ip.locator('#outcome').textContent())!);
    const ours = final && final[1] === '1';
    if (ours) studentCost += Number(final![2]!.replace(/,/g, ''));
    await studentRecord(sp, cardId, ours ? Number(final![2]!.replace(/,/g, '')) : null);
    await ip.click('#next-lot');
  }
  await expect(ip.locator('#lot-heading')).toHaveText('Round 2 · Lot 1 of 10');
  await expect(sp.locator('#track-heading')).toHaveText('Round 2 · Lot 1 of 10');
  await expect(sp.locator('main')).toContainText(`Spent: $${studentCost.toLocaleString('en-US')}`);
  await ip.locator('details:has(h2:has-text("Ledger")) summary').click();
  await expect(ip.locator('.ledger li')).toHaveCount(12);

  // Persistence: reload keeps both roles where they were.
  await ip.reload();
  await expect(ip.locator('#lot-heading')).toHaveText('Round 2 · Lot 1 of 10');
  await sp.reload();
  await expect(sp.locator('#plan-plan')).toHaveCount(0);
  await expect(sp.locator('#track-heading')).toHaveText('Round 2 · Lot 1 of 10');

  // Export the student backup and import it into a fresh context.
  await sp.click('#menu-button');
  const downloadPromise = sp.waitForEvent('download');
  await sp.locator('dialog button[data-value="export"]').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toMatch(/^sea-student-SEA3-T3-[0-9A-F]{16}-\d{8}-\d{4}\.json$/);
  const backupPath = info.outputPath('student-backup.json');
  await download.saveAs(backupPath);
  const fresh = await (await browser.newContext()).newPage();
  guardNetwork(fresh);
  await fresh.goto(gameUrl('?role=student&lang=fr'));
  // Wrong-role file is rejected without change.
  const wrongPath = info.outputPath('wrong-role.json');
  writeFileSync(wrongPath, '{"format":"SEA-GAME-BACKUP"}');
  await fresh.click('#menu-button');
  let chooser = fresh.waitForEvent('filechooser');
  await fresh.locator('dialog button[data-value="import"]').click();
  await (await chooser).setFiles(wrongPath);
  await expect(fresh.locator('#status')).toContainText('Échec');
  await expect(fresh.locator('#join-code')).toBeVisible();
  await fresh.click('#menu-button');
  chooser = fresh.waitForEvent('filechooser');
  await fresh.locator('dialog button[data-value="import"]').click();
  await (await chooser).setFiles(backupPath);
  await confirmDialog(fresh);
  await expect(fresh.locator('#track-heading')).toHaveText('Ronde 2 · Lot 1 sur 10');
  await expect(fresh.locator('#undo-import')).toBeVisible();
  await fresh.click('#undo-import');
  await expect(fresh.locator('#join-code')).toBeVisible();

  expect(requests.flat()).toEqual([]);
  expect(errors.flat()).toEqual([]);
});
