# PRODUCT_RELEASE progress: D18/W18 student auction commands

Date: 2026-10-08. R02/R04/R08-R10/R21/R24; T03/T06/T10/T11/T22/T25; M3/M4. Single-agent self-review. Tests invoke actual production commands with isolated presentation/storage; they do not pass candidate browser/classroom acceptance.

Acceptance: early finish is deliberate and cancelable. Acceptance applies only to the original captured student state/team and unchanged session, position, loaded card and purchase contents. Changed phase or a byte-identical replacement state also rejects. A normal acceptance reaches Build once and clears the current card.

[Product red](student-finish-red.log) proves a delayed confirmation moved a replacement session to Build. The button now calls a named command that captures state identity and contents and checks them before applying the transition. A stale confirmation reports the existing localized changed-state error. No rule/schema/dependency change.

Characterization separately checks all 70 canonical cards through real load/win and Build add-missing commands, exact prices and instance identities, repeated/duplicate rejection, all 70 position advances and final Build, invalid position/money, wrong slot/phase, two accepted wins and rejected third win. Existing correct commands required no manufactured red. A first expanded harness run omitted currentExpectedSlot; that harness ReferenceError was corrected by including production dependencies and is not product red.

Full tests and byte reproduction pass on [Windows Node 24.20.0](student-finish-final-win.log) and [Ubuntu 24.04 WSL Node 22.23.3](student-finish-final-wsl.log). Both outputs regenerated. Actual candidate browser testing remains OPEN per user instruction; candidate CI remains NOT_RUN. Rights/content/classroom/device/accessibility acceptance, release and handover remain open. Historical fingerprints/receipts cannot qualify these changed bytes.

Next: W06 stale-tab/storage recovery and W07/W08 independent work; retain actual EN/FR input/confirmation/import/offline journeys for an exact-candidate browser route. Goal remains PRODUCT_RELEASE; full release review streak remains zero.

Local SPECIFICATION-basis fingerprint: `4563b9feafba14a141a588522e904bdfabad99f2aa29a3f33f4abdbb18e14423`; [manifest](candidate-manifest-student-finish.json), [verification/hash record](student-finish-verification.json), [CI](student-finish-ci-readback.json), [Pages readback](student-finish-pages-readback.json). Remote checks still describe the committed baseline, not the uncommitted candidate.
