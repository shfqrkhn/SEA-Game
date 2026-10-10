"""Communications cards: one builder per card (see library.py for the builder contract)."""
import math

from .common import PI


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
