// Original illustrations (MPES §11, decision D-02): 70 cards, 6 vehicles and the practice card, drawn
// as inline SVG in one technical-drawing style. Parameters come from canonical card data, so each card
// is distinct and recognisable by category. Colours come from CSS classes (light/dark themes). MIT.
import { card as cardDef, type Category, type MissionId } from '../domain/data.ts';
import { svg } from './dom.ts';

type Node = SVGElement;
const W = 320, H = 180;

const rect = (x: number, y: number, w: number, h: number, cls: string, rx = 0): Node => svg('rect', { x, y, width: w, height: h, rx, class: cls });
const circle = (cx: number, cy: number, r: number, cls: string): Node => svg('circle', { cx, cy, r, class: cls });
const line = (x1: number, y1: number, x2: number, y2: number, cls = 'art-ink'): Node => svg('line', { x1, y1, x2, y2, class: cls });
const path = (d: string, cls: string): Node => svg('path', { d, class: cls });
const poly = (points: [number, number][], cls: string): Node => svg('polygon', { points: points.map(p => p.join(',')).join(' '), class: cls });
const group = (children: Node[], transform?: string): Node => {
  const g = svg('g', transform ? { transform } : {});
  for (const child of children) g.appendChild(child);
  return g;
};

function plate(accent: string, children: Node[], label: string): SVGSVGElement {
  const grid: Node[] = [];
  for (let x = 20; x < W; x += 20) grid.push(line(x, 8, x, H - 8, 'art-grid'));
  for (let y = 20; y < H; y += 20) grid.push(line(8, y, W - 8, y, 'art-grid'));
  const root = svg('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': label, class: 'card-art' },
    rect(0, 0, W, H, 'art-plate', 10),
    group(grid),
    rect(8, 8, W - 16, H - 16, 'art-frame', 6),
    rect(8, 8, 8, H - 16, `art-accent ${accent}`, 3),
  );
  root.appendChild(group(children));
  return root;
}

function wheel(cx: number, cy: number, r: number): Node {
  return group([circle(cx, cy, r, 'art-tyre'), circle(cx, cy, r * 0.55, 'art-metal'), circle(cx, cy, r * 0.18, 'art-ink-fill')]);
}

/** 0–20 from the card letter (A=0); gives each card its own variant within a category. */
const variant = (id: string): number => id.charCodeAt(id.length - 1) - 65;

// ---- Categories ----
function capacity(e: Record<string, number>, id: string): Node[] {
  const v = variant(id), seats = Math.max(2, e.CAP ?? 4), heavy = (e.MOB ?? 0) < 0, armoured = (e.PRO ?? 0) > 0;
  const length = Math.min(250, 110 + seats * 12 + (v === 1 ? 20 : 0)), x = (W - length) / 2, top = v === 3 ? 44 : heavy ? 58 : v === 6 ? 74 : 66;
  const parts: Node[] = [path(`M${x} 128 L${x} ${top + 12} Q${x} ${top} ${x + 14} ${top} L${x + length - 18} ${top} L${x + length} ${top + 22} L${x + length} 128 Z`, armoured ? 'art-fill-strong' : 'art-fill')];
  for (let i = 0; i < seats; i++) {
    const sx = x + 16 + i * ((length - 34) / seats);
    parts.push(rect(sx, top + 14, Math.max(8, (length - 34) / seats - 5), 18, 'art-window', 2));
    parts.push(circle(sx + 6, top + 46, 5, 'art-person'), rect(sx + 1, top + 52, 10, 14, 'art-person', 3));
  }
  parts.push(line(x, 128, x + length, 128), wheel(x + 26, 132, 13), wheel(x + length - 26, 132, 13));
  if (v === 0) for (let i = 1; i < 3; i++) parts.push(line(x + (length * i) / 3, top + 2, x + (length * i) / 3, 126, 'art-ink'));
  if (v === 1) parts.push(wheel(x + length / 2, 132, 13));
  if (v === 3) parts.push(line(x + 4, top + 40, x + length - 4, top + 40, 'art-ink'));
  if (v === 4) parts.push(rect(x + 8, top + 8, length - 16, 4, 'art-accent cat-CAPACITY', 2));
  if (armoured) parts.push(rect(x + 10, 112, length - 20, 12, 'art-metal', 2));
  if (heavy) parts.push(path(`M${x + length / 2 - 10} 150 l10 10 l10 -10`, 'art-penalty-stroke'));
  return parts;
}

function mobility(e: Record<string, number>, id: string): Node[] {
  const speed = Math.round((e.MOB ?? 50) / 15), parts: Node[] = [];
  parts.push(rect(70, 70, 120, 46, 'art-fill-strong', 6));
  for (let i = 0; i < 4; i++) parts.push(rect(82 + i * 26, 60, 16, 10, 'art-metal', 2));
  parts.push(circle(214, 93, 18, 'art-metal'), circle(214, 93, 8, 'art-ink-fill'));
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    parts.push(line(214 + Math.cos(a) * 10, 93 + Math.sin(a) * 10, 214 + Math.cos(a) * 18, 93 + Math.sin(a) * 18));
  }
  parts.push(wheel(96, 136, 15), wheel(160, 136, 15), wheel(224, 136, 15));
  if (id === 'MOB-D' || (e.PRO ?? 0) > 0) for (const cx of [96, 160, 224]) parts.push(path(`M${cx - 6} 118 l6 -4 l6 4 l-6 4 l6 4 l-6 4`, 'art-ink'));
  const v = variant(id);
  if (v === 0) parts.push(path('M190 70 l0 -18 l12 0', 'art-ink'), circle(202, 50, 4, 'art-metal'));
  if (v === 2) for (const cx of [96, 160, 224]) for (let s = 0; s < 6; s++) { const ang = s * Math.PI / 3; parts.push(line(cx, 136, cx + Math.cos(ang) * 8, 136 + Math.sin(ang) * 8)); }
  if (v === 4) parts.push(rect(70, 46, 60, 14, 'art-accent cat-MOBILITY', 7), rect(134, 46, 40, 14, 'art-accent cat-MOBILITY', 7));
  if (v === 5) parts.push(rect(120, 74, 40, 12, 'art-accent cat-MOBILITY', 3));
  if (v === 6) parts.push(path('M80 150 L240 150 Q252 136 240 122 L80 122 Q68 136 80 150 Z', 'art-chain'));
  for (let i = 0; i < Math.min(speed, 7); i++) parts.push(line(30, 76 + i * 8, 58 - (i % 2) * 10, 76 + i * 8, 'art-motion'));
  return parts;
}

function firepower(e: Record<string, number>, id: string): Node[] {
  const length = 30 + (e.FP ?? 2) * 11, v = variant(id), parts: Node[] = [];
  parts.push(rect(70, 110, 180, 30, 'art-fill', 4), path('M110 110 L130 78 L200 78 L216 110 Z', 'art-fill-strong'));
  const barrels = id === 'FP-G' ? [86, 96] : [92];
  for (const y of barrels) parts.push(rect(200, y - 3, length, 6, 'art-metal', 3));
  if (v === 1 || v === 5) parts.push(rect(200 + length - 14, 88, 14, 10, 'art-metal', 2));
  if (v === 5) parts.push(path('M130 110 l-14 12 M200 110 l14 12', 'art-ink'));
  if (v === 4) parts.push(path('M120 110 L136 88 L180 88 L190 110 Z', 'art-fill'));
  if (id === 'FP-D' || (e.SA ?? 0) > 0) parts.push(rect(140, 60, 22, 16, 'art-accent cat-SA', 3), circle(151, 68, 4, 'art-ink-fill'));
  if ((e.MOB ?? 0) < 0 || (e.PRO ?? 0) < 0) parts.push(path('M150 150 l10 10 l10 -10', 'art-penalty-stroke'));
  return parts;
}

function protection(e: Record<string, number>, id: string): Node[] {
  const layers = Math.max(2, e.PRO ?? 3), parts: Node[] = [];
  if (id === 'PRO-F') {
    parts.push(path('M80 70 L240 70 L240 100 L160 140 L80 100 Z', 'art-fill-strong'));
    for (let i = 1; i < layers; i++) parts.push(path(`M${80 + i * 6} ${70 + i * 6} L${240 - i * 6} ${70 + i * 6}`, 'art-ink'));
  } else {
    for (let i = 0; i < layers; i++) parts.push(rect(90 + i * 8, 52 + i * 12, 130, 70, i === layers - 1 ? 'art-fill-strong' : 'art-fill', 5));
    for (let i = 0; i < 6; i++) parts.push(circle(100 + layers * 8 + i * 20, 62 + layers * 12, 2.5, 'art-ink-fill'));
  }
  const v = variant(id);
  if (v === 1) for (let i = 0; i < 4; i++) parts.push(poly([[130 + i * 18, 90], [138 + i * 18, 84], [146 + i * 18, 90], [138 + i * 18, 96]], 'art-metal'));
  if (v === 4) parts.push(rect(70, 128, 180, 10, 'art-accent cat-PROTECTION', 3));
  if (v === 6) parts.push(path('M96 54 Q160 30 224 54', 'art-ink'));
  if (id === 'PRO-D' || (e.CAP ?? 0) > 0) parts.push(circle(160, 100, 7, 'art-person'), rect(152, 108, 16, 18, 'art-person', 4));
  if ((e.MOB ?? 0) < 0) parts.push(path('M260 130 l10 10 l10 -10', 'art-penalty-stroke'));
  return parts;
}

function comms(e: Record<string, number>, id: string): Node[] {
  const arcs = Math.round((e.COM ?? 50) / 25), parts: Node[] = [];
  const masts = id === 'COM-D' ? [120, 200] : [160];
  parts.push(rect(90, 128, 140, 16, 'art-fill', 4));
  for (const x of masts) {
    const top = id === 'COM-C' ? 92 : 70;
    parts.push(rect(x - 3, top + 4, 6, 128 - top - 4, 'art-metal'), circle(x, top, 6, 'art-accent cat-COMMS'));
    for (let i = 1; i <= Math.min(arcs, 4); i++) {
      const r = 8 + i * 9;
      parts.push(path(`M${x - r} ${top - r * 0.15} A${r} ${r} 0 0 1 ${x + r} ${top - r * 0.15}`, 'art-wave'));
    }
  }
  parts.push(rect(110, 104, 36, 22, 'art-fill-strong', 3), line(116, 112, 140, 112), line(116, 118, 134, 118));
  if ((e.SA ?? 0) > 0) parts.push(circle(250, 112, 8, 'art-accent cat-SA'));
  if (id === 'COM-F') parts.push(rect(206, 100, 22, 18, 'art-fill-strong', 3), path('M210 100 l0 -6 a7 7 0 0 1 14 0 l0 6', 'art-ink'));
  if (id === 'COM-G') parts.push(rect(196, 96, 3, 32, 'art-metal'), rect(206, 104, 3, 24, 'art-metal'));
  if (id === 'COM-E') parts.push(rect(176, 112, 40, 14, 'art-accent cat-COMMS', 3));
  return parts;
}

function awareness(e: Record<string, number>, id: string): Node[] {
  const rays = (e.SA ?? 1) * 2, tall = id === 'SA-D', parts: Node[] = [];
  const top = tall ? 36 : 62;
  parts.push(rect(110, 128, 100, 16, 'art-fill', 4), rect(156, top + 22, 8, 128 - top - 22, 'art-metal'));
  parts.push(rect(138, top, 44, 26, 'art-fill-strong', 6), circle(160, top + 13, 8, 'art-lens'), circle(160, top + 13, 3, 'art-ink-fill'));
  for (let i = 0; i < Math.min(rays, 8); i++) {
    const a = -Math.PI / 2 + (i - (rays - 1) / 2) * 0.28;
    const reach = Math.min(70, top);
    parts.push(line(160 + Math.cos(a) * 26, top + 13 + Math.sin(a) * 26, 160 + Math.cos(a) * reach, top + 13 + Math.sin(a) * reach, 'art-ray'));
  }
  if (id === 'SA-E') parts.push(path('M130 46 q30 -14 60 0', 'art-ink'));
  if (id === 'SA-C') parts.push(rect(150, 128, 20, 6, 'art-accent cat-SA', 2));
  if (id === 'SA-F') parts.push(rect(186, 78, 20, 14, 'art-fill-strong', 3), circle(196, 85, 3, 'art-ink-fill'));
  if (id === 'SA-G') for (const x of [100, 220]) parts.push(circle(x, 120, 7, 'art-lens'));
  if ((e.COM ?? 0) > 0) parts.push(path('M214 70 A16 16 0 0 1 230 86', 'art-wave'));
  if ((e.MOB ?? 0) < 0) parts.push(path('M240 140 l10 10 l10 -10', 'art-penalty-stroke'));
  return parts;
}

function accessory(id: string): Node[] {
  switch (id) {
    case 'ACC-A': return [rect(90, 96, 90, 40, 'art-fill', 4), path('M210 50 L210 110 Q210 130 194 130 Q178 130 178 116', 'art-chain'), path('M200 48 l10 -10 l10 10', 'art-ink')];
    case 'ACC-B': return [rect(110, 76, 130, 50, 'art-fill-strong', 4), line(60, 110, 110, 110), wheel(150, 134, 14), wheel(200, 134, 14), circle(60, 110, 5, 'art-ink-fill')];
    case 'ACC-C': return [rect(120, 70, 90, 40, 'art-fill', 4), line(120, 110, 80, 132), rect(40, 126, 90, 20, 'art-metal', 10), ...[0, 1, 2, 3].map(i => circle(52 + i * 22, 136, 7, 'art-tyre'))];
    case 'ACC-D': return [rect(90, 84, 70, 50, 'art-fill-strong', 3), rect(170, 96, 60, 38, 'art-fill', 3), path('M110 84 l0 -14 l30 0 l0 14', 'art-ink'), path('M186 118 l16 -16 l6 6 l-16 16 z', 'art-metal')];
    case 'ACC-E': return [rect(150, 70, 90, 50, 'art-fill-strong', 4), path('M150 128 L80 128 L66 104 L150 104', 'art-metal'), ...[0, 1, 2].map(i => line(70 + i * 10, 130, 66 + i * 10, 146))];
    case 'ACC-F': return [rect(100, 84, 70, 44, 'art-fill', 4), circle(200, 106, 22, 'art-metal'), circle(200, 106, 10, 'art-ink-fill'), path('M222 106 L270 106 L270 126', 'art-chain'), path('M262 126 l8 10 l8 -10', 'art-ink')];
    default: return [rect(100, 50, 120, 90, 'art-fill', 4), ...[0, 1, 2].map(i => rect(108, 62 + i * 26, 104, 4, 'art-metal')), rect(116, 70, 24, 14, 'art-accent cat-ACCESSORIES', 2), circle(186, 100, 7, 'art-lens')];
  }
}

const SE_ICONS: Record<string, () => Node[]> = {
  checklist: () => [rect(120, 40, 80, 104, 'art-fill', 5), rect(144, 34, 32, 12, 'art-metal', 3), ...[0, 1, 2, 3].map(i => group([path(`M132 ${66 + i * 18} l5 5 l9 -10`, 'art-tick'), line(152, 66 + i * 18, 188, 66 + i * 18)]))],
  risk: () => [poly([[160, 40], [216, 136], [104, 136]], 'art-fill-strong'), rect(156, 72, 8, 36, 'art-ink-fill', 2), circle(160, 120, 5, 'art-ink-fill')],
  riskDown: () => [poly([[140, 44], [190, 130], [90, 130]], 'art-fill'), path('M230 60 L230 120 M216 104 L230 122 L244 104', 'art-tick')],
  interface: () => [rect(70, 70, 60, 40, 'art-fill', 4), rect(190, 70, 60, 40, 'art-fill-strong', 4), line(130, 90, 190, 90), circle(130, 90, 5, 'art-ink-fill'), circle(190, 90, 5, 'art-ink-fill')],
  plan: () => [line(80, 140, 250, 140), line(80, 40, 80, 140), ...[0, 1, 2, 3].map(i => rect(90 + i * 30, 52 + i * 22, 70, 12, i % 2 ? 'art-fill-strong' : 'art-accent cat-SE_PROCESS', 3))],
  gear: () => [circle(160, 90, 34, 'art-metal'), circle(160, 90, 14, 'art-plate'), ...[0, 1, 2, 3, 4, 5, 6, 7].map(i => { const a = i * Math.PI / 4; return rect(160 + Math.cos(a) * 38 - 6, 90 + Math.sin(a) * 38 - 6, 12, 12, 'art-metal', 2); })],
  scales: () => [line(160, 44, 160, 136), line(110, 60, 210, 60), path('M90 100 L110 60 L130 100 Z', 'art-fill'), path('M190 100 L210 60 L230 100 Z', 'art-fill-strong'), rect(130, 136, 60, 8, 'art-metal', 3)],
  target: () => [circle(160, 90, 48, 'art-fill'), circle(160, 90, 32, 'art-plate'), circle(160, 90, 16, 'art-accent cat-SE_PROCESS'), line(210, 40, 166, 84, 'art-tick')],
  blocks: () => [rect(130, 40, 60, 28, 'art-fill-strong', 3), rect(70, 110, 60, 28, 'art-fill', 3), rect(190, 110, 60, 28, 'art-fill', 3), path('M160 68 L160 90 L100 90 L100 110 M160 90 L220 90 L220 110', 'art-ink')],
  trace: () => [...[[90, 60], [160, 100], [230, 60], [230, 130]].map(([x, y]) => circle(x!, y!, 12, 'art-fill-strong')), path('M100 66 L150 94 M170 94 L220 66 M170 106 L220 126', 'art-ink')],
  puzzle: () => [rect(90, 60, 70, 60, 'art-fill', 4), rect(160, 60, 70, 60, 'art-fill-strong', 4), circle(160, 90, 12, 'art-fill')],
  gauge: () => [path('M90 120 A70 70 0 0 1 230 120', 'art-wave'), line(160, 120, 200, 76, 'art-tick'), circle(160, 120, 8, 'art-ink-fill'), rect(100, 128, 120, 12, 'art-metal', 3)],
  ruler: () => [path('M90 140 L160 40 L230 140', 'art-ink'), circle(160, 40, 8, 'art-metal'), rect(80, 132, 160, 14, 'art-fill', 2), ...[0, 1, 2, 3, 4, 5, 6].map(i => line(90 + i * 22, 132, 90 + i * 22, 140))],
  factory: () => [path('M70 140 L70 90 L110 70 L110 90 L150 70 L150 90 L190 70 L190 140 Z', 'art-fill'), rect(200, 50, 16, 90, 'art-metal'), poly([[240, 80], [264, 124], [216, 124]], 'art-fill-strong')],
  magnifier: () => [circle(140, 80, 34, 'art-lens'), circle(140, 80, 24, 'art-plate'), line(164, 104, 212, 148, 'art-thick')],
  cycle: () => [path('M110 90 A50 50 0 0 1 200 60', 'art-wave'), path('M210 90 A50 50 0 0 1 120 120', 'art-wave'), path('M190 50 L202 60 L188 70', 'art-tick'), path('M130 130 L118 120 L132 110', 'art-tick')],
  person: () => [circle(160, 58, 18, 'art-person'), path('M126 140 Q126 88 160 86 Q194 88 194 140 Z', 'art-person'), rect(208, 70, 40, 56, 'art-fill', 4), line(216, 86, 240, 86), line(216, 98, 240, 98)],
  wrench: () => [path('M100 140 L180 60', 'art-thick'), circle(190, 50, 20, 'art-metal'), circle(190, 50, 8, 'art-plate'), rect(84, 132, 24, 16, 'art-fill-strong', 3)],
  pin: () => [rect(70, 50, 180, 96, 'art-fill', 4), path('M70 110 L120 80 L170 110 L250 70', 'art-ink'), path('M200 92 Q200 64 220 64 Q240 64 240 92 Q240 106 220 124 Q200 106 200 92 Z', 'art-accent cat-SE_PROCESS'), circle(220, 88, 6, 'art-plate')],
  book: () => [path('M160 52 L100 44 L100 136 L160 144 Z', 'art-fill'), path('M160 52 L220 44 L220 136 L160 144 Z', 'art-fill-strong'), line(112, 70, 148, 74), line(112, 86, 148, 90), line(172, 74, 208, 70)],
  stamp: () => [circle(160, 86, 44, 'art-accent cat-SE_PROCESS'), circle(160, 86, 34, 'art-plate'), path('M140 86 l14 14 l26 -28', 'art-tick'), rect(130, 134, 60, 10, 'art-metal', 3)],
};
const SE_ICON_OF: Record<string, keyof typeof SE_ICONS> = {
  'SE-A': 'checklist', 'SE-B': 'risk', 'SE-C': 'interface', 'SE-D': 'plan', 'SE-E': 'gear', 'SE-F': 'scales', 'SE-G': 'target',
  'SE-H': 'blocks', 'SE-I': 'riskDown', 'SE-J': 'trace', 'SE-K': 'puzzle', 'SE-L': 'gauge', 'SE-M': 'ruler', 'SE-N': 'factory',
  'SE-O': 'magnifier', 'SE-P': 'cycle', 'SE-Q': 'person', 'SE-R': 'wrench', 'SE-S': 'pin', 'SE-T': 'book', 'SE-U': 'stamp',
};

export function cardArt(id: string, category: Category | 'PRACTICE', label: string): SVGSVGElement {
  if (category === 'PRACTICE') {
    return plate('cat-PRACTICE', [rect(110, 56, 100, 80, 'art-fill', 6), path('M110 76 L210 76 M160 56 L160 136', 'art-ink'), rect(140, 86, 40, 30, 'art-accent cat-PRACTICE', 4)], label);
  }
  const effects = (cardDef(id)?.effects ?? {}) as Record<string, number>;
  const body = ((): Node[] => {
    switch (category) {
      case 'CAPACITY': return capacity(effects, id);
      case 'MOBILITY': return mobility(effects, id);
      case 'FIREPOWER': return firepower(effects, id);
      case 'PROTECTION': return protection(effects, id);
      case 'COMMS': return comms(effects, id);
      case 'SA': return awareness(effects, id);
      case 'ACCESSORIES': return accessory(id);
      case 'SE_PROCESS': return SE_ICONS[SE_ICON_OF[id] ?? 'checklist']!();
    }
  })();
  return plate(`cat-${category}`, body, label);
}

/** Mission vehicles in side view (MPES §11). */
export function vehicleArt(mission: MissionId, label: string): SVGSVGElement {
  const hull = (length: number, height: number): Node[] => {
    const x = (W - length) / 2;
    return [path(`M${x} 126 L${x} ${126 - height + 10} L${x + 18} ${126 - height} L${x + length - 24} ${126 - height} L${x + length} ${126 - height + 20} L${x + length} 126 Z`, 'art-fill-strong')];
  };
  const wheels = (xs: number[]) => xs.map(x => wheel(x, 132, 14));
  const parts: Node[] = [];
  switch (mission) {
    case 'COMBAT': parts.push(...hull(190, 46), path('M120 80 L136 62 L196 62 L208 80 Z', 'art-fill'), rect(204, 66, 70, 6, 'art-metal', 3), ...wheels([90, 130, 190, 230])); break;
    case 'RECCE': parts.push(...hull(150, 40), rect(150, 40, 6, 46, 'art-metal'), rect(140, 32, 26, 14, 'art-lens', 4), ...wheels([110, 210])); break;
    case 'TROOP': parts.push(...hull(220, 56), ...[0, 1, 2, 3, 4].map(i => rect(70 + i * 34, 82, 22, 14, 'art-window', 2)), ...wheels([76, 118, 202, 244])); break;
    case 'COMMAND': parts.push(...hull(200, 62), rect(96, 58, 90, 22, 'art-fill', 3), ...[110, 150, 190].map(x => rect(x, 26, 3, 34, 'art-metal')), ...wheels([90, 140, 190, 230])); break;
    case 'RECOVERY': parts.push(...hull(200, 48), path('M200 78 L250 34', 'art-thick'), path('M250 34 L250 70', 'art-chain'), path('M244 70 l6 8 l6 -8', 'art-ink'), ...wheels([86, 126, 196, 236])); break;
    case 'MINE': parts.push(...hull(180, 50), path('M70 126 L44 126 L34 98 L70 98', 'art-metal'), ...[0, 1, 2].map(i => line(38 + i * 8, 128, 34 + i * 8, 146)), ...wheels([100, 150, 200, 240])); break;
  }
  parts.push(line(20, 146, 300, 146, 'art-ground'));
  return plate(`mission-${mission}`, parts, label);
}
