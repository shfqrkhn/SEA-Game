# PRODUCT_RELEASE progress: D15/W15 editing and submission identity

Date: 2026-10-08. Scope: R02/R09-R11/R21/R24; T03/T10/T11/T22/T25; M3/M4. Direct callbacks and isolated presentation are deterministic evidence, not actual browser or classroom acceptance.

This retains its dated D15/W15 fingerprint. Later [D16/W16 work](product-progress-scratch-vehicle.md) supersedes current candidate identity and reruns these regressions in the full suite.

## Contracts and red/green evidence

Student plan, risks and advisory WTP are editable only in unlocked Planning; profit text only in Submit. Existing schema-3 text limits (1200 characters for plan/risks, 20 for profit input) apply to runtime writes as well as import. Overlong text restores the prior field. Incomplete profit text remains a permitted draft during typing, for existing validation feedback. The first regression reproduced a Setup callback changing the plan: [editing red](editing-submissions-red.log). Actual callbacks now guard their phase, lock and text bounds. Whole-dollar WTP semantics and advisory status remain unchanged.

Instructor private-entry and pending-submission closing confirmations capture the complete state shown when requested. A changed session, submission, profit or phase rejects the delayed confirmation with localized EN/FR feedback. Unchanged confirmation succeeds; cancellation and repeat calls preserve state; closing an entirely submitted room requires no redundant warning. The second regression reproduced a changed session being opened for private entry: [confirmation red](submission-confirmations-red.log).

Rendered instructor profit/submission callbacks capture the session and exact team object. They require Submit, private-entry permission, a connected element and that same live team. A replaced/missing team or reused team number cannot retarget the old callback. The third regression reproduced a delayed profit input changing the replacement team: [input red](submission-inputs-red.log). Both input kinds now reject these cases; connected inputs still work, including repeated checkbox edits, and invalid money preserves prior state.

The input harness initially omitted `lang` and the role `amountInput` function; these were harness failures, not product red evidence. Both dependencies were supplied before the behavioral failure was observed. The later missing-dependency output is retained in [harness diagnostic](submission-inputs-harness-failure.log). No test expectation or game rule was weakened.

## Integration, review and remaining gates

Both standalone apps were regenerated. Full tests and byte parity pass on Windows Node 24.20.0 and Ubuntu/WSL Node 22.23.3: [Windows output](editing-submissions-final-win.log), [WSL output](editing-submissions-final-wsl.log). Contract checks pass with 195 material files/10 structural checks/29 cases; the protocol check rejects 18 mutants. `git diff --check` passes with LF normalization notices only.

Exact local working-content key: `0331a567611fe3b152b3f5f83dd2ede1abf5465f67bf4f5827c640dde005c205`. [Manifest](candidate-manifest-editing-submissions.json) and [execution/hash record](editing-submissions-verification.json) preserve source, generated artifacts, tests, environment and log identity. This checker key uses the SPECIFICATION basis; it is not a qualified PRODUCT_RELEASE key. Existing SPECIFICATION receipts remain historical after these changes; no current PRODUCT_RELEASE receipt is claimed.

Fresh remote main remains `1b80b348ac945987fbe11db77bd7a51f3dd553aa`; its Source parity/Pages jobs report success. The [Pages readback](editing-submissions-pages-readback.jsonl) finds HTTP 200 and exact committed-HEAD byte equality for the launcher and two apps. Candidate changes remain uncommitted and undeployed; actual candidate CI is NOT_RUN.

Self-review checks private-entry remains ephemeral and resets on phase/restore, stale actions cause no state write, incomplete valid-sized drafts remain usable, and connected repeated submission edits still work. No schema field, card/mission rule, money conversion, budget or runtime dependency changed. French feedback still needs human language acceptance.

The candidate browser test remains open without an exact-candidate HTTPS route. T10 actual confirmation/focus/keyboard flows, T11 import/reload and dynamic DOM behavior, real candidate CI, device/accessibility/rights/classroom acceptance and release/handover remain open. Continue W05 vehicle-lock/transition and student scratch-input boundaries while independent M5/M6 work proceeds.
