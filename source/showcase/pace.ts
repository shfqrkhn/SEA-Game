/** Fastest the showcase draws: 30 fps is smooth for a slow turn and halves the GPU work of 60 fps. */
export const FRAME_MS = 1000 / 30;
/** Slowest it draws while turning, so even a struggling machine shows movement. */
const CEILING_MS = 1000;
/** Animation frames arrive with a little jitter; a frame this close to due counts as due. */
const SLACK_MS = 2;

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

  /** Milliseconds the pacer currently waits between draws. */
  get interval(): number { return this.#interval; }

  /** Call on every animation frame; true when this frame may draw. */
  due(now: number): boolean {
    if (!Number.isNaN(this.#drewAt)) {
      const sample = now - this.#drewAt;
      this.#cost = this.#cost ? this.#cost * 0.6 + sample * 0.4 : sample;
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
