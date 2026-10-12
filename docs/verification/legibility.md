# Legibility practices: lighting, angle, shading, pedagogy, UI

Research fragment, 2026-10-12. Sources were found by web search; weakly sourced points are marked (unverified). Project facts used: `art/blender/sea/scene.py` already uses AgX (Medium High Contrast look), exposure -0.25, key/fill/rim area lights plus reflection cards.

## 1. Offline product rendering (Blender stills)

- Three-point roles: key shapes, fill lifts shadows, back/rim separates from background. Key:fill about 2:1 (1.5:1 light, up to 4:1 dramatic); fill about 50% of key or the image goes flat; raise rim until a crisp edge shows without clipping. Photo/video sources, so starting points only. https://vidpros.com/three-point-lighting-setup/ ; https://riverside.com/blog/3-point-lighting
- AgX vs Filmic: both are view transforms only; AgX holds highlights better, but may shift hue (an indigo shifted about 11 degrees) and wash out some scenes. Render a swatch of the part palette in both and compare against reference. https://blenderartists.org/t/agx-changes-hue/1527123.md ; https://cgcookie.com/community/17899-filmic-vs-agx
- Exploded views: separate along true assembly directions, stagger, keep part count per view modest (vendor figure 30-50), thicker outline on the main body and thinner on small fasteners, stable callout numbers. https://3d.irpr.agency/glossary/exploded-view/ ; https://racklify.com/encyclopedia/how-to-create-exploded-views-for-assembly-instructions-and-maintenance/ ; https://grail.cs.washington.edu/projects/exview3D/exview3D-SIG08.pdf (Li et al., SIGGRAPH Asia 2008, explosion layout).
- Not found by search (general industry practice, unverified): 3/4 view with 50-85 mm equivalent focal length, material breakup via roughness/metal variation, cavity/edge wear, inverted-hull or Freestyle outlines.

Recommended numbers (starting points to tune):
- Key:fill 2.5:1 to 3:1 (projector washout compresses shadows, so do not go darker than 4:1). Rim about 0.6-1.0 x key, placed behind-opposite the key.
- Adjacent parts: aim for at least 12 L* (CIELAB) or 1.3:1 relative-luminance ratio between touching parts in the final tonemapped image, otherwise separate by hue, roughness (matte vs glossy) or a dark panel-gap line.
- Camera: 3/4 (yaw 30-45, pitch 15-25), 60-85 mm equivalent to avoid wide-angle distortion; per-part hero cards pitched so the part's most distinctive silhouette faces the camera.
- Dark panel-gap/outline: 2-3 px at 1280x720 (Freestyle or inverted hull), tone about 25% of the part's value, not black. Thin 1 px lines vanish on projectors.
- AO: keep a strong contact AO (strength about 1.0) but floor shadows at about 10% luminance so parts do not merge into black.

Automatable check (ID-mask render): render a flat Cryptomatte/object-index pass at the same camera. Per part compute mean L* inside mask and in a 6 px ring of each neighbouring mask. FAIL if |dL*| < 8 AND hue difference < 15 degrees AND roughness class equal. Edge contrast: Sobel gradient mean along each mask boundary must exceed a threshold (start 0.04 in display-referred 0-1). Also check in grayscale and with a deuteranopia simulation (same test). Runs offline from a mask pass; no Blender change to the product.

## 2. Real-time three.js on iGPU

- OutlinePass is a screen-space post pass costing per pixel; `downSampleRatio` defaults to 2 and is the main lever; it has no anti-aliasing with a multisampled composer target (needs FXAA/SMAA after). Official doc: https://threejs.org/docs/pages/OutlinePass.html ; AA thread: https://discourse.threejs.org/tag/antialiasing/302.md ; alternative: https://discourse.threejs.org/t/outlinepass-with-effectcomposer-or-outlineeffect/19790
- Tone mapping runs once at output (OutputPass last); per-frame cost is small. No iGPU benchmark was found, so measure. https://discourse.threejs.org/tag/tone-mapping/609
- No authoritative source found for SSAO cost; general knowledge (unverified): SSAO is a multi-sample full-screen pass, several times the cost of a vertex-colour AO bake. Keep baked AO.

Recommendations:
- Use `renderer.toneMapping = NeutralToneMapping` (keeps part albedo hues faithful, no hue skew) or AgX if highlights clip; test both on the swatch. Exposure 0.9-1.1.
- Hemisphere (sky/ground contrast about 1.6:1) + one directional key + cheap Fresnel rim in `onBeforeCompile` (about 4 ALU ops per pixel, no extra pass). Rim colour a cool tint at 0.25-0.35 strength.
- Hover/selection: avoid a full OutlinePass at 30 fps on UHD 770. Prefer (a) inverted-hull mesh for the single selected part (one extra draw of that mesh, scale 1.02, backface, flat colour of at least 3:1 against the background), or (b) emissive/Fresnel boost on the selected material. Use OutlinePass only if measured under budget with downSampleRatio 2-4.
- Check: frame-time test on the UHD 770 proxy with selection on/off; delta must stay within MPES §14 budget. Screenshot test: selected part's boundary ring vs neighbours contrast at least 3:1 (same ID-mask idea, via a flat-colour debug render of the scene).

## 3. Pedagogy and multimedia learning

- Mayer principles (Cambridge Handbook): coherence (remove extraneous material; 23/23 tests, median d 0.86), signalling (cues pointing at essentials; 24/28, d 0.41), spatial contiguity (labels next to the thing they name), temporal contiguity, redundancy (do not repeat the same text in several channels). https://resolve-he.cambridge.org/core/books/cambridge-handbook-of-multimedia-learning/principles-for-reducing-extraneous-processing-in-multimedia-learning-coherence-signaling-redundancy-spatial-contiguity-and-temporal-contiguity-principles/CD5B7AE1279A9AB81F8EEBB53DBEC86E ; https://link.springer.com/10.1007/s10639-022-11283-2
- Pre-attentive attributes (Ware): colour, orientation, size, motion pop out, but pop-out weakens as distractors grow, so one highlight per still. https://faculty.cc.gatech.edu/~john.stasko/4460/Notes/perception.pdf ; https://www.arxiv.org/pdf/2601.20080
- Figure-ground: contrast, closure and relative size make the figure; the chosen part should be the figure and the rest recede. https://www.coreldraw.com/en/blog/gestalt-principles/figure-ground/ ; https://oreilly.com/library/view/universal-principles-of/9781592535873/xhtml/ch42.html

Recommendations:
- Chosen/new part in the still: render it full-colour with the rim and outline, other parts at about 75% saturation and 85% value (desaturate, do not dim to dark), plus a leader-line callout with its name placed within one callout-length of the part (spatial contiguity). Maximum 1 highlighted part and 3-5 callouts per still (coherence, signalling).
- No decorative text or duplicate labels (redundancy): the caption beside the image carries the effect, the callout carries only the name.
- Check: count highlighted parts per still (metadata) is exactly 1; callout anchor-to-part distance below 15% of image width; callout text not overlapping other labels (bounding-box test).

## 4. UI/UX/GUI

- WCAG 2.2: text 4.5:1 (large 3:1); UI components and graphics 3:1 (1.4.11); focus not fully obscured (2.4.11, AA); focus appearance (2.4.13, AAA): indicator at least 2 CSS px perimeter and 3:1 against unfocused state and neighbours. Colour never the sole signal (1.4.1). https://tetralogical.com/blog/2023/10/05/whats-new-wcag-2.2 ; https://adrianroselli.com/2023/10/2-4-11-adversarial-conformance.html ; https://w3c.github.io/wcag/understanding/use-of-color.html
- Projectors: ambient light lifts blacks, so dark-tone differences collapse; sources are AV vendors (weigh accordingly). https://blog.draperinc.com/2026/09/what-is-the-best-projection-screen-material-for-a-classroom-with-the-lights-on/ ; https://www.ravepubs.com/?p=16743
- Colour-blind safe: Okabe-Ito eight-colour set (e.g. #E69F00, #56B4E9, #009E73, #F0E442, #0072B2, #D55E00, #CC79A7). https://plotstyle.readthedocs.io/en/stable/guides/palettes.html

Recommendations: target text at least 7:1 and non-text at least 4.5:1 (projector margin); minimum stroke 2 px (3 px for focus ring, offset 2 px, dual-tone light+dark so it works on any background); no body text below 16 px at 1280x720; pair every colour code with an icon/shape/letter; use Okabe-Ito for team and category colours and verify via grayscale.
Checks: axe-core in Playwright (`color-contrast`, `focus-visible` style), a custom computed-style contrast test at 7:1 for text and 4.5:1 for borders, a Tab-through test asserting the focused element's bounding box is inside the viewport and not covered (`elementFromPoint` at its centre), and a CVD-simulation screenshot test (deuteranopia/protanopia/tritanopia matrices) re-running the ID/neighbour palette distinctness check.

## Prioritised top 10

1. ID-mask neighbour test (Section 1) as a new check next to `art/blender/sightline.py`; fails on near-equal adjacent parts. Biggest return, no runtime cost.
2. Highlight the chosen/new part in each still (full colour + outline, others at 75% saturation) via `art/blender/sea/scene.py` layer/material override.
3. One callout per still, within spatial contiguity, rendered in the HTML gallery/UI layer.
4. Raise rim and add dark panel-gap lines (2-3 px) in `art/blender/sea/materials.py`; rim light 0.6-1.0 x key in `scene.py`.
5. Material breakup: roughness and metal variation between neighbouring parts (`materials.py`), edge/cavity darkening by vertex colour.
6. Camera: 3/4, 60-85 mm, per-part pitch override in `scene.py`; confirm against the existing "best still angles" sweep.
7. Real-time: selection via inverted hull or Fresnel boost, not OutlinePass; Neutral or AgX tone mapping chosen from a swatch test (three.js showcase code; see docs/CODEBASE.md).
8. UI contrast margins: 7:1 text, 4.5:1 non-text, 3 px dual-tone focus ring (MPES §7 tokens).
9. Okabe-Ito team/category colours plus a shape or letter, with a CVD screenshot check.
10. Playwright axe + Tab-through focus-obscured test added to the e2e suite (`tests/e2e/`).
