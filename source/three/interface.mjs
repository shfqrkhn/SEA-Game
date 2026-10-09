import * as THREE from 'three';

// Pixel-coordinate scene UI. Only copied presentation data crosses this boundary.
export function interfaceLayout(width,height,count=0){
  width=Math.max(1,width);height=Math.max(1,height);
  // Short portrait/keyboard viewports prioritize reachable controls over the model.
  const wide=width>=850,short=!wide&&height<400,panel=wide?{x:width-Math.min(420,width*.4),y:0,w:Math.min(420,width*.4),h:height}:short?{x:0,y:0,w:width,h:height}:{x:0,y:Math.round(height*.42),w:width,h:Math.round(height*.58)};
  const model=wide?{x:0,y:0,w:panel.x,h:height}:{x:0,y:0,w:width,h:short?height:panel.y};
  const rowHeight=54,capacity=Math.max(1,Math.floor((panel.h-140)/rowHeight));
  return {panel,model,rowHeight,capacity,pages:Math.max(1,Math.ceil(count/capacity))};
}
export function hitInterface(layout,x,y,rows,page=0){
  const p=layout.panel;if(x<p.x||x>p.x+p.w||y<p.y||y>p.y+p.h)return null;
  if(y>=p.y+p.h-46){if(x<p.x+p.w/2)return '__previous';return '__next';}
  const placed=layout.placed?.find(r=>y>=r.y&&y<r.y+r.h);const index=Math.floor((y-p.y-88)/layout.rowHeight);if(!layout.placed&&(index<0||index>=layout.capacity))return '__panel';
  const row=layout.placed?placed?.row:rows[page*layout.capacity+index];return row&&row.kind!=='text'&&!row.disabled?row.key:'__panel';
}
// Split long informational rows into continuations rather than hide their text.
export function paginateRows(rows,width,height){
  const chars=Math.max(16,Math.floor((width-48)/8)),maxLines=Math.max(2,Math.floor((height-150)/18)),pages=[[]];let used=0;
  function wrap(value){const words=String(value??'').split(/\s+/),lines=[];let line='';for(let word of words){while(word.length>chars){if(line){lines.push(line);line='';}lines.push(word.slice(0,chars));word=word.slice(chars);}if(line.length+word.length+1>chars){lines.push(line);line=word;}else line+=(line?' ':'')+word;}if(line)lines.push(line);return lines;}
  for(const row of rows){const labels=wrap(row.label),values=wrap(row.value),all=[...labels,...values];for(let offset=0;offset<Math.max(1,all.length);offset+=maxLines){const lines=all.slice(offset,offset+maxLines),h=Math.max(48,lines.length*18+14);if(used+h>height-140&&pages.at(-1).length){pages.push([]);used=0;}pages.at(-1).push({row:{...row,label:lines.join('\n'),value:null},h});used+=h;}}
  return pages;
}
export function createInterface(){
  const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(0,1,0,1,-10,10);
  let snapshot={rows:[]},action=null,layout=interfaceLayout(1,1),page=0,lastSize=null;
  const resources=[];
  function clear(){for(const r of resources)r.dispose();resources.length=0;scene.clear();}
  function plane(x,y,w,h,color,z=0){const g=new THREE.PlaneGeometry(w,h),m=new THREE.MeshBasicMaterial({color,side:THREE.DoubleSide,toneMapped:false,depthTest:false,depthWrite:false});resources.push(g,m);const mesh=new THREE.Mesh(g,m);mesh.position.set(x+w/2,y+h/2,z);scene.add(mesh);}
  function text(value,x,y,w,h,size=14,color='#edf4ee'){
    const canvas=document.createElement('canvas'),scale=2;canvas.width=Math.max(2,Math.ceil(w*scale));canvas.height=Math.max(2,Math.ceil(h*scale));const ctx=canvas.getContext('2d');ctx.scale(scale,scale);ctx.font=`${size>=20?'600':'400'} ${size}px system-ui, sans-serif`;ctx.fillStyle=color;ctx.textBaseline='middle';
    const lines=[];for(const paragraph of String(value??'').split('\n')){const words=paragraph.split(/\s+/);let line='';for(const word of words){const next=line?line+' '+word:word;if(ctx.measureText(next).width>w-4&&line){lines.push(line);line=word;}else line=next;}if(line)lines.push(line);}lines.forEach((v,i)=>ctx.fillText(v,2,(i+.5)*size*1.25,w-4));
    const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;const m=new THREE.MeshBasicMaterial({map:t,transparent:true,depthTest:false,depthWrite:false,toneMapped:false,side:THREE.DoubleSide}),g=new THREE.PlaneGeometry(w,h);resources.push(t,m,g);const mesh=new THREE.Mesh(g,m);mesh.scale.y=-1;mesh.position.set(x+w/2,y+h/2,2);scene.add(mesh);
  }
  function render(width,height){
    lastSize=[width,height];clear();layout=interfaceLayout(width,height,snapshot.rows.length);const pages=paginateRows(snapshot.rows,layout.panel.w,layout.panel.h);layout.pages=pages.length;page=Math.min(Math.max(0,Number(snapshot.page)||0),layout.pages-1);camera.left=0;camera.right=width;camera.top=0;camera.bottom=height;camera.updateProjectionMatrix();
    const p=layout.panel;plane(p.x,p.y,p.w,p.h,'#18382e');plane(p.x,p.y,3,p.h,'#b5caaa',1);
    text(snapshot.title,p.x+20,p.y+14,p.w-40,30,22);text(snapshot.subtitle,p.x+20,p.y+48,p.w-40,36,12,'#bed2c5');
    let y=p.y+88;layout.placed=[];for(const item of pages[page]){const {row,h}=item;layout.placed.push({row,y,h});plane(p.x+14,y,p.w-28,h-6,row.kind==='text'?'#203e34':row.disabled?'#294038':'#355447',1);text(row.label,p.x+24,y+7,p.w-48,h-14,14,row.disabled?'#94a69a':'#f2f5ee');y+=h;}
    plane(p.x+14,p.y+p.h-42,p.w-28,34,'#25473b',1);text(`‹  Page ${page+1} / ${layout.pages}  ›`,p.x+28,p.y+p.h-37,p.w-56,26,14,'#d7dfc1');return layout;
  }
  return {scene,camera,set(next,onAction,width,height){snapshot={...next,rows:(next.rows||[]).map(r=>({...r}))};action=onAction;return render(width,height);},resize(width,height){return lastSize?.[0]===width&&lastSize?.[1]===height?layout:render(width,height);},hit(x,y){return hitInterface(layout,x,y,snapshot.rows,page);},activate(key){if(key==='__previous'||key==='__next'){const next=Math.max(0,Math.min(layout.pages-1,page+(key==='__next'?1:-1)));if(next!==page){snapshot.page=next;action?.(key,next);if(page!==next&&lastSize)render(...lastSize);}return;}if(key&&key!=='__panel')action?.(key);},get layout(){return layout;},dispose:clear};
}
