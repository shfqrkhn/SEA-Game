# Three.js asset concepts

Status: proposed design, 2026-10-08. This brainstorm does not replace existing assets or introduce a gameplay runtime. It addresses the visual consistency and framing defects documented in the [border review](evidence/convergence/art-border-review-20261008/REPORT.md).

## Recommended direction

Build a procedural Three.js asset workshop with reusable chassis and equipment modules. Render consistent WebP posters for the existing standalone game. Keep editable parameters and optionally export GLB models for later reuse. Live rotation/exploded views can be a subsequent enhancement after a measured usability benefit; static classroom use remains the first delivery target. Illustrations must follow canonical card descriptions and must not invent capabilities or alter scoring.

| Asset family | Proposed model | Useful variations |
|---|---|---|
| Mission vehicles | Shared modular hull, wheels/tracks and equipment sockets | Combat, reconnaissance, troop carrier, command post, recovery and mine-clearing assemblies; reuse parts where the actual descriptions permit |
| Capacity | Cutaway seating or cargo bay | Seats, racks and storage pods; visible arrangements illustrate the description without embedding rule numbers |
| Communications | Radio rack, mast, antenna and dish modules | Short/tall masts, deployed/folded states and grouped radio equipment |
| Firepower | Stylized turret and barrel assembly | Different mount shapes and barrel lengths; consistent complete silhouettes |
| Mobility/protection | Wheel, suspension, track and armor modules | Exploded assemblies, fitted plates and underbody equipment |
| Accessories/recovery | Winch, towing frame, crane, tools and clearance attachments | Attached and standalone views with cables fully included in framing |
| Situational awareness | Sensor head, camera, radar and tripod | Pan/tilt poses, vehicle-mounted and standalone arrangements |
| Systems engineering | Small workbench, component assembly and process tokens | Assembly, integration and verification scenes; textual explanations remain in accessible HTML |

Use a restrained olive/gray palette, soft studio lighting, neutral background and a common isometric camera. Model recognizable silhouettes first; add details only when legible at actual card size. Avoid baked-in labels and grid dividers. Keep asset IDs mapped through a manifest rather than hand-assigned filenames.

## Framing and production contract

1. Pin the chosen Three.js version and retain model parameters, material settings, camera pose and render configuration per asset.
2. Update world transforms, then compute the complete subject bounds with `Box3.setFromObject(model, true)`. Include all attached antennas, barrels, cables and equipment. The official [Box3 documentation](https://threejs.org/docs/pages/Box3.html) explains the world-transform requirement and child inclusion.
3. Transform bounding-box corners into camera space. Fit both width and height to the target aspect ratio, with a proposed 10% inset on every edge. Use an [orthographic camera](https://threejs.org/docs/pages/OrthographicCamera.html) for consistent technical silhouettes. Set near/far planes to include the full subject. Fit animated assets to the union of their required poses, not just their first frame.
4. Render each image separately at 1200x360; create no multi-panel source sheet requiring later extraction. Keep background/ground separate from focal-subject bounds. Review tall objects for legibility: use an inset detail when needed instead of enlarging until they clip.
5. Verify projected subject bounds remain within the safe area and inspect final pixels for edge remnants, missing pieces, unintended outlines and contact-shadow truncation. Review every actual card-size render and its mobile presentation. Bounds checks alone do not prove a good composition.
6. Retain source parameters and optional GLB using [GLTFExporter](https://threejs.org/docs/pages/GLTFExporter.html); publish optimized posters through the existing asset path and qualify the vector fallback separately. GLB export does not automatically generate a suitable SVG fallback.

## Small first trial

Prototype a tall communications mast, a wide turret/barrel assembly and a recovery chassis with winch. These challenge the three failure patterns already observed: height, width and multiple protruding parts. Compare their readability with the existing images at real card sizes before expanding to all families. For an implementation, characterize current asset routing first, then test bounds under changed dimensions/poses, ID coverage and output determinism under the pinned render environment. Record visual evidence separately from automated checks.

Immediate existing-pack repairs are a separate task: remove retained panel strips where the subject is intact; reconstruct/outpaint missing focal pieces rather than cropping further. Preserve intentional scene crops and retain the original files as evidence. The current review changed no artwork bytes.
