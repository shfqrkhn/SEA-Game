# Lessons learned

Each entry: what happened, the rule it produced, and the check that now enforces it. Newest first. Examples come from SEA Game (a classroom auction game with photoreal vehicle renders and a real-time 3D showcase, one offline HTML file).

## 2026-10-20 · Work that moved instead of going away, and a warm-up that warmed half

- **What happened:** a 3D purchase took 121 ms to show on one CI run (budget 100). A profile showed a forced layout taking 9 of the click's 18 ms; removing it saved nothing, because a trace showed the browser lays out the rebuilt page inside the same mouse-up task anyway. Each part's shader had been compiled in advance, but in three.js geometry and textures upload on first draw, so every purchase uploaded its part inside the draw the player waited for, which itself began only after the page's layout. Every earlier local "unthrottled" comparison had actually run under the lab's 4x CPU slowdown. A table inside a closed panel measured 0 px at render, so it never became keyboard-scrollable when the panel opened.
- **Rule:** trace what the browser does around your code before moving your own work, because removed work may simply move. Warm up everything a first use needs (shaders, buffers, textures), for every object whatever the view (no culling in the warm-up draw) and on a stage that never draws again. Start the draw the player waits for while the browser lays out, not after. Read the harness's settings before naming a run. Track sizes with a `ResizeObserver` rather than one read at render time.
- **Check (as built in SEA Game):** a browser test fails unless a purchase's first draw runs inside its click and makes no buffer or texture upload; another fails unless a table that widens after render becomes a labelled, focusable region, and stops being one when it narrows.

## 2026-10-20 · A static scene bound recomputed on every update

- **What happened:** G3 CI measured a 3D purchase update at 110.7 ms p95 against the 100 ms budget. Camera framing walked every visible model layer's mesh tree again even though purchase updates only changed visibility and model transforms stayed fixed.
- **Rule:** cache world bounds for immutable scene nodes after first use; union the cached boxes when visibility changes, and invalidate them if transforms or geometry change. Do not raise the interaction budget.
- **Check (as built in SEA Game):** a unit test proves an unchanged layer is measured once; the performance scenario keeps the 100 ms p95 gate.

## 2026-10-16 · Contexts left running, and a readback nobody asked for

- **What happened:** one CI test took 43 s, then 1.4 min, then ran out of its 2 minutes, every step uniformly slow. Playwright closes only the contexts it made itself; tests that opened their own with `browser.newContext()` left them, each with a 3D view still animating, on a single-worker project. On the same run a purchase took 133 ms to appear in 3D (budget 100). Two plausible guesses (a smaller DOM update; the purchase queuing behind an animation frame) were measured on both arms and dropped. A trace then showed the browser, with no graphics card, reading each new WebGL frame back before compositing it, waiting for the whole software draw, and the purchase's draw also redrew the shadow map, doubling it. While checking the fix, a page rebuild was found to close every `<details>` panel the reader had opened.
- **Rule:** close what a test opens in one shared fixture every spec must use. Measure a hypothesis before building on it. In a draw the player waits for, do only what they see now; let the rest follow a frame later. Carry opened panels across a rebuild.
- **Check (as built in SEA Game):** an auto fixture closes every new context, a two-test spec proves the next test finds none, and a unit test fails any spec that bypasses the fixture; a browser test records which draw makes the shadow pass and fails if the purchase's first draw does; a browser test opens every panel on each page with panels and fails if a render closes one.

## 2026-10-16 · An idle page at 100% of a core, measured by a busy instrument

- **What happened:** the first reference-laptop baseline read idle CPU of 100 to 117% of a core on pages doing nothing. The pages were measured under Chrome's emulated 4x CPU slowdown, which works by keeping the renderer busy: a blank page read 81% throttled and 2.3% not. Probing the DevTools protocol also showed that the slowdown is the browser's, last setter wins, and closing the session that set it clears it, so a naive restore would have left later measurements unthrottled.
- **Rule:** before trusting a measurement, measure nothing with the same instrument; the blank page is the harness's floor. Measure idle without emulated slowdown, and restore the slowdown in a `finally`, from a session that stays attached.
- **Check (as built in SEA Game):** a unit test reads the idle window's code and fails unless it unthrottles, restores the throttle in a `finally`, and never detaches that session.

## 2026-10-16 · A thin margin, and a search where a formula would do

- **What happened:** a purchase's 3D update had passed its 100 ms budget at 89 ms; on busier CI runners it measured 116 and 147. A CPU profile of one purchase showed the largest single cost was refitting the camera to the new kit: a numerical search (doubling, then bisection) for each view's distance placed a camera and projected the box about 1 300 times, inside the click.
- **Rule:** a budget met with thin margin will fail on a slow day; profile the operation and remove its largest cost rather than widen the budget. When a quantity has a closed form (here, a camera looking at its target keeps each point's cross offset fixed as it backs away, so the least distance is solved directly), solve it instead of searching on the user's click.
- **Check (as built in SEA Game):** a unit test fails if fitting places any camera, and another holds the fit tight (the worst view at the margin to 10⁻⁶); the performance scenario still gates the update at 100 ms.

## 2026-10-16 · A test that was working, not hung, when its time ran out

- **What happened:** the stills contrast test checked the front, the rear and all 24 turntable frames of a vehicle in one test, three screenshots a frame. On a slow CI runner it timed out at two minutes; the trace showed it on frame 23 of 24, every step merely slow. The same test took 50 to 84 seconds elsewhere in the same run.
- **Rule:** when a test's work grows with what it samples, give it room by splitting, never by raising the timeout: parts that together cover everything, and a guard that fails if the parts stop adding up.
- **Check (as built in SEA Game):** three stills tests per mission of eight frames each (the first also the front and rear), and an assertion that the turntable still has the 24 frames the parts cover.

## 2026-10-16 · Passed at one pose, failed at the next; blank because lazy; slow because shared

- **What happened:** a 3D vehicle passed its contrast check (3:1) at the pose the test happened to shoot, then failed on CI at another: its key light was fixed in the world, so once turned, the faces the camera saw were unlit (1.5:1). On the same run a screenshot of the first screen found its thumbnails blank: they were loaded lazily and a busy runner had not fetched them yet. And a light browser test ran out of its two minutes, uniformly slow at every step, because it shared a two-core runner with a software-rendered 3D test.
- **Rule:** a check samples every angle, view and frame the user can reach, never one sample. Light the faces the camera sees from the camera (a fill that rides with it), keep the key in the world for shadows. Load at once whatever the first screen shows; lazy loading is for what needs scrolling. Run heavy tests one at a time in their own group, after the light ones, instead of raising a timeout.
- **Check (as built in SEA Game):** the per-mission 3D contrast test turns the vehicle through all 16 turntable steps and requires 3:1 at each; the stills test covers front, rear and every turntable frame; the chooser test fails a lazy first-screen image and waits until each is complete; a unit test reads the Playwright configuration and fails unless each engine's heavy specs run in their own one-worker project after the light ones.

## 2026-10-14 · A stage in plain view that never drew; a contrast check blind to dark pixels

- **What happened:** under a loaded local test run, Firefox showed an empty 3D stage. A temporary build that exposed the stage's state showed that the WebGL context was live and the canvas was on screen, but the stage's IntersectionObserver had last reported "not visible" (it first saw the canvas before it was on the page) and never reported again. The stage had drawn once in a minute. Separately, a reviewer showed that two contrast oracles were blind to dark pixels: one took only pixels brighter than the background, and the next took only pixels that differ from it. A vehicle mostly as dark as its stage passed both.
- **Rule:** when a view re-attaches a canvas, re-ask the browser for its visibility; never let a single missed report stop drawing for good. A test of a canvas waits for the renderer's draw, not for "ready". Find what a contrast check measures without using brightness: shoot on black and on white, and the pixels that stay the same are the subject.
- **Check (as built in SEA Game):** a browser test replaces IntersectionObserver with one that reports only once per observation, and the stage must still draw; the per-mission contrast test measures the silhouette from the black-and-white shots, waits for the stage's `sea-draw`, and holds the 3D vehicle to 3:1.

## 2026-10-14 · An unchanged attribute that restyled the page; a restore that was not one

- **What happened:** a purchase's 3D update ran over budget on CI. Splitting its timing into phases (input to handled, to draw start, the draw, to paint) and profiling one purchase showed the cause: every command wrote the page's `lang` attribute, unchanged. Writing an attribute on the document root restyles the whole page, even with the same value; with the focused button just replaced, it forced a full style and layout inside the command and slowed the next one. On the same run, Firefox on a software renderer announced a restored WebGL context while it was still lost, then restored it later without any event.
- **Rule:** write to the document root only what changed. Split a slow timing into its phases before guessing at a fix. Trust an object's own state over the events that report it: ignore a "restored" event while the context still says lost, and while lost, check the state now and then and act on a silent return.
- **Check (as built in SEA Game):** a helper writes the language and title only when they differ; the performance scenario reports the 3D update's phases beside the gated total; the context-loss browser test covers an early announcement (nothing may draw) and a silent restore (the next purchase must still draw).

## 2026-10-13 · Green branch, red main

- **What happened:** after two green CI runs, a small docs-only commit was added and the pull request merged straight away. The generated codebase document embeds every doc, so it went stale; CI on `main` failed and the Pages deploy was skipped, leaving the old site live.
- **Rule:** every commit, docs-only included, regenerates what is generated from it and runs the fast tests; merge only the head whose own CI is green. Let the host enforce it: require the CI checks on the main branch, administrators included.
- **Check (as built in SEA Game):** the codebase test fails any stale generated document; branch protection on `main` requires both CI checks on the up-to-date head, administrators included (set with the owner's permission).

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
