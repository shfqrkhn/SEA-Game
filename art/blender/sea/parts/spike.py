"""Spike parts (MPES §17 V1): CAP-B hull module, COM-E antennas, ACC-F recovery winch.

Each builder creates its own layer (named after the card ID) at a vehicle mount point, so the same
part renders as a card on its own or as a build layer on any vehicle with that mount.
"""
import math

from ..geo import Builder


def cap_b(mats, mount):
    """Extended Carrier Module: ribbed shelter on the load deck with door, vents and ladder."""
    b = Builder('CAP-B', mats, mount)
    L, W, H = 3.2, 2.3, 1.62
    b.box('shell', (L, W, H), (0, 0, H / 2 + 0.06), 'paint', bevel=0.05, segments=4)
    b.box('skid', (L * 0.98, W * 0.9, 0.08), (0, 0, 0.04), 'paint_dark', bevel=0.01)
    for side in (-1, 1):
        y = side * (W / 2 + 0.012)
        for k in range(9):
            x = -L / 2 + 0.2 + k * (L - 0.4) / 8
            b.box('rib', (0.05, 0.035, H - 0.18), (x, y, H / 2 + 0.06), 'paint', bevel=0.012)
        b.box('rail', (L - 0.1, 0.04, 0.06), (0, y, H - 0.02), 'paint_dark', bevel=0.01)
        for x in (-L / 2 + 0.12, L / 2 - 0.12):
            b.box('corner', (0.16, 0.06, 0.16), (x, y, 0.14), 'gunmetal', bevel=0.012)
            b.box('corner', (0.16, 0.06, 0.16), (x, y, H - 0.02), 'gunmetal', bevel=0.012)
    # Side door with window and handle on the left (camera) side.
    y = -(W / 2 + 0.03)
    b.box('door', (0.82, 0.05, 1.34), (-0.35, y, 0.8), 'paint', bevel=0.02)
    b.box('door-window', (0.42, 0.02, 0.32), (-0.35, y - 0.02, 1.18), 'glass', bevel=0.02)
    b.box('door-handle', (0.04, 0.05, 0.2), (-0.02, y - 0.03, 0.82), 'steel', bevel=0.01)
    for z in (0.35, 1.25):
        b.box('hinge', (0.05, 0.06, 0.12), (-0.77, y, z), 'gunmetal', bevel=0.01)
    # Roof: vent cowls and a light.
    for x in (-0.9, 0.6):
        b.box('vent', (0.42, 0.42, 0.14), (x, 0.35, H + 0.13), 'paint_dark', bevel=0.03)
        b.box('vent-grille', (0.36, 0.02, 0.08), (x, 0.13, H + 0.13), 'black', bevel=0.005)
    b.cyl('roof-lamp', 0.06, 0.06, (1.3, -0.8, H + 0.1), 'lamp', verts=20)
    # Fold-down ladder on the rear face.
    lx = -L / 2 - 0.04
    for yy in (-0.62, -0.28):
        b.box('ladder-rail', (0.03, 0.03, 1.5), (lx, yy, 0.8), 'steel', bevel=0.006)
    for k in range(6):
        b.box('rung', (0.03, 0.34, 0.025), (lx, -0.45, 0.2 + k * 0.24), 'steel', bevel=0.005)
    # Tie-down straps to the deck.
    for x in (-1.1, 1.1):
        b.tube('strap', [(x, -W / 2 - 0.02, H + 0.05), (x, -W / 2 - 0.06, 0.2), (x, -W / 2 - 0.12, 0.0)], 0.012, 'cable')
    return b


def com_e(mats, mount):
    """Long-Range Radio Set: armoured radio box with fins, two spring-mounted whips and a mast."""
    b = Builder('COM-E', mats, mount)
    b.box('radio', (0.7, 0.9, 0.32), (-0.45, 0.25, 0.18), 'paint_dark', bevel=0.03)
    for k in range(8):
        b.box('fin', (0.62, 0.02, 0.06), (-0.45, -0.17 + k * 0.12, 0.37), 'gunmetal', bevel=0.005)
    b.box('connector-plate', (0.02, 0.5, 0.2), (-0.09, 0.25, 0.18), 'black', bevel=0.005)
    for k, y in enumerate((0.05, 0.25, 0.45)):
        b.cyl('connector', 0.03, 0.06, (-0.06, y, 0.18), 'steel', rot=(0, math.pi / 2, 0), verts=16)
    for y, height, lean in ((-0.95, 3.2, -0.05), (0.95, 2.6, 0.04)):
        x = -0.6
        b.cyl('ant-base', 0.09, 0.12, (x, y, 0.06), 'black', verts=24)
        for k in range(6):
            b.cyl('spring', 0.05, 0.025, (x, y, 0.16 + k * 0.035), 'steel', verts=20)
        b.cyl('ant-ferrule', 0.025, 0.22, (x, y, 0.47), 'black', verts=16)
        top = (x + lean * height, y, 0.58 + height)
        b.tube('whip', [(x, y, 0.58), (x + lean * height * 0.4, y, 0.58 + height * 0.5), top], 0.009, 'black')
        b.sphere('tip', 0.02, top, 'black')
        b.tube('feeder', [(x + 0.08, y, 0.06), (-0.3, y * 0.6, 0.03), (-0.1, 0.25 if y < 0 else 0.45, 0.06)], 0.012, 'cable')
    # Telescopic mast, stowed upright behind the radio.
    b.cyl('mast-1', 0.05, 1.0, (-0.9, -0.3, 0.55), 'paint_dark', verts=24)
    b.cyl('mast-2', 0.035, 0.7, (-0.9, -0.3, 1.38), 'steel', verts=24)
    b.box('mast-head', (0.18, 0.08, 0.05), (-0.9, -0.3, 1.75), 'black', bevel=0.01)
    return b


def acc_f(mats, mount):
    """Recovery Winch Package: drum winch between side plates, motor, fairlead, hook and shackles."""
    b = Builder('ACC-F', mats, mount)
    x0 = 0.18
    for y in (-0.42, 0.42):
        b.box('plate', (0.36, 0.05, 0.42), (x0, y, 0.08), 'paint_dark', bevel=0.02)
    b.cyl('drum', 0.13, 0.78, (x0, 0, 0.08), 'gunmetal', rot=(math.pi / 2, 0, 0), verts=40)
    for k in range(14):
        y = -0.36 + k * 0.0555
        b.cyl('wrap', 0.155, 0.045, (x0, y, 0.08), 'cable', rot=(math.pi / 2, 0, 0), verts=32, bevel=0.012)
    b.cyl('motor', 0.12, 0.42, (x0, -0.66, 0.08), 'black', rot=(math.pi / 2, 0, 0), verts=32, bevel=0.02)
    b.box('gearbox', (0.28, 0.2, 0.3), (x0, 0.56, 0.08), 'paint_dark', bevel=0.03)
    b.box('clutch-lever', (0.03, 0.03, 0.16), (x0 + 0.04, 0.62, 0.28), 'yellow', bevel=0.006)
    # Roller fairlead.
    fx = x0 + 0.24
    b.box('fairlead', (0.06, 0.6, 0.3), (fx, 0, 0.08), 'paint_dark', bevel=0.02)
    for z in (-0.04, 0.2):
        b.cyl('roller', 0.03, 0.4, (fx + 0.03, 0, z), 'steel', rot=(math.pi / 2, 0, 0), verts=20)
    for y in (-0.16, 0.16):
        b.cyl('roller', 0.03, 0.28, (fx + 0.03, y, 0.08), 'steel', verts=20)
    # Cable out to a hook clipped onto the bumper shackle.
    b.tube('cable', [(x0 + 0.15, 0, 0.08), (fx + 0.06, 0, 0.08), (fx + 0.18, 0, 0.0), (fx + 0.22, 0.2, -0.12)], 0.011, 'cable')
    b.tube('hook', [(fx + 0.22, 0.2, -0.12), (fx + 0.24, 0.24, -0.22), (fx + 0.3, 0.3, -0.25), (fx + 0.34, 0.33, -0.18)], 0.02, 'yellow')
    for y in (-0.62, 0.62):
        b.tube('shackle', [(fx - 0.02, y, -0.05), (fx + 0.1, y, -0.12), (fx - 0.02, y, -0.2)], 0.018, 'yellow')
    return b


PARTS = {'CAP-B': (cap_b, 'deck'), 'COM-E': (com_e, 'cab_roof'), 'ACC-F': (acc_f, 'front_bumper')}
