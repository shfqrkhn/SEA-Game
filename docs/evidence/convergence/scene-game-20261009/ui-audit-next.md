# Scene UI adversarial source audit, 2026-10-09

Scope: source/DOM-bridge characterization at source HEAD `db620de667acc2e5b627aa9e2ca3d5df39c8d5a8`, before the lead's subsequent fixes. This is a bounded source review and executable layout evidence, not browser/device/classroom acceptance, independent assurance, or a closure pass. No implementation or browser changes were made by this reviewer.

## Findings

1. **P1 — Confirmation pagination is reset on every sync.** `syncSceneInterface` uses `if(dialog)scenePage=0`, including sync caused by Next/Previous. The actual `paginateRows` function, bundled in memory with the project's esbuild/Three.js dependencies, places a representative existing backup confirmation and its actions on separate pages: at 640×360 the page keys are `[message]`, `[confirm]`, `[cancel]`; at 320×400 they are `[message]`, `[message]`, `[confirm]`, `[cancel]`. `sceneAction('__next',1)` queues sync, which resets that page to zero. Pointer users cannot reach the later scene actions. Reset only when a new dialog opens/changes identity. Test a real confirmation at these dimensions, navigate to Confirm/Cancel, and verify each acts once; test a new confirmation resets to its beginning.

2. **Unconfirmed browser symptom; source editor sequencing risk.** The lead observed unexpected underlying Vehicle/Assembly map changes after editor interaction. The user subsequently confirmed they were also changing views in this tab during those checks; these transitions cannot establish a click-through defect. This reviewer did not operate that browser. Source still has a sequencing risk: native change calls apply, stale-target rejection synchronously removes the editor, and Done lacks pointerdown/blur protection. The lead added a pointerdown focus safeguard, but actual exclusive pointer replay remains required. Existing direct-listener tests cannot establish browser pointer/blur ordering.

3. **P2 — Intended focus restoration targets a non-focusable canvas.** `close` calls `host.querySelector('canvas')?.focus()`, but `game-scene.mjs` appends the renderer canvas without a tabindex; the host is a `role="img"` div without tabindex. Removing the focused editor therefore has no declared focusable return target. Add an intentional focus anchor/return target, preserve semantic keyboard navigation and test activeElement after Done, Escape and stale-target dismissal in the actual browser. The editor's role=dialog also lacks an accessible dialog name; its internal label labels the input, not the dialog. Bind a stable dialog heading/name.

4. **P2 — Short narrow viewports overlap footer and row content.** `interfaceLayout(640,300)` produces panel `{x:0,y:126,w:640,h:174}`. `paginateRows` allows a minimum 50px two-line item; starting at panel y+88 gives first-row end264, while footer hit region starts254. Its last10px is intercepted as pagination. This is relevant to landscape/virtual-keyboard resizing, not only an exotic 1px viewport. Guarantee a nonoverlapping minimum control region, adapt the model/header reservation or provide scrolling. Test 640×300 and viewport resize while native editing; preserve all row text and actions.

## Executed evidence

- `node tools/test-scene-projection.mjs`: PASS (hidden DOM text, identities, disabled controls, summaries, table actions and immutability).
- `node tools/test-scene-editor.mjs`: PASS (multi-digit input, final change, stale/disconnected/hidden/disabled targets and Escape in a small event model).
- `node samples/threejs-recovery/verify-interface.mjs`: PASS (existing 320×640, 850×700, 1440×900 geometry/hit checks and one long informational row).
- Read-only in-memory esbuild import of the actual `interface.mjs`: produced the exact pagination and overlap figures above. No source or generated bundle was changed by this experiment.

These passing tests do not cover native blur/pointer ordering, full confirmation pagination, focus restoration, virtual keyboards, screen-reader behavior, complete role/phase browser journeys, or final visual conformity. Keep those gates OPEN until candidate-specific proof exists. The lead owns implementation repairs and browser follow-up; rerun this audit against the resulting source identity before treating any finding as resolved.

## Subsequent bounded visual refinement

At the lead's explicit delegation, this reviewer subsequently changed only `source/three/interface.mjs` presentation styling: pale limestone panel, ink text, muted informational groups, white fields, sage buttons, restrained olive action rails and neutral disabled rows. The lead's short-viewport layout changes were preserved; canonical rules, semantic projection, pagination content and hit geometry were not modified. The existing interface verifier passed again. No bundle was rebuilt by this reviewer. This supersedes the earlier statement of no implementation changes only for this later bounded refinement; the adversarial findings above remain a receipt of the earlier reviewed candidate. Actual browser readability and matched concept acceptance remain OPEN.
