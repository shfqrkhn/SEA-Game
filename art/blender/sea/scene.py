"""Render settings, studio lighting, cameras and layer visibility (MPES §10, §11).

Everything is procedural: no image files, HDRIs or downloads, so renders depend only on these
scripts and the pinned Blender version.
"""
import math

import bpy
from mathutils import Vector

SEED = 20261010


def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    scene = bpy.context.scene
    scene.unit_settings.system = 'METRIC'
    return scene


def use_gpu():
    prefs = bpy.context.preferences.addons['cycles'].preferences
    for kind in ('OPTIX', 'CUDA'):
        try:
            prefs.compute_device_type = kind
            prefs.get_devices()
        except TypeError:
            continue
        devices = [d for d in prefs.devices if d.type == kind]
        if devices:
            for d in prefs.devices:
                d.use = d.type == kind
            return kind
    return 'CPU'


def configure(width, height, samples):
    scene = bpy.context.scene
    scene.render.engine = 'CYCLES'
    device = use_gpu()
    scene.cycles.device = 'GPU' if device != 'CPU' else 'CPU'
    scene.cycles.samples = samples
    scene.cycles.seed = SEED
    scene.cycles.use_adaptive_sampling = False  # same samples everywhere: stable, repeatable noise
    scene.cycles.use_denoising = True
    scene.cycles.denoiser = 'OPENIMAGEDENOISE'
    scene.cycles.max_bounces = 8
    scene.cycles.transparent_max_bounces = 8
    scene.render.resolution_x, scene.render.resolution_y = width, height
    scene.render.resolution_percentage = 100
    scene.render.film_transparent = True
    settings = scene.render.image_settings
    settings.file_format = 'PNG'
    settings.color_mode = 'RGBA'
    settings.color_depth = '16'
    settings.compression = 15
    scene.view_settings.view_transform = 'AgX'
    for look in ('AgX - Medium High Contrast', 'Medium High Contrast'):
        try:
            scene.view_settings.look = look
            break
        except TypeError:
            continue
    scene.view_settings.exposure = -0.25
    return device


def world():
    """Dim neutral studio environment; reflections come from hidden light cards."""
    w = bpy.data.worlds.new('studio')
    w.use_nodes = True
    bg = w.node_tree.nodes['Background']
    bg.inputs['Color'].default_value = (0.045, 0.05, 0.055, 1)
    bg.inputs['Strength'].default_value = 1.0
    bpy.context.scene.world = w


def _area(name, location, target, size, energy, color=(1, 1, 1), shape='RECTANGLE', size_y=None):
    data = bpy.data.lights.new(name, 'AREA')
    data.shape = shape
    data.size = size
    if size_y is not None:
        data.size_y = size_y
    data.energy = energy
    data.color = color
    obj = bpy.data.objects.new(name, data)
    bpy.context.scene.collection.objects.link(obj)
    obj.location = location
    direction = Vector(target) - Vector(location)
    obj.rotation_euler = direction.to_track_quat('-Z', 'Y').to_euler()
    obj['sea_layer'] = 'rig'
    return obj


def _card(name, location, target, size, strength):
    """Emissive panel seen only in reflections: gives paint and glass studio highlights."""
    mesh = bpy.data.meshes.new(name)
    half = size / 2
    mesh.from_pydata([(-half[0], -half[1], 0), (half[0], -half[1], 0), (half[0], half[1], 0), (-half[0], half[1], 0)], [], [(0, 1, 2, 3)])
    obj = bpy.data.objects.new(name, mesh)
    bpy.context.scene.collection.objects.link(obj)
    obj.location = location
    obj.rotation_euler = (Vector(target) - Vector(location)).to_track_quat('Z', 'Y').to_euler()
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nodes = mat.node_tree.nodes
    nodes.clear()
    out = nodes.new('ShaderNodeOutputMaterial')
    em = nodes.new('ShaderNodeEmission')
    em.inputs['Strength'].default_value = strength
    mat.node_tree.links.new(em.outputs[0], out.inputs['Surface'])
    mesh.materials.append(mat)
    obj.visible_camera = False
    obj.visible_shadow = False
    obj.visible_diffuse = False
    obj['sea_layer'] = 'rig'
    return obj


def studio(center=(0, 0, 1.2), scale=1.0):
    """Key, fill and rim area lights plus reflection cards, scaled to the subject."""
    c = Vector(center)
    s = scale
    _area('key', c + Vector((-6, -7, 7)) * s, c, 5 * s, 1150 * s * s, (1.0, 0.96, 0.9))
    _area('fill', c + Vector((8, -4, 3)) * s, c, 7 * s, 260 * s * s, (0.85, 0.9, 1.0))
    _area('rim', c + Vector((2, 9, 5)) * s, c, 6 * s, 900 * s * s, (0.9, 0.95, 1.0))
    _area('top', c + Vector((0, 0, 10)) * s, c, 8 * s, 320 * s * s)
    _card('strip-left', c + Vector((-9, -3, 4)) * s, c, Vector((1.2, 8)) * s, 6)
    _card('strip-right', c + Vector((9, -2, 5)) * s, c, Vector((1.2, 8)) * s, 4)
    _card('strip-top', c + Vector((0, -2, 11)) * s, c, Vector((10, 2)) * s, 3)


def ground():
    """Large shadow catcher: shadows and contact occlusion only, transparent elsewhere."""
    mesh = bpy.data.meshes.new('ground')
    r = 60
    mesh.from_pydata([(-r, -r, 0), (r, -r, 0), (r, r, 0), (-r, r, 0)], [], [(0, 1, 2, 3)])
    obj = bpy.data.objects.new('ground', mesh)
    bpy.context.scene.collection.objects.link(obj)
    obj.is_shadow_catcher = True
    obj['sea_layer'] = 'rig'
    return obj


def camera(lens=50):
    data = bpy.data.cameras.new('camera')
    data.lens = lens
    data.sensor_width = 36
    obj = bpy.data.objects.new('camera', data)
    bpy.context.scene.collection.objects.link(obj)
    bpy.context.scene.camera = obj
    return obj


def aim(cam, target, yaw_deg, pitch_deg, distance):
    """Place the camera on a sphere around target. Yaw 0 looks at the vehicle's left side (−Y)."""
    yaw, pitch = math.radians(yaw_deg), math.radians(pitch_deg)
    t = Vector(target)
    cam.location = t + Vector((math.sin(yaw) * math.cos(pitch), -math.cos(yaw) * math.cos(pitch), math.sin(pitch))) * distance
    cam.rotation_euler = (t - cam.location).to_track_quat('-Z', 'Y').to_euler()


def fit(cam, target, yaw_deg, pitch_deg, objects, margin=1.08):
    """Aim from (yaw, pitch) and move the camera along its view axis until every bounding-box corner fits."""
    aim(cam, target, yaw_deg, pitch_deg, 50.0)
    depsgraph = bpy.context.evaluated_depsgraph_get()
    coords = []
    for obj in objects:
        if obj.type not in {'MESH', 'CURVE'}:
            continue
        ev = obj.evaluated_get(depsgraph)
        coords.extend(obj.matrix_world @ Vector(c) for c in ev.bound_box)
    flat = [v for c in coords for v in c]
    location, _ = cam.camera_fit_coords(depsgraph, flat)
    forward = (cam.matrix_world.to_quaternion() @ Vector((0, 0, -1))).normalized()
    # Back off along the view axis so the subject fills 1/margin of the frame.
    centre = sum(coords, Vector()) / len(coords)
    distance = (Vector(location) - centre).dot(-forward)
    cam.location = Vector(location) - forward * distance * (margin - 1)


def bounds(objects):
    lo = Vector((1e9, 1e9, 1e9))
    hi = Vector((-1e9, -1e9, -1e9))
    depsgraph = bpy.context.evaluated_depsgraph_get()
    for obj in objects:
        if obj.type not in {'MESH', 'CURVE'}:
            continue
        ev = obj.evaluated_get(depsgraph)
        for corner in ev.bound_box:
            p = obj.matrix_world @ Vector(corner)
            lo = Vector(map(min, lo, p))
            hi = Vector(map(max, hi, p))
    return lo, hi


def layer_objects(layer):
    return [o for o in bpy.context.scene.objects if o.get('sea_layer') == layer]


def show_layers(visible, catchers=()):
    """Render only `visible` layers; `catchers` layers become shadow catchers (hold out + receive shadows)."""
    for obj in bpy.context.scene.objects:
        layer = obj.get('sea_layer')
        if layer in (None, 'rig'):
            continue
        obj.hide_render = layer not in visible and layer not in catchers
        obj.is_shadow_catcher = layer in catchers


def render(path):
    bpy.context.scene.render.filepath = path
    bpy.ops.render.render(write_still=True)
