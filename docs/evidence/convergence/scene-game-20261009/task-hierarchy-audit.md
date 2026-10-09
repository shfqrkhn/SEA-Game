# Scene task hierarchy audit

Date: 2026-10-09. Read-only review of `source/student.template.html`, `source/instructor.template.html`, `source/shared/three-presentation.js` and `source/three/interface.mjs`. No implementation or generated output was changed. Findings concern source behavior; browser task acceptance remains separately required. This is shared-context adversarial review, not independent user research.

## Actionable findings

1. **Student auction presents early finish before the auction task.** `finishAuctionBtn` is the first phase action in DOM order, ahead of round/lot, announced card, price and recording a result. `syncSceneInterface` preserves that order outside setup. Move early finish to a secondary phase-options group after current-lot actions; retain its confirmation and exact command. Its wording must clearly retain the early-finish meaning.
2. **Instructor auction expands the market before the live task.** `market` precedes the current card and all reveal/open/bid/commit controls. Since the adapter traverses generic children, published market content can consume pages before the live auction. Give current-lot context, leader/next-legal/time, currently available auction controls and bid roster a lead group. Keep the complete permitted market as browsable secondary content; do not hide revealed information or project hidden cards.
3. **Practice reset competes with progression.** Student `practiceReset` follows Record but precedes `toPlanning`; instructor Reset also precedes Continue. Make reset secondary after the main training action sequence and available continuation. Do not change practice prerequisites or auto-advance; keep training price/effects/status close to actions.
4. **Build corrections precede decision evidence.** Student purchase inventory and add-missing fields precede totals/compliance; instructor build summaries can grow before Open submissions. Lead with mission totals, shortfalls/compliance and readiness, followed by the intended reconciliation/continuation task. Keep Add/remove correction operations accessible as a named secondary group, including target, price and confirmation context.
5. **Setup sorting loses useful grouping and promotes utilities.** The current setup-only non-text sort moves all actions/fields before all explanatory rows, including stage/header utilities. It can separate mandatory mission information from selection/start and promote view/save controls before required context. Replace this broad sort with stable semantic groups; avoid sorting every button before every value.
6. **Button severity and primary intent are erased.** Projection emits only `kind:'button'`, label and disabled state. Renderer colors every enabled button alike, despite source `.primary`, `.danger`, `.good`, `.secondary` and `.ghost` distinctions. Preserve a small presentation-only action role, then style primary/secondary/destructive intent consistently. Do not determine command permission from color or metadata; native validated handlers remain authoritative.
7. **Long content can displace the next task across pages.** Each phase becomes a single flat row stream. Requirements, market listings, instructions, roster and inventories can dominate its first pages; controls may be separated from their prerequisite values. Group pagination must remain lossless and retain dependency context. A sticky next-task action is optional only where its necessary context and disabled/prerequisite state stay clear; it must not hide warnings or bypass confirmation.

## Minimal DRY change

Define presentation-only group metadata once in shared projection/ordering code, with template annotations for phase-specific blocks. Suggested groups: urgent status/confirmation, active task, task context, secondary review/correction, scene inspection, session utilities. Stable ordering should preserve original order inside each group and retain all rows. Alert and inline confirmation precedence already implemented must remain strongest. Derive values, enabled state, accessible names and command targets exclusively from currently visible semantic nodes.

Group complete semantic blocks rather than individual controls: a price stays with its field, capability effects with their identity, a correction with its reason/target, and a decision with its explanatory notice. Do not duplicate game-state rules to guess the current legal action. Existing disabled/visible controls and authored groups can express hierarchy, while guarded native commands continue to validate at execution.

## Phase-leading contract

| Phase | Lead task/context | Secondary material |
|---|---|---|
| Setup | Required configuration/session entry, mission preview/minima, generation/join and available start | Reveal alternatives, full instructions, inspection and save controls |
| Practice | Training card/effects/price/status plus currently applicable reveal/open/accept/close or Record; Continue when permitted | Practice reset and reference instructions |
| Planning | Mission confirmation/assignments, requirements/readiness, plan/risks/WTP and Start auction | Full guidance/rules and inspection |
| Auction | Current round/lot/card/effects/start; live auction status and legal actions; student announce/load/WTP/result recording | Published market, inventory/ledger, corrections, early finish |
| Build | Totals, compliance/shortfalls and readiness; deliberate reconciled/open-submissions progression | Complete inventory and Add/remove correction workflow |
| Submit | Private entry guard or own profit fields; costs/profit/bid/eligibility; deliberate submission progression | Full instruction/incentive and inspection |
| Debrief | Ranking/outcome or own plan-versus-result evidence, reflection and deliberate close | Extended discussion prompts and inspection |
| Closed | Retained final results/ledger and export/recovery access | Deliberate confirmed new session and inspection |

Every value/instruction remains available; secondary means organized, not deleted. Closed export/recovery may need promoted session utilities because preservation is the phase task. Submit's private guard must never be bypassed to make entry appear immediately available.

## Verification for the change

Add source-projection characterization that compares the multiset of visible values/actions before and after grouping, asserts current tasks precede finish/reset/utilities, retains disabled state and hidden/private exclusion, and checks dynamic rows inside annotated blocks. Preserve source-target mapping and stale-action rejection. Run EN/FR actual scene pointer and keyboard journeys across all eight phases, including long market/roster/inventory, small viewports, dialog cancel/Escape and page navigation. Verify changing groups does not lose edits or move keyboard focus unpredictably. Real task clarity and full browser coverage remain acceptance obligations, not consequences of a sorting test.
