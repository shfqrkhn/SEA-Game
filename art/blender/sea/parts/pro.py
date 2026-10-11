"""Protection kits: bevelled armour, service hardware and open protective grids.

Only Mounts supplies vehicle coordinates. Card displays retain full assemblies;
roof kits use the free forward centre bay between the equipment stations in situ.
"""
import math

import bmesh
from mathutils import Matrix, Vector

from ..geo import Batch, Builder
from .common import PI, _card, _sides

HEAVY_PLATE = 0.065
LIGHT_PLATE = 0.025
LAYER_PITCH = 0.096
SIDE_CLEARANCE = 0.39
ROOF_HALF_WIDTH = 0.15
ENGINE_RESERVE = 0.73
MESH_PITCH = 0.09


def _bolt(washers, heads, p, axis=(0, 0, 1), radius=0.021):
    """A dark seating washer and a contrasting hexagonal fastener."""
    normal = Vector(axis)
    rot = normal.to_track_quat('Z', 'Y').to_euler()
    washers.cyl(radius * 1.35, 0.009, p, rot, verts=12)
    heads.cyl(radius, 0.019, Vector(p) + normal * 0.012, rot, verts=6)


def _hardware(b):
    return Batch(b, 'seating-washers', 'steel'), Batch(b, 'hex-fasteners', 'gunmetal')


def _finish(*batches):
    for batch in batches:
        batch.done()


def _eye(b, name, p, radius=0.065):
    """Extruded lifting eye with a real through-hole, not a painted circle."""
    bm = bmesh.new()
    rings = []
    for depth, r in ((-.026, radius), (-.026, radius*.48), (.026, radius), (.026, radius*.48)):
        rings.append([bm.verts.new((r*math.cos(i*PI/6), depth, r*math.sin(i*PI/6))) for i in range(12)])
    for a,c in ((0,1),(2,0),(1,3),(3,2)):
        for i in range(12):
            j=(i+1)%12
            bm.faces.new((rings[a][i],rings[a][j],rings[c][j],rings[c][i]))
    bmesh.ops.recalc_face_normals(bm, faces=list(bm.faces))
    return b._mesh(name,bm,'paint_dark',p,(0,0,0),0,2,False)


def _panel(b, name, x0, x1, z0, z1, y, thickness, mat='paint', chamfer=.07):
    """Clipped plate corners expose the rail and avoid a featureless box silhouette."""
    c=min(chamfer,(z1-z0)*.22,(x1-x0)*.15)
    profile=[(x0+c,z0),(x1-c,z0),(x1,z0+c),(x1,z1-c),(x1-c,z1),(x0+c,z1),(x0,z1-c),(x0,z0+c)]
    return b.wedge(name,profile,thickness,(0,y,0),mat,bevel=.007,segments=3)


def _side_armour(b,m,heavy):
    x0,x1,z0,z1,hw=m.side
    length=x1-x0
    card=_card(m)
    if card:
        display=Builder(b.layer,b.m)
        display.matrix=b.matrix @ Matrix.Translation((0,0,.2075 if heavy else -.025))
        b=display
    # Clear the permanent jerrycans and stowage on the sponson.
    inner=hw+(.055 if card else SIDE_CLEARANCE)
    washers,heads=_hardware(b)
    rails=Batch(b,'armour-carrier-rails','paint_dark')
    rows=2 if card else 1
    row_h=(z1-z0)/rows
    columns=4 if heavy else 3
    layers=2 if heavy else 1
    for side in _sides(m):
        for zz in (z0+.05,z1-.05):
            rails.box((length-.08,.055,.045),((x0+x1)/2,side*(inner-.04),zz))
        for f in (.08,.52,.94):
            xx=x0+length*f
            for zz in (z0+.07,z1-.07):
                rails.box((.075,inner-hw,.045),(xx,side*(hw+(inner-hw)/2),zz))
        for layer in range(layers):
            thick=HEAVY_PLATE if heavy else LIGHT_PLATE
            yy=side*(inner+layer*LAYER_PITCH)
            # Staggered joints remain inside the slot at both ends.
            edges=[x0+.02]+[x0+length*(k/columns+(.065 if layer else 0)) for k in range(1,columns)]+[x1-.02]
            for row in range(rows):
                a=z0+row*row_h+.025
                c=z0+(row+1)*row_h-.025
                for k,(left,right) in enumerate(zip(edges,edges[1:])):
                    left+=.008; right-=.008
                    _panel(b,'outer-armour' if layer else 'backing-armour',left,right,a,c,yy,thick,
                           'paint' if layer or not heavy else 'paint_dark')
                    for xx in (left+.065,right-.065):
                        for zz in (a+.06,c-.06):
                            _bolt(washers,heads,(xx,yy+side*(thick/2+.006),zz),(0,side,0),.018 if card else .022)
            for f in (.15,.55,.9):
                xx=x0+length*f
                rails.box((.1,.07,.09),(xx,yy,z1-.04))
                _eye(b,'lifting-eye',(xx,yy,z1+.012),.046)
        for xx in (x0+.06,x1-.06):
            rails.box((.08,.12,(z1-z0)*.58),(xx,side*(inner-.07),(z0+z1)/2))
            for zz in (z0+.1,z1-.1):
                _bolt(washers,heads,(xx,side*(inner+.06),zz),(0,side,0),.025)
    rails.done(bevel=.005); _finish(washers,heads)
    if card and heavy:
        # Card-only shipping pallet, with real fork pockets between bearer blocks.
        pallet=Batch(b,'shipping-pallet','wood')
        for xx in (x0+.13,0,x1-.13):
            for yy in (-.30,.12):
                pallet.box((.23,.2,.13),(xx,yy,z0-.11))
        for yy in (-.34,-.13,.08,.25):
            pallet.box((length+.08,.14,.045),((x0+x1)/2,yy,z0-.025))
        for yy in (-.3,.12):
            pallet.box((length+.08,.19,.035),((x0+x1)/2,yy,z0-.19))
        pallet.done(bevel=.008)


def pro_a(b,m):
    """Two staggered armour layers on isolation rails; pallet on the card mount."""
    _side_armour(b,m,True)


def pro_c(b,m):
    """Single thin skin of broad, chamfered bolted plates with lifting eyes."""
    _side_armour(b,m,False)


def pro_e(b,m):
    """Three replaceable slat cassettes with return bars, isolation pads and brackets."""
    x0,x1,z0,z1,hw=m.side
    length=x1-x0; height=z1-z0
    washers,heads=_hardware(b)
    slats=Batch(b,'horizontal-slat-cassettes','paint')
    fittings=Batch(b,'cassette-brackets','paint_dark')
    pads=Batch(b,'isolator-pads','rubber')
    yy=hw+(.20 if _card(m) else .49)
    count=9 if _card(m) else 6
    for side in _sides(m):
        for k in range(4):
            xx=x0+.065+k*(length-.13)/3
            b.box('cassette-upright',(.055,.055,height),(xx,side*yy,(z0+z1)/2),'paint_dark',bevel=.008)
            for zz in (z0+.065,z1-.065):
                fittings.box((.09,yy-hw,.045),(xx,side*(hw+(yy-hw)/2),zz))
                pads.box((.10,.055,.08),(xx,side*(yy-.12),zz))
                b.cyl('isolator-hinge',.033,.10,(xx,side*(yy-.085),zz),'rubber',rot=(0,PI/2,0),verts=16,bevel=0)
                for dx in (-.055,.055):
                    b.cyl('hinge-collar',.038,.018,(xx+dx,side*(yy-.085),zz),'paint_dark',rot=(0,PI/2,0),verts=16,bevel=0)
                fittings.box((.11,.035,.1),(xx,side*(yy+.025),zz))
                _bolt(washers,heads,(xx,side*(yy+.048),zz),(0,side,0),.019)
        for row in range(count):
            zz=z0+.02+row*(height-.04)/(count-1)
            for k in range(3):
                left=x0+.065+k*(length-.08)/3
                right=x0+.015+(k+1)*(length-.08)/3
                slats.box((right-left,.025,min(.035,height/(count*2))),((left+right)/2,side*yy,zz))
            for xx in (x0+.04,x1-.04):
                slats.box((.025,yy-hw-.025,min(.035,height/(count*2))),(xx,side*(hw+(yy-hw)/2),zz))
    slats.done(bevel=.004); fittings.done(bevel=.004); pads.done(bevel=.008); _finish(washers,heads)


def _front_frame(b,m):
    """Local X points across the glacis, Y up its rake, Z outward."""
    x,z0,z1,hw=m.front_face
    if _card(m):
        origin=Vector((x,0,z0-.0063)); up=Vector((-.35,0,.94)); height=(z1-z0)*1.5
    else:
        # Hull nose and roof-edge mounts define the slope, without hull constants.
        origin=Vector((m.front-.025,0,z1-.08))
        up=Vector((m.roof_span[1]-.02-origin.x,0,m.roof_span[2]-origin.z)).normalized()
        height=(Vector((m.roof_span[1],0,m.roof_span[2]))-origin).length*.91
    across=Vector((0,1,0)); normal=across.cross(up)
    local=Builder(b.layer,b.m)
    local.matrix=b.matrix @ Matrix.Translation(origin) @ Matrix((across,up,normal)).transposed().to_4x4()
    return local,hw,height


def pro_b(b,m):
    """Raked composite tiles with dark laminate edges and two framed vision guards."""
    q,hw,height=_front_frame(b,m)
    washers,heads=_hardware(q)
    if not _card(m):
        for u in (-hw*.73,hw*.73):
            for v in (height*.12,height*.64):
                q.box('glacis-mount-shoe',(.12,.15,.18),(u,v,-.065),'paint_dark',bevel=.012)
    q.box('composite-subframe',(hw*1.96,height,.035),(0,height/2,.024),'paint_dark',bevel=.012)
    pw=hw*1.88/3; ph=height*.57/2
    for row in range(2):
        for col in range(3):
            u=-pw+(col*pw); v=.035+ph*(row+.5)
            q.box('laminate-core',(pw-.023,ph-.022,.085),(u,v,.078),'gunmetal',bevel=.009)
            q.box('composite-face',(pw-.035,ph-.03,.032),(u,v,.137),'paint',bevel=.012)
            for du in (-pw/2+.07,pw/2-.07):
                for dv in (-ph/2+.05,ph/2-.05):
                    _bolt(washers,heads,(u+du,v+dv,.158),radius=.018)
    for side in (-1,1):
        u=side*hw*.46; v=height*.79; width=hw*.84; h=height*.29
        q.box('vision-seal',(width,h,.035),(u,v,.065),'rubber',bevel=.016)
        q.box('protected-vision',(width-.07,h-.055,.02),(u,v,.09),'glass',bevel=.008)
        for du in (-width/2,width/2):
            q.box('guard-jamb',(.045,h+.05,.075),(u+du,v,.13),'paint_dark',bevel=.007)
        for dv in (-h/2,h/2):
            q.box('guard-sill',(width+.04,.045,.075),(u,v+dv,.13),'paint_dark',bevel=.007)
        bars=Batch(q,'vision-guard-bars','gunmetal')
        for j in range(4): bars.box((width,.014,.018),(u,v-h*.36+j*h*.24,.18))
        for j in (-1,0,1): bars.box((.016,h,.02),(u+j*width*.28,v,.19))
        bars.done(bevel=.003)
        for du in (-width/2,width/2):
            for dv in (-h/2,h/2): _bolt(washers,heads,(u+du,v+dv,.176),radius=.018)
    _finish(washers,heads)


def _roof_bay(m):
    """Full display kit, or the unoccupied centre of the forward crew roof."""
    x0,x1,z,hw=m.roof_span
    if _card(m): return x0,x1,z,hw
    # This narrow strip clears both the driver hatch and the largest engine pack.
    left=max(m.roof[0]+.95,m.deck[0]+m.deck_size[0]/2+.10,m.roof2[0]+.32)
    return min(left,x1-.38),x1-.035,z,min(ROOF_HALF_WIDTH,hw*.3)


def pro_d(b,m):
    """Heavy crew roof cassette with raised coping, hatch and hinged armoured visors."""
    x0,x1,z,hw=_roof_bay(m); length=x1-x0; cx=(x0+x1)/2
    if _card(m):
        display=Builder(b.layer,b.m)
        display.matrix=b.matrix @ Matrix.Translation((0,0,.60))
        b=display
    else:
        fitted=Builder(b.layer,b.m)
        fitted.matrix=b.matrix @ Matrix.Translation((0,m.engine[1]-ENGINE_RESERVE,0))
        b=fitted
    washers,heads=_hardware(b)
    b.box('roof-gasket',(length,hw*2,.02),(cx,0,z+.01),'rubber',bevel=.01)
    b.box('crew-roof',(length,hw*2,.09),(cx,0,z+.065),'paint',bevel=.016)
    for side in (-1,1):
        b.box('raised-roof-edge',(length,.035,.11),(cx,side*(hw-.025),z+.14),'paint_dark',bevel=.01)
    b.box('rear-coping',(.04,hw*2,.11),(x0+.022,0,z+.14),'paint_dark',bevel=.01)
    r=min(length*.23,hw*.53)
    b.cyl('hatch-seal',r*1.1,.025,(cx,0,z+.125),'gunmetal',verts=48,bevel=.005)
    b.cyl('escape-hatch',r,.028,(cx,0,z+.15),'paint_light',verts=48,bevel=.009)
    for angle in range(0,360,60):
        a=math.radians(angle)
        _bolt(washers,heads,(cx+math.cos(a)*r*.83,math.sin(a)*r*.83,z+.171),radius=.014)
    b.box('hatch-hinge',(.05,r*.9,.05),(cx-r,0,z+.17),'paint_dark',bevel=.008)
    b.tube('hatch-handle',[(cx-.04,-r*.3,z+.17),(cx-.04,-r*.3,z+.21),(cx+.04,-r*.3,z+.21),(cx+.04,-r*.3,z+.17)],.009,'steel',smooth=False)
    for side in (-1,1):
        for f in (.13,.85):
            xx=x0+length*f
            _bolt(washers,heads,(xx,side*(hw-.08),z+.115),radius=.018)
        if _card(m):
            # The display includes the upper crew-cell walls and paired side windows.
            b.box('cell-side-wall',(length,.065,.64),(cx,side*(hw-.05),z-.28),'paint',bevel=.018)
            for f in (.25,.75):
                xx=x0+length*f
                b.box('window-flange',(length*.44,.035,.50),(xx,side*(hw-.005),z-.28),'paint_dark',bevel=.025)
                b.box('window-seal',(length*.37,.025,.41),(xx,side*(hw+.018),z-.28),'rubber',bevel=.022)
                b.box('crew-window',(length*.33,.018,.35),(xx,side*(hw+.035),z-.28),'glass',bevel=.016)
                b.box('armoured-visor',(length*.46,.23,.045),(xx,side*(hw+.075),z+.018),'paint',rot=(side*.3,0,0),bevel=.01)
                for dx in (-length*.19,length*.19):
                    for zz in (z-.51,z-.05):
                        _bolt(washers,heads,(xx+dx,side*(hw+.032),zz),(0,side,0),.014)
                    b.cyl('visor-hinge',.025,.08,(xx+dx,side*hw,z+.052),'gunmetal',rot=(0,PI/2,0),verts=16,bevel=.004)
            b.box('cell-door-seam',(.016,.012,.54),(cx,side*(hw+.001),z-.30),'gunmetal',bevel=.002)
    if _card(m):
        q=Builder(b.layer,b.m)
        up=Vector((-.22,0,.975)).normalized()
        across=Vector((0,1,0))
        normal=across.cross(up)
        q.matrix=b.matrix @ Matrix.Translation((x1+.10,0,z-.60)) @ Matrix((across,up,normal)).transposed().to_4x4()
        trim=Batch(q,'front-cell-hardware','gunmetal')
        for side in (-1,1):
            u=side*hw*.49; width=hw*.9
            q.box('front-armour-surround',(width,.65,.07),(u,.325,.015),'paint',bevel=.023)
            q.box('front-window-gasket',(width-.12,.49,.027),(u,.325,.057),'rubber',bevel=.021)
            q.box('front-ballistic-glass',(width-.18,.43,.014),(u,.325,.075),'glass',bevel=.015)
            q.box('front-visor',(width+.03,.055,.25),(u,.63,.14),'paint_dark',rot=(.12,0,0),bevel=.009)
            for du in (-width*.41,width*.41):
                for v in (.07,.58): trim.cyl(.017,.02,(u+du,v,.065),verts=6)
            trim.box((width*.57,.012,.012),(u,.105,.09))
            trim.box((.013,.20,.015),(u-.12,.20,.09),(0,0,-.45))
        trim.done()
    _finish(washers,heads)


def _access_plate(b,size,loc,rot):
    """A rectangular plate with a real circular service opening and solid cut walls."""
    length,width,thick=size
    outer=[]
    for edge in range(4):
        for i in range(8):
            f=i/8
            outer.append(((length/2, -width/2+width*f),
                          (length/2-length*f,width/2),
                          (-length/2,width/2-width*f),
                          (-length/2+length*f,-width/2))[edge])
    bm=bmesh.new(); rings=[]
    radius=min(.085,width*.15)
    for z,inner in ((-thick/2,False),(-thick/2,True),(thick/2,False),(thick/2,True)):
        points=[]
        for x,y in outer:
            scale=radius/math.hypot(x,y) if inner else 1
            points.append(bm.verts.new((x*scale,y*scale,z)))
        rings.append(points)
    for a,c in ((0,1),(2,0),(1,3),(3,2)):
        for i in range(32):
            j=(i+1)%32
            bm.faces.new((rings[a][i],rings[a][j],rings[c][j],rings[c][i]))
    bmesh.ops.recalc_face_normals(bm,faces=list(bm.faces))
    b._mesh('blast-service-opening',bm,'paint_dark',loc,rot,.003,2,False)


def pro_f(b,m):
    """Continuous V belly with segmented strike plates, keel and bolted attachment rails."""
    x0,x1,z,hw=m.belly; length=x1-x0; cx=(x0+x1)/2
    q=Builder(b.layer,b.m); q.matrix=b.matrix.copy()
    if _card(m):
        # Tip the display to expose its underside to the standard above-ground card camera.
        q.matrix=b.matrix @ Matrix.Translation((0,0,.63)) @ Matrix.Rotation(math.radians(215),4,'X') @ Matrix.Translation((0,0,-z))
    washers,heads=_hardware(q)
    depth=.19; angle=math.atan2(depth,hw); span=math.hypot(hw,depth)
    for side in (-1,1):
        rot=(side*angle,0,0)
        for k in range(3):
            xx=x0+(k+.5)*length/3
            if k==1:
                _access_plate(q,(length/3-.018,span,.047),(xx,side*hw/2,z-.065-depth/2),rot)
            else:
                q.box('blast-strike-plate',(length/3-.018,span,.047),(xx,side*hw/2,z-.065-depth/2),'paint_dark',rot=rot,bevel=.01)
            # Underside cross rails sit on the same V planes as the panels.
            for dx in (-length/6+.05,length/6-.05):
                q.box('blast-cross-rail',(.06,span,.025),(xx+dx,side*hw/2,z-.102-depth/2),'paint',rot=rot,bevel=.005)
                for f in (.17,.52,.86):
                    yy=side*hw*f; zz=z-.105-depth*(1-f)
                    _bolt(washers,heads,(xx+dx,yy,zz),(0,side*math.sin(angle),-math.cos(angle)),.02)
        # Interrupted rails leave 0.30 m passages for the half-shaft guards.
        spans = [(x0, x1)]
        for axle in m.axles:
            spans = [(a, c) for lo, hi in spans
                     for a, c in ((lo, min(hi, axle-.15)), (max(lo, axle+.15), hi))
                     if c-a > .02]
        for lo, hi in spans:
            q.box('belly-mount-rail',(hi-lo,.085,.09),((lo+hi)/2,side*(hw-.035),z-.015),'paint',bevel=.012)
        for lo, hi in spans:
            xx=(lo+hi)/2
            q.box('belly-clevis',(.14,.12,.11),(xx,side*(hw-.04),z+.005),'paint_dark',bevel=.009)
            _bolt(washers,heads,(xx,side*(hw+.025),z+.006),(0,side,0),.025)
    q.box('replaceable-keel',(length,.07,.055),(cx,0,z-.065-depth),'gunmetal',bevel=.012)
    _finish(washers,heads)


def pro_g(b,m):
    """Open bowed wire canopy with curved ribs, four gusseted feet and clamp straps."""
    x0,x1,z,hw=_roof_bay(m); length=x1-x0; cx=(x0+x1)/2
    if not _card(m):
        fitted=Builder(b.layer,b.m)
        fitted.matrix=b.matrix @ Matrix.Translation((0,m.engine[1]-ENGINE_RESERVE,0))
        b=fitted
    rise=min(.23,hw*.24); leg_h=.48 if _card(m) else .17
    washers,heads=_hardware(b)
    mesh=Batch(b,'open-canopy-mesh','gunmetal')
    ribs=Batch(b,'canopy-ribs','paint')
    def roof(y): return z+leg_h+rise*(1-(y/hw)**2)
    segments=12
    for xx in (x0+.03,cx,x1-.03):
        for j in range(segments):
            ya=-hw+2*hw*j/segments; yb=-hw+2*hw*(j+1)/segments
            dz=roof(yb)-roof(ya); dy=yb-ya
            ribs.box((.055,math.hypot(dy,dz)+.005,.04),(xx,(ya+yb)/2,(roof(ya)+roof(yb))/2),(math.atan2(dz,dy),0,0))
    for side in (-1,1):
        b.box('canopy-eave',(length,.05,.07),(cx,side*hw,roof(hw)),'paint',bevel=.01)
        for xx in (x0+.065,x1-.065):
            b.box('canopy-foot',(.18,.16,.035),(xx,side*(hw-.035),z+.0175),'paint_dark',bevel=.012)
            b.box('canopy-leg',(.055,.055,leg_h),(xx,side*(hw-.035),z+leg_h/2),'paint',bevel=.009)
            b.wedge('foot-gusset',[(-.07,0),(.07,0),(0,.12)],.03,(xx,side*(hw-.035),z+.03),'paint',bevel=.003)
            for dx in (-.055,.055): _bolt(washers,heads,(xx+dx,side*(hw-.035),z+.041),radius=.014)
            _bolt(washers,heads,(xx,side*(hw+.027),z+leg_h-.025),(0,side,0),.018)
    # Square-section wires spend twelve triangles per span, rather than tubes per crossing.
    nx=max(5,round(length/MESH_PITCH)); ny=max(6,round(hw*2/MESH_PITCH))
    wire=.009 if _card(m) else .006
    for j in range(1,ny):
        yy=-hw+2*hw*j/ny
        mesh.box((length,wire,wire),(cx,yy,roof(yy)+.026))
    for i in range(1,nx):
        xx=x0+length*i/nx
        for j in range(segments):
            ya=-hw+2*hw*j/segments; yb=-hw+2*hw*(j+1)/segments
            dz=roof(yb)-roof(ya); dy=yb-ya
            mesh.box((wire,math.hypot(dy,dz)+.002,wire),(xx,(ya+yb)/2,(roof(ya)+roof(yb))/2+.019),(math.atan2(dz,dy),0,0))
    for xx in (x0+.03,cx,x1-.03):
        for side in (-1,1):
            yy=side*(hw-.045)
            b.box('mesh-clamp',(.085,.15,.025),(xx,yy,roof(yy)+.047),'paint_dark',bevel=.004)
            _bolt(washers,heads,(xx,yy,roof(yy)+.064),radius=.014)
    ribs.done(bevel=.006); mesh.done(); _finish(washers,heads)

