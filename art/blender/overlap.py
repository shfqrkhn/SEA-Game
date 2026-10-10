"""Cross-slot overlap check: parts in different slots must never intersect (MPES §10.2, mounts.SLOTS).

    blender -b --factory-startup -P overlap.py -- [--vehicles combat,recce|all] [--parts CAP-A,FP-C|all]

Builds each vehicle with every listed part at real-time detail, as art/blender/export.py does, and tests the
evaluated surfaces of every pair of parts in different slots for intersecting triangles. Parts in the same slot are
alternatives and never shown together, so they are skipped. Prints each intersecting pair with its triangle-pair
count and exits 1 if there is any. A surface test: a part wholly enclosed by another is not detected.
"""
import argparse
import itertools
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import bpy  # noqa: E402
from mathutils.bvhtree import BVHTree  # noqa: E402

from sea import fleet, geo, materials, scene  # noqa: E402
from sea.geo import Builder  # noqa: E402
from sea.mounts import SLOTS  # noqa: E402
from sea.parts.library import PARTS, build as build_part  # noqa: E402


def trees(detail=False):
    """One BVH tree per part layer (or per object with `detail`), from the evaluated world-space surfaces."""
    deps = bpy.context.evaluated_depsgraph_get()
    verts, polys = {}, {}
    for o in bpy.context.scene.objects:
        layer = o.get('sea_layer')
        if layer not in SLOTS or o.type not in ('MESH', 'CURVE'):
            continue
        ev = o.evaluated_get(deps)
        me = ev.to_mesh()
        if me is None:
            continue
        key = (layer, o.name) if detail else layer
        v, p = verts.setdefault(key, []), polys.setdefault(key, [])
        base = len(v)
        v.extend(ev.matrix_world @ x.co for x in me.vertices)
        p.extend(tuple(base + i for i in poly.vertices) for poly in me.polygons)
        ev.to_mesh_clear()
    return {k: BVHTree.FromPolygons(verts[k], polys[k], all_triangles=False) for k in verts}


def _detail(x, y):
    """Print the object pairs behind one intersecting layer pair."""
    t = trees(detail=True)
    for (lx, ox), (ly, oy) in itertools.product([k for k in t if k[0] == x], [k for k in t if k[0] == y]):
        n = len(t[(lx, ox)].overlap(t[(ly, oy)]))
        if n:
            print(f'[overlap]     {ox} x {oy}: {n}', flush=True)


def main():
    argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
    p = argparse.ArgumentParser()
    p.add_argument('--vehicles', default='all')
    p.add_argument('--parts', default='all')
    p.add_argument('--detail', action='store_true', help='name the intersecting objects of each pair')
    a = p.parse_args(argv)
    vehicles = list(fleet.VEHICLES) if a.vehicles == 'all' else [v for v in a.vehicles.split(',') if v]
    parts = list(PARTS) if a.parts == 'all' else [c for c in a.parts.split(',') if c]
    geo.REALTIME = True
    hits = 0
    for stem in vehicles:
        scene.reset()
        mats = materials.realtime_palette()
        m = fleet.VEHICLES[stem](mats)
        for card in parts:
            build_part(card, Builder(card, mats), m)
        t = trees()
        for x, y in itertools.combinations(sorted(t), 2):
            if SLOTS[x] == SLOTS[y]:
                continue
            n = len(t[x].overlap(t[y]))
            if n:
                hits += 1
                print(f'[overlap] {stem:14s} {x:6s} ({SLOTS[x]}) x {y:6s} ({SLOTS[y]}): {n}', flush=True)
                if a.detail:
                    _detail(x, y)
    print(f'[overlap] {"FAIL" if hits else "PASS"} {hits} intersecting pair(s)', flush=True)
    sys.exit(1 if hits else 0)


if __name__ == '__main__':
    main()
