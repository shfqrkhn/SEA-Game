# SEA Game: Systems Engineering Awareness

A bilingual (English/French) classroom auction game. Teams plan a vehicle for a mission, bid for components in a facilitator-led auction, reconcile their build and submit a value-for-money bid. The whole game is one offline HTML file with every image embedded.

- **Play:** open the game file (`SEA-Game-<version>.html` in a release package, or `dist/index.html` after a build) in a current Chrome, Edge or Firefox on **Windows 11** (the only supported platform). No installation, no network, no account.
- **Status:** 0.5.1.0 beta, tagged `v0.5.1.0` (G2: owner fixes, six-vehicle chooser, review gallery, code-free specification, codebase file, backup preparation); not yet release-qualified. Next: G3 (proxy and runtime, 0.6.0.0). The rollback is tag `v4.1.0-dev.1`.
- **Copyright:** (c) 2026 Shafiqur Rahman Khan, the creator.
- **Specification:** [docs/MPES.md](docs/MPES.md). **Current state and next steps:** [docs/HANDOVER.md](docs/HANDOVER.md). **Working rules:** [AGENTS.md](AGENTS.md).
- **Guides:** [classroom quick start](docs/CLASSROOM_QUICK_START.md), [recovery guide](docs/RECOVERY_GUIDE.md).

## Build and test

Requires Node.js 22 or 24.

```sh
npm ci
npm run typecheck
npm run lint
npm test
npm run check          # builds twice and fails unless both builds are byte-identical
npm run build          # writes dist/index.html (generated, never committed)
npx playwright install chromium firefox   # Edge: the copy installed with Windows is used
npm run e2e            # browser tests against the built file over file://
npm run verify         # all of the above, in order
```

Maintenance:

```sh
npm run gallery        # offline visual review page .artifacts/review/<version>.html, before/after vs the latest tag
npm run codebase       # rewrites docs/CODEBASE.md (every tracked file); run after the last edit of a change
npm run archive:prep   # dry run: what a cleanup would remove; -- --apply only when a cleanup is wanted
```

Locally, keep caches inside the project: set `npm_config_cache=.artifacts/npm-cache`. Playwright browsers default to `.artifacts/ms-playwright` (see `playwright.config.ts`).

Never edit `dist/index.html`; change `source/`, `content/` or `art/` and rebuild. Re-rendering the imagery needs the pinned Blender: see [art/README.md](art/README.md).

## Layout

- `source/domain/`: pure game rules (TypeScript, no DOM).
- `source/app/`, `source/ui/`: role controllers and the HTML interface (war-room HUD and projector theme).
- `source/showcase/`: the vehicle showcase (real-time 3D, stills fallback).
- `content/`: canonical card/mission data, EN/FR strings and the encoded renders (`content/renders/`).
- `art/`: Blender scripts and tools that produce the renders and the 3D model.
- `scripts/`: review gallery, codebase document, backup preparation.
- `build/`: the single-file builder.
- `tests/unit/`, `tests/e2e/`: Vitest and Playwright suites.
- `docs/`: specification, codebase, handover, guides, owner scripts and verification evidence.

## Licence

Original code and imagery: [MIT](LICENSE). The game file bundles one third-party library, three.js (MIT): [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md), also shown in the game under About.
