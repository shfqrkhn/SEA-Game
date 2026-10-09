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
function boundState(value: unknown, selectedRole: BackupRole, sessionCode?: unknown): Record<string,unknown> {
 const state = record(value);
 if (state.schema !== 3 || typeof state.sessionCode !== 'string') return invalid();
 if (sessionCode !== undefined && state.sessionCode !== sessionCode) return invalid();
 parseSessionCode(state.sessionCode);
 if (forbidden[selectedRole].some(key => Object.hasOwn(state,key))) return invalid();
 return state;
}
/** Export contains only the selected role's state; schema/rules/deck remain distinct identities. */
export function makeBackup(selectedRole: unknown, value: unknown, appVersion: string): string {
 const selected = role(selectedRole), state = boundState(value, selected);
 if (typeof appVersion !== 'string' || appVersion.length > 40) return invalid();
 const session = parseSessionCode(state.sessionCode);
 return JSON.stringify({format:BACKUP_FORMAT,version:BACKUP_VERSION,appVersion,ruleset:RULESET,deck:DECK_VERSION,schema:3,sessionCode:session.code,role:selected,state});
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
