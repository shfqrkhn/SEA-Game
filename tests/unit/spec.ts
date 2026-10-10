// Independent oracle: reads canonical tables straight from docs/MPES.md (Appendix A, B and §6.6),
// so tests compare the implementation with the specification text, not with itself.
import { readFileSync } from 'node:fs';

const MPES = readFileSync(new URL('../../docs/MPES.md', import.meta.url), 'utf8');

export interface SpecCard { id: string; en: string; fr: string; startDollars: number; effects: Record<string, number> }

function rows(section: string): string[][] {
  return section.split('\n').filter(line => /^\| [A-Z]/.test(line) && !/^\| (ID|Mission ID|Round|Field|Version)/.test(line))
    .map(line => line.split('|').slice(1, -1).map(cell => cell.trim()));
}
function between(start: string, end: string): string {
  const from = MPES.indexOf(start), to = MPES.indexOf(end, from + start.length);
  if (from < 0 || to < 0) throw new Error(`MPES section not found: ${start}`);
  return MPES.slice(from, to);
}
function effects(text: string): Record<string, number> {
  const result: Record<string, number> = {};
  for (const part of text.split(',').map(s => s.trim()).filter(Boolean)) {
    const match = /^([A-Z]+) ([+−-])(\d+)$/.exec(part);
    if (!match) throw new Error(`Bad effect: ${part}`);
    result[match[1]!] = (match[2] === '+' ? 1 : -1) * Number(match[3]);
  }
  return result;
}

export function specCards(): SpecCard[] {
  const appendix = between('## Appendix A', '### A.9');
  const cards: SpecCard[] = [];
  for (const row of rows(appendix)) {
    if (row[0]!.startsWith('SE-')) cards.push({ id: row[0]!, en: row[1]!, fr: row[2]!, startDollars: 200_000, effects: effects(row[3]!) });
    else cards.push({ id: row[0]!, en: row[1]!, fr: row[2]!, startDollars: Number(row[3]!.replace(/,/g, '')), effects: effects(row[4]!) });
  }
  return cards;
}

export function specMissions(): { id: string; en: string; fr: string; minimums: Record<string, number> }[] {
  const table = between('| Mission ID | EN / FR |', '### 6.7');
  return rows(table).map(row => {
    const [en, fr] = row[1]!.split(' / ');
    const minimums: Record<string, number> = { CAP: +row[2]!, MOB: +row[3]!, FP: +row[4]!, PRO: +row[5]!, COM: +row[6]!, SA: +row[7]! };
    const special = /^(REC|MC) ≥ (\d+)$/.exec(row[8] ?? '');
    if (special) minimums[special[1]!] = Number(special[2]);
    return { id: row[0]!, en: en!, fr: fr!, minimums };
  });
}

export function specDealVectors(): Record<string, string[][]> {
  const appendix = between('## Appendix B', '## Appendix C');
  const result: Record<string, string[][]> = {};
  for (const block of appendix.split('**Seed `').slice(1)) {
    const seed = block.slice(0, 32);
    result[seed] = block.split('\n').filter(line => /^\| \d \|/.test(line))
      .map(line => line.split('|').slice(2, -1).map(cell => cell.trim()));
  }
  return result;
}
