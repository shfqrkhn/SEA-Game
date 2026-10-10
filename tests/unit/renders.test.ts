// MPES §10.2, §11: every one of the 77 subjects has its committed renders, every build layer is mapped with a
// draw order and a slot, nothing is orphaned, hashes match and the imagery fits its budget.
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { RENDERS_DIR } from '../../build/render.ts';
import { VEHICLE } from '../../source/showcase/renders.ts';

interface Entry {
  readonly file: string; readonly id: string; readonly kind: string; readonly depth: number | null; readonly slot?: string;
  readonly bytes: number; readonly sha256: string;
  readonly frame: { width: number; height: number }; readonly offset: { left: number; top: number }; readonly size: { width: number; height: number };
}
const manifest = JSON.parse(readFileSync(`${RENDERS_DIR}/manifest.json`, 'utf8')) as { format: string; totalBytes: number; hidden: string[]; entries: Entry[] };
const cards = JSON.parse(readFileSync('content/cards.json', 'utf8')) as { id: string; category: string }[];
const byId = new Map(manifest.entries.map(e => [e.id, e]));
const vehicles = Object.values(VEHICLE);
const physical = cards.filter(c => c.category !== 'SE_PROCESS').map(c => c.id);
const angles = ['front', 'rear'];
const MB = 1024 * 1024;

describe('render manifest (MPES §10.2, §11)', () => {
  it('covers all 77 subjects: 70 cards, the practice card and 6 vehicles', () => {
    expect(cards).toHaveLength(70);
    for (const id of [...cards.map(c => c.id), 'TRAIN-CAP']) expect(byId.get(`card-${id}`)?.kind, id).toBe('card');
    expect(vehicles).toHaveLength(6);
    for (const v of vehicles) {
      expect(byId.get(`${v}-hero`)?.kind, v).toBe('hero');
      for (let i = 0; i < 24; i++) expect(byId.get(`${v}-turntable-${String(i).padStart(2, '0')}`)?.kind, `${v} frame ${i}`).toBe('turntable');
      for (const a of angles) expect(byId.get(`${v}-${a}-base`)?.kind, `${v} ${a}`).toBe('build-base');
    }
  });

  it('has a layer for every physical card on every vehicle and angle, unless recorded as hidden there', () => {
    const hidden = new Set(manifest.hidden);
    for (const v of vehicles) for (const a of angles) for (const id of physical) {
      const key = `${v}-${a}-${id}`;
      expect(byId.has(key) !== hidden.has(key), `${key}: exactly one of layer or hidden`).toBe(true);
    }
    // A part may hide behind the hull from one angle, never from both.
    for (const v of vehicles) for (const id of physical) expect(hidden.has(`${v}-front-${id}`) && hidden.has(`${v}-rear-${id}`), `${v} ${id}`).toBe(false);
  });

  it('gives every build layer a draw order and one slot per card; SE_PROCESS cards have no layers', () => {
    const slots = new Map<string, string>();
    for (const e of manifest.entries.filter(x => x.kind === 'build-layer')) {
      expect(e.depth, e.id).toBeGreaterThan(0);
      const card = e.id.replace(/^.*-(front|rear)-/, '');
      expect(e.slot, e.id).toMatch(/^[a-z-]+$/);
      expect(slots.get(card) ?? e.slot, e.id).toBe(e.slot);
      slots.set(card, e.slot!);
    }
    expect([...slots.keys()].sort()).toEqual([...physical].sort());
  });

  it('has no orphans: every file is listed, every entry has its file and a matching hash', () => {
    const files = readdirSync(RENDERS_DIR).filter(f => f !== 'manifest.json').sort();
    expect(files).toEqual(manifest.entries.map(e => e.file).sort());
    for (const e of manifest.entries) {
      const bytes = readFileSync(`${RENDERS_DIR}/${e.file}`);
      expect(bytes.length, e.file).toBe(e.bytes);
      expect(createHash('sha256').update(bytes).digest('hex'), e.file).toBe(e.sha256);
      expect(e.offset.left + e.size.width, e.file).toBeLessThanOrEqual(e.frame.width);
      expect(e.offset.top + e.size.height, e.file).toBeLessThanOrEqual(e.frame.height);
    }
  });

  it('keeps all imagery within 40 MB (MPES §10.3)', () => {
    const total = manifest.entries.reduce((n, e) => n + e.bytes, 0);
    expect(manifest.totalBytes).toBe(total);
    expect(total).toBeLessThanOrEqual(40 * MB);
  });
});
