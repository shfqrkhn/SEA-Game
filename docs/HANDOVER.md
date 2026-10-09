# SEA Game: current maintainer handover

Checkpoint: 2026-10-09, America/Toronto. This is the continuation entry point for Codex, Claude or another maintainer. Inspect actual Git status before acting: this records an in-progress batch, not a completed release. No conversation history is needed to resume.

## Exact state

- Working repository: `D:\VSCode\SEA-Game\current`; remote: `https://github.com/shfqrkhn/SEA-Game.git`; branch: `codex/threejs-game-artwork`.
- Baseline before this documentation checkpoint: `65bce4d95c9e4e22286ffcc88f60b8c7fe488813`. Inspect current HEAD for subsequent commits; this baseline is not a permanent current-head claim.
- Published game: **3.5.0**, implementation `bb6fe53e7c7cea69ad0e693faa5c6367b52296ac`, preview `996101c091243ab78a5e93dbef4f0382e5f28d59`.
- [Instructor preview](https://shfqrkhn.github.io/SEA-Game/previews/threejs-game-20261008/SEA_Instructor_Standalone.html?v=996101c) and [student preview](https://shfqrkhn.github.io/SEA-Game/previews/threejs-game-20261008/SEA_Student_Standalone.html?v=996101c).
- [PR 2](https://github.com/shfqrkhn/SEA-Game/pull/2) was merged externally at `75f818f454c315257bb18839a17de095a06817ae`; local baseline reconciles it. Do not merge PR 2 again.
- Publication checkout: `D:\VSCode\SEA-Game\github-preview-publish`, last observed detached at preview `996101c`. Fetch/reconcile current `origin/main` before another additive publication; do not push stale main.
- Full product closure: **OPEN, 0/3**. Historical specification passes and bounded tests do not count as product acceptance.
- Next planned game version: **3.6.0**, for single-file distribution and fitted-model corrections. It has not been built or published.

Latest checkpoint: **both implementation agents finished stable source work and released ownership**. Uncommitted packaging files: `tools/build.mjs`, new `source/launcher.template.html`, new `tools/test-single-html.mjs`. Expected RED progressed to agent-reported GREEN for in-memory packaging/actual-controller isolation, validated deep links/reselection, escaping, hash CSP and deterministic legacy composition. The audited reload/chooser contradiction is corrected with explicit same-file chooser navigation. In-memory primary size: 8,167,801 bytes; no final `dist/index.html` exists and no new candidate is built/published. Root licence documents are still absent; missing-notice status is reported, but required release-build enforcement remains a gap.

Uncommitted model files: `source/three/game-models.mjs`, `samples/threejs-recovery/verify-inspection-entry.mjs`; `realism.mjs` unchanged. Actual opacity .16 versus required 1 RED reproduced, then adapter checks GREEN: 42 fitted combinations, retained wheel topology/purchase provenance, 24 existing-cab contacts and previous 77-model/42-build framing/restoration. Agent's final finite inspection/game wrappers exit 0; receipt bytes/UTC mtime restored. No bundle/HTML regenerated. Physical representatives remain illustrative: CAP seating scale .70 and power-pack scale .64; full engine/cockpit collision and actual browser fidelity remain open. Source tests are not new GPU/visual acceptance.

Newest user request: **read and determine changes** for `C:\Users\user\Downloads\Offline_HTML_AI_App_Game_Architecture_v1.1.0.md`. Full read: 30,716 bytes; SHA `fd4e8b2501a48cf36a646d4cc322e507e9b5c193f60abb92e33f61c383bdfbc7`. [Assessment](ARCHITECTURE_V1_1_ASSESSMENT.md) records required gaps, conditional engine/tool choices and sequence. No new installations, browser substitution or release are implied by this assessment. Prior v1.0.1 file is no longer available at its original path; its earlier full-read provenance below remains historical.

## Requirements and decisions

User wants the whole game in Three.js, detailed realistic coherent models, intuitive minimal-click GUI, assembled/cutaway/labelled exploded inspection, embedded resources, MIT/FOSS licensing and compatible saves. Current model fidelity remains rejected. Geometry counts do not prove visual acceptance. Preserve approved rules, prices, effects, manual auction authority, privacy and recovery.

The supplied `C:\Users\user\Downloads\Final_Offline_HTML_FOSS_AI_Stack_v1.0.1.md` was fully read: 27,486 bytes; SHA-256 `064b6a699bcd31afd4f5cfea7dad89c2477a39207687ba0924e86c4e06c09165`. It is an adopted recommendation/release contract, not proof of installed tooling, benchmarks or new permissions. Do not publish the full supplied document merely because it was supplied.

Adopt **one primary distributable `dist/index.html`**, both EN/FR roles, no runtime siblings/CDN/server/network API/secrets. Retain modular authoring source. Retain Three.js after auditing the existing engine: no demonstrated need for PlayCanvas migration, another renderer, physics or ECS. Do not install the whole suggested stack or start development servers. TypeScript adoption is incremental; esbuild syntax transformation is not strict type checking.

Canonical [MPES](MPES.md) is still **1.3.0**, describing two distributable HTMLs. Single-file revision **1.4.0** is outstanding. The newer explicit user-adopted contract above wins this known conflict; reconcile MPES before qualifying the new candidate. Keep [scene plan](SCENE_GAME_PLAN.md) and [execution ledger](EXECUTION_LEDGER.md) aligned rather than duplicating requirements.

Standing authorization: use best judgment without routine questions; bounded subagents explicitly requested; commits/pushes/additive GitHub previews/source PRs authorized. Candidate publication is not accepted classroom release. Never weaken gates to manufacture completion or claim shared-context agents are independently commissioned assurance.

Save schema **3**, rules **STANDARD**, deck **synthetic-v1** and role storage keys remain compatible. Increment game version by largest change scope per [version policy](VERSIONING.md). Never publish role-private backup payloads.

## Ownership and executable next work

Two interrupted Codex agents have resumed the following tasks. Live sessions/messages do not transfer to Claude: a successor must check for active writers before assuming ownership. Do not integrate while agents edit build inputs.

| Owner | Exclusive files | Checkpoint action |
|---|---|---|
| `concept_contract` | `tools/build.mjs`, new launcher template/source, `tools/test-single-html.mjs` | Complete stable source checkpoint; ownership released. In-memory fixture tests GREEN; generated artifact/browser qualification pending. |
| `powerpack_fidelity` | `source/three/game-models.mjs`, `source/three/realism.mjs`, `samples/threejs-recovery/verify-inspection-entry.mjs` | Complete stable adapter checkpoint; ownership released. Inspection/game wrappers GREEN; bundle/browser qualification pending. |
| Lead / successor | shared version, integration/build outputs, licences, MPES, CI, inventory/evidence/publication/handover | Build/publish once per stable batch; stage only owned files. |

1. **Fitted models:** actual TROOP+MOB-G+PRO-D ghosts the hull and puts an upright cab behind it. `createConfiguration` applies opacity .16 to all hull shells for any MOB. PRO-D has an aft extension; CAP inserts another enclosure/roof; MOB-B/C can add wheels to a complete carrier. Replace showroom insertion with adapters using shared front-cab/rear-floor/engine/axle/skin datums. CAP furniture stays inside the existing enclosure; PRO-D fits the existing front cab; protection skins conform to the carrier; MOB uses enclosed engine/existing axle stations. Assembled skins stay opaque; explicit cutaway changes visibility. Retain standalone inspection models. Preserve all purchases/effects and contributing IDs despite one physical representative per family; do not claim unlimited additive capacity fits an illustrative hull.
2. **Model RED/GREEN:** TROOP+MOB-G+PRO-D opacity/cab-zone/contact/no-extension; CAP-A+PRO-D and CAP-C+MOB-B containment; all seven MOB cards across six carriers retain wheel topology **8/4/6/6/8/8**; PRO-G+engine closed envelope/reversible cutaway; immutable input/all contributing IDs/canonical totals. Replace tests endorsing the aft extension. Compare actual selected-team assembled/cutaway/exploded renders. Do not repeat unchanged full EN journey solely for geometry.
3. **Single HTML:** embed Three.js/engine/artwork/styles once. Inert escaped role markup; predeclared lexical role functions; only chosen controller starts. Validated `?role=instructor` / `?role=student`, bilingual selector otherwise. No eval/new Function/external iframe/runtime fetch. Deliberate reload/new context for role change, preserving storage/privacy; no two live controllers. Native selector/licence disclosure acceptable; chosen gameplay remains Three.js. Hash CSP, accessible notices even on deep links. Small duplicated presentation/bridge lexical wrappers acceptable; no duplicated large runtime/art. Keep legacy outputs during transition, write-if-changed and three-output parity.
4. **Integrate:** add owned-source MIT LICENSE and exact actual dependency/asset notices, without blanket historical/reference/generated rights claims. Installed `three-mesh-bvh` does not prove runtime inclusion: inspect the bundle graph. Embed notices. Reconcile MPES/README/operations/CI/package selection to one primary user artifact; assurance packets can separately contain source/evidence. Version 3.6.0 after stable edits. Build once, run affected checks, publish additive preview, verify CI/Pages/exact hosted bytes and built-in-browser launcher/roles/notices/models. New source PR if appropriate: PR 2 already merged.
5. **Complete qualification:** full FR, ten-team/tie/timed/reveal, role-switch/save/import/export/recovery/privacy, representative devices/accessibility/performance, rights/reference matching/classroom review, identified release/download/rollback/support/handover/retirement rehearsal. Then freeze complete material key and execute **three fresh consecutive whole-scope zero-change passes**. Any material change invalidates the streak.

## Available evidence and limits

- [W68 hosted bytes](evidence/convergence/scene-game-20261009/hosted-996101c.json): instructor 8,037,597 bytes, SHA `e34e61851ae21fd120e2e37a6bced269f506610b5303f7466190bfab05ae92ce`; student 8,021,220 bytes, SHA `1ea279af7f537931b7afe2286fa7efc6c96194ee746c86338ca053403fa31180`.
- [Fresh W68 EN journey](evidence/convergence/scene-game-20261009/w68-matched-english-journey.json): both roles, all eight phases/70 positions, 10 sales/60 unsold, 70 final rows. COMMAND Team 1: eight purchases, cost 3,900,000, score 120, profit 100.01, bid 3,900,100.01, correct eligible award. Selected-team model/details, private confirmation/reload, Closed and backup downloads observed. Bounded HTTPS/EN evidence, not full acceptance.
- Source CI `37966084371`, preview CI `37966100355`, Pages `37966099730` succeeded for W68. Changed files require new run identities; old greens do not qualify new bytes.
- [Team 2 screenshot exposing fitment fault](evidence/convergence/scene-game-20261009/w68-selected-team2-build.png). Concept inventory: 455 subjects, all visual acceptance zero. Concepts are exploratory targets.
- [Scoped audit](evidence/convergence/scene-game-20261009/audit.md), [recovery](RECOVERY_GUIDE.md), [operations](RELEASE_OPERATIONS.md): preserve evidence identities when using historical guidance.
- Built-in Codex browser cannot establish local file:// / localhost acceptance here. HTTPS tests cannot replace actual packaged-file offline checks. CSP/VM/Playwright-offline tests are not separately observed/blocked **OS outbound-egress** evidence. Keep those gates open, continue available engineering.
- Responsive override did not change retained-tab 1280x720 bounds: no mobile pass. Existing provisional setup≤3s/input p95≤200ms/timer resume≤1s need device calibration. No accepted HTML-size/FPS/memory ceiling exists; current sizes are observations, not budgets.

## Resume commands

PowerShell; existing Node v24.20.0/npm 11.19.0. Pinned installed dependencies under `samples/threejs-recovery/node_modules`; restore through its lockfile only when necessary.

```powershell
Set-Location -LiteralPath D:\VSCode\SEA-Game\current
git status --short
git log -3 --oneline
git branch --show-current
node --version
```

Read current ownership/changes first. Stable Three.js edits build in this order:

```powershell
node samples/threejs-recovery/build-game.mjs
node tools/build.mjs
node tools/build.mjs --check
```

Affected checks include `node tools/test.mjs`, `node tools/test-journey.mjs`, `node tools/test-three-presentation.mjs`, scene projection/editor/language, artwork/encoding/package and `node samples/threejs-recovery/verify-game.mjs` / `verify-inspection.mjs`. Inspection wrappers temporarily generate files and may refresh model receipts: run sequentially, preserve unchanged receipt bytes/mtime, and never race material-key capture. `node tools/test-single-html.mjs` progressed from expected RED to agent-reported GREEN; source ownership is released for root verification. CI list: `.github/workflows/source-parity.yml`; add packaging check after it lands. `node tools/check-mpes.mjs` checks documentation/protocol/material identity, not product acceptance. Do not install dependencies just to check this handover.

No persistent project server/watcher/scheduler/polling logger or continuous disk writing. Finite build/test/evidence/commit writes are necessary; skip unchanged outputs and identical save snapshots. Do not promise zero OS/browser/assistant writes. Preserve authoring sources and historical evidence despite embedded runtime.

## Maintenance rule

Update this file at every material milestone, failed gate, ownership change, build/publication and before stopping or approaching context/usage limits. Record actual state, exact outcomes/source/preview identity, unfinished edits/known REDs and immediate next action. Update ledger for durable results and normative docs when contracts change. Commit coherent documentation checkpoints on the authorized source branch; stage named files, not another writer's incomplete code. This is event-based maintenance, not continuous autosaving. Never replace a newer checkpoint with stale agent context.

Claude starts at root `CLAUDE.md`, this file and actual Git status; check live writers, take explicit ownership, then continue the smallest ready action. Update this checkpoint on takeover. Do not infer release passes from unchanged files or commit count.

## Latest root verification and delivery

After both agents released ownership, root executed `node tools/test-single-html.mjs`: PASS, legacy bytes 8,037,597 / 8,021,220, unified in-memory 8,167,801 bytes; no artifact written. `node tools/check-mpes.mjs`: PASS for links/contracts/synthetic protocol only. `node tools/test-text-encoding.mjs` and `git diff --check`: PASS. These do not qualify final HTML/browser/offline/egress or full release; OPEN0/3 remains.

This documentation checkpoint stages only README, AGENTS, CLAUDE, handover, architecture assessment, scene plan and execution ledger. The five implementation files listed above remain uncommitted local work; a remote documentation checkout alone does not include them. Claude continuing locally must preserve/take ownership of them. Next implementation integration needs notices/specification/CI/key changes, versioning and a generated candidate; do not run current full parity expecting PASS while `dist/index.html` is missing and source differs from the old bundle. No project background process was started by this assessment.
