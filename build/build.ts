// Build CLI (MPES §5.5, D-12). Usage: node build/build.ts [--check]
//   (no flag)  write dist/index.html (dist/ is generated and never committed)
//   --check    build twice from source and fail unless both builds are byte-identical
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { OUT, render } from './render.ts';

const describe = (html: string) => `${Buffer.byteLength(html, 'utf8')} bytes, sha256 ${createHash('sha256').update(html, 'utf8').digest('hex')}`;

async function main(): Promise<void> {
  const html = await render();
  if (process.argv.includes('--check')) {
    const again = await render();
    if (again !== html) {
      console.error('Two builds from the same source differ: the build is not deterministic.');
      process.exit(1);
    }
    console.log(`Two builds are byte-identical (${describe(html)})`);
    return;
  }
  mkdirSync(dirname(OUT), { recursive: true });
  if (existsSync(OUT) && readFileSync(OUT, 'utf8') === html) {
    console.log(`dist/index.html unchanged (${describe(html)})`);
    return;
  }
  writeFileSync(OUT, html, 'utf8');
  console.log(`dist/index.html written (${describe(html)})`);
}

main().catch((error: unknown) => { console.error(error instanceof Error ? error.message : error); process.exit(1); });
