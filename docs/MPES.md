# SEA Game: Clean-Room Rebuild Specification (MPES)

| Field | Value |
|---|---|
| Document | Master Product and Engineering Specification (MPES) for the clean-room rebuild of **Systems Engineering Awareness (SEA Game)** |
| Version | 4.3.0 |
| Date | 2026-10-11 (America/Toronto) |
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
6. This document holds no code (Omni 5.1.1 §6.2): formulas, names and values appear inline; structures are tables. The exact text of every file is in `docs/CODEBASE.md` (§19.6), which a rebuild may use but does not need: §5 and §18 name every module, file and contract, and the tests in §16 are the oracle.

### 0.1 Lifecycle coverage

Every lifecycle area an MPES must define (Omni 5.1.1 §6.2), and where this one does it.

| Area | Where |
|---|---|
| Intent, users, outcomes, non-goals | §1, §2, §4 |
| Experience, gameplay, content, platforms | §6, §7, §10, §11, §4.3 |
| Requirements, acceptance, traceability | §15 (requirement to evidence), §16.3 and §18 (test files to requirements) |
| Architecture, data, interfaces, assets | §5, §8, §10, §11 |
| Environments, toolchain, dependencies, configuration | §5.4, §5.7 |
| Test strategy and quality gates | §16, §21 |
| Security, privacy, safety, accessibility, rights, licensing | §12, §13, C-10, §11 |
| Implementation and integration | §5.6, §17, §20 |
| Source, review, automation | §16.5, §19.6, §20 |
| Build, package, release provenance | §5.5, §19.2, §19.3, §21.2 |
| Deployment, rollback, migration | §19.3, §19.4, §8.8 |
| Observability, reliability, capacity, incidents, support | §9, §14, §19.4. No telemetry by design (§2.2); support works from the user's own backup file. |
| Backup, restore, data and save compatibility | §8, §19.6 (project backup) |
| Maintenance, update, extension, deprecation, retirement | §19.5, §19.6, §20 |
| Distribution | One HTML file, `file://` or any static host (§4.3, §19.3) |
| Localization | EN/FR (§7.6) |
| Telemetry and analytics | Not applicable: none, by design (§2.2) |
| Networking, live content, economy, abuse and cheat resistance, modding | Not applicable: offline, no accounts, rules frozen (§2.2); the only guarantee against curious students is C-08 (§13.2) |

### 0.2 What a clean-room rebuild reproduces

An independent review (a Codex session given only this file, G2) asked where its limits are. They are:

| Part | A rebuild from this file alone | Where the exact bytes come from |
|---|---|---|
| Rules, state, saves, imports, budgets, security, accessibility, test oracles | Reproduced: §6, §8, Appendix A and B are law; the tests of §16 decide. The G2 review listed edge cases this file does not yet state (untouched setup shells, field domains per phase, guards on repeated auction commands, clock changes, import repair versus rejection, parser whitespace, award tie display); until G6 (hardening) writes each one here, the unit tests in the tracked source decide them | The tracked tests, rebuilt from `docs/CODEBASE.md` |
| Interface text, styling values, layout, geometry, materials, render and export settings | A conforming implementation: it meets §7, §10–§12 and passes §16, but is not byte-identical. Where this file leaves a value open (a colour, a key binding, a camera), the rebuild chooses one and records it in its own source | The tracked source, rebuilt from `docs/CODEBASE.md` |
| Binary inputs: renders, the packed model, visual baselines | Made again by the §11.1 pipeline; renders match in look and size, not byte for byte (Cycles varies by GPU and driver) | Git history and the handoff package's git bundle (§19.3); `docs/CODEBASE.md` lists each with its SHA-256 |
| Historical inputs: the legacy backups of §8.8 and the previous application | Cannot be made from prose. A rebuild without them writes schema-3 fixtures from §8 and reports RQ-17's historical proof NOT_RUN | `tests/fixtures/legacy/` (tracked), tag `v4.1.0-dev.1` and Appendix C commits in git history |
| Measurement protocols not yet written (the proxy rig, adaptive tiers, context-loss recovery) | Not yet specified: G3 defines them and writes them into §10.4 and §14 | — |

**No code** (item 6 of §0) means: no fenced block, and no program text longer than one command line. File names, command lines, field names, formulas and value lists inline are not code.

**Who decides.** The owner delegated every decision and gate (§22) except these, which only the owner does: the GO or FIX on each goal's gallery and on the art review; the classroom dry run and learner pilot; a cleanup with `npm run archive:prep -- --apply`; deleting `_archive/`, history or the GitHub repository. Anything else this file leaves open is the maintainer's to decide and record here.

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
- **S7** The game looks and feels like a credible, immersive war-room simulation: a tactical HUD and photoreal vehicles and parts, without losing S1 to S6, accessibility (§12) or smooth play on integrated-graphics laptops (§14). Judged by the owner at the visual gates (§17). (Owner direction, 2026-10-10.)

### 1.3 Problem-versus-mechanism decisions (XY analysis)

The previous project often optimised the mechanism ("X") instead of the outcome ("Y"). The following decisions are binding for the rebuild:

| Mechanism (X) | Verdict | Decision for the rebuild |
|---|---|---|
| One offline HTML file containing both roles | FIT | Keep. |
| Manual classroom handoffs; no backend, sync or accounts | FIT | Keep. |
| Exact integer-cents money, canonical card data, independent rules oracle | FIT | Keep; re-implement cleanly (§6, Appendix A). |
| Schema-3 saves and backup envelope | FIT | Keep import compatibility (§8). |
| Entire interface (menus, forms, text editing) drawn inside a WebGL canvas | MISFRAMED | **Replace** with semantic HTML/CSS for every task (D-01). The war-room HUD look (D-07) is styling on that HTML, never a canvas. |
| Mechanically realistic real-time vehicle meshes (brake rotors, wipers, fasteners) | PROXY | **Replace** with one set of Blender-authored models (D-08, D-09) shown two ways: an embedded real-time model that turns slowly and can be dragged, on a hardware GPU, and pre-rendered photoreal stills otherwise. Realism serves immersion (S7) and part recognition; performance comes first on integrated-graphics laptops. |
| Hosting, CI and releases on GitHub | PARTIAL | GitHub is temporary human-QA space and will be deleted (D-13). The product is a local, hash-verified handoff package (§19.3) that depends on nothing hosted. |
| Very large assurance apparatus (dozens of bespoke test scripts, dense evidence prose) | PARTIAL | Keep the rigour, cut the volume: standard test runners, plain-language handover, one requirement-to-test map (§15, §16). |
| Classroom pilot with real learners | MISSING | **Add early** (milestone M4), before visual polish. |

### 1.4 Key performance indicators

Owner-accepted 2026-10-10. Each KPI has a target, a measure and an owner of the measurement; "agent" KPIs are gated in CI or on the reference proxy (§14), "owner" KPIs are BLOCKED-owner until a scripted session in `docs/owner/` returns results.

| KPI | Target | Measure (who) |
|---|---|---|
| Teaching effectiveness | S3 rubric met; facilitator rating ≥ 4/5; optional 5-question pre/post check shows gain | Rubric and offline pre/post check, aggregate only (owner) |
| Classroom reliability | Zero lost sessions (S4) | Fault tests: killed tab, full storage, bad import, two tabs, clock change, offline (agent) |
| Instructor workload | Setup ≤ 5 min; raw NASA-TLX ≤ 40 | Click and key counts per phase from e2e traces (agent); dry run (owner) |
| Learnability | First bid ≤ 2 min for a novice; SUS ≥ 80 with 5 users | Scripted novice e2e (agent); dry run (owner) |
| Responsive interface | INP ≤ 200 ms; LCP ≤ 2.5 s; CLS ≤ 0.1; no long task > 200 ms after load | Reference proxy (agent) |
| Browser performance | §14 reference-laptop budgets | Reference proxy (agent) |
| Visual realism | Owner GO at the visual gates; projected key text ≥ 24 px, key contrast ≥ 7:1 | Side-by-side review script (owner); size and contrast tests (agent) |
| Runs in any classroom | Windows 11, Chrome, Edge and Firefox, `file://`, corporate defaults, no network | Browser matrix (agent) |
| Accessibility and language | WCAG 2.2 AA (§12); complete EN/FR | axe and manual passes (agent, owner) |
| Privacy and security | Zero egress; strict CSP; SBOM; no high audit findings | §13 checks (agent) |
| Maintainability after handoff | Reproducible rebuild from the package alone | Two-build comparison and package passes (agent) |
| Longevity and zero cost | No servers, licences or non-baseline web APIs | Dependency and API review (agent) |

**Priority when KPIs conflict:** teaching and reliability, then learnability and workload, then performance and any-classroom (floors, never traded away), then realism, then maintainability. Every effect must teach or confirm something.

---

## 2. Scope

### 2.1 In scope

- Instructor console: setup, practice, planning oversight, live auction control, authoritative ledger, private submission entry, debrief and award.
- Student companion: join, practice, private planning, per-lot tracking, own-purchase recording, build reconciliation, profit calculation, debrief view.
- English and French throughout, switchable at any time without losing input.
- Local persistence per browser tab, explicit JSON backup export/import, recovery from interruption.
- A vehicle showcase that visualises each team's build: an interactive real-time 3D model, with pre-rendered photoreal stills as the fallback (§10).
- 77 photoreal subjects (70 cards, 6 vehicles, 1 practice card), embedded (§11).
- A war-room HUD presentation for both roles (§7.1).
- Build, test, render and packaging tooling; classroom quick-start and recovery guides (EN/FR); the handoff package (§19.3).

### 2.2 Out of scope (non-goals)

- Automatic synchronisation between instructor and students, networking, multiplayer servers, accounts or authentication.
- Telemetry, analytics, crash reporting to any server.
- Enforcing a total team budget (willingness-to-pay is advisory, §6.7).
- Any real, operational, classified or manufacturer-certified equipment data. All values are instructional.
- Physics simulation, driving, combat or animation beyond what explains the build.
- Real-time 3D beyond the vehicle showcase: no 3D interface, scenes, physics or effects (D-01, D-08).
- Any dependency on GitHub (Pages, Releases, Actions, links) in the delivered product or its documentation (D-13).
- Alternative rule sets, deck editors, or rule balancing. Rules are frozen (§6); changing them needs a new MPES version.
- Native mobile/desktop app packaging.
- Support or testing on any operating system other than Windows 11 (for example macOS, ChromeOS, iPadOS, iOS, Android or Linux), and Safari. The file may open elsewhere, but nothing is claimed or tested there (§4.3).

---

## 3. Hard constraints

| ID | Constraint |
|---|---|
| C-01 | The runtime distribution is **exactly one file**, `dist/index.html`, containing all code, styles, data, fonts (if any) and images. It is at most 50 MB (§14). |
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
| C-13 | All new work stays inside the project root `D:\VSCode\SEA-Game` (repository root). Disposable outputs go to the git-ignored `.artifacts/` directory there. Nothing is deleted permanently: unwanted files move to `_archive/recycle/<date>/`. Two exceptions remove without recycling, because what they remove comes back from a command: tests' own scratch folders under `.artifacts/tmp/`, and a cleanup the owner asks for (`npm run archive:prep -- --apply`, §19.6). No extra checkouts, worktrees, external archives or temporary folders elsewhere; scratch clones and `git archive` extracts made by tests and the gallery live under `.artifacts/` and are not worktrees. |
| C-14 | No continuously running project processes (watchers, dev servers, schedulers, background loggers) unless a specific task needs one and it is stopped afterwards. |
| C-15 | Generated files (`dist/index.html`) are never edited by hand. |

---

## 4. Users, environment and support matrix

### 4.1 Roles

| Role | Who | Device | Sees |
|---|---|---|---|
| Instructor | Facilitator; usually projects their screen | Windows 11 laptop or desktop, 1280×720 or larger, keyboard and mouse | Everything authoritative: market (current lot only on projected views), ledger, all teams' public results; private submission entry only in private mode |
| Student | One device per team, 2–10 teams | Windows 11 laptop, desktop or touch device | Own team only: mission, plan, purchases, totals, notes, profit |

### 4.2 Projection safety

The instructor screen is assumed to be projected. Therefore:

- The instructor UI **MUST NOT** display future lots beyond what the reveal mode permits (§6.5) on the main auction view.
- Private submission entry (§6.11) is a separate, explicit mode with a visible "Private – do not project" banner; leaving it requires an action.

### 4.3 Support matrix

Owner decision 2026-10-10 (D-03): **Windows 11 only**, for both roles. Frozen at G6 (hardening).

| Tier | Platform | Delivery |
|---|---|---|
| Tier 1 (fully tested) | Windows 11: current Chrome, Edge and Firefox | `file://` and HTTPS |

There is no Tier 2. Other operating systems and Safari are out of scope (§2.2); the unsupported-browser notice (§9) names only the supported browsers.

HTTPS delivery (any static host the school chooses; GitHub Pages is temporary QA only, D-13) serves the identical file; the app still makes no network requests after loading.

---

## 5. Architecture

### 5.1 Profile and class

- **Runtime profile:** STRICT_OFFLINE (C-02).
- **Delivery class:** Engineered. It is justified by two roles, money, an audit ledger, persistent state, bilingual content and embedded photoreal imagery. Keep it **lean**: standard tools, few files and no bespoke frameworks.

### 5.2 Layering

Dependencies point down the table: a layer may use the layers below it, never above. Every module is named in §5.6.

| Folder | Layer | May use | Holds |
|---|---|---|---|
| `source/main.ts` | Entry | everything below | Routing to the chooser or one role (§5.3) |
| `source/ui/` | Views | app, showcase, domain, content | Semantic HTML/CSS views per role and phase; i18n; dialogs; the design system |
| `source/showcase/` | Showcase | domain types, three.js | The embedded 3D model, or stacked pre-rendered image layers (§10) |
| `source/app/` | Controllers and ports | domain | One state owner per role; thin adapters for storage, clock, entropy and downloads |
| `source/domain/` | Rules | content JSON only | Pure TypeScript game rules: no DOM, no time, no randomness, no storage |
| `content/` | Data | nothing | Canonical data (Appendix A), strings EN/FR, render and model manifests and files |
| `build/` | Build | esbuild, content, source | Inlines everything into `dist/index.html` (§5.5) |
| `art/` | Authoring | Blender, sharp, gltf-transform | Blender scripts and Node tools that make every image and the model offline (§11.1). Never shipped. |
| `scripts/` | Maintenance | build, source (read-only) | Review gallery, codebase document, backup preparation (§19.6) |
| `tests/` | Evidence | everything | `unit/` (Vitest), `e2e/` (Playwright, against the built file), `fixtures/` (schema-3 backups and plans) |

Rules:

- **R-ARCH-1** `domain/` is pure: given the same inputs it returns the same outputs and performs no effects. Time and entropy enter only as arguments.
- **R-ARCH-2** Every state change is a **command** that validates the whole current state, computes the complete next state, and only then lets the controller commit, save and render. A rejected command changes nothing.
- **R-ARCH-3** One state owner per role. The UI renders from state; it never holds the only copy of a value.
- **R-ARCH-4** The vehicle showcase only displays embedded content (the 3D model or the still images). It never owns or changes game state. three.js (MIT, THIRD_PARTY_NOTICES.md) is the only runtime library and is used only by the showcase (D-08).
- **R-ARCH-5** All source is TypeScript under `strict`, `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`. There is no unchecked JavaScript source.
- **R-ARCH-6** Text entered by users is set with `textContent` or `value`, never parsed as HTML (C-11).

### 5.3 Role selection

- With no query string, the file shows a bilingual chooser: **Instructor** or **Student**, plus a language toggle, About, the theme toggle and the version.
- The chooser shows all six mission vehicles as a lineup of their hero stills (G2): the selected one large above, six smaller toggle buttons below with each mission's name (two columns, three from 30 rem wide). Arrow keys, Home and End move along the lineup and select; click or touch selects. The small stills load lazily, every image has its intrinsic width and height so nothing shifts, and no still is drawn wider than half its pixels, so it stays sharp at 2× device pixels. The large still's alt text names the vehicle (strings `chooser.still.<MISSION>`). No 3D runs on the first screen.
- Query parameters: `role`, `lang` (`en` or `fr`; otherwise the browser language) and `theme=light` (§7.1); every link the app makes keeps them.
- `?role=instructor` and `?role=student` open a role directly. Any other value shows the chooser with a notice.
- Changing role is a deliberate action ("Change role") that reloads the page. It never resets either role's saved state.
- Only the selected role's controller starts. The other role's code may be present but inert.

### 5.4 Tooling (exact pins)

Every package is pinned to an exact version in `package.json` (no ranges) and resolved by the committed `package-lock.json`; `npm ci` installs exactly that. TypeScript source runs directly on Node through type stripping (no compile step, no loader), so source uses only erasable syntax (no enums, namespaces or parameter properties) and imports with the `.ts` extension.

| Purpose | Tool and pin | Notes |
|---|---|---|
| Runtime for tooling | Node.js 22 or later (`engines`); 24.x locally; CI runs 22 and 24 | Scripts detect "run directly" by comparing the resolved first argument with the module's own path (Node 22 has no `import.meta.main`). |
| Package manager | npm, from Node | Lockfile version 3. |
| Showcase 3D (runtime) | `three` 0.186.1, with `@types/three` 0.186.0 | The only runtime library (D-08), bundled into the file; uses its WebGL renderer and glTF loader. |
| Types | `typescript` 6.0.3, `@types/node` 24.19.0 | `npm run typecheck` (§5.7 flags). |
| Bundling | `esbuild` 0.28.2 | One minified IIFE script and one minified stylesheet (§5.5). |
| Lint | `eslint` 10.10.0, `typescript-eslint` 8.70.1 | Rules in §5.7. |
| Unit tests | `vitest` 5.0.1, `@vitest/coverage-v8` 5.0.1 | Domain coverage ≥ 95% of lines. |
| Property tests | `fast-check` 4.10.1 | Ledger replay, money sums, visible-lot monotonicity. |
| Browser tests | `@playwright/test` 1.63.0, override `playwright-core` 1.63.0 | Chromium and Firefox downloaded by Playwright into `.artifacts/ms-playwright`; Edge is the copy installed with Windows (`channel: msedge`). |
| Accessibility scan | `@axe-core/playwright` 4.13.0 | Automated part only; manual checks still needed (§12). |
| Image encoding | `sharp` 0.35.4 (libvips 8.18.6) | AVIF quality 65, 4:4:4; also the gallery's WebP and the review contact sheets. |
| Model packing | `@gltf-transform/core`, `@gltf-transform/extensions`, `@gltf-transform/functions`, all 4.5.0 | Merge, weld, quantise and pack the exported models (§11.1). |
| Imagery and models | Blender 5.2.2 LTS portable zip, build hash `d13f752e3b9c`, from `download.blender.org/release/Blender5.2/blender-5.2.2-windows-x64.zip`, SHA-256 `3849d17a682cba006075aaa3f3597ecb5c9c30ec31035b2e092c53e40679b535` | Unzipped into `.artifacts/tools/`; offline authoring only (§11.1), never a runtime dependency. Cycles on the GPU (OptiX) with OpenImageDenoise, CPU fallback. |
| AI assistance | The owner's ChatGPT Codex desktop app and its bundled CLI | Concept images, modelling help, independent reviews (D-14, §19.6). Optional: nothing in the build or tests needs it. |
| Version control | Git | Line endings by `.gitattributes` (§5.7). |

A different tool is acceptable only if it is qualified against the same tasks, and the reason is recorded in the handover.

### 5.5 Build

- `npm ci` then `npm run build` produces `dist/index.html` and nothing else in `dist/`. `dist/` is not committed (D-12).
- Builds are **deterministic**. The same inputs give byte-identical output on every Windows 11 machine and CI run, whatever the checkout's line-ending settings. Line endings are LF, enforced by `.gitattributes`; images are binary.
- The build embeds each image once as a `data:` URI and the packed vehicle models once as raw-deflated base64 in a non-executable `<script type="application/octet-stream">` block, computes SHA-256 hashes for the inline script and style and writes the Content-Security-Policy meta tag (§13.1).
- The build fails if a required licence notice, image, manifest entry, string key or card is missing, or if a manifest hash does not match its file.
- `npm run check` builds twice and fails unless the two outputs are byte-identical.
- `npm run package` assembles the handoff package (§19.3); it is built in G6 (§17) and does not exist before.

**Build pipeline** (`build/render.ts`, run by `build/build.ts`), in order; any failure stops the build with a message:

1. Refuse any carriage return in `.ts`, `.css`, `.json`, `.html`, `.md` and `.svg` files under `source/`, `content/` and `build/`, and in `LICENSE` and `THIRD_PARTY_NOTICES.md`.
2. Read `gameVersion` from `package.json`. Require the notices to mention three.js, the MIT License and Blender.
3. Bundle `source/main.ts` with esbuild: bundle, minify, IIFE format, target ES2022, UTF-8 output, no legal comments, and three compile-time constants: `__SEA_VERSION__` (the game version), `__SEA_NOTICES__` (the notices file) and `__SEA_LICENSE__` (the licence file), each as a JSON string (declared in `source/globals.d.ts`). Escape any closing script tag and any HTML comment opener in the output.
4. Bundle `source/ui/styles.css` the same way (minified); refuse a closing style tag in it.
5. Renders: read `content/renders/manifest.json`, check each file's SHA-256, and write one JSON object from render id to its data URI (`data:image/avif;base64,…`), kind, draw depth, slot (part layers), frame, offset and size. Refuse a `<` anywhere in it.
6. Model: read `content/models/manifest.json`, check the SHA-256 of `showcase.glb`, raw-deflate it at level 9 and base64 it.
7. Compute the base64 SHA-256 of the final script text and of the final style text, and write the CSP of §13.1.
8. Fill `build/template.html`: an HTML5 page in English by default with the CSP meta tag, viewport, `color-scheme` light dark, `referrer` no-referrer, a `generator` meta naming the version, the title "Systems Engineering Awareness", the inline style, a bilingual `noscript` line, the `#app` root, the renders as `<script type="application/json" id="sea-renders">`, the model as `<script type="application/octet-stream" id="sea-models">`, then the inline script. Placeholders are `{{CSP}}`, `{{VERSION}}`, `{{STYLE}}`, `{{RENDERS}}`, `{{MODELS}}` and `{{SCRIPT}}`, each replaced literally once; any placeholder left is an error.
9. Refuse a result above 50 MiB (52,428,800 bytes). Write `dist/index.html` only if it changed, and print its size and SHA-256 (hex).

At run time the game reads the renders block once on first use and inflates the model block with `DecompressionStream('deflate-raw')`.

### 5.6 Module contracts

Each module's responsibility and public contract. Names are the exported identifiers; §6 to §13 define their behaviour. Domain commands take a state and arguments and return a complete new state, or throw a `DomainError` with a code; they never mutate their input.

**Domain** (`source/domain/`, pure, R-ARCH-1):

| Module | Contract |
|---|---|
| `source/domain/errors.ts` | `DomainError` (code and detail), `ErrorCode` (the closed set of rejection codes, each with an EN/FR string `error.<code>`), `fail`, `ensure` (throw unless a condition holds), `safe` (checked safe-integer result), `isInt`. |
| `source/domain/data.ts` | Constants of Appendix A and §6: `RULESET`, `DECK`, `ROUNDS` 7, `LOTS` 10, `TOTAL_LOTS` 70, `MAX_WINS_PER_ROUND` 2, `MAX_PURCHASES` 14, `LEDGER_CAPACITY` 210, `MIN_TEAMS` 2, `MAX_TEAMS` 10; `CAPABILITIES` (CAP, MOB, FP, PRO, COM, SA, REC, MC), `CATEGORIES`, `ROUND_SLOTS` (§6.3), `MISSION_IDS`; `CARDS` and `MISSIONS` deep-frozen from `content/cards.json` and `content/missions.json`; lookups `card`, `mission`, `isMissionId`, `categoryOfLot`; `PRACTICE_CARD` (TRAIN-CAP). |
| `source/domain/money.ts` | §6.4: `INCREMENT_CENTS` 5,000,000, `BID_INCREMENTS`, `MAX_PERCENT_BPS` 1,000,000; `isCents`, `cents`, `parseAmount`, `parseWholeDollars`, `parsePercentBps`, `add` (BigInt-checked), `profitFromBps`, `bpsFromProfit`, `validPrice`, `price`, `amountText`, `percentText`. |
| `source/domain/session.ts` | §6.1, §6.2, §6.5: `PHASES`, `REVEAL_MODES`, bid window bounds (`MIN_BID_SECONDS` 10, `MAX_BID_SECONDS` 120, `DEFAULT_BID_SECONDS` 30), `EXTEND_MS` 30,000, `TOKEN_PATTERN`; `parseSessionCode`, `makeSessionCode`, `isPhase`, `phaseIndex`, `nextPhase`, `atOrAfter`, `lotVisible` (reveal rule). |
| `source/domain/market.ts` | §6.3: `deal(seed)` (bit-exact, Appendix B), `SEED_PATTERN`, `instanceId`, `slotCard`, `MarketCard`. |
| `source/domain/missions.ts` | §6.6, §6.7: `blankTotals`, `sumEffects`, `shortfalls`, `compliant`, `score`. |
| `source/domain/ledger.ts` | §6.5: `LedgerEntry` (SALE, UNSOLD, VOID), `lotIndex`, `effectiveOutcomes` (replay), `hasCapacity`. |
| `source/domain/team.ts` | §8.5: `Team`, `Purchase`, `createTeams`, `withPurchases` (rebuild totals, cost and per-round counts), `canWin`, `acquire`, `removePurchase`, `bid`. |
| `source/domain/award.ts` | §6.12: `standing`, `compareStandings` (exact cross-multiplication), `rankAwards`, `costPerPointCents`. |
| `source/domain/instructor.ts` | §6 instructor commands on `InstructorState` (§8.3): `instructorShell`, `setLanguage`, `bidIncrementOf`, `generateSession`, `newSession`, `startPractice`, `practiceStep`, `openPlanning`, `selectMission`, `startAuction`, `reveal`, `openBidding`, `acceptBid`, `pause`, `resume`, `extend`, `commitSale`, `commitUnsold`, `voidCurrent`, `advance`, `openSubmissions`, `setPrivateEntry`, `setProfit`, `setSubmitted`, `closeSubmissions`, `closeRoom`; queries `currentCard`, `currentOutcome`, `nextOffer`, `auctionStatus`, `pendingSubmissions`, `ledgerFor`. Time and entropy are arguments. |
| `source/domain/student.ts` | §6.9 to §6.11 student commands on `StudentState` (§8.4): `studentShell`, `setLanguage`, `join`, `newSession`, `recordPracticeWin`, `resetPractice`, `openPlanning`, `selectMission`, `confirmVehicle`, `setPlanText`, `setMaxWtp`, `startAuction`, `setPosition`, `loadCard`, `editScratch`, `recordWin`, `notOurs`, `finishAuction`, `addMissingPurchase`, `removeOwnPurchase`, `openSubmit`, `draftProfit`, `setProfitInput`, `setProfitMode`, `finishSubmit`, `closeStudent`; `scratchKey`; limits `PLAN_MAX` 1,200, `NOTE_MAX` 600, `DEFAULT_MAX_WTP_CENTS`, `DEFAULT_PROFIT_CENTS`. |
| `source/domain/saves.ts` | §8.3 to §8.5, §8.8: `validateInstructor` and `validateStudent` (untrusted input: copy passively, check every invariant, rebuild derived values from canonical data, return the canonical state or throw), `instructorForSave` (what is stored: private entry off). |
| `source/domain/backup.ts` | §8.6: `BACKUP_FORMAT`, `BACKUP_VERSION`, `MAX_BACKUP_BYTES` 1,500,000, `MAX_BACKUP_CHARS` 500,000, `FORBIDDEN_KEYS` (per role), `passiveCopy`, `makeBackup`, `parseBackup`. |

**Application** (`source/app/`):

| Module | Contract |
|---|---|
| `source/app/controller.ts` | `Controller`: holds one role's state; `dispatch` runs a pure command, validates the complete result, then commits, saves (only when changed) and notifies; a thrown `DomainError` changes nothing and is returned as a result. |
| `source/app/ports.ts` | `StoragePort` (`available` probed once per load restoring any prior probe value, `read`, `write` only when changed, `remove`; never throws), `sessionStoragePort`, `memoryStoragePort`; `Clock` and `systemClock`; `randomHex` (crypto); `downloadText` (blob link, revoked after 30 s; false if refused); `timestamp` (local `YYYYMMDD-HHMM`). |

**Interface** (`source/ui/`) and entry:

| Module | Contract |
|---|---|
| `source/main.ts` | `parseRole`, `roleHref`, `supported` (dialog, `crypto.getRandomValues`, BigInt), `themeButton`, `start`: theme, language, unsupported notice, chooser with the lineup (§5.3), or one role. |
| `source/globals.d.ts` | Declares the three build constants of §5.5. |
| `source/ui/dom.ts` | `h` and `svg` element builders (text only as text; `style` and `on…` attributes refused; SVG `href` refused), `append`, `replaceChildren`. |
| `source/ui/i18n.ts` | `translate` (key lookup with `{name}` substitution, English fallback), `StringKey` (the keys of `content/strings.en.json`), `otherLanguage`, `detectLanguage` (`lang` parameter, else browser language starting with `fr`, else English). |
| `source/ui/format.ts` | §6.4 display without Intl data: `money`, `signed`, `list`, `seconds`, `labelled` (French spacing before `:`). |
| `source/ui/theme.ts` | §7.1: `themeFrom`, `applyTheme` (`data-theme` on the root), `withTheme`, `toggleTheme` (URL updated without reload). |
| `source/ui/dialog.ts` | `showDialog`: a modal `<dialog>` with title, body, actions and a cancel value; focus returns to the opener; resolves with the chosen value (§7.5). |
| `source/ui/reflow.ts` | `reflow`: a plain-text or Markdown licence file as display blocks (heading, paragraph, list); hard-wrapped lines of a paragraph or list item are joined, blank lines separate blocks, the file stays verbatim (G2). |
| `source/ui/about.ts` | `showAbout`: version line, then the licence and the notices each in a collapsed section of reflowed text (a first heading that repeats the section title is dropped). |
| `source/ui/components.ts` | §7.4 views: `missionName`, `effectsList`, `cardImage`, `cardDetails`, `missionTable`, `gapMeter`, `purchasesTable`, `complianceText`, `presentationQuestions`. |
| `source/ui/view.ts` | `RoleView`: shared shell (header, phase progress, menu with language, theme, export, import, About and Change role, notices), render with focus preservation, UI drafts kept across renders, command dispatch with localised errors, state-bound confirmations, import with undo (§8.7). |
| `source/ui/instructor.ts` | §7.2: `startInstructor`, `instructorBody` per phase, `practiceCard`, `ledgerPanel`, `awardSection`, `pauseOpenLot`; storage key `INSTRUCTOR_KEY`. |
| `source/ui/student.ts` | §7.3: `startStudent`, `studentBody` per phase; storage key `STUDENT_KEY`. |
| `source/ui/styles.css` | The design system (§7.1): colour tokens for the dark HUD and the light projector theme, type scale, spacing, focus style, motion tokens, layouts at 1280×720 and 320 px. |

**Showcase** (`source/showcase/`, §10):

| Module | Contract |
|---|---|
| `source/showcase/renders.ts` | `renders()` (the embedded render table, parsed once), `Render`, `VEHICLE` (mission to file stem), `cardRender`. |
| `source/showcase/glb.ts` | `vehicleGlb`: a copy of the embedded GLB whose scene holds only the named vehicle's root node, so the loader parses only that vehicle. |
| `source/showcase/pace.ts` | `FramePacer` and `FRAME_MS`: at most 30 draws a second, each next draw at least twice the last frame's gap later (at most 1 s), §10.3. |
| `source/showcase/model.ts` | `ModelStage` (one WebGL renderer, slow turn, drag, buttons, reduced motion, draws only while visible), `loadVehicle`, `webglAvailable` (WebGL 2 on a hardware renderer), `layerOf`, `partSlots`, `TURN_SECONDS`. |
| `source/showcase/showcase.ts` | `Showcase` (3D when available, else stills; text list of parts; process badges), `DecodedImages` (decode-once pool of §10.3), `stackOrder` (farthest first), `latestBySlot`, `latestPerSlot`, `TURN_STEP`. |

**Build, art and maintenance:**

| Module | Contract |
|---|---|
| `build/build.ts` | CLI: write `dist/index.html`, or with `--check` build twice and fail unless identical. |
| `build/render.ts` | `render()` (§5.5 pipeline), `MAX_BYTES`, `ROOT`, `OUT`, `RENDERS_DIR`, `MODELS_DIR`, `sha256`. |
| `build/template.html` | The page skeleton with the six placeholders of §5.5. |
| `art/blender/render.py` | The render job of §11.1. |
| `art/blender/export.py` | The 3D export of §11.1. |
| `art/blender/tris.py`, `art/blender/overlap.py` | Triangle budget and cross-slot collision checks (§10.2). |
| `art/blender/sea/__init__.py`, `art/blender/sea/parts/__init__.py`, `art/blender/sea/vehicles/__init__.py` | Empty package markers. |
| `art/blender/sea/scene.py` | Render settings, studio lights and reflection cards, shadow-catcher ground, cameras, layer visibility. |
| `art/blender/sea/materials.py` | Procedural physically based materials for stills and `realtime_palette()`, the same keys as plain glTF constants for the model. |
| `art/blender/sea/geo.py` | Mesh and curve builders; the `Builder` tags every object with its layer (`base` or a card ID); real-time detail level. |
| `art/blender/sea/mounts.py` | The `Mounts` every vehicle provides, the card-to-slot map `SLOTS`, the card-render mount. |
| `art/blender/sea/fleet.py` | Vehicle file stems and each hero still's loadout. |
| `art/blender/sea/vehicles/hull8.py` | The one fictional 8×8 hull family behind all six vehicles; mission differences in the base; returns the `Mounts`. |
| `art/blender/sea/parts/library.py` | Card ID to part builder, for the 49 physical cards. |
| `art/blender/sea/parts/common.py` | Shared part helpers. |
| `art/blender/sea/parts/cap.py`, `art/blender/sea/parts/mob.py`, `art/blender/sea/parts/fp.py`, `art/blender/sea/parts/pro.py`, `art/blender/sea/parts/com.py`, `art/blender/sea/parts/sa.py`, `art/blender/sea/parts/acc.py` | Seven part builders per category, placed only through `Mounts`. |
| `art/blender/sea/parts/tokens.py` | The 21 SE_PROCESS tokens (outline shape names the improved attribute, relief icon the review) and TRAIN-CAP. |
| `art/tools/encode-renders.ts` | `measure` (AVIF vs WebP sweep) and `encode` (trim, encode, write `content/renders/manifest.json`), §11.1. |
| `art/tools/pack-models.ts` | Merge the per-vehicle GLBs into one, weld, quantise, keep each vehicle a root node named by its stem. |
| `art/tools/concepts.ts` | Concept images through the Codex CLI into `.artifacts/concepts-v3/` (references only, D-14). |
| `art/tools/contact-sheet.ts`, `art/tools/build-composites.ts`, `art/tools/preview.ts` | Review aids: tiled sheets, base plus one part per slot, renders over a HUD backdrop. |
| `art/tools/measure-spike.ts` | Time to interactive and showcase update on the reference profile and without GPU (§14). |
| `scripts/gallery.ts`, `scripts/gallery/shots.ts`, `scripts/gallery/capture.spec.ts`, `scripts/gallery/playwright.config.ts` | The review gallery (§19.6). |
| `scripts/codebase.ts` | Writes `docs/CODEBASE.md` (§19.6). |
| `scripts/archive-prep.ts` | Backup preparation (§19.6). |

### 5.7 Configuration

| File | Settings |
|---|---|
| `package.json` | Name `sea-game`, `version` (first three parts of the game version), `gameVersion` (four parts, §19.2), private, MIT, author Shafiqur Rahman Khan, ES modules (`"type": "module"`), `engines.node` ≥ 22, the scripts below, exact pins (§5.4). |
| `package-lock.json` | Generated by npm; committed; the only source of transitive versions. |
| `tsconfig.json` | Target ES2022; libraries ES2023, DOM, DOM.Iterable; module ESNext with Bundler resolution; Node types; `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`, `noFallthroughCasesInSwitch`, `noEmit`, `allowImportingTsExtensions`, `resolveJsonModule`, `isolatedModules`, `verbatimModuleSyntax`, `erasableSyntaxOnly`, `forceConsistentCasingInFileNames`, `skipLibCheck`. Includes source, content, tests, build, art, scripts and the root config files; excludes `_archive`, `.artifacts`, `node_modules`, `dist`. |
| `eslint.config.mjs` | typescript-eslint recommended, plus: `no-eval`, `no-implied-eval`, `no-new-func`; `innerHTML`, `outerHTML`, `insertAdjacentHTML` and `document.write` forbidden; unused variables an error except arguments starting with `_`. In `source/`: the globals `fetch`, `XMLHttpRequest`, `WebSocket`, `EventSource`, `localStorage`, `indexedDB`, `alert`, `confirm`, `prompt` forbidden. In `source/domain/` also `document`, `window`, `Date`, `crypto`, `sessionStorage` and `Math.random`. Tests may use `any` (tamper fixtures). Ignores `_archive`, `.artifacts`, `dist`, `node_modules`, `test-results`, `coverage`. |
| `vitest.config.ts` | Includes `tests/unit/**/*.test.ts`, Node environment, excludes local folders; coverage by V8 over `source/domain/**`, into `.artifacts/coverage`, threshold 95% of lines. |
| `playwright.config.ts` | Browsers in `.artifacts/ms-playwright` unless CI; engines from `SEA_ENGINES` (default `chromium,firefox,msedge`); Firefox with `webgl.force-enabled`; Edge by `channel: msedge`; every engine ignores `perf.spec.ts`, which runs in its own Chromium project after all others; test folder `tests/e2e`, output `.artifacts/test-results`, fully parallel, no retries, `forbidOnly` and the list and GitHub reporters in CI (list locally), test timeout 120 s, action timeout 60 s, viewport 1280×720, trace kept on failure. |
| `.gitattributes` | Text with LF everywhere; PNG, JPEG, WebP, WOFF2 and AVIF binary. |
| `.gitignore` | `dist/`, `handoff/`, `_archive/`, `.artifacts/`, `node_modules/`, `test-results/`, `playwright-report/`, `coverage/`, `__pycache__/`, `RESTORE.md`. |
| `.github/workflows/ci.yml` | §16.5. |

**npm scripts** (each is also `npm run <name>`):

| Script | Runs | Purpose |
|---|---|---|
| `npm run typecheck` | `tsc -p tsconfig.json` | Types (§5.7). |
| `npm run lint` | `eslint .` | Code-safety and purity rules. |
| `npm run test` (also `npm test`) | `vitest run` | Unit, property and document tests. |
| `npm run coverage` | `vitest run --coverage` | Domain coverage ≥ 95%. |
| `npm run build` | `node build/build.ts` | Writes `dist/index.html` (§5.5). |
| `npm run check` | `node build/build.ts --check` | Two builds, byte-identical. |
| `npm run e2e` | `playwright test` | Browser suites against the built file (§16.3); needs a build. |
| `npm run verify` | typecheck, lint, test, check, build, e2e, stopping at the first failure | The authoritative local gate. |
| `npm run gallery` | `node scripts/gallery.ts` | Visual review page (§19.6). |
| `npm run codebase` | `node scripts/codebase.ts` | Writes `docs/CODEBASE.md` (§19.6). |
| `npm run archive:prep` | `node scripts/archive-prep.ts` | Backup preparation, dry run unless `--apply` (§19.6). |

Planned, not yet present: `npm run perf:ref` (the reference-laptop proxy, G3) and `npm run package` (the handoff package, G6).

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
- Price grid: **5,000,000 cents ($50,000)**. A purchase price is valid only if `price ≥ start` and `(price − start)` is a whole multiple of the grid.
- Bid increment: chosen by the instructor at setup from $50,000 (default), $100,000, $150,000, $200,000 or $250,000 (owner request, 2026-10-10). Every choice lies on the price grid, so students, who never learn the choice, validate prices exactly as before; corrections may use any grid price.
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

| Mode | Current lot visible | Earlier lots | Later lots of the current round | Later rounds |
|---|---|---|---|---|
| ROUND | Yes | Yes | Yes (the whole round is shown when it starts) | No |
| JIT (just in time) | Yes, automatically when reached | Yes | No | No |
| MANUAL | Only after the instructor selects Reveal | Yes | No | No |

A lot once revealed stays visible. The set of visible lots never shrinks. Reload, void and language change never reveal anything new.

**Timing modes:** TIMED (bid window 10–120 s, default 30 s) or UNTIMED.

**Per-lot sequence (instructor):**

1. *Reveal* (MANUAL mode only, when not yet revealed).
2. *Open bidding*. In TIMED mode a deadline is set to now + the bid window.
3. *Accept bid from team T*. The offer is the start price for the first bid, otherwise the current bid + the chosen bid increment. The command carries the amount shown on screen, so a repeated click cannot raise it twice ("stale" if it differs). Rejected when:
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
- It also shows the class-level comparison (a bar chart of scores with the ranking table as its text equivalent) and, for the student, its own plan baseline vs outcome.
- Both roles see the original game's presentation questions (compliance, priorities, trade-offs, profit, cost per point, three biggest risks, the purpose of one purchased SE process), so the debrief stays a discussion rather than an automatic optimisation (course source §18.18; see `docs/verification/source-fidelity.md`).
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
- **Safe defaults, progressive disclosure (owner, 2026-10-10).** Anticipate the flexibility instructors need, but never at the cost of burden: every option has a default that suits most classes and waits behind one collapsed section whose title states the current choices (setup: reveal mode, timer, bid increment under **More options**). The default path is one obvious action per screen; the app does the arithmetic and record-keeping.
- **Minimal clicks** for the live auction: one keystroke or click per bid acceptance; keyboard shortcuts shown on screen. At 1280×720 (100% zoom) the live lot's bid buttons, Sell, No sale and Next lot are fully visible without scrolling, because Firefox loses a click on a half-hidden button when it scrolls it into view (CI run 38064762108).
- **Plain HTML/CSS** for all controls and text, with native form elements, `<dialog>` for confirmations, and one `aria-live` status region per view.
- **War-room HUD design language (D-07).** A dark, tactical command-centre look (framed panels, grid and map textures, monospaced numeric readouts, restrained glow accents and photoreal imagery) applied as CSS on semantic HTML. Decoration never carries information on its own, never lowers contrast below §12 and never animates under `prefers-reduced-motion`. Visual references are inspiration only; nothing is copied.
- **One design system** shared by both roles: colour tokens, type scale, spacing, focus style, a dark HUD theme (the default) and a projector-safe light theme chosen by hand on the first screen or in the menu and kept in the URL (`theme=light`).

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

### 7.7 Game feel

The game feels alive only where that teaches or confirms (§1.4):

- Feedback within 100 ms of every command.
- Animated teaching gauges (weight, power, budget, compliance) that show integration penalties as they happen.
- Earned moments: a SECURED stamp on a win, a MISSION CAPABLE seal with a 3D roll-out turn, a debrief ceremony.
- An ambient war room (radar sweep, mission clock, status lines) in one shared animation loop that pauses when the page is hidden.
- Motion uses transform and opacity only, 150–300 ms, with tokens in `styles.css`.
- Sound is synthesized with Web Audio (no audio files). It is off on student devices, on in projector mode, and has a one-click toggle.
- **Guardrails:** reduced motion makes every effect instant; at most 3 flashes a second; a pause control for ambient motion; every sound has a visual twin; visual tests freeze ambient effects. The §14 budgets hold with every effect on.

### 7.8 Projector mode

A full-screen class view for the instructor's projector: the current lot, a live bid ticker, the countdown and standings. It shows only what the whole class may see (§6.5). Private entry (§4.2) stays the only place submissions are recorded. Supersedes D-06 (D-15).

### 7.9 About and licences

- Opened from the chooser and from each role's menu. Title "About this game"; one paragraph (`about.body`): "SEA Game {version}, © 2026 Shafiqur Rahman Khan, its creator. Original code and illustrations are MIT licensed. All values are instructional, not real equipment data. The game makes no network connections." (French equivalent in `content/strings.fr.json`). `LICENSE` holds "Copyright (c) 2026 Shafiqur Rahman Khan" and `package.json` names the same author. Then two collapsed sections: the licence and the third-party notices, both embedded at build (§5.5).
- The files stay verbatim. For display only, each is reflowed: the hard-wrapped lines of a paragraph or list item are joined into one, blank lines still separate paragraphs, list items stay separate items, Markdown headings become headings, and a first heading equal to the section's title is dropped. The text then wraps once, at the dialog's width, at 1366×768 and at 320 px alike (G2 owner fix: it used to break both at the file's line ends and at the window's edge).

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

Exactly these keys (`finalCallAnnounced` and `bidIncrement` optional):

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
| `deadline` | epoch ms or null; required when open and TIMED (or paused); always null when UNTIMED |
| `pausedRemaining` | ms ≥ 0 or null; null whenever the lot is closed (an open lot, timed or not, may be paused for review) |
| `leader` | team ID or null |
| `currentBid` | valid price or null; null iff leader is null |
| `ledger` | §6.5 entries, ≤ 210 |
| `seq` | equals the ledger length |
| `practice` | `{revealed, open, leader, closed}` booleans; all false outside practice |
| `privateEntry` | always saved as `false` (private mode never restores open) |
| `resultDraft` | null or `{team, price, reason}` strings (≤ 10, 20, 120 chars). **Compatibility-only:** kept so 4.1 saves round-trip; validated on import and cleared at every lot transition, never set or shown by 5.x |
| `bidIncrement` | optional; one of 5,000,000, 10,000,000, 15,000,000, 20,000,000, 25,000,000 cents; absent (earlier versions) means 5,000,000 |
| `finalCallAnnounced` | optional boolean. **Compatibility-only:** reset when a lot opens, extends or closes; 5.x never announces a final call |

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
| `vehicleConfirmed` | boolean; true from the auction phase on |
| `currentCard` | null or a card at the current slot |
| `plan`, `risks` | strings ≤ 1,200 |
| `planBaseline` | null or string ≤ 1,200; a string from the auction phase on (snapshotted when the auction starts) |
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

A backup is one JSON object, written by `JSON.stringify` without indentation, with these keys in this order:

| Key | Type | Value |
|---|---|---|
| `format` | string | Exactly `SEA-GAME-BACKUP`. |
| `version` | integer | Exactly 1. |
| `appVersion` | string | The game version that wrote it, at most 40 characters. |
| `ruleset` | string | Exactly `STANDARD`. |
| `deck` | string | Exactly `synthetic-v1`. |
| `schema` | integer | Exactly 3. |
| `sessionCode` | string | The session code (§6.2). |
| `role` | string | `INSTRUCTOR` or `STUDENT`. |
| `state` | object | The role state (§8.3 or §8.4), as saved. |

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
| Showcase image not yet decoded | A placeholder frame of the same size and the text list of installed parts; no layout shift. No game impact. |
| Storage denied, throwing or full | Persistent warning, play continues in memory, export emphasised. |
| Download blocked | Explain; offer copy-to-clipboard of the backup JSON as a fallback. |
| Invalid, oversized, wrong-role or other-session import | Specific message; no change. |
| Stale confirmation | Refuse; explain what changed. |
| Domain rejection (limit, increment, overflow, phase) | Inline message at the control; no change. |
| Timer expired | Bidding stops; commit or extend remains available. |
| Unsupported browser (missing required APIs) | Clear message listing supported browsers. |

---

## 10. Vehicle showcase

### 10.1 Purpose

Make the build tangible: the selected mission's base vehicle visibly gains parts as purchases are recorded. A learner can tell at a glance "we have a weapon station, light armour and a radio mast". The showcase is a teaching aid and the centrepiece of the war-room look (S7); it is not the interface.

### 10.2 Requirements

- **Two modes from one set of models.** On a hardware GPU with WebGL 2 the showcase shows the team's vehicle as an embedded real-time 3D model that turns slowly by itself and can be dragged or turned with buttons; installed parts appear on it as they are recorded. Without WebGL 2, on a software renderer (for example SwiftShader, llvmpipe or Microsoft Basic Render), or if the model fails to load, it shows the pre-rendered stills described below. Both modes are built from the same Blender scripts, so they show the same parts in the same places.
- Six original, fictional base vehicles, one per mission, authored in Blender (D-08, D-09) in one photoreal art direction: matte olive drab, physically based materials with wear, studio lighting suited to a HUD backdrop. Silhouettes stay readable at 320 px wide. No real equipment is depicted.
- Per vehicle: one hero still, a turntable of evenly spaced frames, and a small fixed set of build angles. The spike (§17, V1) fixes the counts; the starting point is 24 frames and 2 angles.
- **Build composition.** For each build angle the showcase stacks the base vehicle image and one transparent layer per installed part. Every layer is rendered from the same camera, with the hull held out and a shadow and ambient-occlusion catcher, so stacked layers occlude correctly and cast contact shadows. Draw order is each layer's camera distance, recorded in the manifest (§11): the farthest layer is drawn first.
- Each card category maps to visible attachment points (CAPACITY → hull modules; MOBILITY → running gear/powerpack; FIREPOWER → mounts; PROTECTION → armour panels; COMMS → antennas; SA → sensor masts/optics; ACCESSORIES → kits/trailer/winch/plough; SE_PROCESS → no geometry, shown as HUD process badges).
- **Mount slots.** Every physical card belongs to one mount slot (`art/blender/sea/mounts.py`; recorded per layer in the manifest). Parts in different slots are placed not to collide. When a team installs several parts in one slot, the showcase draws the most recently recorded one, says so, and lists every installed part. A layer fully hidden behind the hull at one angle is recorded in the manifest's `hidden` list instead of being embedded; a part is never hidden at both angles.
- Each of the 70 cards has a photoreal card render. Each of the 49 physical cards (every category but SE_PROCESS) also has a recognisable part and a layer for every vehicle and build angle (unless listed `hidden`); the 21 SE_PROCESS cards have no part and no layer.
- Controls, 3D mode: drag to turn, plus Pause turning, Turn left and Turn right buttons usable by keyboard. Under `prefers-reduced-motion` the model does not turn by itself. The animation loop stops while the showcase is off screen or the tab is hidden.
- Controls, stills mode: change angle and scrub the turntable by pointer, touch and keyboard. No autoplay; under `prefers-reduced-motion` the turntable does not animate.
- 3D model content: one glTF binary (`content/models/showcase.glb`, SHA-256 in its manifest) holding every vehicle base and every part as named nodes, plain metallic-roughness materials, ambient occlusion baked into vertex colours, no image textures. Exported by `art/blender/export.py` at real-time detail and packed by `art/tools/pack-models.ts`. The game parses only the vehicle it shows. Parts in different mount slots must not intersect (`art/blender/overlap.py`). Triangle budgets at export: a vehicle base ≤ 90,000, a part ≤ 8,000, a running-gear set ≤ 32,000 (`art/blender/tris.py`).
- A text list of installed parts is always available. The composed image has `role="img"` and an accessible name summarising the build.

### 10.3 Budgets (set at the visual spike, V1)

| Metric | Budget |
|---|---|
| All embedded imagery | ≤ 40 MB of the 50 MB file (§14), counted as the bytes it takes inside the HTML file (after base64). In this document 1 MB is 1,048,576 bytes |
| Showcase update after a purchase is recorded | ≤ 100 ms (p95), reference profile (§14) |
| Turntable or angle change | ≤ 50 ms, reference profile |
| Memory added by decoded images | ≤ 250 MB |
| 3D model ready (opening the tracker to the first drawn model) | ≤ 3 s, reference profile |
| 3D model update after a purchase is recorded | ≤ 100 ms, reference profile |
| Memory added by the 3D showcase | ≤ 400 MB |
| 3D drawing rate and share of the machine | ≤ 30 frames a second; a drawn frame is timed by the gap to the next animation frame, and the next draw waits at least twice that (at most 1 s), so drawing never takes more than half the machine. Drags, key turns and resizes draw in the next paced frame, never synchronously |
| Still decoding | Each still layer is decoded once and reused; what the player can ask for next is prepared nearest first as soon as the shown view has decoded, never left for idle time (a busy machine may have none before the next step): first the layers of the card the player has loaded, at this angle and then the other, so recording it never waits for a decode; from an angle, the other angle and the turntable frame shown on entry with the frames either side; when turning, the frames ahead in the direction of travel, then behind. A step never creates a new image. Prepared images decode one at a time, so at most one background decode competes with the image the player is waiting for. Images on screen and the prepared set (what the player can ask for next, up to 20 layers per angle) are never dropped; of the rest, at most 24 decoded images are kept, least recently used dropped first (about 88 MB together, within the decoded-image budget above); a unit test proves a prepared image is never evicted (G2). Image decoding runs off the main thread, so CPU throttling does not show its cost: the oracle is that no layer is decoded twice while it is on screen, prepared or kept (an image dropped from the 24 kept may be decoded again later; the browser test's sequence of purchases, angle changes and turntable steps stays within what is kept). Decoding cost grows with pixels, transparent ones included, so every placed image (build layers and bases, turntable frames) is trimmed to the pixels visible at 8-bit output plus a 2 px apron (CI run 38136462558: near-full-frame layers made a purchase wait 212 ms); a unit test checks every one |

### 10.4 Technique per element

| Element | Technique |
|---|---|
| Interface | CSS and inline SVG on semantic HTML; never text in images |
| Backgrounds | At most 3 AVIF backgrounds from AI concepts, with provenance recorded (D-14) |
| Vehicles and parts in the showcase | Real-time glTF with baked lighting and adaptive quality tiers (§14) |
| Hero, cards and the no-GPU fallback | Cycles renders encoded as AVIF at quality 65 |
| AI concept images | Art direction only; never shipped |

Renders are reproducible: pinned Blender version, fixed seeds, sample counts and cameras. Renders are committed with their SHA-256 in the manifest; a re-render that changes bytes is a deliberate, reviewed change.

---

## 11. Content and imagery

- 77 subjects: 70 cards (Appendix A IDs), 6 vehicles (`combat`, `recce`, `troop-carrier`, `command-post`, `recovery`, `mine-clearing`) and 1 practice card (`TRAIN-CAP`). Each card has a photoreal card render; each vehicle has the showcase set of §10.
- Format: AVIF or WebP, chosen at the spike by measured quality and size, embedded once as `data:` URIs and reused. `content/renders/manifest.json` lists every file with id (the file stem, which names the vehicle and angle), kind, frame, trimmed offset and size, draw order (camera distance), bytes and SHA-256. Alt text is not stored: the app derives it at runtime from the canonical EN/FR card and mission titles (Appendix A), so imagery and text cannot drift apart.
- Source (D-09, superseding the SVG art of D-02): **original imagery and models authored by the implementing agent** with Blender scripts in `art/blender/`, released under the project MIT licence. AI-generated concept images and AI-assisted modelling (D-14) are used as references and to write those scripts; concept images are never shipped. Blender's own licence does not extend to its renders. Third-party models or textures are used only if their licence allows embedding and redistribution, and they are listed in THIRD_PARTY_NOTICES.md; procedural or CC0 material is preferred.
- Size budget for all embedded imagery: ≤ 40 MB.
- Imagery never drives rules. A mismatch between imagery and data is a content defect.
- All content stays fictional and instructional (no real equipment names, manufacturers, ratings or operational data). Visual references are inspiration only.

### 11.1 Content files and the art pipeline

**Content files** (all UTF-8 JSON with LF; the build and the tests read them):

| File | Shape |
|---|---|
| `content/cards.json` | Array of 70 objects in Appendix A order: `id` (string), `category` (CAPACITY, MOBILITY, FIREPOWER, PROTECTION, COMMS, SA, ACCESSORIES or SE_PROCESS), `en` and `fr` (exact titles), `startCents` (integer), `effects` (object from capability code to signed integer; only non-zero effects). |
| `content/missions.json` | Array of 6 objects: `id` (mission ID of Appendix A), `en`, `fr`, `minimums` (object from capability code to integer). |
| `content/strings.en.json`, `content/strings.fr.json` | One flat object from string key to text, the same keys in both; `{name}` marks a substitution. Every interface word is here, none in code. |
| `content/renders/manifest.json` | `blender` (version text), `seed` (20261010), `format` (`avif`), `quality` (65), `totalBytes`, `hidden` (render ids whose layer is fully behind the hull), `entries`: array of {`file`, `kind` (`card`, `hero`, `turntable`, `build-base`, `build-layer`), `id` (file stem), `depth` (camera distance, metres), `bytes`, `sha256` (hex), `frame` {`width`, `height`}, `offset` {`left`, `top`}, `size` {`width`, `height`}, `slot` (build layers only)}. |
| `content/renders/` | The encoded stills, one AVIF per manifest entry, named `<id>.avif`: `card-<CARD ID>`, `<vehicle>-hero`, `<vehicle>-turntable-<00..23>`, `<vehicle>-<front|rear>-base`, `<vehicle>-<front|rear>-<CARD ID>`. |
| `content/models/manifest.json` | `file` (`showcase.glb`), `bytes`, `sha256` (hex), `source` (the commands that made it). |
| `content/models/showcase.glb` | The packed 3D model of §10.2: one scene; one root node per vehicle named by its stem, holding `base` and one node per part card (its slot in the node's extras); quantised attributes (`KHR_mesh_quantization`), baked ambient occlusion in `COLOR_0`. |

**Pipeline** (all offline, one Blender job at a time; `art/README.md` holds the exact command lines):

1. Unzip the pinned Blender (§5.4) into `.artifacts/tools/`.
2. Render: Blender in background mode with factory settings runs `art/blender/render.py` with an output folder (options: vehicles, outputs `hero`, `turntable`, `build`, `cards`, part IDs, `--preview`, `--metadata-only`). It writes 16-bit RGBA PNG masters with transparent backgrounds and `renders.json` (draw depth and slot of each shot). Cycles with a fixed seed and sample counts; the two build angles are yaw 38° pitch 10° (front) and yaw 218° pitch 12° (rear). Sizes: hero 1600×900, build layers and bases 1280×720, turntable 960×540 × 24 frames, card 512×512.
3. Encode: `node art/tools/encode-renders.ts encode <masters> content/renders avif 65` trims each placed image to the pixels visible at 8-bit output plus a 2 px apron (cards and heroes keep their full margin trim), lists fully hidden layers under `hidden`, encodes with sharp and replaces `content/renders/` with the files and the manifest. `measure` compares AVIF and WebP qualities over the masters.
4. Check the model: `art/blender/tris.py` (budgets of §10.2) and `art/blender/overlap.py` (exit code 1 on any cross-slot intersection).
5. Export: `art/blender/export.py` writes one GLB per vehicle at real-time detail with ambient occlusion baked by Cycles into vertex colours (the base over a ground plane, each part alone).
6. Pack: `node art/tools/pack-models.ts <exports> <packed.glb>` merges, deduplicates, welds, quantises and prunes; copy the result to `content/models/showcase.glb` and write its size and SHA-256 into `content/models/manifest.json`.
7. Review: contact sheets and build composites (base plus one part per slot), then `npm test` (render and model manifest tests check completeness, slots, hashes, trims and the 40 MB budget), then the owner's visual check (§19.6).

Cycles output varies slightly between GPUs and drivers, so a re-render matches in look and size, not byte for byte; the committed bytes and their manifest hashes are the reference.

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
  - every chart and the vehicle showcase paired with a text or table equivalent;
  - `lang` attributes switch with language.
- Timer: TIMED mode is controlled by the instructor (pause/extend). Students are never subject to a time limit in their own app.
- Narrow windows and high zoom: dialogs stay within the visual viewport, including when the Windows touch keyboard is shown.

---

## 13. Security and privacy

### 13.1 Content Security Policy (meta tag, generated at build)

The build writes these directives, in this order, joined by `; ` into the `content` of a `<meta http-equiv="Content-Security-Policy">` tag:

| Directive | Value |
|---|---|
| `default-src` | `'none'` |
| `script-src` | `'sha256-<base64 SHA-256 of the inline script>'` |
| `style-src` | `'sha256-<base64 SHA-256 of the inline style>'` |
| `img-src` | `data:` |
| `font-src` | `'none'` |
| `connect-src` | `'none'` |
| `media-src` | `'none'` |
| `object-src` | `'none'` |
| `frame-src` | `'none'` |
| `worker-src` | `'none'` |
| `manifest-src` | `'none'` |
| `base-uri` | `'none'` |
| `form-action` | `'none'` |

The backup download uses a `blob:` link, which is navigation, not a fetched resource, so no directive allows `blob:`. Add only what is demonstrated necessary: `font-src data:` only if an embedded OFL font is used (D-07), `worker-src blob:` only if a worker is qualified. Record the reason in the handover. Note that meta CSP cannot enforce `frame-ancestors` or reporting; do not claim them.

### 13.2 Rules

- Imported and typed text is inert data (C-11). Unicode is preserved exactly; no normalisation that changes stored text.
- External links (for example to the licence text) use `rel="noopener noreferrer"` and are optional references, never runtime dependencies. Nothing in the app, `START-HERE.md`, the guides, `LICENSE`, `THIRD_PARTY_NOTICES.md` or the release notes links to GitHub (D-13). The maintenance folder (git bundle and source snapshot) is source, not a user document: its history and `.github/workflows/ci.yml` describe the temporary CI and are kept as they are.
- No `localStorage`, cookies or IndexedDB. Only `sessionStorage` (§8.1).
- The privacy notice in Help states plainly what is stored, where and for how long, and what an export contains.
- A public static HTML file is inspectable by anyone. Do not describe the market seed as secret from a technically skilled student; the guarantee is that the **student UI and exports** never show it (C-08).

---

## 14. Performance budgets (calibrated at the visual spike, V1)

**Reference laptop (D-11, D-16):** the lowest common denominator of business laptops at most 3 years old (Lenovo, dynabook, Dell, HP): Intel Core i3/i5 U-series or Ryzen 5 U; Intel UHD/Iris Xe or Radeon Vega 7 graphics; 8 GB single-channel memory; 1080p at 125–150% scaling or 1366×768; dim panels; a touchpad; Edge; battery saver on. No physical laptop test will be made. **Proxy:** Chromium and Edge forced onto this PC's Intel UHD 770 with 4× CPU throttling at 1536×864 @1.25, 1280×720 @1.5 and 1366×768 @1, with 2× GPU headroom (`npm run perf:ref`, from G3). The proxy, not a laptop, is residual risk.

| Metric | Target |
|---|---|
| HTML file size | ≤ 50 MB hard limit; target ≤ 40 MB |
| Time to interactive, chooser | ≤ 2 s, reference profile (confirmed or revised at V1 from measurements) |
| Time to interactive, role with maximum saved state | ≤ 3 s, reference profile |
| Command response (click to rendered result) | ≤ 100 ms (p95) |
| Memory after a full 70-lot, 10-team session | ≤ 400 MB including decoded images, no growth across 10 phase cycles |
| Interaction to next paint (INP) | ≤ 200 ms; LCP ≤ 2.5 s; CLS ≤ 0.1; no long task > 200 ms after load |
| 3D showcase on the proxy | Ready ≤ 3 s; p95 frame ≤ 33 ms with GPU frame ≤ 16 ms; memory ≤ 300 MB where headroom allows (never above §10.3) |
| Idle CPU on any view | ≤ 3% over 60 s |

---

## 15. Requirements and acceptance map

Each requirement must be **accepted** for a release (§21). Acceptance evidence types: U = unit/property test, E = Playwright browser test on the built file, M = manual check with recorded result, P = classroom pilot.

| ID | Requirement | Evidence |
|---|---|---|
| RQ-01 | Single HTML file (≤ 50 MB); works via `file://` offline in Tier 1 browsers for both roles. | E, M |
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
| RQ-21 | Desktop and narrow-window layouts on Windows 11; 320 px reflow; 400% zoom. | E, M |
| RQ-22 | Vehicle showcase requirements and budgets; correct layer composition (§10). | E, M |
| RQ-23 | 77 photoreal subjects embedded, mapped by a hashed manifest and alt-texted (§11). | U, M |
| RQ-24 | CSP and code-safety rules (§13); no unsafe sinks (lint rule). | U |
| RQ-25 | Deterministic, reproducible build: two builds byte-identical (§5.5). | U, CI |
| RQ-26 | Performance budgets (§14). | M |
| RQ-27 | Third-party notices complete and visible in-app. | U, M |
| RQ-28 | Degraded states (§9). | E |
| RQ-29 | Classroom pilot meets S1 to S5 (§16.6). | P |
| RQ-30 | Operator documentation: quick start, recovery, release/rollback (§19). | M |
| RQ-31 | Immersive war-room presentation (S7): HUD on every view; owner GO at the visual gates (§17). | E, M |
| RQ-32 | Handoff package complete, hash-verified and self-sufficient without GitHub (§19.3). | U, M |

Gates outside the code:

- **G-RIGHTS**: closed by D-09. All code and imagery are original MIT work; any third-party material is covered by RQ-27.
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

### 16.3 Browser (Playwright, built file, `file://`, Chromium, Firefox and Edge on Windows 11)

- **J1**: full English session, 2 teams, TIMED, JIT: all 70 lots, including a correction, a void and replacement, unsold-with-leader, the two-win limit, pause/extend, submissions, award and close. Totals must match the oracle.
- **J2**: full French session, 10 teams, UNTIMED, MANUAL, including tied awards.
- **J3**: student journey in parallel with J1 (separate context): join, practice, planning, tracking, missed purchase, reconciliation, submit.
- **J4**: recovery: reload at each phase; export, close context, import into an empty context; corrupted, oversized and wrong-role files; storage denied (stubbed port).
- **J5**: privacy: inspect the student DOM, accessibility tree, exports and console at each phase for forbidden data.
- **J6**: accessibility: axe on every view at 1280×720 and in a narrow 375 px window in both languages; keyboard-only run of J3.
- **J7**: network: every journey runs with all requests failed. The test fails if any request is attempted.
- **J8**: visual: screenshot baselines of every phase view in both roles and of every vehicle angle (Chromium, Windows).

**Test files.** Each file begins with a comment naming the requirements it covers. Oracles never import `source/domain/`.

| File | Covers |
|---|---|
| `tests/unit/spec.ts` | Shared oracle: reads Appendix A, Appendix B and the §6.6 mission table straight from this document. |
| `tests/unit/rules.test.ts` | RQ-04, 05, 09: canonical data, deal vectors, money, scoring, awards, against `tests/unit/spec.ts` and hand values; properties with fast-check. |
| `tests/unit/instructor.test.ts` | RQ-03, 06 to 08, 10, 11: instructor commands and every rejection. |
| `tests/unit/student.test.ts` | RQ-12, 14: student commands (§6.9 to §6.11). |
| `tests/unit/saves.test.ts` | RQ-08, 14, 16, 17: the legacy backups import; one mutation per invariant is rejected; envelope limits. |
| `tests/unit/controller.test.ts` | R-ARCH-2, §8.1, §8.7: commit, save and reset through a memory port. |
| `tests/unit/format.test.ts` | RQ-05 display, RQ-19 French typography. |
| `tests/unit/content.test.ts` | RQ-19: EN and FR have the same keys and placeholders, no empty string; content matches Appendix A. |
| `tests/unit/build.test.ts` | RQ-01, 24, 25, 27: one file, CSP hashes match the inline script and style, no remote reference, size, notices, copyright line, determinism. |
| `tests/unit/renders.test.ts` | §10.2, §11: every subject rendered, every layer with a draw depth and slot, hashes, trims, the 40 MB budget. |
| `tests/unit/glb.test.ts` | §10, §14: the model holds six vehicles; the game parses one. |
| `tests/unit/showcase.test.ts` | §10.2, §10.3: draw order, latest part per slot, the decoded-image pool. |
| `tests/unit/pace.test.ts` | §10.3: frame pacing. |
| `tests/unit/reflow.test.ts` | G2: licence and notices reflowed for display, files verbatim. |
| `tests/unit/docs.test.ts` | S1, RQ-30: every control the quick-start guide names exists, in the same language. |
| `tests/unit/gallery.test.ts` | §19.6: the gallery's shot list covers every view, role, language, size and vehicle. |
| `tests/unit/codebase.test.ts` | §19.6: `docs/CODEBASE.md` rebuilds every tracked file in a temporary folder with matching hashes, and is current (bound 60 s). |
| `tests/unit/archive.test.ts` | §19.6: on a temporary clone, `archive:prep --apply` keeps what is irreplaceable and the restore gives the same build hash. |
| `tests/unit/mpes.test.ts` | §0: this document has no code block and names every tracked file, npm script, package pin, CSP directive and goal G3 to G8. |
| `tests/e2e/helpers.ts` | The built file's `file://` URL, the network guard (any request fails the test), console error collection, fixture import. |
| `tests/e2e/roles.ts` | Page drivers for the two roles. |
| `tests/e2e/oracle.ts` | Browser oracle: card data from this document, scoring re-derived from §6.6, §6.7 and §6.12. |
| `tests/e2e/journey-en.spec.ts` | J1, J3, J5, J7. |
| `tests/e2e/journey-fr.spec.ts` | J2, J7; starts from `tests/fixtures/j2-plan.json` (seed, missions, expected score and lot plan). |
| `tests/e2e/recovery.spec.ts` | J4, RQ-15, 16, 28. |
| `tests/e2e/a11y.spec.ts` | J6, RQ-20, 21. |
| `tests/e2e/slice.spec.ts` | M2 slice: one round, both roles, persistence, export and import, languages. |
| `tests/e2e/increment.spec.ts` | The bid increment chosen at setup (§6.5). |
| `tests/e2e/layout.spec.ts` | §7.1: live-lot actions fully visible at 1280×720. |
| `tests/e2e/chooser.spec.ts` | The chooser: offline, languages, both roles, the six-vehicle lineup by keyboard and touch, About. |
| `tests/e2e/showcase.spec.ts` | §7.1, §10, §11: the HUD look, card renders, 3D and stills modes. |
| `tests/e2e/rehearsal.spec.ts` | §16.6 pilot substitute. |
| `tests/e2e/visual.spec.ts` | J8 baselines in `tests/e2e/visual.spec.ts-snapshots/` (Chromium on Windows; About at 1366×768 and 320 px). |
| `tests/e2e/perf.spec.ts` | RQ-26: §14 and §10.3 budgets on the reference profile. |

The legacy fixtures in `tests/fixtures/legacy/` are twelve schema-3 backups exported by the previous application (instructor setup, planning, auction open then paused (one file), build, maximum ledger, closed; student practice, planning in French, auction, build, closed, closed with a mixed-case code), §8.8.

### 16.4 Manual checks (recorded in `docs/verification/<version>.md`)

- OS-level egress observation while running J1 offline (for example Windows `pktmon` or an outbound-deny firewall profile): zero outbound connections from the browser process attributable to the page.
- Screen-reader and device substitute (owner-delegated): accessibility-tree snapshots of every view, axe scans, keyboard-only journeys, and Playwright runs in Chrome (Chromium), Edge and Firefox on Windows 11 for the §4.3 matrix. Real screen-reader (Narrator, NVDA) and physical-device runs are residual risk.
- OS-level egress: observe with tools already present on the machine and usable without installation; if none is usable, record BLOCKED.
- Performance measurements (§14).
- Visual review of all 77 subjects and the six vehicles with every category installed.

### 16.5 CI (temporary, D-13)

While the GitHub repository exists, GitHub Actions on Windows (hosted runners are Windows Server; Windows 11 evidence comes from local runs), Node current and previous LTS:

1. `npm ci`
2. typecheck
3. lint
4. unit tests
5. build twice and compare (`npm run check`), including the size and notice checks
6. Playwright (Chromium, Firefox and Edge on current LTS; Chromium on previous LTS)
7. on `main`: deploy the built file to GitHub Pages for human QA

`.github/workflows/ci.yml` runs on every push to `main` and every pull request, with `contents: read`:

| Job | Runner | Steps |
|---|---|---|
| `verify` | `windows-latest`; Node 22 and 24, not fail-fast | Check out without persisted credentials; set up Node; `npm ci --no-audit --no-fund`; `npm run typecheck`; `npm run lint`; `npm test`; `npm run check`; `npm run build`; `npx playwright install` of Chromium, plus Firefox on Node 24; `npx playwright test` with `SEA_ENGINES` = `chromium,firefox,msedge` on Node 24 and `chromium` on 22 (Edge is preinstalled on the runner); on failure upload `.artifacts/test-results` as `playwright-windows-<node>`, kept 7 days. |
| `pages` | `ubuntu-latest`, Node 24; only on push to `main`, after `verify`; environment `github-pages` | Check out, `npm ci --no-audit --no-fund`, `npm run build`, upload `dist/` as the Pages artifact, deploy (`pages: write`, `id-token: write`). |

| Action | Pinned commit (version) |
|---|---|
| `actions/checkout` | `11d5960a326750d5838078e36cf38b85af677262` (v4) |
| `actions/setup-node` | `49933ea5288caeca8642d1e84afbd3f7d6820020` (v4) |
| `actions/upload-artifact` | `ea165f8d65b6e75b540449e92b4886f43607fa02` (v4) |
| `actions/upload-pages-artifact` | `fc324d3547104276b827a68afc52ff2a11cc49c9` (v5.0.0) |
| `actions/deploy-pages` | `368f82528645a54fb793d4d04e342629a3f51346` (v5.0.1) |

Actions are pinned by commit SHA, with read-only permissions except the Pages deployment. Local `npm run verify` is authoritative and is the only verification once the repository is deleted. Evidence is recorded in `docs/verification/` as text, never as links to CI runs.

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

Each milestone ends with a tagged commit, green CI (while GitHub exists) and an updated handover. M0 to M4 are complete. The 2.x milestone M5 (WebGL bay and SVG art) is superseded by V1 and V2.

| Milestone | Content | Exit criteria |
|---|---|---|
| **M0 Bootstrap** | Repository skeleton (§18), tooling pinned, CI, licence, `.gitattributes`, empty chooser page built into `dist/index.html`, CSP generation, size check. Support matrix confirmed. | Done. |
| **M1 Domain** | All of §6 in `domain/`, Appendix A/B data, schema-3 validators, backup envelope, fixtures cross-checked against the previous app. | Done. |
| **M2 Vertical slice** | Both roles end-to-end in plain HTML for one round, persistence, export/import, EN/FR. | Done. |
| **M3 Full game** | All 70 lots, all phases, all commands, all confirmations, private entry, debrief, award, all degraded states, teaching aids. | Done. |
| **M4 Pilot** | Classroom quick start (EN/FR), recovery guide; pilot substitute (§16.6). | Done (substitute). |
| **V1 Visual spike** | MPES 3.0.0; pinned Blender toolchain; RECOVERY vehicle and 3 parts (hero still, turntable, 2 build angles with layers, card renders); AVIF vs WebP; HUD prototype of the instructor live lot and student tracker; size and speed measurements. | Spike on Pages for QA; `docs/verification/spike-visual.md`; **owner GO or NO-GO**. |
| **V2 Visual production (G1)** | All 77 subjects, the interactive 3D showcase with stills fallback (D-08), the HUD on every view, `dist/` no longer committed, Pages deployed by CI; shared agent rules and the KPIs (§1.4). | RQ-22, 23, 31 accepted; art review scripted for the owner. |
| **G2 Owner fixes and docs regime (0.5.1.0)** | Copyright to the creator; reflowed licence and notices; six-vehicle chooser lineup; decoded-image pool never evicts prepared images; review gallery (`npm run gallery`); this specification without code; `docs/CODEBASE.md` (`npm run codebase`); backup preparation (`npm run archive:prep`); driving Codex headless. | Each item tested; owner GO on the gallery; tag `v0.5.1.0`. |

From here each goal is one PR from `main`, ends with green verification and two consecutive green CI runs on one head, the owner's GO on the gallery (§19.6), a merge commit and a tag:

| Goal | Version | Content | Exit criteria |
|---|---|---|---|
| **G3 Proxy and runtime** (was V3) | 0.6.0.0 | Reference-laptop proxy rig and `npm run perf:ref` (UHD 770 proxy, D-16) with its measurement protocol written into §14 (samples, percentiles, frame and memory definitions), every §14 gate, baked lighting, adaptive quality tiers, WebGL context-loss recovery, touchpad and panel safety. | RQ-26 accepted on the proxy; realism review scripted for the owner. |
| **G4 Hyper-real assets** | 0.7.0.0 | Vehicles, parts and cards raised towards the concept images (D-14) within the §10.3 and §14 budgets; Codex concepts, textures and decals where they raise quality; re-render, re-export, re-pack. | Owner GO on the art review; budgets still pass. |
| **G5 Classroom** (was V4) | 0.8.0.0 | UX review and fixes, workload, learnability, teaching aids, game feel (§7.7), projector mode (§7.8), fault tests. | Agent-measurable KPIs pass; dry run and pilot scripted. |
| **G6 Hardening** (was M6) | 0.9.0.0 | Accessibility manual passes, Windows 11 matrix, egress observation, notices, security review, content review, the packager `npm run package`, and the rule edge cases of §0.2 written into §6 and §8 from the tests. | RQ-01, 02, 19 to 21, 24, 25, 27, 32 accepted; G-CONTENT pass. |
| **G7 Release candidate** (was M7) | 0.9.1.0 | Freeze, three release passes on the package (§21), docs (RQ-30), handoff package delivered as a beta. | §21 satisfied; package delivered to the owner. |
| **G8 Beta exit** | 1.0.0.0 | Every beta exit criterion of §19.2 met: owner GO on art and realism, dry run and learner pilot run and applied, screen-reader pass, every KPI PASS. | §19.2 criteria recorded; package re-issued as 1.0.0.0. |

4.1.0-dev.1 (tag `v4.1.0-dev.1`) remains the rollback until G7 and ships in the package's `rollback/` folder.

---

## 18. Repository layout

The repository root is `D:\VSCode\SEA-Game`. Source, tests, content, build, art and scripts files are named in §5.6, §11.1 and §16.3; the rest are:

| Path | Holds |
|---|---|
| `LICENSE` | "The MIT License", a blank line, "Copyright (c) 2026 Shafiqur Rahman Khan", then the standard MIT text, hard-wrapped, LF. |
| `THIRD_PARTY_NOTICES.md` | The game file bundles one library, three.js, and no third-party fonts or assets; all imagery and models are original, made by the scripts in `art/blender/` with Blender 5.2.2 (GNU GPL, which does not extend to its output) and released under MIT; AI concept images are not in the game; build and test tools are not in the game; then three.js with its version, copyright and full MIT text. |
| `README.md` | What the game is, how to open it, the npm scripts, the docs and the version. |
| `AGENTS.md` | Agent working rules (§20): numbered, short, including the Codex commands. |
| `CLAUDE.md` | One line: read `AGENTS.md`, then `docs/HANDOVER.md`; the specification is `docs/MPES.md`. |
| `package.json`, `package-lock.json`, `tsconfig.json`, `eslint.config.mjs`, `vitest.config.ts`, `playwright.config.ts`, `.gitattributes`, `.gitignore`, `.github/workflows/ci.yml` | §5.7, §16.5. |
| `art/README.md` | The art pipeline's exact command lines, toolchain table, layout and sizes (§11.1). |
| `docs/MPES.md` | This specification. |
| `docs/CODEBASE.md` | Every tracked file's exact text and every binary's hash (§19.6). |
| `docs/HANDOVER.md` | Current state and next action (§19.1). |
| `docs/CLASSROOM_QUICK_START.md` | The facilitator's guide, EN and FR, naming the app's controls word for word (checked by `tests/unit/docs.test.ts`). |
| `docs/RECOVERY_GUIDE.md` | Backup, restore and recovery steps, EN and FR. |
| `docs/owner/art-review.md` | The owner's art review script (one page). Later owner-only steps go in `docs/owner/` too. |
| `docs/verification/0.5.0.0.md`, `docs/verification/<version>.md` | Evidence for each released version, as text: every check with its command and PASS, FAIL, NOT_RUN or BLOCKED. |
| `docs/verification/spike-visual.md` | V1 spike measurements and decision. |
| `docs/verification/source-fidelity.md` | How the rules were checked against the previous application and the owner's course source. |
| `content/renders/` | The encoded stills (§11.1). |
| `content/models/showcase.glb` | The packed 3D model (§11.1). |
| `tests/e2e/visual.spec.ts-snapshots/` | J8 baselines: PNG per view, named `<view>-chromium-win32.png`; made by `npx playwright test tests/e2e/visual.spec.ts --project=chromium --update-snapshots` after `npm run build`, each change reviewed. |
| `tests/fixtures/legacy/` | §16.3. |
| `tests/fixtures/j2-plan.json` | §16.3. |

Not committed: `dist/` (D-12), `handoff/` (§19.3), `node_modules/`, `.artifacts/` (scratch, browsers, Blender, masters, concepts, evidence, logs, the review gallery) and `_archive/` (the read-only copy of all pre-rebuild material and the recycle bin `_archive/recycle/<date>/`; deleted by the owner after release, so nothing may depend on it). Files are never deleted: they are moved to the recycle bin.

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

- The game version is four-part **MAJOR.MINOR.PATCH.BUILD**, held as `gameVersion` in `package.json` (`version` there is its first three parts, because npm requires SemVer). The rebuild is beta: it was renumbered on 2026-10-11 from 5.0.0-dev.1 (never tagged) to **0.5.0.0**, and it stays 0.x until it is out of beta. The numbering restarted, so versions of the earlier line (3.6.0 to 4.1.0-dev.1) are ordered by date, not by number.
- **Out of beta (1.0.0.0)** only when all of these hold: §21 is satisfied on the package; every §1.4 KPI is PASS; and no gate is still BLOCKED-owner (the owner replied GO to the art and realism reviews, the dry run and the learner pilot ran and their results are applied, and the screen-reader pass is done). Until then every release, G7 included, stays 0.x (G7 ships 0.9.1.0 as a beta handoff package; §17), and the version goes to 1.0.0.0 in the PR that records the last criterion met.
- BUILD: a change with no behaviour change (tests, documentation, tooling, CI).
- Patch: fixes with no behaviour change to rules or saves. Minor: compatible features. Major: interface or architecture change, or any save-format change (which also requires a migration and a new schema number). While in beta (0.x) such a change bumps MINOR instead, as the goals of §17 do; a save-format change still needs its migration and schema number.
- The version is shown in the app (Help → About) and embedded in exports as `appVersion`.

### 19.3 Release (local handoff package, D-13)

1. Freeze (§21).
2. Tag `v<version>` in the local repository.
3. `npm run package` builds `handoff/SEA-Game-<version>/`:
   - `SEA-Game-<version>.html` and `SHA256SUMS.txt`;
   - `START-HERE.md` (EN/FR: open the file, verify the hash, back up a session);
   - `guides/` (quick start and recovery, EN/FR), `LICENSE`, `THIRD_PARTY_NOTICES.md`;
   - `rollback/` (the previous accepted release HTML);
   - `maintenance/`: a git bundle with full history, a source snapshot, this MPES, HANDOVER, `RELEASE.md` (written by `npm run package`: version, date, tag, HTML SHA-256, what changed, known issues) and verification documents, and `toolchain.md` (Node, npm, Blender and browser versions with download URLs and SHA-256). A rebuild from the package downloads its tools and npm packages from those URLs; the package does not hold tool binaries.
4. Verify `SHA256SUMS.txt`, open the HTML offline from the package, and confirm no user document in it links to GitHub (§13.2). `SHA256SUMS.txt` has one line per file except itself: the lowercase hex SHA-256, two spaces, the path relative to the package folder with forward slashes; lines sorted by path in byte order, UTF-8, LF. The package's identity is the SHA-256 of `SHA256SUMS.txt`. The verification and handover documents in the package are those at the tag; the evidence of the release passes is recorded after packaging, in a BUILD-only commit that does not change the package.
5. Record the evidence as text in `docs/verification/<version>.md`.

GitHub Pages and GitHub Releases are not part of a release. Deleting the GitHub repository is the owner's action.

### 19.4 Rollback and support

- The package keeps the previous accepted release in `rollback/`. Until the first package (G7) the rollback is tag `v4.1.0-dev.1`, the previous application; its HTML is committed in that tag's `dist/` folder. A tag of the rebuild (from `v0.5.0.0`) does not commit `dist/`: its built file is `git archive <tag>`, `npm ci`, `npm run build`.
- Rollback means distributing that file; saves stay compatible within schema 3.
- Support path: the user reports → reproduce with the reporter's backup (with consent; synthetic if possible) → regression test → fix → requalify affected gates → new package.

### 19.5 Retirement

Announce, keep the last package and its guides available for at least one school year, keep the import path documented, then archive the package (including its git bundle) read-only.

### 19.6 Documentation regime, review and backup

The owner's standing instructions (2026-10-11):

- **This specification** (`docs/MPES.md`) follows the latest Omni document kept locally (not committed); it holds no code, only prose and tables, and with nothing else it is enough for a clean-room rebuild. It is updated in the same PR as any change. `tests/unit/mpes.test.ts` checks the parts a test can check (§16.3); an independent Codex session given only this file writes a rebuild plan at each docs goal, and the gaps it finds are fixed here.
- **The codebase file** (`docs/CODEBASE.md`), written by `npm run codebase` (`scripts/codebase.ts`), never by hand: every tracked text file verbatim, each unique content once with every path that holds it and its SHA-256 and size; every binary listed with its size, SHA-256 and the command that makes it again (renders, the model, visual baselines); this specification and the codebase file itself listed as kept separately. Output is deterministic (no dates or commit hashes). It is regenerated after the last edit of a PR; `npm run codebase -- --check` exits 1 when it is stale.
- **The visual check** (`npm run gallery`, `scripts/gallery.ts` with `scripts/gallery/shots.ts`, `scripts/gallery/capture.spec.ts` and `scripts/gallery/playwright.config.ts`): builds this checkout and a tag (`-- --since <tag>`, default the latest tag) from `git archive`, captures every view of both roles in EN and FR on the laptop (1366×768, war-room theme) and the projector (1920×1080, projector theme), and the six vehicles in stills and in 3D, with reduced motion so frames are stable; writes one offline page `.artifacts/review/<gameVersion>.html` with every image embedded as WebP, captions, changed shots first, after beside before; `--notes <file>` adds an introduction. At each goal close the owner receives it and answers GO or FIX, until GO.
- **Backup preparation** (`npm run archive:prep`, `scripts/archive-prep.ts`): a dry run lists the regenerable folders with their sizes: `node_modules`, `dist`, `.artifacts/ms-playwright`, `.artifacts/npm-cache`, `.artifacts/tools`, `.artifacts/gallery`, `.artifacts/packed`, `.artifacts/tmp` (tests' scratch), the test result and coverage folders, and Python bytecode caches. Only when the owner asks for a cleanup, `npm run archive:prep -- --apply` removes exactly those (refusing any path outside the project or holding a tracked file, and unlinking links without following them), keeps everything irreplaceable (git history, every tracked file, render masters, models, concepts, logs and evidence in `.artifacts/`, `_archive/`), and writes `RESTORE.md`: install Node 22 or later and Git, `npm ci`, `npx playwright install chromium firefox`, `npm run build` and compare the recorded SHA-256, `npm run verify`, Blender only for art work.
- **Codex**: the owner's ChatGPT Codex app has a CLI inside its Windows package (not on the path). It runs headless with `exec`, skipping the git-repository check, a workspace-write sandbox, a working folder under `.artifacts/`, optional reference images, and standard input closed (otherwise it waits for more input). Uses: concept, texture and decal images, Blender modelling help, an independent review of each diff, gallery captions and French text. Everything it returns is verified; one Codex or Blender job at a time, so the owner's PC stays usable.

**Close-out of every goal**: `npm run verify` and the performance suite pass, and `npm run coverage` holds domain coverage ≥ 95% of lines (verify and CI do not run coverage); the same PR updates `docs/HANDOVER.md` (state, next goal), `README.md`, `docs/verification/<version>.md`, this specification (changelog) and `docs/CODEBASE.md` (`npm run codebase`, its test green); two consecutive green CI runs on one head; the owner's GO on the gallery; a merge commit; tag `v<gameVersion>`; the SHA-256 of the Pages file equals `npm run build` of the tag.

---

## 20. Working rules for agents and maintainers

- Begin every session with `docs/HANDOVER.md`, `git status` and `git log -5`. Reconcile actual state before editing.
- If another writer has uncommitted changes, do not overwrite them; coordinate or wait.
- Standing authority (from the owner) covers: editing within this repository, running local builds and tests, commits, pushes to feature branches, pull requests, and merges/publication **after green CI**. It does not cover: anything outside `D:\VSCode\SEA-Game`, other repositories or services, deleting history, force-pushing `main`, spending money, sharing private data, or deleting the GitHub repository or `_archive/` (owner actions only).
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
   - render manifest hash and Blender version;
   - built HTML SHA-256 and the package identity (SHA-256 of `SHA256SUMS.txt`, §19.3); recording a pass's evidence afterwards (§19.3 step 4) does not reset the key.
2. Run **three consecutive fresh full passes** on that same key. Each pass reruns all automated suites and the manual checks that depend on the bytes (egress, a screen-reader smoke test, device smoke), with no changes in between. In beta (0.x) the delegated substitutes of §15 and §16 count for those manual checks; release 1.0.0.0 needs the real ones (§19.2).
3. Any change to a key input, a failure, a flaky result or a skipped mandatory check resets the count to 0 of 3.
4. Record each pass (date, environment, results) in `docs/verification/<version>.md`.
5. "Released" means **no known material defect within the tested scope**, not zero bugs.

---

## 22. Decisions (decided 2026-10-09 under owner delegation; amended by the owner 2026-10-10)

| ID | Decision | Outcome |
|---|---|---|
| D-01 | Interface technology | Semantic HTML/CSS for all tasks; the vehicle showcase alone uses 3D (D-08). |
| D-02 | Illustrations | Superseded by D-09 (2026-10-10). |
| D-03 | Support matrix | Windows 11 only: current Chrome, Edge and Firefox, both roles (owner decision 2026-10-10; §4.3). |
| D-04 | GitHub Pages hosting | Temporary human QA only (D-13). |
| D-05 | Pilot | Owner-delegated scripted classroom rehearsal (§16.6). |
| D-06 | Projector view | Superseded by D-15 (2026-10-10). |
| D-07 | Visual language | War-room HUD as CSS on semantic HTML, never UI drawn in a canvas (§7.1). Owner, 2026-10-10. |
| D-08 | 3D realism | Interactive real-time 3D showcase that turns slowly by itself, on a hardware GPU; pre-rendered photoreal stills without one (§10). three.js restored for the showcase only. Owner, 2026-10-10 (revises the earlier same-day pre-rendered-only decision). |
| D-09 | Imagery source | Agent-built in a pinned Blender LTS: original, fictional, MIT (§11). Owner, 2026-10-10. |
| D-10 | File size | Single HTML ≤ 50 MB hard limit, ≤ 40 MB target (§14). Owner, 2026-10-10. |
| D-11 | Minimum hardware | Smooth on integrated-graphics Windows 11 laptops (§14). Owner, 2026-10-10. |
| D-12 | Build outputs | `dist/` not committed; `npm run check` compares two builds; CI deploys Pages for QA (§5.5, §18). |
| D-13 | GitHub | Temporary human-QA space, deleted by the owner at the end. The product is a local handoff package; nothing shipped or documented depends on GitHub (§19.3). Owner, 2026-10-10. |
| D-14 | AI-assisted art | The owner's ChatGPT Codex subscription generates concept images (references only, kept out of the product) and upgrades the procedural Blender scripts under the budgets of §10.2. Fidelity is the owner's judgement. Owner, 2026-10-10. |
| D-15 | Projector mode | A full-screen class view (§7.8); private entry stays the recording surface. Owner, 2026-10-10. |
| D-16 | Reference laptop | No physical laptop test; the Intel UHD 770 proxy with 4× CPU throttling and 2× GPU headroom stands in (§14). Owner, 2026-10-10. |

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
| Vehicle showcase | The team's vehicle and recorded parts: real-time 3D on a hardware GPU, layered stills without one (§10) |
| Handoff package | The delivered release folder: HTML, hashes, guides, rollback and maintenance material (§19.3) |
| Key (convergence key) | The frozen set of inputs that identifies a release candidate |

---

## 24. Change log

| Version | Date | Change |
|---|---|---|
| 4.3.0 | 2026-10-11 | G2 docs regime (Omni 5.1.1 §6.2): no code left (layout, backup envelope and CSP as tables); lifecycle coverage (§0.1); folder layers (§5.2); chooser lineup and query parameters (§5.3); exact pins (§5.4); build pipeline (§5.5); module contracts (§5.6); configuration and npm scripts (§5.7); About and licences (§7.9); content schemas and art pipeline (§11.1); decoded-image pool keeps prepared images (§10.3); test map and CI (§16.3, §16.5); goals G2 to G8 with versions (§17); repository files (§18); documentation regime, gallery, backup preparation and Codex (§19.6). CSP corrected to what the build writes (no `blob:`; `media-src` and `manifest-src` added). From the Codex rebuild review: what a rebuild reproduces, no-code definition and owner-only actions (§0.2); scratch under `.artifacts/tmp/` and the cleanup exception (C-13); 49 physical cards have layers, SE_PROCESS none (§10.2); imagery counted in base64 bytes, 1 MB = 1 MiB (§10.3); decode-once oracle scoped to kept images (§10.3); GitHub ban scoped to user documents (§13.2); `perf:ref` is G3 (§14); fixture count (§16.3); MINOR for breaking changes in beta (§19.2); `SHA256SUMS.txt` format, package identity, `RELEASE.md`, network-assisted rebuild (§19.3); rollback tag (§19.4, Appendix C); coverage at close-out (§19.6); beta substitutes in release passes (§21.2); G3 writes the measurement protocol, G6 the rule edge cases (§17). |
| 4.2.2 | 2026-10-11 | Still decoding in §10.3: placed images trimmed to their visible pixels, 19 times fewer layer pixels to decode (CI run 38136462558). |
| 4.2.1 | 2026-10-11 | Still decoding in §10.3: the loaded card's layers are prepared first (CI run 38135172580). |
| 4.2.0 | 2026-10-11 | §19.2: the game version is four-part MAJOR.MINOR.PATCH.BUILD, renumbered to 0.5.0.0 beta; 1.0.0.0 only after the beta exit criteria (owner request). |
| 4.1.3 | 2026-10-11 | Still decoding in §10.3: prepared images decode one at a time (CI run 38133130929). |
| 4.1.2 | 2026-10-11 | Still decoding in §10.3: prepare as soon as the shown view has decoded, not when idle (CI run 38106258905). |
| 4.1.1 | 2026-10-10 | Still decoding row in §10.3 (decode once, prepare when idle), from the CI root cause of G1. |
| 4.1.0 | 2026-10-10 | Owner-accepted KPIs and priority (§1.4); game feel (§7.7); projector mode (§7.8, D-15 supersedes D-06); technique per element (§10.4); 3D frame pacing (§10.3); reference laptop and proxy (§14, D-16); goals G1–G5 in §17, stale "three.js removed" corrected. |
| 4.0.1 | 2026-10-10 | §10: the game parses only the vehicle it shows; cross-slot collisions checked by `art/blender/overlap.py`. |
| 4.0.0 | 2026-10-10 | Owner request: interactive 3D showcase that turns slowly by itself (D-08 revised, D-01, R-ARCH-4, §1.3, §2, §5, §10, §11); stills become the fallback without hardware WebGL; 3D budgets (§10.3); AI-assisted concepts and modelling (D-14). |
| 3.3.0 | 2026-10-10 | Owner request: the instructor chooses the bid increment at setup ($50,000 to $250,000 in $50,000 steps); prices stay on the $50,000 grid (§6.4, §6.5, §8.3, Appendix A constants). |
| 3.2.0 | 2026-10-10 | V2 production: mount slots, hidden layers and SE badges (§10.2); debrief class chart and presentation questions (§6.13, from the owner-supplied course source); projector theme in the URL (§7.1); stricter save invariants and compatibility-only fields (§8.3, §8.4). |
| 3.1.0 | 2026-10-10 | §7.1: the live lot's auction actions must be fully visible at 1280×720 without scrolling (V2 layout requirement; found from a Firefox lost-click CI failure). |
| 3.0.1 | 2026-10-10 | §10.2 and §11 aligned with the V1 implementation: draw order is the recorded camera distance; manifest fields named; alt text derived at runtime from canonical titles instead of stored. No change to requirements. |
| 3.0.0 | 2026-10-10 | Owner decisions D-07 to D-13: war-room HUD (S7, §7.1); photoreal pre-rendered imagery authored in Blender replaces the WebGL bay and SVG art (§1.3, §2, §5, §9 to §11, D-01, D-02, D-08, D-09); 50 MB file and integrated-graphics reference profile (§3, §14, D-10, D-11); `dist/` no longer committed (§5.5, §18, D-12); GitHub becomes temporary QA space and the release becomes a local handoff package (§16.5, §19, §21, D-04, D-13); milestones V1 and V2 replace M5 (§17); RQ-31 and RQ-32 added. |
| 2.3.0 | 2026-10-10 | Owner decision: scope limited to Windows 11 (current Chrome, Edge, Firefox) for both roles. Other platforms and Safari moved to non-goals (§2.2, §4.1, §4.3, D-03); browser tests, CI, RQ-21, RQ-25 and §12 aligned (§5.4, §5.5, §16.3–16.5). |
| 2.2.1 | 2026-10-09 | Owner decision: exploded view removed from the vehicle bay (§10.2). |
| 2.2.0 | 2026-10-09 | Owner direction: the vehicle bay approaches the archived concept renders in quality (§1.3, §10.2); budgets revised for physically based rendering, soft shadows and ambient occlusion (§10.3). |
| 2.1.1 | 2026-10-09 | §6.5: corrected the ROUND reveal row to the original game's behaviour (whole current round visible, later rounds never), verified against the 4.1 instructor source. |
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

Constants: `RULESET = "STANDARD"`, `DECK = "synthetic-v1"`, rounds 7, lots per round 10, price grid and default bid increment 5,000,000 cents (increments 5,000,000 to 25,000,000 in steps of 5,000,000), maximum wins 2 per round and 14 per game, ledger capacity 210.

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

Until release, all pre-rebuild material (the old repository with full history and its uncommitted work, local archives, the generator prompt and evidence) is also present locally in the git-ignored, read-only `_archive/` folder, which the owner deletes after release. Nothing in the repository, build, tests or CI may depend on it. The following remain recoverable from the local git history (and its bundle in the handoff package); the GitHub repository is temporary (D-13). They are **evidence, not requirements**; this MPES governs.

| What | Where |
|---|---|
| Previous published candidate 4.1.0-dev.1 (main merge) | commit `e3ab763d3142783e9dc68a6fdb83fe988ef37228` |
| Last commit before this rebuild (evidence-only update; on `main`) | commit `1f211fcb896d6c571e6a11877c642d74fded4dc9` |
| Rollback release of the earlier line, 3.6.0 (history only; the rebuild's rollback is tag `v4.1.0-dev.1`, §19.4) | commit `00d4e853f21c3ac311d4ac02125f12f9d6d2ae16` |
| 77 canonical SVG illustrations | `assets/v1/` at either commit above |
| Typed domain reference implementation | `source/domain/*.ts` at `1f211fc` |
| Independent rules baseline | `docs/evidence/rules-baseline.json` at `1f211fc` |
| Previous MPES 1.5.2 and guides | `docs/` at `1f211fc` |

To use them, read files from `_archive/` while it exists, or with `git show <commit>:<path>`. Inputs the rebuild needs are copied into the repository; scratch copies go into `.artifacts/` (C-13). This MPES restates every obligation from the old material that the rebuild needs.
