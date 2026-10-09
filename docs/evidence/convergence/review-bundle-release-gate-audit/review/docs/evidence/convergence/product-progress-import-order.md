# PRODUCT_RELEASE progress: D19/W19 asynchronous import ordering

Date: 2026-10-08. R09/R10/R23/R24, T11/T24/T25, M4. Single-agent self-review. Tests invoke production async read/restore handlers with deferred file reads and isolated parser/confirmation/storage; existing full backup validation tests run alongside them. This is not browser file-picker acceptance.

Contract: import selection creates its intent before reading. Only the latest intent may stage a candidate or report read/parse failure. Cancellation, oversize selection and previous-backup restore attempts supersede outstanding reads, including missing/invalid previous copies. Active-state identity/content changes during a read prevent staging against the replacement or edited session.

[Relevant red](import-order-red.log) shows a slow older file staged after the newer selected file. [Restore red](import-restore-order-red.log) shows a missing previous-backup attempt failed to invalidate that slow read. Both roles now increment generation on entry, discard superseded success/error, and compare captured state before parsing/staging. Existing role validation, byte limits, pre-replacement preservation and confirmations remain. No schema, rules or runtime dependencies changed.

Tests cover eight order/failure scenarios in each role. An older oversize-only harness initially lacked the newly used generation variable; supplying its production initial value resolved that harness error without weakening its oversize oracle. No harness error counts as product red.

Goal remains PRODUCT_RELEASE. Candidate browser gate remains OPEN per user instruction; candidate CI, actual file/offline/storage/assistive-device, rights/content/classroom, release and handover gates remain outstanding. Next: W07/W08 independent interface/hardening and remaining W06 qualification. Prior fingerprints/receipts are historical after these edits; no full release review pass is claimed.

Full product tests and byte reproduction PASS on [Windows Node 24.20.0](import-order-final-win.log) and [Ubuntu 24.04 WSL Node 22.23.3](import-order-final-wsl.log). Contract and protocol checks PASS. Local SPECIFICATION-basis fingerprint: `42fc23ad7cde8c1248ad570d4a6e9ad7648911697f33e0df618b9273abe0bf11`; [manifest](candidate-manifest-import-order.json) and [verification/hashes](import-order-verification.json). Candidate remains uncommitted/undeployed; fresh remote main remains the recorded 1b80 baseline. This fingerprint is not a qualified PRODUCT_RELEASE key.
