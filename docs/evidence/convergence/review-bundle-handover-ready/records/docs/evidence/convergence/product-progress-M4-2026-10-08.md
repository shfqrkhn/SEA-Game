# Product progress record: partial M4 durable recovery

Date: 2026-10-08. Scope: role-specific, versioned manual save export/import and D13/W13 closed-session reset for the current schema-3 instructor and student apps. This is implementation and deterministic test evidence, not an M4 exit or product acceptance.

## Candidate identity and boundaries

- Git HEAD remains `1b80b348ac945987fbe11db77bd7a51f3dd553aa`, matching the freshly read `origin/main`; all candidate changes are uncommitted in the existing working tree.
- Historical snapshot MPES 1.1.1 SPECIFICATION key: `6004a55a7debbc343a420468d975a29badb176ec23f04602d03185b47229eaf2`. The [three-pass receipt](specification-receipt-6004a55a.json) applies only to those earlier bytes. Later [D14/W14 practice work](product-progress-practice-2026-10-08.md) invalidated it for the current candidate; see [invalidation](invalidation-6004a55a.json). Full PRODUCT_RELEASE review count remains 0.
- The Codex built-in browser remains open on the deployed Pages baseline reproduction. The user supplied no candidate preview URL and directed that the candidate browser test remain open. No candidate T10 browser pass is claimed.
- The envelope identifies format version, role, app version, ruleset, deck, schema and session code. Instructor and student imports use separate strict validators and 500,000-byte / 250,000-byte limits respectively. The app checks file size before reading; imports never evaluate supplied data.
- Before confirmed replacement, the active valid session is kept in a prior-session storage slot when available and a role-labelled download is requested. A validated previous session can be restored in-app through the same confirmation/replacement path. Corrupt stored bytes can be exported in a clearly unvalidated recovery-rescue envelope before replacement. Import requires the role-specific in-page confirmation and compares the active snapshot before applying; an open instructor lot is restored paused. A draft [recovery guide](../../RECOVERY_GUIDE.md) documents the candidate workflow and explicitly marks browser/classroom acceptance as open.
- D13/W13 now gives each role a localized Closed-screen “start new session” action. The handler requires confirmation, checks the captured state for staleness, downloads a role-specific pre-reset backup before clearing active storage, preserves the prior-session restore slot where supported, and returns to Setup. Storage denial remains in-memory with a warning; a failed download aborts reset. Direct handler tests cover cancellation, stale state, download failure, storage denial, backup/restore, active-state removal, and a subsequent instructor session/student join. Browser clicks and downloaded-file acceptance remain open.
- Download prompting, local-file behavior, blocked storage, recovery across tabs/devices, previous-app rollback, and end-to-end classroom recovery have not been verified in a browser. French copy has not received human language review.

## Deterministic checks

Windows Node 24.20.0:

- `node tools/test.mjs`: PASS. Coverage includes envelope/version/role/session checks, actual instructor and student schema-3 validator round trips, strict unknown-field rejection, impossible open-but-hidden instructor save rejection through both validator and import parser, file-size-before-read, previous-session validation, explicit replacement confirmation, stale-state rejection, pre-replacement download ordering, storage-write failure, confirmed closed-session reset in both roles with backup/restore and subsequent instructor session creation/student join, student purchase removal, pricing, instructor sale/correction/void/recommit, unsold override/void/recommit, all-70-lot advancement and final Build transition, exact timer and callback boundaries, bid freshness/eligibility, purchase caps, auction-open reveal-mode transitions, and actual market-renderer visibility after validated reload and EN/FR rerender.
- Direct instructor save-validation and import-parser regressions also prove that a closed, uncommitted auction cannot restore a stale leader/current bid, and that a committed SALE must agree with the effective ledger winner and amount. Valid SALE and UNSOLD snapshots remain accepted. Both invariants were reproduced as red tests before the guards were added.
- `node tools/build.mjs --check`: PASS; both standalone HTML outputs reproduce byte-for-byte.
- `git diff --check`: PASS.
- `node tools/check-mpes.mjs --key`: PASS; specification key recorded above.
- `node tools/test-mpes.mjs`: PASS; 29 synthetic scenarios, 18 semantic mutants rejected.
- `git diff --check`: PASS; Git emits only the configured CRLF-to-LF normalization notices for README and the test file.

Ubuntu 24.04 under WSL, Node 22.23.3:

- `node tools/test.mjs`: PASS.
- `node tools/build.mjs --check`: PASS.
- `node tools/test-mpes.mjs`: PASS; 29 synthetic scenarios, 18 semantic mutants rejected.

Two fresh, independent out-of-tree snapshots were copied from the exact candidate, excluding `.git` and `node_modules`. The Windows snapshot `C:\Users\user\AppData\Local\Temp\SEA-Game-candidate-reset-final-win-cf906dbe34624c79beeb0898560ec46a` passed `test.mjs`, `build.mjs --check`, and `test-mpes.mjs` under Windows Node 24.20.0. The WSL snapshot `C:\Users\user\AppData\Local\Temp\SEA-Game-candidate-reset-final-wsl-6c2cb575254f43349265b16446554980` passed the same three commands under Ubuntu 24.04 / WSL Node 22.23.3. Full outputs are retained as `candidate-*-{win,wsl}-6004a55a.*` in this folder. These are repeated out-of-tree copies, not clean Git clones and not GitHub Actions. Supported-browser T08/T10/T11/T12 and release gates remain open.

Candidate SHA-256: `source/shared/engine.js` `2aeafe8d70449a61587c0f7a6a826da4d5e9da3d8834b88cbc12ada42d610d35`; `source/instructor.js` `627afaa9d0df2519e5e56eb72522c423c7ba841f76a782680e0a13d4b90ccf8b`; `source/instructor.template.html` `b0a66a067265e1899ae66ed8f66cab915db73dad7e4f42b7ea6f498eca810b0b`; `source/student.js` `a52ff4e06828ea00d31378c47d8a433ee15cb0b6230454f092bc289d4b734edc`; `source/student.template.html` `a30413a81611a852e720f498a2db572d3257cced006c965cf19d779066ab956b`; instructor/student standalone outputs `cbb8dab8ca54c0f69362d97d2a38e2e85ea78045e5a51e76c505b5c63b865b6d` / `a2779d286debdf99585f6080517beb046644712199565c479db070fffbf31345`; `tools/test.mjs` `8c5f1c837a9c0eb3f6e33fefeb5d9881137f162e4d57eb0f092aa55a1e8004c0`; `docs/EXECUTION_LEDGER.md` `2b1b9dfc2eef50c8a134037e5e83a8447b37d4f2a13717cd6a04aa8d3664d6ee`; `docs/PROJECT_ANALYSIS.md` `14aa39328140c59bace7abbdc2e1885057a69cc939d47e62cf142e9c3cf935e5`; `docs/RECOVERY_GUIDE.md` `4cae73c02766d18ad1fc113f75d6aed636fb512104b782196c5f477738de0aa8`; `README.md` `371c1c1db4ff2bcbdfaeab1d3eea2574919fad5eb5c9742edfaaf9d1c58d5871`.

Remote freshness was rechecked for this key: `origin/main` remains `1b80b348ac945987fbe11db77bd7a51f3dd553aa`; live Pages index and both standalone files return HTTP 200 and their exact byte hashes match committed `HEAD`, while both candidate standalone outputs remain different and are not deployed. See [current remote readback](current-remote-readback-6004a55a.json). The Codex built-in browser remains open on the baseline browser test; no candidate HTTPS preview URL was supplied, and no local-file or localhost route was used.

## Disposition

W06 / M4 remains PARTIAL and W13 remains PARTIAL. Next: exercise export/import/reset clicks, corrupt-save rescue, blocked-storage operation, cancellation, interrupted download, stale tabs, timer restore and rollback using an approved browser route serving this exact candidate; then collect independent recovery review. The candidate browser test remains open pending a supplied HTTPS route.
