# Handover

Updated 2026-10-09. Specification: [MPES 2.1.0](MPES.md).

## 1. Version and milestone

Version 5.0.0-dev.0 on branch `rebuild/5`. Milestone **M0 (bootstrap)** complete locally; CI pending on the first push. `main` still holds 4.1.0-dev.1, the rollback until 5.0.0.

## 2. What works

- Repository bootstrapped from `origin/main`; the old tree is removed on this branch only.
- Pinned toolchain: TypeScript 6.0.3 (strict), esbuild 0.28.2, Vitest 5.0.1, Playwright 1.63.0 with axe-core 4.13.0, ESLint 10.10.0, three 0.186.1.
- `npm run build` produces only `dist/index.html`, deterministically, with a hash-pinned CSP, embedded licence and notices, an LF check on inputs and an 8 MB limit. `npm run check` verifies the committed file.
- Bilingual role chooser with About/licences dialog.
- Tests: `tests/unit/build.test.ts` and `content.test.ts` (12 PASS); `tests/e2e/chooser.spec.ts` over `file://` in Chromium, Firefox and WebKit with network guard and axe (12 PASS).

## 3. Not done or untested

Everything from M1 onwards (MPES §17). CI has not run yet.

## 4. In-progress work

None uncommitted beyond the M0 commit.

## 5. Next action

M1: implement `source/domain/` (MPES §6, Appendices A/B), schema-3 validators and backup envelope; oracle tests parse the MPES tables directly.

## 6. Rollback

`main` at `1f211fc` (4.1.0-dev.1). Old material is also in the local `_archive/` until release.
