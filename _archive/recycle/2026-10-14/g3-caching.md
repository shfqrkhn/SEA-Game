# G3 caching: CI and render encoding

Two changes make repeat work faster without changing what is produced.

## CI (.github/workflows/ci.yml)

- A newer push to the same pull request cancels the older, superseded run. Pushes to main and tags never cancel, because outside pull requests each run gets its own unique group.
- npm downloads are cached through actions/setup-node (cache: npm, keyed on package-lock.json). `npm ci` still runs; node_modules is not cached.
- The Playwright browser folder is cached per OS, engine set (chromium, or chromium plus firefox) and the exact @playwright/test version read from package-lock.json. The `npx playwright install` step is kept: on a cache hit it finds the browsers already present and finishes at once; on a miss it downloads as before.
- Matrix, test commands, budgets, timeouts and the Pages deploy are untouched. The one new action, actions/cache, is pinned by commit like the others (v4.2.4).

Evidence: workflow reviewed against the diff. The first CI run after merge is a cache miss; the second should show cache hits in the setup-node and cache steps (to be confirmed on the first two runs).

## Render encoder (art/tools/encode-renders.ts)

- Each master is trimmed and encoded once; the result is stored under `.artifacts/cache/encode/` (already gitignored via `.artifacts/`).
- The cache key is the sha256 of the master PNG bytes plus every setting that shapes the output (format, quality, effort, chroma or alpha settings, trim threshold and apron, layer kind) plus all sharp and libvips build versions. Change any of them and it re-encodes.
- A stored entry carries its own checksum; a damaged or half-written entry is ignored and re-encoded. Writes go through a temporary file and a rename, so parallel workers cannot leave partial entries.
- `--no-cache` bypasses the cache. The run summary reports how many files came from the cache.
- The command-line behaviour runs only when the file is executed directly, so tests can import its helpers.

Evidence:
- tests/unit/encode-cache.test.ts (4 tests): a tiny generated PNG misses first, hits second, and the hit is byte-identical to an uncached encode; a changed quality or format misses; the key changes with the master bytes and layer kind; a corrupted entry is re-encoded.
- Smoke run on a two-image folder: encode, encode again (2 of 2 from cache), encode with `--no-cache`: the three manifests are byte-identical (the manifest lists each output's sha256).
- `npx tsc --noEmit` and `npm run lint` pass. No full re-encode of content/renders was run.
