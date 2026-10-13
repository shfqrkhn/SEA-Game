"""Fit check: every part must sit where it could physically be fitted (MPES §10.2).

    blender -b --factory-startup -P fit.py -- [--vehicles combat,recce|all] [--parts CAP-A,FP-C|all]

Builds each vehicle with every listed part at real-time detail, as art/blender/export.py does, and reports per part:

- tyre: geometry inside a road wheel's tyre (between rim and tread, across the tyre's width) or hanging outboard of
  the tyre's outer sidewall. A wheel hub may stand proud of the sidewall (within HUB_R of the axle, HUB_OUT
  outboard). Parts that are wheel equipment themselves (WHEEL_KIT: tyres, snow chains) are exempt.
- overhang: a sole seated on a level surface of the base vehicle that runs out over a slope or past an edge, as a
  foot over the roof edge onto the chamfer would: more than OVERHANG_SHARE of the sole's points are over a sloping
  face deeper than OVERHANG, or over nothing within a metre. Running gear (RUNNING_GEAR) is exempt. Codex review, G2: a hub foot had stood half over the roof chamfer;
  a second review closed two loopholes (a sole split into faces, a loose surface counted as bracing).
- floating: a piece of the part (a connected component of an object's mesh: a batch merges many pieces into one
  object) that touches neither the base vehicle nor, through other pieces of the part, a piece that does (gap above
  TOUCH).

Prints each finding with the objects behind it and exits 1 if there is any. Owner FIX, G2: dampers had been
modelled outside the tyres.
"""
import argparse
import math
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import bpy  # noqa: E402
from mathutils import Vector  # noqa: E402
from mathutils.bvhtree import BVHTree  # noqa: E402

from sea import fleet, geo, materials, scene  # noqa: E402
from sea.geo import Builder  # noqa: E402
from sea.parts.library import PARTS, build as build_part  # noqa: E402

WHEEL_KIT = {'MOB-C', 'MOB-G'}  # replacement wheels and snow chains: they are the tyre
RUNNING_GEAR = WHEEL_KIT | {'MOB-B'}  # seated on the base's own wheels and axles, not on a deck: no overhang check
HUB_R, HUB_OUT = 0.42, 0.16      # hub allowance: radius from the axle (share of wheel radius), metres outboard
RIM_R = 0.61                     # tyre bead seat, share of wheel radius
TOUCH = 0.015                    # metres: closer than this counts as attached
OVERHANG, OVERHANG_SHARE = 0.04, 0.10   # metres of drop beneath a sole point; share of a sole's points allowed over it
BRACE = 0.3                      # metres: the part's own bracing (a knee, a strut) this far beneath a sole point holds it
SLOPE = 0.8                      # a face is sloping when its normal's vertical part is below this (the chamfer: 0.51)


def meshes():
    """World-space vertices and polygons per object, grouped by layer."""
    deps = bpy.context.evaluated_depsgraph_get()
    out = {}
    for o in bpy.context.scene.objects:
        layer = o.get('sea_layer')
        if layer is None or o.type not in ('MESH', 'CURVE'):
            continue
        ev = o.evaluated_get(deps)
        me = ev.to_mesh()
        if me is None:
            continue
        verts = [ev.matrix_world @ v.co for v in me.vertices]
        polys = [tuple(p.vertices) for p in me.polygons]
        ev.to_mesh_clear()
        if verts and polys:
            pieces = components(verts, polys)
            for k, (v, p) in enumerate(pieces):
                out.setdefault(layer, {})[o.name if len(pieces) == 1 else f'{o.name}#{k}'] = (v, p)
    return out


def components(verts, polys):
    """Split a mesh into its connected pieces (vertices joined by a shared polygon), each re-indexed."""
    parent = list(range(len(verts)))

    def root(i):
        while parent[i] != i:
            parent[i] = parent[parent[i]]
            i = parent[i]
        return i
    for poly in polys:
        a = root(poly[0])
        for i in poly[1:]:
            b = root(i)
            if a != b:
                parent[b] = a
    groups = {}
    for poly in polys:
        groups.setdefault(root(poly[0]), []).append(poly)
    out = []
    for group in groups.values():
        index = {}
        for poly in group:
            for i in poly:
                index.setdefault(i, len(index))
        out.append(([verts[i] for i in index], [tuple(index[i] for i in poly) for poly in group]))
    return out


def tyre_hits(m, verts):
    """Points inside a tyre or outboard of its sidewall (beyond the hub allowance)."""
    r, half = m.wheel_r, m.tyre_w / 2
    inside = outboard = 0
    for v in verts:
        for x in m.axles:
            for s in (-1, 1):
                rad = math.hypot(v.x - x, v.z - r)
                out = s * v.y - m.track  # outward from the wheel centre plane
                if rad >= r:
                    continue
                if abs(out) < half - 0.01 and rad > RIM_R * r + 0.01:
                    inside += 1
                elif out > half + 0.01 and not (rad < HUB_R * r and out < half + HUB_OUT):
                    outboard += 1
    return inside, outboard


def samples(verts, polys, spacing=0.008, most=12):
    """Points across an object's surface, not only its vertices: a strap can pass behind a buckle with no vertex
    of either near the other."""
    out = list(verts)
    for poly in polys:
        for k in range(1, len(poly) - 1):
            a, b, c = verts[poly[0]], verts[poly[k]], verts[poly[k + 1]]
            n = min(most, max(1, math.ceil(max((b - a).length, (c - b).length, (a - c).length) / spacing)))
            for i in range(n + 1):
                for j in range(n + 1 - i):
                    out.append(a + (b - a) * (i / n) + (c - a) * (j / n))
    return out


def gap(a, tree_b, reach=TOUCH * 4):
    """Smallest distance from vertices a to a surface, or None when none is within reach."""
    best = None
    for v in a:
        hit = tree_b.find_nearest(v, reach)
        if hit[0] is not None:
            d = hit[3]
            best = d if best is None else min(best, d)
            if best < TOUCH:
                return best
    return best


def overhang(verts, polys, base_tree, part_tree):
    """Points of sole faces over a slope or an edge: (over, total). A sole is the downward faces of an object at one
    level; it is seated when part of it is within TOUCH of a level surface of the base, straight down, and then every
    one of its points counts, however its faces are split. A point is over a slope or an edge when straight beneath
    it, deeper than OVERHANG, lies a sloping face or nothing within a metre; a sole bridging a gap to a level floor
    beneath is supported at both ends and passes. So does a point held by the part's own bracing (a knee, a strut):
    solid beneath it, touching it, within BRACE (a loose surface lower down does not hold it)."""
    down = Vector((0, 0, -1))
    soles = {}
    for poly in polys:
        if len(poly) < 3:
            continue
        a, b, c = verts[poly[0]], verts[poly[1]], verts[poly[2]]
        n = (b - a).cross(c - a)
        if n.length < 1e-9 or n.normalized().z > -0.9:
            continue
        sole = soles.setdefault(round(a.z / 0.005), [False, 0, 0])
        for v in samples(verts, [poly], spacing=0.02, most=12)[len(verts):]:
            hit = base_tree.ray_cast(v + Vector((0, 0, 0.005)), down, 1.0)
            d = hit[3] - 0.005 if hit[0] is not None else float('inf')
            sole[0] |= d < TOUCH and abs(hit[1].z) > 0.9
            sole[2] += 1
            if d > OVERHANG and (hit[0] is None or abs(hit[1].z) < SLOPE):
                sole[1] += not braced(part_tree, v)
    over = sum(o for seated, o, _ in soles.values() if seated)
    total = sum(t for seated, _, t in soles.values() if seated)
    return over, total


def braced(part_tree, v):
    """The part's own solid stands beneath v, touching it: just below v the first surface straight down, within
    BRACE, faces down (v's foot is inside that solid), or a surface lies within TOUCH beneath."""
    hit = part_tree.ray_cast(v - Vector((0, 0, 0.002)), Vector((0, 0, -1)), BRACE)
    return hit[0] is not None and (hit[1].z < 0 or hit[3] < TOUCH)


def floating(objects, base_tree):
    """Objects of one part not attached, directly or through each other, to the base vehicle."""
    names = list(objects)
    trees = {n: BVHTree.FromPolygons(*objects[n], all_triangles=False) for n in names}
    points = {n: samples(*objects[n]) for n in names}
    boxes = {n: (Vector([min(v[i] for v in objects[n][0]) for i in range(3)]),
                 Vector([max(v[i] for v in objects[n][0]) for i in range(3)])) for n in names}

    def near(x, y):
        (la, ha), (lb, hb) = boxes[x], boxes[y]
        return all(la[i] - TOUCH <= hb[i] and lb[i] - TOUCH <= ha[i] for i in range(3))

    def touches(x, y):
        if not near(x, y):
            return False
        if trees[x].overlap(trees[y]):
            return True
        for p, q in ((x, y), (y, x)):
            d = gap(points[p], trees[q])
            if d is not None and d < TOUCH:
                return True
        return False

    attached = set()
    for n in names:
        if trees[n].overlap(base_tree):
            attached.add(n)
            continue
        d = gap(points[n], base_tree)
        if d is not None and d < TOUCH:
            attached.add(n)
    frontier = list(attached)
    while frontier:
        x = frontier.pop()
        for y in names:
            if y not in attached and touches(x, y):
                attached.add(y)
                frontier.append(y)
    loose = [n for n in names if n not in attached]
    # How far each loose object is from anything attached (the base or attached objects of the part).
    held = [('base', base_tree)] + [(n, trees[n]) for n in attached]
    far = {}
    for n in loose:
        best = (float('inf'), None, None)
        for name, t in held:
            for v in objects[n][0]:
                hit = t.find_nearest(v, 5.0)
                if hit[0] is not None and hit[3] < best[0]:
                    best = (hit[3], name, v)
        far[n] = best
    return far


def main():
    argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
    p = argparse.ArgumentParser()
    p.add_argument('--vehicles', default='all')
    p.add_argument('--parts', default='all')
    a = p.parse_args(argv)
    vehicles = list(fleet.VEHICLES) if a.vehicles == 'all' else [v for v in a.vehicles.split(',') if v]
    parts = list(PARTS) if a.parts == 'all' else [c for c in a.parts.split(',') if c]
    geo.REALTIME = True
    findings = 0
    for stem in vehicles:
        # One part at a time, alone on the vehicle: a team's build shows at most one part per slot.
        for card in parts:
            scene.reset()
            mats = materials.realtime_palette()
            m = fleet.VEHICLES[stem](mats)
            build_part(card, Builder(card, mats), m)
            layers = meshes()
            base_v, base_p = [], []
            for verts, polys in layers.get('base', {}).values():
                off = len(base_v)
                base_v.extend(verts)
                base_p.extend(tuple(off + i for i in poly) for poly in polys)
            base_tree = BVHTree.FromPolygons(base_v, base_p, all_triangles=False)
            objects = layers.get(card, {})
            # Reported per kind of object (the builder numbers each copy: 'MOB-D:damper-eye:107').
            kind = lambda name: name.split('#')[0].split(':')[1] if name.count(':') >= 2 else name
            tyre = {}
            if card not in WHEEL_KIT:
                for name, (verts, polys) in objects.items():
                    # Surface samples, not only vertices: a long face can cross a tyre between its corners.
                    inside, outboard = tyre_hits(m, samples(verts, polys, spacing=0.03, most=8))
                    if inside or outboard:
                        t = tyre.setdefault(kind(name), [0, 0, 0])
                        t[0] += 1; t[1] += inside; t[2] += outboard
            for k, (n, inside, outboard) in sorted(tyre.items()):
                findings += 1
                print(f'[fit] {stem:14s} {card:6s} tyre     {k} x{n}: {inside} points inside, {outboard} outboard', flush=True)
            hang = {}
            part_v, part_p = [], []
            for verts, polys in objects.values():
                off = len(part_v)
                part_v.extend(verts)
                part_p.extend(tuple(off + i for i in poly) for poly in polys)
            part_tree = BVHTree.FromPolygons(part_v, part_p, all_triangles=False) if part_v else None
            for name, (verts, polys) in ({} if card in RUNNING_GEAR else objects).items():
                over, total = overhang(verts, polys, base_tree, part_tree)
                if total and over > OVERHANG_SHARE * total:
                    h = hang.setdefault(kind(name), [0, 0.0])
                    h[0] += 1; h[1] = max(h[1], over / total)
            for k, (n, share) in sorted(hang.items()):
                findings += 1
                print(f'[fit] {stem:14s} {card:6s} overhang {k} x{n}: {share * 100:.0f}% of its sole over a drop', flush=True)
            loose = {}
            for name, near in floating(objects, base_tree).items():
                c = loose.setdefault(kind(name), [0, near])
                c[0] += 1
                if near[0] < c[1][0]:
                    c[1] = near
            for k, (n, (d, to, at)) in sorted(loose.items(), key=lambda i: i[1][1][0]):
                findings += 1
                where = f' (nearest {kind(to)} at {at.x:.2f}, {at.y:.2f}, {at.z:.2f})' if at is not None else ''
                print(f'[fit] {stem:14s} {card:6s} floating {k} x{n}: {d * 1000:.0f} mm from anything attached{where}', flush=True)
    print(f'[fit] {"FAIL" if findings else "PASS"} {findings} finding(s)', flush=True)
    sys.exit(1 if findings else 0)


if __name__ == '__main__':
    main()
