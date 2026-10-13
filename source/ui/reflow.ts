// Display form of plain-text and Markdown licence files (About dialog): the files stay verbatim, but hard-wrapped
// lines are joined so the dialog wraps each paragraph once, at its own width.

export type Block =
  | { readonly kind: 'heading' | 'paragraph'; readonly text: string }
  | { readonly kind: 'list'; readonly items: readonly string[] };

const HEADING = /^#{1,6}\s+/;
const ITEM = /^\s*(?:[-*+]|\d+\.)\s+/;

/** Markdown code spans and emphasis markers shown as plain text; runs of white space collapsed. */
const plain = (text: string) => text.replace(/`([^`]*)`/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\s+/g, ' ').trim();

export function reflow(source: string): Block[] {
  const blocks: Block[] = [];
  let paragraph: string[] = [];
  let items: string[] = [];
  const flush = () => {
    if (paragraph.length) blocks.push({ kind: 'paragraph', text: plain(paragraph.join(' ')) });
    if (items.length) blocks.push({ kind: 'list', items: items.map(plain) });
    paragraph = []; items = [];
  };
  for (const line of source.replace(/\r\n?/g, '\n').split('\n')) {
    if (!line.trim()) { flush(); continue; }
    if (HEADING.test(line)) { flush(); blocks.push({ kind: 'heading', text: plain(line.replace(HEADING, '')) }); continue; }
    if (ITEM.test(line)) {
      if (paragraph.length) flush();
      items.push(line.replace(ITEM, ''));
      continue;
    }
    if (items.length) items[items.length - 1] += ` ${line}`;
    else paragraph.push(line);
  }
  flush();
  return blocks;
}
