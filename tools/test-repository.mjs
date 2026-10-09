// Guard the maintained repository against accidental publication of scratchwork.
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {readFileSync,readdirSync} from 'node:fs';
const root=new URL('../',import.meta.url);
const git=(...args)=>execFileSync('git',args,{cwd:root,encoding:'utf8'}).trim();
const paths=git('ls-files').split('\n').filter(Boolean);
const forbidden=/^(?:previews\/|docs\/(?:game-design|reference|evidence\/(?:convergence|audit-runs))\/|\.artifacts\/|qa\.html$|SEA_(?:Instructor|Student)_Standalone\.html$)|(?:^|\/)(?:node_modules|__pycache__)\/|(?:^|\/)review-game(?:-entry)?\.mjs$/;
for(const path of paths)assert(!forbidden.test(path),'Not a maintained game input/output: '+path);
assert(paths.includes('dist/index.html'),'Primary runtime must be tracked');
assert.deepEqual(readdirSync(new URL('dist/',root)),['index.html'],'Sole runtime distribution');
assert(paths.includes('LICENSE')&&paths.includes('THIRD_PARTY_NOTICES.md'),'Required source notices');
assert.match(readFileSync(new URL('index.html',root),'utf8'),/\.\/dist\/index\.html/,'Hosted entry uses primary runtime');
assert.equal(git('check-ignore','.artifacts/guard-check.json'),'.artifacts/guard-check.json','Local packets/logs stay out of Git');
console.log('Maintained repository excludes exploratory previews, concepts, snapshots, scratch outputs and dependency installs; sole runtime and notices PASS');
