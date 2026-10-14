// MPES §14 command response: a command, a saved field or a status message rebuilds the view once, never twice (G3: each
// command used to render through the controller's subscription and again in the view, doubling the click-to-paint time).
import { expect, test, type Page } from '@playwright/test';
import { gameUrl, guardNetwork } from './helpers.ts';

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
