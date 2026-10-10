"""Real-time model export (MPES §10): one glTF binary per vehicle for the interactive showcase.

    blender -b --factory-startup -P art/blender/export.py -- --out .artifacts/models [--vehicles combat,recce]

Each file holds one node per layer: `base` and every part card, built on that vehicle's mounts at real-time detail
(`geo.REALTIME`), with modifiers applied, plain metallic-roughness materials and ambient occlusion baked by Cycles
into the vertex colours (COLOR_0). The base is baked over a ground plane, so it darkens where it meets the floor;
each part is baked alone, so a part is identical on every vehicle that mounts it in the same place.
tools/pack-models.ts merges, deduplicates, quantises and compresses the files for the game.
"""
import argparse
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import bpy  # noqa: E402

from sea import fleet, geo, materials, scene  # noqa: E402
from sea.geo import Builder  # noqa: E402
from sea.mounts import SLOTS  # noqa: E402
from sea.parts.library import PARTS, build as build_part  # noqa: E402

AO_SAMPLES = 128
AO_DISTANCE = 0.9  # metres; long enough for wheel arches and the underside, short enough to keep open panels bright


def args():
    argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
    p = argparse.ArgumentParser()
    p.add_argument('--out', required=True)
    p.add_argument('--vehicles', default=','.join(fleet.VEHICLES))
    return p.parse_args(argv)


def _select(objs, active=None):
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = active or objs[0]


def _layers():
    """Convert every built object to a mesh with modifiers applied and join each layer into one object."""
    built = [o for o in bpy.context.scene.objects if 'sea_layer' in o]
    _select(built)
    bpy.ops.object.convert(target='MESH')
    joined = {}
    for layer in dict.fromkeys(o['sea_layer'] for o in built):
        objs = [o for o in bpy.context.scene.objects if o.get('sea_layer') == layer]
        _select(objs)
        if len(objs) > 1:
            bpy.ops.object.join()
        obj = bpy.context.view_layer.objects.active
        obj.name = obj.data.name = layer
        for key in list(obj.keys()):
            del obj[key]
        if layer in SLOTS:
            obj['slot'] = SLOTS[layer]  # glTF node extras: the showcase draws one part per slot (MPES §10.2)
        joined[layer] = obj
    return joined


def _bake(objects, ground):
    s = bpy.context.scene
    s.render.engine = 'CYCLES'
    s.cycles.device = 'GPU' if scene.use_gpu() != 'CPU' else 'CPU'
    s.cycles.samples = AO_SAMPLES
    s.world = s.world or bpy.data.worlds.new('world')
    s.world.light_settings.distance = AO_DISTANCE
    s.render.bake.target = 'VERTEX_COLORS'
    for layer, obj in objects.items():
        for other in [*objects.values(), ground]:
            other.hide_render = other is not obj and not (layer == 'base' and other is ground)
        attr = obj.data.color_attributes.new('AO', 'BYTE_COLOR', 'POINT')
        obj.data.color_attributes.active_color = attr
        _select([obj])
        bpy.ops.object.bake(type='AO')
    for obj in [*objects.values(), ground]:
        obj.hide_render = False


def export(stem, out):
    scene.reset()
    geo.REALTIME = True
    mats = materials.realtime_palette()
    m = fleet.VEHICLES[stem](mats)
    for card in PARTS:
        build_part(card, Builder(card, mats), m)
    objects = _layers()
    bpy.ops.mesh.primitive_plane_add(size=40)
    ground = bpy.context.active_object
    _bake(objects, ground)
    _select(list(objects.values()))
    bpy.ops.export_scene.gltf(
        filepath=os.path.join(out, f'{stem}.glb'), export_format='GLB', use_selection=True, export_apply=True,
        export_vertex_color='ACTIVE', export_normals=True, export_texcoords=False, export_materials='EXPORT',
        export_cameras=False, export_lights=False, export_extras=True)
    tris = sum(len(o.data.loop_triangles) for o in objects.values() if not o.data.calc_loop_triangles())
    print(f'[sea] {stem}.glb layers={len(objects)} tris={tris}', flush=True)


def main():
    a = args()
    a.out = os.path.abspath(a.out)
    os.makedirs(a.out, exist_ok=True)
    for stem in filter(None, a.vehicles.split(',')):
        export(stem, a.out)


if __name__ == '__main__':
    main()
