# Delivery loop

A loop that ships one goal at a time with evidence, so any person or agent can pick up where the last one stopped.

## Per goal

1. **Branch from the last release** (SEA Game: from main at the last tag). One goal, one branch, one PR, one tag. Bump the version once by the scale of the change and add a changelog row.
2. **Each exit criterion and each open item: failing check first, then green.** Write the test or check that fails on the defect, make the minimal change, see it pass. Never weaken a test, a budget or a timeout to get green; find the cause.
3. **Sweep siblings.** For every defect, name its class and search every instance: every variant, angle, language, theme, viewport, role. Fix all; add a check that would have caught the first (see `../LESSONS.md`).
4. **Independent review of each substantial diff.** A second model or person reviews it read-only. Record every finding with a disposition (fixed, superseded, rejected with evidence) in the version's verification record.
5. **Docs in the same change.** Handover, readme, specification, verification record, guides. A status claim is withdrawn as soon as evidence contradicts it.
6. **Verify locally, then CI.** The local verify command is authoritative. Require two consecutive green CI runs on the same commit (re-run for the second): a cheap gate that catches some flakiness, not proof of its absence. Prevent flakiness at the source: isolated tests with their own data, controlled clocks and seeds, waits on conditions (never fixed sleeps), traces kept on failure, and any pass-on-retry investigated as a defect.
7. **Visual check by the owner.** Build a self-contained screenshot gallery of every view, before and after, with plain notes on what changed. Ask one question: GO or FIX. On FIX, apply every item and its siblings and repeat 5–7.
8. **Close.** Merge commit, tag, push the tag, confirm the deployed file's SHA-256 equals a local build of the tag, set the handover's next action.

## Evidence rules

- Report every check as PASS, FAIL, NOT_RUN or BLOCKED, with the exact command. No claim without executed evidence.
- Things only a person can do are BLOCKED-owner with a one-page script in `docs/owner/`, never a vague request.
- Keep budgets, timeouts and oracles in one place, with the reason for each number.
- A test that times out while every step is merely slow is starved, not hung: find what shares its processor. Run heavy tests (software-rendered 3D, long rehearsals) one at a time in their own group after the light ones, and never raise the timeout instead.
- A test whose work grows with what it samples (every view, every frame) outgrows its time on a slow runner while still working: read the trace for where it was, then split it into parts that together cover everything, with a guard that the parts still add up.

## Versioning

Example (SEA Game): four parts, `MAJOR.MINOR.PATCH.BUILD`; beta starts at 0.5.0.0; 1.0.0.0 only when every written beta-exit criterion has evidence, never because a milestone was reached.

## Hand-off

The final deliverable is a local package that does not depend on any hosting: a git bundle with tags, the built file with SHA256SUMS, content and art sources, render masters, docs and a RESTORE guide. A fresh restore must reproduce the build hash.

## Safety

- Never delete: move unwanted files to `_archive/recycle/<date>/`. Scratch lives in a git-ignored `.artifacts/`.
- Stage named files only; never stage local governance files or build outputs.
- Do not overwrite anyone's uncommitted work.
