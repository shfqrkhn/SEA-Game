"""The fictional 8x8 armoured vehicle family (owner concepts, 2026-10-10): one hull, six mission variants.

A narrow lower hull between the wheels, wide sponsons over them, an inward-sloped upper hull, a long upper
glacis and a raked lower nose. Bolted appliqué plates cover the sides and glacis. Variants change only what
a mission needs in its base form: the troop carrier's lowered ramp and lit compartment, armoured windscreens
on the command and mine-clearing vehicles, and the recovery crane.

Axes: +X forward, -Y is the vehicle's left side, Z up, ground at Z = 0.
"""
import math

import bmesh

from mathutils import Vector

from ..geo import Batch, Builder, loft, mirror_ring, face_basis
from ..mounts import Mounts

AXLES = (2.3, 1.0, -0.85, -2.15)
R, TRACK, TYRE_W = 0.6, 1.08, 0.46
BACK, FRONT, TOP = -3.5, 3.5, 2.3
SPONSON, SPONSON_Z0, SPONSON_Z1 = 1.36, 1.36, 1.86
ROOF_FRONT, GLACIS_X, GLACIS_Z = 2.05, 2.95, 1.74
PI = math.pi



def _panel(b, name, origin, u, v, size, mat='paint', cols=1, rows=1):
    """Thin bevelled service plates with sparse perimeter fasteners, flush to a mount face."""
    basis = face_basis(u, v)
    o = Vector(origin)
    rot = basis.to_euler()
    bolts = Batch(b, name + '-fasteners', 'gunmetal', basis, o)
    for i in range(cols):
        for j in range(rows):
            w, h = size[0] / cols - .018, size[1] / rows - .018
            x, y = (i + .5) * size[0] / cols, (j + .5) * size[1] / rows
            b.box(name, (w, h, .018), o + basis @ Vector((x, y, .009)), mat, rot=rot, bevel=.006, segments=2)
            for dx in (-w / 2 + .055, w / 2 - .055):
                for dy in (-h / 2 + .05, h / 2 - .05):
                    bolts.cyl(.022, .012, (x + dx, y + dy, .021), verts=6)
            if w > .65:
                for dy in (-h / 2 + .05, h / 2 - .05):
                    bolts.cyl(.019, .012, (x, y + dy, .021), verts=6)
    bolts.done()


def _grille(b, name, origin, u, v, size):
    """Recessed dark vent with metal cross mesh and a bolted border."""
    basis = face_basis(u, v)
    o = Vector(origin)
    w, h = size
    rot = basis.to_euler()
    b.box(name+'-frame', (w, h, .024), o, 'paint_dark', rot=rot, bevel=.008)
    b.box(name+'-recess', (w-.06, h-.06, .01), o+basis@Vector((0,0,.017)), 'black', rot=rot, bevel=.002)
    mesh = Batch(b, name+'-mesh', 'gunmetal', basis, o)
    for k in range(int((w-.08)/.036)+1):
        mesh.box((.009,h-.07,.009), (-w/2+.04+k*.036,0,.027))
    for k in range(int((h-.08)/.055)+1):
        mesh.box((w-.07,.012,.01), (0,-h/2+.04+k*.055,.029))
    for x in (-w/2+.02,w/2-.02):
        for y in (-h/2+.02,h/2-.02):
            mesh.cyl(.016,.016,(x,y,.024),verts=6)
    mesh.done()


def _wheel(b, name, loc, side):
    """Six-point chamfered tread blocks, sidewall shoulders and a dished bolted rim; <3000 RT tris."""
    # The tread's outer corners stay inside the contracted 0.6 m envelope.
    c = Vector(loc)
    profile = [(.345,-.19),(.47,-.23),(.545,-.213),(.565,-.17),
               (.565,.17),(.545,.213),(.47,.23),(.345,.19)]
    b.revolve(name+'-tyre', profile, c, 'rubber', steps=64)
    tread = bmesh.new()
    shoulders = Batch(b,name+'-shoulders','tread',origin=c)
    # Six-point planform makes real bevel-like corners even when export removes bevel modifiers.
    footprint = [(-.069,-.062),(-.045,-.088),(.047,-.088),(.069,.062),(.045,.088),(-.047,.088)]
    for i in range(26):
        for sign in (-1,1):
            a=2*PI*(i+(.5 if sign>0 else 0))/26
            radial=Vector((math.cos(a),0,math.sin(a)))
            tangent=Vector((-math.sin(a),0,math.cos(a)))
            centre=c+radial*.567+Vector((0,sign*.097,0))
            rings=[]
            for h in (0,.028):
                rings.append([tread.verts.new(centre+tangent*x+Vector((0,y,0))+radial*h) for x,y in footprint])
            tread.faces.new(rings[0][::-1]); tread.faces.new(rings[1])
            for j in range(6):
                tread.faces.new((rings[0][j],rings[0][(j+1)%6],rings[1][(j+1)%6],rings[1][j]))
            shoulders.box((.082,.035,.053), (math.cos(a)*.536,sign*.211,math.sin(a)*.536), (0,-a,0))
    bmesh.ops.recalc_face_normals(tread,faces=list(tread.faces))
    b._mesh(name+'-tread',tread,'tread',(0,0,0),(0,0,0),0,2,smooth=False)
    shoulders.done(bevel=.004)
    rim=[(.025,side*.13),(.19,side*.145),(.28,side*.175),(.324,side*.194),
         (.343,side*.206),(.354,side*.198),(.351,side*.18)]
    b.revolve(name+'-rim',rim,c,'paint_dark',steps=64)
    hub=b.cyl(name+'-hub',.133,.085,c+Vector((0,side*.173,0)),'paint',rot=(PI/2,0,0),verts=24,bevel=0)
    for face in hub.data.polygons:
        face.use_smooth = len(face.vertices) == 4
    nuts=Batch(b,name+'-nuts','steel',origin=c)
    for k in range(10):
        a=2*PI*k/10
        nuts.cyl(.018,.025,(math.cos(a)*.217,side*.192,math.sin(a)*.217),(PI/2,0,0),verts=6)
    nuts.done()
    b.revolve(name+'-bead',[(.334,side*.204),(.346,side*.213),(.355,side*.204),(.350,side*.198)],c,'paint',steps=32)
    vents=Batch(b,name+'-rim-vents','black',origin=c)
    for k in range(10):
        a=2*PI*(k+.5)/10
        vents.box((.020,.008,.045),(math.cos(a)*.286,side*.184,math.sin(a)*.286),(0,-a,0))
    vents.done()


def _full(top=TOP):
    """Fixed half-section shared by all mount surfaces."""
    return [(0, 0.52), (0.6, 0.52), (0.8, 0.72), (0.8, 1.3), (SPONSON, SPONSON_Z0), (SPONSON, SPONSON_Z1), (1.1, top), (0, top)]


GLACIS = [(0, 0.6), (0.58, 0.6), (0.8, 0.78), (0.8, 1.3), (1.3, 1.36), (1.3, 1.6), (1.05, GLACIS_Z - 0.02), (0, GLACIS_Z)]
NOSE = [(0, 1.0), (0.55, 1.0), (0.78, 1.06), (0.78, 1.3), (1.05, 1.34), (1.05, 1.42), (0.95, 1.46), (0, 1.48)]


def _hull(b, mission):
    front = [(ROOF_FRONT, mirror_ring(_full())), (GLACIS_X, mirror_ring(GLACIS)), (FRONT, mirror_ring(NOSE))]
    if mission == 'TROOP':
        # Solid forward hull; the rear compartment is an open shell with walls, a floor and a lowered ramp.
        bulkhead = -1.3
        loft(b, 'hull', [(bulkhead, mirror_ring(_full())), *front], 'paint', bevel=0.04, smooth=False)
        shell = loft(b, 'compartment', [(BACK, mirror_ring(_full())), (bulkhead + 0.02, mirror_ring(_full()))], 'paint',
                     bevel=0, cap=False, smooth=False)
        solid = shell.modifiers.new('walls', 'SOLIDIFY')
        solid.thickness = 0.06
        solid.offset = -1
        solid.use_even_offset = True
        _compartment(b, bulkhead)
    else:
        loft(b, 'hull', [(BACK, mirror_ring(_full())), *front], 'paint', bevel=0.04, smooth=False)
        _rear_door(b)


def _compartment(b, bulkhead):
    """Lit troop compartment seen through the lowered ramp: floor, liner, folding seats, lamps, kit."""
    length = bulkhead - BACK
    mid = (bulkhead + BACK) / 2
    b.box('floor', (length, 1.5, 0.08), (mid, 0, 0.64), 'interior_dark', bevel=0.01)
    b.box('bulkhead-liner', (0.04, 1.6, 1.5), (bulkhead - 0.02, 0, 1.4), 'interior', bevel=0.01)
    b.box('ceiling', (length, 2.0, 0.04), (mid, 0, TOP - 0.08), 'interior', bevel=0.01)
    for side in (-1, 1):
        b.box('wall-liner', (length, 0.03, 0.34), (mid, side * 1.27, 1.65), 'interior', bevel=0.008)
        b.box('shoulder-liner', (length, 0.03, 0.43), (mid, side * 1.125, 2.01), 'interior', rot=(side * .533, 0, 0), bevel=0.008)
        seats = Batch(b, 'seats', 'canvas')
        frames = Batch(b, 'seat-frames', 'gunmetal')
        for k in range(4):
            x = bulkhead - 0.35 - k * 0.5
            seats.box((0.42, 0.38, 0.08), (x, side * 1.00, 1.48))
            seats.box((0.42, 0.08, 0.44), (x, side * 1.14, 1.74))
            seats.box((0.34, 0.06, 0.13), (x, side * 1.06, 2.03))
            frames.box((0.03, 0.22, 0.045), (x, side * 1.17, 1.405))
            frames.box((0.03, 0.03, 0.25), (x, side * .69, 1.02))
            frames.box((.34, .10, .028), (x, side * .69, .89))
        seats.done(bevel=0.02, smooth=True)
        frames.done()
        b.box('ceiling-lamp', (length * 0.7, 0.18, 0.03), (mid, side * 0.55, TOP - 0.11), 'lamp_soft', bevel=0.005)
        b.box('grab-rail', (length * 0.8, 0.03, 0.03), (mid, side * 0.7, TOP - 0.2), 'steel', bevel=0.005)
        b.box('kit-bag', (0.5, 0.25, 0.3), (mid + 0.3, side * .99, TOP - 0.38), 'canvas', bevel=0.06)
    for y in (-.41,.41):
        b.box('jump-seat-back',(.10,.36,.48),(bulkhead-.11,y,1.57),'canvas',bevel=.04)
        b.box('jump-seat-pad',(.37,.36,.085),(bulkhead-.30,y,1.29),'canvas',bevel=.025)
        b.box('jump-seat-belt',(.014,.035,.40),(bulkhead-.168,y,1.57),'black',bevel=.003)
        b.box('jump-seat-bracket',(.31,.045,.06),(bulkhead-.22,y,1.20),'gunmetal',bevel=.008)
    belts=Batch(b,'seat-belts','black')
    buckles=Batch(b,'seat-buckles','steel')
    for side in (-1,1):
        for k in range(4):
            x=bulkhead-.35-k*.5
            for dx in (-.12,.12):
                belts.box((.034,.014,.49),(x+dx,side*1.092,1.75))
            belts.box((.31,.02,.035),(x,side*1.085,1.54))
            buckles.box((.055,.026,.055),(x,side*1.07,1.54))
    belts.done(); buckles.done(bevel=.004)
    b.box('entrance-light', (.10, 1.20, .045), (BACK+.06, 0, 1.995), 'lamp_soft', bevel=.006)
    # Door frame: pillars and a lintel around the opening; the ramp is lowered to the ground.
    for side in (-1, 1):
        b.box('door-pillar', (0.08, 0.5, 1.5), (BACK + 0.04, side * 1.0, 1.35), 'paint', bevel=0.02)
    b.box('lintel', (0.08, 1.6, 0.26), (BACK + 0.04, 0, TOP - 0.15), 'paint', bevel=0.02)
    rake = math.radians(24)
    ramp_len = 1.45
    hinge = Vector((BACK, 0, 0.65))
    centre = hinge + Vector((-math.cos(rake) * ramp_len / 2, 0, -math.sin(rake) * ramp_len / 2))
    b.box('ramp', (ramp_len, 1.5, 0.08), centre, 'paint', rot=(0, -rake, 0), bevel=0.02)
    treads = Batch(b, 'ramp-treads', 'gunmetal')
    for k in range(7):
        d = 0.15 + k * 0.19
        p = hinge + Vector((-math.cos(rake) * d, 0, -math.sin(rake) * d + 0.05))
        treads.box((0.04, 1.36, 0.03), p, (0, -rake, 0))
    treads.done()
    for side in (-1, 1):
        b.box('ramp-hinge', (0.12, 0.2, 0.12), (BACK, side * 0.55, 0.65), 'gunmetal', bevel=0.02)
        b.tube('ramp-cable', [(BACK + 0.02, side * 0.72, 1.9), (BACK - math.cos(rake) * 1.17, side * 0.72, .65 - math.sin(rake) * 1.17 + .04)], 0.012, 'cable', smooth=False)


def _rear_door(b):
    """Sealed rear ramp with inset personnel door, hinge pins, latches and jamb seals."""
    b.box('rear-seal',(.035,1.57,1.39),(BACK-.013,0,1.32),'rubber',bevel=.035)
    _panel(b,'rear-ramp',(BACK-.031,.755,.64),(0,-1,0),(0,0,1),(1.51,1.36))
    b.box('door-seal',(.02,.72,1.03),(BACK-.057,.25,1.35),'rubber',bevel=.036)
    b.box('personnel-door',(.026,.68,.99),(BACK-.073,.25,1.35),'paint_dark',bevel=.022)
    for z in (.91,1.71):
        b.box('door-hinge-leaf',(.038,.16,.065),(BACK-.099,.60,z),'paint',bevel=.007)
        b.cyl('door-hinge-pin',.021,.13,(BACK-.12,.66,z),'steel',verts=12,bevel=.003)
    b.tube('door-handle',[(BACK-.101,-.01,1.27),(BACK-.15,-.01,1.27),(BACK-.15,-.01,1.43),(BACK-.101,-.01,1.43)],.017,'gunmetal',smooth=False)
    for y in (-.60,.60):
        b.cyl('ramp-pivot',.048,.26,(BACK-.065,y,.67),'gunmetal',rot=(PI/2,0,0),verts=20,bevel=.006)
        b.box('ramp-lock',(.07,.12,.15),(BACK-.075,y,1.91),'paint_dark',bevel=.012)
    b.tube('rear-grab',[(BACK-.08,-.38,1.97),(BACK-.14,-.38,1.97),(BACK-.14,.37,1.97),(BACK-.08,.37,1.97)],.021,'paint_dark',smooth=False)


def _side(b, side, mission):
    """Fitted side plates, shallow upper stowage, tools, arch guards and exhaust."""
    s = side
    start,end=BACK+.12,ROOF_FRONT-.04
    u=(1,0,0) if s<0 else (-1,0,0)
    x=start if s<0 else end
    _panel(b,'sponson', (x,s*SPONSON,SPONSON_Z0+.025),u,(0,0,1),(end-start,.45),cols=7)
    up=Vector((0,s*(1.1-SPONSON),TOP-SPONSON_Z1))
    _panel(b,'shoulder', (x,s*SPONSON,SPONSON_Z1),u,up,(end-start,up.length-.04),cols=7)
    # Guards sit in the actual gaps between tyres, never cutting a tyre silhouette.
    for gx in (1.65,.075,-1.50,-2.92):
        b.wedge('arch-guard',[(-.22,1.365),(.22,1.365),(.09,1.105),(-.07,1.105)],.04,
                (gx,s*(SPONSON-.02),0),'paint_dark',bevel=.008)
        b.cyl('guard-bolt',.024,.02,(gx,s*(SPONSON+.009),1.29),'steel',rot=(PI/2,0,0),verts=6,bevel=0)
    for gx in (AXLES[1]-.66,AXLES[3]-.66):
        b.box('mudflap',(.022,.43,.36),(gx,s*TRACK,1.12),'rubber',bevel=.004)
        b.box('mudflap-clamp',(.045,.43,.04),(gx,s*TRACK,1.29),'gunmetal',bevel=.004)
    # All stowage sits above z=1.87: the side armour slot below stays clear.
    bx=-2.25
    y=s*1.31
    b.box('stowage-bin',(.70,.22,.29),(bx,y,2.045),'paint_dark',bevel=.025)
    b.box('bin-lid',(.67,.025,.25),(bx,s*1.432,2.048),'paint',bevel=.014)
    fittings=Batch(b,'bin-hardware','gunmetal')
    for dx in (-.25,.25):
        fittings.box((.06,.034,.075),(bx+dx,s*1.454,1.96))
        fittings.cyl(.022,.095,(bx+dx,s*1.453,2.172),(0,PI/2,0),verts=12)
    fittings.done()
    b.tube('bin-handle',[(bx-.10,s*1.451,2.06),(bx-.10,s*1.481,2.06),(bx+.10,s*1.481,2.06),(bx+.10,s*1.451,2.06)],.011,'steel',smooth=False)
    # Two small strapped fluid cans with caps and stamped X ribs.
    for j in range(2):
        cx=-3.04+j*.255
        b.box('jerrycan',(.21,.16,.34),(cx,s*1.34,2.06),'paint_dark',bevel=.023)
        b.box('can-strap',(.035,.018,.34),(cx,s*1.429,2.06),'canvas',bevel=.004)
        b.cyl('can-cap',.036,.018,(cx-.065,s*1.34,2.24),'gunmetal',verts=12,bevel=.002)
        b.tube('can-handle',[(cx-.03,s*1.32,2.226),(cx-.02,s*1.32,2.275),(cx+.07,s*1.32,2.275),(cx+.08,s*1.32,2.226)],.012,'paint',smooth=False)
        for direction in (-1,1):
            b.tube('can-stamping',[(cx-.073,s*1.424,2.06-direction*.115),(cx+.073,s*1.424,2.06+direction*.115)],.007,'paint',smooth=False)
    b.box('can-tray',(.52,.23,.035),(-2.91,s*1.34,1.875),'gunmetal',bevel=.008)
    b.box('can-retainer',(.51,.02,.038),(-2.91,s*1.46,1.98),'paint',bevel=.005)
    # Pioneer tools are restrained on the upper slope, clear of the armour panels.
    for z,cx,L in ((2.01,-.63,1.14),(2.16,-.60,.96)):
        b.cyl('tool-shaft',.018,L,(cx,s*1.29,z),'wood',rot=(0,PI/2,0),verts=12,bevel=.002)
        for xx in (cx-.31,cx+.29):
            b.box('tool-clamp',(.055,.08,.067),(xx,s*1.28,z),'gunmetal',bevel=.008)
    b.box('shovel-socket',(.16,.035,.05),(-.01,s*1.30,2.01),'steel',bevel=.009)
    b.wedge('shovel-blade',[(-.13,-.075),(.07,-.075),(.13,-.025),(.13,.05),(-.13,.05)],.035,(.13,s*1.3,2.01),'gunmetal',bevel=.012)
    b.box('pick-head',(.075,.055,.23),(-.08,s*1.29,2.15),'gunmetal',rot=(0,.27,0),bevel=.012)
    # Short folding ladder uses the centre axle gap; upper attachments remain inside the side slot plane.
    lx=.075
    for dx in (-.12,.12):
        b.tube('ladder-rail',[(lx+dx,s*1.36,.72),(lx+dx,s*1.385,1.30)],.017,'gunmetal',smooth=False)
    for z in (.76,.96,1.16):
        b.box('ladder-rung',(.28,.085,.025),(lx,s*1.385,z),'steel',bevel=.005)
    b.tube('boarding-handle',[(1.33,s*1.25,2.01),(1.33,s*1.34,2.06),(1.66,s*1.34,2.06),(1.66,s*1.25,2.01)],.015,'paint_dark',smooth=False)
    if s>0:
        _grille(b,'exhaust',(.83,1.242,2.06),(-1,0,0),(0,-.26,.44),(.66,.32))



def _cheeks(b):
    """Faceted cheek plates follow the immutable front stations; no expanded hull envelope."""
    for side in (-1,1):
        points=[(2.075,side*1.374,1.39),(2.925,side*1.316,1.385),
                (2.925,side*1.316,1.601),(2.075,side*1.374,1.851)]
        upper=[(2.075,side*1.373,1.865),(2.925,side*1.314,1.617),
               (2.925,side*1.070,1.755),(2.075,side*1.119,2.296)]
        for ring in (points,upper):
            bm=bmesh.new()
            outer=[bm.verts.new(p) for p in ring]
            inner=[bm.verts.new(Vector(p)-Vector((0,side*.014,0))) for p in ring]
            bm.faces.new(outer); bm.faces.new(inner[::-1])
            for k in range(4):
                bm.faces.new((outer[k],outer[(k+1)%4],inner[(k+1)%4],inner[k]))
            bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces))
            b._mesh('front-cheek',bm,'paint',(0,0,0),(0,0,0),.004,2,smooth=False)
        bolts=Batch(b,'cheek-bolts','gunmetal')
        for x,y,z in ((2.15,1.379,1.45),(2.82,1.333,1.45),(2.81,1.332,1.63),
                      (2.13,1.361,1.89),(2.15,1.166,2.19),(2.78,1.123,1.80)):
            bolts.cyl(.022,.018,(x,side*y,z),(PI/2,0,0),verts=6)
        bolts.done()


def _front(b, mission):
    """Glacis service panels, framed vision blocks, guarded lamps and forged towing eyes."""
    bottom=Vector((GLACIS_X,-.91,GLACIS_Z))
    up=Vector((ROOF_FRONT-GLACIS_X,0,TOP-GLACIS_Z))
    normal=Vector((up.z,0,-up.x)).normalized()
    rake=math.atan2(up.z,-up.x)
    glazed=mission in ('COMMAND','MINE')
    _panel(b,'glacis',bottom+up.normalized()*.045,(0,1,0),up,(1.82,up.length*(.34 if glazed else .87)),cols=2)
    for y in (-.47,.47):
        if glazed:
            c=Vector((GLACIS_X,y,GLACIS_Z))+up*.68
            b.box('windscreen-gasket',(.50,.85,.055),c+normal*.023,'rubber',rot=(0,rake,0),bevel=.025)
            b.box('windscreen-glass',(.44,.75,.020),c+normal*.057,'glass',rot=(0,rake,0),bevel=.015)
            # Armour rails frame the glass instead of covering it with a single slab.
            for dy in (-.412,.412):
                b.box('window-rail',(.51,.045,.045),c+Vector((0,dy,0))+normal*.052,'paint',rot=(0,rake,0),bevel=.007)
            for t in (-.244,.244):
                pos=c+up.normalized()*t+normal*.052
                b.box('window-rail',(.045,.85,.045),pos,'paint',rot=(0,rake,0),bevel=.007)
            a=c-up.normalized()*.19+Vector((0,-.27,0))+normal*.08
            z=c+up.normalized()*.04+Vector((0,.12,0))+normal*.08
            b.tube('wiper-arm',[a,z],.012,'black',smooth=False)
            b.tube('wiper-blade',[z+Vector((0,-.20,0)),z+Vector((0,.16,0))],.014,'rubber',smooth=False)
        else:
            c=Vector((2.25,y,TOP-(2.25-ROOF_FRONT)*(TOP-GLACIS_Z)/(GLACIS_X-ROOF_FRONT)))
            b.box('vision-hood',(.24,.42,.12),c+normal*.074,'paint_dark',rot=(0,rake,0),bevel=.024)
            b.box('vision-glass',(.027,.32,.063),c+normal*.083+Vector((.119,0,-.061)),'glass',rot=(0,rake,0),bevel=.008)
        b.tube('glacis-grab',[(2.72,y-.13,1.91),(2.72,y-.13,1.99),(2.72,y+.13,1.99),(2.72,y+.13,1.91)],.018,'paint_dark',smooth=False)
    nose_up=Vector((GLACIS_X-FRONT,0,GLACIS_Z-1.48))
    _panel(b,'nose-deck',(FRONT-.025,-.82,1.495),(0,1,0),nose_up,(1.64,.51),cols=2)
    for y in (-.70,.70):
        b.cyl('nose-hinge',.024,.20,(3.29,y,1.602),'gunmetal',rot=(PI/2,0,0),verts=12,bevel=.003)
    _panel(b,'nose', (FRONT+.001,-.73,1.08),(0,1,0),(0,0,1),(1.46,.32),cols=3)
    for y in (-.62,.62):
        b.box('tow-clevis',(.13,.19,.14),(FRONT+.015,y,1.19),'paint_dark',bevel=.018)
        b.cyl('tow-pin',.044,.24,(FRONT+.09,y,1.18),'gunmetal',rot=(PI/2,0,0),verts=16,bevel=.004)
        pts=[(FRONT+.12,y+.095*math.sin(a),1.065+.13*math.cos(a)) for a in [2*PI*k/16 for k in range(17)]]
        b.tube('tow-shackle',pts,.027,'steel',smooth=False)
    for side in (-1,1):
        at=Vector((GLACIS_X+.03,side*1.095,1.64))
        b.box('headlight-housing',(.25,.38,.24),at,'paint_dark',bevel=.025)
        b.box('headlight-inset',(.018,.335,.19),at+Vector((.13,0,0)),'black',bevel=.013)
        for dy,r,mat in ((-side*.075,.063,'lamp'),(side*.098,.041,'amber')):
            b.cyl('lamp-bezel',r+.012,.036,at+Vector((.143,dy,0)),'gunmetal',rot=(0,PI/2,0),verts=24,bevel=.003)
            b.cyl('lamp-lens',r,.014,at+Vector((.166,dy,0)),mat,rot=(0,PI/2,0),verts=24,bevel=.003)
        cage=Batch(b,'headlight-cage','paint_dark')
        for z in (-.12,-.04,.04,.12):
            cage.box((.016,.405,.016),at+Vector((.203,0,z)))
        for yy in (-.20,-.066,.066,.20):
            cage.box((.016,.016,.25),at+Vector((.203,yy,0)))
        for yy in (-.20,.20):
            cage.box((.22,.018,.018),at+Vector((.1,yy,.12)))
        cage.done(bevel=.004)
        arm=Vector((2.19,side*1.21,2.065))
        b.box('mirror-foot',(.14,.07,.10),arm,'paint_dark',bevel=.009)
        b.tube('mirror-arm',[arm,arm+Vector((.08,side*.23,.07)),arm+Vector((.08,side*.25,.41))],.018,'gunmetal',smooth=False)
        c=arm+Vector((.08,side*.25,.49))
        b.box('mirror-shell',(.065,.18,.29),c,'rubber',bevel=.022)
        b.box('mirror-face',(.012,.148,.252),c+Vector((-.037,0,0)),'glass',bevel=.014)


def _roof(b, mission):
    """Low-profile deck service hatches and vents; all mission equipment remains separate."""
    _grille(b,'engine-deck',(1.40,.62,TOP+.002),(1,0,0),(0,1,0),(.90,.70))
    _panel(b,'engine-access',(.22,.27,TOP),(1,0,0),(0,1,0),(.63,.70))
    # Deck centre and edges have only flush seams; no smoke tubes or equipment racks.
    seams=Batch(b,'deck-seams','paint_dark')
    for x in (-2.15,-1.0,.25):
        seams.box((.008,1.99,.003),(x,0,TOP+.001))
    seams.done()
    if mission not in ('COMMAND','MINE'):
        b.cyl('driver-hatch-gasket',.295,.018,(1.56,-.56,TOP+.009),'rubber',verts=48,bevel=0)
        b.cyl('driver-hatch',.278,.025,(1.56,-.56,TOP+.028),'paint',verts=48,bevel=.008)
        b.cyl('hatch-hinge',.027,.22,(1.285,-.56,TOP+.04),'gunmetal',rot=(PI/2,0,0),verts=12,bevel=.003)
        b.tube('hatch-grab',[(1.62,-.66,TOP+.043),(1.62,-.66,TOP+.09),(1.62,-.46,TOP+.09),(1.62,-.46,TOP+.043)],.012,'paint_dark',smooth=False)
    for y in (-.51,.51):
        _panel(b,'rear-service',(-3.02,y-.39,TOP),(1,0,0),(0,1,0),(.78,.78))
        for dx in (-2.93,-2.47):
            b.cyl('service-hinge',.018,.12,(dx,y+.37,TOP+.028),'gunmetal',rot=(0,PI/2,0),verts=12,bevel=.003)
        b.box('service-latch',(.1,.035,.018),(-2.63,y-.32,TOP+.032),'gunmetal',bevel=.004)
    for side in (-1,1):
        at=Vector((BACK-.031,side*1.13,1.58))
        b.box('tail-housing',(.08,.32,.18),at,'paint_dark',bevel=.016)
        b.box('tail-recess',(.014,.275,.126),at+Vector((-.045,0,0)),'black',bevel=.006)
        for dy,mat in ((-.09,'amber'),(0,'red'),(.09,'lamp')):
            b.box('tail-lens',(.02,.072,.085),at+Vector((-.057,dy,0)),mat,bevel=.007)
        _grille(b,'rear-vent',(BACK-.02,side*1.13,1.95),(0,-1,0),(0,0,1),(.30,.34))
        b.box('rear-tow-lug',(.12,.16,.12),(BACK-.03,side*.68,.88),'paint_dark',bevel=.012)
        b.cyl('rear-tow-pin',.035,.19,(BACK-.10,side*.68,.89),'gunmetal',rot=(PI/2,0,0),verts=12,bevel=.004)
        b.tube('rear-shackle',[(BACK-.13,side*.68+.065*math.sin(a),.79+.10*math.cos(a)) for a in [2*PI*k/14 for k in range(15)]],.023,'steel',smooth=False)
    b.box('tow-crossmember',(.16,1.36,.12),(BACK+.01,0,.65),'gunmetal',bevel=.02)
    b.box('pintle-mount',(.12,.23,.17),(BACK-.09,0,.82),'paint_dark',bevel=.014)
    b.tube('pintle',[(BACK-.13,0,.88),(BACK-.26,0,.77),(BACK-.29,0,.86)],.038,'gunmetal',smooth=False)


def _running_gear(b):
    for i, x in enumerate(AXLES):
        b.cyl('axle', 0.08, TRACK * 2 - 0.5, (x, 0, R), 'gunmetal', rot=(PI / 2, 0, 0), verts=16)
        b.sphere('diff', 0.18, (x, 0, R), 'gunmetal', scale=(1, 0.8, 0.9))
        for s in (-1, 1):
            _wheel(b, f'wheel{i}{s:+d}', (x, s * TRACK, R), s)
            b.box('lower-arm', (0.12, 0.42, 0.08), (x - 0.1, s * 0.72, R - 0.12), 'gunmetal', bevel=0.02)
            b.cyl('damper', 0.05, 0.6, (x - 0.22, s * 0.78, R + 0.32), 'steel', rot=(s * 0.25, 0, 0), verts=12)
    b.box('driveline', (AXLES[0] - AXLES[3], 0.12, 0.12), ((AXLES[0] + AXLES[3]) / 2, 0, R + 0.05), 'gunmetal', bevel=0.02)


def _crane(b):
    """Rear-facing telescopic recovery crane with pinned cheeks, lift ram, winch and hanging hook."""
    pivot=Vector((BACK+.70,0,TOP+.73))
    b.cyl('crane-slew',.49,.13,(pivot.x,0,TOP+.065),'gunmetal',verts=48,bevel=.015)
    b.cyl('crane-pedestal',.37,.22,(pivot.x,0,TOP+.22),'paint_dark',verts=32,bevel=.016)
    bolts=Batch(b,'slew-bolts','steel')
    for k in range(16):
        a=2*PI*k/16
        bolts.cyl(.023,.025,(pivot.x+.43*math.cos(a),.43*math.sin(a),TOP+.143),verts=6)
    bolts.done()
    for side in (-1,1):
        b.wedge('crane-cheek',[(-.45,-.48),(.40,-.48),(.30,.19),(-.17,.31),(-.41,.08)],.095,
                pivot+Vector((0,side*.31,0)),'paint',bevel=.022)
        b.cyl('boom-pivot',.095,.12,pivot+Vector((0,side*.34,0)),'gunmetal',rot=(PI/2,0,0),verts=24,bevel=.008)
        b.cyl('pivot-cap',.065,.02,pivot+Vector((0,side*.412,0)),'steel',rot=(PI/2,0,0),verts=12,bevel=.003)
    angle=math.radians(17)
    d=Vector((-math.cos(angle),0,math.sin(angle)))
    length=2.18
    rot=(0,angle,0)
    b.box('crane-boom',(length,.39,.40),pivot+d*(length/2-.10),'paint',rot=rot,bevel=.025)
    tip=pivot+d*3.08
    b.box('telescopic-stage',(1.40,.285,.285),pivot+d*2.43,'paint_dark',rot=rot,bevel=.018)
    b.box('boom-end-collar',(.16,.455,.46),pivot+d*1.98,'gunmetal',rot=rot,bevel=.012)
    b.box('boom-end-sleeve',(.11,.415,.42),pivot+d*2.055,'paint',rot=rot,bevel=.012)
    for side in (-1,1):
        for along in (.35,1.60):
            b.box('boom-service-cover',(.36,.028,.25),pivot+d*along+Vector((0,side*.21,0)),'paint_dark',rot=rot,bevel=.01)
            for dx in (-.13,.13):
                b.cyl('boom-cover-bolt',.019,.018,pivot+d*(along+dx)+Vector((0,side*.234,0)),'steel',rot=(PI/2,0,0),verts=6,bevel=0)
    low=pivot+Vector((.12,0,-.41)); high=pivot+d*1.38+Vector((0,0,-.23))
    delta=high-low
    b.tube('lift-cylinder',[low,low+delta*.65],.087,'paint_dark',smooth=False)
    b.tube('lift-piston',[low+delta*.57,high],.044,'chrome',smooth=False)
    for endpoint in (low,high):
        b.cyl('ram-pin',.065,.29,endpoint,'gunmetal',rot=(PI/2,0,0),verts=16,bevel=.006)
    for side in (-1,1):
        b.tube('hydraulic-hose',[pivot+Vector((.22,side*.25,-.38)),pivot+Vector((.42,side*.25,-.13)),
                               pivot+d*.45+Vector((0,side*.235,.23)),pivot+d*1.80+Vector((0,side*.235,.23))],.015,'cable')
        b.box('sheave-cheek',(.28,.04,.33),tip+Vector((0,side*.17,0)),'paint',rot=rot,bevel=.02)
    b.cyl('tip-sheave',.125,.27,tip,'gunmetal',rot=(PI/2,0,0),verts=32,bevel=.008)
    # Drum behind the pivot, cable routed across the boom to the sheave.
    drum=pivot+Vector((.34,0,-.19))
    b.cyl('winch-drum',.15,.41,drum,'gunmetal',rot=(PI/2,0,0),verts=32,bevel=.01)
    winding=Batch(b,'winch-winding','cable')
    for k in range(13):
        # Thin coaxial discs read as tightly wound cable in silhouette.
        winding.cyl(.157,.019,drum+Vector((0,-.18+k*.03,0)),(PI/2,0,0),verts=24)
    winding.done()
    b.tube('hoist-cable',[drum+Vector((0,0,.15)),pivot+d*.38+Vector((0,0,.235)),tip+Vector((0,0,.125)),tip+Vector((0,0,-.64))],.013,'cable',smooth=False)
    hook=tip+Vector((0,0,-.74))
    b.box('hook-block',(.18,.20,.25),hook,'paint_dark',bevel=.025)
    b.cyl('hook-block-pin',.053,.23,hook,'steel',rot=(PI/2,0,0),verts=16,bevel=.004)
    b.tube('recovery-hook',[hook+Vector((0,0,-.12)),hook+Vector((0,0,-.29)),hook+Vector((-.08,0,-.38)),
                             hook+Vector((-.20,0,-.34)),hook+Vector((-.21,0,-.23))],.035,'steel')
    b.tube('hook-latch',[hook+Vector((-.20,0,-.23)),hook+Vector((0,0,-.19))],.009,'gunmetal',smooth=False)
    # Rear stabiliser remains clear of the ground and rear door.
    b.box('stabiliser-blade',(.12,2.10,.40),(BACK-.23,0,.53),'paint_dark',rot=(0,.20,0),bevel=.025)
    b.box('spade-cutting-edge',(.14,2.16,.065),(BACK-.19,0,.34),'steel',bevel=.008)
    for y in (-.83,.83):
        b.tube('spade-cylinder',[(BACK+.03,y,1.03),(BACK-.20,y,.66)],.065,'paint_dark',smooth=False)
        b.tube('spade-piston',[(BACK-.12,y,.76),(BACK-.25,y,.53)],.035,'steel',smooth=False)



def _mounts(mission, top=TOP):
    roof_x = -0.3
    deck_x = BACK + 1.25
    deck_length = 2.0
    rear_sensor_x, rear_sensor_y = BACK + 2.4, 1.05
    if mission == 'RECOVERY':
        # Reserve the rear crane circle, then cabin, then the full-size weapon ring.
        deck_x, deck_length, roof_x = -1.55, 1.4, .15
        rear_sensor_x, rear_sensor_y = -2.15, 1.18
    if mission == 'TROOP':
        roof_x = 0.0
    return Mounts(
        front=FRONT + 0.05, back=BACK, axles=AXLES, wheel_r=R, track=TRACK, tyre_w=TYRE_W,
        deck=(deck_x, top), deck_size=(deck_length, 2.1),
        roof=(roof_x, 0.0, top), roof2=(ROOF_FRONT - (0.77 if mission == 'RECOVERY' else 0.95), -0.45, top),
        side=(BACK + 0.4, ROOF_FRONT - 0.1, SPONSON_Z0 + 0.04, SPONSON_Z1, SPONSON + 0.04),
        front_face=(GLACIS_X + 0.2, 1.05, GLACIS_Z - 0.05, 1.05),
        roof_span=(BACK + 0.2, ROOF_FRONT - 0.05, top, 1.15), belly=(BACK + 0.4, GLACIS_X, 0.52, 0.75),
        engine=(1.38, 0.62, top), tanks=(BACK + 0.08, BACK + 0.64, 0.95, 1.0),
        antenna_left=(BACK + 0.45, -1.0, top), antenna_right=(BACK + 0.45, 1.0, top), radio_mast=(BACK + 0.35, 0.75, top),
        optics=(ROOF_FRONT - 0.25, -0.85, top), sensor_mast=(ROOF_FRONT - 0.7, 0.97, top),
        corners=((ROOF_FRONT - 0.1, -1.05, top), (ROOF_FRONT - 0.1, 1.05, top), (rear_sensor_x, -rear_sensor_y, top), (rear_sensor_x, rear_sensor_y, top)),
        bumper=(FRONT + 0.05, 1.15), hitch=(BACK - 0.1, 0.82), rack=(BACK + 2.75, 0.0, top),
        extra={'armoured': True, 'module_h': 1.15},
    )


def build(mats, mission):
    b = Builder('base', mats)
    _hull(b, mission)
    for side in (-1, 1):
        _side(b, side, mission)
    _cheeks(b)
    _front(b, mission)
    _roof(b, mission)
    _running_gear(b)
    if mission == 'RECOVERY':
        _crane(b)
    if mission == 'COMBAT':
        b.revolve('turret-mount-flange', [(.87, -.014), (.95, -.014), (.95, .014), (.87, .014)], (-.3, 0, TOP), 'gunmetal', rot=(PI/2,0,0), steps=64)
    return _mounts(mission)
