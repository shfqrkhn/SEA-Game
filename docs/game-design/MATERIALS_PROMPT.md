# Shared material family board: W68 generation brief

Status: **generator-ready; zero generated or accepted by this document**. Lead owns image generation and receipts. All twelve material records were planned/unmapped in the read inventory. This is an original visual target, not measured material science or a rendering acceptance receipt.

## Exact panel mapping and authored response

Use a 4 × 3 sheet in this reading order. Each panel has the same sphere, an applied construction sample and a small cross-section/edge inset where useful. Numeric values below are observed authored runtime parameters from `source/three/materials.mjs`; do not print them into concept pixels or treat them as manufacturer measurements.

| Panel | Exact ID | Distinct appearance / applied sample | Runtime roughness / metalness |
| --- | --- | --- | --- |
| 1 | MAT-paint | Muted sage satin dielectric coating; formed hull panel with bevel, seam and restrained highlight | .53 / 0 |
| 2 | MAT-edge | Dark olive coated frame; supported edge/retaining bracket, no chrome finish | .61 / .08 |
| 3 | MAT-steel | Light brushed/machined steel; shaft, bearing seat and machined edge | .29 / .92 |
| 4 | MAT-darkSteel | Dark cast steel; substantial seated mount with subtle casting response | .62 / .86 |
| 5 | MAT-rubber | Charcoal moulded rubber; tyre/isolator showing real shape and fine surface, no metal glare | .82 / 0 |
| 6 | MAT-glass | Blue-grey low-roughness dielectric optical surface; framed pane/lens with controlled reflection, readable edges | .065 / 0 |
| 7 | MAT-amber | Restrained amber lamp lens; formed lamp cover with inner reflector construction | .25 / 0 |
| 8 | MAT-lamp | Pale clear-lamp finish; lens/reflector housing with restrained highlights | .22 / 0 |
| 9 | MAT-red | Muted red lamp lens; formed tail-lamp housing, no red metal surface | .39 / 0 |
| 10 | MAT-pressedSteel | Pressed steel; thin folded flange and stamped reinforcing shape | .40 / .88 |
| 11 | MAT-castSteel | Mid-dark cast steel; thicker housing wall and softly rounded casting edge | .66 / .84 |
| 12 | MAT-upholstery | Dark woven upholstery; supported seat cushion with subtle weave, stitched edge and fabric/padding inset | .91 / 0 |

Current shared `glass` uses reflection-only rendering to avoid transmission targets; cabin factories may use transparent variants. A convincing concept pane is not proof that runtime transmission/refraction is present. Lamp colours are authored material direction, not a claim of physical optical measurements. Microstructure must remain subtle at intended scale; geometry details cannot be replaced by noisy texture. Distinguish pressed versus cast steel with thickness/form as well as finish.

## Exact generator-ready prompt

```text
Create an original, realistic SEA Game material construction reference board with exactly twelve clearly separated panels in a 4-column by 3-row landscape grid, warm ivory background, calm minimalist professional engineering presentation. Use identical neutral broad key/fill light and the same moderate three-quarter camera for every panel. Each panel contains a complete material sphere and a larger complete applied construction sample; add a small cross-section or separated layer inset only where it helps explain glazing, coating, lamp or upholstery construction. Show credible detailed geometry, fine restrained finishes and coherent relative scale. ALL spheres, samples, inset fragments, labels and shadows must be fully visible and safely contained, at least 10% outer canvas margins and generous panel gutters. No crop, no logos, no manufacturer textures, no dirt/grunge, no scene UI, prices, specifications or extra wording. Print only each exact following panel ID, large and readable. Do not repeat, change capitalization or substitute any ID.

Top row left to right: MAT-paint, muted sage satin dielectric paint on a formed hull panel with seams/bevels, not metallic chrome; MAT-edge, dark olive coated supporting frame/retaining bracket, subdued reflection; MAT-steel, light brushed machined steel on shaft/bearing seat with readable machining direction; MAT-darkSteel, dark cast steel substantial seated mount, subtle casting response and plausible wall thickness.
Middle row: MAT-rubber, charcoal moulded tyre/isolator, believable tread/edge shape and fine rough surface with no metal glare; MAT-glass, blue-grey low-roughness dielectric sphere and framed optical pane/lens, controlled reflections and readable pane edges, not opaque painted metal; MAT-amber, amber formed lamp lens and connected inner reflector/housing with restrained highlights; MAT-lamp, pale clear lamp lens/reflector/housing, subtle layered lens inset, no blown-white glow.
Bottom row: MAT-red, muted red formed tail-lamp lens and housing, dielectric response not red metal; MAT-pressedSteel, pressed steel folded flange and stamped reinforcement, thin shaped sheet with restrained directional reflection; MAT-castSteel, darker cast steel thick housing and curved casting edges, softly irregular microscopic finish with no random stains; MAT-upholstery, dark woven seat cushion on support, subtle cloth weave/stitching and separated fabric/padding edge inset, soft matte sheen not shiny plastic.

Keep paint, raw machined steel, pressed steel, cast steel, rubber, optical surfaces and woven upholstery unmistakably distinct under the same exposure. Use fixed neutral studio lighting and soft geometry-shaped contact shadows, no dramatic coloured lights or baked vehicle silhouette. This is an original illustrative target for Three.js physical material implementation, not a measured material database. Preserve all twelve exact ID labels and complete samples.
```

## Primary documentation, rights and review

[Official MeshPhysicalMaterial documentation](https://threejs.org/docs/pages/MeshPhysicalMaterial.html), read 2026-10-09, describes the renderer's physical material controls including roughness/metalness, clearcoat, transmission/IOR and sheen. It establishes API meaning, not SEA's calibrated physical properties. [Three.js physical clearcoat example source](https://github.com/mrdoob/three.js/blob/dev/examples/webgl_materials_physical_clearcoat.html) is a lighting/material comparison direction only; no example HDR, texture, model or source snippet is adopted for this board. Original implementation uses the existing pinned Three.js runtime and procedural finishes; applicable MIT notices remain required in distribution. Software MIT does not establish rights for third-party example imagery/assets.

Source material snapshot SHA256: `84b8216754efbbefa66e600fb7bcc5ad7a8e4bcd478a7bfb51c9b5ac7c480dcb`. Inventory snapshot: `ee68a29bb3fad8e3efb327e9e470a6fc37f27411d1ab64d1910155d2603eeb60`; receipts: `535494d90bf118347b0c5891b795ac73741fcfdbd9905888c797b0ffa9d08fd3`.

Lead must inspect actual pixels for all twelve exact IDs, uncropped subjects/labels, uniform lighting, material separation and fabrication plausibility; record actual prompt/native provenance/file hash and every remaining defect. Registration can mark generated-exploratory only. Runtime fidelity needs equivalent fixed-light sample renders and applied-model captures; moving shadows require rotation captures, which a static concept cannot prove. Material acceptance and full closure remain open.
