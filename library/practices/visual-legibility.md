# Visual legibility

Every component must read as a separate object at a glance: in a still, in real-time 3D, and on a classroom projector. Numbers marked *start* are starting settings to calibrate on your own renders.

## 1. Geometry first

- **Good continuation:** the eye carries lines on. Nothing may touch the end of a barrel, pole, cable or edge, or its extension, in front of it or behind it. Check it in the camera of each image (`asset-checks.md`).
- Parts keep visible gaps and their own silhouettes. Physical checks (overlap, fit) keep them apart in 3D; the picture check keeps them apart in 2D.
- Small fittings of the base (mirrors, lamps, aerials) count as much as add-on parts.

## 2. Light relative to the camera

- Three-point lighting placed relative to the camera, not the world, so each view gets the same roles: key 45° camera-left and 35° up; fill 35° camera-right, 20° up; rim (back light) about 145° and 25° up.
- Key:fill about 2.5–3:1 (*start*). Projectors lift shadows, so do not go darker than 4:1.
- Rim light draws outlines against the background and against parts behind. In real-time 3D, parent a weak, unshadowed directional light to the camera (about half the key, slightly cool) so the outline holds as the model turns. Cost: one extra light per fragment, no extra shadow pass.
- Keep the rig fixed across all layers of one angle; scale card rigs to the subject's size. Fewer than 1% clipped pixels on non-emissive parts.
- Colour management: light and shade in linear space; colour textures and final output in sRGB; normal, roughness, metalness and AO maps as non-colour data; check that the exported model looks the same in the target viewer as in the renderer.
- Tone mapping: AgX or ACES; compare exposures on identical subjects; check hue shifts on the palette.

## 3. Value and material

- Neighbouring parts differ in value (about 20–30% linear luminance, *start*; at least 1.3:1 or 12 L* between touching parts in the final image) or in material, not in hue alone.
- Roughness separates materials: paint 0.60–0.70, bare metal 0.40–0.50, glass and optics 0.08–0.15 (*start*).
- Ambient occlusion marks joints without black holes: remap to `0.4 + 0.6 × AO` (*start*). Dust and grime no more than about a third of a cavity's colour.
- Edge wear only on real convex edges, 2–6 mm wide.

## 4. Camera

- Three-quarter views: yaw 25–45° (or 205–225° for the rear), pitch 6–18°. Moderate telephoto (55–85 mm full-frame equivalent) to limit distortion. No depth of field in teaching images.
- Frame on everything the image may show (the base plus every possible attachment), with a 6% margin and the aspect ratio considered.
- Choose angles by sweeping candidates and scoring the *worst-visible* component, not only the total.

## 5. Signalling (multimedia learning)

- One highlighted subject per view: the figure; everything else is ground.
- Labels stand next to what they describe (spatial contiguity); nothing decorative competes (coherence); highlight with shape, position and value, never colour alone.
- Group with proximity: about 8 px within a group, 16 px between groups; explicit signs (+/−) and words for gains and penalties.

## 6. Projector and classroom

- Projectors wash out light colours and lift blacks. Aim for 7:1 text contrast (4.5:1 is the floor), essential non-text cues at least 3:1 and 2 px wide.
- No thin, low-contrast lines carry meaning. Pair every colour code with an icon, letter or shape.
- Offer a light "projector" theme beside the dark one; test both.

## 7. Measured, not judged by eye alone

- In force (example project): picture sightline check, overlap, fit, triangle budgets, WCAG contrast in end-to-end tests.
- Next: render a per-component ID mask for each still; fail a component whose visible area falls below a share of its own (start 35% in at least one angle), or whose boundary contrast with neighbours is under 1.5:1 along 70% of its edge; judge the encoded images at displayed sizes, in greyscale and under colour-vision simulation. Simulate projector washout (start: 15% white veil) on the interface.

## Sources

Three-point lighting (Blender manual), PBR reflection (pbr-book.org), tone mapping (Blender colour management), Gestalt proximity (NN/g), Mayer's signalling and coherence principles (Cambridge Handbook of Multimedia Learning), WCAG 2.2 use of colour and contrast (W3C). Full list with links: SEA Game `docs/verification/legibility.md` (not copied into this library; search the titles above).
