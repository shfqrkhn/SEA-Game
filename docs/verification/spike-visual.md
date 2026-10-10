# V1 visual spike: evidence for the owner's GO/NO-GO (MPES 3.0.0 §17)

Date: 2026-10-10. Machine: Windows 11, NVIDIA GeForce RTX 5060 Ti (16 GB), Node 24, Playwright 1.63.0 (Chromium, Firefox, Edge). Status: **PROTOTYPE**, awaiting the owner's decision.

## What the spike proves

| Question | Answer |
|---|---|
| Can the agent author an original, fictional, photoreal-style vehicle and parts by script? | Yes, with limits. The RECOVERY vehicle and parts CAP-B, COM-E and ACC-F are built entirely by `art/blender/` scripts in Blender 5.2.2 LTS: procedural geometry and materials with edge wear, crevice dust and road dust; studio lighting; Cycles on the GPU. The look is a polished game asset. It is not yet the concept images (see "Quality ceiling"). |
| Do pre-rendered part layers stack correctly on the vehicle? | Yes. Each part renders from the build camera with the base vehicle as a shadow catcher. The hull hides the part where it is in front, the part casts shadows on the hull, and stacking base and parts in order gives the composed build (front and rear angles checked). |
| Does it fit in one file and run on weak laptops? | Yes, with a wide margin (numbers below). |
| Does the HUD work with the real game? | Yes, behind `?hud=1`: the chooser hero, instructor live lot and student tracker, with the showcase following recorded purchases (`tests/e2e/hud.spec.ts`). |

## Format: AVIF vs WebP (`node art/tools/encode-renders.ts measure`)

| Format, quality | Kind | Files | Average bytes | Average PSNR (dB) |
|---|---|---|---|---|
| AVIF 55 | card | 3 | 6,408 | 47.71 |
| AVIF 55 | build-layer | 6 | 3,980 | 58.6 |
| AVIF 55 | build-base | 2 | 15,287 | 47.69 |
| AVIF 55 | hero | 1 | 24,319 | 47.27 |
| AVIF 55 | turntable | 24 | 14,494 | 45.65 |
| AVIF 65 | card | 3 | 7,590 | 49.39 |
| AVIF 65 | build-layer | 6 | 4,734 | 60.03 |
| AVIF 65 | build-base | 2 | 18,733 | 49.27 |
| AVIF 65 | hero | 1 | 30,008 | 48.93 |
| AVIF 65 | turntable | 24 | 17,661 | 47.36 |
| WEBP 85 | card | 3 | 19,998 | 48.45 |
| WEBP 85 | build-layer | 6 | 23,389 | 64.65 |
| WEBP 85 | build-base | 2 | 62,048 | 47.85 |
| WEBP 85 | hero | 1 | 94,994 | 46.7 |
| WEBP 85 | turntable | 24 | 50,560 | 45.91 |
| WEBP 92 | card | 3 | 22,796 | 51.54 |
| WEBP 92 | build-layer | 6 | 24,609 | 67.16 |
| WEBP 92 | build-base | 2 | 70,267 | 50.61 |
| WEBP 92 | hero | 1 | 109,630 | 50.43 |
| WEBP 92 | turntable | 24 | 58,038 | 48.38 |

PSNR compares each encoded image with its 16-bit master, both flattened onto the HUD panel colour. Above about 45 dB the difference is not visible.

Decision: **AVIF, quality 65, 4:4:4**. It is 2.6–4.9× smaller than WebP at quality 85, depending on subject kind, at equal or better quality. Chrome, Edge and Firefox on Windows 11 all decode it.

## Sizes: performance over looks (owner, 2026-10-10)

The hero is 1600×900, the build angles 1280×720, the turntable 24 × 960×540 and the card renders 512×512 (art/README.md). These are enough pixels for the panels they fill and no more. Compared with a 1920×1080 / 1280×720 / 768² variant measured earlier the same day, the spike set fell from 748 KB to 543 KB, and the chooser became faster (below).

The chooser always shows the embedded hero still, so no WebGL runs on the first screen. Background: one CI run on a GPU-less runner measured the chooser at 2,121 ms while the WebGL hero was starting; three earlier runs measured 90–125 ms. The pre-rendered hero removes that risk. Everything stays embedded in the single HTML file; nothing is fetched.

## Size projection for all 77 subjects

| Item | Count | Estimate |
|---|---|---|
| Vehicle set (hero, turntable 24 frames, 2 build bases) | 6 | 2.9 MB |
| Card renders | 71 | 0.5 MB |
| Part layers (70 parts × 6 vehicles × 2 angles, trimmed) | 840 | 4.0 MB |
| Total images | | 7.5 MB |
| With 20% margin | | 9.0 MB |
| **HTML file** (base64 + about 1.2 MB of code, styles, notices) | | **13.1 MB** of the 40 MB target and 50 MB limit |

## Performance (`node art/tools/measure-spike.ts`, median of 3 runs)

| Profile | File | Bytes | Chooser interactive (ms) | Student start (ms) | Showcase update (ms) | Turntable scrub, worst (ms) | JS heap (MB) | Decoded images shown (MB) |
|---|---|---|---|---|---|---|---|---|
| reference (4x CPU) | built | 1,548,001 | 128 | 269 | 32 | 8 | 10 | 2 |
| reference (4x CPU) | stress40 | 42,442,685 | 753 | 811 | 31 | 6 | 48 | 2 |
| reference, GPU disabled | built | 1,548,001 | 135 | 271 | 30 | 7 | 10 | 2 |
| reference, GPU disabled | stress40 | 42,442,685 | 767 | 824 | 31 | 5 | 48 | 2 |

Budgets (MPES §10.3, §14): chooser ≤ 2,000 ms; student start ≤ 3,000 ms; showcase update ≤ 100 ms; turntable change ≤ 50 ms; decoded images ≤ 250 MB. All PASS on both files and both profiles.

Reference profile: Chromium with 4× CPU throttling (MPES §14). "GPU disabled" forces software compositing, the stand-in for GPU-less machines. The stress file replicates the spike renders until it reaches the 40 MB target, about three times the projected production file. The first parse of the whole render table costs about 100 ms at 4× throttling (once, when the showcase first opens).

## Accessibility

axe (WCAG 2.2 A/AA rules) passes on the HUD student tracker and the HUD instructor auction view (`hud.spec.ts`). HUD contrast:
- body text `#e3ece6` on `#0b100e`: about 15:1;
- muted text `#a3b8ad` on panel `#121a17`: about 8:1;
- focus ring: amber `#ffd166`, 3 px.

The showcase has `role="img"` with a build summary, a text list of installed parts, keyboard radio buttons and a slider. There is no autoplay.

## Screenshots (local, `.artifacts/screenshots/spike/`)

`chooser.png`, `instructor-live-lot.png`, `student-tracker.png`, `student-tracker-preview.png`, `showcase-front.png`, `showcase-rear.png`.

## Quality ceiling and what V2 would improve

The spike is a scripted, procedural model. Its strengths are consistency, originality and fast iteration (a preview renders in about 3 s, the whole spike set in a few minutes). Compared with the concept images it still lacks:
- sculpted organic detail (tyre sidewall lettering, cast surfaces, welded seams);
- decals and stencils;
- richer cab interiors seen through the glass;
- a varied environment.

V2 would add stencils, panel lines, rivet and bolt patterns, mud splatter and interior detail through the same pipeline. Each change is reviewed on Pages.

## Residual risks

- No measurement on a physical integrated-graphics laptop; 4× throttling is the stand-in.
- Art quality is judged by the owner, not by a test.
