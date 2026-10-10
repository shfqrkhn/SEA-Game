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

/** Run the page as on a machine without WebGL, so the showcase falls back to its still renders (MPES §10). */
export async function withoutWebgl(page: Page): Promise<void> {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (this: HTMLCanvasElement, type: string, ...rest: unknown[]) {
      return /webgl/.test(type) ? null : (original as (...a: unknown[]) => unknown).call(this, type, ...rest);
    } as typeof original;
  });
}

/**
 * Report a hardware GPU to the page. Test machines render WebGL in software, where the game shows still renders
 * instead (MPES §10); this lets the 3D showcase tests run there.
 */
export async function withGpu(page: Page): Promise<void> {
  await page.addInitScript(() => {
    const UNMASKED_RENDERER = 0x9246, RENDERER = 0x1f01;
    const original = WebGL2RenderingContext.prototype.getParameter;
    WebGL2RenderingContext.prototype.getParameter = function (this: WebGL2RenderingContext, name: number) {
      return name === UNMASKED_RENDERER || name === RENDERER ? 'Test GPU' : original.call(this, name);
    } as typeof original;
  });
}
