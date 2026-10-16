import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { BROWSERS, KPIS, METRICS, PROFILES, buildReport, renderMarkdown, statusOf, type RunFile } from '../perf-ref/report.ts';

const ID = 'run-1';
const at = { runId: ID, stamp: 's', commit: 'c', dirty: false };
/** A value within budget for every budgeted metric. */
const passing = Object.fromEntries(METRICS.filter(m => m.budget !== null).map(m => [m.id, 0]));

const run = (browser: string, profile: string, values: Record<string, number | null>, state: RunFile['state'] = 'OK', runId = ID): RunFile => ({
  meta: { runId, browser, browserVersion: '1', profile, viewport: { width: 1366, height: 768, scale: 1 }, cpuThrottle: 4, gpu: { vendor: 'Intel', renderer: 'ANGLE (Intel UHD Graphics 770)' }, idleSeconds: 60 },
  state, values, notes: {},
});
/** All six runs of a complete perf:ref, every budgeted metric within budget, with `change` applied to the first. */
const complete = (change: Record<string, number | null> = {}): RunFile[] =>
  BROWSERS.flatMap(browser => PROFILES.map(profile => run(browser, profile.id, { ...passing })))
    .map((r, i) => (i === 0 ? { ...r, values: { ...r.values, ...change } } : r));

describe('perf:ref report', () => {
  it('has one row per KPI of MPES §1.4, in order', () => {
    expect(KPIS).toHaveLength(12);
    expect(buildReport(complete(), at).kpis.map(r => r.kpi)).toEqual([...KPIS]);
  });

  it('has unique metric ids, each under a known KPI', () => {
    expect(new Set(METRICS.map(m => m.id)).size).toBe(METRICS.length);
    for (const metric of METRICS) expect(KPIS).toContain(metric.kpi);
  });

  it('reads a value against its budget, and a missing one as NOT_RUN', () => {
    const chooser = METRICS.find(m => m.id === 'chooserMs')!;
    expect(statusOf(chooser, 2000)).toBe('PASS');
    expect(statusOf(chooser, 2001)).toBe('FAIL');
    expect(statusOf(chooser, null)).toBe('NOT_RUN');
    expect(statusOf(chooser, undefined)).toBe('NOT_RUN');
  });

  it('takes the worst value over runs and fails the KPI when one metric is over budget', () => {
    const report = buildReport(complete({ chooserMs: 2500 }), at);
    const browser = report.kpis.find(r => r.kpi === 'Browser performance')!;
    const chooser = browser.metrics.find(m => m.id === 'chooserMs')!;
    expect(chooser.worst).toBe(2500);
    expect(chooser.status).toBe('FAIL');
    expect(browser.status).toBe('FAIL');
    expect(report.state).toBe('BASELINE');
  });

  it('is INCOMPLETE, and keeps no numbers from a run that failed its GPU check', () => {
    const report = buildReport([run('chromium', PROFILES[0].id, { chooserMs: 100 }, 'GPU_CHECK_FAILED')], at);
    expect(report.state).toBe('INCOMPLETE');
    expect(report.problems.join(' ')).toContain('GPU_CHECK_FAILED');
    expect(report.kpis.find(r => r.kpi === 'Browser performance')!.metrics.every(m => m.worst === null)).toBe(true);
    expect(buildReport([], at).state).toBe('INCOMPLETE');
  });

  // Codex G3 review finding 2: one Chromium profile holding only chooserMs was reported as a BASELINE.
  it('is INCOMPLETE unless both browsers ran every screen profile', () => {
    const five = complete().slice(1);
    const report = buildReport(five, at);
    expect(report.state).toBe('INCOMPLETE');
    expect(report.problems.join(' ')).toContain(`missing run: ${BROWSERS[0]} ${PROFILES[0].id}`);
    expect(buildReport([run('chromium', PROFILES[0].id, { chooserMs: 100 })], at).state).toBe('INCOMPLETE');
  });

  it('is INCOMPLETE when a budgeted metric is missing without a reason, and accepts one with a reason', () => {
    const missing = complete({ modelUpdateP95Ms: null });
    const report = buildReport(missing, at);
    expect(report.state).toBe('INCOMPLETE');
    expect(report.problems.join(' ')).toContain('modelUpdateP95Ms');
    missing[0]!.notes['modelUpdateP95Ms'] = 'why';
    expect(buildReport(missing, at).state).toBe('BASELINE');
  });

  it('is INCOMPLETE when a run file belongs to another run (a reused folder)', () => {
    const runs = complete();
    runs.push(run('chromium', PROFILES[0].id, { ...passing }, 'OK', 'run-0'));
    const report = buildReport(runs, at);
    expect(report.state).toBe('INCOMPLETE');
    expect(report.problems.join(' ')).toContain('run-0');
  });

  it('counts only this run\'s files, so an old file cannot change a number', () => {
    const runs = complete();
    runs.push(run('chromium', PROFILES[0].id, { ...passing, chooserMs: 9999 }, 'OK', 'run-0'));
    const chooser = buildReport(runs, at).kpis.flatMap(r => r.metrics).find(m => m.id === 'chooserMs')!;
    expect(chooser.worst).toBe(0);
  });

  it('renders every KPI and metric in the Markdown', () => {
    const text = renderMarkdown(buildReport(complete(), at));
    for (const kpi of KPIS) expect(text).toContain(kpi);
    for (const metric of METRICS) expect(text).toContain(metric.label);
  });
});

// The first idle baseline read 100% of a core on a page doing nothing: it was measured under the 4x CPU throttle, which
// is emulated by keeping the renderer busy (a blank page: 81% throttled, 2.3% not). Detaching the session that set a
// throttle clears it for the page, so the restore must come from a session that stays attached.
describe('perf:ref idle windows', () => {
  const spec = readFileSync('tests/perf-ref/perf-ref.spec.ts', 'utf8');
  const start = spec.indexOf('async function idle('), idle = spec.slice(start, spec.indexOf('\n}\n', start));

  it('measure unthrottled and restore the reference throttle, even on failure, on a session left attached', () => {
    expect(idle).toMatch(/pageCdp\.send\('Emulation\.setCPUThrottlingRate', \{ rate: 1 \}\)/);
    expect(idle).toMatch(/finally \{[^}]*pageCdp\.send\('Emulation\.setCPUThrottlingRate', \{ rate: THROTTLE \}\)/);
    expect(idle).not.toMatch(/pageCdp\.detach\(\)/);
  });
});
