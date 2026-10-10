// J6 + RQ-20/RQ-21 (MPES §12, §16.3): keyboard-only student journey and axe scans of every main view
// at narrow-window and desktop sizes in both languages. Automated checks only: real screen readers are a
// residual risk recorded in docs/verification.
import { expect, test, type Page } from '@playwright/test';
import { expectAccessible, gameUrl, guardNetwork } from './helpers.ts';
import { confirmDialog, instructorSetup, studentJoin } from './roles.ts';

/** Tab until the element with `id` has focus (fails after 60 presses), proving it is reachable by keyboard. */
async function tabTo(page: Page, id: string): Promise<void> {
  for (let i = 0; i < 60; i++) {
    if (await page.evaluate(target => document.activeElement?.id === target, id)) return;
    await page.keyboard.press('Tab');
  }
  throw new Error(`#${id} not reachable with Tab`);
}

async function focusVisible(page: Page): Promise<boolean> {
  return page.evaluate(() => {
    const el = document.activeElement as HTMLElement | null;
    if (!el || el === document.body) return false;
    const style = getComputedStyle(el);
    return style.outlineStyle !== 'none' && parseFloat(style.outlineWidth) >= 2;
  });
}

test('J6: student journey with the keyboard only', async ({ page }) => {
  guardNetwork(page);
  await page.goto(gameUrl('?role=student&lang=en'));
  await tabTo(page, 'join-code');
  expect(await focusVisible(page)).toBe(true);
  await page.keyboard.type('SEA3-T3-0123456789ABCDEF');
  await tabTo(page, 'join-team');
  await page.keyboard.press('ArrowDown');
  await tabTo(page, 'join-mission');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await tabTo(page, 'join');
  await page.keyboard.press('Enter');
  await tabTo(page, 'record-practice');
  await page.keyboard.press('Enter');
  await tabTo(page, 'student-planning');
  await page.keyboard.press('Enter');
  await tabTo(page, 'plan-confirm');
  await page.keyboard.press('Space');
  await tabTo(page, 'plan-plan');
  await page.keyboard.type('Keyboard only.');
  await tabTo(page, 'student-start-auction');
  await page.keyboard.press('Enter');
  // The confirmation dialog takes focus; Enter confirms, Escape would cancel.
  await expect(page.locator('dialog[open]')).toBeVisible();
  await page.keyboard.press('Enter');
  await expect(page.locator('#track-heading')).toHaveText('Round 1 · Lot 1 of 10');
  await tabTo(page, 'card-id');
  await page.keyboard.type('CAP-A');
  await tabTo(page, 'load-card');
  await page.keyboard.press('Enter');
  await tabTo(page, 'paid');
  await page.keyboard.press('ControlOrMeta+a');
  await page.keyboard.type('300000');
  await tabTo(page, 'record-win');
  await page.keyboard.press('Enter');
  await expect(page.locator('#track-heading')).toHaveText('Round 1 · Lot 2 of 10');
  await expect(page.locator('main')).toContainText('Spent: $300,000');
  await tabTo(page, 'menu-button');
  await page.keyboard.press('Enter');
  await expect(page.getByRole('dialog', { name: 'Menu' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.locator('#menu-button')).toBeFocused();
});

const VIEWPORTS = [{ width: 375, height: 812 }, { width: 1280, height: 720 }];
for (const lang of ['en', 'fr'] as const) {
  for (const size of VIEWPORTS) {
    test(`axe on every main view, ${lang}, ${size.width}px`, async ({ browser }, info) => {
      test.skip(info.project.name !== 'chromium', 'axe rules are engine-independent; run once.');
      const context = await browser.newContext({ viewport: size });
      const ip = await context.newPage(), sp = await (await browser.newContext({ viewport: size })).newPage();
      guardNetwork(ip); guardNetwork(sp);
      await ip.goto(gameUrl(`?lang=${lang}`));
      await expectAccessible(ip, `chooser ${lang} ${size.width}`);
      await ip.goto(gameUrl(`?role=instructor&lang=en`));
      await expectAccessible(ip, `setup ${size.width}`);
      const code = await instructorSetup(ip, { teams: 2, reveal: 'MANUAL', timed: true, missions: ['TROOP', 'MINE'] });
      if (lang === 'fr') await ip.click('#lang-toggle');
      await expectAccessible(ip, `auction ${lang} ${size.width}`);
      await ip.click('#reveal');
      await ip.click('#open-bidding');
      await ip.click('#bid-1');
      await expectAccessible(ip, `live lot ${lang} ${size.width}`);
      await sp.goto(gameUrl(`?role=student&lang=${lang}`));
      await expectAccessible(sp, `join ${lang} ${size.width}`);
      await studentJoin(sp, code, 1, 'TROOP');
      await expectAccessible(sp, `planning ${lang} ${size.width}`);
      await sp.check('#plan-confirm');
      await sp.click('#student-start-auction');
      await confirmDialog(sp);
      await expectAccessible(sp, `tracking ${lang} ${size.width}`);
      const overflow = await sp.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, 'no horizontal scrolling').toBeLessThanOrEqual(0);
      await context.close();
    });
  }
}
