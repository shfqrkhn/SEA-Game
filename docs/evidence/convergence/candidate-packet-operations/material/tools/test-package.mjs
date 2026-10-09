#!/usr/bin/env node
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {packageKey,verifyPacket} from './package.mjs';
const root=mkdtempSync(join(tmpdir(),'sea-packet-test-'));
try{
 const files={'SEA_Instructor_Standalone.html':createHash('sha256').update('instructor').digest('hex'),'source/student.js':createHash('sha256').update('student').digest('hex')},key=packageKey(files);
 mkdirSync(join(root,'material/source'),{recursive:true});writeFileSync(join(root,'material/SEA_Instructor_Standalone.html'),'instructor');writeFileSync(join(root,'material/source/student.js'),'student');
 const manifest={format:'SEA-CANDIDATE-PACKET',version:1,status:'UNQUALIFIED_CANDIDATE',releaseAuthorized:false,fullClosurePasses:0,key,files};
 const save=()=>writeFileSync(join(root,'packet.json'),JSON.stringify(manifest));save();
 assert.equal(verifyPacket(root,key).fileCount,2);
 assert.throws(()=>verifyPacket(root),/expected packet key/);
 assert.throws(()=>verifyPacket(root,'0'.repeat(64)),/key mismatch/);
 writeFileSync(join(root,'material/source/student.js'),'student changed');assert.throws(()=>verifyPacket(root,key),/byte mismatch/);
 const changedHash=createHash('sha256').update('student changed').digest('hex'),originalHash=files['source/student.js'];files['source/student.js']=changedHash;manifest.key=packageKey(files);save();assert.throws(()=>verifyPacket(root,key),/key mismatch/,'Rewriting manifest cannot defeat an externally retained key');
 files['source/student.js']=originalHash;manifest.key=key;save();writeFileSync(join(root,'material/source/student.js'),'student');
 writeFileSync(join(root,'extra'),'unexpected');assert.throws(()=>verifyPacket(root,key),/unexpected packet/);rmSync(join(root,'extra'));
 const original=readFileSync(join(root,'material/source/student.js'));rmSync(join(root,'material/source/student.js'));assert.throws(()=>verifyPacket(root,key),/Missing/);writeFileSync(join(root,'material/source/student.js'),original);
 manifest.releaseAuthorized=true;save();assert.throws(()=>verifyPacket(root,key),/Unqualified/);manifest.releaseAuthorized=false;manifest.fullClosurePasses=3;save();assert.throws(()=>verifyPacket(root,key),/Unqualified/);manifest.fullClosurePasses=0;save();
 for(const path of ['../escape','/absolute','C:/absolute','a\\b','a//b','a/./b','a\u0000b'])assert.throws(()=>packageKey({[path]:originalHash}),/Unsafe/);
 assert.throws(()=>packageKey({'File':originalHash,'file':originalHash}),/Case-colliding/);
 assert.equal(verifyPacket(root,key).result,'PASS');console.log('Candidate packet exact-byte, missing/extra, manifest tampering, identity and path rejection PASS');
}finally{rmSync(root,{recursive:true,force:true})}
