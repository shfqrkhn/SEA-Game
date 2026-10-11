// The gallery's shot list (G2 item 4): every view of both roles, EN and FR, on the reference laptop and the projector,
// and the six vehicles in stills and 3D. Shared by the capture spec and the page assembler.

export type Language = 'en' | 'fr';
export interface Display { readonly id: 'laptop' | 'projector'; readonly width: number; readonly height: number; readonly theme: 'dark' | 'light'; readonly name: string }
export type Kind =
  | { readonly type: 'chooser' }
  | { readonly type: 'about' }
  | { readonly type: 'fixture'; readonly role: 'instructor' | 'student'; readonly fixture: string }
  | { readonly type: 'showcase'; readonly mission: string; readonly view: 'front' | 'rear' | 'turntable' | '3d' };
export interface Shot {
  readonly id: string;
  readonly group: string;
  readonly title: string;
  readonly caption: string;
  readonly lang: Language;
  readonly display: Display;
  readonly kind: Kind;
}

export const DISPLAYS: readonly Display[] = [
  { id: 'laptop', width: 1366, height: 768, theme: 'dark', name: 'Laptop 1366×768, war-room theme' },
  { id: 'projector', width: 1920, height: 1080, theme: 'light', name: 'Projector 1920×1080, projector theme' },
];

const VIEWS: readonly { id: string; group: string; title: string; caption: string; kind: Kind }[] = [
  { id: 'chooser', group: 'First screen', title: 'Role chooser', caption: 'The first screen: the six mission vehicles (selected one large) and the two roles.', kind: { type: 'chooser' } },
  { id: 'about', group: 'First screen', title: 'About and licences', caption: 'About dialog with the licence and third-party notices open, reflowed for reading.', kind: { type: 'about' } },
  ...([
    ['instructor-setup', 'Setup', 'Session setup: teams, defaults first, more options folded away.'],
    ['instructor-planning', 'Planning', 'Planning phase: missions assigned, teams plan their vehicles.'],
    ['instructor-auction-open-paused', 'Live lot', 'A lot open for bidding, paused: the card, bids and every action.'],
    ['instructor-build', 'Build', 'Build phase: official results per team.'],
    ['instructor-max-ledger', 'Full ledger', 'The heaviest session: every lot sold, the longest ledger the game allows.'],
    ['instructor-closed', 'Debrief', 'Session closed: class chart, ranking and presentation questions.'],
  ] as const).map(([fixture, title, caption]) => ({ id: fixture, group: 'Instructor', title, caption, kind: { type: 'fixture', role: 'instructor', fixture } as Kind })),
  ...([
    ['student-practice', 'Practice', 'Student practice round before the auction.'],
    ['student-planning-fr', 'Planning', 'Student planning: mission, budget and the parts the team wants.'],
    ['student-auction', 'Auction tracker', 'Student tracker during the auction, with the vehicle showcase.'],
    ['student-build', 'Build', 'Student build phase: the vehicle as bought.'],
    ['student-closed', 'Debrief', 'Student debrief after the session closes.'],
  ] as const).map(([fixture, title, caption]) => ({ id: fixture, group: 'Student', title, caption, kind: { type: 'fixture', role: 'student', fixture } as Kind })),
];

export const MISSIONS = ['COMBAT', 'RECCE', 'TROOP', 'COMMAND', 'RECOVERY', 'MINE'] as const;
const SHOWCASE_VIEWS = [
  ['front', 'Stills, front', 'Pre-rendered stills (no WebGL or a software renderer): front angle, one part in each of seven slots.'],
  ['rear', 'Stills, rear', 'Pre-rendered stills: rear angle, same seven parts.'],
  ['turntable', 'Stills, turntable', 'Pre-rendered turntable frame, as shown while turning without 3D.'],
  ['3d', '3D', 'Interactive 3D model with the same seven parts, at its opening angle (reduced motion, so captures compare).'],
] as const;

export function shots(): Shot[] {
  const list: Shot[] = [];
  for (const display of DISPLAYS) for (const lang of ['en', 'fr'] as const) for (const view of VIEWS) {
    list.push({ ...view, id: `${view.id}-${lang}-${display.id}`, title: `${view.title} (${lang.toUpperCase()}, ${display.id})`, lang, display });
  }
  for (const mission of MISSIONS) for (const [view, title, caption] of SHOWCASE_VIEWS) {
    list.push({ id: `showcase-${mission.toLowerCase()}-${view}`, group: 'Vehicles', title: `${mission}: ${title}`, caption, lang: 'en', display: DISPLAYS[0]!, kind: { type: 'showcase', mission, view } });
  }
  return list;
}
