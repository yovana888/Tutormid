import{u as R,c as y}from"./ThemeProvider.b4733c37.js";import{r as o,j as w}from"./index.ebe67edf.js";var P=/-(.)/g;function _(e){return e.replace(P,function(t,r){return r.toUpperCase()})}const C=e=>e[0].toUpperCase()+_(e).slice(1);function O(e,{displayName:t=C(e),Component:r,defaultProps:n}={}){const u=o.exports.forwardRef(({className:s,bsPrefix:c,as:i=r||"div",...a},E)=>{const x=R(c,e);return w(i,{ref:E,className:y(s,x),...a})});return u.defaultProps=n,u.displayName=t,u}function S(e,t){if(e==null)return{};var r={},n=Object.keys(e),u,s;for(s=0;s<n.length;s++)u=n[s],!(t.indexOf(u)>=0)&&(r[u]=e[u]);return r}function T(e){return e&&e.ownerDocument||document}const m=!!(typeof window<"u"&&window.document&&window.document.createElement);var p=!1,v=!1;try{var f={get passive(){return p=!0},get once(){return v=p=!0}};m&&(window.addEventListener("test",f,f),window.removeEventListener("test",f,!0))}catch{}function b(e,t,r,n){if(n&&typeof n!="boolean"&&!v){var u=n.once,s=n.capture,c=r;!v&&u&&(c=r.__once||function i(a){this.removeEventListener(t,i,s),r.call(this,a)},r.__once=c),e.addEventListener(t,c,p?n:s)}e.addEventListener(t,r,n)}function L(e,t,r,n){var u=n&&typeof n!="boolean"?n.capture:n;e.removeEventListener(t,r,u),r.__once&&e.removeEventListener(t,r.__once,u)}function $(e,t,r,n){return b(e,t,r,n),function(){L(e,t,r,n)}}var l=function(t){return!t||typeof t=="function"?t:function(r){t.current=r}};function g(e,t){var r=l(e),n=l(t);return function(u){r&&r(u),n&&n(u)}}function q(e,t){return o.exports.useMemo(function(){return g(e,t)},[e,t])}function k(e){var t=o.exports.useRef(e);return o.exports.useEffect(function(){t.current=e},[e]),t}function A(e){var t=k(e);return o.exports.useCallback(function(){return t.current&&t.current.apply(t,arguments)},[t])}function B(){return o.exports.useState(null)}function I(){var e=o.exports.useRef(!0),t=o.exports.useRef(function(){return e.current});return o.exports.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),t.current}function W(e){var t=o.exports.useRef(null);return o.exports.useEffect(function(){t.current=e}),t.current}var F=Function.prototype.bind.call(Function.prototype.call,[].slice);function X(e,t){return F(e.querySelectorAll(t))}function h(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}const j="data-rr-ui-",D="rrUi";function z(e){return`${j}${e}`}function K(e){return`${D}${e}`}const d=o.exports.createContext(m?window:void 0);d.Provider;function Y(){return o.exports.useContext(d)}export{S as _,m as a,Y as b,O as c,z as d,I as e,W as f,A as g,h,B as i,b as j,K as k,$ as l,T as o,X as q,L as r,q as u};
