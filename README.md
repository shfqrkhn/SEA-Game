# SEA Game - Systems Engineering Awareness

## Completion specification

- [Project analysis and verified baseline](docs/PROJECT_ANALYSIS.md)
- [MPES: requirements, milestones, acceptance and lifecycle](docs/MPES.md)
- [Execution ledger](docs/EXECUTION_LEDGER.md)
- [Candidate packaging, release, rollback and operations](docs/RELEASE_OPERATIONS.md)
- [Classroom quick start for facilitator and students EN/FR](docs/CLASSROOM_QUICK_START.md)
- [Unreleased candidate notes and compatibility EN/FR](docs/RELEASE_NOTES.md)
- [XY analysis and autonomous lifecycle decisions](docs/XY_ANALYSIS.md)

`node tools/check-mpes.mjs` validates the specification package and synthetic protocol scenarios. It does not run the game's release tests or start an autonomous service.
`node tools/test-mpes.mjs` checks whether those scenarios reject deliberate semantic faults in the small protocol model.

These documents distinguish observed implementation from outstanding release acceptance. They do not certify the product as complete.

## Launch and distribution

[GitHub Pages launcher](https://shfqrkhn.github.io/SEA-Game/)

- [Instructor Master](SEA_Instructor_Standalone.html)
- [Student Companion](SEA_Student_Standalone.html)

For offline gameplay, download an HTML file and open it directly as `file://`. Each HTML contains its CSS, JavaScript, game data, translations and 77 vector artwork fallbacks. The high-detail WebP collection is optional and separate. No web server, account, external JavaScript, service worker or internet is required; supported-device classroom acceptance remains open.

For the **local raster collection**, [download the repository ZIP](https://github.com/shfqrkhn/SEA-Game/archive/refs/heads/main.zip), extract it and open one of the two standalone HTML files without moving it from the extracted folder.

## Three-tier image chain

For each card, the browser renders the embedded artwork immediately and optionally substitutes:

1. HTTPS WebP from `https://shfqrkhn.github.io/SEA-Game/assets/v1/cards/CAP-A.webp` (example).
2. On remote load failure, the exact same local file at `./assets/v1/cards/CAP-A.webp`.
3. If both fail, the built-in card-specific vector SVG remains visible.

Practice uses `assets/v1/practice/TRAIN-CAP.webp`. Mission previews use the six `assets/v1/vehicles/` illustrations with embedded vector fallbacks. Instructor assignment previews are collapsible; the student sees its selected mission in Setup and Planning. The SVG files and embedded fallbacks are actual vectors, rather than WebP wrappers. Candidate browser/visual acceptance remains open.

Card rules, labels, descriptions, prices, calculations, instructor ledger and student work remain local application data. Images contain no authoritative rule text. Session state is not sent to GitHub.

## Art inventory

- `assets/v1/cards/` - 70 WebP images plus 70 corresponding editable conceptual SVGs, keyed by card ID
- `assets/v1/vehicles/` - six WebP mission illustrations and their SVG references
- `assets/v1/practice/` - one WebP training image and SVG reference
- `.github/workflows/publish-artwork.yml` - read-only integrity checks for all 77 SVG/WebP asset pairs, standalone JavaScript syntax, and retired interface controls

The content is **synthetic instructional artwork**, not an approved depiction of actual equipment. The reconstructed game deck still needs balance/content approval.

The [artwork provenance and acceptance record](docs/ARTWORK_PROVENANCE.md) distinguishes technical validation from visual and rights approval. QA can decode all 77 images and inspect SVG references with `python tools/audit-artwork.py --source SEA_Instructor_Standalone.html SEA_Student_Standalone.html` using Pillow; the recorded local run uses Pillow 12.3.0. This is a development-only dependency.

## Source and reproducible builds

The canonical development inputs are `source/shared/engine.js`, `source/shared/presentation.js`, `source/shared/styles.css`, `source/instructor.js`, `source/student.js`, the two `source/*.template.html` files and the 77 canonical SVGs under `assets/v1/`. Build-time `tools/artwork-source.mjs` embeds the canonical vectors into each application; controllers do not carry duplicated vector tables. Shared presentation supplies in-page confirmations, notifications, language switching and artwork rendering. The root HTML applications remain independently usable, self-contained distribution artifacts.

- `node tools/build.mjs` regenerates both standalone applications with no dependencies.
- `node tools/build.mjs --check` verifies byte-for-byte source-to-distribution parity without changing files.
- `node tools/test.mjs` checks syntax, purchase-removal and closed-session reset handlers, practice command order/phase/isolation and recovery invariants, canonical rules/data, money and card acquisition, session/save reconstruction, bounded role-specific backups/imports, reveal continuity after validated reload, deterministic markets, mission scoring, awards, instructor sale/void/replay transactions, and student whole-dollar price defaults.
- `node tools/test-journey.mjs` executes delivered commands for six EN/FR/reveal-mode full-game fixtures with ten companions, manual outcomes, correction/reconciliation and phase backup/reloads. Rendering/browser APIs are isolated models; this is local command integration, not browser or classroom acceptance.
- `node tools/test-package.mjs` checks packet integrity and rejection of tampering, missing/extra files and unsafe paths. `node tools/package.mjs --output docs/evidence/convergence/NEW_PACKET_NAME` creates an unqualified local candidate snapshot; verify it with `--verify PACKET_DIRECTORY EXPECTED_KEY`, retaining the printed key separately. This does not authorize publication or certify release acceptance.

Do not edit the generated HTML directly. Rebuild and validate after source changes. The shared engine now owns canonical card/mission data, money, acquisition, session/save rules, seeded market generation, scoring, awards and reveal visibility. Current tests cover selected deterministic rules and transactions; full end-to-end and candidate-browser acceptance remains open.

## Verification boundaries

Source-level JavaScript parsing, asset-count and image-integrity checks can be performed locally. A partial smoke test of the deployed Pages build reproduced the student removal error and a whole-dollar price-prefill defect; the local candidate fixes both in source-level regressions, but the browser cannot open local files and the candidate has not received browser acceptance. The candidate now has manual, role-specific JSON backup, validated import and in-app restore of the previous session; these paths still need supported-browser, file-mode, storage-denial, rollback and classroom checks. Session storage alone does not provide long-term persistence, and the student application does not automatically synchronize with the instructor.

See [the recovery guide](docs/RECOVERY_GUIDE.md) for the candidate backup workflow and its current acceptance limits.

After a session reaches Closed, either role can request a role-specific backup and return to Setup with **Start a new session**. The app also keeps the previous session available through **Restore previous backup** in the same tab when storage permits. This lifecycle path still needs actual candidate-browser acceptance.

Do not enter personal, Protected, Classified, real-project, or operational information.

## Three.js game candidate

[Play the 3D workshop](https://shfqrkhn.github.io/SEA-Game/previews/threejs-game-20261008/) in either role. All eight phases have a 3D mission/equipment scene; six vehicles and 71 part/process/practice models share scale and materials. Inspect revealed lots and owned cards. The configuration shows the latest purchase per category on separate equipment stations; all purchases remain in the ledger and inspection menu. Rules and schema-3 saves are preserved. Repaired artwork remains available through the 2D/no-WebGL fallback.

Geometry: `source/three/game-models.mjs`; renderer: `source/three/workshop.mjs`; public role adapter: `source/shared/three-presentation.js`. Three.js 0.186.1 is locally bundled under MIT. Regenerate with `npm ci --prefix samples/threejs-recovery`, `node samples/threejs-recovery/build-game.mjs`, then `node tools/build.mjs`. Run `node tools/test-three-presentation.mjs` and `node samples/threejs-recovery/verify-game.mjs` alongside existing tests. See [qualification and limits](docs/THREE_JS_GAME.md).
