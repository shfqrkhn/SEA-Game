// One visible part per card (MPES §10.2), built procedurally and mounted by category. `index` is the
// count of earlier parts of the same category, so repeated categories stack or alternate sides.
import type { Group } from 'three';
import { card as cardDef, type Category } from '../domain/data.ts';
import { Assembly, ball, between, bolts, cyl, hook, lamp, rbox, tube, type V3 } from './kit.ts';
import type { Mounts } from './vehicles.ts';


const add = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];

function weaponStation(asm: Assembly, at: V3, fp: number, variant: number): void {
  const scale = 0.75 + fp * 0.08;
  asm.add(cyl(0.42 * scale, 0.48 * scale, 0.14, 24), 'gunmetal', { p: add(at, [0, 0.07, 0]) });
  asm.add(rbox(0.9 * scale, 0.42 * scale, 0.7 * scale, 0.06, 2), 'paint', { p: add(at, [0, 0.36 * scale, 0]) });
  asm.add(rbox(0.36 * scale, 0.3 * scale, 0.32 * scale, 0.04, 2), 'paintDark', { p: add(at, [-0.12, 0.72 * scale, 0.28 * scale]) });
  for (const z of [0.05, -0.05]) asm.add(cyl(0.05, 0.05, 0.02, 12), 'glass', { p: add(at, [0.07, 0.74 * scale, 0.28 * scale + z]), r: [0, 0, Math.PI / 2] });
  const barrels = variant === 6 ? [0.12, -0.12] : [0];
  const length = 0.7 + fp * 0.22;
  for (const z of barrels) {
    const barrel = cyl(0.045, 0.055, length, 12);
    barrel.rotateZ(Math.PI / 2);
    asm.add(barrel, 'gunmetal', { p: add(at, [0.45 * scale + length / 2, 0.4 * scale, z]) });
    const muzzle = cyl(0.07, 0.07, 0.14, 12);
    muzzle.rotateZ(Math.PI / 2);
    asm.add(muzzle, 'black', { p: add(at, [0.45 * scale + length, 0.4 * scale, z]) });
  }
  // Ammunition box on the side and smoke dischargers.
  asm.add(rbox(0.3, 0.26, 0.18, 0.02, 1), 'paintDark', { p: add(at, [0, 0.36 * scale, -0.45 * scale]) });
  for (let i = 0; i < 3; i++) asm.add(cyl(0.05, 0.05, 0.22, 10), 'gunmetal', { p: add(at, [0.25, 0.2 + i * 0.09, 0.48 * scale]), r: [Math.PI / 2 - 0.4, 0, 0] });
}

function armourPanel(asm: Assembly, m: Mounts, index: number, pro: number, variant: number): void {
  const side = index % 2 ? 1 : -1;
  const span = (m.sideX[1] - m.sideX[0]) / 2, slot = Math.floor(index / 2) % 2;
  const x = m.sideX[0] + span * (slot + 0.5), y = (m.sideY[0] + m.sideY[1]) / 2, h = m.sideY[1] - m.sideY[0];
  const thick = 0.06 + pro * 0.014, z = side * (m.halfWidth + 0.06 + thick / 2);
  if (variant === 5) {
    // Blast kit: angled belly plate under the hull.
    asm.add(rbox(m.length * 0.6, 0.08, 1.2, 0.02, 1), 'paintDark', { p: [0, 0.55, side * 0.45], r: [side * 0.45, 0, 0] });
    return;
  }
  if (variant === 4) {
    // Slat/side skirt: horizontal bars on posts.
    for (let i = 0; i < 4; i++) asm.add(rbox(span * 0.95, 0.04, 0.04, 0.01, 1), 'gunmetal', { p: [x, m.sideY[0] + 0.1 + i * h / 4, z + 0.12 * side] });
    for (let i = 0; i < 4; i++) asm.add(rbox(0.04, h, 0.04, 0.01, 1), 'gunmetal', { p: [x - span * 0.45 + i * span * 0.3, y, z + 0.08 * side] });
    return;
  }
  const tiles = variant === 1 ? 3 : 1;
  for (let t = 0; t < tiles; t++) {
    const w = (span * 0.92) / tiles;
    asm.add(rbox(w - 0.03, h * 0.9, thick, 0.03, 2), 'paintLight', { p: [x - span * 0.46 + w * (t + 0.5), y, z] });
  }
  bolts(asm, [x - span * 0.42, y + h * 0.4, z + side * thick / 2], [x + span * 0.42, y + h * 0.4, z + side * thick / 2], 7, 'z');
  bolts(asm, [x - span * 0.42, y - h * 0.4, z + side * thick / 2], [x + span * 0.42, y - h * 0.4, z + side * thick / 2], 7, 'z');
  if (variant === 3) asm.add(rbox(0.5, 0.5, 0.05, 0.02, 1), 'gunmetal', { p: [x + span * 0.2, y + 0.1, z + side * 0.05] });
}

export function buildPart(id: string, category: Category, m: Mounts, index: number): Group | null {
  const e = cardDef(id)?.effects ?? {};
  const v = id.charCodeAt(id.length - 1) - 65;
  const asm = new Assembly();
  switch (category) {
    case 'CAPACITY': {
      // Crew module or bench pod on the rear deck/roof; size follows CAP.
      const length = 0.8 + (e.CAP ?? 4) * 0.12, height = v === 3 ? 0.75 : 0.5;
      const at = add(m.rearDeck, [-index * 0.3, height / 2 + index * height, 0]);
      asm.add(rbox(length, height, 1.9, 0.06, 2), (e.PRO ?? 0) > 0 ? 'paintLight' : 'paint', { p: at });
      for (let i = 0; i < Math.min(4, Math.round(length / 0.5)); i++) for (const side of [1, -1]) asm.add(rbox(0.32, height * 0.4, 0.03, 0.03, 1), 'glass', { p: add(at, [-length / 2 + 0.3 + i * 0.45, 0.04, side * 0.96]) });
      asm.add(rbox(length + 0.06, 0.04, 1.96, 0.02, 1), 'paintDark', { p: add(at, [0, height / 2, 0]) });
      break;
    }
    case 'MOBILITY': {
      const x = m.axleX[0]!, R = m.wheelRadius;
      if (v === 3 || v === 6) {
        // Suspension springs and dampers at every wheel (D), or traction kit with tyre chains (G).
        for (const ax of m.axleX) for (const side of [1, -1]) {
          if (v === 3) {
            asm.add(tube(Array.from({ length: 16 }, (_, i) => [ax + Math.cos(i * 1.2) * 0.1, R + 0.1 + i * 0.03, side * 0.72 + Math.sin(i * 1.2) * 0.1] as V3), 0.02, 64), 'brass');
            const damper = between([ax, R, side * 0.72], [ax, R + 0.6, side * 0.72], 0.035, 8);
            asm.add(damper.geometry, 'chrome', damper.place);
          } else {
            for (let i = 0; i < 8; i++) { const a = (i / 8) * Math.PI * 2; asm.add(rbox(0.06, 0.04, 0.5, 0.01, 1), 'steel', { p: [ax + Math.cos(a) * (R + 0.02), R + Math.sin(a) * (R + 0.02), side * 1.05], r: [0, 0, a] }); }
          }
        }
      } else if (v === 4) {
        // Long-range tanks with straps and jerrycans.
        for (const side of [1, -1]) {
          asm.add(rbox(1.3, 0.5, 0.45, 0.2, 4), 'paintDark', { p: [x - 3.0 + index * 0.2, 1.0, side * 1.15] });
          for (const dx of [-0.35, 0.35]) asm.add(rbox(0.05, 0.54, 0.49, 0.02, 1), 'black', { p: [x - 3.0 + dx, 1.0, side * 1.15] });
        }
        for (let i = 0; i < 3; i++) asm.add(rbox(0.12, 0.45, 0.32, 0.03, 2), 'paintLight', { p: [m.rearHitch[0] + 0.25, 1.6, -0.6 + i * 0.36] });
      } else {
        // Powerpack upgrade: engine deck grille, air intake and twin exhaust.
        const at: V3 = [x - 0.7 - index * 0.45, m.roof[1] + 0.02, 0.6];
        asm.add(rbox(0.9, 0.12, 0.9, 0.03, 1), 'paintDark', { p: at });
        for (let i = 0; i < 6; i++) asm.add(rbox(0.8, 0.02, 0.05, 0.01, 1), 'black', { p: add(at, [0, 0.07, -0.38 + i * 0.15]) });
        if (v === 0 || v === 4) asm.add(cyl(0.14, 0.14, 0.6, 14), 'paint', { p: add(at, [-0.2, 0.36, -0.55]) });
        for (const dz of v === 1 ? [0.2, -0.2] : [0]) asm.add(cyl(0.06, 0.07, 0.5, 12), 'gunmetal', { p: add(at, [0.45, 0.25, dz]) });
      }
      break;
    }
    case 'FIREPOWER':
      weaponStation(asm, add(m.roof, [0, index * 0.75, 0]), e.FP ?? 2, v);
      break;
    case 'PROTECTION':
      armourPanel(asm, m, index, e.PRO ?? 3, v);
      break;
    case 'COMMS': {
      const height = 1.0 + (e.COM ?? 50) * 0.012;
      const at = add(m.roofRear, [index * 0.35, 0, index % 2 ? 1.6 : 0]);
      asm.add(cyl(0.09, 0.11, 0.12, 12), 'gunmetal', { p: add(at, [0, 0.06, 0]) });
      asm.add(tube(Array.from({ length: 10 }, (_, i) => [at[0], at[1] + 0.12 + i * 0.012, at[2]] as V3), 0.03, 16), 'black');
      const whip = cyl(0.008, 0.02, height, 6);
      asm.add(whip, 'black', { p: add(at, [0, 0.24 + height / 2, 0]) });
      if (id === 'COM-E' || id === 'COM-D') {
        asm.add(cyl(0.22, 0.04, 0.12, 20), 'paintLight', { p: add(at, [0.35, 0.35, 0]), r: [0, 0, -1.2] });
        asm.add(cyl(0.04, 0.04, 0.3, 8), 'gunmetal', { p: add(at, [0.25, 0.2, 0]) });
      }
      asm.add(rbox(0.36, 0.22, 0.26, 0.03, 2), 'paintDark', { p: add(at, [0.3, 0.11, 0]) });
      break;
    }
    case 'SA': {
      const height = 0.4 + (e.SA ?? 1) * 0.18 + (v === 3 ? 0.9 : 0);
      const at = add(m.mastFront, [-index * 0.45, 0, 0]);
      const mast = between(at, add(at, [0, height, 0]), 0.045, 10);
      asm.add(mast.geometry, 'gunmetal', mast.place);
      const head = add(at, [0, height + 0.16, 0]);
      asm.add(rbox(0.34, 0.26, 0.42, 0.05, 2), 'paintDark', { p: head });
      for (const z of [0.1, -0.1]) asm.add(cyl(0.06, 0.06, 0.03, 16), 'glass', { p: add(head, [0.18, 0, z]), r: [0, 0, Math.PI / 2] });
      asm.add(ball(0.05), 'glass', { p: add(head, [0.12, 0.15, 0]) });
      if (v === 6) for (const dz of [1.6, -1.6]) asm.add(rbox(0.16, 0.12, 0.12, 0.03, 2), 'paintDark', { p: add(at, [-1.0, 0.1, dz * 0.5]) });
      break;
    }
    case 'ACCESSORIES': {
      const fb = m.frontBumper, rh = m.rearHitch;
      if (id === 'ACC-F' || id === 'ACC-A') {
        // Front winch: frame, drum with cable turns, fairlead and hook.
        asm.add(rbox(0.36, 0.34, 1.1, 0.03, 2), 'gunmetal', { p: add(fb, [0.2, 0.0, 0]) });
        asm.add(cyl(0.13, 0.13, 0.8, 18), 'black', { p: add(fb, [0.24, 0.02, 0]), r: [Math.PI / 2, 0, 0] });
        for (let i = 0; i < 9; i++) asm.add(cyl(0.145, 0.145, 0.03, 18), 'cable', { p: add(fb, [0.24, 0.02, -0.34 + i * 0.085]), r: [Math.PI / 2, 0, 0] });
        asm.add(rbox(0.06, 0.12, 0.3, 0.02, 1), 'steel', { p: add(fb, [0.42, 0.0, 0]) });
        asm.add(hook(0.1), 'brass', { p: add(fb, [0.55, -0.08, 0]) });
        if (id === 'ACC-A') for (let i = 0; i < 2; i++) asm.add(tube([add(rh, [0.1, 0.9, -0.5 + i * 0.3]), add(rh, [-0.1, 0.6, -0.5 + i * 0.3]), add(rh, [0.1, 0.3, -0.5 + i * 0.3])], 0.025, 12), 'canvas');
      } else if (id === 'ACC-C' || id === 'ACC-E') {
        // Mine roller arms with disc sections (C) or engineer dozer blade (E).
        for (const z of [0.7, -0.7]) { const arm = between(add(fb, [0, 0, z]), add(fb, [1.45, -0.5, z]), 0.08, 10); asm.add(arm.geometry, 'paintDark', arm.place); }
        if (id === 'ACC-C') for (const z of [0.75, -0.75]) for (let i = 0; i < 6; i++) asm.add(cyl(0.4, 0.4, 0.08, 22), 'gunmetal', { p: add(fb, [1.45, -0.5, z - 0.32 + i * 0.13]), r: [Math.PI / 2, 0, 0] });
        if (id === 'ACC-C') { const axle = cyl(0.06, 0.06, 2.2, 10); axle.rotateX(Math.PI / 2); asm.add(axle, 'steel', { p: add(fb, [1.45, -0.5, 0]) }); }
        else asm.add(rbox(0.12, 0.7, 2.7, 0.04, 2), 'paint', { p: add(fb, [1.3, -0.4, 0]), r: [0, 0, -0.25] });
      } else if (id === 'ACC-B') {
        // Two-wheel utility trailer with drawbar and canvas cover.
        const t = add(rh, [-2.0, 0.25, 0]);
        const bar = between(add(rh, [0, 0, 0]), add(t, [0.9, -0.15, 0]), 0.05, 8);
        asm.add(bar.geometry, 'paintDark', bar.place);
        asm.add(rbox(1.9, 0.6, 1.8, 0.05, 2), 'paint', { p: add(t, [0, 0.35, 0]) });
        asm.add(rbox(1.9, 0.45, 1.8, 0.2, 3), 'canvas', { p: add(t, [0, 0.85, 0]) });
        for (const z of [1.0, -1.0]) { const wheelGeo = cyl(0.4, 0.4, 0.3, 24); wheelGeo.rotateX(Math.PI / 2); asm.add(wheelGeo, 'rubber', { p: [t[0], 0.4, z] }); }
        for (const z of [0.5, -0.5]) lamp(asm, add(t, [-0.97, 0.3, z]), 0.05, -1, 'red');
      } else {
        // Field support / mission rack: roof rack with boxes, jerrycans and a strapped canvas roll.
        const at = add(m.roofRear, [1.2 + index * 0.4, 0, 0.9]);
        for (const dz of [-0.55, 0.55]) asm.add(rbox(1.6, 0.04, 0.04, 0.01, 1), 'steel', { p: add(at, [0, 0.12, dz]) });
        asm.add(rbox(0.6, 0.32, 0.45, 0.03, 2), 'paintDark', { p: add(at, [-0.4, 0.3, 0.2]) });
        asm.add(rbox(0.12, 0.42, 0.32, 0.03, 2), 'paintLight', { p: add(at, [0.25, 0.33, -0.25]) });
        asm.add(cyl(0.16, 0.16, 0.9, 14), 'canvas', { p: add(at, [0.45, 0.28, 0.1]), r: [Math.PI / 2, 0, 0] });
      }
      break;
    }
    case 'SE_PROCESS':
      return null;
  }
  return asm.build(id);
}
