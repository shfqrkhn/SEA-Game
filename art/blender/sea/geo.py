"""Mesh and curve builders. Every object is tagged with the layer it renders in (`sea_layer`)."""
import math

import bmesh
import bpy
from mathutils import Euler, Matrix, Vector

# Real-time export (export.py) trades bevel rounds and curve resolution for triangles; stills keep full detail.
REALTIME = False


def _segments(segments):
    return min(segments, 1) if REALTIME else segments


def _verts(verts):
    return max(16, verts // 2) if REALTIME and verts > 16 else verts


class Builder:
    """Creates objects in one layer ('base' or a card ID), parented to an optional anchor."""

    def __init__(self, layer, mats, origin=(0, 0, 0), rotation=(0, 0, 0)):
        self.layer = layer
        self.m = mats
        self.matrix = Matrix.Translation(Vector(origin)) @ Euler(rotation).to_matrix().to_4x4()
        self.count = 0

    def _link(self, name, data, mat):
        self.count += 1
        obj = bpy.data.objects.new(f'{self.layer}:{name}:{self.count}', data)
        bpy.context.scene.collection.objects.link(obj)
        if mat is not None:
            data.materials.append(self.m[mat] if isinstance(mat, str) else mat)
        obj['sea_layer'] = self.layer
        return obj

    def _place(self, obj, loc, rot):
        obj.matrix_world = self.matrix @ Matrix.Translation(Vector(loc)) @ Euler(rot).to_matrix().to_4x4()
        return obj

    def _mesh(self, name, bm, mat, loc, rot, bevel, segments, smooth=True):
        me = bpy.data.meshes.new(name)
        bm.to_mesh(me)
        bm.free()
        for p in me.polygons:
            p.use_smooth = smooth
        obj = self._place(self._link(name, me, mat), loc, rot)
        if bevel:
            mod = obj.modifiers.new('bevel', 'BEVEL')
            mod.width = bevel
            mod.segments = _segments(segments)
            mod.limit_method = 'ANGLE'
            mod.angle_limit = math.radians(35)
            mod.harden_normals = True
            mod.miter_outer = 'MITER_ARC'
        return obj

    def box(self, name, size, loc, mat='paint', rot=(0, 0, 0), bevel=0.02, segments=3):
        bm = bmesh.new()
        bmesh.ops.create_cube(bm, size=1.0)
        bmesh.ops.scale(bm, vec=Vector(size), verts=bm.verts)
        return self._mesh(name, bm, mat, loc, rot, min(bevel, min(size) * 0.45), segments)

    def wedge(self, name, profile, width, loc, mat='paint', rot=(0, 0, 0), bevel=0.02, segments=3):
        """Extrude a 2D (x, z) profile along Y by `width`, centred."""
        bm = bmesh.new()
        front = [bm.verts.new((x, -width / 2, z)) for x, z in profile]
        back = [bm.verts.new((x, width / 2, z)) for x, z in profile]
        n = len(profile)
        bm.faces.new(front[::-1])
        bm.faces.new(back)
        for i in range(n):
            j = (i + 1) % n
            bm.faces.new((front[i], front[j], back[j], back[i]))
        bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
        return self._mesh(name, bm, mat, loc, rot, bevel, segments)

    def cyl(self, name, radius, depth, loc, mat='paint', rot=(0, 0, 0), verts=48, bevel=0.01, segments=2, radius2=None):
        bm = bmesh.new()
        bmesh.ops.create_cone(bm, cap_ends=True, segments=_verts(verts), radius1=radius,
                              radius2=radius if radius2 is None else radius2, depth=depth)
        return self._mesh(name, bm, mat, loc, rot, min(bevel, radius * 0.4, depth * 0.4), segments)

    def sphere(self, name, radius, loc, mat='paint', rot=(0, 0, 0), scale=(1, 1, 1)):
        bm = bmesh.new()
        bmesh.ops.create_uvsphere(bm, u_segments=_verts(32), v_segments=_verts(16), radius=radius)
        bmesh.ops.scale(bm, vec=Vector(scale), verts=bm.verts)
        return self._mesh(name, bm, mat, loc, rot, 0, 0)

    def revolve(self, name, profile, loc, mat, rot=(0, 0, 0), steps=64):
        """Spin an (r, y) profile around the local Y axis (wheels, drums, hubs)."""
        bm = bmesh.new()
        ring0 = [bm.verts.new((r, y, 0)) for r, y in profile]
        edges = [bm.edges.new((ring0[i], ring0[i + 1])) for i in range(len(ring0) - 1)]
        bmesh.ops.spin(bm, geom=ring0 + edges, cent=(0, 0, 0), axis=(0, 1, 0), angle=2 * math.pi, steps=_verts(steps), use_merge=True)
        bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
        return self._mesh(name, bm, mat, loc, rot, 0, 0)

    def tube(self, name, points, radius, mat='steel', loc=(0, 0, 0), rot=(0, 0, 0), smooth=True):
        """Pipe, rail, cable or whip through 3D points."""
        cu = bpy.data.curves.new(name, 'CURVE')
        cu.dimensions = '3D'
        cu.bevel_depth = radius
        cu.bevel_resolution = 1 if REALTIME else 6
        cu.use_fill_caps = True
        sp = cu.splines.new('NURBS' if smooth and len(points) > 2 else 'POLY')
        sp.points.add(len(points) - 1)
        for p, xyz in zip(sp.points, points):
            p.co = (*xyz, 1)
        if sp.type == 'NURBS':
            sp.use_endpoint_u = True
            sp.order_u = min(4, len(points))
        sp.resolution_u = 4 if REALTIME else 12
        obj = self._place(self._link(name, cu, mat), loc, rot)
        return obj

    def array(self, fn, count, step, *args, **kwargs):
        """Call a builder repeatedly, offsetting `loc` by `step` each time."""
        loc = Vector(kwargs.pop('loc'))
        return [fn(*args, loc=loc + Vector(step) * i, **kwargs) for i in range(count)]


def tyre_and_wheel(b, name, loc, radius=0.62, width=0.42, rim_radius=0.36, side=1):
    """Off-road tyre with directional tread blocks, dished steel rim, hub and nuts. Axis is local Y."""
    r, w = radius, width
    sidewall = r - 0.04
    profile = [(rim_radius + 0.01, -w * 0.42), (sidewall * 0.88, -w * 0.5), (sidewall, -w * 0.46), (r - 0.025, -w * 0.38),
               (r - 0.025, w * 0.38), (sidewall, w * 0.46), (sidewall * 0.88, w * 0.5), (rim_radius + 0.01, w * 0.42)]
    rot = (0, 0, 0)
    b.revolve(f'{name}-tyre', profile, loc, 'rubber', rot, steps=72)
    # Tread: deep staggered blocks in two rows with a centre rib, one mesh per tyre.
    lugs = 30
    tread = Batch(b, f'{name}-tread', 'rubber', origin=loc)
    for i in range(lugs):
        a = 2 * math.pi * i / lugs
        for sign in (-1, 1):
            ang = a + (math.pi / lugs if sign > 0 else 0)
            y = sign * w * 0.22
            pos = (math.cos(ang) * (r - 0.004), y, math.sin(ang) * (r - 0.004))
            tread.box((0.05, w * 0.4, 0.13), pos, (sign * 0.35 * side, -ang, 0))
        pos = (math.cos(a) * (r - 0.012), 0, math.sin(a) * (r - 0.012))
        tread.box((0.035, w * 0.16, 0.07), pos, (0, -a, 0))
    tread.done(bevel=0.01)
    # Rim: dish, bead ring, hub, nuts.
    rim = [(0.05, -w * 0.2), (rim_radius * 0.55, -w * 0.32), (rim_radius * 0.92, -w * 0.38), (rim_radius, -w * 0.42),
           (rim_radius + 0.012, -w * 0.38), (rim_radius + 0.012, w * 0.38), (rim_radius, w * 0.42), (rim_radius * 0.6, w * 0.1)]
    if side < 0:
        rim = [(x, -y) for x, y in rim]
    b.revolve(f'{name}-rim', rim, loc, 'paint_dark', rot, steps=64)
    hub_y = -side * w * 0.33
    b.cyl(f'{name}-hub', 0.11, 0.14, Vector(loc) + Vector((0, hub_y, 0)), 'gunmetal', rot=(math.pi / 2, 0, 0), verts=32, bevel=0.01)
    nuts = Batch(b, f'{name}-nuts', 'steel', origin=loc)
    for k in range(10):
        a = 2 * math.pi * k / 10
        nuts.cyl(0.017, 0.05, (math.cos(a) * 0.15, hub_y - side * 0.02, math.sin(a) * 0.15), (math.pi / 2, 0, 0), verts=6)
    nuts.done()


def _frame(loc, rot=(0, 0, 0), scale=(1, 1, 1)):
    return Matrix.Translation(Vector(loc)) @ Euler(rot).to_matrix().to_4x4() @ Matrix.Diagonal((*scale, 1))


class Batch:
    """Many small primitives (bolts, tread lugs, louvres, rungs) in one mesh: cheap to build, render and export.

    Positions are in the builder's frame; `basis` optionally maps local (u, v, n) axes onto a face first.
    """

    def __init__(self, b, name, mat, basis=None, origin=(0, 0, 0)):
        self.b, self.name, self.mat = b, name, mat
        self.bm = bmesh.new()
        self.base = Matrix.Translation(Vector(origin)) @ (basis.to_4x4() if basis is not None else Matrix.Identity(4))

    def box(self, size, loc, rot=(0, 0, 0)):
        bmesh.ops.create_cube(self.bm, size=1.0, matrix=self.base @ _frame(loc, rot, size))
        return self

    def cyl(self, radius, depth, loc, rot=(0, 0, 0), verts=8, radius2=None):
        bmesh.ops.create_cone(self.bm, cap_ends=True, segments=_verts(verts), radius1=radius,
                              radius2=radius if radius2 is None else radius2, depth=depth, matrix=self.base @ _frame(loc, rot))
        return self

    def done(self, bevel=0.0, smooth=False):
        if not self.bm.verts:
            self.bm.free()
            return None
        return self.b._mesh(self.name, self.bm, self.mat, (0, 0, 0), (0, 0, 0), 0 if REALTIME else bevel, 2, smooth)


def face_basis(u, v):
    """Columns u, v, n (n = u x v) for laying plates and bolts on a face; u and v need not be unit length."""
    u, v = Vector(u).normalized(), Vector(v).normalized()
    n = u.cross(v).normalized()
    return Matrix((u, v, n)).transposed()


def loft(b, name, sections, mat='paint', bevel=0.03, segments=3, cap=True, smooth=True):
    """Skin closed (y, z) rings placed at increasing x. Each ring is a list with the same vertex count.

    `sections` is [(x, ring)]; rings run counter-clockwise seen from +X. Hulls use `mirror_ring`.
    """
    bm = bmesh.new()
    rings = [[bm.verts.new((x, y, z)) for y, z in ring] for x, ring in sections]
    n = len(rings[0])
    for a, c in zip(rings, rings[1:]):
        for i in range(n):
            j = (i + 1) % n
            bm.faces.new((a[i], a[j], c[j], c[i]))
    if cap:
        bm.faces.new(rings[0][::-1])
        bm.faces.new(rings[-1])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    return b._mesh(name, bm, mat, (0, 0, 0), (0, 0, 0), bevel, segments, smooth=smooth)


def mirror_ring(half):
    """A closed ring from a half profile [(y >= 0, z)] running from the bottom centre (y 0) to the top centre."""
    right = list(half)
    left = [(-y, z) for y, z in reversed(half[1:-1])]
    return right + left


def plates(b, name, origin, u, v, size, cols, rows, gap=0.03, thick=0.035, bolt=0.12, mat='paint', inset=0.05, skip=()):
    """Bolted appliqué armour: a grid of raised plates on the face spanned by u and v from `origin`.

    `size` is the (u, v) extent covered. Bolts ring each plate every `bolt` metres. Returns (plates, bolts).
    """
    basis = face_basis(u, v)
    pw = (size[0] - gap * (cols - 1)) / cols
    ph = (size[1] - gap * (rows - 1)) / rows
    slabs = Batch(b, f'{name}-plates', mat, basis, origin)
    studs = Batch(b, f'{name}-bolts', 'gunmetal', basis, origin)
    for c in range(cols):
        for r in range(rows):
            if (c, r) in skip:
                continue
            cu = c * (pw + gap) + pw / 2
            cv = r * (ph + gap) + ph / 2
            slabs.box((pw, ph, thick), (cu, cv, thick / 2))
            nu = max(2, round((pw - 2 * inset) / bolt) + 1)
            nv = max(2, round((ph - 2 * inset) / bolt) + 1)
            ring = [(i / (nu - 1), 0) for i in range(nu)] + [(i / (nu - 1), 1) for i in range(nu)]
            ring += [(0, k / (nv - 1)) for k in range(1, nv - 1)] + [(1, k / (nv - 1)) for k in range(1, nv - 1)]
            for fu, fv in ring:
                pu = cu - pw / 2 + inset + fu * (pw - 2 * inset)
                pv = cv - ph / 2 + inset + fv * (ph - 2 * inset)
                studs.cyl(0.016, 0.02, (pu, pv, thick + 0.008), (0, 0, 0), verts=6)
    return slabs.done(bevel=min(0.012, thick * 0.4)), studs.done()
