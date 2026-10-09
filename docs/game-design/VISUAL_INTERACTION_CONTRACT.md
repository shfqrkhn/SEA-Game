# SEA Game concept and implementation contract

Version: concept-contract-v1, 2026-10-09. This is a design baseline, not a visual acceptance receipt. The user rejected the existing geometric fidelity; the inventory therefore marks existing models unqualified. Lead-generated concepts and future browser renders must be linked explicitly, never inferred from a passing mesh test. The first interface-direction overview is generated exploratory work only: invented phases/prices and a six-wheel hero differ from canonical/current source. It closes no identity or phase-screen acceptance.

## Canonical coverage

Run `node docs/game-design/build-concept-inventory.mjs` from the repository root to derive `concept-inventory.json` directly from current `source/shared/engine.js` and both templates. Initial coverage is 70 scored cards, TRAIN-CAP, six mission vehicles (77 identities), 35 functional component subjects, 48 mission/category assembly relationships, 40 role/UI state subjects, 211 template element IDs and nine material subjects: 420 inventory records. Components are functional design subjects, not a claim that every unnamed primitive is a separate product. Future newly introduced UI elements and mechanisms extend this inventory before acceptance.

All English/French card names, effects and starting prices come from canonical source. The training card is separate from the scored deck. The 21 SE cards depict engineering decisions; an illustrated display or document is an explanatory metaphor and must never become bolted-on hardware. Abstract game effects are not manufacturer specifications. Manufacturer references establish construction plausibility, not a certified mapping to synthetic cards.

## Shared visual language

Use neutral warm limestone (#e9e7df) as quiet environment, deep ink (#202a29) for text, muted sage (#77836b) for vehicle paint, dark olive (#465144) for frames, brushed steel (#8b9290), charcoal rubber (#242726), modest brass (#b69a58) for selection and warnings, and blue-grey optical glazing. Colours are role-independent. Status is communicated with explicit text and symbols, not colour alone. Keep metallic paint subtle; dielectric painted metal does not look like raw chrome.

Metres, +X forward, +Y up, +Z left/right width. Define real dimensions or visibly recorded proportional assumptions before modelling. Share actual meshes/material factories by family while varying meaningful silhouette, packaging and function. Correct bulk proportions, panel curves, wheelbase and tyre profile before adding hinges or bolts. Use physically coherent connection paths, believable wall thickness and clearance, and restrained edge radii. Labels identify what exists; they do not conceal ambiguity or hallucinated construction.

The default lens is a moderate perspective engineering view, not wide-angle distortion. Stage lighting is fixed in world coordinates, neutral and broad enough to read silhouettes and interiors. Contact and cast shadows come from current geometry and change with rotation. Do not bake a fixed shadow into artwork or geometry. Neutral ambient lighting must not flatten all roughness differences; glass cannot masquerade as solid paint. An environment may be procedural/embedded. Shadows can be turned off when rendering is defective.

## Scene interface

The whole game is one scene-driven interface. The active task and its current vehicle/component form the centre, with minimal attached or screen-space panels. Auction has a public current-round strip, current lot detail and obvious legal action. Build has a genuine installed-assembly view and an immediately understandable requirement summary. Instructor transaction controls and private entry remain explicit and guarded; student planning remains private. Avoid decorative gauges for information that is more clearly expressed as a number or list.

Three.js draws visual interface/world; state-owned commands implement behavior. Each visual action maps to an existing validated semantic command and reflects its disabled/current/confirmation state. Semantic HTML and native inputs are synchronized components of this interface, not a separate fallback game. Text remains selectable/readable where useful; typing, IME, file picker and assistive technology use suitable native elements. Focus indication must be visible in the scene and semantic layer. Data and labels update from one view model; no duplicate canonical prices, effects, strings, money logic or hidden market order in rendering.

Aim for 16 CSS px body text at normal desktop scale, 44 CSS px touch targets, sufficient contrast, responsive reflow and stable navigation. Treat these as design minima subject to accessibility verification, not evidence of compliance. French expansion, narrow portrait, zoom, keyboard-only, screen reader, reduced motion and errors are designed states. UI textures may use raster drawing; small essential text cannot be baked into unreadable concept imagery. Camera movement must not block bid timing, typing or comprehension. No information is available only by hover or colour.

## Independent acceptance criteria

| ID | Required evidence and rejection conditions |
| --- | --- |
| V01 | Source reference + matching side/front/rear/three-quarter render. Check main body ratios, axle positions, wheel radius and cab/crew envelope against a dimensioned reference or documented target. Set tolerances before judging; proposed default ±5% for reference-supported principal ratios. Unknown dimensions stay unknown. Reject generic boxes where shaped surfaces define the counterpart. |
| V02 | Close-ups at intended inspection scale show credible wall thickness, bevels/curves, seams, tyre profile/tread and optical housings. No polygon faceting at the accepted close-up scale. Details belong to the named construction rather than a repeated decorative pattern. |
| V03 | Assembled/cutaway/exploded comparison proves coherent mounts, hinges, drivetrain, seat supports, cable/hose endpoints and service clearance. Reject floating hardware, false hose connections and material intersections. Explode along assembly relationships, preserve selection, and restore exact original transforms. |
| V04 | Each variant is identifiable in a silhouette/contact sheet without relying on ID, hue or tiny text. Crew seats/capacities and category-specific function remain canonical. Process cards have distinct decision diagrams without pretending to be machinery. |
| V05 | Fixed-camera rotation captures prove shadows change with model pose; shadow-off leaves no fake cast silhouette. Material reference sphere/applied comparisons distinguish paint, steel, rubber and glass under consistent lighting. Reject clipped highlights, opaque glazing or metal-like rubber. |
| V06 | Matched concept/render comparison at same pose and framing records differences in silhouette, packaging, material and UI hierarchy. Independent reviewer lists visible mismatches; concept approval alone never accepts implementation. Generated impossible features are corrected against references. |
| V07 | Measured standalone render/frame/resource receipts at defined supported devices and inspection scenes. Geometry count alone is not a performance receipt. No console errors, leaked resources, out-of-frame assemblies or unreachable controls. |
| V08 | Full-resolution concept/render contact sheets show all subjects with at least 8% safe edge margin, intact tyres/barrels/antennae/labels and no unintended border or baked background artifacts. Retain useful original files/provenance while embedding only necessary runtime material. |
| U01 | Role/phase command coverage through actual end-to-end journeys, including hidden/private, disabled, stale and transaction-confirmation states. Scene clicks and keyboard commands obey the same validators. |
| U02 | Browser screenshots at matched concept layout establish readable hierarchy and one clear task/action. Narrow/French/zoom layouts remain readable without model or panel clipping. |
| U03 | Keyboard/touch/screen-reader checks prove logical focus, accessible names/roles/status, target reachability, editing and reduced motion; synchronized native semantics must not expose private information. |
| U04 | Backup/recovery/error/context-loss states are usable and preserve authoritative state. No silent loss, inaccessible modal or decorative-only error. |
| U05 | Exact values and canonical localized strings match shared rules/view model; compare every card label/effect/price against inventory. |
| U06 | Actual hosted/embedded candidate checks prove offline/no-sibling operation and correct privacy. Mark unavailable environments open; do not treat screenshot mockups as executed UI. |

## Generation and qualification batches

Current generated proposals: `DIRECTION-SCENE-UI` has one overview with documented canonical mismatches; `RECOVERY` has one four-axle vehicle/assemblies concept. Both are `generated-exploratory`, neither accepted. The latter supplies useful close-up direction but does not automatically complete winch, engine, brake, crane or other component/assembly inventory records. Dimensional/reference qualification and matched Three.js fidelity remain open.

`mobility-family-v1.png` additionally maps seven numbered panels to MOB-A–G, each assembled/exploded, as exploratory generation only. Its original MOB-C panel is a known canonical mismatch: it depicts a requested V-engine while the card is Lightweight Running Gear. `mob-c-running-gear-v2.png` supersedes that panel as the preferred MOB-C direction, showing wheels, differential, half-shafts, cradle, steering and springs in assembled/exploded views. Retain the mismatched receipt as history; never change canonical rules/name to accommodate artwork. The correction resolves category direction only; generated joints/clearances, dimensional plausibility, safe margins and matching Three.js fidelity remain open. Neither image completes generic component coverage.

`capacity-family-v1.png` maps eight panels to CAP-A–G and TRAIN-CAP. All IDs are visible; hull enclosure, removable insert and open-frame variants offer useful direction. Counts 6/6/4/8/5/5/4/4 were requested, not proven: especially A/C/D/F/TRAIN have occluded or ambiguous seats. Additional views or corrected panels must establish exact counts before V04 acceptance. All eight are generated exploratory work only; physical mounts, service clearances, other views and matching Three.js fidelity remain open.

Each batch keeps its ID caption and inventory map. Concept sheets may be generated as grouped families to minimize inconsistent independent redesign. Each identity still needs an unambiguous panel/crop and a later implementation comparison. If image generation misses a subject or invents text, regenerate/correct the affected panel and leave its mapping open. Never mark an entire family generated merely because one image exists.

`protection-family-v1.png` maps seven panels to PRO-A–G with section/mount insets. Formed edges, rails, shell ribs and the two visible crew seats in D provide useful direction. Contextual vehicle crops touch panel borders in A/C/E/F, so V08 safe margins are not accepted. Composite construction, mounting clearances and B/C silhouette distinction need further review. These are exploratory original concepts, not accepted runtime geometry or protection-performance claims; exact generation prompt is retained in `PROTECTION_PROMPT.md`.

`firepower-family-v1.png` maps seven panels to FP-A–G with external mount/control/housing insets. Distinct remote, open-cradle and supported-gimbal envelopes guide the D/E/F variants. Its dark serif ornamental frames and brown ground differ from the shared UI contract; A/B/C silhouette distinction and exact safe margins are unqualified. Treat only construction direction as exploratory. Retain `FIREPOWER_PROMPT.md`; no internal/operational specifications or performance are accepted from the image.

1. Vertical slice: RECOVERY vehicle assembled/exploded/cutaway; MOB-A engine and ACC-F winch close-ups; student build and instructor auction UI. Lead owns initial hero generation to avoid tool contention.
2. VEHICLES: COMBAT, RECCE, TROOP, COMMAND, RECOVERY, MINE, each with matched silhouette and functional role equipment.
3. CAPACITY: CAP-A–G and TRAIN-CAP. Preserve exact seat counts; do not assume baseline vehicle interior seats are counted as acquired ratings.
4. MOBILITY: MOB-A–G. Distinguish power packs, running gear, heavy suspension, long-range propulsion and adaptive traction by construction.
5. FIREPOWER / PROTECTION: separate FP-A–G and PRO-A–G sheets with mounts and cross-sections.
6. COMMS / SA: separate COM-A–G and SA-A–G sheets, connectors, lenses, masts and cab routing.
7. ACCESSORIES: ACC-A–G with winch, trailer, support/rack and clearance attachments.
8. SE_PROCESS: SE-A–G, H–N, O–U; 21 distinct decision diagrams/cards under one typography/grid language.
9. COMPONENTS/MATERIALS: 35 function close-ups plus nine calibrated material subjects; cross-link reused details to identities.
10. ASSEMBLIES: six mission sheets each covering eight category relationships, including a process decision inset. Respect installation envelopes; unresolved interfaces remain explicitly illustrative.
11. UI: four phase pairs per role (16 primary screens), then 24 cross-phase/error/accessibility states. Map all 211 original element IDs to scene UI/native semantics, retire obsolete elements only after functional coverage.

The lead records generation statuses in `concept-receipts.json` with explicit inventory IDs, tool/native output path, artifact SHA and limitations. The inventory generator verifies hashes and projects only these statuses, so regeneration cannot erase manually tracked generation or promote unrelated subjects. The existing 420 scope records plus one exploratory direction are 421 records. Implementation/acceptance evidence must likewise remain in durable separate receipts before being projected into future inventory versions. Raw generator output is a design proposal; no acceptance status is promoted automatically.
