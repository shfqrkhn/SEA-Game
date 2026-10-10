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
