// MPES §10.3, Codex G3 review: a disposed 3D stage leaves nothing listening. A listener left on the document, the
// motion query or the canvas kept a disposed stage alive and could restart its lost-context check after disposal.
// The stage cannot be built without WebGL here, so this reads its source as TypeScript sees it: every listener it adds,
// except on the orbit controls (which their own dispose removes), passes a plain options object whose one `signal` is
// the stage's own controller's, and dispose aborts that same controller. Two reviews found earlier text matching fooled
// (the word `signal` in a comment, another controller's signal, a spread overriding it), so the check proves itself
// against each.
import { readFileSync } from 'node:fs';
import ts from 'typescript';
import { describe, expect, it } from 'vitest';

const SOURCE = readFileSync('source/showcase/model.ts', 'utf8');

/** `this.#listening`, and `this.#listening.signal`, as written. */
const isListening = (node: ts.Node): boolean => ts.isPropertyAccessExpression(node) && node.expression.kind === ts.SyntaxKind.ThisKeyword && node.name.getText() === '#listening';
const isListeningSignal = (node: ts.Node): boolean => ts.isPropertyAccessExpression(node) && node.name.text === 'signal' && isListening(node.expression);

/** Every `addEventListener` call in the source. */
function listenerCalls(file: ts.SourceFile): ts.CallExpression[] {
  const calls: ts.CallExpression[] = [];
  const visit = (node: ts.Node): void => {
    if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression) && node.expression.name.text === 'addEventListener') calls.push(node);
    ts.forEachChild(node, visit);
  };
  visit(file);
  return calls;
}

/** What is wrong with a stage source's listener disposal; empty when every listener goes with the stage. */
function disposalFaults(source: string): string[] {
  const file = ts.createSourceFile('model.ts', source, ts.ScriptTarget.Latest, true);
  const faults: string[] = [];
  // The one `signal` binding in the file is destructured from the stage's controller.
  const bindings: ts.Node[] = [];
  const visit = (node: ts.Node): void => {
    if ((ts.isVariableDeclaration(node) || ts.isParameter(node) || ts.isBindingElement(node)) && ts.isIdentifier(node.name) && node.name.text === 'signal') bindings.push(node);
    ts.forEachChild(node, visit);
  };
  visit(file);
  const own = bindings.length === 1 && ts.isBindingElement(bindings[0]!) && !bindings[0].propertyName && !bindings[0].dotDotDotToken
    && ts.isVariableDeclaration(bindings[0].parent.parent) && !!bindings[0].parent.parent.initializer && isListening(bindings[0].parent.parent.initializer);
  if (!own) faults.push('signal is not the #listening signal');
  let controller = false;
  for (const member of file.statements.filter(ts.isClassDeclaration).flatMap(c => [...c.members])) {
    if (ts.isPropertyDeclaration(member) && member.name.getText() === '#listening' && member.initializer && ts.isNewExpression(member.initializer)
      && member.initializer.expression.getText() === 'AbortController') controller = true;
  }
  if (!controller) faults.push('no #listening controller');
  for (const call of listenerCalls(file)) {
    const receiver = (call.expression as ts.PropertyAccessExpression).expression.getText();
    if (receiver === 'this.#controls') continue;
    const options = call.arguments[2];
    const name = `${receiver} ${call.arguments[0]?.getText()}`;
    if (call.arguments.length !== 3 || !options || !ts.isObjectLiteralExpression(options)) { faults.push(`${name} has no options object`); continue; }
    if (options.properties.some(p => !ts.isPropertyAssignment(p) && !ts.isShorthandPropertyAssignment(p))) { faults.push(`${name} options are not plain properties`); continue; }
    const signals = options.properties.filter(p => p.name?.getText() === 'signal');
    const value = signals.length === 1 ? (ts.isShorthandPropertyAssignment(signals[0]!) ? signals[0].name : (signals[0] as ts.PropertyAssignment).initializer) : undefined;
    if (!value || !((ts.isIdentifier(value) && value.text === 'signal' && own) || isListeningSignal(value))) faults.push(`${name} has no stage signal`);
  }
  const dispose = file.statements.filter(ts.isClassDeclaration).flatMap(c => [...c.members])
    .find((m): m is ts.MethodDeclaration => ts.isMethodDeclaration(m) && m.name.getText() === 'dispose');
  const aborts = dispose?.body?.statements.some(s => ts.isExpressionStatement(s) && ts.isCallExpression(s.expression) && s.expression.arguments.length === 0
    && ts.isPropertyAccessExpression(s.expression.expression) && s.expression.expression.name.text === 'abort' && isListening(s.expression.expression.expression));
  if (!aborts) faults.push('dispose does not abort #listening');
  return faults;
}

describe('3D stage disposal (MPES §10.3)', () => {
  it('finds the stage listeners', () => {
    expect(listenerCalls(ts.createSourceFile('model.ts', SOURCE, ts.ScriptTarget.Latest, true)).length).toBeGreaterThanOrEqual(8);
  });

  it('removes every listener outside the orbit controls on dispose', () => {
    expect(disposalFaults(SOURCE)).toEqual([]);
  });

  it('catches a listener the stage controller would not remove', () => {
    const mutations: [string, string][] = [
      ["}, { signal });\n    this.canvas.addEventListener('webglcontextrestored', event", "}, { /* signal */ });\n    this.canvas.addEventListener('webglcontextrestored', event"],
      ["() => this.#loop(), { signal });", "() => this.#loop(), { signal: new AbortController().signal });"],
      ["() => this.#loop(), { signal });", "() => this.#loop() /* signal */);"],
      ['const { signal } = this.#listening;', 'const { signal } = new AbortController();'],
      ['this.#listening.abort();', '// this.#listening.abort();'],
      ['{ capture: true, passive: true, signal });', '{ capture: true, passive: true, signal, ...{ signal: new AbortController().signal } });'],
      ['{ capture: true, passive: true, signal });', '{ capture: true, passive: true, signal, signal: new AbortController().signal });'],
      ['this.#listening.abort();', 'if (Math.random() > 2) this.#listening.abort();'],
    ];
    for (const [from, to] of mutations) {
      expect(SOURCE, from).toContain(from);
      expect(disposalFaults(SOURCE.replace(from, to)), to).not.toEqual([]);
    }
  });
});
