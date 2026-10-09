import { RULESET, DECK_VERSION } from './catalog';
import { parseSessionCode } from './session';

export const BACKUP_FORMAT = 'SEA-GAME-BACKUP';
export const BACKUP_VERSION = 1;
export const MAX_BACKUP_CHARS = 500_000;
export const MAX_BACKUP_BYTES = MAX_BACKUP_CHARS * 3;
export type BackupRole = 'INSTRUCTOR' | 'STUDENT';
const envelopeKeys = ['appVersion','deck','format','role','ruleset','schema','sessionCode','state','version'];
const forbidden: Readonly<Record<BackupRole,readonly string[]>> = {
 STUDENT: ['market','marketSeed','teams','ledger','privateEntry','resultDraft','leader','currentBid'],
 INSTRUCTOR: ['team','teamId','scratch','plan','planBaseline','risks','profitInput','maxWtpCents','vehicleConfirmed']
};
function invalid(): never { throw new Error('invalid-state'); }
function record(value: unknown): Record<string,unknown> {
 if (!value || typeof value !== 'object' || Array.isArray(value)) return invalid();
 return value as Record<string,unknown>;
}
function role(value: unknown): BackupRole {
 if (value !== 'INSTRUCTOR' && value !== 'STUDENT') return invalid();
 return value;
}
/** Copy JSON data through own value descriptors; never execute serialization/accessor hooks. */
export function passiveSnapshot(value: unknown): unknown {
 let budget = MAX_BACKUP_CHARS;
 const active = new Set<object>();
 function copy(input: unknown, depth: number): unknown {
  if (--budget < 0 || depth > 32) return invalid();
  if (input === null || typeof input === 'boolean') return input;
  if (typeof input === 'string') { budget -= input.length; if (budget < 0) return invalid(); return input; }
  if (typeof input === 'number') { if (!Number.isFinite(input)) return invalid(); return input; }
  if (!input || typeof input !== 'object' || active.has(input)) return invalid();
  let prototype: object | null = Object.getPrototypeOf(input), prototypeDepth = 0;
  while (prototype) {
   if (++prototypeDepth > 32 || Object.hasOwn(prototype,'toJSON')) return invalid();
   prototype = Object.getPrototypeOf(prototype);
  }
  const descriptors = Object.getOwnPropertyDescriptors(input);
  active.add(input);
  try {
   if (Array.isArray(input)) {
    if (input.length > MAX_BACKUP_CHARS) return invalid();
    for (const key of Reflect.ownKeys(descriptors)) if (key !== 'length' && (typeof key !== 'string' || !/^(0|[1-9]\d*)$/.test(key) || Number(key) >= input.length)) return invalid();
    const result: unknown[] = [];
    for (let index = 0; index < input.length; index++) {
     const descriptor = descriptors[String(index)];
     if (!descriptor || !Object.hasOwn(descriptor,'value')) return invalid();
     result.push(descriptor.value === undefined ? null : copy(descriptor.value,depth+1));
    }
    return result;
   }
   const result: Record<string,unknown> = Object.create(null) as Record<string,unknown>;
   for (const key of Reflect.ownKeys(descriptors)) {
    if (typeof key !== 'string' || key === 'toJSON') return invalid();
    const descriptor = descriptors[key];
    if (!descriptor || !Object.hasOwn(descriptor,'value')) return invalid();
    // Preserve JSON's omission of optional undefined properties.
    if (descriptor.value === undefined || !descriptor.enumerable) continue;
    budget -= key.length; if (budget < 0) return invalid();
    result[key] = copy(descriptor.value,depth+1);
   }
   return result;
  } finally { active.delete(input); }
 }
 return copy(value,0);
}
function boundState(value: unknown, selectedRole: BackupRole, sessionCode?: unknown): Record<string,unknown> {
 const state = record(value);
 if (state.schema !== 3 || typeof state.sessionCode !== 'string') return invalid();
 const code = parseSessionCode(state.sessionCode).code;
 if (sessionCode !== undefined && (typeof sessionCode !== 'string' || parseSessionCode(sessionCode).code !== code)) return invalid();
 if (forbidden[selectedRole].some(key => Object.hasOwn(state,key))) return invalid();
 return state.sessionCode === code ? state : {...state,sessionCode:code};
}
/** Export contains only the selected role's state; schema/rules/deck remain distinct identities. */
export function makeBackup(selectedRole: unknown, value: unknown, appVersion: string): string {
 const selected = role(selectedRole), state = boundState(passiveSnapshot(value), selected);
 if (typeof appVersion !== 'string' || appVersion.length > 40) return invalid();
 const session = parseSessionCode(state.sessionCode);
 const raw = JSON.stringify({format:BACKUP_FORMAT,version:BACKUP_VERSION,appVersion,ruleset:RULESET,deck:DECK_VERSION,schema:3,sessionCode:session.code,role:selected,state});
 if (raw.length > MAX_BACKUP_CHARS) return invalid();
 return raw;
}
/** Decode inert bounded JSON, check binding/privacy, then delegate canonical role reconstruction. */
export function parseBackup<T>(raw: unknown, selectedRole: unknown, validate: (state: Record<string,unknown>) => T, maxChars: number = MAX_BACKUP_CHARS): T {
 const selected = role(selectedRole);
 if (typeof raw !== 'string' || !Number.isInteger(maxChars) || maxChars < 1 || maxChars > MAX_BACKUP_CHARS || raw.length > maxChars || typeof validate !== 'function') return invalid();
 const envelope = record(JSON.parse(raw));
 const keys = Object.keys(envelope).sort();
 if (keys.length !== envelopeKeys.length || keys.some((key,index) => key !== envelopeKeys[index])) return invalid();
 if (envelope.format !== BACKUP_FORMAT || envelope.version !== BACKUP_VERSION || typeof envelope.appVersion !== 'string' || envelope.appVersion.length > 40 || envelope.ruleset !== RULESET || envelope.deck !== DECK_VERSION || envelope.schema !== 3 || envelope.role !== selected) return invalid();
 const state = boundState(envelope.state, selected, envelope.sessionCode);
 const normalized = validate(state);
 boundState(normalized, selected, envelope.sessionCode);
 return normalized;
}

export interface StoragePort { getItem(key:string): string|null; setItem(key:string,value:string):void; removeItem(key:string):void }
export type RecoveryKey = 'SEA_INSTRUCTOR_V300' | 'SEA_STUDENT_V300';
export type RecoveryRead = {readonly ok:true;readonly raw:string|null} | {readonly ok:false};
export interface RecoveryStore {
 available():boolean;
 read(key:RecoveryKey):RecoveryRead;
 write(key:RecoveryKey,raw:string):boolean;
}
function validKey(key: unknown): key is RecoveryKey { return key === 'SEA_INSTRUCTOR_V300' || key === 'SEA_STUDENT_V300'; }
/** One selected-role owner; no timer, background writer, or browser-global dependency. */
export function createRecoveryStore(access: () => StoragePort): RecoveryStore {
 let availability: boolean | undefined;
 return {
  available(){
   if (availability !== undefined) return availability;
   try {
    const storage = access(), key = '__sea_test', previous = storage.getItem(key);
    storage.setItem(key,'1');
    if (previous === null) storage.removeItem(key); else storage.setItem(key,previous);
    availability = true;
   } catch { availability = false; }
   return availability;
  },
  read(key){
   if (!validKey(key)) return {ok:false};
   try { return {ok:true,raw:access().getItem(key)}; } catch { availability = false; return {ok:false}; }
  },
  write(key,raw){
   if (!validKey(key) || typeof raw !== 'string' || raw.length > MAX_BACKUP_CHARS) return false;
   try {
    const storage = access();
    if (storage.getItem(key) !== raw) storage.setItem(key,raw);
    availability = true;
    return true;
   } catch { availability = false; return false; }
  }
 };
}
