// G3, CI run 38958721130: contexts a test opened itself (browser.newContext) outlived it. Playwright closes only the
// contexts of its own `page` and `context` fixtures, so on a heavy project's single worker every two-tab test left its
// pages open, a 3D showcase still turning in each, and every later test ran slower: the Edge stills fallback test took
// 43 s, then 1.4 min, then ran out of its 2 minutes. The second test here sees whether the first one's context is gone.
import { expect } from '@playwright/test';
import { gameUrl, test } from './helpers.ts';

test.describe.configure({ mode: 'serial' });

test('a test opens its own context and leaves it open', async ({ browser }) => {
  const page = await (await browser.newContext()).newPage();
  await page.goto(gameUrl('?lang=en'));
  expect(browser.contexts()).toHaveLength(1);
});

test('the next test on the same worker finds no context left from it', async ({ browser }) => {
  expect(browser.contexts()).toHaveLength(0);
});
