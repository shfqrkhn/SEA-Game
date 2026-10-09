# PRODUCT_RELEASE closure preflight and D21/W21 localization

Date: 2026-10-08. Self-review. This is a gate inventory and local repair record, not a completed full-closure assurance pass. The user requests three fresh same-key zero-change passes; material changes and unresolved gates mean the PRODUCT_RELEASE streak remains zero.

## Material finding and repair

R12/T14: [actual production lookup red](localization-feedback-red.log) shows the student emits errors.changed verbatim. Both dictionaries lacked the key, so equality of EN/FR key sets did not catch it. The candidate now supplies existing instructor-approved-in-code EN/FR error wording, without claiming human language approval. A build-time validator checks nonempty EN/FR entries, interpolation field parity, and literal translation references in templates, role scripts and shared presentation. Negative cases cover missing French, blank labels, wrong interpolation, and keys missing from both locales including placeholder/accessible-label hooks. Dynamic/computed keys and translation quality remain separate obligations; the checker does not prove full localization.

## Release gate inventory

Every row remains unaccepted for PRODUCT_RELEASE. Local passing tests are partial evidence, not gate completion.

| Requirement | Missing or incomplete acceptance |
|---|---|
| R01 | Exact-candidate independent file/offline and full-game browser runs. |
| R02 | Actual both-role eight-phase journeys; local command cases pass. |
| R03 | Actual educational approval of canonical deck/mission/rules examples. |
| R04 | Full browser money/cap/invalid-command journeys; local rules/handlers pass. |
| R05 | Real reveal/reload/locale privacy journeys in all modes. |
| R06 | Real authoritative ledger/correction/recovery journey. |
| R07 | Approved independent educational examples and full rendered results. |
| R08 | Exact-candidate removal/reconciliation browser acceptance. |
| R09 | All real keyboard/touch/cancel/stale confirmation paths. |
| R10 | Actual file/import/export/corruption/denied-storage/rollback qualification. |
| R11 | Candidate network/export/public-projection privacy qualification. |
| R12 | Dynamic translation inventory, competent French review and rendered journeys. |
| R13 | Actual task-focused responsive visual acceptance. |
| R14 | Complete 77-image decode/visual mapping/fallback and rights acceptance. |
| R15 | Full applicable WCAG review and actual assistive-technology journeys. |
| R16 | Clean candidate Git checkouts and all four actual candidate CI jobs. |
| R17 | Full untrusted-data/network/CSP delivered-file hardening. |
| R18 | Recorded support-device/performance measurements and journeys. |
| R19 | Accepted candidate review/rights packet, actual CI and deployed hashes. |
| R20 | Accepted classroom/operator guides, rehearsal and operational handover. |
| R21 | Completed sourced change/oracle/verification trace for all release work. |
| R22 | Actual recorded authorized task selection and scope limits through release. |
| R23 | Actual interruption/stale-tab/uncertain-effect recovery qualification. |
| R24 | Full material-impact gates and observed anti-tampering/flakiness scenarios. |
| R25 | Accepted/rehearsed operational and retirement handover; no invented runtime. |
| R26 | Final portable keyed product packet and three valid full-closure receipts. |

M0-M8 remain uncertified per the execution ledger. Required candidate T01-T27 executions/acceptances remain open to their full defined scope. Historical SPECIFICATION receipts cannot satisfy these requirements. Candidate is uncommitted/undeployed; browser gate remains OPEN per user instruction, without a local-access workaround. No acceptance or authority is inferred from status restatements or passed synthetic scenarios.

Next: continue independent W07/W08 work on dynamic strings, artwork provenance/security and responsive semantics; execute inaccessible candidate/browser/human gates only when actual evidence becomes available. Use best judgment and do not ask questions under the latest trusted user instruction.

Verification: full product tests/build parity PASS on [Windows Node 24.20.0](localization-final-win.log) and [Ubuntu 24.04 WSL Node 22.23.3](localization-final-wsl.log). Contract/protocol/diff checks PASS. Local SPECIFICATION-basis fingerprint: `ed106195c7fd9e0b39a449fa70e8ccbd247ded723c38f5281c8d9d46f41adb25`; [manifest](candidate-manifest-localization.json) and [verification/hashes](localization-verification.json). Fresh [CI](localization-ci-readback.json) and [Pages](localization-pages-readback.json) describe the unchanged committed 1b80 baseline. They do not qualify current candidate bytes.
