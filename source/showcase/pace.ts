/** Fastest the showcase draws: 30 fps is smooth for a slow turn and halves the GPU work of 60 fps. */
export const FRAME_MS = 1000 / 30;
/** Slowest it draws while turning, so even a struggling machine shows movement. */
const CEILING_MS = 1000;
/** Animation frames arrive with a little jitter; a frame this close to due counts as due. */
const SLACK_MS = 2;
/** Draws behind `floor`: enough that one quiet frame among them shows what drawing alone costs. */
const RECENT = 8;

/** Render resolution tiers, as a share of the full pixel ratio (MPES §10.3 adaptive tiers): full, then two steps down. */
export const SCALES = [1, 0.75, 0.5] as const;

/**
 * The tier to draw at next: one step down when even the cheapest recent draw could not hold 30 fps (`floor` above
 * FRAME_MS), else unchanged. Never up within a session, so the picture cannot flicker between sizes; a hardware GPU
 * stays at full resolution, a slow or software one drops until a draw fits (G3: a software renderer took about 60 ms
 * a draw, so each purchase waited on two of them).
 */
export function nextTier(tier: number, floor: number): number {
  return floor > FRAME_MS && tier < SCALES.length - 1 ? tier + 1 : tier;
}

/**
 * Decides which animation frames draw (MPES §10.3). A drawn frame is timed by the gap to the next animation
 * frame, which includes the GPU work the browser waited for; the next draw then waits at least twice that,
 * so the showcase never takes more than half the machine, however slow the graphics.
 */
export class FramePacer {
  #interval = FRAME_MS;
  #last = -Infinity;
  #drewAt = Number.NaN;
  #cost = 0;
  #recent: number[] = [];

  /** Milliseconds the pacer currently waits between draws. */
  get interval(): number { return this.#interval; }

  /** The cheapest of the last few draws (page work only ever adds to a sample); NaN until there are enough. */
  get floor(): number { return this.#recent.length < RECENT ? Number.NaN : Math.min(...this.#recent); }

  /** Starts `floor` afresh, after the drawing itself changed (a new tier). */
  forget(): void { this.#recent = []; }

  /** Call on every animation frame; true when this frame may draw. */
  due(now: number): boolean {
    if (!Number.isNaN(this.#drewAt)) {
      const sample = now - this.#drewAt;
      this.#cost = this.#cost ? this.#cost * 0.6 + sample * 0.4 : sample;
      this.#recent.push(sample);
      if (this.#recent.length > RECENT) this.#recent.shift();
      this.#interval = Math.min(CEILING_MS, Math.max(FRAME_MS, 2 * this.#cost));
      this.#drewAt = Number.NaN;
    }
    return now - this.#last >= this.#interval - SLACK_MS;
  }

  /** Call after drawing in the frame stamped `now`. */
  drew(now: number): void {
    this.#last = now;
    this.#drewAt = now;
  }

  /** Call when the animation stops, so the idle gap is not mistaken for drawing time. */
  pause(): void { this.#drewAt = Number.NaN; }
}
