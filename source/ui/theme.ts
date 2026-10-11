// Themes (MPES §7.1): the dark war-room HUD by default, and a projector-safe light HUD chosen by hand.
// The choice travels in the URL (`theme=light`) so it survives reloads and role changes.

export type Theme = 'dark' | 'light';

export function themeFrom(search: string = location.search): Theme {
  return new URLSearchParams(search).get('theme') === 'light' ? 'light' : 'dark';
}

/** Mark the document so the matching tokens in styles.css apply. */
export function applyTheme(theme: Theme = themeFrom()): Theme {
  document.documentElement.dataset.theme = theme;
  return theme;
}

/** Keep the projector theme on navigation (role chooser links, change role). */
export function withTheme(params: URLSearchParams, search: string = location.search): URLSearchParams {
  if (themeFrom(search) === 'light') params.set('theme', 'light');
  return params;
}

/** Switch theme in place and record it in the URL without reloading. */
export function toggleTheme(): Theme {
  const next: Theme = themeFrom() === 'light' ? 'dark' : 'light';
  const params = new URLSearchParams(location.search);
  if (next === 'light') params.set('theme', 'light'); else params.delete('theme');
  history.replaceState(history.state, '', `?${params.toString()}`);
  return applyTheme(next);
}
