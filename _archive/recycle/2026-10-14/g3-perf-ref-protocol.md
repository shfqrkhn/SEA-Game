# Fragment: reference-proxy measurement protocol (for MPES §14, goal G3)

Draft for the owner's merge into MPES §14 and `docs/verification/`. Plain language, no code. Nothing here changes a budget.

## 1. Purpose

No physical reference laptop will be tested. This protocol defines the stand-in: this PC's Intel UHD 770, driven the same way every time, so that a number taken before a change can be compared with a number taken after it. Its result is a baseline, not a verdict: it reports every gate as PASS or FAIL against the budgets in §10.3 and §14, but it never stops because a budget was missed. Only a wrong or missing graphics chip stops it.

## 2. The rig

1. **Browsers.** Chromium and Edge, both full browsers (not the stripped headless build), each started with the owner's graphics flags: Direct3D 11 through ANGLE, GPU on, the GPU blocklist ignored, and the low-power GPU forced. Playwright's own defaults that switch the GPU off are removed.
2. **Slowdown.** The page's processor is slowed fourfold through the browser's debugging interface, in every scenario.
3. **Screens.** Three profiles, each run in full: 1366×768 at scale 1, 1536×864 at scale 1.25, and 1280×720 at scale 1.5.
4. **The game.** The built file `dist/index.html`, opened from disk, rebuilt at the start of the run. The graphics chip is real: nothing pretends to be a GPU.
5. **A quiet PC.** Close other work first, run one browser at a time, and never alongside Blender, Codex jobs or the full test suite. A baseline taken on a busy PC is void and is taken again.

## 3. Gate zero: prove the graphics chip

Before any measurement, each browser is asked for its unmasked WebGL renderer. If the text does not contain "UHD Graphics 770" (for example the software renderer, or the PC's other graphics chip), the run stops at once, records the text it saw, and measures nothing. The report is then marked INCOMPLETE and is not a baseline.

## 4. What is measured

Each row below is measured on every screen profile in both browsers; the report keeps the worst value.

| Gate (MPES) | How it is read |
|---|---|
| File size ≤ 50 MB (§14) | Size of the built file |
| Chooser ready ≤ 2 s (§14) | Page start to the first frame showing the heading and the role buttons |
| Instructor with maximum saved state ≤ 3 s (§14) | Page start to the "Results to reconcile" heading, with the largest valid save (210 ledger entries, 70 lots, 10 teams) |
| Command response ≤ 100 ms, p95 (§14) | 40 bid clicks in a 10-team timed auction, click to finished result |
| Memory ≤ 400 MB and no growth across 10 cycles (§14) | Page memory plus decoded pixels after a full session; growth over ten rounds of re-rendering |
| Stills update ≤ 100 ms, angle change ≤ 50 ms, turntable step ≤ 50 ms (§10.3) | Without WebGL: purchase to decoded layer; angle switch; six turntable steps |
| 3D ready ≤ 3 s (§10.3, §14) | Opening the tracker to the first drawn model, on the real GPU |
| 3D update ≤ 100 ms (§10.3) | Recording a purchase to the model showing the part, three purchases |
| 3D memory ≤ 400 MB, proxy target ≤ 300 MB (§10.3, §14) | As above, reported against both limits |
| 3D frame cadence, p95 ≤ 33 ms (§14) | Gaps between animation frames over five seconds of the model turning |
| Idle CPU ≤ 3% over 60 s (§14) | After three quiet seconds, the processor time of all browser processes over 60 seconds, as a share of one core, on the chooser, the instructor with saved state and the tracker with the 3D model; plus the page's own busy share |
| INP ≤ 200 ms (§14) | The slowest of the real, trusted clicks and key presses of the run (setup, bids, tracker steps) |
| LCP ≤ 2.5 s (§14) | The browser's own figure for the chooser; a page opened from disk may report none, then the chooser-ready time stands in and the report says so |
| CLS ≤ 0.1 (§14) | Total unexpected layout movement on the chooser, instructor and tracker |
| No task over 200 ms after load (§14) | The longest main-thread task after the page finished loading, on the same views |
| Zero page errors; zero network requests (§1.4, §13) | Counted on every page of the run |

Idle windows run on the first screen profile only, to keep the run to about half an hour; set the idle length to zero to skip them (the report then says "not measured").

## 5. What is not measured yet

- **GPU time of a frame (≤ 16 ms, §14).** The page cannot reach the graphics timer of the showcase, so the report leaves it NOT_RUN. The animation-frame gap is the nearest figure and is not the same thing. Closing this needs a hook in the showcase or a browser trace and is a G3 follow-up.
- **The 2× GPU headroom** in the proxy definition (§14) has no number of its own; it is judged by reading the frame figures, not computed.
- **Memory "where headroom allows" ≤ 300 MB** is reported but is a target, not a gate.
- **Battery saver, dim panel, touchpad and 8 GB single-channel memory** cannot be set on this PC; they remain residual risk (§14, D-16).
- KPIs that are not performance (teaching, reliability, workload, learnability, realism, accessibility, maintainability, longevity) appear in the report as NOT_RUN with the place they are measured instead.

## 6. Procedure

1. Quiet slot: no other heavy work on the PC; note the time.
2. Run the reference-proxy command. It rebuilds the game, checks the graphics chip in each browser, runs both browsers through all three screen profiles, and writes its results under `.artifacts/perf-ref/<timestamp>/`: one file per browser and screen, then `report.json` and `report.md` with one row per KPI of §1.4.
3. If the report says INCOMPLETE, read its problem list, fix the rig (never the budget) and run again; keep nothing from an INCOMPLETE run.
4. The first complete report of a goal is **the baseline**. Copy its `report.md` into `docs/verification/` with the commit it describes before any change is made.
5. After each change, run again in a quiet slot and compare metric by metric with the baseline. A metric that rose by more than its run-to-run noise is a regression to explain; one over its budget is a FAIL to fix, test first.
6. Run-to-run noise is learned, not assumed: take the baseline twice and record the spread before relying on small differences.

## 7. Reporting

Every check is reported PASS, FAIL, NOT_RUN or BLOCKED with the command that produced it (AGENTS.md rule 6). A KPI row is FAIL if any of its measured metrics is over budget, PASS if at least one was measured and none failed, and NOT_RUN if none was. The proxy, not a laptop, stays a residual risk in the handover.
