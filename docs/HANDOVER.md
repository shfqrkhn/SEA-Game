# Handover

Updated 2026-10-10 (America/Toronto). Specification: [MPES](MPES.md) 3.1.0. Evidence: [verification/5.0.0-dev.md](verification/5.0.0-dev.md), [verification/spike-visual.md](verification/spike-visual.md).

## 1. Version and milestone

Version 5.0.0-dev.0. M0–M4 are complete. MPES 3.0.0 (owner decisions D-07 to D-13) is on `main`. **V1, the visual spike, is complete and waiting at the owner's GO/NO-GO gate** (MPES §17). The rollback is tag `v4.1.0-dev.1`.

## 2. What works

- **Game:** all of MPES §6 for both roles, all eight phases, EN/FR, schema-3 saves and backups, private entry, degraded states. Legacy 4.1 backups import. New session and Undo import persist across reloads.
- **Art pipeline** ([art/README.md](../art/README.md)):
  - Blender 5.2.2 LTS, pinned and hash-verified, unzipped into `.artifacts/tools`;
  - procedural vehicle and part scripts in `art/blender/`;
  - AVIF q65 encoder with a hashed manifest, preview compositor and measurement tool in `art/tools/`.
- **Spike assets** (`content/renders/spike/`, 543 KB; sizes favour performance over looks: hero 1600×900, build angles 1280×720, turntable 960×540, cards 512², see art/README.md): the RECOVERY vehicle (hero still, 24-frame turntable, front and rear build angles) and parts CAP-B, COM-E and ACC-F (card renders and build layers).
- **HUD prototype behind `?hud=1`:**
  - war-room theme (`source/ui/styles.css`, `data-hud`);
  - card renders on lots;
  - the pre-rendered showcase (`source/showcase/`) on the student tracker, stacking the layers of the team's real purchases, with front, rear and turntable views.
  The build embeds the renders once as an inert JSON block. The CSP is unchanged.
- **Measurements** (4× CPU throttling, also with the GPU disabled):
  - all budgets PASS, including on a 42 MB stress file: chooser at most 0.77 s, showcase update at most 31 ms, turntable scrub at most 8 ms;
  - projected full HTML file about 13 MB.
- **Chooser:** always shows the embedded hero still (with or without `?hud=1`), so no WebGL runs on the first screen. The WebGL bay remains only on the student tracker outside the HUD until V2.
- **CI stability (2026-10-10, branch `fix/ci-flakes`):** main CI run 38064762108 on c6a5078 failed 3 of 70 tests, withdrawing the earlier OMNI ASSURED claim for key b17cdf5260ee9eb3. Causes from the traces: (1) the WebGL context-loss test waited only 5 s for the bay, which takes 5–16 s to start with software WebGL on GPU-less runners, so it now waits up to 30 s (readiness only; perf.spec.ts holds the budget); (2) Firefox J1 hung for 10 minutes because the Sell button sat half below the 1280×720 fold, the click was lost, and `#outcome` was awaited without a bound. Lot actions now go through `act()` (centre, then click), and `actionTimeout` is 60 s (15 s proved too short: renderers can stall for about 15 s under parallel load). See AGENTS.md rule 10.
- **Tests:** `npm run verify` (typecheck, lint, unit, build check, Playwright in Chromium, Firefox and Edge, then perf alone), including `tests/e2e/hud.spec.ts` and `tests/unit/build.test.ts` render-embedding checks.

## 3. Not done

- **V2:**
  - all 77 subjects;
  - HUD as the default for every view;
  - Three.js and the WebGL bay removed;
  - `dist/` no longer committed, with CI deploying Pages and `npm run check` comparing two builds;
  - GitHub links removed from README and the guides;
  - debrief comparison chart;
  - French non-breaking spaces;
  - stricter validators;
  - HUD layout keeps the live lot's Sell, No sale and Next lot actions fully visible at 1280×720 without scrolling (MPES 3.1.0 §7.1).
- **M6 and M7:** MPES §17, including the handoff package (RQ-32).
- **Residual risks:** real learners (S3); Narrator and NVDA users; a physical integrated-graphics laptop; CI runs Windows Server, not Windows 11; art quality is the owner's judgement.

## 4. In-progress work

`fix/ci-flakes`: the two CI test fixes above, then a fresh three-pass convergence (CI, clean clone with `npm ci` and `npm run verify`, and the owner journey in three browsers). Its receipt goes in `.artifacts/convergence/`. The V1 spike itself is unchanged and merged.

## 5. Next action

**Owner:** review the spike on Pages, then reply GO, GO with changes, or NO-GO.
- Chooser: https://shfqrkhn.github.io/SEA-Game/dist/?hud=1
- Student tracker: https://shfqrkhn.github.io/SEA-Game/dist/?role=student&hud=1. Join with any code such as `SEA3-T2-0123456789ABCDEF`, mission **Recovery**, then go to the auction. Record lot 5 card `COM-E`, lot 7 card `ACC-F`, and round 2 lot 1 card `CAP-B`.
- Instructor live lot: https://shfqrkhn.github.io/SEA-Game/dist/?role=instructor&hud=1

What to check:
- vehicle and part realism;
- the war-room look;
- the showcase layers lining up at the front and rear angles;
- turntable smoothness;
- readability on your projector.

After GO, run Goal 2 (V2 production).

## 6. Rollback

Tag `v4.1.0-dev.1`. Its built file is `git show v4.1.0-dev.1:dist/index.html`. Old material also sits in the local, git-ignored `_archive/` until the owner deletes it.
