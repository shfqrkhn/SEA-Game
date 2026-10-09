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

Download either candidate HTML and open it directly. Each file contains CSS, JavaScript, game data, translations, Three.js, all 77 geometry models and 77 native vector illustrations for print. No adjacent assets folder, CDN, web server, account or internet connection is required. The screen presentation is 3D; there is no external image-loading chain or alternate 2D selector. A WebGL startup error reports status while leaving game controls usable; it does not load another rendering method.

## Embedded presentation

The current [3D candidate](https://shfqrkhn.github.io/SEA-Game/previews/threejs-game-20261008/) runs from its two self-contained HTML files. The repository artwork collection preserves editable originals and repair provenance; gameplay does not request those external files. Existing root Pages games remain the previous release until the candidate is accepted.

Card rules, labels, descriptions, prices, calculations, instructor ledger and student work remain local application data. Images contain no authoritative rule text. Session state is not sent to GitHub.

## Art inventory

- `assets/v1/cards/` - 70 editable SVG print-source illustrations
- `assets/v1/vehicles/` - six editable SVG mission print sources
- `assets/v1/practice/` - one SVG training print source
- `.github/workflows/source-parity.yml` - current embedded-resource, source, gameplay and model verification

The content is **synthetic instructional artwork**, not an approved depiction of actual equipment. The reconstructed game deck still needs balance/content approval.

The [artwork provenance and acceptance record](docs/ARTWORK_PROVENANCE.md) distinguishes technical validation from visual and rights approval. The obsolete external WebP collection and duplicate preview assets have been removed. Current runtime and print resources are embedded; `node tools/test-artwork-host.mjs` verifies this contract. Historical repair evidence and Git versions preserve provenance.

## Source and reproducible builds

Game candidate version: **3.4.0**. The [version policy](docs/VERSIONING.md) increments patch/minor/major according to the largest published change. Both HTML badges and backup metadata derive from the single `APP.version`; save schema, rules and deck versions remain separate. The [task-centered interface analysis](docs/game-design/UI_CLEANROOM_REBUILD.md) records the XY approach, original Three.js implementation patterns and licence boundaries.

Version 3.4.0 consolidates the student's known-card entry, private note and purchase result in Current; instructor Build selection aligns the task detail and model. Native editing adds Previous/Next field navigation with composition and stale-target guards. Closed keeps its new-session action visible; the compact French overview label is « Aperçu ». These are compatible candidate changes, pending exact-candidate browser and broader acceptance. Historical 3.3.0 source `01204c8` and preview `18dc0db` remain separate identities.

La version 3.4.0 regroupe la carte annoncée, la note privée et le résultat d’achat dans « En cours ». La sélection d’équipe relie les détails de conception au modèle; la saisie native permet de passer au champ précédent ou suivant. L’action de nouvelle séance reste visible et la vue générale compacte devient « Aperçu ». Les règles et sauvegardes restent compatibles; les validations de cette version candidate restent à effectuer.

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

[Play the game](https://shfqrkhn.github.io/SEA-Game/previews/threejs-game-20261008/) in either role. All eight phases integrate the mission/equipment scene directly into the current task; six vehicles and 71 part/process/practice models share scale and materials. Inspect revealed lots and owned cards. The vehicle build fits the latest hardware from each category, with assembled, cutaway and labelled exploded inspection views; all purchases remain in the ledger and inspection menu. Rules and schema-3 saves are preserved. Three.js, geometry and print illustrations are embedded; no alternate rendering or external artwork loading is used.

Geometry: `source/three/game-models.mjs`; renderer: `source/three/game-scene.mjs`; public role adapter: `source/shared/three-presentation.js`. Three.js 0.186.1 is locally bundled under MIT. Regenerate with `npm ci --prefix samples/threejs-recovery`, `node samples/threejs-recovery/build-game.mjs`, then `node tools/build.mjs`. Run `node tools/test-three-presentation.mjs` and `node samples/threejs-recovery/verify-game.mjs` alongside existing tests. See [qualification and limits](docs/THREE_JS_GAME.md).
