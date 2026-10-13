"""Mobility kits: mount-relative hard-surface assemblies for stills and export."""
import math

import bmesh
from mathutils import Matrix, Vector

from .. import geo
from ..geo import Batch, Builder
from .common import PI, _card, _sides

Y_AXIS = (PI / 2, 0, 0)
X_AXIS = (0, PI / 2, 0)


def _local(b, origin, scale=1):
    """A scaled local jig retaining the caller's transform and layer."""
    jig = Builder(b.layer, b.m)
    jig.matrix = b.matrix @ Matrix.Translation(Vector(origin)) @ Matrix.Scale(scale, 4)
    return jig


def _bar(b, name, a, c, radius, mat='gunmetal', verts=16):
    d = Vector(c) - Vector(a)
    return b.cyl(name, radius, d.length, (Vector(a) + Vector(c)) / 2, mat,
                 rot=d.to_track_quat('Z', 'Y').to_euler(), verts=verts, bevel=0 if geo.REALTIME else .004)



def _pipe(b, name, points, radius, mat='steel'):
    """Swept mesh hose with exact bounds; avoids Blender curve framing inflation."""
    points = [Vector(p) for p in points]
    sides = 6 if geo.REALTIME else 12
    bm = bmesh.new()
    rings = []
    for i, p in enumerate(points):
        tangent = points[min(i+1, len(points)-1)]-points[max(i-1, 0)]
        tangent.normalize()
        axis = Vector((0, 0, 1)) if abs(tangent.z) < .9 else Vector((0, 1, 0))
        u = tangent.cross(axis).normalized()
        v = tangent.cross(u).normalized()
        rings.append([bm.verts.new(p+radius*(u*math.cos(2*PI*j/sides)+v*math.sin(2*PI*j/sides))) for j in range(sides)])
    for a, c in zip(rings, rings[1:]):
        for j in range(sides):
            bm.faces.new((a[j], a[(j+1)%sides], c[(j+1)%sides], c[j]))
    bm.faces.new(rings[0][::-1])
    bm.faces.new(rings[-1])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    return b._mesh(name, bm, mat, (0,0,0), (0,0,0), 0, 0, True)


def _ring(b, name, r, thickness, depth, at, mat='paint', steps=48):
    """Hollow annular flange, around Y; no disc across the opening."""
    b.revolve(name, [(r-thickness, -depth/2), (r, -depth/2), (r, depth/2),
                     (r-thickness, depth/2), (r-thickness, -depth/2)], at, mat, steps=steps)


def _nuts(b, name, at, radius, n=8, size=.014, axis='Y'):
    bolts = Batch(b, name, 'steel')
    x, y, z = at
    for i in range(n):
        a = 2*PI*i/n
        if axis == 'Y':
            bolts.cyl(size, size*1.4, (x+radius*math.cos(a), y, z+radius*math.sin(a)), Y_AXIS, verts=6)
        else:
            bolts.cyl(size, size*1.4, (x, y+radius*math.cos(a), z+radius*math.sin(a)), X_AXIS, verts=6)
    bolts.done()


def _stand(b, length, width):
    """Open transport skid with crossmembers and isolated engine feet."""
    for y in (-width/2, width/2):
        b.box('skid-rail', (length, .065, .075), (0, y, .0375), 'paint_dark', bevel=.012)
    for x in (-length*.4, length*.4):
        b.box('skid-crossmember', (.065, width, .065), (x, 0, .06), 'paint', bevel=.008)
        for y in (-width*.34, width*.34):
            b.cyl('isolator', .05, .045, (x, y, .115), 'rubber', verts=16, bevel=.004)
            b.box('engine-foot', (.14, .12, .035), (x, y, .151), 'paint', bevel=.009)
            b.cyl('foot-bolt', .015, .025, (x, y, .18), 'steel', verts=6, bevel=0)


def _powerpack(b, m, compact):
    """Diesel block, cooling matrix, gearbox, plumbing and transport skid."""
    # The sensor mast is behind/outboard of this narrow engine-deck installation.
    ex, ey, ez = m.engine
    scale = (1.0 if _card(m) else .58) * (.8 if compact else 1)
    # Leave a clear centreline barrel corridor and room for the canopy feet.
    jig = _local(b, (ex + (0 if _card(m) else .20), ey - (0 if _card(m) else .20), ez), scale)
    length, width = (1.32, .68) if compact else (1.65, .76)
    _stand(jig, length, width)
    jig.box('sump', (.77, .45, .17), (.06, 0, .235), 'paint_dark', bevel=.055)
    jig.box('diesel-block', (.78, .45, .38), (.02, 0, .47), 'paint', bevel=.018)
    for side in (-1, 1):
        jig.box('rocker-cover-gasket', (.75, .035, .19), (.03, side*.241, .655), 'black', bevel=.035)
        jig.box('rocker-cover', (.73, .10, .18), (.03, side*.264, .66), 'paint_light', bevel=.014)
        bolts = Batch(jig, 'rocker-fasteners', 'steel')
        for x in (-.27, -.08, .12, .31):
            for z in (.60, .715):
                bolts.cyl(.012, .012, (x, side*.321, z), Y_AXIS, verts=6)
        bolts.done()
        for x in (-.24, -.08, .08, .24):
            _pipe(jig, 'injector-line', [(x, side*.253, .57), (x+.035, side*.31, .51),
                                      (x+.035, side*.31, .39), (x-.04, side*.27, .36)], .008, 'steel')
        jig.box('service-cover', (.27, .026, .19), (.17, side*.246, .39), 'paint_dark', bevel=.022)
        jig.cyl('oil-filter', .065, .20, (-.28, side*.29, .36), 'paint_dark', verts=24, bevel=.013)
        jig.cyl('filter-lid', .071, .025, (-.28, side*.29, .47), 'steel', verts=24, bevel=.005)
    # Cast side-access fasteners and four pierced transport eyes.
    cover_bolts = Batch(jig, 'service-cover-fasteners', 'steel')
    for side in (-1, 1):
        for dx in (.065, .275):
            for z in (.32, .46):
                cover_bolts.cyl(.011,.014,(dx,side*.267,z),Y_AXIS,verts=6)
        for x in (-length*.45,length*.45):
            _ring(jig,'lifting-eye',.055,.018,.025,(x,side*width/2,.112),'paint',24)
    cover_bolts.done()
    # Front-facing cooling matrix: explicit lattice remains legible on cards.
    rx = length*.40
    jig.box('radiator-core', (.105, width*.89, .61), (rx, 0, .48), 'black', bevel=.012)
    grille = Batch(jig, 'radiator-mesh', 'gunmetal')
    for i in range(18):
        grille.box((.016, .008, .53), (rx+.061, -width*.40+i*width*.8/17, .48))
    for i in range(15):
        grille.box((.018, width*.82, .008), (rx+.066, 0, .23+i*.5/14))
    grille.done()
    for y in (-width*.47, width*.47):
        jig.box('radiator-side-rail', (.14, .045, .70), (rx, y, .49), 'paint', bevel=.012)
    for z in (.16, .82):
        jig.box('radiator-header', (.16, width, .075), (rx, 0, z), 'paint', bevel=.022)
    jig.cyl('coolant-cap', .038, .035, (rx, -.15, .875), 'gunmetal', verts=16, bevel=.005)
    fasteners = Batch(jig, 'radiator-frame-bolts', 'steel')
    for z in (.22, .38, .55, .73):
        for y in (-width*.47, width*.47):
            fasteners.cyl(.011, .02, (rx+.081, y, z), X_AXIS, verts=6)
    fasteners.done()
    # Stepped transmission with ribs and its own bearer.
    gx = -length*.32
    jig.cyl('bell-housing', .225, .20, (gx+.15, 0, .41), 'paint_dark', rot=X_AXIS, verts=32, bevel=.02)
    jig.cyl('gearbox', .16, .33, (gx-.10, 0, .41), 'paint', rot=X_AXIS, verts=32, bevel=.025, radius2=.13)
    for dx in (-.22, -.12, -.02, .09):
        jig.cyl('gearbox-rib', .172, .018, (gx+dx, 0, .41), 'paint_light', rot=X_AXIS, verts=24, bevel=.003)
    jig.box('gearbox-bearer',(.20,.28,.10),(gx-.10,0,.205),'paint_dark',bevel=.015)
    jig.box('gearbox-cover', (.23, .25, .09), (gx-.10, 0, .57), 'paint', bevel=.018)
    jig.cyl('output-flange', .095, .055, (gx-.29, 0, .41), 'gunmetal', rot=X_AXIS, verts=24, bevel=.005)
    _nuts(jig, 'output-bolts', (gx-.323, 0, .41), .071, 6, .01, 'X')
    # Different top silhouettes for A (large drum) and F (low heat shield).
    if compact:
        jig.box('exhaust-shield', (.65, .39, .14), (-.04, 0, .84), 'paint_dark', bevel=.035)
        vents = Batch(jig, 'shield-slots', 'black')
        for i in range(12):
            vents.box((.023, .20, .006), (-.30+i*.047, 0, .913))
        vents.done()
        for y in (-.13, .13):
            _pipe(jig, 'twin-exhaust', [(-.30,y,.85),(-.46,y,.86),(-.52,y,1.03)], .048, 'gunmetal')
            jig.cyl('exhaust-bore', .038, .009, (-.52,y,1.035), 'black', verts=24, bevel=0)
        jig.cyl('compact-air-cleaner', .12, .27, (-.12,.31,.72), 'paint', rot=X_AXIS, verts=32, bevel=.02)
    else:
        jig.cyl('air-cleaner-drum', .185, .54, (-.14,.02,.94), 'paint', rot=X_AXIS, verts=40, bevel=.027)
        for x in (-.39,.10):
            jig.cyl('air-cleaner-band', .193, .023, (x,.02,.94), 'steel', rot=X_AXIS, verts=40, bevel=.004)
            jig.box('air-cleaner-saddle', (.05,.08,.23), (x,.09,.76), 'paint_dark', bevel=.009)
        jig.cyl('air-cleaner-lid', .166, .03, (-.426,.02,.94), 'paint_dark', rot=X_AXIS, verts=32, bevel=.008)
        _pipe(jig, 'intake-bellows', [(.13,.02,.94),(.29,.02,.94),(.33,-.13,.76)], .079, 'rubber')
        for x in (.15,.19,.23,.27):
            jig.cyl('intake-rib', .085, .014, (x,.02,.94), 'black', rot=X_AXIS, verts=24, bevel=.003)
        _pipe(jig, 'single-exhaust', [(-.25,.28,.57),(-.46,.28,.68),(-.46,.28,1.24),(-.54,.28,1.34)], .049, 'gunmetal')
        jig.cyl('exhaust-open-end', .038, .014, (-.543,.28,1.347), 'black', rot=(0,-.67,0), verts=24, bevel=0)
    _pipe(jig, 'coolant-hose', [(rx-.06,-.25,.77),(.37,-.33,.77),(.30,-.35,.53)], .045, 'rubber')
    hose_start, hose_end = Vector((.37,-.33,.77)), Vector((.30,-.35,.53))
    direction = (hose_end-hose_start).normalized()
    for t in (.25,.80):
        centre = hose_start.lerp(hose_end,t)
        _bar(jig,'hose-clamp',centre-direction*.012,centre+direction*.012,.05,'steel',24)
    _pipe(jig, 'wiring-loom', [(-.35,-.32,.26),(.1,-.33,.25),(.3,-.32,.35),(.3,-.32,.56)], .018, 'cable')


def mob_a(b, m):
    """Efficient Power Pack: full diesel/transmission skid, drum intake, single stack."""
    _powerpack(b, m, compact=False)


def mob_f(b, m):
    """Compact Engine Set: short low engine, vented heat shield and twin outlets."""
    _powerpack(b, m, compact=True)


def _wheels(m):
    """One card station or all fitted stations; outward sign is explicit."""
    return [(m.axles[0], -m.track, -1)] if _card(m) else [(x, s*m.track, s) for x in m.axles for s in (-1,1)]


def _tyre(b, m, x, y, name='tyre'):
    r, w = m.wheel_r, m.tyre_w
    profile = [(.60*r,-.43*w),(.81*r,-.50*w),(.94*r,-.46*w),(.975*r,-.32*w),
               (.975*r,.32*w),(.94*r,.46*w),(.81*r,.50*w),(.60*r,.43*w)]
    b.revolve(name, profile, (x,y,r), 'rubber', steps=64)
    lugs = Batch(b, 'shoulder-tread', 'tread')
    for k in range(28):
        for s in (-1,1):
            a = 2*PI*(k+(0.45 if s>0 else 0))/28
            lugs.box((.039,w*.47,.094), (x+.973*r*math.cos(a), y+s*w*.235, r+.973*r*math.sin(a)), (s*.28,-a,0))
        a=2*PI*(k+.2)/28
        lugs.box((.032,w*.17,.064),(x+.972*r*math.cos(a),y,r+.972*r*math.sin(a)),(0,-a,0))
    lugs.done(bevel=.008)
    for s in (-1,1):
        _ring(b, 'sidewall-bead', r*.84, .008, .009, (x,y+s*w*.494,r), 'rubber', 48)


def _open_rim(b, m, x, y, side):
    """Eight tapered spokes with actual open windows and a recessed rim barrel."""
    r, w = m.wheel_r, m.tyre_w
    face = y+side*w*.49
    _ring(b, 'rim-barrel', r*.625, .026, w*.82, (x,y,r), 'paint_dark')
    _ring(b, 'rim-lip', r*.633, .016, .022, (x,face,r), 'paint_light')
    for k in range(8):
        a = 2*PI*k/8
        b.wedge('tapered-spoke', [(.12,-.055),(.34,-.026),(.35,.026),(.12,.055)], .055,
                (x,face-side*.034,r), 'paint', rot=(0,-a,0), bevel=.009, segments=2)
    b.cyl('wheel-centre', .139, .062, (x,face,r), 'paint', rot=Y_AXIS, verts=32, bevel=.012)
    b.cyl('hub-cap', .080, .08, (x,face+side*.035,r), 'gunmetal', rot=Y_AXIS, verts=24, bevel=.01)
    _nuts(b, 'wheel-nuts', (x,face+side*.042,r), .113, 8, .015)


def mob_c(b, m):
    """Lightweight Running Gear: aggressive shoulder tread and eight open spokes."""
    for x,y,side in _wheels(m):
        _tyre(b,m,x,y)
        _open_rim(b,m,x,y,side)


def _hub(b, at, side, radius=.23):
    x,y,z = at
    b.cyl('reduction-housing', radius, .15, at, 'paint', rot=Y_AXIS, verts=32, bevel=.022)
    _ring(b, 'reduction-flange', radius*1.07, .024, .027, (x,y+side*.073,z), 'paint_light', 32)
    b.cyl('reduction-cover', radius*.78, .055, (x,y+side*.095,z), 'gunmetal', rot=Y_AXIS, verts=32, bevel=.012)
    b.cyl('oil-access-cap', radius*.35, .018, (x,y+side*.13,z), 'paint_dark', rot=Y_AXIS, verts=16, bevel=.003)
    _nuts(b,'housing-bolts',(x,y+side*.098,z),radius*.91,10,.013)
    b.cyl('hub-centre-step',radius*.47,.022,(x,y+side*.122,z),'paint',rot=Y_AXIS,verts=24,bevel=.005)
    ribs = Batch(b,'housing-ribs','paint_dark')
    for k in range(10):
        a=2*PI*k/10
        ribs.box((.03,.10,.04),(x+radius*.97*math.cos(a),y,z+radius*.97*math.sin(a)),(0,-a,0))
    ribs.done(bevel=.004)


def mob_b(b, m):
    """High-Torque Drivetrain: portal hubs, jointed half-shafts and segmented guards."""
    for x,y,s in _wheels(m):
        face = y+s*(m.tyre_w*.49+.025)
        _hub(b,(x,face,m.wheel_r),s)
        inner = y-s*.45
        _bar(b,'half-shaft',(x,inner,m.wheel_r),(x,face-s*.08,m.wheel_r),.06)
        b.box('half-shaft-armour',(.19,.31,.18),(x,inner+s*.13,m.wheel_r),'paint_dark',bevel=.028)
        for yy in (inner-.035*s,inner+.30*s):
            b.cyl('universal-joint',.09,.10,(x,yy,m.wheel_r),'gunmetal',rot=Y_AXIS,verts=16,bevel=.008)
        if _card(m):
            b.box('differential-case',(.42,.37,.37),(x,inner-s*.16,m.wheel_r),'paint',bevel=.020)
            _hub(b,(x,inner-s*.35,m.wheel_r),-s,.18)
            # One wheel station plus a connected longitudinal shaft (readable card kit).
            _bar(b,'propeller-shaft',(x-.75,inner-s*.16,m.wheel_r),(x,inner-s*.16,m.wheel_r),.065)
            b.box('propeller-guard',(.48,.18,.18),(x-.48,inner-s*.16,m.wheel_r),'paint',bevel=.027)
            _nuts(b,'differential-bolts',(x,inner-s*.41,m.wheel_r),.14,8,.012)
    if not _card(m):
        axles=sorted(m.axles)
        for a,c in zip(axles,axles[1:]):
            _bar(b,'propeller-shaft',(a,0,m.wheel_r-.16),(c,0,m.wheel_r-.16),.075)
            b.box('driveline-guard',(c-a-.28,.25,.14),((a+c)/2,0,m.wheel_r-.18),'paint_dark',bevel=.025)



def mob_d(b, m):
    """Heavy-Duty Suspension: heavy hub, ventilated brake with yellow calliper, upright, double wishbones and a
    canted yellow coil-over, all inboard of the tyre (owner FIX, G2: the dampers had stood outside the tyres)."""
    # The card shows the station from its inboard side, where the springing is; fitted, the rim hides it.
    stations=[(x,-y,-s) for x,y,s in _wheels(m)] if _card(m) else _wheels(m)
    for x,y,s in stations:
        r,half=m.wheel_r,m.tyre_w*.5
        at=lambda o: y+s*o  # o: metres outward from the wheel's centre plane
        # Outboard only the hub, proud of the rim within a hub's radius.
        b.cyl('heavy-hub-flange',.20,.03,(x,at(half-.005),r),'paint',rot=Y_AXIS,verts=32,bevel=.006)
        _nuts(b,'wheel-studs',(x,at(half+.012),r),.165,10,.015)
        b.cyl('bearing-hub',.13,.10,(x,at(half+.06),r),'paint_dark',rot=Y_AXIS,verts=32,bevel=.01)
        b.cyl('bearing-dust-cap',.084,.03,(x,at(half+.12),r),'yellow',rot=Y_AXIS,verts=24,bevel=.007)
        # In the rim well, inside the bead seat: rotor, calliper, upright.
        b.cyl('brake-rotor',.28,.045,(x,at(-.05),r),'gunmetal',rot=Y_AXIS,verts=40,bevel=.004)
        _ring(b,'rotor-wear-face',.282,.09,.008,(x,at(-.0235),r),'steel',48)
        # Spindle from the upright through the rotor to the hub (Codex review, G2).
        b.cyl('hub-spindle',.075,.36,(x,at(.06),r),'steel',rot=Y_AXIS,verts=24,bevel=.006)
        b.box('brake-calliper',(.17,.09,.10),(x-.05,at(-.05),r+.24),'yellow',rot=(0,.2,0),bevel=.02)
        b.box('steering-upright',(.15,.09,.44),(x,at(-.12),r),'paint',bevel=.027)
        # Wishbones from the upright to pivots on the hull side, below the sponson.
        pivot_y=at(-.30)
        for z0,z1 in ((r-.17,r+.14),(r+.17,r+.34)):
            for dx in (-.18,.18):
                _bar(b,'wishbone',(x,at(-.14),z0),(x+dx,pivot_y,z1),.04,'paint')
                b.cyl('wishbone-bushing',.055,.08,(x+dx,pivot_y,z1),'rubber',rot=X_AXIS,verts=16,bevel=.006)
                b.cyl('pivot-pin',.028,.10,(x+dx,pivot_y,z1),'steel',rot=X_AXIS,verts=6,bevel=0)
        # Coil-over from the lower wishbone up and in to a hull bracket: the coil stays in the rim well.
        low=Vector((x+.10,at(-.19),r-.12)); top=Vector((x+.16,at(-.36),r+.52))
        axis=top-low
        _bar(b,'yellow-damper',low,low+axis*.62,.042,'yellow')
        _bar(b,'chrome-piston',low+axis*.58,top,.02,'chrome')
        for end in (low,top):
            b.cyl('damper-eye',.045,.07,end,'yellow',rot=X_AXIS,verts=16,bevel=.008)
            b.cyl('damper-eye-pin',.02,.08,end,'steel',rot=X_AXIS,verts=6,bevel=0)
        b.box('damper-bracket',(.16,.10,.14),(top.x,at(-.36),top.z),'paint_dark',bevel=.015)
        u=axis.normalized(); v=u.orthogonal().normalized(); w=u.cross(v)
        coil_steps = 40 if geo.REALTIME else 80
        coil=[low+axis*(.08+.34*i/coil_steps)+(v*math.cos(i*10*PI/coil_steps)+w*math.sin(i*10*PI/coil_steps))*.075
              for i in range(coil_steps+1)]
        _pipe(b,'heavy-coil',coil,.018,'paint_light')
        for t in (.08,.42):
            b.cyl('spring-seat',.10,.03,low+axis*t,'paint',rot=axis.to_track_quat('Z','Y').to_euler(),verts=24,bevel=.008)
        _bar(b,'cv-shaft',(x,at(-.12),r),(x,at(-.36),r),.05)
        for j in range(4):
            b.cyl('cv-boot-rib',.075-abs(j-1.5)*.006,.026,(x,at(-.19-j*.029),r),'rubber',rot=Y_AXIS,verts=16,bevel=.006)
        _bar(b,'tie-rod',(x+.07,at(-.14),r-.08),(x+.20,pivot_y,r-.08),.022,'steel')
        if _card(m):
            # On the card there is no hull: chassis clevises stand in for it at each inner pivot.
            for dx in (-.18,.18):
                for z in (r+.14,r+.34):
                    b.box('chassis-clevis',(.12,.05,.11),(x+dx,at(-.345),z),'paint_dark',bevel=.012)


def _jerrycan(b, at, side, scale):
    """Pressed can with X ribs, recessed handle and filler neck."""
    x,y,z=at
    b.box('jerrycan',(.19*scale,.13*scale,.30*scale),at,'paint_dark',bevel=.025*scale)
    for sign in (-1,1):
        _bar(b,'pressed-can-rib',(x-.062*scale,y+side*.071*scale,z+sign*.10*scale),
             (x+.062*scale,y+side*.071*scale,z-sign*.10*scale),.009*scale,'paint',8)
    _pipe(b, 'can-handle',[(x-.05*scale,y,z+.15*scale),(x-.05*scale,y,z+.20*scale),
                         (x+.045*scale,y,z+.20*scale),(x+.045*scale,y,z+.15*scale)],.012*scale,'paint')
    b.cyl('can-cap',.029*scale,.023*scale,(x+.058*scale,y,z+.158*scale),'gunmetal',verts=16,bevel=.003)


def mob_e(b, m):
    """Long-Range Propulsion: twin chamfered tanks, cradle straps and can rack."""
    x0,x1,z,hw=m.tanks
    length=x1-x0
    # Outboard of tyre faces; tank tops stop below the armour slot.
    height=.50 if _card(m) else .40
    for s in _sides(m):
        y=s*(max(hw,m.track+m.tyre_w*.5 if not _card(m) else hw)+.235)
        cx=(x0+x1)/2
        for k in (-1,1):
            tx=cx+k*length*.245
            ln=length*.45
            b.box('armoured-fuel-tank',(ln,.34,height),(tx,y,z),'paint',bevel=.055,segments=3)
            for dx in (-ln*.32,ln*.32):
                b.box('tank-strap',( .035,.37,height+.018),(tx+dx,y+s*.02,z),'paint_dark',bevel=.035)
                b.box('strap-buckle',(.065,.025,.065),(tx+dx,y+s*.198,z+.05),'steel',bevel=.007)
            b.cyl('fuel-filler',.055,.028,(tx,y,z+height/2+.018),'gunmetal',verts=24,bevel=.007)
            b.cyl('filler-lock',.065,.014,(tx,y,z+height/2+.033),'paint',verts=16,bevel=.003)
            b.box('tank-cradle',(ln+.02,.43,.045),(tx,y,z-height/2-.03),'paint_dark',bevel=.012)
            for dx in (-ln*.3,ln*.3):
                b.box('tank-hanger',(.05,.05,height+.06),(tx+dx,y-s*.15,z),'paint_dark',bevel=.01)
            can_scale=1 if _card(m) else .77
            for dx in (-.105,.105) if _card(m) else (0,):
                _jerrycan(b,(tx+dx,y+s*.28,z-.01),s,can_scale)
        if not _card(m):
            # Cantilever from behind the last tyre, with real hull contact.
            for fraction in (.12,.30):
                sx=x0+length*fraction
                b.box('hull-tank-outrigger',(.065,abs(y)-hw+.08,.065),
                      (sx,s*(abs(y)+hw)/2,z-.10),'paint_dark',bevel=.01)
                b.box('hull-anchor-plate',(.13,.035,.25),(sx,s*hw,z-.025),'paint',bevel=.009)
                for dz in (-.10,.07):
                    b.cyl('hull-anchor-bolt',.017,.035,(sx,s*(hw+.027),z+dz),'steel',rot=Y_AXIS,verts=6,bevel=0)
        b.box('can-rack-base',(length*.93,.18,.04),(cx,y+s*.28,z-.19),'paint',bevel=.008)
        b.box('can-retaining-strap',(length*.94,.025,.036),(cx,y+s*.36,z),'gunmetal',bevel=.005)
        for dx in (-length*.45,length*.45):
            _pipe(b, 'can-rack-end',[(cx+dx,y+s*.17,z-.18),(cx+dx,y+s*.38,z-.18),
                                    (cx+dx,y+s*.38,z+.14)],.014,'paint')
        _pipe(b, 'fuel-crossover',[(cx-.10,y-s*.16,z+.08),(cx-.08,y-s*.21,z-.10),
                                 (cx+.08,y-s*.21,z-.10),(cx+.10,y-s*.16,z+.08)],.016,'rubber')


def _chain_link(bm, centre, u, v, long=.030, short=.017, wire=.007):
    """Six-segment forged oval, four-sided wire: 48 triangles per open link."""
    c,u,v=Vector(centre),Vector(u),Vector(v)
    n=u.cross(v).normalized()
    rings=[]
    outline=6 if geo.REALTIME else 12
    for i in range(outline):
        a=2*PI*i/outline
        p=c+u*(long*math.cos(a))+v*(short*math.sin(a))
        radial=(u*math.cos(a)+v*math.sin(a)).normalized()
        rings.append([bm.verts.new(p+wire*(radial*math.cos(j*PI/2)+n*math.sin(j*PI/2))) for j in range(4)])
    for i in range(outline):
        for j in range(4):
            bm.faces.new((rings[i][j],rings[i][(j+1)%4],rings[(i+1)%outline][(j+1)%4],rings[(i+1)%outline][j]))


def mob_g(b, m):
    """Adaptive Traction: interlocked cross chains, side chain and hub-fed CTIS."""
    for x,y,s in _wheels(m):
        r,w=m.wheel_r,m.tyre_w
        if _card(m):
            _tyre(b,m,x,y)
            # Dish with a depressed centre, visibly heavier than C's open alloy rim.
            b.revolve('steel-wheel-dish',[(.08,s*w*.36),(.19,s*w*.32),(.30,s*w*.39),
                       (.35,s*w*.45),(.37,s*w*.43),(.37,-s*w*.35)],(x,y,r),'paint_dark',steps=48)
            _ring(b,'wheel-bead',.37,.019,.027,(x,y+s*w*.43,r),'paint',48)
            _nuts(b,'wheel-nuts',(x,y+s*w*.39,r),.16,10,.017)
        links=bmesh.new()
        for k in range(10):
            a=2*PI*k/10
            radial=Vector((math.cos(a),0,math.sin(a)))
            tangent=Vector((-math.sin(a),0,math.cos(a)))
            for j in range(5):
                yy=(j-2)*w/4
                rr=r+.009-(.038 if abs(j-2)==2 else 0)
                centre=Vector((x,y+yy,r))+radial*rr
                v=radial if j%2 else tangent
                _chain_link(links,centre,(0,1,0),v,long=w/7,short=.019,wire=.008)
        # Linked outer sidewall chain; inner side gets a continuous retaining cable.
        for k in range(20):
            a=2*PI*k/20
            radial=Vector((math.cos(a),0,math.sin(a)))
            tangent=Vector((-math.sin(a),0,math.cos(a)))
            _chain_link(links,(x+(r-.052)*math.cos(a),y+s*w*.52,r+(r-.052)*math.sin(a)),
                        tangent,(0,1,0) if k%2 else radial,long=.091,short=.016,wire=.007)
        bmesh.ops.recalc_face_normals(links,faces=links.faces)
        b._mesh('forged-chain-links',links,'steel',(0,0,0),(0,0,0),0,0,True)
        buckles=Batch(b,'chain-tensioners','gunmetal')
        for sign in (-1,1):
            buckles.box((.045,.026,.06),(x+sign*(r-.052),y+s*w*.55,r))
        buckles.done(bevel=.005)
        # Low-poly annular inner retainer avoids an expensive smooth curve ring.
        _ring(b,'inner-chain-retainer',r-.048,.012,.017,(x,y-s*w*.50,r),'gunmetal',48)
        face=y+s*(w*.49+.028)
        b.cyl('ctis-hub',.09,.065,(x,face,r),'paint',rot=Y_AXIS,verts=24,bevel=.013)
        b.cyl('rotary-air-union',.028,.085,(x,face+s*.047,r),'steel',rot=Y_AXIS,verts=16,bevel=.006)
        _pipe(b, 'inflation-hose',[(x,face+s*.085,r),(x+.09,face+s*.095,r-.13),
                               (x+.15,face+s*.07,r-.27),(x+.25,face,r-.28)],.014,'rubber')
        b.cyl('rim-air-valve',.024,.04,(x+.25,face,r-.28),'steel',rot=Y_AXIS,verts=12,bevel=.003)







