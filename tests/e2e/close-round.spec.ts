// Owner request 2026-10-11 (MPES §6.5): when every team has its 2 wins in a round, one click records the rest of the
// round unsold and opens the next; a student whose team has its 2 wins skips to the next round's tracker.
import { expect, test } from '@playwright/test';
import { gameUrl, guardNetwork } from './helpers.ts';
import { confirmDialog, instructorLot, instructorSetup, studentJoin, studentRecord } from './roles.ts';

test('the instructor closes a full round in one click and the student skips to the next round', async ({ browser }) => {
  const ip = await (await browser.newContext()).newPage();
  const sp = await (await browser.newContext()).newPage();
  guardNetwork(ip); guardNetwork(sp);
  await ip.goto(gameUrl('?role=instructor&lang=en'));
  const code = await instructorSetup(ip, { teams: 2, reveal: 'JIT', timed: false, missions: ['TROOP', 'RECCE'] });
  const cards: string[] = [];
  const prices: number[] = [];
  for (const team of [1, 1, 2, 2]) {
    await expect(ip.locator('#close-round')).toHaveCount(0);
    if (await ip.locator('#reveal').count()) await ip.click('#reveal');
    cards.push((await ip.locator('.card-figure[data-card]').getAttribute('data-card'))!);
    prices.push(Number((await ip.locator('.card-figure strong.num').first().textContent())!.replace(/[$,]/g, '')));
    await instructorLot(ip, [team], 'sell');
    if (cards.length < 4) await ip.click('#next-lot');
  }
  // The sale that used the last win offers the close at once; Next lot stays as the slower path.
  await expect(ip.locator('#round-full')).toContainText('round 1');
  await expect(ip.locator('#close-round')).toHaveText('Go to round 2, the rest unsold');
  await expect(ip.locator('#next-lot')).toBeVisible();
  await ip.keyboard.press('n');
  await expect(ip.locator('#lot-heading')).toContainText('Round 2');
  await expect(ip.locator('#lot-heading')).toContainText('Lot 1 of');
  await expect(ip.locator('#close-round')).toHaveCount(0);
  await ip.reload();
  await expect(ip.locator('#lot-heading')).toContainText('Round 2');

  await sp.goto(gameUrl('?role=student&lang=en'));
  await studentJoin(sp, code, 2, 'RECCE');
  await sp.check('#plan-confirm');
  await sp.click('#student-start-auction');
  await confirmDialog(sp);
  await studentRecord(sp, cards[0]!, null);
  await studentRecord(sp, cards[1]!, null);
  await expect(sp.locator('#next-round')).toHaveCount(0);
  await studentRecord(sp, cards[2]!, prices[2]!);
  await expect(sp.locator('#next-round')).toHaveCount(0);
  await studentRecord(sp, cards[3]!, prices[3]!);
  await expect(sp.locator('#next-round')).toHaveText('Skip to round 2');
  await sp.click('#next-round');
  await expect(sp.locator('#track-heading')).toHaveText('Round 2 · Lot 1 of 10');
  await expect(sp.locator('#next-round')).toHaveCount(0);
});
