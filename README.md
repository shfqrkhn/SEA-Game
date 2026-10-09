# SEA Game — Systems Engineering Awareness

[Play the game](https://shfqrkhn.github.io/SEA-Game/dist/) · [Download the single HTML](dist/index.html)

Both EN/FR roles, eight classroom phases, a 70-card auction and six mission vehicles run from one embedded Three.js HTML. Classroom handoffs remain manual; no backend, synchronization or account. Export important work as role-specific JSON. Do not enter sensitive or operational information.

Published staged rebuild: **4.0.0-dev.5**; local candidate: **4.0.0-dev.6**; rollback: **3.6.0**. Full offline/device/accessibility/rights/classroom acceptance and three-pass release closure remain open. Start maintenance with [current handover](docs/HANDOVER.md).

## Operate and maintain

- [Classroom instructions](docs/CLASSROOM_QUICK_START.md)
- [Recovery](docs/RECOVERY_GUIDE.md) and [release/rollback/support](docs/RELEASE_OPERATIONS.md)
- [Canonical completion specification](docs/MPES.md) and [execution ledger](docs/EXECUTION_LEDGER.md)
- [Version policy](docs/VERSIONING.md) and [release notes](docs/RELEASE_NOTES.md)
- [Models and limits](docs/THREE_JS_GAME.md) and [asset provenance](docs/ARTWORK_PROVENANCE.md)

Repository content is limited to the game, canonical authoring assets, necessary build/regression tools, licences and current maintenance documentation. Concepts, prompts, demo viewers, duplicated snapshots and obsolete previews are excluded. Historical Git commits provide recovery. All new local reference/concept/evidence/test outputs stay in the existing ignored current/.artifacts under D:\VSCode\SEA-Game.

## Build and verify

Node 22/24 are covered by CI; local integration uses Node 24.20.0. Dependencies are pinned in samples/threejs-recovery/package-lock.json. Despite its historical directory name, that directory contains production geometry helpers and required build/model regressions.

```sh
npm ci --prefix samples/threejs-recovery --cache .artifacts/npm-cache
node samples/threejs-recovery/node_modules/typescript/bin/tsc -p tsconfig.json
node tools/build-domain.mjs
node samples/threejs-recovery/build-game.mjs
node tools/build.mjs
node tools/build.mjs --check
node tools/test.mjs
node tools/test-journey.mjs
node tools/test-single-html.mjs
```

The full check list is .github/workflows/source-parity.yml. Generators skip unchanged outputs; no project server/watcher or continuously writing job is needed. CLI emits only dist/index.html. Isolated role compositions are in-memory regression fixtures, not extra distribution files. Do not edit generated HTML.

Use modular source/ for rules, controllers, presentation and geometry. Canonical assets/v1/ SVGs are embedded. Preserve rules/prices/schema-3 saves. One renderer owner and native/semantic equivalents support accessibility and editing.

The clean rebuild is a 4.0.0 development candidate; 3.6.0 remains the rollback baseline. Fresh strict TypeScript domain source in source/domain drives canonical rules, immutable team transactions, session/phase policies and bounded backup/storage contracts; tools/build-domain.mjs updates only the marked payload in the actual role engine. Whole-role command/ledger/save validators and release qualification remain open. All new work remains within D:\VSCode\SEA-Game; local preserved references and scratch outputs share ignored current/.artifacts rather than additional folders.

Finite optional source/evidence packets use ignored .artifacts/: node tools/package.mjs --output .artifacts/NEW_NAME. Retain the printed integrity key; a packet is not accepted release evidence. Actual browser/file/offline/egress/device checks differ from Node/VM fixtures.

Original authored code is [MIT licensed](LICENSE); [third-party notices](THIRD_PARTY_NOTICES.md) are embedded. Asset/reference acceptance remains separate. Claude starts at CLAUDE.md; maintainers use AGENTS.md and the handover.
