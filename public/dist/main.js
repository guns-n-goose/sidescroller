var t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function e(){}function n(t,e,n,g,I){t.__svelte_meta={loc:{file:e,line:n,column:g,char:I}}}function g(t){return t()}function I(){return Object.create(null)}function o(t){t.forEach(g)}function c(t){return"function"==typeof t}function C(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return 0===Object.keys(t).length}new Set;let A=!1;function l(t,e,n,g){for(;t<e;){const I=t+(e-t>>1);n(I)<=g?t=I+1:e=I}return t}function s(t,e){t.appendChild(e)}function d(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function r(t,e){s(t.head||t,e)}function a(t,e){if(A){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const g=e[n];void 0!==g.claim_order&&t.push(g)}e=t}const n=new Int32Array(e.length+1),g=new Int32Array(e.length);n[0]=-1;let I=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,c=(I>0&&e[n[I]].claim_order<=o?I+1:l(1,I,(t=>e[n[t]].claim_order),o))-1;g[t]=n[c]+1;const C=c+1;n[C]=t,I=Math.max(C,I)}const o=[],c=[];let C=e.length-1;for(let t=n[I]+1;0!=t;t=g[t-1]){for(o.push(e[t-1]);C>=t;C--)c.push(e[C]);C--}for(;C>=0;C--)c.push(e[C]);o.reverse(),c.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<c.length;e++){for(;n<o.length&&c[e].claim_order>=o[n].claim_order;)n++;const g=n<o.length?o[n]:null;t.insertBefore(c[e],g)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){A&&!n?a(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function m(){return f(" ")}function p(t,e,n,g){return t.addEventListener(e,n,g),()=>t.removeEventListener(e,n,g)}function G(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t){return Array.from(t.childNodes)}function X(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function v(t,e,n,g,I=!1){X(t);const o=(()=>{for(let g=t.claim_info.last_index;g<t.length;g++){const o=t[g];if(e(o)){const e=n(o);return void 0===e?t.splice(g,1):t[g]=e,I||(t.claim_info.last_index=g),o}}for(let g=t.claim_info.last_index-1;g>=0;g--){const o=t[g];if(e(o)){const e=n(o);return void 0===e?t.splice(g,1):t[g]=e,I?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=g,o}}return g()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function y(t,e,n,g){return v(t,(t=>t.nodeName===e),(t=>{const e=[];for(let g=0;g<t.attributes.length;g++){const I=t.attributes[g];n[I.name]||e.push(I.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>g(e)))}function w(t,e,n){return y(t,e,n,h)}function B(t,e){return v(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>f(e)),!0)}function Z(t){return B(t," ")}function N(t,e,n=!1){const g=document.createEvent("CustomEvent");return g.initCustomEvent(t,n,!1,e),g}new Map;let Y;function J(t){Y=t}function V(){if(!Y)throw new Error("Function called outside component initialization");return Y}function k(){const t=V();return(e,n)=>{const g=t.$$.callbacks[e];if(g){const I=N(e,n);g.slice().forEach((e=>{e.call(t,I)}))}}}const W=[],$=[],F=[],R=[],D=Promise.resolve();let Q=!1;function _(){Q||(Q=!0,D.then(T))}function L(t){F.push(t)}const S=new Set;let H=0;function T(){const t=Y;do{for(;H<W.length;){const t=W[H];H++,J(t),z(t.$$)}for(J(null),W.length=0,H=0;$.length;)$.pop()();for(let t=0;t<F.length;t+=1){const e=F[t];S.has(e)||(S.add(e),e())}F.length=0}while(W.length);for(;R.length;)R.pop()();Q=!1,S.clear(),J(t)}function z(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const j=new Set;let M;function E(t,e){t&&t.i&&(j.delete(t),t.i(e))}function U(t,e,n,g){if(t&&t.o){if(j.has(t))return;j.add(t),M.c.push((()=>{j.delete(t),g&&(n&&t.d(1),g())})),t.o(e)}}"undefined"!=typeof window?window:"undefined"!=typeof globalThis&&globalThis;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let O;function P(t,e,n,I){const{fragment:C,on_mount:i,on_destroy:A,after_update:l}=t.$$;C&&C.m(e,n),I||L((()=>{const e=i.map(g).filter(c);A?A.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(L)}function K(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,n,g,c,C,i,l,s=[-1]){const d=Y;J(t);const r=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:C,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:I(),dirty:s,skip_bound:!1,root:n.target||d.$$.root};l&&l(r.root);let a=!1;if(r.ctx=g?g(t,n.props||{},((e,n,...g)=>{const I=g.length?g[0]:n;return r.ctx&&C(r.ctx[e],r.ctx[e]=I)&&(!r.skip_bound&&r.bound[e]&&r.bound[e](I),a&&function(t,e){-1===t.$$.dirty[0]&&(W.push(t),_(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],r.update(),a=!0,o(r.before_update),r.fragment=!!c&&c(r.ctx),n.target){if(n.hydrate){A=!0;const t=x(n.target);r.fragment&&r.fragment.l(t),t.forEach(u)}else r.fragment&&r.fragment.c();n.intro&&E(t.$$.fragment),P(t,n.target,n.anchor,n.customElement),A=!1,T()}J(d)}"function"==typeof HTMLElement&&(O=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(g).filter(c);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){o(this.$$.on_disconnect)}$destroy(){K(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!i(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function tt(t,e){document.dispatchEvent(N(t,Object.assign({version:"3.46.4"},e),!0))}function et(t,e){tt("SvelteDOMInsert",{target:t,node:e}),a(t,e)}function nt(t,e,n){tt("SvelteDOMInsert",{target:t,node:e,anchor:n}),b(t,e,n)}function gt(t){tt("SvelteDOMRemove",{node:t}),u(t)}function It(t,e,n,g,I,o){const c=!0===g?["capture"]:g?Array.from(Object.keys(g)):[];I&&c.push("preventDefault"),o&&c.push("stopPropagation"),tt("SvelteDOMAddEventListener",{node:t,event:e,handler:n,modifiers:c});const C=p(t,e,n,g);return()=>{tt("SvelteDOMRemoveEventListener",{node:t,event:e,handler:n,modifiers:c}),C()}}function ot(t,e,n){G(t,e,n),null==n?tt("SvelteDOMRemoveAttribute",{node:t,attribute:e}):tt("SvelteDOMSetAttribute",{node:t,attribute:e,value:n})}function ct(t,e){e=""+e,t.wholeText!==e&&(tt("SvelteDOMSetData",{node:t,data:e}),t.data=e)}function Ct(t,e,n){for(const g of Object.keys(e))~n.indexOf(g)||console.warn(`<${t}> received an unexpected slot "${g}".`)}class it extends class{$destroy(){K(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!i(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){if(!t||!t.target&&!t.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}const At="src/components/Game.svelte";function lt(t){!function(t,e,n){const g=d(t);if(!g.getElementById(e)){const t=h("style");t.id=e,t.textContent=n,r(g,t)}}(t,"svelte-12he92z","#div1.svelte-12he92z{position:fixed;width:100%;height:100%;top:0px;left:0px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZS5zdmVsdGUiLCJzb3VyY2VzIjpbIkdhbWUuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSBcInN2ZWx0ZVwiO1xuICAgIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG4gICAgbGV0IHNjb3JlID0gMDtcbiAgICBsZXQgd2luU2NvcmUgPSAwO1xuICAgIGxldCB3aW5Db2lucyA9IDA7XG4gICAgbGV0IHdpbm5pbmdDb2xvciA9IFwicmVkXCI7XG4gICAgbGV0IHdpbm5pbmdDb2xvclRleHQgPSBcInJlZFwiO1xuICAgIGxldCBidXR0b25Db2xvckFycmF5ID0gW107XG5cbiAgICBsZXQgY29sb3JMaXN0ID0gW1xuICAgICAgICBcIm9yYW5nZVwiLFxuICAgICAgICBcInJlZFwiLFxuICAgICAgICBcInllbGxvd1wiLFxuICAgICAgICBcImdyZWVuXCIsXG4gICAgICAgIFwiYmx1ZVwiLFxuICAgICAgICBcInB1cnBsZVwiLFxuICAgICAgICBcInBpbmtcIixcbiAgICAgICAgXCJncmF5XCIsXG4gICAgXTtcblxuICAgIGZ1bmN0aW9uIHNldENvbG9ycygpIHtcbiAgICAgICAgbGV0IGF2YWlsYWJsZUNvbG9ycyA9IGNvbG9yTGlzdC5zbGljZSgpO1xuXG4gICAgICAgIGxldCByYW5kV2luQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29sb3JzLmxlbmd0aCk7XG4gICAgICAgIHdpbm5pbmdDb2xvciA9IGF2YWlsYWJsZUNvbG9yc1tyYW5kV2luQ29sXTtcbiAgICAgICAgYXZhaWxhYmxlQ29sb3JzLnNwbGljZShyYW5kV2luQ29sLCAxKTsgLy8gcmVtb3ZlIGNvbG9yIGZyb20gYXJyYXkgLT4gdGV4dCBhbmQgY29sb3Igbm90IHNhbWVcbiAgICAgICAgd2lubmluZ0NvbG9yVGV4dCA9XG4gICAgICAgICAgICBhdmFpbGFibGVDb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29sb3JzLmxlbmd0aCldO1xuXG4gICAgICAgIGF2YWlsYWJsZUNvbG9ycyA9IGNvbG9yTGlzdC5zbGljZSgpOyAvLyByZXNldCBhdmFpbGFibGUgY29sb3JzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmFuZE51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUNvbG9ycy5sZW5ndGgpO1xuICAgICAgICAgICAgYnV0dG9uQ29sb3JBcnJheVtpXSA9IGF2YWlsYWJsZUNvbG9yc1tyYW5kTnVtYmVyXTtcbiAgICAgICAgICAgIGF2YWlsYWJsZUNvbG9ycy5zcGxpY2UocmFuZE51bWJlciwgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tXaW4oY2xpY2tlZENvbG9yKSB7XG4gICAgICAgIGlmIChjbGlja2VkQ29sb3IgPT0gd2lubmluZ0NvbG9yKSB7XG4gICAgICAgICAgICBzY29yZSArPSAxO1xuICAgICAgICAgICAgd2luU2NvcmUgKz0gMTtcbiAgICAgICAgICAgIGlmICh3aW5TY29yZSA+PSA1KSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXCJ3aW5cIiwgeyBhbW91bnQ6IDEwIH0pO1xuICAgICAgICAgICAgICAgIHdpbkNvaW5zICs9IDEwO1xuICAgICAgICAgICAgICAgIHdpblNjb3JlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldENvbG9ycygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJ3cm9uZyBjb2xvciwgeW91IGxvc3QgNSBjb2lucyA6KFwiKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKFwibG9zZVwiLCB7IGFtb3VudDogNSB9KTtcbiAgICAgICAgICAgIHdpbkNvaW5zIC09IDU7XG4gICAgICAgICAgICBzY29yZSA9IDA7XG4gICAgICAgICAgICB3aW5TY29yZSA9IDA7XG4gICAgICAgICAgICBzZXRDb2xvcnMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRDb2xvcnMoKTtcbjwvc2NyaXB0PlxuXG48ZGl2IGlkPVwiZGl2MVwiIGNsYXNzPVwiZ3JpZCBiZy13aGl0ZVwiPlxuICAgIDxkaXZcbiAgICAgICAgY2xhc3M9XCJ3LTEvMyBwbGFjZS1zZWxmLWNlbnRlciBwLTggcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LTJ4bCBiZy1ncmFkaWVudC10by1yIGdyaWQgZnJvbS10ZWFsLTQwMCB0by1ibHVlLTcwMFwiXG4gICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmctd2hpdGUgcm91bmRlZC0yeGwgbXgtMTYgbWItOCBweS04XCI+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1zYW5zIGZvbnQtYm9sZCB0ZXh0LTN4bCBwYi00IHRleHQtZ3JheS00MDAgdGV4dC1jZW50ZXIgY2FwaXRhbGl6ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2xpY2sgb24gPHNwYW4gY2xhc3M9XCJ0ZXh0LXt3aW5uaW5nQ29sb3J9LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7d2lubmluZ0NvbG9yVGV4dH1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtNCBcIj5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvbnQtc2FucyB0ZXh0LWxnIGZvbnQtYm9sZCB0ZXh0LWdyYXktNDAwIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNjb3JlOiB7c2NvcmV9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9udC1zYW5zIHRleHQtbGcgZm9udC1ib2xkIHRleHQtZ3JheS00MDAgdGV4dC1jZW50ZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ29pbnM6IHt3aW5Db2luc31cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTQgXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJiZy17YnV0dG9uQ29sb3JBcnJheVswXX0tNTAwIGhvdmVyOmJnLXtidXR0b25Db2xvckFycmF5WzBdfS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBjaGVja1dpbihidXR0b25Db2xvckFycmF5WzBdKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YnV0dG9uQ29sb3JBcnJheVswXX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmcte2J1dHRvbkNvbG9yQXJyYXlbMV19LTUwMCBob3ZlcjpiZy17YnV0dG9uQ29sb3JBcnJheVsxXX0tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gY2hlY2tXaW4oYnV0dG9uQ29sb3JBcnJheVsxXSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2J1dHRvbkNvbG9yQXJyYXlbMV19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzcz1cImJnLXtidXR0b25Db2xvckFycmF5WzJdfS01MDAgaG92ZXI6Ymcte2J1dHRvbkNvbG9yQXJyYXlbMl19LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IGNoZWNrV2luKGJ1dHRvbkNvbG9yQXJyYXlbMl0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtidXR0b25Db2xvckFycmF5WzJdfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJiZy17YnV0dG9uQ29sb3JBcnJheVszXX0tNTAwIGhvdmVyOmJnLXtidXR0b25Db2xvckFycmF5WzNdfS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBjaGVja1dpbihidXR0b25Db2xvckFycmF5WzNdKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YnV0dG9uQ29sb3JBcnJheVszXX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmcte2J1dHRvbkNvbG9yQXJyYXlbNF19LTUwMCBob3ZlcjpiZy17YnV0dG9uQ29sb3JBcnJheVs0XX0tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gY2hlY2tXaW4oYnV0dG9uQ29sb3JBcnJheVs0XSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2J1dHRvbkNvbG9yQXJyYXlbNF19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzcz1cImJnLXtidXR0b25Db2xvckFycmF5WzVdfS01MDAgaG92ZXI6Ymcte2J1dHRvbkNvbG9yQXJyYXlbNV19LTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1tZFwiXG4gICAgICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IGNoZWNrV2luKGJ1dHRvbkNvbG9yQXJyYXlbNV0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtidXR0b25Db2xvckFycmF5WzVdfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJiZy17YnV0dG9uQ29sb3JBcnJheVs2XX0tNTAwIGhvdmVyOmJnLXtidXR0b25Db2xvckFycmF5WzZdfS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQtbWRcIlxuICAgICAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBjaGVja1dpbihidXR0b25Db2xvckFycmF5WzZdKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YnV0dG9uQ29sb3JBcnJheVs2XX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYmcte2J1dHRvbkNvbG9yQXJyYXlbN119LTUwMCBob3ZlcjpiZy17YnV0dG9uQ29sb3JBcnJheVs3XX0tNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gY2hlY2tXaW4oYnV0dG9uQ29sb3JBcnJheVs3XSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2J1dHRvbkNvbG9yQXJyYXlbN119XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5cblxuPHN0eWxlPlxuICAgICNkaXYxIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMklJLEtBQUssZUFBQyxDQUFDLEFBQ0gsUUFBUSxDQUFFLEtBQUssQ0FDZixLQUFLLENBQUUsSUFBSSxDQUNYLE1BQU0sQ0FBRSxJQUFJLENBQ1osR0FBRyxDQUFFLEdBQUcsQ0FDUixJQUFJLENBQUUsR0FBRyxBQUNiLENBQUMifQ== */")}function st(t){let g,I,c,C,i,A,l,s,d,r,a,b,u,p,G,X,v,y,N,Y,J,V,k,W,$,F,R,D,Q,_,L,S,H,T,z,j,M,E,U,O,P,K,q,Ct,it,lt,dt,rt,at,bt,ut,ht,ft=t[4][0]+"",mt=t[4][1]+"",pt=t[4][2]+"",Gt=t[4][3]+"",xt=t[4][4]+"",Xt=t[4][5]+"",vt=t[4][6]+"",yt=t[4][7]+"";const wt={c:function(){g=h("div"),I=h("div"),c=h("div"),C=h("p"),i=f("Click on "),A=h("span"),l=f(t[3]),d=m(),r=h("div"),a=h("p"),b=f("Score: "),u=f(t[0]),p=m(),G=h("p"),X=f("Coins: "),v=f(t[1]),y=m(),N=h("div"),Y=h("button"),J=f(ft),k=m(),W=h("button"),$=f(mt),R=m(),D=h("button"),Q=f(pt),L=m(),S=h("button"),H=f(Gt),z=m(),j=h("button"),M=f(xt),U=m(),O=h("button"),P=f(Xt),q=m(),Ct=h("button"),it=f(vt),dt=m(),rt=h("button"),at=f(yt),this.h()},l:function(e){g=w(e,"DIV",{id:!0,class:!0});var n=x(g);I=w(n,"DIV",{class:!0});var o=x(I);c=w(o,"DIV",{class:!0});var s=x(c);C=w(s,"P",{class:!0});var h=x(C);i=B(h,"Click on "),A=w(h,"SPAN",{class:!0});var f=x(A);l=B(f,t[3]),f.forEach(gt),h.forEach(gt),d=Z(s),r=w(s,"DIV",{class:!0});var m=x(r);a=w(m,"P",{class:!0});var V=x(a);b=B(V,"Score: "),u=B(V,t[0]),V.forEach(gt),p=Z(m),G=w(m,"P",{class:!0});var F=x(G);X=B(F,"Coins: "),v=B(F,t[1]),F.forEach(gt),m.forEach(gt),s.forEach(gt),y=Z(o),N=w(o,"DIV",{class:!0});var _=x(N);Y=w(_,"BUTTON",{class:!0});var T=x(Y);J=B(T,ft),T.forEach(gt),k=Z(_),W=w(_,"BUTTON",{class:!0});var E=x(W);$=B(E,mt),E.forEach(gt),R=Z(_),D=w(_,"BUTTON",{class:!0});var K=x(D);Q=B(K,pt),K.forEach(gt),L=Z(_),S=w(_,"BUTTON",{class:!0});var tt=x(S);H=B(tt,Gt),tt.forEach(gt),z=Z(_),j=w(_,"BUTTON",{class:!0});var et=x(j);M=B(et,xt),et.forEach(gt),U=Z(_),O=w(_,"BUTTON",{class:!0});var nt=x(O);P=B(nt,Xt),nt.forEach(gt),q=Z(_),Ct=w(_,"BUTTON",{class:!0});var It=x(Ct);it=B(It,vt),It.forEach(gt),dt=Z(_),rt=w(_,"BUTTON",{class:!0});var ot=x(rt);at=B(ot,yt),ot.forEach(gt),_.forEach(gt),o.forEach(gt),n.forEach(gt),this.h()},h:function(){ot(A,"class",s="text-"+t[2]+"-500"),n(A,At,67,25,2135),ot(C,"class","font-sans font-bold text-3xl pb-4 text-gray-400 text-center capitalize"),n(C,At,64,12,1998),ot(a,"class","font-sans text-lg font-bold text-gray-400 text-center"),n(a,At,72,16,2320),ot(G,"class","font-sans text-lg font-bold text-gray-400 text-center"),n(G,At,77,16,2495),ot(r,"class","grid grid-cols-2 gap-4 "),n(r,At,71,12,2266),ot(c,"class","bg-white rounded-2xl mx-16 mb-8 py-8"),n(c,At,63,8,1935),ot(Y,"class",V="bg-"+t[4][0]+"-500 hover:bg-"+t[4][0]+"-700 text-white font-bold py-2 px-4 rounded-md"),n(Y,At,86,12,2750),ot(W,"class",F="bg-"+t[4][1]+"-500 hover:bg-"+t[4][1]+"-700 text-white font-bold py-2 px-4 rounded-md"),n(W,At,92,12,3037),ot(D,"class",_="bg-"+t[4][2]+"-500 hover:bg-"+t[4][2]+"-700 text-white font-bold py-2 px-4 rounded-md"),n(D,At,98,12,3324),ot(S,"class",T="bg-"+t[4][3]+"-500 hover:bg-"+t[4][3]+"-700 text-white font-bold py-2 px-4 rounded-md"),n(S,At,104,12,3611),ot(j,"class",E="bg-"+t[4][4]+"-500 hover:bg-"+t[4][4]+"-700 text-white font-bold py-2 px-4 rounded-md"),n(j,At,110,12,3898),ot(O,"class",K="bg-"+t[4][5]+"-500 hover:bg-"+t[4][5]+"-700 text-white font-bold py-2 px-4 rounded-md"),n(O,At,116,12,4185),ot(Ct,"class",lt="bg-"+t[4][6]+"-500 hover:bg-"+t[4][6]+"-700 text-white font-bold py-2 px-4 rounded-md"),n(Ct,At,122,12,4472),ot(rt,"class",bt="bg-"+t[4][7]+"-500 hover:bg-"+t[4][7]+"-700 text-white font-bold py-2 px-4 rounded-md"),n(rt,At,128,12,4759),ot(N,"class","grid grid-cols-2 gap-4 "),n(N,At,85,8,2700),ot(I,"class","w-1/3 place-self-center p-8 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-r grid from-teal-400 to-blue-700"),n(I,At,60,4,1786),ot(g,"id","div1"),ot(g,"class","grid bg-white svelte-12he92z"),n(g,At,59,0,1744)},m:function(e,n){nt(e,g,n),et(g,I),et(I,c),et(c,C),et(C,i),et(C,A),et(A,l),et(c,d),et(c,r),et(r,a),et(a,b),et(a,u),et(r,p),et(r,G),et(G,X),et(G,v),et(I,y),et(I,N),et(N,Y),et(Y,J),et(N,k),et(N,W),et(W,$),et(N,R),et(N,D),et(D,Q),et(N,L),et(N,S),et(S,H),et(N,z),et(N,j),et(j,M),et(N,U),et(N,O),et(O,P),et(N,q),et(N,Ct),et(Ct,it),et(N,dt),et(N,rt),et(rt,at),ut||(ht=[It(Y,"click",t[6],!1,!1,!1),It(W,"click",t[7],!1,!1,!1),It(D,"click",t[8],!1,!1,!1),It(S,"click",t[9],!1,!1,!1),It(j,"click",t[10],!1,!1,!1),It(O,"click",t[11],!1,!1,!1),It(Ct,"click",t[12],!1,!1,!1),It(rt,"click",t[13],!1,!1,!1)],ut=!0)},p:function(t,[e]){8&e&&ct(l,t[3]),4&e&&s!==(s="text-"+t[2]+"-500")&&ot(A,"class",s),1&e&&ct(u,t[0]),2&e&&ct(v,t[1]),16&e&&ft!==(ft=t[4][0]+"")&&ct(J,ft),16&e&&V!==(V="bg-"+t[4][0]+"-500 hover:bg-"+t[4][0]+"-700 text-white font-bold py-2 px-4 rounded-md")&&ot(Y,"class",V),16&e&&mt!==(mt=t[4][1]+"")&&ct($,mt),16&e&&F!==(F="bg-"+t[4][1]+"-500 hover:bg-"+t[4][1]+"-700 text-white font-bold py-2 px-4 rounded-md")&&ot(W,"class",F),16&e&&pt!==(pt=t[4][2]+"")&&ct(Q,pt),16&e&&_!==(_="bg-"+t[4][2]+"-500 hover:bg-"+t[4][2]+"-700 text-white font-bold py-2 px-4 rounded-md")&&ot(D,"class",_),16&e&&Gt!==(Gt=t[4][3]+"")&&ct(H,Gt),16&e&&T!==(T="bg-"+t[4][3]+"-500 hover:bg-"+t[4][3]+"-700 text-white font-bold py-2 px-4 rounded-md")&&ot(S,"class",T),16&e&&xt!==(xt=t[4][4]+"")&&ct(M,xt),16&e&&E!==(E="bg-"+t[4][4]+"-500 hover:bg-"+t[4][4]+"-700 text-white font-bold py-2 px-4 rounded-md")&&ot(j,"class",E),16&e&&Xt!==(Xt=t[4][5]+"")&&ct(P,Xt),16&e&&K!==(K="bg-"+t[4][5]+"-500 hover:bg-"+t[4][5]+"-700 text-white font-bold py-2 px-4 rounded-md")&&ot(O,"class",K),16&e&&vt!==(vt=t[4][6]+"")&&ct(it,vt),16&e&&lt!==(lt="bg-"+t[4][6]+"-500 hover:bg-"+t[4][6]+"-700 text-white font-bold py-2 px-4 rounded-md")&&ot(Ct,"class",lt),16&e&&yt!==(yt=t[4][7]+"")&&ct(at,yt),16&e&&bt!==(bt="bg-"+t[4][7]+"-500 hover:bg-"+t[4][7]+"-700 text-white font-bold py-2 px-4 rounded-md")&&ot(rt,"class",bt)},i:e,o:e,d:function(t){t&&gt(g),ut=!1,o(ht)}};return tt("SvelteRegisterBlock",{block:wt,id:st.name,type:"component",source:"",ctx:t}),wt}function dt(t,e,n){let{$$slots:g={},$$scope:I}=e;Ct("Game",g,[]);const o=k();let c=0,C=0,i=0,A="red",l="red",s=[],d=["orange","red","yellow","green","blue","purple","pink","gray"];function r(){let t=d.slice(),e=Math.floor(Math.random()*t.length);n(2,A=t[e]),t.splice(e,1),n(3,l=t[Math.floor(Math.random()*t.length)]),t=d.slice();for(let e=0;e<8;e++){let g=Math.floor(Math.random()*t.length);n(4,s[e]=t[g],s),t.splice(g,1)}}function a(t){t==A?(n(0,c+=1),C+=1,C>=5&&(o("win",{amount:10}),n(1,i+=10),C=0),r()):(alert("wrong color, you lost 5 coins :("),o("lose",{amount:5}),n(1,i-=5),n(0,c=0),C=0,r())}r();const b=[];Object.keys(e).forEach((t=>{~b.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(`<Game> was created with unknown prop '${t}'`)}));return t.$capture_state=()=>({createEventDispatcher:k,dispatch:o,score:c,winScore:C,winCoins:i,winningColor:A,winningColorText:l,buttonColorArray:s,colorList:d,setColors:r,checkWin:a}),t.$inject_state=t=>{"score"in t&&n(0,c=t.score),"winScore"in t&&(C=t.winScore),"winCoins"in t&&n(1,i=t.winCoins),"winningColor"in t&&n(2,A=t.winningColor),"winningColorText"in t&&n(3,l=t.winningColorText),"buttonColorArray"in t&&n(4,s=t.buttonColorArray),"colorList"in t&&(d=t.colorList)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[c,i,A,l,s,a,()=>a(s[0]),()=>a(s[1]),()=>a(s[2]),()=>a(s[3]),()=>a(s[4]),()=>a(s[5]),()=>a(s[6]),()=>a(s[7])]}class rt extends it{constructor(t){super(t),q(this,t,dt,st,C,{},lt),tt("SvelteRegisterComponent",{component:this,tagName:"Game",options:t,id:st.name})}}function at(t){let g,I,o;I=new rt({$$inline:!0});const c={c:function(){g=h("div"),function(t){t&&t.c()}(I.$$.fragment),this.h()},l:function(t){g=w(t,"DIV",{});var e=x(g);!function(t,e){t&&t.l(e)}(I.$$.fragment,e),e.forEach(gt),this.h()},h:function(){n(g,"src/App.svelte",4,0,67)},m:function(t,e){nt(t,g,e),P(I,g,null),o=!0},p:e,i:function(t){o||(E(I.$$.fragment,t),o=!0)},o:function(t){U(I.$$.fragment,t),o=!1},d:function(t){t&&gt(g),K(I)}};return tt("SvelteRegisterBlock",{block:c,id:at.name,type:"component",source:"",ctx:t}),c}function bt(t,e,n){let{$$slots:g={},$$scope:I}=e;Ct("App",g,[]);const o=[];return Object.keys(e).forEach((t=>{~o.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(`<App> was created with unknown prop '${t}'`)})),t.$capture_state=()=>({Game:rt}),[]}new class extends it{constructor(t){super(t),q(this,t,bt,at,C,{}),tt("SvelteRegisterComponent",{component:this,tagName:"App",options:t,id:at.name})}}({target:document.querySelector("#__snel"),props:{}});
//# sourceMappingURL=main.js.map
