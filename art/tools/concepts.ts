// Generates the V3 concept reference images with the owner's ChatGPT Codex CLI (built-in image generation).
//
//   node art/tools/concepts.ts [--only <id,...>] [--jobs 4] [--codex <path to codex.exe>]
//
// Writes .artifacts/concepts-v3/<group>/<id>.png (git-ignored; references for modelling, never shipped).
// Existing images are kept, so a rerun only fills gaps. Each job runs `codex exec` in its own empty folder.
import { execFileSync, spawn } from 'node:child_process';
import { existsSync, mkdirSync, renameSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = '.artifacts/concepts-v3';
const arg = (name: string) => { const i = process.argv.indexOf(name); return i > 0 ? process.argv[i + 1] : undefined; };
const only = arg('--only')?.split(',');
const jobs = Number(arg('--jobs') ?? 4);
const codex = arg('--codex') ?? findCodex();

function findCodex(): string {
  // WindowsApps cannot be listed; ask the package manager where the Codex desktop app lives.
  const where = execFileSync('powershell', ['-NoProfile', '-Command', '(Get-AppxPackage OpenAI.Codex).InstallLocation'], { encoding: 'utf8' }).trim();
  if (!where) throw new Error('Codex desktop app not found; pass --codex <path to codex.exe>');
  return join(where, 'app/resources/codex.exe');
}

const NO_TEXT = 'Fictional generic design, not any real-world model; no insignia, markings, text, logos or watermark.';
const PAINT = 'Matte dark olive-drab paint (slightly grey, like NATO green) with subtle edge wear, dust on lower surfaces; gunmetal, black rubber and steel where real equipment would have them.';
const STUDIO = 'Seamless neutral mid-grey studio backdrop, soft key light from upper left, soft fill, soft contact shadow, 16:9, ultra-detailed photorealistic product render, sharp focus, whole subject in frame with margin. Intended as a reference for building an accurate 3D model.';
const HULL = 'a fictional modern 8x8 wheeled armoured vehicle (narrow lower hull between the wheels, wide sponsons over the wheels, inward-sloped upper hull, long upper glacis and raked lower nose, bolted appliqué plates, four evenly spaced axles with large chunky off-road tyres on olive steel rims)';

// Physical part cards: what each part is (art/blender/sea/parts/library.py) and how to show it.
const PARTS: Record<string, string> = {
  'CAP-A': 'Modular Crew Hull: a mission module for the rear deck of an 8x8 armoured vehicle, three bolted armoured segments with small armoured windows and a rear door',
  'CAP-B': 'Extended Carrier Module: a ribbed armoured shelter module for the rear deck of an 8x8 vehicle, side door, roof vents, rear ladder',
  'CAP-C': 'Compact Passenger Bay: an open rear-deck passenger bay with folding benches under canvas cover bows (canvas rolled back)',
  'CAP-D': 'High-Capacity Hull: the largest rear-deck personnel module, tall, two rows of armoured windows, roof hatches and a ladder',
  'CAP-E': 'Crew Compartment Insert: a medium armoured cabin module with a wide sliding side door and a window strip',
  'CAP-F': 'Protected Personnel Module: a heavily armoured personnel module covered in bolted armour tiles with vision blocks',
  'CAP-G': 'Light Utility Hull: a light tubular steel frame module with a partly rolled canvas cover and a light floor',
  'MOB-A': 'Efficient Power Pack: a military diesel power pack (engine, transmission, cooling pack) with a large cylindrical air cleaner and a single exhaust, on a transport stand',
  'MOB-B': 'High-Torque Drivetrain: military 8x8 drivetrain set, hub-reduction wheel hub housings and armoured drive-shaft guards, laid out as a kit',
  'MOB-C': 'Lightweight Running Gear: lighter military wheel with an open multi-spoke olive rim and an aggressive off-road tyre, with its hub',
  'MOB-D': 'Heavy-Duty Suspension: a military independent wheel-station suspension unit with a yellow external damper and a heavy coil spring, wishbones and hub',
  'MOB-E': 'Long-Range Propulsion: strapped auxiliary armoured fuel tanks with a side rack of jerrycans, for mounting on a vehicle side between axles',
  'MOB-F': 'Compact Engine Set: a compact military engine unit with a small grille and twin short exhausts, on a transport stand',
  'MOB-G': 'Adaptive Traction Package: a large military off-road tyre fitted with heavy snow/mud chains across the tread and a central tyre-inflation line at the hub',
  'FP-A': 'Defensive Weapon Station: an open ring mount with a curved gun shield and a pintle-mounted heavy machine gun',
  'FP-B': 'Medium Weapon Station: a remote weapon station turret box with a medium-calibre autocannon and an elevated sight head',
  'FP-C': 'Heavy Weapon Station: a two-crew armoured turret with a long cannon, mantlet, commander and gunner hatches and smoke grenade dischargers',
  'FP-D': 'Remote Defensive Mount: a small remote-controlled machine-gun mount with a camera and sensor block',
  'FP-E': 'Light Weapon Mount: a pintle mount with a light machine gun and a folding armoured shield',
  'FP-F': 'Stabilized Weapon Suite: a compact armoured turret with a stabilised cannon, coaxial machine gun and a panoramic commander sight',
  'FP-G': 'Dual-Purpose Mount: a remote weapon station with a gun and a twin anti-tank missile launcher pod on the side',
  'PRO-A': 'Layered Protection Kit: two offset layers of thick bolted armour panels for a vehicle side, shown as a set on a pallet',
  'PRO-B': 'Composite Armour Set: thick composite armour tiles for a vehicle front glacis, with a window guard grille',
  'PRO-C': 'Light Armour Panels: one thin layer of large bolted armour panels for a vehicle side',
  'PRO-D': 'Reinforced Crew Cell: a heavy roof armour plate with raised edges and armoured visors for windows',
  'PRO-E': 'Modular Side Protection: slat (bar) armour grid panels on stand-off posts for a vehicle side',
  'PRO-F': 'Blast Protection Kit: a V-shaped mine-blast belly plate with bolted rails, shown from below at three-quarter angle',
  'PRO-G': 'Lightweight Protective Shell: a curved overhead protective canopy on legs with a mesh panel, roof-mounted',
  'COM-A': 'Convoy Radio Suite: a finned military vehicle radio set with one tall spring-mounted whip antenna',
  'COM-B': 'Extended Radio Network: two tall whip antennas on a cross bar with a junction box',
  'COM-C': 'Compact Communications Set: a short blade antenna and a small rugged handset radio box',
  'COM-D': 'Relay Communications Suite: a telescopic radio mast with a relay panel antenna head and a rack of radios',
  'COM-E': 'Long-Range Radio Set: an armoured finned HF radio with two spring-mounted whip antennas and a stowed folding mast',
  'COM-F': 'Secure Tactical Radio: a whip antenna, a crypto unit beside the radio and a coiled handset cable',
  'COM-G': 'Dual-Channel Radio Package: two medium whips on a twin base and a stacked dual radio',
  'SA-A': 'Crew Observation Suite: an armoured commander cupola ring with six periscope vision blocks and a hatch',
  'SA-B': 'Multi-Sensor Awareness Suite: a medium mast with a gimballed electro-optical sensor ball and a flat radar panel',
  'SA-C': 'Basic Observation Set: one rugged day camera on a short armoured bracket',
  'SA-D': 'Panoramic Sensor Mast: a tall telescopic mast with a 360-degree sensor head and guy lines',
  'SA-E': 'Crew Vision Enhancement: paired thermal and day cameras with an infrared illuminator in an armoured housing',
  'SA-F': 'Integrated Detection Suite: four domed armoured sensor pods (one per roof corner), shown as a set',
  'SA-G': 'Distributed Observation Kit: four small rugged cameras on corner brackets and a data hub box, shown as a set',
  'ACC-A': 'Recovery Accessory Pack: a folded A-frame tow bar, a snatch block and coiled tow ropes',
  'ACC-B': 'Utility Trailer Module: a two-wheel military cargo trailer with a drawbar, canvas cover and lights',
  'ACC-C': 'Mine-Route Accessory Kit: a mine roller, push arms with two banks of heavy roller discs, for the front of an 8x8 vehicle',
  'ACC-D': 'Field Support Pack: a roof rack with a tool chest, jerrycans and a strapped canvas roll',
  'ACC-E': 'Engineer Support Module: a curved dozer blade on push arms with hydraulic rams, for the front of an 8x8 vehicle',
  'ACC-F': 'Recovery Winch Package: a heavy drum winch between side plates with motor, roller fairlead, hook and shackles',
  'ACC-G': 'Mission Equipment Rack: a roof rack with rugged hard cases, a folding ladder and marker poles',
};

const VEHICLES: Record<string, string> = {
  combat: 'Combat variant: an infantry fighting vehicle with a turret ring carrying a medium remote weapon station turret with autocannon, sights and smoke dischargers',
  recce: 'Reconnaissance variant: low profile, a telescopic sensor mast with a sensor ball on the rear roof, extra antennas, camouflage net roll',
  'troop-carrier': 'Troop carrier variant: large rear troop compartment with the rear ramp lowered showing a lit interior with folding seats; small machine-gun mount',
  'command-post': 'Command post variant: armoured windscreens in the front cab, raised rear command module, several whip antennas and a radio mast',
  recovery: 'Recovery variant: a recovery crane on the rear roof with a two-stage boom, hook and chain, a front winch with fairlead, tow bar stowed',
  'mine-clearing': 'Mine-clearing variant: armoured windscreens in the front cab, a mine roller with two banks of heavy roller discs on push arms ahead of the vehicle, marker poles',
};

const SE: Record<string, string> = {
  'SE-A': 'Requirements Review: checklist with a magnifier', 'SE-B': 'Risk Review: warning triangle over a probability grid',
  'SE-C': 'Interface Review: two connectors meeting', 'SE-D': 'Verification Planning: checkmark inside a gauge',
  'SE-E': 'Configuration Review: stacked layers with a lock', 'SE-F': 'Trade Study: balance scale',
  'SE-G': 'Validation Planning: target with a checkmark', 'SE-H': 'Architecture Review: block diagram of linked boxes',
  'SE-I': 'Risk Reduction Study: downward arrow through a warning triangle', 'SE-J': 'Requirements Trace: linked chain between documents',
  'SE-K': 'Integration Planning: puzzle pieces joining', 'SE-L': 'Test Readiness Review: flag on a test bench',
  'SE-M': 'Design Review: drafting compass over a blueprint', 'SE-N': 'Supplier Risk Review: crate with a warning mark',
  'SE-O': 'Baseline Audit: ruler under a stamped document', 'SE-P': 'Change Control Review: circular arrows around a gate',
  'SE-Q': 'Human Factors Review: head silhouette with a gear', 'SE-R': 'Supportability Review: wrench and spanner crossed over a shield',
  'SE-S': 'Mission Analysis: map with a route and objective marker', 'SE-T': 'Lessons Review: open book with a lightbulb',
  'SE-U': 'Acceptance Review: stamp with a checkmark',
};

const HUD = 'Dark war-room tactical HUD for a classroom auction game about building military vehicles (a systems engineering awareness game), projected in a classroom: near-black blue-grey background, thin cyan and amber accent lines, olive-drab and steel tones, clean sans-serif typography, high contrast and very readable at projector distance, flat panels with subtle grid and corner brackets, no clutter. Desktop 16:9 1280x720 layout, English labels, realistic UI design mockup (not a photo of a screen).';
const UI: Record<string, string> = {
  'ui-chooser': 'Start screen: game title "SEA Game", two large role buttons "Instructor console" and "Student companion", a cinematic photoreal 8x8 armoured vehicle hero image behind a dark gradient, language toggle EN/FR in a corner.',
  'ui-instructor-setup': 'Instructor setup screen: big session code display "SEA3-T6-...", team count stepper, Generate session button, a collapsed "More options" row with a one-line summary, phase stepper across the top with eight phases (Setup, Practice, Planning, Auction, Build, Submit, Debrief, Closed).',
  'ui-instructor-live-lot': 'Instructor live auction lot: left column has the part card with a photoreal 3D render of a remote weapon station, title, category FIREPOWER, start price $450,000 and capability effects; right column has current bid and leader, team bid buttons Team 1..6, a timer with pause and extend, large Sell / No sale / Next lot buttons, compact ledger list of this round and team win counts.',
  'ui-instructor-planning': 'Instructor planning team board: a grid of teams 1..6 each with a mission selector (Combat, RECCE, Troop Carrier, Command Post, Recovery, Mine Clearing), small vehicle thumbnails, missing-mission warnings, Start auction button.',
  'ui-student-planning': 'Student mission planner: chosen mission Recovery with a photoreal 8x8 recovery vehicle image, mission minimum capabilities as a list (Capacity, Mobility, Firepower, Protection, Comms, Situational awareness, Recovery), capability catalogue, plan and risks text areas, max willingness-to-pay, Confirm vehicle button.',
  'ui-student-tracker': 'Student auction tracker: centre stage is an interactive photoreal 3D 8x8 armoured vehicle on a turntable with installed parts (crane, radio mast), a small hint "drag to turn"; right side gap meters per capability (current bar vs minimum marker, shortfall in amber), lot position selector, card entry field, Record win and Not ours buttons, purchased parts list.',
  'ui-student-build': 'Student build reconciliation: purchases list with remove buttons, totals versus mission minimums table with green ticks and amber shortfalls, compliance badge, the assembled 3D vehicle showcase on the side, Reconciliation complete button.',
  'ui-debrief': 'Debrief award view: team ranking table, award announcement banner for the winning team, per-team gap analysis bars, class comparison bar chart, plan versus outcome panel.',
  'ui-design-system': 'Design system sheet for this HUD: colour palette swatches with names, type scale, buttons (primary, secondary, danger, disabled), toggles, steppers, input fields, part card component, capability gap meter, phase stepper, badges, panel frames with corner brackets.',
};

type Job = { id: string; group: string; prompt: string };
const list: Job[] = [];
for (const [id, what] of Object.entries(VEHICLES)) {
  list.push({ id: `${id}-front`, group: 'vehicles', prompt: `Photorealistic studio render of ${HULL}. ${what}. Three-quarter front-left view, camera at eye level. ${PAINT} ${NO_TEXT} ${STUDIO}` });
  list.push({ id: `${id}-rear`, group: 'vehicles', prompt: `Photorealistic studio render of ${HULL}. ${what}. Three-quarter rear-right view, camera slightly above eye level, showing the rear and roof. ${PAINT} ${NO_TEXT} ${STUDIO}` });
}
list.push({ id: 'hull-orthographic', group: 'vehicles', prompt: `Technical orthographic turnaround sheet of ${HULL}, base hull with no mission equipment: left side view, front view, rear view and top view arranged on one sheet, aligned and to the same scale, neutral lighting, photoreal shading. ${PAINT} ${NO_TEXT} Light grey background, 16:9, reference for 3D modelling.` });
list.push({ id: 'assembly-exploded', group: 'vehicles', prompt: `Photorealistic exploded assembly view of ${HULL}: the base hull in the centre with its mission parts floating just off their mounting points along dashed guide lines: rear-deck personnel module, power pack, side armour panels, front composite armour, belly blast plate, remote weapon station turret, radio antennas and mast, commander cupola and sensor mast, front winch and rear tow kit. Three-quarter front-left high view. ${PAINT} ${NO_TEXT} ${STUDIO}` });
for (const [id, what] of Object.entries(PARTS)) {
  list.push({ id, group: 'parts', prompt: `Photorealistic studio product render of one military vehicle component on its own: ${what}. Three-quarter view from front-left and slightly above. ${PAINT} ${NO_TEXT} ${STUDIO}` });
}
for (const [id, what] of Object.entries(SE)) {
  list.push({ id, group: 'se-badges', prompt: `A single square HUD badge emblem for a dark war-room game interface: ${what}. Embossed metal insignia style in steel and olive with a thin cyan edge glow, centred on a near-black blue-grey background, symmetric, bold readable silhouette at small size, no text or letters. 1:1 square.` });
}
list.push({ id: 'capability-icons', group: 'se-badges', prompt: 'A sheet of eight matching HUD capability icons for a dark war-room military vehicle game, arranged in a 4x2 grid on a near-black blue-grey background, embossed steel and olive with thin cyan edge glow, no text: Capacity (seated crew), Mobility (wheel with motion lines), Firepower (crosshair), Protection (shield), Comms (radio waves), Situational awareness (eye with radar sweep), Recovery (crane hook), Mine clearing (roller over mine). 16:9.' });
for (const [id, what] of Object.entries(UI)) list.push({ id, group: 'ui', prompt: `${HUD} ${what}` });

const todo = list.filter(j => (!only || only.includes(j.id)) && !existsSync(join(OUT, j.group, `${j.id}.png`)));
writeFileSync(join(mkdir(OUT), 'prompts.json'), JSON.stringify(list, null, 1));
console.log(`${list.length} subjects, ${todo.length} to generate, ${jobs} at a time`);

function mkdir(dir: string): string { mkdirSync(dir, { recursive: true }); return dir; }

function run(job: Job): Promise<boolean> {
  const dir = mkdir(join(OUT, 'work', job.id));
  const prompt = `Generate exactly one image with your built-in image generation tool, then copy the generated PNG into the current directory as out.png. Do nothing else and write no code.\n\nImage: ${job.prompt}`;
  return new Promise(resolve => {
    const p = spawn(codex, ['exec', '-m', 'gpt-6.1-sol', '-c', 'model_reasoning_effort=medium', '--skip-git-repo-check', '--ephemeral', '-s', 'workspace-write', '-C', dir, '-'], { stdio: ['pipe', 'ignore', 'ignore'] });
    p.stdin.end(prompt);
    const timer = setTimeout(() => p.kill(), 10 * 60_000);
    p.on('close', () => {
      clearTimeout(timer);
      const png = join(dir, 'out.png');
      if (!existsSync(png)) return resolve(false);
      renameSync(png, join(mkdir(join(OUT, job.group)), `${job.id}.png`));
      resolve(true);
    });
  });
}

const failed: string[] = [];
let next = 0, done = 0;
await Promise.all(Array.from({ length: Math.min(jobs, todo.length) }, async () => {
  while (next < todo.length) {
    const job = todo[next++]!;
    const ok = (await run(job)) || (await run(job));
    if (!ok) failed.push(job.id);
    console.log(`${++done}/${todo.length} ${ok ? 'ok  ' : 'FAIL'} ${job.group}/${job.id}`);
  }
}));
console.log(failed.length ? `failed: ${failed.join(',')}` : 'all done');
if (failed.length) process.exitCode = 1;
