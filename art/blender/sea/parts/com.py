"""Seven rugged communications sets; shared fittings remain in this owned module."""
import math

import bmesh
from mathutils import Matrix, Vector

from .. import geo
from ..geo import Batch, Builder
from .common import PI, _card

FACE = (PI / 2, 0, 0)  # controls point toward local -Y


def _tube(b, name, points, radius, mat='cable', smooth=True):
    """Swept mesh cable: reliable evaluated bounds and a small export cross section."""
    points = [Vector(p) for p in points]
    # Keep explicit bend points; vertex normals round the cross section, not the run.
    sides = 8 if geo.REALTIME else 12
    previous_tangent = None
    q = None
    bm = bmesh.new()
    rings = []
    for i, p in enumerate(points):
        tangent = points[min(i + 1, len(points) - 1)] - points[max(0, i - 1)]
        tangent.normalize()
        q = (tangent.to_track_quat('Z', 'Y') if previous_tangent is None
             else previous_tangent.rotation_difference(tangent) @ q)
        previous_tangent = tangent
        rings.append([bm.verts.new(p + q @ Vector((radius * math.cos(k * 2 * PI / sides),
                                                   radius * math.sin(k * 2 * PI / sides), 0)))
                      for k in range(sides)])
    for a, c in zip(rings, rings[1:]):
        for k in range(sides):
            j = (k + 1) % sides
            bm.faces.new((a[k], a[j], c[j], c[k]))
    bm.faces.new(rings[0][::-1])
    bm.faces.new(rings[-1])
    bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces))
    return b._mesh(name, bm, mat, (0, 0, 0), (0, 0, 0), 0, 0, smooth=smooth)


def _frame(b, m, mount, width, depth):
    """Rear-edge equipment trays keep the three COM slots and module bay separate."""
    if _card(m):
        local = b
    else:
        _, y, z = getattr(m, mount)
        # All mounts are on the common hull. Rear cantilevers bolt to its deck,
        # outside the capacity-module envelope; left/right/mast occupy separate lanes,
        # the outer ones inboard of the roof edge (fit.py overhang).
        cy = {'antenna_left': y + (.21 if m.extra.get('recovery') else .25), 'antenna_right': y - .215,
              'radio_mast': y - .65}[mount]
        local = Builder(b.layer, b.m)
        local.matrix = b.matrix @ Matrix.Translation((m.back - .09, cy, z)) @ Matrix.Rotation(-PI / 2, 4, 'Z')
    local.card = _card(m)
    b = local
    # Contact shoes and continuous mounting tray: underside exactly at mount Z.
    for u in (-width * .36, width * .36):
        b.box('deck-shoe', (.085, depth + .10, .032), (u, .025, .016), 'paint_dark', bevel=.006)
    b.box('mount-tray', (width, depth, .025), (0, 0, .044), 'paint', bevel=.008)
    bolts = Batch(b, 'tray-fasteners', 'steel')
    for u in (-width * .41, width * .41):
        for v in (-depth * .38, depth * .38):
            bolts.cyl(.010, .009, (u, v, .061), verts=6)
    bolts.done()
    if not b.card:
        # Rear of local tray is positive Y, hence forward in vehicle X.
        for u in (-width * .36, width * .36):
            b.wedge('cantilever-gusset', [(-.02, .032), (.20, .032), (.20, .17)], .032,
                    (u, .08, .016), 'paint_dark', rot=(0, 0, PI / 2), bevel=.003)
            # A knee under each shoe's overhang, to its end, bears on the hull's rear face (local Y .09; 2 mm off it, to stay
            # out of the troop carrier's open compartment).
            end = .027 - (depth + .10) / 2
            b.wedge('cantilever-knee', [(.088, 0), (end, 0), (end, -.012), (.088, -.17)], .075,
                    (u, 0, 0), 'paint_dark', rot=(0, 0, PI / 2), bevel=.003)
    return b


def _bolts(b, x, y, z, w, h):
    batch = Batch(b, 'face-fasteners', 'steel')
    for xx in (x - w / 2 + .023, x + w / 2 - .023):
        for zz in (z + .023, z + h - .023):
            batch.cyl(.008, .009, (xx, y, zz), FACE, verts=6)
    batch.done()


def _socket(b, p, radius=.022, plugged=False):
    """Layered circular connector with a dark bore and inset contacts."""
    x, y, z = p
    b.cyl('connector-flange', radius * 1.30, .016, p, 'paint_light', FACE, verts=12, bevel=0)
    b.cyl('connector-collar', radius, .026, (x, y - .013, z), 'steel', FACE, verts=12, bevel=0)
    b.cyl('connector-plug' if plugged else 'connector-bore', radius * .78, .009,
          (x, y - .030, z), 'rubber' if plugged else 'black', FACE, verts=12, bevel=0)
    if not plugged:
        pins = Batch(b, 'connector-pins', 'chrome')
        for k in range(5):
            a = k * 2 * PI / 5
            pins.cyl(radius * .10, .006, (x + math.cos(a) * radius * .48, y - .037,
                      z + math.sin(a) * radius * .48), FACE, verts=6)
        pins.done()


def _knob(b, p, radius=.025):
    x, y, z = p
    b.cyl('dial-bezel', radius * 1.17, .012, p, 'gunmetal', FACE, verts=16, bevel=0)
    b.cyl('control-knob', radius, .032, (x, y - .018, z), 'rubber', FACE, verts=16, bevel=0)
    ribs = Batch(b, 'knob-knurl', 'gunmetal')
    for k in range(8):
        a = k * 2 * PI / 8
        ribs.box((.005, .024, .005), (x + radius * math.cos(a), y - .022, z + radius * math.sin(a)))
    ribs.done()
    b.box('dial-index', (.004, .002, radius * .32), (x, y - .035, z + radius * .55), 'paint_light', bevel=0)


def _radio(b, at, size=(.48, .30, .24), fins=9, keys=True):
    """Gasketed enclosure, cooling fins, face controls, grab handles and corner armour."""
    x, y, z = at
    w, d, h = size
    front = y - d / 2
    b.box('radio-casting', size, (x, y, z + h / 2), 'paint_dark', bevel=.018, segments=3)
    b.box('lid-gasket', (w + .008, d + .008, .012), (x, y, z + h - .025), 'rubber', bevel=.006)
    b.box('lid-plate', (w, d, .022), (x, y, z + h - .011), 'paint', bevel=.006)
    b.box('face-gasket', (w - .025, .016, h - .020), (x, front - .004, z + h / 2), 'rubber', bevel=.011)
    b.box('faceplate', (w - .036, .014, h - .030), (x, front - .014, z + h / 2), 'paint', bevel=.008)
    for i in range(fins):
        xx = x - w * .35 + i * w * .70 / max(1, fins - 1)
        b.box('cooling-fin', (.012, d * .79, .032), (xx, y + .004, z + h + .012), 'paint_dark', bevel=.003, segments=2)
    corners = Batch(b, 'corner-armour', 'paint_light')
    screws = Batch(b, 'lid-screws', 'steel')
    for xx in (x - w / 2 + .025, x + w / 2 - .025):
        for yy in (y - d / 2 + .023, y + d / 2 - .023):
            corners.box((.052, .048, .030), (xx, yy, z + h + .003))
            screws.cyl(.008, .009, (xx, yy, z + h + .024), verts=6)
    corners.done(bevel=.004)
    screws.done()
    for xx in (x - w / 2 + .023, x + w / 2 - .023):
        _tube(b, 'grab-handle', [(xx, front - .025, z + .045), (xx, front - .060, z + .053),
                             (xx, front - .060, z + h - .050), (xx, front - .025, z + h - .040)], .010, 'gunmetal', smooth=False)
    _bolts(b, x, front - .025, z, w - .035, h)
    if keys:
        b.box('display-surround', (w * .40, .016, h * .34), (x, front - .027, z + h * .64), 'gunmetal', bevel=.008)
        b.box('display-seal', (w * .36, .006, h * .28), (x, front - .038, z + h * .64), 'black', bevel=.005)
        b.box('unlit-display', (w * .32, .004, h * .23), (x, front - .043, z + h * .64), 'glass', bevel=.004)
        keypad = Batch(b, 'keypad', 'rubber')
        for row in range(2 if keys is True else 0):
            for col in range(5):
                keypad.box((w * .045, .011, h * .06), (x + (col - 2) * w * .068,
                           front - .031, z + h * (.22 + row * .11)))
        keypad.done(bevel=.003)
    _knob(b, (x - w * .31, front - .026, z + h * .63), h * .115)
    _knob(b, (x + w * .31, front - .026, z + h * .64), h * .135)
    _socket(b, (x + w * .30, front - .026, z + h * .25), h * .078)
    _socket(b, (x - w * .30, front - .026, z + h * .24), h * .080, True)
    if fins > 3:
        ribs = Batch(b, 'side-stiffeners', 'paint_light')
        for sign in (-1, 1):
            b.box('side-service-panel', (.012, d * .66, h * .65),
                  (x + sign * w / 2, y, z + h * .49), 'paint', bevel=.004)
            for k in range(3):
                ribs.box((.018, d * .55, .012),
                         (x + sign * (w / 2 + .007), y, z + h * (.26 + k * .20)))
        ribs.done(bevel=.002)
    # Sparse exposed-edge chips, geometry only, deterministic and unlettered.
    chips = Batch(b, 'edge-wear', 'steel')
    for i in range(6):
        chips.box((.008 + .003 * (i % 2), .002, .002),
                  (x - w * .33 + i * w * .12, front - .022, z + h - .032))
    chips.done()


def _whip(b, at, height, medium=False):
    """Bolted socket, ribbed spring, tapered ferrule and capped flexible rod."""
    x, y, z = at
    height = height * (.40 if medium else .36) if b.card else height
    b.box('antenna-foot', (.106, .106, .020), (x, y, z + .010), 'paint', bevel=.012)
    screws = Batch(b, 'antenna-bolts', 'steel')
    for dx in (-.038, .038):
        for dy in (-.038, .038):
            screws.cyl(.006, .009, (x + dx, y + dy, z + .025), verts=6)
    screws.done()
    b.cyl('antenna-socket', .038, .072, (x, y, z + .054), 'paint_dark', verts=20, bevel=.004)
    # Revolved corrugations read as a compression spring without costly torus meshes.
    profile = [(0, 0), (.027, 0)]
    for k in range(7):
        profile.extend([(.028, .012 + k * .017), (.038, .016 + k * .017),
                        (.038, .023 + k * .017), (.028, .028 + k * .017)])
    profile.extend([(.027, .137), (0, .137)])
    b.revolve('spring-bellows', profile, (x, y, z + .085), 'rubber' if medium else 'gunmetal',
              rot=(PI / 2, 0, 0), steps=12)
    b.cyl('tapered-ferrule', .026, .11, (x, y, z + .262), 'rubber', verts=20, radius2=.011, bevel=.002)
    b.cyl('whip-rod', .009, height, (x, y, z + .317 + height / 2), 'paint_dark',
          verts=16, radius2=.004, bevel=.001)
    b.cyl('whip-tip', .009, .027, (x, y, z + .326 + height), 'rubber', verts=16, bevel=.004)


def _lead(b, points, radius=.007):
    _tube(b, 'feeder-cable', points, radius, 'cable')


def _handset(b, at, connector, length=.23, telephone=False):
    """Docked microphone or two-ended secure handset with a restrained coiled lead."""
    x, y, z = at
    b.box('handset-cradle', (length + .028, .067, .024), (x, y, z + .012), 'paint_dark', bevel=.009)
    b.box('handset', (length, .057, .042), (x, y, z + .040), 'rubber', bevel=.016)
    ends = (-1, 1) if telephone else (1,)
    vents = Batch(b, 'handset-grille', 'black')
    for end in ends:
        xx = x + end * length * .32
        b.box('handset-earpiece', (.072, .073, .040), (xx, y, z + .058), 'gunmetal', bevel=.015)
        for k in range(5):
            vents.box((.004, .044, .003), (xx + (k - 2) * .010, y, z + .079))
    vents.done()
    points = [(x - length / 2, y, z + .044)]
    # Eight samples per turn keep the small coil legible within the mesh budget.
    for k in range(81):
        a = k * 2 * PI / 8
        points.append((x - length * .38 + k * .0014, y - .048 + .014 * math.cos(a),
                       z + .037 + .014 * math.sin(a)))
    points.append(connector)
    _tube(b, 'coiled-handset-cable', points, .004, 'cable', smooth=False)


def com_a(b, m):
    """Convoy radio: low finned transceiver with a single tall whip."""
    b = _frame(b, m, 'antenna_left', .66, .43)
    _radio(b, (.063, .025, .065), (.47, .32, .23), fins=12)
    _whip(b, (-.255, .085, .065), 2.15)
    _lead(b, [(-.255, .05, .13), (-.27, -.09, .11), (-.17, -.17, .12), (-.08, -.17, .12)])


def com_b(b, m):
    """Network extension: twin spring whips, structural crossbar and sealed junction."""
    b = _frame(b, m, 'antenna_right', .62, .27)
    b.box('crossbar', (.60, .090, .065), (0, .025, .098), 'paint', bevel=.008)
    for x in (-.245, .245):
        _whip(b, (x, .025, .13), 2.55)
        _lead(b, [(x, -.015, .185), (x, -.092, .13), (x * .65, -.10, .09), (x * .37, -.085, .14)])
    b.box('junction-gasket', (.215, .180, .125), (0, -.005, .142), 'rubber', bevel=.009)
    b.box('junction-box', (.201, .171, .110), (0, -.008, .143), 'paint', bevel=.007)
    b.box('junction-lid', (.224, .192, .020), (0, -.008, .208), 'paint_light', bevel=.007)
    _bolts(b, 0, -.098, .083, .204, .120)
    screws = Batch(b, 'junction-lid-bolts', 'steel')
    for x in (-.086, .086):
        for y in (-.073, .057):
            screws.cyl(.008, .009, (x, y, .223), verts=6)
    screws.done()
    _socket(b, (0, -.103, .138), .024, True)


def com_c(b, m):
    """Compact set: short broad blade, basic radio and docked speaker microphone."""
    b = _frame(b, m, 'antenna_left', .57, .34)
    _radio(b, (.054, .030, .065), (.35, .235, .205), fins=4, keys=False)
    b.cyl('blade-socket', .039, .11, (-.225, .065, .12), 'gunmetal', verts=20, bevel=.004)
    b.wedge('blade-antenna', [(-.045, 0), (.045, 0), (.042, .47), (.025, .49), (-.025, .49), (-.043, .47)],
            .025, (-.225, .065, .18), 'paint', bevel=.008)
    _handset(b, (.07, -.115, .065), (-.051, -.132, .114), .20)


def com_d(b, m):
    """Relay suite: collar-clamped telescopic mast, panel head and three-radio rack."""
    b = _frame(b, m, 'radio_mast', .68, .40)
    mastx = -.245
    mast_h = 1.36 if b.card else 2.65
    b.cyl('mast-pedestal', .085, .10, (mastx, .065, .11), 'paint_dark', verts=24, bevel=.008)
    for dx in (-.055, .055):
        b.box('mast-foot-flange', (.045, .19, .035), (mastx + dx, .065, .082), 'paint', bevel=.005)
    bottom = .16
    for i, r in enumerate((.054, .041, .029)):
        h = mast_h / 3
        b.cyl('telescopic-mast', r, h + .025, (mastx, .065, bottom + h / 2),
              'paint_dark' if i == 0 else 'paint', verts=24, bevel=.003)
        b.cyl('mast-clamp', r + .012, .032, (mastx, .065, bottom + h - .015), 'gunmetal', verts=24, bevel=.003)
        b.box('clamp-buckle', (.034, .028, .030), (mastx, .065 - r - .024, bottom + h - .015), 'paint_light', bevel=.003)
        bottom += h
    b.box('panel-yoke', (.115, .080, .080), (mastx, .065, bottom + .018), 'gunmetal', bevel=.008)
    b.cyl('panel-tilt-pivot', .031, .17, (mastx, .065, bottom + .055), 'gunmetal', (0, PI / 2, 0), verts=16, bevel=.003)
    b.box('relay-panel-frame', (.59, .090, .265), (-.015, .065, bottom + .20), 'paint_dark', bevel=.013)
    b.box('relay-radome', (.548, .015, .223), (-.015, .012, bottom + .20), 'paint_light', bevel=.012)
    _bolts(b, -.015, .001, bottom + .068, .59, .265)
    _lead(b, [(mastx, .115, .16), (mastx + .068, .115, .4), (mastx + .052, .115, bottom - .10),
              (mastx + .09, .115, bottom + .10), (.14, .115, bottom + .18)], .009)
    for k in range(3):
        _radio(b, (.090, .028, .083 + k * .170), (.35, .26, .148), fins=3)
    for xx in (-.112, .292):
        b.box('rack-upright', (.023, .29, .563), (xx, .028, .344), 'paint_dark', bevel=.004)
    b.box('rack-top', (.43, .31, .025), (.09, .028, .638), 'paint', bevel=.006)
    b.box('rack-service-cover', (.015, .22, .38), (.309, .028, .348), 'paint', bevel=.008)
    vents = Batch(b, 'rack-louvres', 'black')
    for k in range(6):
        vents.box((.002, .16, .008), (.318, .028, .235 + k * .044))
    vents.done()
    for k in range(2):
        _lead(b, [(-.015, -.150, .18 + k * .17), (-.055, -.185, .19 + k * .17),
                  (-.070, -.180, .30 + k * .17), (-.015, -.150, .35 + k * .17)], .006)


def com_e(b, m):
    """Long-range HF: heavy side fins, twin whips and horizontal folding-mast pack."""
    b = _frame(b, m, 'radio_mast', .70, .45)
    recovery = m.extra.get('recovery', False) and not _card(m)
    _radio(b, (0, .018, .076), (.56, .36, .285), fins=10, keys='hf')
    for x, y, height in ((-.278, .12, 2.60), (-.17, -.15, 2.1) if recovery else (.278, .12, 2.1)):
        _whip(b, (x, y, .365), height)
    fins = Batch(b, 'side-heatsink', 'paint_dark')
    for x in (-.296, .296):
        for k in range(8):
            fins.box((.037, .012, .212), (x, -.105 + k * .033, .216))
    fins.done(bevel=.003)
    b.box('speaker-recess', (.28, .011, .066), (0, -.183, .122), 'black', bevel=.005)
    bars = Batch(b, 'speaker-louvres', 'paint_light')
    for i in range(4):
        bars.box((.27, .012, .005), (0, -.192, .098 + i * .015))
    bars.done(bevel=.001)
    for y in (.012, .073):
        b.cyl('stowed-mast-section', .024, .46, (0, y, .414), 'paint_dark', (0, PI / 2, 0), verts=20, bevel=.004)
    for x in (-.16, .16):
        b.box('mast-pack-saddle', (.032, .136, .030), (x, .043, .377), 'paint', bevel=.004)
        _tube(b, 'mast-pack-strap', [(x, -.021, .383), (x, -.023, .447), (x, .105, .447), (x, .109, .383)], .008, 'gunmetal', smooth=False)
    b.cyl('folding-mast-hinge', .032, .069, (.24, .042, .414), 'steel', FACE, verts=12, bevel=0)


def com_f(b, m):
    """Secure set: single whip, separate crypto enclosure and docked telephone handset."""
    b = _frame(b, m, 'antenna_left', .68, .44)
    _radio(b, (-.050, .053, .065), (.39, .27, .205), fins=6)
    _whip(b, (-.270, .090, .065), 1.8, medium=True)
    b.box('crypto-gasket', (.147, .269, .219), (.235, .046, .178), 'rubber', bevel=.012)
    b.box('crypto-unit', (.139, .254, .208), (.235, .046, .178), 'paint_dark', bevel=.014)
    b.box('crypto-face', (.126, .018, .181), (.235, -.090, .178), 'paint', bevel=.008)
    _socket(b, (.235, -.107, .161), .028, True)
    _bolts(b, .235, -.102, .087, .128, .180)
    for i in range(4):
        b.box('crypto-fin', (.008, .210, .018), (.190 + i * .03, .047, .289), 'paint_dark', bevel=.002)
    _handset(b, (-.016, -.151, .065), (-.167, -.115, .114), .275, telephone=True)
    _lead(b, [(.235, -.14, .16), (.22, -.18, .11), (.13, -.19, .13), (.07, -.117, .16)])


def com_g(b, m):
    """Dual channel: twin pedestal whips beside two independently controlled receivers."""
    b = _frame(b, m, 'antenna_right', .63, .40)
    for y in (-.071, .105):
        b.box('twin-pedestal', (.127, .138, .036), (-.244, y, .078), 'paint_light', bevel=.010)
        _whip(b, (-.244, y, .098), 1.48, medium=True)
    for k in range(2):
        _radio(b, (.071, .025, .069 + k * .207), (.415, .282, .177), fins=6)
        _lead(b, [(-.244, -.09, .16), (-.27, -.185, .18 + k * .08),
                  (-.14, -.19, .16 + k * .20), (-.055, -.16, .12 + k * .207)])
    for x in (-.108, .25):
        b.box('stack-cleat', (.026, .23, .040), (x, .027, .269), 'steel', bevel=.004)
