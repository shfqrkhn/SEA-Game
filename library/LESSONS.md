# Lessons learned

Each entry: what happened, the rule it produced, and the check that now enforces it. Newest first. Examples come from SEA Game (a classroom auction game with photoreal vehicle renders and a real-time 3D showcase, one offline HTML file).

## 2026-10-13 · Paused, yet still turning; fixed, yet still failing

- **What happened:** pausing a 3D turntable stopped its automatic turn, but the orbit controls' easing carried the turn on, for seconds on a slow software renderer; only CI's slow machine showed it. The fix then seemed not to work: the test read the view from an attribute updated only on the next paced draw (and never while the stage was off screen), and ran against a build made before the fix.
- **Rule:** a pause, and every control, takes effect at once and reports its new state at once; a test reads current state, not a value cached for drawing; refuse to test a build older than its source.
- **Check (as built in SEA Game):** the end-to-end test pauses and requires the reported turn to stay unchanged for 600 ms, and reads the zoom straight after the last of 12 presses; a Playwright global setup renders the build from source and refuses to start unless the built file is that build.

## 2026-10-12 · Framed for one view, cut off at the others

- **What happened:** a 3D showcase framed the vehicle for its opening view; once fully kitted (a trailer behind, a blade in front, a tall mast), parts left the frame as it turned, and there was no zoom. Framing every part in the catalogue instead shrank a bare vehicle to a speck. On a phone, wide tables inside collapsible sections lost their right-hand columns, unseen because tests opened only the first screen.
- **Rule:** frame what is shown, at every view the user can reach (each turn, each drag height, each window shape), with a margin; zoom by buttons with limits, not the wheel, so the page still scrolls. Below a phone breakpoint, show each table row as a card whose cells carry their column headers. Test the worst case (the full kit) and every section opened at phone width.
- **Check (as built in SEA Game):** a unit test projects the bounds of long, tall and off-centre kits at every 5° turn and every drag height in wide, square and tall windows (inside the frame, and tight); an end-to-end test buys the most extreme parts, turns the model fully at 1280 and 360 px, and reads the drawn extent and zoom; another opens every section at 360 px in both languages and fails any cell outside its table or without a label.

## 2026-10-12 · Two ways to publish, one stale site

- **What happened:** the built game was uploaded by hand to the repository root, and Pages (serving from the branch) published it. Minutes later CI's own Pages job, still running on the commit before the merge, deployed a build of the older source over it. The tracked copy also broke the checks that every tracked file is reproducible.
- **Rule:** one deployer. Set the Pages source to the CI workflow, never commit a build, and publish only what passed the checks. After each release, compare the live file's hash with the local build.
- **Check:** a unit test fails on any tracked page carrying a built payload; the release checklist compares the Pages SHA-256 with the build.

## 2026-10-12 · A part read as the end of a gun barrel

- **What happened:** in a still, a roof sight stood where the eye carried a barrel on, so it looked like part of the barrel. A first check judged only parts in front of the muzzle; the fixed still still misled, because a part *behind* a barrel's end reads the same way. Then a hull mirror (not a "part", so not judged) did the same in another still.
- **Rule:** in a picture, the eye continues lines (good continuation). Nothing may touch the end of a line-like component or its extension, at any depth, whatever kind of object it is.
- **Check (as built in SEA Game):** project each weapon's muzzle and every part from another slot, plus small base fittings (no larger than 0.8 m), into the exact camera of each still; fail any within 1% of the frame width of the muzzle or of its extension 4% beyond. Proposed: extend to every line-like component (poles, aerials, cables). See `practices/asset-checks.md`.

## 2026-10-12 · A count ceiling hides regressions

- **What happened:** known failures were held "at or below 97 and 182". Fixing one and adding another kept the count, so a new defect could pass; filtered runs skipped the ceiling entirely; rewriting the record could let each entry creep 0.5 px worse.
- **Rule:** record known exceptions *by identity with their measured value*; fail any new entry or any worse value, in every run; rewriting keeps the better of old and new; the record only shrinks, with a dated goal of empty.
- **Check:** the record file is versioned, and the check refuses to add to it.

## 2026-10-12 · A check that does not see what the viewer sees

- **What happened:** the first check built the models at real-time detail while the stills render at full detail, and took the muzzle at the bored barrel instead of the brake beyond it; a degenerate (edge-on) triangle produced false hits.
- **Rule:** a visual check must use the same geometry, camera, resolution and framing as the image it judges. Give geometric checks a self-test with the edge cases (crossing, clear, edge-on off the line, edge-on on the line).
- **Check:** a self-test of those cases runs automatically before every check run.

## 2026-10-12 · Fix one, find all

- **What happened:** the owner reported one still; the same cause was in other vehicles, other angles and other slot types.
- **Rule:** for any reported defect, find the class, sweep every instance (all variants, angles, languages, themes), fix them all and add a check that would have caught the first one.
- **Check:** the evidence record lists the sweep and the new check.

## 2026-10-12 · Moving one thing breaks another

- **What happened:** relocating a sight 1.2 m back hit an engine cover (40 overlaps) and overhung the roof (18 fit failures); a mast moved left hit a gun; a raised head floated 543 mm off its support.
- **Rule:** every geometry change runs the whole check suite (overlap, fit, budgets, sightline) on the whole fleet before any render. Renders are the slowest step; checks are cheap.

## 2026-10-12 · The base is in every picture

- **What happened:** lowering a mirror on the base meant every layered still had to be re-rendered, because the base is a holdout and shadow catcher in each layer.
- **Rule:** know which outputs depend on which sources before changing a shared component; estimate re-render cost first and batch base changes.

## 2026-10-12 · Ignore tool folders

- **What happened:** the linter scanned agents' worktrees in `.claude/` and reported 241 errors that were not in the project.
- **Rule:** exclude agent and tool folders (`.claude/`, `.artifacts/`, `_archive/`) from lint, tests and typecheck from day one.

## 2026-10-11 · Timeouts are evidence, not knobs

- **What happened:** tests timed out when other work loaded the PC; once, test scratch had piled up and slowed a test 16-fold.
- **Rule:** never raise a timeout or budget to pass. Find the cause (here: scratch not cleaned up), fix it, add a check (scratch is removed after each run), and record the evidence of any one-off with the date.
