# Handover

Updated 2026-10-11 (America/Toronto). Specification: [MPES](MPES.md) 4.3.0. Evidence: [verification/0.5.1.0.md](verification/0.5.1.0.md), [verification/0.5.0.0.md](verification/0.5.0.0.md), [verification/spike-visual.md](verification/spike-visual.md).

## 1. Version and milestone

Version 0.5.1.0 beta (four-part MAJOR.MINOR.PATCH.BUILD, MPES §19.2; 1.0.0.0 only once out of beta: MPES §19.2 exit criteria, including every owner gate). M0–M4, V1, V2 (goal G1, tag `v0.5.0.0`) and G2 (owner fixes and the docs regime, branch `goal2b/foundation`, tag `v0.5.1.0` once the owner says GO on the gallery and CI is green twice) are complete. The rollback is tag `v4.1.0-dev.1`.

**Plan to beta exit (MPES §17), one PR and one tag per goal:**

| Goal | Version | Content |
|---|---|---|
| G3 proxy + runtime | 0.6.0.0 | `npm run perf:ref` on the Intel UHD 770 proxy (D-16), every §14 gate, baked lighting, adaptive tiers, context-loss recovery, touchpad and panel safety |
| G4 hyper-real assets | 0.7.0.0 | vehicles, parts and cards raised towards the Codex concepts within budgets; textures and decals where they pay |
| G5 classroom | 0.8.0.0 | UX, workload, teaching aids, game feel §7.7, projector mode §7.8, fault tests |
| G6 hardening | 0.9.0.0 | manual accessibility, Windows 11 matrix, egress, security and content review, `npm run package` |
| G7 release candidate | 0.9.1.0 | freeze, three release passes (§21), beta handoff package |
| G8 beta exit | 1.0.0.0 | only when every MPES §19.2 criterion holds, owner results included |

Shared rules for every goal: `AGENTS.md`. KPIs and priority: MPES §1.4.

## 2. What works

- **Game:** all of MPES §6 for both roles, all eight phases, EN/FR, schema-3 saves and backups, private entry, degraded states. Legacy 4.1 backups import.
- **V2:** war-room HUD on every view with a projector theme; setup defaults first; bid increment chosen at setup; live lot fits 1280×720; debrief chart and questions; `dist/` not committed, `npm run check` compares two builds, CI deploys `main` to Pages for QA only.
- **G2:**
  - copyright "Copyright (c) 2026 Shafiqur Rahman Khan" in `LICENSE`, About and `package.json` (`tests/unit/build.test.ts`);
  - About shows the licence and notices reflowed (`source/ui/reflow.ts`, `tests/unit/reflow.test.ts`, visual baselines at 1366×768 and 320 px);
  - the chooser shows all six vehicles as a lineup of hero stills, selected one large, keyboard and touch, EN/FR (`tests/e2e/chooser.spec.ts`, visual baselines);
  - `DecodedImages` never evicts an image on screen or a prepared one (`tests/unit/showcase.test.ts`);
  - `npm run gallery` writes the offline review page `.artifacts/review/<version>.html` (`tests/unit/gallery.test.ts`);
  - MPES has no code and names every file, script, pin, CSP directive and goal (`tests/unit/mpes.test.ts`); a Codex session given only MPES wrote a rebuild plan and its gaps were fixed (`docs/verification/0.5.1.0.md`);
  - `npm run codebase` writes `docs/CODEBASE.md`, which rebuilds every tracked file (`tests/unit/codebase.test.ts`);
  - `npm run archive:prep` (dry run; `--apply` only on the owner's cleanup request) and `RESTORE.md` (`tests/unit/archive.test.ts`);
  - `AGENTS.md` rule 21: driving Codex headless.
- **Imagery and 3D:** 821 AVIF stills (7.8 MB) and one packed model (all six vehicles, every part), Blender pipeline in [art/README.md](../art/README.md); the game parses only the team's vehicle; paced drawing (≤ 30 fps, ≤ half the machine); stills fallback without WebGL 2.
- **Tests:** `npm run verify` (typecheck, lint, unit, build check, Playwright in Chromium, Firefox and Edge, then perf alone). 3D tests spoof a hardware renderer with `withGpu()` (`tests/e2e/helpers.ts`).

## 3. Not done

- **Owner art judgement:** BLOCKED-owner, script `docs/owner/art-review.md`.
- **G3–G8:** above. `npm run perf:ref` does not exist yet; it is G3's first step.
- **Known timing note:** `tests/unit/codebase.test.ts` usually runs in under half a second but once took 7.1 s (2026-10-11, cause unknown, result correct, not reproduced in 22 runs); it has an explicit 60 s bound with that evidence in a comment. Watch for a repeat.
- **Residual risks:** real learners (S3); Narrator and NVDA users; no physical laptop test (D-16); CI runs Windows Server, not Windows 11; art quality is the owner's judgement.

## 4. In-progress work

None. Run only one Blender or Codex job at a time: the owner uses this PC.

## 5. Next action

**Agent:** start G3 (proxy + runtime, release 0.6.0.0): branch from `main` at `v0.5.1.0`; first step `npm run perf:ref` on the Intel UHD 770 proxy, measuring a baseline before any change.
**Owner:** `docs/owner/art-review.md` (5 minutes, reply GO or FIX).

## 6. Rollback

Tag `v4.1.0-dev.1` (the previous application) or `v0.5.0.0` (the rebuild before G2). A tag's built file comes from `git archive <tag>`, `npm ci`, `npm run build`. Old material sits in `_archive/` (read-only; recycled files in `_archive/recycle/<date>/`) until the owner deletes it.
