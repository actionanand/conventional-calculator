(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function u(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=u(t);fetch(t.href,e)}})();alert("This works!");document.getElementById("input-number");document.getElementById("btn-add");document.getElementById("btn-subtract");document.getElementById("btn-multiply");document.getElementById("btn-divide");document.getElementById("current-result");document.getElementById("current-calculation");const i=`<header>
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
`;document.querySelector("#app").innerHTML=i;
