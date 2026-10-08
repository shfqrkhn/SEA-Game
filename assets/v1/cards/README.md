# Artwork delivery contract

The two single-file HTML applications use images in this order:

1. `https://shfqrkhn.github.io/SEA-Game/assets/v1/cards/<CARD-ID>.webp`
2. `./assets/v1/cards/<CARD-ID>.webp` alongside the HTML in an extracted repository ZIP
3. Inline SVG rendered by the HTML, available without any files or network

The same card ID must identify the same content in both raster directories. The `assets/v1/cards/*.svg` files currently in this repository are artwork source/concepts, **not** the final approved photorealistic card illustrations. Rasterizing them does not turn them into the previously shown AI-generated art.

**Artwork status:** Final WebP images (70 cards) are pending. The HTML works without them and displays its built-in SVG. Do not claim that the final non-SVG/high-detail pack is deployed.

**Distribution:** Give each instructor/student the standalone HTML only for guaranteed offline operation. To also provide local high-detail images, distribute the extracted `SEA-Game` repository directory intact, preserving its `assets/v1/cards/` subdirectory. The browser does not need any server.

**Security and reliability:** No external scripts, stylesheets, fonts, synchronization, or gameplay API are loaded. Card values and labels are local HTML data. Online remote images may disclose the IP address of a requesting device to the host, but not session codes or student data.
