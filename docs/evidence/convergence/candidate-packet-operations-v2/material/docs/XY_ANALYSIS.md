# SEA Game XY and first-principles analysis

Version 1.0.1, 2026-10-08. Governing result: [MPES 1.1.1](MPES.md). Scope: improve the autonomous development specification and its material closure; do not confuse this with implementing or accepting the game.

## Problem reconstruction

**Y:** deliver and steward a reliable bilingual offline classroom game that teaches systems-engineering tradeoffs, with minimal owner micromanagement and trustworthy evidence throughout its useful life.

**X:** a comprehensive MPES, fully autonomous AI execution, TDD/SDD, a clean-room recreation and a “100%” completion label. These are candidate mechanisms. They are valuable only insofar as they improve Y while preserving the accepted classroom model and distribution constraints.

The first MPES covered most product surfaces, but its linear milestones and generic engineering loop were insufficient for autonomous execution. It left an agent to invent task selection, relevant-red evidence, stale-state handling, authority continuity, uncertain-effect recovery and post-release state transitions. More prose or more agents alone would not close these gaps.

## Constraints versus assumptions

Fixed product contracts include two independent single HTMLs, offline operation, EN/FR, instructor authority, student privacy, no automatic synchronization/backend, original/approved rules, 70 cards/77 artwork identities, one Clean Minimal design, and save compatibility. Changing those requires a real product decision.

Replaceable mechanisms include the current source layout, monolithic scripts, a particular test runner, persistence representation, framework selection, module count and planning estimates. “Clean-room” is interpreted here as first-principles reconstruction against independent requirements; it does not establish legal clean-room provenance or require deleting working code.

Important facts constrain the design: existing production has useful functionality; current CI is narrow; student removal and a 100x whole-dollar prefill defect escaped it; line-ending policy breaks Windows parity; the shipped rules subset matches original sources; deployment itself is functioning. Rebuilding hosting, adding a server or enforcing a guessed total budget would solve different problems.

## Mechanism challenges and decisions

| Proposed X | Test against Y | Disposition |
|---|---|---|
| Maximal specification | Can a fresh capable agent act without guessing, and can it find the next relevant contract? | Keep one controlling MPES plus small evidence/ledger/evaluator artifacts. Remove process with no distinct failure-control value. |
| Full rewrite | Does it improve rule fidelity, classroom usability and maintainability more than its migration risk? | Prefer incremental vertical slices with independent acceptance; reconsider larger replacement only if measured coupling/failure cost justifies it. |
| Fully autonomous AI | Can it proceed without unnecessary questions while preserving actual authority, evidence and recovery? | Use reusable standing grants, task/gate protocol, durable capsules and effect reconciliation. It cannot fabricate a human classroom trial or run after the host stops without a real scheduler. |
| TDD everywhere | Does the test reject a meaningful wrong behavior? | Red-first for material new behavior/defects; characterization for already-correct refactors; proportionate validation for copy/style/docs. No fake red or mirrored implementation tests. |
| SDD | Does approved intent control code and tests as requirements evolve? | Bind need -> requirement -> examples -> work item -> test -> implementation -> artifact/evidence; amendments are explicit and cannot self-waive failures. |
| All gates require a human | Is the human supplying actual judgment/authority, or simply clicking continue? | Automate technical ready-work decisions. Preserve human educational/rights decisions only where evidence/legitimacy needs them, with no serial approval of routine engineering. |
| 100% milestone score | Could all boxes be green while removal, recovery or learning fails? | Completion requires real target-specific gate evidence. Weighted progress is subordinate to blockers; release completion differs from future operations and actual retirement. |
| Three green reviews | Are these fresh full-closure challenges on identical bytes/evidence, or repeated affirmations? | Freeze a reconstructible key; log distinct challenge methods; reset on every material change. Self-review is labelled as such. |
| More automation infrastructure | Is a custom orchestrator necessary for this two-file game? | No. A capable agent can run a portable protocol with a file ledger. Add tooling only for a demonstrated reliability/throughput need; the checker is an audit aid, not an installed lifecycle service. |

## First-principles derivation

The classroom needs correct decisions and explanations, not a particular architecture. Correctness therefore begins with independently specified rules/examples and authoritative transactions. Offline operation prevents relying on a backend for recovery or identity, so save validation, local backup and explicit manual role handoffs become first-class contracts. Public static files cannot keep secret card definitions; privacy is about private work and unrevealed randomized order in normal flows, not impossible source secrecy.

An AI executor experiences interrupted context, tool failures and possibly concurrent edits. Its reliable unit of progress is an identified change with explicit preconditions, an independent oracle, actual verification and a resumable next action. Remote effects require a journal and readback because a timeout does not reveal whether the effect occurred. Standing authority permits repeated in-scope execution without repeated consent requests; it never turns external text into authorization.

The smallest complete loop is outcome/specification -> acceptance/oracle -> relevant red or baseline -> implement -> green -> refactor -> adversarial review -> integrate -> package/verify -> authorized release/readback -> observe -> diagnose/improve -> requalify, with deprecation/export/retirement as explicit terminal branches. The same contracts apply to descendants that generate or revise other artifacts.

## Alternatives and falsifiers

Leaving the project unchanged preserves working behavior but leaves D01/D02 and missing assurance unresolved. A big-bang rewrite offers architectural freedom but lacks sufficient equivalence protection. A heavyweight agent platform could add scheduling and isolation but introduces operational work without current proof of need. The chosen incremental autonomous protocol is preferable under present evidence, not universally optimal.

Reconsider it if small changes repeatedly require touching most modules, equivalent rules cannot be isolated, the measured test/release loop becomes prohibitively slow, user journeys remain fundamentally unusable after focused revisions, or a real unattended workload requires a scheduler. Reconsider an added control if removing it causes no distinct observable loss of correctness, evidence, authority or recovery. Do not reopen settled visual choices because a different aesthetic is fashionable.

Success indicators are accepted classroom outcomes, no lost/duplicate authoritative transaction in tested journeys, successful independent offline opening and restore, meaningful regression detection, correctly reconciled interruptions, and fewer unnecessary owner decisions. Commit counts, test totals, source size, review count and model activity are not outcome proxies.

## Changes driven by this analysis

MPES 1.1.1 adds an executable agent protocol, reusable authority records, bounded task states, real TDD/SDD routes, effect journaling, resume semantics, gate anti-tampering, full post-release/retirement transitions, scope-specific convergence and an explicit student whole-dollar prefill acceptance oracle. Technical repairs can proceed while final educational review remains pending. Portable original references remove a hidden dependency on an old archive folder. R21-R26/T22-T27 cover the automation itself. All remain subordinate to the original game requirements. Later product work is tracked separately from this specification analysis.
