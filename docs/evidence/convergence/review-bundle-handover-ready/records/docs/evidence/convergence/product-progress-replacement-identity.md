# Recovery confirmation session identity — partial

2026-10-08. W37 / D30, R09/R10/R21/R24, M3/M4, T10/T11/T22/T25. Single-agent self-review; actual browser/classroom and independent assurance remain OPEN.

Outcome: a destructive reset or import approval belongs to the active session instance presented at the prompt. Replacing that instance, even with identical serialized values, invalidates the old decision. Rejected approval preserves the replacement and performs no export, storage update, timer stop, rendering or clearing.

Independent REDs execute the production callbacks: `replacement-identity-reset-red.log` shows instructor reset returning true for an equal-byte replacement; `replacement-identity-import-red.log` shows instructor import returning true and replacing it. Both test families subsequently exercise instructor and student roles. These are behavioral failures rather than harness failures.

Implementation: reset retains the original state reference and passes it with the byte snapshot to its guarded application. File import already guarded the asynchronous read by state identity; it now carries that reference into staged confirmation. Previous-backup staging does likewise. Import approval requires both the original reference and unchanged JSON before any preservation or replacement effects. References exist only in ephemeral pending intent, are not serialized into backups, and introduce no schema migration or new permissions. Existing fresh imports/resets preserve their previous backup and storage-denied behavior.

Tests cover equal-byte active replacements for both roles, exact reference propagation from file/previous-backup staging, ordinary changed-content rejection, fresh confirmations, prior-state downloads, download/storage failures, deferred read intent ordering and all earlier boundary suites. Production functions execute in VM models; generated-byte reproduction and copied packet reconstruction bind the candidate without qualifying browser execution. Final identities/check results are recorded in `replacement-identity-verification.json`.

No commit, push or publication is performed. Baseline main remains `1b80b348ac945987fbe11db77bd7a51f3dd553aa`; historical packets/receipts are superseded for this candidate. T10/T11 real candidate browser/file/offline/storage/download/recovery stays OPEN without an accessible HTTPS preview. Educational/classroom/rights/device/assistive/candidate CI/release/operations gates remain outstanding; full PRODUCT_RELEASE same-key zero-change streak is 0/3.
