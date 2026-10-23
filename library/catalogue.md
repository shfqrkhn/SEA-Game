# Reusable building blocks catalogue

Date: 2026-10-12

## How to use this catalogue

Pick a section, scan the table, then check "Fit" before adding anything. Entries are candidates, not audited dependencies: before shipping, audit the exact version you ship, including bundled components and release artefacts (npm metadata alone does not settle these), and keep the licence evidence. Each entry says how it was checked. **(V)** = licence and version read on the official page or repository on 2026-10-12. **(unverified)** = not confirmed in this pass; it comes from earlier knowledge, so re-check the official licence file before shipping. Licences outside MIT, Apache-2.0, BSD, ISC, CC0, OFL-1.1, public domain or Unlicense are marked **FLAG**. Anything shipped goes into the project's THIRD_PARTY_NOTICES.md (see the last section). Sizes are rough and drift between releases: measure in your own build.


## Registry check (2026-10-12)

Licence and latest version as published on the npm registry (`npm view <package> license version`), run on 2026-10-12. Where a table below says "(unverified)" for one of these packages, this check settles its licence. Re-run the command before shipping; a licence can change between versions.

| Package | Licence | Version |
|---|---|---|
| @radix-ui/colors | MIT | 3.0.0 |
| open-props | MIT | 1.7.23 |
| @uswds/uswds | see its LICENSE.md (public domain with some third-party parts) | 3.14.0 |
| govuk-frontend | MIT (crown and logo assets excluded) | 6.5.1 |
| @picocss/pico | MIT | 2.1.1 |
| tailwindcss | MIT | 4.3.3 |
| a11y-dialog | MIT | 8.1.5 |
| lit | BSD-3-Clause | 3.3.3 |
| @zag-js/core | MIT | 1.46.0 |
| lucide | ISC | 1.55.0 |
| @tabler/icons | MIT | 3.49.0 |
| @phosphor-icons/core | MIT | 2.1.1 |
| material-symbols | Apache-2.0 | 0.48.0 |
| @fontsource/inter, @fontsource/ibm-plex-sans, @fontsource/atkinson-hyperlegible-next | OFL-1.1 | 5.3.0 |
| uplot | MIT | 1.6.32 |
| chart.js | MIT | 4.5.1 |
| @observablehq/plot | ISC | 0.6.17 |
| d3-scale (and other d3 modules) | ISC | 4.0.2 |
| three | MIT | 0.186.1 |
| @gltf-transform/core | MIT | 4.5.1 |
| meshoptimizer | MIT | 1.3.0 |
| draco3d | Apache-2.0 | 1.5.7 |
| three-mesh-bvh | MIT | 0.9.16 |
| postprocessing | Zlib | 6.39.5 |
| @google/model-viewer | Apache-2.0 | 4.4.0 |
| ktx2-encoder | MIT | 0.6.0 |
| sharp | Apache-2.0 (its bundled libvips is LGPL-2.1-or-later: fine as a build tool, do not ship it) | 0.35.5 |
| @squoosh/cli | Apache-2.0 (no release in years: prefer sharp or avifenc) | 0.7.3 |
| playwright | Apache-2.0 | 1.64.0 |
| axe-core | MPL-2.0 (file-level copyleft: fine as a test tool. If shipped, even unmodified or minified, recipients must get the MPL notice and access to the covered source form; modified MPL files stay MPL) | 4.14.0 |
| pa11y | LGPL-3.0-only (test tool only) | 10.0.0 |
| lighthouse | Apache-2.0 | 13.5.0 |
| vitest | MIT | 5.0.5 |
| fast-check | MIT | 4.10.2 |
| @adobe/leonardo-contrast-colors | Apache-2.0 | 1.1.0 |

---

## 1. Design tokens, colour and themes

| Name | Purpose | URL | Licence | Checked | Fit |
|---|---|---|---|---|---|
| Leonardo (Adobe) | Generates colour scales that hit a target contrast ratio | https://github.com/adobe/leonardo | Apache-2.0 (V) | 2026-10-12; package `@adobe/leonardo-contrast-colors` | Use at build time to make light, dark and high-contrast scales. Embeddable. |
| Radix Colors | 12-step accessible scales, light and dark pairs | https://www.radix-ui.com/colors | MIT (unverified) | not checked | Ready-made dark/light pairs. Steps 11-12 are text colours. Copy only the values you use. |
| Open Props | CSS custom-property tokens (sizes, easings, shadows) | https://open-props.style | MIT (unverified) | not checked | Cherry-pick files. The whole set is larger than a single-file app wants. |
| USWDS design tokens | US gov tokens and components | https://github.com/uswds/uswds | Mostly CC0 / public domain with some MIT parts (unverified) | not checked | The colour "grade" idea (grade gap gives contrast) is useful. Check the notice for fonts and third-party parts. |
| GOV.UK Frontend | Accessible components, focus style, spacing | https://github.com/alphagov/govuk-frontend | MIT (unverified). Crown and logo assets are NOT open: **FLAG**, never use them. | not checked | Good HTML patterns. Strip branding. |
| Pico CSS | Classless CSS with light/dark | https://github.com/picocss/pico | MIT (unverified) | not checked | Fast prototypes. Prefer your own tokens for shipped apps (size). |
| Tailwind palette | Widely used colour names | https://tailwindcss.com | MIT (unverified) | not checked | Values may be copied with the notice. Not tuned for contrast; test every pair. |
| WCAG 2.2 contrast rules | 4.5:1 text, 3:1 large text and UI parts | https://www.w3.org/TR/WCAG22/ | W3C document licence | reference | Projector theme: aim for 7:1 text, avoid pure white on pure black, no thin light-grey text, test at low brightness. |

Theme notes. `ui/tokens.css` ships two sets: dark for screens and a light "projector" set (high contrast, 7:1 text, no subtle greys); add a separate high-contrast set only if testing shows the need, and honour `forced-colors`. Never use colour alone for meaning. Test contrast on the real token pairs in CI.

## 2. UI patterns and accessible widgets (no framework)

| Name | Purpose | URL | Licence | Checked | Fit |
|---|---|---|---|---|---|
| WAI-ARIA Authoring Practices (APG) | Patterns and example code for tabs, dialog, listbox, etc. | https://www.w3.org/WAI/ARIA/apg/ | W3C Software and Document licence (V: the W3C licence allows copy and modify; keep the notice and mark changes). The APG footer says W3C permissive licence rules apply "unless otherwise noted". | 2026-10-12 | Best source of keyboard behaviour. Copy example code with the W3C notice. Re-read each page's own notice. Embeddable. |
| a11y-dialog | Tiny accessible modal | https://github.com/KittyGiraudel/a11y-dialog | MIT (unverified) | not checked | Native `<dialog>` is usually enough now. |
| Web Awesome (ex Shoelace) | Web components | https://github.com/shoelace-style/webawesome | Free package MIT (V). Pro tier is paid and proprietary: **FLAG** | 2026-10-12 | Free package only. Heavy for a single file unless you import single components. |
| Lit | Small web-component base class | https://lit.dev | BSD-3-Clause (unverified) | not checked | About 5-6 KB. Use when you want components without a framework. |
| GOV.UK / USWDS components | Tested HTML and CSS patterns | see section 1 | see section 1 | | Copy markup and behaviour, not branding. |
| Native HTML | `<dialog>`, `<details>`, `popover`, `inert` | https://developer.mozilla.org | n/a | | First choice. Zero bytes shipped. |
| Zag.js | Framework-agnostic widget state machines | https://zagjs.com | MIT (unverified) | not checked | Only when native elements and APG are not enough. |

## 3. Icons and fonts

| Name | Purpose | URL | Licence | Checked | Fit |
|---|---|---|---|---|---|
| Lucide | Consistent line icons, one SVG each | https://github.com/lucide-icons/lucide | ISC (V). Some icons derive from Feather (MIT) (unverified) | 2026-10-12 | First pick. Inline only the SVGs you use. Keep the notice. |
| Tabler Icons | 5000+ SVG icons | https://tabler.io/icons | MIT (unverified) | not checked | Bigger set, same inline approach. |
| Phosphor Icons | Icons in six weights | https://phosphoricons.com | MIT (unverified) | not checked | When you need filled or duotone variants. |
| Material Symbols | Google icons | https://fonts.google.com/icons | Apache-2.0 (unverified) | not checked | Use SVG exports, not the full variable font (large). |
| Atkinson Hyperlegible Next | Legibility-first sans (Braille Institute) | https://github.com/googlefonts/atkinson-hyperlegible-next | OFL-1.1 (V). Release 2.001, 2024-11-20. Repo archived 2026-08-13. | 2026-10-12 | Strong for classroom text. French coverage not stated on the page: test é è ê ë à â ç î ï ô ù û ü ÿ œ æ and capitals in your subset. Archived = stable, not updated. |
| Inter | Neutral UI sans | https://rsms.me/inter/ | OFL-1.1 (unverified) | not checked | Full Latin incl. French. Subset to WOFF2. |
| IBM Plex | Sans, Serif, Mono | https://github.com/IBM/plex | OFL-1.1 (unverified) | not checked | Technical look. Plex Mono for code. |
| Noto family | Wide script coverage | https://fonts.google.com/noto | OFL-1.1 (unverified) | not checked | Fallback for missing scripts. Large, subset hard. |
| fonttools (pyftsubset) | Subset fonts, make WOFF2 | https://github.com/fonttools/fonttools | MIT (unverified) | not checked | Standard tool. Keep Latin-1 plus œ Œ ’ « » € for French. |
| glyphhanger | Finds the glyphs a page uses | https://github.com/zachleat/glyphhanger | MIT (unverified) | not checked | Needs a headless browser and fonttools. Check it still runs on your Node. |

Font rules. OFL fonts may be embedded (base64 WOFF2) in a shipped file. Keep the copyright line and licence text. Do not sell the font alone. Reserved Font Names apply to modified versions if declared.

## 4. Charts and data visualisation

| Name | Purpose | URL | Licence | Checked | Fit |
|---|---|---|---|---|---|
| uPlot | Fast small line/area/bar charts | https://github.com/leeoniya/uPlot | MIT (V) | 2026-10-12; README says "~50 KB min" (gzip figure not stated) | Best for iGPU laptops and big data. Canvas: add a text summary and table. |
| Chart.js | General charts | https://www.chartjs.org | MIT (unverified) | not checked | Tree-shakable in v4. Expect tens of KB gzip. Canvas: add a data table. |
| Observable Plot | Concise SVG charts | https://observablehq.com/plot | ISC (unverified) | not checked | Needs D3 modules; around 100+ KB. SVG helps accessibility. |
| D3 modules (d3-scale, d3-shape, d3-array) | Scales and shapes only | https://d3js.org | ISC (unverified) | not checked | Tiny when you import only what you need. You draw the SVG. |
| Hand-written SVG | Simple bar and line charts | n/a | n/a | | For 1-3 chart types this is often smaller and more accessible than any library. |

Rule. Every chart needs a text summary and a data table. Use labels or patterns as well as colour.

## 5. 3D web runtime and asset pipeline

| Name | Purpose | URL | Licence | Checked | Fit |
|---|---|---|---|---|---|
| three.js | WebGL/WebGPU engine | https://github.com/mrdoob/three.js | MIT (unverified on the page read; long known) | Latest release r186, published 24 Sep (V; year not shown, taken as 2026) | Core. Import by path so the bundler drops unused code. iGPU: cap pixel ratio near 1.5, one shadowed light at most, bake lighting, avoid heavy physical material extras. |
| glTF-Transform | Script glTF optimisation (prune, dedupe, quantize, compress) | https://github.com/donmccurdy/glTF-Transform | MIT (V) | 2026-10-12 | Build time only. The asset pipeline backbone. |
| meshoptimizer / gltfpack | Mesh compression and simplification | https://github.com/zeux/meshoptimizer | MIT (V); v1.3 seen | 2026-10-12 | EXT_meshopt_compression: small decoder, fast. Best default for single-file apps. |
| Draco | Geometry compression | https://github.com/google/draco | Apache-2.0 (unverified) | not checked | Decoder WASM is large (hundreds of KB, unverified). Prefer meshopt for a single file. |
| KTX-Software | GPU texture compression (KTX2) tools and libktx | https://github.com/KhronosGroup/KTX-Software | **FLAG** Mixed licence (mostly Apache-2.0, REUSE-tagged); includes Ericsson's ETC decoder, which is not open source. For an all-FOSS libktx build set `LIBKTX_FEATURE_ETC_UNPACK=NO`; record each shipped component's licence | 2026-10-12, release not shown | Saves GPU memory on iGPU. For a few small textures, WebP/AVIF is simpler. |
| Basis Universal | Supercompressed GPU textures and the web transcoder | https://github.com/BinomialLLC/basis_universal | Apache-2.0 (unverified) | not checked | Transcoder WASM adds size; worth it only with many or large textures. |
| three-mesh-bvh | Fast raycasting and picking | https://github.com/gkjohnson/three-mesh-bvh | MIT (unverified) | not checked | When picking on dense meshes is slow. |
| postprocessing (pmndrs) | Effects pipeline for three.js | https://github.com/pmndrs/postprocessing | Zlib (unverified) | not checked | Permissive but not on the short list: note it. Each pass costs fill rate on iGPU. |
| model-viewer | Web component 3D viewer | https://modelviewer.dev | Apache-2.0 (unverified) | not checked | Quick viewer. Bundles three.js, larger than a custom setup. |

iGPU notes. Test on Intel UHD 770 class. Low draw calls (merge meshes, atlas textures), a triangle budget in the low hundreds of thousands, textures 2048 px or less, WebP/AVIF/KTX2 over PNG, a quality switch, pause when the tab is hidden. Respect prefers-reduced-motion for auto-rotation.

## 6. Blender and render assets

| Name | Purpose | URL | Licence | Checked | Fit |
|---|---|---|---|---|---|
| Poly Haven | HDRIs, PBR textures, models | https://polyhaven.com | CC0 (V): any use, no attribution needed, redistribution allowed. Site text, logos and example renders are NOT CC0. Scraping needs permission. | 2026-10-12 | Primary HDRI and texture source. Embeddable. Credit is optional but kind. |
| ambientCG | CC0 PBR materials | https://ambientcg.com | CC0 (unverified; the licence page redirected to docs.ambientcg.com and was not read) | not read | Good for surfaces. Confirm on the docs site. |
| Blender Studio / Foundation assets | Production files, rigs, brushes | https://studio.blender.org | **FLAG** Mixed: open-movie material is usually CC-BY (credit required), some CC0 (unverified) | not checked | Check each asset page. |
| BlenderKit | Asset marketplace | https://www.blenderkit.com | **FLAG** Mixed: per-asset Royalty Free (no raw redistribution) or CC0. Licence page moved to blendkit.com, not read (unverified) | not read | Use only CC0 items for anything handed to others. Record each asset's licence. |
| Quixel Megascans (now on Fab) | Scanned materials and models | https://www.fab.com | **FLAG** Proprietary Fab/Quixel licence, not FOSS; terms have changed over time (unverified) | not checked | Terms differ per acquisition: read each item's licence before use; incorporating an asset in a project and redistributing it standalone are treated differently. Library policy (not a licence rule): CC0 only for anything shared or handed over. |
| Blender Geometry Nodes | Procedural modelling, built in | https://docs.blender.org | Blender as distributed is GPL-3.0-or-later (official licence notice for 4.5); the software licence does not extend to your scenes, renders or exported models | not checked | Prefer nodes over add-ons for portability. |
| Sverchok | Node-based parametric modelling add-on | https://github.com/nortikin/sverchok | GPL-3.0 (unverified) **FLAG** | not checked | Tool use is fine. Do not copy its code into shipped apps. |
| fSpy | Camera match from a photo | https://fspy.io | GPL-3.0 (unverified) **FLAG** | not checked | Tool use only. Good for matching reference photos. |
| Lighting references | Studio HDRIs and lighting set-ups | https://polyhaven.com/hdris | CC0 | | Product: large soft key near 45 degrees, strip rim lights for edges, low-contrast fill, neutral grey floor. Technical illustration: flat even light, thin edge highlights, no coloured light. |

## 7. Image and media tooling

| Name | Purpose | URL | Licence | Checked | Fit |
|---|---|---|---|---|---|
| libavif / avifenc | AVIF encode and decode | https://github.com/AOMediaCodec/libavif | BSD-2-Clause (unverified) | not checked | Best size for photoreal renders. Keep a WebP fallback if the target browsers need it. |
| sharp / libvips | Fast Node image processing | https://github.com/lovell/sharp | sharp Apache-2.0; libvips LGPL-2.1+ (unverified) **FLAG** | not checked | Build tool. Do not embed libvips. |
| oxipng | Lossless PNG optimiser | https://github.com/shssoichiro/oxipng | MIT (unverified) | not checked | For sprites that must stay PNG. |
| Squoosh | Browser image codecs (Google) | https://github.com/GoogleChromeLabs/squoosh | Apache-2.0 (V) | 2026-10-12 | The CLI is believed deprecated or removed (unverified; the page did not say). Do not depend on it; use sharp or avifenc. |
| FFmpeg | Video and audio transcode | https://ffmpeg.org | **FLAG** LGPL-2.1+ for default builds; GPL-2+ with libx264/x265 etc.; some codecs carry patents (unverified) | not checked | Build tool only. Never bundle. Prefer VP9/AV1 in WebM. |
| ImageMagick | Image conversion | https://imagemagick.org | ImageMagick License, Apache-style, custom (unverified) **FLAG** (not on short list) | not checked | Build tool only. |

## 8. Testing, accessibility and QA

| Name | Purpose | URL | Licence | Checked | Fit |
|---|---|---|---|---|---|
| Playwright | Browser automation, screenshots | https://playwright.dev | Apache-2.0 (unverified) | not checked | Main end-to-end tool. Not shipped. |
| axe-core | Automated accessibility rules | https://github.com/dequelabs/axe-core | **MPL-2.0 (V) FLAG** | 2026-10-12 (release not shown) | File-level copyleft. Dev and test dependency is fine. Do not embed in a shipped file. Automated checks find only part of the issues. |
| pa11y | CLI accessibility runner | https://pa11y.org | LGPL-3.0 (unverified) **FLAG** | not checked | Dev tool only. |
| Lighthouse | Performance and accessibility audit | https://github.com/GoogleChrome/lighthouse | Apache-2.0 (unverified) | not checked | Run on the built file. Uses axe inside. |
| Vitest | Unit tests | https://vitest.dev | MIT (unverified) | not checked | Fits Vite builds. |
| fast-check | Property-based testing | https://github.com/dubzzz/fast-check | MIT (unverified) | not checked | Good for scoring and rules logic. |
| culori + WebAIM checker | Contrast maths in tests; manual checker | https://culori.js.org, https://webaim.org/resources/contrastchecker/ | culori MIT (unverified) | not checked | Automate WCAG ratios in tests. APCA is not part of WCAG 2.2: use WCAG ratios for compliance. |
| NVDA | Free Windows screen reader | https://www.nvaccess.org | GPL-2.0 (unverified) **FLAG** | not checked | Tool only. Test each release with NVDA and Firefox or Chrome. |

## 9. Pedagogy and classroom UX references (read, do not copy)

| Reference | Why | URL | Licence and notes |
|---|---|---|---|
| CAST UDL Guidelines 3.0 | Checklist for engagement, representation, action and expression | https://udlguidelines.cast.org | (V) version 3.0, copyright CAST, Inc. Reuse terms not read. **FLAG**: link and paraphrase, do not copy text. |
| Mayer's multimedia principles | Coherence, signalling, contiguity, segmenting, modality | Mayer, "Multimedia Learning" (Cambridge University Press) | Book. Cite and paraphrase. (unverified details) |
| Cognitive load theory (Sweller) | Limit extraneous load; worked examples | Sweller, Ayres, Kalyuga, "Cognitive Load Theory" (Springer) | Book. Cite only. (unverified) |
| Retrieval practice | Low-stakes quizzing beats rereading | https://www.retrievalpractice.org | Reuse terms not read (unverified). |
| Canada.ca content style guide | Plain language, bilingual EN/FR practice | https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/canada-ca-content-style-guide.html | Crown copyright terms (unverified). Reference only. |

Practical rules. One idea per screen. Put words next to the thing they describe. Keep instructions short and in the learner's language. Let the teacher pause, step back and enlarge. Use low-stakes retrieval throughout learning, not only at the end, with corrective feedback, spaced revisits and transfer questions. State measurable learning objectives and check learners against them.

## 10. Game feel and UI motion references

| Reference | Why | URL | Notes |
|---|---|---|---|
| prefers-reduced-motion (MDN; WCAG 2.2.2, 2.3.1, 2.3.3) | Replace large motion with fades or nothing; allow pausing of moving content | https://developer.mozilla.org/docs/Web/CSS/@media/prefers-reduced-motion | Also give an in-app motion switch. No more than 3 flashes per second. |
| "Juice it or lose it" (Jonasson and Purho, 2012) | Classic talk on feedback and polish | search the title (unverified link) | Talk, not code. |
| "The Art of Screenshake" (Jan Willem Nijman, Vlambeer) | Small effects that add feel | search the title (unverified link) | Talk, not code. |
| Material motion guidance | Duration and easing values | https://m3.material.io/styles/motion | Reference only. Keep UI motion short (about 300 ms or less). |
| Disney's 12 principles applied to UI | Anticipation, easing, follow-through | various | Motion must never carry meaning alone. |

Serious-game rule. Feedback must work without motion, sound or colour alone. Keep screen shake and flashes off by default or behind the reduced-motion switch.

---

## Licence rules for shipping

1. **Can be embedded in a single HTML file:** MIT, Apache-2.0, BSD, ISC, Zlib, CC0, public domain, Unlicense, and OFL-1.1 fonts. Keep the copyright and licence text for each.
2. **Attribution.** MIT, BSD, ISC and Apache-2.0 need the notice kept. Apache-2.0 also needs the NOTICE file if the project has one. CC-BY needs credit, a licence link and a note of changes. The W3C licence needs its notice kept and changes marked.
3. **Copyleft.** GPL and AGPL: do not embed in a shipped app unless the whole app can be GPL. LGPL: do not statically embed. MPL-2.0 (axe-core): file-level; anyone shipping MPL files, changed or not, must keep the notices and tell recipients how to get the source form, and changed MPL files stay MPL. Library policy (stricter than the licence): keep them as build and test tools only. Keep these as build and test tools only.
4. **Fonts under OFL-1.1.** May be embedded and subset. Keep the licence and copyright. Do not sell the font alone. Respect Reserved Font Names on modified versions.
5. **CC0 assets (Poly Haven, ambientCG).** No obligation. Record the source in the notices anyway.
6. **Not FOSS or restricted (flagged above):** Web Awesome Pro, Quixel/Fab, BlenderKit Royalty Free items, GOV.UK crown and brand assets, CAST UDL text, book content. Do not embed.
7. **Rendered output.** Images you render from CC0 or your own models belong to you. Renders that use restricted assets need that asset's licence checked first.
8. **Every shipped third-party item goes into the project's THIRD_PARTY_NOTICES.md:** name, version, URL, SPDX licence id, copyright line, and where it appears in the build. Remove the entry when the item is removed. Re-verify the licence when upgrading a version.
