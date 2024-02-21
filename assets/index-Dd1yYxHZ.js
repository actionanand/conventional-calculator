(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))u(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function c(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(n){if(n.ep)return;n.ep=!0;const r=c(n);fetch(n.href,r)}})();const m=`<header>
  <h1>The Unconventional Calculator</h1>
</header>

<section id="calculator">
  <input type="number" id="input-number" />
  <div id="calc-actions">
    <button type="button" id="btn-add">+</button>
    <button type="button" id="btn-subtract">-</button>
    <button type="button" id="btn-multiply">*</button>
    <button type="button" id="btn-divide">/</button>
  </div>
</section>
<section id="results">
  <h2 id="current-calculation">0</h2>
  <h2>Result: <span id="current-result">0</span></h2>
</section>
`,p=(t,e)=>{const c=document.getElementById("current-result"),u=document.getElementById("current-calculation");c.textContent=t,u.textContent=e},b=0;let o=b,a=[];function i(){const t=document.getElementById("input-number");return parseInt(t.value)}function s(t,e,c){const u=`${e} ${t} ${c}`;p(o,u)}function l(t,e,c,u){const n={operation:t,prevResult:e,number:c,result:u};a.push(n),console.log(a)}function f(){const t=i(),e=o;o+=t,s("+",e,t),l("ADD",e,t,o)}function y(){const t=i(),e=o;o-=t,s("-",e,t),l("SUBTRACT",e,t,o)}function g(){const t=i(),e=o;o*=t,s("*",e,t),l("MULTIPLY",e,t,o)}function h(){const t=i(),e=o;o/=t,s("/",e,t),l("DIVIDE",e,t,o)}document.querySelector("#app").innerHTML=m;const v=document.getElementById("btn-add"),E=document.getElementById("btn-subtract"),I=document.getElementById("btn-multiply"),L=document.getElementById("btn-divide");v.addEventListener("click",f);E.addEventListener("click",y);I.addEventListener("click",g);L.addEventListener("click",h);
