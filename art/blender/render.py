"""Render entry point (MPES §10, §11). Run with the pinned Blender (see art/blender/README.md):

    blender -b --factory-startup -P art/blender/render.py -- --job spike --out .artifacts/renders/spike [--preview]

Writes 16-bit RGBA PNG masters; tools/encode-renders.ts encodes them and writes the manifest.
"""
import argparse
import json
import math
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import bpy  # noqa: E402

from sea import materials, scene  # noqa: E402
from sea.parts.spike import PARTS  # noqa: E402
from sea.vehicles import recovery  # noqa: E402

ANGLES = {'front': (38, 10), 'rear': (218, 12)}  # (yaw, pitch) of the two build angles
# Sizes balance look and weight (MPES §10.3): showcase and turntable at screen resolution, cards at 3x their CSS size.
HERO, BUILD, TURN, CARD = (1920, 1080), (1920, 1080), (1280, 720), (768, 768)
TURNTABLE_FRAMES = 24
TURNTABLE_PITCH = 9


def args():
    argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
    p = argparse.ArgumentParser()
    p.add_argument('--job', default='spike')
    p.add_argument('--out', required=True)
    p.add_argument('--preview', action='store_true', help='low samples and size, hero only')
    p.add_argument('--only', default='', help='comma list of outputs: hero,turntable,build,cards')
    return p.parse_args(argv)


def build_scene():
    scene.reset()
    scene.world()
    mats = materials.palette()
    mounts = recovery.build(mats)
    parts = {}
    for card, (fn, mount) in PARTS.items():
        parts[card] = fn(mats, mounts[mount])
    scene.ground()
    return list(parts)


def main():
    a = args()
    # Absolute: Blender resolves relative render paths against the drive root, not the working directory.
    a.out = os.path.abspath(a.out)
    os.makedirs(a.out, exist_ok=True)
    only = set(filter(None, a.only.split(','))) or {'hero', 'turntable', 'build', 'cards'}
    cards = build_scene()
    everything = ['base', *cards]
    cam = scene.camera(lens=55)
    lo, hi = scene.bounds([o for layer in everything for o in scene.layer_objects(layer)])
    centre = (lo + hi) / 2
    scene.studio(center=(centre.x, centre.y, 1.4), scale=1.0)
    outputs = []

    def shot(name, size, samples, layers, catchers, yaw, pitch, framing_layers=None, margin=1.06):
        w, h = size
        scene.configure(w, h, samples)
        scene.show_layers(layers, catchers)
        framed = [o for layer in (framing_layers or layers) for o in scene.layer_objects(layer)]
        lo, hi = scene.bounds(framed)
        scene.fit(cam, (lo + hi) / 2, yaw, pitch, framed, margin)
        path = os.path.join(a.out, name + '.png')
        scene.render(path)
        outputs.append({'file': name + '.png', 'width': w, 'height': h, 'layers': list(layers), 'yaw': yaw, 'pitch': pitch})

    if a.preview:
        shot('preview-hero', (960, 540), 48, everything, [], 32, 8)
    else:
        if 'hero' in only:
            shot('recovery-hero', HERO, 384, everything, [], 32, 8)
        if 'turntable' in only:
            for i in range(TURNTABLE_FRAMES):
                shot(f'recovery-turntable-{i:02d}', TURN, 160, ['base'], [], i * 360 / TURNTABLE_FRAMES, TURNTABLE_PITCH)
        if 'build' in only:
            for angle, (yaw, pitch) in ANGLES.items():
                # Every layer of one angle shares the camera framed on the fully equipped vehicle.
                shot(f'recovery-{angle}-base', BUILD, 320, ['base'], [], yaw, pitch, everything)
                for card in cards:
                    shot(f'recovery-{angle}-{card}', BUILD, 320, [card], ['base'], yaw, pitch, everything)
        if 'cards' in only:
            for card in cards:
                shot(f'card-{card}', CARD, 320, [card], [], 35, 18, [card], 1.12)
    with open(os.path.join(a.out, 'renders.json'), 'w', encoding='utf-8') as f:
        json.dump({'blender': bpy.app.version_string, 'seed': scene.SEED, 'outputs': outputs}, f, indent=2)


if __name__ == '__main__':
    main()
