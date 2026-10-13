// G2 item 2: the licence and notices keep their files verbatim but display as reflowed paragraphs, so the
// dialog wraps each line once, at its own width, instead of at the file's hard breaks as well.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { reflow } from '../../source/ui/reflow.ts';

describe('reflow for display (About dialog)', () => {
  it('joins hard-wrapped lines and keeps blank-line paragraph breaks', () => {
    expect(reflow('One line\nwrapped here.\n\nSecond  paragraph.\n')).toEqual([
      { kind: 'paragraph', text: 'One line wrapped here.' },
      { kind: 'paragraph', text: 'Second paragraph.' },
    ]);
  });

  it('keeps headings and lists, with continuation lines joined to their item', () => {
    expect(reflow('# Title\n\nIntro\n\n## Part 2\nBody text\n\n- first\n  continued\n- second\n1. third')).toEqual([
      { kind: 'heading', text: 'Title' },
      { kind: 'paragraph', text: 'Intro' },
      { kind: 'heading', text: 'Part 2' },
      { kind: 'paragraph', text: 'Body text' },
      { kind: 'list', items: ['first continued', 'second', 'third'] },
    ]);
  });

  it('shows Markdown code spans as plain text', () => {
    expect(reflow('Scripts in `art/blender/` and **bold**.')).toEqual([{ kind: 'paragraph', text: 'Scripts in art/blender/ and bold.' }]);
  });

  it('loses no word of the shipped licence and notices', () => {
    for (const file of ['LICENSE', 'THIRD_PARTY_NOTICES.md']) {
      const source = readFileSync(file, 'utf8');
      const blocks = reflow(source);
      const shown = blocks.flatMap(b => b.kind === 'list' ? b.items : [b.text]).join(' ');
      const words = (s: string) => s.replace(/[`*]/g, '').replace(/^#+ /gm, '').split(/\s+/).filter(Boolean);
      expect(words(shown), file).toEqual(words(source));
      for (const b of blocks) for (const text of b.kind === 'list' ? b.items : [b.text]) expect(text, file).not.toMatch(/\n|\s{2}/);
    }
  });
});
