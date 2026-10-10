import { describe, expect, it } from 'vitest';
import en from '../../content/strings.en.json' with { type: 'json' };
import fr from '../../content/strings.fr.json' with { type: 'json' };
import { detectLanguage, translate } from '../../source/ui/i18n.ts';

describe('strings (RQ-19)', () => {
  it('EN and FR have exactly the same keys', () => {
    expect(Object.keys(fr).sort()).toEqual(Object.keys(en).sort());
  });
  it('every string is non-empty and keeps the same placeholders in both languages', () => {
    const placeholders = (text: string) => [...text.matchAll(/\{(\w+)\}/g)].map(match => match[1]).sort();
    for (const key of Object.keys(en) as (keyof typeof en)[]) {
      expect(en[key].trim(), key).not.toBe('');
      expect(fr[key].trim(), key).not.toBe('');
      expect(placeholders(fr[key]), key).toEqual(placeholders(en[key]));
    }
  });
  it('French uses typographic apostrophes and no straight quotes', () => {
    for (const [key, value] of Object.entries(fr)) expect(value, key).not.toMatch(/'/);
  });
  it('French puts a space before high punctuation', () => {
    for (const [key, value] of Object.entries(fr)) expect(value, key).not.toMatch(/\S[:;!?](\s|$)/);
  });
  it('substitutes placeholders and detects language', () => {
    expect(translate('en', 'chooser.version', { version: '9.9.9' })).toContain('9.9.9');
    expect(detectLanguage('?lang=fr', 'en-CA')).toBe('fr');
    expect(detectLanguage('', 'fr-CA')).toBe('fr');
    expect(detectLanguage('?lang=xx', 'de')).toBe('en');
  });
});
