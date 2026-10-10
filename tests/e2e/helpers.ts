import { expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

export const DIST = pathToFileURL(path.resolve('dist/index.html')).href;

export function gameUrl(query = ''): string {
  return DIST + query;
}

/** Fail the test if the page attempts any request that is not the local file itself (MPES C-02, J7). */
export function guardNetwork(page: Page): string[] {
  const attempts: string[] = [];
  page.on('request', request => {
    const url = request.url();
    if (!/^(file|data|blob|about):/.test(url)) attempts.push(url);
  });
  page.on('websocket', socket => attempts.push(socket.url()));
  void page.route(/^(https?|wss?|ftp):/, route => route.abort());
  return attempts;
}

export function collectConsoleErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  return errors;
}

export async function expectAccessible(page: Page, label: string): Promise<void> {
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
  const summary = results.violations.map(v => `${v.id}: ${v.nodes.map(n => n.target.join(' ')).join(', ')}`);
  expect(summary, `axe violations on ${label}`).toEqual([]);
}
