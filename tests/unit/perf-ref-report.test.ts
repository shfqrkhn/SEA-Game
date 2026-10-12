import { describe, expect, it } from 'vitest';
import { KPIS, METRICS, buildReport, renderMarkdown, statusOf, type RunFile } from '../perf-ref/report.ts';

const run = (profile: string, values: Record<string, number | null>, state: RunFile['state'] = 'OK'): RunFile => ({
  meta: { browser: 'chromium', browserVersion: '1', profile, viewport: { width: 1366, height: 768, scale: 1 }, cpuThrottle: 4, gpu: { vendor: 'Intel', renderer: 'ANGLE (Intel UHD Graphics 770)' }, idleSeconds: 60 },
  state, values, notes: {},
});

describe('perf:ref report', () => {
  it('has one row per KPI of MPES §1.4, in order', () => {
    expect(KPIS).toHaveLength(12);
    const rows = buildReport([run('a', {})], 's', 'c', false).kpis;
    expect(rows.map(r => r.kpi)).toEqual([...KPIS]);
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
    const report = buildReport([run('a', { chooserMs: 900 }), run('b', { chooserMs: 2500 })], 's', 'c', false);
    const browser = report.kpis.find(r => r.kpi === 'Browser performance')!;
    const chooser = browser.metrics.find(m => m.id === 'chooserMs')!;
    expect(chooser.worst).toBe(2500);
    expect(chooser.status).toBe('FAIL');
    expect(browser.status).toBe('FAIL');
    expect(report.state).toBe('BASELINE');
  });

  it('is INCOMPLETE, and keeps no numbers from a run that failed its GPU check', () => {
    const report = buildReport([run('a', { chooserMs: 100 }, 'GPU_CHECK_FAILED')], 's', 'c', true);
    expect(report.state).toBe('INCOMPLETE');
    expect(report.problems[0]).toContain('GPU_CHECK_FAILED');
    expect(report.kpis.find(r => r.kpi === 'Browser performance')!.metrics.every(m => m.worst === null)).toBe(true);
    expect(buildReport([], 's', 'c', false).state).toBe('INCOMPLETE');
  });

  it('renders every KPI and metric in the Markdown', () => {
    const text = renderMarkdown(buildReport([run('a', { chooserMs: 900 })], 's', 'c', false));
    for (const kpi of KPIS) expect(text).toContain(kpi);
    for (const metric of METRICS) expect(text).toContain(metric.label);
  });
});
