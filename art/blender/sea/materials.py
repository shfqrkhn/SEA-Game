"""Procedural physically based materials (no image textures). One cached instance per name."""
import bpy

_cache = {}


def _new(name):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nodes, links = mat.node_tree.nodes, mat.node_tree.links
    nodes.clear()
    out = nodes.new('ShaderNodeOutputMaterial')
    bsdf = nodes.new('ShaderNodeBsdfPrincipled')
    links.new(bsdf.outputs[0], out.inputs['Surface'])
    return mat, nodes, links, bsdf


def _bevel_normal(nodes, links, bsdf, radius, bump=None):
    """Rounded-edge shading (Cycles bevel node), optionally combined with a bump input."""
    bev = nodes.new('ShaderNodeBevel')
    bev.samples = 8
    bev.inputs['Radius'].default_value = radius
    if bump is not None:
        links.new(bev.outputs[0], bump.inputs['Normal'])
        links.new(bump.outputs[0], bsdf.inputs['Normal'])
    else:
        links.new(bev.outputs[0], bsdf.inputs['Normal'])


def _noise(nodes, scale, detail=6.0, roughness=0.55, coord='Object'):
    tc = nodes.new('ShaderNodeTexCoord')
    n = nodes.new('ShaderNodeTexNoise')
    n.inputs['Scale'].default_value = scale
    n.inputs['Detail'].default_value = detail
    n.inputs['Roughness'].default_value = roughness
    n.id_data.links.new(tc.outputs[coord], n.inputs['Vector'])
    return n


def _ramp(nodes, links, source, stops, interpolation='LINEAR'):
    r = nodes.new('ShaderNodeValToRGB')
    r.color_ramp.interpolation = interpolation
    elements = r.color_ramp.elements
    for i, (pos, color) in enumerate(stops):
        e = elements[i] if i < len(elements) else elements.new(pos)
        e.position = pos
        e.color = color
    links.new(source, r.inputs['Fac'])
    return r


def _road_dust(nodes, links, color_out, height=1.25, color=(0.23, 0.19, 0.13), amount=0.85):
    """Dust and dried mud rising from the ground: strongest low down, broken up by streaky noise."""
    tc = nodes.new('ShaderNodeTexCoord')
    sep = nodes.new('ShaderNodeSeparateXYZ')
    links.new(tc.outputs['Object'], sep.inputs[0])
    world = nodes.new('ShaderNodeNewGeometry')
    sep_w = nodes.new('ShaderNodeSeparateXYZ')
    links.new(world.outputs['Position'], sep_w.inputs[0])
    low = _ramp(nodes, links, sep_w.outputs['Z'], [(0.0, (1, 1, 1, 1)), (height, (0, 0, 0, 1))])
    low.color_ramp.elements[0].position = 0.15
    low.color_ramp.elements[1].position = height
    streaks = nodes.new('ShaderNodeTexNoise')
    streaks.inputs['Scale'].default_value = 6.0
    streaks.inputs['Detail'].default_value = 10.0
    mapping = nodes.new('ShaderNodeMapping')
    mapping.inputs['Scale'].default_value = (1.0, 1.0, 4.0)
    links.new(world.outputs['Position'], mapping.inputs['Vector'])
    links.new(mapping.outputs['Vector'], streaks.inputs['Vector'])
    mask = nodes.new('ShaderNodeMath')
    mask.operation = 'MULTIPLY'
    links.new(low.outputs['Color'], mask.inputs[0])
    links.new(streaks.outputs['Fac'], mask.inputs[1])
    sharp = _ramp(nodes, links, mask.outputs[0], [(0.12, (0, 0, 0, 1)), (0.42, (amount,) * 3 + (1,))])
    mix = nodes.new('ShaderNodeMix')
    mix.data_type = 'RGBA'
    links.new(sharp.outputs['Color'], mix.inputs['Factor'])
    links.new(color_out, mix.inputs[6])
    mix.inputs[7].default_value = (*color, 1)
    return mix.outputs[2], sharp.outputs['Color']


def paint(name='olive', base=(0.07, 0.085, 0.033), wear=0.35):
    """Matte military paint: colour variation, dust in crevices (AO), worn edges (pointiness), fine orange peel."""
    if name in _cache:
        return _cache[name]
    mat, nodes, links, bsdf = _new(name)
    var = _noise(nodes, 3.5)
    tint = _ramp(nodes, links, var.outputs['Fac'], [(0.3, (*[c * 0.82 for c in base], 1)), (0.7, (*[c * 1.12 for c in base], 1))])
    # Dust settles in crevices.
    ao = nodes.new('ShaderNodeAmbientOcclusion')
    ao.samples = 8
    ao.inputs['Distance'].default_value = 0.25
    dust = _ramp(nodes, links, ao.outputs['AO'], [(0.35, (1, 1, 1, 1)), (0.9, (0, 0, 0, 1))])
    mix_dust = nodes.new('ShaderNodeMix')
    mix_dust.data_type = 'RGBA'
    links.new(dust.outputs['Color'], mix_dust.inputs['Factor'])
    links.new(tint.outputs['Color'], mix_dust.inputs[6])
    mix_dust.inputs[7].default_value = (0.20, 0.17, 0.12, 1)
    # Edge wear: lighter, slightly shinier on convex edges.
    geo = nodes.new('ShaderNodeNewGeometry')
    edge_noise = _noise(nodes, 18, detail=8)
    edge = nodes.new('ShaderNodeMath')
    edge.operation = 'MULTIPLY'
    links.new(geo.outputs['Pointiness'], edge.inputs[0])
    links.new(edge_noise.outputs['Fac'], edge.inputs[1])
    edge_mask = _ramp(nodes, links, edge.outputs[0], [(0.36 + (1 - wear) * 0.08, (0, 0, 0, 1)), (0.42 + (1 - wear) * 0.08, (1, 1, 1, 1))])
    mix_edge = nodes.new('ShaderNodeMix')
    mix_edge.data_type = 'RGBA'
    links.new(edge_mask.outputs['Color'], mix_edge.inputs['Factor'])
    links.new(mix_dust.outputs[2], mix_edge.inputs[6])
    mix_edge.inputs[7].default_value = (0.32, 0.31, 0.26, 1)
    dusty, dust_mask = _road_dust(nodes, links, mix_edge.outputs[2])
    links.new(dusty, bsdf.inputs['Base Color'])
    rough = _ramp(nodes, links, var.outputs['Fac'], [(0.0, (0.52, 0.52, 0.52, 1)), (1.0, (0.7, 0.7, 0.7, 1))])
    rough_mix = nodes.new('ShaderNodeMix')
    rough_mix.data_type = 'RGBA'
    links.new(dust_mask, rough_mix.inputs['Factor'])
    links.new(rough.outputs['Color'], rough_mix.inputs[6])
    rough_mix.inputs[7].default_value = (0.95, 0.95, 0.95, 1)
    links.new(rough_mix.outputs[2], bsdf.inputs['Roughness'])
    bsdf.inputs['Coat Weight'].default_value = 0.08
    bsdf.inputs['Coat Roughness'].default_value = 0.35
    peel = _noise(nodes, 400, detail=2)
    bump = nodes.new('ShaderNodeBump')
    bump.inputs['Strength'].default_value = 0.04
    bump.inputs['Distance'].default_value = 0.002
    links.new(peel.outputs['Fac'], bump.inputs['Height'])
    _bevel_normal(nodes, links, bsdf, 0.012, bump)
    _cache[name] = mat
    return mat


def metal(name, color, roughness, bevel=0.004):
    if name in _cache:
        return _cache[name]
    mat, nodes, links, bsdf = _new(name)
    var = _noise(nodes, 25)
    r = _ramp(nodes, links, var.outputs['Fac'], [(0.0, (roughness * 0.8,) * 3 + (1,)), (1.0, (roughness * 1.25,) * 3 + (1,))])
    links.new(r.outputs['Color'], bsdf.inputs['Roughness'])
    bsdf.inputs['Base Color'].default_value = (*color, 1)
    bsdf.inputs['Metallic'].default_value = 1.0
    _bevel_normal(nodes, links, bsdf, bevel)
    _cache[name] = mat
    return mat


def dielectric(name, color, roughness, bevel=0.003, bump_scale=0.0, dust=False):
    if name in _cache:
        return _cache[name]
    mat, nodes, links, bsdf = _new(name)
    bsdf.inputs['Base Color'].default_value = (*color, 1)
    bsdf.inputs['Roughness'].default_value = roughness
    if dust:
        rgb = nodes.new('ShaderNodeRGB')
        rgb.outputs[0].default_value = (*color, 1)
        dusty, _ = _road_dust(nodes, links, rgb.outputs[0], height=0.9, color=(0.2, 0.17, 0.12), amount=0.7)
        links.new(dusty, bsdf.inputs['Base Color'])
    bump = None
    if bump_scale:
        n = _noise(nodes, bump_scale, detail=4)
        bump = nodes.new('ShaderNodeBump')
        bump.inputs['Strength'].default_value = 0.15
        links.new(n.outputs['Fac'], bump.inputs['Height'])
    _bevel_normal(nodes, links, bsdf, bevel, bump)
    _cache[name] = mat
    return mat


def glass(name='glass'):
    if name in _cache:
        return _cache[name]
    mat, nodes, links, bsdf = _new(name)
    bsdf.inputs['Base Color'].default_value = (0.55, 0.62, 0.6, 1)
    bsdf.inputs['Roughness'].default_value = 0.02
    bsdf.inputs['Transmission Weight'].default_value = 0.0
    bsdf.inputs['Metallic'].default_value = 0.0
    bsdf.inputs['Coat Weight'].default_value = 1.0
    bsdf.inputs['Coat Roughness'].default_value = 0.0
    bsdf.inputs['Base Color'].default_value = (0.012, 0.015, 0.016, 1)
    _cache[name] = mat
    return mat


def emissive(name, color, strength):
    if name in _cache:
        return _cache[name]
    mat, nodes, links, bsdf = _new(name)
    bsdf.inputs['Base Color'].default_value = (*color, 1)
    bsdf.inputs['Emission Color'].default_value = (*color, 1)
    bsdf.inputs['Emission Strength'].default_value = strength
    bsdf.inputs['Roughness'].default_value = 0.1
    bsdf.inputs['Coat Weight'].default_value = 1.0
    _cache[name] = mat
    return mat


def palette():
    """The shared material set for every vehicle and part."""
    return {
        'paint': paint(),
        'paint_dark': paint('olive-dark', (0.04, 0.048, 0.024)),
        'rubber': dielectric('rubber', (0.018, 0.018, 0.018), 0.86, 0.006, bump_scale=60, dust=True),
        'gunmetal': metal('gunmetal', (0.11, 0.115, 0.12), 0.42),
        'steel': metal('steel', (0.56, 0.56, 0.55), 0.28),
        'black': dielectric('black-plastic', (0.025, 0.025, 0.027), 0.55),
        'glass': glass(),
        'lamp': emissive('lamp', (1.0, 0.92, 0.75), 6.0),
        'amber': emissive('amber', (1.0, 0.45, 0.05), 3.0),
        'red': emissive('red', (0.9, 0.05, 0.03), 2.0),
        'canvas': dielectric('canvas', (0.11, 0.12, 0.075), 0.92, 0.01, bump_scale=180),
        'cable': dielectric('cable', (0.06, 0.06, 0.06), 0.5),
        'yellow': dielectric('hook-yellow', (0.55, 0.38, 0.02), 0.45),
    }
