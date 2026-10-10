"""SE_PROCESS cards (MPES §10.2): no vehicle geometry, so each card image is a machined process token.

The plaque's outline names the attribute it improves (hexagon SA, shield PRO, circle COM, square CAP,
octagon MOB) and a raised icon names the review, so all 21 tokens differ. Also the practice card TRAIN-CAP.
Icons are drawn in the plaque's (u, v) plane; the plaque faces the card camera.
"""
import math

from ..geo import Builder

PI = math.pi
FACE = -0.05  # y of the plaque's front face (the plaque faces -Y before turning to the camera)
STROKE = 0.028


def _p(u, v, lift=0.0):
    return (u, FACE - lift, v)


def _line(b, pts, r=STROKE, mat='yellow'):
    b.tube('icon', [_p(u, v, 0.02) for u, v in pts], r, mat, smooth=False)


def _curve(b, pts, r=STROKE, mat='yellow'):
    b.tube('icon', [_p(u, v, 0.02) for u, v in pts], r, mat)


def _arc(cx, cy, r, a0, a1, n=24):
    return [(cx + math.cos(a0 + (a1 - a0) * t / n) * r, cy + math.sin(a0 + (a1 - a0) * t / n) * r) for t in range(n + 1)]


def _dot(b, u, v, r=0.06, mat='yellow'):
    b.cyl('icon-dot', r, 0.05, _p(u, v, 0.02), mat, rot=(PI / 2, 0, 0), verts=24)


def _block(b, u, v, w, h, mat='yellow'):
    b.box('icon-block', (w, 0.05, h), _p(u, v, 0.02), mat, bevel=0.01)


ICONS = {
    'SE-A': lambda b: [_line(b, [(-0.2, y), (0.25, y)]) for y in (0.2, 0.0, -0.2)] + [_line(b, [(-0.36, y), (-0.32, y - 0.04), (-0.26, y + 0.05)], 0.02) for y in (0.2, 0.0, -0.2)],
    'SE-B': lambda b: (_line(b, [(-0.3, -0.22), (0.0, 0.3), (0.3, -0.22), (-0.3, -0.22)]), _line(b, [(0, 0.12), (0, -0.05)]), _dot(b, 0, -0.13, 0.035)),
    'SE-C': lambda b: (_curve(b, _arc(-0.1, 0, 0.18, 0, 2 * PI)), _curve(b, _arc(0.1, 0, 0.18, 0, 2 * PI))),
    'SE-D': lambda b: _line(b, [(-0.25, 0.0), (-0.07, -0.18), (0.27, 0.22)], 0.04),
    'SE-E': lambda b: (_curve(b, _arc(0, 0, 0.15, 0, 2 * PI)), [_block(b, math.cos(a) * 0.24, math.sin(a) * 0.24, 0.09, 0.09) for a in [k * PI / 4 for k in range(8)]]),
    'SE-F': lambda b: (_line(b, [(0, -0.28), (0, 0.22)]), _line(b, [(-0.3, 0.18), (0.3, 0.18)]), _curve(b, _arc(-0.27, 0.0, 0.1, PI, 2 * PI)), _curve(b, _arc(0.27, 0.0, 0.1, PI, 2 * PI)), _line(b, [(-0.15, -0.28), (0.15, -0.28)])),
    'SE-G': lambda b: (_curve(b, _arc(0, 0, 0.3, 0, 2 * PI)), _curve(b, _arc(0, 0, 0.18, 0, 2 * PI)), _dot(b, 0, 0)),
    'SE-H': lambda b: (_block(b, 0, 0.2, 0.22, 0.12), _block(b, -0.22, -0.2, 0.18, 0.12), _block(b, 0.22, -0.2, 0.18, 0.12), _line(b, [(0, 0.14), (0, 0.0), (-0.22, 0.0), (-0.22, -0.14)]), _line(b, [(0, 0.0), (0.22, 0.0), (0.22, -0.14)])),
    'SE-I': lambda b: (_line(b, [(0, 0.28), (0, -0.2)], 0.04), _line(b, [(-0.18, -0.02), (0, -0.25), (0.18, -0.02)], 0.04)),
    'SE-J': lambda b: (_line(b, [(-0.28, -0.18), (0.0, 0.0), (0.28, 0.18)]), _dot(b, -0.28, -0.18, 0.07), _dot(b, 0, 0, 0.07), _dot(b, 0.28, 0.18, 0.07)),
    'SE-K': lambda b: (_block(b, -0.13, 0, 0.22, 0.32), _block(b, 0.13, 0, 0.22, 0.32, 'steel'), _line(b, [(-0.04, 0.0), (0.04, 0.0)], 0.05)),
    'SE-L': lambda b: (_line(b, [(-0.2, -0.3), (-0.2, 0.3)], 0.03), _block(b, 0.02, 0.17, 0.4, 0.24)),
    'SE-M': lambda b: (_line(b, [(-0.28, -0.25), (0.28, -0.25), (-0.28, 0.25), (-0.28, -0.25)]), _curve(b, _arc(-0.28, -0.25, 0.18, 0, PI / 2), 0.018)),
    'SE-N': lambda b: (_block(b, 0, -0.08, 0.42, 0.3), _line(b, [(-0.21, 0.07), (0, 0.27), (0.21, 0.07)])),
    'SE-O': lambda b: (_line(b, [(-0.32, -0.1), (0.32, -0.1)], 0.04), [_line(b, [(u, -0.1), (u, 0.05 + (0.12 if k % 2 else 0))], 0.02) for k, u in enumerate((-0.24, -0.12, 0, 0.12, 0.24))]),
    'SE-P': lambda b: (_curve(b, _arc(0, 0, 0.24, 0.3, PI - 0.1)), _curve(b, _arc(0, 0, 0.24, PI + 0.3, 2 * PI - 0.1)), _line(b, [(-0.3, 0.12), (-0.24, 0.02), (-0.14, 0.1)], 0.025), _line(b, [(0.3, -0.12), (0.24, -0.02), (0.14, -0.1)], 0.025)),
    'SE-Q': lambda b: (_dot(b, 0, 0.18, 0.09), _line(b, [(0, 0.08), (0, -0.12)], 0.04), _line(b, [(-0.18, 0.0), (0.18, 0.0)]), _line(b, [(-0.14, -0.3), (0, -0.12), (0.14, -0.3)])),
    'SE-R': lambda b: (_line(b, [(-0.22, -0.22), (0.12, 0.12)], 0.045), _curve(b, _arc(0.18, 0.18, 0.1, -PI * 0.9, PI * 0.35))),
    'SE-S': lambda b: (_curve(b, _arc(0, 0, 0.26, 0, 2 * PI)), _line(b, [(0, 0.34), (0, -0.34)], 0.02), _line(b, [(-0.34, 0), (0.34, 0)], 0.02), _dot(b, 0, 0, 0.05)),
    'SE-T': lambda b: (_line(b, [(0, -0.2), (-0.3, -0.12), (-0.3, 0.22), (0, 0.14), (0.3, 0.22), (0.3, -0.12), (0, -0.2), (0, 0.14)])),
    'SE-U': lambda b: (_curve(b, _arc(0, 0.02, 0.27, 0, 2 * PI)), _line(b, [(-0.14, 0.02), (-0.03, -0.1), (0.16, 0.14)], 0.035), _block(b, 0, -0.33, 0.36, 0.06)),
}

# Attribute each SE card improves (Appendix A) -> plaque outline.
OUTLINE = {'SA': 6, 'COM': 40, 'MOB': 8}


def _outline(effect):
    """Plaque outline as (u, v) points."""
    if effect == 'PRO':
        return [(-0.45, 0.42), (0.45, 0.42), (0.45, -0.05), (0.0, -0.5), (-0.45, -0.05)]
    if effect == 'CAP':
        return [(-0.44, -0.44), (0.44, -0.44), (0.44, 0.44), (-0.44, 0.44)]
    n = OUTLINE[effect]
    r = 0.5 if n != 8 else 0.48
    off = PI / 2 if n == 6 else PI / 8 if n == 8 else 0
    return [(math.cos(off + 2 * PI * k / n) * r, math.sin(off + 2 * PI * k / n) * r) for k in range(n)]


def token(mats, card_id, effect, yaw_deg):
    """Build card_id's plaque on a small stand, turned to face a camera at yaw_deg."""
    b = Builder(card_id, mats, (0, 0, 0.62), (0, 0, math.radians(yaw_deg)))
    pts = _outline(effect)
    # Wedge extrudes an (x, z) profile along Y: the plaque is 0.1 thick, centred on y = 0.
    b.wedge('plaque', pts, 0.1, (0, 0, 0), 'paint_dark', bevel=0.03, segments=3)
    inner = [(u * 0.86, v * 0.86) for u, v in pts]
    b.tube('border', [_p(u, v, 0.005) for u, v in inner + inner[:1]], 0.012, 'steel', smooth=False)
    for item in ICONS[card_id](b) or ():
        pass
    b.box('stand', (0.5, 0.36, 0.06), (0, 0.06, -0.55), 'gunmetal', bevel=0.02)
    b.box('stand-back', (0.08, 0.06, 0.4), (0, 0.12, -0.35), 'gunmetal', rot=(-0.35, 0, 0), bevel=0.01)
    return b


def practice(mats):
    """TRAIN-CAP: a training crate module with hazard bands, the practice lot's stand-in part."""
    b = Builder('TRAIN-CAP', mats)
    L, W, H = 1.6, 1.2, 0.9
    b.box('crate', (L, W, H), (0, 0, H / 2), 'paint', bevel=0.04, segments=3)
    for x in (-L / 2 + 0.12, L / 2 - 0.12):
        for k in range(4):
            b.box('band', (0.12, W + 0.02, 0.1), (x, 0, 0.15 + k * 0.2), 'yellow' if k % 2 == 0 else 'black', bevel=0.005)
    for side in (-1, 1):
        b.box('handle', (0.3, 0.04, 0.05), (0, side * (W / 2 + 0.03), H * 0.7), 'steel', bevel=0.01)
    b.box('lid-seam', (L + 0.01, W + 0.01, 0.02), (0, 0, H - 0.12), 'black', bevel=0.004)
    return b
