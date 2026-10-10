// Card illustrations (MPES §11). Placeholder until M5 replaces it with the full original art set:
// a category-coloured plate with the card ID, built as inline SVG (no images, no network).
import type { Category } from '../domain/data.ts';
import { svg } from './dom.ts';

const HUE: Record<Category | 'PRACTICE', number> = {
  CAPACITY: 28, MOBILITY: 200, FIREPOWER: 2, PROTECTION: 150, COMMS: 260, SA: 45, ACCESSORIES: 320, SE_PROCESS: 90, PRACTICE: 0,
};

export function cardArt(id: string, category: Category | 'PRACTICE', label: string): SVGSVGElement {
  const hue = HUE[category];
  const root = svg('svg', { viewBox: '0 0 320 180', role: 'img', 'aria-label': label, class: 'card-art' },
    svg('rect', { x: 0, y: 0, width: 320, height: 180, rx: 10, fill: `hsl(${hue} 30% 88%)` }),
    svg('rect', { x: 12, y: 12, width: 296, height: 156, rx: 6, fill: 'none', stroke: `hsl(${hue} 35% 35%)`, 'stroke-width': 2 }),
  );
  const text = svg('text', { x: 160, y: 100, 'text-anchor': 'middle', 'font-size': 34, 'font-family': 'ui-monospace, monospace', fill: `hsl(${hue} 40% 22%)` });
  text.textContent = id;
  root.appendChild(text);
  return root;
}
