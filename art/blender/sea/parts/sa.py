"""Situational awareness cards: one builder per card (see library.py for the builder contract)."""
import math

from .common import PI, _card


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
