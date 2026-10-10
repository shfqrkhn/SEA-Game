// Page drivers for the two roles, used by the journey tests.
import { expect, type Page } from '@playwright/test';

export async function confirmDialog(page: Page): Promise<void> {
  const dialog = page.locator('dialog[open]');
  await expect(dialog).toBeVisible();
  await dialog.locator('button[data-value="ok"]').click();
  await expect(dialog).toHaveCount(0);
}

export async function instructorSetup(page: Page, options: { teams: number; reveal: 'ROUND' | 'JIT' | 'MANUAL'; timed: boolean; missions: string[] }): Promise<string> {
  await page.selectOption('#setup-teams', String(options.teams));
  await page.check(`#setup-reveal-${options.reveal}`);
  await page.check(`#setup-timing-${options.timed ? 'TIMED' : 'UNTIMED'}`);
  await page.click('#generate');
  const code = (await page.locator('.session-code').textContent())!.trim();
  await page.click('#start-practice');
  for (const step of ['reveal', 'open', 'accept', 'close']) await page.click(`#practice-${step}`);
  await page.click('#open-planning');
  for (const [i, mission] of options.missions.entries()) await page.selectOption(`#mission-${i + 1}`, mission);
  await page.click('#start-auction');
  await confirmDialog(page);
  return code;
}

/** Run the current lot: reveal/open as needed, accept bids in order, then sell to the leader or record no sale. */
export async function instructorLot(page: Page, bids: number[], result: 'sell' | 'unsold'): Promise<void> {
  if (await page.locator('#reveal').count()) await page.click('#reveal');
  await page.click('#open-bidding');
  for (const team of bids) await page.click(`#bid-${team}`);
  if (result === 'sell') await page.click('#sell');
  else {
    await page.click('#unsold');
    if (bids.length) await confirmDialog(page);
  }
  await expect(page.locator('#outcome')).toBeVisible();
}

export async function studentJoin(page: Page, code: string, team: number, mission: string): Promise<void> {
  await page.fill('#join-code', code.toLowerCase());
  await page.selectOption('#join-team', String(team));
  await page.selectOption('#join-mission', mission);
  await page.click('#join');
  await page.click('#record-practice');
  await page.click('#student-planning');
}

export async function studentRecord(page: Page, cardId: string, paidDollars: number | null): Promise<void> {
  await page.fill('#card-id', cardId);
  await page.click('#load-card');
  if (paidDollars === null) { await page.click('#not-ours'); return; }
  await page.fill('#paid', String(paidDollars));
  await page.click('#record-win');
}
