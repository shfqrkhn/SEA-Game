# Artwork delivery contract

The two single-file HTML applications use images in this order:

1. `https://shfqrkhn.github.io/SEA-Game/assets/v1/cards/<CARD-ID>.webp`
2. `./assets/v1/cards/<CARD-ID>.webp` alongside the HTML in an extracted repository ZIP
3. Inline SVG rendered by the HTML, available without any files or network

The same card ID must identify the same content in both raster directories. The `assets/v1/cards/*.svg` files currently in this repository are artwork source/concepts, **not** the final approved photorealistic card illustrations. Rasterizing them does not turn them into the previously shown AI-generated art.

**Artwork status:** All 70 card WebP files are present and decode successfully in the current candidate. The HTML works without them using built-in vectors. Technical validity does not establish final visual, classroom or distribution-rights approval. CAP-F's extraneous neighboring-image strip is repaired in the candidate, with matching vector fallback; see [current provenance/acceptance](../../../docs/ARTWORK_PROVENANCE.md).

**Distribution:** Give each instructor/student the standalone HTML only for guaranteed offline operation. To also provide local high-detail images, distribute the extracted `SEA-Game` repository directory intact, preserving its `assets/v1/cards/` subdirectory. The browser does not need any server.

**Security and reliability:** No external scripts, stylesheets, fonts, synchronization, or gameplay API are loaded. Card values and labels are local HTML data. Online remote images may disclose the IP address of a requesting device to the host, but not session codes or student data.
