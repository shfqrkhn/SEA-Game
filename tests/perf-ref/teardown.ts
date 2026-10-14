// After the perf:ref run: gather the per-run files into report.json and report.md in the same folder.
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { buildReport, renderMarkdown, type RunFile } from './report.ts';

function git(...args: string[]): string {
  try { return execFileSync('git', args, { encoding: 'utf8' }).trim(); } catch { return ''; }
}

export default function teardown(): void {
  const dir = process.env.PERF_REF_DIR;
  if (!dir || !existsSync(dir)) {
    console.log('perf:ref: no output folder, nothing to report');
    return;
  }
  const runs = readdirSync(dir).filter(name => name.endsWith('.run.json')).sort()
    .map(name => JSON.parse(readFileSync(path.join(dir, name), 'utf8')) as RunFile);
  const report = buildReport(runs, process.env.PERF_REF_STAMP ?? path.basename(dir), git('rev-parse', 'HEAD') || 'unknown', git('status', '--porcelain') !== '');
  writeFileSync(path.join(dir, 'report.json'), JSON.stringify(report, null, 2) + '\n');
  writeFileSync(path.join(dir, 'report.md'), renderMarkdown(report));
  console.log(`perf:ref: ${report.state}, report in ${dir}`);
}
