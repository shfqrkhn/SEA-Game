// Build-time language integrity checks. Human translation acceptance remains separate.
export function validateLocalization(i18n,texts){
 const fail=message=>{throw Error('localization: '+message)};
 if(!i18n?.en||!i18n?.fr)fail('EN/FR dictionaries required');
 const keys=new Set([...Object.keys(i18n.en),...Object.keys(i18n.fr)]);
 const fields=text=>[...new Set([...text.matchAll(/\{([A-Za-z][A-Za-z0-9]*)\}/g)].map(match=>match[1]))].sort();
 for(const key of keys){
  for(const lang of ['en','fr'])if(typeof i18n[lang][key]!=='string'||!i18n[lang][key].trim())fail(lang+' missing/empty '+key);
  if(JSON.stringify(fields(i18n.en[key]))!==JSON.stringify(fields(i18n.fr[key])))fail('interpolation fields differ for '+key);
 }
 const referenced=new Set();
 for(const text of texts){
  for(const match of text.matchAll(/data-i18n(?:-placeholder|-aria-label)?="([^"]+)"/g))referenced.add(match[1]);
  for(const match of text.matchAll(/\bt\(\s*['"]([^'"]+)['"]\s*[,)]/g))referenced.add(match[1]);
 }
 for(const key of referenced)if(!keys.has(key))fail('referenced key missing '+key);
 return {dictionaryKeys:keys.size,referencedKeys:referenced.size};
}
