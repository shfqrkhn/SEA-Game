# Scene-game qualification baseline — 2026-10-09

This is a fresh read-only audit of source HEAD `66007819f6be78e5a7c3fc65e08d04aba3ec89d3`, plus the new balance characterization. It does not qualify the forthcoming scene interface, certify classroom acceptance, or count as a full-closure pass. Earlier screenshots and geometry receipts are historical for this new scope.

## External state actually inspected

`gh pr view 1 --json state,isDraft,headRefOid,statusCheckRollup` returned OPEN/DRAFT at the above source SHA. [Source parity run 37918703334](https://github.com/shfqrkhn/SEA-Game/actions/runs/37918703334) completed successfully in all four Ubuntu/Windows Node 22/24 jobs. `gh run list --limit 5 --json databaseId,headSha,conclusion,status,workflowName` also showed Pages run 37918116029 successful at preview/main `8cf4f3f9b9107701fb3c64782a0ec5c3e2100ac5`. These identities differ intentionally: no assertion that the source PR is merged, or that an old Pages/CI result qualifies new changes.

## Independent balance characterization

Run `node tools/test-balance.mjs` from repository root. On 2026-10-09 it exited 0. It compares production canonical data with the existing preserved rules baseline, uses explicit threshold/rounding fixtures and independent totals/cost/scoring arithmetic, then replays candidate purchases through actual acquisition guards. It generates JSON to stdout, including source SHA256 and complete witness purchases/round counts.

The bounded search found compliant positive-score witnesses for every mission on each of three seeded markets, respecting the two-purchases-per-round/14-total limits and unique identities. These are optimistic full-information solo purchases at start prices, **not** proven minimum costs, competitive winning strategies, enforced budgets, or evidence of mission fairness.

| Seed | Combat cost/score | RECCE | Troop | Command | Recovery | Mine |
|---|---|---|---|---|---|---|
| BALANCE-A | $4.20m / 20 | $3.45m / 20 | $2.90m / 60 | $2.90m / 60 | $3.80m / 60 | $4.65m / 40 |
| BALANCE-B | $4.05m / 20 | $3.25m / 20 | $2.95m / 60 | $3.10m / 20 | $3.90m / 60 | $4.60m / 40 |
| BALANCE-C | $4.05m / 60 | $3.15m / 20 | $2.80m / 40 | $3.05m / 20 | $3.95m / 20 | $4.40m / 80 |

Static within-category price/effect dominance was found for MOB-G by MOB-A; FP-A by FP-E; FP-G by FP-B; PRO-E by PRO-C; COM-F by COM-A; SA-D by SA-G; SA-E by SA-A; SA-F by SA-B; ACC-A by ACC-F. Starting-price savings range from $50,000 to $100,000. Auction order, scarce rounds and competing teams can make the nominally dominated option rational; this does not justify removing cards. SE process identities also repeat effects at equal prices; their instructional meanings are outside this arithmetic analysis. Above-threshold scoring strongly differentiates missions, so raw witness score/cost comparisons cannot establish fairness. Compliance at exactly the requirement has zero score and is ineligible for award; the new test exercises this distinction for all six missions.

No production rule, card price, cap, scoring or budget was changed. WTP remains advisory. Future balance proposals need competitive multi-team/partial-information simulations and education-owner acceptance before becoming approved rules. Source-generated examples alone cannot establish the synthetic deck's educational approval.

## Required integration safeguards

The current `sea3DView` is a copied public projection, tested for instructor unrevealed cards, instructor-private drafts and other teams' work. Preserve that boundary when building the whole scene. Canonical card definitions are public; secret seeded order, private notes/profit and unrevealed instructor state are not.

Do not rasterize the entire DOM or serialize the full instructor state into Three.js textures/userData, labels, debug logs, URLs, screenshots or exports. Hidden HTML alone is not a privacy boundary. Build scene labels from explicit role/phase/reveal projection and approved UI-command metadata. Private-entry instructor controls must remain guarded and reset after restore/phase change. Switching team, language, phase or restoring must invalidate obsolete hit targets and refresh the visible projection.

Pointer/keyboard/touch scene commands must call existing validated role commands. Mirrored controls must not bypass phase guards, acquisition limits, exact money parsing, stale confirmation snapshots or private-entry confirmation. The destructive-action confirmation panel requires target binding, state-change rejection, cancel/Escape and focus return. A visual disabled button needs command-level rejection as well; hidden/disabled source controls cannot be treated as permission to invoke them. Native input overlays must preserve unsaved edits through scene redraw/language change.

## Exact automated integration sequence

From repository root:

```powershell
npm ci --prefix samples/threejs-recovery
node samples/threejs-recovery/build-game.mjs
node tools/build.mjs
node tools/build.mjs --check
node tools/test.mjs
node tools/test-journey.mjs
node tools/test-balance.mjs
node tools/test-artwork-host.mjs
node tools/test-three-presentation.mjs
node tools/test-text-encoding.mjs
node samples/threejs-recovery/verify-game.mjs
node samples/threejs-recovery/verify-inspection.mjs
node tools/test-package.mjs
node tools/test-mpes.mjs
node tools/check-mpes.mjs
```

The build steps must follow integrated source changes; current tests need adaptation to the new interface without weakening behavioral/privacy oracles. The new balance test is not yet in the workflow. Add it during integration. Record actual candidate CI from `gh pr checks 1` / `gh run view RUN_ID --json headSha,status,conclusion,jobs`; do not reuse baseline green jobs.

Packaging after candidate qualification: `node tools/package.mjs --output NEW_UNIQUE_DIRECTORY`, retain the external printed key, then `node tools/package.mjs --verify NEW_UNIQUE_DIRECTORY EXPECTED_KEY`. Its UNQUALIFIED_CANDIDATE package fingerprint does not certify PRODUCT_RELEASE closure.

## Fresh real-browser obligations

Use Codex built-in browser for exact hosted bytes. Exercise both roles and EN/FR through all eight phases/70 lots, including sales/unsold, two-win limits, corrections, reconciliation, exact awards and recovery. Inspect DOM/accessibility tree, textures/scene projections, logs, URLs and requests for privacy leaks at every phase. Exercise each T10 confirmation by actual controls: reset, correction, unsold-with-leader, void, private submissions, pending close, removal and early finish; test cancel/confirm/Escape/double click and changed target/state.

Complete keyboard/screen-reader focus and status checks, native input/virtual keyboard behavior, touch/320px reflow, 200%/400% zoom, high contrast/reduced motion, graphical hit-target/focus equivalence, all identity visual reviews and measured maximum-session performance. Test WebGL loss/restoration without altering authoritative state. Hosted browser checks cannot replace standalone network-disabled file/ZIP checks, actual mobile file-opening routes, or real Safari/device coverage. Browser tooling restrictions leave dependent checks OPEN, never waived.

## Material release gaps

The current files implement a viewport integrated with HTML forms, not yet the requested whole-game scene interface. The latest user explicitly rejects model detail; previous visual acceptance is superseded. All concepts, implementation mappings and reference-based quality comparisons remain required. Historical test logs cannot close those gates.

MPES T01–T27 require fresh candidate results, including supported device/accessibility/performance coverage, human EN/FR review, rights/content/classroom acceptance, actual recovery/rollback/publication and operational handover. No evidence inspected proves all these gates. The full closure streak therefore remains 0/3.

`docs/RELEASE_OPERATIONS.md` still says HEAD is baseline `1b80b348...` with uncommitted changes and mentions optional same-folder assets. These are stale facts now that source is committed and each HTML embeds resources; reconcile during root documentation integration. Its separation of packet integrity from actual release/classroom acceptance is correct and must remain.

Final assurance must bind source/generated/dependency/specification/test/environment/acceptance/deployment identities. Independent agents may review engineering evidence, but cannot impersonate actual teachers, learners, rights holders or operators. Retirement readiness/rehearsal is required at initial release; actual shutdown is not.

## Adversarial integration review — precommit scene interface

Read-only review of the new `seaSceneProjection`, native editor, scene synchronization, `interface.mjs` and `game-scene.mjs` found the following. These findings describe the inspected intermediate code, not final fixes or browser acceptance. Lead was notified before source commit.

1. **P1 missing game information:** projection whitelist emits controls/headings/paragraphs/small/table rows/metrics/notices but discards direct text in `span`, `strong`, `div` and `li`. Actual role templates put starting price in `strong#startPrice`, category/ID in spans, effect labels/values in `.effect` with only units in `small`, and purchased item identity/price in `.purchase-row` spans/strong. Instructor debrief ranking totals and ordered educational prompts are likewise omitted. Preserve visible grouped/leaf text without duplicating controls or leaking hidden descendants; test exact production-shaped examples, then visually verify auction/build/debrief.

2. **P1 multi-digit profit entry broken:** editor `apply()` dispatches both input and change for every input event. Instructor `renderSubmit()` installs an onchange that saves and replaces `#submissionRows`, disconnecting the original target after the first character. Next character closes the stale editor instead of completing the amount. Separate live input from final change/Done or rebind only under verified stable identity; preserve existing team/session/phase guards. Test multi-digit/decimal/invalid profit, cancel and target replacement with actual controls.

3. **P1/P2 suspected idle render feedback:** body class mutations trigger the observer's queue while every sync unconditionally calls body.classList.add for existing scene classes. DOMTokenList writes can emit mutations even for an unchanged string, creating continuous interface texture disposal/recreation and camera fit. Guard writes and/or suppress own observed mutations; measure actual idle frames and memory. This remains a source-derived risk until browser evidence confirms behavior.

4. **Editor target visibility:** apply guard checks connected/disabled/map presence but should also revalidate semantic visibility before applying. Phase changes close editor; same-phase private guard/state/target changes must not apply an old clone. Regenerated assembly-map buttons legitimately get new keys; old scene keys must fail closed and not dispatch by a replacement button's array position.

5. **Accessibility and hit-event qualification remain open:** scene graphics have no native focus/accessible names by themselves. The clipped semantic controls and keyboard focus reveal preserve a route, but actual focus order, modal naming/return, input loss and small viewport interaction require real browser/screen-reader checks. Check pointer cancellation/multiple pointers, drag crossing the model/panel boundary, pagination after changing rows and confirmation with stale page/targets. Source tests alone do not establish usable GUI or educational information completeness.

The copied public model projection still avoids the whole instructor state; no direct hidden-market/private-draft duplication was identified in this code review. That scoped observation does not close T12, which requires actual DOM/scene/export/log/network examination through all relevant phases.
