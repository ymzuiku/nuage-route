var R=Object.create,w=Object.defineProperty,v=Object.getPrototypeOf,E=Object.prototype.hasOwnProperty,C=Object.getOwnPropertyNames,M=Object.getOwnPropertyDescriptor;var x=e=>w(e,"__esModule",{value:!0});var N=(e,r)=>()=>(r||(r={exports:{}},e(r.exports,r)),r.exports);var S=(e,r,t)=>{if(x(e),r&&typeof r=="object"||typeof r=="function")for(let o of C(r))!E.call(e,o)&&o!=="default"&&w(e,o,{get:()=>r[o],enumerable:!(t=M(r,o))||t.enumerable});return e},_=e=>e&&e.__esModule?e:S(w(e!=null?R(v(e)):{},"default",{value:e,enumerable:!0}),e);var $=N((m,y)=>{(function(e,r){typeof m=="object"&&typeof y!="undefined"?r(m):typeof define=="function"&&define.amd?define(["exports"],r):r((e=e||self).queryString={})})(m,function(e){"use strict";function r(s){try{return decodeURIComponent(s.replace(/\+/g," "))}catch(i){return null}}function t(s){try{return encodeURIComponent(s)}catch(i){return null}}function o(s,i){if(!s)return null;for(var l,c=/([^=?&]+)=?([^&]*)/g,f={};l=c.exec(s);){var h=r(l[1]),u=r(l[2]);h===null||u===null||h in f||(i||(u=isNaN(Number(u))?u:Number(u)),f[h]=u)}return f}function p(s,i){i===void 0&&(i="");var l,c,f=[];for(c in typeof i!="string"&&(i="?"),s)if(Object.prototype.hasOwnProperty.call(s,c)){if((l=s[c])||l!=null&&!isNaN(l)||(l=""),c=encodeURIComponent(c),l=encodeURIComponent(l),c===null||l===null)continue;f.push(c+"="+l)}return f.length?i+f.join("&"):""}var a={parse:o,stringify:p,decode:r,encode:t};e.decode=r,e.default=a,e.encode=t,e.parse=o,e.stringify=p,Object.defineProperty(e,"__esModule",{value:!0})})});var g=_($()),b=document.createElement("div");b.style.cssText="width:100%; height:100%";var d={};window.cacheScrollTop=d;var n={$$:{beforePush:[],beforeRender:[],paramsCache:{},paramsRouter:{},nowRenderPath:"",routerMap:{},liveRouterFns:[],getLiveRoute:()=>{let e=n.$$.liveRouterFns.length,r=n.params();for(let t=0;t<e;t++){let o=n.$$.liveRouterFns[t](r);if(o)return o}return null}},target:b,qs:g.default,params:()=>{let e=window.location.href,r=n.$$.paramsCache[e];if(r)return r;let t=n.getPath(),o={};Object.keys(n.$$.paramsRouter).forEach(i=>{if(t.indexOf(i)===0){let c=n.$$.paramsRouter[i].replace(/:/g,"").replace(i,""),f=t.replace(i,""),h=c.split("/"),u=f.split("/");h.forEach((P,T)=>{o[P]=u[T]||""})}});let p=window.location.hash.split("?"),a=window.location.hash.replace("#","");if(!p[1]){let i={path:t,url:a,...o};return n.$$.paramsCache[e]=i,i}let s={url:a,path:t,...o,...n.qs.parse(p[1])};return n.$$.paramsCache[e]=s,s},loading:()=>"loading...",errorPath:"/",listenEvents:[],beforeRender:e=>{n.$$.beforeRender.push(e)},beforePush:e=>{n.$$.beforePush.push(e)},use:function(e,r,t){/:/.test(e)&&(n.$$.paramsRouter[e.split(":")[0]]=e),n.$$.routerMap[e]=r,t!==void 0&&setTimeout(()=>{r.__promising||r().then(o=>{n.$$.routerMap[e]=o})},t)},scroll:{saveScrollTop:e=>{e?d[window.location.href]=e.scrollTop:d[window.location.href]=window.scrollY},replaceScrollTop:e=>new Promise(r=>{requestAnimationFrame(()=>{let t=d[window.location.href];t&&(e?(e.scrollTo(0,t),window.scrollElement=void 0):window.scrollTo({top:t})),r(t||0)})}),getLastScrollTop:()=>d[window.location.href]||0},push:async(e,r)=>{if(typeof n.beforePush=="function")for(let t of n.$$.beforePush)e=await Promise.resolve(t(e));typeof e=="string"&&(window.history.pushState(null,"","#"+e),n.render(),r&&window.scrollTo({top:0}))},replace:async(e,r)=>{if(typeof n.beforePush=="function")for(let t of n.$$.beforePush)e=await Promise.resolve(t(e));typeof e=="string"&&(window.history.replaceState(null,"","#"+e),n.render(),r&&window.scrollTo({top:0}))},pop:()=>{window.history.back(),n.render(),d[window.location.href]=void 0},getPath:()=>(window.location.hash.split("#")[1]||"/").split("?")[0],render:async()=>{if(!n.$$.routerMap[n.errorPath]){console.error("Undefined route.errorPath:",n.errorPath);return}let e=n.getPath();if(typeof n.beforeRender=="function")for(let a of n.$$.beforeRender)await Promise.resolve(a(e));if(n.$$.nowRenderPath===e)return;let r=n.$$.routerMap[e];if(r||Object.keys(n.$$.paramsRouter).forEach(a=>{if(e.indexOf(a)===0){let s=n.$$.paramsRouter[a];r=n.$$.routerMap[s]}}),!r){n.replace(n.errorPath+"?"+e);return}n.$$.nowRenderPath=e;let t=setTimeout(()=>{n.target.append(n.loading())},200);r.__promising=!0;let o=await Promise.resolve(r());o.default&&(o=o.default);let p=n.params();if(n.listenEvents.forEach(a=>{a(p)}),typeof o=="function"){clearTimeout(t);let a=o();a.then?a.then(s=>{s&&s.nodeName&&(n.target.innerText="",n.target.appendChild(s))}):(n.target.innerText="",n.target.appendChild(a))}else clearTimeout(t),o.then?o.then(a=>{a&&a.nodeName&&(n.target.innerText="",n.target.appendChild(a))}):(n.target.innerText="",n.target.appendChild(o))}};window.addEventListener("popstate",function(){n.render()});var L=n;export{L as default,n as route};
