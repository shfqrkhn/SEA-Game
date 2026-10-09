# Lifecycle interface concept: W64

Status: **generated-exploratory; zero accepted states**. Built-in imagegen skill/tool; three finite calls, no CLI/API fallback, watchers, servers or background polling. Only this document and `docs/game-design/concepts/ui-lifecycle-v1.png` were authored. Shared inventory, receipts, docs, source, tests and bundles were not edited.

Selected project asset: `docs/game-design/concepts/ui-lifecycle-v1.png`

Final SHA256: `1959cae880eb612cfbe49d99a17a79997f1e284a92040971c326d874f08480f0`

Native final output: `C:/Users/user/.codex/generated_images/01a12050-c7b3-75a0-bd82-c4c1a405dc44/exec-63d704c4-d523-4f47-9333-1479ed749ae3.png`

## Canonical source and scope

Read current VISUAL_INTERACTION_CONTRACT.md, concept-inventory.json, both role templates and controllers, shared rules and interface renderer. Use existing phase/role ownership and native-input/confirmation semantics. The example is illustrative, not an actual seeded session: Team 1 Recovery owns ACC-F bought at R1/L7 for $400,000; mandatory shortfalls mean noncompliance, zero profit is permitted and no eligible award is shown. No inferred winner, invented points, minimum profit, automatic transfer, future market data or cloud retention.

Instructor Build is authoritative reconciliation. Student Build corrects only transcription differences and proceeds after instructor opens submissions. Instructor Submit requires stopping screen sharing and explicit private-entry confirmation before displaying profit fields; student computes and communicates privately through the existing manual handoff. Debrief results become public after submissions close; student does not adjudicate awards or close the instructor room. Closed review preserves a backup-before-clear confirmation and session-scoped recovery limits. Native amount/card fields, keyboard focus and inactive modal backgrounds are visual design targets only.

| Source snapshot | SHA256 |
| --- | --- |
| source/shared/engine.js | 754d89d81f2f49dce1209000d213d6c516bac4ce1599aa02b47bfa6d5ee3a8fe |
| source/student.template.html | 53016b14e6dce30fe118764867bbd784e0b9e5d5c21fd2826c9e5795a2957ec5 |
| source/instructor.template.html | c559f9f9b006694bc074d7ce33186b54840309e9135a64850678eb4b21552d16 |
| source/student.js | 1078fb6242a6f26f86a385730054fb818e653f12a8a2020d886128874e9c30c9 |
| source/instructor.js | 7b9fefdf3bc56fea0a52f6fd0680a93a05624b4e73d315556506a9037097a881 |
| source/three/interface.mjs | 45eff733e61f19df852905b5e4bc3e343b2e4c123d37e7fc60c423129a8000ed |
| concept-inventory.json | 69dcdee38ad21a4489e63f7b940d2e27b6ca6f4e489449b9a0285fe2e1266ad3 |

These hashes describe read/review snapshots; later source changes require fresh qualification. They do not bind a released runtime identity.

## Exact existing UI-state mappings

| Panel | Existing inventory IDs | Concept scope |
| --- | --- | --- |
| A, row1 left | UI-instructor-build | One authoritative team summary and open-submissions action |
| B, row1 right | UI-student-build | Local reconciliation/native fields and instructor-opened handoff |
| C, row2 left | UI-instructor-submit; UI-instructor-confirmation; UI-instructor-private-entry | Three chronological examples: shared guard, blocking confirmation, then private-entry preview; not simultaneous runtime screens |
| D, row2 right | UI-student-submit | Zero-profit native field and manual communication |
| E, row3 left | UI-instructor-debrief | No-award outcome, all-team review entry, two of eight prompts, close-room action |
| F, row3 right | UI-student-debrief | Own noncompliant review, official-results ownership and read-only transfer question |
| G, row4 left | UI-instructor-closed; UI-instructor-confirmation | Final ledger/export/new-session and backup-before-clear confirmation |
| H, row4 right | UI-student-closed | Read-only own review, backup/new session and session-retention warning |

Eight primary phase/role targets plus instructor confirmation/private-entry are ten distinct existing IDs. Mapping is exploratory and partial: neither an entire phase nor every native element, error, privacy branch or confirmation is accepted. Shared receipt/inventory promotion is lead-owned.

## Pixel review and implementation targets

Initial image was readable but failed the outer-margin contract, used Region/Location for Round/Lot, and showed an unintended editable transfer field. The second corrected labels/readonly intent and helper-save tabs but still left top/bottom margin below 8%. The selected third image is a framing-only refinement. Full native pixels show all eight complete panel borders, headings and controls, approximately 17% horizontal and 15–16% vertical empty margins (visual estimate, not automated pixel analysis). All subjects are intact. Mandatory headings A–H, known purchase ID/amount, zero profit, noncompliance, no-award, private-entry chronology and backup-before-clear captions remain visible.

Use a reusable active-team summary and clear phase-owned action; own/private input must not bleed into shared instructor views. Confirmation backgrounds are noninteractive, keyboard focus stays in the dialog, and cancelling preserves state. Native input focus must be synchronized with scene focus and screen-reader semantics. Submitted/Soumis status must immediately agree with its checkbox and canonical state after toggling. This board shows an unchecked Submitted checkbox, so no submitted-status acceptance is implied.

Lead browser evidence identifies an instructor ten-team Build view requiring 17 pages at1280×720. This single-team concept does not solve or qualify that runtime gap: implement and verify useful selected-team navigation, concise summary/shortfalls, explicit current team and accessible pagination without forcing users through seventeen pages to find a team. No claim that current implementation matches this concept.

Remaining limits: condensed helper/action copy is proposed UX wording, not exact canonical I18N; verify every glyph and localized money format before implementation. Full bilingual variants for every phase remain open (board uses EN instructor/FR student). Tiny raster typography does not prove16px runtime body text,44px targets or contrast. Only two debrief questions are drawn; all eight and transfer remain required. No detailed add/remove reconciliation, stale action, missing submission confirmation, restore/corrupt-backup or ten-team screen is qualified here. Small vehicle thumbnail is illustrative, not exact eight-wheel mechanical acceptance. No browser workflow, native editing, focus trap, screen reader, keyboard/touch, responsive performance, privacy or transactional test is proved by generated pixels. All acceptance remains open.

## Native iteration provenance

| Call | Native output filename under the final output directory | SHA256 | Selection |
| --- | --- | --- | --- |
|1 | exec-4963b606-79f5-49e1-881e-850dc6527262.png | 57463b9792caa2d5f0d285038902ab81353dae7d21b8fc771d83279d78f03db4 | Rejected framing/labels |
|2 | exec-e1901ca3-3caa-4917-858e-155a41c08973.png | a30eb99f6d470b4609d339b9265003eaf9812a84b4d2775415737dca1d6943d0 | Rejected insufficient vertical margin |
|3 | exec-63d704c4-d523-4f47-9333-1479ed749ae3.png | 1959cae880eb612cfbe49d99a17a79997f1e284a92040971c326d874f08480f0 | Selected exploratory board |

Native directory: `C:/Users/user/.codex/generated_images/01a12050-c7b3-75a0-bd82-c4c1a405dc44/`. Originals retained. All calls used transparent_background=false. Call1 no references; call2 referenced call1 native image; call3 referenced call2 native image. Exact prompts below:

### Call 1

```text
Generate an original high-resolution portrait UI concept board for SEA Game lifecycle flows. Use-case ui-mockup. Eight complete flat screen panels, 2 columns by4 rows. Left column instructor EN; right column student FR. Each row is one canonical phase Build, Submit, Debrief, Closed. Actionable coherent interface target, not marketing/cinematic art. Warm ivory #f1efe7, sage #465144, ink #202a29, quiet borders, aligned legible text, small olive vehicle thumbnail only in Build. No logos, awards invented, future market cards, coins, cloud sync or automatic team transfer.
SAFE BORDER: all8 panels/labels/controls/subjects strictly inside central74% of canvas, at least13% empty ivory margin on all outeredges. Every panel border intact, no cropping. Keep legible highresolution text. Shared header role and EN/FR toggles; selected phase labelled. Use simple compact section tabs Current/Manage/Inspect/Help-save in EN and En cours/Gestion/Explorer/Aide-sauvegarde in FR; they are a subset of real navigation, not new phases.
Use these illustrative internally consistent facts only: Team1 Recovery, known purchased ACC-F for$400,000 atR1/L7, shortfalls make build noncompliant, zero profit allowed, no eligible award. Student private state is never visible on shared instructor screen before explicit private-entry confirmation; final results public only after submissions close. No invented score or requirement values.
Panel A "A · Instructor · Build": authoritative team row "Team1 · Recovery · Shortfall", purchase "R1 · L7 · ACC-F · $400,000"; small installed-recovery thumbnail; "Reconcile with instructor ledger" note; primary "Open final submissions". Public authoritative purchases and compliance only.
Panel B "B · Étudiant · Conception": local purchase "R1 · L7 · ACC-F · $400,000", "Non conforme", native editable card/price fields shown within small correction block. Note "Corriger seulement les erreurs de transcription". Primary "Réconciliation terminée" and helper "L’instructeur a ouvert les soumissions". No deletion/refund as a strategic option.
Panel C "C · Instructor · Submit": two clearly labelled sub-states connected by a small arrow. State C1 "Shared screen": private amounts hidden, button "Enter submissions privately". State C2 "Confirmation": modal "Stop sharing this window?" with "Cancel" and "Confirm"; short note "Private fields appear only after confirmation". Add a compact outlined preview below captioned "After confirmation: private entry", with native "Profit amount" input "$0.00" and "Submitted" checkbox. Do not show other teams' notes/WTP or profit in C1. Shared inactive modal background visibly dimmed.
Panel D "D · Étudiant · Soumission": native amount input with focus outline labelled "Profit" value "$0.00"; text "Coût $400,000 · Offre $400,000", "Non conforme". Primary "Passer au débreffage"; helper "Communiquer le montant à l’instructeur". No network send/sync button or minimum-profit restriction.
Panel E "E · Instructor · Debrief": explicit "No award" / "No eligible team"; secondary "All team outcomes" collapsed row; two visible debrief questions "Did every mandatory requirement pass?" and "Which trade-offs were hardest?"; note "Eight prompts and transfer"; primary "Close room". Results are now public; no made-up winner or score.
Panel F "F · Étudiant · Débreffage": own review "Non conforme", purchase ACC-F, "Les résultats officiels viennent de l’instructeur"; one transfer question "Que feriez-vous différemment?"; primary "L’instructeur a fermé la salle". Students review their own decisions, never adjudicate award or close instructor room.
Panel G "G · Instructor · Closed": "Final append-only ledger" row "R1 · L7 · ACC-F · Team1 · $400,000". Buttons "Export backup" and "Start a new session". Show blocking new-session confirmation inset: "Start a new session?" / "Backup download requested before clearing" / "Cancel" and "Confirm". Do not imply the user downloaded or saved a backup merely by clicking. No destructive clear without confirmation.
Panel H "H · Étudiant · Fermé": "Lecture seule pour révision", own final summary ACC-F and cost$400,000; "Exporter la sauvegarde" button, secondary "Nouvelle séance". Note "Fermer l’onglet termine la récupération de séance". No cloud retention or editable purchase controls.
Use exactly these supplied phase titles/role distinctions; short labels may use clear line wrapping. Native fields look editable with visible focus; modals trap attention and dim inactive background. All captions/actions fully visible inside safe margins. No decorative charts or technical implementation terms in user controls. The image is an exploratory design board, not proof of executed UI.
```

### Call 2

```text
Edit the existing eight-panel SEA lifecycle UI concept board only. Preserve all8 states A–H, two-column/four-row ordering, canonical ACC-F $400,000 purchase, zero profit, noncompliance/no-award, private-entry confirmation, backup-before-clear confirmation, ivory/sage/ink styling and EN instructor/FR student distinction. Correct only:
1. Outer framing: scale the COMPLETE eight-panel grid uniformly smaller on the portrait canvas so all borders, headings, subjects and captions remain inside x=140..884,y=215..1321 of a1024x1536 canvas. This leaves roughly14% EMPTY ivory margin on each outer edge. No content may intrude into margin; no cropping. Retain crisp text and equal gutters. All8 panels must be fully visible.
2. Panel A/G ledger column names must be exactly "Round" and "Lot", not Region or Location. Panel B French field/table column names exactly "Manche" and "Lot", not Région/Lieu. Values R1,L7 unchanged.
3. Panel F transfer question is read-only static text, not an editable multiline field. Remove textbox border/resize handle; preserve question "Que feriez-vous différemment?" and official-results note.
4. English header final tab "Help / save", French final tab "Aide / sauvegarde", not Help or Aide-sauvegarde. Maintain shared navigation consistently.
Change nothing else. The final remains an exploratory UI board, not execution evidence.
```

### Call 3

```text
Make one final framing-only edit to this eight-panel portrait SEA lifecycle concept board. Preserve every existing panel A–H, all text/data/buttons, labels, privacy transitions, colours and ordering exactly. Do not redesign.
The current top/bottom empty margin is still below8%. Uniformly scale the entire eight-panel grid down so its complete outer bounding box sits within the CENTRAL60% of canvas width and CENTRAL65% of canvas height. On1024x1536 this is x=205..819,y=269..1267. Leave all four margins completely blank ivory. This deliberately generous inset is required; no panel, shadow, caption or border outside it. Keep all8 panels intact, centered and crisp. No phones, no new labels or content. The only change is broad outer whitespace.
```

