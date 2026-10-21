// Safe DOM construction (MPES C-11): text is always set as text, never parsed as HTML.

export type Child = Node | string | number | null | undefined | false | readonly Child[];
type Handler = (event: Event) => void;
export interface Props {
  readonly class?: string;
  readonly id?: string;
  readonly text?: string;
  readonly on?: Readonly<Record<string, Handler>>;
  readonly value?: string;
  readonly checked?: boolean;
  readonly disabled?: boolean;
  readonly hidden?: boolean;
  readonly [attribute: string]: unknown;
}
const SPECIAL = new Set(['class', 'id', 'text', 'on', 'value', 'checked', 'disabled', 'hidden']);

export function append(parent: Node, children: readonly Child[]): void {
  for (const child of children) {
    if (child === null || child === undefined || child === false) continue;
    if (Array.isArray(child)) append(parent, child);
    else if (child instanceof Node) parent.appendChild(child);
    else parent.appendChild(document.createTextNode(String(child)));
  }
}

/** Each element's handlers, by event type. One listener per type calls the current one, so a render that keeps the
 *  element (morph) swaps its handlers without removing listeners. */
const handlers = new WeakMap<EventTarget, Record<string, Handler>>();
function call(this: EventTarget, event: Event): void { handlers.get(this)?.[event.type]?.call(this, event); }
function listen(element: Element, on: Readonly<Record<string, Handler>>): void {
  const own = handlers.get(element) ?? {};
  for (const [type, handler] of Object.entries(on)) {
    if (!own[type]) element.addEventListener(type, call);
    own[type] = handler;
  }
  handlers.set(element, own);
}

function apply(element: Element, props: Props): void {
  if (props.class) element.setAttribute('class', props.class);
  if (props.id) element.id = props.id;
  if (props.text !== undefined) element.textContent = props.text;
  for (const [name, value] of Object.entries(props)) {
    if (SPECIAL.has(name) || value === undefined || value === null || value === false) continue;
    if (name === 'style' || /^on/i.test(name)) throw new Error(`Unsafe attribute: ${name}`);
    element.setAttribute(name, value === true ? '' : String(value));
  }
  if (props.on) listen(element, props.on);
  if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement) {
    if (props.value !== undefined) element.value = props.value;
  } else if (props.value !== undefined) {
    element.setAttribute('value', props.value);
  }
  if (element instanceof HTMLInputElement && props.checked !== undefined) element.checked = props.checked;
  if ('disabled' in element && props.disabled !== undefined) (element as HTMLButtonElement).disabled = props.disabled;
  if (props.hidden !== undefined) (element as HTMLElement).hidden = props.hidden;
}

export function h<K extends keyof HTMLElementTagNameMap>(tag: K, props: Props = {}, ...children: Child[]): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);
  apply(element, props);
  append(element, children);
  return element;
}

const SVG_NS = 'http://www.w3.org/2000/svg';
export function svg<K extends keyof SVGElementTagNameMap>(tag: K, attributes: Readonly<Record<string, string | number>> = {}, ...children: (SVGElement | null | false)[]): SVGElementTagNameMap[K] {
  const element = document.createElementNS(SVG_NS, tag);
  for (const [name, value] of Object.entries(attributes)) {
    if (/^on/i.test(name) || name === 'href' || name === 'xlink:href') throw new Error(`Unsafe SVG attribute: ${name}`);
    element.setAttribute(name, String(value));
  }
  for (const child of children) if (child) element.appendChild(child);
  return element;
}

export function replaceChildren(parent: Element, ...children: Child[]): void {
  parent.replaceChildren();
  append(parent, children);
}

/**
 * Makes `parent`'s children match `next`'s, keeping every element that is still the same element: same tag, same id
 * (an input also the same type). A kept element takes the new one's attributes, handlers, value and checked state, and
 * its children are matched the same way; an element that is not kept is replaced by the new one. A child that is the
 * very same node in both (the showcase's stage) is left as it is. A rebuilt page made the browser restyle and lay out
 * all of it after every command (G3 CI run 39508660281: about 30 ms of a 3D purchase on the runner); a kept element
 * costs nothing, keeps its focus, its scroll and its caret, and a panel stays open (only the reader closes one).
 */
export function morph(parent: Element, next: Element): void {
  // An element with an id is found wherever it was among its siblings, so a field added before it does not replace it.
  const byId = new Map<string, Element>();
  for (const child of parent.children) if (child.id) byId.set(child.id, child);
  let old = parent.firstChild;
  for (const node of [...next.childNodes]) {
    const found = node instanceof Element && node.id ? byId.get(node.id) : undefined;
    if (old && same(old, node)) {
      if (old !== node) update(old, node);
      old = old.nextSibling;
    } else if (found && found !== old && found.parentNode === parent && same(found, node)) {
      parent.insertBefore(found, old);
      update(found, node);
    } else {
      parent.insertBefore(node, old);
    }
  }
  while (old) { const after = old.nextSibling; parent.removeChild(old); old = after; }
}

function same(old: Node, node: Node): boolean {
  if (old === node) return true;
  if (old.nodeType !== node.nodeType) return false;
  if (!(old instanceof Element) || !(node instanceof Element)) return old.nodeType === Node.TEXT_NODE || old.nodeType === Node.COMMENT_NODE;
  return old.namespaceURI === node.namespaceURI && old.tagName === node.tagName && old.id === node.id
    && (!(old instanceof HTMLInputElement) || old.type === (node as HTMLInputElement).type);
}

function update(old: Node, node: Node): void {
  if (!(old instanceof Element) || !(node instanceof Element)) {
    if (old.nodeValue !== node.nodeValue) old.nodeValue = node.nodeValue;
    return;
  }
  // A style is only ever set through the CSSOM (a bar's width): the policy refuses it as an attribute (style-src-attr).
  for (const { name } of [...old.attributes]) if (name !== 'style' && !node.hasAttribute(name) && !(name === 'open' && old instanceof HTMLDetailsElement)) old.removeAttribute(name);
  for (const { name, value } of node.attributes) if (name !== 'style' && old.getAttribute(name) !== value) old.setAttribute(name, value);
  if (old instanceof HTMLElement || old instanceof SVGElement) {
    const style = (node as HTMLElement).style.cssText;
    if (old.style.cssText !== style) old.style.cssText = style;
  }
  const on = handlers.get(node);
  for (const type of Object.keys(handlers.get(old) ?? {})) if (!on?.[type]) delete handlers.get(old)![type];
  if (on) listen(old, on);
  // Read before the children move: a select's new chosen option, moved into the live select, leaves the new one
  // falling back to its first option.
  const value = (node as HTMLInputElement).value, checked = (node as HTMLInputElement).checked;
  morph(old, node);
  if ((old instanceof HTMLInputElement || old instanceof HTMLTextAreaElement || old instanceof HTMLSelectElement) && old.value !== value) {
    // A field being typed in whose saved value is written back tidied (0123 as 123) keeps its caret where it was.
    const caret = old === document.activeElement && !(old instanceof HTMLSelectElement) ? selection(old) : null;
    old.value = value;
    if (caret) try { (old as HTMLInputElement).setSelectionRange(Math.min(caret[0], value.length), Math.min(caret[1], value.length)); } catch { /* no caret */ }
  }
  if (old instanceof HTMLInputElement && old.checked !== checked) old.checked = checked;
}

function selection(field: HTMLInputElement | HTMLTextAreaElement): [number, number] | null {
  try { return field.selectionStart === null || field.selectionEnd === null ? null : [field.selectionStart, field.selectionEnd]; } catch { return null; }
}

/** Dispatched on the document once a view has rebuilt its page, before the browser lays it out (see showcase/model.ts). */
export const RENDERED = 'sea-rendered';

/**
 * Names the document's language and title, writing only what changed. Writing the root's `lang`, even unchanged,
 * restyles the whole page; inside a command that then replaced the focused button, it cost a full style and layout
 * before the new view existed and slowed the one after it (G3 profile: about 12 and 15 ms a purchase at 4x CPU).
 */
export function nameDocument(lang: string, title: string): void {
  if (document.documentElement.lang !== lang) document.documentElement.lang = lang;
  if (document.title !== title) document.title = title;
}
