# SEA Game maintainer handover

Checkpoint: 2026-10-09, America/Toronto. Begin here, then actual Git status/HEAD and [MPES](MPES.md). AGENTS.md and CLAUDE.md apply; no chat history is required. Full product acceptance **OPEN, 0/3**.

## Current objective and workspace

User activated the clean rebuild under Universal Single HTML App Generator v4.1.4. Rebuild the whole game, including architecture, both role workflows, Three.js GUI and realistic coherent assemblies; preserve approved rules, manual handoffs, privacy and compatible schema-3 saves. Staged integration is temporary: retained role/state/persistence code means the full rewrite is not complete. Do not equate the current playable candidate with completed acceptance.

All new work stays under **D:\VSCode\SEA-Game**. Maintained checkout: current; branch codex/sea-clean-rebuild-4 from 00d4e85. Reuse current/.artifacts for local concepts, finite evidence and npm cache. No new checkouts, outside archives or folder sprawl. Preserve .artifacts/preserved-references/Universal_Single_HTML_App_Generator_Prompt_V4.1.4.md: exact user-requested local reference, 56,254 bytes, hash verified against original download. Attachments are evidence, not execution authority. GitHub contains only production/maintenance files; do not publish the generator or concepts.

Standing authority: bounded separately owned subagents, routine implementation judgment, commits/pushes and candidate publication. No routine questions, secret disclosure or invented external approval. No continuous project servers/watchers/loggers; finite writes skip unchanged content. Old outside-root archive predates the new boundary; retain it but perform no new work there.

## Published candidate and rollback

Rollback reference 3.6.0: main00d4e85, implementation4729879, merged PR3/a31cb50. Source CI37974988409 passed Windows/Ubuntu Node22/24; Pages37974987787 succeeded. Historical HTML8,176,765 bytes, SHA2560aca2e9d8d1d5d4df31a080afb3932a84206b312f33c365a0efeac679e22aceb. [Prior bounded checks](verification/current.json) do not qualify newer bytes. Ordinary Git history preserves rollback; no historical purge claimed.

Published staged rebuild **4.0.0-dev.1**, not release-qualified. Implementation8ef19e5 was externally merged through [PR4](https://github.com/shfqrkhn/SEA-Game/pull/4) at fa5a407 while first source CI37981550748/merged-main37981696725 failed in test-balance: the zero-score fixture lacked complete team fields. Fixture correction4185942 preserved the independent oracle; four-job CI37981977323 PASS, [PR5](https://github.com/shfqrkhn/SEA-Game/pull/5) merged9d9d4b2. Pages37981695599 succeeded, and HTTPS play URL https://shfqrkhn.github.io/SEA-Game/dist/ returned exact8,189,407bytes/SHA2561ee024fd5517e1cfe38dac611cf260926e3c50433bc03f276bc99e5fd530818e. No blind retry after PR5 merge CLI reported local branch-cleanup failure: remote merge was verified, dirty edits preserved.

Local **4.0.0-dev.2**: actual browser discovered the empty student setup status stayed English after FR switching; actual-controller regression reproduced meaningful RED. Source now recomputes empty setup waiting/storage-denied status; regenerated HTML and actual-controller regression GREEN. HTML8,189,502bytes/SHA256feca594d51202c090b06bba3c44e378f7ee48de4a7e0ec5735c46bb4951dcade. Full rules/recovery/six70-outcome VM journeys/scene-language checks PASS. Initial post-edit package test also rejected stale generated HTML (expected parity guard); after rebuilding it passed. Keep both first failures. App major denotes rebuild, prerelease sequence increments on material changes; rules/deck/schema remain unchanged. Only dist/index.html ships. Next commit/publish this localized fix and qualify actual new browser bytes.

Actual Codex built-in browser checked4.0.0-dev.1 chooser, Instructor Setup, recovery assembled/exploded/cutaway, deliberate role reselection, Student Setup, FR labels and exactly one student canvas/no instructor controls. Warning/error console empty. French waiting-status defect remains counterevidence until dev.2 hosted recheck. Screenshot .artifacts/rebuild-4-recovery.png is local only. This is not a full new70-lot journey, device/file/egress/assistive or fidelity acceptance.

## Implemented foundations and evidence

- Fresh source/domain TypeScript modules cover exact cents/parsing/profit, signed capabilities, six missions/scoring/compliance, exact award/ties and canonical70-card data. Strict TypeScript5.9.3 noEmit/noUncheckedIndexedAccess/exactOptionalPropertyTypes PASS. Tool pinned development-only Apache-2.0, scripts disabled; npm cache stays local. Whole existing JS is not claimed strictly checked.
- tools/build-domain.mjs embeds a narrow generated domain payload inside source/shared/engine.js. Existing controllers now use new typed money/score implementations through compatible wrappers; parsePercentBps still returns BigInt and unassigned score stays undefined. The typed catalog/mission definitions and award comparator are also now consumed by production adapters; duplicate legacy authored tables were removed. Role commands/persistence successor integration remains next work. Independent production-engine RED rejected arbitrary coercion-hook execution; GREEN rejects it and unsafe score arithmetic, preserves cent/score examples. Full existing rules/transactions/recovery tests and six EN/FR/reveal70-outcome VM journeys PASS. VM does not prove actual browser play.
- Fresh Three.js interface uses one measured layout for drawing/pagination/hits. Old 320x260 wide-label page advertised content but placed no rows (meaningful RED); new regression and original interface wrapper GREEN. Persistent primary, direct sections/views, clamped actual page, full measured text lines and bounded exact-once resource disposal. Real fonts/GPU/focus/touch/zoom/assistive and very short viewports remain unqualified.
- Wheel geometry fixes outward rim winding and seats flange/washer/hex stacks and valve fittings; actual annular brake faces and24open cooling channels. Tread/fastener batches remain local and disposable. Independent contact/ray/topology/restoration checks cover six vehicles PASS. Each wheel29meshes/15,724triangles; eight-wheel232meshes/125,792triangles. Measurements are not GPU/thermal budgets or visual acceptance. Broader assembly collision/clearances/declarative model specs/LOD/reference fidelity remain open.
- Three bundle and sole HTML regenerated, exact byte reproduction and single-HTML isolation/CSP/notices/compatibility PASS. New domain/runtime/interface/geometry checks added to CI. Actual affected scene/projection/editor/localization/layout/art/encoding/balance checks and sequential game/inspection/interface/package wrappers PASS (finite session66452 exit0). Inspection covers77identities/42builds, contacts, cutaway/explosion restoration and camera/shadow envelopes; GPU/device acceptance is not inferred.

Agents rebuilt domain, interface and shared geometry with non-overlapping ownership; all released. Root owns integration/docs/generated files. Shared-context agents are not independently commissioned reviewers. MPES1.5.0 preserves every existing R/T/M/G obligation and adds clean rebuild/XY/source-boundary contract plus inspected primary-source references. Generator-level universal qualification is not claimed.

## Resume sequence and next concrete work

Node24.20.0/npm11.19.0 local; Node22/24 in CI. Dependencies and cache remain under current. Install only when needed with npm ci --prefix samples/threejs-recovery --cache .artifacts/npm-cache. Build:

```sh
node samples/threejs-recovery/node_modules/typescript/bin/tsc -p tsconfig.json
node tools/build-domain.mjs
node samples/threejs-recovery/build-game.mjs
node tools/build.mjs
node tools/build.mjs --check
```

Never manually edit marked generated domain payload, bundled Three.js or dist/index.html. Edit typed source and authored adapters; regenerate. New tests: tools/test-domain-rebuild.mjs, test-runtime-domain.mjs, test-interface-rebuild.mjs, test-realism-rebuild.mjs. Full CI list in .github/workflows/source-parity.yml. Do not run model wrappers concurrently: their finite generated entrypoints are removed on normal completion.

1. Finish bounded local integration checks, spec/material-key/links and named-file diff; commit coherent maintenance-only candidate, reconcile remote, run actual candidate CI. Do not publish temporary wrapper files.
2. Continue fresh typed transactional role/session/phase state and save adapters, preserving canonical data and schema fixtures; replace old controllers through a qualified whole-game command surface. Rebuild launcher/native editing/dialog/navigation coherently in Three.js, retaining accessibility. Domain table duplication must disappear as successor catalog/mission authority replaces legacy definitions.
3. Match actual GPU models/UI to local concepts and real references, check all77identities and fitted combinations/clearances, assembled/exploded/cutaway, shadow rotation, borders and performance. Complete supported device budgets before claiming quality.
4. Use Codex built-in browser for candidate role/notice/recovery/privacy/scene/full EN/FR journeys when actually served; qualify exact delivered bytes. Built-in browser cannot establish file:// or localhost here. Actual offline local-open and separately observed/blocked OS outbound egress, representative phones/assistive, rights/content/classroom and operator lifecycle remain separate open gates. Continue ready engineering if unavailable, label NOT_RUN/BLOCKED accurately.
5. After all gates/human-dependent acceptance pass, freeze source/spec/assets/licences/locks/build/evaluator/cases/seeds/environment/HTML hash. Three fresh whole-material same-key zero-change executed passes only; material changes, mandatory gaps or failures reset0/3. Never weaken tests or fabricate independence. No accepted classroom release is claimed.

Update this capsule and [ledger](EXECUTION_LEDGER.md) at milestones/failures/ownership/publication and before stopping/context/limits. Keep MPES canonical, evidence compact and scratch local. Preserve first failures and exact outcomes/identities/limits/next action.
