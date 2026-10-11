// MPES §7.1 (3.1.0): at 1280×720 the live lot's bid buttons, Sell, No sale and Next lot are fully visible without
// scrolling, because Firefox loses a click on a half-hidden button when it scrolls it into view.
import { expect, test, type Page } from '@playwright/test';
import { gameUrl, guardNetwork } from './helpers.ts';
import { instructorSetup } from './roles.ts';

async function fullyVisible(page: Page, selectors: string[]): Promise<void> {
  await page.evaluate(() => window.scrollTo(0, 0));
  const viewport = page.viewportSize()!;
  for (const selector of selectors) {
    const box = await page.locator(selector).boundingBox();
    expect(box, selector).not.toBeNull();
    expect(box!.y, selector).toBeGreaterThanOrEqual(0);
    expect(box!.y + box!.height, `${selector} bottom`).toBeLessThanOrEqual(viewport.height);
    expect(box!.x + box!.width, `${selector} right`).toBeLessThanOrEqual(viewport.width);
  }
}

for (const lang of ['en', 'fr']) {
  test(`live lot actions fit 1280×720 with 10 teams (${lang})`, async ({ page }) => {
    guardNetwork(page);
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto(gameUrl(`?role=instructor&lang=${lang}`));
    await instructorSetup(page, { teams: 10, reveal: 'JIT', timed: true, missions: ['TROOP', 'RECCE', 'COMBAT', 'COMMAND', 'RECOVERY', 'MINE', 'TROOP', 'RECCE', 'COMBAT', 'COMMAND'] });
    await page.click('#open-bidding');
    await page.click('#bid-1');
    await fullyVisible(page, [...Array.from({ length: 10 }, (_, i) => `#bid-${i + 1}`), '#sell', '#unsold', '#correct']);
    await page.click('#sell');
    await fullyVisible(page, ['#next-lot', '#void']);
  });
}
