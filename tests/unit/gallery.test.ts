// G2 item 4: the review gallery covers every view, both roles, EN and FR, the laptop and the projector, and the six
// vehicles in stills and 3D (scripts/gallery/shots.ts; captured by scripts/gallery.ts).
import { readdirSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { DISPLAYS, MISSIONS, shots } from '../../scripts/gallery/shots.ts';
import { MISSION_IDS } from '../../source/domain/data.ts';

describe('review gallery shot list', () => {
  const list = shots();

  it('names each shot once', () => {
    expect(new Set(list.map(s => s.id)).size).toBe(list.length);
  });

  it('shows the first screen and every instructor and student fixture in EN and FR on both displays', () => {
    const fixtures = readdirSync('tests/fixtures/legacy')
      // student-closed-mixedcase only tests save migration; it looks the same as student-closed.
      .filter(f => /^(instructor|student)-.*\.json$/.test(f) && f !== 'student-closed-mixedcase.json').map(f => f.replace(/\.json$/, ''));
    const views = ['chooser', 'about', ...fixtures];
    expect(fixtures.some(f => f.startsWith('instructor-')) && fixtures.some(f => f.startsWith('student-'))).toBe(true);
    for (const view of views) for (const lang of ['en', 'fr']) for (const display of DISPLAYS) {
      expect(list.some(s => s.id === `${view}-${lang}-${display.id}`), `${view} ${lang} ${display.id}`).toBe(true);
    }
    expect(DISPLAYS.map(d => [d.width, d.height])).toEqual([[1366, 768], [1920, 1080]]);
  });

  it('shows all six vehicles in stills and 3D', () => {
    expect([...MISSIONS].sort()).toEqual([...MISSION_IDS].sort());
    for (const mission of MISSIONS) for (const view of ['front', 'rear', 'turntable', '3d']) {
      expect(list.some(s => s.kind.type === 'showcase' && s.kind.mission === mission && s.kind.view === view), `${mission} ${view}`).toBe(true);
    }
  });

  it('captions every shot', () => {
    for (const s of list) expect(s.caption.length, s.id).toBeGreaterThan(20);
  });
});
