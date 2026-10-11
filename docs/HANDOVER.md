# Handover

Updated 2026-10-11 (America/Toronto). Specification: [MPES](MPES.md) 4.2.2. Evidence: [verification/0.5.0.0.md](verification/0.5.0.0.md), [verification/spike-visual.md](verification/spike-visual.md).

## 1. Version and milestone

Version 0.5.0.0 beta (four-part MAJOR.MINOR.PATCH.BUILD, MPES §19.2; renumbered on 2026-10-11 from the untagged 5.0.0-dev.1; 1.0.0.0 only once out of beta: MPES §19.2 exit criteria, including every owner gate). M0–M4, V1 (visual spike) and V2 (visual production, goal G1, PR [#21](https://github.com/shfqrkhn/SEA-Game/pull/21), merged on two consecutive green CI runs) are complete and on `main`, tagged `v0.5.0.0`; the tag annotation records the Pages SHA-256 check. The rollback is tag `v4.1.0-dev.1`.

**Plan to completion (MPES §17):** G1 V2 close-out, 0.5.0.0 (done) → G2 V3 reference laptop, 0.6.0.0 (proxy rig, §14 gates, baked lighting, adaptive tiers) → G3 V4 classroom polish, 0.7.0.0 (UX, workload, teaching, game feel §7.7, projector mode §7.8, fault tests) → G4 M6 hardening, 0.8.0.0 → G5 M7 beta release candidate and local handoff package, 0.9.0.0 → G6 exit beta, 1.0.0.0, only when the owner's results arrive and every MPES §19.2 criterion holds. Shared rules for every goal: `AGENTS.md`. KPIs and priority: MPES §1.4.

## 2. What works

- **Game:** all of MPES §6 for both roles, all eight phases, EN/FR, schema-3 saves and backups, private entry, degraded states. Legacy 4.1 backups import.
- **V2:**
  - war-room HUD on every view, with a projector theme from the menu (MPES §7.1);
  - setup shows the defaults first and keeps options behind "More options"; the instructor picks the bid increment ($50,000 to $250,000);
  - the live lot fits 1280×720 with every action visible; the student's card entry suggests the lot's category cards by name;
  - debrief class chart and presentation questions; French spacing; stricter save invariants;
  - `dist/` no longer committed; `npm run check` compares two builds; CI deploys `main` to Pages for QA only.
- **Imagery** (`content/renders/`, 821 AVIF, 7.8 MB, V3 render pass after the Codex upgrade; placed images trimmed to their visible pixels, MPES 4.2.2): 6 vehicles (hero, 24-frame turntable, front and rear build layers for all 49 parts) and 71 cards, from the Blender pipeline in [art/README.md](../art/README.md).
- **Interactive 3D showcase** (MPES 4.0.0 §10, owner request): on the student tracker the team's vehicle turns slowly by itself, can be dragged or turned with buttons, pauses on request and under reduced motion, and gains each part as it is recorded. The model is `content/models/showcase.glb` (all six vehicles with every part, 1.82 million unique triangles, 8.5 MB deflated), embedded once; the game parses only the team's vehicle (about 400,000 triangles, `source/showcase/glb.ts`), which brought 3D ready from 3.2 s to 1.9 s. Without WebGL 2, on a software renderer, or if the model fails to load, the showcase shows the stills. Drawing is paced (`source/showcase/pace.ts`, MPES §10.3): at most 30 fps and at most half the machine, however slow the graphics. Stills decode each layer once (`DecodedImages`) and prepare the next angle and frames as soon as the shown view has decoded, never on idle, one at a time (MPES 4.1.3). three.js 0.186.1 is bundled for the showcase only.
- **Tests:** `npm run verify` (typecheck, lint, unit, build check, Playwright in Chromium, Firefox and Edge, then perf alone). 3D tests spoof a hardware renderer with `withGpu()` (`tests/e2e/helpers.ts`), because test browsers render WebGL in software, which the product treats as no GPU.

## 3. Not done

- **G1 history** (CI root causes, each fixed test-first; details in [verification/0.5.0.0.md](verification/0.5.0.0.md)): CI starvation (frame pacing, run 38089382489); Firefox refusing WebGL on the runner and stills decoded twice (run 38097185474, decoded-image pool, MPES 4.1.1 §10.3); turntable frames waiting for idle time on a busy runner (run 38106258905, MPES 4.1.2 §10.3); background decodes competing with a purchase (run 38133130929, MPES 4.1.3 §10.3); a purchase waiting for its layer to decode (run 38135172580, MPES 4.2.1 §10.3: the loaded card is prepared first); layers kept near full-frame by invisible alpha noise, so each decode cost up to 19 times the pixels (run 38136462558, MPES 4.2.2 §10.3: placed images trimmed to visible pixels, re-encoded from the v3 masters, cards and heroes unchanged).
- **Owner art judgement:** BLOCKED-owner, script `docs/owner/art-review.md`.
- **G2–G5:** MPES §17. `npm run perf:ref` (the Intel UHD 770 proxy) does not exist yet; it is G2's first step.
- **Residual risks:** real learners (S3); Narrator and NVDA users; no physical laptop test (D-16: the UHD 770 proxy stands in); CI runs Windows Server, not Windows 11; art quality is the owner's judgement.

## 4. In-progress work

None. Review aids are rebuilt from `.artifacts/renders/v3` with the commands in `art/README.md` ("Review before committing"). Run only one Blender process at a time, Codex jobs included: the owner uses this PC.

## 5. Next action

**Agent:** start G2 (V3, release 0.6.0.0): branch `goal3/laptop` from `main` at `v0.5.0.0`; first step `npm run perf:ref` on the Intel UHD 770 proxy, measuring a baseline before any change. Known G2 item: `DecodedImages` holds 24 images, but a fully built vehicle has up to 20 layers per angle, so its doc comment is wrong and prepared images can be evicted; size or order the pool, with a test.
**Owner:** `docs/owner/art-review.md` (5 minutes, reply GO or FIX).

## 6. Rollback

Tag `v4.1.0-dev.1`. Its built file is `git show v4.1.0-dev.1:dist/index.html`. Old material sits in `_archive/` (read-only; recycled files in `_archive/recycle/<date>/`) until the owner deletes it.
