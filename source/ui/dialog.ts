import { h, type Child } from './dom.ts';

export interface DialogOptions {
  readonly title: string;
  readonly body: Child;
  readonly actions: readonly { readonly label: string; readonly kind?: 'primary' | 'danger'; readonly value: string }[];
  /** Value reported when the user presses Escape or the dialog is otherwise dismissed. */
  readonly cancelValue: string;
  /** Element to refocus on close. Safari does not focus buttons on click, so pass the trigger explicitly. */
  readonly opener?: HTMLElement | null;
}

let sequence = 0;

/**
 * Show a modal in-page dialog (MPES §7.5; never a native alert/confirm).
 * Resolves with the chosen action value; focus returns to the opener.
 */
export function showDialog(options: DialogOptions): Promise<string> {
  const opener = options.opener ?? (document.activeElement instanceof HTMLElement && document.activeElement !== document.body ? document.activeElement : null);
  const titleId = `dialog-title-${++sequence}`;
  const dialog = h('dialog', { 'aria-labelledby': titleId },
    h('h2', { id: titleId, text: options.title }),
    h('div', { class: 'stack' }, options.body),
    h('div', { class: 'cluster', 'data-actions': '' }),
  );
  const actions = dialog.querySelector('[data-actions]')!;
  return new Promise(resolve => {
    let settled = false;
    const finish = (value: string): void => {
      if (settled) return;
      settled = true;
      if (dialog.open) dialog.close();
      dialog.remove();
      if (opener?.isConnected) opener.focus();
      resolve(value);
    };
    for (const action of options.actions) {
      actions.appendChild(h('button', {
        type: 'button', class: `btn${action.kind ? ' ' + action.kind : ''}`, 'data-value': action.value,
        text: action.label, on: { click: () => finish(action.value) },
      }));
    }
    dialog.addEventListener('cancel', event => { event.preventDefault(); finish(options.cancelValue); });
    dialog.addEventListener('close', () => finish(options.cancelValue));
    document.body.appendChild(dialog);
    dialog.showModal();
    const first = actions.querySelector('button');
    if (first instanceof HTMLButtonElement) first.focus();
  });
}
