// Owner request 2026-10-10 (MPES §6.5): the instructor chooses the bid increment at setup; students record the
// resulting prices without knowing the choice.
import { expect } from '@playwright/test';
import { gameUrl, guardNetwork, test } from './helpers.ts';
import { act, confirmDialog, moreOptions, studentJoin } from './roles.ts';

test('a $100,000 bid increment raises each offer by $100,000 and the student records the price', async ({ browser }) => {
  const ip = await (await browser.newContext()).newPage();
  const sp = await (await browser.newContext()).newPage();
  guardNetwork(ip); guardNetwork(sp);
  await ip.goto(gameUrl('?role=instructor&lang=en'));
  await ip.selectOption('#setup-teams', '2');
  // Collapsed by default, with the current choices summarised on one line.
  await expect(ip.locator('#setup-choices')).toHaveText('One lot at a time · Timed (30 s) · bids rise by $50,000');
  await moreOptions(ip);
  await ip.check('#setup-reveal-JIT');
  await ip.check('#setup-timing-UNTIMED');
  await expect(ip.locator('#setup-increment')).toHaveValue('5000000');
  await ip.selectOption('#setup-increment', '10000000');
  await expect(ip.locator('#setup-choices')).toHaveText('One lot at a time · No timer · bids rise by $100,000');
  await ip.click('#generate');
  await expect(ip.locator('main')).toContainText('bids rise by $100,000');
  const code = (await ip.locator('.session-code').textContent())!.trim();
  await ip.click('#start-practice');
  for (const step of ['reveal', 'open', 'accept', 'close']) await ip.click(`#practice-${step}`);
  await ip.click('#open-planning');
  await ip.selectOption('#mission-1', 'TROOP');
  await ip.selectOption('#mission-2', 'RECCE');
  await ip.click('#start-auction');
  await confirmDialog(ip);

  const card = (await ip.locator('.card-figure[data-card]').getAttribute('data-card'))!;
  const start = Number((await ip.locator('.card-figure strong.num').first().textContent())!.replace(/[$,]/g, ''));
  await ip.click('#open-bidding');
  await ip.click('#bid-1');
  await expect(ip.locator('#next-offer')).toContainText(`$${(start + 100000).toLocaleString('en-US')}`);
  await ip.click('#bid-2');
  await act(ip, '#sell');
  await expect(ip.locator('#outcome')).toContainText(`Team 2 for $${(start + 100000).toLocaleString('en-US')}`);
  await ip.reload();
  await expect(ip.locator('#outcome')).toContainText(`Team 2 for $${(start + 100000).toLocaleString('en-US')}`);

  await sp.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(sp, code, 2, 'RECCE');
  await sp.check('#plan-confirm');
  await sp.click('#student-start-auction');
  await confirmDialog(sp);
  await sp.fill('#card-id', card);
  await sp.click('#load-card');
  await sp.fill('#paid', String(start + 100000));
  await sp.click('#record-win');
  await expect(sp.locator('#status')).not.toContainText('not valid');
  await expect(sp.locator('main')).toContainText(card);
});
