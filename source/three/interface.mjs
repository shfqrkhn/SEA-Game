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
  const p=layout.panel;if(x<p.x||x>p.x+p.w||y<p.y||y>p.y+p.h)return null;
  const navigation=layout.sectionButtons?.find(b=>x>=b.x&&x<b.x+b.w&&y>=b.y&&y<b.y+b.h);if(navigation)return navigation.key;
  const utility=layout.headerButtons?.find(b=>x>=b.x&&x<b.x+b.w&&y>=b.y&&y<b.y+b.h);if(utility)return utility.row.disabled?'__panel':utility.row.key;
  if(y>=p.y+p.h-46){if(x<p.x+p.w/2)return '__previous';return '__next';}
  const placed=layout.placed?.find(r=>y>=r.y&&y<r.y+r.h);const index=Math.floor((y-p.y-88)/layout.rowHeight);if(!layout.placed&&(index<0||index>=layout.capacity))return '__panel';
  const row=layout.placed?placed?.row:rows[page*layout.capacity+index];return row&&row.kind!=='text'&&!row.disabled?row.key:'__panel';
}
// Split long informational rows into continuations rather than hide their text.
export function paginateRows(rows,width,height,overhead=140){
  const chars=Math.max(16,Math.floor((width-48)/8)),maxLines=Math.max(2,Math.floor((height-overhead-10)/18)),pages=[[]];let used=0;
  function wrap(value){const words=String(value??'').split(/\s+/),lines=[];let line='';for(let word of words){while(word.length>chars){if(line){lines.push(line);line='';}lines.push(word.slice(0,chars));word=word.slice(chars);}if(line.length+word.length+1>chars){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return lines;}
  for(const row of rows){const labels=wrap(row.label),values=wrap(row.value),all=[...labels,...values];for(let offset=0;offset<Math.max(1,all.length);offset+=maxLines){const lines=all.slice(offset,offset+maxLines),h=Math.max(48,lines.length*18+14);if(used+h>height-overhead&&pages.at(-1).length){pages.push([]);used=0;}pages.at(-1).push({row:{...row,label:lines.join('\n'),value:null},h});used+=h;}}
  return pages;
}
export function createInterface(){
  const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(0,1,0,1,-10,10);
  let snapshot={rows:[]},action=null,layout=interfaceLayout(1,1),page=0,lastSize=null,sectionKeys=new Map();
  const resources=[];
  // Shared limestone/ink/sage direction; semantics and hit areas stay unchanged.
  const palette={panel:'#f1efe7',ink:'#202a29',muted:'#596359',line:'#c9cec2',info:'#e8e6de',field:'#fffef9',action:'#dde6d8',accent:'#465144',disabled:'#e4e4dd',disabledInk:'#73796f'};
  function clear(){for(const r of resources)r.dispose();resources.length=0;scene.clear();}
  function plane(x,y,w,h,color,z=0){const g=new THREE.PlaneGeometry(w,h),m=new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide,toneMapped:false,depthTest:false,depthWrite:false});resources.push(g,m);const mesh=new THREE.Mesh(g,m);mesh.position.set(x+w/2,y+h/2,z);scene.add(mesh);}
  function text(value,x,y,w,h,size=14,color=palette.ink,weight=size>=20?'600':'400'){
    const canvas=document.createElement('canvas'),scale=2;canvas.width=Math.max(2,Math.ceil(w*scale));canvas.height=Math.max(2,Math.ceil(h*scale));const ctx=canvas.getContext('2d');ctx.scale(scale,scale);ctx.font=`${weight} ${size}px system-ui, sans-serif`;ctx.fillStyle=color;ctx.textBaseline='middle';
    const lines=[];for(const paragraph of String(value??'').split('\n')){const words=paragraph.split(/\s+/);let line='';for(const word of words){const next=line?line+' '+word:word;if(ctx.measureText(next).width>w-4&&line){lines.push(line);line=word;}else line=next;}if(line)lines.push(line);}lines.forEach((v,i)=>ctx.fillText(v,2,(i+.5)*size*1.25,w-4));
    const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;const m=new THREE.MeshBasicMaterial({map:t,transparent:true,depthTest:false,depthWrite:false,toneMapped:false,side:THREE.DoubleSide}),g=new THREE.PlaneGeometry(w,h);resources.push(t,m,g);const mesh=new THREE.Mesh(g,m);mesh.scale.y=-1;mesh.position.set(x+w/2,y+h/2,2);scene.add(mesh);
  }
  function render(width,height){
    lastSize=[width,height];clear();const language=snapshot.rows.find(r=>r.utility==='language'),allContent=snapshot.rows.filter(r=>r.utility!=='language');
    const names=snapshot.lang==='fr'?{task:'En cours',teams:'\u00c9quipes',market:'Manche',tools:'Gestion',inspect:'Explorer',help:'Aide / sauvegarde'}:{task:'Current',teams:'Teams',market:'Round',tools:'Manage',inspect:'Inspect',help:'Help / save'};
    const sections=Object.keys(names).filter(key=>allContent.some(row=>(row.section||'task')===key));
    const selected=sections.includes(snapshot.section)?snapshot.section:sections[0]||'task';
    const content=allContent.filter(row=>(row.section||'task')===selected);
    layout=interfaceLayout(width,height,content.length);
    const compact=layout.panel.h<300,headerHeight=compact?48:88;
    const navRows=sections.length>1?(compact?1:Math.ceil(sections.length/3)):0;
    layout.contentY=headerHeight+navRows*48;layout.section=selected;sectionKeys=new Map();
    const pages=paginateRows(content,layout.panel.w,layout.panel.h,layout.contentY+48);layout.pages=pages.length;page=Math.min(Math.max(0,Number(snapshot.page)||0),layout.pages-1);camera.left=0;camera.right=width;camera.top=0;camera.bottom=height;camera.updateProjectionMatrix();
    const p=layout.panel;plane(p.x,p.y,p.w,p.h,palette.panel);plane(p.x,p.y,1,p.h,palette.line,1);
    layout.headerButtons=[];if(language){const b={row:language,x:p.x+p.w-62,y:p.y+(compact?0:10),w:48,h:44};layout.headerButtons.push(b);plane(b.x,b.y,b.w,b.h,palette.field,1);text(language.label,b.x+8,b.y+12,b.w-16,28,14,palette.accent);}
    text(snapshot.title,p.x+20,p.y+14,p.w-(language?100:40),30,22);if(!compact)text(snapshot.subtitle,p.x+20,p.y+48,p.w-40,36,12,palette.muted);plane(p.x+20,p.y+headerHeight-4,p.w-40,1,palette.line,1);
    layout.sectionButtons=[];
    const visibleSections=compact&&navRows?[sections[(sections.indexOf(selected)+sections.length-1)%sections.length],selected,sections[(sections.indexOf(selected)+1)%sections.length]]:sections;
    if(navRows)visibleSections.forEach((key,i)=>{const b={key:'__section:'+String(snapshot.sectionEpoch||0)+':'+key,x:p.x+14+(i%3)*(p.w-28)/3,y:p.y+headerHeight+Math.floor(i/3)*48,w:(p.w-28)/3-4,h:44};sectionKeys.set(b.key,key);layout.sectionButtons.push(b);plane(b.x,b.y,b.w,b.h,key===selected?palette.action:palette.field,1);text(names[key],b.x+6,b.y+9,b.w-12,32,12,key===selected?palette.ink:palette.muted);});
    let y=p.y+layout.contentY;layout.placed=[];for(const item of pages[page]){const {row,h}=item;layout.placed.push({row,y,h});const informational=row.kind==='text',actionable=!informational&&!row.disabled;
      const tone=row.emphasis==='danger'?'#eee0d8':row.emphasis==='primary'?'#cfddca':palette.action;
      plane(p.x+14,y,p.w-28,h-6,informational?palette.info:row.disabled?palette.disabled:row.kind==='button'?tone:palette.field,1);
      if(!informational){plane(p.x+14,y+h-7,p.w-28,1,palette.line,1);if(actionable)plane(p.x+14,y,3,h-6,row.emphasis==='danger'?'#915e49':palette.accent,1);}
      text(row.label,p.x+24,y+7,p.w-48,h-14,14,row.disabled?palette.disabledInk:informational?palette.muted:palette.ink);y+=h;}
    const footerY=p.y+p.h-42;plane(p.x+14,footerY,p.w-28,34,palette.field,1);plane(p.x+p.w/2,footerY+7,1,20,palette.line,1);
    text(`‹  Page ${page+1} / ${layout.pages}  ›`,p.x+28,p.y+p.h-37,p.w-56,26,14,palette.accent);return layout;
  }
  return {scene,camera,set(next,onAction,width,height){snapshot={...next,rows:(next.rows||[]).map(r=>({...r}))};action=onAction;return render(width,height);},resize(width,height){return lastSize?.[0]===width&&lastSize?.[1]===height?layout:render(width,height);},hit(x,y){return hitInterface(layout,x,y,snapshot.rows,page);},activate(key){if(key?.startsWith('__section:')){const next=sectionKeys.get(key);if(next){snapshot.section=next;snapshot.page=0;action?.('__section',next);if(lastSize)render(...lastSize);}return;}if(key==='__previous'||key==='__next'){const next=Math.max(0,Math.min(layout.pages-1,page+(key==='__next'?1:-1)));if(next!==page){snapshot.page=next;action?.(key,next);if(page!==next&&lastSize)render(...lastSize);}return;}if(key&&key!=='__panel')action?.(key);},get layout(){return layout;},dispose:clear};
}
