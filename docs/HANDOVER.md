# Handover

Updated 2026-10-13 (America/Toronto). Specification: [MPES](MPES.md) 4.4.3. Evidence: [verification/0.5.2.0.md](verification/0.5.2.0.md), [verification/0.5.1.0.md](verification/0.5.1.0.md), [verification/0.5.0.0.md](verification/0.5.0.0.md), [verification/spike-visual.md](verification/spike-visual.md).

## 1. Version and milestone

Version 0.5.2.0 beta (four-part MAJOR.MINOR.PATCH.BUILD, MPES §19.2; 1.0.0.0 only once out of beta: MPES §19.2 exit criteria, including every owner gate). M0–M4, V1, V2 (goal G1, tag `v0.5.0.0`) and G2 (owner fixes and the docs regime, tag `v0.5.1.0`, owner GO 2026-10-12) are complete. 0.5.2.0 (branch `fix/showcase-mobile`) is owner FIX 4 on G2: showcase zoom, framing of the full kit at every turn and height, sign controls, and phone tables as labelled cards (`docs/verification/0.5.2.0.md`). The rollback is tag `v4.1.0-dev.1`.

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
  - creator credit (owner, 2026-10-12): "Created by Shafiqur Rahman Khan, with AI assistance." in About and "created by Shafiqur Rahman Khan" on the chooser's version line (EN/FR), the README and the instructor guide, nowhere else; `LICENSE` and `library/LICENSE` read "Copyright (c) 2026 SEA Game authors", `package.json` has no author, no account handle in the game (`tests/unit/build.test.ts` "credits the creator");
  - About shows the licence and notices reflowed (`source/ui/reflow.ts`, `tests/unit/reflow.test.ts`, visual baselines at 1366×768 and 320 px);
  - the chooser shows all six vehicles as a lineup of hero stills, selected one large, keyboard and touch, EN/FR (`tests/e2e/chooser.spec.ts`, visual baselines);
  - `DecodedImages` never evicts an image on screen or a prepared one (`tests/unit/showcase.test.ts`);
  - `npm run gallery` writes the offline review page `.artifacts/review/<version>.html` (`tests/unit/gallery.test.ts`);
  - MPES has no code and names every file, script, pin, CSP directive and goal (`tests/unit/mpes.test.ts`); a Codex session given only MPES wrote a rebuild plan and its gaps were fixed (`docs/verification/0.5.1.0.md`);
  - `npm run codebase` writes `docs/CODEBASE.md`, which rebuilds every tracked file (`tests/unit/codebase.test.ts`);
  - `npm run archive:prep` (dry run; `--apply` only on the owner's cleanup request) and `RESTORE.md` (`tests/unit/archive.test.ts`);
  - `AGENTS.md` rule 21: driving Codex headless;
  - owner FIX 1: build stills at yaw 30° pitch 6° and 210° pitch 6°, chosen by `art/tools/angles.ts`; `art/blender/fit.py` fails any part inside or outboard of a tyre or not attached, and the art passes it and `overlap.py` (MOB-D rebuilt inboard, rack, troop rear kit, recovery sensors, fasteners; `docs/verification/0.5.1.0.md`);
  - owner FIX 2: the cards a round leaves unsold are listed below the lot actions with their effects (`effectsLine` in `source/ui/components.ts`, no start price), on the close-round list and the next round's list, in English and French; each card's effects sit on one unbroken line under its ID and title; the purchases tables and the planning guide use the same words instead of raw codes; the live lot gives the card one third and the controls two thirds; card IDs never break at the hyphen (`tests/e2e/close-round.spec.ts`);
  - owner FIX 3: no part in front of or behind a gun's muzzle reads as the end of its barrel (`art/blender/sightline.py`, any depth, full detail): the optics head stands high on a steep strut on the right of the roof and the sensor mast stands back (`_mast_x`); the drivers' mirrors stand lower (the check also judges small hull fittings); hero stills clean; the 574 build-still pairs left are recorded in `art/blender/sightline-baseline.json`, which may only shrink and must be empty by G4;
  - component legibility (owner directive): MPES §10.5 (practices with sources in `docs/verification/legibility.md`, lessons learned); camera-relative rim light in the showcase; mask and contrast checks scheduled for G4, projector checks for G5;
  - reusable library `library/` (owner, 2026-10-12): lessons, practices, FOSS catalogue, theme tokens and its own MIT `LICENSE`, for all the owner's projects (AGENTS rule 22); Codex reviewed it and all 15 findings are fixed (`docs/verification/0.5.1.0.md`); the same lessons and practices are in MPES §20.1, and `docs/CODEBASE.md` carries the folder verbatim;
  - instructor prototype review: `docs/owner/instructor-review.md` (one page, sent with `index.html`);
  - lint, unit tests and typecheck skip `.claude/` (agent worktrees);
  - sibling sweep of parts against hull fittings: 11 visible clashes (glacis armour over the vision blocks, nose kits through the tow shackles, a weapon station on the driver's hatch, rear kits over the door, and others) fixed and re-checked (`docs/verification/0.5.1.0.md`).
- **Imagery and 3D:** 821 AVIF stills (7.6 MB) and one packed model (24.1 MB, 8.0 MB deflated) (all six vehicles, every part), Blender pipeline in [art/README.md](../art/README.md); the game parses only the team's vehicle; paced drawing (≤ 30 fps, ≤ half the machine); stills fallback without WebGL 2.
- **Tests:** `npm run verify` (typecheck, lint, unit, build check, Playwright in Chromium, Firefox and Edge, then perf alone). 3D tests spoof a hardware renderer with `withGpu()` (`tests/e2e/helpers.ts`).

## 3. Not done

- **Owner art judgement:** BLOCKED-owner, script `docs/owner/art-review.md`.
- **G3–G8:** above. `npm run perf:ref` does not exist yet; it is G3's first step.
- **Known timing note:** `tests/unit/codebase.test.ts` usually runs in under half a second but once took 7.1 s (2026-10-11, cause unknown, result correct, not reproduced in 22 runs); it has an explicit 60 s bound with that evidence in a comment. Watch for a repeat.
- **Known timing note 2:** `tests/unit/build.test.ts` "is deterministic" once timed out (63 s against 5 s) while other projects' test runs loaded this PC (2026-10-12); it passed in 5.3 s on re-run. The same day `tests/unit/archive.test.ts` "refuses a path that holds a tracked file" timed out the same way (5 s; 80 ms alone); its scratch clones had piled up in `.artifacts/tmp` and are now removed after each run (`tests/unit/scratch.test.ts`). On 2026-10-12 at 97% CPU two Firefox tests (`layout.spec.ts` live lot, `showcase.spec.ts` every vehicle) timed out with an unchanged build and passed alone. If either repeats on a quiet machine, find the cause; do not raise the timeout.
- **Known timing note 3:** CI failed the showcase update budget once too (109 ms against 100, `78cca1f`, 2026-10-12). With Windows Defender and other projects busy, the local perf project fails a 3D update budget in about half of its runs, at the previous commit as often as now (A/B in `docs/verification/0.5.1.0.md`). Run it on a quiet machine; never raise the budgets. G3's `perf:ref` protocol is meant to settle this.
- **Residual risks:** real learners (S3); Narrator and NVDA users; no physical laptop test (D-16); CI runs Windows Server, not Windows 11; art quality is the owner's judgement.

## 4. In-progress work

Owner FIX 1 (stills and fit), FIX 2 (one click to close a round nobody can win in; unsold cards listed with their effects) and FIX 3 (a part read as the end of a barrel: optics head raised, mast set back, mirrors lowered, `sightline.py` at any depth including hull fittings, 574 pairs recorded and only shrinking; full re-render, encode and pack done) are done and checked (`docs/verification/0.5.1.0.md`). The Codex review of FIX 2 is dispositioned; unit-test scratch now cleans up after itself. Prepared for G3 on local side branches by Sonnet agents (not merged, not run in a browser; review before merging into G3): `g3/perf-ref` (`npm run perf:ref` rig, protocol fragment) and `g3/caching` (CI download caches, encode cache). The owner said GO on the gallery (2026-10-12, "we can iterate later") and merged PR #22; tag `v0.5.1.0` is on `10e61e3`. A hand-uploaded root `index.html` made `main` red and let CI deploy a 0.5.0.0 build over it; branch `g2/pages` removes it, adds a check and sets the Pages source to GitHub Actions (`docs/verification/0.5.1.0.md` "Pages after the merge"). `g2/pages` merged as PR #23 after two green runs; the Pages SHA-256 equals the 0.5.1.0 build (630e6d52…1667). Owner FIX 4 (2026-10-12): the showcase could not zoom and cut off a fully kitted vehicle; on a phone the tables in the collapsible sections lost columns; the controls were long words. Fixed on `fix/showcase-mobile` as 0.5.2.0 (CI then found pause letting the turn coast on; fixed, with every control reporting its view at once, and Playwright now refuses a `dist/index.html` older than the source: run `npm run build` before any ad hoc Playwright run), awaiting the owner's GO on its gallery, then merge, tag `v0.5.2.0`, and the Pages SHA-256 check. CI on `78cca1f` failed `showcaseUpdateMaxMs` once (109 ms against 100; `docs/verification/0.5.1.0.md` close-out): see timing note 3. Run only one Blender job at a time: the owner uses this PC.

## 5. Next action

**Agent:** on the owner's GO for 0.5.2.0, merge `fix/showcase-mobile`, tag `v0.5.2.0` and check the Pages SHA-256; then start G3 (proxy + runtime, release 0.6.0.0): branch from `main` at `v0.5.2.0`; first step `npm run perf:ref` on the Intel UHD 770 proxy, measuring a baseline before any change.
**Owner:** `docs/owner/art-review.md` (5 minutes, reply GO or FIX).

## 6. Rollback

Tag `v4.1.0-dev.1` (the previous application) or `v0.5.0.0` (the rebuild before G2). A tag's built file comes from `git archive <tag>`, `npm ci`, `npm run build`. Old material sits in `_archive/` (read-only; recycled files in `_archive/recycle/<date>/`) until the owner deletes it.
