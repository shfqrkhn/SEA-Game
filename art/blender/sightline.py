"""Muzzle sightline check: in every still, each gun's muzzle stands clear of every other part (owner FIX, G2).

    blender -b --factory-startup -P sightline.py -- [--vehicles combat,recce|all] [--parts FP-C,SA-A|all]
                                                    [--shots hero,front,rear|all] [--report] [--write-baseline]

Builds each vehicle with every listed part at the stills' full detail and frames the camera exactly as
art/blender/render.py frames its stills: the hero (only the hero loadout, fleet.HERO) and the two build angles (every
part). For each barrel it takes the muzzle zone on screen: from the muzzle (the tip of the brake where there is one)
along the barrel's line AHEAD of the frame width, where the eye carries the barrel on. A part that a team may fit
with that gun (any other slot) must stand CLEAR of that zone on screen, whether it stands in front of the muzzle or
behind it: the owner saw the crew cupola (SA-A) hide the heavy gun's muzzle in the combat hero still, and, moved
behind the muzzle, still carry the barrel on as if it were its end. Parts the barrel's body crosses, short of the
muzzle, stay readable and are not judged. The hull's own small fittings (mirrors, lamps, aerials: FITTING) are judged
like parts: the combat hero's driver's mirror stood at the cannon's muzzle and read as its brake (G2 sweep).

Hero stills (the chooser's large picture) must be clean. Build stills, whose every combination of a team's parts is
possible, may fail only on the pairs recorded in sightline-baseline.json, each no closer than recorded: a new pair or a
closer one fails, in any run, filtered or not. --write-baseline rewrites the record after a whole-fleet run and refuses
to add a pair, so the record only shrinks, to empty by G4 (MPES §17). With --report, prints every pair's clearance.
"""
import argparse
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import bpy  # noqa: E402
import numpy as np  # noqa: E402

from render import ANGLES, BUILD, HERO  # noqa: E402
from sea import fleet, materials, scene  # noqa: E402
from sea.geo import Builder  # noqa: E402
from sea.mounts import SLOTS  # noqa: E402
from sea.parts.library import PARTS, build as build_part  # noqa: E402

WEAPONS = ('weapon', 'aux-weapon')
CLEAR = 0.01     # of the frame width: 13 px in a 1280 px build still, 16 px in the hero
AHEAD = 0.04     # of the frame width beyond the tip, where the eye carries the barrel on
SLACK = 0.5      # px a recorded pair may move closer by before it counts as worse (float noise between runs)
MUZZLE = ('muzzle-collar', 'muzzle-bridges')   # brake pieces beyond the bored barrel's end
BASELINE = os.path.join(HERE, 'sightline-baseline.json')
FITTING = 0.8    # m: a hull object no bigger than this across (mirror, lamp, aerial, shackle) is judged like a part


def fittings():
    """The hull's small fittings, grouped by name as 'hull:<name>' -> objects. The hull body and the wheels, which
    every barrel crosses as ground, are larger and are not judged; a mirror at a muzzle reads as its brake (G2 sweep)."""
    out = {}
    for o in scene.layer_objects('base'):
        if o.type in ('MESH', 'CURVE') and max(o.dimensions) <= FITTING:
            out.setdefault('hull:' + o.name.split(':')[1], []).append(o)
    return out


def layer_tris(layer, objs=None):
    """World-space triangles (n, 3, 3) of one layer's evaluated surfaces (or of `objs`)."""
    deps = bpy.context.evaluated_depsgraph_get()
    out = []
    for o in scene.layer_objects(layer) if objs is None else objs:
        if o.type not in ('MESH', 'CURVE'):
            continue
        ev = o.evaluated_get(deps)
        me = ev.to_mesh()
        if me is None:
            continue
        me.calc_loop_triangles()
        mw = np.array(ev.matrix_world)
        v = np.array([x.co for x in me.vertices], dtype=float).reshape(-1, 3)
        v = v @ mw[:3, :3].T + mw[:3, 3]
        t = np.array([tri.vertices[:] for tri in me.loop_triangles], dtype=int).reshape(-1, 3)
        if len(t):
            out.append(v[t])
        ev.to_mesh_clear()
    return np.concatenate(out) if out else np.zeros((0, 3, 3))


def world_verts(o):
    deps = bpy.context.evaluated_depsgraph_get()
    ev = o.evaluated_get(deps)
    mw = np.array(ev.matrix_world)
    return np.array([x.co for x in ev.data.vertices], dtype=float).reshape(-1, 3) @ mw[:3, :3].T + mw[:3, 3]


def barrels(layer):
    """(name, breech, muzzle) world points of each barrel of a weapon layer. The muzzle is the end away from the mount,
    carried on to the far face of any brake on the barrel's line (sea/parts/fp.py stands the last collar beyond it)."""
    objs = [o for o in scene.layer_objects(layer) if o.type == 'MESH']
    lo, hi = scene.bounds(scene.layer_objects(layer))
    centre = np.array((lo + hi) / 2)
    brake = [world_verts(o) for o in objs if o.name.split(':')[1:2] and o.name.split(':')[1] in MUZZLE]
    found = []
    for o in objs:
        if o.name.split(':')[1:2] != ['bored-barrel']:
            continue
        v = world_verts(o)
        mean = v.mean(axis=0)
        axis = np.linalg.svd(v - mean, full_matrices=False)[2][0]
        s = (v - mean) @ axis
        radius = np.linalg.norm((v - mean) - np.outer(s, axis), axis=1).max()
        a, b = mean + axis * s.min(), mean + axis * s.max()
        if np.linalg.norm(a - centre) > np.linalg.norm(b - centre):
            a, b, axis = b, a, -axis
        reach = (b - mean) @ axis
        for w in brake:
            t = (w - mean) @ axis
            off = np.linalg.norm((w - mean) - np.outer(t, axis), axis=1)
            near = off < radius * 2.5     # this barrel's brake, not a twin's
            if near.any():
                reach = max(reach, t[near].max())
        found.append((o.name, a, mean + axis * reach))
    return found


class View:
    """Camera-space transform and pixel projection, as bpy_extras.object_utils.world_to_camera_view, vectorised."""

    def __init__(self, cam, size):
        sc = bpy.context.scene
        inv = np.array(cam.matrix_world.normalized().inverted())
        self.rot, self.off = inv[:3, :3], inv[:3, 3]
        f = [np.array(v) for v in cam.data.view_frame(scene=sc)[:3]]
        self.d = -f[0][2]                       # the frame's distance in front of the camera
        self.x0, self.x1 = f[2][0], f[1][0]
        self.y0, self.y1 = f[1][1], f[0][1]
        self.size = size

    def local(self, points):
        """Camera-space points with depth (distance in front of the camera) last, positive ahead."""
        q = points @ self.rot.T + self.off
        return np.concatenate([q[..., :2], -q[..., 2:3]], axis=-1)

    def pixels(self, local):
        """Pixel coordinates (x right, y up) of camera-space points (..., 3)."""
        k = self.d / np.maximum(local[..., 2:3], 1e-9)
        xy = local[..., :2] * k
        return np.stack([(xy[..., 0] - self.x0) / (self.x1 - self.x0) * self.size[0],
                         (xy[..., 1] - self.y0) / (self.y1 - self.y0) * self.size[1]], axis=-1)


def seg_dist(p, a, b):
    """Distance from points p (..., 2) to segment a-b."""
    ab = b - a
    t = np.clip(((p - a) @ ab) / max(ab @ ab, 1e-12), 0, 1)
    return np.linalg.norm(p - (a + t[..., None] * ab), axis=-1)


def clearance(tris2, a, b):
    """Smallest on-screen distance from segment a-b to 2D triangles (n, 3, 2); 0 where they overlap.
    A triangle seen edge-on (no area) is only its edges: it covers nothing, it can still be near."""
    if not len(tris2):
        return float('inf')
    best = seg_dist(tris2, a, b).min()
    # Segment ends to triangle edges, and the segment crossing or lying inside a triangle.
    for p in (a, b):
        for i in range(3):
            e0, e1 = tris2[:, i], tris2[:, (i + 1) % 3]
            ab = e1 - e0
            t = np.clip(np.einsum('ij,ij->i', p - e0, ab) / np.maximum(np.einsum('ij,ij->i', ab, ab), 1e-12), 0, 1)
            best = min(best, np.linalg.norm(p - (e0 + t[:, None] * ab), axis=1).min())

    def cross(u, v):
        return u[..., 0] * v[..., 1] - u[..., 1] * v[..., 0]
    solid = np.abs(cross(tris2[:, 1] - tris2[:, 0], tris2[:, 2] - tris2[:, 0])) > 1e-6
    for p in (a, b, (a + b) / 2):
        d = [cross(tris2[:, (i + 1) % 3] - tris2[:, i], p - tris2[:, i]) for i in range(3)]
        if np.any(solid & (((d[0] >= 0) & (d[1] >= 0) & (d[2] >= 0)) | ((d[0] <= 0) & (d[1] <= 0) & (d[2] <= 0)))):
            return 0.0
    for i in range(3):
        e0, e1 = tris2[:, i], tris2[:, (i + 1) % 3]
        d1, d2 = cross(e1 - e0, a - e0), cross(e1 - e0, b - e0)
        d3, d4 = cross(b - a, e0 - a), cross(b - a, e1 - a)
        if np.any((d1 * d2 < 0) & (d3 * d4 < 0)):
            return 0.0
    return float(best)


def selftest():
    """The geometry on cases with known answers, so a regression fails before any judgement."""
    a, b = np.array([0., 0.]), np.array([10., 0.])
    tri = np.array([[[2., -1.], [4., -1.], [3., 1.]]])
    assert clearance(tri, a, b) == 0.0, 'crossing triangle'
    assert abs(clearance(np.array([[[2., 5.], [4., 5.], [3., 7.]]]), a, b) - 5.0) < 1e-9, 'triangle above'
    flat = np.array([[[0., 3.], [5., 3.], [10., 3.]]])
    assert abs(clearance(flat, a, b) - 3.0) < 1e-9, 'edge-on triangle off the line'
    assert clearance(np.array([[[1., 0.], [5., 0.], [9., 0.]]]), a, b) == 0.0, 'edge-on triangle on the line'


def key(stem, shot, gun, other):
    return f'{stem} {shot} {gun} {other}'


def main():
    argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
    p = argparse.ArgumentParser()
    p.add_argument('--vehicles', default='all')
    p.add_argument('--parts', default='all')
    p.add_argument('--shots', default='all')
    p.add_argument('--report', action='store_true')
    p.add_argument('--write-baseline', action='store_true')
    a = p.parse_args(argv)
    selftest()
    vehicles = list(fleet.VEHICLES) if a.vehicles == 'all' else [v for v in a.vehicles.split(',') if v]
    parts = list(PARTS) if a.parts == 'all' else [c for c in a.parts.split(',') if c]
    whole = a.vehicles == 'all' and a.parts == 'all' and a.shots == 'all'
    if a.write_baseline and not whole:
        sys.exit('[sightline] --write-baseline needs the whole fleet: --vehicles all --parts all --shots all')
    baseline = {}
    if os.path.exists(BASELINE):
        with open(BASELINE, encoding='utf-8') as f:
            baseline = json.load(f)['pairs']
    seen = {}       # failing pair -> closest clearance over its barrels
    checked = 0
    for stem in vehicles:
        scene.reset()
        mats = materials.realtime_palette()     # materials do not change shape; geo.REALTIME stays off, as in render.py
        m = fleet.VEHICLES[stem](mats)
        for card in PARTS:
            build_part(card, Builder(card, mats), m)
        cam = scene.camera(lens=55)
        everything = ['base', *PARTS]
        hero = list(fleet.HERO[stem])
        shots = [('hero', HERO, 32, 8, ['base', *hero], hero),
                 *[(angle, BUILD, yaw, pitch, everything, list(PARTS)) for angle, (yaw, pitch) in ANGLES.items()]]
        tris = {layer: layer_tris(layer) for layer in PARTS}
        hull = fittings()
        tris.update({name: layer_tris(None, objs) for name, objs in hull.items()})
        shots = [s for s in shots if a.shots == 'all' or s[0] in a.shots.split(',')]
        for shot, size, yaw, pitch, framing, shown in shots:
            sc = bpy.context.scene
            sc.render.resolution_x, sc.render.resolution_y, sc.render.resolution_percentage = size[0], size[1], 100
            framed = [o for layer in framing for o in scene.layer_objects(layer)]
            lo, hi = scene.bounds(framed)
            scene.fit(cam, (lo + hi) / 2, yaw, pitch, framed, 1.06)
            bpy.context.view_layer.update()
            view = View(cam, size)
            shown = [*shown, *hull]     # every still shows the hull
            local = {layer: view.local(tris[layer]) for layer in shown if len(tris[layer])}
            limit = CLEAR * size[0]
            for gun in [c for c in shown if SLOTS.get(c) in WEAPONS]:
                for barrel, breech, muzzle in barrels(gun):
                    ends = view.local(np.array([breech, muzzle]))
                    back, tip = view.pixels(ends)
                    on = tip - back
                    zone = (tip, tip + on / max(np.linalg.norm(on), 1e-9) * AHEAD * size[0])
                    for other in shown:
                        if SLOTS.get(other) == SLOTS[gun] or other not in local or (gun not in parts and other not in parts):
                            continue    # a filtered run checks every pair a selected part is in, gun or not
                        d = clearance(view.pixels(local[other]), *zone)
                        checked += 1
                        k = key(stem, shot, gun, other)
                        if d < limit:
                            seen[k] = min(seen.get(k, float('inf')), d)
                        if d < limit or a.report:
                            print(f'[sightline] {"near" if d < limit else "ok  "} {stem:14s} {shot:5s} {gun:5s} {barrel:20s} '
                                  f'x {other:6s} ({SLOTS.get(other, "hull")}): {d:6.1f} px (need {limit:.0f})', flush=True)
    new = sorted(k for k in seen if k not in baseline or k.split()[1] == 'hero')
    worse = sorted(k for k in seen if k in baseline and seen[k] < baseline[k] - SLACK)
    gone = sorted(k for k in baseline if k not in seen and k.split()[0] in vehicles
                  and (a.shots == 'all' or k.split()[1] in a.shots.split(','))
                  and any(c in parts for c in (k.split()[2], k.split()[3])))
    for k in new:
        print(f'[sightline] FAIL new pair {k}: {seen[k]:.1f} px', flush=True)
    for k in worse:
        print(f'[sightline] FAIL closer {k}: {seen[k]:.1f} px, recorded {baseline[k]:.1f}', flush=True)
    if gone:
        print(f'[sightline] {len(gone)} recorded pair(s) now clear: shrink the record with --write-baseline', flush=True)
    by_shot = {}
    for k in seen:
        by_shot[k.split()[1]] = by_shot.get(k.split()[1], 0) + 1
    bad = new or worse
    print(f'[sightline] {"FAIL" if bad else "PASS"} {len(seen)} of {checked} muzzle-part pair(s) closer than '
          f'{CLEAR:.0%} of the frame ({", ".join(f"{s} {n}" for s, n in sorted(by_shot.items())) or "none"}); '
          f'{len(new)} new, {len(worse)} closer, {len(baseline)} recorded', flush=True)
    if a.write_baseline:
        if bad:
            sys.exit('[sightline] not written: the record may only shrink')
        with open(BASELINE, 'w', encoding='utf-8', newline='') as f:
            json.dump({'note': 'Build-still muzzle pairs still to clear in G4 (MPES §17); only ever shrinks. '
                               'Written by sightline.py --write-baseline.',
                       # a recorded clearance never goes down, so repeated rewrites cannot add up the slack
                       'pairs': {k: max(round(seen[k], 1), baseline.get(k, 0)) for k in sorted(seen)}}, f, indent=1, ensure_ascii=False)
            f.write('\n')
        print(f'[sightline] record written: {len(seen)} pair(s)', flush=True)
    sys.exit(1 if bad else 0)


if __name__ == '__main__':
    main()
