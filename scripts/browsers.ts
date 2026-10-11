// Test browsers into the project (MPES C-13): npm run browsers [-- <engine> ...] (default chromium firefox). `npx
// playwright install` alone does not read playwright.config.ts, so it would install into the user's cache and the tests,
// which look in .artifacts/ms-playwright, would not find them. Edge is the copy installed with Windows. On CI, or when
// PLAYWRIGHT_BROWSERS_PATH is already set, that setting is kept, as playwright.config.ts does.
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(import.meta.dirname, '..');

/** The folder playwright.config.ts reads browsers from, or undefined when the environment decides. */
export function browsersPath(env: NodeJS.ProcessEnv = process.env, root = ROOT): string | undefined {
  if (env.CI || env.PLAYWRIGHT_BROWSERS_PATH) return env.PLAYWRIGHT_BROWSERS_PATH;
  return resolve(root, '.artifacts', 'ms-playwright');
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const engines = process.argv.slice(2).filter(a => !a.startsWith('-'));
  const path = browsersPath();
  const run = spawnSync(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['playwright', 'install', ...(engines.length ? engines : ['chromium', 'firefox'])], {
    cwd: ROOT, stdio: 'inherit', shell: process.platform === 'win32',
    env: { ...process.env, ...(path ? { PLAYWRIGHT_BROWSERS_PATH: path } : {}) },
  });
  process.exitCode = run.status ?? 1;
}
