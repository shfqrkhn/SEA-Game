"""Triangle budget check at real-time detail (what the game embeds).

    blender -b --factory-startup -P tris.py -- [--vehicles combat,recce|all] [--parts CAP-A,CAP-B|none|all]

Builds each vehicle and the listed parts exactly as art/blender/export.py does (geo.REALTIME = True, modifiers
applied) and prints the triangles of every layer, plus the part on the compact card mount. Exits 1 if a budget is
exceeded.
"""
import argparse
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import bpy  # noqa: E402

from sea import fleet, geo, materials, scene  # noqa: E402
from sea.geo import Builder  # noqa: E402
from sea.mounts import card_mount  # noqa: E402
from sea.parts.library import PARTS, build as build_part  # noqa: E402

BASE_MAX = 90_000
PART_MAX = 8_000
RUNNING_MAX = 32_000  # MOB-B, MOB-C, MOB-D, MOB-G: a full set of running gear


def budget(layer):
    if layer == 'base':
        return BASE_MAX
    return RUNNING_MAX if layer in ('MOB-B', 'MOB-C', 'MOB-D', 'MOB-G') else PART_MAX


def count():
    deps = bpy.context.evaluated_depsgraph_get()
    tris = {}
    for o in bpy.context.scene.objects:
        if 'sea_layer' not in o or o.type not in ('MESH', 'CURVE'):
            continue
        me = o.evaluated_get(deps).to_mesh()
        if me is None:
            continue
        me.calc_loop_triangles()
        tris[o['sea_layer']] = tris.get(o['sea_layer'], 0) + len(me.loop_triangles)
        o.evaluated_get(deps).to_mesh_clear()
    return tris


def main():
    argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
    p = argparse.ArgumentParser()
    p.add_argument('--vehicles', default='all')
    p.add_argument('--parts', default='all')
    a = p.parse_args(argv)
    vehicles = list(fleet.VEHICLES) if a.vehicles == 'all' else [v for v in a.vehicles.split(',') if v]
    parts = [] if a.parts == 'none' else list(PARTS) if a.parts == 'all' else [c for c in a.parts.split(',') if c]
    over = []
    geo.REALTIME = True
    for stem in vehicles:
        scene.reset()
        mats = materials.realtime_palette()
        m = fleet.VEHICLES[stem](mats)
        for card in parts:
            build_part(card, Builder(card, mats), m)
        for layer, n in sorted(count().items()):
            flag = '  OVER BUDGET' if n > budget(layer) else ''
            print(f'[tris] {stem:14s} {layer:8s} {n:7d} / {budget(layer)}{flag}', flush=True)
            if flag:
                over.append((stem, layer, n))
    for card in parts:
        scene.reset()
        mats = materials.realtime_palette()
        build_part(card, Builder(card, mats), card_mount())
        n = sum(count().values())
        print(f'[tris] card-mount     {card:8s} {n:7d}', flush=True)
    print(f'[tris] {"FAIL" if over else "PASS"} {len(over)} layer(s) over budget', flush=True)
    sys.exit(1 if over else 0)


if __name__ == '__main__':
    main()
