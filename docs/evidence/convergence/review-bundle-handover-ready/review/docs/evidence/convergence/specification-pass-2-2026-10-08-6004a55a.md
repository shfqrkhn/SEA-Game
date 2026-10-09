# Fresh zero-change review 2: failure-first

Date: 2026-10-08. Target: SPECIFICATION, MPES 1.1.1. Reviewer: primary agent, sequential self-review; this is not independent or cross-model assurance.

Candidate key before and after: `6004a55a7debbc343a420468d975a29badb176ec23f04602d03185b47229eaf2`.

## Scope and method

Started from the failure-first review contract and traced backward from a wrong award, hidden/future disclosure, duplicated or lost transaction, rejected valid save, corrupt save, stale confirmation, unauthorized publication, forged green record, interrupted external write, privacy exposure and premature disposal. Re-read the corresponding complete MPES contracts, requirements/tests, current W05/W06/W13 dispositions, role reset/import handlers and their direct-handler regressions. Executed/inspected the 29 negative protocol scenarios and 18 semantic mutants, full product test output, generated-file parity and exact Windows/WSL snapshot results. No synthetic or log-only result was treated as a browser result.

## Adversarial challenges and dispositions

- **Wrong result or future disclosure:** Independent score/ranking examples, integer ratio comparisons, eligibility/no-award/ties, ledger replay and role projection bind to T05-T09/T12. ROUND/JIT/MANUAL rules preserve what may be revealed. The MPES requires testing both before and after advance/void/reload and rendered language changes; current deterministic reveal tests do not close the real-browser gate.
- **Corrupt/lost/replaced state:** The import path binds role/schema/size, validates before mutation, reconstructs derived values, preserves active state before confirmed replacement, and has a raw recovery-rescue path. Storage denial, stale import and rejected payloads retain explicit behavior. T11 still requires browser file/download, tab/device and migration/rollback evidence.
- **D13 reset failure:** The tested destructive sequence is confirm -> compare the entire captured state -> create role-labelled backup -> save previous-session restore slot where storage permits -> request download -> clear active slot -> return to setup. Cancel causes no backup/reset; changed state rejects; download failure leaves Closed and active data intact; denied previous-slot storage reports degraded recovery while allowing in-memory continuation after the backup download. The actual DOM click, browser download, storage policy and real next classroom session remain unverified and are correctly open.
- **Unauthorized or duplicate remote effect:** The PREPARED/SENT/UNKNOWN/CONFIRMED journal, trusted authorization provenance, target/head preconditions and mandatory readback prevent stale or uncertain publication retries. Current Pages bytes remain the committed baseline and no candidate effect occurred.
- **Forged evidence or stale identity:** The key binds actual working bytes, untracked controlled files, baseline dependencies and environment. T22/T25/T27, negative scenarios, semantic mutants, preserved first failures and artifact-to-evidence identity challenge fake green, evaluator edits, removed failures, stale logs and browser-claim inflation. The checks pass within their explicitly narrow synthetic/structural scope.
- **Rights, privacy, accessibility and human approval:** Imported text and identifiers are constrained; no networking/telemetry or anti-cheat guarantee is invented. Full keyboard/screen-reader/zoom, EN/FR human review, artwork inspection/licensing, educational approval and classroom use are still named M5-M7/M8 gates with actual reviewer roles. None is silently replaced by source inspection.
- **Premature retirement:** Export/readability, retention authority, exact targets, archive, disable/delete authorization and post-effect readback are required by T26 and the retirement boundary. A successful release and an actual retirement remain distinct states.

The challenges exposed no missing specification control that warranted a material change. Open product tests are adequately assigned with a reproducible next action, including the unavailable exact-candidate HTTPS route; they do not count as passes and do not stall independent engineering. No contract was weakened to obtain this result.

## Result

PASS, zero changes. This is the second consecutive fresh full-closure review for the exact current key, after forward-requirements pass 1. Next: discard chat context and independently rebuild identity, file inventory, retained-source links, next action and full lifecycle from the saved package using Python's standard library and a fresh remote readback.
