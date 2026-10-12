# Art pipeline (MPES §10, §11)

All vehicle, part and card imagery and the 3D showcase model are original, procedural and authored by script: no image textures, HDRIs, scans or downloaded models. The same scripts make both outputs offline; the game embeds only the results: encoded stills (`content/renders/`) and one packed glTF model (`content/models/`).

AI assistance (MPES D-14): `tools/concepts.ts` generates concept images with the owner's Codex subscription, and Codex jobs may upgrade the Blender scripts. Concept images are references only: they live in `.artifacts/` and are never embedded.

## Toolchain

| Tool | Version | Source and check |
|---|---|---|
| Blender (portable zip) | 5.2.2 LTS, build hash `d13f752e3b9c` | `https://download.blender.org/release/Blender5.2/blender-5.2.2-windows-x64.zip`, SHA-256 `3849d17a682cba006075aaa3f3597ecb5c9c30ec31035b2e092c53e40679b535` |
| Renderer | Cycles on the GPU (OptiX), OpenImageDenoise | Fixed seed `20261010`, fixed sample counts, no adaptive sampling. Falls back to the CPU (slow but identical in intent) when no NVIDIA GPU is present. |
| Encoder | `sharp` 0.35.4 (libvips 8.18.6), pinned in `package.json` | AVIF, quality 65, 4:4:4 (chosen at the V1 spike) |

Unzip Blender into `.artifacts/tools/` (git-ignored). Nothing is installed system-wide.

## Commands

```sh
B=.artifacts/tools/blender-5.2.2-windows-x64/blender.exe
# Everything: 6 vehicles (hero, 24-frame turntable, front and rear bases, 49 part layers per angle) and 71 cards.
# About 2.5 hours on an RTX 5060 Ti. Masters are 16-bit RGBA PNG with a transparent background.
$B -b --factory-startup --python-exit-code 1 -P art/blender/render.py -- --out .artifacts/renders/v3
# Part of the job: any of --vehicles, --only (hero,turntable,build,cards) and --parts. Results merge into renders.json.
$B -b --factory-startup -P art/blender/render.py -- --out .artifacts/renders/v3 --vehicles recce --only build --parts MOB-C,SA-D
# Quick look: low samples; per vehicle a hero, a 'kit' still with every part at once (front and rear), and all cards.
$B -b --factory-startup -P art/blender/render.py -- --out .artifacts/renders/preview --preview
node art/tools/contact-sheet.ts .artifacts/renders/kits.jpg 3 520 wide .artifacts/renders/preview/*-kit.png
node art/tools/contact-sheet.ts .artifacts/renders/cards.jpg 7 200 square .artifacts/renders/preview/card-*.png
# Encode and write the manifest the build embeds (replaces content/renders/ entirely).
# Unchanged masters are reused from .artifacts/cache/encode/ (same bytes out); add --no-cache for a clean encode.
node art/tools/encode-renders.ts encode .artifacts/renders/v3 content/renders avif 65
# Review before committing: hero and base stills, cards, a turntable, and base + one part per slot (variants A, D, G).
R=.artifacts/renders/v3; C=.artifacts/contact; mkdir -p $C/builds
node art/tools/contact-sheet.ts $C/heroes.jpg 3 640 wide $R/*-hero.png $R/*-base.png
node art/tools/contact-sheet.ts $C/cards.jpg 10 200 square $R/card-*.png
node art/tools/contact-sheet.ts $C/turntables.jpg 8 320 wide $R/combat-turntable-*.png
node art/tools/build-composites.ts $R $C/builds A,D,G
for L in A D G; do node art/tools/contact-sheet.ts $C/builds-$L.jpg 4 560 wide $C/builds/*-$L.png; done
# Compare formats and qualities on a set of masters.
node art/tools/encode-renders.ts measure .artifacts/renders/v3 .artifacts/renders/encoding.json
# Performance on the built file (needs npm run build): reference profile and GPU-less.
node art/tools/measure-spike.ts .artifacts/perf/measure.json
# 3D showcase model: triangle budgets at real-time detail (base 90,000, part 8,000, running gear 32,000).
$B -b --factory-startup -P art/blender/tris.py -- --vehicles all --parts all
# Parts in different slots must not intersect (exit 1 on any hit; --detail names the clashing objects).
$B -b --factory-startup -P art/blender/overlap.py -- --vehicles all --parts all
# Export one GLB per vehicle (real-time detail, AO baked into vertex colours), then merge, weld, quantise and pack.
$B -b --factory-startup -P art/blender/export.py -- --out .artifacts/models
node art/tools/pack-models.ts .artifacts/models .artifacts/packed/models.glb
# Then copy the packed file to content/models/showcase.glb and update its SHA-256 in content/models/manifest.json.
# The game parses only the vehicle it shows: every vehicle must stay a root node named by its stem.
# Concept images (Codex): every subject, or --only FP-C,CAP-A. Written to .artifacts/concepts-v3/.
node art/tools/concepts.ts
```

Pass absolute or project-relative output paths. `render.py` makes them absolute, because Blender resolves relative render paths against the drive root.

## Layout

- `blender/export.py`: the 3D showcase export: one GLB per vehicle with a `base` node and one node per part card (its mount slot in the node's extras), at real-time detail (`geo.REALTIME`: one bevel segment, half the round vertices), ambient occlusion baked into vertex colours.
- `blender/tris.py`: triangle budgets of the 3D model, per vehicle and part.
- `blender/overlap.py`: cross-slot collision check: builds each vehicle with every part at real-time detail and tests the surfaces of every pair of parts in different slots for intersecting triangles (a part wholly inside another is not detected).
- `blender/render.py`: the job: which shots, sizes, samples and cameras; writes `renders.json` with each shot's draw order (camera distance) and, for part layers, its mount slot.
- `blender/sea/scene.py`: render settings, studio lights and reflection cards, shadow-catcher ground, camera framing, layer visibility.
- `blender/sea/materials.py`: procedural physically based materials for stills, and `realtime_palette()`, the same keys as plain glTF constants for the 3D model (olive paints with edge wear, crevice dust and road dust; rubber; metals; glass; lamps). Card renders turn road dust off.
- `blender/sea/geo.py`: mesh and curve builders; the `Builder` tags every object with its layer (`base` or a card ID).
- `blender/sea/vehicles/hull8.py`: the one 8x8 hull family behind all six mission vehicles; mission differences (troop ramp and compartment, armoured windscreens, recovery crane) are in the base, everything else is a part. Returns the `Mounts`.
- `blender/sea/mounts.py`: the `Mounts` geometry every vehicle provides, the card-to-slot map (`SLOTS`) and the compact card mount used for card renders.
- `blender/sea/parts/`: one builder per physical card (49), placed only through `Mounts`, so each fits all six vehicles and the card mount. One module per category (`cap`, `mob`, `fp`, `pro`, `com`, `sa`, `acc`), shared helpers in `common.py`, and `library.py` mapping card IDs to builders.
- `blender/sea/parts/tokens.py`: the 21 SE_PROCESS process tokens (outline = attribute improved, relief icon = the review) and the practice card TRAIN-CAP.
- `blender/sea/fleet.py`: vehicle file stems (MPES §11) and each hero still's loadout.
- `tools/`: encoder, model packer (`pack-models.ts`), concept generator (`concepts.ts`), contact sheet, build composites for review (`build-composites.ts`), spike preview compositor and performance measurement (TypeScript, run by Node).

## Build layers and mount slots

For each build angle, every layer uses the same camera, framed on the base vehicle with every part it can carry. The base layer renders the vehicle alone. Each part layer renders that part with the base vehicle as a **shadow catcher**: the hull hides the part where it is in front, and the part's shadows fall on the hull. Stacking base and part layers by recorded camera distance (farthest first) then occludes correctly. The encoder trims each layer, base and turntable frame to the pixels still visible at 8-bit output (16-bit masters carry faint noise across the frame; trimming on any non-zero alpha left layers near full-frame and slow to decode) and records the offset; cards and heroes are shown whole, so they keep their full transparent-margin trim; a layer with no visible pixel is listed under `hidden` instead.

Every physical card has one slot (`SLOTS` in `mounts.py`): for example all seven CAPACITY cards share `module`, the winch, mine roller and dozer blade share `front-kit`. Parts in different slots must not collide (`overlap.py`); when a team installs two parts in one slot, the showcase draws the most recently recorded one and lists both (MPES §10.2). Changing a slot or a mount moves the part on all six vehicles: re-render those vehicles' build layers and check the 'kit' preview stills for collisions.

## Adding or changing a part

1. Edit its builder in its category module under `parts/` (or its slot in `mounts.py`). Keep it fictional and recognisable at 512 px, and size it from the card's effects (Appendix A).
2. Preview (`--preview`) and check the kit stills and the card on a contact sheet.
3. Check its budget with `tris.py --parts <ID>` and its fit with `overlap.py --parts all` (one Blender at a time: the owner uses this PC).
4. Render its layers on all six vehicles and its card (`--parts <ID>`), encode, export and pack the 3D model, then `npm test` (the render and model manifest tests check completeness, slots, hashes and the 40 MB budget).

## Sizes (performance over looks, owner 2026-10-10)

| Output | Size | Notes |
|---|---|---|
| Hero still | 1600×900 | chooser (recovery) |
| Build angles (base and part layers) | 1280×720 | showcase panel; enough for about 640 CSS px at 2× |
| Turntable | 960×540 × 24 frames | base vehicle only; neighbouring frames are pre-decoded |
| Card render | 512×512 | shown at about 256 CSS px |
