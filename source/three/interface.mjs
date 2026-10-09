import * as THREE from 'three';

// Pixel-coordinate scene UI. Only copied presentation data crosses this boundary.
export function interfaceLayout(width,height,count=0){
  width=Math.max(1,width);height=Math.max(1,height);
  // Short portrait/keyboard viewports prioritize reachable controls over the model.
  const wide=width>=850,short=!wide&&height<520,panel=wide?{x:width-Math.min(420,width*.4),y:0,w:Math.min(420,width*.4),h:height}:short?{x:0,y:0,w:width,h:height}:{x:0,y:Math.round(height*.42),w:width,h:Math.round(height*.58)};
  const model=wide?{x:0,y:0,w:panel.x,h:height}:{x:0,y:0,w:width,h:short?height:panel.y};
  const rowHeight=54,capacity=Math.max(1,Math.floor((panel.h-140)/rowHeight));
  return {panel,model,rowHeight,capacity,pages:Math.max(1,Math.ceil(count/capacity))};
}
export function hitInterface(layout,x,y,rows,page=0){
  const inside=b=>x>=b.x&&x<b.x+b.w&&y>=b.y&&y<b.y+b.h;
  const inspection=layout.inspectionButtons?.find(inside);if(inspection)return inspection.row.disabled?'__panel':inspection.row.key;
  if(layout.primaryButton&&inside(layout.primaryButton))return layout.primaryButton.row.disabled?'__panel':layout.primaryButton.row.key;
  const p=layout.panel;if(x<p.x||x>p.x+p.w||y<p.y||y>p.y+p.h)return null;
  const navigation=layout.sectionButtons?.find(b=>x>=b.x&&x<b.x+b.w&&y>=b.y&&y<b.y+b.h);if(navigation)return navigation.key;
  const utility=layout.headerButtons?.find(b=>x>=b.x&&x<b.x+b.w&&y>=b.y&&y<b.y+b.h);if(utility)return utility.row.disabled?'__panel':utility.row.key;
  if(layout.pageButtons){const button=layout.pageButtons.find(inside);if(button)return button.disabled?'__panel':button.key;}
  else if(y>=p.y+p.h-46){if(x<p.x+p.w/2)return '__previous';return '__next';}
  const placed=layout.placed?.find(r=>y>=r.y&&y<r.y+r.h&&(r.x===undefined||x>=r.x&&x<r.x+r.w));const index=Math.floor((y-p.y-88)/layout.rowHeight);if(!layout.placed&&(index<0||index>=layout.capacity))return '__panel';
  const row=layout.placed?placed?.row:rows[page*layout.capacity+index];return row&&row.kind!=='text'&&!row.disabled?row.key:'__panel';
}
// Split long informational rows into continuations rather than hide their text.
export function paginateRows(rows,width,height,overhead=140){
  const maxLines=Math.max(2,Math.floor((height-overhead-10)/18)),pages=[[]];let used=0;
  function wrap(value,chars){const words=String(value??'').split(/\s+/),lines=[];let line='';for(let word of words){while(word.length>chars){if(line){lines.push(line);line='';}lines.push(word.slice(0,chars));word=word.slice(chars);}if(line.length+word.length+1>chars){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return lines;}
  function pieces(row,columns){const chars=Math.max(12,Math.floor(((width-24-(columns-1)*8)/columns-20)/8)),all=[...wrap(row.label,chars),...wrap(row.value,chars)],result=[];for(let offset=0;offset<Math.max(1,all.length);offset+=maxLines){const lines=all.slice(offset,offset+maxLines);result.push({row:{...row,label:lines.join('\n'),value:null},h:Math.max(48,lines.length*18+14)});}return result;}
  function band(items){const h=Math.max(...items.map(item=>item.h));if(used+h>height-overhead&&pages.at(-1).length){pages.push([]);used=0;}items.forEach((item,column)=>pages.at(-1).push({...item,h,column,columns:items.length===2?2:1,lastInBand:column===items.length-1}));used+=h;}
  for(let index=0;index<rows.length;index++){
    const row=rows[index],paired=width>=380&&row.compact==='bid'&&rows[index+1]?.compact==='bid';
    if(paired){const first=pieces(row,2),second=pieces(rows[++index],2);for(let part=0;part<Math.max(first.length,second.length);part++){const items=[first[part],second[part]].filter(Boolean);band(items);}}
    else for(const item of pieces(row,1))band([item]);
  }
  return pages;
}
export function createInterface(){
  const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(0,1,0,1,-10,10);
  let snapshot={rows:[]},action=null,layout=interfaceLayout(1,1),page=0,lastSize=null,sectionKeys=new Map();
  const resources=[];
  const palette={panel:'#f7f7f2',ink:'#1f302b',muted:'#52675d',line:'#d6ded5',field:'#ffffff',accent:'#365a46',selected:'#e3ece0',disabled:'#edf0e9',disabledInk:'#78877c'};
  function clear(){for(const r of resources)r.dispose();resources.length=0;scene.clear();}
  function plane(x,y,w,h,color,z=0,radius=0){
    if(w<=0||h<=0)return;let g;
    if(radius){const r=Math.min(radius,w/2,h/2),s=new THREE.Shape();s.moveTo(r,0);s.lineTo(w-r,0);s.quadraticCurveTo(w,0,w,r);s.lineTo(w,h-r);s.quadraticCurveTo(w,h,w-r,h);s.lineTo(r,h);s.quadraticCurveTo(0,h,0,h-r);s.lineTo(0,r);s.quadraticCurveTo(0,0,r,0);g=new THREE.ShapeGeometry(s);g.translate(-w/2,-h/2,0);}else g=new THREE.PlaneGeometry(w,h);
    const m=new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide,toneMapped:false,depthTest:false,depthWrite:false});resources.push(g,m);const mesh=new THREE.Mesh(g,m);mesh.position.set(x+w/2,y+h/2,z);scene.add(mesh);
  }
  function text(value,x,y,w,h,size=14,color=palette.ink,weight='400'){
    if(w<=0||h<=0)return;const canvas=document.createElement('canvas'),scale=2;canvas.width=Math.max(2,Math.ceil(w*scale));canvas.height=Math.max(2,Math.ceil(h*scale));const ctx=canvas.getContext('2d');ctx.scale(scale,scale);ctx.font=`${weight} ${size}px system-ui, sans-serif`;ctx.fillStyle=color;ctx.textBaseline='middle';
    const lines=[];for(const paragraph of String(value??'').split('\n')){const words=paragraph.split(/\s+/);let line='';for(let word of words){while(ctx.measureText(word).width>w-4&&word.length>1){if(line){lines.push(line);line='';}let end=word.length;while(end>1&&ctx.measureText(word.slice(0,end)).width>w-4)end--;lines.push(word.slice(0,end));word=word.slice(end);}const next=line?line+' '+word:word;if(ctx.measureText(next).width>w-4&&line){lines.push(line);line=word;}else line=next;}if(line)lines.push(line);}lines.forEach((v,i)=>ctx.fillText(v,2,(i+.5)*size*1.25,w-4));
    const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;const m=new THREE.MeshBasicMaterial({map:t,transparent:true,depthTest:false,depthWrite:false,toneMapped:false,side:THREE.DoubleSide}),g=new THREE.PlaneGeometry(w,h);resources.push(t,m,g);const mesh=new THREE.Mesh(g,m);mesh.scale.y=-1;mesh.position.set(x+w/2,y+h/2,2);scene.add(mesh);
  }
  function render(width,height){
    lastSize=[width,height];clear();layout=interfaceLayout(width,height);const p=layout.panel,compact=p.h<340,language=snapshot.rows.find(r=>r.utility==='language'),inspection=snapshot.rows.filter(r=>r.utility==='inspection');
    const allContent=snapshot.rows.filter(r=>!r.utility),primary=allContent.find(r=>r.primary&&r.kind==='button'&&!r.disabled);
    const names=snapshot.lang==='fr'?{task:'En cours',teams:'Équipes',market:'Manche',tools:'Gestion',inspect:'Explorer',help:compact?'Aide':'Aide / sauvegarde'}:{task:'Current',teams:'Teams',market:'Round',tools:'Manage',inspect:'Inspect',help:compact?'Help':'Help / save'};
    const sections=Object.keys(names).filter(key=>allContent.some(row=>(row.section||'task')===key));
    const selected=sections.includes(snapshot.section)?snapshot.section:sections[0]||'task';
    const content=allContent.filter(row=>(row.section||'task')===selected&&row.key!==primary?.key);
    const short=layout.model.h===height&&p.y===0&&p.w===width,toolHeight=short&&inspection.length?48:0;
    const headerHeight=short&&compact?0:compact?44:76,navColumns=compact?Math.max(1,sections.length):Math.min(3,Math.max(1,sections.length)),navRows=sections.length>1?Math.ceil(sections.length/navColumns):0;
    layout.contentY=headerHeight+navRows*48+toolHeight+8;layout.section=selected;sectionKeys=new Map();
    const primaryHeight=primary?(compact?48:Math.max(52,Math.ceil((primary.label.length||0)/Math.max(18,Math.floor((p.w-56)/8)))*18+18)):0;
    const pageOverhead=layout.contentY+primaryHeight+56;
    const pages=paginateRows(content,p.w,p.h,pageOverhead);layout.pages=pages.length;page=Math.min(Math.max(0,Number(snapshot.page)||0),layout.pages-1);
    const pagerHeight=layout.pages>1||short&&language?44:0;layout.footerHeight=primaryHeight+pagerHeight+12;
    camera.left=0;camera.right=width;camera.top=0;camera.bottom=height;camera.updateProjectionMatrix();
    plane(p.x,p.y,p.w,p.h,palette.panel);plane(p.x,p.y,1,p.h,palette.line,1);
    if(headerHeight)text(snapshot.title,p.x+20,p.y+12,p.w-(language?94:40),30,compact?18:24,palette.ink,'600');
    if(!compact){const context=snapshot.context,caption=context?[context.role,context.mission].filter(Boolean).join(' · '):snapshot.subtitle;text(caption,p.x+20,p.y+44,p.w-40,26,12,palette.muted);}
    layout.headerButtons=[];if(language){const b={row:language,x:short&&compact?p.x+p.w-116:p.x+p.w-60,y:short&&compact?p.y+p.h-56:p.y+4,w:48,h:44};layout.headerButtons.push(b);plane(b.x,b.y,b.w,b.h,palette.field,1,8);text(language.label,b.x+10,b.y+13,b.w-20,26,13,palette.accent,'600');}
    layout.inspectionButtons=[];if(inspection.length){const target=short?p:layout.model,gap=4,left=target.x+12,available=target.w-24,cols=Math.min(inspection.length,Math.max(1,Math.floor((available+gap)/48))),buttonWidth=Math.min(108,(available-gap*(cols-1))/cols),toolY=target.y+(short?headerHeight:12);
      inspection.forEach((row,i)=>{const b={row,x:left+(i%cols)*(buttonWidth+gap),y:toolY+Math.floor(i/cols)*48,w:buttonWidth,h:44};layout.inspectionButtons.push(b);plane(b.x,b.y,b.w,b.h,row.disabled?palette.disabled:row.selected?palette.accent:palette.field,1,9);text(row.label,b.x+5,b.y+8,b.w-10,32,b.w<72?10:12,row.disabled?palette.disabledInk:row.selected?'#ffffff':palette.ink,row.selected?'600':'400');});}
    layout.sectionButtons=[];const navY=p.y+headerHeight+toolHeight;
    if(navRows)sections.forEach((key,i)=>{const b={key:'__section:'+String(snapshot.sectionEpoch||0)+':'+key,x:p.x+12+(i%navColumns)*(p.w-24)/navColumns,y:navY+Math.floor(i/navColumns)*48,w:(p.w-24)/navColumns-4,h:44};sectionKeys.set(b.key,key);layout.sectionButtons.push(b);plane(b.x,b.y,b.w,b.h,key===selected?palette.selected:palette.panel,1,8);if(key===selected)plane(b.x+8,b.y+41,b.w-16,2,palette.accent,1);text(names[key],b.x+5,b.y+9,b.w-10,32,compact?10:12,key===selected?palette.ink:palette.muted,key===selected?'600':'400');});
    let y=p.y+layout.contentY;layout.placed=[];for(const item of pages[page]){const {row,h}=item;const bottom=p.y+p.h-layout.footerHeight;if(y+h>bottom)break;const w=(p.w-24-((item.columns||1)-1)*8)/(item.columns||1),x=p.x+12+(item.column||0)*(w+8);layout.placed.push({row,x,w,y,h});const information=row.kind==='text',actionable=!information&&!row.disabled;
      if(!information){plane(x,y,w,h-6,row.disabled?palette.disabled:row.kind==='button'?palette.selected:palette.field,1,8);if(actionable&&row.emphasis==='danger')plane(x,y,3,h-6,'#965c44',1);}
      else plane(x+8,y+h-4,w-16,1,palette.line,1);
      const label=row.kind==='checkbox'?(row.label.includes('✓')?'● ':'○ ')+row.label:row.label;
      text(label,x+10,y+7,w-20,h-14,14,row.disabled?palette.disabledInk:information?palette.muted:palette.ink,row.kind==='button'?'500':'400');if(item.lastInBand!==false)y+=h;}
    layout.primaryButton=null;layout.pageButtons=[];let footerY=p.y+p.h-layout.footerHeight;
    if(primary){const b={row:primary,x:p.x+12,y:footerY,w:p.w-24,h:primaryHeight};layout.primaryButton=b;plane(b.x,b.y,b.w,b.h-4,primary.emphasis==='danger'?'#855744':palette.accent,1,10);text(primary.label,b.x+12,b.y+9,b.w-24,b.h-14,compact?(primary.label.length>70?10:12):14,'#ffffff','600');footerY+=primaryHeight;}
    if(pagerHeight){const previous={key:'__previous',x:p.x+12,y:footerY,w:48,h:44,disabled:page===0},next={key:'__next',x:p.x+p.w-60,y:footerY,w:48,h:44,disabled:page===layout.pages-1};layout.pageButtons.push(previous,next);for(const b of [previous,next]){plane(b.x,b.y,b.w,b.h-4,palette.field,1,8);text(b.key==='__previous'?'‹':'›',b.x+16,b.y+7,b.w-24,28,22,b.disabled?palette.disabledInk:palette.accent);}text(short&&compact?`${snapshot.title} · ${page+1}/${layout.pages}`:`${page+1} / ${layout.pages}`,p.x+68,footerY+9,p.w-(short&&compact&&language?188:136),30,short&&compact?10:12,palette.muted);}
    return layout;
  }
  return {scene,camera,set(next,onAction,width,height){snapshot={...next,context:next.context?{...next.context}:undefined,rows:(next.rows||[]).map(r=>({...r}))};action=onAction;return render(width,height);},resize(width,height){return lastSize?.[0]===width&&lastSize?.[1]===height?layout:render(width,height);},hit(x,y){return hitInterface(layout,x,y,snapshot.rows,page);},activate(key){if(key?.startsWith('__section:')){const next=sectionKeys.get(key);if(next){snapshot.section=next;snapshot.page=0;action?.('__section',next);if(lastSize)render(...lastSize);}return;}if(key==='__previous'||key==='__next'){const next=Math.max(0,Math.min(layout.pages-1,page+(key==='__next'?1:-1)));if(next!==page){snapshot.page=next;action?.(key,next);if(page!==next&&lastSize)render(...lastSize);}return;}const row=snapshot.rows.find(r=>r.key===key);if(row&&row.kind!=='text'&&!row.disabled)action?.(key);},get layout(){return layout;},dispose:clear};
}
