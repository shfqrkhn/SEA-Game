# Source fidelity: the original course game vs this rebuild

Recorded 2026-10-10 from owner-supplied material placed in `_archive/SEA-Contents/` (git-ignored and deleted after release, so the findings that matter are kept here). Those files are evidence, not requirements; [MPES](../MPES.md) governs.

| File | What it is |
|---|---|
| `SE--Systems-Engineering-Awareness--v1.3.1.md` | Distillation of the original course and its card game (§18 to §20): vehicle specifications, scoring, auction structure, Design Options Report, presentation questions, and what the source does not specify. |
| `SE--Card-Game-MPES--v0.15.0.md` | An earlier draft specification for a networked multiplayer version (Cloudflare Worker, rooms, up to 60 learners). Superseded by this project's offline single-file design (MPES §2, D-01). |
| `SE--Awareness-Instructor-Master--v3.0.0-local.html`, `SE--Awareness-Student-Companion--v3.0.0-local.html`, `SE--Candidate-Index.md` | Earlier local app candidates using the same ruleset (`STANDARD`) and deck (`synthetic-v1`), with deck and balance approval recorded as open. |

## Matches (no change needed)

- **Missions and mandatory minimums:** all six vehicles and every minimum in `content/missions.json` equal the source (§18.11), including Recovery ≥ 3 ways and Mine Clearing ≥ 3 ways.
- **Scoring:** `source/domain/missions.ts` equals the source formulas exactly, including whole increments (Combat mobility per 10 km/h, RECCE and Command Post communications per 25 km).
- **Award:** compliance first, then the lowest bid price (cost + profit) per point (§18.9, §18.10). The source leaves a compliant zero-score design undefined (§18.17); MPES decides it is not eligible (score must be above 0).
- **Auction shape:** per round, one lot in each of seven categories plus three SE process lots; at most two wins per team per round; printed cost is the starting bid (§18.8). The source does not specify increments, timing, ties or unsold cards (§18.16); MPES decides them.
- **Cost:** the amount actually paid at auction, never the printed price (§18.9).

## Differences and gaps (for the owner)

1. **Deck values.** The source deck is lost (§18.15); `synthetic-v1` was balanced against the source minimums. Its magnitudes differ from the source's Design Options Report (§18.5): mobility parts give +50 to +90 km/h (source: propulsion around 160 km/h on a light hull); protection parts +3 to +5 (source: scale 1 to 10); start prices $150K to $700K (source examples up to about $1.1M; planning budget around $6.5M). Communications (+25 to +125 km) and SA (1 to 4 ways per system) match. Changing the deck changes balance, the oracle and the fixtures; it needs an owner decision (G-CONTENT).
2. **Presentation questions (§18.18).** The source asks each team to explain compliance, priorities, trade-offs, profit, cost per point, its three biggest risks and the purpose of one purchased SE process, and says a digital version should keep them or an equivalent debrief. The 5.0.0-dev debrief shows the numbers but not these prompts. Planned addition: the prompts on the student and instructor debrief.
3. **Design Options Report (§18.5).** The source gives teams a market report for planning. The 5.0.0-dev planning view shows mission minimums only. Planned addition: a report generated from the deck data itself, so it is always truthful for `synthetic-v1`.
4. **Team roles (§18.7).** Planner, Bidder, Card tracker, Presenter: the quick-start guide does not name them yet.
