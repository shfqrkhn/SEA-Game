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
| AVIF 55 | card | 3 | 9,205 | 48.75 |
| AVIF 55 | build-layer | 6 | 5,838 | 59.01 |
| AVIF 55 | build-base | 2 | 23,685 | 48.94 |
| AVIF 55 | hero | 1 | 29,832 | 47.96 |
| AVIF 55 | turntable | 24 | 19,747 | 46.68 |
| AVIF 65 | card | 3 | 11,090 | 50.49 |
| AVIF 65 | build-layer | 6 | 7,038 | 60.47 |
| AVIF 65 | build-base | 2 | 29,006 | 50.51 |
| AVIF 65 | hero | 1 | 36,620 | 49.61 |
| AVIF 65 | turntable | 24 | 24,058 | 48.27 |
| WEBP 85 | card | 3 | 33,427 | 49.63 |
| WEBP 85 | build-layer | 6 | 43,110 | 66.08 |
| WEBP 85 | build-base | 2 | 106,623 | 49.18 |
| WEBP 85 | hero | 1 | 123,120 | 48.56 |
| WEBP 85 | turntable | 24 | 74,807 | 46.82 |
| WEBP 92 | card | 3 | 37,987 | 52.29 |
| WEBP 92 | build-layer | 6 | 45,121 | 68.61 |
| WEBP 92 | build-base | 2 | 121,619 | 51.65 |
| WEBP 92 | hero | 1 | 140,716 | 50.94 |
| WEBP 92 | turntable | 24 | 85,942 | 49.25 |

PSNR compares each encoded image with its 16-bit master, both flattened onto the HUD panel colour. Above about 45 dB the difference is not visible.

Decision: **AVIF, quality 65, 4:4:4**. It is 4–8× smaller than WebP at equal or better quality, and Chrome, Edge and Firefox on Windows 11 all decode it.

## Size projection for all 77 subjects

| Item | Count | Estimate |
|---|---|---|
| Vehicle set (hero 1920×1080, turntable 24 × 1280×720, 2 build bases 1920×1080) | 6 | 4.0 MB |
| Card renders (768×768) | 71 | 0.8 MB |
| Part layers (70 parts × 6 vehicles × 2 angles, trimmed) | 840 | 5.9 MB |
| Total images | | 10.7 MB |
| With 20% margin | | 12.9 MB |
| **HTML file** (base64 + about 1.2 MB of code, styles, notices) | | **18.4 MB** of the 40 MB target and 50 MB limit |

## Performance (`node art/tools/measure-spike.ts`, median of 3 runs)

| Profile | File | Bytes | Chooser interactive (ms) | Student start (ms) | Showcase update (ms) | Turntable scrub, worst (ms) | JS heap (MB) | Decoded images shown (MB) |
|---|---|---|---|---|---|---|---|---|
| reference (4x CPU) | built | 1,820,039 | 155 | 316 | 38 | 9 | 10 | 3.5 |
| reference (4x CPU) | stress40 | 41,945,475 | 1029 | 946 | 38 | 5 | 45 | 3.5 |
| reference, GPU disabled | built | 1,820,039 | 184 | 354 | 43 | 10 | 10 | 3.5 |
| reference, GPU disabled | stress40 | 41,945,475 | 928 | 977 | 46 | 5 | 45 | 3.5 |

Budgets (MPES §10.3, §14): chooser ≤ 2,000 ms; student start ≤ 3,000 ms; showcase update ≤ 100 ms; turntable change ≤ 50 ms; decoded images ≤ 250 MB. All PASS on both files and both profiles.

Reference profile: Chromium with 4× CPU throttling (MPES §14). "GPU disabled" forces software compositing, the stand-in for GPU-less machines such as the WARP-rendered CI runners. The stress file replicates the spike renders until the file reaches the 40 MB target, more than twice the projected 18 MB production file. The first parse of the whole render table costs about 100 ms at 4× throttling (one time, when the showcase first opens).

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
