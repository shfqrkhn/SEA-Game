import { expect, test } from '@playwright/test';
import { collectConsoleErrors, expectAccessible, gameUrl, guardNetwork } from './helpers.ts';

test.describe('role chooser over file:// (RQ-01, RQ-19, RQ-20)', () => {
  test('opens offline, switches language and links to both roles', async ({ page }) => {
    const requests = guardNetwork(page);
    const errors = collectConsoleErrors(page);
    await page.goto(gameUrl('?lang=en'));
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Systems Engineering Awareness');
    await expect(page.locator('[data-role="instructor"]')).toHaveAttribute('href', '?role=instructor&lang=en');
    await expect(page.locator('[data-role="student"]')).toHaveAttribute('href', '?role=student&lang=en');
    await expectAccessible(page, 'chooser EN');

    await page.getByRole('link', { name: 'Passer en français' }).click();
    await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
    await expect(page.getByRole('heading', { name: 'Choisissez votre rôle' })).toBeVisible();
    await expectAccessible(page, 'chooser FR');

    expect(requests).toEqual([]);
    expect(errors).toEqual([]);
  });

  test('unknown role shows a notice', async ({ page }) => {
    guardNetwork(page);
    await page.goto(gameUrl('?role=admin&lang=en'));
    await expect(page.getByRole('alert')).toContainText('unknown role');
  });

  test('about dialog shows licences and returns focus', async ({ page }) => {
    guardNetwork(page);
    await page.goto(gameUrl('?lang=en'));
    const opener = page.getByRole('button', { name: 'About and licences' });
    await opener.click();
    const dialog = page.getByRole('dialog', { name: 'About this game' });
    await expect(dialog).toBeVisible();
    await dialog.locator('summary', { hasText: 'Third-party notices' }).click();
    await expect(dialog).toContainText('three.js authors');
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(opener).toBeFocused();
  });

  test('reflows at 320 CSS px without horizontal scrolling', async ({ page }) => {
    guardNetwork(page);
    await page.setViewportSize({ width: 320, height: 640 });
    await page.goto(gameUrl('?lang=fr'));
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });
});
