# Handover

Updated 2026-10-10 (America/Toronto). Specification: [MPES](MPES.md) 3.0.0. Evidence: [verification/5.0.0-dev.md](verification/5.0.0-dev.md).

## 1. Version and milestone

Version 5.0.0-dev.0. M0–M4 are complete on `main` (PRs #13–#16; #16 merged with green CI). MPES 3.0.0 records the owner's decisions of 2026-10-10 (D-07 to D-13):
- a war-room HUD;
- photoreal imagery pre-rendered in Blender, with no runtime 3D;
- a single HTML file of at most 50 MB;
- integrated-graphics Windows 11 laptops as the reference;
- `dist/` no longer committed;
- GitHub as temporary QA space, with a local handoff package as the product.

The current milestone is **V1, the visual spike** (MPES §17), which ends at an owner GO/NO-GO gate. The rollback is tag `v4.1.0-dev.1`.

## 2. What works

- **Build and CI.** `npm run verify` runs typecheck, lint, unit tests, the build check and Playwright over `file://` in Chromium, Firefox and the installed Edge (`msedge` channel). The perf test then runs alone in its own project. CI runs on Windows (Node 24: all three browsers; Node 22: Chromium). The Windows CI renderer is WARP ("Microsoft Basic Render Driver"), which the perf test treats as software.
- **Rules** (`source/domain/`): all of MPES §6, schema-3 validators and backup envelope v1. 12 legacy 4.1 backups import unchanged. A property test checks that ledger replay equals live state.
- **Interface:** both roles, all eight phases, EN/FR, keyboard bidding, state-bound confirmations, private entry, export/import with undo, degraded states, gap meter, card impact preview. New session and Undo import persist across reloads (`tests/unit/controller.test.ts`, `recovery.spec.ts`).
- **Current art (to be replaced in V2):** 77 SVG illustrations and a procedural Three.js bay that recovers after WebGL context loss.
- **Last full run,** 2026-10-10 on Windows 11 (`npm run verify`): 140 unit tests PASS; 57 browser tests PASS, 10 skipped (engine-independent tests run in Chromium only).

## 3. Not done, or not yet matching MPES 3.0.0

- **V1 (in progress):**
  - pinned portable Blender in `.artifacts/tools`;
  - `art/blender/` scripts;
  - RECOVERY spike (hero still, turntable, 2 build angles with part layers, 3 card renders, AVIF vs WebP);
  - HUD prototype behind a flag on Pages;
  - measurements and `docs/verification/spike-visual.md`.
- **V2:**
  - all 77 subjects and the showcase;
  - HUD on every view;
  - Three.js removed;
  - `dist/` no longer committed, with `npm run check` comparing two builds (today it still compares the committed `dist/index.html`);
  - CI Pages deployment;
  - remove GitHub links from README and the guides;
  - debrief comparison chart;
  - French non-breaking spaces (`chooser.instructorDesc`, `chooser.handoff`).
- **M6 and M7:** see MPES §17. This includes the handoff package (`npm run package`, RQ-32).
- **Residual risks:**
  - real learners (S3);
  - Narrator and NVDA users;
  - a physical integrated-graphics laptop;
  - CI running Windows Server, not Windows 11.

## 4. In-progress work

Goal 1 (V1), owned by the current agent: MPES 3.0.0 on branch `goal1/mpes-3`.

## 5. Next action

Merge MPES 3.0.0. Then set up the pinned Blender toolchain and build the RECOVERY spike and HUD prototype. Then measure, publish on Pages for QA, and STOP for the owner's GO/NO-GO.

## 6. Rollback

Tag `v4.1.0-dev.1`. Its built file is `git show v4.1.0-dev.1:dist/index.html`. Old material also sits in the local, git-ignored `_archive/` until the owner deletes it.
