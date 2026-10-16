/** Fastest the showcase draws: 30 fps is smooth for a slow turn and halves the GPU work of 60 fps. */
export const FRAME_MS = 1000 / 30;
/** Slowest it draws while turning, so even a struggling machine shows movement. */
const CEILING_MS = 1000;
/** Animation frames arrive with a little jitter; a frame this close to due counts as due. */
const SLACK_MS = 2;
/** Draws behind `floor`: enough that one quiet frame among them shows what drawing alone costs. */
const RECENT = 8;

/** Paced draws wait this long after the player's input elsewhere on the page, so the answer to it draws first. */
export const INPUT_HOLD_MS = 1000;

/**
 * Drawing quality tiers (MPES §10.3 adaptive tiers), dearest first: the share of the full pixel ratio, and the
 * multisampling of edges. Multisampling goes before the last step of resolution: on a software renderer it made a
 * draw 3.6 times dearer, where halving the resolution saved less (G3 draw-cost probe).
 */
export const TIERS: readonly { scale: number; samples: number }[] = [
  { scale: 1, samples: 4 },
  { scale: 0.75, samples: 4 },
  { scale: 0.75, samples: 0 },
  { scale: 0.5, samples: 0 },
];

/**
 * The tier to draw at next: one step down when even the cheapest recent draw could not hold 30 fps (`floor` above
 * FRAME_MS), else unchanged. Never up within a session, so the picture cannot flicker between sizes; a hardware GPU
 * stays at full quality, a slow or software one drops until a draw fits (G3: a software renderer took about 60 ms
 * a draw, so each purchase waited on two of them).
 */
export function nextTier(tier: number, floor: number): number {
  return floor > FRAME_MS && tier < TIERS.length - 1 ? tier + 1 : tier;
}

/**
 * The tier to start at, from single timed draws (`measure` draws once at a tier and returns how long the renderer took,
 * in ms): the first that fits a 30 fps frame, else the cheapest. Before the stage is shown, so a slow machine does not
 * begin at full quality and spend seconds of turning stepping down. A tier that differs only in resolution is skipped
 * when its share of pixels could not bring the last cost within the frame even if a draw cost nothing else.
 */
export function startTier(measure: (tier: number) => number, budget = FRAME_MS): number {
  let last: { tier: number; cost: number } | null = null;
  for (let tier = 0; tier < TIERS.length; tier++) {
    if (last) {
      const [was, now] = [TIERS[last.tier]!, TIERS[tier]!];
      if (was.samples === now.samples && last.cost * (now.scale / was.scale) ** 2 > budget && tier < TIERS.length - 1) continue;
    }
    const cost = measure(tier);
    if (cost <= budget) return tier;
    last = { tier, cost };
  }
  return TIERS.length - 1;
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
  #held = -Infinity;

  /** Milliseconds the pacer currently waits between draws. */
  get interval(): number { return this.#interval; }

  /** The cheapest of the last few draws (page work only ever adds to a sample); NaN until there are enough. */
  get floor(): number { return this.#recent.length < RECENT ? Number.NaN : Math.min(...this.#recent); }

  /** No paced draw before `until` (the player's input comes first); urgent draws are the caller's and still go. */
  hold(until: number): void { this.#held = Math.max(this.#held, until); }

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
    return now >= this.#held && now - this.#last >= this.#interval - SLACK_MS;
  }

  /** Call after drawing in the frame stamped `now`. */
  drew(now: number): void {
    this.#last = now;
    this.#drewAt = now;
  }

  /** Call when the animation stops, so the idle gap is not mistaken for drawing time. */
  pause(): void { this.#drewAt = Number.NaN; }
}
