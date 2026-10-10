// S1 support (MPES §1.2, §16.6, RQ-30): every control the quick-start guide names exists in the app,
// in the same language, so a facilitator can follow the guide word for word.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import en from '../../content/strings.en.json' with { type: 'json' };
import fr from '../../content/strings.fr.json' with { type: 'json' };

const guide = readFileSync(new URL('../../docs/CLASSROOM_QUICK_START.md', import.meta.url), 'utf8');
const [english, french] = guide.split('## Français');
const PHRASES = ['The apps do not connect to each other', 'Les applications ne sont pas reliées', 'Français / English', 'Team N', 'équipe N'];

function labels(section: string): string[] {
  return [...section.matchAll(/\*\*([^*]+)\*\*/g)].map(m => m[1]!.split(' → ').pop()!.trim())
    .map(label => label.replace(/ Team N$| à l’équipe N$/, ''))
    .filter(label => !PHRASES.some(p => label.includes(p)));
}

describe('quick-start guide matches the interface (S1)', () => {
  for (const [name, section, strings] of [['English', english!, en], ['French', french!, fr]] as const) {
    it(`${name}: every named control exists`, () => {
      const values = Object.values(strings as Record<string, string>).map(v => v.replace(/ /g, ' '));
      const found = labels(section);
      expect(found.length).toBeGreaterThan(15);
      for (const label of found) expect(values.some(v => v === label || v.startsWith(label)), label).toBe(true);
    });
  }
});
