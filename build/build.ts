// Build CLI (MPES §5.5). Usage: node build/build.ts [--check]
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { OUT, render } from './render.ts';

async function main(): Promise<void> {
  const html = await render();
  const bytes = Buffer.byteLength(html, 'utf8');
  const digest = createHash('sha256').update(html, 'utf8').digest('hex');
  if (process.argv.includes('--check')) {
    if (!existsSync(OUT) || readFileSync(OUT, 'utf8') !== html) {
      console.error('dist/index.html differs from a fresh build. Run: npm run build');
      process.exit(1);
    }
    console.log(`dist/index.html matches source (${bytes} bytes, sha256 ${digest})`);
    return;
  }
  mkdirSync(dirname(OUT), { recursive: true });
  if (existsSync(OUT) && readFileSync(OUT, 'utf8') === html) {
    console.log(`dist/index.html unchanged (${bytes} bytes, sha256 ${digest})`);
    return;
  }
  writeFileSync(OUT, html, 'utf8');
  console.log(`dist/index.html written (${bytes} bytes, sha256 ${digest})`);
}


main().catch((error: unknown) => { console.error(error instanceof Error ? error.message : error); process.exit(1); });
