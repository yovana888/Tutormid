import{u as De,c as Pe,d as Qt}from"./ThemeProvider.b4733c37.js";import{r as h,j as V,F as xt}from"./index.ebe67edf.js";import{g as X,e as Zt,h as nt,o as er,l as xe,i as tr,d as Ot,b as rr,f as nr,q as ot,j as or,u as Ct,c as Le}from"./useWindow.75ee041c.js";import{$ as ir,S as Se,N as ar,m as it,u as sr,a as cr,A as ur,b as fr,c as lr}from"./NavbarContext.a0f3fddc.js";import{B as pr}from"./Button.375fb275.js";import{B as dr}from"./Button.235f4585.js";function vr(e,t,r,n){n===void 0&&(n=!1);var o=X(r);h.exports.useEffect(function(){var i=typeof e=="function"?e():e;return i.addEventListener(t,o,n),function(){return i.removeEventListener(t,o,n)}},[e])}var mr=typeof global<"u"&&global.navigator&&global.navigator.product==="ReactNative",gr=typeof document<"u";const hr=gr||mr?h.exports.useLayoutEffect:h.exports.useEffect,$e=h.exports.createContext(null);var at=Object.prototype.hasOwnProperty;function st(e,t,r){for(r of e.keys())if(fe(r,t))return r}function fe(e,t){var r,n,o;if(e===t)return!0;if(e&&t&&(r=e.constructor)===t.constructor){if(r===Date)return e.getTime()===t.getTime();if(r===RegExp)return e.toString()===t.toString();if(r===Array){if((n=e.length)===t.length)for(;n--&&fe(e[n],t[n]););return n===-1}if(r===Set){if(e.size!==t.size)return!1;for(n of e)if(o=n,o&&typeof o=="object"&&(o=st(t,o),!o)||!t.has(o))return!1;return!0}if(r===Map){if(e.size!==t.size)return!1;for(n of e)if(o=n[0],o&&typeof o=="object"&&(o=st(t,o),!o)||!fe(n[1],t.get(o)))return!1;return!0}if(r===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(r===DataView){if((n=e.byteLength)===t.byteLength)for(;n--&&e.getInt8(n)===t.getInt8(n););return n===-1}if(ArrayBuffer.isView(e)){if((n=e.byteLength)===t.byteLength)for(;n--&&e[n]===t[n];);return n===-1}if(!r||typeof e=="object"){n=0;for(r in e)if(at.call(e,r)&&++n&&!at.call(t,r)||!(r in t)||!fe(e[r],t[r]))return!1;return Object.keys(t).length===n}}return e!==e&&t!==t}function yr(e){var t=Zt();return[e[0],h.exports.useCallback(function(r){if(!!t())return e[1](r)},[t,e[1]])]}var B="top",N="bottom",W="right",L="left",Ie="auto",me=[B,N,W,L],re="start",de="end",wr="clippingParents",Et="viewport",ue="popper",br="reference",ct=me.reduce(function(e,t){return e.concat([t+"-"+re,t+"-"+de])},[]),Dt=[].concat(me,[Ie]).reduce(function(e,t){return e.concat([t,t+"-"+re,t+"-"+de])},[]),xr="beforeRead",Or="read",Cr="afterRead",Er="beforeMain",Dr="main",Pr="afterMain",$r="beforeWrite",Ar="write",Rr="afterWrite",Mr=[xr,Or,Cr,Er,Dr,Pr,$r,Ar,Rr];function U(e){return e.split("-")[0]}function H(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Z(e){var t=H(e).Element;return e instanceof t||e instanceof Element}function q(e){var t=H(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ne(e){if(typeof ShadowRoot>"u")return!1;var t=H(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var Q=Math.max,Ee=Math.min,ne=Math.round;function Te(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Pt(){return!/^((?!chrome|android).)*safari/i.test(Te())}function oe(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,i=1;t&&q(e)&&(o=e.offsetWidth>0&&ne(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&ne(n.height)/e.offsetHeight||1);var f=Z(e)?H(e):window,c=f.visualViewport,a=!Pt()&&r,u=(n.left+(a&&c?c.offsetLeft:0))/o,s=(n.top+(a&&c?c.offsetTop:0))/i,l=n.width/o,g=n.height/i;return{width:l,height:g,top:s,right:u+l,bottom:s+g,left:u,x:u,y:s}}function We(e){var t=oe(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function $t(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Ne(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Y(e){return e?(e.nodeName||"").toLowerCase():null}function K(e){return H(e).getComputedStyle(e)}function kr(e){return["table","td","th"].indexOf(Y(e))>=0}function G(e){return((Z(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ae(e){return Y(e)==="html"?e:e.assignedSlot||e.parentNode||(Ne(e)?e.host:null)||G(e)}function ut(e){return!q(e)||K(e).position==="fixed"?null:e.offsetParent}function jr(e){var t=/firefox/i.test(Te()),r=/Trident/i.test(Te());if(r&&q(e)){var n=K(e);if(n.position==="fixed")return null}var o=Ae(e);for(Ne(o)&&(o=o.host);q(o)&&["html","body"].indexOf(Y(o))<0;){var i=K(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function ge(e){for(var t=H(e),r=ut(e);r&&kr(r)&&K(r).position==="static";)r=ut(r);return r&&(Y(r)==="html"||Y(r)==="body"&&K(r).position==="static")?t:r||jr(e)||t}function He(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function le(e,t,r){return Q(e,Ee(t,r))}function Sr(e,t,r){var n=le(e,t,r);return n>r?r:n}function At(){return{top:0,right:0,bottom:0,left:0}}function Rt(e){return Object.assign({},At(),e)}function Mt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var Tr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,Rt(typeof t!="number"?t:Mt(t,me))};function Br(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,f=r.modifiersData.popperOffsets,c=U(r.placement),a=He(c),u=[L,W].indexOf(c)>=0,s=u?"height":"width";if(!(!i||!f)){var l=Tr(o.padding,r),g=We(i),p=a==="y"?B:L,v=a==="y"?N:W,m=r.rects.reference[s]+r.rects.reference[a]-f[a]-r.rects.popper[s],d=f[a]-r.rects.reference[a],C=ge(i),D=C?a==="y"?C.clientHeight||0:C.clientWidth||0:0,b=m/2-d/2,y=l[p],w=D-g[s]-l[v],x=D/2-g[s]/2+b,E=le(y,x,w),A=a;r.modifiersData[n]=(t={},t[A]=E,t.centerOffset=E-x,t)}}function Lr(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||!$t(t.elements.popper,o)||(t.elements.arrow=o))}const Ir={name:"arrow",enabled:!0,phase:"main",fn:Br,effect:Lr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ie(e){return e.split("-")[1]}var Nr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Wr(e){var t=e.x,r=e.y,n=window,o=n.devicePixelRatio||1;return{x:ne(t*o)/o||0,y:ne(r*o)/o||0}}function ft(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,f=e.offsets,c=e.position,a=e.gpuAcceleration,u=e.adaptive,s=e.roundOffsets,l=e.isFixed,g=f.x,p=g===void 0?0:g,v=f.y,m=v===void 0?0:v,d=typeof s=="function"?s({x:p,y:m}):{x:p,y:m};p=d.x,m=d.y;var C=f.hasOwnProperty("x"),D=f.hasOwnProperty("y"),b=L,y=B,w=window;if(u){var x=ge(r),E="clientHeight",A="clientWidth";if(x===H(r)&&(x=G(r),K(x).position!=="static"&&c==="absolute"&&(E="scrollHeight",A="scrollWidth")),x=x,o===B||(o===L||o===W)&&i===de){y=N;var M=l&&x===w&&w.visualViewport?w.visualViewport.height:x[E];m-=M-n.height,m*=a?1:-1}if(o===L||(o===B||o===N)&&i===de){b=W;var R=l&&x===w&&w.visualViewport?w.visualViewport.width:x[A];p-=R-n.width,p*=a?1:-1}}var O=Object.assign({position:c},u&&Nr),P=s===!0?Wr({x:p,y:m}):{x:p,y:m};if(p=P.x,m=P.y,a){var $;return Object.assign({},O,($={},$[y]=D?"0":"",$[b]=C?"0":"",$.transform=(w.devicePixelRatio||1)<=1?"translate("+p+"px, "+m+"px)":"translate3d("+p+"px, "+m+"px, 0)",$))}return Object.assign({},O,(t={},t[y]=D?m+"px":"",t[b]=C?p+"px":"",t.transform="",t))}function Hr(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,i=r.adaptive,f=i===void 0?!0:i,c=r.roundOffsets,a=c===void 0?!0:c,u={placement:U(t.placement),variation:ie(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ft(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ft(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Fr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Hr,data:{}};var Oe={passive:!0};function Vr(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=o===void 0?!0:o,f=n.resize,c=f===void 0?!0:f,a=H(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(s){s.addEventListener("scroll",r.update,Oe)}),c&&a.addEventListener("resize",r.update,Oe),function(){i&&u.forEach(function(s){s.removeEventListener("scroll",r.update,Oe)}),c&&a.removeEventListener("resize",r.update,Oe)}}const Ur={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Vr,data:{}};var qr={left:"right",right:"left",bottom:"top",top:"bottom"};function Ce(e){return e.replace(/left|right|bottom|top/g,function(t){return qr[t]})}var Kr={start:"end",end:"start"};function lt(e){return e.replace(/start|end/g,function(t){return Kr[t]})}function Fe(e){var t=H(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Ve(e){return oe(G(e)).left+Fe(e).scrollLeft}function zr(e,t){var r=H(e),n=G(e),o=r.visualViewport,i=n.clientWidth,f=n.clientHeight,c=0,a=0;if(o){i=o.width,f=o.height;var u=Pt();(u||!u&&t==="fixed")&&(c=o.offsetLeft,a=o.offsetTop)}return{width:i,height:f,x:c+Ve(e),y:a}}function Xr(e){var t,r=G(e),n=Fe(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=Q(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),f=Q(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-n.scrollLeft+Ve(e),a=-n.scrollTop;return K(o||r).direction==="rtl"&&(c+=Q(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:f,x:c,y:a}}function Ue(e){var t=K(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function kt(e){return["html","body","#document"].indexOf(Y(e))>=0?e.ownerDocument.body:q(e)&&Ue(e)?e:kt(Ae(e))}function pe(e,t){var r;t===void 0&&(t=[]);var n=kt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),i=H(n),f=o?[i].concat(i.visualViewport||[],Ue(n)?n:[]):n,c=t.concat(f);return o?c:c.concat(pe(Ae(f)))}function Be(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Yr(e,t){var r=oe(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function pt(e,t,r){return t===Et?Be(zr(e,r)):Z(t)?Yr(t,r):Be(Xr(G(e)))}function Gr(e){var t=pe(Ae(e)),r=["absolute","fixed"].indexOf(K(e).position)>=0,n=r&&q(e)?ge(e):e;return Z(n)?t.filter(function(o){return Z(o)&&$t(o,n)&&Y(o)!=="body"}):[]}function _r(e,t,r,n){var o=t==="clippingParents"?Gr(e):[].concat(t),i=[].concat(o,[r]),f=i[0],c=i.reduce(function(a,u){var s=pt(e,u,n);return a.top=Q(s.top,a.top),a.right=Ee(s.right,a.right),a.bottom=Ee(s.bottom,a.bottom),a.left=Q(s.left,a.left),a},pt(e,f,n));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function jt(e){var t=e.reference,r=e.element,n=e.placement,o=n?U(n):null,i=n?ie(n):null,f=t.x+t.width/2-r.width/2,c=t.y+t.height/2-r.height/2,a;switch(o){case B:a={x:f,y:t.y-r.height};break;case N:a={x:f,y:t.y+t.height};break;case W:a={x:t.x+t.width,y:c};break;case L:a={x:t.x-r.width,y:c};break;default:a={x:t.x,y:t.y}}var u=o?He(o):null;if(u!=null){var s=u==="y"?"height":"width";switch(i){case re:a[u]=a[u]-(t[s]/2-r[s]/2);break;case de:a[u]=a[u]+(t[s]/2-r[s]/2);break}}return a}function ve(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,i=r.strategy,f=i===void 0?e.strategy:i,c=r.boundary,a=c===void 0?wr:c,u=r.rootBoundary,s=u===void 0?Et:u,l=r.elementContext,g=l===void 0?ue:l,p=r.altBoundary,v=p===void 0?!1:p,m=r.padding,d=m===void 0?0:m,C=Rt(typeof d!="number"?d:Mt(d,me)),D=g===ue?br:ue,b=e.rects.popper,y=e.elements[v?D:g],w=_r(Z(y)?y:y.contextElement||G(e.elements.popper),a,s,f),x=oe(e.elements.reference),E=jt({reference:x,element:b,strategy:"absolute",placement:o}),A=Be(Object.assign({},b,E)),M=g===ue?A:x,R={top:w.top-M.top+C.top,bottom:M.bottom-w.bottom+C.bottom,left:w.left-M.left+C.left,right:M.right-w.right+C.right},O=e.modifiersData.offset;if(g===ue&&O){var P=O[o];Object.keys(R).forEach(function($){var k=[W,N].indexOf($)>=0?1:-1,T=[B,N].indexOf($)>=0?"y":"x";R[$]+=P[T]*k})}return R}function Jr(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,f=r.padding,c=r.flipVariations,a=r.allowedAutoPlacements,u=a===void 0?Dt:a,s=ie(n),l=s?c?ct:ct.filter(function(v){return ie(v)===s}):me,g=l.filter(function(v){return u.indexOf(v)>=0});g.length===0&&(g=l);var p=g.reduce(function(v,m){return v[m]=ve(e,{placement:m,boundary:o,rootBoundary:i,padding:f})[U(m)],v},{});return Object.keys(p).sort(function(v,m){return p[v]-p[m]})}function Qr(e){if(U(e)===Ie)return[];var t=Ce(e);return[lt(e),t,lt(t)]}function Zr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=o===void 0?!0:o,f=r.altAxis,c=f===void 0?!0:f,a=r.fallbackPlacements,u=r.padding,s=r.boundary,l=r.rootBoundary,g=r.altBoundary,p=r.flipVariations,v=p===void 0?!0:p,m=r.allowedAutoPlacements,d=t.options.placement,C=U(d),D=C===d,b=a||(D||!v?[Ce(d)]:Qr(d)),y=[d].concat(b).reduce(function(te,z){return te.concat(U(z)===Ie?Jr(t,{placement:z,boundary:s,rootBoundary:l,padding:u,flipVariations:v,allowedAutoPlacements:m}):z)},[]),w=t.rects.reference,x=t.rects.popper,E=new Map,A=!0,M=y[0],R=0;R<y.length;R++){var O=y[R],P=U(O),$=ie(O)===re,k=[B,N].indexOf(P)>=0,T=k?"width":"height",j=ve(t,{placement:O,boundary:s,rootBoundary:l,altBoundary:g,padding:u}),I=k?$?W:L:$?N:B;w[T]>x[T]&&(I=Ce(I));var ae=Ce(I),F=[];if(i&&F.push(j[P]<=0),c&&F.push(j[I]<=0,j[ae]<=0),F.every(function(te){return te})){M=O,A=!1;break}E.set(O,F)}if(A)for(var S=v?3:1,ee=function(z){var ce=y.find(function(we){var _=E.get(we);if(_)return _.slice(0,z).every(function(Re){return Re})});if(ce)return M=ce,"break"},se=S;se>0;se--){var ye=ee(se);if(ye==="break")break}t.placement!==M&&(t.modifiersData[n]._skip=!0,t.placement=M,t.reset=!0)}}const en={name:"flip",enabled:!0,phase:"main",fn:Zr,requiresIfExists:["offset"],data:{_skip:!1}};function dt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function vt(e){return[B,W,N,L].some(function(t){return e[t]>=0})}function tn(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,f=ve(t,{elementContext:"reference"}),c=ve(t,{altBoundary:!0}),a=dt(f,n),u=dt(c,o,i),s=vt(a),l=vt(u);t.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:u,isReferenceHidden:s,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":s,"data-popper-escaped":l})}const rn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:tn};function nn(e,t,r){var n=U(e),o=[L,B].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=i[0],c=i[1];return f=f||0,c=(c||0)*o,[L,W].indexOf(n)>=0?{x:c,y:f}:{x:f,y:c}}function on(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=o===void 0?[0,0]:o,f=Dt.reduce(function(s,l){return s[l]=nn(l,t.rects,i),s},{}),c=f[t.placement],a=c.x,u=c.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=f}const an={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:on};function sn(e){var t=e.state,r=e.name;t.modifiersData[r]=jt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const cn={name:"popperOffsets",enabled:!0,phase:"read",fn:sn,data:{}};function un(e){return e==="x"?"y":"x"}function fn(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=o===void 0?!0:o,f=r.altAxis,c=f===void 0?!1:f,a=r.boundary,u=r.rootBoundary,s=r.altBoundary,l=r.padding,g=r.tether,p=g===void 0?!0:g,v=r.tetherOffset,m=v===void 0?0:v,d=ve(t,{boundary:a,rootBoundary:u,padding:l,altBoundary:s}),C=U(t.placement),D=ie(t.placement),b=!D,y=He(C),w=un(y),x=t.modifiersData.popperOffsets,E=t.rects.reference,A=t.rects.popper,M=typeof m=="function"?m(Object.assign({},t.rects,{placement:t.placement})):m,R=typeof M=="number"?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),O=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if(!!x){if(i){var $,k=y==="y"?B:L,T=y==="y"?N:W,j=y==="y"?"height":"width",I=x[y],ae=I+d[k],F=I-d[T],S=p?-A[j]/2:0,ee=D===re?E[j]:A[j],se=D===re?-A[j]:-E[j],ye=t.elements.arrow,te=p&&ye?We(ye):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:At(),ce=z[k],we=z[T],_=le(0,E[j],te[j]),Re=b?E[j]/2-S-_-ce-R.mainAxis:ee-_-ce-R.mainAxis,zt=b?-E[j]/2+S+_+we+R.mainAxis:se+_+we+R.mainAxis,Me=t.elements.arrow&&ge(t.elements.arrow),Xt=Me?y==="y"?Me.clientTop||0:Me.clientLeft||0:0,Ye=($=O==null?void 0:O[y])!=null?$:0,Yt=I+Re-Ye-Xt,Gt=I+zt-Ye,Ge=le(p?Ee(ae,Yt):ae,I,p?Q(F,Gt):F);x[y]=Ge,P[y]=Ge-I}if(c){var _e,_t=y==="x"?B:L,Jt=y==="x"?N:W,J=x[w],be=w==="y"?"height":"width",Je=J+d[_t],Qe=J-d[Jt],ke=[B,L].indexOf(C)!==-1,Ze=(_e=O==null?void 0:O[w])!=null?_e:0,et=ke?Je:J-E[be]-A[be]-Ze+R.altAxis,tt=ke?J+E[be]+A[be]-Ze-R.altAxis:Qe,rt=p&&ke?Sr(et,J,tt):le(p?et:Je,J,p?tt:Qe);x[w]=rt,P[w]=rt-J}t.modifiersData[n]=P}}const ln={name:"preventOverflow",enabled:!0,phase:"main",fn,requiresIfExists:["offset"]};function pn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function dn(e){return e===H(e)||!q(e)?Fe(e):pn(e)}function vn(e){var t=e.getBoundingClientRect(),r=ne(t.width)/e.offsetWidth||1,n=ne(t.height)/e.offsetHeight||1;return r!==1||n!==1}function mn(e,t,r){r===void 0&&(r=!1);var n=q(t),o=q(t)&&vn(t),i=G(t),f=oe(e,o,r),c={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(n||!n&&!r)&&((Y(t)!=="body"||Ue(i))&&(c=dn(t)),q(t)?(a=oe(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=Ve(i))),{x:f.left+c.scrollLeft-a.x,y:f.top+c.scrollTop-a.y,width:f.width,height:f.height}}function gn(e){var t=new Map,r=new Set,n=[];e.forEach(function(i){t.set(i.name,i)});function o(i){r.add(i.name);var f=[].concat(i.requires||[],i.requiresIfExists||[]);f.forEach(function(c){if(!r.has(c)){var a=t.get(c);a&&o(a)}}),n.push(i)}return e.forEach(function(i){r.has(i.name)||o(i)}),n}function hn(e){var t=gn(e);return Mr.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function yn(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function wn(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var mt={placement:"bottom",modifiers:[],strategy:"absolute"};function gt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function bn(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,i=o===void 0?mt:o;return function(c,a,u){u===void 0&&(u=i);var s={placement:"bottom",orderedModifiers:[],options:Object.assign({},mt,i),modifiersData:{},elements:{reference:c,popper:a},attributes:{},styles:{}},l=[],g=!1,p={state:s,setOptions:function(C){var D=typeof C=="function"?C(s.options):C;m(),s.options=Object.assign({},i,s.options,D),s.scrollParents={reference:Z(c)?pe(c):c.contextElement?pe(c.contextElement):[],popper:pe(a)};var b=hn(wn([].concat(n,s.options.modifiers)));return s.orderedModifiers=b.filter(function(y){return y.enabled}),v(),p.update()},forceUpdate:function(){if(!g){var C=s.elements,D=C.reference,b=C.popper;if(!!gt(D,b)){s.rects={reference:mn(D,ge(b),s.options.strategy==="fixed"),popper:We(b)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach(function(R){return s.modifiersData[R.name]=Object.assign({},R.data)});for(var y=0;y<s.orderedModifiers.length;y++){if(s.reset===!0){s.reset=!1,y=-1;continue}var w=s.orderedModifiers[y],x=w.fn,E=w.options,A=E===void 0?{}:E,M=w.name;typeof x=="function"&&(s=x({state:s,options:A,name:M,instance:p})||s)}}}},update:yn(function(){return new Promise(function(d){p.forceUpdate(),d(s)})}),destroy:function(){m(),g=!0}};if(!gt(c,a))return p;p.setOptions(u).then(function(d){!g&&u.onFirstUpdate&&u.onFirstUpdate(d)});function v(){s.orderedModifiers.forEach(function(d){var C=d.name,D=d.options,b=D===void 0?{}:D,y=d.effect;if(typeof y=="function"){var w=y({state:s,name:C,instance:p,options:b}),x=function(){};l.push(w||x)}})}function m(){l.forEach(function(d){return d()}),l=[]}return p}}const xn=bn({defaultModifiers:[rn,cn,Fr,Ur,an,en,ln,Ir]}),On=["enabled","placement","strategy","modifiers"];function Cn(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}const En={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},Dn={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:r}=e.elements;if("removeAttribute"in t){const n=(t.getAttribute("aria-describedby")||"").split(",").filter(o=>o.trim()!==r.id);n.length?t.setAttribute("aria-describedby",n.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{var t;const{popper:r,reference:n}=e.elements,o=(t=r.getAttribute("role"))==null?void 0:t.toLowerCase();if(r.id&&o==="tooltip"&&"setAttribute"in n){const i=n.getAttribute("aria-describedby");if(i&&i.split(",").indexOf(r.id)!==-1)return;n.setAttribute("aria-describedby",i?`${i},${r.id}`:r.id)}}},Pn=[];function $n(e,t,r={}){let{enabled:n=!0,placement:o="bottom",strategy:i="absolute",modifiers:f=Pn}=r,c=Cn(r,On);const a=h.exports.useRef(f),u=h.exports.useRef(),s=h.exports.useCallback(()=>{var d;(d=u.current)==null||d.update()},[]),l=h.exports.useCallback(()=>{var d;(d=u.current)==null||d.forceUpdate()},[]),[g,p]=yr(h.exports.useState({placement:o,update:s,forceUpdate:l,attributes:{},styles:{popper:{},arrow:{}}})),v=h.exports.useMemo(()=>({name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:d})=>{const C={},D={};Object.keys(d.elements).forEach(b=>{C[b]=d.styles[b],D[b]=d.attributes[b]}),p({state:d,styles:C,attributes:D,update:s,forceUpdate:l,placement:d.placement})}}),[s,l,p]),m=h.exports.useMemo(()=>(fe(a.current,f)||(a.current=f),a.current),[f]);return h.exports.useEffect(()=>{!u.current||!n||u.current.setOptions({placement:o,strategy:i,modifiers:[...m,v,En]})},[i,o,v,n,m]),h.exports.useEffect(()=>{if(!(!n||e==null||t==null))return u.current=xn(e,t,Object.assign({},c,{placement:o,strategy:i,modifiers:[...m,Dn,v]})),()=>{u.current!=null&&(u.current.destroy(),u.current=void 0,p(d=>Object.assign({},d,{attributes:{},styles:{popper:{}}})))}},[n,e,t]),g}const ht=()=>{};function An(e){return e.button===0}function Rn(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const je=e=>e&&("current"in e?e.current:e),yt={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};function Mn(e,t=ht,{disabled:r,clickTrigger:n="click"}={}){const o=h.exports.useRef(!1),i=h.exports.useRef(!1),f=h.exports.useCallback(u=>{const s=je(e);o.current=!s||Rn(u)||!An(u)||!!nt(s,u.target)||i.current,i.current=!1},[e]),c=X(u=>{const s=je(e);s&&nt(s,u.target)&&(i.current=!0)}),a=X(u=>{o.current||t(u)});h.exports.useEffect(()=>{if(r||e==null)return;const u=er(je(e));let s=(u.defaultView||window).event,l=null;yt[n]&&(l=xe(u,yt[n],c,!0));const g=xe(u,n,f,!0),p=xe(u,n,m=>{if(m===s){s=void 0;return}a(m)});let v=[];return"ontouchstart"in u.documentElement&&(v=[].slice.call(u.body.children).map(m=>xe(m,"mousemove",ht))),()=>{l==null||l(),g(),p(),v.forEach(m=>m())}},[e,r,n,f,c,a])}function kn(e){const t={};return Array.isArray(e)?(e==null||e.forEach(r=>{t[r.name]=r}),t):e||t}function jn(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function Sn({enabled:e,enableEvents:t,placement:r,flip:n,offset:o,fixed:i,containerPadding:f,arrowElement:c,popperConfig:a={}}){var u,s,l,g,p;const v=kn(a.modifiers);return Object.assign({},a,{placement:r,enabled:e,strategy:i?"fixed":a.strategy,modifiers:jn(Object.assign({},v,{eventListeners:{enabled:t,options:(u=v.eventListeners)==null?void 0:u.options},preventOverflow:Object.assign({},v.preventOverflow,{options:f?Object.assign({padding:f},(s=v.preventOverflow)==null?void 0:s.options):(l=v.preventOverflow)==null?void 0:l.options}),offset:{options:Object.assign({offset:o},(g=v.offset)==null?void 0:g.options)},arrow:Object.assign({},v.arrow,{enabled:!!c,options:Object.assign({},(p=v.arrow)==null?void 0:p.options,{element:c})}),flip:Object.assign({enabled:!!n},v.flip)}))})}const Tn=["children"];function Bn(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}const Ln=()=>{};function St(e={}){const t=h.exports.useContext($e),[r,n]=tr(),o=h.exports.useRef(!1),{flip:i,offset:f,rootCloseEvent:c,fixed:a=!1,placement:u,popperConfig:s={},enableEventListeners:l=!0,usePopper:g=!!t}=e,p=(t==null?void 0:t.show)==null?!!e.show:t.show;p&&!o.current&&(o.current=!0);const v=x=>{t==null||t.toggle(!1,x)},{placement:m,setMenu:d,menuElement:C,toggleElement:D}=t||{},b=$n(D,C,Sn({placement:u||m||"bottom-start",enabled:g,enableEvents:l==null?p:l,offset:f,flip:i,fixed:a,arrowElement:r,popperConfig:s})),y=Object.assign({ref:d||Ln,"aria-labelledby":D==null?void 0:D.id},b.attributes.popper,{style:b.styles.popper}),w={show:p,placement:m,hasShown:o.current,toggle:t==null?void 0:t.toggle,popper:g?b:null,arrowProps:g?Object.assign({ref:n},b.attributes.arrow,{style:b.styles.arrow}):{}};return Mn(C,v,{clickTrigger:c,disabled:!p}),[y,w]}const In={usePopper:!0};function qe(e){let{children:t}=e,r=Bn(e,Tn);const[n,o]=St(r);return V(xt,{children:t(n,o)})}qe.displayName="DropdownMenu";qe.defaultProps=In;const Tt=e=>{var t;return((t=e.getAttribute("role"))==null?void 0:t.toLowerCase())==="menu"},wt=()=>{};function Bt(){const e=ir(),{show:t=!1,toggle:r=wt,setToggle:n,menuElement:o}=h.exports.useContext($e)||{},i=h.exports.useCallback(c=>{r(!t,c)},[t,r]),f={id:e,ref:n||wt,onClick:i,"aria-expanded":!!t};return o&&Tt(o)&&(f["aria-haspopup"]=!0),[f,{show:t,toggle:r}]}function Lt({children:e}){const[t,r]=Bt();return V(xt,{children:e(t,r)})}Lt.displayName="DropdownToggle";const Nn=["eventKey","disabled","onClick","active","as"];function Wn(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,i;for(i=0;i<n.length;i++)o=n[i],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}function It({key:e,href:t,active:r,disabled:n,onClick:o}){const i=h.exports.useContext(Se),f=h.exports.useContext(ar),{activeKey:c}=f||{},a=it(e,t),u=r==null&&e!=null?it(c)===a:r;return[{onClick:X(l=>{n||(o==null||o(l),i&&!l.isPropagationStopped()&&i(a,l))}),"aria-disabled":n||void 0,"aria-selected":u,[Ot("dropdown-item")]:""},{isActive:u}]}const Nt=h.exports.forwardRef((e,t)=>{let{eventKey:r,disabled:n,onClick:o,active:i,as:f=pr}=e,c=Wn(e,Nn);const[a]=It({key:r,href:c.href,disabled:n,onClick:o,active:i});return V(f,Object.assign({},c,{ref:t},a))});Nt.displayName="DropdownItem";function bt(){const e=cr(),t=h.exports.useRef(null),r=h.exports.useCallback(n=>{t.current=n,e()},[e]);return[t,r]}function he({defaultShow:e,show:t,onSelect:r,onToggle:n,itemSelector:o=`* [${Ot("dropdown-item")}]`,focusFirstItemOnShow:i,placement:f="bottom-start",children:c}){const a=rr(),[u,s]=sr(t,e,n),[l,g]=bt(),p=l.current,[v,m]=bt(),d=v.current,C=nr(u),D=h.exports.useRef(null),b=h.exports.useRef(!1),y=h.exports.useContext(Se),w=h.exports.useCallback((O,P,$=P==null?void 0:P.type)=>{s(O,{originalEvent:P,source:$})},[s]),x=X((O,P)=>{r==null||r(O,P),w(!1,P,"select"),P.isPropagationStopped()||y==null||y(O,P)}),E=h.exports.useMemo(()=>({toggle:w,placement:f,show:u,menuElement:p,toggleElement:d,setMenu:g,setToggle:m}),[w,f,u,p,d,g,m]);p&&C&&!u&&(b.current=p.contains(p.ownerDocument.activeElement));const A=X(()=>{d&&d.focus&&d.focus()}),M=X(()=>{const O=D.current;let P=i;if(P==null&&(P=l.current&&Tt(l.current)?"keyboard":!1),P===!1||P==="keyboard"&&!/^key.+$/.test(O))return;const $=ot(l.current,o)[0];$&&$.focus&&$.focus()});h.exports.useEffect(()=>{u?M():b.current&&(b.current=!1,A())},[u,b,A,M]),h.exports.useEffect(()=>{D.current=null});const R=(O,P)=>{if(!l.current)return null;const $=ot(l.current,o);let k=$.indexOf(O)+P;return k=Math.max(0,Math.min(k,$.length)),$[k]};return vr(h.exports.useCallback(()=>a.document,[a]),"keydown",O=>{var P,$;const{key:k}=O,T=O.target,j=(P=l.current)==null?void 0:P.contains(T),I=($=v.current)==null?void 0:$.contains(T);if(/input|textarea/i.test(T.tagName)&&(k===" "||k!=="Escape"&&j||k==="Escape"&&T.type==="search")||!j&&!I||k==="Tab"&&(!l.current||!u))return;D.current=O.type;const F={originalEvent:O,source:O.type};switch(k){case"ArrowUp":{const S=R(T,-1);S&&S.focus&&S.focus(),O.preventDefault();return}case"ArrowDown":if(O.preventDefault(),!u)s(!0,F);else{const S=R(T,1);S&&S.focus&&S.focus()}return;case"Tab":or(T.ownerDocument,"keyup",S=>{var ee;(S.key==="Tab"&&!S.target||!((ee=l.current)!=null&&ee.contains(S.target)))&&s(!1,F)},{once:!0});break;case"Escape":k==="Escape"&&(O.preventDefault(),O.stopPropagation()),s(!1,F);break}}),V(Se.Provider,{value:x,children:V($e.Provider,{value:E,children:c})})}he.displayName="Dropdown";he.Menu=qe;he.Toggle=Lt;he.Item=Nt;const Wt=h.exports.createContext({});Wt.displayName="DropdownContext";const Ht=Wt,Ft=h.exports.forwardRef(({bsPrefix:e,className:t,eventKey:r,disabled:n=!1,onClick:o,active:i,as:f=ur,...c},a)=>{const u=De(e,"dropdown-item"),[s,l]=It({key:r,href:c.href,disabled:n,onClick:o,active:i});return V(f,{...c,...s,ref:a,className:Pe(t,u,l.isActive&&"active",n&&"disabled")})});Ft.displayName="DropdownItem";const Hn=Ft,Vt=h.exports.createContext(null);Vt.displayName="InputGroupContext";const Ke=Vt;function Ut(e,t){return e}const Fn={flip:!0};function qt(e,t,r){const n=r?"top-end":"top-start",o=r?"top-start":"top-end",i=r?"bottom-end":"bottom-start",f=r?"bottom-start":"bottom-end",c=r?"right-start":"left-start",a=r?"right-end":"left-end",u=r?"left-start":"right-start",s=r?"left-end":"right-end";let l=e?f:i;return t==="up"?l=e?o:n:t==="end"?l=e?s:u:t==="start"&&(l=e?a:c),l}const ze=h.exports.forwardRef(({bsPrefix:e,className:t,align:r,rootCloseEvent:n,flip:o,show:i,renderOnMount:f,as:c="div",popperConfig:a,variant:u,...s},l)=>{let g=!1;const p=h.exports.useContext(fr),v=De(e,"dropdown-menu"),{align:m,drop:d,isRTL:C}=h.exports.useContext(Ht);r=r||m;const D=h.exports.useContext(Ke),b=[];if(r)if(typeof r=="object"){const O=Object.keys(r);if(O.length){const P=O[0],$=r[P];g=$==="start",b.push(`${v}-${P}-${$}`)}}else r==="end"&&(g=!0);const y=qt(g,d,C),[w,{hasShown:x,popper:E,show:A,toggle:M}]=St({flip:o,rootCloseEvent:n,show:i,usePopper:!p&&b.length===0,offset:[0,2],popperConfig:a,placement:y});if(w.ref=Ct(Ut(l),w.ref),hr(()=>{A&&(E==null||E.update())},[A]),!x&&!f&&!D)return null;typeof c!="string"&&(w.show=A,w.close=()=>M==null?void 0:M(!1),w.align=r);let R=s.style;return E!=null&&E.placement&&(R={...s.style,...w.style},s["x-placement"]=E.placement),V(c,{...s,...w,style:R,...(b.length||p)&&{"data-bs-popper":"static"},className:Pe(t,v,A&&"show",g&&`${v}-end`,u&&`${v}-${u}`,...b)})});ze.displayName="DropdownMenu";ze.defaultProps=Fn;const Vn=ze,Kt=h.exports.forwardRef(({bsPrefix:e,split:t,className:r,childBsPrefix:n,as:o=dr,...i},f)=>{const c=De(e,"dropdown-toggle"),a=h.exports.useContext($e),u=h.exports.useContext(Ke);n!==void 0&&(i.bsPrefix=n);const[s]=Bt();return s.ref=Ct(s.ref,Ut(f)),V(o,{className:Pe(r,c,t&&`${c}-split`,!!u&&(a==null?void 0:a.show)&&"show"),...s,...i})});Kt.displayName="DropdownToggle";const Un=Kt,qn=Le("dropdown-header",{defaultProps:{role:"heading"}}),Kn=Le("dropdown-divider",{Component:"hr",defaultProps:{role:"separator"}}),zn=Le("dropdown-item-text",{Component:"span"}),Xn={navbar:!1,align:"start",autoClose:!0},Xe=h.exports.forwardRef((e,t)=>{const{bsPrefix:r,drop:n,show:o,className:i,align:f,onSelect:c,onToggle:a,focusFirstItemOnShow:u,as:s="div",navbar:l,autoClose:g,...p}=lr(e,{show:"onToggle"}),v=h.exports.useContext(Ke),m=De(r,"dropdown"),d=Qt(),C=x=>g===!1?x==="click":g==="inside"?x!=="rootClose":g==="outside"?x!=="select":!0,D=X((x,E)=>{E.originalEvent.currentTarget===document&&(E.source!=="keydown"||E.originalEvent.key==="Escape")&&(E.source="rootClose"),C(E.source)&&(a==null||a(x,E))}),y=qt(f==="end",n,d),w=h.exports.useMemo(()=>({align:f,drop:n,isRTL:d}),[f,n,d]);return V(Ht.Provider,{value:w,children:V(he,{placement:y,show:o,onSelect:c,onToggle:D,focusFirstItemOnShow:u,itemSelector:`.${m}-item:not(.disabled):not(:disabled)`,children:v?p.children:V(s,{...p,ref:t,className:Pe(i,o&&"show",(!n||n==="down")&&m,n==="up"&&"dropup",n==="end"&&"dropend",n==="start"&&"dropstart")})})})});Xe.displayName="Dropdown";Xe.defaultProps=Xn;const eo=Object.assign(Xe,{Toggle:Un,Menu:Vn,Item:Hn,ItemText:zn,Divider:Kn,Header:qn});export{eo as D};
