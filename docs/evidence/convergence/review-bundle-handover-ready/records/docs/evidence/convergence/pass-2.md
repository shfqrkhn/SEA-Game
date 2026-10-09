# Final candidate - zero-change pass 2

Target: SPECIFICATION 1.1.0. Date: 2026-10-08. Reviewer: primary agent self-review. Key before/after: `0862ae4da8ea8717506b9952c7b7fb2950547eb51e4685850b060031d28f35ec`.

Method: failure-first full-closure review, starting from unacceptable outcomes rather than the previous pass's conclusions. Re-read the failure/recovery/gating contracts and tested the executable protocol model. `pass-2-mutations.json` records 18 syntactically valid semantic mutants, all rejected by existing explicit examples. `pass-2-checks.json` records 29 scenario outcomes, invalid-field guards and unchanged key. No game or remote mutation was performed.

| Failure / full-closure surface | Prevention, detection and recovery assessed |
|---|---|
| Build the wrong product (intent/constraints) | XY alternatives and immutable product contracts prevent framework/rewrite scope drift; independent examples and classroom acceptance detect outcome mismatch; specification amendment or no-change alternative is available. |
| Incorrect award (rules/content) | Canonical signed effects/minima and integer exact comparisons; boundary/tie/no-award tests; retained original sources and approved amendment route. Existing implementation is not treated as its own approval oracle. |
| Wrong role/phase action (journeys/state) | Phase/identity/revision/timer guards and manual authority; negative/duplicate tests; ledger corrections preserve audit and derived totals. |
| Broken offline distribution (architecture/toolchain) | No runtime imports/backends, standalone generation and build policy; both-file isolation/asset failure tests; prior accepted artifacts retained for rollback. |
| A passing source check hides an undeployed or mixed artifact (integrity) | Working-content plus release hashes, actual CI identity, served byte readback and package manifests; mismatches block or roll back. |
| Harness failure counted as TDD; stale/flaky/mock green counted as acceptance (test/evidence) | Relevant-red/characterization distinction, preserved first failure, fixed oracles, actual target evidence and candidate binding. Mutants for harness-as-red, red bypass, stale evidence, empty gates, failed gate and mock evidence are rejected. |
| Unauthorized publish or endless approval requests (authority) | Reuse scoped standing grants; absent/out-of-scope/expired authorization is blocked; legitimate granted effect proceeds. Synthetic authority-bypass mutation is rejected. |
| Duplicate publication after crash; overwrite concurrent work (interruption/effects) | Durable journal, SENT/UNKNOWN readback, exact postcondition, head reconciliation and preserved edits. Both general unknown-effect and SENT-only mutants are rejected, including the newly discovered regression. |
| Injection/privacy leak (security) | Untrusted content is inert; synthetic directive-execution mutation is rejected. Private role backups and no network state uploads are specified; actual import/CSP/network tests remain product gates. |
| Save lost during migration or quota failure (recovery) | Validate-before-replace, preserve prior raw state, compatible backup, bounded parsing and storage-denied export. Runtime/save limits must agree; incompatible downgrade never mutates in place. |
| Unusable French/mobile/assistive-tech or unlicensed art (UX/assets/rights) | Source/UI criterion mappings, full-page/real-device tests and all 77 identities/rights review; static checks never substitute. Unsupported real-platform cases block only their dependent support claim until legitimately resolved. |
| False background operation or premature deletion (operations/lifecycle) | Actual-runtime requirement, support triggers and dormant lifecycle items; no-runtime and unresolved-retention mutants are rejected. Separate readiness/rehearsal versus actual retirement protects retained data. |
| Old receipt survives changed evaluator or hidden new file (currentness/inheritance) | Material sources/evaluator/new controlled roots are keyed; spec-change and stale-evidence mutations are rejected. Child contracts require revalidation and onward preservation. |
| Three scripted runs masquerade as ASSURED product completion (claim boundary) | Review contract requires complete fresh reviews plus explicit limits. Checkers and mutation tests identify their synthetic scope; product failures remain open and no independent assurance is claimed. |

Checked omitted-field/wrong-type behavior, user stop and resource exhaustion: they cannot authorize an effect in the tested model. Reviewed the model as an illustrative decision aid only; it is not a credential system or production controller accepting arbitrary claimed evidence. Adding a real daemon or cryptographic approval service is unjustified for this specification target.

Result: PASS / zero material changes. No additional specification blocker discovered after the SENT repair. Consecutive same-key confirmation count: 2. The 18 caught mutations support only the modeled controls, not complete autonomous runtime or game correctness.
