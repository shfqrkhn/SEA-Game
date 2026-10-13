// Playwright global setup: the end-to-end tests load dist/index.html, so a run against a build older than the source
// tests old code and can pass or fail for the wrong reason (owner FIX 4, 2026-10-13: a pause fix looked unfixed).
// Render the build from source once and refuse to start unless dist/index.html is that build.
import { existsSync, readFileSync } from 'node:fs';
import { OUT, render } from '../../build/render.ts';

export default async function freshBuild(): Promise<void> {
  const html = await render();
  if (!existsSync(OUT) || readFileSync(OUT, 'utf8') !== html) {
    throw new Error('dist/index.html is not the build of the current source: run `npm run build` first.');
  }
}
