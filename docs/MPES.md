# SEA Game: Clean-Room Rebuild Specification (MPES)

| Field | Value |
|---|---|
| Document | Master Product and Engineering Specification (MPES) for the clean-room rebuild of **Systems Engineering Awareness (SEA Game)** |
| Version | 2.1.0 |
| Date | 2026-10-09 (America/Toronto) |
| Status | **ACCEPTED**. Owner delegated all remaining decisions and gates to the implementing agent on 2026-10-09 (§22) |
| Supersedes | MPES 1.5.2 and every earlier handover, ledger, prompt and evidence packet for implementation purposes |
| Owner | Repository owner (`shfqrkhn`) |
| Product acceptance | **OPEN, 0 of 3 release passes** (§21) |

This document is self-sufficient. A competent developer or AI agent must be able to build, test, release, operate and retire the game from this file alone, without the old repository, any chat history, Omni or the Universal Single-HTML App Generator prompt. Where this document borrows a principle from those sources, the principle is restated here in native form and is binding through this document.

Normative words: **MUST** / **MUST NOT** are hard requirements; **SHOULD** is the default unless a recorded reason justifies otherwise; **MAY** is optional.

---

## 0. How to use this document

1. Read §1 to §4 to understand the outcome, constraints and architecture.
2. Treat §6 (rules) and Appendix A (canonical data) as the game's law. They are complete. Do not infer rules from artwork, models or old code.
3. Build in the milestone order of §17. Each milestone has exit criteria; do not start the next milestone's work while the current one's criteria are unmet, except for independent research or tooling.
4. Record progress in `docs/HANDOVER.md` (§19). Keep this MPES for requirements only; do not paste results, hashes or CI run numbers into it.
5. Any change to a rule, a constraint or acceptance scope requires a version bump of this document and a line in §24 (Change log).

---

## 1. Outcome (the real problem, "Y")

### 1.1 What the game is for

SEA Game supports a **facilitator-led classroom exercise** that teaches systems-engineering awareness through a vehicle-acquisition auction. Teams of learners:

1. receive a mission (one of six vehicle roles) with minimum capability requirements;
2. plan which capabilities they need and what each is worth to them;
3. compete in a manual auction for 70 component and process cards over seven rounds;
4. reconcile what they actually bought into a vehicle build;
5. submit a final bid (purchase cost plus profit);
6. are judged on mission compliance and **value for money** (lowest bid per score point);
7. debrief on requirements gaps, trade-offs, integration effects (negative effects of some parts) and how their plan changed.

### 1.2 Success criteria

The product succeeds when, in a real classroom session:

- **S1** A facilitator who has read the quick-start guide can run all eight phases for 2 to 10 teams without developer help.
- **S2** Each team can see, at every moment, its mission's minimums, its current totals, the gap to each minimum and what it has spent.
- **S3** Learners can explain, at debrief, why their build did or did not comply and how their spending compares with value delivered. (Measured by the classroom pilot, §16.6.)
- **S4** No authoritative result is lost through a browser crash, reload or device swap when the documented backup procedure is followed.
- **S5** Students never see another team's private plan or the hidden order of future lots through the application.
- **S6** The game runs from one HTML file with no network.

### 1.3 Problem-versus-mechanism decisions (XY analysis)

The previous project often optimised the mechanism ("X") instead of the outcome ("Y"). The following decisions are binding for the rebuild:

| Mechanism (X) | Verdict | Decision for the rebuild |
|---|---|---|
| One offline HTML file containing both roles | FIT | Keep. |
| Manual classroom handoffs; no backend, sync or accounts | FIT | Keep. |
| Exact integer-cents money, canonical card data, independent rules oracle | FIT | Keep; re-implement cleanly (§6, Appendix A). |
| Schema-3 saves and backup envelope | FIT | Keep import compatibility (§8). |
| Entire interface (menus, forms, text editing) drawn inside a WebGL canvas | MISFRAMED | **Replace** with semantic HTML/CSS for every task. Subject to user confirmation, decision D-01 (§22). |
| Mechanically realistic vehicle meshes (brake rotors, wipers, fasteners) | PROXY | **Replace** with a stylised, readable 3D "vehicle bay" that shows how each purchase changes the vehicle (§10). |
| Very large assurance apparatus (dozens of bespoke test scripts, dense evidence prose) | PARTIAL | Keep the rigour, cut the volume: standard test runners, plain-language handover, one requirement-to-test map (§15, §16). |
| Classroom pilot with real learners | MISSING | **Add early** (milestone M4), before visual polish. |

---

## 2. Scope

### 2.1 In scope

- Instructor console: setup, practice, planning oversight, live auction control, authoritative ledger, private submission entry, debrief and award.
- Student companion: join, practice, private planning, per-lot tracking, own-purchase recording, build reconciliation, profit calculation, debrief view.
- English and French throughout, switchable at any time without losing input.
- Local persistence per browser tab, explicit JSON backup export/import, recovery from interruption.
- A 3D vehicle bay that visualises each team's (or the selected) build.
- 77 print-quality illustrations (70 cards, 6 vehicles, 1 practice card), embedded.
- Build, test and release tooling; classroom quick-start and recovery guides (EN/FR).

### 2.2 Out of scope (non-goals)

- Automatic synchronisation between instructor and students, networking, multiplayer servers, accounts or authentication.
- Telemetry, analytics, crash reporting to any server.
- Enforcing a total team budget (willingness-to-pay is advisory, §6.7).
- Any real, operational, classified or manufacturer-certified equipment data. All values are instructional.
- Physics simulation, driving, combat or animation beyond what explains the build.
- Alternative rule sets, deck editors, or rule balancing. Rules are frozen (§6); changing them needs a new MPES version.
- Native mobile/desktop app packaging.

---

## 3. Hard constraints

| ID | Constraint |
|---|---|
| C-01 | The runtime distribution is **exactly one file**, `dist/index.html`, containing all code, styles, data, fonts (if any), illustrations and 3D assets. |
| C-02 | **STRICT_OFFLINE**: every supported journey works when the file is opened via `file://` with networking disabled. The runtime makes **no** network request of any kind (HTTP(S), WebSocket, WebRTC, beacons, prefetch, remote fonts/images). |
| C-03 | Both roles (Instructor, Student) and both languages (EN, FR) live in the same file. One role runs per browser tab. |
| C-04 | No backend, synchronisation, account, secret or credential. |
| C-05 | Rules and canonical data are exactly §6 and Appendix A. No silent changes. |
| C-06 | Money is held as non-negative safe integers of **cents**. No floating-point money anywhere. |
| C-07 | Student private state (plans, risks, willingness-to-pay, notes, profit drafts) never leaves the student's tab except in that student's own explicit backup file. |
| C-08 | Hidden future lot order (market seed and market) never appears in the student role, student exports or any UI shown to students. |
| C-09 | Backups from the previous application (schema 3, envelope v1) **MUST** import successfully when valid (§8.6). |
| C-10 | Original code is MIT licensed. Every bundled third-party component's licence and notices are embedded in the runtime and kept in the repository. |
| C-11 | No `eval`, `new Function`, string-to-code, or `innerHTML`/`insertAdjacentHTML` with any non-constant content. |
| C-12 | No native `alert`/`confirm`/`prompt` dialogs. |
| C-13 | All new work stays inside the project root `D:\VSCode\SEA-Game` (repository root). Disposable outputs go to the git-ignored `.artifacts/` directory there. Nothing is deleted permanently: unwanted files move to `_archive/recycle/<date>/`. No extra checkouts, worktrees, external archives or temporary folders elsewhere. |
| C-14 | No continuously running project processes (watchers, dev servers, schedulers, background loggers) unless a specific task needs one and it is stopped afterwards. |
| C-15 | Generated files (`dist/index.html`) are never edited by hand. |

---

## 4. Users, environment and support matrix

### 4.1 Roles

| Role | Who | Device | Sees |
|---|---|---|---|
| Instructor | Facilitator; usually projects their screen | Laptop/desktop, 1280×720 or larger, keyboard and mouse | Everything authoritative: market (current lot only on projected views), ledger, all teams' public results; private submission entry only in private mode |
| Student | One device per team, 2–10 teams | Laptop, Chromebook, tablet or phone | Own team only: mission, plan, purchases, totals, notes, profit |

### 4.2 Projection safety

The instructor screen is assumed to be projected. Therefore:

- The instructor UI **MUST NOT** display future lots beyond what the reveal mode permits (§6.5) on the main auction view.
- Private submission entry (§6.11) is a separate, explicit mode with a visible "Private – do not project" banner; leaving it requires an action.

### 4.3 Provisional support matrix

Declared at M0 and frozen at M6. Initial proposal:

| Tier | Platform | Delivery |
|---|---|---|
| Tier 1 (fully tested) | Windows 11: current Chrome, Edge, Firefox | `file://` and HTTPS |
| Tier 1 | ChromeOS: current Chrome | HTTPS (and `file://` where the device allows) |
| Tier 1 | iPadOS: current Safari (student role) | HTTPS |
| Tier 2 (smoke-tested) | macOS: current Safari, Chrome | `file://` and HTTPS |
| Tier 2 | Android: current Chrome; iOS: current Safari (student role on phones) | HTTPS |

HTTPS delivery (for example GitHub Pages) serves the identical file; the app still makes no network requests after loading.

---

## 5. Architecture

### 5.1 Profile and class

- **Runtime profile:** STRICT_OFFLINE (C-02).
- **Delivery class:** Engineered. It is justified by two roles, money, an audit ledger, persistent state, bilingual content and 3D rendering. Keep it **lean**: standard tools, few files and no bespoke frameworks.

### 5.2 Layering

```
source/
  domain/        Pure TypeScript game rules. No DOM, no time, no randomness, no storage.
  app/           Role controllers: apply domain commands, own state, call ports.
  ports/         Clock, entropy, storage, file download/upload, renderer. Thin adapters.
  ui/            Semantic HTML/CSS views per role and phase; i18n; dialogs.
  bay/           Three.js vehicle bay (optional enhancement; §10).
  content/       Canonical data (Appendix A), strings EN/FR, illustration manifest.
  build/         Build script that inlines everything into dist/index.html.
tests/
  unit/          Domain and app tests (Vitest).
  e2e/           Browser journeys against the built file (Playwright).
  fixtures/      Schema-3 backups, oracle tables, seeds.
```

Rules:

- **R-ARCH-1** `domain/` is pure: given the same inputs it returns the same outputs and performs no effects. Time and entropy enter only as arguments.
- **R-ARCH-2** Every state change is a **command** that validates the whole current state, computes the complete next state, and only then lets the controller commit, save and render. A rejected command changes nothing.
- **R-ARCH-3** One state owner per role. The UI renders from state; it never holds the only copy of a value.
- **R-ARCH-4** One renderer for the 3D bay, created lazily, disposed on role exit. It never owns or changes game state.
- **R-ARCH-5** All source is TypeScript under `strict`, `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`. There is no unchecked JavaScript source.
- **R-ARCH-6** Text entered by users is set with `textContent` or `value`, never parsed as HTML (C-11).

### 5.3 Role selection

- With no query string, the file shows a bilingual chooser: **Instructor** or **Student**, plus a language toggle.
- `?role=instructor` and `?role=student` open a role directly. Any other value shows the chooser with a notice.
- Changing role is a deliberate action ("Change role") that reloads the page. It never resets either role's saved state.
- Only the selected role's controller starts. The other role's code may be present but inert.

### 5.4 Tooling (pin exact versions in the lockfile at M0)

| Purpose | Tool | Notes |
|---|---|---|
| Runtime | Node.js LTS (24.x at time of writing) | CI also runs the previous LTS. |
| Types | TypeScript, `tsc --noEmit` | Strict flags of R-ARCH-5. |
| Bundling | esbuild | Bundle to one IIFE script, then inline into the HTML template with a deterministic build script. |
| Unit tests | Vitest | Domain, app and port tests. |
| Property tests | fast-check (optional) | Money, ledger replay and invariants. |
| Browser tests | Playwright (Chromium, Firefox, WebKit) | Run against `dist/index.html` over `file://`. |
| Accessibility scan | axe-core via Playwright | Automated part only; manual checks still needed (§12). |
| 3D | three.js (single runtime dependency) | Tree-shaken import; embedded. |

A different tool is acceptable only if it is qualified in M1 against the same tasks, and the reason is recorded in the handover.

### 5.5 Build

- `npm ci` then `npm run build` produces `dist/index.html` and nothing else in `dist/`.
- Builds are **deterministic**. The same inputs give byte-identical output on Windows and Linux. Line endings are LF, enforced by `.gitattributes`.
- The build computes SHA-256 hashes for the inline script and style and writes the Content-Security-Policy meta tag (§13.1).
- The build fails if a required licence notice, illustration, string key or card is missing.
- `npm run build -- --check` rebuilds in memory and fails if the committed `dist/index.html` differs.

---

## 6. Game rules (canonical)

All rules in this section are normative and complete. Card data is in Appendix A.

### 6.1 Phases

Exactly eight phases, in this order:

`setup → practice → planning → auction → build → submit → debrief → closed`

- A transition moves exactly one step forward. Restoring the same phase (for example after reload) is allowed. There are no backward transitions. Starting a new session is a deliberate reset, not a backward transition.
- Instructor guards:
  - `planning → auction` requires every team to have a mission. On transition all missions lock (`vehiclesLocked = true`, each team's `lockedMission = mission`).
  - `auction → build` requires the 70th lot (round 7, lot 10) to have an effective outcome.
- Student guards:
  - `planning → auction` requires a selected mission and an explicit vehicle confirmation. On transition the mission locks and the plan text is copied to `planBaseline`.
  - The student's own phase advances by the student's action after the instructor announces it. The student's phase never changes the instructor.

### 6.2 Session and teams

- 2 to 10 teams, numbered 1..N.
- Session code format: `SEA3-T<N>-<16 uppercase hex>`, for example `SEA3-T4-0A1B2C3D4E5F6071`. Parsing is case-insensitive. Codes are stored uppercase. Input over 32 characters is rejected.
- The code identifies the session and team count. It is **not** authentication and does not contain or derive the market seed.
- The instructor generates a 16-hex session token and a separate 32-hex market seed from cryptographic randomness (`crypto.getRandomValues`), passed to the domain as arguments.

### 6.3 Deck and market

- 70 distinct cards: 7 each of CAPACITY (CAP-A..G), MOBILITY (MOB-A..G), FIREPOWER (FP-A..G), PROTECTION (PRO-A..G), COMMS (COM-A..G), SA (SA-A..G), ACCESSORIES (ACC-A..G), and 21 SE_PROCESS cards (SE-A..U).
- 7 rounds × 10 lots. Every round uses the same slot pattern:

| Lot | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Category | CAPACITY | MOBILITY | FIREPOWER | PROTECTION | COMMS | SA | ACCESSORIES | SE_PROCESS | SE_PROCESS | SE_PROCESS |

- Each card appears exactly once in the market. Its slot instance ID is `R<round>-L<lot>-<cardId>`, for example `R3-L8-SE-K`.
- **Deal algorithm (MUST be reproduced bit-exactly for save compatibility).** Given seed string `S` (32 uppercase hex characters):
  1. Seed text `T = "MARKET|" + S`.
  2. Hash: `h = 1779033703 XOR len(T)`. For each UTF-16 code unit `c` of `T`: `h = imul(h XOR c, 3432918353)`; `h = (h << 13) | (h >>> 19)`.
  3. Generator `next()`: `h = imul(h XOR (h >>> 16), 2246822507)`; `h = imul(h XOR (h >>> 13), 3266489909)`; return `(h XOR (h >>> 16)) >>> 0`.
  4. Initialise `a, b, c, d = next(), next(), next(), next()`.
  5. Random `rand()` (sfc32 style, all 32-bit signed arithmetic with `|0`): `t = ((a + b) | 0) + d | 0`; `d = d + 1 | 0`; `a = b XOR (b >>> 9)`; `b = c + (c << 3) | 0`; `c = (c << 21) | (c >>> 11)`; `c = c + t | 0`; return `(t >>> 0) / 4294967296`.
  6. For each category in first-appearance order of the slot pattern (CAPACITY, MOBILITY, FIREPOWER, PROTECTION, COMMS, SA, ACCESSORIES, SE_PROCESS): take that category's cards in Appendix A order and Fisher–Yates shuffle them. For `i` from `len−1` down to `1`: `j = floor(rand() × (i + 1))`; swap `i` and `j`.
  7. Fill round 1..7, lot 1..10 by taking the next unused card from the shuffled pool of that slot's category.
- Test vectors are in Appendix B. They are mandatory unit tests.

### 6.4 Money

- Unit: integer cents, `0 ≤ value ≤ Number.MAX_SAFE_INTEGER`. Reject NaN, Infinity, negatives, fractions and anything out of range.
- Bid increment: **5,000,000 cents ($50,000)**.
- A purchase price is valid only if `price ≥ start` and `(price − start)` is a whole multiple of the increment.
- Parsing:
  - Amount fields: optional whitespace, digits, optional `.` or `,` followed by 1 or 2 digits. At most 20 characters. No signs, no thousands separators, no exponent.
  - Whole-dollar fields (paid price, willingness-to-pay, scratch WTP): digits only, at most 17 characters.
  - Percent fields: same grammar as amounts. Value is in hundredths of a percent (basis points). Maximum is 10,000.00%.
- Percent-to-profit: `profit = round_half_up(cost × bps / 10,000)` in integer arithmetic: `(cost × bps + 5,000) / 10,000` with integer division.
- Profit-to-percent display (when switching mode): `bps = round_half_up(profit × 10,000 / cost)`; shown with 2 decimals. If cost is 0 and profit is not 0, switching to percent is refused with a clear message.
- Every sum (cost + price, cost + profit) uses checked big-integer arithmetic and is rejected if it exceeds the safe range.
- Display: `$1,234,567.89` (EN) and `1 234 567,89 $` (FR). Cents are shown only when not zero, except in profit and award fields, which always show two decimals.

### 6.5 Auction

**Reveal modes** (chosen at setup):

| Mode | Current lot visible | Earlier lots in this session | Later lots |
|---|---|---|---|
| ROUND | Yes | Yes | All lots are visible on the instructor's market view |
| JIT (just in time) | Yes, automatically when reached | Yes | No |
| MANUAL | Only after the instructor selects Reveal | Yes | No |

A lot once revealed stays visible. The set of visible lots never shrinks. Reload, void and language change never reveal anything new.

**Timing modes:** TIMED (bid window 10–120 s, default 30 s) or UNTIMED.

**Per-lot sequence (instructor):**

1. *Reveal* (MANUAL mode only, when not yet revealed).
2. *Open bidding*. In TIMED mode a deadline is set to now + the bid window.
3. *Accept bid from team T*. The offer is the start price for the first bid, otherwise the current bid + $50,000. The command carries the amount shown on screen, so a repeated click cannot raise it twice ("stale" if it differs). Rejected when:
   - bidding is paused;
   - the timed window has expired;
   - T is already the leader;
   - T already has 2 effective wins this round;
   - T's cost + offer + T's recorded profit would overflow.
4. *Pause* / *Resume*. Pause stores the remaining time; resume sets a new deadline. Pause and resume are separate commands, so a double press never toggles back.
5. *Extend*: adds 30 s (TIMED only). This also works after expiry.
6. *Commit outcome*. Allowed while bidding is open, not paused and no effective outcome exists. Expiry does **not** commit automatically.
   - **SALE** to the leader at the current bid, or a **corrected SALE** to another team and/or price. A correction requires a reason (1–120 characters, not blank). The price must be valid (§6.4), and the team must have fewer than 2 wins this round and fewer than 14 total.
   - **UNSOLD**.
7. *Void* the current lot's effective outcome. A reason is required. Void appends a VOID entry referencing the voided entry. A voided SALE removes that purchase from the team. A replacement outcome must be committed before advancing.
8. *Advance* to the next lot. Allowed only when the current lot has an effective outcome. After lot 70, advance moves to the `build` phase.

**Win limits:** at most **2** effective wins per team per round, and therefore at most **14** per game.

**Ledger:**

- Append-only, sequence numbers 1, 2, 3, … with no gaps.
- Entry kinds:
  - `SALE {seq, round, lot, card, team, price, reason?}`
  - `UNSOLD {seq, round, lot, card, team: null, price: null}`
  - `VOID {seq, round, lot, card, team, price, ref, reason}`. `ref` is the voided entry's seq; `team` and `price` copy it.
- Each (round, lot) has at most one *effective* entry: the latest SALE or UNSOLD not followed by a VOID referencing it.
- Capacity: **210 entries**. A command is refused if, after it, the remaining lots could not each still receive one outcome within 210. In other words: `length + 1 + remainingLots (+1 more for VOID) ≤ 210`.
- Team inventories, costs and win counts are always **derivable by replaying the ledger**. Recovery rebuilds them that way. Live commands require the stored derived values to match the replay and reject otherwise.

### 6.6 Capabilities and missions

- Capability keys: `CAP` (persons), `MOB` (km/h), `FP` (points), `PRO` (points), `COM` (km), `SA` (ways), `REC` (ways), `MC` (ways). Units are instructional only.
- A team's totals are the plain sum of the signed effects of its effective purchases. Negative effects (penalties) count. There is no clamping.
- Mission minimums (all must be met for compliance):

| Mission ID | EN / FR | CAP | MOB | FP | PRO | COM | SA | Special |
|---|---|---|---|---|---|---|---|---|
| COMBAT | Combat / Combat | 4 | 80 | 10 | 10 | 25 | 1 | |
| RECCE | RECCE / Reconnaissance | 3 | 120 | 4 | 2 | 75 | 5 | |
| TROOP | Troop Carrier / Transport de troupes | 10 | 100 | 2 | 4 | 25 | 2 | |
| COMMAND | Command Post / Poste de commandement | 5 | 60 | 2 | 4 | 125 | 4 | |
| RECOVERY | Recovery / Dépannage | 3 | 80 | 4 | 6 | 75 | 2 | REC ≥ 3 |
| MINE | Mine Clearing / Déminage | 4 | 40 | 8 | 10 | 25 | 1 | MC ≥ 3 |

### 6.7 Score

Let `p(x) = max(x, 0)` and `floor` be integer division.

| Mission | Score |
|---|---|
| COMBAT | `20 × floor(p(MOB − 80) / 10) + 20 × p(FP − 10)` |
| RECCE | `20 × floor(p(COM − 75) / 25) + 20 × p(SA − 5)` |
| TROOP | `20 × p(CAP − 10) + 20 × p(PRO − 4)` |
| COMMAND | `20 × p(CAP − 5) + 20 × floor(p(COM − 125) / 25)` |
| RECOVERY | `20 × p(PRO − 6) + 40 × p(REC − 3)` |
| MINE | `20 × p(SA − 1) + 40 × p(MC − 3)` |

Score is computed regardless of compliance. Compliance is a separate check.

**Willingness-to-pay (WTP)** is advisory. Default `maxWtpCents = 85,000,000` ($850,000) and default draft profit 25,000,000 cents are UI defaults only, **not** budgets. No total spending cap exists.

### 6.8 Practice

- Uses the training card **TRAIN-CAP** ("Training capacity" / "Capacité de formation").
- Instructor steps: Reveal → Open → Accept Team 1 → Close; then Reset or "Open planning".
- Student steps: Record practice win → (Reset) → Open planning.
- Practice never touches purchases, totals, win counts, the market or the ledger. All practice flags are cleared on leaving practice.

### 6.9 Student auction tracking

The student app does not know the market. During the auction the student:

- sets its current position (round, lot) to match the announcement. It may move backward or skip, with no effect on the instructor;
- loads the announced card by ID. The ID must belong to the category of that lot slot;
- keeps per-lot private notes (up to 600 characters) and a whole-dollar WTP (`scratch["<round>-<lot>"]`);
- **records a win** only after the instructor confirms the winner and price. This adds the purchase (same validation as §6.4/§6.5) and advances one position;
- otherwise selects **Not ours / advance**;
- may **finish the auction early**, after a confirmation bound to the exact current state. This moves the student to `build`.

### 6.10 Build reconciliation (student)

- The student compares its purchases with the instructor's announced ledger.
- It may **remove** a mistaken local entry or **add** a missing confirmed purchase (card ID, round, lot and whole-dollar price, all validated). These are transcription corrections, not trades.
- When reconciled, the student proceeds to `submit`.

### 6.11 Submission

- Student: choose profit mode AMOUNT or PERCENT (of purchase cost), enter a value, see `bid = cost + profit`, then finish. The student's calculation is private and **not** an official submission.
- Instructor: opens submissions (`build → submit`), then enters **private entry mode**. For each team it records the official profit (amount) and a submitted flag. Closing submissions while some teams are not submitted requires an explicit confirmation naming them.

### 6.12 Award

- A team is **eligible** if it is submitted, compliant and has score > 0.
- Ranking among eligible teams:
  1. lower exact `bid / score` ratio first. Compare by cross-multiplication `bidA × scoreB` vs `bidB × scoreA` in big-integer arithmetic; no rounding;
  2. if the ratios are equal, the lower bid wins;
  3. then the higher score.
- **Winners** are every team whose bid and score both equal the top team's. Fully equal teams share first place.
- No eligible team means no award, stated explicitly.
- Display cost-per-point rounded to cents (`$18,970.59`). Ranking always uses exact values.

### 6.13 Debrief and close

- The debrief shows, per team: mission, compliance with each shortfall, totals vs minimums, score, cost, profit, bid, cost-per-point, rank and award.
- It also shows the class-level comparison and, for the student, its own plan baseline vs outcome.
- `debrief → closed` is deliberate. A closed room is read-only except for export and starting a new session.

### 6.14 Worked example (mandatory oracle test)

Team 1, mission TROOP, with effective purchases totalling CAP 18, MOB 180, FP 4, PRO 13, COM 50, SA 5, REC 0, MC 0 at cost $6,350,000:

- Compliant? TROOP requires CAP ≥ 10, MOB ≥ 100, FP ≥ 2, PRO ≥ 4, COM ≥ 25, SA ≥ 2. All are met, so **yes**.
- Score = 20 × (18 − 10) + 20 × (13 − 4) = 160 + 180 = **340**.
- Profit $100,000.25 gives bid **$6,450,000.25**, and cost-per-point displays as **$18,970.59**.

---

## 7. Interface and experience

### 7.1 Principles

- **Task-first.** Each screen answers: *where are we, what is the next valid action, what has changed?* The next valid action is always the most prominent control. Invalid actions are hidden or disabled with a reason.
- **Progressive depth.** *Immediate*: phase, position, next action. *Working*: the controls and data for the current task. *Deep*: rules, history, settings, recovery, notices.
- **Minimal clicks** for the live auction: one keystroke or click per bid acceptance; keyboard shortcuts shown on screen.
- **Plain HTML/CSS** for all controls and text, with native form elements, `<dialog>` for confirmations, and one `aria-live` status region per view.
- **Content-native visual design.** Typography, alignment and subject imagery come first. Avoid decorative KPI cards, gradients, glass effects, pill overload and identical card grids.
- **One design system** shared by both roles: colour tokens, type scale, spacing, focus style, and light/dark that follows the system with a manual override.

### 7.2 Instructor console

| Phase | Primary view | Key elements |
|---|---|---|
| setup | Session form | Team count, reveal mode, timing and bid window; Generate session; large session code display for projection |
| practice | Practice lot | Training card, the four practice steps as one stepper, reset |
| planning | Team board | Teams × mission selector, missing-mission warnings, Start auction (disabled until all set) |
| auction | Live lot | Round/lot, card illustration, title, start price, effects; next offer; team bid buttons 1..N (disabled with reason when at limit or leader); timer with pause/resume/extend; commit SALE/UNSOLD; void; advance. Side panel: compact ledger for this round, team win counts |
| build | Results table | All teams' purchases, totals, compliance; Open submissions |
| submit | Private entry | "Private – do not project" banner; per-team profit and submitted toggle; Close submissions |
| debrief | Award view | Ranking table, award announcement, per-team gap analysis, class comparison chart (accessible table equivalent) |
| closed | Summary | Read-only results, export, new session |

The full ledger is always reachable: grouped by round, each entry showing round, lot, card ID, title, result, team, price and reason. The newest entry comes first, with append order preserved.

### 7.3 Student companion

| Phase | Primary view | Key elements |
|---|---|---|
| setup | Join | Session code, team number, mission; Start companion |
| practice | Practice | Training card; Record practice win |
| planning | Mission planner | Mission minimums; capability catalogue showing what each card category contributes; plan and risks text (≤ 1,200 characters each); max WTP; confirm vehicle; "Instructor started auction" |
| auction | Lot tracker | Position selector; load card by ID; card details; **gap meter** per capability (current vs minimum); private notes/WTP; Record confirmed win (paid price); Not ours / advance; Finish early |
| build | Reconcile | Purchases list with remove; add missing purchase; totals vs minimums; compliance; Reconciliation complete |
| submit | Bid | Profit mode, value, live bid and cost-per-point preview; Finish |
| debrief | Reflection | Outcome vs plan baseline, shortfalls, spending by category |
| closed | Summary | Read-only, export |

### 7.4 Teaching aids (serve outcome Y)

- **Gap meter**: for each required capability, bars show the current value, the minimum and the shortfall. It updates on every purchase change.
- **Card impact preview**: before a win is recorded, shows how the card would change totals, compliance and score.
- **Spend summary**: spending by category and cost per score point.
- **Plan vs outcome**: shown at debrief.
- Every visual has an equivalent text or table form (§12).

### 7.5 Confirmations and destructive actions

Each of these requires an in-page `<dialog>` confirmation, localised, keyboard-operable, stating the exact effect:

- new session or reset;
- import (replace current state);
- corrected sale;
- unsold while a leader exists;
- void;
- closing submissions with unsubmitted teams;
- removing a purchase;
- finishing the auction early;
- closing the room.

A confirmation is bound to the state it was opened for. If state changed meanwhile, the confirmed action is refused and the user is told why.

### 7.6 Language

- EN/FR toggle in every view. Switching keeps all input, focus position where possible, and state.
- All strings are in `content/strings.<lang>.json`. The build fails on a missing key in either language.
- French typography: non-breaking spaces before `: ; ! ?`, proper accents and `’`. Numbers and currency follow §6.4.
- Card and mission titles come from Appendix A.

---

## 8. State, persistence and recovery

### 8.1 Principles

- State is saved after every committed command, only if it changed. Storage writes happen only then; there are no timers.
- Storage: `sessionStorage` (per tab), accessed through a storage port that tolerates absence, exceptions and quota errors. If storage fails, play continues in memory, a persistent notice explains the risk and urges export.
- The availability probe runs once per load and restores any prior value of its probe key.
- Downloaded JSON backups are the portable recovery mechanism. Browser storage alone is never relied upon.

### 8.2 Storage keys

| Role | Key |
|---|---|
| Instructor | `SEA_INSTRUCTOR_V300` |
| Student | `SEA_STUDENT_V300` |

### 8.3 Instructor state (schema 3)

Exactly these keys (`finalCallAnnounced` optional):

| Key | Type / rule |
|---|---|
| `schema` | `3` |
| `phase` | one of §6.1 |
| `lang` | `"en"` or `"fr"` |
| `sessionCode` | §6.2 (null only in the untouched setup shell) |
| `teamCount` | 2..10, equals the code's N |
| `marketSeed` | 32 uppercase hex |
| `market` | 7 × 10 array of cards `{id, title{en,fr}, start, e, cat, round, lot, instance}`. Must equal `deal(marketSeed)` exactly. |
| `teams` | N team objects (§8.5) |
| `vehiclesLocked` | boolean; true iff phase is auction or later |
| `revealMode` | `ROUND`, `JIT` or `MANUAL` |
| `timingMode` | `TIMED` or `UNTIMED` |
| `bidSeconds` | 10..120 |
| `round`, `lot` | 0-based current position, 0..6 and 0..9 |
| `revealed`, `open` | booleans |
| `deadline` | epoch ms or null; required when open and TIMED |
| `pausedRemaining` | ms ≥ 0 or null |
| `leader` | team ID or null |
| `currentBid` | valid price or null; null iff leader is null |
| `ledger` | §6.5 entries, ≤ 210 |
| `seq` | equals the ledger length |
| `practice` | `{revealed, open, leader, closed}` booleans; all false outside practice |
| `privateEntry` | always saved as `false` (private mode never restores open) |
| `resultDraft` | null or `{team, price, reason}` strings (≤ 10, 20, 120 chars) |
| `finalCallAnnounced` | optional boolean |

Consistency rules (checked on load and import):

- Every lot before the current position has an effective outcome while in auction or later.
- All 70 lots have one from `build` on.
- No outcome exists beyond the current position during the auction.
- If not open during the auction, `leader` and `currentBid` match the current lot's effective SALE, or are null.

### 8.4 Student state (schema 3)

| Key | Type / rule |
|---|---|
| `schema`, `phase`, `lang`, `sessionCode`, `teamCount`, `round`, `lot` | as instructor |
| `teamId` | 1..N |
| `team` | own team object only (§8.5) |
| `lockedMission` | null before auction; equals the team mission after |
| `vehicleConfirmed` | boolean |
| `currentCard` | null or a card at the current slot |
| `plan`, `risks` | strings ≤ 1,200 |
| `planBaseline` | null or string ≤ 1,200 |
| `maxWtpCents` | cents |
| `scratch` | ≤ 70 entries, keys `"<1-7>-<1-10>"`, values `{wtp ≤ 20 chars, note ≤ 600 chars}` |
| `profitMode` | `AMOUNT` or `PERCENT` |
| `profitInput` | string ≤ 20 |
| `profitCents` | cents; cost + profit must not overflow |
| `practiceWon` | boolean; true only in practice |
| `vehicleChangeNotice` | boolean |

The student state **MUST NOT** contain `market`, `marketSeed`, `teams`, `ledger`, `privateEntry`, `resultDraft`, `leader` or `currentBid`.

### 8.5 Team object

`{id, mission, lockedMission, totals{CAP,MOB,FP,PRO,COM,SA,REC,MC}, cost, purchases[], purchasesByRound[7], profit, submitted}`

Each purchase is a card object plus `paid`. On load, `purchases` is rebuilt from canonical data (titles, effects, start and category come from Appendix A, never from the file). Totals, cost and per-round counts are recomputed. No duplicate card or slot, at most 2 per round and at most 14 in total.

### 8.6 Backup envelope (version 1)

```json
{
  "format": "SEA-GAME-BACKUP",
  "version": 1,
  "appVersion": "<semver, ≤ 40 chars>",
  "ruleset": "STANDARD",
  "deck": "synthetic-v1",
  "schema": 3,
  "sessionCode": "<code>",
  "role": "INSTRUCTOR" | "STUDENT",
  "state": { ...role state... }
}
```

- Exactly these keys. The role must match the importing role. The session code in the envelope and in the state must agree (case-insensitive) and is normalised to uppercase.
- Limits: the file is refused above 1,500,000 bytes before reading, and the text above 500,000 UTF-16 code units.
- The state is copied passively. Accessors, `toJSON`, non-plain objects, cycles, depth > 32, non-finite numbers and forbidden role keys are all rejected.
- Export uses the same envelope. The file name contains role, session code and a local timestamp. No other team's private data is ever included.

### 8.7 Import and recovery flow

1. Read the file within limits, parse, validate the envelope, validate and rebuild the state.
2. On failure: show a specific localised reason and change nothing.
3. On success: show a summary (role, session, phase, position, purchases) and require confirmation (§7.5). Before replacing, keep the previous state in memory for an **Undo import** available until the next command.
4. An imported instructor state with `open = true` is restored **paused** for review.
5. On startup, saved state that fails validation is not deleted. The app starts empty, shows a notice and offers export of the raw invalid data for support.

### 8.8 Compatibility

- Valid backups produced by previous versions 3.6.0 through 4.1.0-dev.1 (schema 3, envelope v1) **MUST** import, including mixed-case session codes and any JSON key order.
- Fixtures: create at least 10 schema-3 fixtures (both roles, every phase, VOID chains, the maximum ledger, French text with emoji and multiple spaces) at M1, generated by the new domain and **cross-checked** against backups exported from the previous application. The previous application is recoverable from Git history (Appendix C).

---

## 9. Error and degraded states

Each of these has a designed, localised, accessible state. Core play never depends on optional features.

| Condition | Behaviour |
|---|---|
| WebGL unavailable or context lost | The bay shows a static illustration of the vehicle and a text summary; it retries on context restore. No game impact. |
| Storage denied, throwing or full | Persistent warning, play continues in memory, export emphasised. |
| Download blocked | Explain; offer copy-to-clipboard of the backup JSON as a fallback. |
| Invalid, oversized, wrong-role or other-session import | Specific message; no change. |
| Stale confirmation | Refuse; explain what changed. |
| Domain rejection (limit, increment, overflow, phase) | Inline message at the control; no change. |
| Timer expired | Bidding stops; commit or extend remains available. |
| Unsupported browser (missing required APIs) | Clear message listing supported browsers. |

---

## 10. Vehicle bay (3D)

### 10.1 Purpose

Make the build tangible: the selected mission's base vehicle visibly gains or changes parts as purchases are recorded. A learner can tell at a glance "we have a weapon station, light armour and a radio mast". The bay is a teaching aid, not the interface.

### 10.2 Requirements

- Six base vehicles, one per mission, sharing a consistent stylised art direction: clean low-to-medium polygon forms, flat or lightly shaded materials, clear silhouettes and readable at 320 px wide.
- Each card category maps to visible attachment points (CAPACITY → hull modules; MOBILITY → running gear/powerpack; FIREPOWER → mounts; PROTECTION → armour panels; COMMS → antennas; SA → sensor masts/optics; ACCESSORIES → kits/trailer/winch/plough; SE_PROCESS → no geometry, shown as process badges beside the vehicle).
- Each of the 70 cards has a recognisable but simple part or a defined variant of a category part. Parts fit their mount points without visible intersection.
- Controls: orbit, zoom and reset view by pointer, touch and keyboard. "Exploded" toggle separates parts with labels. There is no free camera.
- Rendering on demand only: render when state, view or size changes. There is no continuous loop.
- Fixed lighting, one shadow-casting light or none. Shadows must be correct when enabled.
- Labels and a text list of installed parts are always available outside the canvas.
- The canvas has `role="img"` with an accessible name summarising the build.

### 10.3 Budgets (provisional; measured at M5)

| Metric | Budget |
|---|---|
| Triangles per full vehicle | ≤ 60,000 |
| Draw calls per view | ≤ 150 |
| Bay first render after open | ≤ 500 ms on the Tier 1 reference laptop |
| Memory added by the bay | ≤ 150 MB |
| Bay code + geometry in HTML | ≤ 1.5 MB |

Geometry is generated procedurally in code or embedded as compact glTF/binary converted to base64 at build. No external model fetch.

---

## 11. Content and illustrations

- 77 illustrations: 70 cards (Appendix A IDs), 6 vehicles (`combat`, `recce`, `troop-carrier`, `command-post`, `recovery`, `mine-clearing`) and 1 practice card (`TRAIN-CAP`).
- Format: SVG, sanitised (no scripts, no external references, no `foreignObject`), embedded once in the HTML and reused. Each has localised alt text derived from the card title.
- Source (decision D-02): **new original illustrations authored for this rebuild** by the implementing agent, released under the project MIT licence, in one visual style shared with the vehicle bay (§10). The previous illustrations are not reused, so no third-party or unresolved rights apply to the art.
- Size budget for all embedded illustrations: target ≤ 4 MB (the previous pack was ~7 MB; optimise paths and precision).
- Illustrations never drive rules. A mismatch between art and data is a content defect.
- All content stays fictional and instructional (no real equipment names, manufacturers, ratings or operational data).

---

## 12. Accessibility and inclusion

- Target: **WCAG 2.2 Level AA** for both roles, all phases, both languages. Claim conformance only for the scope actually tested.
- Required:
  - semantic landmarks and headings;
  - full keyboard operation with visible, unobscured focus;
  - logical focus order and focus return after dialogs;
  - contrast of at least 4.5:1 for text and 3:1 for UI;
  - no information by colour alone;
  - reflow at 320 CSS px and 400% zoom without loss;
  - target size of at least 24×24 px (44×44 preferred for live auction controls);
  - `prefers-reduced-motion` respected;
  - status and error messages via live regions;
  - every chart and the 3D bay paired with a text or table equivalent;
  - `lang` attributes switch with language.
- Timer: TIMED mode is controlled by the instructor (pause/extend). Students are never subject to a time limit in their own app.
- Small screens: dialogs stay within the visual viewport, accounting for the virtual keyboard and safe areas.

---

## 13. Security and privacy

### 13.1 Content Security Policy (meta tag, generated at build)

```
default-src 'none'; script-src 'sha256-<hash>'; style-src 'sha256-<hash>';
img-src data: blob:; font-src data:; connect-src 'none'; object-src 'none';
frame-src 'none'; worker-src 'none'; base-uri 'none'; form-action 'none'
```

Add only what is demonstrated necessary, for example `worker-src blob:` if a worker is qualified. Record the reason in the handover. Note that meta CSP cannot enforce `frame-ancestors` or reporting; do not claim them.

### 13.2 Rules

- Imported and typed text is inert data (C-11). Unicode is preserved exactly; no normalisation that changes stored text.
- External links (for example to the licence text) use `rel="noopener noreferrer"` and are optional references, never runtime dependencies.
- No `localStorage`, cookies or IndexedDB. Only `sessionStorage` (§8.1).
- The privacy notice in Help states plainly what is stored, where and for how long, and what an export contains.
- A public static HTML file is inspectable by anyone. Do not describe the market seed as secret from a technically skilled student; the guarantee is that the **student UI and exports** never show it (C-08).

---

## 14. Performance budgets (provisional; calibrated at M5 on the reference laptop)

| Metric | Target |
|---|---|
| `dist/index.html` size | ≤ 8 MB hard limit; target ≤ 6 MB |
| Time to interactive, chooser | ≤ 1.5 s |
| Time to interactive, role with maximum saved state | ≤ 3 s |
| Command response (click to rendered result) | ≤ 100 ms (p95) |
| Memory after a full 70-lot, 10-team session | ≤ 300 MB, no growth across 10 phase cycles |

---

## 15. Requirements and acceptance map

Each requirement must be **accepted** for a release (§21). Acceptance evidence types: U = unit/property test, E = Playwright browser test on the built file, M = manual check with recorded result, P = classroom pilot.

| ID | Requirement | Evidence |
|---|---|---|
| RQ-01 | Single `dist/index.html`; works via `file://` offline in Tier 1 browsers for both roles. | E, M |
| RQ-02 | No runtime network egress, observed at the OS level (not only browser interception). | M |
| RQ-03 | All eight phases with exact guards (§6.1) for both roles. | U, E |
| RQ-04 | Canonical data equals Appendix A; deal equals Appendix B vectors. | U |
| RQ-05 | Money parsing, increment, overflow and display (§6.4). | U |
| RQ-06 | Auction commands and their rejections (§6.5), including stale-click protection. | U, E |
| RQ-07 | Win limits of 2 per round and 14 per game. | U, E |
| RQ-08 | Ledger append-only, VOID semantics, 210 capacity, replay equals live state. | U |
| RQ-09 | Score, compliance and award ranking/ties (§6.7, §6.12, §6.14). | U |
| RQ-10 | Reveal modes never shrink the visible set and never reveal the future (§6.5). | U, E |
| RQ-11 | Practice isolated from scored state. | U, E |
| RQ-12 | Student tracking, reconciliation and submission (§6.9 to §6.11). | U, E |
| RQ-13 | Private entry mode and projection safety (§4.2). | E, M |
| RQ-14 | Student state and exports exclude forbidden keys; no other team's data. | U, E |
| RQ-15 | Persistence, storage-denied operation and change-only writes (§8.1). | U, E |
| RQ-16 | Backup export/import with limits, rejection reasons, confirmation and undo (§8.6, §8.7). | U, E |
| RQ-17 | Imports schema-3 backups from 3.6.0 to 4.1.0-dev.1 (§8.8). | U |
| RQ-18 | Confirmations bound to state; no native dialogs (§7.5). | E |
| RQ-19 | Complete EN/FR; switching keeps input; French typography. | U, M |
| RQ-20 | WCAG 2.2 AA for the declared scope (§12). | E (axe), M |
| RQ-21 | Phone, tablet and desktop layouts; 320 px reflow; 400% zoom. | E, M |
| RQ-22 | Vehicle bay requirements and budgets; WebGL fallback (§10, §9). | E, M |
| RQ-23 | 77 illustrations embedded, sanitised, mapped and alt-texted (§11). | U, M |
| RQ-24 | CSP and code-safety rules (§13); no unsafe sinks (lint rule). | U |
| RQ-25 | Deterministic, reproducible build on Windows and Linux (§5.5). | CI |
| RQ-26 | Performance budgets (§14). | M |
| RQ-27 | Third-party notices complete and visible in-app. | U, M |
| RQ-28 | Degraded states (§9). | E |
| RQ-29 | Classroom pilot meets S1 to S5 (§16.6). | P |
| RQ-30 | Operator documentation: quick start, recovery, release/rollback (§19). | M |

Gates outside the code:

- **G-RIGHTS**: closed by D-02. All code and art are original MIT work; bundled third-party code is covered by RQ-27.
- **G-CONTENT**: full EN/FR language and suitability review performed by the implementing agent (owner-delegated substitute for a human review), recorded in `docs/verification/<version>.md`.
- **G-PILOT**: RQ-29, met by the owner-delegated substitute in §16.6.

**Substitute evidence rule.** Where this MPES names an owner-delegated substitute, the result is labelled *substitute* wherever it is recorded. Evidence the substitute cannot provide (real learners, real assistive-technology users, physical devices) is listed as **residual risk** in the release notes and is never recorded as passed.

---

## 16. Test strategy

### 16.1 Principles

- Write the failing test first for each rule or bug (red → green → refactor). Keep the failing run in the commit history or handover when it reveals a real defect.
- Never weaken an assertion to make a test pass. If a test is wrong, fix it in a separate, explained commit.
- Oracles are **independent**: expected values in fixtures are written from §6 and Appendix A, not computed by the code under test.

### 16.2 Unit and property (Vitest)

- Domain: every function in §6, every rejection path, and the Appendix B vectors.
- Properties:
  - ledger replay equals incremental state for random valid command sequences;
  - money sums never exceed the safe range;
  - the visible-lot set is monotonic.
- Persistence: schema-3 validators accept fixtures and reject each mutated invariant (one test per invariant).

### 16.3 Browser (Playwright, built file, `file://`, three engines)

- **J1**: full English session, 2 teams, TIMED, JIT: all 70 lots, including a correction, a void and replacement, unsold-with-leader, the two-win limit, pause/extend, submissions, award and close. Totals must match the oracle.
- **J2**: full French session, 10 teams, UNTIMED, MANUAL, including tied awards.
- **J3**: student journey in parallel with J1 (separate context): join, practice, planning, tracking, missed purchase, reconciliation, submit.
- **J4**: recovery: reload at each phase; export, close context, import into an empty context; corrupted, oversized and wrong-role files; storage denied (stubbed port).
- **J5**: privacy: inspect the student DOM, accessibility tree, exports and console at each phase for forbidden data.
- **J6**: accessibility: axe on every view at 1280×720 and 375×812 in both languages; keyboard-only run of J3.
- **J7**: network: every journey runs with all requests failed. The test fails if any request is attempted.

### 16.4 Manual checks (recorded in `docs/verification/<version>.md`)

- OS-level egress observation while running J1 offline (for example Windows `pktmon` or an outbound-deny firewall profile): zero outbound connections from the browser process attributable to the page.
- Screen-reader and device substitute (owner-delegated): accessibility-tree snapshots of every view, axe scans, keyboard-only journeys, and Playwright device/engine emulation for the §4.3 matrix. Real screen-reader and physical-device runs are residual risk.
- OS-level egress: observe with tools already present on the machine and usable without installation; if none is usable, record BLOCKED.
- Performance measurements (§14).
- Visual review of all 77 illustrations and the six vehicles with every category installed.

### 16.5 CI

GitHub Actions on Ubuntu and Windows, Node current and previous LTS:

1. `npm ci`
2. typecheck
3. lint
4. unit tests
5. build `--check`
6. Playwright (Chromium on both OSes; Firefox and WebKit on Ubuntu)
7. bundle-size check
8. notice check

Actions are pinned by commit SHA, with read-only permissions.

### 16.6 Classroom pilot (G-PILOT)

**Owner-delegated substitute (D-05):** a scripted multi-context classroom rehearsal. One instructor context and separate student contexts run complete sessions with 2 teams (EN) and 10 teams (FR), following only the quick-start guide's steps, with deliberate mistakes, a missed purchase, a correction, a void, an interruption and backup recovery. Each run is scored against S1, S2, S4 and S5 and checks that the answers to the three debrief questions below are derivable from what the app shows. S3 with real learners is residual risk. The human-pilot description below is kept for a future real pilot.

- With at least one facilitator and two teams, run a full session on Tier 1 devices using only the quick-start guide.
- Record:
  - time per phase;
  - every point of confusion;
  - errors;
  - recovery events;
  - learners' answers to three debrief questions (Did your build comply, and why? Which purchase gave the best value? What would you change in your plan?).
- Pass criteria: S1, S2, S4 and S5 observed; at least 80% of learners can answer the first two questions correctly from the app's information.
- Findings become backlog items before M5.

---

## 17. Delivery plan

Each milestone ends with a tagged commit, green CI and an updated handover.

| Milestone | Content | Exit criteria |
|---|---|---|
| **M0 Bootstrap** | Repository skeleton (§18), tooling pinned, CI, licence, `.gitattributes`, empty chooser page built into `dist/index.html`, CSP generation, size check. Support matrix confirmed. | CI green on both OSes; `file://` chooser opens offline in the three engines. |
| **M1 Domain** | All of §6 in `domain/`, Appendix A/B data, schema-3 validators, backup envelope, fixtures cross-checked against the previous app. | RQ-04, 05, 08, 09, 17 unit-accepted; coverage ≥ 95% lines for `domain/`. |
| **M2 Vertical slice** | Instructor and student roles end-to-end in plain HTML for **one round** (10 lots), persistence, export/import, EN/FR, one confirmation dialog, a placeholder bay showing one vehicle. | Slice journey passes in three engines via `file://`; offline; no requests; axe clean on slice views. Record go/no-go for architecture. |
| **M3 Full game** | All 70 lots, all phases, all commands, all confirmations, private entry, debrief, award, all degraded states, teaching aids. | J1 to J5, J7 green; RQ-03, 06, 07, 10 to 16, 18, 28 accepted. |
| **M4 Pilot** | Classroom quick start (EN/FR), recovery guide; pilot session (§16.6). | G-PILOT pass or backlog created and scheduled; RQ-29 status recorded. |
| **M5 Bay and art** | Full vehicle bay (§10), all illustrations integrated and optimised, budgets measured. | RQ-22, 23, 26 accepted. |
| **M6 Hardening** | Accessibility manual passes, device matrix, egress observation, notices, security review, content review. | RQ-01, 02, 19, 20, 21, 24, 25, 27 accepted; G-CONTENT pass. |
| **M7 Release** | Freeze, three release passes (§21), publish, docs (RQ-30). | §21 satisfied; release recorded. |

The previous application (3.6.0) remains the **rollback** until the rebuild reaches M7.

---

## 18. Repository layout

```
/                      repository root = D:\VSCode\SEA-Game
  .github/workflows/ci.yml
  .gitattributes       LF everywhere; binary for images
  .gitignore           node_modules/, .artifacts/, test-results/
  LICENSE              MIT, original code
  THIRD_PARTY_NOTICES.md
  README.md            what it is, play link, build/test commands, links to docs
  AGENTS.md            agent working rules (§20), short
  CLAUDE.md            one line pointing to AGENTS.md and docs/HANDOVER.md
  package.json, package-lock.json, tsconfig.json, eslint config, playwright config, vitest config
  source/              §5.2
  content/             cards.json (Appendix A), missions.json, strings.en.json, strings.fr.json, illustrations/*.svg, manifest.json
  tests/               unit/, e2e/, fixtures/
  dist/index.html      generated, committed for Pages and download
  docs/
    MPES.md            this file
    HANDOVER.md        current state and next actions (§19)
    CLASSROOM_QUICK_START.md   EN/FR
    RECOVERY_GUIDE.md          EN/FR
    RELEASE.md                 versioning, release, rollback, support, retirement
    verification/<version>.md  manual evidence for a released version
  .artifacts/          git-ignored scratch, screenshots, caches, local reference documents
  _archive/            git-ignored, read-only copy of all pre-rebuild material and recycle bin
                       (_archive/recycle/<date>/); deleted by the owner after release, so nothing may depend on it
```

Nothing else is committed: no concepts, prompts, evidence packets, previews or historical snapshots.

---

## 19. Documentation, versioning, release and lifecycle

### 19.1 Handover (`docs/HANDOVER.md`)

Plain sentences, at most about two pages. Sections:

1. Current version and milestone.
2. What works (with test names).
3. What does not, or is untested.
4. Uncommitted or in-progress work and who owns it.
5. Exact next action.
6. Rollback point.

Update it at each milestone, on a failed gate, before stopping work, and before any context or usage limit.

### 19.2 Versioning

- Semantic versioning of the game. The rebuild starts at **5.0.0-dev.N** (major: new interface architecture; saves remain compatible).
- Patch: fixes with no behaviour change to rules or saves. Minor: compatible features. Major: interface or architecture change, or any save-format change (which also requires a migration and a new schema number).
- The version is shown in the app (Help → About) and embedded in exports as `appVersion`.

### 19.3 Release

1. Freeze (§21).
2. Tag `v<version>`.
3. Publish `dist/index.html` to GitHub Pages and as a release asset with its SHA-256.
4. Verify that the published bytes match.
5. Record the evidence in `docs/verification/<version>.md`.

Publishing requires the owner's standing authorisation for this repository (§20).

### 19.4 Rollback and support

- Keep the previous accepted release downloadable.
- Rollback is a re-publish of that file; saves stay compatible within schema 3.
- Support path: the user reports → reproduce with the reporter's backup (with consent; synthetic if possible) → regression test → fix → requalify affected gates → release.

### 19.5 Retirement

Announce, keep the last version downloadable with its guides for at least one school year, keep the import path documented, then archive the repository read-only.

---

## 20. Working rules for agents and maintainers

- Begin every session with `docs/HANDOVER.md`, `git status` and `git log -5`. Reconcile actual state before editing.
- If another writer has uncommitted changes, do not overwrite them; coordinate or wait.
- Standing authority (from the owner) covers: editing within this repository, running local builds and tests, commits, pushes to feature branches, pull requests, and merges/publication **after green CI**. It does not cover: anything outside `D:\VSCode\SEA-Game`, other repositories or services, deleting history, force-pushing `main`, spending money, or sharing private data.
- Use subagents only with explicit, non-overlapping file ownership. The integrating agent owns `dist/`, docs and merges.
- Keep writes finite: no watchers or servers left running (C-14). Scratch output goes to `.artifacts/` only (C-13).
- Report honestly: say what ran, what passed, what failed, and what was not run (`NOT_RUN`) or could not be run (`BLOCKED`). Never claim acceptance without evidence.

---

## 21. Assurance and release qualification

### 21.1 Assurance labels

| Label | Meaning |
|---|---|
| PROTOTYPE | Not fully validated |
| STATIC_CHECKED | Typecheck, lint, unit and build checks pass |
| BROWSER_VERIFIED | Declared Playwright journeys pass on the built file in declared engines |
| RELEASE_QUALIFIED | All RQ and gates accepted, and the three passes of §21.2 completed |

### 21.2 Release passes

1. **Freeze a key:**
   - source commit;
   - this MPES version;
   - test suite and fixtures;
   - lockfile;
   - build parameters;
   - tool and browser versions;
   - device list;
   - `dist/index.html` SHA-256.
2. Run **three consecutive fresh full passes** on that same key. Each pass reruns all automated suites and the manual checks that depend on the bytes (egress, a screen-reader smoke test, device smoke), with no changes in between.
3. Any change to a key input, a failure, a flaky result or a skipped mandatory check resets the count to 0 of 3.
4. Record each pass (date, environment, results) in `docs/verification/<version>.md`.
5. "Released" means **no known material defect within the tested scope**, not zero bugs.

---

## 22. Decisions (decided 2026-10-09 under owner delegation)

| ID | Decision | Outcome |
|---|---|---|
| D-01 | Interface technology | Semantic HTML/CSS for all tasks plus a Three.js vehicle bay (§5, §7, §10). |
| D-02 | Illustrations | New original agent-authored SVGs, MIT, one style shared with the bay (§11). The rights gate is closed. |
| D-03 | Support matrix | As in §4.3. |
| D-04 | GitHub Pages hosting | Yes, in addition to download. |
| D-05 | Pilot | Owner-delegated scripted classroom rehearsal (§16.6). |
| D-06 | Projector view | Not in 5.0; private entry mode covers projection safety. |

---

## 23. Glossary

| Term | Meaning |
|---|---|
| Lot | One auction slot (round 1–7, lot 1–10) holding one card |
| Effective outcome | The latest SALE or UNSOLD for a lot that has not been voided |
| VOID | Ledger entry cancelling an effective outcome, with a reason |
| WTP | Willingness-to-pay; private, advisory |
| Bid (final) | Purchase cost + profit, submitted at the end |
| Compliance | All mission minimums met |
| Score | Mission-specific excess-capability points (§6.7) |
| Private entry mode | Instructor mode for recording submissions, not to be projected |
| Vehicle bay | The 3D view of a team's build |
| Key (convergence key) | The frozen set of inputs that identifies a release candidate |

---

## 24. Change log

| Version | Date | Change |
|---|---|---|
| 2.1.0 | 2026-10-09 | Accepted. Owner delegated all decisions and gates: §22 decided; art replaced by original illustrations (G-RIGHTS closed); substitutes defined for G-PILOT, G-CONTENT, screen-reader/device and egress checks with the residual-risk rule (§15, §16); `_archive/` recorded as a temporary local source and recycle bin (C-13, §18, Appendix C). |
| 2.0.0-draft.1 | 2026-10-09 | First clean-room rebuild specification. Rules, data and save formats carried over from MPES 1.5.2 and the typed domain at commit `1f211fc`; interface direction, vehicle bay, tooling, milestones and lean documentation are new. |

---

## Appendix A: Canonical card data (`synthetic-v1`, ruleset `STANDARD`)

Start prices are shown in dollars; store them as cents (× 100). Effects are signed. Titles are exact strings, including typographic apostrophes (’) in French.

### A.1 CAPACITY

| ID | English title | French title | Start ($) | Effects |
|---|---|---|---|---|
| CAP-A | Modular Crew Hull | Coque modulaire pour équipage | 300,000 | CAP +6, MOB −10 |
| CAP-B | Extended Carrier Module | Module de transport agrandi | 450,000 | CAP +6 |
| CAP-C | Compact Passenger Bay | Compartiment compact pour passagers | 250,000 | CAP +4, PRO −1 |
| CAP-D | High-Capacity Hull | Coque à grande capacité | 550,000 | CAP +8, MOB −20 |
| CAP-E | Crew Compartment Insert | Insert de compartiment équipage | 350,000 | CAP +5 |
| CAP-F | Protected Personnel Module | Module protégé pour personnel | 650,000 | CAP +5, PRO +2 |
| CAP-G | Light Utility Hull | Coque utilitaire légère | 400,000 | CAP +4, MOB +10 |

### A.2 MOBILITY

| ID | English title | French title | Start ($) | Effects |
|---|---|---|---|---|
| MOB-A | Efficient Power Pack | Groupe motopropulseur efficace | 400,000 | MOB +70 |
| MOB-B | High-Torque Drivetrain | Groupe de transmission à couple élevé | 550,000 | MOB +80 |
| MOB-C | Lightweight Running Gear | Train de roulement léger | 350,000 | MOB +60 |
| MOB-D | Heavy-Duty Suspension | Suspension renforcée | 500,000 | MOB +50, PRO +1 |
| MOB-E | Long-Range Propulsion | Propulsion à longue portée | 600,000 | MOB +90 |
| MOB-F | Compact Engine Set | Groupe moteur compact | 300,000 | MOB +50 |
| MOB-G | Adaptive Traction Package | Ensemble de traction adaptative | 450,000 | MOB +65 |

### A.3 FIREPOWER

| ID | English title | French title | Start ($) | Effects |
|---|---|---|---|---|
| FP-A | Defensive Weapon Station | Poste d’arme défensif | 350,000 | FP +2 |
| FP-B | Medium Weapon Station | Poste d’arme moyen | 500,000 | FP +4 |
| FP-C | Heavy Weapon Station | Poste d’arme lourd | 700,000 | FP +6, MOB −10 |
| FP-D | Remote Defensive Mount | Affût défensif téléopéré | 600,000 | FP +3, SA +1 |
| FP-E | Light Weapon Mount | Affût léger | 250,000 | FP +2 |
| FP-F | Stabilized Weapon Suite | Ensemble d’arme stabilisée | 650,000 | FP +5 |
| FP-G | Dual-Purpose Mount | Affût polyvalent | 550,000 | FP +4, PRO −1 |

### A.4 PROTECTION

| ID | English title | French title | Start ($) | Effects |
|---|---|---|---|---|
| PRO-A | Layered Protection Kit | Ensemble de protection multicouche | 500,000 | PRO +4, MOB −10 |
| PRO-B | Composite Armour Set | Ensemble de blindage composite | 650,000 | PRO +5 |
| PRO-C | Light Armour Panels | Panneaux de blindage léger | 350,000 | PRO +3 |
| PRO-D | Reinforced Crew Cell | Cellule équipage renforcée | 700,000 | PRO +4, CAP +2 |
| PRO-E | Modular Side Protection | Protection latérale modulaire | 450,000 | PRO +3, MOB −5 |
| PRO-F | Blast Protection Kit | Ensemble de protection contre le souffle | 600,000 | PRO +5, MOB −10 |
| PRO-G | Lightweight Protective Shell | Coque protectrice légère | 550,000 | PRO +4 |

### A.5 COMMS

| ID | English title | French title | Start ($) | Effects |
|---|---|---|---|---|
| COM-A | Convoy Radio Suite | Ensemble radio de convoi | 250,000 | COM +50 |
| COM-B | Extended Radio Network | Réseau radio étendu | 450,000 | COM +100 |
| COM-C | Compact Communications Set | Ensemble de communications compact | 150,000 | COM +25 |
| COM-D | Relay Communications Suite | Ensemble de communications relais | 500,000 | COM +75, SA +1 |
| COM-E | Long-Range Radio Set | Ensemble radio longue portée | 600,000 | COM +125 |
| COM-F | Secure Tactical Radio | Radio tactique sécurisée | 350,000 | COM +50 |
| COM-G | Dual-Channel Radio Package | Ensemble radio double canal | 400,000 | COM +75 |

### A.6 SA (situational awareness)

| ID | English title | French title | Start ($) | Effects |
|---|---|---|---|---|
| SA-A | Crew Observation Suite | Ensemble d’observation équipage | 300,000 | SA +2 |
| SA-B | Multi-Sensor Awareness Suite | Ensemble multisenseur | 600,000 | SA +4 |
| SA-C | Basic Observation Set | Ensemble d’observation de base | 200,000 | SA +1 |
| SA-D | Panoramic Sensor Mast | Mât de capteurs panoramiques | 550,000 | SA +3, MOB −5 |
| SA-E | Crew Vision Enhancement | Amélioration de vision équipage | 350,000 | SA +2 |
| SA-F | Integrated Detection Suite | Ensemble intégré de détection | 650,000 | SA +4 |
| SA-G | Distributed Observation Kit | Ensemble d’observation distribué | 500,000 | SA +3, COM +25 |

### A.7 ACCESSORIES

| ID | English title | French title | Start ($) | Effects |
|---|---|---|---|---|
| ACC-A | Recovery Accessory Pack | Ensemble d’accessoires de dépannage | 400,000 | REC +2 |
| ACC-B | Utility Trailer Module | Module de remorque utilitaire | 450,000 | CAP +3, MOB −10 |
| ACC-C | Mine-Route Accessory Kit | Ensemble d’accessoires pour route minée | 500,000 | MC +2 |
| ACC-D | Field Support Pack | Ensemble de soutien de campagne | 550,000 | REC +1, CAP +2 |
| ACC-E | Engineer Support Module | Module de soutien du génie | 600,000 | MC +2, PRO +1 |
| ACC-F | Recovery Winch Package | Ensemble de treuil de dépannage | 350,000 | REC +2 |
| ACC-G | Mission Equipment Rack | Support d’équipement de mission | 400,000 | CAP +2, SA +1 |

### A.8 SE_PROCESS (all start at $200,000)

| ID | English title | French title | Effects |
|---|---|---|---|
| SE-A | Requirements Review | Revue des exigences | SA +1 |
| SE-B | Risk Review | Revue des risques | PRO +1 |
| SE-C | Interface Review | Revue des interfaces | COM +25 |
| SE-D | Verification Planning | Planification de la vérification | CAP +1 |
| SE-E | Configuration Review | Revue de configuration | MOB +10 |
| SE-F | Trade Study | Étude de compromis | SA +1 |
| SE-G | Validation Planning | Planification de la validation | PRO +1 |
| SE-H | Architecture Review | Revue d’architecture | COM +25 |
| SE-I | Risk Reduction Study | Étude de réduction des risques | CAP +1 |
| SE-J | Requirements Trace | Traçabilité des exigences | MOB +10 |
| SE-K | Integration Planning | Planification de l’intégration | SA +1 |
| SE-L | Test Readiness Review | Revue de préparation aux essais | PRO +1 |
| SE-M | Design Review | Revue de conception | COM +25 |
| SE-N | Supplier Risk Review | Revue des risques fournisseurs | CAP +1 |
| SE-O | Baseline Audit | Audit de référence | MOB +10 |
| SE-P | Change Control Review | Revue de contrôle des changements | SA +1 |
| SE-Q | Human Factors Review | Revue des facteurs humains | PRO +1 |
| SE-R | Supportability Review | Revue de soutenabilité | COM +25 |
| SE-S | Mission Analysis | Analyse de mission | CAP +1 |
| SE-T | Lessons Review | Revue des leçons | MOB +10 |
| SE-U | Acceptance Review | Revue d’acceptation | SA +1 |

### A.9 Other identities

| ID | English | French | Use |
|---|---|---|---|
| TRAIN-CAP | Training capacity | Capacité de formation | Practice only; no scored effect |
| Vehicle illustrations | combat, recce, troop-carrier, command-post, recovery, mine-clearing | | One per mission (§6.6) |

Constants: `RULESET = "STANDARD"`, `DECK = "synthetic-v1"`, rounds 7, lots per round 10, increment 5,000,000 cents, maximum wins 2 per round and 14 per game, ledger capacity 210.

---

## Appendix B: Market deal test vectors (§6.3)

Each row lists lots 1 to 10 of that round.

**Seed `00000000000000000000000000000000`**

| Round | L1 | L2 | L3 | L4 | L5 | L6 | L7 | L8 | L9 | L10 |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | CAP-G | MOB-C | FP-A | PRO-A | COM-B | SA-E | ACC-F | SE-G | SE-Q | SE-R |
| 2 | CAP-A | MOB-G | FP-G | PRO-C | COM-A | SA-D | ACC-A | SE-H | SE-E | SE-S |
| 3 | CAP-D | MOB-E | FP-B | PRO-F | COM-D | SA-A | ACC-B | SE-P | SE-B | SE-M |
| 4 | CAP-C | MOB-B | FP-D | PRO-E | COM-F | SA-B | ACC-C | SE-C | SE-I | SE-O |
| 5 | CAP-F | MOB-F | FP-F | PRO-D | COM-C | SA-F | ACC-G | SE-N | SE-U | SE-F |
| 6 | CAP-B | MOB-A | FP-C | PRO-B | COM-E | SA-C | ACC-E | SE-J | SE-A | SE-L |
| 7 | CAP-E | MOB-D | FP-E | PRO-G | COM-G | SA-G | ACC-D | SE-K | SE-T | SE-D |

**Seed `0123456789ABCDEF0123456789ABCDEF`**

| Round | L1 | L2 | L3 | L4 | L5 | L6 | L7 | L8 | L9 | L10 |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | CAP-D | MOB-C | FP-C | PRO-G | COM-E | SA-C | ACC-E | SE-I | SE-A | SE-U |
| 2 | CAP-E | MOB-A | FP-G | PRO-F | COM-A | SA-D | ACC-B | SE-N | SE-T | SE-D |
| 3 | CAP-F | MOB-F | FP-A | PRO-C | COM-B | SA-F | ACC-G | SE-E | SE-J | SE-R |
| 4 | CAP-A | MOB-E | FP-E | PRO-D | COM-F | SA-B | ACC-A | SE-S | SE-Q | SE-L |
| 5 | CAP-G | MOB-G | FP-D | PRO-A | COM-G | SA-G | ACC-F | SE-K | SE-H | SE-C |
| 6 | CAP-B | MOB-D | FP-F | PRO-E | COM-D | SA-A | ACC-D | SE-P | SE-G | SE-F |
| 7 | CAP-C | MOB-B | FP-B | PRO-B | COM-C | SA-E | ACC-C | SE-B | SE-M | SE-O |

**Seed `FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF`**

| Round | L1 | L2 | L3 | L4 | L5 | L6 | L7 | L8 | L9 | L10 |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | CAP-A | MOB-D | FP-F | PRO-A | COM-F | SA-C | ACC-F | SE-R | SE-H | SE-D |
| 2 | CAP-C | MOB-B | FP-E | PRO-B | COM-B | SA-B | ACC-C | SE-E | SE-Q | SE-K |
| 3 | CAP-F | MOB-A | FP-D | PRO-D | COM-G | SA-D | ACC-D | SE-G | SE-I | SE-C |
| 4 | CAP-D | MOB-G | FP-G | PRO-F | COM-C | SA-E | ACC-A | SE-U | SE-T | SE-P |
| 5 | CAP-G | MOB-F | FP-A | PRO-G | COM-D | SA-F | ACC-G | SE-N | SE-J | SE-M |
| 6 | CAP-B | MOB-E | FP-C | PRO-E | COM-E | SA-A | ACC-E | SE-B | SE-F | SE-S |
| 7 | CAP-E | MOB-C | FP-B | PRO-C | COM-A | SA-G | ACC-B | SE-A | SE-L | SE-O |

These vectors were produced on 2026-10-09 by the previous typed implementation (`source/domain/market.ts` at commit `1f211fc`), which matched four pinned production vectors at the time. The rebuild **MUST** reproduce them exactly; a mismatch means saves from earlier versions would load the wrong market.

---

## Appendix C: Recovery sources (read-only references)

Until release, all pre-rebuild material (the old repository with full history and its uncommitted work, local archives, the generator prompt and evidence) is also present locally in the git-ignored, read-only `_archive/` folder, which the owner deletes after release. Nothing in the repository, build, tests or CI may depend on it. The following remain recoverable from the GitHub repository `https://github.com/shfqrkhn/SEA-Game` history. They are **evidence, not requirements**; this MPES governs.

| What | Where |
|---|---|
| Previous published candidate 4.1.0-dev.1 (main merge) | commit `e3ab763d3142783e9dc68a6fdb83fe988ef37228` |
| Last commit before this rebuild (evidence-only update; on `main`) | commit `1f211fcb896d6c571e6a11877c642d74fded4dc9` |
| Rollback release 3.6.0 | commit `00d4e853f21c3ac311d4ac02125f12f9d6d2ae16` |
| 77 canonical SVG illustrations | `assets/v1/` at either commit above |
| Typed domain reference implementation | `source/domain/*.ts` at `1f211fc` |
| Independent rules baseline | `docs/evidence/rules-baseline.json` at `1f211fc` |
| Previous MPES 1.5.2 and guides | `docs/` at `1f211fc` |

To use them, read files from `_archive/` while it exists, or with `git show <commit>:<path>`, or on GitHub. Inputs the rebuild needs are copied into the repository; scratch copies go into `.artifacts/` (C-13). This MPES restates every obligation from the old material that the rebuild needs.
