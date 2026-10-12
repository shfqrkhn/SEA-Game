# Documents that keep a project alive

Write so that another person or agent can resume development, operations and maintenance from the files alone.

| Document | Purpose | Rule |
|---|---|---|
| `AGENTS.md` | Working rules, short and numbered. | Read first by every agent. |
| `docs/HANDOVER.md` | State: done, not done, in progress, next action for agent and owner. | Updated at milestones, failures and before stopping. |
| Specification (e.g. `docs/MPES.md`) | Everything needed for a clean-room rebuild: behaviour, rules, budgets, files, goals with exit criteria, changelog. | No code at all, prose and tables only; a test checks it names every tracked file and script. |
| Code file (e.g. `docs/CODEBASE.md`) | Every tracked file, text verbatim, binaries by hash; generated, never hand-edited. | A test rebuilds the tree from it and fails when stale. |
| `docs/verification/<version>.md` | Evidence for each version: every check with command and result, review findings and dispositions. | Text only, never links to CI runs that will disappear. |
| `docs/owner/*.md` | One-page scripts for anything only a person can do. | Plain words, a few steps, the reply expected. |
| `README.md`, `THIRD_PARTY_NOTICES.md`, `LICENSE` | Entry point, third-party licences, copyright. | Kept current in the same change. |

## Habits

- Same change, same PR: code, specification, handover, verification, guides.
- Withdraw a status claim as soon as evidence contradicts it.
- Test that the specification is code-free and complete; a model given only the specification should be able to plan the rebuild (try it and fix the gaps).
- Plain English: short sentences, active voice, no jargon a newcomer would need to look up.
