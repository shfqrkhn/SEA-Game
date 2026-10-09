# SEA Game session backup and recovery

This guide describes the current candidate workflow. The export/import controls still need browser and classroom acceptance before this guide can be treated as an approved operating procedure.

## Protect the right file

The instructor app and student companion create separate files. An instructor backup contains the randomized market order, the complete class ledger, and team submissions. Keep it private and give access only to the facilitator who needs it. A student backup contains that team's plan, risks, willingness-to-pay notes, and local purchase record. Students should keep their own files private.

Use synthetic classroom details only. Do not save personal, Protected, Classified, operational, or real-project information in the game.

## Export during play

Use **Export backup** in the app header. The app requests a JSON download. Check that the file appears in the browser's download list and can be found before relying on it. A download request does not prove the browser saved a file.

Export before scored play, after each completed round, before changing devices or tabs, and before closing the session. Store instructor and student files separately in a private location. The filename identifies the role and date but not the team or session; add any needed label only in a private location.

Session storage is limited to the current browser tab. It may not survive closing the tab, browser storage restrictions, or moving to another device. A downloaded file is the portable recovery copy. The student app does not synchronize with the instructor app.

## Import a saved session

Open the matching role app, choose **Import backup**, and select a JSON file exported by that role. The app checks the file size, format, role, app/rules/deck identity, schema, and game-state invariants before showing a confirmation. A rejected file does not replace the active state.

The latest selection or previous-backup restore attempt supersedes any file still being read. If active play changes while the file is being read, the import reports changed state; select the file again when ready. An older read cannot replace the newer pending confirmation.

When replacing an active session, the app requests a download of the current session first. Confirm only after you have checked that this file was saved. If the prior session is still available in the same tab, **Restore previous backup** validates it again and asks for confirmation before switching back. Keep the tab open until a portable backup has been saved.

An imported instructor lot that was open is paused. Review its card, timer, ledger, and the authoritative Teams/manual record before resuming. Student records remain local estimates; reconcile all purchases against the instructor ledger.

## Recovery failures

If a JSON file is too large, malformed, for the other role, from an unsupported schema, or uses a different ruleset/deck, preserve it unchanged and open the matching current app version. Do not edit the file or try to downgrade it in place.

If the app reports invalid stored data, **Export backup** may produce a recovery-rescue file containing unvalidated saved bytes. Keep that file unchanged for repair or support; it is not a normal import file. Do not overwrite the original rescue file.

If browser storage is denied, keep the page open and export a file after meaningful changes. If a download cannot be saved, stop the game and use the instructor's manual ledger and classroom procedure; do not treat an unverified local snapshot as authoritative.

## Audit ledger capacity

The instructor save supports at most 210 audit entries, including voids. New results reserve one outcome for every remaining lot; voiding also reserves a recommit for the current lot. A capacity warning leaves the accepted result and team inventory unchanged. Export a backup and follow the facilitator recovery procedure before further correction. Do not truncate, rewrite or clear the ledger to bypass the warning. Existing valid schema-3 saves at the old bound remain readable, but cannot append beyond available capacity. This is a recovery/resource limit, not an extra bidding or spending rule. Actual browser/classroom handling of this boundary remains unaccepted.

## Start another session

After closing a session, use **Start a new session** in the Closed screen and confirm. The app requests a role-specific backup before returning to Setup. Check the browser downloads; **Restore previous backup** remains available in the same tab when browser storage permits. A new instructor session and a student's next companion session remain separate, and a student reset does not change the instructor ledger.

## Acceptance still required

This candidate flow has deterministic schema, handler and production save/restore/rescue boundary tests. The boundary tests preserve corrupt stored bytes, model denied storage and verify instructor timer/privacy recovery; they do not prove real browser storage or completed downloads. It has not yet been accepted in supported browsers, local-file mode, offline mode, assistive technology, or a real classroom. Verify export and re-import at setup, auction, build, submission, debrief, and closed phases; corrupt/oversize/wrong-role/newer-schema files; denied/quota storage; cancellation and interrupted downloads; previous-session restore; open-timer pause; device handoff; and rollback before approving this guide for classroom use.
