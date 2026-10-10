"""Every physical card's part (MPES §10.2, Appendix A): 49 builders, one per card, grouped by slot.

A builder takes a `Builder` (its layer is the card ID) and the vehicle's `Mounts` and places the part in
vehicle coordinates. The same builder renders the card image on the compact card mount
(`mounts.card_mount()`), where `m.extra['card']` asks for one side only and a wheel for running gear.
Sizes follow the card's effects so stronger cards read as bigger kit.
"""
import math

from ..geo import tyre_and_wheel

PI = math.pi


def _card(m):
    return bool(m.extra.get('card'))


def build(card, b, m):
    """Build `card` into builder `b` on mounts `m` (the entry point the renderer uses)."""
    b.card = _card(m)
    PARTS[card](b, m)


def _sides(m):
    return (-1,) if _card(m) else (-1, 1)


def _armoured(m):
    return bool(m.extra.get('armoured'))


# ---------------------------------------------------------------- CAPACITY: modules on the deck or roof

def _module_box(b, m, length, height, mat='paint', width=None):
    x, z = m.deck
    w = min(width or m.deck_size[1], m.deck_size[1])
    length = min(length, m.deck_size[0])
    height = min(height, m.extra.get('module_h', height))
    b.box('skid', (length * 0.98, w * 0.9, 0.08), (x, 0, z + 0.04), 'paint_dark', bevel=0.01)
    b.box('shell', (length, w, height), (x, 0, z + 0.06 + height / 2), mat, bevel=0.05, segments=4)
    return x, z + 0.06, length, w, height


def _windows(b, x, z, length, w, height, count, size=(0.36, 0.26), sides=(-1, 1)):
    for side in sides:
        y = side * (w / 2 + 0.012)
        for k in range(count):
            px = x - length / 2 + (k + 0.5) * length / count
            b.box('window-frame', (size[0] + 0.08, 0.02, size[1] + 0.08), (px, y, z + height * 0.62), 'paint_dark', bevel=0.02)
            b.box('window', (size[0], 0.02, size[1]), (px, y + side * 0.008, z + height * 0.62), 'glass', bevel=0.015)


def _roof_kit(b, x, z, length, height):
    for dx in (-0.3, 0.3):
        b.box('vent', (0.36, 0.36, 0.12), (x + dx * length, 0.3, z + height + 0.06), 'paint_dark', bevel=0.03)
    b.cyl('roof-lamp', 0.05, 0.06, (x + length * 0.4, -0.7, z + height + 0.03), 'lamp', verts=16)


def cap_a(b, m):
    """Modular Crew Hull: three bolted segments with windows and a rear door."""
    x, z, L, w, h = _module_box(b, m, 2.7, 1.45)
    for k in (1, 2):
        sx = x - L / 2 + k * L / 3
        b.box('segment-flange', (0.06, w + 0.05, h + 0.04), (sx, 0, z + h / 2), 'paint_dark', bevel=0.015)
    _windows(b, x, z, L, w, h, 3)
    b.box('door', (0.04, 0.8, h * 0.85), (x - L / 2 - 0.02, 0.2, z + h * 0.45), 'paint_dark', bevel=0.02)
    b.box('door-handle', (0.04, 0.18, 0.04), (x - L / 2 - 0.05, 0.5, z + h * 0.45), 'steel', bevel=0.01)
    _roof_kit(b, x, z, L, h)


def cap_b(b, m):
    """Extended Carrier Module: ribbed shelter with side door, roof vents and a rear ladder."""
    x, z, L, w, h = _module_box(b, m, 3.2, 1.62)
    for side in (-1, 1):
        y = side * (w / 2 + 0.012)
        for k in range(9):
            b.box('rib', (0.05, 0.035, h - 0.18), (x - L / 2 + 0.2 + k * (L - 0.4) / 8, y, z + h / 2), 'paint', bevel=0.012)
        b.box('rail', (L - 0.1, 0.04, 0.06), (x, y, z + h - 0.08), 'paint_dark', bevel=0.01)
        for cx in (x - L / 2 + 0.12, x + L / 2 - 0.12):
            for cz in (z + 0.08, z + h - 0.08):
                b.box('corner', (0.16, 0.06, 0.16), (cx, y, cz), 'gunmetal', bevel=0.012)
    y = -(w / 2 + 0.03)
    b.box('door', (0.82, 0.05, h * 0.82), (x - 0.35, y, z + h * 0.46), 'paint', bevel=0.02)
    b.box('door-window', (0.42, 0.02, 0.32), (x - 0.35, y - 0.02, z + h * 0.72), 'glass', bevel=0.02)
    b.box('door-handle', (0.04, 0.05, 0.2), (x - 0.02, y - 0.03, z + h * 0.46), 'steel', bevel=0.01)
    _roof_kit(b, x, z, L, h)
    lx = x - L / 2 - 0.04
    for yy in (-0.62, -0.28):
        b.box('ladder-rail', (0.03, 0.03, h * 0.92), (lx, yy, z + h * 0.46), 'steel', bevel=0.006)
    for k in range(6):
        b.box('rung', (0.03, 0.34, 0.025), (lx, -0.45, z + 0.12 + k * h * 0.15), 'steel', bevel=0.005)


def cap_c(b, m):
    """Compact Passenger Bay: open bay with benches under canvas bows."""
    x, z = m.deck
    L, w = min(2.0, m.deck_size[0]), min(2.1, m.deck_size[1])
    b.box('tub', (L, w, 0.5), (x, 0, z + 0.25), 'paint', bevel=0.04)
    for side in (-1, 1):
        b.box('bench', (L * 0.85, 0.36, 0.08), (x, side * (w / 2 - 0.3), z + 0.62), 'paint_dark', bevel=0.02)
    for k in range(4):
        px = x - L / 2 + 0.2 + k * (L - 0.4) / 3
        b.tube('bow', [(px, -w / 2 + 0.05, z + 0.5), (px, -w / 2 + 0.1, z + 1.3), (px, 0, z + 1.55), (px, w / 2 - 0.1, z + 1.3), (px, w / 2 - 0.05, z + 0.5)], 0.02, 'steel')
    b.tube('canvas-roll', [(x - L / 2 + 0.15, -w / 2 + 0.1, z + 1.35), (x + L / 2 - 0.15, -w / 2 + 0.1, z + 1.35)], 0.09, 'canvas', smooth=False)
    b.box('canvas-top', (L * 0.55, w * 0.9, 0.05), (x + L * 0.2, 0, z + 1.53), 'canvas', bevel=0.02)


def cap_d(b, m):
    """High-Capacity Hull: the biggest module, with roof hatches, ladder and two window rows."""
    x, z, L, w, h = _module_box(b, m, 3.6, 1.9)
    _windows(b, x, z, L, w, h, 4)
    for side in (-1, 1):
        b.box('stripe', (L - 0.1, 0.02, 0.06), (x, side * (w / 2 + 0.01), z + h * 0.3), 'paint_dark', bevel=0.005)
    for dx in (-0.3, 0.25):
        b.cyl('hatch', 0.3, 0.07, (x + dx * L, 0, z + h + 0.035), 'paint_dark', verts=28, bevel=0.01)
    lx = x - L / 2 - 0.04
    for yy in (0.3, 0.64):
        b.box('ladder-rail', (0.03, 0.03, h), (lx, yy, z + h / 2), 'steel', bevel=0.006)
    for k in range(7):
        b.box('rung', (0.03, 0.34, 0.025), (lx, 0.47, z + 0.15 + k * h * 0.13), 'steel', bevel=0.005)


def cap_e(b, m):
    """Crew Compartment Insert: medium cabin with a wide sliding door and a window strip."""
    x, z, L, w, h = _module_box(b, m, 2.4, 1.5)
    y = -(w / 2 + 0.02)
    b.box('door-track', (L * 0.8, 0.04, 0.05), (x, y, z + h - 0.12), 'gunmetal', bevel=0.01)
    b.box('sliding-door', (0.95, 0.04, h * 0.85), (x + 0.3, y - 0.01, z + h * 0.46), 'paint', bevel=0.02)
    b.box('door-handle', (0.04, 0.05, 0.18), (x - 0.12, y - 0.04, z + h * 0.46), 'steel', bevel=0.01)
    b.box('strip-window', (L * 0.85, 0.02, 0.22), (x, w / 2 + 0.01, z + h * 0.7), 'glass', bevel=0.015)
    b.box('strip-window', (0.6, 0.02, 0.22), (x - 0.65, y - 0.01, z + h * 0.7), 'glass', bevel=0.015)
    _roof_kit(b, x, z, L, h)


def cap_f(b, m):
    """Protected Personnel Module: armoured module with bolted tiles and vision blocks."""
    x, z, L, w, h = _module_box(b, m, 2.6, 1.5, mat='paint_dark')
    for side in (-1, 1):
        y = side * (w / 2 + 0.04)
        for k in range(3):
            for r in range(2):
                tx, tz = x - L / 2 + (k + 0.5) * L / 3, z + (r + 0.5) * h / 2
                b.box('tile', (L / 3 - 0.06, 0.07, h / 2 - 0.06), (tx, y, tz), 'paint_light', bevel=0.02)
                b.cyl('bolt', 0.022, 0.02, (tx - L / 6 + 0.1, y + side * 0.04, tz + h / 4 - 0.1), 'gunmetal', rot=(PI / 2, 0, 0), verts=6, bevel=0)
        for k in range(3):
            b.box('vision-block', (0.16, 0.04, 0.1), (x - L / 2 + (k + 0.5) * L / 3, y + side * 0.04, z + h * 0.78), 'glass', bevel=0.01)
    b.box('roof-plate', (L + 0.08, w + 0.08, 0.08), (x, 0, z + h + 0.04), 'paint_light', bevel=0.02)


def cap_g(b, m):
    """Light Utility Hull: tubular frame with a part-rolled canvas cover and a light floor."""
    x, z = m.deck
    L, w, h = min(2.6, m.deck_size[0]), min(2.1, m.deck_size[1]), 1.35
    b.box('floor', (L, w, 0.08), (x, 0, z + 0.04), 'paint', bevel=0.015)
    for px in (x - L / 2 + 0.05, x, x + L / 2 - 0.05):
        b.tube('hoop', [(px, -w / 2 + 0.04, z + 0.08), (px, -w / 2 + 0.04, z + h), (px, w / 2 - 0.04, z + h), (px, w / 2 - 0.04, z + 0.08)], 0.03, 'paint_dark', smooth=False)
    for side in (-1, 1):
        b.tube('rail', [(x - L / 2 + 0.05, side * (w / 2 - 0.04), z + h), (x + L / 2 - 0.05, side * (w / 2 - 0.04), z + h)], 0.025, 'paint_dark', smooth=False)
        b.tube('rail', [(x - L / 2 + 0.05, side * (w / 2 - 0.04), z + 0.6), (x + L / 2 - 0.05, side * (w / 2 - 0.04), z + 0.6)], 0.02, 'paint_dark', smooth=False)
    b.box('canvas', (L * 0.55, w - 0.02, 0.04), (x + L * 0.22, 0, z + h + 0.03), 'canvas', bevel=0.015)
    b.tube('canvas-roll', [(x - 0.08, -w / 2 + 0.05, z + h + 0.1), (x - 0.08, w / 2 - 0.05, z + h + 0.1)], 0.1, 'canvas', smooth=False)


# ---------------------------------------------------------------- MOBILITY

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


# ---------------------------------------------------------------- FIREPOWER

def _ring(b, at, r, h=0.14):
    x, y, z = at
    b.cyl('race-ring', r * 1.08, 0.08, (x, y, z + 0.04), 'gunmetal', verts=48, bevel=0.01)
    b.cyl('turret-base', r, h, (x, y, z + 0.08 + h / 2), 'paint', verts=48, bevel=0.03)
    return z + 0.08 + h


def _barrel(b, start, length, r, mat='gunmetal', muzzle=True):
    x, y, z = start
    b.cyl('barrel', r, length, (x + length / 2, y, z), mat, rot=(0, PI / 2, 0), verts=24, bevel=0.005)
    if muzzle:
        b.cyl('muzzle-brake', r * 1.6, length * 0.08, (x + length, y, z), 'black', rot=(0, PI / 2, 0), verts=24, bevel=0.01)


def _mg(b, at, length=0.9):
    x, y, z = at
    b.box('receiver', (0.5, 0.12, 0.14), (x, y, z), 'black', bevel=0.015)
    _barrel(b, (x + 0.25, y, z + 0.02), length, 0.022, 'black', muzzle=False)
    b.box('ammo-can', (0.22, 0.12, 0.16), (x - 0.05, y - 0.14, z - 0.06), 'paint_dark', bevel=0.015)


def _sight(b, at, size=(0.3, 0.26, 0.24)):
    x, y, z = at
    b.box('sight', size, at, 'paint_dark', bevel=0.03)
    for dy in (-0.06, 0.06):
        b.cyl('sight-glass', 0.045, 0.02, (x + size[0] / 2 + 0.005, y + dy, z), 'glass', rot=(0, PI / 2, 0), verts=20)


def _smoke(b, at, side):
    x, y, z = at
    for k in range(3):
        b.cyl('smoke', 0.045, 0.22, (x, y + side * k * 0.1, z + k * 0.02), 'gunmetal', rot=(side * -0.6, 0.5, 0), verts=12)


def fp_a(b, m):
    """Defensive Weapon Station: open ring mount with a curved gun shield and a pintle machine gun."""
    x, y, z = m.roof
    top = _ring(b, m.roof, 0.5, 0.1)
    for k in range(9):
        a = -0.7 + k * 0.175
        b.box('shield', (0.05, 0.2, 0.55), (x + math.cos(a) * 0.52, y + math.sin(a) * 0.52, top + 0.27), 'paint', rot=(0, 0, a), bevel=0.01)
    b.cyl('pintle', 0.04, 0.4, (x + 0.2, y, top + 0.2), 'gunmetal', verts=16)
    _mg(b, (x + 0.25, y, top + 0.45), 1.0)


def fp_b(b, m):
    """Medium Weapon Station: remote turret box with a medium gun and a sight head."""
    x, y, z = m.roof
    top = _ring(b, m.roof, 0.45)
    b.box('cradle', (0.95, 0.7, 0.42), (x, y, top + 0.21), 'paint', bevel=0.06)
    _barrel(b, (x + 0.45, y + 0.12, top + 0.24), 1.3, 0.04)
    _sight(b, (x - 0.05, y - 0.32, top + 0.55))
    b.box('ammo-box', (0.45, 0.16, 0.3), (x - 0.1, y + 0.45, top + 0.2), 'paint_dark', bevel=0.02)
    _smoke(b, (x - 0.35, y - 0.42, top + 0.3), -1)


def fp_c(b, m):
    """Heavy Weapon Station: two-crew turret with a long cannon, mantlet, hatches and smoke dischargers."""
    x, y, z = m.roof
    top = _ring(b, m.roof, 0.85, 0.1)
    b.wedge('turret', [(-0.95, 0), (0.75, 0), (1.05, 0.22), (0.85, 0.55), (-0.85, 0.6), (-1.1, 0.35)], 1.6, (x, y, top), 'paint', bevel=0.06, segments=3)
    b.box('mantlet', (0.35, 0.5, 0.36), (x + 1.05, y, top + 0.3), 'paint_dark', bevel=0.05)
    _barrel(b, (x + 1.2, y, top + 0.3), 2.4, 0.07)
    b.cyl('fume-extractor', 0.1, 0.4, (x + 2.2, y, top + 0.3), 'gunmetal', rot=(0, PI / 2, 0), verts=24, bevel=0.02)
    for dy in (-0.42, 0.38):
        b.cyl('hatch', 0.26, 0.06, (x - 0.35, y + dy, top + 0.62), 'paint_dark', verts=28, bevel=0.01)
    _sight(b, (x + 0.3, y - 0.55, top + 0.72))
    for side in (-1, 1):
        _smoke(b, (x + 0.5, y + side * 0.72, top + 0.42), side)
    b.box('bustle', (0.5, 1.3, 0.4), (x - 1.15, y, top + 0.3), 'paint_light', bevel=0.04)


def fp_f(b, m):
    """Stabilized Weapon Suite: compact turret, stabilised cannon, coaxial gun and a panoramic sight."""
    x, y, z = m.roof
    top = _ring(b, m.roof, 0.7, 0.1)
    b.wedge('turret', [(-0.75, 0), (0.6, 0), (0.85, 0.2), (0.65, 0.45), (-0.7, 0.48)], 1.35, (x, y, top), 'paint', bevel=0.05, segments=3)
    b.box('gyro-housing', (0.4, 0.4, 0.3), (x + 0.75, y + 0.15, top + 0.25), 'paint_dark', bevel=0.04)
    _barrel(b, (x + 0.95, y + 0.15, top + 0.25), 1.9, 0.05)
    _barrel(b, (x + 0.95, y - 0.2, top + 0.2), 0.5, 0.02, 'black', muzzle=False)
    b.cyl('pano-sight', 0.14, 0.35, (x - 0.2, y - 0.4, top + 0.65), 'paint_dark', verts=24, bevel=0.02)
    b.box('pano-head', (0.26, 0.24, 0.18), (x - 0.2, y - 0.4, top + 0.9), 'paint_dark', bevel=0.03)
    b.box('pano-glass', (0.02, 0.18, 0.1), (x - 0.06, y - 0.4, top + 0.9), 'glass', bevel=0.01)
    _smoke(b, (x + 0.35, y + 0.6, top + 0.35), 1)


def fp_g(b, m):
    """Dual-Purpose Mount: remote station with a gun and a twin missile launcher pod."""
    x, y, z = m.roof
    top = _ring(b, m.roof, 0.45)
    b.box('cradle', (0.8, 0.55, 0.38), (x, y - 0.1, top + 0.19), 'paint', bevel=0.05)
    _barrel(b, (x + 0.4, y - 0.05, top + 0.22), 1.0, 0.035)
    b.box('launcher-arm', (0.12, 0.12, 0.35), (x - 0.05, y + 0.38, top + 0.3), 'gunmetal', bevel=0.02)
    for dz in (0.0, 0.26):
        b.box('missile-tube', (1.15, 0.22, 0.22), (x + 0.1, y + 0.52, top + 0.48 + dz), 'paint_light', bevel=0.03)
        b.cyl('tube-cap', 0.08, 0.02, (x + 0.68, y + 0.52, top + 0.48 + dz), 'black', rot=(0, PI / 2, 0), verts=20)
    _sight(b, (x - 0.15, y - 0.42, top + 0.5), (0.24, 0.2, 0.2))


def fp_d(b, m):
    """Remote Defensive Mount: small remote machine-gun mount with a camera block."""
    x, y, z = m.roof2
    b.cyl('base', 0.2, 0.12, (x, y, z + 0.06), 'gunmetal', verts=28, bevel=0.01)
    b.box('yoke', (0.3, 0.32, 0.26), (x, y, z + 0.25), 'paint', bevel=0.03)
    _mg(b, (x + 0.1, y + 0.05, z + 0.42), 0.75)
    _sight(b, (x - 0.02, y - 0.22, z + 0.4), (0.2, 0.14, 0.16))


def fp_e(b, m):
    """Light Weapon Mount: pintle-mounted light machine gun with a folding shield."""
    x, y, z = m.roof2
    b.cyl('socket', 0.08, 0.1, (x, y, z + 0.05), 'gunmetal', verts=20)
    b.cyl('pintle', 0.035, 0.55, (x, y, z + 0.37), 'gunmetal', verts=16)
    _mg(b, (x + 0.08, y, z + 0.68), 0.7)
    b.box('shield', (0.04, 0.42, 0.3), (x + 0.32, y, z + 0.62), 'paint', bevel=0.01)


# ---------------------------------------------------------------- PROTECTION

def _side_panels(b, m, layers, thick, tiles, mat):
    x0, x1, z0, z1, hw = m.side
    for side in _sides(m):
        for layer in range(layers):
            off = hw + 0.04 + thick / 2 + layer * (thick + 0.03)
            for k in range(tiles):
                w = (x1 - x0) / tiles
                cx = x0 + (k + 0.5) * w + (0.15 if layer else 0)
                b.box('panel', (w - 0.05, thick, (z1 - z0) * (0.92 - layer * 0.12)), (cx, side * off, (z0 + z1) / 2), mat if layer == 0 else 'paint_dark', bevel=0.02)
                for zz in (z0 + 0.1, z1 - 0.1):
                    for xx in (cx - w / 2 + 0.12, cx + w / 2 - 0.12):
                        b.cyl('bolt', 0.024, 0.03, (xx, side * (off + thick / 2 + 0.01), zz), 'gunmetal', rot=(PI / 2, 0, 0), verts=6, bevel=0)


def pro_a(b, m):
    """Layered Protection Kit: two offset layers of thick panels."""
    _side_panels(b, m, 2, 0.07, 3, 'paint_light')


def pro_c(b, m):
    """Light Armour Panels: one thin layer of large bolted panels."""
    _side_panels(b, m, 1, 0.035, 2, 'paint')


def pro_e(b, m):
    """Modular Side Protection: slat armour (bar grid) standing off the hull on posts."""
    x0, x1, z0, z1, hw = m.side
    for side in _sides(m):
        y = side * (hw + 0.3)
        for k in range(6):
            z = z0 + 0.05 + k * (z1 - z0 - 0.1) / 5
            b.box('slat', (x1 - x0, 0.03, 0.06), ((x0 + x1) / 2, y, z), 'gunmetal', bevel=0.008)
        for k in range(int((x1 - x0) / 0.6) + 1):
            x = x0 + k * 0.6
            b.box('post', (0.05, 0.05, z1 - z0), (x, y, (z0 + z1) / 2), 'paint_dark', bevel=0.008)
            b.box('stand-off', (0.04, 0.3, 0.04), (x, side * (hw + 0.15), z1 - 0.1), 'paint_dark', bevel=0.006)


def pro_b(b, m):
    """Composite Armour Set: thick composite tiles over the front face with a window guard."""
    x, z0, z1, hw = m.front_face
    rows = 2
    for r in range(rows):
        for k in range(4):
            w = hw * 2 / 4
            b.box('composite-tile', (0.12, w - 0.04, (z1 - z0) / rows - 0.04), (x + 0.12, -hw + (k + 0.5) * w, z0 + (r + 0.5) * (z1 - z0) / rows), 'paint_light', bevel=0.025)
    for k in range(5):
        b.box('guard-bar', (0.03, 0.03, 0.55), (x + 0.22, -0.8 + k * 0.4, z1 + 0.35), 'steel', bevel=0.005)
    b.box('guard-frame', (0.05, 1.8, 0.05), (x + 0.22, 0, z1 + 0.62), 'steel', bevel=0.008)


def pro_d(b, m):
    """Reinforced Crew Cell: heavy roof plate with raised edges and armoured visors over the windows."""
    x0, x1, z, hw = m.roof_span
    b.box('roof-plate', (x1 - x0, hw * 2, 0.1), ((x0 + x1) / 2, 0, z + 0.06), 'paint_light', bevel=0.03)
    for side in _sides(m):
        b.box('edge', (x1 - x0, 0.08, 0.16), ((x0 + x1) / 2, side * (hw - 0.04), z + 0.18), 'paint_dark', bevel=0.02)
        b.box('visor', (min(1.0, x1 - x0), 0.25, 0.05), ((x0 + x1) / 2, side * (hw + 0.1), z - 0.15), 'paint_light', rot=(side * 0.5, 0, 0), bevel=0.015)
    for k in range(int((x1 - x0) / 0.35)):
        for side in _sides(m):
            b.cyl('bolt', 0.022, 0.03, (x0 + 0.15 + k * 0.35, side * (hw - 0.15), z + 0.12), 'gunmetal', verts=6, bevel=0)


def pro_g(b, m):
    """Lightweight Protective Shell: a curved overhead canopy on legs with a mesh panel."""
    x0, x1, z, hw = m.roof_span
    L = x1 - x0
    cx = (x0 + x1) / 2
    for k in range(9):
        a = -0.9 + k * 0.225
        b.box('shell-strip', (L, 0.32, 0.03), (cx, math.sin(a) * hw, z + 0.55 + math.cos(a) * 0.25 - 0.25), 'paint', rot=(a, 0, 0), bevel=0.01)
    for side in _sides(m):
        for x in (x0 + 0.1, x1 - 0.1):
            b.box('leg', (0.05, 0.05, 0.5), (x, side * hw * 0.8, z + 0.25), 'paint_dark', bevel=0.008)
    b.box('mesh', (L * 0.4, 0.6, 0.02), (cx, 0, z + 0.58), 'black', bevel=0.004)


def pro_f(b, m):
    """Blast Protection Kit: a V-shaped belly plate with bolted rails under the hull."""
    x0, x1, z, hw = m.belly
    L = x1 - x0
    for side in _sides(m) if not _card(m) else (-1, 1):
        b.box('v-plate', (L, hw * 1.05, 0.06), ((x0 + x1) / 2, side * hw * 0.45, z - 0.12), 'paint_dark', rot=(side * 0.42, 0, 0), bevel=0.02)
    b.box('keel', (L, 0.08, 0.1), ((x0 + x1) / 2, 0, z - 0.33), 'gunmetal', bevel=0.02)
    for k in range(int(L / 0.6) + 1):
        b.box('rib', (0.05, hw * 1.7, 0.05), (x0 + k * 0.6, 0, z - 0.02), 'paint', bevel=0.008)


# ---------------------------------------------------------------- COMMS

def _whip(b, base, height, lean=0.0, sway=1.0):
    """Spring-mounted whip. On the card mount whips are shortened so the radio set stays legible."""
    if getattr(b, 'card', False):
        height *= 0.4
    x, y, z = base
    b.cyl('ant-base', 0.08, 0.1, (x, y, z + 0.05), 'black', verts=24)
    for k in range(5):
        b.cyl('spring', 0.045, 0.025, (x, y, z + 0.14 + k * 0.032), 'steel', verts=20)
    b.cyl('ferrule', 0.022, 0.2, (x, y, z + 0.4), 'black', verts=16)
    top = (x + lean * height, y, z + 0.5 + height)
    b.tube('whip', [(x, y, z + 0.5), (x + lean * height * 0.4 * sway, y, z + 0.5 + height * 0.5), top], 0.008, 'black')
    b.sphere('tip', 0.018, top, 'black')


def _radio_box(b, at, size=(0.42, 0.3, 0.22), fins=5):
    x, y, z = at
    b.box('radio', size, (x, y, z + size[2] / 2), 'paint_dark', bevel=0.025)
    for k in range(fins):
        b.box('fin', (size[0] * 0.9, 0.015, 0.04), (x, y - size[1] / 2 + 0.03 + k * (size[1] - 0.06) / max(1, fins - 1), z + size[2] + 0.02), 'gunmetal', bevel=0.004)


def com_a(b, m):
    """Convoy Radio Suite: one tall whip and a finned radio set."""
    x, y, z = m.antenna_left
    _whip(b, (x, y, z), 2.4, -0.04)
    _radio_box(b, (x + 0.35, y + 0.15, z))


def com_c(b, m):
    """Compact Communications Set: a short blade antenna and a small handset box."""
    x, y, z = m.antenna_left
    b.box('blade', (0.18, 0.03, 0.55), (x, y, z + 0.3), 'black', bevel=0.01)
    b.box('blade-foot', (0.26, 0.12, 0.05), (x, y, z + 0.025), 'black', bevel=0.01)
    _radio_box(b, (x + 0.3, y + 0.1, z), (0.26, 0.2, 0.16), 3)


def com_f(b, m):
    """Secure Tactical Radio: whip, crypto unit beside the radio and a coiled handset cable."""
    x, y, z = m.antenna_left
    _whip(b, (x, y, z), 1.9, -0.03)
    _radio_box(b, (x + 0.35, y + 0.15, z), (0.38, 0.26, 0.2), 4)
    b.box('crypto', (0.22, 0.2, 0.18), (x + 0.35, y + 0.42, z + 0.09), 'black', bevel=0.02)
    b.box('crypto-key', (0.04, 0.06, 0.04), (x + 0.46, y + 0.42, z + 0.14), 'yellow', bevel=0.005)
    coil = [(x + 0.2 + math.cos(t) * 0.03, y + 0.3 + t * 0.008, z + 0.2 + math.sin(t) * 0.03) for t in [i * 0.6 for i in range(30)]]
    b.tube('coil-cable', coil, 0.008, 'black')


def com_b(b, m):
    """Extended Radio Network: two tall whips on a cross bar and a junction box."""
    x, y, z = m.antenna_right
    for dx in (-0.3, 0.3):
        _whip(b, (x + dx, y, z), 2.7, dx * 0.06)
    b.box('cross-bar', (0.75, 0.08, 0.06), (x, y, z + 0.03), 'gunmetal', bevel=0.01)
    _radio_box(b, (x, y - 0.3, z), (0.5, 0.3, 0.24), 6)


def com_g(b, m):
    """Dual-Channel Radio Package: two medium whips on a twin base and a stacked dual radio."""
    x, y, z = m.antenna_right
    for dy in (-0.12, 0.12):
        _whip(b, (x, y + dy, z), 1.6, 0.03)
    b.box('twin-base', (0.2, 0.42, 0.06), (x, y, z + 0.03), 'gunmetal', bevel=0.01)
    _radio_box(b, (x + 0.35, y - 0.2, z), (0.36, 0.3, 0.16), 4)
    _radio_box(b, (x + 0.35, y - 0.2, z + 0.2), (0.36, 0.3, 0.16), 4)


def com_d(b, m):
    """Relay Communications Suite: telescopic mast with a relay panel head and a radio rack."""
    x, y, z = m.radio_mast
    for k, (r, h) in enumerate(((0.07, 1.2), (0.05, 1.0), (0.035, 0.8))):
        b.cyl('mast', r, h, (x, y, z + sum(hh for _, hh in ((0.07, 1.2), (0.05, 1.0), (0.035, 0.8))[:k]) + h / 2), 'gunmetal' if k == 0 else 'steel', verts=24)
    top = z + 3.0
    b.box('relay-panel', (0.08, 0.6, 0.45), (x + 0.1, y, top + 0.1), 'paint_light', bevel=0.02)
    b.box('relay-panel', (0.08, 0.6, 0.45), (x - 0.1, y, top + 0.1), 'paint_light', rot=(0, 0, PI), bevel=0.02)
    b.tube('feeder', [(x, y, z + 0.2), (x + 0.04, y + 0.05, z + 1.6), (x, y, top - 0.1)], 0.012, 'cable')
    _radio_box(b, (x + 0.35, y, z), (0.5, 0.36, 0.3), 6)


def com_e(b, m):
    """Long-Range Radio Set: armoured radio with fins, two spring-mounted whips and a stowed mast."""
    x, y, z = m.radio_mast
    _radio_box(b, (x + 0.2, y - 0.1, z), (0.7, 0.6, 0.3), 8)
    for dy, h, lean in ((-0.35, 3.0, -0.05), (0.35, 2.4, 0.04)):
        _whip(b, (x - 0.25, y + dy, z), h, lean)
    b.cyl('mast-1', 0.05, 1.0, (x - 0.45, y, z + 0.5), 'paint_dark', verts=24)
    b.cyl('mast-2', 0.035, 0.7, (x - 0.45, y, z + 1.35), 'steel', verts=24)
    b.box('mast-head', (0.18, 0.08, 0.05), (x - 0.45, y, z + 1.72), 'black', bevel=0.01)


# ---------------------------------------------------------------- SITUATIONAL AWARENESS

def _sensor_ball(b, at, r=0.16):
    x, y, z = at
    b.sphere('sensor-ball', r, at, 'paint_dark')
    b.cyl('ball-window', r * 0.45, 0.02, (x + r * 0.95, y - r * 0.25, z), 'glass', rot=(0, PI / 2, 0), verts=20)
    b.cyl('ball-window', r * 0.3, 0.02, (x + r * 0.95, y + r * 0.35, z), 'glass', rot=(0, PI / 2, 0), verts=20)


def sa_a(b, m):
    """Crew Observation Suite: commander's cupola ring with six vision blocks."""
    x, y, z = m.optics
    b.cyl('cupola', 0.36, 0.22, (x, y, z + 0.11), 'paint', verts=36, bevel=0.03)
    for k in range(6):
        a = 2 * PI * k / 6
        b.box('vision-block', (0.08, 0.16, 0.1), (x + math.cos(a) * 0.36, y + math.sin(a) * 0.36, z + 0.14), 'glass', rot=(0, 0, a), bevel=0.01)
    b.cyl('cupola-hatch', 0.3, 0.06, (x, y, z + 0.25), 'paint_dark', verts=32, bevel=0.01)


def sa_c(b, m):
    """Basic Observation Set: one day camera on a short bracket."""
    x, y, z = m.optics
    b.box('bracket', (0.08, 0.08, 0.35), (x, y, z + 0.17), 'gunmetal', bevel=0.01)
    b.box('camera', (0.32, 0.16, 0.16), (x + 0.05, y, z + 0.42), 'paint_dark', bevel=0.03)
    b.cyl('lens', 0.06, 0.04, (x + 0.22, y, z + 0.42), 'glass', rot=(0, PI / 2, 0), verts=24)
    b.box('sun-hood', (0.12, 0.18, 0.02), (x + 0.24, y, z + 0.51), 'black', bevel=0.005)


def sa_e(b, m):
    """Crew Vision Enhancement: paired thermal and day cameras with an infrared illuminator."""
    x, y, z = m.optics
    b.box('pan-head', (0.24, 0.5, 0.12), (x, y, z + 0.18), 'gunmetal', bevel=0.02)
    b.cyl('post', 0.05, 0.12, (x, y, z + 0.06), 'gunmetal', verts=16)
    for dy, mat in ((-0.15, 'paint_dark'), (0.15, 'paint')):
        b.box('camera', (0.34, 0.16, 0.18), (x + 0.05, y + dy, z + 0.34), mat, bevel=0.03)
        b.cyl('lens', 0.065, 0.04, (x + 0.23, y + dy, z + 0.34), 'glass', rot=(0, PI / 2, 0), verts=24)
    b.box('ir-lamp', (0.12, 0.14, 0.1), (x + 0.1, y, z + 0.5), 'black', bevel=0.02)
    b.box('ir-lens', (0.02, 0.1, 0.07), (x + 0.17, y, z + 0.5), 'red', bevel=0.005)


def sa_b(b, m):
    """Multi-Sensor Awareness Suite: medium mast with a sensor ball and a flat radar panel."""
    x, y, z = m.sensor_mast
    b.box('mast-foot', (0.3, 0.3, 0.08), (x, y, z + 0.04), 'gunmetal', bevel=0.01)
    b.cyl('mast', 0.06, 1.3, (x, y, z + 0.73), 'gunmetal', verts=24)
    _sensor_ball(b, (x, y, z + 1.55))
    b.box('radar-panel', (0.06, 0.55, 0.38), (x - 0.05, y, z + 1.15), 'paint_light', bevel=0.02)


def sa_d(b, m):
    """Panoramic Sensor Mast: tall telescopic mast with a 360-degree sensor head and guy lines."""
    x, y, z = m.sensor_mast
    h = 0.0
    for k, (r, seg) in enumerate(((0.09, 1.1), (0.07, 1.0), (0.05, 0.9))):
        b.cyl('mast', r, seg, (x, y, z + h + seg / 2), 'gunmetal' if k == 0 else 'steel', verts=24)
        h += seg
    b.cyl('head', 0.28, 0.32, (x, y, z + h + 0.16), 'paint_dark', verts=36, bevel=0.03)
    for k in range(8):
        a = 2 * PI * k / 8
        b.box('head-window', (0.02, 0.12, 0.14), (x + math.cos(a) * 0.285, y + math.sin(a) * 0.285, z + h + 0.17), 'glass', rot=(0, 0, a), bevel=0.005)
    b.cyl('head-cap', 0.3, 0.04, (x, y, z + h + 0.34), 'black', verts=36)
    for dy in (-0.6, 0.6):
        b.tube('guy', [(x, y, z + h * 0.7), (x - 0.4, y + dy, z + 0.02)], 0.006, 'cable', smooth=False)


def _pods(m):
    if _card(m):
        return m.corners
    return m.corners


def sa_f(b, m):
    """Integrated Detection Suite: four domed sensor pods, one at each roof corner."""
    for x, y, z in _pods(m):
        b.box('pod-base', (0.24, 0.24, 0.08), (x, y, z + 0.04), 'paint_dark', bevel=0.02)
        b.sphere('dome', 0.13, (x, y, z + 0.1), 'paint_light', scale=(1, 1, 0.8))
        b.cyl('dome-window', 0.05, 0.02, (x + 0.11, y, z + 0.14), 'glass', rot=(0, PI / 2, 0), verts=16)


def sa_g(b, m):
    """Distributed Observation Kit: four small cameras on corner brackets and a data hub."""
    xs = [c[0] for c in m.corners]
    for x, y, z in _pods(m):
        out = 1 if x >= sum(xs) / len(xs) else -1
        b.box('bracket', (0.06, 0.06, 0.25), (x, y, z + 0.12), 'gunmetal', bevel=0.008)
        b.box('mini-cam', (0.18, 0.1, 0.1), (x + out * 0.04, y, z + 0.28), 'paint_dark', bevel=0.02)
        b.cyl('mini-lens', 0.035, 0.03, (x + out * 0.14, y, z + 0.28), 'glass', rot=(0, PI / 2, 0), verts=16)
    cx = sum(xs) / len(xs)
    cz = m.corners[0][2]
    b.box('data-hub', (0.3, 0.24, 0.14), (cx, 0, cz + 0.07), 'black', bevel=0.02)


# ---------------------------------------------------------------- ACCESSORIES

def acc_f(b, m):
    """Recovery Winch Package: drum winch between side plates, motor, roller fairlead, hook and shackles."""
    fx, fz = m.bumper
    x0 = fx + 0.18
    for y in (-0.42, 0.42):
        b.box('plate', (0.36, 0.05, 0.42), (x0, y, fz), 'paint_dark', bevel=0.02)
    b.cyl('drum', 0.13, 0.78, (x0, 0, fz), 'gunmetal', rot=(PI / 2, 0, 0), verts=40)
    for k in range(14):
        b.cyl('wrap', 0.155, 0.045, (x0, -0.36 + k * 0.0555, fz), 'cable', rot=(PI / 2, 0, 0), verts=32, bevel=0.012)
    b.cyl('motor', 0.12, 0.42, (x0, -0.66, fz), 'black', rot=(PI / 2, 0, 0), verts=32, bevel=0.02)
    b.box('gearbox', (0.28, 0.2, 0.3), (x0, 0.56, fz), 'paint_dark', bevel=0.03)
    b.box('clutch-lever', (0.03, 0.03, 0.16), (x0 + 0.04, 0.62, fz + 0.2), 'yellow', bevel=0.006)
    lx = x0 + 0.24
    b.box('fairlead', (0.06, 0.6, 0.3), (lx, 0, fz), 'paint_dark', bevel=0.02)
    for z in (fz - 0.12, fz + 0.12):
        b.cyl('roller', 0.03, 0.4, (lx + 0.03, 0, z), 'steel', rot=(PI / 2, 0, 0), verts=20)
    b.tube('cable', [(x0 + 0.15, 0, fz), (lx + 0.06, 0, fz), (lx + 0.18, 0, fz - 0.08), (lx + 0.22, 0.2, fz - 0.2)], 0.011, 'cable')
    b.tube('hook', [(lx + 0.22, 0.2, fz - 0.2), (lx + 0.24, 0.24, fz - 0.3), (lx + 0.3, 0.3, fz - 0.33), (lx + 0.34, 0.33, fz - 0.26)], 0.02, 'yellow')
    for y in (-0.62, 0.62):
        b.tube('shackle', [(lx - 0.02, y, fz - 0.13), (lx + 0.1, y, fz - 0.2), (lx - 0.02, y, fz - 0.28)], 0.018, 'yellow')


def acc_c(b, m):
    """Mine-Route Accessory Kit: push arms with two banks of roller discs ahead of the vehicle."""
    fx, fz = m.bumper
    rx, rz = fx + 1.6, 0.42
    for y in (-0.75, 0.75):
        b.tube('push-arm', [(fx, y, fz), (fx + 0.8, y, (fz + rz) / 2 + 0.1), (rx, y, rz + 0.1)], 0.07, 'paint_dark', smooth=False)
        for k in range(6):
            b.cyl('roller-disc', 0.4, 0.07, (rx, y - 0.33 + k * 0.13, rz), 'gunmetal', rot=(PI / 2, 0, 0), verts=40, bevel=0.01)
            for t in range(10):
                a = 2 * PI * t / 10
                b.box('tooth', (0.06, 0.07, 0.05), (rx + math.cos(a) * 0.42, y - 0.33 + k * 0.13, rz + math.sin(a) * 0.42), 'gunmetal', rot=(0, -a, 0), bevel=0.008)
    b.cyl('roller-axle', 0.05, 2.2, (rx, 0, rz), 'steel', rot=(PI / 2, 0, 0), verts=20)
    b.box('cross-beam', (0.16, 1.7, 0.16), (fx + 0.8, 0, (fz + rz) / 2 + 0.1), 'paint_dark', bevel=0.02)
    for y in (-1.0, 1.0):
        b.box('marker-pole', (0.03, 0.03, 0.8), (rx, y * 1.05, rz + 0.5), 'yellow', bevel=0.005)


def acc_e(b, m):
    """Engineer Support Module: a curved dozer blade on push arms with hydraulic rams."""
    fx, fz = m.bumper
    bx = fx + 0.9
    for k in range(7):
        a = -0.5 + k * 0.18
        b.box('blade', (0.06, 2.6, 0.16), (bx - math.cos(a) * 0.4 + 0.4, 0, 0.55 + math.sin(a) * 0.45), 'paint', rot=(0, -a + PI / 2, 0), bevel=0.01)
    b.box('cutting-edge', (0.08, 2.6, 0.06), (bx + 0.06, 0, 0.2), 'steel', bevel=0.01)
    for y in (-1.3, 1.3):
        b.box('end-plate', (0.45, 0.04, 0.85), (bx - 0.05, y, 0.6), 'paint_dark', bevel=0.01)
    for y in (-0.7, 0.7):
        b.tube('push-arm', [(fx, y, fz - 0.1), (bx - 0.15, y, 0.5)], 0.06, 'paint_dark', smooth=False)
        b.tube('ram', [(fx, y * 0.6, fz + 0.15), (bx - 0.2, y * 0.6, 0.85)], 0.05, 'paint_dark', smooth=False)
        b.tube('ram-rod', [(fx + 0.4, y * 0.6, fz + 0.06), (bx - 0.2, y * 0.6, 0.85)], 0.025, 'steel', smooth=False)


def acc_a(b, m):
    """Recovery Accessory Pack: folded A-frame tow bar, snatch block and coiled tow ropes at the rear."""
    hx, hz = m.hitch
    x = hx - 0.08
    for y in (-0.45, 0.45):
        b.tube('a-frame', [(x, y, hz), (x - 0.05, 0.0, hz + 0.9)], 0.04, 'yellow', smooth=False)
    b.box('a-frame-eye', (0.1, 0.12, 0.1), (x - 0.05, 0, hz + 0.95), 'steel', bevel=0.02)
    for y in (-0.8, 0.8):
        ring = [(x - 0.06 + math.sin(2 * PI * t / 24) * 0.02, y + math.cos(2 * PI * t / 24) * 0.22, hz + 0.25 + math.sin(2 * PI * t / 24) * 0.22) for t in range(25)]
        for k in range(3):
            b.tube('rope-coil', [(px - k * 0.03, py, pz) for px, py, pz in ring], 0.025, 'canvas')
    b.box('snatch-block', (0.08, 0.2, 0.3), (x - 0.06, 0.0, hz + 0.3), 'yellow', bevel=0.03)
    b.cyl('sheave', 0.09, 0.06, (x - 0.1, 0.0, hz + 0.3), 'steel', rot=(0, PI / 2, 0), verts=24)


def acc_b(b, m):
    """Utility Trailer Module: two-wheel trailer with a drawbar, canvas cover and lights."""
    hx, hz = m.hitch
    tx = hx - 2.3 if not _card(m) else 0.0
    b.tube('drawbar', [(hx - 0.05, 0.0, hz), (tx + 1.0, 0.25, 0.75), (tx + 1.0, -0.25, 0.75), (hx - 0.05, 0.0, hz)], 0.045, 'paint_dark', smooth=False)
    b.box('body', (1.9, 1.75, 0.55), (tx, 0, 0.95), 'paint', bevel=0.04)
    b.box('canvas', (1.95, 1.8, 0.45), (tx, 0, 1.45), 'canvas', bevel=0.12, segments=3)
    for y in (-0.98, 0.98):
        tyre_and_wheel(b, 'trailer-wheel', (tx, y, 0.42), 0.42, 0.3, 0.25, 1 if y < 0 else -1)
        b.box('mudguard', (0.95, 0.34, 0.05), (tx, y, 0.9), 'paint_dark', bevel=0.01)
    for y in (-0.7, 0.7):
        b.box('tail', (0.04, 0.12, 0.08), (tx - 0.97, y, 0.85), 'red', bevel=0.01)
    b.box('jockey-wheel', (0.08, 0.08, 0.45), (tx + 1.0, 0.0, 0.45), 'gunmetal', bevel=0.01)


def _rack_frame(b, m, L=1.6, W=1.1):
    x, y, z = m.rack
    for dy in (-W / 2, W / 2):
        b.tube('rack-rail', [(x - L / 2, y + dy, z + 0.25), (x + L / 2, y + dy, z + 0.25)], 0.022, 'steel', smooth=False)
        for dx in (-L / 2, 0, L / 2):
            b.tube('rack-post', [(x + dx, y + dy, z + 0.02), (x + dx, y + dy, z + 0.25)], 0.018, 'steel', smooth=False)
    b.box('rack-floor', (L, W, 0.03), (x, y, z + 0.04), 'black', bevel=0.005)
    return x, y, z


def acc_d(b, m):
    """Field Support Pack: roof rack with a tool chest, jerrycans and a strapped canvas roll."""
    x, y, z = _rack_frame(b, m)
    b.box('tool-chest', (0.6, 0.45, 0.32), (x - 0.4, y + 0.2, z + 0.22), 'paint_dark', bevel=0.03)
    for k in range(3):
        b.box('jerrycan', (0.16, 0.34, 0.45), (x + 0.2 + k * 0.18, y - 0.25, z + 0.28), 'paint_light', bevel=0.03)
    b.cyl('canvas-roll', 0.15, 0.9, (x + 0.4, y + 0.25, z + 0.2), 'canvas', rot=(PI / 2, 0, 0), verts=28, bevel=0.03)


def acc_g(b, m):
    """Mission Equipment Rack: rack with hard cases, a folding ladder and marker poles."""
    x, y, z = _rack_frame(b, m)
    for k, (dx, dy) in enumerate(((-0.45, 0.2), (0.15, 0.2), (-0.15, -0.25))):
        b.box('hard-case', (0.5, 0.36, 0.22), (x + dx, y + dy, z + 0.16 + (0.22 if k == 2 else 0)), 'black', bevel=0.03)
        b.box('latch', (0.06, 0.38, 0.04), (x + dx + 0.12, y + dy, z + 0.2 + (0.22 if k == 2 else 0)), 'steel', bevel=0.005)
    for dy in (-0.5, -0.32):
        b.tube('ladder-rail', [(x - 0.75, y + dy, z + 0.32), (x + 0.75, y + dy, z + 0.32)], 0.016, 'steel', smooth=False)
    for k in range(7):
        b.tube('ladder-rung', [(x - 0.7 + k * 0.23, y - 0.5, z + 0.32), (x - 0.7 + k * 0.23, y - 0.32, z + 0.32)], 0.012, 'steel', smooth=False)
    for k in range(3):
        b.tube('marker-pole', [(x + 0.55, y - 0.1 + k * 0.08, z + 0.3), (x + 0.6, y - 0.1 + k * 0.08, z + 1.3)], 0.012, 'yellow' if k % 2 == 0 else 'red', smooth=False)


PARTS = {
    'CAP-A': cap_a, 'CAP-B': cap_b, 'CAP-C': cap_c, 'CAP-D': cap_d, 'CAP-E': cap_e, 'CAP-F': cap_f, 'CAP-G': cap_g,
    'MOB-A': mob_a, 'MOB-B': mob_b, 'MOB-C': mob_c, 'MOB-D': mob_d, 'MOB-E': mob_e, 'MOB-F': mob_f, 'MOB-G': mob_g,
    'FP-A': fp_a, 'FP-B': fp_b, 'FP-C': fp_c, 'FP-D': fp_d, 'FP-E': fp_e, 'FP-F': fp_f, 'FP-G': fp_g,
    'PRO-A': pro_a, 'PRO-B': pro_b, 'PRO-C': pro_c, 'PRO-D': pro_d, 'PRO-E': pro_e, 'PRO-F': pro_f, 'PRO-G': pro_g,
    'COM-A': com_a, 'COM-B': com_b, 'COM-C': com_c, 'COM-D': com_d, 'COM-E': com_e, 'COM-F': com_f, 'COM-G': com_g,
    'SA-A': sa_a, 'SA-B': sa_b, 'SA-C': sa_c, 'SA-D': sa_d, 'SA-E': sa_e, 'SA-F': sa_f, 'SA-G': sa_g,
    'ACC-A': acc_a, 'ACC-B': acc_b, 'ACC-C': acc_c, 'ACC-D': acc_d, 'ACC-E': acc_e, 'ACC-F': acc_f, 'ACC-G': acc_g,
}
