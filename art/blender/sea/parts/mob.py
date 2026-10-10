"""Mobility cards: one builder per card (see library.py for the builder contract)."""
import math

from ..geo import tyre_and_wheel
from .common import PI, _card, _sides, _armoured


def _powerpack(b, m, twin, scale):
    x, y, z = m.engine
    if _card(m) or _armoured(m):
        # Raised engine-deck grille with an air cleaner and exhaust.
        b.box('grille-deck', (0.95 * scale, 0.9 * scale, 0.14), (x, y, z + 0.07), 'paint_dark', bevel=0.03)
        for k in range(7):
            b.box('grille-slat', (0.85 * scale, 0.025, 0.04), (x, y - 0.38 * scale + k * 0.127 * scale, z + 0.16), 'black', bevel=0.004)
        b.cyl('air-cleaner', 0.15 * scale, 0.5, (x - 0.25, y + 0.55 * scale, z + 0.3), 'paint', verts=28, bevel=0.02)
        b.cyl('air-cap', 0.18 * scale, 0.06, (x - 0.25, y + 0.55 * scale, z + 0.58), 'black', verts=28, bevel=0.01)
        for k, dy in enumerate((-0.2, 0.2) if twin else (0.0,)):
            b.tube('exhaust', [(x + 0.35, y + dy, z + 0.14), (x + 0.42, y + dy, z + 0.35), (x + 0.42, y + dy, z + 0.6)], 0.05, 'gunmetal', smooth=False)
            b.box('heat-shield', (0.06, 0.16, 0.36), (x + 0.5, y + dy, z + 0.42), 'black', bevel=0.01)
        return
    # Truck: snorkel intake and exhaust tower against the back of the cab.
    s = -1 if y < 0 else 1
    b.box('intake-tower', (0.24, 0.3 * scale, 1.6), (x, y, z + 0.8), 'paint_dark', bevel=0.04)
    b.cyl('air-cleaner', 0.17 * scale, 0.55, (x, y, z + 1.95), 'paint', verts=28, bevel=0.02)
    b.cyl('rain-cap', 0.2 * scale, 0.08, (x, y, z + 2.27), 'black', verts=28, bevel=0.01)
    for k, dy in enumerate((-0.12, 0.12) if twin else (0.0,)):
        b.tube('exhaust', [(x - 0.1, y - s * 0.32 + dy, z), (x - 0.1, y - s * 0.32 + dy, z + 1.9), (x - 0.05, y - s * 0.32 + dy, z + 2.1)], 0.055, 'gunmetal', smooth=False)
    b.box('heat-shield', (0.04, 0.22, 0.9), (x - 0.18, y - s * 0.32, z + 1.3), 'black', bevel=0.01)


def mob_a(b, m):
    """Efficient Power Pack: big air cleaner and a single exhaust."""
    _powerpack(b, m, twin=False, scale=1.15)


def mob_f(b, m):
    """Compact Engine Set: small grille unit with twin short exhausts."""
    _powerpack(b, m, twin=True, scale=0.85)


def mob_e(b, m):
    """Long-Range Propulsion: strapped auxiliary fuel tanks and a jerrycan rack on each side."""
    x0, x1, z, hw = m.tanks
    for side in _sides(m):
        y = side * (hw + 0.08)
        L = x1 - x0
        b.cyl('tank', 0.24, L * 0.8, ((x0 + x1) / 2, y, z), 'paint_light', rot=(0, PI / 2, 0), verts=36, bevel=0.04)
        for dx in (-0.3, 0.3):
            b.cyl('strap', 0.255, 0.04, ((x0 + x1) / 2 + dx * L * 0.8, y, z), 'black', rot=(0, PI / 2, 0), verts=36)
        b.cyl('filler', 0.05, 0.08, ((x0 + x1) / 2 + L * 0.3, y, z + 0.25), 'steel', verts=16)
        for k in range(2):
            b.box('jerrycan', (0.16, 0.34, 0.46), (x0 + 0.1 + k * 0.2, y + side * 0.05, z + 0.48), 'paint_dark', bevel=0.03)


def _wheels(m):
    """Wheel stations: (x, y, side) for every wheel, or one wheel for the card."""
    if _card(m):
        return [(m.axles[0], -m.track, 1)]
    return [(x, side * m.track, -side) for x in m.axles for side in (-1, 1)]


def _card_wheel(b, m):
    if _card(m):
        tyre_and_wheel(b, 'card-wheel', (m.axles[0], -m.track, m.wheel_r), m.wheel_r, m.tyre_w, m.wheel_r * 0.58, 1)


def mob_b(b, m):
    """High-Torque Drivetrain: hub-reduction housings on every wheel and armoured shaft guards."""
    _card_wheel(b, m)
    for x, y, s in _wheels(m):
        out = y + (-1 if y < 0 else 1) * (m.tyre_w * 0.42)
        b.cyl('hub-reduction', m.wheel_r * 0.38, 0.12, (x, out, m.wheel_r), 'gunmetal', rot=(PI / 2, 0, 0), verts=32, bevel=0.02)
        b.cyl('hub-cap', m.wheel_r * 0.22, 0.06, (x, out + (-1 if y < 0 else 1) * 0.07, m.wheel_r), 'paint_dark', rot=(PI / 2, 0, 0), verts=24, bevel=0.01)
        for k in range(8):
            a = 2 * PI * k / 8
            b.cyl('bolt', 0.016, 0.04, (x + math.cos(a) * m.wheel_r * 0.3, out + (-1 if y < 0 else 1) * 0.06, m.wheel_r + math.sin(a) * m.wheel_r * 0.3), 'steel', rot=(PI / 2, 0, 0), verts=6, bevel=0)
    if not _card(m):
        x0, x1 = min(m.axles), max(m.axles)
        b.box('shaft-guard', (x1 - x0, 0.3, 0.06), ((x0 + x1) / 2, 0, m.wheel_r - 0.2), 'paint_dark', bevel=0.02)


def mob_c(b, m):
    """Lightweight Running Gear: new lighter wheels with open multi-spoke rims over the old ones."""
    for x, y, s in _wheels(m):
        out = 1 if y > 0 else -1
        b.revolve('light-tyre', [(m.wheel_r * 0.62, -m.tyre_w * 0.46), (m.wheel_r * 0.98, -m.tyre_w * 0.44), (m.wheel_r + 0.012, -m.tyre_w * 0.3),
                                  (m.wheel_r + 0.012, m.tyre_w * 0.3), (m.wheel_r * 0.98, m.tyre_w * 0.44), (m.wheel_r * 0.62, m.tyre_w * 0.46)],
                  (x, y, m.wheel_r), 'rubber', steps=64)
        face = y + out * m.tyre_w * 0.36
        b.cyl('rim-ring', m.wheel_r * 0.62, 0.05, (x, face, m.wheel_r), 'gunmetal', rot=(PI / 2, 0, 0), verts=48, bevel=0.01)
        b.cyl('rim-hub', m.wheel_r * 0.16, 0.08, (x, face + out * 0.02, m.wheel_r), 'gunmetal', rot=(PI / 2, 0, 0), verts=24, bevel=0.01)
        for k in range(6):
            a = 2 * PI * k / 6
            r = m.wheel_r * 0.38
            b.box('spoke', (0.06, 0.04, m.wheel_r * 0.46), (x + math.cos(a) * r, face + out * 0.01, m.wheel_r + math.sin(a) * r), 'paint_dark', rot=(0, -a + PI / 2, 0), bevel=0.01)


def mob_d(b, m):
    """Heavy-Duty Suspension: yellow external dampers and coil springs at every wheel."""
    _card_wheel(b, m)
    for x, y, s in _wheels(m):
        out = 1 if y > 0 else -1
        yy = y + out * (m.tyre_w * 0.55 + 0.08)
        lo, hi = (x + 0.12, yy, m.wheel_r), (x - 0.25, yy, m.wheel_r + 0.95)
        b.tube('damper-body', [lo, ((lo[0] + hi[0]) / 2, yy, (lo[2] + hi[2]) / 2)], 0.05, 'yellow', smooth=False)
        b.tube('damper-rod', [((lo[0] + hi[0]) / 2, yy, (lo[2] + hi[2]) / 2), hi], 0.025, 'steel', smooth=False)
        coil = [(lo[0] + (hi[0] - lo[0]) * t / 40 + math.cos(t * 0.9) * 0.08, yy + math.sin(t * 0.9) * 0.08, lo[2] + (hi[2] - lo[2]) * t / 40) for t in range(41)]
        b.tube('coil', coil, 0.014, 'paint_dark')
        b.box('mount', (0.12, 0.12, 0.08), hi, 'gunmetal', bevel=0.01)


def mob_g(b, m):
    """Adaptive Traction Package: tyre chains across the tread and central tyre-inflation lines."""
    _card_wheel(b, m)
    for x, y, s in _wheels(m):
        out = 1 if y > 0 else -1
        r = m.wheel_r + 0.02
        for k in range(14):
            a = 2 * PI * k / 14
            b.box('chain', (0.035, m.tyre_w * 1.02, 0.03), (x + math.cos(a) * r, y, m.wheel_r + math.sin(a) * r), 'steel', rot=(0, -a, 0), bevel=0.006)
        for side in (-1, 1):
            ring = [(x + math.cos(2 * PI * t / 32) * (r - 0.06), y + side * m.tyre_w * 0.5, m.wheel_r + math.sin(2 * PI * t / 32) * (r - 0.06)) for t in range(33)]
            b.tube('chain-ring', ring, 0.012, 'steel')
        face = y + out * m.tyre_w * 0.42
        b.tube('ctis-line', [(x, face, m.wheel_r), (x + 0.15, face + out * 0.08, m.wheel_r + 0.35), (x + 0.2, face, m.wheel_r + 0.7)], 0.014, 'black')
        b.cyl('rotary-union', 0.05, 0.08, (x, face + out * 0.04, m.wheel_r), 'steel', rot=(PI / 2, 0, 0), verts=16)
