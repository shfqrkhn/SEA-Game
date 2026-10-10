// Embedded photoreal renders (MPES §11): one inert JSON block written by the build, read once on demand.
import type { MissionId } from '../domain/data.ts';

export interface Render {
  readonly src: string;
  readonly kind: string;
  /** Camera distance of a build layer: the draw order, farthest first (MPES §10.2). */
  readonly depth?: number | null;
  readonly frame: { readonly width: number; readonly height: number };
  readonly offset: { readonly left: number; readonly top: number };
  readonly size: { readonly width: number; readonly height: number };
}

let table: ReadonlyMap<string, Render> | null = null;

export function renders(): ReadonlyMap<string, Render> {
  if (table) return table;
  const block = document.getElementById('sea-renders')?.textContent ?? '';
  let parsed: Record<string, Render> = {};
  try { parsed = block ? JSON.parse(block) as Record<string, Render> : {}; } catch { parsed = {}; }
  table = new Map(Object.entries(parsed));
  return table;
}

/** File-name stem of each mission's vehicle (MPES §11). */
export const VEHICLE: Readonly<Record<MissionId, string>> = {
  COMBAT: 'combat', RECCE: 'recce', TROOP: 'troop-carrier', COMMAND: 'command-post', RECOVERY: 'recovery', MINE: 'mine-clearing',
};

export function cardRender(cardId: string): Render | undefined {
  return renders().get(`card-${cardId}`);
}
