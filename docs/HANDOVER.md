# Handover

Updated 2026-10-23 (America/Toronto). **Shelved indefinitely after G3** (owner, 2026-10-23); to resume, read section 5. Specification: [MPES](MPES.md) 4.5.6 (shelving: §19.7). Evidence: [verification/0.6.0.0.md](verification/0.6.0.0.md), [verification/0.5.2.0.md](verification/0.5.2.0.md), [verification/0.5.1.0.md](verification/0.5.1.0.md), [verification/0.5.0.0.md](verification/0.5.0.0.md), [verification/spike-visual.md](verification/spike-visual.md).

## 1. Version and milestone

Version 0.6.0.0 beta (four-part MAJOR.MINOR.PATCH.BUILD, MPES §19.2; 1.0.0.0 only once out of beta: MPES §19.2 exit criteria, including every owner gate). M0–M4, V1, V2 (goal G1, tag `v0.5.0.0`) and G2 (owner fixes and the docs regime, tag `v0.5.1.0`, owner GO 2026-10-12) are complete. 0.5.2.0 (tag `v0.5.2.0` on `c2932eb`, owner GO 2026-10-13) is owner FIX 4 on G2: showcase zoom, framing of the full kit at every turn and height, sign controls, and phone tables as labelled cards (`docs/verification/0.5.2.0.md`). G3 (0.6.0.0, tag `v0.6.0.0`, owner GO 2026-10-22) is the proxy and runtime goal: the stills, command and 3D update budgets on the reference proxy, with named blocker G3-B1 (`docs/verification/0.6.0.0.md`). The rollback is tag `v4.1.0-dev.1`. The dependency security sweep (sharp 0.35.5, vitest 5.0.5, npm audit 4 findings to 0, build byte-identical) is folded into 0.6.0.0; PR #28 (its 0.5.2.1 branch) is closed as folded in.

**Plan to beta exit (MPES §17), one PR and one tag per goal:**

| Goal | Version | Content |
|---|---|---|
| G3 proxy + runtime (done) | 0.6.0.0 | `npm run perf:ref` on the Intel UHD 770 proxy (D-16), every §14 gate, baked lighting, adaptive tiers, context-loss recovery, touchpad and panel safety |
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
- **G4–G8:** above. `npm run perf:ref` (MPES §14.1) has a six-run baseline on `2ac1d39` (`docs/verification/0.6.0.0.md` "Reference proxy").
- **Named blocker G3-B1:** the 3D update p95 is 118–132 ms on GPU-less CI runners on some runs (budget 100, kept; the check stays on). Run 39827140601 was all green; 39849202659 failed `verify (24)` at 118 ms. Players do not meet this path: a software renderer gets the stills; CI reaches 3D only because tests spoof a GPU (`withGpu()`). G4 clears it (section 5).
- **Open perf items (budgets kept):** renderer plus GPU memory with 3D on 570/479 MB against 400; first-click INP and long task on the first-run 1366×768 profile 800/588 ms against 200; turning-showcase idle CPU 16.9 % against 3 % (G5).
- **Known timing note:** `tests/unit/codebase.test.ts` usually runs in under half a second but once took 7.1 s (2026-10-11, cause unknown, result correct, not reproduced in 22 runs); it has an explicit 60 s bound with that evidence in a comment. Watch for a repeat.
- **Known timing note 2:** `tests/unit/build.test.ts` "is deterministic" once timed out (63 s against 5 s) while other projects' test runs loaded this PC (2026-10-12); it passed in 5.3 s on re-run. The same day `tests/unit/archive.test.ts` "refuses a path that holds a tracked file" timed out the same way (5 s; 80 ms alone); its scratch clones had piled up in `.artifacts/tmp` and are now removed after each run (`tests/unit/scratch.test.ts`). On 2026-10-12 at 97% CPU two Firefox tests (`layout.spec.ts` live lot, `showcase.spec.ts` every vehicle) timed out with an unchanged build and passed alone. If either repeats on a quiet machine, find the cause; do not raise the timeout.
- **Known timing note 3:** CI failed the showcase update budget once too (109 ms against 100, `78cca1f`, 2026-10-12). With Windows Defender and other projects busy, the local perf project fails a 3D update budget in about half of its runs, at the previous commit as often as now (A/B in `docs/verification/0.5.1.0.md`). Run it on a quiet machine; never raise the budgets. G3's `perf:ref` protocol is meant to settle this.
- **Whole-vehicle contrast (for G4):** measured on the vehicle's silhouette (stage shot on black and on white) at every view the player can reach. In 3D, with the camera-relative fill added after red run 38609311138, every vehicle holds at least 3:1 at all 16 turn steps (least 3.23, RECOVERY's rear view; `docs/verification/0.6.0.0.md`). In stills the front and rear views stand at about 1.6:1 whole on the dark stage and the turntable frames lower; their floors in `tests/e2e/showcase.spec.ts` are the measured least values and may only rise; G4 lifts every still view and frame to 3 through lighting, value separation and the re-render (MPES §10.5). Also for G4: the RECCE roof is pale in 3D side view (realism, under 1% clipped); the vehicle on the light theme's white stage is not yet contrast-checked.
- **Residual risks:** real learners (S3); Narrator and NVDA users; no physical laptop test (D-16); CI runs Windows Server, not Windows 11; art quality is the owner's judgement.

## 4. In-progress work (shelved state)

Nothing is in progress. The history of every earlier fix and publication is in `docs/verification/` (one file per version) and `git log`.

- **Branches:** `main` holds G3 (PR #27, merge commit, tag `v0.6.0.0`; the annotated tag's message records the close-out: CI run, Pages SHA-256 against the local build, instructor zip). PR #28 (`fix/security-sharp-0.35.5`) is closed, folded into 0.6.0.0; its branch is kept. Older side branches (`g3/caching`, `g3/perf-ref`, `fix/g3-static-bounds-20261020`) are merged or superseded; their worktrees are archived under `_archive/recycle/2026-10-20/`, `2026-10-22/` and `2026-10-23/` (read-only; nothing depends on them).
- **Cleanup:** the owner asked for it (2026-10-23). `npm run archive:prep -- --apply` removed only what a command brings back (packages, builds, browsers, caches, the Blender download, gallery captures, `.artifacts/tmp`) and wrote `RESTORE.md` at the root with the steps back and the expected build hash.
- **Kept:** git history and tags, every tracked file, render masters, models, concepts, logs and evidence in `.artifacts/` (instructor zips in `.artifacts/prototype/`, review galleries in `.artifacts/review/`), `_archive/`, and the owner's local governance file `docs/Omni_5.1.1.md` (never committed).
- **GitHub:** temporary QA space; the owner may delete it. Branch protection on `main` requires `verify (22)` and `verify (24)`. Local continuity needs nothing from GitHub.
- **Owner-only:** `docs/owner/art-review.md` (BLOCKED-owner) and instructor replies to `docs/owner/instructor-review.md`.

## 5. Next action: resume

**Restore** (any agent): read `AGENTS.md`, this file and MPES §19.7. Install Node 22 or 24 and Git, then follow `RESTORE.md`: `npm ci`, `npm run browsers`, `npm run build` and compare its SHA-256 with `RESTORE.md` (0.6.0.0 builds `818b432d…2923`), then `npm run verify`. Blender 5.2.2 (MPES §5.4, `art/README.md`) is needed only for art. Before new work, audit every pin against the registry and its advisories (`npm audit`, `library/practices/dependency-security.md`): time will have passed. If GitHub is gone, the local `npm run verify` and `npm run perf:ref` are the gate; a new CI keeps Node 22 and 24 and every budget.

**G4 (0.7.0.0) plan**, from `main` at `v0.6.0.0`, each item failing check first:

1. **G3-B1:** a tier 4 in `source/showcase/pace.ts`: Lambert on the vertex colours, no environment map, pixel ratio about 0.35–0.4. `startTier` already falls to the last tier when nothing fits a 30 fps frame. Probe: Lambert instead of standard 62 → 22 ms, no environment 26–30 ms; estimated p95 near 80 ms, unverified; CI judges. Checks first: `tests/unit/pace.test.ts` `startTier(() => 1000)` returns 4 (3 today); a contrast test forcing tier 4 still holds whole-vehicle contrast ≥ 3; the existing `tests/e2e/perf.spec.ts` gate. Not allowed: replacing the CI 3D gate with machine-independent checks (that weakens a check), or a paid GPU runner (breaks zero cost). If it fails, keep the budget and the check and carry G3-B1.
2. **Stills contrast ≥ 3:1** in every view and turntable frame: the floors in `tests/e2e/showcase.spec.ts` (today 2.106, 1.558, 1.596, 1.317) all raised to 3, then lighting, value separation and re-render (MPES §10.5).
3. **No checks exist yet** for the pale RECCE roof in 3D side view, the §10.5 ID-mask check, and the vehicle on the light theme's stage (`--stage` #ffffff to #dfe6e1 in `source/ui/styles.css`; the contrast tests run dark only): write them first.
4. **Sightline:** `art/blender/sightline-baseline.json` 574 pairs → 0 (empty it so all fail, then fix the art). Heavy and serial: renders, export, sightline, fit, overlap; one Blender job at a time.
5. **Memory** ≤ 400 MB (`machine()` in `tests/perf/scenarios.ts`, `processMB()` in `tests/perf/measure.ts`). Suspects, unverified: the base64 model held as script text and its inflated buffer, decoded stills, the tier-0 multisampled target and shadow map.
6. **First-click INP and long task** ≤ 200 ms, trace first. Suspects, unverified: model inflate and parse, `compileAsync`, `#calibrate()` (blocking readPixels), idle `prepareVehicle` near the first click.
7. Then G5–G8 as in section 1 and MPES §17.

**Goal prompt** to paste as `/goal` (under 4 000 characters):

```text
/goal SEA Game: resume after shelving; G4-G8 to 1.0.0.0 (else 0.9.x + named blockers).
READ: AGENTS.md, docs/HANDOVER.md (section 5 = G4 plan), MPES §10.5 §14 §17 §19.2 §19.7 §20.1 §21, docs/verification/, RESTORE.md.
FIRST: restore per RESTORE.md; build hash must match; npm run verify green; npm audit every lockfile, fix to 0 (BUILD bump if alone); check GitHub/CI still exist, else local verify+perf:ref gate.
GOALS (one PR from main, one tag each):
G4 0.7.0.0 assets + 3D budget: clear G3-B1 via tier 4 (Lambert, no env map), evidence first; stills >=3:1 every view, raise floors; pale RECCE roof, light-theme stage contrast, §10.5 ID-mask checks (write them); sightline 574->0; fit/overlap/tris green; memory <=400 MB; first-click INP+long task <=200 ms, trace first; Codex art+modelling, CC0.
G5 0.8.0.0 classroom: turning-showcase idle CPU <=3 %; instructor replies (docs/owner/); workload, learnability, objectives+debrief, §7.7 feel, §7.8 projector, fault tests, scripted rehearsal, grandma test.
G6 0.9.0.0 hardening: axe, keyboard (Chromium+Firefox+Edge), WCAG 2.2 AA, 320/360 px reflow, Narrator/NVDA scripts, Windows 11 matrix, egress, security+content+dependency review, Codex French review, npm run package.
G7 0.9.1.0 RC: freeze; three §21 passes; perf:ref 12 KPIs PASS or named; local handoff: git bundle+tags, HTML+SHA256SUMS, art sources, docs, library/, RESTORE.md; fresh restore reproduces build hash.
G8 1.0.0.0 only when every §19.2 criterion has evidence, owner's included.
LOOP PER GOAL:
1 Branch main at last tag; bump gameVersion once; changelog row.
2 Each item: failing check first, proven red on old code, then green; every angle/view/state/theme/browser. Never weaken tests/budgets/timeouts; floors only rise.
3 Codex (gpt-6.1-sol, medium, stdin closed) reviews each substantial diff; dispositions in verification/<ver>.md.
4 Docs current (MPES no code); lessons to §20.1+library/. EVERY commit: npm run codebase, tsc, eslint, unit; stage named files only.
5 npm run verify && git push (never push on a later command). CI via one read, never poll; two greens on one head. Red: logs+trace, cause, failing check, one bounded fix; still red: budget kept, named blocker, offer GO = merge with blocker.
6 perf:ref quiet slot; npm run gallery -- --notes <plain notes>; send it; ask GO or FIX; stop.
7 FIX: every item+siblings, repeat 4-6. GO: merge commit; tag; Pages SHA-256 = local build; instructor zip (.artifacts/prototype/make.sh); archive worktrees.
SPEED: worktree lanes prep next goal and commit what they write; heavy runs serial (Blender, perf, verify, gallery).
RULES: AGENTS.md 1-22 bind; ask nothing but GO/FIX; work only in repo; never delete (archive to _archive/recycle/<date>/); never stage docs/Omni_5.1.1.md, dist/, builds. Never mute/skip CI; never kill others' processes. FOSS: licence checked, catalogue, THIRD_PARTY_NOTICES. Credit only where build.test.ts pins it; licence SEA Game authors. Any defect: fix siblings, add a check. Priority: teaching+reliability > learnability+workload > performance+any classroom > realism > maintainability. <=50 MB, <=30 fps, <= half the machine, iGPU-safe.
DONE: v1.0.0.0 per §19.2 (or 0.9.x+blockers); handoff restored, hash-verified; library/ current; owner GO.
```

**Owner:** `docs/owner/art-review.md` (5 minutes, reply GO or FIX) whenever the project resumes.

## 6. Rollback

Tag `v4.1.0-dev.1` (the previous application) or `v0.5.0.0` (the rebuild before G2). A tag's built file comes from `git archive <tag>`, `npm ci`, `npm run build`. Old material sits in `_archive/` (read-only; recycled files in `_archive/recycle/<date>/`) until the owner deletes it.
