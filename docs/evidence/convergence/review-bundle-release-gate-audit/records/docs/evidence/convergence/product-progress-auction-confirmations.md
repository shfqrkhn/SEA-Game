# Auction result confirmation scope — partial

2026-10-08. W34 / D27, R09/R21/R24, M3/M4, T10/T22/T25. Single-agent self-review; no independent or browser acceptance claimed.

Outcome: confirming a corrected sale, unsold override or void must affect only the result presented when the dialog opened. Changing the session, lot, accepted caller, draft, phase, pause or restored state must preserve the new state and report localized `errors.changed`. A void must retain its original reason. Corrected sales must retain the actual target team object, including when a replacement team has identical serialized values.

RED: `node tools/test.mjs` failed on `sale rejects changed lot` with actual true, expected false. The callback captured by the production confirmation gate retried against a later current lot. See `auction-confirmations-red.log`. This is a behavioral failure, not a harness or syntax failure.

Implementation: each production command captures the original state reference and serialized state, and passes a guarded application closure to the existing confirmation UI. Approval does not retry the command against new state. Corrected sales verify their team remains attached; void checks its editable reason separately from saved JSON. Existing immediate leader sales and leader-free unsold commits retain their paths. Rules, ledger format and save schema are unchanged.

Acceptance examples execute extracted production functions and actual captured retry callbacks. They cover unchanged approval for all three commands; changed lot, session, caller, draft, phase, pause and equal-byte state replacement; equal-byte sale-team replacement; and void reason changes outside serialized state. Rejected approval performs no save, render, timer stop or transaction mutation. Existing invalid-price, win-limit, exactly-once, sale void, unsold void and recommit tests remain green. Generated-file parity binds the tested source to the candidate scripts; this is VM evidence, not actual browser execution.

Commands/evidence: Windows Node 24.20.0 product suite (`auction-confirmations-win.log`); Ubuntu/WSL Node 22.23.3 product suite and build parity (`auction-confirmations-wsl.log`); Windows byte reproduction, packet regression and synthetic protocol checks. Final checkpoint and packet identities are recorded in `auction-confirmations-verification.json` after reconciliation.

Candidate remains uncommitted and undeployed. Baseline remote main is still `1b80b348ac945987fbe11db77bd7a51f3dd553aa`. Earlier packets/receipts remain historical and cannot qualify these changes. T10 actual candidate browser checks stay OPEN without an accessible candidate preview. Classroom/educational/rights/device/assistive/release/operations acceptance remains outstanding; PRODUCT_RELEASE full same-key zero-change streak is 0/3.
