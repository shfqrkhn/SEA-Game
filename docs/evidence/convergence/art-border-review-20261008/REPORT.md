# Artwork border and clipping review

Inspected all 77 current WebP images at unscaled source pixels. Originals remain unchanged. The magenta outlines on inspection sheets are QA marks outside the images, not artwork defects. This is source-image self-review, not browser or SVG-fallback acceptance.

Found 14 images with focal subject clipping and 19 with retained dividers/strips; groups overlap. Thin frames and intentional scene crops are listed separately. CAP-F’s repaired image looks clean. The actual app uses object-fit:contain, so these source-panel defects cannot be fixed by CSS alone.

| Asset | Finding |
|---|---|
| cards/ACC-A.webp | SUBJECT_CLIPPED: Left-hand winch mechanism intersects the central illustration edge. |
| cards/ACC-C.webp | SUBJECT_CLIPPED: Left edge of the attachment is clipped. |
| cards/CAP-E.webp | RETAINED_DIVIDER_OR_STRIP: Right white divider and adjacent narrow strip. |
| cards/CAP-G.webp | SUBJECT_CLIPPED: Vehicle nose/front assembly clipped on left. THIN_FRAME_REVIEW: Thin bottom white frame. |
| cards/COM-A.webp | RETAINED_DIVIDER_OR_STRIP: Bottom divider with neighboring antenna fragment. |
| cards/COM-B.webp | RETAINED_DIVIDER_OR_STRIP: Bottom grid divider and neighboring panel fragment. |
| cards/COM-C.webp | SUBJECT_CLIPPED: Tall antenna cut at top. RETAINED_DIVIDER_OR_STRIP: Bottom grid divider and adjacent strip. |
| cards/COM-D.webp | RETAINED_DIVIDER_OR_STRIP: Bottom divider and neighboring antenna tips. |
| cards/COM-E.webp | SUBJECT_CLIPPED: Mast extends beyond top boundary. RETAINED_DIVIDER_OR_STRIP: Right white divider/adjacent strip. |
| cards/COM-F.webp | SUBJECT_CLIPPED: Antenna cropped at top. THIN_FRAME_REVIEW: Thin right frame. |
| cards/COM-G.webp | SUBJECT_CLIPPED: Tall antennas cropped at top. |
| cards/FP-A.webp | RETAINED_DIVIDER_OR_STRIP: Right and bottom grid dividers/strip. |
| cards/FP-B.webp | SUBJECT_CLIPPED: Barrel/muzzle extends beyond left boundary. RETAINED_DIVIDER_OR_STRIP: Right/bottom grid seams with extra panel strip. |
| cards/FP-C.webp | SUBJECT_CLIPPED: Barrel cropped on left; right-side housing also intersects edge. RETAINED_DIVIDER_OR_STRIP: Bottom white grid seam/extra strip. |
| cards/FP-D.webp | RETAINED_DIVIDER_OR_STRIP: Left and bottom grid seams. |
| cards/FP-E.webp | RETAINED_DIVIDER_OR_STRIP: Right white divider and extra strip. |
| cards/FP-F.webp | RETAINED_DIVIDER_OR_STRIP: Right white divider and extra strip. |
| cards/FP-G.webp | SUBJECT_CLIPPED: Left equipment box clipped. |
| cards/MOB-A.webp | THIN_FRAME_REVIEW: Thin left frame. |
| cards/MOB-D.webp | THIN_FRAME_REVIEW: Thin right frame. |
| cards/MOB-E.webp | THIN_FRAME_REVIEW: Thin left/bottom frame. |
| cards/MOB-F.webp | THIN_FRAME_REVIEW: Thin left/right/bottom frame. |
| cards/MOB-G.webp | THIN_FRAME_REVIEW: Thin right/bottom frame. |
| cards/SA-A.webp | THIN_FRAME_REVIEW: Thin rectangular white frame. |
| cards/SA-B.webp | THIN_FRAME_REVIEW: Thin top/bottom frame. |
| cards/SA-C.webp | THIN_FRAME_REVIEW: Thin top/bottom frame. |
| cards/SA-D.webp | THIN_FRAME_REVIEW: Thin right/bottom frame. |
| cards/SA-E.webp | THIN_FRAME_REVIEW: Thin left/bottom frame. |
| cards/SA-F.webp | RETAINED_DIVIDER_OR_STRIP: Left/right white dividers; right edge includes tiny neighboring fragment. |
| cards/SA-G.webp | SUBJECT_CLIPPED: Left sensor/tripod assembly intersects boundary. THIN_FRAME_REVIEW: Thin bottom frame. |
| cards/SE-A.webp | RETAINED_DIVIDER_OR_STRIP: Bottom divider and retained panel strip. COMPOSITION_REVIEW: Folders/papers extend to the scene edge; framing review advisable. |
| cards/SE-B.webp | RETAINED_DIVIDER_OR_STRIP: Bottom grid seam and retained strip. |
| cards/SE-C.webp | RETAINED_DIVIDER_OR_STRIP: Bottom grid seam and retained strip. |
| cards/SE-D.webp | THIN_FRAME_REVIEW: Thin bottom frame. COMPOSITION_REVIEW: Workbench/environment crops are contextual, not necessarily missing focal asset. |
| cards/SE-E.webp | RETAINED_DIVIDER_OR_STRIP: Right white divider/neighboring fragment. |
| cards/SE-F.webp | SUBJECT_CLIPPED: Left vehicle and metric icons clipped. |
| cards/SE-G.webp | THIN_FRAME_REVIEW: Thin white scene frame. |
| cards/SE-H.webp | THIN_FRAME_REVIEW: Bottom frame/band. |
| cards/SE-I.webp | THIN_FRAME_REVIEW: Thin illustrative outline frame. |
| cards/SE-J.webp | THIN_FRAME_REVIEW: Thin illustrative outline frame. |
| cards/SE-K.webp | THIN_FRAME_REVIEW: Thin illustrative outline frame. |
| cards/SE-L.webp | RETAINED_DIVIDER_OR_STRIP: Right double seam/narrow retained strip. |
| cards/SE-M.webp | SUBJECT_CLIPPED: Outer component/vehicle illustrations intersect left/right boundaries. THIN_FRAME_REVIEW: Thin bottom frame. |
| cards/SE-N.webp | THIN_FRAME_REVIEW: Thin left/bottom frame. |
| cards/SE-O.webp | THIN_FRAME_REVIEW: Thin bottom frame. COMPOSITION_REVIEW: Stacked-paper composition reaches left edge; distinguish intentional overlap from clipped focal material. |
| cards/SE-P.webp | THIN_FRAME_REVIEW: Thin bottom frame. |
| cards/SE-Q.webp | THIN_FRAME_REVIEW: Thin bottom frame. COMPOSITION_REVIEW: Interior cockpit scene intentionally crops seats/screens/background. |
| cards/SE-R.webp | THIN_FRAME_REVIEW: Thin bottom frame. COMPOSITION_REVIEW: Right tool chest/secondary props intersect frame; review complete-scene requirement. |
| cards/SE-S.webp | THIN_FRAME_REVIEW: Thin left frame. COMPOSITION_REVIEW: Landscape/multipanel composition intentionally extends into boundaries. |
| cards/SE-T.webp | RETAINED_DIVIDER_OR_STRIP: Left neighboring scene strip separated by white divider. |
| cards/SE-U.webp | SUBJECT_CLIPPED: Left tall antenna intersects top boundary. THIN_FRAME_REVIEW: Thin right/bottom frame. |
| vehicles/combat.webp | THIN_FRAME_REVIEW: Thin bottom white frame. |
| vehicles/recce.webp | THIN_FRAME_REVIEW: Thin bottom white frame. |
| vehicles/troop-carrier.webp | THIN_FRAME_REVIEW: Thin bottom white frame. |

## Repair approach

Remove only stray dividers/neighbor panels where the complete subject remains. Clipped antennas, barrels, hulls or attachments need outpainting/reconstruction with subject identity preserved; further cropping would worsen them. Standardize background, intended frame and subject safe margins after repair. For scenes, preserve deliberate composition and repair only unintended edge remnants. Reinspect actual card-size renders and both raster/vector paths.

## Inspection sheets

- [Board 01](board-01.png)
- [Board 02](board-02.png)
- [Board 03](board-03.png)
- [Board 04](board-04.png)
- [Board 05](board-05.png)
- [Board 06](board-06.png)
- [Board 07](board-07.png)
- [Board 08](board-08.png)

[Per-asset findings and hashes](findings.json). User generation attribution is recorded as direct provenance; no unsupported generator/model details are invented.
