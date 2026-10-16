// Framing and zoom for the 3D showcase (MPES §10.2): the camera stands far enough back that the vehicle as fitted, however
// fully kitted out, stays in view at every turn, at whatever height the player drags to; the player zooms in and out
// from there in steps, within limits.
import { type Box3, PerspectiveCamera, Vector3 } from 'three';

/** The fitted kit reaches at most this far from the frame centre (1 = the frame edge). */
export const FIT_MARGIN = 0.92;
/** One zoom press moves the camera by this factor; the limits are multiples of the fitted distance. */
export const ZOOM_STEP = 1.25;
export const ZOOM_IN_LIMIT = 0.4;
export const ZOOM_OUT_LIMIT = 1.6;
/** Turns sampled when fitting: every 7.5 degrees. */
const AZIMUTHS = 48;

/** Unit vector from the target to the camera at this polar angle (from straight up) and azimuth. */
export function viewDirection(polar: number, azimuth: number): Vector3 {
  return new Vector3().setFromSphericalCoords(1, polar, azimuth);
}

function corners(box: Box3): Vector3[] {
  const { min, max } = box;
  return [0, 1, 2, 3, 4, 5, 6, 7].map(i => new Vector3(i & 1 ? max.x : min.x, i & 2 ? max.y : min.y, i & 4 ? max.z : min.z));
}

const camera = new PerspectiveCamera();
const point = new Vector3();
const UP = new Vector3(0, 1, 0), across = new Vector3(), upward = new Vector3(), aim = new Vector3();

/** How far the box's farthest corner projects from the frame centre, seen from `distance` along `direction`. */
export function extentAt(box: Box3, target: Vector3, direction: Vector3, distance: number, fov: number, aspect: number, points = corners(box)): number {
  camera.fov = fov;
  camera.aspect = aspect;
  camera.near = 0.01;
  camera.far = distance * 10 + 100;
  camera.updateProjectionMatrix();
  camera.position.copy(direction).multiplyScalar(distance).add(target);
  camera.lookAt(target);
  camera.updateMatrixWorld();
  let extent = 0;
  for (const corner of points) {
    point.copy(corner).project(camera);
    // A corner behind the camera has no meaningful projection: treat it as out of frame.
    extent = Math.max(extent, point.z > 1 ? Infinity : Math.abs(point.x), Math.abs(point.y));
  }
  return extent;
}

/**
 * The least camera distance from `target` at which every corner of `box` lies within FIT_MARGIN of the frame centre,
 * at every sampled turn and at each polar angle given (the default view and the drag limits).
 */
export function fitDistance(box: Box3, target: Vector3, polars: readonly number[], fov: number, aspect: number, margin = FIT_MARGIN): number {
  const points = corners(box).map(p => p.sub(target));
  const radius = Math.max(...points.map(p => p.length()), 1e-3);
  // Solved per view, not searched: with the camera at `s` along `place` and aiming along `aim`, a corner's offset across
  // the view and its depth are both linear in `s`, so each side of the frame bounds `s` from below directly.
  const slopeY = Math.tan((fov * Math.PI) / 360) * margin, slopeX = slopeY * aspect;
  let distance = radius * 1.01;
  for (const polar of polars) for (let i = 0; i < AZIMUTHS; i++) {
    const place = viewDirection(polar, (i / AZIMUTHS) * Math.PI * 2);
    // The camera's axes as lookAt builds them (up is +Y). Straight up or down three.js nudges the aim, not the place.
    aim.copy(place);
    if (across.crossVectors(UP, aim).lengthSq() === 0) { aim.z += 0.0001; aim.normalize(); across.crossVectors(UP, aim); }
    across.normalize();
    upward.crossVectors(aim, across);
    const depthRate = place.dot(aim);
    for (const [axis, slope] of [[across, slopeX], [upward, slopeY]] as const) {
      const drift = place.dot(axis);
      for (const p of points) {
        const offset = p.dot(axis), depth = p.dot(aim);
        // |offset - s drift| <= slope (s depthRate - depth), on both sides.
        distance = Math.max(distance, (offset + slope * depth) / (slope * depthRate + drift), (slope * depth - offset) / (slope * depthRate - drift));
      }
    }
  }
  return distance;
}

/** Fitted distances at evenly spaced heights between the drag limits: lower views need the camera less far back. */
export interface FitTable { readonly polars: readonly number[]; readonly distances: readonly number[] }

export function fitTable(box: Box3, target: Vector3, polarMin: number, polarMax: number, fov: number, aspect: number, steps = 8): FitTable {
  const polars = Array.from({ length: steps + 1 }, (_, i) => polarMin + ((polarMax - polarMin) * i) / steps);
  return { polars, distances: polars.map(polar => fitDistance(box, target, [polar], fov, aspect)) };
}

/** The fitted distance at any height between the table's, by linear interpolation (FIT_MARGIN absorbs the error). */
export function distanceAt(table: FitTable, polar: number): number {
  const { polars, distances } = table, last = polars.length - 1;
  if (polar <= polars[0]!) return distances[0]!;
  if (polar >= polars[last]!) return distances[last]!;
  const i = Math.min(last - 1, Math.floor(((polar - polars[0]!) / (polars[last]! - polars[0]!)) * last));
  const f = (polar - polars[i]!) / (polars[i + 1]! - polars[i]!);
  return distances[i]! + (distances[i + 1]! - distances[i]!) * f;
}

/** The zoom (a multiple of the fitted distance) after one press: `+1` zooms in, `-1` out. */
export function zoomed(zoom: number, press: 1 | -1): number {
  const next = press > 0 ? zoom / ZOOM_STEP : zoom * ZOOM_STEP;
  return Math.min(ZOOM_OUT_LIMIT, Math.max(ZOOM_IN_LIMIT, next));
}
