"""Capacity cards: one builder per card (see library.py for the builder contract)."""
from .common import PI


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
