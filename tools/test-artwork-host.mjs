// A nested candidate URL must display its own pack, not the production root pack.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
const source=readFileSync(new URL('../source/shared/presentation.js',import.meta.url),'utf8');
const start=source.indexOf('function art(card){'),end=source.indexOf('\n}',start)+2;
assert.ok(start>=0&&end>start);
for(const [href,online,expected] of [
 ['https://shfqrkhn.github.io/SEA-Game/SEA_Student_Standalone.html',true,'https://shfqrkhn.github.io/SEA-Game/assets/v1/cards/ACC-A.webp'],
 ['https://shfqrkhn.github.io/SEA-Game/previews/artwork-candidate/SEA_Student_Standalone.html?review=1#cards',true,'https://shfqrkhn.github.io/SEA-Game/previews/artwork-candidate/assets/v1/cards/ACC-A.webp'],
 ['https://example.test/nested/game/',true,'https://example.test/nested/game/assets/v1/cards/ACC-A.webp'],
 ['file:///C:/classroom/SEA_Student_Standalone.html',true,'./assets/v1/cards/ACC-A.webp'],
 ['https://example.test/nested/game/',false,'./assets/v1/cards/ACC-A.webp']
]){
 const location=new URL(href),art=runInNewContext(source.slice(start,end)+'\n;art',{URL,location,navigator:{onLine:online},BUILTIN_CARD_ART:{'ACC-A':'<svg></svg>'},placeholderArt:()=>'<svg></svg>',artworkAssetPath:()=> 'cards/ACC-A.webp',lang:'en',esc:String});
 const html=art({id:'ACC-A',title:{en:'Recovery winch'}}),actual=html.match(/ src="([^"]+)"/)[1];assert.equal(actual,expected,href);
}
console.log('Candidate-relative hosted artwork and offline routes PASS');
