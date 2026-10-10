// War-room HUD prototype flag (MPES §7.1, §17 V1). `?hud=1` turns it on for QA; V2 makes it the default.

export function hudEnabled(search: string = location.search): boolean {
  return new URLSearchParams(search).get('hud') === '1';
}

/** Mark the document so the HUD theme in styles.css applies. */
export function applyHud(search: string = location.search): boolean {
  const on = hudEnabled(search);
  if (on) document.documentElement.dataset.hud = 'on';
  return on;
}

/** Keep the flag on navigation (role chooser links, change role). */
export function withHud(params: URLSearchParams, search: string = location.search): URLSearchParams {
  if (hudEnabled(search)) params.set('hud', '1');
  return params;
}
