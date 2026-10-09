# Product progress record: M1 stabilization and partial M2/M3 engineering slices

Date: 2026-10-08. Scope: local candidate work for D01 student purchase removal, D02 line-ending parity, canonical M2 rule extraction, M3 transaction/replay characterization, and D11 whole-dollar sale-price prefill repair after a deployed-browser smoke test. This is progress evidence, not an M1-M3 exit, release, classroom or convergence receipt.

## Candidate identity

- Git branch/HEAD: `main` / `1b80b348ac945987fbe11db77bd7a51f3dd553aa`; local HEAD is 0 commits ahead and 0 behind `origin/main`.
- Fresh remote readback: `git ls-remote origin refs/heads/main` still returns `1b80b348ac945987fbe11db77bd7a51f3dd553aa`. The Pages smoke test loaded the deployed `v3.0.0-local` UI; exact current deployment-byte identity was not read back, so this remains hosted-baseline interaction evidence.
- All working-tree changes remain uncommitted. Existing MPES, README and evaluator changes were preserved.
- Canonical build inputs and standalone outputs use LF under `.gitattributes`; `core.autocrlf=true` on the Windows checkout. Git reports `w/lf` for all eight build inputs/outputs.
- Windows: Node `v24.20.0`, Windows 10 build `26300`, x64.
- Linux: Ubuntu `24.04` under WSL, Node `v22.23.3`, x64. The Node archive was downloaded from the official Node.js distribution and its SHA-256 matched the adjacent official `SHASUMS256.txt`: `df450af89261115ef9f9e3830c3eeb2cc9213b63c720b1af623cb5dcbe2e02de`. The project files were accessed through the WSL-mounted checkout; this was not a clean Linux clone.

## Executed checks

| Environment | Command | Result |
|---|---|---|
| Windows / Node 24 | `node tools/test.mjs` | PASS: rendered purchase-removal handler; frozen-baseline data equality; shared session/save reconstruction, market, acquisition, scoring, money and award cases; instructor sale/correction/void/recommit; all-70-outcome ledger replay; all 70 student start-price defaults render, parse and acquire at exact canonical cents. |
| Windows / Node 24 | `node tools/build.mjs --check` | PASS: both standalone outputs byte-match generated output. |
| Ubuntu WSL / Node 22 | `/home/user/node-v22.23.3-linux-x64/bin/node tools/test.mjs` | PASS: same suite. |
| Ubuntu WSL / Node 22 | `/home/user/node-v22.23.3-linux-x64/bin/node tools/build.mjs --check` | PASS: both standalone outputs byte-match generated output. |
| Windows / Git | `git diff --check` | PASS; no whitespace errors. |
| Codex in-app browser / GitHub Pages HTTPS | Deployed instructor/student smoke journey | PARTIAL: generated a two-team session, joined the student companion with a fictional code, recorded practice, entered auction, loaded CAP-A and recorded a sale. Cancel preserved state; confirmed reconciliation reached Build. Remove then threw `ReferenceError: i is not defined` and left the purchase/totals unchanged. |
| Codex in-app browser / local candidate | `file:///D:/VSCode/SEA-Game/current/SEA_Student_Standalone.html` | BLOCKED by browser URL policy (`file:` disallowed; only HTTP(S) allowed; local-page workarounds prohibited). No candidate browser pass is claimed. |

The refactor followed red/green characterization: the new shared-data, acquisition, session, seeded-market and award tests each failed while the role controllers still contained duplicate definitions, then passed against the shared engine. T05 and T09 cases use hand-computed score and ranking values, including a sub-cent display distinction, equal-ratio lower-bid ordering, deterministic display ties and eligibility. An early comparator assertion was corrected to check its ordering relation instead of imposing an undocumented return value.

After canonical extraction and frozen-rule comparison, the full test suite and both generated-output checks passed on Windows Node 24 and Ubuntu WSL Node 22. Each platform used the same current working-tree candidate once. T17's two clean-candidate repeats and candidate CI still remain open.

The latest read-only baseline audit passed in Windows Node 24 and Ubuntu WSL Node 22 (`audit-runs/run-3LJ4FK` and `run-RvsEWO`). It found instructor/student rule data equal to each other and to both frozen original HTML snapshots, with 70 cards. Both runs also found 77 SVGs and 77 matching WebPs with valid basic WebP headers/lengths, and the committed-HEAD LF reconstruction built and passed its then-committed tests. This is structural/content parity, not educational approval, image decoding/visual acceptance or a clean-clone test of the current uncommitted candidate.

The shared engine now owns the canonical 70-card data and category order; session/phase parsing, save-derived team normalization, slot-aware card indexing, acquisition invariants, seeded market generation, mission requirements/scoring, money primitives and award ranking. The instructor/student controllers no longer carry parallel copies of those rules. Tests compare the catalogue and mission definitions to the frozen original-rule fixture; validate category counts, bilingual titles, prices and effects; and exercise a fixed seed for determinism, changed-seed variation and complete seven-by-ten slot mapping. Acquisition tests cover valid purchase, duplicate and invalid-price rejection, per-round limits and state preservation. Save tests cover valid reconstruction and stale-instance rejection. Score and award cases use hand-calculated examples. These technical results do not constitute owner approval of educational rules or balance.

The first draft exposed an incorrect expected reconnaissance value (communications awards full 25 km steps); that oracle was corrected before the passing run. T04/T05/T09 characterization now passes, but M2 remains partial while clean-candidate/CI repeats and actual educational/content acceptance are outstanding.

M3 tests execute the current instructor sale and void functions with shared acquisition, save validation and ledger replay. They cover below-start and third-win rejection without mutation, correction reason and confirmation, a valid sale, duplicate commit, confirmed void, effective-ledger removal and a subsequent recommit. A serialized sale → void → sale chain replays to live inventory; off-step price tampering is rejected without input mutation. A separate seven-round save with all 70 SALE/UNSOLD outcomes reconstructs both teams' inventories; duplicate-lot tampering is rejected without mutation. This remains focused handler characterization, not the full bid/timer/reveal matrix or a full game journey.

The deployed browser run found a second P1 defect: CAP-A displayed a $300,000 start but the student whole-dollar sale field defaulted to `30000000`; committing it recorded $30,000,000. The candidate now uses the cents-to-dollar `amountInput` formatter for that field. The new direct `renderCard` regression failed before the edit (`30000000` vs `300000`) and passed after it; all 70 canonical lot/card starts now round-trip through the displayed whole-dollar input and shared acquisition at exact canonical cents. The deployed build was not modified, and the browser could not open the local candidate.

## Changes and remaining verification

D01 now binds each removal control to `purchase.instance`, rechecks that exact target after confirmation, refuses a stale target, and then updates the purchase list, cost, capability totals and round count. The regression invokes the rendered handler and exercises confirmation through a test gate. It does not exercise the production confirmation dialog in a browser.

D02 now has an explicit repository-wide LF text policy, with WebP files kept binary. The Windows and Linux builds reproduce both output files. Clean-clone repeats and the actual candidate CI jobs remain outstanding.

Real-browser T10 was partial against the published HTTPS build, not the local candidate. The removal crash was reproduced and the cancel/confirm transition to Build was exercised. Candidate T10 remains open because the Codex browser rejected the local `file:` URL and explicitly prohibited accessing that local page through another route. Classroom, assistive-technology and device acceptance remain unrun.

## Artifact hashes (SHA-256)

| File | SHA-256 |
|---|---|
| `.gitattributes` | `bf5e6f93ef71a5da42944d66af69e3ca41a911cfb55d40fbd2465d44b876a85e` |
| `source/shared/engine.js` | `283f37c4dcbf7f798feb8dd77357e7d1d7cdbcf056bff5d0828c38bb778c8a86` |
| `source/instructor.js` | `ddaa095a05a22a88091076cb24775cddbddc2f3a2ea22f7831d8e4df9ab3ce74` |
| `source/student.js` | `bafe615b835c64fbd2cac59ab5ad15f147210633f6f8aa7426a90ba4ecb3bb08` |
| `SEA_Instructor_Standalone.html` | `c121d63100d142df36c9b5fec3226ec3fdaec539bd625edd399be3e6c95fe4a4` |
| `SEA_Student_Standalone.html` | `ccb19fd7e5df4266304351741360a39dc0957c29a1b5e398d6d5f3b1886835ff` |
| `tools/test.mjs` | `cfa63edcbc4f25784f4281816d60d305784c0f17315242a3903e242e48988deb` |
| `docs/evidence/audit-baseline.mjs` | `784d3452284d2b225da6b307e99b2da8bd27fc8766e73142e54125bf31c3b582` |

The prior SPECIFICATION receipt (`0862ae4d...`) is for MPES 1.1.0 and predates the current source, test, evaluator and MPES 1.1.1 changes. It is historical only. Current MPES 1.1.1 checker key: `ffff0fa2791bd2ce069f39f221cf5748651b35650a14432e6e02f2f12daad8e1`; the specification checker and 29-case semantic model pass, but they are not fresh full-closure reviews. Consecutive fresh same-key zero-change review count for this key: 0.

## Later M3 timer-handler characterization

The current candidate adds direct tests of the instructor pause/resume/extension handlers. The tests verify exact remaining-time capture, extension while paused, resume from the extended remainder, deadline equality, zero-time pause/resume, a fresh extension after expiry, untimed pause/resume, rejection after closure, and no mutation after a lot is committed. These are deterministic handler examples, not real timer interval, event-loop, reveal-mode or browser-journey acceptance. W05/M3 remains partial.

## Later M3 bid and open-handler characterization

The candidate now directly executes `acceptTeamBid` and `openAuction` with fixed state and controlled time. Bid checks cover the exact opening offer and increment, same-leader rejection, stale displayed amount rejection without mutation, the next team's valid acceptance, invalid mission, unlocked/closed/paused/wrong-phase state, two-win cap, deadline equality, already committed lot, malformed displayed amount, and exact-money overflow. Open checks cover phase, vehicle lock, complete roster, already-open and committed guards; all ROUND/JIT/MANUAL openings reveal the active lot, and TIMED opening starts the configured duration. Windows Node 24 and Ubuntu WSL Node 22 tests and standalone build parity pass after these additions. Current `tools/test.mjs` SHA-256: `c5c0b19851853d2708bf6ec9844bd366e2a5c041c2eccd24e9d3ea4e8928b99f`.

The user confirmed that no HTTPS candidate preview URL is available and directed that candidate browser testing remain open. The candidate route is therefore still an external acceptance dependency; the deployed baseline browser evidence does not substitute for it. Timer interval lifecycle, full instructor/student journeys, classroom acceptance, clean checkouts and CI remain open. This is not a full T06/T07/T10 exit.

## Deterministic timer callback and remote-baseline refresh

Additional `startTimer` callback tests use an injected clock and fake interval queue to exercise the 250 ms update cadence, final-call announcement at exactly five seconds, one-time announcement, exact expiry, interval cleanup, expiry render, stale callback cleanup after closure, and clearing an existing timer when switched to untimed mode. The full Windows Node 24 and Ubuntu WSL Node 22 suite and standalone byte-reproduction checks pass. Current `tools/test.mjs` SHA-256: `2da2029733a3bc3fd69a65ea633e3d3b6220d08a6044a3afa153e1e9caf12d8f`.

A fresh readback still finds `origin/main` at `1b80b348ac945987fbe11db77bd7a51f3dd553aa`. Live instructor and student Pages downloads returned HTTP 200 and byte hashes matching the committed `HEAD` files (`cc9702e26b109d053a44993cd88e071ca415c29abf182335ac93274637d5b2ea` and `592e415c0a0501a983c18eb477dd00188cabe17d097fb173dc203c95db90dd4a`). Both live files differ from the uncommitted candidate, so this verifies the hosted baseline only; candidate browser acceptance remains open.

## Unsold, void and full-lot advancement characterization

The instructor `commitUnsold`, `voidCurrent`, `openAuction`, `commitSale` and `advance` handlers now have deterministic transition coverage. Cases exercise the leader-confirmation guard for unsold results, mutation-free missing reason/confirmation, voiding unsold with a linked sequence reference, reopening and recommitting a voided lot, refusing to void a sale whose matching purchase is absent, refusing to advance an uncommitted lot, ROUND/JIT/MANUAL visibility state on the next lot, the 10th-lot round boundary, and advancement through all 70 committed unsold outcomes into Build. Windows Node 24 and Ubuntu WSL Node 22 full tests and both byte-reproducible builds pass. Current `tools/test.mjs` SHA-256: `d1a7875e9d3cf443e27631618e32a9e9311c673aa1f5edc28a3537a99f9a0f1e`.

These are actual-handler characterization tests; they do not replace T02/T06/T07/T10 browser journeys, reveal continuity after reload or language changes, or classroom acceptance. The addition changes the keyed SPECIFICATION basis; the previous key's convergence receipt is historical until renewed review of the current key.

## Isolated cross-platform candidate snapshots

To look for undeclared working-tree dependencies, two independent out-of-tree copies of the full candidate were made from the same current files, excluding `.git` and `node_modules`. Both copies passed `node tools/test.mjs` and `node tools/build.mjs --check` on Windows Node 24.20.0 and Ubuntu WSL Node 22.23.3. Snapshot paths during this run were `C:\Users\user\AppData\Local\Temp\SEA-Game-candidate-d6qencw6\copy-1` and `...\copy-2`. This provides four repeated snapshot/platform test-build passes, but is not a clean Git clone and does not execute GitHub Actions. Candidate-commit checkout and actual CI remain open.

## Fresh isolated snapshots after recovery-invariant changes

The earlier snapshot root `C:\Users\user\AppData\Local\Temp\SEA-Game-candidate-reset-755f8104ce494d64b9b6bfc042c5eb0e` predates the final subsequent-session test assertions, so retain it as historical only. The latest exact-candidate out-of-tree snapshot evidence, including the test source hash and Windows/WSL test, build and MPES evaluator results, is in the [M4 progress record](product-progress-M4-2026-10-08.md). These snapshots are not clean Git clones or GitHub Actions executions.

## Closed-session reset red/green

The release contract says both roles retain their closed summary and deliberately start anew, but neither Closed template exposed a route back to Setup. A new regression first failed on the missing button in the instructor template. The candidate now provides a localized **Start a new session** action in both roles. Actual reset handlers require confirmation, compare the captured full-state snapshot, request a role-specific backup before clearing the active save, retain the backup in the previous-session slot when storage permits, return to Setup, and abort on download failure. Direct transition tests also start the instructor's next session and join the student's next companion session. Tests cover both roles, cancel, stale state, download failure and storage denial; Windows/WSL working-tree and two-snapshot test/build runs pass. This is deterministic handler evidence only; actual T10 browser clicks/download verification and classroom reuse remain open.
