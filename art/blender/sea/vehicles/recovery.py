"""RECOVERY base vehicle: fictional 6x6 forward-control recovery truck with a rear crane.

Axes: +X forward, -Y is the vehicle's left side, Z up, ground at Z = 0.
"""
import math

from ..geo import Builder, tyre_and_wheel

WHEEL_R = 0.62
AXLES = (2.95, 0.05, -1.45)
TRACK = 1.02
MOUNTS = {
    'deck': (-0.35, 0.0, 1.36),        # centre of the load deck surface
    'cab_roof': (2.62, 0.0, 3.17),     # centre of the cab roof
    'front_bumper': (4.02, 0.0, 1.12), # front face of the bumper
}


def build(mats):
    b = Builder('base', mats)
    _chassis(b)
    _cab(b)
    _deck(b)
    _crane(b)
    for x in AXLES:
        for side, y in ((1, -TRACK), (-1, TRACK)):
            tyre_and_wheel(b, f'wheel{x:+.1f}{y:+.0f}', (x, y, WHEEL_R), WHEEL_R, 0.42, 0.36, side)
    return MOUNTS


def _chassis(b):
    for y in (-0.48, 0.48):
        b.box('rail', (7.0, 0.14, 0.3), (0.2, y, 0.98), 'paint_dark', bevel=0.01)
    for x in (3.4, 2.0, 0.8, -0.7, -2.2, -3.2):
        b.box('crossmember', (0.12, 0.9, 0.16), (x, 0, 0.98), 'paint_dark', bevel=0.01)
    for x in AXLES:
        b.cyl('axle', 0.11, 2.0, (x, 0, WHEEL_R), 'gunmetal', rot=(math.pi / 2, 0, 0), verts=24)
        b.sphere('diff', 0.22, (x, 0, WHEEL_R), 'gunmetal', scale=(1.1, 0.9, 0.9))
    # Leaf springs on the tandem.
    for y in (-0.62, 0.62):
        b.box('bogie', (2.2, 0.12, 0.09), ((AXLES[1] + AXLES[2]) / 2, y, 0.86), 'gunmetal', bevel=0.008)
    # Fuel tank (left) and battery box (right) between front axle and tandem.
    b.cyl('fuel', 0.27, 1.3, (1.55, -0.92, 1.05), 'paint_dark', rot=(0, math.pi / 2, 0), verts=40, bevel=0.03)
    for x in (1.05, 2.05):
        b.box('strap', (0.04, 0.58, 0.58), (x, -0.92, 1.05), 'steel', bevel=0.005)
    b.box('battery', (1.0, 0.5, 0.45), (1.55, 0.95, 1.02), 'paint', bevel=0.02)
    b.box('battery-lid', (1.02, 0.52, 0.05), (1.55, 0.95, 1.26), 'paint_dark', bevel=0.01)
    # Air tanks.
    b.cyl('air', 0.12, 0.9, (-0.7, -0.75, 0.92), 'paint_dark', rot=(0, math.pi / 2, 0), verts=28)
    b.cyl('air', 0.12, 0.9, (-0.7, 0.75, 0.92), 'paint_dark', rot=(0, math.pi / 2, 0), verts=28)


def _cab(b):
    profile = [(2.0, 1.12), (3.82, 1.12), (3.82, 2.15), (3.68, 3.02), (3.5, 3.15), (2.0, 3.15)]
    b.wedge('cab', profile, 2.44, (0, 0, 0), 'paint', bevel=0.06, segments=4)
    # Windscreen, split.
    for y in (-0.56, 0.56):
        b.box('windscreen-seal', (0.03, 1.08, 0.84), (3.758, y, 2.6), 'black', rot=(0, -0.16, 0), bevel=0.03)
        b.box('windscreen', (0.04, 1.02, 0.78), (3.765, y, 2.6), 'glass', rot=(0, -0.16, 0), bevel=0.02)
        b.tube('wiper', [(3.8, y - 0.3, 2.25), (3.72, y + 0.25, 2.85)], 0.008, 'black', smooth=False)
    b.box('pillar', (0.06, 0.1, 0.84), (3.775, 0, 2.6), 'paint', rot=(0, -0.16, 0), bevel=0.01)
    b.box('visor', (0.36, 2.3, 0.04), (3.78, 0, 3.08), 'paint_dark', rot=(0, 0.12, 0), bevel=0.01)
    # Side windows, door seams and handles.
    for y, s in ((-1.222, -1), (1.222, 1)):
        b.box('window-seal', (0.78, 0.016, 0.72), (3.18, y, 2.6), 'black', bevel=0.03)
        b.box('window', (0.72, 0.02, 0.66), (3.18, y, 2.6), 'glass', bevel=0.02)
        b.box('drip-rail', (1.75, 0.03, 0.03), (2.9, y + s * 0.01, 3.1), 'paint_dark', bevel=0.008)
        b.box('rear-window', (0.42, 0.02, 0.5), (2.35, y, 2.64), 'glass', bevel=0.02)
        for x in (2.66, 3.66):
            b.box('seam', (0.012, 0.01, 1.65), (x, y + s * 0.004, 2.05), 'black', bevel=0)
        b.box('handle', (0.16, 0.03, 0.03), (2.8, y + s * 0.02, 2.2), 'steel', bevel=0.008)
        for k, z in enumerate((0.62, 0.92)):
            b.box('step', (0.42, 0.24, 0.03), (3.18, y + s * 0.02, z), 'steel', bevel=0.005)
        b.box('step-hanger', (0.04, 0.05, 0.42), (2.99, y + s * 0.02, 0.86), 'paint_dark', bevel=0.005)
        b.box('step-hanger', (0.04, 0.05, 0.42), (3.37, y + s * 0.02, 0.86), 'paint_dark', bevel=0.005)
        # Mirror arm and head.
        b.tube('mirror-arm', [(3.7, y, 2.35), (3.85, y + s * 0.18, 2.4), (3.88, y + s * 0.3, 2.6)], 0.018, 'black')
        b.box('mirror', (0.06, 0.2, 0.36), (3.88, y + s * 0.32, 2.72), 'black', bevel=0.02)
        # Grab rail.
        b.tube('grab', [(3.72, y + s * 0.03, 1.5), (3.76, y + s * 0.05, 1.5), (3.76, y + s * 0.05, 2.0), (3.72, y + s * 0.03, 2.0)], 0.014, 'steel', smooth=False)
    # Grille with slats.
    b.box('grille-recess', (0.03, 1.5, 0.62), (3.825, 0, 1.78), 'black', bevel=0.01)
    for k in range(7):
        b.box('slat', (0.03, 1.46, 0.035), (3.84, 0, 1.53 + k * 0.085), 'paint_dark', bevel=0.006)
    # Headlamps in guarded pods.
    for y in (-0.92, 0.92):
        b.cyl('lamp-pod', 0.15, 0.12, (3.86, y, 1.68), 'paint_dark', rot=(0, math.pi / 2, 0), verts=32)
        b.cyl('lamp-lens', 0.12, 0.02, (3.925, y, 1.68), 'glass', rot=(0, math.pi / 2, 0), verts=32)
        b.cyl('lamp-core', 0.05, 0.02, (3.915, y, 1.68), 'lamp', rot=(0, math.pi / 2, 0), verts=20)
        for dz in (-0.06, 0.0, 0.06):
            b.box('guard', (0.02, 0.32, 0.016), (3.99, y, 1.68 + dz), 'black', bevel=0.004)
        b.box('indicator', (0.04, 0.12, 0.06), (3.86, y + (0.24 if y > 0 else -0.24), 1.68), 'amber', bevel=0.01)
    # Roof beacons and hatch.
    b.box('hatch', (0.7, 0.7, 0.05), (2.62, 0, 3.17), 'paint_dark', bevel=0.02)
    for y in (-0.95, 0.95):
        b.cyl('beacon-base', 0.09, 0.05, (3.3, y, 3.18), 'black', verts=24)
        b.cyl('beacon', 0.07, 0.14, (3.3, y, 3.27), 'amber', verts=24, radius2=0.06)
    # Exhaust stack behind the cab.
    b.tube('exhaust', [(1.95, 1.0, 1.25), (1.95, 1.0, 3.2), (1.95, 1.0, 3.48)], 0.065, 'gunmetal', smooth=False)
    b.box('heat-shield', (0.04, 0.2, 1.1), (1.86, 1.0, 2.5), 'black', bevel=0.01)
    # Front bumper and tow eyes.
    b.box('bumper', (0.24, 2.5, 0.36), (3.9, 0, 1.08), 'paint_dark', bevel=0.03)
    for y in (-0.7, 0.7):
        b.cyl('tow-eye', 0.07, 0.04, (4.04, y, 0.95), 'steel', rot=(math.pi / 2, 0, 0), verts=24)
    # Front wheel arches: an arc of plate over each front wheel.
    arc = [(math.radians(a), r) for r in (0.8, 0.72) for a in (range(12, 172, 8) if r == 0.8 else range(164, 4, -8))]
    profile = [(AXLES[0] + math.cos(a) * r, WHEEL_R + math.sin(a) * r) for a, r in arc]
    for y in (-TRACK, TRACK):
        b.wedge('front-arch', profile, 0.5, (0, y, 0), 'paint', bevel=0.015, segments=2)


def _deck(b):
    b.box('deck', (5.2, 2.46, 0.2), (-0.7, 0, 1.25), 'paint', bevel=0.02)
    b.box('deck-plate', (5.1, 2.36, 0.02), (-0.7, 0, 1.36), 'gunmetal', bevel=0.004)
    for y in (-1.2, 1.2):
        b.box('side-rail', (5.2, 0.06, 0.08), (-0.7, y, 1.42), 'paint_dark', bevel=0.01)
        for x in (-2.9, -1.9, -0.9, 0.1, 1.1):
            b.box('stake-pocket', (0.08, 0.07, 0.1), (x, y, 1.3), 'paint_dark', bevel=0.008)
    # Tandem mudguards and flaps.
    for y in (-TRACK, TRACK):
        b.wedge('tandem-fender', [(-2.25, 1.32), (0.85, 1.32), (0.85, 1.42), (-2.25, 1.42)], 0.52, (0, y, 0), 'black', bevel=0.02)
        b.box('flap', (0.02, 0.48, 0.5), (-2.3, y, 0.95), 'black', bevel=0.005)
    # Rear lights and bumper.
    b.box('rear-bumper', (0.2, 2.4, 0.3), (-3.32, 0, 1.0), 'paint_dark', bevel=0.02)
    for y in (-1.0, 1.0):
        b.box('tail', (0.04, 0.22, 0.1), (-3.43, y, 1.05), 'red', bevel=0.01)
        b.box('tail-amber', (0.04, 0.1, 0.1), (-3.43, y * 0.82, 1.05), 'amber', bevel=0.01)


def _crane(b):
    """Rear recovery crane: slewing turret, raised boom, extension, hook block; rear stabilisers."""
    tx = -2.75
    b.cyl('turret', 0.48, 0.32, (tx, 0, 1.52), 'paint', verts=48, bevel=0.03)
    b.cyl('slew-ring', 0.52, 0.06, (tx, 0, 1.38), 'gunmetal', verts=48)
    b.box('column', (0.7, 0.62, 0.9), (tx, 0, 2.1), 'paint', bevel=0.04)
    angle = math.radians(32)
    length = 2.6
    pivot = (tx, 0, 2.45)
    dx, dz = -math.cos(angle), math.sin(angle)
    center = (pivot[0] + dx * length / 2, 0, pivot[2] + dz * length / 2)
    b.box('boom', (length, 0.42, 0.42), center, 'paint', rot=(0, angle, 0), bevel=0.035)
    tip = (pivot[0] + dx * length, 0, pivot[2] + dz * length)
    ext_c = (pivot[0] + dx * (length + 0.6), 0, pivot[2] + dz * (length + 0.6))
    b.box('boom-ext', (1.4, 0.3, 0.3), ext_c, 'paint_dark', rot=(0, angle, 0), bevel=0.02)
    end = (pivot[0] + dx * (length + 1.25), 0, pivot[2] + dz * (length + 1.25))
    b.cyl('sheave', 0.16, 0.12, end, 'gunmetal', rot=(math.pi / 2, 0, 0), verts=32)
    # Hazard striping near the tip and hoses along the boom.
    for k in range(6):
        d = length - 0.15 - k * 0.12
        c = (pivot[0] + dx * d, 0, pivot[2] + dz * d)
        b.box('stripe', (0.1, 0.43, 0.43), c, 'yellow' if k % 2 == 0 else 'black', rot=(0, angle, 0), bevel=0.004)
    for y in (-0.24, 0.24):
        pts = [(pivot[0] + dx * d, y, pivot[2] + dz * d + 0.12) for d in (0.2, 1.2, 2.3)]
        b.tube('boom-hose', pts, 0.016, 'cable')
    # Lift cylinder from the column to the boom.
    b.tube('ram', [(tx + 0.1, 0.0, 1.85), (tip[0] * 0.55 + pivot[0] * 0.45, 0.0, tip[2] * 0.55 + pivot[2] * 0.45)], 0.09, 'paint_dark', smooth=False)
    b.tube('ram-rod', [(tx - 0.3, 0.0, 2.15), (tip[0] * 0.55 + pivot[0] * 0.45, 0.0, tip[2] * 0.55 + pivot[2] * 0.45)], 0.045, 'steel', smooth=False)
    # Hook block on cable.
    hz = 1.75
    b.tube('crane-cable', [end, (end[0], 0, hz + 0.25)], 0.012, 'cable', smooth=False)
    b.box('hook-block', (0.22, 0.16, 0.3), (end[0], 0, hz + 0.1), 'yellow', bevel=0.03)
    b.tube('hook', [(end[0], 0, hz - 0.05), (end[0], 0, hz - 0.25), (end[0] + 0.12, 0, hz - 0.32), (end[0] + 0.18, 0, hz - 0.2)], 0.025, 'steel')
    # Stabiliser legs at the rear corners.
    for y in (-1.05, 1.05):
        b.box('outrigger', (0.18, 0.18, 1.0), (-3.05, y, 0.75), 'paint_dark', bevel=0.02)
        b.box('foot', (0.36, 0.36, 0.05), (-3.05, y, 0.27), 'gunmetal', bevel=0.01)
        b.tube('hose', [(-2.9, y * 0.85, 1.3), (-2.95, y * 0.95, 1.0), (-3.0, y, 0.7)], 0.015, 'cable')
