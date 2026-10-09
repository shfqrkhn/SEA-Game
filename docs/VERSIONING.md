# Game version and change scale

`APP.version` in `source/shared/engine.js` is the single game-version authority. The build inserts it into both standalone badges; backup envelopes carry the same value. Git commits and artifact hashes identify exact bytes within that version. A version number is not release acceptance.

Increment before publishing a changed candidate:

- Patch: compatible fixes, geometry/material refinements, wording, layout and performance corrections.
- Minor: compatible new gameplay/interface/inspection capabilities or substantial new content. Reset patch to zero.
- Major: incompatible save, command or public behavior changes. Reset minor/patch; document migration and rollback before publishing.

Use the largest change in the publication batch. Evidence-only documentation changes do not increment game bytes. Never renumber historical evidence or silently change rules/deck/schema with an app-version bump. Ruleset, deck, save schema and backup envelope version remain separate identities; preserve storage keys for compatible updates so existing sessions survive.

## Candidate history

| Version | Scope | Compatibility and qualification |
| --- | --- | --- |
| 3.0.0-local | Previous embedded Three.js development candidates | Historical identity; schema3, STANDARD, synthetic-v1. |
| 3.1.0 | Consolidated scene navigation and functional engine assembly/cutaway inspection; powertrain detail and auction presentation corrections | Compatible app update; rules/deck/schema/storage keys unchanged. Candidate visual, device, classroom and release acceptance remains open. |
| 3.2.0 | Accessible per-team Build disclosure and synchronized submission status; real generic carrier glazing apertures, supported cab hardware and contoured cockpit construction | Compatible interface capability; rules/deck/schema/storage keys unchanged. Exact-candidate qualification and broader acceptance remain required. |

For each next publication, add its version, concrete change, exact source/preview identity and affected checks to the execution ledger/release notes. Bilingual badges use the same version; teaching and support evidence must bind the exact published artifacts.

## Disk-write constraint

Project development uses finite, requested builds/tests/publications; do not start persistent watchers, local servers, recurring polling jobs or file loggers. The browser game writes a session snapshot only when its serialized bytes differ from the stored snapshot. Rendering, model rotation and the countdown do not intentionally persist on every frame/tick. Changed user input and transactions remain immediately recoverable; explicit backup exports and finite build/evidence operations still write files. This policy covers the project, not Windows, browser caches or Codex application activity.

Finite build, bundle and concept-inventory generators share `tools/artifact-io.mjs` and skip writing identical outputs. Build/evidence-only changes after publication leave the game version unchanged when the application bytes are identical.
