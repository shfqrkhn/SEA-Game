# PRODUCT_RELEASE progress: D16/W16 scratch notes and vehicle transitions

Date: 2026-10-08. Scope: R02/R09-R11/R21/R24, T03/T10/T11/T22/T25, M3/M4. Tests invoke production callbacks/functions with isolated DOM/presentation dependencies. They do not establish actual browser, classroom or milestone acceptance.

## Acceptance and failure evidence

Scratch WTP/decision edits belong to the current Auction lot, session and team. They require connected inputs and valid 7x10 positions. Advisory WTP keeps existing whole-dollar semantics; invalid money must not create or alter a record. Notes accept the existing 600-character loader limit; overflow restores the prior field. Rendering an untouched lot must display empty defaults without creating private records. Existing valid saved scratch data remains readable; no schema or mechanics changed.

- [Scratch red](scratch-vehicle-red.log): the actual WTP callback created a record during Setup. Rebound callbacks now capture the slot/session/team, reject wrong-phase or delayed intent and enforce note bounds. Invalid WTP restores the prior field without calling the record factory.
- [Missing-team red](vehicle-missing-team-red.log): the production student vehicle command threw while reading a null team's purchases. It now rejects that command before dereferencing.
- [Assignment red](assignment-identity-red.log): an old instructor selector changed the new team with the same ID. Rendered selectors now require their captured session/team object and a connected control before invoking the normal mission command.
- [Rendering red](scratch-render-red.log): the production Auction renderer created an empty private note record. It now uses read-only defaults; accepted input alone creates the record. The first rendering test had a harness automatic-semicolon-insertion error; [diagnostic](scratch-render-harness-diagnostic.log) is retained and does not count as product red.

Valid vehicle behavior was characterized without manufacturing failures: instructor choices must all be present; student vehicle must be confirmed; starting locks the chosen mission(s), captures the student's original plan, begins MANUAL hidden, and rejects repeated entry or later vehicle edits. Existing formulas, deck, money, WTP advisory status and manual role handoffs were retained.

## Verification and next action

Both standalone HTMLs were regenerated from source. Full product tests and byte parity pass on Windows Node 24.20.0 and Ubuntu/WSL Node 22.23.3: [Windows](scratch-vehicle-final-win.log), [WSL](scratch-vehicle-final-wsl.log). Contract checks pass with 195 material files, 10 checks and 29 cases; protocol mutation checks reject all 18 mutants. `git diff --check` passes with LF normalization notices only.

Local working-content fingerprint: `385c9fed1cb019e407f03f7653dcd788433e9d00ecc8dfe09bd9aee3e14ac8da`. [Exact manifest](candidate-manifest-scratch-vehicle.json) and [verification/hash record](scratch-vehicle-verification.json) bind the current source, generated outputs, tests, documents and failure/green logs. This is a SPECIFICATION checker identity, not an accepted release key. Prior receipts remain invalid for current bytes during ongoing product work.

Remote main is still `1b80b348ac945987fbe11db77bd7a51f3dd553aa`; [CI readback](scratch-vehicle-ci-readback.json) reports baseline success and [Pages readback](scratch-vehicle-pages-readback.jsonl) matches committed HEAD byte-for-byte. Candidate changes remain uncommitted, undeployed and without actual candidate CI/browser acceptance.

Self-review checks invalid edits leave private/scored state intact, legacy blank records remain compatible, and current connected vehicle selectors still work. No framework, runtime dependency, schema field or rule was added.

The candidate browser test remains open; no exact-candidate HTTPS route is available. Actual EN/FR DOM/input/keyboard, restore/import, CI, accessibility, rights/content, classroom and release/handover gates remain open. Continue W05 student position/purchase/reconciliation boundaries and ready M5/M6 engineering. Do not infer a PRODUCT_RELEASE key or acceptance from the local contract fingerprint.
