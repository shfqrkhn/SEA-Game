"""TROOP (protected troop body with windows) and COMMAND (tall shelter body with ribs and a generator).

Both share the 6x6 truck chassis and cab; the body sits behind the cab from x -3.42 to 1.9.
"""
import math

from ..geo import Builder
from ..mounts import Mounts
from .truck import AXLES, TRACK, WHEEL_R, cab, rear_lights, running_gear, tandem_guards

BACK, FRONT, FLOOR = -3.42, 1.9, 1.12


def _mounts(top):
    return Mounts(
        front=4.02, back=BACK, axles=AXLES, wheel_r=WHEEL_R, track=TRACK, tyre_w=0.42,
        deck=(-1.95, top), deck_size=(2.7, 2.2),
        roof=(1.05, 0.0, top), roof2=(3.0, 0.3, 3.15),
        side=(-3.2, 1.7, 1.3, top - 0.2, 1.22), front_face=(3.84, 1.3, 2.15, 1.22), roof_span=(2.05, 3.45, 3.15, 1.2),
        belly=(-2.0, 3.6, 0.62, 0.95), engine=(1.98, -1.18, 1.25), tanks=(-3.25, -2.15, 0.95, 1.12),
        antenna_left=(2.08, -1.0, 3.15), antenna_right=(2.08, 1.0, 3.15), radio_mast=(0.0, 0.75, top),
        optics=(3.38, -0.75, 3.12), sensor_mast=(2.5, -0.4, 3.15),
        corners=((1.75, -1.18, top), (1.75, 1.18, top), (-3.3, -1.18, top), (-3.3, 1.18, top)),
        bumper=(4.02, 1.08), hitch=(BACK, 0.95), rack=(0.0, -0.45, top),
        extra={'module_h': 0.95},
    )


def _body(b, top, colour='paint'):
    length = FRONT - BACK
    b.box('body-floor', (length, 2.46, 0.16), ((FRONT + BACK) / 2, 0, FLOOR + 0.08), 'paint_dark', bevel=0.02)
    profile = [(BACK, FLOOR + 0.16), (FRONT, FLOOR + 0.16), (FRONT, top), (BACK + 0.1, top), (BACK, top - 0.1)]
    b.wedge('body', profile, 2.44, (0, 0, 0), colour, bevel=0.05, segments=3)
    for y, s in ((-1.222, -1), (1.222, 1)):
        for z in (1.55, top - 0.3):
            b.box('seam', (length - 0.1, 0.01, 0.012), ((FRONT + BACK) / 2, y + s * 0.004, z), 'black', bevel=0)
    # Rear door with handle, steps and a ladder on the left.
    b.box('rear-door', (0.04, 1.0, top - FLOOR - 0.35), (BACK - 0.02, 0.2, (top + FLOOR + 0.2) / 2), 'paint_dark', bevel=0.02)
    b.box('door-handle', (0.04, 0.2, 0.04), (BACK - 0.05, 0.55, 1.95), 'steel', bevel=0.01)
    for k in range(2):
        b.box('rear-step', (0.3, 0.9, 0.03), (BACK - 0.15, 0.2, 0.55 + k * 0.3), 'steel', bevel=0.005)
    for y in (-0.6, -1.0):
        b.box('ladder-rail', (0.03, 0.03, top - 0.5), (BACK - 0.06, y, (top + 0.5) / 2), 'steel', bevel=0.006)
    for z in [0.65 + k * 0.3 for k in range(int((top - 0.8) / 0.3))]:
        b.box('rung', (0.03, 0.4, 0.025), (BACK - 0.06, -0.8, z), 'steel', bevel=0.005)
    b.box('rear-bumper', (0.2, 2.4, 0.3), (BACK + 0.1, 0, 0.98), 'paint_dark', bevel=0.02)
    rear_lights(b, x=BACK - 0.01, z=1.32)
    tandem_guards(b)


def build_troop(mats):
    top = 2.95
    b = Builder('base', mats)
    running_gear(b)
    cab(b)
    _body(b, top)
    for y, s in ((-1.222, -1), (1.222, 1)):
        for k in range(4):
            x = -2.7 + k * 1.15
            b.box('window-frame', (0.62, 0.02, 0.46), (x, y + s * 0.006, 2.3), 'paint_dark', bevel=0.02)
            b.box('window', (0.52, 0.02, 0.36), (x, y + s * 0.014, 2.3), 'glass', bevel=0.02)
        for k in range(16):
            b.cyl('bolt', 0.018, 0.02, (-3.25 + k * 0.32, y + s * 0.012, 1.4), 'gunmetal', rot=(math.pi / 2, 0, 0), verts=6, bevel=0)
        b.box('side-door', (0.9, 0.02, 1.4), (0.95, y + s * 0.006, 1.95), 'paint', bevel=0.02)
        b.box('door-handle', (0.16, 0.03, 0.03), (0.6, y + s * 0.025, 1.95), 'steel', bevel=0.008)
    for x in (-2.4, -0.6):
        b.cyl('roof-hatch', 0.34, 0.07, (x, 0, top + 0.035), 'paint_dark', verts=32, bevel=0.01)
    return _mounts(top)


def build_command(mats):
    top = 3.25
    b = Builder('base', mats)
    running_gear(b)
    cab(b)
    _body(b, top)
    for y, s in ((-1.222, -1), (1.222, 1)):
        for k in range(12):
            b.box('rib', (0.05, 0.03, top - FLOOR - 0.45), (-3.15 + k * 0.45, y + s * 0.012, (top + FLOOR + 0.16) / 2), 'paint_light', bevel=0.008)
        b.box('cable-port', (0.3, 0.04, 0.22), (-2.9, y + s * 0.02, 1.55), 'gunmetal', bevel=0.02)
    # Generator box on the right chassis rail and an air-conditioning unit on the front of the body.
    b.box('generator', (0.9, 0.5, 0.55), (-2.65, 1.0, 0.72), 'paint_dark', bevel=0.04)
    for k in range(5):
        b.box('louvre', (0.7, 0.02, 0.04), (-2.65, 1.255, 0.6 + k * 0.06), 'black', bevel=0.004)
    b.box('ac-unit', (0.45, 0.9, 0.6), (FRONT + 0.05, -0.5, top - 0.45), 'paint_light', bevel=0.04)
    b.cyl('ac-fan', 0.22, 0.02, (FRONT + 0.28, -0.5, top - 0.45), 'black', rot=(0, math.pi / 2, 0), verts=32)
    # Stowed telescopic mast along the roof edge.
    b.cyl('stowed-mast', 0.08, 4.2, (-1.0, 1.0, top + 0.12), 'gunmetal', rot=(0, math.pi / 2, 0), verts=20)
    for x in (-2.8, 0.8):
        b.box('mast-cradle', (0.1, 0.2, 0.14), (x, 1.0, top + 0.05), 'paint_dark', bevel=0.01)
    return _mounts(top)
