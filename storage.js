const DB_NAME='dellareese-happiness';
let connection;
export function openDB(){
 if(!globalThis.indexedDB)return Promise.reject(new Error('This browser cannot save local data. Try opening this website in Safari or Chrome.'));
 return connection??=new Promise((resolve,reject)=>{const request=indexedDB.open(DB_NAME,1);request.onupgradeneeded=()=>{for(const name of ['journal','settings','favourites','letters'])request.result.createObjectStore(name,{keyPath:'id'});};request.onsuccess=()=>{const db=request.result;db.onversionchange=()=>{db.close();connection=undefined};resolve(db)};request.onerror=()=>{connection=undefined;reject(request.error)};request.onblocked=()=>{connection=undefined;reject(new Error('Please close other tabs of this website and try again.'))};});
}
export async function batch(store,mode,run){const db=await openDB();return new Promise((resolve,reject)=>{const tx=db.transaction(store,mode);let result;try{result=run(tx.objectStore(store));}catch(e){tx.abort();reject(e);return}tx.oncomplete=()=>resolve(result?.result);tx.onerror=()=>reject(tx.error||new Error('Local storage could not be updated.'));tx.onabort=()=>reject(tx.error||new Error('The save was interrupted.'));});}
export const all=store=>batch(store,'readonly',s=>s.getAll());
export const get=(store,id)=>batch(store,'readonly',s=>s.get(id));
export const put=(store,value)=>batch(store,'readwrite',s=>s.put(value));
export const remove=(store,id)=>batch(store,'readwrite',s=>s.delete(id));
export const clear=store=>batch(store,'readwrite',s=>s.clear());
export const merge=(store,rows)=>batch(store,'readwrite',s=>{rows.forEach(row=>s.put(row));});
