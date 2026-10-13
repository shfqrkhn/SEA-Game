import { showDialog } from './dialog.ts';
import { h } from './dom.ts';
import { translate, type Language, type StringKey } from './i18n.ts';
import { reflow } from './reflow.ts';

/** A licence file as reflowed text under its summary; a first heading that repeats the summary is dropped. */
function licenceText(summary: string, source: string): HTMLElement {
  const blocks = reflow(source).filter((b, i) => !(i === 0 && b.kind === 'heading' && b.text.toLowerCase() === summary.toLowerCase()));
  return h('details', {}, h('summary', { text: summary }), h('div', { class: 'licence-text' }, ...blocks.map(b =>
    b.kind === 'list' ? h('ul', {}, ...b.items.map(text => h('li', { text }))) : h(b.kind === 'heading' ? 'h3' : 'p', { text: b.text }))));
}

export function showAbout(lang: Language, opener: HTMLElement | null = null): Promise<string> {
  const t = (key: StringKey, vars?: Record<string, string>) => translate(lang, key, vars);
  return showDialog({
    title: t('about.title'),
    body: [
      h('p', { text: t('about.body', { version: __SEA_VERSION__ }) }),
      licenceText(t('about.licence'), __SEA_LICENSE__),
      licenceText(t('about.notices'), __SEA_NOTICES__),
    ],
    actions: [{ label: t('about.close'), value: 'close', kind: 'primary' }],
    cancelValue: 'close',
    opener,
  });
}
