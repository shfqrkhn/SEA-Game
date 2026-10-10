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

function apply(element: Element, props: Props): void {
  if (props.class) element.setAttribute('class', props.class);
  if (props.id) element.id = props.id;
  if (props.text !== undefined) element.textContent = props.text;
  for (const [name, value] of Object.entries(props)) {
    if (SPECIAL.has(name) || value === undefined || value === null || value === false) continue;
    if (name === 'style' || /^on/i.test(name)) throw new Error(`Unsafe attribute: ${name}`);
    element.setAttribute(name, value === true ? '' : String(value));
  }
  if (props.on) for (const [type, handler] of Object.entries(props.on)) element.addEventListener(type, handler);
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
