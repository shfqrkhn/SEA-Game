# PRODUCT_RELEASE progress: W22 artwork audit

Date: 2026-10-08. R01/R14/R17/R19/R26, T15/T18, M5/M6. Single-agent self-review; no image replacement, publication, rights or classroom acceptance.

[Decode/safety audit](artwork-decode-audit.json): all 77 WebPs decode at 1200x360, expected card/practice/vehicle pairs are present, SVG viewBoxes/aspects are valid, and external/embedded SVGs are actual vectors. Both role fallback tables have the same 77 identities. QA uses bundled Windows Python/Pillow 12.3.0. [Eight unsafe/invalid SVG rejection cases](artwork-audit-negative-cases.log) pass. WSL lacks Pillow; no cross-platform raster decode claim is made.

[Contact sheet](artwork-contact-sheet.png) was visually inspected. Full-size assets/v1/cards/CAP-F.webp confirms an extraneous neighboring-image strip (D22). This remains a real visual defect despite decode success. Six vehicle artworks exist but are not shown by mission previews (D23). Documentation claiming embedded raster wrappers or absent WebPs was corrected against actual bytes. [Provenance](../../ARTWORK_PROVENANCE.md) and the keyed inventory keep distribution rights explicitly unresolved.

The audit script is QA-only and adds no runtime dependency. Original image bytes were preserved. Python bytecode cache is ignored. No failed product test was manufactured for this evidence/documentation work. Tests for safe SVG baseline and rejected executable/external/invalid-dimension variants validate a meaningful integrity boundary, not visual approval.

Next: repair CAP-F with matching fallback, integrate vehicle artwork paths, inspect all images at useful size and execute actual candidate browser/offline/accessibility gates. Rights/classroom/CI/release and handover remain open. PRODUCT_RELEASE assurance streak remains zero; a known defect and missing acceptance cannot count as a zero-change pass. Latest trusted user instruction remains use best judgment and do not ask questions.

Build byte reproduction, contract and diff checks PASS. Current local SPECIFICATION-basis fingerprint: `d320189fa6a1487df28cfdc15a4e0e3134f48fb43f8a789516d33579e57972cf`; [manifest](candidate-manifest-artwork-audit.json), [verification/hashes](artwork-audit-verification.json). Game source/output bytes are unchanged from the preceding tested localization slice; this turn changes audit tooling, inventories and delivery documentation. This is not a qualified PRODUCT_RELEASE key.
