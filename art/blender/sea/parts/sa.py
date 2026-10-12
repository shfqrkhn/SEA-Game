"""Seven procedural SA assemblies with hardware sized for the shared roof slots."""
import math
from mathutils import Matrix, Vector
from ..geo import Batch, Builder
from .common import PI, _card

X_AXIS = (0, PI / 2, 0)
Y_AXIS = (PI / 2, 0, 0)


def _frame(b, at, yaw=0):
    """Local frame preserving the caller's transform, materials and layer."""
    local = Builder(b.layer, b.m, at, (0, 0, yaw))
    local.matrix = b.matrix @ local.matrix
    return local


def _optics(b, m):
    x, y, z = m.optics
    if _card(m):
        return _frame(b, (x, y, z), -.35)
    # Keep the shoe on the roof; cantilever the head forward over the glacis
    # to leave the auxiliary gun and its folding shield a separate envelope.
    support = _frame(b, (x + .205, y + .06, z))
    support.box('optics-deck-shoe', (.070, .050, .016), (0, 0, .008), 'paint_dark', bevel=.003)
    _bolts(support, 'optics-shoe-studs', [(a, c, .019) for a in (-.025, .025) for c in (-.015, .015)], .005)
    support.wedge('optics-riser', [(-.005, .016), (.025, .016), (.67, .27), (.67, .30), (-.005, .30)],
                  .055, (0, -.008, 0), 'paint_dark', bevel=.006)
    support.box('optics-cantilever', (.70, .075, .040), (.335, -.015, .30), 'paint', bevel=.008)
    support.box('optics-head-crossplate', (.14, .32, .040), (.645, .11, .30), 'paint', bevel=.008)
    return _frame(b, (x + .85, y + .28, z + .32))


def _bolts(b, name, points, radius=.012, rot=(0, 0, 0)):
    hardware = Batch(b, name, 'steel')
    for p in points:
        hardware.cyl(radius, radius * .65, p, rot, verts=6)
    hardware.done()


def _foot(b, size=(.28, .28), height=.035, name='mount-foot'):
    b.box(name, (*size, height), (0, 0, height / 2), 'paint_dark', bevel=.012)
    _bolts(b, name + '-bolts', [(sx * (size[0] / 2 - .025), sy * (size[1] / 2 - .025), height + .004)
                              for sx in (-1, 1) for sy in (-1, 1)])


def _ring(b, name, radius, depth, at, mat='gunmetal', axis='x', wall=.012, verts=32):
    """Closed section revolved into an open bore instead of opaque stacked discs."""
    profile = [(radius - wall, -depth / 2), (radius, -depth / 2), (radius, depth / 2),
               (radius - wall, depth / 2), (radius - wall, -depth / 2)]
    rot = (0, 0, -PI / 2) if axis == 'x' else (PI / 2, 0, 0)
    b.revolve(name, profile, at, mat, rot=rot, steps=verts)


def _lens(b, at, radius, name='lens'):
    """Recessed optical stack with open barrel, retaining rings and curved glass."""
    x, y, z = at
    _ring(b, name + '-barrel', radius, .042, at, wall=radius * .17)
    _ring(b, name + '-retainer', radius * .89, .011, (x + .016, y, z), 'black', wall=radius * .08)
    b.cyl(name + '-well', radius * .80, .006, (x - .018, y, z), 'black', rot=X_AXIS, verts=32, bevel=0)
    b.revolve(name + '-glass', [(radius * .78, 0), (radius * .55, .007), (0, .011)],
              (x - .010, y, z), 'glass', rot=(0, 0, -PI / 2), steps=32)


def _strut(b, name, start, end, radius, mat='paint', verts=12):
    a, c = Vector(start), Vector(end)
    delta = c - a
    b.cyl(name, radius, delta.length, (a + c) / 2, mat,
          rot=delta.to_track_quat('Z', 'Y').to_euler(), verts=verts, bevel=0)


def _cable(b, name, points, radius=.009):
    """Low-sided cable segments keep bounds and real-time tessellation predictable."""
    for a, c in zip(points, points[1:]):
        _strut(b, name, a, c, radius, 'cable', verts=8)


def _camera(b, size=1.0):
    """Day camera, sunshade, sealed rear plate and two-sided tilt bracket."""
    b = _frame(b, (0, 0, 0))
    b.matrix = b.matrix @ Matrix.Diagonal((size, size, size, 1))
    _foot(b, (.30, .28))
    b.cyl('camera-pan', .095, .065, (0, 0, .067), 'gunmetal', verts=32, bevel=.006 if size == 1 else 0)
    for side in (-1, 1):
        b.wedge('camera-cheek', [(-.09, .08), (.10, .08), (.09, .23), (.055, .30), (-.055, .30)],
                .025, (0, side * .117, 0), 'paint', bevel=.009)
        b.cyl('camera-pivot', .047, .04, (0, side * .137, .255), 'gunmetal', rot=Y_AXIS, verts=24, bevel=.004 if size == 1 else 0)
        _bolts(b, 'camera-pivot-cap', [(0, side * .16, .255)], .020, Y_AXIS)
    b.box('camera-gasket', (.31, .208, .20), (.025, 0, .285), 'rubber', bevel=.022)
    b.box('camera-case', (.29, .22, .22), (.01, 0, .285), 'paint', bevel=.028)
    b.box('camera-back', (.024, .211, .20), (-.15, 0, .285), 'paint_dark', bevel=.016)
    b.box('camera-face', (.026, .20, .20), (.164, 0, .285), 'gunmetal', bevel=.027)
    _lens(b, (.184, 0, .285), .080)
    b.box('camera-hood', (.35, .245, .021), (.05, 0, .407), 'paint', bevel=.009)
    for side in (-1, 1):
        b.wedge('camera-hood-wing', [(-.12, .40), (.22, .40), (.19, .30), (.10, .30), (-.12, .36)],
                .017, (0, side * .118, 0), 'paint', bevel=.006)
    _bolts(b, 'camera-face-screws', [(.181, y, z) for y in (-.075, .075) for z in (.212, .357)], .009, X_AXIS)
    _bolts(b, 'camera-lid-screws', [(x, y, .423) for x in (-.08, .12) for y in (-.095, .095)], .009)
    b.cyl('camera-connector', .027, .05, (-.18, 0, .27), 'gunmetal', rot=X_AXIS, verts=16, bevel=.003)
    _cable(b, 'camera-cable', [(-.207, 0, .27), (-.23, 0, .23), (-.23, 0, .11), (-.14, 0, .045)])


def sa_a(b, m):
    """Six hooded periscopes around a bolted cupola and articulated hatch hardware."""
    b = _optics(b, m)
    b.cyl('cupola-flange', .335, .055, (0, 0, .0275), 'paint_dark', verts=64, bevel=.008)
    b.cyl('cupola-body', .310, .175, (0, 0, .135), 'paint', verts=64, radius2=.274, bevel=.009)
    for k in range(6):
        a = 2 * PI * k / 6
        f = _frame(b, (.268 * math.cos(a), .268 * math.sin(a), .143), a)
        f.box('periscope-gasket', (.023, .171, .101), (.014, 0, 0), 'rubber', bevel=.012)
        f.box('periscope-glass', (.016, .147, .073), (.031, 0, 0), 'glass', bevel=.009)
        f.box('periscope-hood', (.092, .20, .021), (.025, 0, .065), 'paint', bevel=.005)
        f.box('periscope-sill', (.070, .19, .014), (.023, 0, -.061), 'paint_dark', bevel=.004)
        for side in (-1, 1):
            f.box('periscope-cheek', (.086, .019, .125), (.024, side * .091, .003), 'paint', bevel=.005)
        _bolts(f, 'periscope-fasteners', [(.053, y, -.050) for y in (-.067, .067)], .009)
    _bolts(b, 'cupola-flange-bolts', [(.315 * math.cos(k * PI / 4), .315 * math.sin(k * PI / 4), .059)
                                    for k in range(8)], .012)
    b.cyl('hatch-seal', .269, .018, (0, 0, .236), 'rubber', verts=64, bevel=.003)
    b.cyl('hatch-rim', .279, .031, (0, 0, .254), 'paint_dark', verts=64, bevel=.008)
    b.cyl('hatch-lid', .253, .029, (0, 0, .277), 'paint', verts=64, bevel=.007)
    for y in (-.12, .12):
        b.box('hatch-hinge-leaf', (.085, .045, .028), (-.215, y, .293), 'paint_dark', bevel=.005)
        b.cyl('hatch-hinge', .025, .065, (-.25, y, .304), 'gunmetal', rot=Y_AXIS, verts=20, bevel=.003)
    b.box('hatch-latch', (.085, .14, .026), (.213, 0, .309), 'paint_dark', bevel=.009)
    _bolts(b, 'hatch-latch-studs', [(.215, y, .327) for y in (-.053, .053)], .014)
    for y in (-.061, .061):
        b.box('handle-lug', (.034, .03, .04), (-.065, y, .315), 'paint_dark', bevel=.004)
    _strut(b, 'hatch-handle', (-.065, -.061, .338), (-.065, .061, .338), .010, 'gunmetal')


def sa_c(b, m):
    """Smallest set: a single rugged day camera on a short pan/tilt bracket."""
    _camera(_optics(b, m))


def sa_e(b, m):
    """Wide armoured thermal/day head with a six-cell IR illuminator and tilt bearings."""
    b = _optics(b, m)
    _foot(b, (.34, .40))
    b.cyl('vision-pan-seal', .15, .037, (0, 0, .054), 'rubber', verts=40, bevel=.004)
    b.cyl('vision-pan', .155, .065, (0, 0, .100), 'paint_dark', verts=40, bevel=.006)
    for side in (-1, 1):
        b.wedge('vision-yoke', [(-.105, .12), (.10, .12), (.065, .37), (-.065, .37)], .028,
                (0, side * .238, 0), 'paint', bevel=.009)
        b.cyl('vision-tilt-bearing', .060, .048, (0, side * .258, .315), 'gunmetal', rot=Y_AXIS, verts=24, bevel=.005)
        _bolts(b, 'vision-bearing-cap', [(0, side * .285, .315)], .026, Y_AXIS)
    b.box('vision-body', (.31, .447, .286), (.012, 0, .337), 'paint_dark', bevel=.035)
    b.box('vision-rear-seal', (.018, .422, .260), (-.15, 0, .337), 'rubber', bevel=.018)
    b.box('vision-rear-plate', (.025, .424, .262), (-.17, 0, .337), 'paint', bevel=.018)
    for y, z, r, label in ((-.106, .351, .105, 'thermal'), (.118, .402, .063, 'day')):
        b.box(label + '-flange', (.030, r * 2.36, r * 2.36), (.177, y, z), 'paint', bevel=.018)
        b.box(label + '-seal', (.016, r * 2.04, r * 2.04), (.197, y, z), 'black', bevel=.014)
        _lens(b, (.217, y, z), r, label)
        _bolts(b, label + '-screws', [(.197, y + sy * r, z + sz * r) for sy in (-1, 1) for sz in (-1, 1)], .008, X_AXIS)
    b.box('illuminator-frame', (.038, .172, .096), (.187, .113, .279), 'paint', bevel=.012)
    b.box('illuminator-well', (.016, .147, .073), (.209, .113, .279), 'black', bevel=.007)
    for y in (.064, .113, .162):
        for z in (.258, .300):
            b.cyl('illuminator-cell', .016, .008, (.222, y, z), 'steel', rot=X_AXIS, verts=16, bevel=.002)
            b.cyl('illuminator-glass', .012, .009, (.228, y, z), 'glass', rot=X_AXIS, verts=16, bevel=.002)
    b.box('vision-sunshield', (.405, .50, .021), (.025, 0, .498), 'paint', bevel=.009)
    for side in (-1, 1):
        b.box('vision-hood-cheek', (.37, .019, .084), (.03, side * .245, .455), 'paint', bevel=.008)
    fins = Batch(b, 'vision-cooling-fins', 'gunmetal')
    for k in range(9):
        fins.box((.045, .016, .185), (-.198, -.15 + k * .0375, .335))
    fins.done(bevel=.003)
    _bolts(b, 'vision-roof-screws', [(x, y, .516) for x in (-.12, .15) for y in (-.20, .20)], .010)
    _cable(b, 'vision-cable', [(-.20, -.12, .26), (-.225, -.12, .19), (-.19, -.12, .08), (-.12, -.12, .04)])


def sa_b(b, m):
    """Medium mast with separate EO gimbal and radar pedestal on a crossarm."""
    b = _frame(b, m.sensor_mast, -.35 if _card(m) else 0)
    # Long and narrow on the vehicle: the lane between the engine deck and the roof edge.
    _foot(b, (.32, .32) if _card(m) else (.36, .24), .046)
    b.box('mast-drive', (.255, .255, .20), (0, 0, .151), 'paint', bevel=.022)
    b.box('drive-service', (.026, .20, .14), (.14, 0, .15), 'paint_dark', bevel=.012)
    _bolts(b, 'drive-service-screws', [(.155, y, z) for y in (-.075, .075) for z in (.10, .20)], .010, X_AXIS)
    b.cyl('mast-column', .069, .91, (0, 0, .695), 'paint', verts=40, bevel=.008)
    for z in (.255, .40, 1.02, 1.145):
        b.cyl('mast-collar', .083, .042, (0, 0, z), 'paint_dark', verts=32, bevel=.004)
    b.box('sensor-crossarm', (.58, .135, .095), (0, 0, 1.155), 'paint_dark', bevel=.018)
    f = _frame(b, (.20, 0, 1.20))
    f.cyl('gimbal-pan', .103, .047, (0, 0, .025), 'gunmetal', verts=32, bevel=.006)
    for side in (-1, 1):
        f.wedge('gimbal-cheek', [(-.075, .047), (.075, .047), (.085, .25), (.03, .29), (-.065, .28)],
                .032, (0, side * .183, 0), 'paint', bevel=.009)
        f.cyl('gimbal-trunnion', .055, .043, (0, side * .194, .235), 'gunmetal', rot=Y_AXIS, verts=24, bevel=.006)
    f.sphere('sensor-ball', .175, (0, 0, .240), 'paint', scale=(.86, 1, 1.05))
    f.box('sensor-face', (.035, .239, .26), (.120, 0, .246), 'paint_dark', bevel=.045)
    _lens(f, (.155, -.042, .288), .071, 'eo-primary')
    _lens(f, (.159, .067, .196), .037, 'eo-secondary')
    f.box('eo-range-window', (.014, .053, .056), (.151, .067, .292), 'glass', bevel=.009)
    _bolts(f, 'eo-face-screws', [(.145, y, z) for y in (-.09, .09) for z in (.15, .35)], .008, X_AXIS)
    b.cyl('radar-pan', .088, .070, (-.23, 0, 1.221), 'gunmetal', verts=28, bevel=.005)
    b.box('radar-neck', (.07, .11, .20), (-.23, 0, 1.30), 'paint_dark', bevel=.01)
    b.box('radar-frame', (.073, .43, .45), (-.23, 0, 1.58), 'paint_dark', bevel=.028)
    b.box('radar-gasket', (.012, .408, .427), (-.187, 0, 1.58), 'rubber', bevel=.025)
    b.box('radar-face', (.015, .386, .405), (-.176, 0, 1.58), 'paint_light', bevel=.019)
    _bolts(b, 'radar-rim-fasteners', [(-.162, y, z) for y in (-.185, .185) for z in (1.405, 1.58, 1.755)], .008, X_AXIS)
    for y in (-.14, .14):
        b.box('radar-back-rib', (.03, .025, .33), (-.28, y, 1.58), 'paint', bevel=.004)
    _cable(b, 'mast-cable', [(.12, -.07, .20), (.105, -.085, .35), (.105, -.085, .95),
                            (.14, -.085, 1.09), (.20, -.07, 1.20)], .011)
    for z in (.40, .80, 1.01):
        b.box('cable-clamp', (.055, .03, .026), (.10, -.084, z), 'steel', bevel=.003)


def sa_d(b, m):
    """Three-stage telescopic mast, panoramic head and four compact roof guy anchors."""
    b = _frame(b, m.sensor_mast, -.35 if _card(m) else 0)
    _foot(b, (.38, .38) if _card(m) else (.40, .24), .050)
    b.box('mast-drive-case', (.25, .25, .23), (0, 0, .165), 'paint', bevel=.023)
    grilles = Batch(b, 'mast-drive-grille', 'gunmetal')
    for k in range(7):
        grilles.box((.009, .17, .010), (.129, 0, .095 + k * .021))
    grilles.done()
    for radius, bottom, top in ((.079, .28, 1.19), (.060, 1.19, 2.02), (.044, 2.02, 2.75)):
        b.cyl('telescopic-mast', radius, top - bottom, (0, 0, (bottom + top) / 2), 'paint', verts=32, bevel=.004)
        for z in (bottom + .025, top - .025):
            b.cyl('mast-collar', radius + .012, .038, (0, 0, z), 'paint_dark', verts=32, bevel=.004)
            _bolts(b, 'collar-screws', [(radius + .011, 0, z)], .009, X_AXIS)
    _cable(b, 'mast-power', [(-.09, 0, .25), (-.09, 0, 1.18), (-.074, 0, 1.25), (-.074, 0, 2.03), (-.058, 0, 2.13), (-.058, 0, 2.75)], .006)
    b.cyl('head-neck', .074, .090, (0, 0, 2.76), 'gunmetal', verts=28, bevel=.004)
    b.cyl('head-undertray', .228, .036, (0, 0, 2.813), 'paint_dark', verts=32, bevel=.007)
    b.cyl('panoramic-head', .209, .176, (0, 0, 2.913), 'paint', verts=8, bevel=.008)
    for k in range(4):
        f = _frame(b, (0, 0, 2.915), PI / 4 + k * PI / 2)
        f.box('head-optic-flange', (.026, .125, .14), (.202, 0, 0), 'paint_dark', bevel=.012)
        _lens(f, (.226, -.014, .012), .047, 'head-optic')
        f.box('head-optic-aux', (.016, .035, .043), (.225, .043, -.038), 'glass', bevel=.004)
        _bolts(f, 'head-face-screws', [(.222, y, z) for y in (-.049, .049) for z in (-.055, .055)], .007, X_AXIS)
    b.cyl('head-lid', .225, .023, (0, 0, 3.012), 'paint_dark', verts=32, bevel=.006)
    b.cyl('head-cap', .047, .029, (0, 0, 3.038), 'paint', verts=24, radius2=.029, bevel=.005)
    # On the vehicle the anchors stand in the mast lane, spread fore and aft.
    spread_x, spread_y = (.46, .46) if _card(m) else (.22, .075)
    for sx in (-1, 1):
        for sy in (-1, 1):
            a = Vector((sx * spread_x, sy * spread_y, .065))
            arm_length = math.hypot(spread_x, spread_y)
            b.box('guy-outrigger', (arm_length, .060, .046), (a.x / 2, a.y / 2, .052),
                  'paint', rot=(0, 0, math.atan2(a.y, a.x)), bevel=.006)
            c = Vector((sx * .045, sy * .045, 2.03))
            b.box('guy-anchor', (.085, .085, .034), (a.x, a.y, .017), 'paint_dark', bevel=.006)
            _strut(b, 'anchor-eye', (a.x, a.y, .027), a, .014, 'gunmetal')
            _strut(b, 'guy-line', a, c, .003, 'cable', verts=6)
            _strut(b, 'guy-tensioner', a.lerp(c, .045), a.lerp(c, .11), .009, 'steel', verts=8)


def _corner_frame(b, m, corner):
    """Deck feet and short outboard cantilevers clear the neighbouring optics slot."""
    x, y, z = corner
    if _card(m):
        return _frame(b, corner, -.35)
    middle = sum(p[0] for p in m.corners) / len(m.corners)
    yaw = 0 if x > middle else PI
    sign = (1 if y > 0 else -1) * (1 if yaw == 0 else -1)
    if yaw == 0:
        # Front feet bolt to the roof just ahead of the corner, inboard of the roof edge (fit.py overhang).
        f = _frame(b, (x + .065, y - sign * .005, z))
        _foot(f, (.070, .070), .032, 'corner-foot')
        f.wedge('corner-outrigger', [(-.035, .03), (.26, .29), (.26, .33), (-.035, .07)], .070,
                (0, sign * .045, 0), 'paint_dark', bevel=.007)
        return _frame(f, (.23, sign * .075, .31))
    f = _frame(b, corner, yaw)
    _foot(f, (.11, .11), .032, 'corner-foot')
    f.wedge('corner-outrigger', [(-.05, .03), (.18, .11), (.18, .15), (-.05, .07)], .070,
            (0, sign * .045, 0), 'paint_dark', bevel=.007)
    return _frame(f, (.14, sign * .11, .13))


def sa_f(b, m):
    """Four domed armoured pods with optical recesses, service covers and isolators."""
    for corner in m.corners:
        f = _corner_frame(b, m, corner)
        _foot(f, (.285, .285), .036, 'pod-base')
        f.cyl('pod-isolator', .113, .024, (0, 0, .050), 'rubber', verts=32, bevel=.004)
        f.cyl('pod-lower-ring', .130, .029, (0, 0, .077), 'paint_dark', verts=32, bevel=.005)
        shell = f.revolve('pod-shell', [(.125, -.09), (.128, -.01), (.126, .06), (.111, .123),
                                (.080, .167), (.037, .190), (0, .195)],
                  (0, 0, .182), 'paint', rot=(PI / 2, 0, 0), steps=40)
        # Flatten the optical aperture so no lens is buried in the domed armour.
        for vertex in shell.data.vertices:
            vertex.co.x = min(vertex.co.x, .094)
        f.revolve('pod-cap-seam', [(.114, 0), (.113, .003)], (0, 0, .30),
                  'paint_dark', rot=(PI / 2, 0, 0), steps=32)
        f.box('pod-optic-recess', (.025, .16, .19), (.106, 0, .210), 'black', bevel=.020)
        _lens(f, (.126, -.018, .182), .047, 'pod-main')
        _lens(f, (.126, -.028, .268), .025, 'pod-day')
        f.box('pod-aux-window', (.012, .037, .057), (.128, .049, .239), 'glass', bevel=.007)
        for side in (-1, 1):
            f.box('pod-service-seal', (.12, .017, .134), (-.015, side * .115, .173), 'rubber', bevel=0)
            f.box('pod-service', (.112, .018, .124), (-.015, side * .126, .173), 'paint_dark', bevel=.010)
            _bolts(f, 'pod-service-screws', [(x, side * .138, z) for x in (-.053, .023) for z in (.13, .214)], .007, Y_AXIS)


def sa_g(b, m):
    """Four bracket cameras with a finned, connector-equipped data concentrator."""
    centre = tuple(sum(p[k] for p in m.corners) / len(m.corners) for k in range(3))
    corners = [tuple(centre[k] + (p[k] - centre[k]) * (1.3 if k < 2 else 1) for k in range(3))
               for p in m.corners] if _card(m) else m.corners
    for corner in corners:
        _camera(_corner_frame(b, m, corner), .64)
    rear = sorted(m.corners, key=lambda p: p[0])[:2]
    x = sum(p[0] for p in rear) / 2
    y = min(p[1] for p in rear)
    z = rear[0][2]
    # Inboard of the roof edge, sole and all (fit.py overhang), and behind the recovery module.
    # On the recovery hull a narrower foot stands between the roof edge and the rear service plate.
    recovery = m.extra.get('recovery') and not _card(m)
    hub_at = centre if _card(m) else (x + .20, y + (0 if recovery else .08), z)
    f = _frame(b, hub_at)
    if _card(m):
        f.matrix = f.matrix @ Matrix.Diagonal((1.45, 1.35, 1, 1))
    _foot(f, (.33, .19 if recovery else .25), .027, 'hub-foot')
    f.box('data-hub', (.28, .21, .12), (0, 0, .091), 'paint_dark', bevel=.013)
    f.box('hub-lid-seal', (.286, .216, .009), (0, 0, .154), 'rubber', bevel=.005)
    f.box('hub-lid', (.29, .22, .014), (0, 0, .166), 'paint', bevel=.007)
    fins = Batch(f, 'hub-fin', 'paint')
    for k in range(10):
        fins.box((.012, .18, .026), (-.117 + k * .026, 0, .184))
    fins.done(bevel=.003)
    _bolts(f, 'hub-lid-bolts', [(x, y, .18) for x in (-.124, .124) for y in (-.089, .089)], .008)
    for x in (-.096, -.032, .032, .096):
        f.cyl('hub-connector', .020, .028, (x, -.116, .095), 'gunmetal', rot=Y_AXIS, verts=12, bevel=.002)
        f.cyl('hub-socket', .012, .006, (x, -.134, .095), 'black', rot=Y_AXIS, verts=12, bevel=0)
    if _card(m):
        hx, hy, hz = centre
        for index, (cx, cy, cz) in enumerate(corners):
            sign = -1 if cy < hy else 1
            socket_x = hx + (-.096, .096, -.032, .032)[index] * 1.45
            lane_y = hy + sign * (.20 + .025 * (index // 2))
            lead_x = cx - .14 * .64 * math.cos(.35)
            lead_y = cy + .14 * .64 * math.sin(.35)
            _cable(b, 'camera-cable', [(lead_x, lead_y, cz + .045 * .64),
                                      (cx - .17, lead_y, hz + .024), (cx - .17, lane_y, hz + .024),
                                      (hx + .29, lane_y, hz + .024), (hx + .29, hy - .23 - index * .01, hz + .024),
                                      (socket_x, hy - .23 - index * .01, hz + .024),
                                      (socket_x, hy - .205, hz + .095), (socket_x, hy - .1809, hz + .095)], .006)








