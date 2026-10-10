"""Armoured wheeled hulls: COMBAT (8x8), RECCE (4x4) and MINE clearing (6x6 with a V-hull).

A narrow lower hull between the wheels, a wide chamfered upper hull over them and a sloped glacis.
Axes: +X forward, -Y is the vehicle's left side, Z up, ground at Z = 0.
"""
import math

from ..geo import Builder, tyre_and_wheel
from ..mounts import Mounts

TRACK = 1.12
SPECS = {
    'COMBAT': dict(L=7.4, axles=(2.55, 1.15, -0.85, -2.25), R=0.56, top=2.25, nose=1.2, belly=0.75),
    'RECCE': dict(L=5.4, axles=(1.75, -1.55), R=0.56, top=2.25, nose=0.9, belly=0.72),
    'MINE': dict(L=6.6, axles=(2.3, 0.45, -1.85), R=0.62, top=2.95, nose=1.0, belly=1.15),
}


def build(mats, mission):
    s = SPECS[mission]
    L, R, top, nose, belly = s['L'], s['R'], s['top'], s['nose'], s['belly']
    back, front = -L / 2, L / 2
    deck = belly + 0.62
    b = Builder('base', mats)
    # Lower hull, upper hull and the nose plate.
    b.wedge('lower-hull', [(back + 0.1, belly), (front - nose, belly), (front - 0.1, deck), (back, deck)], 1.9, (0, 0, 0), 'paint_dark', bevel=0.05)
    upper = [(back, deck), (front - 0.05, deck), (front - nose * 0.45, top - 0.25), (front - nose * 1.15, top), (back + 0.12, top), (back - 0.04, top - 0.3)]
    b.wedge('upper-hull', upper, 2.72, (0, 0, 0), 'paint', bevel=0.12, segments=4)
    b.wedge('nose', [(front - nose, belly), (front + 0.05, deck - 0.05), (front - 0.1, deck), (front - nose - 0.1, belly + 0.1)], 1.8, (0, 0, 0), 'paint', bevel=0.04)
    gx0, gz0, gx1, gz1 = front - 0.05, deck, front - nose * 0.45, top - 0.25
    rake = math.atan2(gz1 - gz0, gx0 - gx1)

    def glacis(t, y, lift=0.0):
        """A point on the sloped front plate, lifted along its outward normal past the bevel."""
        nx, nz = math.sin(rake), math.cos(rake)
        return (gx0 + (gx1 - gx0) * t + nx * (0.13 + lift), y, gz0 + (gz1 - gz0) * t + nz * (0.13 + lift))

    for t in (0.35, 0.7):
        b.box('glacis-seam', (0.012, 2.3, 0.012), glacis(t, 0, -0.01), 'black', rot=(0, -rake, 0), bevel=0)
    for y in (-1.0, 1.0):
        at = glacis(0.2, y, 0.04)
        b.box('lamp-cluster', (0.26, 0.42, 0.12), at, 'paint_dark', rot=(0, math.pi / 2 - rake, 0), bevel=0.03)
        b.cyl('headlamp', 0.07, 0.03, (at[0] + 0.06, y - 0.09, at[2] + 0.02), 'lamp', rot=(0, math.pi / 2, 0), verts=24)
        b.cyl('indicator', 0.04, 0.03, (at[0] + 0.06, y + 0.1, at[2] + 0.02), 'amber', rot=(0, math.pi / 2, 0), verts=16)
        for dy in (-0.2, 0.0, 0.2):
            b.box('lamp-guard', (0.02, 0.02, 0.3), (at[0] + 0.14, y + dy, at[2]), 'steel', bevel=0.004)
        b.box('tow-hook', (0.12, 0.08, 0.14), (front + 0.04, y * 0.7, belly + 0.18), 'steel', bevel=0.02)
    # Trim vane folded on the glacis and the driver's vision blocks.
    b.box('trim-vane', (0.06, 2.2, 0.55), glacis(0.55, 0, 0.03), 'paint_light', rot=(0, -rake, 0), bevel=0.03)
    for y in (0.45, 0.65):
        b.box('vision-block', (0.12, 0.14, 0.04), glacis(0.85, y, 0.07), 'glass', rot=(0, math.pi / 2 - rake, 0), bevel=0.01)
    if mission == 'MINE':
        for side in (1, -1):
            b.box('v-plate', (L * 0.78, 0.95, 0.07), (0, side * 0.42, belly - 0.2), 'paint_dark', rot=(side * 0.55, 0, 0), bevel=0.02)
        for y in (0.55, -0.55):
            b.box('windscreen', (0.04, 0.95, 0.6), (front - nose * 0.85, y, top - 0.45), 'glass', rot=(0, -0.55, 0), bevel=0.02)
        for side in (1, -1):
            for x in (0.9, 0.0):
                b.box('side-window', (0.55, 0.04, 0.45), (x, side * 1.37, top - 0.6), 'glass', bevel=0.03)
    else:
        for y in (0.45, -0.45):
            b.box('periscope', (0.04, 0.45, 0.22), (front - nose * 0.78, y, top - 0.3), 'glass', rot=(0, 0.9, 0), bevel=0.02)
        hatch_y = -0.55 if mission == 'COMBAT' else 0.4
        for x in (front - nose * 1.6, -0.6 if mission == 'RECCE' else -1.0):
            b.cyl('hatch', 0.33, 0.08, (x, hatch_y, top + 0.04), 'paint_dark', verts=32, bevel=0.015)
            b.box('hatch-hinge', (0.12, 0.3, 0.05), (x - 0.3, hatch_y, top + 0.05), 'gunmetal', bevel=0.01)
    # Sponson edges, stowage bins, pioneer tools, bolt rows, smoke dischargers and lights.
    bolts = int(L * 2)
    for side in (1, -1):
        b.box('sponson-lip', (L - 0.6, 0.12, 0.06), (-0.1, side * 1.38, deck + 0.02), 'paint_dark', bevel=0.02)
        b.box('stowage-bin', (1.4, 0.26, 0.4), (back + 1.2, side * 1.42, top - 0.42), 'paint_light', bevel=0.05, segments=2)
        for k in range(bolts):
            x = back + 0.4 + k * (front - nose * 1.3 - back - 0.4) / bolts
            b.cyl('bolt', 0.02, 0.02, (x, side * 1.262, top - 0.08), 'gunmetal', rot=(math.pi / 2, 0, 0), verts=6, bevel=0)
        b.tube('pick-handle', [(back + 2.0, side * 1.38, top - 0.3), (back + 3.2, side * 1.38, top - 0.3)], 0.022, 'canvas', smooth=False)
        b.tube('tow-cable', [(back + 0.6, side * 1.4, deck + 0.35), (-0.3, side * 1.41, deck + 0.42), (front - nose - 0.2, side * 1.4, deck + 0.35)], 0.022, 'cable')
        for k in range(4):
            b.cyl('smoke', 0.05, 0.24, (front - nose * 1.25, side * (0.95 + (k >> 1) * 0.1), top - 0.05 + (k % 2) * 0.08), 'gunmetal', rot=(side * -0.5, 0.6, 0), verts=12)
        b.box('tail', (0.04, 0.12, 0.08), (back - 0.03, side * 0.95, top - 0.4), 'red', bevel=0.01)
        b.tube('grab-rail', [(back + 0.3, side * 1.1, top + 0.02), (back + 0.3, side * 1.1, top + 0.1),
                             (front - nose * 1.3, side * 1.1, top + 0.1), (front - nose * 1.3, side * 1.1, top + 0.02)], 0.02, 'steel', smooth=False)
    for y in (-0.95, 0.95):
        b.cyl('driving-lamp', 0.1, 0.05, (front - 0.04, y, belly + 0.55), 'lamp', rot=(0, math.pi / 2, 0), verts=24)
    b.box('rear-ramp', (0.04, 1.6, top - belly - 0.4), (back - 0.03, 0, (top + belly) / 2), 'paint_dark', bevel=0.03)
    for k in range(6):
        b.box('louvre', (0.06, 0.02, 0.32), (front - nose - 0.4 - k * 0.12, 1.37, top - 0.6), 'black', bevel=0.005)
    # Running gear.
    for x in s['axles']:
        b.cyl('axle', 0.09, TRACK * 2 - 0.46, (x, 0, R), 'gunmetal', rot=(math.pi / 2, 0, 0), verts=20)
        b.sphere('diff', 0.2, (x, 0, R), 'gunmetal')
        for side, y in ((1, -TRACK), (-1, TRACK)):
            tyre_and_wheel(b, f'wheel{x:+.1f}{y:+.0f}', (x, y, R), R, 0.44, 0.33, side)
    roof_front = front - nose * 1.15
    return Mounts(
        front=front + 0.05, back=back, axles=s['axles'], wheel_r=R, track=TRACK, tyre_w=0.44,
        deck=(back + 1.25, top), deck_size=(min(2.1, L * 0.3), 2.2),
        roof=(-0.3 if mission != 'RECCE' else -0.25, 0.0, top), roof2=(roof_front - 0.95, -0.45, top),
        side=(back + 0.4, front - nose, deck + 0.1, top - 0.25, 1.36), front_face=(front - nose * 0.3, deck, top - 0.3, 1.3),
        roof_span=(back + 0.2, roof_front, top, 1.3), belly=(back + 0.4, front - nose, belly, 0.95),
        engine=(roof_front - 0.35, 0.75, top), tanks=(back + 0.2, back + 1.3, belly + 0.4, 1.0),
        antenna_left=(0.75, -1.15, top), antenna_right=(0.75, 1.15, top), radio_mast=(back + 0.25, 0.85, top - 0.3),
        optics=(roof_front - 0.2, -0.8, top), sensor_mast=(roof_front - 0.65, 0.75, top),
        corners=((roof_front, -1.25, top), (roof_front, 1.25, top), (back + 2.5, -1.25, top), (back + 2.5, 1.25, top)),
        bumper=(front + 0.05, belly + 0.2), hitch=(back - 0.05, belly + 0.15), rack=(back + 2.75, 0.0, top),
        extra={'armoured': True, 'module_h': 1.15},
    )
