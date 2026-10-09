import assert from 'node:assert/strict';
import {build} from '../samples/threejs-recovery/node_modules/esbuild/lib/main.js';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const compiled=await build({stdin:{contents:"export * from './source/three/interface.mjs';",resolveDir:root,sourcefile:'interface-contract.mjs'},bundle:true,write:false,platform:'node',format:'esm',nodePaths:[fileURLToPath(new URL('../samples/threejs-recovery/node_modules',import.meta.url))]});
const api=await import('data:text/javascript;base64,'+Buffer.from(compiled.outputFiles[0].text).toString('base64'));

const originalDocument=globalThis.document,draws=[];
function width(value,size=14){return [...String(value)].reduce((sum,char)=>sum+(char==='W'?size:char==='i'?size*.25:size*.49),0);}
globalThis.document={createElement(){const canvas={width:0,height:0};let scale=1;const ctx={font:'14px system-ui',scale(x){scale=x;},measureText(value){return {width:width(value,Number(this.font.match(/([\d.]+)px/)?.[1]||14))};},fillText(value,x,y,maxWidth){const size=Number(this.font.match(/([\d.]+)px/)?.[1]||14);draws.push({value,x,y,maxWidth,size,w:canvas.width/scale,h:canvas.height/scale});}};canvas.getContext=()=>ctx;return canvas;}};
const ui=api.createInterface(),events=[];
try{
 assert.equal(typeof api.editorTextViewport,'function','Editor draft layout has an independently testable offset-preserving contract');
 assert.equal(typeof api.editorOffsetAtPoint,'function','Rendered draft pointer positions map to native text offsets');
 const pointerText='  Équipe 👩🏽‍🔧\nDeux  mots\n',pointerViewport=api.editorTextViewport(pointerText,200,5,pointerText.length,pointerText.length,value=>width(value));
 assert.equal(api.editorOffsetAtPoint(pointerViewport,0,0,value=>width(value)),0,'Left padding click maps to first native offset');
 assert.equal(api.editorOffsetAtPoint(pointerViewport,width(' ')*.75,0,value=>width(value)),1,'Leading spaces retain independent clickable native boundaries');
 assert.equal(api.editorOffsetAtPoint(pointerViewport,width('  Éq')+.1,0,value=>width(value)),4,'Measured French prefix maps to its actual UTF-16 offset');
 const joinedStart=pointerText.indexOf('👩'),joinedGlyph='👩🏽‍🔧',joinedX=width(pointerText.slice(0,joinedStart)),joinedWidth=width(joinedGlyph);
 assert.equal(api.editorOffsetAtPoint(pointerViewport,joinedX+joinedWidth*.25,0,value=>width(value)),joinedStart,'Click before emoji midpoint maps before the whole joined glyph');
 assert.equal(api.editorOffsetAtPoint(pointerViewport,joinedX+joinedWidth*.75,0,value=>width(value)),joinedStart+joinedGlyph.length,'Click after emoji midpoint skips the complete joined glyph');
 assert.equal(api.editorOffsetAtPoint(pointerViewport,999,18,value=>width(value)),pointerText.indexOf('\n',pointerText.indexOf('\n')+1),'Line-end click stops before its explicit newline');
 assert.equal(api.editorOffsetAtPoint(pointerViewport,0,999,value=>width(value)),pointerText.length,'Click below trailing empty line maps to actual draft end');
 const editorDraft='  Équipe 🚚\n\nDécision : préserver  les espaces.\n'+('élément '.repeat(1600));
 const editorEnd=editorDraft.length;
 const viewport=api.editorTextViewport(editorDraft,170,4,editorEnd-9,editorEnd,value=>width(value));
 assert(viewport.lines.length<=4,'Long drafts occupy a bounded viewport rather than thousands of pages');
 assert.equal(viewport.caret.offset,editorEnd,'UTF-16 caret follows the actual native selection end');
 assert(viewport.lines.some(line=>line.end===editorEnd),'End-of-draft cursor remains visible');
 const initial=api.editorTextViewport('  Équipe 🚚\n\nDeux  mots',170,8,9,11,value=>width(value));
 assert.equal(initial.lines.map(line=>line.text).join('\n'),'  Équipe 🚚\n\nDeux  mots','Whitespace and empty paragraphs are preserved');
 assert(initial.lines.every(line=>width(line.text)<=170),'Draft line widths use measured glyphs');
 assert(initial.selections.length,'Native selection receives visible highlight bounds');
 const unicode='e\u0301 👩🏽‍🔧 🚚\n';
 const unicodeLines=api.editorTextViewport(unicode,42,20,unicode.length,unicode.length,value=>width(value));
 assert.equal(unicodeLines.lines.map(line=>line.text).join(''),unicode.slice(0,-1),'Wrapping preserves combining accents and joined emoji content');
 assert(unicodeLines.lines.some(line=>line.text.includes('👩🏽‍🔧')),'A joined emoji is never split into disconnected glyph pieces');
 assert.equal(unicodeLines.lines.at(-1).text,'','Trailing newline leaves an editable empty final line');
 const reversed=api.editorTextViewport('Équipe 🚚 et atelier',110,2,18,0,value=>width(value));
 assert.equal(reversed.caret.offset,0,'Backward native selection follows its reported selection end');
 assert(reversed.selections.length,'Reversed bounds still produce visible selected content');
 assert.equal(api.editorOffsetAtPoint(reversed,0,0,value=>width(value)),0,'Pointer mapping remains independent of reversed selection highlights');
 const wrappedPointer=api.editorTextViewport('équipe  atelier 🚚',35,2,18,18,value=>width(value));
 assert(wrappedPointer.first>0,'Pointer holdout exercises a vertically scrolled wrapped draft');
 assert.equal(api.editorOffsetAtPoint(wrappedPointer,-3,-4,value=>width(value)),wrappedPointer.lines[0].start,'Viewport padding maps to the first visible wrapped line native offset');
 assert.equal(api.editorOffsetAtPoint(wrappedPointer,999,999,value=>width(value)),wrappedPointer.lines.at(-1).end,'Far padding maps to the final visible wrapped line end');
 const empty=api.editorTextViewport('',170,4,null,null,value=>width(value));
 assert.deepEqual(empty.caret,{offset:0,line:0,x:0},'Empty or unset native selection has a visible initial caret');
 const editorRows=[{key:'__editor_input',kind:'input',label:'Plan'},{key:'__editor_previous',kind:'button',label:'Previous'},{key:'__editor_next',kind:'button',label:'Next'},{key:'__editor_done',kind:'button',label:'Done'}];
 for(const [w,h]of [[320,180],[320,260],[320,640],[640,300],[1280,720]]){
  const start=draws.length;
  const editorLayout=ui.set({title:'Edit plan',lang:'fr',editor:{label:'Plan de l’équipe',value:editorDraft,multiline:true,selectionStart:editorEnd-9,selectionEnd:editorEnd,placeholder:'Votre plan'},rows:editorRows},(key,value)=>events.push([key,value]),w,h);
  assert(editorLayout.editorInput,'Draft has its own focused Three.js input viewport');
  assert.equal(editorLayout.pages,1,'Text editor never paginates draft into command pages');
  for(const key of ['__editor_previous','__editor_next','__editor_done']){
   const box=editorLayout.editorButtons.find(box=>box.row.key===key);
   assert(box&&box.w>=44&&box.h>=44,'All editor actions retain touch-sized targets');
   assert(box.y+box.h<=h&&box.x+box.w<=w,'Editing actions stay within desktop/mobile/short viewport');
   assert.equal(ui.hit(box.x+box.w/2,box.y+box.h/2),key);
  }
  assert.equal(ui.hit(editorLayout.editorInput.x+10,editorLayout.editorInput.y+10),'__editor_input');
  const clickedLine=editorLayout.editorViewport.lines[0];
  ui.activate('__editor_input',{x:editorLayout.editorInput.x+12,y:editorLayout.editorInput.y+8});
  assert.deepEqual(events.at(-1),['__editor_input',clickedLine.start],'Actual interface activation uses draft-local coordinates and visible scroll offset');
  assert(editorLayout.editorInput.y+editorLayout.editorInput.h<=editorLayout.editorButtons[0].y,'Draft never overlaps the fixed editing footer');
  assert.equal(ui.hit(1,1),'__panel','Modal blocks model drags outside the editor panel');
  assert(draws.slice(start).some(draw=>draw.value.includes('équipe')),'Three.js draws the field label');
  assert(draws.length-start<40,'Long drafts cause bounded draw allocation');
  for(const draw of draws.slice(start)){assert(width(draw.value,draw.size)<=draw.maxWidth+.01,'Editor text is not squeezed or clipped horizontally');assert(draw.y+draw.size*.625<=draw.h+.01,'Editor line fits its texture vertically');}
 }
 const selectRows=[...Array.from({length:30},(_,i)=>({key:'__editor_option:'+i,kind:'button',label:'Mission '+i,selected:i===19,disabled:i===3})),...editorRows.slice(1)];
 for(const [w,h]of [[320,180],[320,260],[320,640],[1280,720]]){
  let selectionLayout=ui.set({title:'Choose mission',editor:{type:'select',label:'Mission'},rows:selectRows},()=>{},w,h);
  const seenOptions=[];
  for(let page=0;page<selectionLayout.pages;page++){
   selectionLayout=ui.set({title:'Choose mission',page,editor:{type:'select',label:'Mission'},rows:selectRows},()=>{},w,h);
   for(const box of selectionLayout.placed){seenOptions.push(box.row.key);assert(box.y+box.h<=selectionLayout.editorButtons[0].y,'Options stay above editing footer');for(const pager of selectionLayout.pageButtons)assert(box.y+box.h<=pager.y||pager.y+pager.h<=box.y,'Pagination never covers an option hit area');assert.equal(ui.hit(box.x+box.w/2,box.y+box.h/2),box.row.disabled?'__panel':box.row.key,'Option is not covered by pager or field navigation');}
  }
  assert.deepEqual(seenOptions,selectRows.filter(row=>row.key.startsWith('__editor_option:')).map(row=>row.key),'Every select option is reachable exactly once');
 }
 const words=Array.from({length:35},(_,i)=>'WWWWW'+i).join(' '),rows=[{key:'proceed',kind:'button',label:'Proceed to next lot',primary:true,section:'task'},...Array.from({length:8},(_,i)=>({key:'help-'+i,kind:i%2?'button':'text',label:words+' '+i,section:'help'})),{key:'locale',kind:'button',label:'FR',utility:'language'}];
 for(const [w,h]of [[320,260],[320,640],[640,300],[1280,720]]){
  let layout=ui.set({title:'Help',section:'help',rows},(key,value)=>events.push([key,value]),w,h),count=layout.pages;
  const retained=new Map();
  for(let page=0;page<count;page++){
   const start=draws.length;layout=ui.set({title:'Help',section:'help',page,rows},(key,value)=>events.push([key,value]),w,h);
   assert.equal(layout.page,page,'Every advertised page is selectable');
   assert(layout.placed.length,'An advertised content page cannot silently omit its rows');
   for(const item of layout.placed){retained.set(item.row.key,[...(retained.get(item.row.key)||[]),item.row.label]);assert(item.y+item.h<=layout.panel.y+layout.panel.h-layout.footerHeight,'Content remains above pinned footer');}
   for(const d of draws.slice(start)){assert(width(d.value,d.size)<=d.maxWidth+.01,'Drawing does not squeeze/clip wide glyph text');assert(d.y+d.size*.625<=d.h+.01,'Full measured line box lies within its texture');}
   assert.equal(ui.hit(layout.primaryButton.x+12,layout.primaryButton.y+12),'proceed');
  }
  for(const row of rows.filter(r=>r.section==='help'))assert.equal(retained.get(row.key)?.join(' ').replace(/\s+/g,' ').trim(),row.label,'Wide-glyph content is completely reachable without hidden continuation text');
 }
 const huge='W'.repeat(120);const wrapped=api.wrapInterfaceText(huge,64,value=>width(value));assert.equal(wrapped.join(''),huge,'Unbroken tokens preserved');assert(wrapped.every(line=>width(line)<=64),'Unbroken tokens fitted by measurement');
 // Public append-only history stays readable as events, including corrected
 // and French results. This bounds navigation without dropping older records.
 for(const language of ['en','fr']){
  const records=Array.from({length:72},(_,i)=>({key:'event-'+i,kind:'text',section:'task',label:language==='en'?`Round ${Math.floor(i/10)+1} Lot ${i%10+1} CAP-C ${i===1?'Void':'Team 2'} $250,000`:`Ronde ${Math.floor(i/10)+1} Lot ${i%10+1} CAP-C ${i===1?'Annulé':'Équipe 2'} 250 000 $`}));
  const heading={key:'ledger-heading',kind:'text',section:'task',label:language==='en'?'Final append-only ledger':'Registre final'};
  for(const [w,h]of [[320,640],[1280,720]]){
   let page=ui.set({title:'Closed',lang:language,section:'task',rows:[heading,...records]},()=>{},w,h);
   if(w===1280)assert(page.pages<=12,'72 contextual ledger entries fit at most12 desktop pages instead of40 fragmented pages');
   const reached=[];
   for(let i=0;i<page.pages;i++){
    page=ui.set({title:'Closed',lang:language,section:'task',page:i,rows:[heading,...records]},()=>{},w,h);
    for(const item of page.placed){reached.push(item.row.key);assert(item.y+item.h<=page.panel.y+page.panel.h-page.footerHeight,'History cannot overlap footer');}
   }
   assert.deepEqual(reached,[heading,...records].map(row=>row.key),'Every history event remains reachable once, in append order');
  }
 }
 ui.set({title:'Closed',rows:[]},()=>{},1280,720);
 const before=draws.length,layout=ui.layout;assert.equal(ui.resize(1280,720),layout);assert.equal(draws.length,before,'Unchanged resize allocates no textures');
 ui.dispose();assert.equal(ui.scene.children.length,0);ui.dispose();
 console.log('PASS: shared measured layout, wide-glyph continuation reachability, exact full-line texture bounds, persistent next action and unchanged-size reuse. CPU canvas stub only; GPU/browser/accessibility acceptance remains open.');
}finally{ui.dispose();globalThis.document=originalDocument;}
