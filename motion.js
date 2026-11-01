// Progressive enhancement: content remains visible if motion is unsupported.
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const targets=document.querySelectorAll('main > .section, .hero-copy, .hero-art');
if('IntersectionObserver' in window&&!reduced.matches){
 const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target);}}},{threshold:0.06,rootMargin:'0px 0px 35px 0px'});
 targets.forEach(target=>{target.classList.add('reveal-ready');observer.observe(target)});
 reduced.addEventListener('change',()=>{if(reduced.matches){targets.forEach(t=>t.classList.remove('reveal-ready'));observer.disconnect();}},{once:true});
}
// Cancel smooth scrolling for reduced-motion visitors, including preference changes.
document.querySelectorAll('.corner-nav [role=tab]').forEach(tab=>tab.addEventListener('click',()=>{
 if(reduced.matches)return;const panel=document.getElementById(tab.getAttribute('aria-controls'));
 panel?.animate([{opacity:0,transform:'translateY(9px)'},{opacity:1,transform:'translateY(0)'}],{duration:280,easing:'cubic-bezier(.2,.7,.3,1)'});
}));
const header=document.querySelector('header');
const updateHeader=()=>header.classList.toggle('scrolled',scrollY>24);
window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
