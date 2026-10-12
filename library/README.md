# Reusable library

Practices, lessons, starter files and a catalogue of candidate free and open-source building blocks (audit the exact version before shipping), drawn from SEA Game and meant for every other project. Copy the whole `library/` folder into a new project (or read it in place); nothing in it depends on SEA Game's code.

Copyright (c) 2026 Shafiqur Rahman Khan. MIT licence: see `LICENSE` in this folder, which travels with it. Third-party material is only referenced here, with its own licence (see `catalogue.md`).

## Contents

| Path | What it gives you |
|---|---|
| `LESSONS.md` | Dated lessons learned, each with what went wrong, the rule it produced and how to check it. Read first. |
| `catalogue.md` | Verified FOSS components, themes, icons, fonts, charts, 3D runtime, render assets, media tools, test and accessibility tools, with licences and when to use each. |
| `practices/delivery-loop.md` | The goal loop: failing check first, sibling sweep, reviews, docs, two green CI runs, visual GO/FIX, tag, handoff. |
| `practices/visual-legibility.md` | Making every component readable in stills, 3D and on a projector: geometry, light, value, camera, signalling, measured checks. |
| `practices/asset-checks.md` | Automated checks for generated 3D assets and renders: fit, overlap, budgets, sightlines; how to write them so they cannot be gamed. |
| `practices/classroom-apps.md` | Teaching apps: pedagogy, workload, projector, offline single file, bilingual, accessibility. |
| `practices/performance.md` | Budgets for old integrated-GPU laptops and how to measure them on a proxy. |
| `practices/agents.md` | Working with AI agents: headless Codex reviews, parallel lanes, evidence rules, one heavy job at a time. |
| `practices/docs.md` | Documents that let anyone rebuild and maintain the project: a code-free specification, a lossless code file, a handover. |
| `LICENSE` | The MIT licence for this library. |
| `ui/tokens.css` | Two tested themes (dark "war-room" and light "projector") as CSS custom properties, with contrast notes. |

## How to use it in a new project

1. Copy `library/` in. Read `LESSONS.md`, then the practice files that apply.
2. Pick building blocks from `catalogue.md`; record each one you ship in the project's `THIRD_PARTY_NOTICES.md`.
3. Start the stylesheet from `ui/tokens.css` and re-check contrast for any colour you change.
4. When the project teaches you something new, add a dated entry to `LESSONS.md` and fold the rule into the practice file it belongs to. Keep the library generic: project details only as marked examples.

## Library version

0.1.0 (2026-10-12): first cut from SEA Game 0.5.1.0, corrected after an independent review (licences, reduced motion, agent trust boundaries, accessibility, colour management, GPU resource ownership, flakiness).
