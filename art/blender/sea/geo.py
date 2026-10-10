"""Mesh and curve builders. Every object is tagged with the layer it renders in (`sea_layer`)."""
import math

import bmesh
import bpy
from mathutils import Euler, Matrix, Vector


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
            mod.segments = segments
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
        bmesh.ops.create_cone(bm, cap_ends=True, segments=verts, radius1=radius,
                              radius2=radius if radius2 is None else radius2, depth=depth)
        return self._mesh(name, bm, mat, loc, rot, min(bevel, radius * 0.4, depth * 0.4), segments)

    def sphere(self, name, radius, loc, mat='paint', rot=(0, 0, 0), scale=(1, 1, 1)):
        bm = bmesh.new()
        bmesh.ops.create_uvsphere(bm, u_segments=32, v_segments=16, radius=radius)
        bmesh.ops.scale(bm, vec=Vector(scale), verts=bm.verts)
        return self._mesh(name, bm, mat, loc, rot, 0, 0)

    def revolve(self, name, profile, loc, mat, rot=(0, 0, 0), steps=64):
        """Spin an (r, y) profile around the local Y axis (wheels, drums, hubs)."""
        bm = bmesh.new()
        ring0 = [bm.verts.new((r, y, 0)) for r, y in profile]
        edges = [bm.edges.new((ring0[i], ring0[i + 1])) for i in range(len(ring0) - 1)]
        bmesh.ops.spin(bm, geom=ring0 + edges, cent=(0, 0, 0), axis=(0, 1, 0), angle=2 * math.pi, steps=steps, use_merge=True)
        bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
        return self._mesh(name, bm, mat, loc, rot, 0, 0)

    def tube(self, name, points, radius, mat='steel', loc=(0, 0, 0), rot=(0, 0, 0), smooth=True):
        """Pipe, rail, cable or whip through 3D points."""
        cu = bpy.data.curves.new(name, 'CURVE')
        cu.dimensions = '3D'
        cu.bevel_depth = radius
        cu.bevel_resolution = 6
        cu.use_fill_caps = True
        sp = cu.splines.new('NURBS' if smooth and len(points) > 2 else 'POLY')
        sp.points.add(len(points) - 1)
        for p, xyz in zip(sp.points, points):
            p.co = (*xyz, 1)
        if sp.type == 'NURBS':
            sp.use_endpoint_u = True
            sp.order_u = min(4, len(points))
        sp.resolution_u = 12
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
    # Tread: staggered chevron lugs.
    lugs = 34
    for i in range(lugs):
        a = 2 * math.pi * i / lugs
        for row, sign in ((0, -1), (1, 1)):
            offset = (math.pi / lugs) * row
            ang = a + offset
            y = sign * w * 0.2
            pos = Vector((math.cos(ang) * (r - 0.012), y, math.sin(ang) * (r - 0.012)))
            # Local X is radial after the Y rotation; the X tilt (applied first) makes the chevron.
            b.box(f'{name}-lug', (0.05, w * 0.38, 0.1), Vector(loc) + pos, 'rubber',
                  rot=(sign * 0.4 * side, -ang, 0), bevel=0.012, segments=2)
    # Rim: dish, bead ring, hub, nuts.
    rim = [(0.05, -w * 0.2), (rim_radius * 0.55, -w * 0.32), (rim_radius * 0.92, -w * 0.38), (rim_radius, -w * 0.42),
           (rim_radius + 0.012, -w * 0.38), (rim_radius + 0.012, w * 0.38), (rim_radius, w * 0.42), (rim_radius * 0.6, w * 0.1)]
    if side < 0:
        rim = [(x, -y) for x, y in rim]
    b.revolve(f'{name}-rim', rim, loc, 'paint_dark', rot, steps=64)
    hub_y = -side * w * 0.33
    b.cyl(f'{name}-hub', 0.11, 0.14, Vector(loc) + Vector((0, hub_y, 0)), 'gunmetal', rot=(math.pi / 2, 0, 0), verts=32, bevel=0.01)
    for k in range(10):
        a = 2 * math.pi * k / 10
        p = Vector((math.cos(a) * 0.15, hub_y - side * 0.02, math.sin(a) * 0.15))
        b.cyl(f'{name}-nut', 0.017, 0.05, Vector(loc) + p, 'steel', rot=(math.pi / 2, 0, 0), verts=6, bevel=0.003)
