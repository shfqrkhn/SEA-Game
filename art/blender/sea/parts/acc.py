"""Seven procedural accessory kits; metres, +X forward, -Y camera side.

Only Mounts defines installation positions. Small fittings are batched; curved
silhouettes use Builder resolution controls for the real-time export.
"""
import math

import bmesh
from mathutils import Vector

from .. import geo

from ..geo import Batch, Builder, loft
from .common import PI, _card

Y_AXIS = (PI / 2, 0, 0)
X_AXIS = (0, PI / 2, 0)


def _tube(b, name, points, radius, mat='steel'):
    """Budgeted swept mesh; avoids Blender curve bounds inflating card framing."""
    pts = [Vector(p) for p in points]
    sides = 6 if geo.REALTIME else 10
    bm = bmesh.new()
    rings = []
    for i, p in enumerate(pts):
        tangent = pts[min(i + 1, len(pts) - 1)] - pts[max(0, i - 1)]
        q = tangent.to_track_quat('Z', 'Y')
        rings.append([bm.verts.new(p + q @ Vector((radius * math.cos(j * 2 * PI / sides),
                                                   radius * math.sin(j * 2 * PI / sides), 0)))
                      for j in range(sides)])
    for a, c in zip(rings, rings[1:]):
        for j in range(sides):
            k = (j + 1) % sides
            bm.faces.new((a[j], a[k], c[k], c[j]))
    bm.faces.new(rings[0][::-1])
    bm.faces.new(rings[-1])
    bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces))
    return b._mesh(name, bm, mat, (0, 0, 0), (0, 0, 0), 0, 1, smooth=True)

def _beam(b, name, a, c, width, height, mat='paint', bevel=.012):
    """Rectangular structural member between two pin centres."""
    a, c = Vector(a), Vector(c)
    d = c - a
    return b.box(name, (width, height, d.length), (a + c) / 2, mat,
                 rot=d.to_track_quat('Z', 'Y').to_euler(), bevel=bevel)


def _rod(b, name, a, c, radius, mat='steel', verts=24):
    a, c = Vector(a), Vector(c)
    return b.cyl(name, radius, (c - a).length, (a + c) / 2, mat,
                 rot=(c - a).to_track_quat('Z', 'Y').to_euler(), verts=verts, bevel=.004)


def _bolts(b, name, points, radius=.018, rot=(0, 0, 0), mat='steel'):
    batch = Batch(b, name, mat)
    for p in points:
        batch.cyl(radius, radius * .65, p, rot, verts=6)
    batch.done()


def _ring(b, name, loc, radius, wire, mat='steel', rot=(0, 0, 0), steps=32):
    profile = [(radius + wire * math.cos(2 * PI * j / 6), wire * math.sin(2 * PI * j / 6)) for j in range(7)]
    return b.revolve(name, profile, loc, mat, rot=rot, steps=steps)


def _shackle(b, loc, radius=.09):
    x, y, z = loc
    pts = [(x, y + radius * math.cos(a), z + radius * math.sin(a))
           for a in [PI * (.05 + 1.9 * j / 16) for j in range(17)]]
    _tube(b, 'bow-shackle', pts, radius * .22, 'steel')
    _rod(b, 'shackle-pin', (x, y - radius, z + radius * .55),
         (x, y + radius, z + radius * .55), radius * .24, 'gunmetal', 16)


def _ram(b, a, c, radius=.055):
    """Hydraulic cylinder with gland, exposed rod, clevis pins and return hose."""
    a, c = Vector(a), Vector(c)
    d = c - a
    _rod(b, 'hydraulic-barrel', a, a + d * .64, radius, 'paint_dark')
    _rod(b, 'gland', a + d * .60, a + d * .69, radius * 1.12, 'gunmetal')
    _rod(b, 'piston-rod', a + d * .64, c, radius * .46, 'chrome')
    for p in (a, c):
        b.cyl('ram-pin', radius * .72, .17, p, 'steel', rot=Y_AXIS, verts=16)
    pts = [a + Vector((0, -.06, 0)), a + d * .2 + Vector((0, -.10, .07)),
           a + d * .65 + Vector((0, -.10, .07)), a + d * .72 + Vector((0, -.06, 0))]
    _tube(b, 'hydraulic-hose', pts, .012, 'rubber')


def acc_a(b, m):
    """Stowed folding tow frame with pinned hinges, two rope bundles and snatch block."""
    hx, hz = m.hitch
    # The standalone card lays the stowed assembly down to expose the tow frame.
    if _card(m):
        flat = Builder(b.layer, b.m, origin=(0, 0, .10), rotation=(0, PI / 2, 0))
        flat.matrix = b.matrix @ flat.matrix
        b = flat
    # Behind a lowered ramp the legs stand off the door pillars, ropes coiled over them, so the doorway stays clear
    # (owner FIX, G2: the frame had hung in the troop carrier's open doorway).
    ramp = m.extra.get('rear_ramp', False)
    if ramp:
        hx += .06
    leg_y, top_y, top_z, coil_y = ((1.0, 1.0, 1.30, 1.0) if ramp else
                                   ((.29, .7 * .29, 1.18, .72) if _card(m) else (.86, .60, 1.18, .86)))
    # Stand vertically on the rear when fitted.
    x = hx - .26
    for side in (-1, 1):
        y = side * leg_y
        _beam(b, 'folded-tow-leg', (x, y, hz + .12), (x, side * top_y, hz + top_z), .11, .10)
        b.box('hinge-cheek', (.16, .16, .20), (x, y, hz + .23), 'paint_dark', bevel=.018)
        b.cyl('hinge-pin', .052, .20, (x, y, hz + .23), 'steel', rot=X_AXIS, verts=20)
        if ramp or _card(m):
            b.box('rear-mount-bracket', (.32, .14, .07), (hx - .12, y, hz + .10), 'paint_dark', bevel=.008)
        else:
            recovery = m.extra.get('recovery', False)
            bracket_z = hz + (.42 if recovery else .10)
            leg_t = (bracket_z + .02 - (hz + .12)) / (top_z - .12)
            support_y = y + side * (top_y - leg_y) * leg_t
            b.box('rear-mount-bracket', (.10, .10, .07), (hx + .10, y, bracket_z), 'paint_dark', bevel=.008)
            _beam(b, 'rear-bracket-support', (x, support_y, bracket_z + .02),
                  (hx + .10, y, bracket_z + .02), .06, .06)
        b.box('retaining-clamp', (.15, .15, .065), (x, y + side * (top_y - leg_y) * .8, hz + .96), 'gunmetal', bevel=.008)
        _ring(b, 'split-pin', (x - .115, y, hz + .18), .038, .006, rot=(0, 0, PI / 2), steps=24)
    if not ramp:
        span = .55 if _card(m) else 2 * leg_y + .14
        depth = .09 if _card(m) else .14
        brace_x = x if _card(m) else x + .10
        b.box('cross-brace', (depth, span, .10), (brace_x, 0, hz + .45), 'paint_dark', bevel=.01)
    b.box('tow-head', (.15, 2 * top_y + .17, .17), (x, 0, hz + top_z + .01), 'paint', bevel=.025)
    # Beside a ramp the eye trails behind the head, below the deck edge and its radio masts.
    _ring(b, 'towing-eye', (x - .14, 0, hz + top_z + .01) if ramp else (x, 0, hz + top_z + .20), .12, .035, rot=(0, 0, 0 if ramp else PI / 2), steps=40)
    _bolts(b, 'tow-frame-bolts', [(x - .092, y, hz + z) for y in (-leg_y, leg_y) for z in (.2, .29)], .028, X_AXIS)
    for y in (-coil_y, coil_y):
        # Nested loops in two layers retain visible grooves at card resolution.
        for layer, radii in ((0, (.145, .187, .229)), (1, (.166, .208))):
            for radius in radii:
                pts = [(x - .07 - layer * .039,
                        y + radius * math.cos(2 * PI * j / 32),
                        hz + .52 + radius * 1.4 * math.sin(2 * PI * j / 32)) for j in range(33)]
                _tube(b, 'coiled-tow-rope', pts, .018, 'canvas')
        for dz in (-.20, .20):
            b.box('rope-retaining-webbing', (.19, .065, .095), (x - .115, y, hz + .52 + dz), 'rubber', bevel=.008)
        _ring(b, 'rope-thimble', (x - .20, y - .13, hz + .17), .061, .016, rot=(0, 0, PI / 2), steps=28)
        _tube(b, 'rope-tail', [(x - .18, y, hz + .30), (x - .20, y - .12, hz + .20)], .022, 'canvas')
        if not (_card(m) or ramp):
            side = 1 if y > 0 else -1
            t=(.77-.12)/(top_z-.12)
            leg_y_at_hanger=side*leg_y+(side*top_y-side*leg_y)*t
            _beam(b,'rope-hanger-support',(x,leg_y_at_hanger,hz+.77),(x,y,hz+.77),.04,.04)
        b.box('rope-hanger', (.36 if ramp else .42, .12, .06), (x, y, hz + .77), 'paint_dark', bevel=.006)
    # Open cheeks leave the sheave and its groove readable; beside a ramp it hangs under the right leg.
    sy, sz, eye = (leg_y, hz - .04, -.20) if ramp else (0, hz + .33, .23)
    for dx in (-.08, .08):
        b.box('snatch-cheek', (.03, .25, .32), (x + dx, sy, sz), 'paint', bevel=.06, segments=3)
    b.cyl('snatch-sheave', .12, .12, (x, sy, sz), 'gunmetal', rot=X_AXIS, verts=32)
    _bolts(b, 'snatch-axle', [(x - .105, sy, sz)], .042, X_AXIS)
    _ring(b, 'snatch-eye', (x, sy, sz + eye), .062, .019, rot=(0, 0, PI / 2), steps=28)


def _trailer_wheel(b, x, y, z, side):
    """Shaped carcass and staggered tread, budgeted for two trailer wheels."""
    profile = [(.21, -.13), (.34, -.15), (.397, -.11), (.407, -.07),
               (.407, .07), (.397, .11), (.34, .15), (.21, .13)]
    b.revolve('trailer-tyre', profile, (x, y, z), 'rubber', steps=56)
    tread = Batch(b, 'trailer-tread', 'tread')
    for j in range(24):
        for s in (-1, 1):
            a = 2 * PI * (j + (s + 1) * .12) / 24
            tread.box((.07, .13, .085), (x + .408 * math.cos(a), y + s * .072, z + .408 * math.sin(a)), (0, PI / 2 - a, s * .1))
    tread.done(bevel=.006)
    b.revolve('wheel-rim', [(.06, 0), (.17, side * .11), (.23, side * .12), (.24, side * .15),
                           (.24, side * .17), (.20, side * .17), (.17, side * .135), (.06, side * .12)], (x, y, z), 'paint_dark', steps=40)
    b.cyl('wheel-hub', .08, .10, (x, y + side * .17, z), 'gunmetal', rot=Y_AXIS, verts=24)
    _bolts(b, 'wheel-lugs', [(x + .13 * math.cos(a), y + side * .136, z + .13 * math.sin(a)) for a in [2 * PI * j / 6 for j in range(6)]], .021, Y_AXIS)


def acc_b(b, m):
    """Single-axle military trailer: chassis, drawbar, covered tub and road fittings."""
    hx, hz = m.hitch
    tx = 0 if _card(m) else hx - 2.65
    hitch_x = tx + 2.30 if _card(m) else hx - .50
    tow_z = hz if _card(m) else hz + .30
    # Behind a lowered ramp a split drawbar runs to a receiver on each door pillar, clear of the ramp
    # (owner FIX, G2: the receiver had hung in the troop carrier's open doorway).
    ramp = m.extra.get('rear_ramp', False) and not _card(m)
    couplers = [-1.0, 1.0] if ramp else ([-.86, .86] if not _card(m) else [0])
    if ramp:
        tow_z = hz + .10
        for cy in couplers:
            b.box('receiver-mount', (.10, .26, .30), (hx + .06, cy, tow_z), 'paint_dark', bevel=.014)
            _beam(b, 'raised-receiver', (hx + .02, cy, tow_z), (hitch_x + .03, cy, tow_z), .13, .12)
            _bolts(b, 'receiver-fasteners', [(hx, cy + y, tow_z + z) for y in (-.08, .08) for z in (-.08, .08)], .022, X_AXIS)
    elif not _card(m):
        # Raised receiver clears the recovery hull's rear stabiliser spade.
        for cy in couplers:
            b.box('receiver-mount', (.10, .10, .20), (hx + .10, cy, tow_z + .10), 'paint_dark', bevel=.014)
            _beam(b, 'raised-receiver', (hx + .10, cy, tow_z), (hitch_x + .03, cy, tow_z), .13, .12)
            _bolts(b, 'receiver-fasteners', [(hx + .05, cy + y, tow_z + z) for y in (-.035, .035) for z in (-.07, .07)], .018, X_AXIS)
    for y in (-.55, .55):
        b.box('chassis-rail', (2.0, .10, .12), (tx, y, .63), 'paint_dark', bevel=.014)
        end_y = y / .55 if ramp else (y / .55 * .86 if not _card(m) else 0)
        _beam(b, 'drawbar', (tx + .55, y, .65), (hitch_x - .12, end_y, tow_z), .10, .12)
        for k in range(3):
            b.box('leaf-spring', (.70 - k * .13, .065, .02), (tx, y, .50 + k * .025), 'gunmetal', bevel=.003)
    _rod(b, 'trailer-axle', (tx, -.98, .453), (tx, .98, .453), .06, 'gunmetal', 16)
    b.box('cargo-body', (1.9, 1.55, .48), (tx, 0, .97), 'paint', bevel=.025)
    for z in (.75, 1.20):
        b.box('tub-rim', (1.97, 1.61, .06), (tx, 0, z), 'paint_dark', bevel=.012)
    for side in (-1, 1):
        y = side * .79
        for dx in (-.86, 0, .86):
            b.box('tub-upright', (.055, .035, .43), (tx + dx, y, .98), 'paint_light', bevel=.006)
        _bolts(b, 'tub-rivets', [(tx + dx, y + side * .02, z) for dx in (-.86, 0, .86) for z in (.81, 1.14)], .014, Y_AXIS)
        _trailer_wheel(b, tx - .12, side * .96, .453, side)
        b.wedge('pressed-fender', [(-.62, .64), (-.44, 1.02), (.28, 1.02), (.49, .64), (.44, .63), (.24, .96), (-.40, .96), (-.57, .63)], .39, (tx, side * .97, 0), 'paint_dark', bevel=.012)
        b.box('mudflap', (.035, .31, .25), (tx - .58, side * .97, .49), 'rubber', bevel=.006)
        b.cyl('side-reflector', .039, .018, (tx + .79, y + side * .03, .96), 'amber', rot=Y_AXIS, verts=24)
    # Wavy skirt and taut shallow arched roof, skinned as one closed cloth shell.
    sections = []
    for j in range(17):
        dx = -.98 + 1.96 * j / 16
        wave = .035 * math.sin(j * 2.4)
        ring = [(-.81, 1.23), (.81, 1.23), (.81 + wave, 1.49), (.76, 1.75),
                (.64, 1.79), (0, 1.82 + .008 * math.sin(j)), (-.64, 1.79), (-.76, 1.75), (-.81 - wave, 1.49)]
        sections.append((tx + dx, ring))
    loft(b, 'canvas-cover', sections, 'canvas', bevel=.015, smooth=True)
    for side in (-1, 1):
        y = side * .825
        for dx in (-.96, .96):
            _tube(b, 'canvas-corner-seam', [(tx + dx, side * .64, 1.795), (tx + dx, side * .77, 1.75), (tx + dx, y, 1.26)], .009, 'canvas')
        _tube(b, 'canvas-hem', [(tx - .95, y, 1.26), (tx + .95, y, 1.26)], .009, 'canvas')
        for dx in (-.83, -.42, 0, .42, .83):
            _tube(b, 'tarp-tie', [(tx + dx, y, 1.32), (tx + dx + .02, y + side * .025, 1.18), (tx + dx, y, 1.10)], .008, 'cable')
    for y in (-.62, .62):
        b.box('tail-housing', (.08, .20, .16), (tx - 1.01, y, .89), 'gunmetal', bevel=.02)
        b.box('tail-light', (.02, .12, .065), (tx - 1.06, y, .92), 'red', bevel=.013)
        b.box('tail-reflector', (.02, .08, .035), (tx - 1.06, y, .85), 'lamp', bevel=.006)
        b.box('tailgate-hinge', (.04, .19, .06), (tx - .98, y, .77), 'steel', bevel=.006)
    for cy in couplers:
        _ring(b, 'lunette', (hitch_x, cy, tow_z), .10, .028, rot=(PI / 2, 0, 0), steps=32)
        b.box('coupler-block', (.21, .15, .13), (hitch_x - .16, cy, tow_z), 'paint_dark', bevel=.022)
    # Jack is retracted when fitted; extended on the standalone card.
    jx = hitch_x - .48
    foot_z = .0125 if _card(m) else .45
    # On a split drawbar the jack clamps to the left bar.
    jy, jz = (-.86 if not ramp and not _card(m) else 0), tow_z
    if ramp:
        t = (jx - (tx + .55)) / (hitch_x - .12 - (tx + .55))
        jy, jz = -.55 - .45 * t + .08, .65 + (tow_z - .65) * t
    jack_top = max(.97, jz + .14)
    b.box('jack-clamp', (.12, .28, .08), (jx, jy - .08, jz - .04), 'paint_dark', bevel=.01)
    _rod(b, 'jack-leg', (jx, jy - .17, foot_z + .010), (jx, jy - .17, jack_top), .04, 'steel', 16)
    _rod(b, 'jack-sleeve', (jx, jy - .17, .54), (jx, jy - .17, jack_top - .08), .057, 'paint', 20)
    b.cyl('jack-foot', .10, .025, (jx, jy - .17, foot_z), 'paint_dark', verts=24)
    _tube(b, 'jack-crank', [(jx, jy - .17, jack_top + .01), (jx, jy - .32, jack_top + .01), (jx, jy - .32, jack_top - .05)], .014, 'gunmetal')
    for cy in couplers:
        for side in (-1, 1):
            _tube(b, 'safety-cable', [(hitch_x - .32, cy + side * .10, tow_z), (hitch_x - .12, cy + side * .18, tow_z - .17), (hitch_x, cy + side * .07, tow_z)], .011, 'steel')


def acc_c(b, m):
    """Articulated mine roller with two six-disc banks and hydraulic lift frame."""
    fx, fz = m.bumper
    rx, rz = fx + 1.62, .446
    if _card(m):
        # Present the detached frame at operating height above its grounded rollers.
        fz = rz + .70
    if _card(m):
        b.box('attachment-beam', (.19, 1.76, .22), (fx + .12, 0, fz), 'paint_dark', bevel=.024)
    else:
        for lo, hi in ((-.88, -.80), (-.44, .44), (.80, .88)):
            b.box('attachment-beam', (.19, hi - lo, .22), (fx, (lo + hi) / 2, fz), 'paint_dark', bevel=.024)
    b.box('roller-crossbeam', (.18, 2.42, .16), (fx + .91, 0, .96), 'paint', bevel=.018)
    for side in (-1, 1):
        y = side * .75
        _beam(b, 'roller-push-arm', (fx + .13, y, fz), (rx, y, rz + .10), .15, .19)
        _ram(b, (fx + .20, y, fz + .27), (fx + 1.15, y, .80), .062)
        for yy in (side * .37, side * 1.13):
            b.wedge('swing-arm', [(-.82, .44), (-.68, .58), (.10, .07), (.07, -.03), (-.08, -.06)], .09,
                    (rx, yy, rz), 'paint', bevel=.025)
            b.cyl('upper-swing-pin', .055, .14, (rx - .73, yy, rz + .49), 'steel', rot=Y_AXIS, verts=16, bevel=0)
            b.cyl('swing-pivot', .08, .15, (rx, yy, rz), 'paint_dark', rot=Y_AXIS, verts=24)
        b.cyl('bank-axle', .065, .94, (rx, y, rz), 'steel', rot=Y_AXIS, verts=20)
        for k in range(6):
            yy = y - .315 + .126 * k
            b.cyl('roller-disc', .405, .106, (rx, yy, rz), 'gunmetal', rot=Y_AXIS, verts=40, bevel=.012)
            teeth = Batch(b, 'roller-cleats', 'tread')
            for j in range(16):
                a = 2 * PI * (j + .3 * (k % 2)) / 16
                teeth.box((.055, .116, .085), (rx + .402 * math.cos(a), yy, rz + .402 * math.sin(a)), (0, PI / 2 - a, 0))
            teeth.done(bevel=.008)
        yy = y + side * .43
        b.cyl('hub-cap', .125, .055, (rx, yy, rz), 'paint', rot=Y_AXIS, verts=24, bevel=.009)
        _bolts(b, 'roller-hub-bolts', [(rx + .094 * math.cos(a), yy + side * .033, rz + .094 * math.sin(a)) for a in [2 * PI * j / 6 for j in range(6)]], .020, Y_AXIS)
        clevis_y = side * (.75 if _card(m) else .90)
        clevis_width = .20 if _card(m) else .18
        b.box('mount-clevis', (.23, clevis_width, .37), (fx + .1, clevis_y, fz + .12), 'paint', bevel=.018)
        _bolts(b, 'frame-fasteners', [(fx + .23, clevis_y + dy, fz + z) for dy in (-.065, .065) for z in (-.03, .23)], .023, X_AXIS)
    b.box('valve-block', (.22, .28, .18), (fx + .68, 0, 1.05), 'paint_dark', bevel=.018)
    for y in (-.70, .70):
        _tube(b, 'manifold-hose', [(fx + .65, 0, 1.14), (fx + .78, y * .7, 1.15), (fx + .65, y, 1.12)], .014, 'rubber')


def acc_e(b, m):
    """Continuous curved mouldboard, replaceable cutting shoes and twin lift rams."""
    fx, fz = m.bumper
    bx, bottom, height = fx + 1.03, .12, 1.06
    # The forward face is concave in X/Z; one closed extruded profile, no slat gaps.
    curve = [(.23 * ((2 * j / 12 - 1) ** 2), bottom + height * j / 12) for j in range(13)]
    profile = curve + [(x - .06, z) for x, z in reversed(curve)]
    b.wedge('blade-face', profile, 2.64, (bx, 0, 0), 'paint', bevel=.008, segments=2)
    for y in (-1.27, -.62, .62, 1.27):
        b.wedge('mouldboard-rib', [(x - .07, z) for x, z in curve] + [(-.17, 1.10), (-.19, .28)], .052,
                (bx, y, 0), 'paint_dark', bevel=.008)
    for y in (-.88, 0, .88):
        b.box('cutting-shoe', (.066, .865, .145), (bx + .215, y, .16), 'steel', rot=(0, .18, 0), bevel=.007)
        _bolts(b, 'cutting-edge-bolts', [(bx + .258, y + dy, .20) for dy in (-.32, -.1, .1, .32)], .022, X_AXIS, 'gunmetal')
    b.box('blade-backbone', (.14, 2.47, .16), (bx - .11, 0, .59), 'paint_dark', bevel=.017)
    support_y = .94 if not _card(m) else .76
    if _card(m):
        b.box('mount-crossbeam', (.18, 1.68, .22), (fx + .10, 0, fz), 'paint', bevel=.017)
    else:
        for lo, hi in ((-.98, -.80), (-.44, .44), (.80, .98)):
            b.box('mount-crossbeam', (.18, hi - lo, .22), (fx + .02, (lo + hi) / 2, fz), 'paint', bevel=.017)
        for side in (-1, 1):
            b.box('nose-mount-pad', (.16, .24, .16), (fx - .06, side * .89, fz), 'paint_dark', bevel=.012)
    for y in (-support_y, support_y):
        _beam(b, 'dozer-push-arm', (fx + .09, y, fz - .05), (bx - .13, y, .49), .16, .20)
        b.wedge('lift-tower', [(-.12, -.16), (.10, -.16), (.07, .38), (-.08, .40)], .12, (fx + .15, y, fz), 'paint', bevel=.018)
        _ram(b, (fx + .20, y, fz + .34), (bx - .10, y, .75), .070)
        for x, z in ((fx + .16, fz - .02), (bx - .13, .51)):
            b.cyl('arm-pivot', .092, .24, (x, y, z), 'paint_dark', rot=Y_AXIS, verts=24)
            _bolts(b, 'pivot-bolt', [(x, y - .135, z)], .052, Y_AXIS)


def acc_f(b, m):
    """Heavy cable winch with open four-roller fairlead and forged towing fittings."""
    fx, fz = m.bumper
    x, z = fx + .33, fz + .08
    if _card(m):
        b.box('winch-bed', (.66, 1.55, .095), (x, 0, z - .25), 'paint_dark', bevel=.023)
        foot_y = (-.58, .58)
        foot_width = .18
    else:
        b.box('winch-bed', (.52, 1.55, .095), (fx + .40, 0, z - .25), 'paint_dark', bevel=.023)
        b.box('winch-bed', (.14, .88, .095), (fx + .07, 0, z - .25), 'paint_dark', bevel=.023)
        foot_y = (-.38, .38)
        foot_width = .13
    for y in foot_y:
        b.box('mount-foot', (.40, foot_width, .14), (fx + .14, y, z - .23), 'paint_dark', bevel=.014)
    for y in (-.43, .43):
        b.wedge('winch-sideplate', [(-.26, -.22), (.29, -.22), (.20, -.09), (.14, .25), (-.09, .30), (-.22, .20)], .065,
                (x, y, z), 'paint', bevel=.016)
        b.cyl('drum-flange', .24, .035, (x, y * .91, z + .03), 'gunmetal', rot=Y_AXIS, verts=40)
    b.cyl('cable-drum', .155, .73, (x, 0, z + .03), 'gunmetal', rot=Y_AXIS, verts=40)
    pts = []
    for j in range(289):
        a = 2 * PI * j / 12
        pts.append((x + .176 * math.cos(a), -.36 + .72 * j / 288, z + .03 + .176 * math.sin(a)))
    _tube(b, 'wound-steel-cable', pts, .016, 'cable')
    b.cyl('hydraulic-motor', .16, .32, (x, -.62, z + .02), 'paint_dark', rot=Y_AXIS, verts=32, bevel=.016)
    b.cyl('motor-endcap', .17, .04, (x, -.80, z + .02), 'paint', rot=Y_AXIS, verts=28)
    b.box('motor-control', (.26, .27, .13), (x, -.64, z + .24), 'paint', bevel=.018)
    b.cyl('gear-housing', .18, .23, (x, .59, z + .03), 'paint', rot=Y_AXIS, verts=32, bevel=.024)
    _bolts(b, 'motor-fasteners', [(x + .135 * math.cos(a), -.828, z + .02 + .135 * math.sin(a)) for a in [2 * PI * j / 6 for j in range(6)]], .019, Y_AXIS)
    b.cyl('clutch-cap', .065, .04, (x, .59, z + .235), 'steel', verts=20)
    hose_y = -.40 if not _card(m) else -.77
    hose_end_y = -.40 if not _card(m) else -.60
    _tube(b, 'motor-hose', [(x - .07, -.75, z + .25), (x - .25, hose_y, z + .13), (x - .28, hose_end_y, z - .12)], .021, 'rubber')
    lx = x + .27
    for y in (-.43, .43):
        # Side posts carry the fairlead on the winch bed.
        b.box('fairlead-post', (.06, .05, .375), (lx + .04, y, z - .015), 'paint', bevel=.008)
    for dz in (-.115, .115):
        b.box('fairlead-crossbar', (.075, .86, .055), (lx, 0, z + dz), 'paint', bevel=.009)
        b.cyl('horizontal-roller', .045, .61, (lx + .036, 0, z + dz * .72), 'steel', rot=Y_AXIS, verts=24, bevel=.008)
    for y in (-.34, .34):
        b.cyl('vertical-roller', .047, .28, (lx + .075, y, z), 'steel', verts=24, bevel=.008)
        for dz in (-.155, .155):
            b.box('roller-bearing', (.13, .13, .035), (lx + .04, y, z + dz), 'paint_dark', bevel=.012)
            _bolts(b, 'bearing-bolt', [(lx + .07, y, z + dz + .022)], .032)
    _tube(b, 'free-cable', [(x + .17, 0, z), (lx + .13, 0, z), (lx + .20, 0, z - .14)], .017, 'cable')
    _ring(b, 'hook-eye', (lx + .20, 0, z - .16), .043, .016, rot=(0, 0, PI / 2), steps=24)
    _tube(b, 'forged-hook', [(lx + .20, 0, z - .20), (lx + .21, -.035, z - .29), (lx + .22, -.02, z - .38),
                           (lx + .22, .09, z - .39), (lx + .22, .14, z - .31), (lx + .22, .11, z - .27)], .035, 'steel')
    _beam(b, 'hook-latch', (lx + .22, .005, z - .23), (lx + .22, .115, z - .28), .018, .018, 'chrome', .004)
    for y in (-.62, .62):
        b.box('tow-lug', (.14, .10, .16), (lx - .06, y, z - .19), 'paint', bevel=.019)
        _shackle(b, (lx + .025, y, z - .31), .085)


def _rack_frame(b, m, length=1.72, width=.86):
    """Outboard roof-edge carrier, with brackets clearing the turret and module slots."""
    x, y, z = m.rack
    if not _card(m):
        # The supplied centre rack anchor is inside the weapon envelope. Carry
        # the basket beside the roof on brackets, above side-armour height.
        y -= m.side[4] + width / 2 + .06
    feet, pad_bolts = [], []
    # Roof edge chamfer (hull8 section): flat roof to |y| 1.1 at the roof, down to the sponson's 1.36 at 0.44 below.
    rz = m.roof_span[2]
    chamfer = [(-1.13, rz - .03 / .26 * .44), (-1.27, rz - .17 / .26 * .44)]
    normal = Vector((0, -.44, .26)).normalized()
    for dx in (-length * .38, length * .38):
        if _card(m):
            for dy in (-width * .36, width * .36):
                b.box('rack-foot', (.16, .13, .045), (x + dx, y + dy, z + .0225), 'paint_dark', bevel=.008)
                b.box('rack-leg', (.075, .075, .12), (x + dx, y + dy, z + .10), 'paint', bevel=.009)
                feet.append((x + dx, y + dy))
            continue
        # Fitted: each bracket runs under the whole basket and is braced from the top of the sponson (owner FIX,
        # G2: the feet had hung in the air beside the hull). The front one bolts to the flat roof ahead of the
        # module deck; the rear one, beside the module, to a pad on the roof's chamfered edge behind the pioneer tools.
        if dx > 0:
            inner = -(m.roof_span[3] - .12)  # outboard of the turret-mount flange
            b.box('rack-foot', (.16, .13, .045), (x + dx, inner, z + .0225), 'paint_dark', bevel=.008)
            _beam(b, 'roof-bracket', (x + dx, inner - .04, z + .085), (x + dx, y - width * .47, z + .085), .08, .09)
            feet.extend(Vector((x + dx + sx, inner, z + .052)) for sx in (-.045, .045))
        else:
            a, c = (Vector((x + dx, cy, cz)) + normal * .0225 for cy, cz in chamfer)
            _beam(b, 'rack-foot', a, c, .16, .045, 'paint_dark', .008)
            mid = (a + c) / 2 + normal * .0225
            _beam(b, 'rack-leg', mid - normal * .01, (x + dx, mid.y, z + .085), .075, .075)
            _beam(b, 'roof-bracket', (x + dx, mid.y + .05, z + .085), (x + dx, y - width * .47, z + .085), .08, .09)
            pad_bolts.extend(mid + normal * .004 + Vector((sx, 0, 0)) for sx in (-.045, .045))
        _beam(b, 'rack-brace', (x + dx, -(m.side[4] - .05), m.side[3] + .07), (x + dx, y - width * .2, z + .05), .06, .06)
    floor_z = z + .16
    for dy in (-width / 2, width / 2):
        b.box('basket-sill', (length, .06, .07), (x, y + dy, floor_z), 'paint', bevel=.012)
    for dx in (-length / 2, length / 2):
        b.box('basket-end', (.06, width, .07), (x + dx, y, floor_z), 'paint', bevel=.012)
    mesh = Batch(b, 'basket-open-floor', 'gunmetal')
    for j in range(18):
        mesh.box((.016, width - .05, .019), (x - length / 2 + .05 + (length - .10) * j / 17, y, floor_z))
    for j in range(6):
        mesh.box((length - .04, .012, .016), (x, y - width / 2 + .04 + (width - .08) * j / 5, floor_z - .006))
    mesh.done()
    for dx in (-length / 2, 0, length / 2):
        for dy in (-width / 2, width / 2):
            _rod(b, 'basket-stanchion', (x + dx, y + dy, floor_z), (x + dx, y + dy, floor_z + .23), .016, 'paint_dark', 16)
    pts = [(x - length / 2, y - width / 2, floor_z + .23), (x + length / 2, y - width / 2, floor_z + .23),
           (x + length / 2, y + width / 2, floor_z + .23), (x - length / 2, y + width / 2, floor_z + .23),
           (x - length / 2, y - width / 2, floor_z + .23)]
    _tube(b, 'basket-top-rail', pts, .022, 'paint')
    if _card(m):
        _bolts(b, 'rack-foot-bolts', [(fx, fy, z + .052) for fx, fy in feet], .018)
    else:
        _bolts(b, 'rack-foot-bolts', feet, .018)
        _bolts(b, 'rack-pad-bolts', pad_bolts, .018, (math.atan2(-normal.y, normal.z), 0, 0))
    return x, y, floor_z + .0095  # top of the open floor


def _case(b, loc, size, rugged=False, mat='paint_dark'):
    """Lidded container with gasket, rim ribs, latches, hinges and carrying handle."""
    x, y, z = loc
    length, width, height = size
    b.box('case-body', size, (x, y, z + height / 2), mat, bevel=.035 if rugged else .016)
    b.box('case-gasket', (length + .008, width + .008, .014), (x, y, z + height - .06), 'rubber', bevel=.015)
    b.box('case-lid', (length + .014, width + .014, .06), (x, y, z + height - .025), mat, bevel=.018)
    for dx in (-length * .32, length * .32):
        b.box('lid-reinforcement', (.04, width + .026, .025), (x + dx, y, z + height + .011), 'paint_light', bevel=.008)
        b.box('case-latch', (.045, .026, .10), (x + dx, y - width / 2 - .013, z + height - .075), 'gunmetal', bevel=.008)
        b.box('latch-lever', (.027, .013, .054), (x + dx, y - width / 2 - .031, z + height - .069), 'gunmetal', bevel=.003)
        b.cyl('case-hinge', .019, .08, (x + dx, y + width / 2 + .008, z + height - .06), 'gunmetal', rot=X_AXIS, verts=12)
    _tube(b, 'case-handle', [(x - .09, y - width / 2 - .02, z + .12), (x - .09, y - width / 2 - .05, z + .08),
                           (x + .09, y - width / 2 - .05, z + .08), (x + .09, y - width / 2 - .02, z + .12)], .012, 'gunmetal')
    if rugged:
        for dx in (-length / 2 + .035, length / 2 - .035):
            for dy in (-width / 2 + .025, width / 2 - .025):
                b.box('case-corner-rib', (.065, .065, height * .86), (x + dx, y + dy, z + height * .48), mat, bevel=.014)
        for dx in (-length * .27, length * .27):
            b.box('case-webbing-top', (.035, width + .025, .009), (x + dx, y, z + height + .0095), 'canvas', bevel=.002)
            for side in (-1, 1):
                b.box('case-webbing-side', (.035, .009, height), (x + dx, y + side * (width / 2 + .0115), z + height / 2), 'canvas', bevel=.002)


def acc_d(b, m):
    """Field carrier with metal chest, three handled cans, tied roll and pioneer tool."""
    x, y, z = _rack_frame(b, m)
    _case(b, (x + .40, y, z), (.69, .64, .35))
    for dx in (-.57, -.36, -.15):
        cx, cy = x + dx, y - .17
        b.box('jerrycan', (.18, .27, .38), (cx, cy, z + .19), 'paint', bevel=.026)
        b.box('can-shoulder', (.16, .24, .07), (cx, cy, z + .39), 'paint_light', bevel=.022)
        _tube(b, 'can-handle', [(cx, cy - .075, z + .42), (cx, cy - .065, z + .475), (cx, cy + .055, z + .475), (cx, cy + .065, z + .42)], .013, 'paint_dark')
        b.cyl('can-cap', .037, .025, (cx + .055, cy + .075, z + .435), 'gunmetal', verts=16)
        for a, c in [((cx - .06, cy - .141, z + .07), (cx + .06, cy - .141, z + .31)),
                     ((cx + .06, cy - .141, z + .07), (cx - .06, cy - .141, z + .31))]:
            _beam(b, 'pressed-can-rib', a, c, .014, .012, 'paint_light', .004)
        b.box('can-retaining-band', (.19, .018, .038), (cx, cy - .144, z + .18), 'canvas', bevel=.004)
    b.cyl('canvas-roll', .175, .70, (x - .38, y + .20, z + .21), 'canvas', rot=X_AXIS, verts=40, bevel=.025)
    for dx in (-.60, -.19):
        _ring(b, 'roll-strap', (x + dx, y + .20, z + .21), .178, .014, 'rubber', rot=(0, 0, PI / 2), steps=32)
        b.box('roll-buckle', (.048, .045, .025), (x + dx, y + .20, z + .402), 'steel', bevel=.004)
        b.box('roll-cradle', (.075, .26, .07), (x + dx, y + .20, z + .035), 'paint_dark', bevel=.012)
    # End spiral makes the canvas visibly rolled instead of a solid canister.
    pts = [(x - .736, y + .20 + (.012 + .145 * j / 64) * math.cos(j * PI / 8), z + .21 + (.012 + .145 * j / 64) * math.sin(j * PI / 8)) for j in range(65)]
    _tube(b, 'roll-end-fold', pts, .007, 'canvas')
    _rod(b, 'tool-handle', (x - .60, y - .44, z + .18), (x + .48, y - .44, z + .18), .015, 'wood', 16)
    b.box('tool-spade', (.20, .035, .12), (x + .58, y - .44, z + .18), 'steel', bevel=.022)
    for dx in (-.43, .36):
        b.box('tool-clamp', (.045, .055, .09), (x + dx, y - .44, z + .18), 'gunmetal', bevel=.008)


def acc_g(b, m):
    """Rugged mission cases on a roof-edge basket with folded ladder and marker poles."""
    x, y, z = _rack_frame(b, m, 1.88, .90)
    _case(b, (x, y + .19, z), (1.60, .36, .32), True)
    for dx, mat in ((-.49, 'paint'), (.10, 'black')):
        _case(b, (x + dx, y - .23, z), (.53, .36, .39), True, mat)
    # Two folded ladder sections strapped to the outer rail; rectangular tubes.
    for layer in range(2):
        yy = y - .49 - layer * .04
        for dz in (.075, .255):
            b.box('ladder-stile', (1.68, .026, .027), (x, yy, z + dz), 'steel', bevel=.005)
        rungs = Batch(b, 'ladder-rungs', 'steel')
        for j in range(7):
            rungs.box((.024, .024, .17), (x - .73 + j * .243, yy, z + .165))
        rungs.done(bevel=.003)
        for dx in (-.79, .79):
            b.cyl('ladder-hinge', .038, .035, (x + dx, yy, z + .165), 'gunmetal', rot=Y_AXIS, verts=16)
    for dx in (-.47, .49):
        b.box('ladder-strap', (.045, .105, .24), (x + dx, y - .51, z + .165), 'canvas', bevel=.009)
        b.box('ladder-buckle', (.06, .02, .065), (x + dx, y - .575, z + .19), 'gunmetal', bevel=.005)
    for dx in (-.86, .86):
        px, py = x + dx, y + .38
        _rod(b, 'marker-pole', (px, py, z), (px, py, z + .83), .013, 'paint', 16)
        b.cyl('pole-socket', .026, .17, (px, py, z + .10), 'gunmetal', verts=16)
        for dz in (.63, .75):
            b.cyl('reflective-band', .0145, .065, (px, py, z + dz), 'amber', verts=16, bevel=.001)
        b.cyl('pole-cap', .016, .03, (px, py, z + .845), 'rubber', verts=16)






