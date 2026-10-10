// Shared role view: shell (header, progress, menu, notices), rendering with focus preservation,
// UI drafts, command dispatch with localized errors, and state-bound confirmations (MPES §7).
import type { Controller, Result } from '../app/controller.ts';
import { downloadText, timestamp } from '../app/ports.ts';
import { makeBackup, parseBackup, MAX_BACKUP_BYTES, type BackupRole } from '../domain/backup.ts';
import { DomainError } from '../domain/errors.ts';
import { PHASES, type Phase } from '../domain/session.ts';
import { showDialog } from './dialog.ts';
import { h, replaceChildren, type Child } from './dom.ts';
import { otherLanguage, translate, type Language, type StringKey } from './i18n.ts';
import { showAbout } from './about.ts';

export interface RoleState { readonly phase: Phase; readonly lang: Language; readonly sessionCode: string | null; readonly round: number; readonly lot: number }

export interface RoleConfig<S extends RoleState> {
  readonly role: BackupRole;
  readonly controller: Controller<S>;
  readonly brand: (view: RoleView<S>) => string;
  readonly setLanguage: (state: S, lang: Language) => S;
  readonly newSession: (state: S) => S;
  readonly validateImport: (raw: unknown) => S;
  /** Adjust an imported state before commit (for example pause an open lot). Returns a notice key. */
  readonly afterImport?: (state: S) => { state: S; notice: StringKey };
  readonly forExport: (state: S) => unknown;
  readonly body: (view: RoleView<S>) => Child;
  readonly storageAvailable: boolean;
  readonly unreadableSave: string | null;
}

type Tone = 'ok' | 'bad' | 'info';

export class RoleView<S extends RoleState> {
  readonly config: RoleConfig<S>;
  readonly root: HTMLElement;
  readonly drafts = new Map<string, string>();
  #status: { text: string; tone: Tone } | null = null;
  #undo: S | null = null;
  #rendering = false;
  readonly #content: HTMLElement;
  readonly #statusLine: HTMLElement;

  constructor(root: HTMLElement, config: RoleConfig<S>) {
    this.root = root;
    this.config = config;
    this.#content = h('div');
    this.#statusLine = h('div', { class: 'page status-line', role: 'status', 'aria-live': 'polite', id: 'status' });
    replaceChildren(root, this.#content, this.#statusLine);
    config.controller.subscribe(() => this.render());
  }

  get state(): S { return this.config.controller.state; }
  get lang(): Language { return this.state.lang; }
  t = (key: StringKey, vars?: Readonly<Record<string, string | number>>): string => translate(this.lang, key, vars);

  // ---- Commands ----
  /** Run a command; on failure show the localized reason and keep everything unchanged. */
  run(command: (state: S) => S, success?: () => void): Result {
    if (this.#undo) this.#undo = null;
    const result = this.config.controller.dispatch(command);
    if (result.ok) { this.#status = null; success?.(); this.render(); }
    else this.say(this.t(`error.${result.code}` as StringKey), 'bad');
    return result;
  }

  /**
   * Field that saves as you type: valid values commit silently on input; leaving the field only reports
   * an invalid value. Nothing re-renders on blur, so a click on the next control is never lost.
   */
  savingInput(id: string, current: string, command: (state: S, value: string) => S, props: Record<string, unknown> = {}): HTMLInputElement {
    const commit = (value: string, report: boolean) => {
      if (value === current) return;
      const result = this.config.controller.dispatch(state => command(state, value));
      if (result.ok) { this.drafts.delete(id); current = value; this.render(); }
      else if (report) this.say(this.t(`error.${result.code}` as StringKey), 'bad');
    };
    const input = h('input', { id, ...props, value: this.draft(id, current) });
    input.addEventListener('input', () => { this.drafts.set(id, input.value); commit(input.value, false); });
    input.addEventListener('change', () => { if (this.drafts.has(id)) commit(input.value, true); });
    return input;
  }

  /** Ask first; refuse if anything changed while the dialog was open (MPES §7.5). */
  async confirm(options: { title: string; body: Child; confirm: string; danger?: boolean; opener?: HTMLElement | null }, command: (state: S) => S, success?: () => void): Promise<void> {
    const revision = this.config.controller.revision;
    const choice = await showDialog({
      title: options.title, body: options.body, cancelValue: 'cancel', opener: options.opener ?? null,
      actions: [{ label: options.confirm, value: 'ok', kind: options.danger ? 'danger' : 'primary' }, { label: this.t('common.cancel'), value: 'cancel' }],
    });
    if (choice !== 'ok') return;
    if (this.config.controller.revision !== revision) { this.say(this.t('error.changed'), 'bad'); return; }
    this.run(command, success);
  }

  say(text: string, tone: Tone = 'info'): void {
    this.#status = { text, tone };
    this.render();
  }

  // ---- Drafts: UI-only input values that survive re-rendering and language changes ----
  draft(id: string, fallback = ''): string {
    return this.drafts.get(id) ?? fallback;
  }
  input(id: string, props: Record<string, unknown> & { value?: string }): HTMLInputElement {
    const { value, ...rest } = props;
    const extra = (rest.on ?? {}) as Record<string, (event: Event) => void>;
    return h('input', { id, ...rest, value: this.draft(id, value ?? ''), on: { ...extra, input: e => this.drafts.set(id, (e.target as HTMLInputElement).value) } });
  }

  // ---- Rendering ----
  render(): void {
    if (this.#rendering) return;
    this.#rendering = true;
    try {
      const active = document.activeElement as (HTMLElement & Partial<HTMLInputElement>) | null;
      const focusId = active?.id || null;
      let selection: [number | null, number | null] | null = null;
      try { if (active && 'selectionStart' in active && typeof active.selectionStart === 'number') selection = [active.selectionStart ?? null, active.selectionEnd ?? null]; } catch { selection = null; }
      document.documentElement.lang = this.lang;
      document.title = `${this.config.brand(this)} · ${this.t('app.title')}`;
      replaceChildren(this.#content, this.shell());
      this.#statusLine.className = `page status-line ${this.#status?.tone === 'bad' ? 'error' : this.#status?.tone === 'ok' ? 'ok' : ''}`;
      if (this.#statusLine.textContent !== (this.#status?.text ?? '')) this.#statusLine.textContent = this.#status?.text ?? '';
      // Tables wider than the screen become labelled, focusable regions so they can be scrolled by keyboard (WCAG 2.1.1).
      for (const wrap of this.#content.querySelectorAll<HTMLElement>('.table-wrap')) {
        if (wrap.scrollWidth > wrap.clientWidth + 1) {
          wrap.tabIndex = 0;
          wrap.setAttribute('role', 'region');
          wrap.setAttribute('aria-label', wrap.querySelector('caption')?.textContent || wrap.closest('section')?.querySelector('h1, h2, h3')?.textContent || this.t('common.purchases'));
        }
      }
      if (focusId) {
        const next = document.getElementById(focusId) as (HTMLElement & Partial<HTMLInputElement>) | null;
        if (next && next !== document.activeElement) {
          next.focus({ preventScroll: true });
          if (selection && typeof next.setSelectionRange === 'function') {
            try { next.setSelectionRange(selection[0], selection[1]); } catch { /* not a text field */ }
          }
        }
      }
    } finally {
      this.#rendering = false;
    }
  }

  shell(): Child {
    const s = this.state;
    const notices: Child[] = [];
    if (!this.config.storageAvailable) notices.push(h('p', { class: 'notice bad', text: this.t('shell.storageOff') }));
    else if (this.config.controller.saveFailed) notices.push(h('p', { class: 'notice bad', text: this.t('shell.saveFailed') }));
    if (this.config.unreadableSave !== null) notices.push(h('div', { class: 'notice bad cluster' },
      h('span', { text: this.t('shell.badSave') }),
      h('button', { type: 'button', class: 'btn', text: this.t('shell.downloadBad'), on: { click: () => downloadText(`sea-unreadable-${timestamp(new Date())}.json`, this.config.unreadableSave!) } }),
    ));
    if (this.#undo) notices.push(h('div', { class: 'notice ok cluster' },
      h('span', { text: this.t('backup.imported') }),
      h('button', { type: 'button', class: 'btn', id: 'undo-import', text: this.t('backup.undo'), on: { click: () => this.undoImport() } }),
    ));
    return [
      h('a', { class: 'skip-link', href: '#main', text: this.t('shell.skip') }),
      h('header', { class: 'topbar' },
        h('span', { class: 'brand', text: this.config.brand(this) }),
        s.sessionCode ? h('span', { class: 'mono small', text: this.t('shell.session', { code: s.sessionCode }) }) : null,
        h('button', { type: 'button', class: 'btn ghost', id: 'lang-toggle', lang: otherLanguage(this.lang), 'aria-label': this.t('lang.switchLabel'), text: this.t('lang.switch'),
          on: { click: () => this.run(state => this.config.setLanguage(state, otherLanguage(state.lang))) } }),
        h('button', { type: 'button', class: 'btn', id: 'menu-button', text: this.t('shell.menu'), on: { click: e => void this.menu(e.currentTarget as HTMLElement) } }),
      ),
      h('nav', { class: 'progress', 'aria-label': this.t('phase.progress') },
        h('ol', {}, PHASES.map((phase, i) => h('li', {
          class: phase === s.phase ? 'current' : PHASES.indexOf(s.phase) > i ? 'done' : '',
          'aria-current': phase === s.phase ? 'step' : undefined,
          text: this.t(`phase.${phase}` as StringKey),
        }))),
      ),
      h('main', { id: 'main', class: 'page stack', tabindex: '-1' },
        notices,
        this.config.body(this),
      ),
    ];
  }

  // ---- Menu, export, import ----
  async menu(opener: HTMLElement): Promise<void> {
    const t = this.t;
    const choice = await showDialog({
      title: t('shell.menuTitle'), opener, cancelValue: 'close',
      body: h('p', { class: 'muted', text: t('shell.backupHint') }),
      actions: [
        { label: t('shell.export'), value: 'export' },
        { label: t('shell.import'), value: 'import' },
        { label: t('shell.newSession'), value: 'new', kind: 'danger' },
        { label: t('shell.changeRole'), value: 'role' },
        { label: t('about.open'), value: 'about' },
        { label: t('common.close'), value: 'close' },
      ],
    });
    if (choice === 'export') this.exportBackup();
    else if (choice === 'import') this.chooseImport();
    else if (choice === 'new') await this.confirm({ title: t('newSession.title'), body: h('p', { text: t('newSession.body') }), confirm: t('newSession.confirm'), danger: true, opener }, state => this.config.newSession(state), () => this.drafts.clear());
    else if (choice === 'role') location.search = `?lang=${this.lang}`;
    else if (choice === 'about') void showAbout(this.lang, opener);
  }

  backupText(): string | null {
    if (!this.state.sessionCode) return null;
    return makeBackup(this.config.role, this.config.forExport(this.state), __SEA_VERSION__);
  }

  exportBackup(): void {
    const raw = this.backupText();
    if (!raw) { this.say(this.t('backup.nothing'), 'bad'); return; }
    const file = `sea-${this.config.role.toLowerCase()}-${this.state.sessionCode}-${timestamp(new Date())}.json`;
    if (downloadText(file, raw)) this.say(this.t('backup.exported', { file }), 'ok');
    else void this.showBackupText(raw);
  }

  async showBackupText(raw: string): Promise<void> {
    const area = h('textarea', { readonly: true, rows: '8', 'aria-label': this.t('backup.copyTitle'), value: raw });
    await showDialog({ title: this.t('backup.copyTitle'), cancelValue: 'close', body: [h('p', { text: this.t('backup.exportFailed') }), h('p', { text: this.t('backup.copyHint') }), area], actions: [{ label: this.t('common.close'), value: 'close' }] });
  }

  chooseImport(): void {
    const picker = h('input', { type: 'file', accept: '.json,application/json', hidden: true });
    picker.addEventListener('change', () => {
      const file = picker.files?.[0];
      picker.remove();
      if (file) void this.importFile(file);
    });
    document.body.appendChild(picker);
    picker.click();
  }

  async importFile(file: Blob): Promise<void> {
    if (file.size > MAX_BACKUP_BYTES) { this.say(this.t('backup.failed', { reason: this.t('error.backup-size') }), 'bad'); return; }
    const raw = await file.text();
    await this.importText(raw);
  }

  async importText(raw: string): Promise<void> {
    let candidate: S;
    try {
      candidate = parseBackup(raw, this.config.role, this.config.validateImport);
    } catch (error) {
      const code = error instanceof DomainError ? error.code : 'backup-json';
      this.say(this.t('backup.failed', { reason: this.t(`error.${code}` as StringKey) }), 'bad');
      return;
    }
    const revision = this.config.controller.revision;
    const t = this.t;
    const choice = await showDialog({
      title: t('backup.importTitle'), cancelValue: 'cancel',
      body: [
        h('p', { text: t('backup.importSummary', { code: candidate.sessionCode ?? '', phase: t(`phase.${candidate.phase}` as StringKey), position: t('backup.position', { round: candidate.round + 1, lot: candidate.lot + 1 }) }) }),
        h('p', { text: t('backup.importWarn') }),
      ],
      actions: [{ label: t('backup.importConfirm'), value: 'ok', kind: 'danger' }, { label: t('common.cancel'), value: 'cancel' }],
    });
    if (choice !== 'ok') return;
    if (this.config.controller.revision !== revision) { this.say(t('error.changed'), 'bad'); return; }
    let notice: StringKey = 'backup.imported';
    if (this.config.afterImport) ({ state: candidate, notice } = this.config.afterImport(candidate));
    candidate = this.config.setLanguage(candidate, this.lang); // keep the language the user is reading
    const previous = this.state;
    this.drafts.clear();
    this.config.controller.replace(candidate);
    this.#undo = previous;
    this.say(t(notice), 'ok');
  }

  undoImport(): void {
    if (!this.#undo) return;
    const previous = this.#undo;
    this.#undo = null;
    this.config.controller.replace(previous);
    this.say(this.t('backup.undone'), 'ok');
  }
}
