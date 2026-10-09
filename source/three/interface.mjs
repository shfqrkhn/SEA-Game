import * as THREE from 'three';

// Pixel-space presentation: this renderer owns no game rules, storage or DOM controls.
const GAP=8,INSET=12,LINE=18,TARGET=44;
const COLORS={panel:'#f7f7f2',ink:'#1f302b',muted:'#52675d',line:'#d6ded5',field:'#ffffff',accent:'#365a46',selected:'#e3ece0',disabled:'#edf0e9',disabledInk:'#78877c'};
const finiteSize=value=>Math.max(1,Number.isFinite(value)?value:1);
const inside=(box,x,y)=>box&&x>=box.x&&x<box.x+box.w&&y>=box.y&&y<box.y+box.h;
const editorGlyphs=value=>typeof Intl.Segmenter==='function'?Array.from(new Intl.Segmenter(undefined,{granularity:'grapheme'}).segment(value),entry=>entry.segment):Array.from(value);

export function interfaceLayout(width,height,count=0){
  width=finiteSize(width);height=finiteSize(height);
  const wide=width>=850,short=!wide&&height<520;
  const panelWidth=Math.min(420,width*.4);
  const panel=wide?{x:width-panelWidth,y:0,w:panelWidth,h:height}:short?{x:0,y:0,w:width,h:height}:{x:0,y:Math.round(height*.42),w:width,h:height-Math.round(height*.42)};
  const model=wide?{x:0,y:0,w:panel.x,h:height}:{x:0,y:0,w:width,h:short?height:panel.y};
  const capacity=Math.max(1,Math.floor((panel.h-140)/54));
  return {panel,model,rowHeight:54,capacity,pages:Math.max(1,Math.ceil(count/capacity)),short};
}

// One wrapping algorithm supplies pagination AND texture drawing. Browser canvas
// measurement is injected; the pure helpers also work without a document.
export function wrapInterfaceText(value,width,measure=value=>String(value).length*8){
  const limit=Math.max(1,width),lines=[];
  for(const paragraph of String(value??'').split('\n')){
    const words=paragraph.trim().split(/\s+/).filter(Boolean);let line='';
    for(let word of words){
      if(line&&measure(line+' '+word)<=limit){line+=' '+word;continue;}
      if(line){lines.push(line);line='';}
      const glyphs=Array.from(word);
      while(glyphs.length&&measure(glyphs.join(''))>limit){
        let end=1;while(end<glyphs.length&&measure(glyphs.slice(0,end+1).join(''))<=limit)end++;
        lines.push(glyphs.splice(0,end).join(''));
      }
      line=glyphs.join('');
    }
    if(line)lines.push(line);else if(!words.length)lines.push('');
  }
  return lines;
}

// Native inputs report UTF-16 offsets. Keep those offsets while wrapping whole
// Unicode code points, preserving every space and explicit empty paragraph.
// Only the cursor's bounded window becomes textures; the draft never becomes
// an unbounded list of GUI pages or a second source of editable state.
export function editorTextViewport(value,width,lineCount,selectionStart,selectionEnd,measure=value=>String(value).length*8){
  const draft=String(value??''),limit=Math.max(1,width),count=Math.max(1,Math.floor(lineCount)||1);
  const offset=value=>Number.isFinite(value)?Math.min(draft.length,Math.max(0,Math.floor(value))):draft.length;
  const anchor=offset(selectionStart),focus=offset(selectionEnd),from=Math.min(anchor,focus),to=Math.max(anchor,focus);
  const all=[];let text='',start=0,end=0;
  for(const glyph of editorGlyphs(draft)){
    if(glyph==='\n'||glyph==='\r'||glyph==='\r\n'){all.push({text,start,end,breakEnd:end+glyph.length});text='';start=end+glyph.length;end=start;continue;}
    if(text&&measure(text+glyph)>limit){all.push({text,start,end,breakEnd:end});text='';start=end;}
    text+=glyph;end+=glyph.length;
  }
  all.push({text,start,end,breakEnd:end});
  let cursor=0;
  for(let i=0;i<all.length;i++)if(all[i].start<=focus)cursor=i;
  const first=Math.min(Math.max(0,cursor-Math.floor(count/2)),Math.max(0,all.length-count)),lines=all.slice(first,first+count);
  const glyphWidth=(line,position)=>{
    let text='',index=line.start;
    for(const glyph of editorGlyphs(line.text)){if(index+glyph.length>position)break;text+=glyph;index+=glyph.length;}
    return measure(text);
  };
  const caret={offset:focus,line:cursor-first,x:Math.min(limit,glyphWidth(all[cursor],focus))},selections=[];
  lines.forEach((line,i)=>{
    const a=Math.max(line.start,from),b=Math.min(line.end,to),newline=line.breakEnd>line.end&&from<=line.end&&to>line.end;
    if(b>a||newline){const x=Math.min(limit,glyphWidth(line,a)),right=Math.min(limit,glyphWidth(line,b));selections.push({line:i,x,w:Math.max(2,Math.min(limit-x,right-x+(newline?6:0)))});}
  });
  return {lines,caret,selections,first,total:all.length,above:first>0,below:first+lines.length<all.length};
}

// Coordinates are local to the actual drawn text origin, including its current
// scrolled window. A glyph's midpoint chooses the preceding/following boundary;
// no click can place the caret inside a surrogate pair or joined emoji cluster.
export function editorOffsetAtPoint(viewport,x,y,measure=value=>String(value).length*8){
  const lines=viewport?.lines||[];if(!lines.length)return 0;
  const index=Math.max(0,Math.min(lines.length-1,Math.floor((Number.isFinite(y)?y:0)/LINE))),line=lines[index];
  let offset=line.start,prefix='',previous=0;
  for(const glyph of editorGlyphs(line.text)){
    const next=measure(prefix+glyph);
    if(x<(previous+next)/2)return offset;
    prefix+=glyph;offset+=glyph.length;previous=next;
  }
  return line.end;
}

export function paginateRows(rows,width,height,overhead=140,measure=value=>String(value).length*8){
  const available=Math.max(TARGET,height-overhead),maxLines=Math.max(1,Math.floor((available-14)/LINE));
  const pages=[[]];let used=0;
  const pieces=(row,columns)=>{
    const rowWidth=(width-INSET*2-(columns-1)*GAP)/columns;
    const lines=[...wrapInterfaceText(row.label,rowWidth-24,measure),...(row.value?wrapInterfaceText(row.value,rowWidth-24,measure):[])];
    const result=[];
    for(let offset=0;offset<lines.length;offset+=maxLines){const selected=lines.slice(offset,offset+maxLines);result.push({row:{...row,label:selected.join('\n'),value:null},lines:selected,h:Math.max(TARGET,selected.length*LINE+14)});}
    return result;
  };
  const band=items=>{
    const h=Math.max(...items.map(item=>item.h));
    if(used+h>available&&pages.at(-1).length){pages.push([]);used=0;}
    items.forEach((item,column)=>pages.at(-1).push({...item,h,column,columns:items.length,lastInBand:column===items.length-1}));used+=h;
  };
  for(let i=0;i<rows.length;i++){
    if(width>=380&&rows[i].compact==='bid'&&rows[i+1]?.compact==='bid'){
      const a=pieces(rows[i],2),b=pieces(rows[++i],2);
      for(let part=0;part<Math.max(a.length,b.length);part++)band([a[part],b[part]].filter(Boolean));
    }else for(const item of pieces(rows[i],1))band([item]);
  }
  return pages;
}

export function hitInterface(layout,x,y,rows,page=0){
  if(layout.editor){
    for(const box of layout.editorButtons||[])if(inside(box,x,y))return box.row.disabled?'__panel':box.row.key;
    for(const box of layout.pageButtons||[])if(inside(box,x,y))return box.disabled?'__panel':box.key;
    if(inside(layout.editorInput,x,y))return '__editor_input';
    for(const box of layout.placed||[])if(inside(box,x,y))return box.row.disabled?'__panel':box.row.key;
    return inside(layout.modal,x,y)?'__panel':null;
  }
  // Direct view controls can lie outside the task panel.
  for(const box of [...(layout.inspectionButtons||[]),...(layout.primaryButton?[layout.primaryButton]:[]),...(layout.headerButtons||[])])if(inside(box,x,y))return box.row.disabled?'__panel':box.row.key;
  if(!inside(layout.panel,x,y))return null;
  for(const box of layout.sectionButtons||[])if(inside(box,x,y))return box.key;
  for(const box of layout.pageButtons||[])if(inside(box,x,y))return box.disabled?'__panel':box.key;
  if(layout.placed){const item=layout.placed.find(box=>inside(box,x,y));return item&&item.row.kind!=='text'&&!item.row.disabled?item.row.key:'__panel';}
  // Historical helper callers can still use fixed-row layouts.
  if(y>=layout.panel.y+layout.panel.h-46)return x<layout.panel.x+layout.panel.w/2?'__previous':'__next';
  const index=Math.floor((y-layout.panel.y-88)/layout.rowHeight),row=index>=0&&index<layout.capacity?rows[page*layout.capacity+index]:null;
  return row&&row.kind!=='text'&&!row.disabled?row.key:'__panel';
}

function editorPlan(snapshot,width,height,measure){
  const tinySelect=snapshot.editor.type==='select'&&height<220;
  const margin=8,panelWidth=Math.min(640,Math.max(1,width-margin*2)),panelHeight=Math.min(520,Math.max(1,height-(tinySelect?8:margin*2)));
  const p={x:(width-panelWidth)/2,y:(height-panelHeight)/2,w:panelWidth,h:panelHeight};
  const layout={panel:p,model:{x:0,y:0,w:width,h:height},modal:{x:0,y:0,w:width,h:height},editor:true,editorHeaderPaging:tinySelect,short:height<360,sectionButtons:[],inspectionButtons:[],headerButtons:[],primaryButton:null,placed:[],pageButtons:[],pages:1,page:0,footerHeight:tinySelect?48:56};
  const header=tinySelect?70:height<220?52:76,footerY=p.y+p.h-layout.footerHeight;
  const keys=['__editor_previous','__editor_next','__editor_done'],buttonWidth=(p.w-32-GAP*2)/3;
  layout.editorButtons=keys.map((key,i)=>({row:snapshot.rows.find(row=>row.key===key)||{key,kind:'button',label:key,disabled:true},x:p.x+16+i*(buttonWidth+GAP),y:footerY,w:buttonWidth,h:TARGET}));
  if(snapshot.editor.type==='select'){
    const options=snapshot.rows.filter(row=>row.key.startsWith('__editor_option:'));
    const pages=paginateRows(options,p.w,p.h,header+layout.footerHeight+(tinySelect?8:60),value=>measure(value,14));
    layout.pages=pages.length;layout.page=Math.min(Math.max(0,Math.floor(Number(snapshot.page)||0)),pages.length-1);
    let y=p.y+header;
    layout.placed=pages[layout.page].map(item=>{const box={...item,x:p.x+16,y,w:p.w-32};y+=item.h;return box;});
    if(pages.length>1)layout.pageButtons=[{key:'__previous',x:tinySelect?p.x+p.w-116:p.x+16,y:tinySelect?p.y+4:footerY-52,w:48,h:TARGET,disabled:layout.page===0},{key:'__next',x:p.x+p.w-64,y:tinySelect?p.y+4:footerY-52,w:48,h:TARGET,disabled:layout.page===pages.length-1}];
  }else{
    layout.editorInput={x:p.x+16,y:p.y+header,w:p.w-32,h:Math.max(TARGET,footerY-(p.y+header)-12)};
    const field=layout.editorInput;
    layout.editorViewport=editorTextViewport(snapshot.editor.value,field.w-24,Math.floor((field.h-16)/LINE),snapshot.editor.selectionStart,snapshot.editor.selectionEnd,value=>measure(value,14));
  }
  return {layout,header,compact:height<360};
}

function plan(snapshot,width,height,measure){
  if(snapshot.editor)return editorPlan(snapshot,width,height,measure);
  const layout=interfaceLayout(width,height),p=layout.panel,compact=p.h<340;
  const rows=snapshot.rows,language=rows.find(row=>row.utility==='language'),views=rows.filter(row=>row.utility==='inspection');
  const all=rows.filter(row=>!row.utility),primary=all.find(row=>row.primary&&row.kind==='button'&&!row.disabled);
  const names=snapshot.lang==='fr'?{task:'En cours',teams:'Équipes',market:'Manche',tools:'Gestion',inspect:'Explorer',help:compact?'Aide':'Aide / sauvegarde'}:{task:'Current',teams:'Teams',market:'Round',tools:'Manage',inspect:'Inspect',help:compact?'Help':'Help / save'};
  const sections=Object.keys(names).filter(key=>all.some(row=>(row.section||'task')===key));
  layout.section=sections.includes(snapshot.section)?snapshot.section:sections[0]||'task';
  const header=layout.short&&compact?0:compact?44:76;
  const navColumns=compact?Math.max(1,sections.length):Math.min(3,Math.max(1,sections.length));
  const navRows=sections.length>1?Math.ceil(sections.length/navColumns):0;
  const viewCols=Math.min(views.length,Math.max(1,Math.floor((layout.model.w-20)/48)));
  const toolbar=layout.short&&views.length?Math.ceil(views.length/viewCols)*48:0;
  layout.contentY=header+toolbar+navRows*48+8;
  const primarySize=compact?12:14,primaryLines=primary?wrapInterfaceText(primary.label,p.w-48,v=>measure(v,primarySize)):[];
  const primaryHeight=primary?Math.max(48,primaryLines.length*primarySize*1.25+18):0;
  const content=all.filter(row=>(row.section||'task')===layout.section&&row.key!==primary?.key);
  const pages=paginateRows(content,p.w,p.h,layout.contentY+primaryHeight+56,v=>measure(v,14));
  layout.pages=pages.length;layout.page=Math.min(Math.max(0,Math.floor(Number(snapshot.page)||0)),pages.length-1);
  const pager=pages.length>1||layout.short&&language?44:0;
  layout.footerHeight=primaryHeight+pager+12;
  layout.headerButtons=language?[{row:language,x:layout.short&&compact?p.x+p.w-116:p.x+p.w-60,y:layout.short&&compact?p.y+p.h-56:p.y+4,w:48,h:44}]:[];
  const target=layout.short?p:layout.model,cols=Math.max(1,viewCols),viewWidth=Math.min(108,(target.w-24-(cols-1)*4)/cols);
  layout.inspectionButtons=views.map((row,i)=>({row,x:target.x+12+(i%cols)*(viewWidth+4),y:target.y+(layout.short?header:12)+Math.floor(i/cols)*48,w:viewWidth,h:44}));
  layout.sectionButtons=navRows?sections.map((section,i)=>({section,key:'__section:'+String(snapshot.sectionEpoch||0)+':'+section,x:p.x+12+(i%navColumns)*(p.w-24)/navColumns,y:p.y+header+toolbar+Math.floor(i/navColumns)*48,w:(p.w-24)/navColumns-4,h:44,label:names[section]})):[];
  let y=p.y+layout.contentY;
  layout.placed=pages[layout.page].map(item=>{const w=(p.w-24-(item.columns-1)*8)/item.columns,x=p.x+12+item.column*(w+8);const placed={...item,x,y,w};if(item.lastInBand)y+=item.h;return placed;});
  let footerY=p.y+p.h-layout.footerHeight;
  layout.primaryButton=primary?{row:primary,x:p.x+12,y:footerY,w:p.w-24,h:primaryHeight,lines:primaryLines,size:primarySize}:null;
  if(primary)footerY+=primaryHeight;
  layout.pageButtons=pager?[{key:'__previous',x:p.x+12,y:footerY,w:48,h:44,disabled:layout.page===0},{key:'__next',x:p.x+p.w-60,y:footerY,w:48,h:44,disabled:layout.page===pages.length-1}]:[];
  return {layout,header,compact};
}

export function createInterface(){
  const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(0,1,0,1,-10,10),resources=new Set();
  const measuring=document.createElement('canvas').getContext('2d');
  const measure=(value,size=14)=>{measuring.font=`400 ${size}px system-ui, sans-serif`;return measuring.measureText(String(value)).width;};
  let snapshot={rows:[]},action=null,layout=interfaceLayout(1,1),lastSize=null,disposed=false;
  function clear(){scene.clear();for(const resource of resources)resource.dispose();resources.clear();}
  function own(...items){for(const item of items)resources.add(item);}
  function plane(x,y,w,h,color,z=0,radius=0,opacity=1){
    if(w<=0||h<=0)return;let geometry;
    if(radius){const r=Math.min(radius,w/2,h/2),shape=new THREE.Shape();shape.moveTo(r,0);shape.lineTo(w-r,0);shape.quadraticCurveTo(w,0,w,r);shape.lineTo(w,h-r);shape.quadraticCurveTo(w,h,w-r,h);shape.lineTo(r,h);shape.quadraticCurveTo(0,h,0,h-r);shape.lineTo(0,r);shape.quadraticCurveTo(0,0,r,0);geometry=new THREE.ShapeGeometry(shape);geometry.translate(-w/2,-h/2,0);}else geometry=new THREE.PlaneGeometry(w,h);
    const material=new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide,toneMapped:false,depthTest:false,depthWrite:false,transparent:opacity<1||Boolean(snapshot.editor),opacity});own(geometry,material);const mesh=new THREE.Mesh(geometry,material);mesh.position.set(x+w/2,y+h/2,z);scene.add(mesh);
  }
  function text(value,x,y,w,h,size=14,color=COLORS.ink,weight='400',prepared){
    if(w<=0||h<=0)return;
    const canvas=document.createElement('canvas'),scale=2;canvas.width=Math.max(2,Math.ceil(w*scale));canvas.height=Math.max(2,Math.ceil(h*scale));
    const ctx=canvas.getContext('2d');ctx.scale(scale,scale);ctx.font=`${weight} ${size}px system-ui, sans-serif`;ctx.fillStyle=color;ctx.textBaseline='middle';
    // Measure in the exact rendered weight, including bold navigation labels.
    const lines=prepared||wrapInterfaceText(value,w-4,v=>ctx.measureText(v).width),step=size*1.25;
    lines.forEach((line,i)=>{if((i+1)*step<=h+.01)ctx.fillText(line,2,(i+.5)*step,w-4);});
    const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
    const geometry=new THREE.PlaneGeometry(w,h),material=new THREE.MeshBasicMaterial({map:texture,transparent:true,depthTest:false,depthWrite:false,toneMapped:false,side:THREE.DoubleSide});own(texture,geometry,material);const mesh=new THREE.Mesh(geometry,material);mesh.scale.y=-1;mesh.position.set(x+w/2,y+h/2,2);scene.add(mesh);
  }
  function button(box,label,{selected=false,primary=false,size=12,lines}={}){
    const row=box.row||box,color=row.disabled?COLORS.disabled:primary?row.emphasis==='danger'?'#855744':COLORS.accent:selected?COLORS.accent:COLORS.field;
    plane(box.x,box.y,box.w,box.h-4,color,1,8);
    text(label,box.x+8,box.y+6,box.w-16,box.h-12,size,row.disabled?COLORS.disabledInk:primary||selected?'#fff':COLORS.ink,'400',lines);
  }
  function render(width,height){
    if(disposed)return layout;
    width=finiteSize(width);height=finiteSize(height);lastSize=[width,height];clear();
    const result=plan(snapshot,width,height,measure);layout=result.layout;const p=layout.panel;
    camera.left=0;camera.right=width;camera.top=0;camera.bottom=height;camera.updateProjectionMatrix();
    if(layout.editor){
      plane(0,0,width,height,'#203028',0,0,.62);plane(p.x,p.y,p.w,p.h,COLORS.panel,1,12);
      const tiny=result.header===52;
      text(snapshot.title,p.x+16,p.y+(tiny?5:layout.editorHeaderPaging?8:12),p.w-(layout.editorHeaderPaging?144:32),tiny?22:26,tiny||layout.editorHeaderPaging?16:18,COLORS.ink,'600');
      text(snapshot.editor.label,p.x+16,p.y+(tiny?29:layout.editorHeaderPaging?48:43),p.w-32,tiny||layout.editorHeaderPaging?18:26,tiny||layout.editorHeaderPaging?12:14,COLORS.muted);
      const field=layout.editorInput,viewport=layout.editorViewport;
      if(field){
        plane(field.x-1,field.y-1,field.w+2,field.h+2,COLORS.accent,1,8);plane(field.x,field.y,field.w,field.h,COLORS.field,1.1,8);
        for(const selection of viewport.selections)plane(field.x+12+selection.x,field.y+8+selection.line*LINE,Math.min(selection.w,field.w-24-selection.x),LINE,COLORS.selected,1.2);
        viewport.lines.forEach((line,i)=>text(line.text,field.x+10,field.y+8+i*LINE,field.w-20,LINE,14,COLORS.ink,'400',[line.text]));
        if(!snapshot.editor.value&&snapshot.editor.placeholder)text(snapshot.editor.placeholder,field.x+10,field.y+8,field.w-20,LINE,14,COLORS.muted);
        plane(field.x+12+viewport.caret.x,field.y+8+viewport.caret.line*LINE,1,LINE,COLORS.accent,3);
        if(viewport.above)plane(field.x+field.w-6,field.y+6,2,6,COLORS.muted,3);
        if(viewport.below)plane(field.x+field.w-6,field.y+field.h-12,2,6,COLORS.muted,3);
      }
      for(const box of layout.placed)button(box,box.row.label,{selected:box.row.selected,size:14,lines:box.lines});
      for(const box of layout.editorButtons)button(box,box.row.label,{primary:box.row.key==='__editor_done'});
      for(const box of layout.pageButtons)button(box,box.key==='__previous'?'‹':'›',{size:22});
      if(layout.pageButtons.length&&!layout.editorHeaderPaging)text(`${layout.page+1} / ${layout.pages}`,p.x+72,layout.pageButtons[0].y+9,p.w-144,26,12,COLORS.muted);
      return layout;
    }
    plane(p.x,p.y,p.w,p.h,COLORS.panel);plane(p.x,p.y,1,p.h,COLORS.line,1);
    if(result.header){text(snapshot.title,p.x+20,p.y+10,p.w-(layout.headerButtons.length?94:40),30,result.compact?18:24,COLORS.ink,'600');if(!result.compact){const context=snapshot.context,caption=context?[context.role,context.mission,context.team].filter(Boolean).join(' · '):snapshot.subtitle;text(caption,p.x+20,p.y+44,p.w-40,26,12,COLORS.muted);}}
    for(const box of layout.headerButtons)button(box,box.row.label);
    for(const box of layout.inspectionButtons){const label=box.w<72&&box.row.label==='Vue générale'?'Aperçu':box.row.label;button(box,label,{selected:box.row.selected,size:box.w<72?10:12});}
    for(const box of layout.sectionButtons){const selected=box.section===layout.section;plane(box.x,box.y,box.w,box.h,selected?COLORS.selected:COLORS.panel,1,8);if(selected)plane(box.x+8,box.y+41,box.w-16,2,COLORS.accent,1);text(box.label,box.x+5,box.y+9,box.w-10,32,result.compact?10:12,selected?COLORS.ink:COLORS.muted);}
    for(const box of layout.placed){const row=box.row,information=row.kind==='text';if(information)plane(box.x+8,box.y+box.h-4,box.w-16,1,COLORS.line,1);else{plane(box.x,box.y,box.w,box.h-6,row.disabled?COLORS.disabled:row.kind==='button'?COLORS.selected:COLORS.field,1,8);if(!row.disabled&&row.emphasis==='danger')plane(box.x,box.y,3,box.h-6,'#965c44',1);}
      text(row.label,box.x+10,box.y+7,box.w-20,box.h-14,14,row.disabled?COLORS.disabledInk:information?COLORS.muted:COLORS.ink,'400',box.lines);
    }
    if(layout.primaryButton)button(layout.primaryButton,layout.primaryButton.row.label,{primary:true,size:layout.primaryButton.size,lines:layout.primaryButton.lines});
    for(const box of layout.pageButtons)button(box,box.key==='__previous'?'‹':'›',{size:22});
    if(layout.pageButtons.length){const y=layout.pageButtons[0].y;text(`${layout.page+1} / ${layout.pages}`,p.x+68,y+9,p.w-(layout.short&&result.compact&&layout.headerButtons.length?188:136),26,12,COLORS.muted);}
    return layout;
  }
  return {scene,camera,
    set(next,onAction,width,height){if(disposed)return layout;snapshot={...next,context:next.context?{...next.context}:undefined,editor:next.editor?{...next.editor}:undefined,rows:(next.rows||[]).map(row=>({...row}))};action=onAction;return render(width,height);},
    resize(width,height){return lastSize?.[0]===width&&lastSize?.[1]===height?layout:render(width,height);},
    hit(x,y){return disposed?null:hitInterface(layout,x,y,snapshot.rows,layout.page);},
    activate(key,point){if(disposed)return;if(key?.startsWith('__section:')){const box=layout.sectionButtons.find(box=>box.key===key);if(box){const previous=layout;snapshot.section=box.section;snapshot.page=0;action?.('__section',box.section);if(layout===previous&&lastSize)render(...lastSize);}return;}
      if(key==='__previous'||key==='__next'){const next=Math.max(0,Math.min(layout.pages-1,layout.page+(key==='__next'?1:-1)));if(next!==layout.page){snapshot.page=next;action?.(key,next);if(layout.page!==next&&lastSize)render(...lastSize);}return;}
      const row=snapshot.rows.find(row=>row.key===key);if(row&&row.kind!=='text'&&!row.disabled){
        const field=layout.editorInput;
        if(key==='__editor_input'&&field&&Number.isFinite(point?.x)&&Number.isFinite(point?.y)&&inside(field,point.x,point.y))action?.(key,editorOffsetAtPoint(layout.editorViewport,point.x-field.x-12,point.y-field.y-8,value=>measure(value,14)));
        else action?.(key);
      }
    },get layout(){return layout;},dispose(){if(disposed)return;disposed=true;action=null;snapshot={rows:[]};clear();}
  };
}
