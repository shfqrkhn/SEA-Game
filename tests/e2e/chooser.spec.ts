import { expect, test } from '@playwright/test';
import { collectConsoleErrors, expectAccessible, gameUrl, guardNetwork } from './helpers.ts';

const LINEUP = {
  en: { group: 'Mission vehicles', names: ['Combat', 'RECCE', 'Troop Carrier', 'Command Post', 'Recovery', 'Mine Clearing'] },
  fr: { group: 'Véhicules de mission', names: ['Combat', 'Reconnaissance', 'Transport de troupes', 'Poste de commandement', 'Dépannage', 'Déminage'] },
} as const;

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
    await expect(dialog).toContainText('bundles one third-party library, three.js');
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(opener).toBeFocused();
  });

  // G2 item 2: the licence and notices wrapped twice, at the file's hard breaks and at the dialog's edge. Each
  // paragraph now wraps once: every line but its last fills most of the width, and nothing scrolls sideways.
  for (const [width, height] of [[1366, 768], [320, 640]] as const) {
    test(`about dialog reflows the licence and notices at ${width} px`, async ({ page }) => {
      guardNetwork(page);
      await page.setViewportSize({ width, height });
      await page.goto(gameUrl('?lang=en'));
      await page.getByRole('button', { name: 'About and licences' }).click();
      const dialog = page.getByRole('dialog', { name: 'About this game' });
      for (const name of ['Licence', 'Third-party notices']) await dialog.locator('summary', { hasText: name }).click();
      await expect(dialog).toContainText('Copyright (c) 2026 SEA Game authors');
      await expect(dialog).toContainText('Created by Shafiqur Rahman Khan, with AI assistance.');
      await expect(page.getByText('created by Shafiqur Rahman Khan. One file, works offline.')).toBeVisible();
      await expect(dialog).toContainText('Permission is hereby granted, free of charge, to any person obtaining a copy of this software');
      await expect(dialog.locator('pre')).toHaveCount(0);
      await expect(dialog.getByRole('heading', { name: 'three.js 0.186.1' })).toBeVisible();
      const ragged = await dialog.locator('details p, details li').evaluateAll(elements => elements.flatMap(element => {
        const range = document.createRange();
        range.selectNodeContents(element);
        const lines = [...new Map([...range.getClientRects()].map(r => [Math.round(r.top), r] as const)).values()];
        const fill = element.getBoundingClientRect().width;
        return lines.slice(0, -1).filter(r => r.width < 0.6 * fill).map(r => `${element.textContent!.slice(0, 40)}: ${Math.round(r.width)} of ${Math.round(fill)} px`);
      }));
      expect(ragged).toEqual([]);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow).toBeLessThanOrEqual(0);
      expect(await dialog.evaluate(d => d.scrollWidth - d.clientWidth)).toBeLessThanOrEqual(0);
    });
  }

  test('reflows at 320 CSS px without horizontal scrolling', async ({ page }) => {
    guardNetwork(page);
    await page.setViewportSize({ width: 320, height: 640 });
    await page.goto(gameUrl('?lang=fr'));
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBeLessThanOrEqual(0);
  });

  // G2 item 3: the first screen shows all six vehicles: a lineup of the hero stills, the selected one large.
  test.describe('six-vehicle lineup', () => {
    for (const lang of ['en', 'fr'] as const) {
      test(`selects each vehicle with the mouse and keyboard (${lang.toUpperCase()})`, async ({ page }) => {
        guardNetwork(page);
        const errors = collectConsoleErrors(page);
        await page.goto(gameUrl(`?lang=${lang}`));
        const group = page.getByRole('group', { name: LINEUP[lang].group });
        const buttons = group.getByRole('button');
        await expect(buttons).toHaveText([...LINEUP[lang].names]);
        await expect(buttons.first()).toHaveAttribute('aria-pressed', 'true');
        const large = page.locator('#hero-still');
        const alts = new Set<string>();
        const box = await large.boundingBox();
        for (const [index, name] of LINEUP[lang].names.entries()) {
          await group.getByRole('button', { name, exact: true }).click();
          for (let i = 0; i < 6; i++) await expect(buttons.nth(i)).toHaveAttribute('aria-pressed', String(i === index));
          await expect(large).toHaveAttribute('alt', new RegExp(name, 'i'));
          alts.add((await large.getAttribute('alt'))!);
          expect(await large.boundingBox(), 'the large still keeps its box').toEqual(box);
        }
        expect(alts.size).toBe(6);

        // Arrow keys, Home and End move along the lineup and select, like a toolbar of toggle buttons.
        await buttons.first().focus();
        await page.keyboard.press('ArrowRight');
        await expect(buttons.nth(1)).toBeFocused();
        await expect(buttons.nth(1)).toHaveAttribute('aria-pressed', 'true');
        await page.keyboard.press('End');
        await expect(buttons.nth(5)).toHaveAttribute('aria-pressed', 'true');
        await page.keyboard.press('ArrowRight');
        await expect(buttons.nth(0)).toBeFocused();
        await page.keyboard.press('ArrowLeft');
        await expect(buttons.nth(5)).toBeFocused();
        await page.keyboard.press('Home');
        await expect(buttons.nth(0)).toHaveAttribute('aria-pressed', 'true');
        await expectAccessible(page, `chooser lineup ${lang}`);
        expect(errors).toEqual([]);
      });
    }

    test('selects by touch at 320 px without horizontal scrolling or words broken (FR, the longest names)', async ({ browser }) => {
      const context = await browser.newContext({ viewport: { width: 320, height: 640 }, hasTouch: true, isMobile: true });
      const page = await context.newPage();
      guardNetwork(page);
      await page.goto(gameUrl('?lang=fr'));
      const group = page.getByRole('group', { name: LINEUP.fr.group });
      // HUD labels never break inside a word: each word fits its button.
      const broken = await group.locator('span').evaluateAll(spans => spans.filter(span => {
        const range = document.createRange();
        const words = span.textContent!.split(' ');
        let offset = 0;
        return words.some(word => {
          range.setStart(span.firstChild!, offset); range.setEnd(span.firstChild!, offset + word.length);
          offset += word.length + 1;
          return range.getClientRects().length > 1 || range.getBoundingClientRect().width > span.getBoundingClientRect().width + 0.5;
        });
      }).map(span => span.textContent));
      expect(broken).toEqual([]);
      const target = group.getByRole('button', { name: 'Déminage' });
      await target.scrollIntoViewIfNeeded();
      await target.tap();
      await expect(target).toHaveAttribute('aria-pressed', 'true');
      await expect(page.locator('#hero-still')).toHaveAttribute('alt', /déminage/i);
      expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
      await context.close();
    });

    test('stills decode off the main thread, reserve their space and stay sharp at 2x', async ({ browser }) => {
      const context = await browser.newContext({ viewport: { width: 1366, height: 768 }, deviceScaleFactor: 2 });
      const page = await context.newPage();
      guardNetwork(page);
      await page.addInitScript(() => {
        const w = window as unknown as { seaShift: number };
        w.seaShift = 0;
        if (PerformanceObserver.supportedEntryTypes.includes('layout-shift')) {
          new PerformanceObserver(list => { for (const e of list.getEntries()) w.seaShift += (e as unknown as { value: number }).value; }).observe({ type: 'layout-shift', buffered: true });
        }
      });
      await page.goto(gameUrl('?lang=en'));
      const images = page.locator('main img');
      await expect(images).toHaveCount(7);
      for (const img of await images.all()) {
        await expect(img).toHaveAttribute('decoding', 'async');
        await expect(img).toHaveAttribute('width', /^\d+$/);
        await expect(img).toHaveAttribute('height', /^\d+$/);
      }
      for (const img of await page.locator('[role="group"] img').all()) await expect(img).toHaveAttribute('loading', 'lazy');
      await page.evaluate(() => Promise.all([...document.images].map(img => img.decode())));
      // Sharp: no still is drawn larger than its pixels at 2x device pixels.
      const blurry = await images.evaluateAll(list => (list as HTMLImageElement[])
        .filter(img => img.getBoundingClientRect().width * devicePixelRatio > img.naturalWidth + 1).map(img => img.alt || img.src.slice(0, 30)));
      expect(blurry).toEqual([]);
      // No layout shift while the stills decode (Chromium reports it; elsewhere the sum stays 0).
      await page.evaluate(() => new Promise(requestAnimationFrame));
      expect(await page.evaluate(() => (window as unknown as { seaShift: number }).seaShift)).toBe(0);
      await context.close();
    });
  });
});
