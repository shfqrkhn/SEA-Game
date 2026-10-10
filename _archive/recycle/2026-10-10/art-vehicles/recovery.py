"""RECOVERY base vehicle: fictional 6x6 forward-control recovery truck with a rear crane.

Axes: +X forward, -Y is the vehicle's left side, Z up, ground at Z = 0.
"""
import math

from ..geo import Builder
from ..mounts import Mounts
from .truck import AXLES, TRACK, WHEEL_R, cab, rear_lights, running_gear, tandem_guards

# Cab roof (x 2.05..3.45, z 3.15) carries the roof slots; the open deck carries the module.
MOUNTS = Mounts(
    front=4.02, back=-3.42, axles=AXLES, wheel_r=WHEEL_R, track=TRACK, tyre_w=0.42,
    deck=(-0.5, 1.36), deck_size=(3.3, 2.3),
    roof=(3.0, 0.15, 3.15), roof2=(2.3, -0.55, 3.15),
    side=(-2.2, 1.8, 1.42, 2.25, 1.22), front_face=(3.84, 1.3, 2.15, 1.22), roof_span=(2.05, 3.45, 3.15, 1.2),
    belly=(-2.0, 3.6, 0.62, 0.95), engine=(1.6, 0.0, 1.38), tanks=(-1.1, 0.7, 1.0, 1.2),
    antenna_left=(2.08, -1.0, 3.15), antenna_right=(2.08, 1.0, 3.15), radio_mast=(2.3, 0.55, 3.15),
    optics=(3.38, -0.75, 3.12), sensor_mast=(1.75, 0.95, 1.36),
    corners=((3.35, -1.12, 3.1), (3.35, 1.12, 3.1), (2.15, -1.12, 3.14), (2.15, 1.12, 3.14)),
    bumper=(4.02, 1.08), hitch=(-3.42, 0.95), rack=(1.55, 0.0, 1.36),
)
# The crane is the recovery vehicle's identity, so its hero loadout keeps the deck clear of tall modules.
HERO = ('CAP-B', 'COM-E', 'ACC-F')


def build(mats):
    b = Builder('base', mats)
    running_gear(b)
    cab(b)
    _deck(b)
    _crane(b)
    return MOUNTS


def _deck(b):
    b.box('deck', (5.2, 2.46, 0.2), (-0.7, 0, 1.25), 'paint', bevel=0.02)
    b.box('deck-plate', (5.1, 2.36, 0.02), (-0.7, 0, 1.36), 'gunmetal', bevel=0.004)
    for y in (-1.2, 1.2):
        b.box('side-rail', (5.2, 0.06, 0.08), (-0.7, y, 1.42), 'paint_dark', bevel=0.01)
        for x in (-2.9, -1.9, -0.9, 0.1, 1.1):
            b.box('stake-pocket', (0.08, 0.07, 0.1), (x, y, 1.3), 'paint_dark', bevel=0.008)
    tandem_guards(b)
    # Rear lights and bumper.
    b.box('rear-bumper', (0.2, 2.4, 0.3), (-3.32, 0, 1.0), 'paint_dark', bevel=0.02)
    rear_lights(b)


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
