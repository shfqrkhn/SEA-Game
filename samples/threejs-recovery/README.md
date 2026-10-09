# Embedded game geometry toolchain

`models.mjs` supplies shared metre-scale primitive, wheel, winch and recovery geometry used by the embedded game. Current game refinements live in `source/three/`; this directory holds the pinned Three.js/esbuild build and verification dependencies.

Run `npm ci --prefix samples/threejs-recovery`, `node samples/threejs-recovery/build-game.mjs`, and `node tools/build.mjs`. Verify with `verify-game.mjs` and `verify-inspection.mjs`. Optional geometry sheets use `review-game.mjs` with the bundled authoring runtime. The older standalone sample viewer, exports and gallery are available in Git history and the preserved live sample links; duplicated local build products were removed.
