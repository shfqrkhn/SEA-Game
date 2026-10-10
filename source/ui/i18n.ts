import en from '../../content/strings.en.json' with { type: 'json' };
import fr from '../../content/strings.fr.json' with { type: 'json' };

export type Language = 'en' | 'fr';
export type StringKey = keyof typeof en;
const TABLES: Readonly<Record<Language, Readonly<Record<string, string>>>> = { en, fr };

/** Look up a localized string and substitute {name} placeholders. Missing keys are a build-test failure. */
export function translate(lang: Language, key: StringKey, vars: Readonly<Record<string, string | number>> = {}): string {
  const template = TABLES[lang][key] ?? TABLES.en[key] ?? key;
  return template.replace(/\{(\w+)\}/g, (match, name: string) => (name in vars ? String(vars[name]) : match));
}

export function otherLanguage(lang: Language): Language {
  return lang === 'en' ? 'fr' : 'en';
}

export function detectLanguage(search: string, navigatorLanguage: string | undefined): Language {
  const requested = new URLSearchParams(search).get('lang');
  if (requested === 'en' || requested === 'fr') return requested;
  return navigatorLanguage?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
}
