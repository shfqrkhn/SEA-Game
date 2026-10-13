"""Render entry point (MPES §10, §11). Run with the pinned Blender (see art/README.md):

    blender -b --factory-startup -P art/blender/render.py -- --out .artifacts/renders/v2 [options]

Options:
    --vehicles recovery,combat   vehicles to render (default: all six)
    --only hero,turntable,build,cards   outputs to render (default: all)
    --parts CAP-A,ACC-F          limit build layers and card renders to these cards
    --preview                    low samples; per vehicle a hero and a 'kit' still with every part shown
    --metadata-only              frame every shot and write renders.json without rendering

Writes 16-bit RGBA PNG masters and renders.json; tools/encode-renders.ts encodes them and writes the manifest.
"""
import argparse
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import bpy  # noqa: E402

from sea import fleet, materials, scene  # noqa: E402
from sea.mounts import SLOTS, card_mount  # noqa: E402
from sea.parts import tokens  # noqa: E402
from sea.parts.library import PARTS, build as build_part  # noqa: E402

# (yaw, pitch) of the two build angles. Chosen by art/tools/angles.ts (owner FIX, G2): near eye level and more side-on
# than the earlier 38/10 and 218/12, so fewer parts are hidden by the hull and the vehicle fills more of the frame.
ANGLES = {'front': (30, 6), 'rear': (210, 6)}
# Sizes favour performance over looks (owner, 2026-10-10): enough pixels for the panels they fill, no more.
HERO, BUILD, TURN, CARD = (1600, 900), (1280, 720), (960, 540), (512, 512)
TURNTABLE_FRAMES = 24
TURNTABLE_PITCH = 9
CARD_YAW, CARD_PITCH = 35, 18
SAMPLES = {'hero': 384, 'turntable': 160, 'build': 256, 'card': 256, 'preview': 48}


def args():
    argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
    p = argparse.ArgumentParser()
    p.add_argument('--out', required=True)
    p.add_argument('--vehicles', default=','.join(fleet.VEHICLES))
    p.add_argument('--only', default='')
    p.add_argument('--parts', default='')
    p.add_argument('--preview', action='store_true')
    p.add_argument('--metadata-only', action='store_true')
    return p.parse_args(argv)


def cards():
    with open(os.path.join(HERE, '..', '..', 'content', 'cards.json'), encoding='utf-8') as f:
        return json.load(f)


class Job:
    def __init__(self, a):
        self.a = a
        self.outputs = []

    def shot(self, name, size, samples, layers, catchers, yaw, pitch, framing=None, margin=1.06):
        if self.a.preview:
            size, samples = (size[0] // 2, size[1] // 2), SAMPLES['preview']
        scene.configure(*size, samples)
        scene.show_layers(layers, catchers)
        framed = [o for layer in (framing or layers) for o in scene.layer_objects(layer)]
        lo, hi = scene.bounds(framed)
        scene.fit(self.cam, (lo + hi) / 2, yaw, pitch, framed, margin)
        # Draw order of stacked layers (MPES §10.2): camera distance to the visible subject, farthest first.
        shown = [o for layer in layers for o in scene.layer_objects(layer)]
        slo, shi = scene.bounds(shown)
        depth = round((self.cam.location - (slo + shi) / 2).length, 3)
        if not self.a.metadata_only:
            scene.render(os.path.join(self.a.out, name + '.png'))
        entry = {'file': name + '.png', 'width': size[0], 'height': size[1], 'layers': list(layers), 'yaw': yaw, 'pitch': pitch, 'depth': depth}
        if len(layers) == 1 and layers[0] in SLOTS and catchers:
            entry['slot'] = SLOTS[layers[0]]
        self.outputs.append(entry)
        print(f'[sea] {name}', flush=True)

    def setup(self, build, dust_height=1.25):
        scene.reset()
        scene.world()
        mats = materials.palette(dust_height)
        result = build(mats)
        scene.ground()
        self.cam = scene.camera(lens=55)
        return mats, result

    def vehicle(self, stem, only, parts):
        mats, m = self.setup(fleet.VEHICLES[stem])
        for card, fn in PARTS.items():
            from sea.geo import Builder
            build_part(card, Builder(card, mats), m)
        everything = ['base', *PARTS]
        lo, hi = scene.bounds([o for layer in everything for o in scene.layer_objects(layer)])
        centre = (lo + hi) / 2
        scene.studio(center=(centre.x, centre.y, 1.4), scale=1.0)
        hero = ['base', *fleet.HERO[stem]]
        if self.a.preview:
            self.shot(f'{stem}-hero', HERO, 0, hero, [], 32, 8)
            self.shot(f'{stem}-kit', HERO, 0, everything, [], *ANGLES['front'])
            self.shot(f'{stem}-kit-rear', HERO, 0, everything, [], *ANGLES['rear'])
            return
        if 'hero' in only:
            self.shot(f'{stem}-hero', HERO, SAMPLES['hero'], hero, [], 32, 8)
        if 'turntable' in only:
            for i in range(TURNTABLE_FRAMES):
                self.shot(f'{stem}-turntable-{i:02d}', TURN, SAMPLES['turntable'], ['base'], [], i * 360 / TURNTABLE_FRAMES, TURNTABLE_PITCH)
        if 'build' in only:
            for angle, (yaw, pitch) in ANGLES.items():
                # Every layer of one angle shares the camera framed on the base and every part it can carry.
                self.shot(f'{stem}-{angle}-base', BUILD, SAMPLES['build'], ['base'], [], yaw, pitch, everything)
                for card in parts:
                    self.shot(f'{stem}-{angle}-{card}', BUILD, SAMPLES['build'], [card], ['base'], yaw, pitch, everything)

    def cards(self, parts):
        data = {c['id']: c for c in cards()}
        mats, m = self.setup(lambda mats: card_mount(), dust_height=-1.0)
        from sea.geo import Builder
        for card in parts:
            if card in PARTS:
                build_part(card, Builder(card, mats), m)
            elif card in data and data[card]['category'] == 'SE_PROCESS':
                tokens.token(mats, card, next(iter(data[card]['effects'])), CARD_YAW)
            elif card == 'TRAIN-CAP':
                tokens.practice(mats)
        scene.studio(center=(0, 0, 0.6), scale=1.0)
        for card in parts:
            self.shot(f'card-{card}', CARD, SAMPLES['card'], [card], [], CARD_YAW, CARD_PITCH, [card], 1.12)


def main():
    a = args()
    # Absolute: Blender resolves relative render paths against the drive root, not the working directory.
    a.out = os.path.abspath(a.out)
    os.makedirs(a.out, exist_ok=True)
    only = set(filter(None, a.only.split(','))) or {'hero', 'turntable', 'build', 'cards'}
    every = [c['id'] for c in cards()] + ['TRAIN-CAP']
    chosen = [p for p in a.parts.split(',') if p] or every
    job = Job(a)
    for stem in filter(None, a.vehicles.split(',')):
        if only & {'hero', 'turntable', 'build'}:
            job.vehicle(stem, only, [p for p in chosen if p in PARTS])
    if 'cards' in only:
        job.cards(chosen)
    path = os.path.join(a.out, 'renders.json')
    previous = []
    if os.path.exists(path):
        with open(path, encoding='utf-8') as f:
            previous = [o for o in json.load(f)['outputs'] if o['file'] not in {x['file'] for x in job.outputs}]
    with open(path, 'w', encoding='utf-8') as f:
        json.dump({'blender': bpy.app.version_string, 'seed': scene.SEED, 'outputs': sorted(previous + job.outputs, key=lambda o: o['file'])}, f, indent=2)


if __name__ == '__main__':
    main()
