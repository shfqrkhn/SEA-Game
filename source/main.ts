// Entry point: route to the role chooser or a single role (MPES §5.3).
import { sessionStoragePort } from './app/ports.ts';
import { showAbout } from './ui/about.ts';
import { applyTheme, themeFrom, toggleTheme, withTheme } from './ui/theme.ts';
import { renders, VEHICLE, type Render } from './showcase/renders.ts';
import { missionName } from './ui/components.ts';
import type { MissionId } from './domain/data.ts';
import { startInstructor } from './ui/instructor.ts';
import { startStudent } from './ui/student.ts';
import { h, nameDocument, replaceChildren } from './ui/dom.ts';
import { detectLanguage, otherLanguage, translate, type Language, type StringKey } from './ui/i18n.ts';

export type Role = 'instructor' | 'student';

export function parseRole(search: string): Role | 'chooser' | 'unknown' {
  const role = new URLSearchParams(search).get('role');
  if (role === null) return 'chooser';
  return role === 'instructor' || role === 'student' ? role : 'unknown';
}

export function roleHref(role: Role | null, lang: Language): string {
  const params = new URLSearchParams();
  if (role) params.set('role', role);
  params.set('lang', lang);
  return `?${withTheme(params).toString()}`;
}

/**
 * Chooser lineup (G2): the six mission vehicles as embedded pre-rendered stills, the selected one large, so no 3D
 * runs on the first screen (D-08). Toggle buttons; arrow keys, Home and End move along the lineup and select.
 */
function lineup(lang: Language): HTMLElement | null {
  const stills = (Object.keys(VEHICLE) as MissionId[]).flatMap(id => {
    const still = renders().get(`${VEHICLE[id]}-hero`);
    return still ? [{ id, still }] : [];
  });
  if (!stills.length) return null;
  const size = (still: Render) => ({ width: String(still.size.width), height: String(still.size.height) });
  const first = stills[0]!;
  const large = h('img', { class: 'hero-still', id: 'hero-still', src: first.still.src, alt: translate(lang, `chooser.still.${first.id}`), decoding: 'async', ...size(first.still) });
  const select = (index: number, focus: boolean) => {
    const { id, still } = stills[index]!;
    large.src = still.src;
    large.alt = translate(lang, `chooser.still.${id}`);
    buttons.forEach((button, i) => { button.setAttribute('aria-pressed', String(i === index)); button.tabIndex = i === index ? 0 : -1; });
    if (focus) buttons[index]!.focus();
  };
  const keys: Readonly<Record<string, (i: number) => number>> = {
    ArrowRight: i => (i + 1) % stills.length, ArrowDown: i => (i + 1) % stills.length,
    ArrowLeft: i => (i + stills.length - 1) % stills.length, ArrowUp: i => (i + stills.length - 1) % stills.length,
    Home: () => 0, End: () => stills.length - 1,
  };
  const buttons = stills.map(({ id, still }, index) => h('button', {
    type: 'button', class: 'lineup-pick', 'aria-pressed': String(index === 0), tabindex: index === 0 ? '0' : '-1',
    on: {
      click: () => select(index, false),
      keydown: event => {
        const move = keys[(event as KeyboardEvent).key];
        if (move) { event.preventDefault(); select(move(index), true); }
      },
    },
  }, h('img', { src: still.src, alt: '', decoding: 'async', ...size(still) }), h('span', { text: missionName(id, lang) })));
  return h('div', { class: 'hero-lineup' }, large, h('div', { class: 'lineup', role: 'group', 'aria-label': translate(lang, 'chooser.lineup') }, ...buttons));
}

/** Projector or war-room theme, switched in place (MPES §7.1). */
export function themeButton(lang: Language): HTMLButtonElement {
  const label = () => translate(lang, themeFrom() === 'light' ? 'theme.dark' : 'theme.light');
  const hint = () => translate(lang, themeFrom() === 'light' ? 'theme.darkHint' : 'theme.lightHint');
  const button = h('button', { type: 'button', class: 'btn ghost', id: 'theme-toggle', text: label(), title: hint(), on: { click: () => {
    toggleTheme(); button.textContent = label(); button.title = hint();
  } } });
  return button;
}

/** Links rebuild their URL when followed, so a theme switched after rendering is kept. */
const fresh = (href: () => string) => (event: Event) => { (event.currentTarget as HTMLAnchorElement).href = href(); };

function renderChooser(root: HTMLElement, lang: Language, unknownRole: boolean): void {
  const t = (key: StringKey, vars?: Record<string, string>) => translate(lang, key, vars);
  nameDocument(lang, t('app.title'));
  const roleCard = (role: Role, label: StringKey, description: StringKey) => h('section', { class: 'role-card' },
    h('a', { class: 'btn primary big', href: roleHref(role, lang), 'data-role': role, text: t(label), on: { click: fresh(() => roleHref(role, lang)) } }),
    h('p', { class: 'muted', text: t(description) }),
  );
  replaceChildren(root, h('main', { class: 'hero', id: 'main' },
    h('div', { class: 'hero-stage' }, lineup(lang)),
    h('div', { class: 'hero-panel stack' },
      h('div', { class: 'wordmark' }, h('span', { class: 'wordmark-sea', 'aria-hidden': 'true', text: 'SEA' }), h('h1', { class: 'wordmark-title', text: t('app.title') })),
      h('p', { class: 'lead', text: t('app.tagline') }),
      unknownRole ? h('p', { class: 'notice bad', role: 'alert', text: t('chooser.unknownRole') }) : null,
      h('h2', { text: t('chooser.heading') }),
      h('div', { class: 'roles' },
        roleCard('instructor', 'chooser.instructor', 'chooser.instructorDesc'),
        roleCard('student', 'chooser.student', 'chooser.studentDesc'),
      ),
      h('p', { class: 'small', text: `${t('chooser.handoff')} ${t('chooser.privacy')}` }),
      h('div', { class: 'cluster' },
        h('a', { class: 'btn', href: roleHref(null, otherLanguage(lang)), lang: otherLanguage(lang), 'aria-label': t('lang.switchLabel'), text: t('lang.switch'), on: { click: fresh(() => roleHref(null, otherLanguage(lang))) } }),
        h('button', { type: 'button', class: 'btn ghost', text: t('about.open'), on: { click: event => void showAbout(lang, event.currentTarget as HTMLElement) } }),
        themeButton(lang),
      ),
      h('p', { class: 'muted small', text: t('chooser.version', { version: __SEA_VERSION__ }) }),
    ),
  ));
}

/** Features every journey needs (MPES §9). */
export function supported(): boolean {
  return typeof HTMLDialogElement === 'function' && 'showModal' in HTMLDialogElement.prototype
    && typeof crypto === 'object' && typeof crypto.getRandomValues === 'function' && typeof BigInt === 'function';
}

export function start(root: HTMLElement): void {
  applyTheme();
  const lang = detectLanguage(location.search, navigator.language);
  if (!supported()) {
    replaceChildren(root, h('main', { class: 'chooser', id: 'main' }, h('h1', { text: translate(lang, 'app.title') }), h('p', { class: 'notice bad', role: 'alert', text: translate(lang, 'app.unsupported') })));
    return;
  }
  const route = parseRole(location.search);
  if (route === 'chooser' || route === 'unknown') renderChooser(root, lang, route === 'unknown');
  else if (route === 'instructor') startInstructor(root, lang, sessionStoragePort());
  else startStudent(root, lang, sessionStoragePort());
}

const root = document.getElementById('app');
if (root) start(root);
