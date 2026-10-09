# Task-centered Three.js rebuild: XY analysis (W66)

2026-10-09. Status: proposed design and primary-source research; implementation and acceptance remain separate. This document does not establish “highest quality,” completed rebuilding, accessibility compliance or product closure. “Cleanroom” in the filename means an original implementation informed by public patterns, not a formal independently separated legal cleanroom process.

## Solve X, reconsider Y

**X: the player needs to understand the mission, recognize a legal next action, compare engineering tradeoffs, run or participate in the manual auction, reconcile an accurate build, submit privately, explain the outcome and recover their work.** The instructor needs public classroom visibility and explicit authoritative transaction controls. The student needs a private decision workspace and a clear distinction between local records and official results.

**Y: faithfully mirror historical menu sections and every HTML control into paginated Three.js rows.** That preserves control availability but can bury ordinary work in navigation. The earlier observed ten-team Build view required 17 pages at 1280×720; this is a historical symptom motivating the redesign, not a claim about the renderer being changed concurrently. Converting those pages into more attractive rows does not resolve X.

Use a task-centered scene, preserving canonical commands, translations, financial calculations and role boundaries. Minimize navigation, not necessary decision steps: irreversible changes still need explicit confirmation, and private submission still needs its guard. No automatic bidding, silent balance changes, invented synchronization or instructor authority on a student device. The whole Three.js game includes accessible native inputs and semantics as integrated interface components.

## Research translated into original patterns

| Primary source | Pattern adopted for SEA | Code, dependency and asset boundary |
| --- | --- | --- |
| [pmndrs/uikit README](https://github.com/pmndrs/uikit) and [vanilla Three.js documentation](https://pmndrs.github.io/uikit/docs/getting-started/vanilla) | Reusable containers, proportional layout, spacing tokens, responsive composition and explicit interaction states. The project documents both React and vanilla integration. | Inspiration only in this slice. No uikit installation or copied sample code. Existing architecture can implement these ideas directly. Styled kits, referenced design systems, fonts and icons require their own provenance review. |
| [Three.js interactive cubes source](https://github.com/mrdoob/three.js/blob/dev/examples/webgl_interactive_cubes.html) | Direct scene selection, visible selection feedback and resize-aware camera framing. | Original implementation using the existing pinned runtime. Do not inherit the example's disabled browser zoom, perpetual animation or diagnostic overlays. |
| [Three.js physical clearcoat source](https://github.com/mrdoob/three.js/blob/dev/examples/webgl_materials_physical_clearcoat.html) and [official examples](https://threejs.org/examples/) | Material and lighting comparisons inform paint, rubber, steel and glass readability. | No example meshes, HDR imagery, textures or runtime imports adopted here. Rendering plausibility requires SEA's own evidence; example quality is not evidence for SEA. |
| NN/g [usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/), [recognition and recall](https://www.nngroup.com/articles/recognition-and-recall/), [progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/) | Visible status and choices, consistent action placement, error prevention/recovery, essential controls first and clearly labelled secondary detail. | Principles paraphrased only. NN/g is not an MIT source; no proprietary illustrations, posters, copy or layouts are redistributed. |

The following SEA layout is our application of those principles, not a research finding that this game is optimal. Progressive disclosure must not hide a frequent action merely because it occupied a secondary historical menu.

## One coherent interaction contract

Use one role-filtered view model describing phase, selected entity, visible metrics, task status and validated action targets. The controller owns rules; the renderer owns presentation. A visual action targets the same authoritative semantic command as its native equivalent. Render current eligibility, busy state, disabled reason, confirmation and errors from that state. Never reconstruct hidden market order or private plans from the full saved session.

Each phase has a stable task heading, compact status, central relevant model or decision view, and a persistent primary next-action area. Keep a selected-team summary and a direct team chooser rather than paging through the entire roster's controls. Provide direct labelled view tools where applicable: overview, front, rear, assembled, exploded, cutaway and shadows. Selection and entered values survive camera changes and secondary panels. Disable unavailable tools with an explanation; do not imply every model already supports every inspection mode.

Use warm limestone, ink, sage, restrained brass and the material vocabulary in [the visual contract](VISUAL_INTERACTION_CONTRACT.md). Public status and private entry have clear textual labels; colour alone carries no meaning. Replace decorative instrumentation with readable requirements, actual values and shortfalls. The instructor's current lot, legal caller and committed result belong together. The student sees their own known lot/record and decision inputs, not a future-lot feed.

Native numeric/text/select/file controls handle typing, IME, selection, mobile keyboards and assistive technology. Scene activation must focus the matching input predictably; Escape returns to the invoking control, ordinary Tab order stays logical, and rerender does not discard active composition or focus. Touch controls have visible pressed/selected states without hover dependence. Submit checkbox and neighbouring Submitted/Soumis status update atomically. Confirmations identify the exact action and target; a stale target requires refreshed review before mutation.

## All eight phases, both roles

The phase order comes from `source/shared/engine.js`; content and commands come from the instructor/student templates and controllers. Layout changes must not introduce new game rules.

| Phase | Instructor task surface | Student task surface |
| --- | --- | --- |
| Setup | Session configuration, team/mission assignment and shareable setup information together; explicit start/readiness action. | Join/setup data, team and mission identity; accessible entry with immediate validation and clear next step. |
| Practice | Training lot with reveal/open/close/result controls and obvious separation from scored play. | Training decision and recorded result with explanation; practice does not silently become a scored purchase. |
| Planning | Selected-team vehicle/readiness summary and class mix; direct start-auction action subject to current guards. | Vehicle selection and confirmation beside requirements, private plan, risks and maximum willingness to pay. Keep essential requirements visible during entry. |
| Auction | Current revealed lot, current-round context, caller eligibility, price/timer and legal bid action; explicit committed result and advance. Corrections remain reachable with their existing guards. | Manually known card, private willingness-to-pay/notes and confirmed purchase recording. Clearly distinguish local record from official transaction; expose no future lot or another team's private decision. |
| Build | Direct team selection, installed assembly, requirement/compliance summary and authoritative purchase record; explicit transition to submission. | Installed assembly, requirement shortfalls and local inventory side by side; reconciliation with a clear before/after record. Corrections cannot invent authoritative purchases. |
| Submit | Public readiness summary; deliberate private-entry opening, native entry per selected team, exact validation and Submitted/Soumis status; guarded close-submissions action. | Native amount/percentage profit entry, calculated metrics and eligibility; clear instruction for communicating the submission through the existing classroom procedure. Do not imply an automatic remote submission. |
| Debrief | Official ranking/ties/no-award states, selected-team explanation, eight existing discussion prompts and transfer question; explicit session closing. | Own outcome/metrics and the official-results distinction; focused reflection and closing action. |
| Closed | Read-only outcome and backup/export; new-session or restore paths state their effect and preserve applicable recovery safeguards. | Read-only own outcome and backup/recovery; distinguish a locally saved record from instructor authority. |

## Measured targets, not acceptance claims

Count **navigation activations** separately from data entry, legally required mutations, confirmations, native file-picker operations and camera gestures. Record the actual task, role, language, viewport and starting state. A low click count that produces wrong records, loses context or leaks information fails.

| Task | Proposed navigation budget |
| --- | --- |
| Find the next legal action from the active phase | Zero section/page navigation; non-confirmed action directly available. Required confirmation adds a deliberate activation, not an avoidable menu. |
| Change a common inspection view | One labelled toolbar activation; preserve task/selection. |
| Select an instructor team | At most one chooser opening plus one selection; no traversal of unrelated roster pages. |
| Compare critical requirements while deciding | Visible at desktop task scale; at most one clearly labelled disclosure at narrow widths, retaining entered data and selected model. |
| Accept a legal caller / commit current auction result | Direct existing command and, where required, its confirmation. Do not combine distinct canonical transactions to meet the budget. |
| Backup/export or open recovery | At most one utility opening plus the action; measure native chooser and required confirmation separately. |
| Reach task/action by keyboard | A discoverable skip-to-task/focus path, logical tab sequence and native Enter/Space behavior; measure actual focus stops rather than promise an arbitrary universal tab count. |

Use at least 44 CSS px planned touch targets and 16 CSS px body text at normal scale, then verify actual rendered size and contrast. Test English/French expansion, 200% zoom, narrow portrait, short viewport, keyboard, touch, reduced motion and screen reader. Proposed representative layouts include 1280×720, 360×640 and 320×568; the complete supported-device matrix remains authoritative. No essential text or action may be clipped or exist only in hover, colour or tiny raster text.

Before/after evidence uses identical tasks and records navigation count, completion time, errors, corrections and abandoned attempts. Include first-time learners and instructors through the actual classroom acceptance process; developer walkthroughs cannot substitute for them. Fast feedback, reliable focus and coherent layout are evaluated together with correctness, not against screenshot attractiveness alone.

## Licence audit and adoption gate

| Source | Verified licence / obligations | Actual adoption in this document slice |
| --- | --- | --- |
| [uikit LICENSE](https://github.com/pmndrs/uikit/blob/main/LICENSE) ([raw](https://raw.githubusercontent.com/pmndrs/uikit/main/LICENSE)) | Two MIT blocks: **Copyright 2024 Bela Bohlender** and **Copyright 2023 Coconut Capital**. Any copied/substantial code must retain both applicable full copyright/permission notices and the licence's warranty/liability terms in distribution. | Public patterns only; no code or package adoption. Do not collapse the two notices into one or assume every linked kit/asset shares this licence. |
| [Three.js LICENSE](https://github.com/mrdoob/three.js/blob/dev/LICENSE) ([raw](https://raw.githubusercontent.com/mrdoob/three.js/dev/LICENSE)) | MIT, **Copyright © 2010–2026 three.js authors**; retain the exact applicable copyright and permission notice, including full licence/disclaimer text, with copied/substantial software. | Existing `three` **0.186.1** remains the dependency observed in `samples/threejs-recovery/package.json`; no package change here. Public example patterns only. |
| NN/g articles linked above | Copyrighted research publications; no MIT/FOSS licence asserted. | Links and original paraphrased principles only; no copied media or substantial text. |

If later adopting code, record the exact pinned commit/version, original paths, modifications, hashes and all applicable licence texts in distribution notices. Review transitive dependencies and each model, font, icon, texture, HDR/environment or screenshot independently. A software repository's MIT licence is not proof that every example asset is redistributable. Preserve applicable full MIT terms rather than this summary. Research links to `main`/`dev` are mutable; these are dated observations, not a locked dependency bill of materials.

## Closure still required

This document closes no MPES acceptance gate. Reuse the existing R01–R26, M0–M8 and T01–T27 requirements instead of creating a competing completion checklist. In particular, retain these open evidence requirements:

- Model/reference fidelity: realistic shape, material separation, mechanical mounts, assembled/exploded restoration and moving shadows; generated concepts alone cannot establish engineering correctness or runtime visual matching.
- Complete two-role English/French eight-phase journey, all 70 scored lots and separate training, privacy, stale actions, reconciliation, money/balance rules, save/restore and failure recovery.
- Actual device/browser/GPU matrix, standalone embedded offline behavior, keyboard/touch/native IME/screen reader/zoom and resource/performance/context-loss verification.
- Rights/provenance for classroom content and all distributed assets, plus actual instructor/learner classroom acceptance and handover. Do not impersonate an external reviewer or rightsholder.
- Published-byte identity, release evidence and operations. Fresh built-in-browser testing must exercise the exact candidate, not an older hosted release.

Convergence requires three consecutive fresh, same-key, zero-change passes across the **full applicable material scope**. Any material change resets the sequence; a document review or isolated renderer pass is not global closure. Record unresolved evidence honestly and keep the existing full-product counter open until its conditions are actually met.
