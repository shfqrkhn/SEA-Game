"""The fictional 8x8 armoured vehicle family (owner concepts, 2026-10-10): one hull, six mission variants.

A narrow lower hull between the wheels, wide sponsons over them, an inward-sloped upper hull, a long upper
glacis and a raked lower nose. Bolted appliqué plates cover the sides and glacis. Variants change only what
a mission needs in its base form: the troop carrier's lowered ramp and lit compartment, armoured windscreens
on the command and mine-clearing vehicles, and the recovery crane.

Axes: +X forward, -Y is the vehicle's left side, Z up, ground at Z = 0.
"""
import math

from mathutils import Vector

from ..geo import Batch, Builder, loft, mirror_ring, plates, tyre_and_wheel
from ..mounts import Mounts

AXLES = (2.3, 1.0, -0.85, -2.15)
R, TRACK, TYRE_W = 0.6, 1.08, 0.46
BACK, FRONT, TOP = -3.5, 3.5, 2.3
SPONSON, SPONSON_Z0, SPONSON_Z1 = 1.36, 1.36, 1.86
ROOF_FRONT, GLACIS_X, GLACIS_Z = 2.05, 2.95, 1.74
PI = math.pi


def _full(top=TOP):
    return [(0, 0.52), (0.6, 0.52), (0.8, 0.72), (0.8, 1.3), (SPONSON, SPONSON_Z0), (SPONSON, SPONSON_Z1), (1.1, top), (0, top)]


GLACIS = [(0, 0.6), (0.58, 0.6), (0.8, 0.78), (0.8, 1.3), (1.3, 1.36), (1.3, 1.6), (1.05, GLACIS_Z - 0.02), (0, GLACIS_Z)]
NOSE = [(0, 1.0), (0.55, 1.0), (0.78, 1.06), (0.78, 1.3), (1.05, 1.34), (1.05, 1.42), (0.95, 1.46), (0, 1.48)]


def _hull(b, mission):
    front = [(ROOF_FRONT, mirror_ring(_full())), (GLACIS_X, mirror_ring(GLACIS)), (FRONT, mirror_ring(NOSE))]
    if mission == 'TROOP':
        # Solid forward hull; the rear compartment is an open shell with walls, a floor and a lowered ramp.
        bulkhead = -1.3
        loft(b, 'hull', [(bulkhead, mirror_ring(_full())), *front], 'paint', bevel=0.04, smooth=False)
        shell = loft(b, 'compartment', [(BACK, mirror_ring(_full())), (bulkhead + 0.02, mirror_ring(_full()))], 'paint',
                     bevel=0, cap=False, smooth=False)
        solid = shell.modifiers.new('walls', 'SOLIDIFY')
        solid.thickness = 0.06
        solid.offset = -1
        solid.use_even_offset = True
        _compartment(b, bulkhead)
    else:
        loft(b, 'hull', [(BACK, mirror_ring(_full())), *front], 'paint', bevel=0.04, smooth=False)
        _rear_door(b)


def _compartment(b, bulkhead):
    """Lit troop compartment seen through the lowered ramp: floor, liner, folding seats, lamps, kit."""
    length = bulkhead - BACK
    mid = (bulkhead + BACK) / 2
    b.box('floor', (length, 1.5, 0.08), (mid, 0, 0.64), 'interior_dark', bevel=0.01)
    b.box('bulkhead-liner', (0.04, 1.6, 1.5), (bulkhead - 0.02, 0, 1.4), 'interior', bevel=0.01)
    b.box('ceiling', (length, 2.0, 0.04), (mid, 0, TOP - 0.08), 'interior', bevel=0.01)
    for side in (-1, 1):
        b.box('wall-liner', (length, 0.04, 0.95), (mid, side * 1.26, 1.62), 'interior', bevel=0.01)
        seats = Batch(b, 'seats', 'canvas')
        frames = Batch(b, 'seat-frames', 'gunmetal')
        for k in range(4):
            x = bulkhead - 0.35 - k * 0.5
            seats.box((0.42, 0.42, 0.08), (x, side * 0.95, 1.25))
            seats.box((0.42, 0.08, 0.55), (x, side * 1.17, 1.6))
            seats.box((0.38, 0.06, 0.16), (x, side * 1.19, 2.0))
            frames.box((0.03, 0.03, 0.55), (x, side * 0.8, 0.95))
        seats.done(bevel=0.02, smooth=True)
        frames.done()
        b.box('ceiling-lamp', (length * 0.7, 0.08, 0.03), (mid, side * 0.55, TOP - 0.11), 'lamp_soft', bevel=0.005)
        b.box('grab-rail', (length * 0.8, 0.03, 0.03), (mid, side * 0.7, TOP - 0.2), 'steel', bevel=0.005)
        b.box('kit-bag', (0.5, 0.25, 0.3), (mid + 0.3, side * 1.1, TOP - 0.35), 'canvas', bevel=0.06)
    # Door frame: pillars and a lintel around the opening; the ramp is lowered to the ground.
    for side in (-1, 1):
        b.box('door-pillar', (0.08, 0.5, 1.5), (BACK + 0.04, side * 1.0, 1.35), 'paint', bevel=0.02)
    b.box('lintel', (0.08, 1.6, 0.26), (BACK + 0.04, 0, TOP - 0.15), 'paint', bevel=0.02)
    rake = math.radians(24)
    ramp_len = 1.45
    hinge = Vector((BACK, 0, 0.62))
    centre = hinge + Vector((-math.cos(rake) * ramp_len / 2, 0, -math.sin(rake) * ramp_len / 2))
    b.box('ramp', (ramp_len, 1.5, 0.08), centre, 'paint', rot=(0, -rake, 0), bevel=0.02)
    treads = Batch(b, 'ramp-treads', 'gunmetal')
    for k in range(7):
        d = 0.15 + k * 0.19
        p = hinge + Vector((-math.cos(rake) * d, 0, -math.sin(rake) * d + 0.05))
        treads.box((0.04, 1.36, 0.03), p, (0, -rake, 0))
    treads.done()
    for side in (-1, 1):
        b.box('ramp-hinge', (0.12, 0.2, 0.12), (BACK, side * 0.55, 0.62), 'gunmetal', bevel=0.02)
        b.tube('ramp-cable', [(BACK + 0.02, side * 0.72, 1.9), (BACK - 0.55, side * 0.72, 0.6)], 0.012, 'cable', smooth=False)


def _rear_door(b):
    b.box('rear-ramp', (0.05, 1.55, 1.35), (BACK - 0.02, 0, 1.3), 'paint', bevel=0.02)
    b.box('rear-door', (0.04, 0.55, 1.0), (BACK - 0.05, 0.4, 1.35), 'paint', bevel=0.015)
    b.box('door-vision', (0.03, 0.14, 0.1), (BACK - 0.08, 0.4, 1.7), 'glass', bevel=0.01)
    b.box('door-handle', (0.05, 0.16, 0.04), (BACK - 0.09, 0.2, 1.35), 'steel', bevel=0.01)
    for z in (0.75, 1.85):
        for y in (-0.6, 0.6):
            b.box('ramp-hinge', (0.1, 0.18, 0.1), (BACK - 0.04, y, z if z < 1 else z), 'gunmetal', bevel=0.02)


def _side(b, side, mission):
    """Plates, stowage, mudflaps, tools, steps and handles on one side (side -1 = left)."""
    s = side
    sx = (BACK + 0.2, ROOF_FRONT - 0.05)
    if s < 0:
        origin, u = (sx[0], -SPONSON, SPONSON_Z0 + 0.04), (1, 0, 0)
    else:
        origin, u = (sx[1], SPONSON, SPONSON_Z0 + 0.04), (-1, 0, 0)
    length = sx[1] - sx[0]
    skip = {(1, 0)} if s < 0 else {(4, 0)}
    plates(b, f'side{s}', origin, u, (0, 0, 1), (length, 0.44), 6, 1, gap=0.035, skip=skip)
    # Upper hull plates on the inward slope.
    dy, dz = (1.1 - SPONSON), (TOP - SPONSON_Z1)
    edge = Vector((0, s * SPONSON, SPONSON_Z1))
    up = Vector((0, s * dy, dz))
    f = 0.08 / up.length
    origin2 = edge + up * f
    origin2.x = sx[0] if s < 0 else sx[1]
    plates(b, f'upper{s}', origin2, u, up, (length, up.length * 0.8), 7, 1, gap=0.03, thick=0.03)
    # Stowage bin in the skipped plate cell, a jerrycan pair and a pioneer tool set.
    cell = length / 6
    bin_x = sx[0] + cell * 1.5 if s < 0 else sx[1] - cell * 4.5
    b.box('stowage-bin', (cell - 0.08, 0.3, 0.42), (bin_x, s * (SPONSON + 0.13), SPONSON_Z0 + 0.25), 'paint_light', bevel=0.04)
    latch = Batch(b, 'bin-latches', 'gunmetal')
    for dx in (-0.22, 0.22):
        latch.box((0.06, 0.03, 0.08), (bin_x + dx, s * (SPONSON + 0.29), SPONSON_Z0 + 0.38))
    latch.done()
    jx = BACK + 0.55
    for k in range(2):
        b.box('jerrycan', (0.16, 0.34, 0.46), (jx + k * 0.2, s * (SPONSON + 0.2), SPONSON_Z0 + 0.27), 'paint_dark', bevel=0.03)
    b.box('can-rack', (0.46, 0.04, 0.5), (jx + 0.1, s * (SPONSON + 0.03), SPONSON_Z0 + 0.27), 'gunmetal', bevel=0.01)
    if mission != 'TROOP' or s > 0:
        tools = Batch(b, 'tools', 'canvas')
        tools.cyl(0.02, 1.2, (-0.4, s * (SPONSON + 0.07), SPONSON_Z1 + 0.06), (0, PI / 2, 0), verts=8)
        tools.cyl(0.02, 0.9, (-0.3, s * (SPONSON + 0.07), SPONSON_Z1 - 0.04), (0, PI / 2, 0), verts=8)
        tools.done()
        b.box('shovel-blade', (0.3, 0.03, 0.22), (0.35, s * (SPONSON + 0.07), SPONSON_Z1 - 0.04), 'gunmetal', bevel=0.01)
    # Sponson underside rubber edge and a mudflap behind each axle pair.
    b.box('arch-edge', (FRONT - BACK - 1.1, 0.12, 0.03), (-0.2, s * (SPONSON - 0.04), SPONSON_Z0 - 0.02), 'rubber', bevel=0.008)
    for x in (AXLES[1] - 0.68, AXLES[3] - 0.68):
        b.box('mudflap', (0.02, 0.44, 0.5), (x, s * TRACK, SPONSON_Z0 - 0.27), 'rubber', bevel=0.005)
    # Boarding steps and grab handles near the front.
    steps = Batch(b, 'steps', 'steel')
    steps.box((0.3, 0.16, 0.025), (1.65, s * (SPONSON + 0.05), 1.0))
    steps.done()
    b.tube('handle', [(1.4, s * (SPONSON + 0.01), 1.9), (1.4, s * (SPONSON + 0.07), 1.95),
                      (1.85, s * (SPONSON + 0.07), 1.95), (1.85, s * (SPONSON + 0.01), 1.9)], 0.016, 'steel', smooth=False)
    # Exhaust on the right, behind the engine.
    if s > 0:
        b.box('exhaust-shield', (0.5, 0.12, 0.3), (0.9, SPONSON + 0.07, SPONSON_Z1 - 0.2), 'gunmetal', bevel=0.02)
        slots = Batch(b, 'exhaust-slots', 'black')
        for k in range(5):
            slots.box((0.05, 0.01, 0.22), (0.72 + k * 0.09, SPONSON + 0.135, SPONSON_Z1 - 0.2))
        slots.done()


def _front(b, mission):
    # Glacis plates where the face is planar; windscreen variants keep the upper glacis glazed.
    bottom = Vector((GLACIS_X - 0.02, -0.92, GLACIS_Z))
    up = Vector((ROOF_FRONT - GLACIS_X, 0, TOP - GLACIS_Z))
    glazed = mission in ('COMMAND', 'MINE')
    plates(b, 'glacis', bottom + up.normalized() * 0.06, (0, 1, 0), up, (1.84, up.length * (0.35 if glazed else 0.82)),
           3 if not glazed else 4, 2 if not glazed else 1, gap=0.03, thick=0.035)
    rake = math.atan2(up.z, -up.x)
    if glazed:
        for y in (-0.47, 0.47):
            c = bottom + up * 0.66 + Vector((0, y + 0.92, 0))
            n = Vector((up.z, 0, -up.x)).normalized() * 0.03
            b.box('windscreen-frame', (up.length * 0.5, 0.86, 0.06), c + n, 'paint_dark', rot=(0, rake, 0), bevel=0.02)
            b.box('windscreen', (up.length * 0.42, 0.76, 0.04), c + n * 2.2, 'glass', rot=(0, rake, 0), bevel=0.01)
        b.box('wiper-bar', (0.02, 1.7, 0.02), bottom + up * 0.4 + Vector((0, 0.92, 0.05)), 'black', rot=(0, rake, 0), bevel=0)
    else:
        # Driver's periscopes at the top of the glacis, hatch on the roof (left).
        scopes = Batch(b, 'periscopes', 'glass')
        for k in range(3):
            scopes.box((0.05, 0.16, 0.08), (ROOF_FRONT + 0.03, -0.42 - k * 0.2 + 0.2, TOP - 0.02), (0, -0.6, (k - 1) * 0.35))
        scopes.done()
    # Lower nose: towing shackles, eyes, driving lamps and a splash plate.
    for y in (-0.62, 0.62):
        b.box('shackle-lug', (0.14, 0.1, 0.16), (FRONT + 0.02, y, 1.12), 'paint_dark', bevel=0.02)
        b.tube('shackle', [(FRONT + 0.06, y - 0.07, 1.1), (FRONT + 0.16, y - 0.08, 0.98), (FRONT + 0.2, y, 0.93),
                           (FRONT + 0.16, y + 0.08, 0.98), (FRONT + 0.06, y + 0.07, 1.1)], 0.026, 'steel')
        b.cyl('shackle-pin', 0.03, 0.2, (FRONT + 0.06, y, 1.1), 'steel', rot=(PI / 2, 0, 0), verts=12)
    for y in (-0.35, 0.35):
        b.cyl('driving-lamp', 0.07, 0.05, (FRONT - 0.02, y, 1.38), 'lamp', rot=(0, PI / 2, 0), verts=20)
        b.cyl('lamp-bezel', 0.085, 0.04, (FRONT - 0.05, y, 1.38), 'gunmetal', rot=(0, PI / 2, 0), verts=20)
    # Headlight clusters with wire guards on the sponson corners, and mirrors on folding arms.
    for s in (-1, 1):
        at = Vector((GLACIS_X - 0.15, s * 1.1, 1.66))
        b.box('lamp-housing', (0.24, 0.36, 0.2), at, 'paint_dark', bevel=0.03)
        b.cyl('headlamp', 0.06, 0.03, at + Vector((0.12, -s * 0.08, 0.02)), 'lamp', rot=(0, PI / 2, 0), verts=20)
        b.cyl('indicator', 0.035, 0.03, at + Vector((0.12, s * 0.1, 0.02)), 'amber', rot=(0, PI / 2, 0), verts=16)
        guard = Batch(b, 'lamp-guard', 'steel')
        for dy in (-0.15, -0.05, 0.05, 0.15):
            guard.box((0.015, 0.015, 0.22), at + Vector((0.16, dy, 0.02)))
        guard.box((0.015, 0.34, 0.015), at + Vector((0.16, 0, 0.12)))
        guard.done()
        arm0 = Vector((ROOF_FRONT + 0.2, s * 1.2, 2.05))
        arm1 = arm0 + Vector((0.35, s * 0.32, 0.18))
        b.tube('mirror-arm', [arm0, arm0 + Vector((0.2, s * 0.2, 0.05)), arm1], 0.018, 'gunmetal')
        b.box('mirror', (0.06, 0.16, 0.26), arm1 + Vector((0, 0, 0.1)), 'black', bevel=0.02)
    b.box('splash-plate', (0.04, 1.3, 0.16), (GLACIS_X + 0.12, 0, GLACIS_Z + 0.06), 'paint_dark', rot=(0, rake, 0), bevel=0.01)


def _roof(b, mission):
    # Engine deck (front right): louvred grilles and an access panel.
    grille = Batch(b, 'engine-grille', 'black')
    for k in range(10):
        grille.box((0.06, 0.62, 0.015), (1.0 + k * 0.085, 0.62, TOP + 0.005))
    grille.done()
    b.box('grille-frame', (0.92, 0.72, 0.03), (1.38, 0.62, TOP), 'paint_dark', bevel=0.01)
    b.box('engine-panel', (0.6, 0.72, 0.03), (0.45, 0.62, TOP + 0.005), 'paint', bevel=0.01)
    studs = Batch(b, 'roof-bolts', 'gunmetal')
    for k in range(8):
        studs.cyl(0.016, 0.02, (0.17 + k * 0.08, 0.28, TOP + 0.025), verts=6)
        studs.cyl(0.016, 0.02, (0.17 + k * 0.08, 0.96, TOP + 0.025), verts=6)
    # Seams and lifting eyes across the roof.
    for x in (BACK + 0.25, ROOF_FRONT - 0.1):
        for y in (-1.0, 1.0):
            studs.cyl(0.04, 0.05, (x, y, TOP + 0.02), verts=8)
    studs.done()
    seams = Batch(b, 'roof-seams', 'black')
    for x in (-2.2, -0.9, 0.2):
        seams.box((0.012, 2.1, 0.006), (x, 0, TOP + 0.002))
    seams.done()
    if mission not in ('COMMAND', 'MINE'):
        b.cyl('driver-hatch', 0.3, 0.06, (ROOF_FRONT - 0.32, -0.6, TOP + 0.03), 'paint', verts=32, bevel=0.015)
        b.box('hatch-hinge', (0.1, 0.32, 0.05), (ROOF_FRONT - 0.62, -0.6, TOP + 0.04), 'gunmetal', bevel=0.01)
    # Smoke grenade dischargers on the front roof corners.
    for s in (-1, 1):
        b.box('smoke-base', (0.3, 0.26, 0.08), (ROOF_FRONT - 0.15, s * 1.0, TOP + 0.04), 'paint_dark', bevel=0.02)
        tubes = Batch(b, 'smoke-tubes', 'gunmetal')
        for k in range(4):
            tubes.cyl(0.045, 0.22, (ROOF_FRONT - 0.2 + (k % 2) * 0.1, s * (0.93 + (k // 2) * 0.12), TOP + 0.16),
                      (s * 0.5, 0.5, 0), verts=12)
        tubes.done()
    # Roof hatches over the rear.
    if mission != 'TROOP':
        for y in (-0.5, 0.5):
            b.box('cargo-hatch', (0.8, 0.7, 0.04), (BACK + 0.8, y, TOP + 0.02), 'paint', bevel=0.015)
    else:
        b.box('roof-hatch', (0.9, 1.3, 0.04), (BACK + 1.2, 0, TOP + 0.02), 'paint', bevel=0.015)
    # Rear lights and tow pintle.
    for s in (-1, 1):
        at = Vector((BACK - 0.03, s * 1.15, 1.6))
        b.box('tail-housing', (0.08, 0.26, 0.18), at, 'paint_dark', bevel=0.02)
        b.box('tail-lamp', (0.03, 0.08, 0.06), at + Vector((-0.04, -s * 0.06, 0.02)), 'red', bevel=0.01)
        b.box('tail-amber', (0.03, 0.08, 0.06), at + Vector((-0.04, s * 0.06, 0.02)), 'amber', bevel=0.01)
    b.box('pintle', (0.2, 0.16, 0.14), (BACK - 0.08, 0, 0.82), 'gunmetal', bevel=0.02)
    b.cyl('pintle-hook', 0.06, 0.04, (BACK - 0.2, 0, 0.82), 'steel', verts=16)


def _running_gear(b):
    for i, x in enumerate(AXLES):
        b.cyl('axle', 0.08, TRACK * 2 - 0.5, (x, 0, R), 'gunmetal', rot=(PI / 2, 0, 0), verts=16)
        b.sphere('diff', 0.18, (x, 0, R), 'gunmetal', scale=(1, 0.8, 0.9))
        for s in (-1, 1):
            tyre_and_wheel(b, f'wheel{i}{s:+d}', (x, s * TRACK, R), R, TYRE_W, 0.34, -s)
            b.box('lower-arm', (0.12, 0.42, 0.08), (x - 0.1, s * 0.72, R - 0.12), 'gunmetal', bevel=0.02)
            b.cyl('damper', 0.05, 0.6, (x - 0.22, s * 0.78, R + 0.32), 'steel', rot=(s * 0.25, 0, 0), verts=12)
    b.box('driveline', (AXLES[0] - AXLES[3], 0.12, 0.12), ((AXLES[0] + AXLES[3]) / 2, 0, R + 0.05), 'gunmetal', bevel=0.02)


def _crane(b):
    """Recovery crane on the rear roof: slewing base, two-stage boom reaching forward, hook and chain."""
    pivot = Vector((BACK + 0.7, 0, TOP + 0.75))
    b.cyl('slew-ring', 0.6, 0.12, (pivot.x, 0, TOP + 0.06), 'gunmetal', verts=48, bevel=0.02)
    b.box('crane-base', (1.0, 0.9, 0.6), (pivot.x, 0, TOP + 0.42), 'paint', bevel=0.05)
    plates(b, 'crane-base', (pivot.x - 0.48, -0.452, TOP + 0.16), (1, 0, 0), (0, 0, 1), (0.96, 0.5), 2, 1, thick=0.025)
    angle = math.radians(17)
    d = Vector((math.cos(angle), 0, math.sin(angle)))
    length = 4.6
    b.box('boom', (length, 0.4, 0.46), pivot + d * (length / 2 - 0.3), 'paint', rot=(0, -angle, 0), bevel=0.04)
    b.box('boom-ext', (1.4, 0.3, 0.34), pivot + d * (length + 0.2), 'paint_light', rot=(0, -angle, 0), bevel=0.03)
    tip = pivot + d * (length + 0.85)
    b.cyl('sheave', 0.2, 0.16, tip, 'gunmetal', rot=(PI / 2, 0, 0), verts=32, bevel=0.02)
    b.box('sheave-cheek', (0.5, 0.36, 0.5), tip - d * 0.15, 'paint_dark', rot=(0, -angle, 0), bevel=0.03)
    stripes = Batch(b, 'boom-stripes', 'yellow')
    for k in range(3):
        stripes.box((0.12, 0.41, 0.47), pivot + d * (length - 0.6 - k * 0.3), (0, -angle, 0.0))
    stripes.done()
    # Lift ram from the base to mid-boom, with hoses.
    ram_top = pivot + d * 1.6 + Vector((0, 0, -0.22))
    b.tube('ram', [(pivot.x + 0.3, 0, TOP + 0.5), ram_top], 0.1, 'paint_dark', smooth=False)
    b.tube('ram-rod', [(pivot.x + 0.6, 0, TOP + 0.6), ram_top], 0.05, 'steel', smooth=False)
    for y in (-0.22, 0.22):
        b.tube('boom-hose', [pivot + Vector((0.2, y, 0.25)), pivot + d * 2.0 + Vector((0, y, 0.25)),
                             pivot + d * 4.0 + Vector((0, y, 0.25))], 0.018, 'cable')
    # Hook block and chain hanging in front of the nose.
    hz = 1.75
    b.tube('crane-cable', [tip, (tip.x, 0, hz + 0.35)], 0.014, 'cable', smooth=False)
    b.box('hook-block', (0.26, 0.2, 0.36), (tip.x, 0, hz + 0.18), 'yellow', bevel=0.04)
    b.tube('hook', [(tip.x, 0, hz), (tip.x, 0, hz - 0.22), (tip.x + 0.14, 0, hz - 0.3), (tip.x + 0.2, 0, hz - 0.16)], 0.03, 'steel')
    links = Batch(b, 'chain', 'steel')
    for k in range(8):
        links.box((0.05, 0.02 if k % 2 else 0.09, 0.12), (tip.x + 0.2, 0, hz - 0.12 - k * 0.1))
    links.done(bevel=0.008)
    # Rear stabiliser spade.
    b.box('spade', (0.12, 2.3, 0.7), (BACK - 0.25, 0, 0.55), 'paint', rot=(0, 0.3, 0), bevel=0.03)
    for y in (-0.8, 0.8):
        b.tube('spade-ram', [(BACK + 0.05, y, 1.3), (BACK - 0.25, y, 0.75)], 0.05, 'steel', smooth=False)


def _mounts(mission, top=TOP):
    roof_x = -0.3
    deck_x = BACK + 1.25
    if mission == 'RECOVERY':
        deck_x = -0.75  # the crane takes the rear roof; the boom clears a module here
    if mission == 'TROOP':
        roof_x = 0.0
    return Mounts(
        front=FRONT + 0.05, back=BACK, axles=AXLES, wheel_r=R, track=TRACK, tyre_w=TYRE_W,
        deck=(deck_x, top), deck_size=(2.0, 2.1),
        roof=(roof_x, 0.0, top), roof2=(ROOF_FRONT - 0.95, -0.45, top),
        side=(BACK + 0.4, ROOF_FRONT - 0.1, SPONSON_Z0 + 0.04, SPONSON_Z1, SPONSON + 0.04),
        front_face=(GLACIS_X + 0.2, 1.05, GLACIS_Z - 0.05, 1.05),
        roof_span=(BACK + 0.2, ROOF_FRONT - 0.05, top, 1.15), belly=(BACK + 0.4, GLACIS_X, 0.52, 0.75),
        engine=(1.38, 0.62, top), tanks=(BACK + 0.25, BACK + 1.3, 0.95, 1.0),
        antenna_left=(BACK + 0.45, -1.0, top), antenna_right=(BACK + 0.45, 1.0, top), radio_mast=(BACK + 0.35, 0.75, top),
        optics=(ROOF_FRONT - 0.25, -0.85, top), sensor_mast=(ROOF_FRONT - 0.7, 0.85, top),
        corners=((ROOF_FRONT - 0.1, -1.05, top), (ROOF_FRONT - 0.1, 1.05, top), (BACK + 2.4, -1.05, top), (BACK + 2.4, 1.05, top)),
        bumper=(FRONT + 0.05, 1.15), hitch=(BACK - 0.1, 0.82), rack=(BACK + 2.75, 0.0, top),
        extra={'armoured': True, 'module_h': 1.15},
    )


def build(mats, mission):
    b = Builder('base', mats)
    _hull(b, mission)
    for side in (-1, 1):
        _side(b, side, mission)
    _front(b, mission)
    _roof(b, mission)
    _running_gear(b)
    if mission == 'RECOVERY':
        _crane(b)
    if mission == 'COMBAT':
        b.cyl('turret-ring', 0.95, 0.08, (-0.3, 0, TOP + 0.04), 'gunmetal', verts=64, bevel=0.02)
    return _mounts(mission)
