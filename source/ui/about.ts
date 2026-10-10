import { showDialog } from './dialog.ts';
import { h } from './dom.ts';
import { translate, type Language, type StringKey } from './i18n.ts';

export function showAbout(lang: Language, opener: HTMLElement | null = null): Promise<string> {
  const t = (key: StringKey, vars?: Record<string, string>) => translate(lang, key, vars);
  return showDialog({
    title: t('about.title'),
    body: [
      h('p', { text: t('about.body', { version: __SEA_VERSION__ }) }),
      h('details', {}, h('summary', { text: t('about.licence') }), h('pre', { text: __SEA_LICENSE__ })),
      h('details', {}, h('summary', { text: t('about.notices') }), h('pre', { text: __SEA_NOTICES__ })),
    ],
    actions: [{ label: t('about.close'), value: 'close', kind: 'primary' }],
    cancelValue: 'close',
    opener,
  });
}
