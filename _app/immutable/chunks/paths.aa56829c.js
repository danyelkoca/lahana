import{H as a,s as _}from"./index.3576d516.js";const n=[];function k(e,o){return{subscribe:p(e,o).subscribe}}function p(e,o=a){let i;const r=new Set;function b(t){if(_(e,t)&&(e=t,i)){const c=!n.length;for(const s of r)s[1](),n.push(s,e);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function l(t){b(t(e))}function h(t,c=a){const s=[t,c];return r.add(s),r.size===1&&(i=o(b)||a),t(e),()=>{r.delete(s),r.size===0&&i&&(i(),i=null)}}return{set:b,update:l,subscribe:h}}var u;const d=((u=globalThis.__sveltekit_15h3vkj)==null?void 0:u.base)??"/lahana";var f;const q=((f=globalThis.__sveltekit_15h3vkj)==null?void 0:f.assets)??d;export{q as a,d as b,k as r,p as w};