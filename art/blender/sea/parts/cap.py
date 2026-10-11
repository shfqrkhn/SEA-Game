"""Seven deck-mounted crew modules; metres, +X forward, -Y camera-facing.

A local 3.2 x 2.2 x 1.85 envelope includes every fitting. The whole assembly
is fitted to Mounts, preserving the capacity hierarchy even on a short deck.
"""
import math

import bmesh
from mathutils import Matrix

from ..geo import Batch, Builder, loft
from .common import PI, _sides

ENVELOPE = (3.2, 2.2, 1.85)


def _frame(b, m, proportions):
    """Map the complete module, including ladders, into its reserved deck box."""
    length = min(3.2, m.deck_size[0]) * proportions[0]
    width = min(2.2, m.deck_size[1]) * proportions[1]
    height = min(1.85, m.extra.get('module_h', 1.85)) * proportions[2]
    local = Builder(b.layer, b.m)
    local.matrix = b.matrix @ Matrix.Translation((m.deck[0], 0, m.deck[1])) @ Matrix.Diagonal(
        (length / ENVELOPE[0], width / ENVELOPE[1], height / ENVELOPE[2], 1))
    return local


def _face(b, x=0, y=-1.0, z=0, rear=False, side=-1):
    """Face frame: local X runs horizontally; negative local Y points out."""
    f = Builder(b.layer, b.m)
    angle = -PI / 2 if rear else (0 if side < 0 else PI)
    f.matrix = b.matrix @ Matrix.Translation((x, y, z)) @ Matrix.Rotation(angle, 4, 'Z')
    return f


def _bolts(b, points, radius=0.018):
    studs = Batch(b, 'hex-fasteners', 'steel')
    for x, y, z in points:
        studs.cyl(radius, 0.017, (x, y, z), (PI / 2, 0, 0), verts=6)
    studs.done()


def _panel(b, x, z, width, height, mat='paint', depth=0.035, bolts=True):
    panel = Batch(b, 'armour-panel', mat)
    panel.box((width, depth, height), (x, -depth / 2, z))
    panel.done(bevel=min(0.012, depth * 0.3))
    if bolts:
        _bolts(b, [(x + sx * (width / 2 - 0.045), -depth - 0.009,
                    z + sz * (height / 2 - 0.045)) for sx in (-1, 1) for sz in (-1, 1)])


def _window(b, x, z, width=0.5, height=0.3, hood=True):
    """Dark gasket and glazing inside a separately raised, bolted metal frame."""
    b.box('window-gasket', (width + 0.09, 0.026, height + 0.09), (x, -0.045, z), 'rubber', bevel=0.025)
    b.box('vision-glass', (width, 0.014, height), (x, -0.063, z), 'glass', bevel=0.016)
    metal = Batch(b, 'window-surround', 'paint_light')
    for sx in (-1, 1):
        metal.box((0.045, 0.055, height + 0.15), (x + sx * (width / 2 + 0.057), -0.052, z))
    for sz in (-1, 1):
        metal.box((width + 0.16, 0.055, 0.045), (x, -0.052, z + sz * (height / 2 + 0.055)))
    metal.done(bevel=0.008)
    _bolts(b, [(x + sx * (width / 2 + 0.054), -0.088,
                z + sz * (height / 2 + 0.05)) for sx in (-1, 1) for sz in (-1, 1)], 0.014)
    if hood:
        b.box('vision-rain-lip', (width + 0.19, 0.09, 0.045),
              (x, -0.052, z + height / 2 + 0.093), 'paint', bevel=0.009)


def _handle(b, x, z, height=0.27):
    for zz in (z - height / 2, z + height / 2):
        b.box('handle-foot', (0.065, 0.03, 0.065), (x, -0.042, zz), 'paint_dark', bevel=0.008)
    b.tube('grab-handle', [(x, -0.05, z - height / 2), (x, -0.095, z - height / 2 + 0.04),
                          (x, -0.095, z + height / 2 - 0.04), (x, -0.05, z + height / 2)],
           0.019, 'gunmetal', smooth=False)


def _door(b, x, width=0.68, top=1.4, window=True):
    height = top - 0.16
    b.box('door-seal', (width + 0.08, 0.024, height + 0.065), (x, -0.025, 0.16 + height / 2), 'rubber', bevel=0.025)
    _panel(b, x, 0.16 + height / 2, width, height, 'paint_light', 0.05)
    for zz in (0.33, top - 0.16):
        b.box('hinge-leaf', (0.15, 0.035, 0.085), (x - width / 2, -0.069, zz), 'paint', bevel=0.008)
        b.cyl('hinge-pin', 0.029, 0.12, (x - width / 2, -0.082, zz), 'gunmetal', verts=12, bevel=0.004)
    _handle(b, x + width * 0.32, 0.65)
    if window:
        _window(b, x, top - 0.31, width * 0.42, 0.21, False)
    b.box('door-sill', (width + 0.08, 0.07, 0.045), (x, -0.05, 0.12), 'steel', bevel=0.006)


def _base(b):
    """Continuous mounting sole, floor, rails and captive corner locks."""
    b.box('mounting-sole', (2.96, 1.88, 0.06), (0, 0, 0.03), 'paint_dark', bevel=0.006)
    b.box('floor', (3.0, 2.0, 0.075), (0, 0, 0.0975), 'paint', bevel=0.012)
    _edge_wear(b)
    for side in (-1, 1):
        b.box('base-channel', (2.96, 0.065, 0.12), (0, side * 0.98, 0.14), 'paint_dark', bevel=0.012)
        for x in (-1.35, 0, 1.35):
            f = _face(b, x, side * 1.005, side=side)
            _panel(f, 0, 0.14, 0.18, 0.14, 'paint_light', 0.045, False)
            f.box('lock-recess', (0.075, 0.006, 0.038), (0, -0.071, 0.15), 'black', bevel=0.005)


def _shell(b, segments=1):
    """Chamfered shoulder shell with physical seams between armoured bays."""
    _base(b)
    for k in range(segments):
        a = -1.49 + 2.98 * k / segments
        c = -1.49 + 2.98 * (k + 1) / segments
        ring = [(-0.98, 0.16), (0.98, 0.16), (1.0, 0.24), (1.0, 1.3),
                (0.83, 1.56), (-0.83, 1.56), (-1.0, 1.3), (-1.0, 0.24)]
        loft(b, 'armoured-segment', [(a + 0.012, ring), (c - 0.012, ring)],
             'paint' if k % 2 == 0 else 'paint_light', bevel=0.012, segments=2, smooth=False)
        b.box('roof-panel', (c - a - 0.055, 1.59, 0.024), ((a+c)/2, 0, 1.566), 'paint_light', bevel=0.009)


def _hatch(b, x, radius=0.3):
    b.cyl('hatch-gasket', radius + 0.027, 0.025, (x, 0, 1.594), 'rubber', verts=32, bevel=0.003)
    b.cyl('roof-hatch', radius, 0.055, (x, 0, 1.632), 'paint', verts=32, bevel=0.012)
    for xx in (x - radius * 0.7, x + radius * 0.7):
        b.box('hatch-dog', (0.08, 0.13, 0.04), (xx, 0.16, 1.678), 'gunmetal', bevel=0.006)
    b.tube('hatch-handle', [(x-.09, -.1, 1.66), (x-.09, -.1, 1.72),
                          (x+.09, -.1, 1.72), (x+.09, -.1, 1.66)], 0.016, 'paint_dark', smooth=False)


def _ladder(b):
    """Rear ladder stands off the end plate but stays inside the module box."""
    for y in (0.31, 0.74):
        b.tube('ladder-stile', [(-1.53,y,.2),(-1.565,y,.3),(-1.565,y,1.68),(-1.47,y,1.76),(-1.37,y,1.76)],
               .021, 'gunmetal', smooth=False)
    rungs = Batch(b, 'ladder-rungs', 'steel')
    for k in range(6):
        rungs.cyl(.02,.43,(-1.565,.525,.32+k*.235),(PI/2,0,0),verts=10)
    rungs.done()
    for zz in (.35,1.35):
        for yy in (.31,.74):
            b.box('ladder-bracket',(.08,.07,.065),(-1.515,yy,zz),'paint',bevel=.008)


def _vent(b, x, z, width=.45, height=.4):
    _panel(b, x, z, width, height, 'paint_dark', .035)
    b.box('vent-shadow', (width-.08,.016,height-.08),(x,-.045,z),'black',bevel=.006)
    slats=Batch(b,'vent-louvres','gunmetal')
    count=max(4,round(height/.06))
    for k in range(count):
        slats.box((width-.1,.035,.019),(x,-.06,z-height/2+.06+k*(height-.12)/(count-1)),(.3,0,0))
    slats.done(bevel=.003)


def _roof_edges(b):
    studs=Batch(b,'roof-fasteners','steel')
    for side in (-1,1):
        for x in (-1.3,-.8,-.3,.3,.8,1.3):
            studs.cyl(.016,.014,(x,side*.73,1.59),verts=6)
        for x in (-1.2,1.2):
            b.tube('lifting-eye',[(x-.06,side*.74,1.59),(x-.06,side*.74,1.69),
                                (x+.06,side*.74,1.69),(x+.06,side*.74,1.59)],.017,'paint_dark',smooth=False)
    studs.done()


def _front(b, kind):
    """Forward end plate: paired vision apertures or a ribbed service bulkhead."""
    f = _face(b, x=1.478, y=0, rear=True)
    f.matrix = f.matrix @ Matrix.Rotation(PI, 4, 'Z')
    if kind == 'B':
        for x in (-.47, .47):
            _panel(f, x, .75, .87, 1.12, 'paint_light', .025)
            _handle(f, x * .3, .62, .23)
        _panel(f, 0, .8, .035, 1.13, 'paint_dark', .047, False)
    else:
        _panel(f, 0, .45, 1.82, .40, 'paint_light', .02)
        rows = (.51, 1.08) if kind == 'D' else (1.04,)
        for z in rows:
            for x in (-.46, .46):
                _window(f, x, z, .48 if kind != 'F' else .39, .25)
        if kind != 'D':
            _bolts(f, [(x, -.048, .45) for x in (-.65, 0, .65)])


def cap_a(b, m):
    """Three armoured crew segments, flange bolts, vision ports and rear access."""
    b=_frame(b,m,(.92,.94,.88))
    _shell(b,3)
    for side in _sides(m):
        f=_face(b,y=side,side=side)
        for x in (-.99,0,.99):
            _panel(f,x,.74,.88,1.08,depth=.018)
            _window(f,x,1.03,.47,.27)
            f.cyl('blanking-port',.075,.024,(x,-.041,.5),'paint_dark',rot=(PI/2,0,0),verts=16,bevel=.004)
        for x in (-.5,.5):
            _panel(f,x,.77,.065,1.06,'paint_dark',.045,False)
            _bolts(f,[(x,-.078,z) for z in (.24,.58,.94,1.25)])
    for x in (-.5, .5):
        b.tube('flange-shoulder', [(x,-1.016,1.27),(x,-.84,1.585),
                                  (x,.84,1.585),(x,1.016,1.27)], .024, 'paint_dark', smooth=False)
    _door(_face(b,x=-1.48,y=0,rear=True),0,.75)
    _front(b, 'A')
    for x in (-.99,0,.99):
        _hatch(b,x,.25)
    _roof_edges(b)


def cap_b(b, m):
    """Long ribbed shelter, sealed side door, louvred ventilation and rear ladder."""
    b=_frame(b,m,(.98,.96,.95))
    _shell(b)
    for side in _sides(m):
        f=_face(b,y=side,side=side)
        for x in (-1.38,-.64,.2,.74,1.39):
            _panel(f,x,.76,.055,1.04,'paint_light',.043,False)
            _bolts(f,[(x,-.065,z) for z in (.27,1.27)])
        _door(f,-1.01,.60,1.31)
        _vent(f,-.2,.89,.50,.62)
        _vent(f,.38,.45,.34,.30)
    for x in (-.64, .2, 1.39):
        b.tube('rib-shoulder', [(x,-1.018,1.27),(x,-.84,1.59),
                               (x,.84,1.59),(x,1.018,1.27)], .02, 'paint_light', smooth=False)
    for x in (-.85,.87):
        b.box('roof-vent-base',(.74,.66,.05),(x,0,1.61),'paint_dark',bevel=.014)
        b.wedge('roof-vent-hood',[(-.35,0),(.35,0),(.27,.17),(-.27,.17)],.56,(x,0,1.625),'paint',bevel=.012)
        _vent(_face(b,x=x,y=-.285,z=1.60),0,.09,.53,.15)
    _ladder(b)
    _roof_edges(b)
    _front(b, 'B')


def _open_base(b):
    _base(b)
    # Low side panels leave an actual walkable aisle, not a solid raised tub.
    for side in (-1,1):
        f=_face(b,y=side*.99,side=side)
        _panel(f,0,.33,2.94,.37,depth=.025)
    _panel(_face(b,x=-1.49,y=0,rear=True),0,.34,1.95,.38,depth=.03)
    _panel(_face(b,x=1.49,y=0,rear=True),0,.34,1.95,.38,depth=.03)
    gate = _face(b, x=1.49, y=0, rear=True)
    gate.matrix = gate.matrix @ Matrix.Rotation(PI, 4, 'Z')
    ribs = Batch(gate, 'tailgate-pressings', 'paint_light')
    for z in (.24, .43):
        ribs.box((1.88, .025, .025), (0, -.033, z))
    ribs.done(bevel=.004)
    for x in (-.67, .67):
        gate.cyl('tailgate-hinge', .026, .19, (x,-.045,.17), 'gunmetal',
                 rot=(0,PI/2,0), verts=12, bevel=.004)
    treads=Batch(b,'floor-traction-strips','gunmetal')
    for k in range(13):
        treads.box((.025,1.85,.009),(-1.36+k*.225,0,.14))
    treads.done()


def _bow(b,x,height=1.61):
    b.tube('cover-bow',[(x,-.96,.3),(x,-.96,height-.17),(x,-.84,height),
                        (x,.84,height),(x,.96,height-.17),(x,.96,.3)],.025,'paint_dark',smooth=False)
    for side in (-1,1):
        f=_face(b,x=x,y=side*1.0,side=side)
        _panel(f,0,.49,.09,.24,'paint_light',.035,False)
        _bolts(f,[(0,-.049,.43),(0,-.049,.55)])


def _roll(b, x0, x1, y, z):
    """Corrugated cloth roll with strapped bulges and a visible wound end."""
    rings=[]
    for j in range(13):
        x=x0+(x1-x0)*j/12
        ring=[]
        for k in range(16):
            a=2*PI*k/16
            r=.085*(1+.045*math.sin(k*3+j)+.045*math.sin(j*2.7))
            ring.append((y+r*math.cos(a),z+r*math.sin(a)))
        rings.append((x,ring))
    loft(b,'rolled-canvas',rings,'canvas',bevel=0,smooth=True)
    for x in (x0+.17,(x0+x1)/2,x1-.17):
        pts=[(x,y+.091*math.cos(k*2*PI/12),z+.091*math.sin(k*2*PI/12)) for k in range(13)]
        b.tube('canvas-webbing',pts,.012,'paint_dark',smooth=False)
        b.box('strap-buckle',(.05,.03,.045),(x,y-.092,z+.025),'gunmetal',bevel=.004)
    pts=[]
    for k in range(37):
        a=k*PI/9; r=.012+.065*k/36
        pts.append((x1+.002,y+r*math.cos(a),z+r*math.sin(a)))
    b.tube('canvas-wound-end',pts,.005,'paint_dark',smooth=False)


def cap_c(b, m):
    """Open compact bay: folding padded benches, restraint belts and rolled cover."""
    b=_frame(b,m,(.76,.92,.85))
    _open_base(b)
    for side in (-1,1):
        for x in (-.72,.72):
            b.box('bench-seat',(1.34,.46,.105),(x,side*.66,.61),'canvas',bevel=.045)
            b.box('bench-back',(1.34,.09,.47),(x,side*.86,.97),'canvas',bevel=.032)
            b.box('seat-carrier',(1.36,.44,.045),(x,side*.66,.535),'paint_dark',bevel=.008)
            for dx in (-.47,.47):
                b.tube('folding-leg',[(x+dx,side*.91,.52),(x+dx,side*.45,.18),(x+dx,side*.45,.53)],.022,'gunmetal',smooth=False)
            b.box('restraint',( .055,.028,.61),(x,side*.795,.87),'rubber',bevel=.006)
            b.box('belt-buckle',(.09,.038,.07),(x,side*.765,.64),'steel',bevel=.008)
        _roll(b,-1.36,1.36,side*.88,1.65)
    for x in (-1.37,0,1.37):
        _bow(b,x)
    for side in (-1,1):
        _handle(_face(b,x=-1.39,y=0,rear=True),side*.96,.91,.38)


def cap_d(b, m):
    """Largest personnel cabin: two complete window rows, hatch pair, safety rails."""
    b=_frame(b,m,(1,1,1))
    _shell(b)
    for side in _sides(m):
        f=_face(b,y=side,side=side)
        for x in (-.92,0,.92):
            for z in (.51,1.08):
                _window(f,x,z,.57,.25)
        _bolts(f,[(x,-.021,z) for x in (-1.4,-.48,.48,1.4) for z in (.22,.78,1.29)])
    _door(_face(b,x=-1.48,y=0,rear=True),.38,.76,1.4,False)
    _front(b, 'D')
    _ladder(b)
    for x in (-.76,.76):
        _hatch(b,x,.38)
    for side in (-1,1):
        b.tube('roof-safety-rail',[(-1.3,side*.75,1.58),(-1.3,side*.75,1.78),
                                  (1.3,side*.75,1.78),(1.3,side*.75,1.58)],.018,'paint_dark',smooth=False)
        for x in (-.45,.45):
            b.tube('rail-upright',[(x,side*.75,1.58),(x,side*.75,1.78)],.014,'paint_dark',smooth=False)
    _roof_edges(b)


def cap_e(b, m):
    """Medium insert with broad glazing and a roller-supported sliding door."""
    b=_frame(b,m,(.85,.93,.88))
    _shell(b)
    for side in _sides(m):
        f=_face(b,y=side,side=side)
        _panel(f,.34,.75,1.85,1.16,'paint_light',.034)
        for x in (-.26,.35,.96):
            _window(f,x,1.04,.43,.37,False)
        for z in (.19,1.39):
            f.box('sliding-track',(2.83,.065,.047),(0,-.042,z),'gunmetal',bevel=.008)
            for x in (-.42,1.09):
                f.box('roller-carriage',(.13,.085,.08),(x,-.056,z),'paint_dark',bevel=.013)
        _handle(f,-.41,.62)
        _vent(f,-1.02,.54,.48,.55)
    _door(_face(b,x=-1.48,y=0,rear=True),0,.72,1.4,False)
    _front(b, 'E')
    _hatch(b,.62,.31)
    _roof_edges(b)


def cap_f(b, m):
    """Heavy cell: staggered bolted appliqué, recessed vision blocks and roof armour."""
    b=_frame(b,m,(.91,.97,.93))
    _shell(b)
    for side in _sides(m):
        f=_face(b,y=side*.994,side=side)
        for x in (-1.04,-.35,.35,1.04):
            for z in (.43,.99):
                _panel(f,x,z,.65,.51,'paint_light',.057)
            _window(f,x,1.02,.35,.20)
            f.cyl('sealed-vision-port',.063,.023,(x,-.083,.7),'gunmetal',rot=(PI/2,0,0),verts=16,bevel=.004)
        _bolts(f,[(x,-.045,.19) for x in (-1.3,-.85,-.4,.05,.5,.95,1.3)])
    rear=_face(b,x=-1.48,y=0,rear=True)
    _door(rear,0,.8,1.4)
    for x in (-1,0,1):
        b.box('roof-armour-tile',(.94,1.53,.045),(x,0,1.60),'paint_light',bevel=.014)
    _hatch(b,.1,.34)
    _roof_edges(b)
    _front(b, 'F')


def _canvas_roof(b):
    """A sewn, sagging cloth skin over the rear half of the utility frame."""
    bm=bmesh.new(); rows=[]
    for j in range(9):
        x=-1.38+j*.19
        row=[]
        for k in range(13):
            y=-.94+k*1.88/12
            z=1.635+.045*(1-(y/.94)**2)-.028*math.sin(j*PI/8)+.009*math.cos(k*2+j)
            row.append(bm.verts.new((x,y,z)))
        rows.append(row)
    for j in range(8):
        for k in range(12):
            bm.faces.new((rows[j][k],rows[j+1][k],rows[j+1][k+1],rows[j][k+1]))
    bmesh.ops.recalc_face_normals(bm,faces=bm.faces)
    b._mesh('tailored-canvas-cover',bm,'canvas',(0,0,0),(0,0,0),0,1,True)
    for side in (-1,1):
        b.tube('canvas-seam',[(-1.38,side*.92,1.64),(-.65,side*.92,1.62),(.14,side*.92,1.64)],.009,'canvas',smooth=False)


def cap_g(b, m):
    """Light utility frame, braced open front, thin floor and half-length cloth roof."""
    b=_frame(b,m,(.86,.91,.82))
    _open_base(b)
    for x in (-1.38,0):
        _bow(b,x)
    for side in (-1,1):
        y=side*.95
        b.tube('front-diagonal',[(1.43,y,.2),(.12,y,1.61),(-1.38,y,1.61)],.031,'paint_dark',smooth=False)
        b.tube('waist-rail',[(-1.39,y,.72),(1.4,y,.72)],.025,'paint_dark',smooth=False)
        for x in (-1.35,0,1.35):
            f=_face(b,x=x,y=side*.99,side=side)
            _panel(f,0,.33,.12,.30,'paint_dark',.032)
        _roll(b,-1.32,.08,side*.88,1.66)
    _canvas_roof(b)
    for side in (-1, 1):
        b.tube('front-corner-post', [(1.4,side*.95,.18),(1.4,side*.95,.72)],
               .025, 'paint_dark', smooth=False)
    b.tube('front-crossbar', [(1.4,-.95,.72),(1.4,.95,.72)], .025, 'paint_dark', smooth=False)
    _canvas_flap(b)
    for y in (-.72,0,.72):
        b.box('floor-longeron',(2.88,.055,.045),(0,y,.164),'paint_dark',bevel=.006)
    for x in (-1.1,.5,1.1):
        for y in (-.45,.45):
            b.box('cargo-tie-base',(.12,.08,.012),(x,y,.15),'gunmetal',bevel=.006)
            b.tube('cargo-tie-loop',[(x-.035,y,.16),(x-.035,y,.19),(x+.035,y,.19),(x+.035,y,.16)],.008,'steel',smooth=False)



def _edge_wear(b):
    """Sparse geometric edge scuffs: 108 triangles, deterministic, no texture."""
    bm = bmesh.new()
    for side in (-1, 1):
        for k in range(48):
            x = -1.38 + k * 2.76 / 47
            z = .11 + .06 * (.5 + .5 * math.sin(k * 7.3))
            length = .012 + .012 * (.5 + .5 * math.sin(k * 4.1))
            points = [(x,side*1.013,z), (x+length,side*1.013,z+.003),
                      (x+length*.6,side*1.013,z-.004)]
            bm.faces.new([bm.verts.new(p) for p in points])
    for k in range(12):
        y = -.87 + k * .15
        bm.faces.new([bm.verts.new(p) for p in
                      [(1.5005,y,.106),(1.5005,y+.027,.111),(1.5005,y+.009,.101)]])
    b._mesh('edge-scuffs',bm,'steel',(0,0,0),(0,0,0),0,1,False)


def _canvas_flap(b):
    """Rear cloth curtain: shallow tension folds and a weighted lower hem."""
    bm = bmesh.new()
    rows = []
    for j in range(4):
        row = []
        for k in range(13):
            y = -.89 + k * 1.78 / 12
            z = .86 + j * .245
            x = -1.39 + .019 * math.sin(k * 1.7) * (1-j/4)
            row.append(bm.verts.new((x,y,z)))
        rows.append(row)
    for j in range(3):
        for k in range(12):
            bm.faces.new((rows[j][k],rows[j][k+1],rows[j+1][k+1],rows[j+1][k]))
    bmesh.ops.recalc_face_normals(bm,faces=bm.faces)
    b._mesh('rear-canvas-curtain',bm,'canvas',(0,0,0),(0,0,0),0,1,True)
    b.tube('curtain-hem',[(-1.39,-.89,.86),(-1.39,.89,.86)],.012,'canvas',smooth=False)

