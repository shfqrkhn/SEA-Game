# Art pipeline (MPES §10, §11)

All vehicle and part imagery is original, procedural and authored by script: no image textures, HDRIs, scans or downloaded models. Renders are made offline. The game embeds only the encoded results.

## Toolchain

| Tool | Version | Source and check |
|---|---|---|
| Blender (portable zip) | 5.2.2 LTS, build hash `d13f752e3b9c` | `https://download.blender.org/release/Blender5.2/blender-5.2.2-windows-x64.zip`, SHA-256 `3849d17a682cba006075aaa3f3597ecb5c9c30ec31035b2e092c53e40679b535` |
| Renderer | Cycles on the GPU (OptiX), OpenImageDenoise | Fixed seed `20261010`, fixed sample counts, no adaptive sampling |
| Encoder | `sharp` 0.35.4 (libvips 8.18.6), pinned in `package.json` | AVIF, quality 65, 4:4:4 (chosen at the V1 spike) |

Unzip Blender into `.artifacts/tools/` (git-ignored). Nothing is installed system-wide.

## Commands

```sh
# Masters: 16-bit RGBA PNG, transparent background, shadows on a shadow catcher
.artifacts/tools/blender-5.2.2-windows-x64/blender.exe -b --factory-startup -P art/blender/render.py -- --out .artifacts/renders/spike
# Quick look (low samples, hero only), then composite over a HUD backdrop for review
.artifacts/tools/blender-5.2.2-windows-x64/blender.exe -b --factory-startup -P art/blender/render.py -- --out .artifacts/renders/preview --preview
node art/tools/preview.ts .artifacts/renders/preview
# Compare formats, then encode and write the manifest the build embeds
node art/tools/encode-renders.ts measure .artifacts/renders/spike .artifacts/renders/encoding.json
node art/tools/encode-renders.ts encode .artifacts/renders/spike content/renders/spike avif 65
# Spike performance measurements (needs a fresh `npm run build`)
node art/tools/measure-spike.ts .artifacts/perf/spike-measure.json
```

Pass absolute or project-relative output paths. `render.py` makes them absolute, because Blender resolves relative render paths against the drive root.

## Layout

- `blender/sea/scene.py`: render settings, studio lights and reflection cards, shadow-catcher ground, camera framing, layer visibility.
- `blender/sea/materials.py`: procedural physically based materials (olive paint with edge wear, crevice dust and road dust; rubber; metals; glass; lamps).
- `blender/sea/geo.py`: mesh and curve builders; the `Builder` tags every object with its layer (`base` or a card ID).
- `blender/sea/vehicles/<mission>.py`: one base vehicle per mission, with named mount points.
- `blender/sea/parts/`: one builder per card, placed at a mount.
- `blender/render.py`: renders the hero still, turntable, build angles (base plus one layer per part) and card renders.
- `tools/`: encoder, review preview and measurements (TypeScript, run by Node).

## Build layers

For each build angle, every layer uses the same camera. The base layer renders the vehicle alone. Each part layer renders that part with the base vehicle set as a **shadow catcher**: the hull hides the part where it is in front, and the part's shadows fall on the hull. Stacking base and part layers in manifest order then occludes correctly. The encoder trims each layer to its visible pixels and records the offset.

## Sizes (performance over looks, owner 2026-10-10)

| Output | Size | Notes |
|---|---|---|
| Hero still | 1600×900 | chooser (always; keeps WebGL off the first screen) |
| Build angles (base and part layers) | 1280×720 | showcase panel; enough for about 640 CSS px at 2× |
| Turntable | 960×540 × 24 frames | base vehicle only; neighbouring frames are pre-decoded |
| Card render | 512×512 | shown at about 256 CSS px |
