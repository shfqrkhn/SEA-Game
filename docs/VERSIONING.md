# Game version and change scale

`APP.version` in `source/shared/engine.js` is the single game-version authority. The build inserts it into both selected-role badges; backup envelopes carry the same value. Git commits and artifact hashes identify exact bytes within that version. A version number is not release acceptance.

Increment before publishing a changed candidate:

- Patch: compatible fixes, geometry/material refinements, wording, layout and performance corrections.
- Minor: compatible new gameplay/interface/inspection capabilities or substantial new content. Reset patch to zero.
- Major: incompatible save, command or public behavior changes. Reset minor/patch; document migration and rollback before publishing.

Use the largest change in the publication batch. Evidence-only documentation changes do not increment game bytes. Never renumber historical evidence or silently change rules/deck/schema with an app-version bump. Ruleset, deck, save schema and backup envelope version remain separate identities; preserve storage keys for compatible updates so existing sessions survive.

## Current candidate identity

Published4.0.0-dev.3, local4.0.0-dev.4 and rollback3.6.0 are recorded with exact identities/outcomes in [handover](HANDOVER.md), [ledger](EXECUTION_LEDGER.md) and [release notes](RELEASE_NOTES.md). The new major denotes the staged from-scratch rebuild; prerelease status does not imply completion. Version labels do not inherit old receipts. Full commit history supplies historic release changes; do not duplicate exploratory iteration logs. Primary runtime is dist/index.html; each role badge/backup uses the same APP.version.

## Disk-write constraint

Project development uses finite, requested builds/tests/publications; do not start persistent watchers, local servers, recurring polling jobs or file loggers. The browser game writes a session snapshot only when its serialized bytes differ from the stored snapshot. Rendering, model rotation and the countdown do not intentionally persist on every frame/tick. Changed user input and transactions remain immediately recoverable; explicit backup exports and finite build/evidence operations still write files. This policy covers the project, not Windows, browser caches or Codex application activity.

Finite build and bundle generators share `tools/artifact-io.mjs` and skip writing identical outputs. Build/evidence-only changes after publication leave the game version unchanged when the application bytes are identical.
