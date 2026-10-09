# PRODUCT_RELEASE progress: D17/W17 removal scope

Date: 2026-10-08. R08-R10/R21/R24, T10/T11/T22/T25, M3/M4. Self-review; production commands/rendered callbacks run with isolated presentation and storage, not real browser acceptance.

Acceptance: a removal confirmation must retain its original session, team and exact purchase. A replacement team or imported purchase with a reused instance ID must never receive the old intent. Detached rendered controls must not initiate removal. A different row's removal may shift indexes without invalidating the intended item.

[Relevant red](removal-scope-red.log) reproduces removal from a replacement team. [Rendered-control red](removal-control-red.log) reproduces a stale rendered control initiating a confirmation against replacement work. Production now captures session/team/purchase for rendered controls and confirmation retries, revalidates before mutation, and ignores detached controls. No schema, rules or runtime dependencies changed.

Tests cover cancel, confirmed row shifts and totals/counts/cost, missing/ambiguous targets, replaced session/team/purchase, missing team, wrong phase and detached controls. Full suites and generated-output parity pass on [Windows Node 24.20.0](removal-scope-final-win.log) and [Ubuntu 24.04 WSL Node 22.23.3](removal-scope-final-wsl.log).

An intermediate green log includes a harness failure: an existing cumulative notice assertion was evaluated after new cases added notices. Moving that original assertion before the new cases preserved its oracle. That harness failure is not product red.

Candidate remains uncommitted/undeployed. Fresh remote main remains 1b80b348ac945987fbe11db77bd7a51f3dd553aa. Candidate browser gate stays OPEN per user instruction; actual candidate CI, device/accessibility, rights/content/classroom acceptance, release and handover remain open. Previous candidate keys are historical and cannot certify these changed bytes. Continue remaining W05 commands and independent M5/M6 work.

Local SPECIFICATION-basis fingerprint: `71e008a49c0f1ba0d2e3b08bf15c73efef089bc9aae2f9d5576c134ebd48d449`. [Manifest](candidate-manifest-removal-scope.json) and [verification/hashes](removal-scope-verification.json) identify this candidate; neither is a qualified PRODUCT_RELEASE receipt.
