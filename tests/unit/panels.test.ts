// MPES §7, Codex G3 review: a render keeps open each panel the reader opened, known by its id (source/ui/view.ts
// panelKeys). A panel without an id would close on every render, and keying it by its place instead handed the
// instructor ledger's open state to a team's panel when the phase changed. So every panel the interface builds has an
// id. Read as TypeScript sees it: each `h('details', props, ...)` passes an object literal with an `id` property; the
// check proves itself against a panel without one and against an id only mentioned in a comment.
import { readdirSync, readFileSync } from 'node:fs';
import ts from 'typescript';
import { describe, expect, it } from 'vitest';

/** The `h('details', ...)` calls in a source that pass no `id`, by line; a details made any other way counts too. */
function panelsWithoutId(source: string): number[] {
  const file = ts.createSourceFile('ui.ts', source, ts.ScriptTarget.Latest, true);
  const faults: number[] = [];
  const line = (node: ts.Node) => file.getLineAndCharacterOfPosition(node.getStart()).line + 1;
  const visit = (node: ts.Node): void => {
    const callee = ts.isCallExpression(node) ? node.expression : null;
    const makes = callee && ((ts.isIdentifier(callee) && callee.text === 'h') || (ts.isPropertyAccessExpression(callee) && callee.name.text === 'createElement'));
    if (makes && ts.isCallExpression(node) && node.arguments[0] && ts.isStringLiteral(node.arguments[0]) && node.arguments[0].text === 'details') {
      const named = ts.isIdentifier(callee) && callee.text === 'h';
      const props = node.arguments[1];
      const id = props && ts.isObjectLiteralExpression(props) && props.properties.some(p =>
        (ts.isPropertyAssignment(p) || ts.isShorthandPropertyAssignment(p)) && p.name.getText() === 'id');
      if (!named || !id) faults.push(line(node));
    }
    ts.forEachChild(node, visit);
  };
  visit(file);
  return faults;
}

describe('every panel has an id, so a render keeps it open (MPES §7)', () => {
  it('holds for every interface source', () => {
    const files = readdirSync('source/ui').filter(f => f.endsWith('.ts'));
    const found = files.flatMap(f => {
      const source = readFileSync(`source/ui/${f}`, 'utf8');
      return panelsWithoutId(source).map(line => `${f}:${line}`);
    });
    expect(found).toEqual([]);
    // Some panel is found at all, so a rename of `h` cannot pass the check by finding nothing.
    expect(files.some(f => readFileSync(`source/ui/${f}`, 'utf8').includes("h('details', { "))).toBe(true);
  });

  it('fails a panel without an id, and one whose id is only in a comment', () => {
    expect(panelsWithoutId("h('details', { class: 'panel' }, h('summary', {}))")).toEqual([1]);
    expect(panelsWithoutId("h('details', {} /* id: 'x' */, h('summary', {}))")).toEqual([1]);
    expect(panelsWithoutId("document.createElement('details')")).toEqual([1]);
    expect(panelsWithoutId("h('details', { id }, h('summary', {}))")).toEqual([]);
    expect(panelsWithoutId("h('details', { class: 'panel', id: 'ledger' })")).toEqual([]);
  });
});
