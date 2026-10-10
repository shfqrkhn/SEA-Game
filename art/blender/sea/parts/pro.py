"""Protection cards: one builder per card (see library.py for the builder contract)."""
import math

from .common import PI, _card, _sides


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
