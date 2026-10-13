# Classroom and teaching apps

## Priorities when goals conflict

Teaching and reliability first; then learnability and instructor workload; then performance and "works in any classroom" (floors never traded away); then realism; then maintainability. Every effect must teach or confirm something.

## Design

- **Safe defaults, progressive disclosure.** The first screen works with the defaults; options sit behind "More options". The "grandma test": someone who has never seen it finishes a round without help.
- **The instructor's screen is the record.** If apps do not connect (offline), the instructor announces results aloud and students record them; build in a correction path ("Void this result" with a reason).
- **Practice round first** with a training item, then the real thing.
- **Workload:** keyboard shortcuts for every repeated instructor action; one primary action per step; nothing that needs a second person.
- **Debrief built in:** results, a chart, and discussion questions so the session ends in reflection, not a score.

## Pedagogy

- Multimedia principles (Mayer): signalling, coherence (no decoration that competes), spatial contiguity (labels by what they describe), segmenting (one step at a time), pre-training (practice round).
- Keep cognitive load low: plain words over codes ("+2 km/h Mobility", not "MOB +2"); effects written the same way everywhere.
- Retrieval and comparison: students plan, commit, then compare plan with outcome.
- State measurable learning objectives first and check learners against them (a debrief question or short quiz per objective), not only whether they enjoyed it.
- Retrieval throughout, with corrective feedback and spaced revisits, not only at the end.
- Universal Design for Learning: multiple means of representation (text, picture, 3D), action (mouse, keyboard, touch) and engagement.

## Delivery

- Choose the delivery form from your classrooms' constraints. Example (SEA Game): one offline HTML file, no installation, no network, no account; runs from a USB stick or email attachment, with a size budget (≤ 50 MB).
- Every language you serve from the start (example: English and French) with parity tests: every string in both, no truncation, no overflow at 320 px.
- WCAG 2.2 AA in full, not only contrast: semantic HTML and landmarks; text alternatives and captions; logical focus order, focus restored after dialogs and never hidden by sticky bars (2.4.11); status messages announced (4.1.3); errors identified with a way to recover (3.3.1, 3.3.3); page and passage language set (3.1.1, 3.1.2); text resizable to 200% and robust to text-spacing changes (1.4.4, 1.4.12); a single-pointer alternative to dragging (2.5.7); targets at least 24 by 24 CSS px or spaced, with the listed exceptions (2.5.8); pause for anything that moves (2.2.2); screen-reader names from the same source as the visible text. Turning off interaction-triggered animation (2.3.3) is AAA: do it anyway. Automated tools catch only part of this; test by hand with a keyboard and at least one screen reader.
- Two themes: dark for screens, light "projector" for bright rooms; a 7:1 text target on the projector theme.
- Fit 1280×720 without scrolling for the live views; test at 1366×768 and 320 px reflow.

## Usability testing

- Task-based tests with real or proxy users: give a task ("run one auction round"), watch without helping, note where they stall or err, fix, test again. About five people find most problems in a round.
- Run a scripted rehearsal before the first class.

## Review by an instructor

Send the file with a one-page guide: how to open it, a solo walk-through (two tabs), and five questions (could you run it, is guidance enough, does it teach the trade-off, what is confusing, the one change you would make).
