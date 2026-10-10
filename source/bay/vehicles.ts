// Mission vehicles (MPES §10): original procedural designs. Three cab-over 6x6 trucks (troop
// carrier, command post, recovery) and three armoured hulls (combat 8x8, reconnaissance 4x4,
// mine-clearing 6x6 with a V-hull). Units are metres; x forward, y up, z to the left.
import type { Group } from 'three';
import type { MissionId } from '../domain/data.ts';
import { Assembly, ball, between, bolts, cyl, hook, lamp, profile, rbox, tube, wheel, type V3 } from './kit.ts';

/** Where category parts attach on a given vehicle. */
export interface Mounts {
  readonly roof: V3;          // weapon station / main roof mount
  readonly roofRear: V3;      // antennas, racks
  readonly mastFront: V3;     // sensor mast base
  readonly sideX: readonly [number, number]; // armour panel span (x from, x to)
  readonly sideY: readonly [number, number]; // armour panel span (y from, y to)
  readonly halfWidth: number;
  readonly frontBumper: V3;
  readonly rearHitch: V3;
  readonly rearDeck: V3;      // capacity modules
  readonly axleX: readonly number[];
  readonly wheelRadius: number;
  readonly length: number;
}

export interface VehicleBuild { readonly body: Group; readonly mounts: Mounts }

const TRACK = 1.06;

function axles(asm: Assembly, xs: readonly number[], radius: number, width: number, track = TRACK): void {
  for (const x of xs) for (const side of [1, -1] as const) wheel(asm, [x, radius, side * track], radius, width, side);
  // Axle housings and differentials.
  for (const x of xs) {
    const housing = cyl(0.09, 0.09, track * 2 - width, 10);
    housing.rotateX(Math.PI / 2);
    asm.add(housing, 'gunmetal', { p: [x, radius, 0] });
    asm.add(ball(0.2, 12), 'gunmetal', { p: [x, radius, 0] });
  }
}

function fender(asm: Assembly, x: number, radius: number, width: number, side: 1 | -1, span = 1.25): void {
  const r = radius + 0.1;
  const pts: [number, number][] = [];
  for (let i = 0; i <= 10; i++) { const a = Math.PI * (0.08 + 0.84 * (i / 10)); pts.push([Math.cos(a) * r, Math.sin(a) * r]); }
  for (let i = 10; i >= 0; i--) { const a = Math.PI * (0.08 + 0.84 * (i / 10)); pts.push([Math.cos(a) * (r + 0.06), Math.sin(a) * (r + 0.06)]); }
  const g = profile(pts, width + 0.12, 0.012);
  asm.add(g, 'paintDark', { p: [x, radius, side * TRACK], s: [span / 1.25, 1, 1] });
}

function cab(asm: Assembly, front: number): void {
  const back = front - 1.75;
  // Body shell: chamfered side profile with a raked windscreen.
  asm.add(profile([[back, 1.05], [front - 0.05, 1.05], [front + 0.05, 1.55], [front - 0.12, 1.95], [front - 0.36, 2.95], [back, 2.98]], 2.5, 0.07), 'paint');
  // Windscreen (two panes) and central pillar.
  // Placed along the windscreen's outward normal so the bevelled shell does not cover it.
  const rake = Math.atan2(0.24, 1.0), nx = Math.cos(rake), ny = Math.sin(rake), off = 0.085;
  const wx = front - 0.24 + nx * off, wy = 2.45 + ny * off;
  for (const z of [0.57, -0.57]) {
    asm.add(rbox(0.03, 0.86, 1.04, 0.02, 1), 'glass', { p: [wx, wy, z], r: [0, 0, rake] });
    asm.add(rbox(0.035, 0.92, 1.1, 0.03, 1), 'black', { p: [wx - nx * 0.012, wy - ny * 0.012, z], r: [0, 0, rake] });
  }
  asm.add(rbox(0.06, 0.94, 0.07, 0.01, 1), 'paintDark', { p: [wx + 0.005, wy, 0], r: [0, 0, rake] });
  // Wipers resting at the base of each pane.
  for (const z of [0.57, -0.57]) { const wiper = between([wx + 0.02, wy - 0.4, z - 0.4], [wx + 0.03, wy - 0.33, z + 0.3], 0.01, 4); asm.add(wiper.geometry, 'black', wiper.place); }
  // Side windows, door seams, handles and steps.
  for (const side of [1, -1] as const) {
    asm.add(rbox(0.9, 0.62, 0.03, 0.02, 1), 'glass', { p: [front - 0.95, 2.45, side * 1.25] });
    for (const [x0, x1] of [[front - 1.55, front - 0.25]] as const) {
      asm.add(rbox(x1 - x0, 0.012, 0.012, 0.004, 1), 'black', { p: [(x0 + x1) / 2, 1.1, side * 1.255] });
      asm.add(rbox(0.012, 1.8, 0.012, 0.004, 1), 'black', { p: [x0, 2.0, side * 1.255] });
    }
    asm.add(rbox(0.16, 0.03, 0.04, 0.01, 1), 'steel', { p: [front - 1.4, 1.9, side * 1.27] });
    asm.add(rbox(0.5, 0.05, 0.28, 0.01, 1), 'gunmetal', { p: [front - 0.95, 0.72, side * 1.16] });
    asm.add(rbox(0.5, 0.05, 0.22, 0.01, 1), 'gunmetal', { p: [front - 0.95, 0.42, side * 1.12] });
    // Mirror arm and head.
    const arm = between([front - 0.3, 2.55, side * 1.25], [front - 0.05, 2.6, side * 1.58], 0.025, 6);
    asm.add(arm.geometry, 'gunmetal', arm.place);
    asm.add(rbox(0.06, 0.38, 0.22, 0.03, 2), 'paintDark', { p: [front - 0.05, 2.45, side * 1.62] });
    asm.add(rbox(0.01, 0.32, 0.18, 0.01, 1), 'chrome', { p: [front - 0.09, 2.45, side * 1.62] });
  }
  // Grille with horizontal slats, headlamps, indicators, bumper and tow hooks.
  asm.add(rbox(0.06, 0.48, 1.4, 0.02, 1), 'black', { p: [front + 0.03, 1.32, 0] });
  for (let i = 0; i < 5; i++) asm.add(rbox(0.04, 0.035, 1.36, 0.01, 1), 'paintDark', { p: [front + 0.07, 1.14 + i * 0.09, 0] });
  for (let i = 0; i < 9; i++) asm.add(rbox(0.05, 0.46, 0.035, 0.01, 1), 'paint', { p: [front + 0.09, 1.32, -0.64 + i * 0.16] });
  for (const z of [0.96, -0.96]) {
    // Lamp guards: a small cage of bars in front of each headlamp.
    for (const dy of [-0.12, 0.12]) { const bar = between([front + 0.2, 1.4 + dy, z - 0.17], [front + 0.2, 1.4 + dy, z + 0.17], 0.015, 6); asm.add(bar.geometry, 'steel', bar.place); }
    for (const dz of [-0.17, 0, 0.17]) { const bar = between([front + 0.2, 1.26, z + dz], [front + 0.2, 1.54, z + dz], 0.015, 6); asm.add(bar.geometry, 'steel', bar.place); }
  }
  // Roof rack with rails and a stowed box.
  for (const z of [0.95, -0.95]) { const rail = between([back + 0.2, 3.12, z], [front - 0.6, 3.12, z], 0.025, 8); asm.add(rail.geometry, 'steel', rail.place); }
  for (const x of [back + 0.25, back + 0.85, front - 0.65]) { const post = between([x, 2.98, 0.95], [x, 3.12, 0.95], 0.02, 6); asm.add(post.geometry, 'steel', post.place); const post2 = between([x, 2.98, -0.95], [x, 3.12, -0.95], 0.02, 6); asm.add(post2.geometry, 'steel', post2.place); }
  asm.add(rbox(0.7, 0.28, 0.9, 0.04, 2), 'paintDark', { p: [back + 0.6, 3.2, -0.3] });
  for (const z of [0.96, -0.96]) { lamp(asm, [front + 0.04, 1.4, z], 0.12); lamp(asm, [front + 0.02, 1.16, z], 0.05, 1, 'amber'); }
  asm.add(rbox(0.32, 0.3, 2.62, 0.05, 2), 'paintDark', { p: [front + 0.18, 0.92, 0] });
  for (const z of [0.72, -0.72]) asm.add(hook(0.1), 'brass', { p: [front + 0.36, 0.86, z], r: [Math.PI / 2, 0, 0] });
  // Roof: visor, marker lights and beacons.
  asm.add(rbox(0.4, 0.05, 2.3, 0.02, 1), 'paintDark', { p: [front - 0.2, 3.02, 0], r: [0, 0, -0.12] });
  for (const z of [0.85, -0.85]) { asm.add(cyl(0.07, 0.08, 0.12, 12), 'amber', { p: [back + 0.3, 3.06, z] }); }
  for (const z of [0.4, 0, -0.4]) asm.add(rbox(0.05, 0.04, 0.1, 0.01, 1), 'amber', { p: [front - 0.38, 2.99, z] });
}

function chassis(asm: Assembly, from: number, to: number): void {
  for (const z of [0.5, -0.5]) asm.add(rbox(to - from, 0.24, 0.12, 0.02, 1), 'paintDark', { p: [(from + to) / 2, 0.86, z] });
  for (let x = from + 0.3; x < to; x += 1.2) asm.add(rbox(0.1, 0.18, 1.0, 0.01, 1), 'paintDark', { p: [x, 0.86, 0] });
}

function sideKit(asm: Assembly, x: number): void {
  // Fuel tank, toolbox and exhaust stack behind the cab.
  asm.add(rbox(1.0, 0.5, 0.5, 0.18, 4), 'paintDark', { p: [x, 0.95, 1.0] });
  asm.add(rbox(0.7, 0.5, 0.42, 0.04, 2), 'paint', { p: [x, 0.95, -1.0] });
  const stack = tube([[x + 0.6, 1.0, -0.95], [x + 0.6, 2.2, -0.95], [x + 0.6, 3.2, -0.95]], 0.08, 8);
  asm.add(stack, 'gunmetal');
  asm.add(cyl(0.11, 0.11, 0.5, 12), 'black', { p: [x + 0.6, 2.7, -0.95] });
}

function truck(mission: MissionId): VehicleBuild {
  const asm = new Assembly();
  const R = 0.6, W = 0.46, xs = [2.85, -0.75, -2.2], front = 3.75;
  chassis(asm, -3.6, front - 0.1);
  cab(asm, front);
  axles(asm, xs, R, W);
  for (const x of xs) for (const side of [1, -1] as const) fender(asm, x, R, W, side);
  sideKit(asm, 1.35);
  // Spare wheel behind the cab.
  const spare = new Assembly();
  wheel(spare, [0, 0, 0], 0.55, 0.42, 1);
  asm.addAll(spare, { p: [1.65, 1.75, 0], r: [0, Math.PI / 2, 0] });
  let mounts: Mounts;
  if (mission === 'RECOVERY') {
    // Deck, side lockers, crane with hydraulic ram, hook block and rear spade.
    asm.add(rbox(5.4, 0.14, 2.4, 0.03, 1), 'paintDark', { p: [-0.9, 1.08, 0] });
    for (const side of [1, -1] as const) {
      asm.add(rbox(3.4, 0.9, 0.42, 0.04, 2), 'paint', { p: [-1.75, 1.6, side * 1.0] });
      for (let i = 0; i < 4; i++) {
        asm.add(rbox(0.012, 0.82, 0.012, 0.004, 1), 'black', { p: [-3.4 + i * 0.85 + 0.85, 1.6, side * 1.215] });
        asm.add(rbox(0.12, 0.03, 0.03, 0.01, 1), 'steel', { p: [-3.4 + i * 0.85 + 0.42, 1.75, side * 1.225] });
      }
      asm.add(rbox(0.2, 0.9, 0.2, 0.03, 2), 'paintDark', { p: [-3.45, 0.75, side * 1.15] });
      asm.add(rbox(0.5, 0.06, 0.5, 0.02, 1), 'gunmetal', { p: [-3.45, 0.3, side * 1.15] });
    }
    asm.add(cyl(0.55, 0.62, 0.45, 24), 'paintDark', { p: [0.1, 1.38, 0] });
    asm.add(rbox(1.1, 0.7, 0.9, 0.06, 2), 'paint', { p: [0.1, 1.95, 0] });
    const boomFrom: V3 = [0.2, 2.25, 0], boomTo: V3 = [-3.3, 3.55, 0];
    const boom = between(boomFrom, boomTo, 0.001);
    asm.add(rbox(3.75, 0.42, 0.42, 0.05, 2), 'paint', { p: boom.place.p!, r: [0, 0, Math.atan2(3.55 - 2.25, -3.3 - 0.2) + Math.PI] });
    asm.add(rbox(2.3, 0.3, 0.3, 0.04, 2), 'paintLight', { p: [-2.6, 3.36, 0], r: [0, 0, Math.atan2(1.3, -3.5) + Math.PI] });
    const ramBody = between([-0.4, 1.55, 0.32], [-1.6, 2.65, 0.32], 0.11, 14), ramRod = between([-1.4, 2.47, 0.32], [-2.05, 3.0, 0.32], 0.055, 12);
    asm.add(ramBody.geometry, 'paintDark', ramBody.place).add(ramRod.geometry, 'chrome', ramRod.place);
    const ramBody2 = between([-0.4, 1.55, -0.32], [-1.6, 2.65, -0.32], 0.11, 14), ramRod2 = between([-1.4, 2.47, -0.32], [-2.05, 3.0, -0.32], 0.055, 12);
    asm.add(ramBody2.geometry, 'paintDark', ramBody2.place).add(ramRod2.geometry, 'chrome', ramRod2.place);
    asm.add(cyl(0.16, 0.16, 0.5, 16), 'gunmetal', { p: [-3.45, 3.58, 0], r: [Math.PI / 2, 0, 0] });
    const cable = between([-3.45, 3.45, 0], [-3.45, 2.2, 0], 0.018, 6);
    asm.add(cable.geometry, 'cable', cable.place);
    asm.add(rbox(0.22, 0.3, 0.16, 0.04, 2), 'brass', { p: [-3.45, 2.1, 0] });
    asm.add(hook(0.17), 'brass', { p: [-3.45, 1.8, 0] });
    mounts = { roof: [-0.9, 3.0, 0], roofRear: [2.2, 3.0, -0.9], mastFront: [3.2, 3.0, 0.9], sideX: [-3.3, -0.2], sideY: [1.2, 2.0], halfWidth: 1.22, frontBumper: [front + 0.3, 0.92, 0], rearHitch: [-3.7, 0.75, 0], rearDeck: [-1.75, 2.1, 0], axleX: xs, wheelRadius: R, length: 7.6 };
  } else {
    // Protected box body: troop carrier (windows, rear door, ladder) or command shelter (ribs, AC unit, mast).
    const top = mission === 'COMMAND' ? 3.15 : 2.85;
    asm.add(profile([[-3.55, 1.05], [1.75, 1.05], [1.75, top], [-3.45, top], [-3.55, top - 0.1]], 2.44, 0.06), 'paint');
    asm.add(rbox(5.35, 0.12, 2.5, 0.03, 1), 'paintDark', { p: [-0.9, 1.0, 0] });
    for (const side of [1, -1] as const) {
      if (mission === 'TROOP') {
        for (let i = 0; i < 4; i++) {
          asm.add(rbox(0.5, 0.34, 0.03, 0.03, 1), 'glass', { p: [-2.9 + i * 1.2, 2.25, side * 1.225] });
          asm.add(rbox(0.6, 0.44, 0.02, 0.03, 1), 'paintDark', { p: [-2.9 + i * 1.2, 2.25, side * 1.215] });
        }
        bolts(asm, [-3.3, 1.25, side * 1.23], [1.5, 1.25, side * 1.23], 16, 'z');
      } else {
        for (let i = 0; i < 12; i++) asm.add(rbox(0.05, top - 1.2, 0.03, 0.01, 1), 'paintLight', { p: [-3.3 + i * 0.45, (top + 1.05) / 2, side * 1.225] });
        asm.add(cyl(0.28, 0.28, 0.32, 16), 'gunmetal', { p: [-2.6, 0.75, side * 0.95], r: [Math.PI / 2, 0, 0] });
      }
    }
    for (const side of [1, -1] as const) for (const y of [1.6, top - 0.35]) asm.add(rbox(5.2, 0.012, 0.012, 0.004, 1), 'black', { p: [-0.9, y, side * 1.232] });
    // Rear door, handle and ladder.
    asm.add(rbox(0.04, top - 1.35, 1.0, 0.02, 1), 'paintDark', { p: [-3.57, (top + 1.1) / 2, 0.2] });
    asm.add(rbox(0.04, 0.04, 0.2, 0.01, 1), 'steel', { p: [-3.6, 1.95, 0.55] });
    for (const z of [-0.55, -0.95]) { const rail = between([-3.62, 0.5, z], [-3.62, top + 0.1, z], 0.02, 6); asm.add(rail.geometry, 'steel', rail.place); }
    for (let y = 0.6; y < top; y += 0.32) { const rung = between([-3.62, y, -0.55], [-3.62, y, -0.95], 0.016, 6); asm.add(rung.geometry, 'steel', rung.place); }
    if (mission === 'COMMAND') {
      asm.add(rbox(0.8, 0.45, 0.9, 0.04, 2), 'paintLight', { p: [1.2, top + 0.24, -0.5] });
      asm.add(cyl(0.3, 0.3, 0.02, 20), 'black', { p: [1.2, top + 0.47, -0.5] });
      asm.add(cyl(0.08, 0.08, 4.4, 10), 'gunmetal', { p: [-1.2, top + 0.15, 0.7], r: [0, 0, Math.PI / 2] });
    } else {
      for (const x of [-2.4, -0.6]) asm.add(cyl(0.34, 0.36, 0.08, 18), 'paintDark', { p: [x, top + 0.04, 0] });
    }
    mounts = { roof: [-0.9, top, 0], roofRear: [-3.0, top, -0.9], mastFront: [1.2, top, 0.85], sideX: [-3.3, 1.5], sideY: [1.25, top - 0.35], halfWidth: 1.22, frontBumper: [front + 0.3, 0.92, 0], rearHitch: [-3.7, 0.75, 0], rearDeck: [-0.9, top, 0], axleX: xs, wheelRadius: R, length: 7.6 };
  }
  return { body: asm.build('hull'), mounts };
}

function armoured(mission: MissionId): VehicleBuild {
  const asm = new Assembly();
  const spec = mission === 'COMBAT'
    ? { L: 7.4, xs: [2.55, 1.15, -0.85, -2.25], R: 0.56, top: 2.25, nose: 1.2 }
    : mission === 'RECCE'
      ? { L: 5.4, xs: [1.75, -1.55], R: 0.56, top: 2.3, nose: 0.9 }
      : { L: 6.6, xs: [2.3, 0.45, -1.85], R: 0.62, top: 2.95, nose: 1.0 };
  const back = -spec.L / 2, front = spec.L / 2, belly = mission === 'MINE' ? 1.15 : 0.75;
  // Two-tier hull: a narrow lower hull between the wheels and a wide, heavily chamfered upper hull
  // (sponsons) above them, with a sloped glacis.
  const deck = belly + 0.62;
  asm.add(profile([[back + 0.1, belly], [front - spec.nose, belly], [front - 0.1, deck], [back, deck]], 1.9, 0.06), 'paintDark');
  asm.add(profile([[back, deck], [front - 0.05, deck], [front - spec.nose * 0.45, spec.top - 0.25], [front - spec.nose * 1.15, spec.top], [back + 0.12, spec.top], [back - 0.04, spec.top - 0.3]], 2.72, 0.14), 'paint');
  // Glacis details placed on the sloped front plate (offset along its normal past the bevel).
  const gA: [number, number] = [front - 0.05, deck], gB: [number, number] = [front - spec.nose * 0.45, spec.top - 0.25];
  const gdx = gB[0] - gA[0], gdy = gB[1] - gA[1], glen = Math.hypot(gdx, gdy), gnx = gdy / glen, gny = -gdx / glen, gang = Math.atan2(gdy, gdx);
  const onGlacis = (t: number, z: number, lift: number): V3 => [gA[0] + gdx * t + gnx * (0.15 + lift), gA[1] + gdy * t + gny * (0.15 + lift), z];
  for (const t of [0.35, 0.7]) asm.add(rbox(0.012, glen * 0.02, 2.3, 0.004, 1), 'black', { p: onGlacis(t, 0, 0), r: [0, 0, gang - Math.PI / 2] });
  for (const z of [1.0, -1.0]) {
    const at = onGlacis(0.18, z, 0.05);
    asm.add(rbox(0.12, 0.26, 0.42, 0.03, 2), 'paintDark', { p: at, r: [0, 0, gang - Math.PI / 2] });
    lamp(asm, [at[0] + 0.06, at[1] + 0.03, z + 0.09], 0.07);
    lamp(asm, [at[0] + 0.06, at[1] + 0.03, z - 0.1], 0.04, 1, 'amber');
    for (const dz of [-0.2, 0, 0.2]) { const bar = between([at[0] + 0.16, at[1] - 0.12, z + dz], [at[0] + 0.16, at[1] + 0.16, z + dz], 0.012, 5); asm.add(bar.geometry, 'steel', bar.place); }
  }
  asm.add(rbox(0.1, 0.3, 0.5, 0.03, 2), 'gunmetal', { p: onGlacis(0.85, 0.55, 0.03), r: [0, 0, gang - Math.PI / 2] });
  for (const z of [0.45, 0.65]) asm.add(rbox(0.04, 0.12, 0.14, 0.01, 1), 'glass', { p: onGlacis(0.85, z, 0.09), r: [0, 0, gang - Math.PI / 2] });
  asm.add(profile([[front - spec.nose, belly], [front + 0.05, deck - 0.05], [front - 0.1, deck], [front - spec.nose - 0.1, belly + 0.1]], 1.8, 0.04), 'paint');
  if (mission === 'MINE') {
    // V-hull: two angled plates meeting under the crew cell.
    for (const side of [1, -1] as const) asm.add(rbox(spec.L * 0.78, 0.07, 0.95, 0.02, 1), 'paintDark', { p: [0, belly - 0.2, side * 0.42], r: [side * 0.55, 0, 0] });
    // Large armoured windscreen and side windows.
    for (const z of [0.55, -0.55]) asm.add(rbox(0.04, 0.6, 0.95, 0.02, 1), 'glass', { p: [front - spec.nose * 0.85, spec.top - 0.45, z], r: [0, 0, 0.55] });
    for (const side of [1, -1] as const) for (const x of [0.9, 0.0]) asm.add(rbox(0.55, 0.45, 0.04, 0.03, 1), 'glass', { p: [x, spec.top - 0.6, side * 1.26] });
  } else {
    // Vision blocks, crew hatches and periscopes.
    for (const z of [0.45, -0.45]) asm.add(rbox(0.04, 0.22, 0.45, 0.02, 1), 'glass', { p: [front - spec.nose * 0.78, spec.top - 0.3, z], r: [0, 0, 0.9] });
    for (const x of [front - spec.nose * 1.6, -0.6]) asm.add(cyl(0.32, 0.34, 0.08, 20), 'paintDark', { p: [x, spec.top + 0.04, mission === 'COMBAT' ? -0.55 : 0.4] });
    for (const z of [0.7, -0.7]) asm.add(rbox(0.12, 0.1, 0.18, 0.02, 1), 'glass', { p: [front - spec.nose * 1.3, spec.top + 0.06, z] });
  }
  // Fenders/sponsons, stowage bins, tools and lights.
  for (const side of [1, -1] as const) {
    asm.add(rbox(spec.L - 0.6, 0.06, 0.12, 0.02, 1), 'paintDark', { p: [-0.1, deck + 0.02, side * 1.36] });
    asm.add(rbox(1.4, 0.4, 0.26, 0.05, 2), 'paintLight', { p: [back + 1.2, spec.top - 0.42, side * 1.42] });
    bolts(asm, [back + 0.4, spec.top - 0.08, side * 1.26], [front - spec.nose * 1.3, spec.top - 0.08, side * 1.26], Math.round(spec.L * 2), 'z');
    const pick = between([back + 2.0, spec.top - 0.3, side * 1.27], [back + 3.2, spec.top - 0.3, side * 1.27], 0.025, 6);
    asm.add(pick.geometry, 'canvas', pick.place);
  }
  for (const z of [0.95, -0.95]) { lamp(asm, [front - 0.05, belly + 0.55, z], 0.1); lamp(asm, [back - 0.02, spec.top - 0.4, z], 0.05, -1, 'red'); }
  for (const z of [0.7, -0.7]) asm.add(hook(0.09), 'brass', { p: [front + 0.06, belly + 0.15, z], r: [Math.PI / 2, 0, 0] });
  asm.add(rbox(0.06, 0.55, 2.2, 0.03, 2), 'paintLight', { p: [front - spec.nose * 0.62, spec.top - 0.55, 0], r: [0, 0, -0.95] });
  for (const z of [1.1, -1.1]) { const rail = between([back + 0.3, spec.top + 0.08, z], [front - spec.nose * 1.3, spec.top + 0.08, z], 0.02, 6); asm.add(rail.geometry, 'steel', rail.place); }
  for (const side of [1, -1] as const) {
    for (let i = 0; i < 4; i++) asm.add(cyl(0.05, 0.05, 0.24, 10), 'gunmetal', { p: [front - spec.nose * 1.25, spec.top - 0.05 + (i % 2) * 0.08, side * (0.95 + (i >> 1) * 0.1)], r: [side * 0.5, 0, 0.6] });
    asm.add(tube([[back + 0.6, deck + 0.35, side * 1.37], [-0.3, deck + 0.42, side * 1.38], [front - spec.nose - 0.2, deck + 0.35, side * 1.37]], 0.022, 20), 'cable');
  }
  asm.add(rbox(0.8, 0.95, 0.03, 0.04, 2), 'paintLight', { p: [back + 2.4, (deck + spec.top) / 2, 1.37] });
  for (const y of [deck + 0.25, spec.top - 0.3]) asm.add(rbox(0.12, 0.08, 0.05, 0.02, 1), 'gunmetal', { p: [back + 2.0, y, 1.39] });
  for (let i = 0; i < 3; i++) asm.add(rbox(0.12, 0.42, 0.32, 0.03, 2), 'paintLight', { p: [back - 0.12, spec.top - 0.6, -0.9 + i * 0.36] });
  // Rear ramp outline and grab rails.
  asm.add(rbox(0.04, spec.top - belly - 0.4, 1.6, 0.03, 1), 'paintDark', { p: [back - 0.03, (spec.top + belly) / 2, 0] });
  // Exhaust louvres on the right side.
  for (let i = 0; i < 6; i++) asm.add(rbox(0.06, 0.32, 0.02, 0.01, 1), 'black', { p: [front - spec.nose - 0.4 - i * 0.12, spec.top - 0.6, -1.255] });
  axles(asm, spec.xs, spec.R, 0.46, 1.12);
  return {
    body: asm.build('hull'),
    mounts: {
      roof: [mission === 'COMBAT' ? -0.3 : -0.2, spec.top, 0], roofRear: [back + 0.5, spec.top, -0.85], mastFront: [front - spec.nose * 1.5, spec.top, 0.8],
      sideX: [back + 0.4, front - spec.nose], sideY: [deck + 0.1, spec.top - 0.25], halfWidth: 1.36,
      frontBumper: [front + 0.1, belly + 0.15, 0], rearHitch: [back - 0.1, belly + 0.05, 0], rearDeck: [back + 1.3, spec.top, 0],
      axleX: spec.xs, wheelRadius: spec.R, length: spec.L,
    },
  };
}

export function buildMission(mission: MissionId): VehicleBuild {
  return mission === 'TROOP' || mission === 'COMMAND' || mission === 'RECOVERY' ? truck(mission) : armoured(mission);
}
