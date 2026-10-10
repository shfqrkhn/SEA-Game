// Test-only page: renders every illustration and builds every mission vehicle with all parts of
// a category, so browser tests can inspect them. Bundled by tests/e2e/art.spec.ts; never shipped.
import { buildVehicle, vehicleStats } from '../../../source/bay/bay.ts';
import { CARDS, MISSIONS, type Category } from '../../../source/domain/data.ts';
import { cardArt, vehicleArt } from '../../../source/ui/art.ts';

const root = document.getElementById('art')!;
for (const m of MISSIONS) root.appendChild(vehicleArt(m.id, m.title.en)).setAttribute('data-id', `vehicle-${m.id}`);
root.appendChild(cardArt('TRAIN-CAP', 'PRACTICE', 'Training capacity')).setAttribute('data-id', 'TRAIN-CAP');
for (const c of CARDS) root.appendChild(cardArt(c.id, c.category, `${c.id} ${c.title.en}`)).setAttribute('data-id', c.id);

// Largest legal build per mission: two parts per round, preferring geometry-bearing categories.
const geometry: Category[] = ['CAPACITY', 'MOBILITY', 'FIREPOWER', 'PROTECTION', 'COMMS', 'SA', 'ACCESSORIES'];
const parts = CARDS.filter(c => geometry.includes(c.category)).slice(0, 14).map(c => ({ id: c.id, category: c.category }));
(window as unknown as { bayStats: unknown }).bayStats = MISSIONS.map(m => ({ mission: m.id, ...vehicleStats(buildVehicle({ mission: m.id, parts })) }));
