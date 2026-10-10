# Handover

Updated 2026-10-10 (America/Toronto). Specification: [MPES](MPES.md) 4.0.0. Evidence: [verification/5.0.0-dev.md](verification/5.0.0-dev.md), [verification/spike-visual.md](verification/spike-visual.md).

## 1. Version and milestone

Version 5.0.0-dev.0. M0–M4 and V1 (visual spike) are complete and on `main`. **V2 (visual production) is in progress on branch `goal2/art`**, not yet pushed or merged. The rollback is tag `v4.1.0-dev.1`.

## 2. What works

- **Game:** all of MPES §6 for both roles, all eight phases, EN/FR, schema-3 saves and backups, private entry, degraded states. Legacy 4.1 backups import.
- **V2 on `goal2/art`:**
  - war-room HUD on every view, with a projector theme from the menu (MPES §7.1);
  - setup shows the defaults first and keeps options behind "More options"; the instructor picks the bid increment ($50,000 to $250,000);
  - the live lot fits 1280×720 with every action visible; the student's card entry suggests the lot's category cards by name;
  - debrief class chart and presentation questions; French spacing; stricter save invariants;
  - `dist/` no longer committed; `npm run check` compares two builds; CI deploys `main` to Pages for QA only.
- **Imagery** (`content/renders/`, 821 AVIF, 6.2 MB): 6 vehicles (hero, 24-frame turntable, front and rear build layers for all 49 parts) and 71 cards, from the Blender pipeline in [art/README.md](../art/README.md).
- **Interactive 3D showcase** (MPES 4.0.0 §10, owner request): on the student tracker the team's vehicle turns slowly by itself, can be dragged or turned with buttons, pauses on request and under reduced motion, and gains each part as it is recorded. The model is `content/models/showcase.glb` (all bases and parts, about 570,000 triangles, 4.2 MB deflated), embedded once. Without WebGL 2, on a software renderer, or if the model fails to load, the showcase shows the stills. three.js 0.186.1 is bundled for the showcase only.
- **Tests:** `npm run verify` (typecheck, lint, unit, build check, Playwright in Chromium, Firefox and Edge, then perf alone). 3D tests spoof a hardware renderer with `withGpu()` (`tests/e2e/helpers.ts`), because test browsers render WebGL in software, which the product treats as no GPU.

## 3. Not done

- **AI-assisted art upgrade (D-14), running:** the owner rated the models at a third to half of the wanted quality. Concept images for every part, vehicle, the UI and the process badges were generated with the owner's Codex subscription (`node art/tools/concepts.ts`; local only, in `.artifacts/concepts-v3/`). Eight Codex jobs are upgrading `hull8.py` and the seven part modules in copies under `.artifacts/codex-prod/<job>/` (briefs in each `task.md`, budgets checked by `art/blender/tris.py`). Next: review each job's renders and notes, merge the owned files, `tris.py` PASS, export and pack the model, re-render the stills and cards, rerun `npm run verify`.
- **Firefox and Edge** runs of the 3D showcase tests on this branch: NOT_RUN since the 3D change.
- **Push, PR, CI, merge** of `goal2/art`.
- **M6 and M7:** MPES §17, including the handoff package (RQ-32).
- **Residual risks:** real learners (S3); Narrator and NVDA users; a physical integrated-graphics laptop (the 3D showcase has only been measured on an RTX 5060 Ti and in software rendering); CI runs Windows Server, not Windows 11; art quality is the owner's judgement.

## 4. In-progress work

The Codex art upgrade above. Each job may edit only its own file; anything else it changes is discarded at merge. `.artifacts/codex3d/combat/` holds the earlier single-vehicle trial used as the quality reference.

## 5. Next action

**Agent:** merge the Codex results (section 3), then push `goal2/art`, open the PR, and merge on green CI.
**Owner:** judge the upgraded models on the Pages QA build once merged: student tracker, any mission, record a few parts, and watch the vehicle turn.

## 6. Rollback

Tag `v4.1.0-dev.1`. Its built file is `git show v4.1.0-dev.1:dist/index.html`. Old material sits in `_archive/` (read-only; recycled files in `_archive/recycle/<date>/`) until the owner deletes it.
