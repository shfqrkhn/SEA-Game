// MPES §14 command response: a command, a saved field or a status message rebuilds the view once, never twice (G3: each
// command used to render through the controller's subscription and again in the view, doubling the click-to-paint time).
import { expect, type Page } from '@playwright/test';
import { gameUrl, guardNetwork, test } from './helpers.ts';
import { instructorLot, instructorSetup } from './roles.ts';
import { TRACKER_OK } from '../perf/measure.ts';

/** Counts full re-renders: each one empties the view's content element before rebuilding it. */
async function countRenders(page: Page): Promise<void> {
  await page.evaluate(() => {
    const w = window as unknown as { seaRenders: number };
    w.seaRenders = 0;
    const content = document.querySelector('#app > div')!;
    new MutationObserver(records => { for (const r of records) if (r.target === content && r.removedNodes.length) w.seaRenders++; })
      .observe(content, { childList: true });
  });
}
const renders = (page: Page) => page.evaluate(() => { const w = window as unknown as { seaRenders: number }; const n = w.seaRenders; w.seaRenders = 0; return n; });

test('each command, saved field and message renders the view once', async ({ page }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?role=instructor&lang=en'));
  await countRenders(page);
  await page.click('#generate');
  expect(await renders(page), 'command').toBe(1);
  await page.click('#start-practice');
  expect(await renders(page), 'command').toBe(1);
  await page.click('#lang-toggle');
  expect(await renders(page), 'language').toBe(1);

  await page.goto(gameUrl('?role=student&lang=en'));
  await countRenders(page);
  await page.fill('#join-code', 'SEA3-T2-0123456789ABCDEF');
  await page.selectOption('#join-mission', 'RECOVERY');
  await renders(page);
  await page.click('#join');
  expect(await renders(page), 'join').toBe(1);
  await page.click('#record-practice'); await page.click('#student-planning');
  await renders(page);
  // A field that saves as you type: one render per committed value.
  await page.locator('#plan-wtp').pressSequentially('5');
  expect(await renders(page), 'saved field').toBe(1);
});

/** Opens every closed panel the reader can see, nested ones as they appear; returns how many are open. */
async function openAll(page: Page): Promise<number> {
  const closed = page.locator('details:not([open]) > summary').filter({ visible: true });
  while (await closed.count()) await closed.first().click();
  return page.locator('details[open]').count();
}

// G3: a render rebuilt every panel closed, so typing in the tracker's scratch notes hid the field after the first
// character (it saves as you type), and an opened guide, ledger or team list shut on the next click elsewhere.
// A panel the reader opened stays open across renders; only the reader closes it.
test('a panel the reader opened stays open through every render, on every page with panels', async ({ page, browser }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?role=student&lang=en'));
  await page.fill('#join-code', 'SEA3-T2-0123456789ABCDEF');
  await page.selectOption('#join-mission', 'RECOVERY');
  await page.click('#join'); await page.click('#record-practice'); await page.click('#student-planning');
  const planning = await openAll(page);
  expect(planning, 'planning panels').toBeGreaterThanOrEqual(2);
  await page.locator('#plan-wtp').pressSequentially('5');
  await expect(page.locator('details[open]'), 'planning, after a saved field').toHaveCount(planning);

  await page.check('#plan-confirm'); await page.click('#student-start-auction');
  await page.locator(TRACKER_OK).click();
  await page.locator('details:has(#scratch-wtp) > summary').click();
  await page.locator('#scratch-wtp').pressSequentially('42');
  await expect(page.locator('#scratch-wtp'), 'the field typed in').toBeVisible();
  await expect(page.locator('#scratch-wtp')).toBeFocused();
  await expect(page.locator('#scratch-wtp')).toHaveValue('42');
  await page.click('#lang-toggle');
  await expect(page.locator('details:has(#scratch-wtp)'), 'after a language change').toHaveAttribute('open', '');

  const ip = await (await browser.newContext()).newPage();
  guardNetwork(ip);
  await ip.goto(gameUrl('?role=instructor&lang=en'));
  await instructorSetup(ip, { teams: 2, reveal: 'JIT', timed: false, missions: ['RECOVERY', 'TROOP'] });
  const auction = await openAll(ip);
  expect(auction, 'auction panels').toBeGreaterThanOrEqual(1);
  await instructorLot(ip, [1], 'sell');
  await expect(ip.locator('details[open]'), 'auction, after a sale').toHaveCount(auction);
});
