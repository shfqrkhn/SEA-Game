"""Accessories cards: one builder per card (see library.py for the builder contract)."""
import math

from ..geo import tyre_and_wheel
from .common import PI, _card


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
