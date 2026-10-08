# SEA Game - Systems Engineering Awareness

## Launch and distribution

[GitHub Pages launcher](https://shfqrkhn.github.io/SEA-Game/)

- [Instructor Master](SEA_Instructor_Standalone.html)
- [Student Companion](SEA_Student_Standalone.html)

For **guaranteed offline gameplay**, download an HTML file and open it directly as `file://`. Each HTML contains all of its CSS, JavaScript, game data, translations, 70 high-detail card images, six mission illustrations, training artwork, and vector artwork fallback. No web server, account, external JavaScript, service worker, or internet is required.

For the **local raster collection**, [download the repository ZIP](https://github.com/shfqrkhn/SEA-Game/archive/refs/heads/main.zip), extract it and open one of the two standalone HTML files without moving it from the extracted folder.

## Three-tier image chain

For each card, the browser renders the embedded artwork immediately and optionally substitutes:

1. HTTPS WebP from `https://shfqrkhn.github.io/SEA-Game/assets/v1/cards/CAP-A.webp` (example).
2. On remote load failure, the exact same local file at `./assets/v1/cards/CAP-A.webp`.
3. If both fail, the built-in raster-backed SVG. A purely vector card-specific illustration remains behind it for browser compatibility.

The six vehicle profile images and practice illustration follow the same chain. The SVG presentation embeds the WebP bytes for fidelity; it is **not** a purely vector recreation of the photorealistic artwork.

Card rules, labels, descriptions, prices, calculations, instructor ledger and student work remain local application data. Images contain no authoritative rule text. Session state is not sent to GitHub.

## Art inventory

- `assets/v1/cards/` - 70 WebP images plus 70 corresponding editable conceptual SVGs, keyed by card ID
- `assets/v1/vehicles/` - six WebP mission illustrations and their SVG references
- `assets/v1/practice/` - one WebP training image and SVG reference
- `.github/workflows/publish-artwork.yml` - reproducible extraction of the approved embedded WebP bytes into the repository

The content is **synthetic instructional artwork**, not an approved depiction of actual equipment. The reconstructed game deck still needs balance/content approval.

## Verification boundaries

Source-level JavaScript parsing, asset-count and image-integrity checks can be performed locally. The full eight-phase instructor and student journeys, accessibility, cross-browser `file://` handling, and final classroom acceptance still require representative browser/device testing. The browser's session storage does not provide long-term persistence or cross-device backup. The student application does not automatically synchronize with the instructor.

Do not enter personal, Protected, Classified, real-project, or operational information.
