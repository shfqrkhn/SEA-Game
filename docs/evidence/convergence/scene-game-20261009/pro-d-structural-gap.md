# PRO-D structural visual review — candidate f473896

Status: **visual acceptance OPEN; PRODUCT_RELEASE closure 0/3**.

This is an author review, not an independent acceptance review: the reviewer implemented the protection geometry. Actual pixels were inspected with `view_image` for `pro-d-f473896-rear.png`, `pro-d-149f896-rear.png`, and `docs/game-design/concepts/protection-family-v1.png`. No source, browser, or release state was changed by this review. The lead is separately investigating the cutaway shader-state regression; these assembled stills cannot prove its correction.

## Comparison limits

Both runtime captures show the auction PRO-D card, two seat backs, and an elevated boarding-side view. The new open door expands the model envelope, and the body appears smaller in the newer capture. Equivalent viewport size does not establish identical body scale, camera distance, or framing. The concept's PRO-D panel uses a lower view, seats facing the aperture, an open door on the opposite side, and a supporting vehicle/chassis context. Therefore this is a structural comparison, not a registered pixel match, proof of dimensions, or reference-certified construction.

## Visible change and remaining gap

| Aspect | Actual newer render compared with prior render | Remaining difference from concept |
| --- | --- | --- |
| Major shape | Upper sides slope inward; rear opening/roof corners are chamfered. The previous rectangular box silhouette is reduced. | Roof is still a large plain plate. Roof perimeter, attachment rails and built-up corner construction remain much less readable than the concept. |
| Boarding interface | Open door leaf, perimeter seal, side grab handles and threshold are visible. Door adds a distinct functional silhouette. | Leaf is nearly edge-on in this camera, so its interior panel, hinges, latch and restraint cannot be visually qualified. Concept shows a broad door face and conspicuous connected hardware. |
| Interior | Lighter lining and floor make the two seats and their rail/foot mounts easier to distinguish. | Seats face forward, so this view exposes backs rather than the concept's cushions, restraints and headrests. The thin supports still read as long furniture legs, rather than substantial energy-absorbing mounted seats. |
| Windows/panels | Side glazing has a visible perimeter frame; broad lower access-panel boundaries appear on the left wall. | Glass remains mostly grey/opaque in this still; reflection, thickness and interior visibility are weak. Layered mounting flanges and panel interfaces remain sparse. |
| Material/light | Lighter interior and softer-looking shadow edges improve separation from the prior dark cavity/hard rectangular shadow. | Olive surfaces remain uniform, with little visible coated-metal response or broad-edge highlight detail. Ground lighting still reads as a studio diagram. Stills do not establish shadow updates during rotation. |

## Prioritized findings

1. **P1 — aperture seal does not visually follow the formed frame tightly.** The black upper seal appears bowed/uneven across the header and rounds away from the chamfered corners. Align the path and corner radii with the actual opening rather than smoothing a few polygon vertices into a different contour. Review rear and front-quarter close-ups for gaps and intersections.
2. **P1 — boarding-door connections are unqualified in the current view.** The edge-on leaf hides the hinge/latch interface. Capture a second view exposing its broad face and hinge axis, then check the stationary/moving leaves and restraint endpoints. The lower projected door tip is below the projected threshold, but the camera and forward swing explain possible perspective displacement; this still alone does **not** prove a below-floor collision.
3. **P1 — body construction is still too shallow compared with the concept.** Add coherent formed roof shoulders, a dimensional aperture surround, sill/jamb interfaces and connected mounting structure. Broad structural changes should precede cosmetic bolts or wear. Preserve the open aperture and current canonical two-seat capacity.
4. **P1 — qualify seat construction and orientation explicitly.** Retain forward orientation unless the intended real-life installation supports reversal. Use a facing/front interior view to inspect cushion form, restraint routing, floor fastening and the connection between suspension platform and seat shell. The current boarding image cannot establish those details.
5. **P2 — glass and coating need better physical readability.** Compare under a shared neutral environment with restrained reflections and broad soft illumination. Improve glazing/frame depth and material response before adding dirt. Verify camera rotation changes cast shadows consistently or disable them; this comparison does not close that requirement.

The newer render is a material structural improvement over the previous plain box, but it remains visibly below the concept's construction and material fidelity. Neither conceptual imagery nor geometry/inspection verifier passes constitute visual acceptance. A matched body-scale camera comparison, additional door/interior views, corrected cutaway replay and actual user-visible render assessment are still required.
