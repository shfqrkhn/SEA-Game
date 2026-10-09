# Auction interface concept: W63

Status: **generated-exploratory, zero accepted states**. This is an actionable layout proposal, not browser execution or canonical UI-copy approval. Built-in imagegen skill/tool was used; no CLI/API fallback.

Final project asset: `docs/game-design/concepts/ui-auction-v1.png`

SHA256: `ded388546c6baefc42551e5584576166525bbed15a5b5e913f0ba96b3e48164c`

Native final output: `C:/Users/user/.codex/generated_images/01a12050-c7b3-75a0-bd82-c4c1a405dc44/exec-81a201d9-77ca-4bc8-8cf4-32af68f212f5.png`

## Source grounding

Read current VISUAL_INTERACTION_CONTRACT.md, source/shared/engine.js, source/three/interface.mjs, source/shared/three-presentation.js, both role templates and auction/correction/local purchase text in both role scripts. Use current six-section UI: Current/Teams/Round/Manage/Inspect/Help-save and French counterparts. This concept retains canonical ACC-F starting price $350,000, REC +2 and $50,000 legal increments. R1/L7 is an illustrative legal ACCESSORIES slot, not disclosure of an actual seeded market.

Source hashes at concept review:

| Source | SHA256 |
| --- | --- |
| source/shared/engine.js | 754d89d81f2f49dce1209000d213d6c516bac4ce1599aa02b47bfa6d5ee3a8fe |
| source/three/interface.mjs | 45eff733e61f19df852905b5e4bc3e343b2e4c123d37e7fc60c423129a8000ed |
| source/shared/three-presentation.js | 19e8f5f29a74d069ed5947b48616ad9498db02f871e25be6bb15ab71362f45f2 |
| source/student.template.html | 53016b14e6dce30fe118764867bbd784e0b9e5d5c21fd2826c9e5795a2957ec5 |
| source/instructor.template.html | c559f9f9b006694bc074d7ce33186b54840309e9135a64850678eb4b21552d16 |
| source/student.js | ee07908e77e79b7b03bc8a8c5f86778e19b344e774166bc6b284a228b563f7ef |
| source/instructor.js | eeeee0b2c3acb530dfee316506004dbe3d0dead637ca35c49e23bf22c4cea738 |
| VISUAL_INTERACTION_CONTRACT.md | bfbbda61120b3dc5d440460cabe9ffdb970d8e5ac115e2c37e1dbe7ec8d8a539 |

## Exact inventory mapping

| Panel | State | Existing inventory ID | Scope limitation |
| --- | --- | --- | --- |
| A, upper left | EN instructor active bidding, Teams caller acceptance | UI-instructor-auction | One active lot, not all reveal/timing/limit variants |
| B, upper middle | FR student private decision and confirmed local entry | UI-student-auction | Private WTP/note; not private submission or instructor-visible data |
| C, upper right | EN instructor committed result and advance | UI-instructor-auction | Same state family; no future-card identity |
| D, lower left | FR student purchase reconciliation | UI-student-build | One local purchase row; not full add/remove/correction qualification |
| E, lower middle | FR instructor correction before advance | UI-instructor-auction | Required reason and original ledger preserved; not general deletion |
| F, lower right | EN blocking void confirmation | UI-instructor-confirmation | One concrete dialog; not every confirmation branch |

Only these four distinct UI-state IDs are concept targets. A single board does not complete their coverage or every related component/element. No generic UI state or 77 identity acceptance is implied. Shared receipts/inventory are owned by lead and were not edited here.

## Pixel review and actionable targets

First output had insufficient margins and omitted Advance to next lot. Second output restored the action and French Équipe 2 but still missed 8% outer framing. Third/final output was inspected from native full-resolution pixels: complete six-panel borders, subjects and captions remain visible, with approximately 10% horizontal and 12–14% vertical empty margins (visual estimate, not an automated pixel receipt). No subjects or headings are clipped. Final selection keeps distinct role/language markers, uniform six-section navigation, limited neutral equipment imagery, clear primary action, disabled accepted-result controls, private student fields and blocked-background confirmation.

Implement hierarchy from state-owned view data: current card and exact amounts first, one primary legal action next, status explicit, secondary corrections in Manage. Never add automatic student bidding or network sync. Use real native inputs and accessible commands; raster text is design reference only. Dark primary actions, pale disabled states and restrained orange destructive confirmations must also have semantic labels/focus, not colour-only meaning.

Known limitations: French helper captions are proposed condensed copy rather than exact canonical translation; small French helper lettering still needs authoritative glyph/copy verification. Role-label language and monetary formatting need canonical localization. Tiny raster labels are not accessibility proof. The model remains generated illustrative equipment, not validated mechanical geometry. No keyboard, touch, screen-reader, privacy-runtime, stale-state, transaction, timing, responsive or offline test was executed by image generation. Native input field scale/44px targets must be measured in runtime. Review all text against canonical I18N before implementation. All acceptance gates remain open.

## Generation provenance and exact prompts

Second/correction native output SHA256: `0f1871b905cc11f8d6222873348ebb25426c9e91bce8aaa34dd3d456c59d57f3`.

All original native outputs retained. Initial native path: `C:/Users/user/.codex/generated_images/01a12050-c7b3-75a0-bd82-c4c1a405dc44/exec-01155f36-d74b-4456-9f31-4dca77258deb.png`; initial SHA256 `78db8b4ca673fb5b744bad505f3e630bf2d661dbec87127e2578cb7f79124ba1`. Correction native path: `C:/Users/user/.codex/generated_images/01a12050-c7b3-75a0-bd82-c4c1a405dc44/exec-5abdbc1e-68d5-4b50-8f5d-c30b0df9843e.png`. Final path/SHA above. All calls used transparent_background=false; first call had no references, second referenced initial project image, third referenced the second native output. Exact prompts below, not paraphrases:

### Call 1

```text
Create a high-resolution landscape UI concept board for SEA Game, an offline educational systems-engineering auction game rendered as a unified Three.js interface. Use-case ui-mockup. This is an actionable interface design target, not a cinematic marketing illustration. Professional minimalist warm ivory #f1efe7, sage #465144, ink #202a29, thin quiet rules, clear flat text and generous spacing. Small realistic olive recovery winch or vehicle occupies at most one third of each screen; readable controls and state hierarchy dominate. No ornament, slogans, fictitious coins, combat scene or manufacturer logos.
CRITICAL SAFE FRAMING: all six complete screen panels, their headings, controls, captions and illustrated equipment must remain inside the central 84% of the full canvas: at least 8% empty margin on every outer edge. Arrange a 3-column by 2-row board with equal panels and generous internal gaps. No cropped screen/device borders. Do not add phones or perspective distortion.
Each panel is a straight-on UI screen with an explicit letter and state heading. The screens share the same six-section navigation. English navigation exactly "Current | Teams | Round | Manage | Inspect | Help / save"; French navigation exactly "En cours | Équipes | Manche | Gestion | Explorer | Aide / sauvegarde". Always show role and EN/FR language control; selected section is visually clear. Only depict known current public card ACC-F, titled "Recovery Winch Package" / "Ensemble de treuil de dépannage", starting price $350,000, recovery effect REC +2. Current illustrative location Round 1, Lot 7. Canonical bid increment is $50,000. Do not show future-round identities, private market seed, other teams' private notes, simulated network sync, automatic student bidding, self-award or invented scoring.
Panel A title "A · Instructor · Active bidding", English, selected Teams. Show current ACC-F winch, "Round 1 · Lot 7", "Leader: Team 1 · $350,000", "Next legal bid: $400,000", "12s remaining". Primary action exactly "Accept Team 2 · $400,000"; helper "Accept the current Teams caller". Also show Pause under Manage as a secondary contextual item. This is instructor manually accepting a Teams caller, not a student bid action.
Panel B title "B · Étudiant · Décision privée", French, selected En cours. ACC-F known current card. "Volonté de payer privée" input "$450,000"; "Note de décision privée" input "Priorité dépannage". Primary after-close action "Enregistrer le gain confirmé"; secondary "Pas à nous / avancer". Caption "Confirmer avec le journal instructeur". No purchase is recorded until confirmed result. Nothing here implies instructor can see WTP or notes.
Panel C title "C · Instructor · Committed result", English, selected Current. ACC-F, "Committed: Team 2 · $400,000", plain durable result badge. Primary "Advance to next lot"; secondary "Review ledger" in Manage. Accept buttons visibly disabled and no active bidding timer. Do not expose next card.
Panel D title "D · Étudiant · Réconciliation", French, selected Gestion. It is the Build phase. Show one purchase row "R1 · L7 · ACC-F · $400,000", heading "Achats locaux". Short helper "Corriger seulement les erreurs de transcription". Primary "Confirmer la réconciliation". No free equipment deletion or refund.
Panel E title "E · Instructeur · Correction", French, selected Gestion. Show current committed ACC-F row, "Motif de correction" required text field, "Annuler le lot courant engagé" action with restrained amber/danger accent. Helper "Le journal original est conservé". This voids a mistaken instructor record before advance, not a student's purchase choice.
Panel F title "F · Confirmation", English, active modal with dimmed inactive background. "Void this committed result?" details "Round 1 · Lot 7 · ACC-F · Team 2 · $400,000". Two clear choices "Cancel" and "Confirm void". Helper "Reason required · Original ledger entry retained". Other panel background actions unavailable while modal open.
Preserve every heading and exact role distinction. Use only the supplied state data and short labels; leave unsupported values absent. Design all text readable, controls aligned and complete, minimal hierarchy, ample inner panel padding. The final image is a concept board only, not evidence that these states were executed.
```

### Call 2

```text
Edit this SEA auction concept board only. Preserve its six panels A–F, neutral ivory/sage/ink style, all role/privacy distinctions, ACC-F winch, canonical $350,000 start, $400,000 next/committed price, REC +2 and student $450,000 private WTP. Make these targeted corrections:
1. Add true outer safe framing: ALL complete panel borders, text, controls and subjects must be inside the central 82% of the canvas, leaving at least 9% completely empty warm-ivory margin at each left/right/top/bottom edge. Scale the existing six-panel grid down uniformly with no cropping; retain equal gutters and keep text sharp/readable. Do not fill margin with new captions or ornaments.
2. In panel C, committed result, add a clearly dominant sage primary button labelled exactly "Advance to next lot", above the Manage / Review ledger row. Keep Accept disabled and timer absent. It is the main next action after commit. No next card identity.
3. Panel E French correction table must say "Équipe 2", not "Team 2"; otherwise preserve French wording and reason-required correction. Panel F remains English.
Change nothing else; especially do not invent prices, bidding mechanics, future lots, phase sequence or private-state sharing.
```

### Call 3

```text
Edit only outer framing of this existing six-panel SEA concept board. The prior edit still left too little empty outer margin. Preserve all six panels A–F and every label, value, button, role, colour and image exactly, including Advance to next lot and Équipe 2. Do not redesign or add content.
Use a 1536x1024 landscape canvas. Scale the COMPLETE current six-panel grid uniformly smaller so its outermost panel edges fit entirely within this rectangle: x=200 to1336, y=144 to880. This means about13% empty ivory margin on left and right,14% on top and bottom. The board must visibly float as a compact inset grid surrounded by broad blank ivory whitespace. Preserve six full borders and ample internal gaps. No pixels belonging to panel edges, headings, controls, shadows or subjects may occur outside that central rectangle. Retain crisp legible text and no cropping. This is only a margin correction, not a new concept.
```


