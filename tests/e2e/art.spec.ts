// RQ-22 / RQ-23 (MPES §10.3, §11): 77 original illustrations are distinct, sanitised, labelled and
// inside their frame; the fullest vehicle per mission stays within the triangle and draw-call budget.
import { expect, test } from '@playwright/test';
import { build } from 'esbuild';
import { readFileSync, writeFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { guardNetwork } from './helpers.ts';

test('illustrations and vehicle budgets', async ({ page }, info) => {
  test.skip(info.project.name !== 'chromium', 'Geometry and SVG checks are engine-independent; run once.');
  const bundle = await build({ entryPoints: ['tests/e2e/harness/art-harness.ts'], bundle: true, write: false, format: 'iife', logLevel: 'silent' });
  const html = info.outputPath('art.html');
  writeFileSync(html, `<!doctype html><meta charset="utf-8"><style>${readFileSync('source/ui/styles.css', 'utf8')}</style><div id="art"></div><script>${bundle.outputFiles[0]!.text}</script>`);
  guardNetwork(page);
  await page.goto(pathToFileURL(html).href);

  const report = await page.evaluate(() => [...document.querySelectorAll<SVGSVGElement>('#art > svg')].map(svg => {
    const frame = svg.viewBox.baseVal;
    const outside = [...svg.querySelectorAll<SVGGraphicsElement>(':scope > g:last-of-type *')].filter(el => {
      const box = el.getBBox();
      return box.x < frame.x - 1 || box.y < frame.y - 1 || box.x + box.width > frame.width + 1 || box.y + box.height > frame.height + 1;
    }).length;
    return {
      id: svg.getAttribute('data-id'), label: svg.getAttribute('aria-label'), role: svg.getAttribute('role'),
      markup: (() => { const copy = svg.cloneNode(true) as SVGSVGElement; copy.removeAttribute('aria-label'); copy.removeAttribute('data-id'); return new XMLSerializer().serializeToString(copy); })(), unsafe: svg.querySelectorAll('script, foreignObject, image, use, a, [href], [style]').length, outside,
    };
  }));
  expect(report).toHaveLength(77);
  for (const art of report) {
    expect(art.role, art.id!).toBe('img');
    expect(art.label?.length, art.id!).toBeGreaterThan(3);
    expect(art.unsafe, art.id!).toBe(0);
    expect(art.outside, `${art.id} draws outside its frame`).toBe(0);
  }
  expect(new Set(report.map(a => a.markup)).size, 'every illustration is distinct').toBe(77);

  const stats = await page.evaluate(() => (window as unknown as { bayStats: { mission: string; meshes: number; triangles: number }[] }).bayStats);
  for (const s of stats) {
    expect(s.triangles, s.mission).toBeLessThanOrEqual(250_000);
    expect(s.meshes, s.mission).toBeLessThanOrEqual(150);
  }
  await info.attach('bay-budgets.json', { body: JSON.stringify(stats, null, 2), contentType: 'application/json' });
});
