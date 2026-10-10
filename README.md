# SEA Game: Systems Engineering Awareness

A bilingual (English/French) classroom auction game. Teams plan a vehicle for a mission, bid for components in a facilitator-led auction, reconcile their build and submit a value-for-money bid. The whole game is one offline HTML file: `dist/index.html`.

- **Play:** https://shfqrkhn.github.io/SEA-Game/dist/ or download `dist/index.html` and open it in a current browser. No installation, no network, no account.
- **Status:** 5.0 clean-room rebuild in progress on branch `rebuild/5`. The published 4.1.0-dev.1 on `main` remains the rollback until 5.0.0 is released.
- **Specification:** [docs/MPES.md](docs/MPES.md). **Current state and next steps:** [docs/HANDOVER.md](docs/HANDOVER.md).

## Build and test

Requires Node.js 22 or 24.

```sh
npm ci
npm run typecheck
npm run lint
npm test
npm run build          # writes dist/index.html (skips if unchanged)
npm run check          # fails if dist/index.html differs from source
npx playwright install chromium firefox webkit
npm run e2e            # browser tests against the built file over file://
```

Locally, keep caches inside the project: set `npm_config_cache=.artifacts/npm-cache`. Playwright browsers default to `.artifacts/ms-playwright` (see `playwright.config.ts`).

Never edit `dist/index.html` by hand; change `source/` or `content/` and rebuild.

## Layout

- `source/domain/`: pure game rules (TypeScript, no DOM).
- `source/app/`, `source/ui/`, `source/bay/`: role controllers, HTML interface, 3D vehicle bay.
- `content/`: canonical card/mission data and EN/FR strings.
- `build/`: the single-file builder.
- `tests/unit/`, `tests/e2e/`: Vitest and Playwright suites.

## Licence

Original code and illustrations: [MIT](LICENSE). Bundled third-party software: [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md), also shown in the game under About.
