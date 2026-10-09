// User scope amendment: no resource paths or loading/failure chain in either app.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
const source=readFileSync(new URL('../source/shared/presentation.js',import.meta.url),'utf8');
const engine=readFileSync(new URL('../source/shared/engine.js',import.meta.url),'utf8');
const ids=runInNewContext(engine+'\n[...CARD_INDEX.keys(),"TRAIN-CAP",...Object.values(MISSION_ARTWORK)]');
for(const href of ['https://shfqrkhn.github.io/SEA-Game/SEA_Student_Standalone.html','https://example.test/nested/game/?review=1#cards','file:///C:/classroom/SEA_Student_Standalone.html'])for(const online of [true,false]){
 const builtin=Object.fromEntries(ids.map(id=>[id,'<svg data-id="'+id+'" role="img"></svg>']));
 const art=runInNewContext(source+'\nart',{BUILTIN_CARD_ART:builtin,location:new URL(href),navigator:{onLine:online},lang:'en',esc:String});
 for(const id of ids){const html=art({id,title:{en:'Concept equipment'}});assert.match(html,/aria-label="Concept equipment"/);assert(html.includes('data-id="'+id+'"'));assert.doesNotMatch(html,/<img|\ssrc=|\shref=|data-sea-art/);}
}
assert.doesNotMatch(source,/function bindArtworkEvents|data-sea-art|new URL\(|navigator\.onLine/,'No external image loading/failure chain');
for(const role of ['Instructor','Student']){
 const html=readFileSync(new URL('../SEA_'+role+'_Standalone.html',import.meta.url),'utf8');
 const markup=html.replace(/<script>[\s\S]*?<\/script>/g,'');
 assert.doesNotMatch(markup,/<(?:script|img|link)[^>]+(?:src|href)=/,'No external runtime resource element');
 assert.doesNotMatch(markup,/sea3dToggle/,'No alternative 2D mode');
 assert.match(html,/img-src 'none'; connect-src 'none'/,'Resource loading is denied');
}
console.log('77 embedded illustrations, standalone network-independent resources and no fallback chain PASS');
