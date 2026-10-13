"""Seven fictional weapon stations, built in mount-local metres with palette materials."""
import math

import bmesh
from mathutils import Euler, Matrix, Vector

from ..geo import Batch, Builder, loft
from .common import _card

PI = math.pi
X_AXIS = (0, PI / 2, 0)
Y_AXIS = (PI / 2, 0, 0)


class _Station(Builder):
    """Keep armour faces planar; only the cylindrical walls receive smooth shading."""
    def box(self, *args, **kwargs):
        obj = super().box(*args, **kwargs)
        for face in obj.data.polygons:
            face.use_smooth = False
        return obj

    def wedge(self, *args, **kwargs):
        obj = super().wedge(*args, **kwargs)
        for face in obj.data.polygons:
            face.use_smooth = False
        return obj

    def cyl(self, *args, **kwargs):
        obj = super().cyl(*args, **kwargs)
        for face in obj.data.polygons:
            face.use_smooth = len(face.vertices) == 4
        return obj

    def revolve(self, *args, **kwargs):
        obj = super().revolve(*args, **kwargs)
        for face in obj.data.polygons:
            if abs(face.normal.y) > .99:
                face.use_smooth = False
        return obj

    def tube(self, name, points, radius, mat='steel', loc=(0,0,0), rot=(0,0,0), smooth=True):
        """Small mesh rails avoid Blender curve bounds expanding before the first render."""
        control=[Vector(p) for p in points]
        path=[]
        if smooth and len(control)>2:
            for i in range(len(control)-1):
                p0=control[max(0,i-1)]; p1=control[i]
                p2=control[i+1]; p3=control[min(len(control)-1,i+2)]
                for k in range(4):
                    t=k/4
                    path.append(.5*((2*p1)+(-p0+p2)*t+(2*p0-5*p1+4*p2-p3)*t*t+(-p0+3*p1-3*p2+p3)*t*t*t))
            path.append(control[-1])
        else:
            path=control
        bm=bmesh.new(); rings=[]; previous_u=None
        for i,p in enumerate(path):
            tangent=(path[min(i+1,len(path)-1)]-path[max(0,i-1)]).normalized()
            reference=Vector((0,0,1)) if abs(tangent.z)<.9 else Vector((0,1,0))
            u=tangent.cross(reference).normalized() if previous_u is None else previous_u-tangent*previous_u.dot(tangent)
            if u.length < .001:
                u=tangent.cross(reference)
            u.normalize(); previous_u=u
            v=tangent.cross(u).normalized()
            rings.append([bm.verts.new(p+radius*(u*math.cos(k*PI/4)+v*math.sin(k*PI/4))) for k in range(8)])
        for a,c in zip(rings,rings[1:]):
            for k in range(8):
                n=(k+1)%8
                bm.faces.new((a[k],a[n],c[n],c[k]))
        bm.faces.new(rings[0][::-1]); bm.faces.new(rings[-1])
        bmesh.ops.recalc_face_normals(bm,faces=bm.faces)
        return self._mesh(name,bm,mat,loc,rot,0,1)


def _local(b, at):
    """Preserve the caller's layer and transform when entering a mount frame."""
    child = _Station(b.layer, b.m)
    child.matrix = b.matrix @ Matrix.Translation(Vector(at))
    return child


def _bolts(b, points, rot=(0, 0, 0), radius=0.014):
    bolts = Batch(b, 'hex-fasteners', 'gunmetal')
    for p in points:
        bolts.cyl(radius, 0.014, p, rot, verts=6)
    bolts.done()


def _handle(b, at, width=0.17, axis='y'):
    x, y, z = at
    pts = [(x, y-width/2, z), (x, y-width/2, z+0.045),
           (x, y+width/2, z+0.045), (x, y+width/2, z)]
    if axis == 'x':
        pts = [(x+py-y, y, pz) for px, py, pz in pts]
    b.tube('lifting-handle', pts, 0.012, 'gunmetal', smooth=False)


def _annulus(b, name, r, inner, z, height, mat='paint', steps=48):
    profile = [(inner, -height/2), (r, -height/2), (r, height/2),
               (inner, height/2), (inner, -height/2)]
    b.revolve(name, profile, (0, 0, z+height/2), mat, rot=(PI/2, 0, 0), steps=steps)


def _aux(b, m):
    """The auxiliary station's frame: on the driver's hatch ring, where there is one, over an adapter that covers the hatch."""
    at = Vector(m.roof2)+Vector((.16,-.06,0))
    if m.extra.get('driver_hatch') and not _card(m):
        # A hat: its skirt stands outside the hatch gasket and its plate above the closed hatch and grab.
        b.revolve('hatch-ring-adapter',[(0,.12),(.335,.12),(.335,0),(.305,0),(.305,.105),(0,.105)],at,'paint_dark',rot=(PI/2,0,0),steps=48)
        at.z += .12
    return _local(b, at)


def _ring(b, radius, height=0.15, hollow=False):
    _annulus(b, 'race-ring', radius, radius-0.075 if hollow else radius*0.65, 0, 0.06, 'gunmetal')
    _annulus(b, 'slewing-flange', radius*0.98, radius-0.08 if hollow else radius*0.65, 0.06, height-0.06)
    _bolts(b, [(math.cos(a)*radius*0.92, math.sin(a)*radius*0.92, height+0.006)
               for a in [k*PI/6 for k in range(12)]])
    return height


def _chips(b, vertices, normal):
    """Small irregular exposed edges remain visible in the texture-free realtime asset."""
    bm=bmesh.new()
    for i,start in enumerate(vertices):
        end=vertices[(i+1)%len(vertices)]
        edge=end-start
        inward=normal.cross(edge).normalized()
        for k in range(7):
            t=(k+.35)/7
            at=start+edge*t+normal*.0015+inward*.003
            size=.005+.003*((k*3+i)%4)
            vs=[bm.verts.new(at),bm.verts.new(at+edge.normalized()*size),
                bm.verts.new(at+edge.normalized()*size*.38+inward*.0035)]
            bm.faces.new(vs)
    b._mesh('edge-paint-chips',bm,'gunmetal',(0,0,0),(0,0,0),0,1,False)


def _panel(b, name, vertices, mat='paint', thick=0.025, bolts=True):
    """Bevelled flat armour sheet, with a real edge and face-normal fasteners."""
    vs = [Vector(v) for v in vertices]
    normal = (vs[1]-vs[0]).cross(vs[2]-vs[0]).normalized()
    bm = bmesh.new()
    front = [bm.verts.new(v) for v in vs]
    back = [bm.verts.new(v-normal*thick) for v in vs]
    bm.faces.new(front)
    bm.faces.new(back[::-1])
    for i in range(len(vs)):
        j = (i+1) % len(vs)
        bm.faces.new((front[i], back[i], back[j], front[j]))
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    b._mesh(name, bm, mat, (0, 0, 0), (0, 0, 0), 0.006, 2, smooth=False)
    _chips(b, vs, normal)
    if bolts:
        centre = sum(vs, Vector())/len(vs)
        _bolts(b, [v.lerp(centre, 0.15)+normal*0.01 for v in vs],
               Vector((0, 0, 1)).rotation_difference(normal).to_euler())


def _barrel(b, at, length, radius, brake=True, jacket=False):
    """Stepped barrel with an open bore and a slotted muzzle cage."""
    x, y, z = at
    profile = [(radius*1.35, 0), (radius*1.35, 0.13), (radius, 0.18),
               (radius*0.85, length), (radius*0.60, length),
               (radius*0.60, length-0.12), (0, length-0.12), (0, 0)]
    b.revolve('bored-barrel', profile, at, 'gunmetal', rot=(0, 0, -PI/2), steps=32)
    if jacket:
        b.cyl('thermal-sleeve', radius*1.38, length*0.34,
              (x+length*0.4, y, z), 'paint_dark', rot=X_AXIS, verts=24, bevel=0.006)
    for d in (0.17, length*0.57):
        b.cyl('barrel-collar', radius*1.28, 0.035, (x+d, y, z), 'gunmetal', rot=X_AXIS, verts=24, bevel=0.003)
    if brake:
        for d in (length-0.14, length+0.035):
            b.revolve('muzzle-collar', [(radius*0.66, -0.025), (radius*1.7, -0.025),
                      (radius*1.7, 0.025), (radius*0.66, 0.025), (radius*0.66, -0.025)],
                      (x+d, y, z), 'gunmetal', rot=(0, 0, -PI/2), steps=24)
        ribs = Batch(b, 'muzzle-bridges', 'gunmetal')
        for k in range(4):
            a = k*PI/2
            ribs.box((0.15, radius*0.62, radius*0.62),
                     (x+length-0.055, y+math.cos(a)*radius*1.35, z+math.sin(a)*radius*1.35), (a, 0, 0))
        ribs.done(bevel=0.003)


def _shroud(b, at, length=0.36, radius=0.066):
    """Pierced heat shield: open circular ventilation holes, no texture or boolean."""
    x, y, z = at
    bm = bmesh.new()
    rows, sectors = 4, 8
    # Each unrolled cell is a rectangular perimeter surrounding an eight-sided hole.
    border = [(-1,-1), (0,-1), (1,-1), (1,0), (1,1), (0,1), (-1,1), (-1,0)]
    for row in range(rows):
        for col in range(sectors):
            centre = (row+0.5)*length/rows
            angle = (col+0.5)*2*PI/sectors
            outer, inner, lip = [], [], []
            for j, (u,v) in enumerate(border):
                a = angle+v*PI/sectors
                outer.append(bm.verts.new((x+centre+u*length/rows/2, y+radius*math.cos(a), z+radius*math.sin(a))))
                theta = -3*PI/4+j*PI/4
                hx = centre+math.cos(theta)*length/rows*0.30
                ha = angle+math.sin(theta)*PI/sectors*0.68
                inner.append(bm.verts.new((x+hx, y+radius*math.cos(ha), z+radius*math.sin(ha))))
                lip.append(bm.verts.new((x+hx, y+(radius-0.004)*math.cos(ha), z+(radius-0.004)*math.sin(ha))))
            for j in range(8):
                n = (j+1)%8
                bm.faces.new((outer[j], outer[n], inner[n], inner[j]))
                bm.faces.new((inner[j], inner[n], lip[n], lip[j]))
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    b._mesh('pierced-heat-shield', bm, 'gunmetal', (0,0,0), (0,0,0), 0, 1)


def _ammo(b, at, size=(0.32,0.22,0.28)):
    x,y,z = at
    sx,sy,sz = size
    b.box('ammunition-bin', size, at, 'paint_dark', bevel=0.016)
    b.box('bin-lid', (sx+0.025,sy+0.025,0.025), (x,y,z+sz/2), 'paint', bevel=0.007)
    _handle(b, (x,y,z+sz/2+0.013), min(0.15,sy*0.7))
    ribs=Batch(b,'bin-pressed-ribs','paint')
    for dx in (-sx*.38,sx*.38):
        ribs.box((.014,.013,sz*.68),(x+dx,y-sy/2-.008,z))
    ribs.box((sx*.86,.016,.014),(x,y-sy/2-.008,z-sz*.37))
    ribs.done(bevel=.003)
    _bolts(b,[(x+dx,y-sy/2-.02,z-sz*.32) for dx in (-sx*.36,sx*.36)],Y_AXIS,.009)
    for dx in (-sx*0.32,sx*0.32):
        b.box('bin-latch', (0.035,0.022,0.095), (x+dx,y-sy/2-0.009,z+sz*0.3), 'gunmetal', bevel=0.003)


def _feed(b, at, count=9, drop=0.18, side=-1):
    x,y,z = at
    rounds = Batch(b, 'linked-ammunition', 'steel')
    tips = Batch(b, 'projectile-tips', 'wood')
    links = Batch(b, 'feed-links', 'gunmetal')
    for k in range(count):
        t = k/(count-1)
        yy = y+side*(0.04+k*0.028)
        zz = z-drop*t*t
        rounds.cyl(0.012,0.09,(x,yy,zz),X_AXIS,verts=8)
        tips.cyl(0.012,0.035,(x+0.062,yy,zz),X_AXIS,verts=8,radius2=0.002)
        links.box((0.022,0.03,0.025),(x-0.01,yy,zz))
    rounds.done(); tips.done(); links.done()


def _mg(b, at, length=0.70, heavy=True, ammo_side=-1):
    x,y,z = at
    b.box('receiver', (0.39,0.12,0.14), at, 'gunmetal', bevel=0.009)
    b.box('feed-cover', (0.25,0.14,0.032), (x+0.015,y,z+0.085), 'black', bevel=0.005)
    _bolts(b, [(x+dx,y-0.067,z+dz) for dx in (-0.15,0.12) for dz in (-0.04,0.04)],Y_AXIS,0.009)
    _barrel(b, (x+0.195,y,z), length, 0.025 if heavy else 0.019)
    _shroud(b, (x+0.2,y,z), 0.32 if heavy else 0.24, 0.060 if heavy else 0.046)
    b.box('rear-grip-bar', (0.035,0.24,0.035), (x-0.21,y,z), 'gunmetal', bevel=0.004)
    for s in (-1,1):
        b.cyl('spade-grip',0.019,0.13,(x-0.215,y+s*0.11,z-0.05),'rubber',verts=12,bevel=0.004)
    b.tube('charging-handle', [(x-0.02,y+0.06,z),(x-0.02,y+0.14,z),(x-0.1,y+0.14,z)],0.011,'steel',smooth=False)
    _handle(b, (x+0.17,y,z+0.075),0.14)
    _feed(b,(x+0.05,y,z+0.01),side=ammo_side)
    _ammo(b,(x-0.02,y+ammo_side*.32,z-0.16))
    b.box('ammunition-shelf',(.29,.43,.025),(x-.02,y+ammo_side*.245,z-.31),'paint_dark',bevel=.005)
    b.box('ammunition-support',(.12,.10,.245),(x-.02,y+ammo_side*.085,z-.185),'paint_dark',bevel=.005)


def _sight(b, at, size=(0.27,0.3,0.28)):
    """Protected multi-aperture electro-optical head with recessed lenses."""
    x,y,z = at
    sx,sy,sz = size
    b.box('sensor-housing',size,at,'paint',bevel=0.025)
    b.box('sensor-face',(0.02,sy*0.88,sz*0.86),(x+sx/2,y,z),'paint_dark',bevel=0.009)
    for dy,dz,r in ((-0.16,0.04,0.27),(0.27,0.22,0.12),(0.27,-0.23,0.11)):
        rad=min(sy,sz)*r
        p=(x+sx/2+0.013,y+sy*dy,z+sz*dz)
        b.revolve('optic-bezel',[(rad,.0),(rad*1.20,.0),(rad*1.20,.035),(rad,.035),(rad,.0)],p,'black',rot=(0,0,-PI/2),steps=24)
        b.cyl('optical-glass',rad,0.005,(p[0]+0.008,p[1],p[2]),'glass',rot=X_AXIS,verts=24,bevel=0.002)
    b.box('sensor-sunshade',(sx*0.8,sy+0.025,0.025),(x+sx*0.24,y,z+sz/2+0.007),'paint_dark',bevel=0.006)
    _bolts(b,[(x+sx/2+0.02,y+s*sy*0.36,z+t*sz*0.34) for s in (-1,1) for t in (-1,1)],X_AXIS,0.010)
    b.box('sensor-access-panel',(sx*.66,.012,sz*.63),(x,y-sy/2-.003,z),'paint_dark',bevel=.003)
    _bolts(b,[(x+dx,y-sy/2-.014,z+dz) for dx in (-sx*.25,sx*.25) for dz in (-sz*.22,sz*.22)],Y_AXIS,.008)


def _smoke(b, at, side):
    """Four capped launch tubes on one bracket, batched without invisible bevel rings."""
    x,y,z=at
    b.box('discharger-bracket',(0.24,0.09,0.22),at,'paint_dark',bevel=0.008)
    tubes=Batch(b,'smoke-launchers','gunmetal')
    caps=Batch(b,'smoke-caps','rubber')
    for k in range(4):
        p=(x+(k%2)*0.105-0.055,y+side*(0.065+(k//2)*0.055),z+(k//2)*0.115)
        rot=(side*-0.65,0.60,0)
        tubes.cyl(.037,.19,p,rot,verts=16)
        end=Vector(p)+Euler(rot).to_matrix()@Vector((0,0,.098))
        caps.cyl(.040,.018,end,rot,verts=16)
    tubes.done(smooth=True)
    caps.done()


def _pedestal(b, height=0.42):
    b.cyl('mount-foot',0.17,0.055,(0,0,0.0275),'paint_dark',verts=32,bevel=0.01)
    b.cyl('pintle-column',0.067,height,(0,0,0.055+height/2),'paint',verts=24,bevel=0.008)
    for z in (0.09,height+0.035):
        b.cyl('pintle-collar',0.092,0.045,(0,0,z),'gunmetal',verts=24,bevel=0.005)
    _bolts(b,[(math.cos(a)*0.13,math.sin(a)*0.13,0.064) for a in (0,PI/2,PI,3*PI/2)],radius=0.020)


def fp_a(b, m):
    """Open crew ring, curved cut-away shield and manually served heavy machine gun."""
    b=_local(b,m.roof)
    _ring(b,0.60,0.12,True)
    for z in (0.16,0.34):
        _annulus(b,'open-crew-rail',0.59,0.56,z,0.042)
    ribs=Batch(b,'ring-uprights','paint_dark')
    for k in range(10):
        a=k*2*PI/10
        ribs.box((0.028,0.05,0.24),(math.cos(a)*0.575,math.sin(a)*0.575,0.25),(0,0,a))
    ribs.done(bevel=0.004)
    for side in (-1,1):
        pts=[(-0.42,side*0.34,0.395),(-0.28,side*0.48,0.395),(-0.12,side*0.54,0.395)]
        b.tube('crew-pad',pts,0.036,'rubber')
        # Segmented bent sheet: central opening clears the weapon and sight line.
        for j in range(3):
            a0=side*(0.12+j*0.29); a1=side*(0.12+(j+1)*0.29)
            verts=[(math.cos(a)*0.61,math.sin(a)*0.61,h) for a,h in
                   ((a0,0.28),(a1,0.28),(a1,0.99-j*0.035),(a0,0.99-j*0.035))]
            if side<0: verts.reverse()
            _panel(b,'curved-gun-shield',verts)
    b.box('pintle-crossmember',(0.19,1.02,0.065),(0.23,0,0.18),'paint_dark',bevel=0.01)
    b.cyl('pintle',0.060,0.48,(0.23,0,0.43),'paint',verts=24,bevel=0.008)
    b.box('gun-cradle',(0.40,0.19,0.06),(0.23,0,0.68),'paint_dark',bevel=0.008)
    _mg(b,(0.22,0,0.78),0.80)


def _remote_body(b, width=0.70):
    top=_ring(b,width*0.52)
    b.cyl('elevation-shaft',.065,width-.08,(-.10,0,top+.50),'gunmetal',rot=Y_AXIS,verts=16,bevel=0)
    b.box('traverse-deck',(0.65,width,0.11),(0,0,top+0.055),'paint_dark',bevel=0.022)
    for side in (-1,1):
        y=side*(width/2-0.09)
        b.wedge('cradle-cheek',[(-0.34,0),(.32,0),(.35,.16),(.12,.59),(-.26,.62)],
                0.16,(0,y,top+0.10),'paint',bevel=0.023)
        _bolts(b,[(xx,y+side*0.086,top+zz) for xx,zz in ((-.26,.18),(.23,.22),(-.16,.61),(.05,.57))],Y_AXIS)
        b.cyl('elevation-trunnion',0.10,0.045,(-.10,y+side*0.095,top+.50),'paint_dark',rot=Y_AXIS,verts=24,bevel=0.007)
    b.box('front-drive-cover',(.18,width-.25,.24),(.28,0,top+.24),'paint',bevel=.02)
    _panel(b,'drive-service-panel',[(.377,-width*.23,top+.14),(.377,width*.23,top+.14),
           (.377,width*.23,top+.33),(.377,-width*.23,top+.33)],'paint_dark',.012)
    for side in (-1,1):
        points=[(-.27,side*width*.495,top+.22),(.22,side*width*.495,top+.22),
                (.03,side*width*.495,top+.55),(-.20,side*width*.495,top+.58)]
        _panel(b,'yoke-access-plate',points if side<0 else points[::-1],'paint_dark',.012)

    return top


def fp_b(b,m):
    """Medium remote autocannon with sloping cheeks, feed bin and elevated sight."""
    b=_local(b,m.roof)
    top=_remote_body(b,.86)
    b.box('cannon-breech',(.70,.22,.23),(-.01,0,top+.52),'gunmetal',bevel=.018)
    b.box('receiver-top',(.43,.23,.05),(-.10,0,top+.655),'paint_dark',bevel=.009)
    _barrel(b,(.34,0,top+.52),1.25,.041)
    _ammo(b,(-.09,-.62,top+.43),(.43,.28,.43))
    _feed(b,(.06,-.09,top+.56),13,.17)
    b.cyl('sight-turret',.15,.16,(-.24,.45,top+.78),'paint_dark',verts=24,bevel=.009)
    _sight(b,(-.24,.45,top+1.01),(.31,.40,.33))
    b.tube('feed-drive-cable',[(-.2,-.4,top+.49),(-.34,-.49,top+.20),(-.3,-.26,top+.09)],.017,'cable')


def _turret(b, width, length, height):
    """Faceted low armoured shell with a narrowed roof and replaceable cheek plates."""
    top=_ring(b,width*.45,.16)
    sections=[]
    for x,w,h in ((-length*.53,width*.36,height*.82),(-length*.30,width*.50,height),
                  (length*.28,width*.50,height*.97),(length*.52,width*.32,height*.73)):
        sections.append((x,[(-w*.80,top), (w*.80,top),(w,top+.16),
                            (w*.76,top+h),(0,top+h+.015),(-w*.76,top+h),(-w,top+.16)]))
    loft(b,'faceted-turret-shell',sections,'paint',bevel=.015,segments=2,smooth=False)
    for side in (-1,1):
        for xa,xb in ((-length*.28,-.03),(.005,length*.27)):
            verts=[(xa,side*width*.503,top+.19),(xb,side*width*.503,top+.19),
                   (xb,side*width*.382,top+height*.945),(xa,side*width*.382,top+height*.945)]
            if side>0: verts.reverse()
            _panel(b,'replaceable-cheek-armour',verts,'paint_light')
        _ammo(b,(-length*.40,side*width*.36,top+height*.47),(.24,.20,.27))
    # Rear access hatch and cooling grille.
    b.box('rear-service-door',(.025,width*.46,height*.56),(-length*.535,0,top+height*.45),'paint_dark',bevel=.007)
    vents=Batch(b,'rear-cooling-louvres','gunmetal')
    for k in range(7):
        # Within the door's height: the top louvre had stood clear of it (fit.py).
        vents.box((.026,width*.30,.017),(-length*.55,0,top+.13+k*.035))
    vents.done()
    _handle(b,(-length*.27,0,top+height+.02),.24)
    # The roof falls 3% from the rear section to the front one; each bolt sits on it (fit.py).
    roof=lambda xx: top+height*(1-.03*max(0,xx+length*.30)/(length*.58))
    _bolts(b,[(xx,side*width*.32,roof(xx)+.009) for xx in (-length*.24,0,length*.23) for side in (-1,1)],radius=.012)
    for side in (-1,1):
        b.box('roof-panel-seam',(.012,width*.24,.010),(.12,side*width*.25,top+height*.993),'black',bevel=0)
        _handle(b,(-.06,side*width*.33,top+height),.14,'x')

    return top


def _hatch(b, at, radius=.22):
    x,y,z=at
    b.cyl('cupola-rim',radius*1.09,.065,(x,y,z),'paint_dark',verts=32,bevel=.008)
    b.cyl('crew-hatch',radius,.048,(x,y,z+.041),'paint',verts=32,bevel=.008)
    b.box('hatch-hinge',(.09,radius*.85,.055),(x-radius*.8,y,z+.049),'gunmetal',bevel=.007)
    _handle(b,(x+.04,y,z+.07),.13)
    for k in range(5):
        a=k*2*PI/5
        b.box('cupola-periscope',(.09,.04,.035),(x+math.cos(a)*radius*.96,y+math.sin(a)*radius*.96,z-.005),'glass',rot=(0,0,a+PI/2),bevel=.005)


def fp_c(b,m):
    """Largest two-crew turret, long sleeved cannon, armoured mantlet and twin hatches."""
    b=_local(b,m.roof)
    top=_turret(b,1.70,1.68,.59)
    b.box('mantlet-gasket',(.16,.64,.43),(.82,0,top+.36),'rubber',bevel=.075)
    b.box('armoured-mantlet',(.29,.53,.34),(.91,0,top+.37),'paint_dark',bevel=.054)
    _bolts(b,[(1.06,y,top+z) for y in (-.21,.21) for z in (.25,.49)],X_AXIS,.020)
    _barrel(b,(1.02,0,top+.37),2.12,.076,False,True)
    b.cyl('fume-extractor',.125,.35,(1.91,0,top+.37),'paint',rot=X_AXIS,verts=32,bevel=.018)
    for y in (-.39,.39):
        _hatch(b,(-.28,y,top+.63),.215)
        _smoke(b,(.38,math.copysign(.74,y),top+.42),-1 if y<0 else 1)
    b.cyl('commander-sight-foot',.07,.075,(-.26,-.39,top+.715),'paint_dark',verts=12,bevel=0)
    _sight(b,(-.26,-.39,top+.86),(.19,.23,.22))
    _sight(b,(.43,.32,top+.645),(.18,.16,.14))
    b.cyl('antenna-socket',.043,.11,(-.63,.49,top+.63),'paint_dark',verts=16)
    b.cyl('turret-whip',.006,.38,(-.63,.49,top+.87),'cable',verts=8,bevel=0)


def fp_d(b,m):
    """Compact powered machine-gun yoke with left camera and exposed drive cable."""
    b=_aux(b,m)
    _ring(b,.22,.13)
    b.box('servo-pedestal',(.32,.32,.15),(0,0,.19),'paint_dark',bevel=.025)
    for s in (-1,1):
        b.wedge('remote-yoke',[(-.18,0),(.18,0),(.13,.32),(-.09,.38)],.065,(0,s*.14,.25),'paint',bevel=.013)
        b.cyl('elevation-motor',.084,.075,(0,s*.19,.53),'paint_dark',rot=Y_AXIS,verts=24,bevel=.008)
    ammo=-1 if _card(m) else 1
    _mg(b,(.04,0,.65),.58,ammo_side=ammo)
    # The camera on the side away from the ammunition.
    b.box('sensor-bracket',(.20,.14,.065),(.04,-ammo*.20,.55),'paint_dark',bevel=.008)
    _sight(b,(.03,-ammo*.23,.70),(.20,.20,.24))
    b.tube('servo-harness',[(-.14,-.18,.49),(-.25,-.22,.33),(-.23,-.16,.14),(-.11,-.12,.11)],.018,'cable')
    _bolts(b,[(x,y,.143) for x in (-.14,.14) for y in (-.14,.14)])


def fp_e(b,m):
    """Light manually served pintle with split folding shield and exposed support arms."""
    b=_aux(b,m)
    _pedestal(b,.39)
    b.box('traverse-fork',(.36,.17,.055),(.10,0,.50),'paint_dark',bevel=.007)
    for s in (-1,1):
        b.box('elevation-cheek',(.19,.03,.15),(.06,s*.10,.55),'paint',bevel=.008)
        b.cyl('pivot-pin',.035,.035,(.07,s*.12,.58),'steel',rot=Y_AXIS,verts=16,bevel=.003)
        # A U-shaped opening between the two leaves clears the barrel.
        verts=[(.39,s*.045,.39),(.39,s*.32,.40),(.34,s*.34,.91),(.36,s*.07,.91),(.39,s*.045,.73)]
        if s<0: verts.reverse()
        _panel(b,'folding-shield-leaf',verts,'paint',.020)
        b.cyl('shield-hinge',.017,.27,(.38,s*.05,.52),'gunmetal',verts=12,bevel=.003)
    _mg(b,(.09,0,.68),.54,False,ammo_side=-1 if _card(m) else 1)
    b.tube('traverse-handle',[(-.15,.12,.55),(-.29,.12,.55),(-.29,-.1,.55)],.017,'paint_dark',smooth=False)


def fp_f(b,m):
    """Stabilised compact armoured turret, coaxial gun and panoramic sensor head."""
    b=_local(b,m.roof)
    top=_turret(b,1.47,1.44,.49)
    b.box('stabiliser-recess',(.10,.57,.37),(.71,0,top+.30),'rubber',bevel=.036)
    b.box('stabilised-mantlet',(.30,.43,.30),(.78,0,top+.31),'paint_dark',bevel=.034)
    _barrel(b,(.89,0,top+.31),1.62,.050,True,True)
    # Close-set coaxial tube stays inside the weapon's centreline corridor.
    b.box('coax-housing',(.27,.12,.15),(.60,.22,top+.33),'gunmetal',bevel=.013)
    _barrel(b,(.74,.22,top+.33),.40,.018)
    _hatch(b,(-.24,.30,top+.53),.17)
    b.cyl('panoramic-race',.19,.06,(-.22,-.44,top+.53),'gunmetal',verts=32,bevel=.006)
    b.cyl('panoramic-pedestal',.12,.16,(-.22,-.44,top+.63),'paint_dark',verts=24,bevel=.008)
    _sight(b,(-.22,-.44,top+.86),(.29,.37,.30))
    for s in (-1,1):
        _smoke(b,(-.32,s*.67,top+.35),s)
    for y,h in ((.50,.43),(.37,.30)):
        b.cyl('antenna-base',.031,.09,(-.54,y,top+.48),'paint_dark',verts=12)
        b.cyl('whip',.006,h,(-.54,y,top+.525+h/2),'cable',verts=8,bevel=0)


def fp_g(b,m):
    """Asymmetric remote cannon with a two-canister armoured launcher and mast sight."""
    b=_local(b,m.roof)
    top=_remote_body(b,.75)
    b.box('gun-receiver',(.59,.23,.22),(-.03,.02,top+.54),'paint_dark',bevel=.019)
    _barrel(b,(.255,.02,top+.54),1.055,.038)
    b.box('launcher-crossarm',(.24,.44,.13),(-.06,-.46,top+.40),'gunmetal',bevel=.018)
    # Near-side pod exposes the defining twin circular canisters at card-camera angles.
    for z in (top+.35,top+.70):
        b.cyl('missile-canister',.143,.88,(-.05,-.64,z),'paint_dark',rot=X_AXIS,verts=32,bevel=.007)
        for x in (-.43,.34):
            b.cyl('canister-band',.151,.055,(x,-.64,z),'gunmetal',rot=X_AXIS,verts=24,bevel=.003)
        b.cyl('sealed-launcher-cap',.129,.020,(.405,-.64,z),'rubber',rot=X_AXIS,verts=32,bevel=.009)
        b.cyl('launcher-cap-panel',.111,.018,(.417,-.64,z),'paint_dark',rot=X_AXIS,verts=24,bevel=.007)
    for z in (top+.16,top+.52,top+.89):
        b.box('launcher-frame-shelf',(1.01,.38,.035),(-.05,-.64,z),'paint',bevel=.008)
    for x in (-.53,.43):
        for y in (-.84,-.44):
            b.box('launcher-frame-upright',(.045,.035,.75),(x,y,top+.525),'paint',bevel=.007)
    _bolts(b,[(.46,y,z) for y in (-.83,-.45) for z in (top+.19,top+.52,top+.86)],X_AXIS)
    for x in (-.34,.25):
        b.box('pod-side-strap',(.055,.027,.72),(x,-.854,top+.525),'paint_dark',bevel=.008)
        _bolts(b,[(x,-.875,z) for z in (top+.20,top+.52,top+.85)],Y_AXIS,.016)
    _handle(b,(-.1,-.64,top+.916),.20,'x')
    b.box('mast-outrigger',(.18,.33,.06),(-.19,.25,top+.63),'paint_dark',bevel=.008)
    b.cyl('sight-mast',.054,.27,(-.19,.38,top+.785),'gunmetal',verts=24,bevel=.007)
    _sight(b,(-.19,.38,top+1.04),(.23,.27,.24))
    b.tube('sight-cable',[(-.27,.46,top+1.0),(-.34,.47,top+.89),(-.34,.35,top+.65)],.013,'cable')
    _sight(b,(.30,.01,top+.24),(.17,.23,.17))
