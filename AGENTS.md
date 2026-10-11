# Working rules for agents and maintainers

1. Start with `docs/HANDOVER.md`, then `git status` and `git log -5`. `docs/MPES.md` is the specification and outranks old code, old docs, memory and chat.
2. Do not overwrite anyone's uncommitted work. Stage named files only.
3. Work inside `D:\VSCode\SEA-Game` only. Scratch, caches and screenshots go in `.artifacts/` (git-ignored). Never delete permanently: move unwanted files to `_archive/recycle/<date>/`. `_archive/` is read-only old material and will be deleted after release; nothing may depend on it.
4. Test first: a failing test, the minimal fix, green, then refactor. Never weaken a test or oracle to pass.
5. Never edit `dist/index.html` by hand. Run `npm run verify` before committing a milestone.
6. Report every check as PASS, FAIL, NOT_RUN or BLOCKED, with the command. No claim without executed evidence.
7. Update `docs/HANDOVER.md` at milestones, failures and before stopping.
8. Authority and limits: MPES §20.
9. Keep every document current in the same PR as the change (HANDOVER, MPES, this file, `art/README.md`, `docs/verification/`, guides), so another agent can resume development, operations and maintenance from the files alone. A status claim (green, converged, assured) must be withdrawn as soon as evidence contradicts it.
10. End-to-end tests: click instructor lot actions with `act()` from `tests/e2e/roles.ts` (it centres the button first; Firefox loses clicks on buttons half below the fold). Never wait without a bound: `actionTimeout` is 60 s; a slow readiness wait gets its own explicit timeout and a comment saying why. If main CI fails, download the `playwright-windows-*` artifact (`gh run download <id>`) and read the trace before changing anything.
11. One Blender process at a time, Codex jobs included: check `tasklist` before starting one. The owner uses this PC.
12. Never stage `docs/Omni_5.1.1.md` (the owner's governance file, local only).
13. The product is `dist/index.html`: one offline file of at most 50 MB that fetches nothing, for Windows 11. Performance comes before looks: every change must hold the reference-laptop budgets (MPES §14) on the proxy.
14. Work on a branch with a PR; merge only on green CI and tag each goal. End commit messages with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.
15. Never ask the owner a question. Anything only a person can do is reported as BLOCKED-owner, with a script of one page or less in `docs/owner/`.
16. When KPIs conflict (MPES §1.4): teaching and reliability come first, then learnability and workload, then performance and any-classroom (floors that are never traded away), then realism, then maintainability. Every effect must teach or confirm something.
17. Every change bumps the game version by its scale, with a changelog row in the same PR. The game version is four-part `MAJOR.MINOR.PATCH.BUILD` (`gameVersion` in `package.json`; `version` holds the first three parts because npm needs SemVer): MAJOR for a break or the first release (1.0.0.0 at M7; 0.x is beta), MINOR for a feature or milestone, PATCH for a fix, BUILD for a change that alters no behaviour (tests, docs, tooling, CI). The specification bumps MPES by SemVer. A version that is not yet tagged is not bumped again; tags are `v<gameVersion>`.
