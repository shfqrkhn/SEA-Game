// Entry point: route to the role chooser or a single role (MPES §5.3).
import { sessionStoragePort } from './app/ports.ts';
import { VehicleBay } from './bay/bay.ts';
import { showAbout } from './ui/about.ts';
import { vehicleArt } from './ui/art.ts';
import { applyHud, hudEnabled, withHud } from './ui/hud.ts';
import { renders } from './showcase/renders.ts';
import { startInstructor } from './ui/instructor.ts';
import { startStudent } from './ui/student.ts';
import { h, replaceChildren } from './ui/dom.ts';
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
  return `?${withHud(params).toString()}`;
}

let hero: VehicleBay | null = null;
/** Hero: the fully equipped recovery vehicle in the studio bay, as on the concept's landing page. */
function heroBay(lang: Language): HTMLElement {
  const t = (key: StringKey) => translate(lang, key);
  // HUD prototype: the pre-rendered hero still replaces the WebGL hero (MPES §17 V1).
  const still = hudEnabled() ? renders().get('recovery-hero') : undefined;
  if (still) return h('img', { class: 'hero-still', src: still.src, alt: t('chooser.heroStill'), decoding: 'async', width: String(still.size.width), height: String(still.size.height) });
  const text = { unavailable: t('bay.unavailable'), hint: t('bay.hint'), fallback: () => vehicleArt('RECOVERY', t('chooser.heroLabel')) };
  if (hero) hero.setText(text); else hero = new VehicleBay(text);
  hero.update({ mission: 'RECOVERY', parts: [
    { id: 'ACC-F', category: 'ACCESSORIES' }, { id: 'PRO-C', category: 'PROTECTION' }, { id: 'PRO-G', category: 'PROTECTION' },
    { id: 'COM-B', category: 'COMMS' }, { id: 'SA-B', category: 'SA' }, { id: 'MOB-D', category: 'MOBILITY' },
  ] }, t('chooser.heroLabel'));
  return hero.element;
}

function renderChooser(root: HTMLElement, lang: Language, unknownRole: boolean): void {
  const t = (key: StringKey, vars?: Record<string, string>) => translate(lang, key, vars);
  document.documentElement.lang = lang;
  document.title = t('app.title');
  const roleCard = (role: Role, label: StringKey, description: StringKey) => h('section', { class: 'role-card' },
    h('a', { class: 'btn primary big', href: roleHref(role, lang), 'data-role': role, text: t(label) }),
    h('p', { class: 'muted', text: t(description) }),
  );
  replaceChildren(root, h('main', { class: 'hero', id: 'main' },
    h('div', { class: 'hero-stage' }, heroBay(lang)),
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
        h('a', { class: 'btn', href: roleHref(null, otherLanguage(lang)), lang: otherLanguage(lang), 'aria-label': t('lang.switchLabel'), text: t('lang.switch') }),
        h('button', { type: 'button', class: 'btn ghost', text: t('about.open'), on: { click: event => void showAbout(lang, event.currentTarget as HTMLElement) } }),
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
  applyHud();
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
