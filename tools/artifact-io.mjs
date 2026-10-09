import {existsSync,readFileSync,writeFileSync} from 'node:fs';

// Finite generators leave identical artifacts and their timestamps untouched.
export function writeChangedArtifact(path,value){
 const bytes=Buffer.isBuffer(value)?value:Buffer.from(value,'utf8');
 if(existsSync(path)&&readFileSync(path).equals(bytes))return false;
 writeFileSync(path,bytes);return true;
}
