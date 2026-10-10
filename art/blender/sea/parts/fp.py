"""Firepower cards: one builder per card (see library.py for the builder contract)."""
import math

from .common import PI


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
