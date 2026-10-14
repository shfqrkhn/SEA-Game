// G3 reference-proxy report (MPES §14, §1.4): the metric catalogue, the budgets it is read against, and the
// JSON and Markdown the run writes. Pure functions only, so a unit test can check them without a browser.
//
// The budgets below repeat MPES §10.3 and §14 for READING a baseline. The enforcing copies stay in
// tests/e2e/perf.spec.ts and are not changed by this file; a run of perf:ref reports PASS or FAIL per metric but
// never fails the Playwright run because a budget was exceeded (a baseline must be recordable before any change).

export type Status = 'PASS' | 'FAIL' | 'NOT_RUN' | 'BLOCKED';

/** The 12 KPIs of MPES §1.4, in table order. */
export const KPIS = [
  'Teaching effectiveness',
  'Classroom reliability',
  'Instructor workload',
  'Learnability',
  'Responsive interface',
  'Browser performance',
  'Visual realism',
  'Runs in any classroom',
  'Accessibility and language',
  'Privacy and security',
  'Maintainability after handoff',
  'Longevity and zero cost',
] as const;
export type Kpi = typeof KPIS[number];

export interface MetricDef {
  id: string;
  label: string;
  unit: string;
  /** Upper limit (the value must be at most this), or null when the metric is informational. */
  budget: number | null;
  kpi: Kpi;
  /** Where the budget comes from. */
  gate: string;
  /** Measured by tests/e2e/perf.spec.ts as well as here. */
  inExistingSpec: boolean;
}

const BP = 'Browser performance';
const RI = 'Responsive interface';

// A budget of null marks context for reading the others: sample counts, the worst case behind a p95, the tier chosen.
export const METRICS: readonly MetricDef[] = [
  { id: 'htmlMB', label: 'HTML file size', unit: 'MB', budget: 50, kpi: BP, gate: '§14', inExistingSpec: true },
  { id: 'chooserMs', label: 'Time to interactive, chooser', unit: 'ms', budget: 2000, kpi: BP, gate: '§14', inExistingSpec: true },
  { id: 'maxStateStartMs', label: 'Time to interactive, instructor with maximum saved state', unit: 'ms', budget: 3000, kpi: BP, gate: '§14', inExistingSpec: true },
  { id: 'commandSamples', label: 'Command response, samples', unit: '', budget: null, kpi: BP, gate: '§14', inExistingSpec: true },
  { id: 'commandP95Ms', label: 'Command response, p95 (10-team timed auction, click to painted result)', unit: 'ms', budget: 100, kpi: BP, gate: '§14', inExistingSpec: true },
  { id: 'commandMaxMs', label: 'Command response, worst', unit: 'ms', budget: null, kpi: BP, gate: '§14', inExistingSpec: true },
  { id: 'maxStateMemoryMB', label: 'Memory, 70 lots and 10 teams (page heap and images)', unit: 'MB', budget: 400, kpi: BP, gate: '§14', inExistingSpec: true },
  { id: 'maxStateProcessMB', label: 'Memory, 70 lots and 10 teams (renderer and GPU processes)', unit: 'MB', budget: 400, kpi: BP, gate: '§14', inExistingSpec: false },
  { id: 'memoryGrowthMB', label: 'Memory growth over 10 phase cycles', unit: 'MB', budget: 5, kpi: BP, gate: '§14', inExistingSpec: true },
  { id: 'showcaseUpdateSamples', label: 'Stills update, samples', unit: '', budget: null, kpi: BP, gate: '§10.3', inExistingSpec: true },
  { id: 'showcaseUpdateP95Ms', label: 'Stills update after a purchase, p95', unit: 'ms', budget: 100, kpi: BP, gate: '§10.3', inExistingSpec: true },
  { id: 'showcaseUpdateMaxMs', label: 'Stills update after a purchase, worst', unit: 'ms', budget: null, kpi: BP, gate: '§10.3', inExistingSpec: true },
  { id: 'angleChangeMs', label: 'Stills angle change', unit: 'ms', budget: 50, kpi: BP, gate: '§10.3', inExistingSpec: true },
  { id: 'turntableStepMaxMs', label: 'Turntable step, worst of 6', unit: 'ms', budget: 50, kpi: BP, gate: '§10.3', inExistingSpec: true },
  { id: 'studentMemoryMB', label: 'Memory, student tracker with stills (page heap and images)', unit: 'MB', budget: 400, kpi: BP, gate: '§10.3', inExistingSpec: true },
  { id: 'studentProcessMB', label: 'Memory, student tracker with stills (renderer and GPU processes)', unit: 'MB', budget: 400, kpi: BP, gate: '§10.3', inExistingSpec: false },
  { id: 'modelReadyMs', label: '3D model ready, worst tracker (opening click to first drawn model)', unit: 'ms', budget: 3000, kpi: BP, gate: '§10.3, §14', inExistingSpec: true },
  { id: 'modelReadyFirstMs', label: '3D model ready, first tracker', unit: 'ms', budget: null, kpi: BP, gate: '§10.3, §14', inExistingSpec: true },
  { id: 'modelUpdateSamples', label: '3D model update, samples', unit: '', budget: null, kpi: BP, gate: '§10.3', inExistingSpec: true },
  { id: 'modelUpdateP95Ms', label: '3D model update after a purchase, p95 (click to the painted draw with the part)', unit: 'ms', budget: 100, kpi: BP, gate: '§10.3', inExistingSpec: true },
  { id: 'modelUpdateMaxMs', label: '3D model update after a purchase, worst', unit: 'ms', budget: null, kpi: BP, gate: '§10.3', inExistingSpec: true },
  { id: 'modelMemoryMB', label: 'Memory, 3D showcase (page heap and images)', unit: 'MB', budget: 400, kpi: BP, gate: '§10.3', inExistingSpec: true },
  { id: 'modelProcessMB', label: 'Memory, 3D showcase (renderer and GPU processes, textures included)', unit: 'MB', budget: 400, kpi: BP, gate: '§10.3', inExistingSpec: false },
  { id: 'modelMemoryTargetMB', label: 'Memory, 3D showcase, renderer and GPU processes (proxy target)', unit: 'MB', budget: 300, kpi: BP, gate: '§14', inExistingSpec: false },
  { id: 'turningDraws', label: '3D showcase, draws in 5 s of turning', unit: '', budget: null, kpi: BP, gate: '§14', inExistingSpec: false },
  { id: 'frameP95Ms', label: '3D showcase, p95 main-thread time of a draw over 5 s of turning', unit: 'ms', budget: 33, kpi: BP, gate: '§14', inExistingSpec: false },
  { id: 'drawGapP95Ms', label: '3D showcase, p95 gap between draws (the pacer leaves at least twice a draw cost)', unit: 'ms', budget: null, kpi: BP, gate: '§10.3', inExistingSpec: false },
  { id: 'modelTier', label: '3D showcase, resolution tier settled on (0 is full)', unit: '', budget: null, kpi: BP, gate: '§10.3', inExistingSpec: false },
  { id: 'gpuFrameMs', label: '3D showcase, p95 GPU time of a draw', unit: 'ms', budget: 16, kpi: BP, gate: '§14', inExistingSpec: false },
  { id: 'idleCpuChooserPct', label: 'Idle CPU, chooser (all browser processes, % of one core)', unit: '%', budget: 3, kpi: BP, gate: '§14', inExistingSpec: false },
  { id: 'idleCpuInstructorPct', label: 'Idle CPU, instructor with saved state', unit: '%', budget: 3, kpi: BP, gate: '§14', inExistingSpec: false },
  { id: 'idleCpuTrackerPct', label: 'Idle CPU, student tracker with 3D showcase', unit: '%', budget: 3, kpi: BP, gate: '§14', inExistingSpec: false },
  { id: 'idleMainThreadMaxPct', label: 'Idle main-thread busy share, worst of the three views', unit: '%', budget: 3, kpi: BP, gate: '§14', inExistingSpec: false },
  { id: 'inpMs', label: 'Interaction to next paint (real clicks, worst)', unit: 'ms', budget: 200, kpi: RI, gate: '§14, §1.4', inExistingSpec: false },
  { id: 'lcpMs', label: 'Largest contentful paint (chooser)', unit: 'ms', budget: 2500, kpi: RI, gate: '§14, §1.4', inExistingSpec: false },
  { id: 'clsScore', label: 'Cumulative layout shift (every page; worst)', unit: '', budget: 0.1, kpi: RI, gate: '§14, §1.4', inExistingSpec: false },
  { id: 'longTaskMaxMs', label: 'Longest task after load (every page; worst)', unit: 'ms', budget: 200, kpi: RI, gate: '§14, §1.4', inExistingSpec: false },
  { id: 'pageErrors', label: 'Page errors and console errors', unit: 'count', budget: 0, kpi: 'Runs in any classroom', gate: '§1.4', inExistingSpec: false },
  { id: 'egressAttempts', label: 'Network requests other than the file itself', unit: 'count', budget: 0, kpi: 'Privacy and security', gate: '§13, §1.4', inExistingSpec: false },
];

/** The browsers and screens of MPES §14; a baseline needs every pair. Idle windows run on the first screen only. */
export const BROWSERS = ['chromium', 'msedge'] as const;
export const PROFILES = [
  { id: '1366x768at1', width: 1366, height: 768, scale: 1 },
  { id: '1536x864at1.25', width: 1536, height: 864, scale: 1.25 },
  { id: '1280x720at1.5', width: 1280, height: 720, scale: 1.5 },
] as const;
export type Profile = typeof PROFILES[number];

/** KPIs that perf:ref cannot measure, and where they are measured instead. */
export const OTHER_KPI_NOTES: Partial<Record<Kpi, string>> = {
  'Teaching effectiveness': 'Owner rubric and pre/post check (BLOCKED-owner); not a performance measure.',
  'Classroom reliability': 'Fault tests (G3, tests/e2e); not a performance measure.',
  'Instructor workload': 'Click and key counts from e2e traces (G3); dry run by the owner.',
  Learnability: 'Scripted novice e2e (G3); dry run by the owner.',
  'Visual realism': 'Owner side-by-side review; size and contrast tests elsewhere.',
  'Accessibility and language': 'axe and manual passes (tests/e2e/a11y.spec.ts, G4).',
  'Maintainability after handoff': 'Two-build comparison (npm run check).',
  'Longevity and zero cost': 'Dependency and API review.',
};

export interface RunMeta {
  /** The run that wrote the file (one per `npm run perf:ref`); files from another run are not counted. */
  runId: string;
  browser: string;
  browserVersion: string;
  profile: string;
  viewport: { width: number; height: number; scale: number };
  cpuThrottle: number;
  gpu: { vendor: string; renderer: string };
  idleSeconds: number;
}

export interface RunFile {
  meta: RunMeta;
  /** 'OK', or the reason the run stopped before measuring (for example a wrong GPU). */
  state: 'OK' | 'GPU_CHECK_FAILED' | 'ERROR';
  message?: string;
  /** Metric id to value; absent or null means not measured in this run. */
  values: Record<string, number | null>;
  /** Metric id to a short note (proxy used, why not measured). */
  notes: Record<string, string>;
}

export function statusOf(def: MetricDef, value: number | null | undefined): Status {
  if (value === null || value === undefined || Number.isNaN(value)) return 'NOT_RUN';
  if (def.budget === null) return 'PASS';
  return value <= def.budget ? 'PASS' : 'FAIL';
}

export interface MetricRow {
  id: string;
  label: string;
  unit: string;
  budget: number | null;
  gate: string;
  /** Worst value over all runs that measured it. */
  worst: number | null;
  runs: { run: string; value: number | null; status: Status; note?: string }[];
  status: Status;
}

export interface KpiRow {
  kpi: Kpi;
  status: Status;
  detail: string;
  metrics: MetricRow[];
}

const runName = (run: RunFile) => `${run.meta.browser} ${run.meta.profile}`;

/** FAIL if any entry failed, PASS if at least one passed, else NOT_RUN. */
function worstOf(statuses: Status[]): Status {
  if (statuses.includes('FAIL')) return 'FAIL';
  if (statuses.includes('PASS')) return 'PASS';
  return 'NOT_RUN';
}

/** One row per KPI, built from every run file. A KPI is FAIL if any measured metric fails, PASS if at least one was measured and none failed. */
function buildKpiRows(runs: RunFile[]): KpiRow[] {
  const measuredRuns = runs.filter(run => run.state === 'OK');
  return KPIS.map(kpi => {
    const defs = METRICS.filter(def => def.kpi === kpi);
    if (defs.length === 0) return { kpi, status: 'NOT_RUN' as Status, detail: OTHER_KPI_NOTES[kpi] ?? 'Not measured by perf:ref.', metrics: [] };
    const metrics: MetricRow[] = defs.map(def => {
      const perRun = measuredRuns.map(run => {
        const value = run.values[def.id] ?? null;
        const note = run.notes[def.id];
        return { run: runName(run), value, status: statusOf(def, value), ...(note ? { note } : {}) };
      });
      const numbers = perRun.map(r => r.value).filter((v): v is number => v !== null);
      const worst = numbers.length ? Math.max(...numbers) : null;
      return { id: def.id, label: def.label, unit: def.unit, budget: def.budget, gate: def.gate, worst, runs: perRun, status: worstOf(perRun.map(r => r.status)) };
    });
    const status = worstOf(metrics.map(m => m.status));
    const failed = metrics.filter(m => m.status === 'FAIL').map(m => m.id);
    const unmeasured = metrics.filter(m => m.status === 'NOT_RUN').map(m => m.id);
    const detail = [failed.length ? `over budget: ${failed.join(', ')}` : '', unmeasured.length ? `not measured: ${unmeasured.join(', ')}` : ''].filter(Boolean).join('; ') || 'every metric within budget';
    return { kpi, status, detail, metrics };
  });
}

export interface Report {
  stamp: string;
  commit: string;
  dirty: boolean;
  /** INCOMPLETE when any run stopped before measuring; the rows are then not a baseline. */
  state: 'BASELINE' | 'INCOMPLETE';
  problems: string[];
  runs: RunMeta[];
  kpis: KpiRow[];
}

/**
 * The report of one run. It is a BASELINE only when this run (`runId`) wrote every browser and screen pair, each
 * measured, and each gives every budgeted metric a value or the reason it has none; anything else is INCOMPLETE, and
 * files another run left in the folder are listed as problems and not counted.
 */
export function buildReport(all: RunFile[], at: { runId: string; stamp: string; commit: string; dirty: boolean }): Report {
  const problems: string[] = [];
  for (const run of all) if (run.meta.runId !== at.runId) problems.push(`${runName(run)}: a file from another run (${run.meta.runId}), not counted`);
  const runs = all.filter(run => run.meta.runId === at.runId);
  for (const browser of BROWSERS) for (const profile of PROFILES) {
    if (!runs.some(run => run.meta.browser === browser && run.meta.profile === profile.id)) problems.push(`missing run: ${browser} ${profile.id}`);
  }
  for (const run of runs) {
    if (run.state !== 'OK') { problems.push(`${runName(run)}: ${run.state}${run.message ? ` (${run.message})` : ''}`); continue; }
    const unexplained = METRICS.filter(def => def.budget !== null && (run.values[def.id] ?? null) === null && !run.notes[def.id]).map(def => def.id);
    if (unexplained.length) problems.push(`${runName(run)}: not measured and no reason given: ${unexplained.join(', ')}`);
  }
  return { stamp: at.stamp, commit: at.commit, dirty: at.dirty, state: problems.length ? 'INCOMPLETE' : 'BASELINE', problems, runs: runs.map(run => run.meta), kpis: buildKpiRows(runs) };
}

const fmt = (value: number | null, unit: string) => value === null ? 'n/a' : `${Math.round(value * 100) / 100}${unit ? ` ${unit}` : ''}`;

export function renderMarkdown(report: Report): string {
  const lines: string[] = [];
  lines.push(`# Reference-proxy baseline ${report.stamp}`, '');
  lines.push(`State: **${report.state}**. Commit ${report.commit}${report.dirty ? ' (working tree had uncommitted changes)' : ''}.`, '');
  if (report.problems.length) lines.push('Problems:', ...report.problems.map(p => `- ${p}`), '');
  lines.push('Runs:', ...report.runs.map(r => `- ${r.browser} ${r.browserVersion}, profile ${r.profile} (${r.viewport.width}x${r.viewport.height} at ${r.viewport.scale}), ${r.cpuThrottle}x CPU throttle, GPU ${r.gpu.renderer}, idle window ${r.idleSeconds} s`), '');
  lines.push('## KPIs (MPES §1.4)', '', '| KPI | Status | Detail |', '|---|---|---|');
  for (const row of report.kpis) lines.push(`| ${row.kpi} | ${row.status} | ${row.detail} |`);
  lines.push('', '## Metrics (worst value over all runs)', '', '| KPI | Metric | Worst | Budget | Status | Gate |', '|---|---|---|---|---|---|');
  for (const row of report.kpis) for (const m of row.metrics) lines.push(`| ${row.kpi} | ${m.label} | ${fmt(m.worst, m.unit)} | ${m.budget === null ? 'none' : fmt(m.budget, m.unit)} | ${m.status} | ${m.gate} |`);
  lines.push('', '## Every run', '');
  for (const row of report.kpis) for (const m of row.metrics) {
    lines.push(`- ${m.id}: ${m.runs.map(r => `${r.run} ${fmt(r.value, '')} ${r.status}${r.note ? ` [${r.note}]` : ''}`).join('; ') || 'no run'}`);
  }
  lines.push('');
  return lines.join('\n');
}
