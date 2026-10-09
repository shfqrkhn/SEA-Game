# PRODUCT_RELEASE progress: D14/W14 practice isolation and recovery

Date: 2026-10-08. Scope: R02/R10/R21/R24, T03/T11/T22/T25, M3/M4. This records local product engineering; classroom, candidate browser and milestone acceptance remain open.

This record retains its dated D14/W14 candidate identity. Later [D15/W15 editing/submission work](product-progress-editing-submissions.md) supersedes that working-content fingerprint; its full current suite also reruns the practice regressions.

## Independent acceptance and actual failures

Practice is a separate, unscored exercise. Instructor commands must occur in Practice in order: reveal -> open -> accept -> close, with a reset available during the exercise. Student recording/reset occur only in Practice. Planning requires completed practice and clears its transient state. Commands from other phases and skipped prerequisites leave all state unchanged. Training must never add to scored purchases, cost, ledger, market, plan or auction position.

The first new direct-handler regression failed because instructor `practiceReveal` mutated state during Setup. Retained output: [handler red](practice-guards-red-2026-10-08.log). Production handlers now recheck phase/prerequisites, and the internal instructor reset helper permits only Setup/Practice. Direct tests invoke the actual wired callbacks and production phase function, with rendering/storage isolated. They cover both roles, all seven non-practice phases, skipped steps, repeat clicks, reset, missing-session entry and planning exit. [Handler green](practice-guards-green-2026-10-08.log) passes. These tests do not operate a browser DOM.

An independent save-state oracle names five valid instructor stages: ready, revealed, open, accepted bid, closed. All 16 boolean combinations are tested. The next red regression showed that a closed tutorial lacking reveal/leader was accepted by the schema-3 validator: [recovery red](practice-recovery-red-2026-10-08.log). Production validation now enforces reveal/open/leader/closed consistency and cleared tutorial state outside Practice. Student training-win state is accepted only in Practice. Both role import paths exercise rejection; all valid stages and clean later-phase schema-3 saves remain accepted. No schema/version or game rule was changed. [Recovery green](practice-recovery-green-2026-10-08.log) passes.

The old synthetic 70-lot Build fixture had `practice.closed=true` while reveal/leader were false. It was corrected to the clean state produced by the actual planning exit, before the new failing validator assertion was introduced. Its ledger and all replay/award expectations were retained; the impossible state remains covered by explicit rejection tests. Frozen original sources confirm that both planning exits discard practice state.

## Integration and boundaries

Both standalone outputs were regenerated from source and reproduce byte-for-byte. Full product tests and build checks pass on Windows Node 24.20.0 and Ubuntu 24.04 / WSL Node 22.23.3. Final outputs: [Windows](practice-final-win-2026-10-08.log), [WSL](practice-final-wsl-2026-10-08.log). The contract checker passes (195 material files, 10 checks, 29 synthetic cases); the protocol mutation check rejects all 18 mutants. `git diff --check` passes with configured LF normalization notices only.

Local working-content fingerprint: `fd2ccb3193b32b4a5cdb84cb09b4dac2cb75c794424c53c45e0d13bb008e2a50`. This is the checker's SPECIFICATION identity basis, not a qualified PRODUCT_RELEASE key. [Exact manifest](candidate-manifest-practice-2026-10-08.json) and [execution/hash record](practice-verification-2026-10-08.json) bind source, generated outputs, tests, workflow, documents and logs. HEAD and remote main remain `1b80b348ac945987fbe11db77bd7a51f3dd553aa`; refreshed baseline Source parity/Pages jobs report success and all three live Pages files still match committed HEAD bytes, not this candidate.

Source-parity CI now declares Windows/Ubuntu and Node 22/24 combinations with `fail-fast: false`; contents permissions remain read-only. This is a configuration change with local command verification, not a claim that candidate CI ran. Actual candidate jobs await authorized integration.

The changed source, generated outputs, tests, CI, README, MPES scope note and ledger invalidate the historical SPECIFICATION receipt at `6004a55a...`; preserve it as prior-key evidence. No current-key three-pass specification or PRODUCT_RELEASE receipt is claimed during ongoing development. The candidate browser test stays open; no exact-candidate HTTPS preview URL was provided. Browser T03/T11, actual CI, owner/content/rights/accessibility/classroom acceptance, release and handover remain open.

## Review and next action

Self-review challenged wrong-phase/delayed handlers, reopened completed tutorials, repeated win recording, reset from each of the five valid stages, invalid imported flags and schema-3 compatibility. Valid classroom commands retain their existing semantics. The normal production callbacks plus phase function are exercised; no original mechanic, card/mission rule, bid or balance expectation was altered. No public/private cross-role interface or runtime dependency was added.

W14 remains partial pending actual EN/FR browser clicks and restores. Continue W05 by characterizing planning/auction/submission command boundaries, vehicle locks, repeated transitions and private-entry confirmations. Continue ready M5/M6 engineering while exact-candidate browser access and actual human acceptance remain unavailable; do not restart specification convergence on each ongoing product edit.
