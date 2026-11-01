// Johannesburg has used UTC+02:00 throughout this lifetime, without DST.
export const ZONE='Africa/Johannesburg';
export function localDate(date){return new Date(date.getTime()+7200000)}
export function birthInstant(c){return new Date(`${c.birthDate}T${c.birthTime}:00+02:00`)}
function addMonths(b,n){const d=new Date(b); const day=d.getUTCDate();d.setUTCDate(1);d.setUTCMonth(d.getUTCMonth()+n);const max=new Date(Date.UTC(d.getUTCFullYear(),d.getUTCMonth()+1,0)).getUTCDate();d.setUTCDate(Math.min(day,max));return d;}
export function lifetime(c,now=new Date()){
 const birth=birthInstant(c), b=localDate(birth), t=localDate(now);let months=(t.getUTCFullYear()-b.getUTCFullYear())*12+t.getUTCMonth()-b.getUTCMonth();if(addMonths(b,months)>t)months--;
 let rest=Math.max(0,t-addMonths(b,months));const days=Math.floor(rest/86400000);rest%=86400000;const hours=Math.floor(rest/3600000);rest%=3600000;const minutes=Math.floor(rest/60000);const seconds=Math.floor(rest%60000/1000);const totalSeconds=Math.max(0,Math.floor((now-birth)/1000));
 return {years:Math.floor(months/12),months:months%12,days,hours,minutes,seconds,totals:[Math.floor(months/12),months,Math.floor(totalSeconds/604800),Math.floor(totalSeconds/86400),Math.floor(totalSeconds/3600),Math.floor(totalSeconds/60),totalSeconds]};
}
export function celebration(c,now=new Date()){const start=new Date(`${c.celebrationDate}T00:00:00+02:00`), end=new Date(+start+86400000);return {state:now<start?'before':now<end?'birthday':'after',remaining:Math.max(0,Math.floor((start-now)/1000))};}
