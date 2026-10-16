// Owner FIX 2026-10-12: on a phone every table shows all of its columns. Tables open inside collapsed sections
// (the category guide, the mission minimums) hid most columns off screen; below 40rem each row becomes a card whose
// cells carry their column's name.
import { expect, type Page } from '@playwright/test';
import { gameUrl, guardNetwork, test } from './helpers.ts';
import { confirmDialog, studentJoin } from './roles.ts';

async function everyCellShown(page: Page, where: string): Promise<void> {
  await page.evaluate(() => document.querySelectorAll('details').forEach(d => { d.open = true; }));
  const tables = await page.evaluate(() => [...document.querySelectorAll<HTMLElement>('.table-wrap')].map(wrap => {
    const edge = wrap.getBoundingClientRect().right;
    const cells = [...wrap.querySelectorAll('th, td')].filter(c => getComputedStyle(c).display !== 'none' && !c.closest('thead'));
    return {
      name: wrap.querySelector('caption')?.textContent ?? wrap.textContent?.slice(0, 30),
      scrolls: wrap.scrollWidth > wrap.clientWidth + 1,
      outside: cells.filter(c => c.getBoundingClientRect().right > edge + 1).map(c => c.textContent),
      // Every data cell under a named column shows that name, read from the header row itself, not from the cell.
      unlabelled: [...wrap.querySelectorAll('tbody tr')].flatMap(row => [...row.children].filter((c, i) => {
        const header = wrap.querySelectorAll('thead th')[i];
        const name = header && !header.querySelector('.visually-hidden') ? header.textContent?.trim() ?? '' : '';
        return c.tagName === 'TD' && name !== '' && getComputedStyle(c, '::before').content.replace(/"/g, '') !== name;
      }).map(c => c.textContent)),
      labelled: wrap.querySelectorAll('td[data-label]').length,
    };
  }));
  expect(tables.length, where).toBeGreaterThan(0);
  for (const table of tables) {
    expect(table, `${where}: ${table.name}`).toMatchObject({ scrolls: false, outside: [], unlabelled: [] });
    expect(table.labelled, `${where}: ${table.name} labels its cells`).toBeGreaterThan(0);
  }
}

for (const width of [320, 360]) for (const lang of ['en', 'fr']) {
  test(`phone (${width} px): every table shows all its columns (${lang})`, async ({ browser }) => {
    const page = await (await browser.newContext({ viewport: { width, height: 740 } })).newPage();
    guardNetwork(page);
    await page.goto(gameUrl(`?role=student&lang=${lang}`));
    await studentJoin(page, 'SEA3-T2-0123456789ABCDEF', 1, 'COMBAT');
    await everyCellShown(page, 'planning');
    await page.check('#plan-confirm');
    await page.click('#student-start-auction');
    await confirmDialog(page);
    await page.fill('#card-id', 'CAP-A');
    await page.click('#load-card');
    await page.fill('#paid', '400000');
    await page.click('#record-win');
    await everyCellShown(page, 'tracker');
    // The desktop layout is unchanged: a real table with its header row.
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page.locator('.table-wrap thead').first()).toBeVisible();
  });
}
