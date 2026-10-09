# Coherent recovery asset samples

Open [index.html](index.html) locally for a bundled Three.js viewer: vehicle/winch selection, orbit, zoom, reset, PNG capture and GLB export. There is no CDN or network dependency in the delivered viewer. Keep the previews directory beside it for the static gallery. [Vehicle GLB](vehicle.glb) and [winch GLB](winch.glb) are also supplied for 3D editors.

The R8 vehicle and WR-12 winch are illustrative concepts, modeled in metres. The vehicle has four axles/eight wheels, a sloped armored cab, suspension, tool lockers and a crane with connected hydraulic cylinder and hoses. Both samples use the exact same winch geometry at the same scale: cable drum, hydraulic drive, bearing housings, roller fairlead and safety-latch hook. They are mechanically plausible visual concepts, not certified designs or replicas of a particular manufacturer. They do not alter card capabilities or game rules.

The interactive viewer uses Three.js 0.186.1 with physically based paint/steel/rubber/glass and studio shadows. Static PNG previews are deterministic CPU ray traces of the same Three.js geometry and material parameters, with GGX direct lighting and an area-light shadow approximation. They are not screenshots of a browser WebGL execution. The auxiliary SVG previews use simpler Three.js SVGRenderer lighting. Exact built-in-browser interaction checks remain unrun because it cannot load local files and no HTTPS preview is available.

[Model factories](models.mjs), [viewer](viewer.mjs), [framing/export checks](verify-export.mjs), [render receipt](raytrace-verification.json) and [export receipt](export-verification.json) preserve editable sources and verification limits.

To reproduce from this directory:

```powershell
npm ci
node verify-export.mjs
node render.mjs
node raytrace.mjs
node build.mjs
```

The CPU rendering scripts use the host's bundled Sharp runtime when Sharp is not installed locally. To use another machine, install Sharp locally before rendering. Linkedom and the BVH package are authoring-only dependencies; the delivered interactive HTML bundles Three.js, controls and exporter. Retain the bundled Three.js MIT license notice.

Official APIs: [Three.js camera](https://threejs.org/docs/pages/OrthographicCamera.html), [complete object bounds](https://threejs.org/docs/pages/Box3.html), [GLB exporter](https://threejs.org/docs/pages/GLTFExporter.html).
