import * as THREE from 'three';

// Pixel-space presentation: this renderer owns no game rules, storage or DOM controls.
const GAP=8,INSET=12,LINE=18,TARGET=44;
const COLORS={panel:'#f7f7f2',ink:'#1f302b',muted:'#52675d',line:'#d6ded5',field:'#ffffff',accent:'#365a46',selected:'#e3ece0',disabled:'#edf0e9',disabledInk:'#78877c'};
const finiteSize=value=>Math.max(1,Number.isFinite(value)?value:1);
const inside=(box,x,y)=>box&&x>=box.x&&x<box.x+box.w&&y>=box.y&&y<box.y+box.h;

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

function plan(snapshot,width,height,measure){
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
  function plane(x,y,w,h,color,z=0,radius=0){
    if(w<=0||h<=0)return;let geometry;
    if(radius){const r=Math.min(radius,w/2,h/2),shape=new THREE.Shape();shape.moveTo(r,0);shape.lineTo(w-r,0);shape.quadraticCurveTo(w,0,w,r);shape.lineTo(w,h-r);shape.quadraticCurveTo(w,h,w-r,h);shape.lineTo(r,h);shape.quadraticCurveTo(0,h,0,h-r);shape.lineTo(0,r);shape.quadraticCurveTo(0,0,r,0);geometry=new THREE.ShapeGeometry(shape);geometry.translate(-w/2,-h/2,0);}else geometry=new THREE.PlaneGeometry(w,h);
    const material=new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide,toneMapped:false,depthTest:false,depthWrite:false});own(geometry,material);const mesh=new THREE.Mesh(geometry,material);mesh.position.set(x+w/2,y+h/2,z);scene.add(mesh);
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
    set(next,onAction,width,height){if(disposed)return layout;snapshot={...next,context:next.context?{...next.context}:undefined,rows:(next.rows||[]).map(row=>({...row}))};action=onAction;return render(width,height);},
    resize(width,height){return lastSize?.[0]===width&&lastSize?.[1]===height?layout:render(width,height);},
    hit(x,y){return disposed?null:hitInterface(layout,x,y,snapshot.rows,layout.page);},
    activate(key){if(disposed)return;if(key?.startsWith('__section:')){const box=layout.sectionButtons.find(box=>box.key===key);if(box){const previous=layout;snapshot.section=box.section;snapshot.page=0;action?.('__section',box.section);if(layout===previous&&lastSize)render(...lastSize);}return;}
      if(key==='__previous'||key==='__next'){const next=Math.max(0,Math.min(layout.pages-1,layout.page+(key==='__next'?1:-1)));if(next!==layout.page){snapshot.page=next;action?.(key,next);if(layout.page!==next&&lastSize)render(...lastSize);}return;}
      const row=snapshot.rows.find(row=>row.key===key);if(row&&row.kind!=='text'&&!row.disabled)action?.(key);
    },get layout(){return layout;},dispose(){if(disposed)return;disposed=true;action=null;snapshot={rows:[]};clear();}
  };
}
