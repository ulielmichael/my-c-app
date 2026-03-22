(function(){const Y=document.createElement("link").relList;if(Y&&Y.supports&&Y.supports("modulepreload"))return;for(const T of document.querySelectorAll('link[rel="modulepreload"]'))h(T);new MutationObserver(T=>{for(const G of T)if(G.type==="childList")for(const L of G.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&h(L)}).observe(document,{childList:!0,subtree:!0});function M(T){const G={};return T.integrity&&(G.integrity=T.integrity),T.referrerPolicy&&(G.referrerPolicy=T.referrerPolicy),T.crossOrigin==="use-credentials"?G.credentials="include":T.crossOrigin==="anonymous"?G.credentials="omit":G.credentials="same-origin",G}function h(T){if(T.ep)return;T.ep=!0;const G=M(T);fetch(T.href,G)}})();var cf={exports:{}},za={};var yd;function W1(){if(yd)return za;yd=1;var v=Symbol.for("react.transitional.element"),Y=Symbol.for("react.fragment");function M(h,T,G){var L=null;if(G!==void 0&&(L=""+G),T.key!==void 0&&(L=""+T.key),"key"in T){G={};for(var C in T)C!=="key"&&(G[C]=T[C])}else G=T;return T=G.ref,{$$typeof:v,type:h,key:L,ref:T!==void 0?T:null,props:G}}return za.Fragment=Y,za.jsx=M,za.jsxs=M,za}var gd;function $1(){return gd||(gd=1,cf.exports=W1()),cf.exports}var d=$1(),ff={exports:{}},w={};var bd;function F1(){if(bd)return w;bd=1;var v=Symbol.for("react.transitional.element"),Y=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),L=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),tt=Symbol.iterator;function Ot(o){return o===null||typeof o!="object"?null:(o=tt&&o[tt]||o["@@iterator"],typeof o=="function"?o:null)}var at={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,J={};function lt(o,E,U){this.props=o,this.context=E,this.refs=J,this.updater=U||at}lt.prototype.isReactComponent={},lt.prototype.setState=function(o,E){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,E,"setState")},lt.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function tn(){}tn.prototype=lt.prototype;function zt(o,E,U){this.props=o,this.context=E,this.refs=J,this.updater=U||at}var Mt=zt.prototype=new tn;Mt.constructor=zt,R(Mt,lt.prototype),Mt.isPureReactComponent=!0;var dn=Array.isArray;function wt(){}var nt={H:null,A:null,T:null,S:null},Zt=Object.prototype.hasOwnProperty;function Tn(o,E,U){var N=U.ref;return{$$typeof:v,type:o,key:E,ref:N!==void 0?N:null,props:U}}function Ze(o,E){return Tn(o.type,E,o.props)}function jn(o){return typeof o=="object"&&o!==null&&o.$$typeof===v}function Vt(o){var E={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(U){return E[U]})}var qe=/\/+/g;function Nn(o,E){return typeof o=="object"&&o!==null&&o.key!=null?Vt(""+o.key):E.toString(36)}function An(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(wt,wt):(o.status="pending",o.then(function(E){o.status==="pending"&&(o.status="fulfilled",o.value=E)},function(E){o.status==="pending"&&(o.status="rejected",o.reason=E)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function S(o,E,U,N,Z){var W=typeof o;(W==="undefined"||W==="boolean")&&(o=null);var ft=!1;if(o===null)ft=!0;else switch(W){case"bigint":case"string":case"number":ft=!0;break;case"object":switch(o.$$typeof){case v:case Y:ft=!0;break;case k:return ft=o._init,S(ft(o._payload),E,U,N,Z)}}if(ft)return Z=Z(o),ft=N===""?"."+Nn(o,0):N,dn(Z)?(U="",ft!=null&&(U=ft.replace(qe,"$&/")+"/"),S(Z,E,U,"",function(_l){return _l})):Z!=null&&(jn(Z)&&(Z=Ze(Z,U+(Z.key==null||o&&o.key===Z.key?"":(""+Z.key).replace(qe,"$&/")+"/")+ft)),E.push(Z)),1;ft=0;var Gt=N===""?".":N+":";if(dn(o))for(var At=0;At<o.length;At++)N=o[At],W=Gt+Nn(N,At),ft+=S(N,E,U,W,Z);else if(At=Ot(o),typeof At=="function")for(o=At.call(o),At=0;!(N=o.next()).done;)N=N.value,W=Gt+Nn(N,At++),ft+=S(N,E,U,W,Z);else if(W==="object"){if(typeof o.then=="function")return S(An(o),E,U,N,Z);throw E=String(o),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return ft}function _(o,E,U){if(o==null)return o;var N=[],Z=0;return S(o,N,"","",function(W){return E.call(U,W,Z++)}),N}function Q(o){if(o._status===-1){var E=o._result;E=E(),E.then(function(U){(o._status===0||o._status===-1)&&(o._status=1,o._result=U)},function(U){(o._status===0||o._status===-1)&&(o._status=2,o._result=U)}),o._status===-1&&(o._status=0,o._result=E)}if(o._status===1)return o._result.default;throw o._result}var st=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},mt={map:_,forEach:function(o,E,U){_(o,function(){E.apply(this,arguments)},U)},count:function(o){var E=0;return _(o,function(){E++}),E},toArray:function(o){return _(o,function(E){return E})||[]},only:function(o){if(!jn(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return w.Activity=j,w.Children=mt,w.Component=lt,w.Fragment=M,w.Profiler=T,w.PureComponent=zt,w.StrictMode=h,w.Suspense=O,w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=nt,w.__COMPILER_RUNTIME={__proto__:null,c:function(o){return nt.H.useMemoCache(o)}},w.cache=function(o){return function(){return o.apply(null,arguments)}},w.cacheSignal=function(){return null},w.cloneElement=function(o,E,U){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var N=R({},o.props),Z=o.key;if(E!=null)for(W in E.key!==void 0&&(Z=""+E.key),E)!Zt.call(E,W)||W==="key"||W==="__self"||W==="__source"||W==="ref"&&E.ref===void 0||(N[W]=E[W]);var W=arguments.length-2;if(W===1)N.children=U;else if(1<W){for(var ft=Array(W),Gt=0;Gt<W;Gt++)ft[Gt]=arguments[Gt+2];N.children=ft}return Tn(o.type,Z,N)},w.createContext=function(o){return o={$$typeof:L,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:G,_context:o},o},w.createElement=function(o,E,U){var N,Z={},W=null;if(E!=null)for(N in E.key!==void 0&&(W=""+E.key),E)Zt.call(E,N)&&N!=="key"&&N!=="__self"&&N!=="__source"&&(Z[N]=E[N]);var ft=arguments.length-2;if(ft===1)Z.children=U;else if(1<ft){for(var Gt=Array(ft),At=0;At<ft;At++)Gt[At]=arguments[At+2];Z.children=Gt}if(o&&o.defaultProps)for(N in ft=o.defaultProps,ft)Z[N]===void 0&&(Z[N]=ft[N]);return Tn(o,W,Z)},w.createRef=function(){return{current:null}},w.forwardRef=function(o){return{$$typeof:C,render:o}},w.isValidElement=jn,w.lazy=function(o){return{$$typeof:k,_payload:{_status:-1,_result:o},_init:Q}},w.memo=function(o,E){return{$$typeof:q,type:o,compare:E===void 0?null:E}},w.startTransition=function(o){var E=nt.T,U={};nt.T=U;try{var N=o(),Z=nt.S;Z!==null&&Z(U,N),typeof N=="object"&&N!==null&&typeof N.then=="function"&&N.then(wt,st)}catch(W){st(W)}finally{E!==null&&U.types!==null&&(E.types=U.types),nt.T=E}},w.unstable_useCacheRefresh=function(){return nt.H.useCacheRefresh()},w.use=function(o){return nt.H.use(o)},w.useActionState=function(o,E,U){return nt.H.useActionState(o,E,U)},w.useCallback=function(o,E){return nt.H.useCallback(o,E)},w.useContext=function(o){return nt.H.useContext(o)},w.useDebugValue=function(){},w.useDeferredValue=function(o,E){return nt.H.useDeferredValue(o,E)},w.useEffect=function(o,E){return nt.H.useEffect(o,E)},w.useEffectEvent=function(o){return nt.H.useEffectEvent(o)},w.useId=function(){return nt.H.useId()},w.useImperativeHandle=function(o,E,U){return nt.H.useImperativeHandle(o,E,U)},w.useInsertionEffect=function(o,E){return nt.H.useInsertionEffect(o,E)},w.useLayoutEffect=function(o,E){return nt.H.useLayoutEffect(o,E)},w.useMemo=function(o,E){return nt.H.useMemo(o,E)},w.useOptimistic=function(o,E){return nt.H.useOptimistic(o,E)},w.useReducer=function(o,E,U){return nt.H.useReducer(o,E,U)},w.useRef=function(o){return nt.H.useRef(o)},w.useState=function(o){return nt.H.useState(o)},w.useSyncExternalStore=function(o,E,U){return nt.H.useSyncExternalStore(o,E,U)},w.useTransition=function(){return nt.H.useTransition()},w.version="19.2.4",w}var xd;function pf(){return xd||(xd=1,ff.exports=F1()),ff.exports}var Pt=pf(),rf={exports:{}},Aa={},of={exports:{}},sf={};var vd;function I1(){return vd||(vd=1,(function(v){function Y(S,_){var Q=S.length;S.push(_);t:for(;0<Q;){var st=Q-1>>>1,mt=S[st];if(0<T(mt,_))S[st]=_,S[Q]=mt,Q=st;else break t}}function M(S){return S.length===0?null:S[0]}function h(S){if(S.length===0)return null;var _=S[0],Q=S.pop();if(Q!==_){S[0]=Q;t:for(var st=0,mt=S.length,o=mt>>>1;st<o;){var E=2*(st+1)-1,U=S[E],N=E+1,Z=S[N];if(0>T(U,Q))N<mt&&0>T(Z,U)?(S[st]=Z,S[N]=Q,st=N):(S[st]=U,S[E]=Q,st=E);else if(N<mt&&0>T(Z,Q))S[st]=Z,S[N]=Q,st=N;else break t}}return _}function T(S,_){var Q=S.sortIndex-_.sortIndex;return Q!==0?Q:S.id-_.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var G=performance;v.unstable_now=function(){return G.now()}}else{var L=Date,C=L.now();v.unstable_now=function(){return L.now()-C}}var O=[],q=[],k=1,j=null,tt=3,Ot=!1,at=!1,R=!1,J=!1,lt=typeof setTimeout=="function"?setTimeout:null,tn=typeof clearTimeout=="function"?clearTimeout:null,zt=typeof setImmediate<"u"?setImmediate:null;function Mt(S){for(var _=M(q);_!==null;){if(_.callback===null)h(q);else if(_.startTime<=S)h(q),_.sortIndex=_.expirationTime,Y(O,_);else break;_=M(q)}}function dn(S){if(R=!1,Mt(S),!at)if(M(O)!==null)at=!0,wt||(wt=!0,Vt());else{var _=M(q);_!==null&&An(dn,_.startTime-S)}}var wt=!1,nt=-1,Zt=5,Tn=-1;function Ze(){return J?!0:!(v.unstable_now()-Tn<Zt)}function jn(){if(J=!1,wt){var S=v.unstable_now();Tn=S;var _=!0;try{t:{at=!1,R&&(R=!1,tn(nt),nt=-1),Ot=!0;var Q=tt;try{n:{for(Mt(S),j=M(O);j!==null&&!(j.expirationTime>S&&Ze());){var st=j.callback;if(typeof st=="function"){j.callback=null,tt=j.priorityLevel;var mt=st(j.expirationTime<=S);if(S=v.unstable_now(),typeof mt=="function"){j.callback=mt,Mt(S),_=!0;break n}j===M(O)&&h(O),Mt(S)}else h(O);j=M(O)}if(j!==null)_=!0;else{var o=M(q);o!==null&&An(dn,o.startTime-S),_=!1}}break t}finally{j=null,tt=Q,Ot=!1}_=void 0}}finally{_?Vt():wt=!1}}}var Vt;if(typeof zt=="function")Vt=function(){zt(jn)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,Nn=qe.port2;qe.port1.onmessage=jn,Vt=function(){Nn.postMessage(null)}}else Vt=function(){lt(jn,0)};function An(S,_){nt=lt(function(){S(v.unstable_now())},_)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(S){S.callback=null},v.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Zt=0<S?Math.floor(1e3/S):5},v.unstable_getCurrentPriorityLevel=function(){return tt},v.unstable_next=function(S){switch(tt){case 1:case 2:case 3:var _=3;break;default:_=tt}var Q=tt;tt=_;try{return S()}finally{tt=Q}},v.unstable_requestPaint=function(){J=!0},v.unstable_runWithPriority=function(S,_){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var Q=tt;tt=S;try{return _()}finally{tt=Q}},v.unstable_scheduleCallback=function(S,_,Q){var st=v.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?st+Q:st):Q=st,S){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=Q+mt,S={id:k++,callback:_,priorityLevel:S,startTime:Q,expirationTime:mt,sortIndex:-1},Q>st?(S.sortIndex=Q,Y(q,S),M(O)===null&&S===M(q)&&(R?(tn(nt),nt=-1):R=!0,An(dn,Q-st))):(S.sortIndex=mt,Y(O,S),at||Ot||(at=!0,wt||(wt=!0,Vt()))),S},v.unstable_shouldYield=Ze,v.unstable_wrapCallback=function(S){var _=tt;return function(){var Q=tt;tt=_;try{return S.apply(this,arguments)}finally{tt=Q}}}})(sf)),sf}var Sd;function P1(){return Sd||(Sd=1,of.exports=I1()),of.exports}var df={exports:{}},Xt={};var zd;function tp(){if(zd)return Xt;zd=1;var v=pf();function Y(O){var q="https://react.dev/errors/"+O;if(1<arguments.length){q+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)q+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+O+"; visit "+q+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(){}var h={d:{f:M,r:function(){throw Error(Y(522))},D:M,C:M,L:M,m:M,X:M,S:M,M},p:0,findDOMNode:null},T=Symbol.for("react.portal");function G(O,q,k){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:j==null?null:""+j,children:O,containerInfo:q,implementation:k}}var L=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(O,q){if(O==="font")return"";if(typeof q=="string")return q==="use-credentials"?q:""}return Xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Xt.createPortal=function(O,q){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!q||q.nodeType!==1&&q.nodeType!==9&&q.nodeType!==11)throw Error(Y(299));return G(O,q,null,k)},Xt.flushSync=function(O){var q=L.T,k=h.p;try{if(L.T=null,h.p=2,O)return O()}finally{L.T=q,h.p=k,h.d.f()}},Xt.preconnect=function(O,q){typeof O=="string"&&(q?(q=q.crossOrigin,q=typeof q=="string"?q==="use-credentials"?q:"":void 0):q=null,h.d.C(O,q))},Xt.prefetchDNS=function(O){typeof O=="string"&&h.d.D(O)},Xt.preinit=function(O,q){if(typeof O=="string"&&q&&typeof q.as=="string"){var k=q.as,j=C(k,q.crossOrigin),tt=typeof q.integrity=="string"?q.integrity:void 0,Ot=typeof q.fetchPriority=="string"?q.fetchPriority:void 0;k==="style"?h.d.S(O,typeof q.precedence=="string"?q.precedence:void 0,{crossOrigin:j,integrity:tt,fetchPriority:Ot}):k==="script"&&h.d.X(O,{crossOrigin:j,integrity:tt,fetchPriority:Ot,nonce:typeof q.nonce=="string"?q.nonce:void 0})}},Xt.preinitModule=function(O,q){if(typeof O=="string")if(typeof q=="object"&&q!==null){if(q.as==null||q.as==="script"){var k=C(q.as,q.crossOrigin);h.d.M(O,{crossOrigin:k,integrity:typeof q.integrity=="string"?q.integrity:void 0,nonce:typeof q.nonce=="string"?q.nonce:void 0})}}else q==null&&h.d.M(O)},Xt.preload=function(O,q){if(typeof O=="string"&&typeof q=="object"&&q!==null&&typeof q.as=="string"){var k=q.as,j=C(k,q.crossOrigin);h.d.L(O,k,{crossOrigin:j,integrity:typeof q.integrity=="string"?q.integrity:void 0,nonce:typeof q.nonce=="string"?q.nonce:void 0,type:typeof q.type=="string"?q.type:void 0,fetchPriority:typeof q.fetchPriority=="string"?q.fetchPriority:void 0,referrerPolicy:typeof q.referrerPolicy=="string"?q.referrerPolicy:void 0,imageSrcSet:typeof q.imageSrcSet=="string"?q.imageSrcSet:void 0,imageSizes:typeof q.imageSizes=="string"?q.imageSizes:void 0,media:typeof q.media=="string"?q.media:void 0})}},Xt.preloadModule=function(O,q){if(typeof O=="string")if(q){var k=C(q.as,q.crossOrigin);h.d.m(O,{as:typeof q.as=="string"&&q.as!=="script"?q.as:void 0,crossOrigin:k,integrity:typeof q.integrity=="string"?q.integrity:void 0})}else h.d.m(O)},Xt.requestFormReset=function(O){h.d.r(O)},Xt.unstable_batchedUpdates=function(O,q){return O(q)},Xt.useFormState=function(O,q,k){return L.H.useFormState(O,q,k)},Xt.useFormStatus=function(){return L.H.useHostTransitionStatus()},Xt.version="19.2.4",Xt}var Ad;function np(){if(Ad)return df.exports;Ad=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(Y){console.error(Y)}}return v(),df.exports=tp(),df.exports}var qd;function ep(){if(qd)return Aa;qd=1;var v=P1(),Y=pf(),M=np();function h(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function T(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function G(t){var n=t,e=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(e=n.return),t=n.return;while(t)}return n.tag===3?e:null}function L(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function C(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function O(t){if(G(t)!==t)throw Error(h(188))}function q(t){var n=t.alternate;if(!n){if(n=G(t),n===null)throw Error(h(188));return n!==t?null:t}for(var e=t,l=n;;){var a=e.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){e=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===e)return O(a),t;if(i===l)return O(a),n;i=i.sibling}throw Error(h(188))}if(e.return!==l.return)e=a,l=i;else{for(var u=!1,c=a.child;c;){if(c===e){u=!0,e=a,l=i;break}if(c===l){u=!0,l=a,e=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===e){u=!0,e=i,l=a;break}if(c===l){u=!0,l=i,e=a;break}c=c.sibling}if(!u)throw Error(h(189))}}if(e.alternate!==l)throw Error(h(190))}if(e.tag!==3)throw Error(h(188));return e.stateNode.current===e?t:n}function k(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=k(t),n!==null)return n;t=t.sibling}return null}var j=Object.assign,tt=Symbol.for("react.element"),Ot=Symbol.for("react.transitional.element"),at=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),lt=Symbol.for("react.profiler"),tn=Symbol.for("react.consumer"),zt=Symbol.for("react.context"),Mt=Symbol.for("react.forward_ref"),dn=Symbol.for("react.suspense"),wt=Symbol.for("react.suspense_list"),nt=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),Tn=Symbol.for("react.activity"),Ze=Symbol.for("react.memo_cache_sentinel"),jn=Symbol.iterator;function Vt(t){return t===null||typeof t!="object"?null:(t=jn&&t[jn]||t["@@iterator"],typeof t=="function"?t:null)}var qe=Symbol.for("react.client.reference");function Nn(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===qe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case lt:return"Profiler";case J:return"StrictMode";case dn:return"Suspense";case wt:return"SuspenseList";case Tn:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case at:return"Portal";case zt:return t.displayName||"Context";case tn:return(t._context.displayName||"Context")+".Consumer";case Mt:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nt:return n=t.displayName||null,n!==null?n:Nn(t.type)||"Memo";case Zt:n=t._payload,t=t._init;try{return Nn(t(n))}catch{}}return null}var An=Array.isArray,S=Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=M.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},st=[],mt=-1;function o(t){return{current:t}}function E(t){0>mt||(t.current=st[mt],st[mt]=null,mt--)}function U(t,n){mt++,st[mt]=t.current,t.current=n}var N=o(null),Z=o(null),W=o(null),ft=o(null);function Gt(t,n){switch(U(W,n),U(Z,t),U(N,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Ys(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Ys(n),t=Xs(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}E(N),U(N,t)}function At(){E(N),E(Z),E(W)}function _l(t){t.memoizedState!==null&&U(ft,t);var n=N.current,e=Xs(n,t.type);n!==e&&(U(Z,t),U(N,e))}function qa(t){Z.current===t&&(E(N),E(Z)),ft.current===t&&(E(ft),ba._currentValue=Q)}var Qi,hf;function Ee(t){if(Qi===void 0)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Qi=n&&n[1]||"",hf=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qi+t+hf}var wi=!1;function Zi(t,n){if(!t||wi)return"";wi=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(b){var g=b}Reflect.construct(t,[],A)}else{try{A.call()}catch(b){g=b}t.call(A.prototype)}}else{try{throw Error()}catch(b){g=b}(A=t())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(b){if(b&&g&&typeof b.stack=="string")return[b.stack,g.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var f=u.split(`
`),y=c.split(`
`);for(a=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;if(l===f.length||a===y.length)for(l=f.length-1,a=y.length-1;1<=l&&0<=a&&f[l]!==y[a];)a--;for(;1<=l&&0<=a;l--,a--)if(f[l]!==y[a]){if(l!==1||a!==1)do if(l--,a--,0>a||f[l]!==y[a]){var x=`
`+f[l].replace(" at new "," at ");return t.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",t.displayName)),x}while(1<=l&&0<=a);break}}}finally{wi=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?Ee(e):""}function Od(t,n){switch(t.tag){case 26:case 27:case 5:return Ee(t.type);case 16:return Ee("Lazy");case 13:return t.child!==n&&n!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return Zi(t.type,!1);case 11:return Zi(t.type.render,!1);case 1:return Zi(t.type,!0);case 31:return Ee("Activity");default:return""}}function mf(t){try{var n="",e=null;do n+=Od(t,e),e=t,t=t.return;while(t);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Vi=Object.prototype.hasOwnProperty,Ki=v.unstable_scheduleCallback,Ji=v.unstable_cancelCallback,Td=v.unstable_shouldYield,jd=v.unstable_requestPaint,nn=v.unstable_now,_d=v.unstable_getCurrentPriorityLevel,yf=v.unstable_ImmediatePriority,gf=v.unstable_UserBlockingPriority,Ea=v.unstable_NormalPriority,Ud=v.unstable_LowPriority,bf=v.unstable_IdlePriority,Md=v.log,Dd=v.unstable_setDisableYieldValue,Ul=null,en=null;function Pn(t){if(typeof Md=="function"&&Dd(t),en&&typeof en.setStrictMode=="function")try{en.setStrictMode(Ul,t)}catch{}}var ln=Math.clz32?Math.clz32:Bd,Rd=Math.log,Nd=Math.LN2;function Bd(t){return t>>>=0,t===0?32:31-(Rd(t)/Nd|0)|0}var Oa=256,Ta=262144,ja=4194304;function Oe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _a(t,n,e){var l=t.pendingLanes;if(l===0)return 0;var a=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?a=Oe(l):(u&=c,u!==0?a=Oe(u):e||(e=c&~t,e!==0&&(a=Oe(e))))):(c=l&~i,c!==0?a=Oe(c):u!==0?a=Oe(u):e||(e=l&~t,e!==0&&(a=Oe(e)))),a===0?0:n!==0&&n!==a&&(n&i)===0&&(i=a&-a,e=n&-n,i>=e||i===32&&(e&4194048)!==0)?n:a}function Ml(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Cd(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xf(){var t=ja;return ja<<=1,(ja&62914560)===0&&(ja=4194304),t}function ki(t){for(var n=[],e=0;31>e;e++)n.push(t);return n}function Dl(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Hd(t,n,e,l,a,i){var u=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,y=t.hiddenUpdates;for(e=u&~e;0<e;){var x=31-ln(e),A=1<<x;c[x]=0,f[x]=-1;var g=y[x];if(g!==null)for(y[x]=null,x=0;x<g.length;x++){var b=g[x];b!==null&&(b.lane&=-536870913)}e&=~A}l!==0&&vf(t,l,0),i!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~n))}function vf(t,n,e){t.pendingLanes|=n,t.suspendedLanes&=~n;var l=31-ln(n);t.entangledLanes|=n,t.entanglements[l]=t.entanglements[l]|1073741824|e&261930}function Sf(t,n){var e=t.entangledLanes|=n;for(t=t.entanglements;e;){var l=31-ln(e),a=1<<l;a&n|t[l]&n&&(t[l]|=n),e&=~a}}function zf(t,n){var e=n&-n;return e=(e&42)!==0?1:Wi(e),(e&(t.suspendedLanes|n))!==0?0:e}function Wi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $i(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Af(){var t=_.p;return t!==0?t:(t=window.event,t===void 0?32:rd(t.type))}function qf(t,n){var e=_.p;try{return _.p=t,n()}finally{_.p=e}}var te=Math.random().toString(36).slice(2),Bt="__reactFiber$"+te,Kt="__reactProps$"+te,Ve="__reactContainer$"+te,Fi="__reactEvents$"+te,Ld="__reactListeners$"+te,Yd="__reactHandles$"+te,Ef="__reactResources$"+te,Rl="__reactMarker$"+te;function Ii(t){delete t[Bt],delete t[Kt],delete t[Fi],delete t[Ld],delete t[Yd]}function Ke(t){var n=t[Bt];if(n)return n;for(var e=t.parentNode;e;){if(n=e[Ve]||e[Bt]){if(e=n.alternate,n.child!==null||e!==null&&e.child!==null)for(t=Js(t);t!==null;){if(e=t[Bt])return e;t=Js(t)}return n}t=e,e=t.parentNode}return null}function Je(t){if(t=t[Bt]||t[Ve]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Nl(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(h(33))}function ke(t){var n=t[Ef];return n||(n=t[Ef]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Rt(t){t[Rl]=!0}var Of=new Set,Tf={};function Te(t,n){We(t,n),We(t+"Capture",n)}function We(t,n){for(Tf[t]=n,t=0;t<n.length;t++)Of.add(n[t])}var Xd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jf={},_f={};function Gd(t){return Vi.call(_f,t)?!0:Vi.call(jf,t)?!1:Xd.test(t)?_f[t]=!0:(jf[t]=!0,!1)}function Ua(t,n,e){if(Gd(n))if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+e)}}function Ma(t,n,e){if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+e)}}function Bn(t,n,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(n,e,""+l)}}function pn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Uf(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qd(t,n,e){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return a.call(this)},set:function(u){e=""+u,i.call(this,u)}}),Object.defineProperty(t,n,{enumerable:l.enumerable}),{getValue:function(){return e},setValue:function(u){e=""+u},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Pi(t){if(!t._valueTracker){var n=Uf(t)?"checked":"value";t._valueTracker=Qd(t,n,""+t[n])}}function Mf(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var e=n.getValue(),l="";return t&&(l=Uf(t)?t.checked?"true":"false":t.value),t=l,t!==e?(n.setValue(t),!0):!1}function Da(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var wd=/[\n"\\]/g;function hn(t){return t.replace(wd,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function tu(t,n,e,l,a,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),n!=null?u==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+pn(n)):t.value!==""+pn(n)&&(t.value=""+pn(n)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),n!=null?nu(t,u,pn(n)):e!=null?nu(t,u,pn(e)):l!=null&&t.removeAttribute("value"),a==null&&i!=null&&(t.defaultChecked=!!i),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+pn(c):t.removeAttribute("name")}function Df(t,n,e,l,a,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),n!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||n!=null)){Pi(t);return}e=e!=null?""+pn(e):"",n=n!=null?""+pn(n):e,c||n===t.value||(t.value=n),t.defaultValue=n}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=c?t.checked:!!l,t.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Pi(t)}function nu(t,n,e){n==="number"&&Da(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function $e(t,n,e,l){if(t=t.options,n){n={};for(var a=0;a<e.length;a++)n["$"+e[a]]=!0;for(e=0;e<t.length;e++)a=n.hasOwnProperty("$"+t[e].value),t[e].selected!==a&&(t[e].selected=a),a&&l&&(t[e].defaultSelected=!0)}else{for(e=""+pn(e),n=null,a=0;a<t.length;a++){if(t[a].value===e){t[a].selected=!0,l&&(t[a].defaultSelected=!0);return}n!==null||t[a].disabled||(n=t[a])}n!==null&&(n.selected=!0)}}function Rf(t,n,e){if(n!=null&&(n=""+pn(n),n!==t.value&&(t.value=n),e==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=e!=null?""+pn(e):""}function Nf(t,n,e,l){if(n==null){if(l!=null){if(e!=null)throw Error(h(92));if(An(l)){if(1<l.length)throw Error(h(93));l=l[0]}e=l}e==null&&(e=""),n=e}e=pn(n),t.defaultValue=e,l=t.textContent,l===e&&l!==""&&l!==null&&(t.value=l),Pi(t)}function Fe(t,n){if(n){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=n;return}}t.textContent=n}var Zd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bf(t,n,e){var l=n.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?l?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":l?t.setProperty(n,e):typeof e!="number"||e===0||Zd.has(n)?n==="float"?t.cssFloat=e:t[n]=(""+e).trim():t[n]=e+"px"}function Cf(t,n,e){if(n!=null&&typeof n!="object")throw Error(h(62));if(t=t.style,e!=null){for(var l in e)!e.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var a in n)l=n[a],n.hasOwnProperty(a)&&e[a]!==l&&Bf(t,a,l)}else for(var i in n)n.hasOwnProperty(i)&&Bf(t,i,n[i])}function eu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ra(t){return Kd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Cn(){}var lu=null;function au(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ie=null,Pe=null;function Hf(t){var n=Je(t);if(n&&(t=n.stateNode)){var e=t[Kt]||null;t:switch(t=n.stateNode,n.type){case"input":if(tu(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),n=e.name,e.type==="radio"&&n!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+hn(""+n)+'"][type="radio"]'),n=0;n<e.length;n++){var l=e[n];if(l!==t&&l.form===t.form){var a=l[Kt]||null;if(!a)throw Error(h(90));tu(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(n=0;n<e.length;n++)l=e[n],l.form===t.form&&Mf(l)}break t;case"textarea":Rf(t,e.value,e.defaultValue);break t;case"select":n=e.value,n!=null&&$e(t,!!e.multiple,n,!1)}}}var iu=!1;function Lf(t,n,e){if(iu)return t(n,e);iu=!0;try{var l=t(n);return l}finally{if(iu=!1,(Ie!==null||Pe!==null)&&(vi(),Ie&&(n=Ie,t=Pe,Pe=Ie=null,Hf(n),t)))for(n=0;n<t.length;n++)Hf(t[n])}}function Bl(t,n){var e=t.stateNode;if(e===null)return null;var l=e[Kt]||null;if(l===null)return null;e=l[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(h(231,n,typeof e));return e}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Hn)try{var Cl={};Object.defineProperty(Cl,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Cl,Cl),window.removeEventListener("test",Cl,Cl)}catch{uu=!1}var ne=null,cu=null,Na=null;function Yf(){if(Na)return Na;var t,n=cu,e=n.length,l,a="value"in ne?ne.value:ne.textContent,i=a.length;for(t=0;t<e&&n[t]===a[t];t++);var u=e-t;for(l=1;l<=u&&n[e-l]===a[i-l];l++);return Na=a.slice(t,1<l?1-l:void 0)}function Ba(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Ca(){return!0}function Xf(){return!1}function Jt(t){function n(e,l,a,i,u){this._reactName=e,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(e=t[c],this[c]=e?e(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ca:Xf,this.isPropagationStopped=Xf,this}return j(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),n}var je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ha=Jt(je),Hl=j({},je,{view:0,detail:0}),Jd=Jt(Hl),fu,ru,Ll,La=j({},Hl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ll&&(Ll&&t.type==="mousemove"?(fu=t.screenX-Ll.screenX,ru=t.screenY-Ll.screenY):ru=fu=0,Ll=t),fu)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),Gf=Jt(La),kd=j({},La,{dataTransfer:0}),Wd=Jt(kd),$d=j({},Hl,{relatedTarget:0}),ou=Jt($d),Fd=j({},je,{animationName:0,elapsedTime:0,pseudoElement:0}),Id=Jt(Fd),Pd=j({},je,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t0=Jt(Pd),n0=j({},je,{data:0}),Qf=Jt(n0),e0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=a0[t])?!!n[t]:!1}function su(){return i0}var u0=j({},Hl,{key:function(t){if(t.key){var n=e0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ba(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?l0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(t){return t.type==="keypress"?Ba(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ba(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),c0=Jt(u0),f0=j({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wf=Jt(f0),r0=j({},Hl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),o0=Jt(r0),s0=j({},je,{propertyName:0,elapsedTime:0,pseudoElement:0}),d0=Jt(s0),p0=j({},La,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),h0=Jt(p0),m0=j({},je,{newState:0,oldState:0}),y0=Jt(m0),g0=[9,13,27,32],du=Hn&&"CompositionEvent"in window,Yl=null;Hn&&"documentMode"in document&&(Yl=document.documentMode);var b0=Hn&&"TextEvent"in window&&!Yl,Zf=Hn&&(!du||Yl&&8<Yl&&11>=Yl),Vf=" ",Kf=!1;function Jf(t,n){switch(t){case"keyup":return g0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var tl=!1;function x0(t,n){switch(t){case"compositionend":return kf(n);case"keypress":return n.which!==32?null:(Kf=!0,Vf);case"textInput":return t=n.data,t===Vf&&Kf?null:t;default:return null}}function v0(t,n){if(tl)return t==="compositionend"||!du&&Jf(t,n)?(t=Yf(),Na=cu=ne=null,tl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zf&&n.locale!=="ko"?null:n.data;default:return null}}var S0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!S0[t.type]:n==="textarea"}function $f(t,n,e,l){Ie?Pe?Pe.push(l):Pe=[l]:Ie=l,n=Ti(n,"onChange"),0<n.length&&(e=new Ha("onChange","change",null,e,l),t.push({event:e,listeners:n}))}var Xl=null,Gl=null;function z0(t){Rs(t,0)}function Ya(t){var n=Nl(t);if(Mf(n))return t}function Ff(t,n){if(t==="change")return n}var If=!1;if(Hn){var pu;if(Hn){var hu="oninput"in document;if(!hu){var Pf=document.createElement("div");Pf.setAttribute("oninput","return;"),hu=typeof Pf.oninput=="function"}pu=hu}else pu=!1;If=pu&&(!document.documentMode||9<document.documentMode)}function tr(){Xl&&(Xl.detachEvent("onpropertychange",nr),Gl=Xl=null)}function nr(t){if(t.propertyName==="value"&&Ya(Gl)){var n=[];$f(n,Gl,t,au(t)),Lf(z0,n)}}function A0(t,n,e){t==="focusin"?(tr(),Xl=n,Gl=e,Xl.attachEvent("onpropertychange",nr)):t==="focusout"&&tr()}function q0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ya(Gl)}function E0(t,n){if(t==="click")return Ya(n)}function O0(t,n){if(t==="input"||t==="change")return Ya(n)}function T0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var an=typeof Object.is=="function"?Object.is:T0;function Ql(t,n){if(an(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var e=Object.keys(t),l=Object.keys(n);if(e.length!==l.length)return!1;for(l=0;l<e.length;l++){var a=e[l];if(!Vi.call(n,a)||!an(t[a],n[a]))return!1}return!0}function er(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lr(t,n){var e=er(t);t=0;for(var l;e;){if(e.nodeType===3){if(l=t+e.textContent.length,t<=n&&l>=n)return{node:e,offset:n-t};t=l}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=er(e)}}function ar(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ar(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ir(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Da(t.document);n instanceof t.HTMLIFrameElement;){try{var e=typeof n.contentWindow.location.href=="string"}catch{e=!1}if(e)t=n.contentWindow;else break;n=Da(t.document)}return n}function mu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var j0=Hn&&"documentMode"in document&&11>=document.documentMode,nl=null,yu=null,wl=null,gu=!1;function ur(t,n,e){var l=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;gu||nl==null||nl!==Da(l)||(l=nl,"selectionStart"in l&&mu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),wl&&Ql(wl,l)||(wl=l,l=Ti(yu,"onSelect"),0<l.length&&(n=new Ha("onSelect","select",null,n,e),t.push({event:n,listeners:l}),n.target=nl)))}function _e(t,n){var e={};return e[t.toLowerCase()]=n.toLowerCase(),e["Webkit"+t]="webkit"+n,e["Moz"+t]="moz"+n,e}var el={animationend:_e("Animation","AnimationEnd"),animationiteration:_e("Animation","AnimationIteration"),animationstart:_e("Animation","AnimationStart"),transitionrun:_e("Transition","TransitionRun"),transitionstart:_e("Transition","TransitionStart"),transitioncancel:_e("Transition","TransitionCancel"),transitionend:_e("Transition","TransitionEnd")},bu={},cr={};Hn&&(cr=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function Ue(t){if(bu[t])return bu[t];if(!el[t])return t;var n=el[t],e;for(e in n)if(n.hasOwnProperty(e)&&e in cr)return bu[t]=n[e];return t}var fr=Ue("animationend"),rr=Ue("animationiteration"),or=Ue("animationstart"),_0=Ue("transitionrun"),U0=Ue("transitionstart"),M0=Ue("transitioncancel"),sr=Ue("transitionend"),dr=new Map,xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");xu.push("scrollEnd");function qn(t,n){dr.set(t,n),Te(n,[t])}var Xa=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mn=[],ll=0,vu=0;function Ga(){for(var t=ll,n=vu=ll=0;n<t;){var e=mn[n];mn[n++]=null;var l=mn[n];mn[n++]=null;var a=mn[n];mn[n++]=null;var i=mn[n];if(mn[n++]=null,l!==null&&a!==null){var u=l.pending;u===null?a.next=a:(a.next=u.next,u.next=a),l.pending=a}i!==0&&pr(e,a,i)}}function Qa(t,n,e,l){mn[ll++]=t,mn[ll++]=n,mn[ll++]=e,mn[ll++]=l,vu|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Su(t,n,e,l){return Qa(t,n,e,l),wa(t)}function Me(t,n){return Qa(t,null,null,n),wa(t)}function pr(t,n,e){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e);for(var a=!1,i=t.return;i!==null;)i.childLanes|=e,l=i.alternate,l!==null&&(l.childLanes|=e),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(a=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,a&&n!==null&&(a=31-ln(e),t=i.hiddenUpdates,l=t[a],l===null?t[a]=[n]:l.push(n),n.lane=e|536870912),i):null}function wa(t){if(50<sa)throw sa=0,Uc=null,Error(h(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var al={};function D0(t,n,e,l){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(t,n,e,l){return new D0(t,n,e,l)}function zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ln(t,n){var e=t.alternate;return e===null?(e=un(t.tag,n,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=n,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function hr(t,n){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Za(t,n,e,l,a,i){var u=0;if(l=t,typeof t=="function")zu(t)&&(u=1);else if(typeof t=="string")u=H1(t,e,N.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Tn:return t=un(31,e,n,a),t.elementType=Tn,t.lanes=i,t;case R:return De(e.children,a,i,n);case J:u=8,a|=24;break;case lt:return t=un(12,e,n,a|2),t.elementType=lt,t.lanes=i,t;case dn:return t=un(13,e,n,a),t.elementType=dn,t.lanes=i,t;case wt:return t=un(19,e,n,a),t.elementType=wt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zt:u=10;break t;case tn:u=9;break t;case Mt:u=11;break t;case nt:u=14;break t;case Zt:u=16,l=null;break t}u=29,e=Error(h(130,t===null?"null":typeof t,"")),l=null}return n=un(u,e,n,a),n.elementType=t,n.type=l,n.lanes=i,n}function De(t,n,e,l){return t=un(7,t,l,n),t.lanes=e,t}function Au(t,n,e){return t=un(6,t,null,n),t.lanes=e,t}function mr(t){var n=un(18,null,null,0);return n.stateNode=t,n}function qu(t,n,e){return n=un(4,t.children!==null?t.children:[],t.key,n),n.lanes=e,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var yr=new WeakMap;function yn(t,n){if(typeof t=="object"&&t!==null){var e=yr.get(t);return e!==void 0?e:(n={value:t,source:n,stack:mf(n)},yr.set(t,n),n)}return{value:t,source:n,stack:mf(n)}}var il=[],ul=0,Va=null,Zl=0,gn=[],bn=0,ee=null,_n=1,Un="";function Yn(t,n){il[ul++]=Zl,il[ul++]=Va,Va=t,Zl=n}function gr(t,n,e){gn[bn++]=_n,gn[bn++]=Un,gn[bn++]=ee,ee=t;var l=_n;t=Un;var a=32-ln(l)-1;l&=~(1<<a),e+=1;var i=32-ln(n)+a;if(30<i){var u=a-a%5;i=(l&(1<<u)-1).toString(32),l>>=u,a-=u,_n=1<<32-ln(n)+a|e<<a|l,Un=i+t}else _n=1<<i|e<<a|l,Un=t}function Eu(t){t.return!==null&&(Yn(t,1),gr(t,1,0))}function Ou(t){for(;t===Va;)Va=il[--ul],il[ul]=null,Zl=il[--ul],il[ul]=null;for(;t===ee;)ee=gn[--bn],gn[bn]=null,Un=gn[--bn],gn[bn]=null,_n=gn[--bn],gn[bn]=null}function br(t,n){gn[bn++]=_n,gn[bn++]=Un,gn[bn++]=ee,_n=n.id,Un=n.overflow,ee=t}var Ct=null,gt=null,et=!1,le=null,xn=!1,Tu=Error(h(519));function ae(t){var n=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vl(yn(n,t)),Tu}function xr(t){var n=t.stateNode,e=t.type,l=t.memoizedProps;switch(n[Bt]=t,n[Kt]=l,e){case"dialog":F("cancel",n),F("close",n);break;case"iframe":case"object":case"embed":F("load",n);break;case"video":case"audio":for(e=0;e<pa.length;e++)F(pa[e],n);break;case"source":F("error",n);break;case"img":case"image":case"link":F("error",n),F("load",n);break;case"details":F("toggle",n);break;case"input":F("invalid",n),Df(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":F("invalid",n);break;case"textarea":F("invalid",n),Nf(n,l.value,l.defaultValue,l.children)}e=l.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||n.textContent===""+e||l.suppressHydrationWarning===!0||Hs(n.textContent,e)?(l.popover!=null&&(F("beforetoggle",n),F("toggle",n)),l.onScroll!=null&&F("scroll",n),l.onScrollEnd!=null&&F("scrollend",n),l.onClick!=null&&(n.onclick=Cn),n=!0):n=!1,n||ae(t,!0)}function vr(t){for(Ct=t.return;Ct;)switch(Ct.tag){case 5:case 31:case 13:xn=!1;return;case 27:case 3:xn=!0;return;default:Ct=Ct.return}}function cl(t){if(t!==Ct)return!1;if(!et)return vr(t),et=!0,!1;var n=t.tag,e;if((e=n!==3&&n!==27)&&((e=n===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||Vc(t.type,t.memoizedProps)),e=!e),e&&gt&&ae(t),vr(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(317));gt=Ks(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(317));gt=Ks(t)}else n===27?(n=gt,be(t.type)?(t=$c,$c=null,gt=t):gt=n):gt=Ct?Sn(t.stateNode.nextSibling):null;return!0}function Re(){gt=Ct=null,et=!1}function ju(){var t=le;return t!==null&&(Ft===null?Ft=t:Ft.push.apply(Ft,t),le=null),t}function Vl(t){le===null?le=[t]:le.push(t)}var _u=o(null),Ne=null,Xn=null;function ie(t,n,e){U(_u,n._currentValue),n._currentValue=e}function Gn(t){t._currentValue=_u.current,E(_u)}function Uu(t,n,e){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===e)break;t=t.return}}function Mu(t,n,e,l){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){var u=a.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=a;for(var f=0;f<n.length;f++)if(c.context===n[f]){i.lanes|=e,c=i.alternate,c!==null&&(c.lanes|=e),Uu(i.return,e,t),l||(u=null);break t}i=c.next}}else if(a.tag===18){if(u=a.return,u===null)throw Error(h(341));u.lanes|=e,i=u.alternate,i!==null&&(i.lanes|=e),Uu(u,e,t),u=null}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===t){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}}function fl(t,n,e,l){t=null;for(var a=n,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var u=a.alternate;if(u===null)throw Error(h(387));if(u=u.memoizedProps,u!==null){var c=a.type;an(a.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(a===ft.current){if(u=a.alternate,u===null)throw Error(h(387));u.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(ba):t=[ba])}a=a.return}t!==null&&Mu(n,t,e,l),n.flags|=262144}function Ka(t){for(t=t.firstContext;t!==null;){if(!an(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Be(t){Ne=t,Xn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ht(t){return Sr(Ne,t)}function Ja(t,n){return Ne===null&&Be(t),Sr(t,n)}function Sr(t,n){var e=n._currentValue;if(n={context:n,memoizedValue:e,next:null},Xn===null){if(t===null)throw Error(h(308));Xn=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Xn=Xn.next=n;return e}var R0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(e,l){t.push(l)}};this.abort=function(){n.aborted=!0,t.forEach(function(e){return e()})}},N0=v.unstable_scheduleCallback,B0=v.unstable_NormalPriority,Tt={$$typeof:zt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Du(){return{controller:new R0,data:new Map,refCount:0}}function Kl(t){t.refCount--,t.refCount===0&&N0(B0,function(){t.controller.abort()})}var Jl=null,Ru=0,rl=0,ol=null;function C0(t,n){if(Jl===null){var e=Jl=[];Ru=0,rl=Cc(),ol={status:"pending",value:void 0,then:function(l){e.push(l)}}}return Ru++,n.then(zr,zr),n}function zr(){if(--Ru===0&&Jl!==null){ol!==null&&(ol.status="fulfilled");var t=Jl;Jl=null,rl=0,ol=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function H0(t,n){var e=[],l={status:"pending",value:null,reason:null,then:function(a){e.push(a)}};return t.then(function(){l.status="fulfilled",l.value=n;for(var a=0;a<e.length;a++)(0,e[a])(n)},function(a){for(l.status="rejected",l.reason=a,a=0;a<e.length;a++)(0,e[a])(void 0)}),l}var Ar=S.S;S.S=function(t,n){cs=nn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&C0(t,n),Ar!==null&&Ar(t,n)};var Ce=o(null);function Nu(){var t=Ce.current;return t!==null?t:yt.pooledCache}function ka(t,n){n===null?U(Ce,Ce.current):U(Ce,n.pool)}function qr(){var t=Nu();return t===null?null:{parent:Tt._currentValue,pool:t}}var sl=Error(h(460)),Bu=Error(h(474)),Wa=Error(h(542)),$a={then:function(){}};function Er(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Or(t,n,e){switch(e=t[e],e===void 0?t.push(n):e!==n&&(n.then(Cn,Cn),n=e),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jr(t),t;default:if(typeof n.status=="string")n.then(Cn,Cn);else{if(t=yt,t!==null&&100<t.shellSuspendCounter)throw Error(h(482));t=n,t.status="pending",t.then(function(l){if(n.status==="pending"){var a=n;a.status="fulfilled",a.value=l}},function(l){if(n.status==="pending"){var a=n;a.status="rejected",a.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,jr(t),t}throw Le=n,sl}}function He(t){try{var n=t._init;return n(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Le=e,sl):e}}var Le=null;function Tr(){if(Le===null)throw Error(h(459));var t=Le;return Le=null,t}function jr(t){if(t===sl||t===Wa)throw Error(h(483))}var dl=null,kl=0;function Fa(t){var n=kl;return kl+=1,dl===null&&(dl=[]),Or(dl,t,n)}function Wl(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ia(t,n){throw n.$$typeof===tt?Error(h(525)):(t=Object.prototype.toString.call(n),Error(h(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function _r(t){function n(p,r){if(t){var m=p.deletions;m===null?(p.deletions=[r],p.flags|=16):m.push(r)}}function e(p,r){if(!t)return null;for(;r!==null;)n(p,r),r=r.sibling;return null}function l(p){for(var r=new Map;p!==null;)p.key!==null?r.set(p.key,p):r.set(p.index,p),p=p.sibling;return r}function a(p,r){return p=Ln(p,r),p.index=0,p.sibling=null,p}function i(p,r,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<r?(p.flags|=67108866,r):m):(p.flags|=67108866,r)):(p.flags|=1048576,r)}function u(p){return t&&p.alternate===null&&(p.flags|=67108866),p}function c(p,r,m,z){return r===null||r.tag!==6?(r=Au(m,p.mode,z),r.return=p,r):(r=a(r,m),r.return=p,r)}function f(p,r,m,z){var H=m.type;return H===R?x(p,r,m.props.children,z,m.key):r!==null&&(r.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Zt&&He(H)===r.type)?(r=a(r,m.props),Wl(r,m),r.return=p,r):(r=Za(m.type,m.key,m.props,null,p.mode,z),Wl(r,m),r.return=p,r)}function y(p,r,m,z){return r===null||r.tag!==4||r.stateNode.containerInfo!==m.containerInfo||r.stateNode.implementation!==m.implementation?(r=qu(m,p.mode,z),r.return=p,r):(r=a(r,m.children||[]),r.return=p,r)}function x(p,r,m,z,H){return r===null||r.tag!==7?(r=De(m,p.mode,z,H),r.return=p,r):(r=a(r,m),r.return=p,r)}function A(p,r,m){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Au(""+r,p.mode,m),r.return=p,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case Ot:return m=Za(r.type,r.key,r.props,null,p.mode,m),Wl(m,r),m.return=p,m;case at:return r=qu(r,p.mode,m),r.return=p,r;case Zt:return r=He(r),A(p,r,m)}if(An(r)||Vt(r))return r=De(r,p.mode,m,null),r.return=p,r;if(typeof r.then=="function")return A(p,Fa(r),m);if(r.$$typeof===zt)return A(p,Ja(p,r),m);Ia(p,r)}return null}function g(p,r,m,z){var H=r!==null?r.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return H!==null?null:c(p,r,""+m,z);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ot:return m.key===H?f(p,r,m,z):null;case at:return m.key===H?y(p,r,m,z):null;case Zt:return m=He(m),g(p,r,m,z)}if(An(m)||Vt(m))return H!==null?null:x(p,r,m,z,null);if(typeof m.then=="function")return g(p,r,Fa(m),z);if(m.$$typeof===zt)return g(p,r,Ja(p,m),z);Ia(p,m)}return null}function b(p,r,m,z,H){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return p=p.get(m)||null,c(r,p,""+z,H);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case Ot:return p=p.get(z.key===null?m:z.key)||null,f(r,p,z,H);case at:return p=p.get(z.key===null?m:z.key)||null,y(r,p,z,H);case Zt:return z=He(z),b(p,r,m,z,H)}if(An(z)||Vt(z))return p=p.get(m)||null,x(r,p,z,H,null);if(typeof z.then=="function")return b(p,r,m,Fa(z),H);if(z.$$typeof===zt)return b(p,r,m,Ja(r,z),H);Ia(r,z)}return null}function D(p,r,m,z){for(var H=null,it=null,B=r,K=r=0,P=null;B!==null&&K<m.length;K++){B.index>K?(P=B,B=null):P=B.sibling;var ut=g(p,B,m[K],z);if(ut===null){B===null&&(B=P);break}t&&B&&ut.alternate===null&&n(p,B),r=i(ut,r,K),it===null?H=ut:it.sibling=ut,it=ut,B=P}if(K===m.length)return e(p,B),et&&Yn(p,K),H;if(B===null){for(;K<m.length;K++)B=A(p,m[K],z),B!==null&&(r=i(B,r,K),it===null?H=B:it.sibling=B,it=B);return et&&Yn(p,K),H}for(B=l(B);K<m.length;K++)P=b(B,p,K,m[K],z),P!==null&&(t&&P.alternate!==null&&B.delete(P.key===null?K:P.key),r=i(P,r,K),it===null?H=P:it.sibling=P,it=P);return t&&B.forEach(function(Ae){return n(p,Ae)}),et&&Yn(p,K),H}function X(p,r,m,z){if(m==null)throw Error(h(151));for(var H=null,it=null,B=r,K=r=0,P=null,ut=m.next();B!==null&&!ut.done;K++,ut=m.next()){B.index>K?(P=B,B=null):P=B.sibling;var Ae=g(p,B,ut.value,z);if(Ae===null){B===null&&(B=P);break}t&&B&&Ae.alternate===null&&n(p,B),r=i(Ae,r,K),it===null?H=Ae:it.sibling=Ae,it=Ae,B=P}if(ut.done)return e(p,B),et&&Yn(p,K),H;if(B===null){for(;!ut.done;K++,ut=m.next())ut=A(p,ut.value,z),ut!==null&&(r=i(ut,r,K),it===null?H=ut:it.sibling=ut,it=ut);return et&&Yn(p,K),H}for(B=l(B);!ut.done;K++,ut=m.next())ut=b(B,p,K,ut.value,z),ut!==null&&(t&&ut.alternate!==null&&B.delete(ut.key===null?K:ut.key),r=i(ut,r,K),it===null?H=ut:it.sibling=ut,it=ut);return t&&B.forEach(function(k1){return n(p,k1)}),et&&Yn(p,K),H}function ht(p,r,m,z){if(typeof m=="object"&&m!==null&&m.type===R&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ot:t:{for(var H=m.key;r!==null;){if(r.key===H){if(H=m.type,H===R){if(r.tag===7){e(p,r.sibling),z=a(r,m.props.children),z.return=p,p=z;break t}}else if(r.elementType===H||typeof H=="object"&&H!==null&&H.$$typeof===Zt&&He(H)===r.type){e(p,r.sibling),z=a(r,m.props),Wl(z,m),z.return=p,p=z;break t}e(p,r);break}else n(p,r);r=r.sibling}m.type===R?(z=De(m.props.children,p.mode,z,m.key),z.return=p,p=z):(z=Za(m.type,m.key,m.props,null,p.mode,z),Wl(z,m),z.return=p,p=z)}return u(p);case at:t:{for(H=m.key;r!==null;){if(r.key===H)if(r.tag===4&&r.stateNode.containerInfo===m.containerInfo&&r.stateNode.implementation===m.implementation){e(p,r.sibling),z=a(r,m.children||[]),z.return=p,p=z;break t}else{e(p,r);break}else n(p,r);r=r.sibling}z=qu(m,p.mode,z),z.return=p,p=z}return u(p);case Zt:return m=He(m),ht(p,r,m,z)}if(An(m))return D(p,r,m,z);if(Vt(m)){if(H=Vt(m),typeof H!="function")throw Error(h(150));return m=H.call(m),X(p,r,m,z)}if(typeof m.then=="function")return ht(p,r,Fa(m),z);if(m.$$typeof===zt)return ht(p,r,Ja(p,m),z);Ia(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,r!==null&&r.tag===6?(e(p,r.sibling),z=a(r,m),z.return=p,p=z):(e(p,r),z=Au(m,p.mode,z),z.return=p,p=z),u(p)):e(p,r)}return function(p,r,m,z){try{kl=0;var H=ht(p,r,m,z);return dl=null,H}catch(B){if(B===sl||B===Wa)throw B;var it=un(29,B,null,p.mode);return it.lanes=z,it.return=p,it}}}var Ye=_r(!0),Ur=_r(!1),ue=!1;function Cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ce(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function fe(t,n,e){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(ct&2)!==0){var a=l.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),l.pending=n,n=wa(t),pr(t,null,e),n}return Qa(t,l,n,e),wa(t)}function $l(t,n,e){if(n=n.updateQueue,n!==null&&(n=n.shared,(e&4194048)!==0)){var l=n.lanes;l&=t.pendingLanes,e|=l,n.lanes=e,Sf(t,e)}}function Lu(t,n){var e=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,e===l)){var a=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var u={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?a=i=u:i=i.next=u,e=e.next}while(e!==null);i===null?a=i=n:i=i.next=n}else a=i=n;e={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=n:t.next=n,e.lastBaseUpdate=n}var Yu=!1;function Fl(){if(Yu){var t=ol;if(t!==null)throw t}}function Il(t,n,e,l){Yu=!1;var a=t.updateQueue;ue=!1;var i=a.firstBaseUpdate,u=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var f=c,y=f.next;f.next=null,u===null?i=y:u.next=y,u=f;var x=t.alternate;x!==null&&(x=x.updateQueue,c=x.lastBaseUpdate,c!==u&&(c===null?x.firstBaseUpdate=y:c.next=y,x.lastBaseUpdate=f))}if(i!==null){var A=a.baseState;u=0,x=y=f=null,c=i;do{var g=c.lane&-536870913,b=g!==c.lane;if(b?(I&g)===g:(l&g)===g){g!==0&&g===rl&&(Yu=!0),x!==null&&(x=x.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var D=t,X=c;g=n;var ht=e;switch(X.tag){case 1:if(D=X.payload,typeof D=="function"){A=D.call(ht,A,g);break t}A=D;break t;case 3:D.flags=D.flags&-65537|128;case 0:if(D=X.payload,g=typeof D=="function"?D.call(ht,A,g):D,g==null)break t;A=j({},A,g);break t;case 2:ue=!0}}g=c.callback,g!==null&&(t.flags|=64,b&&(t.flags|=8192),b=a.callbacks,b===null?a.callbacks=[g]:b.push(g))}else b={lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},x===null?(y=x=b,f=A):x=x.next=b,u|=g;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;b=c,c=b.next,b.next=null,a.lastBaseUpdate=b,a.shared.pending=null}}while(!0);x===null&&(f=A),a.baseState=f,a.firstBaseUpdate=y,a.lastBaseUpdate=x,i===null&&(a.shared.lanes=0),pe|=u,t.lanes=u,t.memoizedState=A}}function Mr(t,n){if(typeof t!="function")throw Error(h(191,t));t.call(n)}function Dr(t,n){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Mr(e[t],n)}var pl=o(null),Pa=o(0);function Rr(t,n){t=$n,U(Pa,t),U(pl,n),$n=t|n.baseLanes}function Xu(){U(Pa,$n),U(pl,pl.current)}function Gu(){$n=Pa.current,E(pl),E(Pa)}var cn=o(null),vn=null;function re(t){var n=t.alternate;U(qt,qt.current&1),U(cn,t),vn===null&&(n===null||pl.current!==null||n.memoizedState!==null)&&(vn=t)}function Qu(t){U(qt,qt.current),U(cn,t),vn===null&&(vn=t)}function Nr(t){t.tag===22?(U(qt,qt.current),U(cn,t),vn===null&&(vn=t)):oe()}function oe(){U(qt,qt.current),U(cn,cn.current)}function fn(t){E(cn),vn===t&&(vn=null),E(qt)}var qt=o(0);function ti(t){for(var n=t;n!==null;){if(n.tag===13){var e=n.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||kc(e)||Wc(e)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qn=0,V=null,dt=null,jt=null,ni=!1,hl=!1,Xe=!1,ei=0,Pl=0,ml=null,L0=0;function vt(){throw Error(h(321))}function wu(t,n){if(n===null)return!1;for(var e=0;e<n.length&&e<t.length;e++)if(!an(t[e],n[e]))return!1;return!0}function Zu(t,n,e,l,a,i){return Qn=i,V=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,S.H=t===null||t.memoizedState===null?bo:ic,Xe=!1,i=e(l,a),Xe=!1,hl&&(i=Cr(n,e,l,a)),Br(t),i}function Br(t){S.H=ea;var n=dt!==null&&dt.next!==null;if(Qn=0,jt=dt=V=null,ni=!1,Pl=0,ml=null,n)throw Error(h(300));t===null||_t||(t=t.dependencies,t!==null&&Ka(t)&&(_t=!0))}function Cr(t,n,e,l){V=t;var a=0;do{if(hl&&(ml=null),Pl=0,hl=!1,25<=a)throw Error(h(301));if(a+=1,jt=dt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}S.H=xo,i=n(e,l)}while(hl);return i}function Y0(){var t=S.H,n=t.useState()[0];return n=typeof n.then=="function"?ta(n):n,t=t.useState()[0],(dt!==null?dt.memoizedState:null)!==t&&(V.flags|=1024),n}function Vu(){var t=ei!==0;return ei=0,t}function Ku(t,n,e){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~e}function Ju(t){if(ni){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}ni=!1}Qn=0,jt=dt=V=null,hl=!1,Pl=ei=0,ml=null}function Qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?V.memoizedState=jt=t:jt=jt.next=t,jt}function Et(){if(dt===null){var t=V.alternate;t=t!==null?t.memoizedState:null}else t=dt.next;var n=jt===null?V.memoizedState:jt.next;if(n!==null)jt=n,dt=t;else{if(t===null)throw V.alternate===null?Error(h(467)):Error(h(310));dt=t,t={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},jt===null?V.memoizedState=jt=t:jt=jt.next=t}return jt}function li(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ta(t){var n=Pl;return Pl+=1,ml===null&&(ml=[]),t=Or(ml,t,n),n=V,(jt===null?n.memoizedState:jt.next)===null&&(n=n.alternate,S.H=n===null||n.memoizedState===null?bo:ic),t}function ai(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ta(t);if(t.$$typeof===zt)return Ht(t)}throw Error(h(438,String(t)))}function ku(t){var n=null,e=V.updateQueue;if(e!==null&&(n=e.memoCache),n==null){var l=V.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(a){return a.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),e===null&&(e=li(),V.updateQueue=e),e.memoCache=n,e=n.data[n.index],e===void 0)for(e=n.data[n.index]=Array(t),l=0;l<t;l++)e[l]=Ze;return n.index++,e}function wn(t,n){return typeof n=="function"?n(t):n}function ii(t){var n=Et();return Wu(n,dt,t)}function Wu(t,n,e){var l=t.queue;if(l===null)throw Error(h(311));l.lastRenderedReducer=e;var a=t.baseQueue,i=l.pending;if(i!==null){if(a!==null){var u=a.next;a.next=i.next,i.next=u}n.baseQueue=a=i,l.pending=null}if(i=t.baseState,a===null)t.memoizedState=i;else{n=a.next;var c=u=null,f=null,y=n,x=!1;do{var A=y.lane&-536870913;if(A!==y.lane?(I&A)===A:(Qn&A)===A){var g=y.revertLane;if(g===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),A===rl&&(x=!0);else if((Qn&g)===g){y=y.next,g===rl&&(x=!0);continue}else A={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(c=f=A,u=i):f=f.next=A,V.lanes|=g,pe|=g;A=y.action,Xe&&e(i,A),i=y.hasEagerState?y.eagerState:e(i,A)}else g={lane:A,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(c=f=g,u=i):f=f.next=g,V.lanes|=A,pe|=A;y=y.next}while(y!==null&&y!==n);if(f===null?u=i:f.next=c,!an(i,t.memoizedState)&&(_t=!0,x&&(e=ol,e!==null)))throw e;t.memoizedState=i,t.baseState=u,t.baseQueue=f,l.lastRenderedState=i}return a===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function $u(t){var n=Et(),e=n.queue;if(e===null)throw Error(h(311));e.lastRenderedReducer=t;var l=e.dispatch,a=e.pending,i=n.memoizedState;if(a!==null){e.pending=null;var u=a=a.next;do i=t(i,u.action),u=u.next;while(u!==a);an(i,n.memoizedState)||(_t=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),e.lastRenderedState=i}return[i,l]}function Hr(t,n,e){var l=V,a=Et(),i=et;if(i){if(e===void 0)throw Error(h(407));e=e()}else e=n();var u=!an((dt||a).memoizedState,e);if(u&&(a.memoizedState=e,_t=!0),a=a.queue,Pu(Xr.bind(null,l,a,t),[t]),a.getSnapshot!==n||u||jt!==null&&jt.memoizedState.tag&1){if(l.flags|=2048,yl(9,{destroy:void 0},Yr.bind(null,l,a,e,n),null),yt===null)throw Error(h(349));i||(Qn&127)!==0||Lr(l,n,e)}return e}function Lr(t,n,e){t.flags|=16384,t={getSnapshot:n,value:e},n=V.updateQueue,n===null?(n=li(),V.updateQueue=n,n.stores=[t]):(e=n.stores,e===null?n.stores=[t]:e.push(t))}function Yr(t,n,e,l){n.value=e,n.getSnapshot=l,Gr(n)&&Qr(t)}function Xr(t,n,e){return e(function(){Gr(n)&&Qr(t)})}function Gr(t){var n=t.getSnapshot;t=t.value;try{var e=n();return!an(t,e)}catch{return!0}}function Qr(t){var n=Me(t,2);n!==null&&It(n,t,2)}function Fu(t){var n=Qt();if(typeof t=="function"){var e=t;if(t=e(),Xe){Pn(!0);try{e()}finally{Pn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:t},n}function wr(t,n,e,l){return t.baseState=e,Wu(t,dt,typeof l=="function"?l:wn)}function X0(t,n,e,l,a){if(fi(t))throw Error(h(485));if(t=n.action,t!==null){var i={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};S.T!==null?e(!0):i.isTransition=!1,l(i),e=n.pending,e===null?(i.next=n.pending=i,Zr(n,i)):(i.next=e.next,n.pending=e.next=i)}}function Zr(t,n){var e=n.action,l=n.payload,a=t.state;if(n.isTransition){var i=S.T,u={};S.T=u;try{var c=e(a,l),f=S.S;f!==null&&f(u,c),Vr(t,n,c)}catch(y){Iu(t,n,y)}finally{i!==null&&u.types!==null&&(i.types=u.types),S.T=i}}else try{i=e(a,l),Vr(t,n,i)}catch(y){Iu(t,n,y)}}function Vr(t,n,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(l){Kr(t,n,l)},function(l){return Iu(t,n,l)}):Kr(t,n,e)}function Kr(t,n,e){n.status="fulfilled",n.value=e,Jr(n),t.state=e,n=t.pending,n!==null&&(e=n.next,e===n?t.pending=null:(e=e.next,n.next=e,Zr(t,e)))}function Iu(t,n,e){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=e,Jr(n),n=n.next;while(n!==l)}t.action=null}function Jr(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function kr(t,n){return n}function Wr(t,n){if(et){var e=yt.formState;if(e!==null){t:{var l=V;if(et){if(gt){n:{for(var a=gt,i=xn;a.nodeType!==8;){if(!i){a=null;break n}if(a=Sn(a.nextSibling),a===null){a=null;break n}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){gt=Sn(a.nextSibling),l=a.data==="F!";break t}}ae(l)}l=!1}l&&(n=e[0])}}return e=Qt(),e.memoizedState=e.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kr,lastRenderedState:n},e.queue=l,e=mo.bind(null,V,l),l.dispatch=e,l=Fu(!1),i=ac.bind(null,V,!1,l.queue),l=Qt(),a={state:n,dispatch:null,action:t,pending:null},l.queue=a,e=X0.bind(null,V,a,i,e),a.dispatch=e,l.memoizedState=t,[n,e,!1]}function $r(t){var n=Et();return Fr(n,dt,t)}function Fr(t,n,e){if(n=Wu(t,n,kr)[0],t=ii(wn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=ta(n)}catch(u){throw u===sl?Wa:u}else l=n;n=Et();var a=n.queue,i=a.dispatch;return e!==n.memoizedState&&(V.flags|=2048,yl(9,{destroy:void 0},G0.bind(null,a,e),null)),[l,i,t]}function G0(t,n){t.action=n}function Ir(t){var n=Et(),e=dt;if(e!==null)return Fr(n,e,t);Et(),n=n.memoizedState,e=Et();var l=e.queue.dispatch;return e.memoizedState=t,[n,l,!1]}function yl(t,n,e,l){return t={tag:t,create:e,deps:l,inst:n,next:null},n=V.updateQueue,n===null&&(n=li(),V.updateQueue=n),e=n.lastEffect,e===null?n.lastEffect=t.next=t:(l=e.next,e.next=t,t.next=l,n.lastEffect=t),t}function Pr(){return Et().memoizedState}function ui(t,n,e,l){var a=Qt();V.flags|=t,a.memoizedState=yl(1|n,{destroy:void 0},e,l===void 0?null:l)}function ci(t,n,e,l){var a=Et();l=l===void 0?null:l;var i=a.memoizedState.inst;dt!==null&&l!==null&&wu(l,dt.memoizedState.deps)?a.memoizedState=yl(n,i,e,l):(V.flags|=t,a.memoizedState=yl(1|n,i,e,l))}function to(t,n){ui(8390656,8,t,n)}function Pu(t,n){ci(2048,8,t,n)}function Q0(t){V.flags|=4;var n=V.updateQueue;if(n===null)n=li(),V.updateQueue=n,n.events=[t];else{var e=n.events;e===null?n.events=[t]:e.push(t)}}function no(t){var n=Et().memoizedState;return Q0({ref:n,nextImpl:t}),function(){if((ct&2)!==0)throw Error(h(440));return n.impl.apply(void 0,arguments)}}function eo(t,n){return ci(4,2,t,n)}function lo(t,n){return ci(4,4,t,n)}function ao(t,n){if(typeof n=="function"){t=t();var e=n(t);return function(){typeof e=="function"?e():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function io(t,n,e){e=e!=null?e.concat([t]):null,ci(4,4,ao.bind(null,n,t),e)}function tc(){}function uo(t,n){var e=Et();n=n===void 0?null:n;var l=e.memoizedState;return n!==null&&wu(n,l[1])?l[0]:(e.memoizedState=[t,n],t)}function co(t,n){var e=Et();n=n===void 0?null:n;var l=e.memoizedState;if(n!==null&&wu(n,l[1]))return l[0];if(l=t(),Xe){Pn(!0);try{t()}finally{Pn(!1)}}return e.memoizedState=[l,n],l}function nc(t,n,e){return e===void 0||(Qn&1073741824)!==0&&(I&261930)===0?t.memoizedState=n:(t.memoizedState=e,t=rs(),V.lanes|=t,pe|=t,e)}function fo(t,n,e,l){return an(e,n)?e:pl.current!==null?(t=nc(t,e,l),an(t,n)||(_t=!0),t):(Qn&42)===0||(Qn&1073741824)!==0&&(I&261930)===0?(_t=!0,t.memoizedState=e):(t=rs(),V.lanes|=t,pe|=t,n)}function ro(t,n,e,l,a){var i=_.p;_.p=i!==0&&8>i?i:8;var u=S.T,c={};S.T=c,ac(t,!1,n,e);try{var f=a(),y=S.S;if(y!==null&&y(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var x=H0(f,l);na(t,n,x,sn(t))}else na(t,n,l,sn(t))}catch(A){na(t,n,{then:function(){},status:"rejected",reason:A},sn())}finally{_.p=i,u!==null&&c.types!==null&&(u.types=c.types),S.T=u}}function w0(){}function ec(t,n,e,l){if(t.tag!==5)throw Error(h(476));var a=oo(t).queue;ro(t,a,n,Q,e===null?w0:function(){return so(t),e(l)})}function oo(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:Q},next:null};var e={};return n.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:wn,lastRenderedState:e},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function so(t){var n=oo(t);n.next===null&&(n=t.alternate.memoizedState),na(t,n.next.queue,{},sn())}function lc(){return Ht(ba)}function po(){return Et().memoizedState}function ho(){return Et().memoizedState}function Z0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var e=sn();t=ce(e);var l=fe(n,t,e);l!==null&&(It(l,n,e),$l(l,n,e)),n={cache:Du()},t.payload=n;return}n=n.return}}function V0(t,n,e){var l=sn();e={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},fi(t)?yo(n,e):(e=Su(t,n,e,l),e!==null&&(It(e,t,l),go(e,n,l)))}function mo(t,n,e){var l=sn();na(t,n,e,l)}function na(t,n,e,l){var a={lane:l,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(fi(t))yo(n,a);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var u=n.lastRenderedState,c=i(u,e);if(a.hasEagerState=!0,a.eagerState=c,an(c,u))return Qa(t,n,a,0),yt===null&&Ga(),!1}catch{}if(e=Su(t,n,a,l),e!==null)return It(e,t,l),go(e,n,l),!0}return!1}function ac(t,n,e,l){if(l={lane:2,revertLane:Cc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fi(t)){if(n)throw Error(h(479))}else n=Su(t,e,l,2),n!==null&&It(n,t,2)}function fi(t){var n=t.alternate;return t===V||n!==null&&n===V}function yo(t,n){hl=ni=!0;var e=t.pending;e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n}function go(t,n,e){if((e&4194048)!==0){var l=n.lanes;l&=t.pendingLanes,e|=l,n.lanes=e,Sf(t,e)}}var ea={readContext:Ht,use:ai,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useLayoutEffect:vt,useInsertionEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useSyncExternalStore:vt,useId:vt,useHostTransitionStatus:vt,useFormState:vt,useActionState:vt,useOptimistic:vt,useMemoCache:vt,useCacheRefresh:vt};ea.useEffectEvent=vt;var bo={readContext:Ht,use:ai,useCallback:function(t,n){return Qt().memoizedState=[t,n===void 0?null:n],t},useContext:Ht,useEffect:to,useImperativeHandle:function(t,n,e){e=e!=null?e.concat([t]):null,ui(4194308,4,ao.bind(null,n,t),e)},useLayoutEffect:function(t,n){return ui(4194308,4,t,n)},useInsertionEffect:function(t,n){ui(4,2,t,n)},useMemo:function(t,n){var e=Qt();n=n===void 0?null:n;var l=t();if(Xe){Pn(!0);try{t()}finally{Pn(!1)}}return e.memoizedState=[l,n],l},useReducer:function(t,n,e){var l=Qt();if(e!==void 0){var a=e(n);if(Xe){Pn(!0);try{e(n)}finally{Pn(!1)}}}else a=n;return l.memoizedState=l.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},l.queue=t,t=t.dispatch=V0.bind(null,V,t),[l.memoizedState,t]},useRef:function(t){var n=Qt();return t={current:t},n.memoizedState=t},useState:function(t){t=Fu(t);var n=t.queue,e=mo.bind(null,V,n);return n.dispatch=e,[t.memoizedState,e]},useDebugValue:tc,useDeferredValue:function(t,n){var e=Qt();return nc(e,t,n)},useTransition:function(){var t=Fu(!1);return t=ro.bind(null,V,t.queue,!0,!1),Qt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,e){var l=V,a=Qt();if(et){if(e===void 0)throw Error(h(407));e=e()}else{if(e=n(),yt===null)throw Error(h(349));(I&127)!==0||Lr(l,n,e)}a.memoizedState=e;var i={value:e,getSnapshot:n};return a.queue=i,to(Xr.bind(null,l,i,t),[t]),l.flags|=2048,yl(9,{destroy:void 0},Yr.bind(null,l,i,e,n),null),e},useId:function(){var t=Qt(),n=yt.identifierPrefix;if(et){var e=Un,l=_n;e=(l&~(1<<32-ln(l)-1)).toString(32)+e,n="_"+n+"R_"+e,e=ei++,0<e&&(n+="H"+e.toString(32)),n+="_"}else e=L0++,n="_"+n+"r_"+e.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:lc,useFormState:Wr,useActionState:Wr,useOptimistic:function(t){var n=Qt();n.memoizedState=n.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=e,n=ac.bind(null,V,!0,e),e.dispatch=n,[t,n]},useMemoCache:ku,useCacheRefresh:function(){return Qt().memoizedState=Z0.bind(null,V)},useEffectEvent:function(t){var n=Qt(),e={impl:t};return n.memoizedState=e,function(){if((ct&2)!==0)throw Error(h(440));return e.impl.apply(void 0,arguments)}}},ic={readContext:Ht,use:ai,useCallback:uo,useContext:Ht,useEffect:Pu,useImperativeHandle:io,useInsertionEffect:eo,useLayoutEffect:lo,useMemo:co,useReducer:ii,useRef:Pr,useState:function(){return ii(wn)},useDebugValue:tc,useDeferredValue:function(t,n){var e=Et();return fo(e,dt.memoizedState,t,n)},useTransition:function(){var t=ii(wn)[0],n=Et().memoizedState;return[typeof t=="boolean"?t:ta(t),n]},useSyncExternalStore:Hr,useId:po,useHostTransitionStatus:lc,useFormState:$r,useActionState:$r,useOptimistic:function(t,n){var e=Et();return wr(e,dt,t,n)},useMemoCache:ku,useCacheRefresh:ho};ic.useEffectEvent=no;var xo={readContext:Ht,use:ai,useCallback:uo,useContext:Ht,useEffect:Pu,useImperativeHandle:io,useInsertionEffect:eo,useLayoutEffect:lo,useMemo:co,useReducer:$u,useRef:Pr,useState:function(){return $u(wn)},useDebugValue:tc,useDeferredValue:function(t,n){var e=Et();return dt===null?nc(e,t,n):fo(e,dt.memoizedState,t,n)},useTransition:function(){var t=$u(wn)[0],n=Et().memoizedState;return[typeof t=="boolean"?t:ta(t),n]},useSyncExternalStore:Hr,useId:po,useHostTransitionStatus:lc,useFormState:Ir,useActionState:Ir,useOptimistic:function(t,n){var e=Et();return dt!==null?wr(e,dt,t,n):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:ku,useCacheRefresh:ho};xo.useEffectEvent=no;function uc(t,n,e,l){n=t.memoizedState,e=e(l,n),e=e==null?n:j({},n,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var cc={enqueueSetState:function(t,n,e){t=t._reactInternals;var l=sn(),a=ce(l);a.payload=n,e!=null&&(a.callback=e),n=fe(t,a,l),n!==null&&(It(n,t,l),$l(n,t,l))},enqueueReplaceState:function(t,n,e){t=t._reactInternals;var l=sn(),a=ce(l);a.tag=1,a.payload=n,e!=null&&(a.callback=e),n=fe(t,a,l),n!==null&&(It(n,t,l),$l(n,t,l))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var e=sn(),l=ce(e);l.tag=2,n!=null&&(l.callback=n),n=fe(t,l,e),n!==null&&(It(n,t,e),$l(n,t,e))}};function vo(t,n,e,l,a,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,i,u):n.prototype&&n.prototype.isPureReactComponent?!Ql(e,l)||!Ql(a,i):!0}function So(t,n,e,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(e,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(e,l),n.state!==t&&cc.enqueueReplaceState(n,n.state,null)}function Ge(t,n){var e=n;if("ref"in n){e={};for(var l in n)l!=="ref"&&(e[l]=n[l])}if(t=t.defaultProps){e===n&&(e=j({},e));for(var a in t)e[a]===void 0&&(e[a]=t[a])}return e}function zo(t){Xa(t)}function Ao(t){console.error(t)}function qo(t){Xa(t)}function ri(t,n){try{var e=t.onUncaughtError;e(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Eo(t,n,e){try{var l=t.onCaughtError;l(e.value,{componentStack:e.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function fc(t,n,e){return e=ce(e),e.tag=3,e.payload={element:null},e.callback=function(){ri(t,n)},e}function Oo(t){return t=ce(t),t.tag=3,t}function To(t,n,e,l){var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;t.payload=function(){return a(i)},t.callback=function(){Eo(n,e,l)}}var u=e.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Eo(n,e,l),typeof a!="function"&&(he===null?he=new Set([this]):he.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function K0(t,n,e,l,a){if(e.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=e.alternate,n!==null&&fl(n,e,a,!0),e=cn.current,e!==null){switch(e.tag){case 31:case 13:return vn===null?Si():e.alternate===null&&St===0&&(St=3),e.flags&=-257,e.flags|=65536,e.lanes=a,l===$a?e.flags|=16384:(n=e.updateQueue,n===null?e.updateQueue=new Set([l]):n.add(l),Rc(t,l,a)),!1;case 22:return e.flags|=65536,l===$a?e.flags|=16384:(n=e.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},e.updateQueue=n):(e=n.retryQueue,e===null?n.retryQueue=new Set([l]):e.add(l)),Rc(t,l,a)),!1}throw Error(h(435,e.tag))}return Rc(t,l,a),Si(),!1}if(et)return n=cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=a,l!==Tu&&(t=Error(h(422),{cause:l}),Vl(yn(t,e)))):(l!==Tu&&(n=Error(h(423),{cause:l}),Vl(yn(n,e))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,l=yn(l,e),a=fc(t.stateNode,l,a),Lu(t,a),St!==4&&(St=2)),!1;var i=Error(h(520),{cause:l});if(i=yn(i,e),oa===null?oa=[i]:oa.push(i),St!==4&&(St=2),n===null)return!0;l=yn(l,e),e=n;do{switch(e.tag){case 3:return e.flags|=65536,t=a&-a,e.lanes|=t,t=fc(e.stateNode,l,t),Lu(e,t),!1;case 1:if(n=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(he===null||!he.has(i))))return e.flags|=65536,a&=-a,e.lanes|=a,a=Oo(a),To(a,t,e,l),Lu(e,a),!1}e=e.return}while(e!==null);return!1}var rc=Error(h(461)),_t=!1;function Lt(t,n,e,l){n.child=t===null?Ur(n,null,e,l):Ye(n,t.child,e,l)}function jo(t,n,e,l,a){e=e.render;var i=n.ref;if("ref"in l){var u={};for(var c in l)c!=="ref"&&(u[c]=l[c])}else u=l;return Be(n),l=Zu(t,n,e,u,i,a),c=Vu(),t!==null&&!_t?(Ku(t,n,a),Zn(t,n,a)):(et&&c&&Eu(n),n.flags|=1,Lt(t,n,l,a),n.child)}function _o(t,n,e,l,a){if(t===null){var i=e.type;return typeof i=="function"&&!zu(i)&&i.defaultProps===void 0&&e.compare===null?(n.tag=15,n.type=i,Uo(t,n,i,l,a)):(t=Za(e.type,null,l,n,n.mode,a),t.ref=n.ref,t.return=n,n.child=t)}if(i=t.child,!gc(t,a)){var u=i.memoizedProps;if(e=e.compare,e=e!==null?e:Ql,e(u,l)&&t.ref===n.ref)return Zn(t,n,a)}return n.flags|=1,t=Ln(i,l),t.ref=n.ref,t.return=n,n.child=t}function Uo(t,n,e,l,a){if(t!==null){var i=t.memoizedProps;if(Ql(i,l)&&t.ref===n.ref)if(_t=!1,n.pendingProps=l=i,gc(t,a))(t.flags&131072)!==0&&(_t=!0);else return n.lanes=t.lanes,Zn(t,n,a)}return oc(t,n,e,l,a)}function Mo(t,n,e,l){var a=l.children,i=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(i=i!==null?i.baseLanes|e:e,t!==null){for(l=n.child=t.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,n.child=null;return Do(t,n,i,e,l)}if((e&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ka(n,i!==null?i.cachePool:null),i!==null?Rr(n,i):Xu(),Nr(n);else return l=n.lanes=536870912,Do(t,n,i!==null?i.baseLanes|e:e,e,l)}else i!==null?(ka(n,i.cachePool),Rr(n,i),oe(),n.memoizedState=null):(t!==null&&ka(n,null),Xu(),oe());return Lt(t,n,a,e),n.child}function la(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Do(t,n,e,l,a){var i=Nu();return i=i===null?null:{parent:Tt._currentValue,pool:i},n.memoizedState={baseLanes:e,cachePool:i},t!==null&&ka(n,null),Xu(),Nr(n),t!==null&&fl(t,n,l,!0),n.childLanes=a,null}function oi(t,n){return n=di({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Ro(t,n,e){return Ye(n,t.child,null,e),t=oi(n,n.pendingProps),t.flags|=2,fn(n),n.memoizedState=null,t}function J0(t,n,e){var l=n.pendingProps,a=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(et){if(l.mode==="hidden")return t=oi(n,l),n.lanes=536870912,la(null,t);if(Qu(n),(t=gt)?(t=Vs(t,xn),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ee!==null?{id:_n,overflow:Un}:null,retryLane:536870912,hydrationErrors:null},e=mr(t),e.return=n,n.child=e,Ct=n,gt=null)):t=null,t===null)throw ae(n);return n.lanes=536870912,null}return oi(n,l)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Qu(n),a)if(n.flags&256)n.flags&=-257,n=Ro(t,n,e);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(h(558));else if(_t||fl(t,n,e,!1),a=(e&t.childLanes)!==0,_t||a){if(l=yt,l!==null&&(u=zf(l,e),u!==0&&u!==i.retryLane))throw i.retryLane=u,Me(t,u),It(l,t,u),rc;Si(),n=Ro(t,n,e)}else t=i.treeContext,gt=Sn(u.nextSibling),Ct=n,et=!0,le=null,xn=!1,t!==null&&br(n,t),n=oi(n,l),n.flags|=4096;return n}return t=Ln(t.child,{mode:l.mode,children:l.children}),t.ref=n.ref,n.child=t,t.return=n,t}function si(t,n){var e=n.ref;if(e===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(h(284));(t===null||t.ref!==e)&&(n.flags|=4194816)}}function oc(t,n,e,l,a){return Be(n),e=Zu(t,n,e,l,void 0,a),l=Vu(),t!==null&&!_t?(Ku(t,n,a),Zn(t,n,a)):(et&&l&&Eu(n),n.flags|=1,Lt(t,n,e,a),n.child)}function No(t,n,e,l,a,i){return Be(n),n.updateQueue=null,e=Cr(n,l,e,a),Br(t),l=Vu(),t!==null&&!_t?(Ku(t,n,i),Zn(t,n,i)):(et&&l&&Eu(n),n.flags|=1,Lt(t,n,e,i),n.child)}function Bo(t,n,e,l,a){if(Be(n),n.stateNode===null){var i=al,u=e.contextType;typeof u=="object"&&u!==null&&(i=Ht(u)),i=new e(l,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cc,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=l,i.state=n.memoizedState,i.refs={},Cu(n),u=e.contextType,i.context=typeof u=="object"&&u!==null?Ht(u):al,i.state=n.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(uc(n,e,u,l),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&cc.enqueueReplaceState(i,i.state,null),Il(n,l,i,a),Fl(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(t===null){i=n.stateNode;var c=n.memoizedProps,f=Ge(e,c);i.props=f;var y=i.context,x=e.contextType;u=al,typeof x=="object"&&x!==null&&(u=Ht(x));var A=e.getDerivedStateFromProps;x=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=n.pendingProps!==c,x||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||y!==u)&&So(n,i,l,u),ue=!1;var g=n.memoizedState;i.state=g,Il(n,l,i,a),Fl(),y=n.memoizedState,c||g!==y||ue?(typeof A=="function"&&(uc(n,e,A,l),y=n.memoizedState),(f=ue||vo(n,e,f,l,g,y,u))?(x||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=y),i.props=l,i.state=y,i.context=u,l=f):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{i=n.stateNode,Hu(t,n),u=n.memoizedProps,x=Ge(e,u),i.props=x,A=n.pendingProps,g=i.context,y=e.contextType,f=al,typeof y=="object"&&y!==null&&(f=Ht(y)),c=e.getDerivedStateFromProps,(y=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==A||g!==f)&&So(n,i,l,f),ue=!1,g=n.memoizedState,i.state=g,Il(n,l,i,a),Fl();var b=n.memoizedState;u!==A||g!==b||ue||t!==null&&t.dependencies!==null&&Ka(t.dependencies)?(typeof c=="function"&&(uc(n,e,c,l),b=n.memoizedState),(x=ue||vo(n,e,x,l,g,b,f)||t!==null&&t.dependencies!==null&&Ka(t.dependencies))?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,b,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,b,f)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=b),i.props=l,i.state=b,i.context=f,l=x):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(n.flags|=1024),l=!1)}return i=l,si(t,n),l=(n.flags&128)!==0,i||l?(i=n.stateNode,e=l&&typeof e.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,t!==null&&l?(n.child=Ye(n,t.child,null,a),n.child=Ye(n,null,e,a)):Lt(t,n,e,a),n.memoizedState=i.state,t=n.child):t=Zn(t,n,a),t}function Co(t,n,e,l){return Re(),n.flags|=256,Lt(t,n,e,l),n.child}var sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dc(t){return{baseLanes:t,cachePool:qr()}}function pc(t,n,e){return t=t!==null?t.childLanes&~e:0,n&&(t|=on),t}function Ho(t,n,e){var l=n.pendingProps,a=!1,i=(n.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(qt.current&2)!==0),u&&(a=!0,n.flags&=-129),u=(n.flags&32)!==0,n.flags&=-33,t===null){if(et){if(a?re(n):oe(),(t=gt)?(t=Vs(t,xn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ee!==null?{id:_n,overflow:Un}:null,retryLane:536870912,hydrationErrors:null},e=mr(t),e.return=n,n.child=e,Ct=n,gt=null)):t=null,t===null)throw ae(n);return Wc(t)?n.lanes=32:n.lanes=536870912,null}var c=l.children;return l=l.fallback,a?(oe(),a=n.mode,c=di({mode:"hidden",children:c},a),l=De(l,a,e,null),c.return=n,l.return=n,c.sibling=l,n.child=c,l=n.child,l.memoizedState=dc(e),l.childLanes=pc(t,u,e),n.memoizedState=sc,la(null,l)):(re(n),hc(n,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(i)n.flags&256?(re(n),n.flags&=-257,n=mc(t,n,e)):n.memoizedState!==null?(oe(),n.child=t.child,n.flags|=128,n=null):(oe(),c=l.fallback,a=n.mode,l=di({mode:"visible",children:l.children},a),c=De(c,a,e,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Ye(n,t.child,null,e),l=n.child,l.memoizedState=dc(e),l.childLanes=pc(t,u,e),n.memoizedState=sc,n=la(null,l));else if(re(n),Wc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var y=u.dgst;u=y,l=Error(h(419)),l.stack="",l.digest=u,Vl({value:l,source:null,stack:null}),n=mc(t,n,e)}else if(_t||fl(t,n,e,!1),u=(e&t.childLanes)!==0,_t||u){if(u=yt,u!==null&&(l=zf(u,e),l!==0&&l!==f.retryLane))throw f.retryLane=l,Me(t,l),It(u,t,l),rc;kc(c)||Si(),n=mc(t,n,e)}else kc(c)?(n.flags|=192,n.child=t.child,n=null):(t=f.treeContext,gt=Sn(c.nextSibling),Ct=n,et=!0,le=null,xn=!1,t!==null&&br(n,t),n=hc(n,l.children),n.flags|=4096);return n}return a?(oe(),c=l.fallback,a=n.mode,f=t.child,y=f.sibling,l=Ln(f,{mode:"hidden",children:l.children}),l.subtreeFlags=f.subtreeFlags&65011712,y!==null?c=Ln(y,c):(c=De(c,a,e,null),c.flags|=2),c.return=n,l.return=n,l.sibling=c,n.child=l,la(null,l),l=n.child,c=t.child.memoizedState,c===null?c=dc(e):(a=c.cachePool,a!==null?(f=Tt._currentValue,a=a.parent!==f?{parent:f,pool:f}:a):a=qr(),c={baseLanes:c.baseLanes|e,cachePool:a}),l.memoizedState=c,l.childLanes=pc(t,u,e),n.memoizedState=sc,la(t.child,l)):(re(n),e=t.child,t=e.sibling,e=Ln(e,{mode:"visible",children:l.children}),e.return=n,e.sibling=null,t!==null&&(u=n.deletions,u===null?(n.deletions=[t],n.flags|=16):u.push(t)),n.child=e,n.memoizedState=null,e)}function hc(t,n){return n=di({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function di(t,n){return t=un(22,t,null,n),t.lanes=0,t}function mc(t,n,e){return Ye(n,t.child,null,e),t=hc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Lo(t,n,e){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Uu(t.return,n,e)}function yc(t,n,e,l,a,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:e,tailMode:a,treeForkCount:i}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=e,u.tailMode=a,u.treeForkCount=i)}function Yo(t,n,e){var l=n.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var u=qt.current,c=(u&2)!==0;if(c?(u=u&1|2,n.flags|=128):u&=1,U(qt,u),Lt(t,n,l,e),l=et?Zl:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lo(t,e,n);else if(t.tag===19)Lo(t,e,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(e=n.child,a=null;e!==null;)t=e.alternate,t!==null&&ti(t)===null&&(a=e),e=e.sibling;e=a,e===null?(a=n.child,n.child=null):(a=e.sibling,e.sibling=null),yc(n,!1,a,e,i,l);break;case"backwards":case"unstable_legacy-backwards":for(e=null,a=n.child,n.child=null;a!==null;){if(t=a.alternate,t!==null&&ti(t)===null){n.child=a;break}t=a.sibling,a.sibling=e,e=a,a=t}yc(n,!0,e,null,i,l);break;case"together":yc(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function Zn(t,n,e){if(t!==null&&(n.dependencies=t.dependencies),pe|=n.lanes,(e&n.childLanes)===0)if(t!==null){if(fl(t,n,e,!1),(e&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(h(153));if(n.child!==null){for(t=n.child,e=Ln(t,t.pendingProps),n.child=e,e.return=n;t.sibling!==null;)t=t.sibling,e=e.sibling=Ln(t,t.pendingProps),e.return=n;e.sibling=null}return n.child}function gc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ka(t)))}function k0(t,n,e){switch(n.tag){case 3:Gt(n,n.stateNode.containerInfo),ie(n,Tt,t.memoizedState.cache),Re();break;case 27:case 5:_l(n);break;case 4:Gt(n,n.stateNode.containerInfo);break;case 10:ie(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Qu(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(re(n),n.flags|=128,null):(e&n.child.childLanes)!==0?Ho(t,n,e):(re(n),t=Zn(t,n,e),t!==null?t.sibling:null);re(n);break;case 19:var a=(t.flags&128)!==0;if(l=(e&n.childLanes)!==0,l||(fl(t,n,e,!1),l=(e&n.childLanes)!==0),a){if(l)return Yo(t,n,e);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),U(qt,qt.current),l)break;return null;case 22:return n.lanes=0,Mo(t,n,e,n.pendingProps);case 24:ie(n,Tt,t.memoizedState.cache)}return Zn(t,n,e)}function Xo(t,n,e){if(t!==null)if(t.memoizedProps!==n.pendingProps)_t=!0;else{if(!gc(t,e)&&(n.flags&128)===0)return _t=!1,k0(t,n,e);_t=(t.flags&131072)!==0}else _t=!1,et&&(n.flags&1048576)!==0&&gr(n,Zl,n.index);switch(n.lanes=0,n.tag){case 16:t:{var l=n.pendingProps;if(t=He(n.elementType),n.type=t,typeof t=="function")zu(t)?(l=Ge(t,l),n.tag=1,n=Bo(null,n,t,l,e)):(n.tag=0,n=oc(null,n,t,l,e));else{if(t!=null){var a=t.$$typeof;if(a===Mt){n.tag=11,n=jo(null,n,t,l,e);break t}else if(a===nt){n.tag=14,n=_o(null,n,t,l,e);break t}}throw n=Nn(t)||t,Error(h(306,n,""))}}return n;case 0:return oc(t,n,n.type,n.pendingProps,e);case 1:return l=n.type,a=Ge(l,n.pendingProps),Bo(t,n,l,a,e);case 3:t:{if(Gt(n,n.stateNode.containerInfo),t===null)throw Error(h(387));l=n.pendingProps;var i=n.memoizedState;a=i.element,Hu(t,n),Il(n,l,null,e);var u=n.memoizedState;if(l=u.cache,ie(n,Tt,l),l!==i.cache&&Mu(n,[Tt],e,!0),Fl(),l=u.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:u.cache},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){n=Co(t,n,l,e);break t}else if(l!==a){a=yn(Error(h(424)),n),Vl(a),n=Co(t,n,l,e);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,gt=Sn(t.firstChild),Ct=n,et=!0,le=null,xn=!0,e=Ur(n,null,l,e),n.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Re(),l===a){n=Zn(t,n,e);break t}Lt(t,n,l,e)}n=n.child}return n;case 26:return si(t,n),t===null?(e=Fs(n.type,null,n.pendingProps,null))?n.memoizedState=e:et||(e=n.type,t=n.pendingProps,l=ji(W.current).createElement(e),l[Bt]=n,l[Kt]=t,Yt(l,e,t),Rt(l),n.stateNode=l):n.memoizedState=Fs(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return _l(n),t===null&&et&&(l=n.stateNode=ks(n.type,n.pendingProps,W.current),Ct=n,xn=!0,a=gt,be(n.type)?($c=a,gt=Sn(l.firstChild)):gt=a),Lt(t,n,n.pendingProps.children,e),si(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&et&&((a=l=gt)&&(l=q1(l,n.type,n.pendingProps,xn),l!==null?(n.stateNode=l,Ct=n,gt=Sn(l.firstChild),xn=!1,a=!0):a=!1),a||ae(n)),_l(n),a=n.type,i=n.pendingProps,u=t!==null?t.memoizedProps:null,l=i.children,Vc(a,i)?l=null:u!==null&&Vc(a,u)&&(n.flags|=32),n.memoizedState!==null&&(a=Zu(t,n,Y0,null,null,e),ba._currentValue=a),si(t,n),Lt(t,n,l,e),n.child;case 6:return t===null&&et&&((t=e=gt)&&(e=E1(e,n.pendingProps,xn),e!==null?(n.stateNode=e,Ct=n,gt=null,t=!0):t=!1),t||ae(n)),null;case 13:return Ho(t,n,e);case 4:return Gt(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Ye(n,null,l,e):Lt(t,n,l,e),n.child;case 11:return jo(t,n,n.type,n.pendingProps,e);case 7:return Lt(t,n,n.pendingProps,e),n.child;case 8:return Lt(t,n,n.pendingProps.children,e),n.child;case 12:return Lt(t,n,n.pendingProps.children,e),n.child;case 10:return l=n.pendingProps,ie(n,n.type,l.value),Lt(t,n,l.children,e),n.child;case 9:return a=n.type._context,l=n.pendingProps.children,Be(n),a=Ht(a),l=l(a),n.flags|=1,Lt(t,n,l,e),n.child;case 14:return _o(t,n,n.type,n.pendingProps,e);case 15:return Uo(t,n,n.type,n.pendingProps,e);case 19:return Yo(t,n,e);case 31:return J0(t,n,e);case 22:return Mo(t,n,e,n.pendingProps);case 24:return Be(n),l=Ht(Tt),t===null?(a=Nu(),a===null&&(a=yt,i=Du(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=e),a=i),n.memoizedState={parent:l,cache:a},Cu(n),ie(n,Tt,a)):((t.lanes&e)!==0&&(Hu(t,n),Il(n,null,null,e),Fl()),a=t.memoizedState,i=n.memoizedState,a.parent!==l?(a={parent:l,cache:l},n.memoizedState=a,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=a),ie(n,Tt,l)):(l=i.cache,ie(n,Tt,l),l!==a.cache&&Mu(n,[Tt],e,!0))),Lt(t,n,n.pendingProps.children,e),n.child;case 29:throw n.pendingProps}throw Error(h(156,n.tag))}function Vn(t){t.flags|=4}function bc(t,n,e,l,a){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(ps())t.flags|=8192;else throw Le=$a,Bu}else t.flags&=-16777217}function Go(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ed(n))if(ps())t.flags|=8192;else throw Le=$a,Bu}function pi(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?xf():536870912,t.lanes|=n,vl|=n)}function aa(t,n){if(!et)switch(t.tailMode){case"hidden":n=t.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function bt(t){var n=t.alternate!==null&&t.alternate.child===t.child,e=0,l=0;if(n)for(var a=t.child;a!==null;)e|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)e|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=l,t.childLanes=e,n}function W0(t,n,e){var l=n.pendingProps;switch(Ou(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(n),null;case 1:return bt(n),null;case 3:return e=n.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Gn(Tt),At(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(cl(n)?Vn(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ju())),bt(n),null;case 26:var a=n.type,i=n.memoizedState;return t===null?(Vn(n),i!==null?(bt(n),Go(n,i)):(bt(n),bc(n,a,null,l,e))):i?i!==t.memoizedState?(Vn(n),bt(n),Go(n,i)):(bt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==l&&Vn(n),bt(n),bc(n,a,t,l,e)),null;case 27:if(qa(n),e=W.current,a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Vn(n);else{if(!l){if(n.stateNode===null)throw Error(h(166));return bt(n),null}t=N.current,cl(n)?xr(n):(t=ks(a,l,e),n.stateNode=t,Vn(n))}return bt(n),null;case 5:if(qa(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==l&&Vn(n);else{if(!l){if(n.stateNode===null)throw Error(h(166));return bt(n),null}if(i=N.current,cl(n))xr(n);else{var u=ji(W.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?u.createElement(a,{is:l.is}):u.createElement(a)}}i[Bt]=n,i[Kt]=l;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=i;t:switch(Yt(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Vn(n)}}return bt(n),bc(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,e),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==l&&Vn(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(h(166));if(t=W.current,cl(n)){if(t=n.stateNode,e=n.memoizedProps,l=null,a=Ct,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}t[Bt]=n,t=!!(t.nodeValue===e||l!==null&&l.suppressHydrationWarning===!0||Hs(t.nodeValue,e)),t||ae(n,!0)}else t=ji(t).createTextNode(l),t[Bt]=n,n.stateNode=t}return bt(n),null;case 31:if(e=n.memoizedState,t===null||t.memoizedState!==null){if(l=cl(n),e!==null){if(t===null){if(!l)throw Error(h(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(557));t[Bt]=n}else Re(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;bt(n),t=!1}else e=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return n.flags&256?(fn(n),n):(fn(n),null);if((n.flags&128)!==0)throw Error(h(558))}return bt(n),null;case 13:if(l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=cl(n),l!==null&&l.dehydrated!==null){if(t===null){if(!a)throw Error(h(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(h(317));a[Bt]=n}else Re(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;bt(n),a=!1}else a=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return n.flags&256?(fn(n),n):(fn(n),null)}return fn(n),(n.flags&128)!==0?(n.lanes=e,n):(e=l!==null,t=t!==null&&t.memoizedState!==null,e&&(l=n.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),e!==t&&e&&(n.child.flags|=8192),pi(n,n.updateQueue),bt(n),null);case 4:return At(),t===null&&Xc(n.stateNode.containerInfo),bt(n),null;case 10:return Gn(n.type),bt(n),null;case 19:if(E(qt),l=n.memoizedState,l===null)return bt(n),null;if(a=(n.flags&128)!==0,i=l.rendering,i===null)if(a)aa(l,!1);else{if(St!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(i=ti(t),i!==null){for(n.flags|=128,aa(l,!1),t=i.updateQueue,n.updateQueue=t,pi(n,t),n.subtreeFlags=0,t=e,e=n.child;e!==null;)hr(e,t),e=e.sibling;return U(qt,qt.current&1|2),et&&Yn(n,l.treeForkCount),n.child}t=t.sibling}l.tail!==null&&nn()>bi&&(n.flags|=128,a=!0,aa(l,!1),n.lanes=4194304)}else{if(!a)if(t=ti(i),t!==null){if(n.flags|=128,a=!0,t=t.updateQueue,n.updateQueue=t,pi(n,t),aa(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!et)return bt(n),null}else 2*nn()-l.renderingStartTime>bi&&e!==536870912&&(n.flags|=128,a=!0,aa(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=nn(),t.sibling=null,e=qt.current,U(qt,a?e&1|2:e&1),et&&Yn(n,l.treeForkCount),t):(bt(n),null);case 22:case 23:return fn(n),Gu(),l=n.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(e&536870912)!==0&&(n.flags&128)===0&&(bt(n),n.subtreeFlags&6&&(n.flags|=8192)):bt(n),e=n.updateQueue,e!==null&&pi(n,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==e&&(n.flags|=2048),t!==null&&E(Ce),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),n.memoizedState.cache!==e&&(n.flags|=2048),Gn(Tt),bt(n),null;case 25:return null;case 30:return null}throw Error(h(156,n.tag))}function $0(t,n){switch(Ou(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gn(Tt),At(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return qa(n),null;case 31:if(n.memoizedState!==null){if(fn(n),n.alternate===null)throw Error(h(340));Re()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(fn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(h(340));Re()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return E(qt),null;case 4:return At(),null;case 10:return Gn(n.type),null;case 22:case 23:return fn(n),Gu(),t!==null&&E(Ce),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gn(Tt),null;case 25:return null;default:return null}}function Qo(t,n){switch(Ou(n),n.tag){case 3:Gn(Tt),At();break;case 26:case 27:case 5:qa(n);break;case 4:At();break;case 31:n.memoizedState!==null&&fn(n);break;case 13:fn(n);break;case 19:E(qt);break;case 10:Gn(n.type);break;case 22:case 23:fn(n),Gu(),t!==null&&E(Ce);break;case 24:Gn(Tt)}}function ia(t,n){try{var e=n.updateQueue,l=e!==null?e.lastEffect:null;if(l!==null){var a=l.next;e=a;do{if((e.tag&t)===t){l=void 0;var i=e.create,u=e.inst;l=i(),u.destroy=l}e=e.next}while(e!==a)}}catch(c){ot(n,n.return,c)}}function se(t,n,e){try{var l=n.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&t)===t){var u=l.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,a=n;var f=e,y=c;try{y()}catch(x){ot(a,f,x)}}}l=l.next}while(l!==i)}}catch(x){ot(n,n.return,x)}}function wo(t){var n=t.updateQueue;if(n!==null){var e=t.stateNode;try{Dr(n,e)}catch(l){ot(t,t.return,l)}}}function Zo(t,n,e){e.props=Ge(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(l){ot(t,n,l)}}function ua(t,n){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof e=="function"?t.refCleanup=e(l):e.current=l}}catch(a){ot(t,n,a)}}function Mn(t,n){var e=t.ref,l=t.refCleanup;if(e!==null)if(typeof l=="function")try{l()}catch(a){ot(t,n,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(a){ot(t,n,a)}else e.current=null}function Vo(t){var n=t.type,e=t.memoizedProps,l=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":e.autoFocus&&l.focus();break t;case"img":e.src?l.src=e.src:e.srcSet&&(l.srcset=e.srcSet)}}catch(a){ot(t,t.return,a)}}function xc(t,n,e){try{var l=t.stateNode;b1(l,t.type,e,n),l[Kt]=n}catch(a){ot(t,t.return,a)}}function Ko(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&be(t.type)||t.tag===4}function vc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ko(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&be(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Sc(t,n,e){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,n):(n=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.appendChild(t),e=e._reactRootContainer,e!=null||n.onclick!==null||(n.onclick=Cn));else if(l!==4&&(l===27&&be(t.type)&&(e=t.stateNode,n=null),t=t.child,t!==null))for(Sc(t,n,e),t=t.sibling;t!==null;)Sc(t,n,e),t=t.sibling}function hi(t,n,e){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?e.insertBefore(t,n):e.appendChild(t);else if(l!==4&&(l===27&&be(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(hi(t,n,e),t=t.sibling;t!==null;)hi(t,n,e),t=t.sibling}function Jo(t){var n=t.stateNode,e=t.memoizedProps;try{for(var l=t.type,a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Yt(n,l,e),n[Bt]=t,n[Kt]=e}catch(i){ot(t,t.return,i)}}var Kn=!1,Ut=!1,zc=!1,ko=typeof WeakSet=="function"?WeakSet:Set,Nt=null;function F0(t,n){if(t=t.containerInfo,wc=Bi,t=ir(t),mu(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var l=e.getSelection&&e.getSelection();if(l&&l.rangeCount!==0){e=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break t}var u=0,c=-1,f=-1,y=0,x=0,A=t,g=null;n:for(;;){for(var b;A!==e||a!==0&&A.nodeType!==3||(c=u+a),A!==i||l!==0&&A.nodeType!==3||(f=u+l),A.nodeType===3&&(u+=A.nodeValue.length),(b=A.firstChild)!==null;)g=A,A=b;for(;;){if(A===t)break n;if(g===e&&++y===a&&(c=u),g===i&&++x===l&&(f=u),(b=A.nextSibling)!==null)break;A=g,g=A.parentNode}A=b}e=c===-1||f===-1?null:{start:c,end:f}}else e=null}e=e||{start:0,end:0}}else e=null;for(Zc={focusedElem:t,selectionRange:e},Bi=!1,Nt=n;Nt!==null;)if(n=Nt,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Nt=t;else for(;Nt!==null;){switch(n=Nt,i=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)a=t[e],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,e=n,a=i.memoizedProps,i=i.memoizedState,l=e.stateNode;try{var D=Ge(e.type,a);t=l.getSnapshotBeforeUpdate(D,i),l.__reactInternalSnapshotBeforeUpdate=t}catch(X){ot(e,e.return,X)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,e=t.nodeType,e===9)Jc(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(h(163))}if(t=n.sibling,t!==null){t.return=n.return,Nt=t;break}Nt=n.return}}function Wo(t,n,e){var l=e.flags;switch(e.tag){case 0:case 11:case 15:kn(t,e),l&4&&ia(5,e);break;case 1:if(kn(t,e),l&4)if(t=e.stateNode,n===null)try{t.componentDidMount()}catch(u){ot(e,e.return,u)}else{var a=Ge(e.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(a,n,t.__reactInternalSnapshotBeforeUpdate)}catch(u){ot(e,e.return,u)}}l&64&&wo(e),l&512&&ua(e,e.return);break;case 3:if(kn(t,e),l&64&&(t=e.updateQueue,t!==null)){if(n=null,e.child!==null)switch(e.child.tag){case 27:case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}try{Dr(t,n)}catch(u){ot(e,e.return,u)}}break;case 27:n===null&&l&4&&Jo(e);case 26:case 5:kn(t,e),n===null&&l&4&&Vo(e),l&512&&ua(e,e.return);break;case 12:kn(t,e);break;case 31:kn(t,e),l&4&&Io(t,e);break;case 13:kn(t,e),l&4&&Po(t,e),l&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=u1.bind(null,e),O1(t,e))));break;case 22:if(l=e.memoizedState!==null||Kn,!l){n=n!==null&&n.memoizedState!==null||Ut,a=Kn;var i=Ut;Kn=l,(Ut=n)&&!i?Wn(t,e,(e.subtreeFlags&8772)!==0):kn(t,e),Kn=a,Ut=i}break;case 30:break;default:kn(t,e)}}function $o(t){var n=t.alternate;n!==null&&(t.alternate=null,$o(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Ii(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var xt=null,kt=!1;function Jn(t,n,e){for(e=e.child;e!==null;)Fo(t,n,e),e=e.sibling}function Fo(t,n,e){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Ul,e)}catch{}switch(e.tag){case 26:Ut||Mn(e,n),Jn(t,n,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Ut||Mn(e,n);var l=xt,a=kt;be(e.type)&&(xt=e.stateNode,kt=!1),Jn(t,n,e),ma(e.stateNode),xt=l,kt=a;break;case 5:Ut||Mn(e,n);case 6:if(l=xt,a=kt,xt=null,Jn(t,n,e),xt=l,kt=a,xt!==null)if(kt)try{(xt.nodeType===9?xt.body:xt.nodeName==="HTML"?xt.ownerDocument.body:xt).removeChild(e.stateNode)}catch(i){ot(e,n,i)}else try{xt.removeChild(e.stateNode)}catch(i){ot(e,n,i)}break;case 18:xt!==null&&(kt?(t=xt,ws(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),jl(t)):ws(xt,e.stateNode));break;case 4:l=xt,a=kt,xt=e.stateNode.containerInfo,kt=!0,Jn(t,n,e),xt=l,kt=a;break;case 0:case 11:case 14:case 15:se(2,e,n),Ut||se(4,e,n),Jn(t,n,e);break;case 1:Ut||(Mn(e,n),l=e.stateNode,typeof l.componentWillUnmount=="function"&&Zo(e,n,l)),Jn(t,n,e);break;case 21:Jn(t,n,e);break;case 22:Ut=(l=Ut)||e.memoizedState!==null,Jn(t,n,e),Ut=l;break;default:Jn(t,n,e)}}function Io(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{jl(t)}catch(e){ot(n,n.return,e)}}}function Po(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{jl(t)}catch(e){ot(n,n.return,e)}}function I0(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ko),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ko),n;default:throw Error(h(435,t.tag))}}function mi(t,n){var e=I0(t);n.forEach(function(l){if(!e.has(l)){e.add(l);var a=c1.bind(null,t,l);l.then(a,a)}})}function Wt(t,n){var e=n.deletions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l],i=t,u=n,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(be(c.type)){xt=c.stateNode,kt=!1;break t}break;case 5:xt=c.stateNode,kt=!1;break t;case 3:case 4:xt=c.stateNode.containerInfo,kt=!0;break t}c=c.return}if(xt===null)throw Error(h(160));Fo(i,u,a),xt=null,kt=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ts(n,t),n=n.sibling}var En=null;function ts(t,n){var e=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wt(n,t),$t(t),l&4&&(se(3,t,t.return),ia(3,t),se(5,t,t.return));break;case 1:Wt(n,t),$t(t),l&512&&(Ut||e===null||Mn(e,e.return)),l&64&&Kn&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?l:e.concat(l))));break;case 26:var a=En;if(Wt(n,t),$t(t),l&512&&(Ut||e===null||Mn(e,e.return)),l&4){var i=e!==null?e.memoizedState:null;if(l=t.memoizedState,e===null)if(l===null)if(t.stateNode===null){t:{l=t.type,e=t.memoizedProps,a=a.ownerDocument||a;n:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Rl]||i[Bt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),Yt(i,l,e),i[Bt]=t,Rt(i),l=i;break t;case"link":var u=td("link","href",a).get(l+(e.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){u.splice(c,1);break n}}i=a.createElement(l),Yt(i,l,e),a.head.appendChild(i);break;case"meta":if(u=td("meta","content",a).get(l+(e.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){u.splice(c,1);break n}}i=a.createElement(l),Yt(i,l,e),a.head.appendChild(i);break;default:throw Error(h(468,l))}i[Bt]=t,Rt(i),l=i}t.stateNode=l}else nd(a,t.type,t.stateNode);else t.stateNode=Ps(a,l,t.memoizedProps);else i!==l?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,l===null?nd(a,t.type,t.stateNode):Ps(a,l,t.memoizedProps)):l===null&&t.stateNode!==null&&xc(t,t.memoizedProps,e.memoizedProps)}break;case 27:Wt(n,t),$t(t),l&512&&(Ut||e===null||Mn(e,e.return)),e!==null&&l&4&&xc(t,t.memoizedProps,e.memoizedProps);break;case 5:if(Wt(n,t),$t(t),l&512&&(Ut||e===null||Mn(e,e.return)),t.flags&32){a=t.stateNode;try{Fe(a,"")}catch(D){ot(t,t.return,D)}}l&4&&t.stateNode!=null&&(a=t.memoizedProps,xc(t,a,e!==null?e.memoizedProps:a)),l&1024&&(zc=!0);break;case 6:if(Wt(n,t),$t(t),l&4){if(t.stateNode===null)throw Error(h(162));l=t.memoizedProps,e=t.stateNode;try{e.nodeValue=l}catch(D){ot(t,t.return,D)}}break;case 3:if(Mi=null,a=En,En=_i(n.containerInfo),Wt(n,t),En=a,$t(t),l&4&&e!==null&&e.memoizedState.isDehydrated)try{jl(n.containerInfo)}catch(D){ot(t,t.return,D)}zc&&(zc=!1,ns(t));break;case 4:l=En,En=_i(t.stateNode.containerInfo),Wt(n,t),$t(t),En=l;break;case 12:Wt(n,t),$t(t);break;case 31:Wt(n,t),$t(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,mi(t,l)));break;case 13:Wt(n,t),$t(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(gi=nn()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,mi(t,l)));break;case 22:a=t.memoizedState!==null;var f=e!==null&&e.memoizedState!==null,y=Kn,x=Ut;if(Kn=y||a,Ut=x||f,Wt(n,t),Ut=x,Kn=y,$t(t),l&8192)t:for(n=t.stateNode,n._visibility=a?n._visibility&-2:n._visibility|1,a&&(e===null||f||Kn||Ut||Qe(t)),e=null,n=t;;){if(n.tag===5||n.tag===26){if(e===null){f=e=n;try{if(i=f.stateNode,a)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=f.stateNode;var A=f.memoizedProps.style,g=A!=null&&A.hasOwnProperty("display")?A.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(D){ot(f,f.return,D)}}}else if(n.tag===6){if(e===null){f=n;try{f.stateNode.nodeValue=a?"":f.memoizedProps}catch(D){ot(f,f.return,D)}}}else if(n.tag===18){if(e===null){f=n;try{var b=f.stateNode;a?Zs(b,!0):Zs(f.stateNode,!1)}catch(D){ot(f,f.return,D)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;e===n&&(e=null),n=n.return}e===n&&(e=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=t.updateQueue,l!==null&&(e=l.retryQueue,e!==null&&(l.retryQueue=null,mi(t,e))));break;case 19:Wt(n,t),$t(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,mi(t,l)));break;case 30:break;case 21:break;default:Wt(n,t),$t(t)}}function $t(t){var n=t.flags;if(n&2){try{for(var e,l=t.return;l!==null;){if(Ko(l)){e=l;break}l=l.return}if(e==null)throw Error(h(160));switch(e.tag){case 27:var a=e.stateNode,i=vc(t);hi(t,i,a);break;case 5:var u=e.stateNode;e.flags&32&&(Fe(u,""),e.flags&=-33);var c=vc(t);hi(t,c,u);break;case 3:case 4:var f=e.stateNode.containerInfo,y=vc(t);Sc(t,y,f);break;default:throw Error(h(161))}}catch(x){ot(t,t.return,x)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function ns(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;ns(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function kn(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Wo(t,n.alternate,n),n=n.sibling}function Qe(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:se(4,n,n.return),Qe(n);break;case 1:Mn(n,n.return);var e=n.stateNode;typeof e.componentWillUnmount=="function"&&Zo(n,n.return,e),Qe(n);break;case 27:ma(n.stateNode);case 26:case 5:Mn(n,n.return),Qe(n);break;case 22:n.memoizedState===null&&Qe(n);break;case 30:Qe(n);break;default:Qe(n)}t=t.sibling}}function Wn(t,n,e){for(e=e&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,a=t,i=n,u=i.flags;switch(i.tag){case 0:case 11:case 15:Wn(a,i,e),ia(4,i);break;case 1:if(Wn(a,i,e),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(y){ot(l,l.return,y)}if(l=i,a=l.updateQueue,a!==null){var c=l.stateNode;try{var f=a.shared.hiddenCallbacks;if(f!==null)for(a.shared.hiddenCallbacks=null,a=0;a<f.length;a++)Mr(f[a],c)}catch(y){ot(l,l.return,y)}}e&&u&64&&wo(i),ua(i,i.return);break;case 27:Jo(i);case 26:case 5:Wn(a,i,e),e&&l===null&&u&4&&Vo(i),ua(i,i.return);break;case 12:Wn(a,i,e);break;case 31:Wn(a,i,e),e&&u&4&&Io(a,i);break;case 13:Wn(a,i,e),e&&u&4&&Po(a,i);break;case 22:i.memoizedState===null&&Wn(a,i,e),ua(i,i.return);break;case 30:break;default:Wn(a,i,e)}n=n.sibling}}function Ac(t,n){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Kl(e))}function qc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Kl(t))}function On(t,n,e,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)es(t,n,e,l),n=n.sibling}function es(t,n,e,l){var a=n.flags;switch(n.tag){case 0:case 11:case 15:On(t,n,e,l),a&2048&&ia(9,n);break;case 1:On(t,n,e,l);break;case 3:On(t,n,e,l),a&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Kl(t)));break;case 12:if(a&2048){On(t,n,e,l),t=n.stateNode;try{var i=n.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){ot(n,n.return,f)}}else On(t,n,e,l);break;case 31:On(t,n,e,l);break;case 13:On(t,n,e,l);break;case 23:break;case 22:i=n.stateNode,u=n.alternate,n.memoizedState!==null?i._visibility&2?On(t,n,e,l):ca(t,n):i._visibility&2?On(t,n,e,l):(i._visibility|=2,gl(t,n,e,l,(n.subtreeFlags&10256)!==0||!1)),a&2048&&Ac(u,n);break;case 24:On(t,n,e,l),a&2048&&qc(n.alternate,n);break;default:On(t,n,e,l)}}function gl(t,n,e,l,a){for(a=a&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var i=t,u=n,c=e,f=l,y=u.flags;switch(u.tag){case 0:case 11:case 15:gl(i,u,c,f,a),ia(8,u);break;case 23:break;case 22:var x=u.stateNode;u.memoizedState!==null?x._visibility&2?gl(i,u,c,f,a):ca(i,u):(x._visibility|=2,gl(i,u,c,f,a)),a&&y&2048&&Ac(u.alternate,u);break;case 24:gl(i,u,c,f,a),a&&y&2048&&qc(u.alternate,u);break;default:gl(i,u,c,f,a)}n=n.sibling}}function ca(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var e=t,l=n,a=l.flags;switch(l.tag){case 22:ca(e,l),a&2048&&Ac(l.alternate,l);break;case 24:ca(e,l),a&2048&&qc(l.alternate,l);break;default:ca(e,l)}n=n.sibling}}var fa=8192;function bl(t,n,e){if(t.subtreeFlags&fa)for(t=t.child;t!==null;)ls(t,n,e),t=t.sibling}function ls(t,n,e){switch(t.tag){case 26:bl(t,n,e),t.flags&fa&&t.memoizedState!==null&&L1(e,En,t.memoizedState,t.memoizedProps);break;case 5:bl(t,n,e);break;case 3:case 4:var l=En;En=_i(t.stateNode.containerInfo),bl(t,n,e),En=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=fa,fa=16777216,bl(t,n,e),fa=l):bl(t,n,e));break;default:bl(t,n,e)}}function as(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ra(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var l=n[e];Nt=l,us(l,t)}as(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)is(t),t=t.sibling}function is(t){switch(t.tag){case 0:case 11:case 15:ra(t),t.flags&2048&&se(9,t,t.return);break;case 3:ra(t);break;case 12:ra(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,yi(t)):ra(t);break;default:ra(t)}}function yi(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var l=n[e];Nt=l,us(l,t)}as(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:se(8,n,n.return),yi(n);break;case 22:e=n.stateNode,e._visibility&2&&(e._visibility&=-3,yi(n));break;default:yi(n)}t=t.sibling}}function us(t,n){for(;Nt!==null;){var e=Nt;switch(e.tag){case 0:case 11:case 15:se(8,e,n);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var l=e.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Kl(e.memoizedState.cache)}if(l=e.child,l!==null)l.return=e,Nt=l;else t:for(e=t;Nt!==null;){l=Nt;var a=l.sibling,i=l.return;if($o(l),l===e){Nt=null;break t}if(a!==null){a.return=i,Nt=a;break t}Nt=i}}}var P0={getCacheForType:function(t){var n=Ht(Tt),e=n.data.get(t);return e===void 0&&(e=t(),n.data.set(t,e)),e},cacheSignal:function(){return Ht(Tt).controller.signal}},t1=typeof WeakMap=="function"?WeakMap:Map,ct=0,yt=null,$=null,I=0,rt=0,rn=null,de=!1,xl=!1,Ec=!1,$n=0,St=0,pe=0,we=0,Oc=0,on=0,vl=0,oa=null,Ft=null,Tc=!1,gi=0,cs=0,bi=1/0,xi=null,he=null,Dt=0,me=null,Sl=null,Fn=0,jc=0,_c=null,fs=null,sa=0,Uc=null;function sn(){return(ct&2)!==0&&I!==0?I&-I:S.T!==null?Cc():Af()}function rs(){if(on===0)if((I&536870912)===0||et){var t=Ta;Ta<<=1,(Ta&3932160)===0&&(Ta=262144),on=t}else on=536870912;return t=cn.current,t!==null&&(t.flags|=32),on}function It(t,n,e){(t===yt&&(rt===2||rt===9)||t.cancelPendingCommit!==null)&&(zl(t,0),ye(t,I,on,!1)),Dl(t,e),((ct&2)===0||t!==yt)&&(t===yt&&((ct&2)===0&&(we|=e),St===4&&ye(t,I,on,!1)),Dn(t))}function os(t,n,e){if((ct&6)!==0)throw Error(h(327));var l=!e&&(n&127)===0&&(n&t.expiredLanes)===0||Ml(t,n),a=l?l1(t,n):Dc(t,n,!0),i=l;do{if(a===0){xl&&!l&&ye(t,n,0,!1);break}else{if(e=t.current.alternate,i&&!n1(e)){a=Dc(t,n,!1),i=!1;continue}if(a===2){if(i=n,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){n=u;t:{var c=t;a=oa;var f=c.current.memoizedState.isDehydrated;if(f&&(zl(c,u).flags|=256),u=Dc(c,u,!1),u!==2){if(Ec&&!f){c.errorRecoveryDisabledLanes|=i,we|=i,a=4;break t}i=Ft,Ft=a,i!==null&&(Ft===null?Ft=i:Ft.push.apply(Ft,i))}a=u}if(i=!1,a!==2)continue}}if(a===1){zl(t,0),ye(t,n,0,!0);break}t:{switch(l=t,i=a,i){case 0:case 1:throw Error(h(345));case 4:if((n&4194048)!==n)break;case 6:ye(l,n,on,!de);break t;case 2:Ft=null;break;case 3:case 5:break;default:throw Error(h(329))}if((n&62914560)===n&&(a=gi+300-nn(),10<a)){if(ye(l,n,on,!de),_a(l,0,!0)!==0)break t;Fn=n,l.timeoutHandle=Gs(ss.bind(null,l,e,Ft,xi,Tc,n,on,we,vl,de,i,"Throttled",-0,0),a);break t}ss(l,e,Ft,xi,Tc,n,on,we,vl,de,i,null,-0,0)}}break}while(!0);Dn(t)}function ss(t,n,e,l,a,i,u,c,f,y,x,A,g,b){if(t.timeoutHandle=-1,A=n.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Cn},ls(n,i,A);var D=(i&62914560)===i?gi-nn():(i&4194048)===i?cs-nn():0;if(D=Y1(A,D),D!==null){Fn=i,t.cancelPendingCommit=D(xs.bind(null,t,n,i,e,l,a,u,c,f,x,A,null,g,b)),ye(t,i,u,!y);return}}xs(t,n,i,e,l,a,u,c,f)}function n1(t){for(var n=t;;){var e=n.tag;if((e===0||e===11||e===15)&&n.flags&16384&&(e=n.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var l=0;l<e.length;l++){var a=e[l],i=a.getSnapshot;a=a.value;try{if(!an(i(),a))return!1}catch{return!1}}if(e=n.child,n.subtreeFlags&16384&&e!==null)e.return=n,n=e;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ye(t,n,e,l){n&=~Oc,n&=~we,t.suspendedLanes|=n,t.pingedLanes&=~n,l&&(t.warmLanes|=n),l=t.expirationTimes;for(var a=n;0<a;){var i=31-ln(a),u=1<<i;l[i]=-1,a&=~u}e!==0&&vf(t,e,n)}function vi(){return(ct&6)===0?(da(0),!1):!0}function Mc(){if($!==null){if(rt===0)var t=$.return;else t=$,Xn=Ne=null,Ju(t),dl=null,kl=0,t=$;for(;t!==null;)Qo(t.alternate,t),t=t.return;$=null}}function zl(t,n){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,S1(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),Fn=0,Mc(),yt=t,$=e=Ln(t.current,null),I=n,rt=0,rn=null,de=!1,xl=Ml(t,n),Ec=!1,vl=on=Oc=we=pe=St=0,Ft=oa=null,Tc=!1,(n&8)!==0&&(n|=n&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=n;0<l;){var a=31-ln(l),i=1<<a;n|=t[a],l&=~i}return $n=n,Ga(),e}function ds(t,n){V=null,S.H=ea,n===sl||n===Wa?(n=Tr(),rt=3):n===Bu?(n=Tr(),rt=4):rt=n===rc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,rn=n,$===null&&(St=1,ri(t,yn(n,t.current)))}function ps(){var t=cn.current;return t===null?!0:(I&4194048)===I?vn===null:(I&62914560)===I||(I&536870912)!==0?t===vn:!1}function hs(){var t=S.H;return S.H=ea,t===null?ea:t}function ms(){var t=S.A;return S.A=P0,t}function Si(){St=4,de||(I&4194048)!==I&&cn.current!==null||(xl=!0),(pe&134217727)===0&&(we&134217727)===0||yt===null||ye(yt,I,on,!1)}function Dc(t,n,e){var l=ct;ct|=2;var a=hs(),i=ms();(yt!==t||I!==n)&&(xi=null,zl(t,n)),n=!1;var u=St;t:do try{if(rt!==0&&$!==null){var c=$,f=rn;switch(rt){case 8:Mc(),u=6;break t;case 3:case 2:case 9:case 6:cn.current===null&&(n=!0);var y=rt;if(rt=0,rn=null,Al(t,c,f,y),e&&xl){u=0;break t}break;default:y=rt,rt=0,rn=null,Al(t,c,f,y)}}e1(),u=St;break}catch(x){ds(t,x)}while(!0);return n&&t.shellSuspendCounter++,Xn=Ne=null,ct=l,S.H=a,S.A=i,$===null&&(yt=null,I=0,Ga()),u}function e1(){for(;$!==null;)ys($)}function l1(t,n){var e=ct;ct|=2;var l=hs(),a=ms();yt!==t||I!==n?(xi=null,bi=nn()+500,zl(t,n)):xl=Ml(t,n);t:do try{if(rt!==0&&$!==null){n=$;var i=rn;n:switch(rt){case 1:rt=0,rn=null,Al(t,n,i,1);break;case 2:case 9:if(Er(i)){rt=0,rn=null,gs(n);break}n=function(){rt!==2&&rt!==9||yt!==t||(rt=7),Dn(t)},i.then(n,n);break t;case 3:rt=7;break t;case 4:rt=5;break t;case 7:Er(i)?(rt=0,rn=null,gs(n)):(rt=0,rn=null,Al(t,n,i,7));break;case 5:var u=null;switch($.tag){case 26:u=$.memoizedState;case 5:case 27:var c=$;if(u?ed(u):c.stateNode.complete){rt=0,rn=null;var f=c.sibling;if(f!==null)$=f;else{var y=c.return;y!==null?($=y,zi(y)):$=null}break n}}rt=0,rn=null,Al(t,n,i,5);break;case 6:rt=0,rn=null,Al(t,n,i,6);break;case 8:Mc(),St=6;break t;default:throw Error(h(462))}}a1();break}catch(x){ds(t,x)}while(!0);return Xn=Ne=null,S.H=l,S.A=a,ct=e,$!==null?0:(yt=null,I=0,Ga(),St)}function a1(){for(;$!==null&&!Td();)ys($)}function ys(t){var n=Xo(t.alternate,t,$n);t.memoizedProps=t.pendingProps,n===null?zi(t):$=n}function gs(t){var n=t,e=n.alternate;switch(n.tag){case 15:case 0:n=No(e,n,n.pendingProps,n.type,void 0,I);break;case 11:n=No(e,n,n.pendingProps,n.type.render,n.ref,I);break;case 5:Ju(n);default:Qo(e,n),n=$=hr(n,$n),n=Xo(e,n,$n)}t.memoizedProps=t.pendingProps,n===null?zi(t):$=n}function Al(t,n,e,l){Xn=Ne=null,Ju(n),dl=null,kl=0;var a=n.return;try{if(K0(t,a,n,e,I)){St=1,ri(t,yn(e,t.current)),$=null;return}}catch(i){if(a!==null)throw $=a,i;St=1,ri(t,yn(e,t.current)),$=null;return}n.flags&32768?(et||l===1?t=!0:xl||(I&536870912)!==0?t=!1:(de=t=!0,(l===2||l===9||l===3||l===6)&&(l=cn.current,l!==null&&l.tag===13&&(l.flags|=16384))),bs(n,t)):zi(n)}function zi(t){var n=t;do{if((n.flags&32768)!==0){bs(n,de);return}t=n.return;var e=W0(n.alternate,n,$n);if(e!==null){$=e;return}if(n=n.sibling,n!==null){$=n;return}$=n=t}while(n!==null);St===0&&(St=5)}function bs(t,n){do{var e=$0(t.alternate,t);if(e!==null){e.flags&=32767,$=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!n&&(t=t.sibling,t!==null)){$=t;return}$=t=e}while(t!==null);St=6,$=null}function xs(t,n,e,l,a,i,u,c,f){t.cancelPendingCommit=null;do Ai();while(Dt!==0);if((ct&6)!==0)throw Error(h(327));if(n!==null){if(n===t.current)throw Error(h(177));if(i=n.lanes|n.childLanes,i|=vu,Hd(t,e,i,u,c,f),t===yt&&($=yt=null,I=0),Sl=n,me=t,Fn=e,jc=i,_c=a,fs=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,f1(Ea,function(){return qs(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=S.T,S.T=null,a=_.p,_.p=2,u=ct,ct|=4;try{F0(t,n,e)}finally{ct=u,_.p=a,S.T=l}}Dt=1,vs(),Ss(),zs()}}function vs(){if(Dt===1){Dt=0;var t=me,n=Sl,e=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||e){e=S.T,S.T=null;var l=_.p;_.p=2;var a=ct;ct|=4;try{ts(n,t);var i=Zc,u=ir(t.containerInfo),c=i.focusedElem,f=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&ar(c.ownerDocument.documentElement,c)){if(f!==null&&mu(c)){var y=f.start,x=f.end;if(x===void 0&&(x=y),"selectionStart"in c)c.selectionStart=y,c.selectionEnd=Math.min(x,c.value.length);else{var A=c.ownerDocument||document,g=A&&A.defaultView||window;if(g.getSelection){var b=g.getSelection(),D=c.textContent.length,X=Math.min(f.start,D),ht=f.end===void 0?X:Math.min(f.end,D);!b.extend&&X>ht&&(u=ht,ht=X,X=u);var p=lr(c,X),r=lr(c,ht);if(p&&r&&(b.rangeCount!==1||b.anchorNode!==p.node||b.anchorOffset!==p.offset||b.focusNode!==r.node||b.focusOffset!==r.offset)){var m=A.createRange();m.setStart(p.node,p.offset),b.removeAllRanges(),X>ht?(b.addRange(m),b.extend(r.node,r.offset)):(m.setEnd(r.node,r.offset),b.addRange(m))}}}}for(A=[],b=c;b=b.parentNode;)b.nodeType===1&&A.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<A.length;c++){var z=A[c];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Bi=!!wc,Zc=wc=null}finally{ct=a,_.p=l,S.T=e}}t.current=n,Dt=2}}function Ss(){if(Dt===2){Dt=0;var t=me,n=Sl,e=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||e){e=S.T,S.T=null;var l=_.p;_.p=2;var a=ct;ct|=4;try{Wo(t,n.alternate,n)}finally{ct=a,_.p=l,S.T=e}}Dt=3}}function zs(){if(Dt===4||Dt===3){Dt=0,jd();var t=me,n=Sl,e=Fn,l=fs;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Dt=5:(Dt=0,Sl=me=null,As(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(he=null),$i(e),n=n.stateNode,en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Ul,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=S.T,a=_.p,_.p=2,S.T=null;try{for(var i=t.onRecoverableError,u=0;u<l.length;u++){var c=l[u];i(c.value,{componentStack:c.stack})}}finally{S.T=n,_.p=a}}(Fn&3)!==0&&Ai(),Dn(t),a=t.pendingLanes,(e&261930)!==0&&(a&42)!==0?t===Uc?sa++:(sa=0,Uc=t):sa=0,da(0)}}function As(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Kl(n)))}function Ai(){return vs(),Ss(),zs(),qs()}function qs(){if(Dt!==5)return!1;var t=me,n=jc;jc=0;var e=$i(Fn),l=S.T,a=_.p;try{_.p=32>e?32:e,S.T=null,e=_c,_c=null;var i=me,u=Fn;if(Dt=0,Sl=me=null,Fn=0,(ct&6)!==0)throw Error(h(331));var c=ct;if(ct|=4,is(i.current),es(i,i.current,u,e),ct=c,da(0,!1),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Ul,i)}catch{}return!0}finally{_.p=a,S.T=l,As(t,n)}}function Es(t,n,e){n=yn(e,n),n=fc(t.stateNode,n,2),t=fe(t,n,2),t!==null&&(Dl(t,2),Dn(t))}function ot(t,n,e){if(t.tag===3)Es(t,t,e);else for(;n!==null;){if(n.tag===3){Es(n,t,e);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(he===null||!he.has(l))){t=yn(e,t),e=Oo(2),l=fe(n,e,2),l!==null&&(To(e,l,n,t),Dl(l,2),Dn(l));break}}n=n.return}}function Rc(t,n,e){var l=t.pingCache;if(l===null){l=t.pingCache=new t1;var a=new Set;l.set(n,a)}else a=l.get(n),a===void 0&&(a=new Set,l.set(n,a));a.has(e)||(Ec=!0,a.add(e),t=i1.bind(null,t,n,e),n.then(t,t))}function i1(t,n,e){var l=t.pingCache;l!==null&&l.delete(n),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,yt===t&&(I&e)===e&&(St===4||St===3&&(I&62914560)===I&&300>nn()-gi?(ct&2)===0&&zl(t,0):Oc|=e,vl===I&&(vl=0)),Dn(t)}function Os(t,n){n===0&&(n=xf()),t=Me(t,n),t!==null&&(Dl(t,n),Dn(t))}function u1(t){var n=t.memoizedState,e=0;n!==null&&(e=n.retryLane),Os(t,e)}function c1(t,n){var e=0;switch(t.tag){case 31:case 13:var l=t.stateNode,a=t.memoizedState;a!==null&&(e=a.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(h(314))}l!==null&&l.delete(n),Os(t,e)}function f1(t,n){return Ki(t,n)}var qi=null,ql=null,Nc=!1,Ei=!1,Bc=!1,ge=0;function Dn(t){t!==ql&&t.next===null&&(ql===null?qi=ql=t:ql=ql.next=t),Ei=!0,Nc||(Nc=!0,o1())}function da(t,n){if(!Bc&&Ei){Bc=!0;do for(var e=!1,l=qi;l!==null;){if(t!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var u=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-ln(42|t)+1)-1,i&=a&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,Us(l,i))}else i=I,i=_a(l,l===yt?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Ml(l,i)||(e=!0,Us(l,i));l=l.next}while(e);Bc=!1}}function r1(){Ts()}function Ts(){Ei=Nc=!1;var t=0;ge!==0&&v1()&&(t=ge);for(var n=nn(),e=null,l=qi;l!==null;){var a=l.next,i=js(l,n);i===0?(l.next=null,e===null?qi=a:e.next=a,a===null&&(ql=e)):(e=l,(t!==0||(i&3)!==0)&&(Ei=!0)),l=a}Dt!==0&&Dt!==5||da(t),ge!==0&&(ge=0)}function js(t,n){for(var e=t.suspendedLanes,l=t.pingedLanes,a=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-ln(i),c=1<<u,f=a[u];f===-1?((c&e)===0||(c&l)!==0)&&(a[u]=Cd(c,n)):f<=n&&(t.expiredLanes|=c),i&=~c}if(n=yt,e=I,e=_a(t,t===n?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,e===0||t===n&&(rt===2||rt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Ji(l),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||Ml(t,e)){if(n=e&-e,n===t.callbackPriority)return n;switch(l!==null&&Ji(l),$i(e)){case 2:case 8:e=gf;break;case 32:e=Ea;break;case 268435456:e=bf;break;default:e=Ea}return l=_s.bind(null,t),e=Ki(e,l),t.callbackPriority=n,t.callbackNode=e,n}return l!==null&&l!==null&&Ji(l),t.callbackPriority=2,t.callbackNode=null,2}function _s(t,n){if(Dt!==0&&Dt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(Ai()&&t.callbackNode!==e)return null;var l=I;return l=_a(t,t===yt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(os(t,l,n),js(t,nn()),t.callbackNode!=null&&t.callbackNode===e?_s.bind(null,t):null)}function Us(t,n){if(Ai())return null;os(t,n,!0)}function o1(){z1(function(){(ct&6)!==0?Ki(yf,r1):Ts()})}function Cc(){if(ge===0){var t=rl;t===0&&(t=Oa,Oa<<=1,(Oa&261888)===0&&(Oa=256)),ge=t}return ge}function Ms(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ra(""+t)}function Ds(t,n){var e=n.ownerDocument.createElement("input");return e.name=n.name,e.value=n.value,t.id&&e.setAttribute("form",t.id),n.parentNode.insertBefore(e,n),t=new FormData(t),e.parentNode.removeChild(e),t}function s1(t,n,e,l,a){if(n==="submit"&&e&&e.stateNode===a){var i=Ms((a[Kt]||null).action),u=l.submitter;u&&(n=(n=u[Kt]||null)?Ms(n.formAction):u.getAttribute("formAction"),n!==null&&(i=n,u=null));var c=new Ha("action","action",null,l,a);t.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ge!==0){var f=u?Ds(a,u):new FormData(a);ec(e,{pending:!0,data:f,method:a.method,action:i},null,f)}}else typeof i=="function"&&(c.preventDefault(),f=u?Ds(a,u):new FormData(a),ec(e,{pending:!0,data:f,method:a.method,action:i},i,f))},currentTarget:a}]})}}for(var Hc=0;Hc<xu.length;Hc++){var Lc=xu[Hc],d1=Lc.toLowerCase(),p1=Lc[0].toUpperCase()+Lc.slice(1);qn(d1,"on"+p1)}qn(fr,"onAnimationEnd"),qn(rr,"onAnimationIteration"),qn(or,"onAnimationStart"),qn("dblclick","onDoubleClick"),qn("focusin","onFocus"),qn("focusout","onBlur"),qn(_0,"onTransitionRun"),qn(U0,"onTransitionStart"),qn(M0,"onTransitionCancel"),qn(sr,"onTransitionEnd"),We("onMouseEnter",["mouseout","mouseover"]),We("onMouseLeave",["mouseout","mouseover"]),We("onPointerEnter",["pointerout","pointerover"]),We("onPointerLeave",["pointerout","pointerover"]),Te("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Te("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Te("onBeforeInput",["compositionend","keypress","textInput","paste"]),Te("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Te("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pa));function Rs(t,n){n=(n&4)!==0;for(var e=0;e<t.length;e++){var l=t[e],a=l.event;l=l.listeners;t:{var i=void 0;if(n)for(var u=l.length-1;0<=u;u--){var c=l[u],f=c.instance,y=c.currentTarget;if(c=c.listener,f!==i&&a.isPropagationStopped())break t;i=c,a.currentTarget=y;try{i(a)}catch(x){Xa(x)}a.currentTarget=null,i=f}else for(u=0;u<l.length;u++){if(c=l[u],f=c.instance,y=c.currentTarget,c=c.listener,f!==i&&a.isPropagationStopped())break t;i=c,a.currentTarget=y;try{i(a)}catch(x){Xa(x)}a.currentTarget=null,i=f}}}}function F(t,n){var e=n[Fi];e===void 0&&(e=n[Fi]=new Set);var l=t+"__bubble";e.has(l)||(Ns(n,t,2,!1),e.add(l))}function Yc(t,n,e){var l=0;n&&(l|=4),Ns(e,t,l,n)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function Xc(t){if(!t[Oi]){t[Oi]=!0,Of.forEach(function(e){e!=="selectionchange"&&(h1.has(e)||Yc(e,!1,t),Yc(e,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Oi]||(n[Oi]=!0,Yc("selectionchange",!1,n))}}function Ns(t,n,e,l){switch(rd(n)){case 2:var a=Q1;break;case 8:a=w1;break;default:a=nf}e=a.bind(null,n,e,t),a=void 0,!uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),l?a!==void 0?t.addEventListener(n,e,{capture:!0,passive:a}):t.addEventListener(n,e,!0):a!==void 0?t.addEventListener(n,e,{passive:a}):t.addEventListener(n,e,!1)}function Gc(t,n,e,l,a){var i=l;if((n&1)===0&&(n&2)===0&&l!==null)t:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var c=l.stateNode.containerInfo;if(c===a)break;if(u===4)for(u=l.return;u!==null;){var f=u.tag;if((f===3||f===4)&&u.stateNode.containerInfo===a)return;u=u.return}for(;c!==null;){if(u=Ke(c),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){l=i=u;continue t}c=c.parentNode}}l=l.return}Lf(function(){var y=i,x=au(e),A=[];t:{var g=dr.get(t);if(g!==void 0){var b=Ha,D=t;switch(t){case"keypress":if(Ba(e)===0)break t;case"keydown":case"keyup":b=c0;break;case"focusin":D="focus",b=ou;break;case"focusout":D="blur",b=ou;break;case"beforeblur":case"afterblur":b=ou;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Wd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=o0;break;case fr:case rr:case or:b=Id;break;case sr:b=d0;break;case"scroll":case"scrollend":b=Jd;break;case"wheel":b=h0;break;case"copy":case"cut":case"paste":b=t0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=wf;break;case"toggle":case"beforetoggle":b=y0}var X=(n&4)!==0,ht=!X&&(t==="scroll"||t==="scrollend"),p=X?g!==null?g+"Capture":null:g;X=[];for(var r=y,m;r!==null;){var z=r;if(m=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||m===null||p===null||(z=Bl(r,p),z!=null&&X.push(ha(r,z,m))),ht)break;r=r.return}0<X.length&&(g=new b(g,D,null,e,x),A.push({event:g,listeners:X}))}}if((n&7)===0){t:{if(g=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",g&&e!==lu&&(D=e.relatedTarget||e.fromElement)&&(Ke(D)||D[Ve]))break t;if((b||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,b?(D=e.relatedTarget||e.toElement,b=y,D=D?Ke(D):null,D!==null&&(ht=G(D),X=D.tag,D!==ht||X!==5&&X!==27&&X!==6)&&(D=null)):(b=null,D=y),b!==D)){if(X=Gf,z="onMouseLeave",p="onMouseEnter",r="mouse",(t==="pointerout"||t==="pointerover")&&(X=wf,z="onPointerLeave",p="onPointerEnter",r="pointer"),ht=b==null?g:Nl(b),m=D==null?g:Nl(D),g=new X(z,r+"leave",b,e,x),g.target=ht,g.relatedTarget=m,z=null,Ke(x)===y&&(X=new X(p,r+"enter",D,e,x),X.target=m,X.relatedTarget=ht,z=X),ht=z,b&&D)n:{for(X=m1,p=b,r=D,m=0,z=p;z;z=X(z))m++;z=0;for(var H=r;H;H=X(H))z++;for(;0<m-z;)p=X(p),m--;for(;0<z-m;)r=X(r),z--;for(;m--;){if(p===r||r!==null&&p===r.alternate){X=p;break n}p=X(p),r=X(r)}X=null}else X=null;b!==null&&Bs(A,g,b,X,!1),D!==null&&ht!==null&&Bs(A,ht,D,X,!0)}}t:{if(g=y?Nl(y):window,b=g.nodeName&&g.nodeName.toLowerCase(),b==="select"||b==="input"&&g.type==="file")var it=Ff;else if(Wf(g))if(If)it=O0;else{it=q0;var B=A0}else b=g.nodeName,!b||b.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?y&&eu(y.elementType)&&(it=Ff):it=E0;if(it&&(it=it(t,y))){$f(A,it,e,x);break t}B&&B(t,g,y),t==="focusout"&&y&&g.type==="number"&&y.memoizedProps.value!=null&&nu(g,"number",g.value)}switch(B=y?Nl(y):window,t){case"focusin":(Wf(B)||B.contentEditable==="true")&&(nl=B,yu=y,wl=null);break;case"focusout":wl=yu=nl=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,ur(A,e,x);break;case"selectionchange":if(j0)break;case"keydown":case"keyup":ur(A,e,x)}var K;if(du)t:{switch(t){case"compositionstart":var P="onCompositionStart";break t;case"compositionend":P="onCompositionEnd";break t;case"compositionupdate":P="onCompositionUpdate";break t}P=void 0}else tl?Jf(t,e)&&(P="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(P="onCompositionStart");P&&(Zf&&e.locale!=="ko"&&(tl||P!=="onCompositionStart"?P==="onCompositionEnd"&&tl&&(K=Yf()):(ne=x,cu="value"in ne?ne.value:ne.textContent,tl=!0)),B=Ti(y,P),0<B.length&&(P=new Qf(P,t,null,e,x),A.push({event:P,listeners:B}),K?P.data=K:(K=kf(e),K!==null&&(P.data=K)))),(K=b0?x0(t,e):v0(t,e))&&(P=Ti(y,"onBeforeInput"),0<P.length&&(B=new Qf("onBeforeInput","beforeinput",null,e,x),A.push({event:B,listeners:P}),B.data=K)),s1(A,t,y,e,x)}Rs(A,n)})}function ha(t,n,e){return{instance:t,listener:n,currentTarget:e}}function Ti(t,n){for(var e=n+"Capture",l=[];t!==null;){var a=t,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=Bl(t,e),a!=null&&l.unshift(ha(t,a,i)),a=Bl(t,n),a!=null&&l.push(ha(t,a,i))),t.tag===3)return l;t=t.return}return[]}function m1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Bs(t,n,e,l,a){for(var i=n._reactName,u=[];e!==null&&e!==l;){var c=e,f=c.alternate,y=c.stateNode;if(c=c.tag,f!==null&&f===l)break;c!==5&&c!==26&&c!==27||y===null||(f=y,a?(y=Bl(e,i),y!=null&&u.unshift(ha(e,y,f))):a||(y=Bl(e,i),y!=null&&u.push(ha(e,y,f)))),e=e.return}u.length!==0&&t.push({event:n,listeners:u})}var y1=/\r\n?/g,g1=/\u0000|\uFFFD/g;function Cs(t){return(typeof t=="string"?t:""+t).replace(y1,`
`).replace(g1,"")}function Hs(t,n){return n=Cs(n),Cs(t)===n}function pt(t,n,e,l,a,i){switch(e){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||Fe(t,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&Fe(t,""+l);break;case"className":Ma(t,"class",l);break;case"tabIndex":Ma(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Ma(t,e,l);break;case"style":Cf(t,l,i);break;case"data":if(n!=="object"){Ma(t,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||e!=="href")){t.removeAttribute(e);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(e);break}l=Ra(""+l),t.setAttribute(e,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(n!=="input"&&pt(t,n,"name",a.name,a,null),pt(t,n,"formEncType",a.formEncType,a,null),pt(t,n,"formMethod",a.formMethod,a,null),pt(t,n,"formTarget",a.formTarget,a,null)):(pt(t,n,"encType",a.encType,a,null),pt(t,n,"method",a.method,a,null),pt(t,n,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(e);break}l=Ra(""+l),t.setAttribute(e,l);break;case"onClick":l!=null&&(t.onclick=Cn);break;case"onScroll":l!=null&&F("scroll",t);break;case"onScrollEnd":l!=null&&F("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(h(61));if(e=l.__html,e!=null){if(a.children!=null)throw Error(h(60));t.innerHTML=e}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}e=Ra(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,""+l):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":l===!0?t.setAttribute(e,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(e,l):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(e,l):t.removeAttribute(e);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(e):t.setAttribute(e,l);break;case"popover":F("beforetoggle",t),F("toggle",t),Ua(t,"popover",l);break;case"xlinkActuate":Bn(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Bn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Bn(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Bn(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Bn(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Bn(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Bn(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Bn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Bn(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ua(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Vd.get(e)||e,Ua(t,e,l))}}function Qc(t,n,e,l,a,i){switch(e){case"style":Cf(t,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(h(61));if(e=l.__html,e!=null){if(a.children!=null)throw Error(h(60));t.innerHTML=e}}break;case"children":typeof l=="string"?Fe(t,l):(typeof l=="number"||typeof l=="bigint")&&Fe(t,""+l);break;case"onScroll":l!=null&&F("scroll",t);break;case"onScrollEnd":l!=null&&F("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Cn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tf.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(a=e.endsWith("Capture"),n=e.slice(2,a?e.length-7:void 0),i=t[Kt]||null,i=i!=null?i[e]:null,typeof i=="function"&&t.removeEventListener(n,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(n,l,a);break t}e in t?t[e]=l:l===!0?t.setAttribute(e,""):Ua(t,e,l)}}}function Yt(t,n,e){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":F("error",t),F("load",t);var l=!1,a=!1,i;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,n));default:pt(t,n,i,u,e,null)}}a&&pt(t,n,"srcSet",e.srcSet,e,null),l&&pt(t,n,"src",e.src,e,null);return;case"input":F("invalid",t);var c=i=u=a=null,f=null,y=null;for(l in e)if(e.hasOwnProperty(l)){var x=e[l];if(x!=null)switch(l){case"name":a=x;break;case"type":u=x;break;case"checked":f=x;break;case"defaultChecked":y=x;break;case"value":i=x;break;case"defaultValue":c=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(h(137,n));break;default:pt(t,n,l,x,e,null)}}Df(t,i,c,f,y,u,a,!1);return;case"select":F("invalid",t),l=u=i=null;for(a in e)if(e.hasOwnProperty(a)&&(c=e[a],c!=null))switch(a){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":l=c;default:pt(t,n,a,c,e,null)}n=i,e=u,t.multiple=!!l,n!=null?$e(t,!!l,n,!1):e!=null&&$e(t,!!l,e,!0);return;case"textarea":F("invalid",t),i=a=l=null;for(u in e)if(e.hasOwnProperty(u)&&(c=e[u],c!=null))switch(u){case"value":l=c;break;case"defaultValue":a=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(h(91));break;default:pt(t,n,u,c,e,null)}Nf(t,l,a,i);return;case"option":for(f in e)e.hasOwnProperty(f)&&(l=e[f],l!=null)&&(f==="selected"?t.selected=l&&typeof l!="function"&&typeof l!="symbol":pt(t,n,f,l,e,null));return;case"dialog":F("beforetoggle",t),F("toggle",t),F("cancel",t),F("close",t);break;case"iframe":case"object":F("load",t);break;case"video":case"audio":for(l=0;l<pa.length;l++)F(pa[l],t);break;case"image":F("error",t),F("load",t);break;case"details":F("toggle",t);break;case"embed":case"source":case"link":F("error",t),F("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in e)if(e.hasOwnProperty(y)&&(l=e[y],l!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,n));default:pt(t,n,y,l,e,null)}return;default:if(eu(n)){for(x in e)e.hasOwnProperty(x)&&(l=e[x],l!==void 0&&Qc(t,n,x,l,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(l=e[c],l!=null&&pt(t,n,c,l,e,null))}function b1(t,n,e,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,u=null,c=null,f=null,y=null,x=null;for(b in e){var A=e[b];if(e.hasOwnProperty(b)&&A!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":f=A;default:l.hasOwnProperty(b)||pt(t,n,b,null,l,A)}}for(var g in l){var b=l[g];if(A=e[g],l.hasOwnProperty(g)&&(b!=null||A!=null))switch(g){case"type":i=b;break;case"name":a=b;break;case"checked":y=b;break;case"defaultChecked":x=b;break;case"value":u=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(h(137,n));break;default:b!==A&&pt(t,n,g,b,l,A)}}tu(t,u,c,f,y,x,i,a);return;case"select":b=u=c=g=null;for(i in e)if(f=e[i],e.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":b=f;default:l.hasOwnProperty(i)||pt(t,n,i,null,l,f)}for(a in l)if(i=l[a],f=e[a],l.hasOwnProperty(a)&&(i!=null||f!=null))switch(a){case"value":g=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==f&&pt(t,n,a,i,l,f)}n=c,e=u,l=b,g!=null?$e(t,!!e,g,!1):!!l!=!!e&&(n!=null?$e(t,!!e,n,!0):$e(t,!!e,e?[]:"",!1));return;case"textarea":b=g=null;for(c in e)if(a=e[c],e.hasOwnProperty(c)&&a!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:pt(t,n,c,null,l,a)}for(u in l)if(a=l[u],i=e[u],l.hasOwnProperty(u)&&(a!=null||i!=null))switch(u){case"value":g=a;break;case"defaultValue":b=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(h(91));break;default:a!==i&&pt(t,n,u,a,l,i)}Rf(t,g,b);return;case"option":for(var D in e)g=e[D],e.hasOwnProperty(D)&&g!=null&&!l.hasOwnProperty(D)&&(D==="selected"?t.selected=!1:pt(t,n,D,null,l,g));for(f in l)g=l[f],b=e[f],l.hasOwnProperty(f)&&g!==b&&(g!=null||b!=null)&&(f==="selected"?t.selected=g&&typeof g!="function"&&typeof g!="symbol":pt(t,n,f,g,l,b));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in e)g=e[X],e.hasOwnProperty(X)&&g!=null&&!l.hasOwnProperty(X)&&pt(t,n,X,null,l,g);for(y in l)if(g=l[y],b=e[y],l.hasOwnProperty(y)&&g!==b&&(g!=null||b!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,n));break;default:pt(t,n,y,g,l,b)}return;default:if(eu(n)){for(var ht in e)g=e[ht],e.hasOwnProperty(ht)&&g!==void 0&&!l.hasOwnProperty(ht)&&Qc(t,n,ht,void 0,l,g);for(x in l)g=l[x],b=e[x],!l.hasOwnProperty(x)||g===b||g===void 0&&b===void 0||Qc(t,n,x,g,l,b);return}}for(var p in e)g=e[p],e.hasOwnProperty(p)&&g!=null&&!l.hasOwnProperty(p)&&pt(t,n,p,null,l,g);for(A in l)g=l[A],b=e[A],!l.hasOwnProperty(A)||g===b||g==null&&b==null||pt(t,n,A,g,l,b)}function Ls(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function x1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,e=performance.getEntriesByType("resource"),l=0;l<e.length;l++){var a=e[l],i=a.transferSize,u=a.initiatorType,c=a.duration;if(i&&c&&Ls(u)){for(u=0,c=a.responseEnd,l+=1;l<e.length;l++){var f=e[l],y=f.startTime;if(y>c)break;var x=f.transferSize,A=f.initiatorType;x&&Ls(A)&&(f=f.responseEnd,u+=x*(f<c?1:(c-y)/(f-y)))}if(--l,n+=8*(i+u)/(a.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var wc=null,Zc=null;function ji(t){return t.nodeType===9?t:t.ownerDocument}function Ys(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xs(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Vc(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kc=null;function v1(){var t=window.event;return t&&t.type==="popstate"?t===Kc?!1:(Kc=t,!0):(Kc=null,!1)}var Gs=typeof setTimeout=="function"?setTimeout:void 0,S1=typeof clearTimeout=="function"?clearTimeout:void 0,Qs=typeof Promise=="function"?Promise:void 0,z1=typeof queueMicrotask=="function"?queueMicrotask:typeof Qs<"u"?function(t){return Qs.resolve(null).then(t).catch(A1)}:Gs;function A1(t){setTimeout(function(){throw t})}function be(t){return t==="head"}function ws(t,n){var e=n,l=0;do{var a=e.nextSibling;if(t.removeChild(e),a&&a.nodeType===8)if(e=a.data,e==="/$"||e==="/&"){if(l===0){t.removeChild(a),jl(n);return}l--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")l++;else if(e==="html")ma(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,ma(e);for(var i=e.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Rl]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=u}}else e==="body"&&ma(t.ownerDocument.body);e=a}while(e);jl(n)}function Zs(t,n){var e=t;t=0;do{var l=e.nextSibling;if(e.nodeType===1?n?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(n?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),l&&l.nodeType===8)if(e=l.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=l}while(e)}function Jc(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var e=n;switch(n=n.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Jc(e),Ii(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function q1(t,n,e,l){for(;t.nodeType===1;){var a=e;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Rl])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Sn(t.nextSibling),t===null)break}return null}function E1(t,n,e){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Sn(t.nextSibling),t===null))return null;return t}function Vs(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Sn(t.nextSibling),t===null))return null;return t}function kc(t){return t.data==="$?"||t.data==="$~"}function Wc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function O1(t,n){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||e.readyState!=="loading")n();else{var l=function(){n(),e.removeEventListener("DOMContentLoaded",l)};e.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Sn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var $c=null;function Ks(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(n===0)return Sn(t.nextSibling);n--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||n++}t=t.nextSibling}return null}function Js(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(n===0)return t;n--}else e!=="/$"&&e!=="/&"||n++}t=t.previousSibling}return null}function ks(t,n,e){switch(n=ji(e),t){case"html":if(t=n.documentElement,!t)throw Error(h(452));return t;case"head":if(t=n.head,!t)throw Error(h(453));return t;case"body":if(t=n.body,!t)throw Error(h(454));return t;default:throw Error(h(451))}}function ma(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ii(t)}var zn=new Map,Ws=new Set;function _i(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var In=_.d;_.d={f:T1,r:j1,D:_1,C:U1,L:M1,m:D1,X:N1,S:R1,M:B1};function T1(){var t=In.f(),n=vi();return t||n}function j1(t){var n=Je(t);n!==null&&n.tag===5&&n.type==="form"?so(n):In.r(t)}var El=typeof document>"u"?null:document;function $s(t,n,e){var l=El;if(l&&typeof n=="string"&&n){var a=hn(n);a='link[rel="'+t+'"][href="'+a+'"]',typeof e=="string"&&(a+='[crossorigin="'+e+'"]'),Ws.has(a)||(Ws.add(a),t={rel:t,crossOrigin:e,href:n},l.querySelector(a)===null&&(n=l.createElement("link"),Yt(n,"link",t),Rt(n),l.head.appendChild(n)))}}function _1(t){In.D(t),$s("dns-prefetch",t,null)}function U1(t,n){In.C(t,n),$s("preconnect",t,n)}function M1(t,n,e){In.L(t,n,e);var l=El;if(l&&t&&n){var a='link[rel="preload"][as="'+hn(n)+'"]';n==="image"&&e&&e.imageSrcSet?(a+='[imagesrcset="'+hn(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(a+='[imagesizes="'+hn(e.imageSizes)+'"]')):a+='[href="'+hn(t)+'"]';var i=a;switch(n){case"style":i=Ol(t);break;case"script":i=Tl(t)}zn.has(i)||(t=j({rel:"preload",href:n==="image"&&e&&e.imageSrcSet?void 0:t,as:n},e),zn.set(i,t),l.querySelector(a)!==null||n==="style"&&l.querySelector(ya(i))||n==="script"&&l.querySelector(ga(i))||(n=l.createElement("link"),Yt(n,"link",t),Rt(n),l.head.appendChild(n)))}}function D1(t,n){In.m(t,n);var e=El;if(e&&t){var l=n&&typeof n.as=="string"?n.as:"script",a='link[rel="modulepreload"][as="'+hn(l)+'"][href="'+hn(t)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Tl(t)}if(!zn.has(i)&&(t=j({rel:"modulepreload",href:t},n),zn.set(i,t),e.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(ga(i)))return}l=e.createElement("link"),Yt(l,"link",t),Rt(l),e.head.appendChild(l)}}}function R1(t,n,e){In.S(t,n,e);var l=El;if(l&&t){var a=ke(l).hoistableStyles,i=Ol(t);n=n||"default";var u=a.get(i);if(!u){var c={loading:0,preload:null};if(u=l.querySelector(ya(i)))c.loading=5;else{t=j({rel:"stylesheet",href:t,"data-precedence":n},e),(e=zn.get(i))&&Fc(t,e);var f=u=l.createElement("link");Rt(f),Yt(f,"link",t),f._p=new Promise(function(y,x){f.onload=y,f.onerror=x}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ui(u,n,l)}u={type:"stylesheet",instance:u,count:1,state:c},a.set(i,u)}}}function N1(t,n){In.X(t,n);var e=El;if(e&&t){var l=ke(e).hoistableScripts,a=Tl(t),i=l.get(a);i||(i=e.querySelector(ga(a)),i||(t=j({src:t,async:!0},n),(n=zn.get(a))&&Ic(t,n),i=e.createElement("script"),Rt(i),Yt(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function B1(t,n){In.M(t,n);var e=El;if(e&&t){var l=ke(e).hoistableScripts,a=Tl(t),i=l.get(a);i||(i=e.querySelector(ga(a)),i||(t=j({src:t,async:!0,type:"module"},n),(n=zn.get(a))&&Ic(t,n),i=e.createElement("script"),Rt(i),Yt(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function Fs(t,n,e,l){var a=(a=W.current)?_i(a):null;if(!a)throw Error(h(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(n=Ol(e.href),e=ke(a).hoistableStyles,l=e.get(n),l||(l={type:"style",instance:null,count:0,state:null},e.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Ol(e.href);var i=ke(a).hoistableStyles,u=i.get(t);if(u||(a=a.ownerDocument||a,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=a.querySelector(ya(t)))&&!i._p&&(u.instance=i,u.state.loading=5),zn.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},zn.set(t,e),i||C1(a,t,e,u.state))),n&&l===null)throw Error(h(528,""));return u}if(n&&l!==null)throw Error(h(529,""));return null;case"script":return n=e.async,e=e.src,typeof e=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Tl(e),e=ke(a).hoistableScripts,l=e.get(n),l||(l={type:"script",instance:null,count:0,state:null},e.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,t))}}function Ol(t){return'href="'+hn(t)+'"'}function ya(t){return'link[rel="stylesheet"]['+t+"]"}function Is(t){return j({},t,{"data-precedence":t.precedence,precedence:null})}function C1(t,n,e,l){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=t.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Yt(n,"link",e),Rt(n),t.head.appendChild(n))}function Tl(t){return'[src="'+hn(t)+'"]'}function ga(t){return"script[async]"+t}function Ps(t,n,e){if(n.count++,n.instance===null)switch(n.type){case"style":var l=t.querySelector('style[data-href~="'+hn(e.href)+'"]');if(l)return n.instance=l,Rt(l),l;var a=j({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Rt(l),Yt(l,"style",a),Ui(l,e.precedence,t),n.instance=l;case"stylesheet":a=Ol(e.href);var i=t.querySelector(ya(a));if(i)return n.state.loading|=4,n.instance=i,Rt(i),i;l=Is(e),(a=zn.get(a))&&Fc(l,a),i=(t.ownerDocument||t).createElement("link"),Rt(i);var u=i;return u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),Yt(i,"link",l),n.state.loading|=4,Ui(i,e.precedence,t),n.instance=i;case"script":return i=Tl(e.src),(a=t.querySelector(ga(i)))?(n.instance=a,Rt(a),a):(l=e,(a=zn.get(i))&&(l=j({},e),Ic(l,a)),t=t.ownerDocument||t,a=t.createElement("script"),Rt(a),Yt(a,"link",l),t.head.appendChild(a),n.instance=a);case"void":return null;default:throw Error(h(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,Ui(l,e.precedence,t));return n.instance}function Ui(t,n,e){for(var l=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,u=0;u<l.length;u++){var c=l[u];if(c.dataset.precedence===n)i=c;else if(i!==a)break}i?i.parentNode.insertBefore(t,i.nextSibling):(n=e.nodeType===9?e.head:e,n.insertBefore(t,n.firstChild))}function Fc(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ic(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Mi=null;function td(t,n,e){if(Mi===null){var l=new Map,a=Mi=new Map;a.set(e,l)}else a=Mi,l=a.get(e),l||(l=new Map,a.set(e,l));if(l.has(t))return l;for(l.set(t,null),e=e.getElementsByTagName(t),a=0;a<e.length;a++){var i=e[a];if(!(i[Rl]||i[Bt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(n)||"";u=t+u;var c=l.get(u);c?c.push(i):l.set(u,[i])}}return l}function nd(t,n,e){t=t.ownerDocument||t,t.head.insertBefore(e,n==="title"?t.querySelector("head > title"):null)}function H1(t,n,e){if(e===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ed(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function L1(t,n,e,l){if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var a=Ol(l.href),i=n.querySelector(ya(a));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Di.bind(t),n.then(t,t)),e.state.loading|=4,e.instance=i,Rt(i);return}i=n.ownerDocument||n,l=Is(l),(a=zn.get(a))&&Fc(l,a),i=i.createElement("link"),Rt(i);var u=i;u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),Yt(i,"link",l),e.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,n),(n=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=Di.bind(t),n.addEventListener("load",e),n.addEventListener("error",e))}}var Pc=0;function Y1(t,n){return t.stylesheets&&t.count===0&&Ni(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var l=setTimeout(function(){if(t.stylesheets&&Ni(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+n);0<t.imgBytes&&Pc===0&&(Pc=62500*x1());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ni(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Pc?50:800)+n);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function Di(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ni(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ri=null;function Ni(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ri=new Map,n.forEach(X1,t),Ri=null,Di.call(t))}function X1(t,n){if(!(n.state.loading&4)){var e=Ri.get(t);if(e)var l=e.get(null);else{e=new Map,Ri.set(t,e);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var u=a[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(e.set(u.dataset.precedence,u),l=u)}l&&e.set(null,l)}a=n.instance,u=a.getAttribute("data-precedence"),i=e.get(u)||l,i===l&&e.set(null,a),e.set(u,a),this.count++,l=Di.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),n.state.loading|=4}}var ba={$$typeof:zt,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function G1(t,n,e,l,a,i,u,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.hiddenUpdates=ki(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function ld(t,n,e,l,a,i,u,c,f,y,x,A){return t=new G1(t,n,e,u,f,y,x,A,c),n=1,i===!0&&(n|=24),i=un(3,null,null,n),t.current=i,i.stateNode=t,n=Du(),n.refCount++,t.pooledCache=n,n.refCount++,i.memoizedState={element:l,isDehydrated:e,cache:n},Cu(i),t}function ad(t){return t?(t=al,t):al}function id(t,n,e,l,a,i){a=ad(a),l.context===null?l.context=a:l.pendingContext=a,l=ce(n),l.payload={element:e},i=i===void 0?null:i,i!==null&&(l.callback=i),e=fe(t,l,n),e!==null&&(It(e,t,n),$l(e,t,n))}function ud(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<n?e:n}}function tf(t,n){ud(t,n),(t=t.alternate)&&ud(t,n)}function cd(t){if(t.tag===13||t.tag===31){var n=Me(t,67108864);n!==null&&It(n,t,67108864),tf(t,67108864)}}function fd(t){if(t.tag===13||t.tag===31){var n=sn();n=Wi(n);var e=Me(t,n);e!==null&&It(e,t,n),tf(t,n)}}var Bi=!0;function Q1(t,n,e,l){var a=S.T;S.T=null;var i=_.p;try{_.p=2,nf(t,n,e,l)}finally{_.p=i,S.T=a}}function w1(t,n,e,l){var a=S.T;S.T=null;var i=_.p;try{_.p=8,nf(t,n,e,l)}finally{_.p=i,S.T=a}}function nf(t,n,e,l){if(Bi){var a=ef(l);if(a===null)Gc(t,n,l,Ci,e),od(t,l);else if(V1(a,t,n,e,l))l.stopPropagation();else if(od(t,l),n&4&&-1<Z1.indexOf(t)){for(;a!==null;){var i=Je(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Oe(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var f=1<<31-ln(u);c.entanglements[1]|=f,u&=~f}Dn(i),(ct&6)===0&&(bi=nn()+500,da(0))}}break;case 31:case 13:c=Me(i,2),c!==null&&It(c,i,2),vi(),tf(i,2)}if(i=ef(l),i===null&&Gc(t,n,l,Ci,e),i===a)break;a=i}a!==null&&l.stopPropagation()}else Gc(t,n,l,null,e)}}function ef(t){return t=au(t),lf(t)}var Ci=null;function lf(t){if(Ci=null,t=Ke(t),t!==null){var n=G(t);if(n===null)t=null;else{var e=n.tag;if(e===13){if(t=L(n),t!==null)return t;t=null}else if(e===31){if(t=C(n),t!==null)return t;t=null}else if(e===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Ci=t,null}function rd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_d()){case yf:return 2;case gf:return 8;case Ea:case Ud:return 32;case bf:return 268435456;default:return 32}default:return 32}}var af=!1,xe=null,ve=null,Se=null,xa=new Map,va=new Map,ze=[],Z1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function od(t,n){switch(t){case"focusin":case"focusout":xe=null;break;case"dragenter":case"dragleave":ve=null;break;case"mouseover":case"mouseout":Se=null;break;case"pointerover":case"pointerout":xa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(n.pointerId)}}function Sa(t,n,e,l,a,i){return t===null||t.nativeEvent!==i?(t={blockedOn:n,domEventName:e,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},n!==null&&(n=Je(n),n!==null&&cd(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),t)}function V1(t,n,e,l,a){switch(n){case"focusin":return xe=Sa(xe,t,n,e,l,a),!0;case"dragenter":return ve=Sa(ve,t,n,e,l,a),!0;case"mouseover":return Se=Sa(Se,t,n,e,l,a),!0;case"pointerover":var i=a.pointerId;return xa.set(i,Sa(xa.get(i)||null,t,n,e,l,a)),!0;case"gotpointercapture":return i=a.pointerId,va.set(i,Sa(va.get(i)||null,t,n,e,l,a)),!0}return!1}function sd(t){var n=Ke(t.target);if(n!==null){var e=G(n);if(e!==null){if(n=e.tag,n===13){if(n=L(e),n!==null){t.blockedOn=n,qf(t.priority,function(){fd(e)});return}}else if(n===31){if(n=C(e),n!==null){t.blockedOn=n,qf(t.priority,function(){fd(e)});return}}else if(n===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hi(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var e=ef(t.nativeEvent);if(e===null){e=t.nativeEvent;var l=new e.constructor(e.type,e);lu=l,e.target.dispatchEvent(l),lu=null}else return n=Je(e),n!==null&&cd(n),t.blockedOn=e,!1;n.shift()}return!0}function dd(t,n,e){Hi(t)&&e.delete(n)}function K1(){af=!1,xe!==null&&Hi(xe)&&(xe=null),ve!==null&&Hi(ve)&&(ve=null),Se!==null&&Hi(Se)&&(Se=null),xa.forEach(dd),va.forEach(dd)}function Li(t,n){t.blockedOn===n&&(t.blockedOn=null,af||(af=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,K1)))}var Yi=null;function pd(t){Yi!==t&&(Yi=t,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){Yi===t&&(Yi=null);for(var n=0;n<t.length;n+=3){var e=t[n],l=t[n+1],a=t[n+2];if(typeof l!="function"){if(lf(l||e)===null)continue;break}var i=Je(e);i!==null&&(t.splice(n,3),n-=3,ec(i,{pending:!0,data:a,method:e.method,action:l},l,a))}}))}function jl(t){function n(f){return Li(f,t)}xe!==null&&Li(xe,t),ve!==null&&Li(ve,t),Se!==null&&Li(Se,t),xa.forEach(n),va.forEach(n);for(var e=0;e<ze.length;e++){var l=ze[e];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ze.length&&(e=ze[0],e.blockedOn===null);)sd(e),e.blockedOn===null&&ze.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(l=0;l<e.length;l+=3){var a=e[l],i=e[l+1],u=a[Kt]||null;if(typeof i=="function")u||pd(e);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(a=i,u=i[Kt]||null)c=u.formAction;else if(lf(a)!==null)continue}else c=u.action;typeof c=="function"?e[l+1]=c:(e.splice(l,3),l-=3),pd(e)}}}function hd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return a=u})},focusReset:"manual",scroll:"manual"})}function n(){a!==null&&(a(),a=null),l||setTimeout(e,20)}function e(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(e,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),a!==null&&(a(),a=null)}}}function uf(t){this._internalRoot=t}Xi.prototype.render=uf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(h(409));var e=n.current,l=sn();id(e,l,t,n,null,null)},Xi.prototype.unmount=uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;id(t.current,2,null,t,null,null),vi(),n[Ve]=null}};function Xi(t){this._internalRoot=t}Xi.prototype.unstable_scheduleHydration=function(t){if(t){var n=Af();t={blockedOn:null,target:t,priority:n};for(var e=0;e<ze.length&&n!==0&&n<ze[e].priority;e++);ze.splice(e,0,t),e===0&&sd(t)}};var md=Y.version;if(md!=="19.2.4")throw Error(h(527,md,"19.2.4"));_.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(h(188)):(t=Object.keys(t).join(","),Error(h(268,t)));return t=q(n),t=t!==null?k(t):null,t=t===null?null:t.stateNode,t};var J1={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{Ul=Gi.inject(J1),en=Gi}catch{}}return Aa.createRoot=function(t,n){if(!T(t))throw Error(h(299));var e=!1,l="",a=zo,i=Ao,u=qo;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=ld(t,1,!1,null,null,e,l,null,a,i,u,hd),t[Ve]=n.current,Xc(t),new uf(n)},Aa.hydrateRoot=function(t,n,e){if(!T(t))throw Error(h(299));var l=!1,a="",i=zo,u=Ao,c=qo,f=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(f=e.formState)),n=ld(t,1,!0,n,e??null,l,a,f,i,u,c,hd),n.context=ad(null),e=n.current,l=sn(),l=Wi(l),a=ce(l),a.callback=null,fe(e,a,l),e=l,n.current.lanes=e,Dl(n,e),Dn(n),t[Ve]=n.current,Xc(t),new Xi(n)},Aa.version="19.2.4",Aa}var Ed;function lp(){if(Ed)return rf.exports;Ed=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(Y){console.error(Y)}}return v(),rf.exports=ep(),rf.exports}var ap=lp();const s={bg:"#05030f",surface:"#0a0820",card:"#0f0d28",border:"#2a1f5e",accent:"#a78bfa",accent2:"#f472b6",accent3:"#34d399",warn:"#fbbf24",danger:"#f43f5e",text:"#e9e4ff",muted:"#6b5fa8",soft:"#a394d4"},ip=()=>{const v=Array.from({length:130},(Y,M)=>({id:M,x:Math.random()*100,y:Math.random()*100,size:Math.random()*2.5+.5,opacity:Math.random()*.8+.2,delay:Math.random()*4,duration:Math.random()*3+2}));return d.jsxs("div",{style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none",overflow:"hidden"},children:[d.jsx("div",{style:{position:"absolute",inset:0,background:"radial-gradient(ellipse at 20% 30%, #1a0a3d 0%, #0a0520 40%, #05030f 100%)"}}),d.jsx("div",{style:{position:"absolute",top:"-10%",left:"-10%",width:"55%",height:"55%",background:"radial-gradient(ellipse, rgba(120,60,200,0.18) 0%, transparent 70%)",filter:"blur(40px)",animation:"nebulaDrift 20s ease-in-out infinite alternate"}}),d.jsx("div",{style:{position:"absolute",bottom:"-10%",right:"-10%",width:"60%",height:"60%",background:"radial-gradient(ellipse, rgba(60,30,160,0.22) 0%, transparent 70%)",filter:"blur(50px)",animation:"nebulaDrift 25s ease-in-out infinite alternate-reverse"}}),d.jsx("div",{style:{position:"absolute",top:"40%",right:"20%",width:"35%",height:"35%",background:"radial-gradient(ellipse, rgba(200,80,180,0.10) 0%, transparent 70%)",filter:"blur(35px)",animation:"nebulaDrift 18s ease-in-out infinite alternate"}}),v.map(Y=>d.jsx("div",{style:{position:"absolute",left:`${Y.x}%`,top:`${Y.y}%`,width:Y.size,height:Y.size,borderRadius:"50%",background:Y.size>2?"#c4b5fd":"#e9e4ff",opacity:Y.opacity,animation:`twinkle ${Y.duration}s ${Y.delay}s ease-in-out infinite alternate`,boxShadow:Y.size>2?`0 0 ${Y.size*2}px rgba(196,181,253,0.6)`:"none"}},Y.id)),d.jsx("style",{children:`
        @keyframes twinkle { from { opacity:0.2; transform:scale(0.8); } to { opacity:1; transform:scale(1.2); } }
        @keyframes nebulaDrift { from { transform:translate(0,0) rotate(0deg); } to { transform:translate(30px,20px) rotate(5deg); } }
        @keyframes lofiPulse { 0%,100% { box-shadow:0 0 0 0 rgba(167,139,250,0.4),0 0 20px rgba(167,139,250,0.2); } 50% { box-shadow:0 0 0 8px rgba(167,139,250,0),0 0 30px rgba(167,139,250,0.4); } }
        @keyframes barDance1 { 0%,100%{height:6px} 50%{height:20px} }
        @keyframes barDance2 { 0%,100%{height:14px} 50%{height:6px} }
        @keyframes barDance3 { 0%,100%{height:10px} 25%{height:20px} 75%{height:4px} }
        @keyframes barDance4 { 0%,100%{height:8px} 40%{height:18px} }
      `})]})},up=()=>{const[v,Y]=Pt.useState(!1),M=Pt.useRef(null);Pt.useEffect(()=>{const T=new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3");return T.loop=!0,T.volume=.5,M.current=T,()=>{T.pause(),T.src=""}},[]);const h=()=>{const T=M.current;T&&(v?(T.pause(),Y(!1)):(T.play().catch(()=>{}),Y(!0)))};return d.jsxs("div",{onClick:h,title:v?"עצור מוזיקה":"הפעל Lo-Fi",style:{position:"fixed",bottom:28,left:28,zIndex:9999,width:56,height:56,borderRadius:"50%",background:v?"linear-gradient(135deg,#7c3aed,#a855f7)":"linear-gradient(135deg,#1a1040,#2d1b69)",border:`2px solid ${v?"#a78bfa":"#4c3a8a"}`,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",animation:v?"lofiPulse 2s ease-in-out infinite":"none",transition:"all 0.3s ease",flexDirection:"column",gap:3},children:[v?d.jsx("div",{style:{display:"flex",gap:3,alignItems:"flex-end",height:22},children:["barDance1 0.8s ease-in-out infinite","barDance2 0.9s 0.1s ease-in-out infinite","barDance3 0.7s 0.2s ease-in-out infinite","barDance4 1s 0.05s ease-in-out infinite"].map((T,G)=>d.jsx("div",{style:{width:4,borderRadius:2,background:"linear-gradient(to top,#f472b6,#c084fc)",animation:T}},G))}):d.jsxs("div",{style:{width:28,height:28,borderRadius:"50%",background:"linear-gradient(135deg,#4c1d95,#6d28d9)",border:"2px solid #7c3aed",display:"flex",alignItems:"center",justifyContent:"center",position:"relative"},children:[d.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"#a78bfa"}}),d.jsx("div",{style:{position:"absolute",inset:3,borderRadius:"50%",border:"1px solid rgba(167,139,250,0.3)"}})]}),d.jsx("div",{style:{fontSize:8,color:v?"#e9d5ff":"#7c6ab0",fontWeight:700,letterSpacing:.5},children:v?"LO-FI":"♪"})]})},Rn=[{id:1,title:"מודל חישוב בסיסי",icon:"⚙️",hours:12,syllabus:"פרק 1 – 12 שעות",goals:["להכיר את מודל החישוב של משתנים ושינוי ערכים","להבין את האלגוריתם הסדרתי הפשוט","להכיר טיפוסי נתונים: int, float, double, char, enum","לדעת להשתמש באופרטורים חשבוניים, לוגיים ועל ביטים","להשתמש בפונקציות מתמטיות מספריית math.h","להכיר המרת טיפוסים (casting) ו-sizeof"],theory:`## מהו משתנה?

**משתנה** הוא תא זיכרון בעל שם, שבו ניתן לאחסן ערך. לכל משתנה יש שלושה מאפיינים:
- **שם** – המזהה שבו מתייחסים למשתנה בקוד
- **טיפוס** – אילו סוגי ערכים ניתן לאחסן בו
- **ערך** – המידע המאוחסן בתא הזיכרון

בשפת C חייבים **להגדיר** משתנה לפני השימוש בו:

\`\`\`c
int age = 17;       // משתנה שלם עם ערך ראשוני 17
float grade = 95.5; // משתנה ממשי
char letter = 'A';  // תו בודד
\`\`\`

---

## טיפוסי נתונים

| טיפוס | גודל (בתים) | תחום | דוגמה |
|--------|------------|-------|--------|
| char | 1 | -128 עד 127 | 'A', '3' |
| int | 4 | ~-2 מיליארד עד ~+2 מיליארד | 42, -7 |
| unsigned int | 4 | 0 עד ~4 מיליארד | 100 |
| long | 8 | ±9.2×10¹⁸ | 9999999999L |
| float | 4 | ~7 ספרות משמעותיות | 3.14f |
| double | 8 | ~15 ספרות משמעותיות | 3.14159265 |

**enum** – טיפוס מנוי, מאפשר לתת שמות לערכים שלמים:
\`\`\`c
enum Day { MON=1, TUE, WED, THU, FRI, SAT, SUN };
enum Day today = WED; // today == 3
\`\`\`

**typedef** – יצירת שם חלופי לטיפוס:
\`\`\`c
typedef unsigned int uint;
typedef float Real;
uint count = 0;
Real pi = 3.14159f;
\`\`\`

---

## אופרטורים חשבוניים

| אופרטור | משמעות | דוגמה | תוצאה |
|---------|--------|--------|--------|
| + | חיבור | 5 + 3 | 8 |
| - | חיסור | 5 - 3 | 2 |
| * | כפל | 5 * 3 | 15 |
| / | חילוק | 7 / 2 | 3 (שלם!) |
| % | שארית | 7 % 2 | 1 |

**חשוב:** חילוק בין שני שלמים מחזיר שלם! 7/2 = 3 ולא 3.5.

---

## אופרטורים יונריים (unary)

| אופרטור | משמעות | דוגמה |
|---------|--------|--------|
| ++ (קידומי) | הוסף 1 לפני | ++x → x=x+1, החזר x החדש |
| ++ (סיומי) | הוסף 1 אחרי | x++ → החזר x הישן, אז x=x+1 |
| -- (קידומי) | הפחת 1 לפני | --x |
| -- (סיומי) | הפחת 1 אחרי | x-- |
| - | שלילה | -x |

\`\`\`c
int x = 5;
int a = x++;  // a=5, x=6 (קידום לאחר)
int b = ++x;  // x=7, b=7 (קידום לפני)
\`\`\`

---

## המרת טיפוסים (Casting)

C מבצעת המרות **מרומזות** (implicit) אוטומטית, ולעיתים נדרשות המרות **מפורשות** (explicit):

\`\`\`c
int a = 7, b = 2;

// המרה מרומזת – int→double
double x = a;  // x = 7.0

// המרה מפורשת – casting
double result = (double)a / b;  // = 3.5
// ללא casting: a/b = 3 (חילוק שלם)!

// המרה מ-double ל-int חותכת את החלק העשרוני
int y = (int)3.9;  // y = 3 (לא עיגול!)
\`\`\`

---

## אופרטורי הצבה מקוצרים

| קיצור | שקול ל |
|--------|--------|
| x += 5 | x = x + 5 |
| x -= 3 | x = x - 3 |
| x *= 2 | x = x * 2 |
| x /= 4 | x = x / 4 |
| x %= 3 | x = x % 3 |

---

## sizeof – גודל בזיכרון

האופרטור \`sizeof\` מחזיר את מספר הבתים שטיפוס תופס:
\`\`\`c
printf("%lu\\n", sizeof(int));    // 4
printf("%lu\\n", sizeof(double)); // 8
printf("%lu\\n", sizeof(char));   // 1
\`\`\`

---

## פונקציות מתמטיות (math.h)

\`\`\`c
#include <math.h>
// הידור: gcc prog.c -lm

sqrt(x)    // שורש ריבועי
pow(x, y)  // x בחזקת y
abs(x)     // ערך מוחלט (שלמים) – stdlib.h
fabs(x)    // ערך מוחלט (ממשיים)
ceil(x)    // עיגול למעלה
floor(x)   // עיגול למטה
log(x)     // לוגריתם טבעי
log10(x)   // לוגריתם בבסיס 10
\`\`\`

---

## מספרים אקראיים

\`\`\`c
#include <stdlib.h>
#include <time.h>

srand(time(NULL));           // זרע חד פעמי
int r = rand() % 100;       // מספר 0-99
int r2 = rand() % 100 + 1; // מספר 1-100
\`\`\``,code:`#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <time.h>

// הדגמת typedef ו-enum
typedef float Real;
enum Season { SPRING=1, SUMMER, FALL, WINTER };

int main() {
    // משתנים וטיפוסים
    int a = 10, b = 3;
    Real pi = 3.14159f;
    char grade = 'A';
    enum Season now = SUMMER;
    
    printf("=== אופרטורים חשבוניים ===\\n");
    printf("a=%d, b=%d\\n", a, b);
    printf("a+b = %d\\n", a + b);
    printf("a-b = %d\\n", a - b);
    printf("a*b = %d\\n", a * b);
    printf("a/b = %d (שלם!)\\n", a / b);
    printf("a%%b = %d (שארית)\\n", a % b);
    
    printf("\\n=== casting ===\\n");
    printf("(float)a/b = %.4f\\n", (float)a / b);
    printf("(int)pi = %d\\n", (int)pi);
    
    printf("\\n=== sizeof ===\\n");
    printf("sizeof(int) = %lu\\n", sizeof(int));
    printf("sizeof(double) = %lu\\n", sizeof(double));
    printf("sizeof(char) = %lu\\n", sizeof(char));
    
    printf("\\n=== פונקציות מתמטיות ===\\n");
    printf("sqrt(16) = %.1f\\n", sqrt(16));
    printf("pow(2,8) = %.0f\\n", pow(2,8));
    printf("ceil(3.2) = %.1f\\n", ceil(3.2));
    printf("floor(3.9) = %.1f\\n", floor(3.9));
    printf("fabs(-5.7) = %.1f\\n", fabs(-5.7));
    
    printf("\\n=== אופרטורים יונריים ===\\n");
    int x = 5;
    int post = x++;
    printf("x++(קידום לאחר): post=%d, x=%d\\n", post, x);
    int pre = ++x;
    printf("++x(קידום לפני): pre=%d, x=%d\\n", pre, x);
    
    printf("\\n=== מספרים אקראיים ===\\n");
    srand(time(NULL));
    for (int i = 0; i < 5; i++)
        printf("%d ", rand() % 100);
    printf("\\n");
    
    printf("\\n=== enum ===\\n");
    printf("עונה = %d\\n", now); // 2
    
    return 0;
}`,traceTable:{headers:["שורה","a","b","פעולה","תוצאה"],rows:[["int a=10, b=3","10","3","הגדרה","—"],["a + b","10","3","חיבור","13"],["a - b","10","3","חיסור","7"],["a * b","10","3","כפל","30"],["a / b","10","3","חילוק שלם","3 (לא 3.33!)"],["a % b","10","3","שארית","1"],["(float)a/b","10","3","casting → חילוק","3.3333"],["x=5; x++","—","—","קידום לאחר","מחזיר 5, ואז x=6"],["++x (x=6)","—","—","קידום לפני","x=7, מחזיר 7"]]},questions:[{q:"מה ההבדל בין int ל-double?",a:"int שומר מספרים שלמים בלבד (4 בתים), double שומר מספרים עשרוניים בדיוק גבוה (8 בתים). חילוק int/int מחזיר int."},{q:"מה ההבדל בין x++ ל-++x?",a:"x++ (postfix) מחזיר את הערך המקורי ואז מגדיל. ++x (prefix) מגדיל קודם ואז מחזיר. בהשמה: int a=x++ נותן a=ערן_ישן; int b=++x נותן b=ערך_חדש."},{q:"למה 7/2 שווה 3 ולא 3.5 בשפת C?",a:"כי שני האופרנדים הם int, לכן C מבצעת חילוק שלם ומשמיטה את השארית. כדי לקבל 3.5 צריך: (float)7/2 או 7.0/2."},{q:"מה עושה sizeof?",a:"מחזיר את מספר הבתים שהטיפוס או המשתנה תופס בזיכרון. שימושי לקוד נייד ולהקצאת זיכרון."},{q:"מה ההבדל בין ceil ל-floor?",a:"ceil עיגול למעלה (ceil(3.2)=4), floor עיגול למטה (floor(3.9)=3). שניהם מחזירים double."},{q:"מה תפקיד srand(time(NULL))?",a:"מאתחל את מחולל המספרים האקראיים עם זרע המבוסס על השעה הנוכחית. ללא זה, rand() יחזיר את אותה סדרת מספרים בכל הרצה."}],exercises:["כתוב תכנית שמחשבת היקף ושטח עיגול לפי רדיוס שמוגדר בקוד (π ≈ 3.14159).","כתוב תכנית שמחשבת מרחק בין שתי נקודות (x1,y1) ו-(x2,y2) באמצעות sqrt.","הגדר enum עם ימי השבוע (SUN=0 עד SAT=6). הדפס את הערך המספרי של יום שלישי.","כתוב תכנית שמחשבת את שורשי המשוואה הריבועית ax²+bx+c=0. השתמש ב-sqrt ו-fabs.","הדפס את גדלי כל טיפוסי הנתונים הבסיסיים באמצעות sizeof.","כתוב תכנית שמייצרת 10 מספרים אקראיים בתחום 1-100 ומחשבת את ממוצעם."],challenge:"כתוב מחשבון מדעי: קבל שני מספרים ואופרטור (+,-,*,/,%) מהמשתמש. חשב גם sqrt של כל אחד מהם, והדפס תוצאות בפורמט מסודר.",quiz:[{q:'מה יהיה הפלט של: int x=7, y=2; printf("%d", x/y);',options:["3.5","3","4","שגיאת קומפילציה"],correct:1,explanation:"חילוק של שני int מחזיר int – השארית נחתכת. 7/2=3."},{q:"מה ההבדל בין float ל-double?",options:["אין הבדל","float = 4 בתים (7 ספרות), double = 8 בתים (15 ספרות)","double = 4 בתים, float = 8 בתים","float לא קיים ב-C"],correct:1,explanation:"float תופס 4 בתים ומדויק עד ~7 ספרות, double תופס 8 בתים ומדויק עד ~15 ספרות."},{q:'מה הפלט של: int x=5; printf("%d", x++);',options:["6","5","שגיאה","4"],correct:1,explanation:"x++ הוא postfix – קודם מחזיר את הערך הנוכחי (5) ואז מגדיל ל-6."},{q:"מה מחזיר sizeof(double)?",options:["4","2","8","16"],correct:2,explanation:"double תופס 8 בתים בזיכרון."},{q:'מה הפלט של: printf("%d", 10 % 3);',options:["3","1","0","3.33"],correct:1,explanation:"% מחשב שארית: 10 = 3×3 + 1, לכן השארית היא 1."},{q:"כדי לחשב שורש ריבועי ב-C, משתמשים ב:",options:["square(x)","sqrt(x) מ-math.h","Math.sqrt(x)","root(x)"],correct:1,explanation:"sqrt(x) היא פונקציה מ-math.h. צריך גם לקמפל עם -lm."},{q:'מה הפלט של: int x=5; int a=++x; printf("%d %d", a, x);',options:["5 6","6 6","5 5","6 5"],correct:1,explanation:"++x הוא prefix – קודם מגדיל x ל-6, ואז מציב את הערך החדש ב-a. לכן a=6, x=6."},{q:'מה יהיה הפלט: int a=7, b=2; double r=(double)a/b; printf("%.1f", r);',options:["3.0","3.5","4.0","0.0"],correct:1,explanation:"casting של a ל-double לפני החילוק גורם לחילוק ממשי: 7.0/2=3.5."},{q:"מה ערכו של: (int)3.9?",options:["4","3","3.9","שגיאה"],correct:1,explanation:"casting מ-double ל-int חותך את החלק העשרוני (לא מעגל). 3.9 → 3."},{q:"מה ייצוג enum Day { MON=1, TUE, WED }? ערך WED הוא:",options:["0","1","2","3"],correct:3,explanation:"MON=1, TUE=2 (MON+1), WED=3 (TUE+1). enum מקצה ערכים עוקבים אוטומטית."},{q:'מה הפלט של: printf("%d", 2 + 3 * 4);',options:["20","14","24","9"],correct:1,explanation:"כפל מחושב לפני חיבור (סדר עדיפויות). 3*4=12, ואז 2+12=14."},{q:"מה גודל char בבתים?",options:["2","4","1","8"],correct:2,explanation:"char תמיד תופס בית אחד (1 byte) בשפת C."},{q:'מה הפלט: int x=10; x += 5; x *= 2; printf("%d", x);',options:["25","30","20","35"],correct:1,explanation:"x=10, x+=5 → x=15, x*=2 → x=30."},{q:"מה מחזירה rand() % 10?",options:["מספר 0-10","מספר 0-9","מספר 1-10","תמיד אותו מספר"],correct:1,explanation:"% 10 מחזיר שארית מ-0 עד 9 (10 אפשרויות). כדי לקבל 1-10 נוסיף +1."},{q:'מה הפלט של: printf("%d", sizeof(int) * 2);',options:["4","8","2","16"],correct:1,explanation:"sizeof(int)=4, ו-4*2=8."},{q:'מה הפלט: float x=1.0f/3.0f; printf("%.2f", x);',options:["0.33","0.00","1.00","שגיאה"],correct:0,explanation:"1.0f/3.0f=0.3333... ועם %.2f מקבלים עיגול לשתי ספרות: 0.33."},{q:"מה תפקיד typedef?",options:["מגדיר פונקציה חדשה","יוצר שם חלופי לטיפוס קיים","מייבא ספרייה","מגדיר קבוע"],correct:1,explanation:"typedef unsigned int uint; יוצר שם uint שמתנהג בדיוק כמו unsigned int."},{q:'מה הפלט: int x=0; printf("%d", !x);',options:["0","1","-1","שגיאה"],correct:1,explanation:"! היא NOT לוגי. 0 נחשב שקר, !0 = 1 (אמת)."}]},{id:2,title:"קלט / פלט",icon:"💬",hours:6,syllabus:"פרק 2 – 6 שעות",goals:["להשתמש ב-printf לפלט מעוצב","להשתמש ב-scanf לקריאת קלט","לקרוא ולכתוב תווים בודדים (getchar/putchar)","להכיר את כל מציינות הטיפוס (%d, %f, %c, %s...)","לדעת לעצב פלט: רוחב שדה, עיגול, יישור","להבין ניתוב קלט/פלט"],theory:`## printf – פלט מעוצב

\`printf\` מדפיסה מחרוזת פורמט עם משתנים. כל \`%\` מציין מקום להכנסת ערך:

\`\`\`c
printf("שם: %s, גיל: %d, ממוצע: %.2f\\n", name, age, avg);
\`\`\`

**מציינות טיפוס עיקריות:**

| מציין | טיפוס | דוגמה | פלט |
|--------|--------|--------|-----|
| %d | int (עשרוני) | printf("%d", 42) | 42 |
| %i | int | printf("%i", 42) | 42 |
| %u | unsigned int | printf("%u", 42) | 42 |
| %o | int (אוקטלי) | printf("%o", 8) | 10 |
| %x / %X | int (hex) | printf("%x", 255) | ff / FF |
| %f | float/double | printf("%f", 3.14) | 3.140000 |
| %e / %E | מעריכי | printf("%e", 12345.0) | 1.234500e+04 |
| %.2f | עם 2 ספרות | printf("%.2f", 3.14159) | 3.14 |
| %c | char | printf("%c", 'A') | A |
| %s | string | printf("%s", "hello") | hello |
| %p | מצביע | printf("%p", &x) | 0x7fff... |

---

## עיצוב שדה ב-printf

\`\`\`c
printf("%10d", 42);    // "        42" (רוחב 10, ימין)
printf("%-10d", 42);   // "42        " (רוחב 10, שמאל)
printf("%010d", 42);   // "0000000042" (ממולא ב-0)
printf("%+d", 42);     // "+42" (הצג סימן תמיד)
printf("%8.3f", 3.14); // "   3.140" (רוחב 8, 3 ספרות)
\`\`\`

---

## scanf – קלט לפי פורמט

\`scanf\` קוראת קלט ממשתמש ומכניסה אותו למשתנים:

\`\`\`c
int age;
float height;
scanf("%d", &age);    // & כי scanf צריך כתובת!
scanf("%f", &height);
\`\`\`

**חשוב מאוד:** בלי & תהיה שגיאת זיכרון (segfault)!

מספר ערכים בקריאה אחת:
\`\`\`c
int x, y;
scanf("%d %d", &x, &y);  // קרא שני מספרים
\`\`\`

**ערך החזרה של scanf** – מספר הפריטים שנקראו בהצלחה:
\`\`\`c
if (scanf("%d", &n) != 1)
    printf("קלט לא חוקי!\\n");
\`\`\`

---

## קלט/פלט של תווים

\`\`\`c
#include <stdio.h>

char c = getchar();  // קרא תו אחד
putchar(c);          // הדפס תו אחד

// קריאת תו עם scanf
char ch;
scanf(" %c", &ch);   // הרווח לפני %c מדלג על whitespace
\`\`\`

---

## ניתוב קלט/פלט

ב-Unix/Linux ניתן לנתב קלט/פלט מ/אל קבצים:

\`\`\`bash
./program < input.txt     # קלט מקובץ
./program > output.txt    # פלט לקובץ
./program < in.txt > out.txt  # גם וגם
\`\`\`

---

## תווי בריחה נפוצים

| רצף | משמעות |
|-----|--------|
| \\n | שורה חדשה |
| \\t | טאב |
| \\\\ | קו נטוי אחורה |
| \\" | מרכאות כפולות |
| \\0 | תו null |
| \\r | החזרת גרר |`,code:`#include <stdio.h>

int main() {
    // הדגמת מציינות טיפוס
    int n = 255;
    printf("עשרוני: %d\\n", n);
    printf("אוקטלי: %o\\n", n);
    printf("הקסדצימלי: %x\\n", n);    // ff
    printf("הקסדצימלי גדול: %X\\n", n); // FF
    
    // עיצוב שדה
    printf("\\n=== עיצוב שדה ===\\n");
    printf("[%10d]\\n", 42);    // ימין
    printf("[%-10d]\\n", 42);   // שמאל
    printf("[%010d]\\n", 42);   // אפסים
    printf("[%8.3f]\\n", 3.14159); // ממשי
    printf("[%e]\\n", 12345.0);    // מעריכי
    
    // קלט
    int age;
    float height;
    char name[50];
    
    printf("\\n=== קלט ===\\n");
    printf("שם: ");
    scanf("%s", name);
    printf("גיל: ");
    scanf("%d", &age);
    printf("גובה (מטר): ");
    scanf("%f", &height);
    
    printf("\\n=== סיכום ===\\n");
    printf("%-15s %5d %8.2f מטר\\n", name, age, height);
    
    // תווים
    printf("\\nהכנס תו: ");
    char c;
    scanf(" %c", &c);
    printf("קיבלתי: '%c' (ASCII=%d)\\n", c, c);
    
    // בדיקת ערך חזרה של scanf
    int x;
    printf("\\nהכנס מספר שלם: ");
    if (scanf("%d", &x) == 1)
        printf("קיבלתי: %d\\n", x);
    else
        printf("שגיאה בקלט!\\n");
    
    return 0;
}`,traceTable:{headers:["פורמט","ערך","פלט מתקבל","הערה"],rows:[["%d","42","42","עשרוני רגיל"],["%o","255","377","אוקטלי"],["%x","255","ff","hex קטן"],["%X","255","FF","hex גדול"],["%f","3.14","3.140000","6 ספרות ברירת מחדל"],["%.2f","3.14159","3.14","2 ספרות אחרי הנקודה"],["%10d","42","        42","ימין, רוחב 10"],["%-10d","42","42        ","שמאל, רוחב 10"],["%e","12345.0","1.234500e+04","מדעי"]]},questions:[{q:"למה חייבים & לפני משתנה ב-scanf?",a:"scanf צריך לדעת לאן בזיכרון לכתוב את הנתון שנקרא. & מחזיר את כתובת הזיכרון של המשתנה. ללא & נשלח ערך המשתנה (שהוא זבל) כאילו היה כתובת, וזה גורם לשגיאת זיכרון."},{q:"מה ההבדל בין %f ל-%.2f ל-%8.3f?",a:"%f מדפיס 6 ספרות אחרי הנקודה. %.2f מדפיס בדיוק 2 ספרות. %8.3f מדפיס ברוחב שדה של 8, עם 3 ספרות אחרי הנקודה (מיושר ימינה)."},{q:"מה מחזיר scanf ולמה זה שימושי?",a:'scanf מחזיר את מספר הפריטים שנקראו בהצלחה. שימוש: if(scanf("%d",&x)!=1) לטיפול בקלט לא חוקי.'},{q:'למה כדאי לכתוב scanf(" %c", &c) עם רווח לפני %c?',a:"הרווח לפני %c גורם ל-scanf לדלג על whitespace (רווחים, טאבים, שורות חדשות) שנשארו מקריאה קודמת. ללא הרווח, %c עלול לקרוא את תו ה-newline שנשאר מה-Enter הקודם."}],exercises:["כתוב תכנית שמקבלת שם, ציון במתמטיקה וציון באנגלית ומדפיסה דוח מסודר בפורמט טבלאי.","כתוב תכנית שמדפיסה טבלת המרה בין מעלות צלזיוס (0,10,20,...,100) לפרנהייט.","קרא 4 מספרים שלמים בשורה אחת (scanf אחד) וחשב סכום ומכפלה.","כתוב תכנית שמדפיסה מספר שלם בשלושה בסיסים: עשרוני, אוקטלי והקסדצימלי.","קרא שני מספרים וכתוב פלט מיושר בעמודות (רוחב 10) כולל הסכום, ההפרש, המכפלה והמנה."],challenge:"כתוב תכנית שמקבלת ממוצעי 5 מקצועות ומדפיסה דוח ציונים מסודר עם ממוצע כולל, ציון מקסימלי ומינימלי, כשכל שדה מיושר בעמודות מסודרות.",quiz:[{q:"מה הפורמט להדפסת מספר ממשי עם בדיוק 3 ספרות אחרי הנקודה?",options:["%3f","%d.3","%.3f","%f(3)"],correct:2,explanation:"%.3f מגדיר 3 ספרות אחרי הנקודה העשרונית."},{q:'מה הפלט של: printf("%o", 8);',options:["8","10","0x8","1000"],correct:1,explanation:"%o מדפיס בבסיס 8 (אוקטלי). 8 בבסיס 10 = 10 בבסיס 8."},{q:'מה הפלט של: printf("%X", 255);',options:["255","ff","FF","0xFF"],correct:2,explanation:"%X מדפיס hex עם אותיות גדולות. 255 = FF בהקסה."},{q:"בקריאת מחרוזת עם scanf, צריך & לפני המשתנה?",options:["כן תמיד","לא – שם מערך הוא כבר כתובת","תלוי בגודל","כן אבל רק ב-Windows"],correct:1,explanation:'שם מערך char הוא כבר מצביע לאלמנט הראשון. scanf("%s", name) נכון ללא &.'},{q:"מה עושה %-10d בניגוד ל-%10d?",options:["מדפיס מספר שלילי","מדפיס עם יישור שמאלה","מדפיס ממולא בפסים","מדפיס ב-hex"],correct:1,explanation:"- לפני רוחב השדה גורם ליישור שמאלה במקום ימינה."},{q:'מה הפלט של: printf("%05d", 42);',options:["42   ","  42 ","00042","42000"],correct:2,explanation:"0 לפני הרוחב ממלא ב-0. רוחב 5 → 00042."},{q:"מה מחזירה scanf אם היא קוראת בהצלחה 2 ערכים?",options:["0","1","2","EOF"],correct:2,explanation:"scanf מחזירה את מספר הפריטים שנקראו בהצלחה."},{q:'מה הפלט של: printf("%+d %+d", 42, -5);',options:["42 -5","+42 -5","+42 +(-5)","שגיאה"],correct:1,explanation:"%+ תמיד מציג סימן. מספר חיובי יקבל +, שלילי יקבל -."},{q:"איזה escape sequence מייצג טאב?",options:["\\n","\\t","\\r","\\b"],correct:1,explanation:"\\t מייצג horizontal tab. \\n שורה חדשה, \\r carriage return."},{q:"מה קורא getchar()?",options:["מחרוזת שלמה","תו בודד מהקלט","מספר שלם","שורה שלמה"],correct:1,explanation:"getchar() קוראת תו אחד בלבד ומחזירה אותו כ-int."},{q:'מה הפלט של: printf("%e", 12345.678);',options:["12345.678","1.234568e+04","1.23e+04","12345.7"],correct:1,explanation:"%e מדפיס בצורה מעריכית (scientific notation)."},{q:'למה כדאי לכתוב scanf(" %c", &c) עם רווח לפני %c?',options:["לקריאת רווח","לדילוג על whitespace שנשאר מקריאה קודמת","לשיפור מהירות","חובה תמיד"],correct:1,explanation:"הרווח לפני %c גורם ל-scanf לדלג על whitespace (כולל Enter) שנשאר מסריקה קודמת."},{q:'מה הפלט של: printf("%8.3f", 3.14159);',options:["   3.142","3.142   ","3.14159","3.142"],correct:0,explanation:"רוחב כולל 8 ו-3 ספרות אחרי הנקודה. 3.142 (4 תווים) + 3 רווחים = 8 תווים, ימין-מיושר."},{q:`מה יודפס: printf("%d", (int)'A');`,options:["A","65","1","0"],correct:1,explanation:"ערך ASCII של 'A' הוא 65. casting ל-int מדפיס את הערך המספרי."},{q:"מה ייצוג פלט: ./program > output.txt?",options:["קריאת קלט מקובץ","ניתוב פלט לקובץ","ניתוב שגיאות","יצירת קובץ ריק"],correct:1,explanation:"> מנתב את stdout לקובץ במקום למסך."},{q:'מה הפלט: printf("%c", 65);',options:["65","A","שגיאה","0x41"],correct:1,explanation:"%c מדפיס את התו שערכו ASCII=65, שהוא האות A."}]},{id:3,title:"מבוא לפיתוח אלגוריתמים",icon:"🧩",hours:4,syllabus:"פרק 3 – 4 שעות",goals:["לפרק בעיה מורכבת לתת-בעיות פשוטות","לבנות אלגוריתם שלב אחר שלב (top-down)","לכתוב אלגוריתם מילולי לפני קידוד","להבין את הקשר בין תת-בעיות לחלקי הפתרון","לדעת לזהות קלטים ופלטים של כל תת-בעיה"],theory:`## מהו אלגוריתם?

**אלגוריתם** הוא רצף סופי ומדויק של פעולות שפותר בעיה כלשהי. מאפיינים חיוניים:
- **סופיות** – מסתיים תמיד
- **בהירות** – כל שלב ברור ומדויק
- **קלט** – מקבל נתונים (אפשרי שאין)
- **פלט** – מייצר לפחות תוצאה אחת
- **אפקטיביות** – כל שלב בר-ביצוע

---

## פירוק לתת-בעיות (Decomposition)

גישת **Top-Down**: התחל מהבעיה הכוללת ופרק אותה לחלקים קטנים יותר, עד שכל חלק פשוט מספיק לקידוד.

**דוגמה: חישוב ציון גמר של תלמיד**

בעיה ראשית: חשב ציון גמר
- תת-בעיה 1: קבל ציוני מבחנים
- תת-בעיה 2: חשב ממוצע מבחנים
- תת-בעיה 3: קבל ציון עבודה
- תת-בעיה 4: חשב ציון משוקלל (70% מבחן + 30% עבודה)
- תת-בעיה 5: הצג תוצאה

---

## שלבי פיתוח אלגוריתם

1. **הבנת הבעיה** – מה בדיוק מתבקש? מה הקלטים? מה הפלטים?
2. **אלגוריתם מילולי** – תאר בשפה טבעית
3. **פסאודו-קוד** – כתוב במבנה דמוי-קוד
4. **מימוש** – תרגם לשפת C
5. **בדיקה** – הרץ על דוגמאות ידועות

---

## דוגמה מפורטת: חישוב ממוצע כיתה

**שלב 1 – הבנה:**
- קלט: מספר התלמידים N, וN ציונים
- פלט: הממוצע, הציון הגבוה והנמוך

**שלב 2 – אלגוריתם מילולי:**
1. קרא את מספר התלמידים N
2. אתחל: סכום = 0, מקסימום = -∞, מינימום = +∞
3. לכל תלמיד: קרא ציון, הוסף לסכום, עדכן מקסימום/מינימום
4. חשב ממוצע = סכום / N
5. הצג ממוצע, מקסימום, מינימום

**שלב 3 – פסאודו-קוד:**
\`\`\`
READ N
sum ← 0, max ← -INF, min ← +INF
FOR i FROM 1 TO N:
    READ grade
    sum ← sum + grade
    IF grade > max THEN max ← grade
    IF grade < min THEN min ← grade
avg ← sum / N
PRINT avg, max, min
\`\`\`

---

## מנגנוני בנייה של אלגוריתמים מורכבים

1. **רצף (Sequence)** – פעולות אחת אחרי השנייה
2. **ענפוֹת (Selection)** – בחירה לפי תנאי (if/else)
3. **חזרה (Repetition)** – לולאות
4. **תת-אלגוריתמים** – פונקציות שמבצעות תת-בעיות

---

## מדוע לא תמיד מספיק אלגוריתם סדרתי?

דוגמה: מיין 5 מספרים.
- אלגוריתם סדרתי: 5 if-else עם כל הצירופים → מורכבות עצומה
- אלגוריתם עם לולאה: פשוט ואלגנטי
→ לכן נדרשים מבני בקרה!`,code:`#include <stdio.h>
#include <math.h>

// ===========================
// תת-אלגוריתם 1: שטח עיגול
// ===========================
double circleArea(double radius) {
    return 3.14159 * radius * radius;
}

// ===========================
// תת-אלגוריתם 2: היקף עיגול
// ===========================
double circlePerimeter(double radius) {
    return 2 * 3.14159 * radius;
}

// ===========================
// תת-אלגוריתם 3: ממוצע 3 ציונים
// ===========================
double average3(double a, double b, double c) {
    return (a + b + c) / 3.0;
}

// ===========================
// תת-אלגוריתם 4: ציון מכריע
// ===========================
double finalGrade(double exam, double hw) {
    // 70% מבחן, 30% עבודת בית
    return 0.7 * exam + 0.3 * hw;
}

// ===========================
// תת-אלגוריתם 5: BMI
// ===========================
double calcBMI(double weight, double height) {
    return weight / (height * height);
}

int main() {
    // שימוש בתת-אלגוריתמים
    double r = 5.0;
    printf("=== עיגול עם רדיוס %.1f ===\\n", r);
    printf("שטח:  %.4f\\n", circleArea(r));
    printf("היקף: %.4f\\n", circlePerimeter(r));
    
    printf("\\n=== ציונים ===\\n");
    double g1=85, g2=92, g3=78;
    printf("ממוצע מבחנים: %.2f\\n", average3(g1, g2, g3));
    printf("ציון גמר: %.2f\\n", finalGrade(average3(g1,g2,g3), 95));
    
    printf("\\n=== BMI ===\\n");
    double w=70, h=1.75;
    double bmi = calcBMI(w, h);
    printf("משקל: %.1f, גובה: %.2f\\n", w, h);
    printf("BMI: %.2f\\n", bmi);
    
    return 0;
}`,traceTable:{headers:["שלב","תת-בעיה","פרמטרים","חישוב","תוצאה"],rows:[["1","circleArea(5)","r=5","π×5²","78.5398"],["2","circlePerimeter(5)","r=5","2×π×5","31.4159"],["3","average3(85,92,78)","a,b,c","(85+92+78)/3","85.00"],["4","finalGrade(85,95)","exam=85, hw=95","0.7×85+0.3×95","88.00"],["5","calcBMI(70,1.75)","w=70, h=1.75","70/1.75²","22.86"]]},questions:[{q:"מה ההבדל בין אלגוריתם מילולי לפסאודו-קוד?",a:"אלגוריתם מילולי כתוב בשפה טבעית (עברית/אנגלית) ופחות מדויק. פסאודו-קוד כתוב במבנה קרוב לקוד תכנות עם מבני בקרה ברורים, אך עדיין לא שפת תכנות ספציפית."},{q:"מה היתרון בפירוק לתת-בעיות?",a:"קוד קריא יותר, ניתן לבדוק כל תת-בעיה בנפרד, שימוש חוזר (reuse), חלוקת עבודה בין מפתחים, קל יותר לתחזוקה ותיקון שגיאות."},{q:"מה הצעד הראשון בפיתוח אלגוריתם?",a:"הבנת הבעיה: מה בדיוק מתבקש? מה הקלטים? מה הפלטים? מה מרחב הפתרונות? לפעמים כדאי לפתור דוגמה קונקרטית ביד לפני הכללה."},{q:"למה לא תמיד מספיק אלגוריתם סדרתי?",a:"אלגוריתם סדרתי (ללא תנאים ולולאות) לא יכול להתמודד עם מקרים שונים או כמות משתנה של נתונים. לדוגמה, למיין N מספרים ל-N כלשהו, חייבים לולאה."}],exercises:["כתוב אלגוריתם מילולי לחישוב ציון בגרות כולל בחינות בית ספריות ובחינות ממלכתיות.","פרק את הבעיה הבאה לתת-בעיות: 'כתוב תכנית שמנהלת מלאי חנות: הוסף מוצר, עדכן כמות, הצג מוצרים עם מלאי נמוך'.","כתוב פסאודו-קוד למציאת כל המספרים הראשוניים מ-1 עד N.","כתוב אלגוריתם מילולי לחישוב משכנתה: קלט=סכום, ריבית שנתית, מספר שנים; פלט=תשלום חודשי."],challenge:"בנה מחשבון BMI שלם: קבל גובה ומשקל, חשב BMI, קבע קטגוריה (Underweight<18.5, Normal 18.5-24.9, Overweight 25-29.9, Obese≥30), והצג הסבר ועצה לכל קטגוריה.",quiz:[{q:"מה השלב הנכון לכתיבת קוד C בפיתוח אלגוריתם?",options:["הצעד הראשון","לאחר הבנת הבעיה ותכנון פסאודו-קוד","לא צריך פסאודו-קוד","אחרי הבדיקה"],correct:1,explanation:"תכנות נכון: הבן בעיה → אלגוריתם מילולי → פסאודו-קוד → C → בדיקה."},{q:"מה גישת Top-Down?",options:["כתיבת קוד מהשורה הראשונה","פירוק הבעיה הגדולה לתת-בעיות קטנות","בדיקה לפני כתיבה","תיעוד לאחר קידוד"],correct:1,explanation:"Top-Down = מתחילים מהמטרה הכוללת ופורקים לחלקים קטנים יותר ויותר."},{q:"מה חייב לכלול כל אלגוריתם?",options:["לולאות","פונקציות","סופיות ובהירות","קבצי header"],correct:2,explanation:"אלגוריתם חייב: סופיות (מסתיים), בהירות (כל שלב ברור), לפחות פלט אחד."},{q:"מה ההבדל בין פסאודו-קוד לקוד C?",options:["אין הבדל","פסאודו-קוד הוא שפה ספציפית","פסאודו-קוד כתוב בשפה חופשית, לא ניתן להרצה","פסאודו-קוד מהיר יותר"],correct:2,explanation:"פסאודו-קוד הוא תיאור לוגי שאינו תלוי בשפת תכנות ואינו ניתן להרצה ישירה."},{q:"מה ארבעת מנגנוני הבנייה של אלגוריתם?",options:["פונקציות, מחרוזות, מצביעים, מערכים","רצף, ענפות, חזרה, תת-אלגוריתמים","קלט, עיבוד, פלט, בדיקה","הגדרה, אתחול, חישוב, הדפסה"],correct:1,explanation:"ארבעת מנגנוני הבנייה: רצף (sequence), ענפות (selection), חזרה (repetition), תת-אלגוריתמים."},{q:"מה יתרון פירוק לתת-בעיות?",options:["קוד ארוך יותר","שימוש חוזר, קריאות, בדיקה קלה","הקוד רץ מהר יותר תמיד","אין יתרון ממשי"],correct:1,explanation:"פירוק לתת-בעיות מאפשר: שימוש חוזר (reuse), קריאות, בדיקה בנפרד, חלוקת עבודה."},{q:"בחישוב BMI (משקל/גובה²), מה תחום הקלט החוקי?",options:["כל מספר","גובה וmשקל חיוביים ושאינם אפס","גובה בין 0 ל-3","משקל בין 0 ל-200"],correct:1,explanation:"גובה ומשקל חייבים להיות חיוביים ממשית. גובה=0 גורם לחלוקה באפס."},{q:"מה פלט האלגוריתם finalGrade(80, 90) כאשר ציון=70%×מבחן+30%×עבודה?",options:["85","83","80","86"],correct:1,explanation:"0.7×80 + 0.3×90 = 56 + 27 = 83."},{q:"מה השלב שקודם לפסאודו-קוד?",options:["בדיקה","מימוש בC","הבנת הבעיה ואלגוריתם מילולי","תיעוד"],correct:2,explanation:"סדר: הבנה → אלגוריתם מילולי → פסאודו-קוד → מימוש → בדיקה."},{q:"מה זו גישת Bottom-Up?",options:["פירוק מהכלל לפרט","בניית רכיבים קטנים ואיחודם לפתרון גדול","קידוד מהסוף להתחלה","בדיקה לפני כתיבה"],correct:1,explanation:"Bottom-Up: מתחילים מרכיבים קטנים (תת-בעיות) ומאחדים לפתרון שלם."},{q:"מה circleArea(5) מחזיר כשπ=3.14159?",options:["31.4159","78.5398","15.7080","10.0"],correct:1,explanation:"שטח עיגול = π×r² = 3.14159×25 ≈ 78.5398."},{q:"מה נדרש מאלגוריתם 'בר-ביצוע' (effective)?",options:["כל שלב ניתן לביצוע במחשב בזמן סופי","הקוד מהיר","ישנן פחות מ-100 פעולות","ניתן להרצה במקביל"],correct:0,explanation:"אפקטיביות = כל פעולה בסיסית ניתנת לביצוע בפועל בזמן סופי."},{q:"מה הפלט של: double bmi = 70 / (1.75 * 1.75);",options:["22.86","22","0.0","שגיאה"],correct:1,explanation:"1.75*1.75=3.0625, 70/3.0625≈22.86. מכיוון שאחד מהאופרנדים double, יבוצע חילוק ממשי."},{q:"מה ייחודי ב'תת-אלגוריתם' (תת-פרוצדורה)?",options:["תמיד מחזיר ערך","פותר חלק מוגדר של הבעיה וניתן לקריאה חוזרת","רץ באופן אוטומטי","חייב להיות קצר מ-10 שורות"],correct:1,explanation:"תת-אלגוריתם הוא יחידה עצמאית הפותרת תת-בעיה, שניתן לקרוא לה ממקומות שונים."},{q:"מה ייצוג graphical לאלגוריתם?",options:["פסאודו-קוד","דיאגרמת זרימה (flowchart)","קוד C עם הערות","טבלת מעקב"],correct:1,explanation:"flowchart (דיאגרמת זרימה) היא ייצוג גרפי של אלגוריתם עם סמלים מוסכמים."}]},{id:4,title:"ביצוע מותנה",icon:"🔀",hours:6,syllabus:"פרק 4 – 6 שעות",goals:["להשתמש ב-if בגרסה פשוטה, מפוצלת ומרובדת","להבין תנאים בוליאניים ואופרטורים לוגיים","לבנות טבלאות אמת ל-AND, OR, NOT","לדעת מתי להשתמש ב-switch-case","להכיר אופרטור תלתי (ternary)"],theory:`## ביצוע מותנה – if

ביצוע מותנה מאפשר לתכנית לבצע פעולות שונות בהתאם לתנאים.

### גרסה פשוטה (עקיפה)
\`\`\`c
if (condition)
    statement;  // מבוצע רק אם התנאי נכון
\`\`\`

### גרסה מפוצלת
\`\`\`c
if (condition) {
    // אם נכון
} else {
    // אם שקר
}
\`\`\`

### גרסה מרובדת (else-if)
\`\`\`c
if (grade >= 90)
    printf("מצוין");
else if (grade >= 80)
    printf("טוב מאוד");
else if (grade >= 70)
    printf("טוב");
else if (grade >= 60)
    printf("מספיק");
else
    printf("נכשל");
\`\`\`

**חשוב:** בגרסה מרובדת, ברגע שתנאי אחד מתקיים, שאר ה-else-if לא נבדקים!

---

## אופרטורים לוגיים

| אופרטור | שם | משמעות | דוגמה |
|---------|-----|---------|--------|
| && | AND (וגם) | נכון רק אם שניהם נכונים | age>=18 && hasID |
| \\|\\| | OR (או) | נכון אם לפחות אחד נכון | isStudent \\|\\| isEmployee |
| ! | NOT (לא) | הפוך | !isRaining |

### טבלת אמת AND:
| A | B | A && B |
|---|---|--------|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

### טבלת אמת OR:
| A | B | A \\|\\| B |
|---|---|--------|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

---

## אופרטורי יחס

| אופרטור | משמעות |
|---------|--------|
| == | שווה (השוואה!) |
| != | שונה |
| < | קטן מ |
| > | גדול מ |
| <= | קטן שווה |
| >= | גדול שווה |

**שגיאה נפוצה:** \`if (x = 5)\` זו **הצבה** (תמיד נכון!), לא השוואה. צריך \`if (x == 5)\`.

---

## switch-case

מתאים כשבודקים ערך אחד מול קבועים ספציפיים:

\`\`\`c
switch (expression) {
    case value1:
        // ...
        break;     // חשוב! ללא break ממשיך לcase הבא
    case value2:
        // ...
        break;
    case value3:
    case value4:   // שתי אפשרויות לאותה פעולה
        // ...
        break;
    default:
        // ברירת מחדל
}
\`\`\`

**מגבלות switch:** עובד רק עם int/char, לא עם float או מחרוזות.

---

## אופרטור תלתי (Ternary)

\`\`\`c
condition ? value_if_true : value_if_false
\`\`\`

דוגמה:
\`\`\`c
int max = (a > b) ? a : b;
char *status = (grade >= 60) ? "עבר" : "נכשל";
\`\`\``,code:`#include <stdio.h>

int main() {
    // if-else מרובד
    int grade;
    printf("הכנס ציון (0-100): ");
    scanf("%d", &grade);
    
    if (grade < 0 || grade > 100)
        printf("ציון לא חוקי!\\n");
    else if (grade >= 90)
        printf("מצוין (A)\\n");
    else if (grade >= 80)
        printf("טוב מאוד (B)\\n");
    else if (grade >= 70)
        printf("טוב (C)\\n");
    else if (grade >= 60)
        printf("מספיק (D)\\n");
    else
        printf("נכשל (F)\\n");
    
    // AND, OR, NOT
    int age;
    int hasID;
    printf("\\nגיל: ");
    scanf("%d", &age);
    printf("יש תעודת זהות? (1=כן, 0=לא): ");
    scanf("%d", &hasID);
    
    if (age >= 18 && hasID)
        printf("רשאי לכנוס\\n");
    else if (age >= 18 && !hasID)
        printf("חייב להביא תעודה\\n");
    else
        printf("אסור כניסה לפי גיל\\n");
    
    // switch-case
    int day;
    printf("\\nיום בשבוע (1=ראשון...7=שבת): ");
    scanf("%d", &day);
    
    switch(day) {
        case 1: printf("ראשון\\n"); break;
        case 2: printf("שני\\n"); break;
        case 3: printf("שלישי\\n"); break;
        case 4: printf("רביעי\\n"); break;
        case 5: printf("חמישי\\n"); break;
        case 6:
        case 7: printf("סוף שבוע\\n"); break;
        default: printf("יום לא חוקי\\n");
    }
    
    // ternary
    int x = 15;
    const char *type = (x % 2 == 0) ? "זוגי" : "אי-זוגי";
    printf("\\n%d הוא %s\\n", x, type);
    
    return 0;
}`,traceTable:{headers:["ציון",">=90?",">=80?",">=70?",">=60?","פלט"],rows:[["95","✓","–","–","–","מצוין (A)"],["83","✗","✓","–","–","טוב מאוד (B)"],["72","✗","✗","✓","–","טוב (C)"],["65","✗","✗","✗","✓","מספיק (D)"],["45","✗","✗","✗","✗","נכשל (F)"],["-5","–","–","–","–","ציון לא חוקי!"]]},questions:[{q:"מה ההבדל בין = ל-== ב-C?",a:"= היא אופרטור הצבה (משנה ערך המשתנה). == היא אופרטור השוואה (בודק שוויון). if(x=5) תמיד נכון כי ההצבה מחזירה 5 (לא-אפס). if(x==5) נכון רק אם x שווה ל-5."},{q:"מה קורה אם שוכחים break ב-switch?",a:"Fall-through: הביצוע ממשיך לcase הבא ללא בדיקת הערך. לפעמים זה מכוון (case6: case7: printf('סוף שבוע')), אך לרוב זו שגיאה."},{q:"מתי עדיף switch על if-else?",a:"switch עדיף כשבודקים ערך שלם אחד מול מספר ערכים ספציפיים – קוד קריא יותר ולעיתים מהיר יותר. if-else הכרחי לתנאים מורכבים, טווחים, ממשיים, מחרוזות."},{q:"מהי התנהגות short-circuit evaluation ב-C?",a:"ב-A&&B, אם A שקר, B לא נבדק כלל. ב-A||B, אם A נכון, B לא נבדק. שימושי: if(ptr!=NULL && ptr->val>0) – אם ptr=NULL, הביטוי השני לא מוערך ולא יגרום לשגיאה."}],exercises:["כתוב תכנית שמקבלת שנה ומדפיסה אם היא שנה מעוברת (מתחלקת ב-4 אבל לא ב-100, או מתחלקת ב-400).","כתוב מחשבון הנחות לכרטיסי קולנוע: ילד עד 12 = 50%, סטודנט עם תעודה = 30%, ותיק מעל 65 = 40%, אחרים = 0%.","קבל 3 מספרים ומצא את הגדול, האמצעי והקטן ביניהם.","כתוב תכנית שמקבלת שלוש צלעות ומדפיסה: לא משולש / שווה-צלעות / שווה-שוקיים / כללי.","כתוב תכנית שממירה ציון מספרי לציון אות (A-F) ומדפיסה גם הכוונה ('כל הכבוד!', 'עוד קצת מאמץ' וכו').","כתוב מנוע חישוב מס הכנסה: עד 75,000₪ = 10%, 75,001-214,000₪ = 14%, מעל 214,000₪ = 20%."],challenge:"כתוב משחק 'אבן-נייר-מספריים': קבל בחירת שני שחקנים (1=אבן, 2=נייר, 3=מספריים), קבע מנצח, הצג הסבר (מספריים חותכות נייר, נייר עוטף אבן, אבן שוברת מספריים).",quiz:[{q:'מה הפלט של: int x=5; if(x=10) printf("yes"); else printf("no");',options:["no","yes","שגיאת קומפילציה","אין פלט"],correct:1,explanation:"x=10 היא הצבה (לא השוואה!). הצבה מחזירה את הערך 10 (לא-אפס = אמת). לכן תדפיס yes."},{q:"מה יגרום לfall-through ב-switch?",options:["שימוש ב-default","שכחת break","ערך לא מוגדר ב-case","שגיאת syntax"],correct:1,explanation:"ללא break, הביצוע ממשיך לcase הבא ללא בדיקת הערך – זה נקרא fall-through."},{q:'מה הפלט של: printf("%d", (7>3) && (2<1));',options:["1","0","שגיאה","true"],correct:1,explanation:"(7>3)=1, (2<1)=0. 1&&0=0. && מחזיר 1 רק אם שניהם אמת."},{q:"מה מגבלת switch ב-C?",options:["עובד רק עם מספרים שלמים וchar","עובד רק עם float","מגבלת 5 cases","אין מגבלה"],correct:0,explanation:"switch עובד רק עם int, char, ו-enum. לא ניתן להשתמש ב-float, double, מחרוזות."},{q:'מה הפלט של: int a=3,b=5; printf("%d", (a>b)?a:b);',options:["3","5","1","0"],correct:1,explanation:"a>b? → 3>5 = שקר → מחזיר b = 5."},{q:'מה הפלט: if(5 > 3) if(2 > 4) printf("A"); else printf("B");',options:["A","B","AB","אין פלט"],correct:1,explanation:"הelse שייך ל-if הפנימי (dangling else). 5>3 נכון, 2>4 שקר → else → B."},{q:'מה הפלט: printf("%d", (3 != 3) || (5 == 5));',options:["0","1","2","שגיאה"],correct:1,explanation:"(3!=3)=0, (5==5)=1. 0||1=1. OR מחזיר 1 אם לפחות אחד אמת."},{q:'מה הפלט: int x=15; printf("%s", (x%2==0)?"זוגי":"אי-זוגי");',options:["זוגי","אי-זוגי","15","שגיאה"],correct:1,explanation:'15%2=1≠0, לכן התנאי שקר ומוחזר "אי-זוגי".'},{q:"מה short-circuit evaluation ב-&&?",options:["C מחשב תמיד שני הצדדים","אם הצד שמאל שקר, הצד ימין לא נבדק","אם הצד ימין שקר, הצד שמאל לא נבדק","שני הצדדים נבדקים תמיד"],correct:1,explanation:"ב-A&&B: אם A שקר, התוצאה תמיד שקר ו-B לא נבדק. חשוב ל-if(ptr!=NULL && ptr->val)."},{q:'מה הפלט: int x=0; switch(x) { case 0: printf("A"); case 1: printf("B"); break; default: printf("C"); }',options:["A","AB","B","AC"],correct:1,explanation:"case 0 מדפיס A, אין break → fall-through ל-case 1 שמדפיס B, ואז break."},{q:"מה יבדוק if(grade >= 60 && grade <= 100)?",options:["ציון שווה ל-60 בדיוק","ציון בתחום 60 עד 100 כולל","ציון מעל 60 ומעל 100","שגיאה לוגית"],correct:1,explanation:"&& מחייב את שני התנאים. ציון בין 60 ל-100 (כולל הקצוות)."},{q:'מה הפלט: int a=2; if(a>1) printf("X"); if(a>3) printf("Y"); else printf("Z");',options:["X","XZ","XY","Z"],correct:1,explanation:"if הראשון (a>1=true) → X. if שני (a>3=false) → else → Z. שתי הדפסות: XZ."},{q:"מהי טבלת אמת של !true && false?",options:["true","false","undefined","שגיאה"],correct:1,explanation:"!true = false, false&&false = false."},{q:'מה הפלט: int x=100; printf("%d", x>50 && x<200 ? 1 : 0);',options:["0","1","100","שגיאה"],correct:1,explanation:"100>50=true, 100<200=true, true&&true=true → מחזיר 1."},{q:"מה ההבדל בין if-else if לבין if-if?",options:["אין הבדל","if-else if: רק ענף אחד מבוצע. if-if: כל תנאי נבדק בנפרד","if-else if מהיר יותר","if-if אסור ב-C"],correct:1,explanation:"ב-else if: ברגע שתנאי מתקיים, השאר לא נבדקים. ב-if-if עצמאיים: כל תנאי נבדק."}]},{id:5,title:"נכונות אלגוריתמים",icon:"✅",hours:4,syllabus:"פרק 5 – 4 שעות",goals:["להבין את מושג נכונות אלגוריתם","להכיר שגיאות syntax, runtime ולוגיות","לדעת לבנות קלטי בדיקה (כולל ערכי גבול)","לאמת אלגוריתם עם טבלת מעקב","להכיר את חשיבות תיעוד תחום הקלטים החוקיים"],theory:`## נכונות אלגוריתם

**אלגוריתם נכון** – מייצר תוצאה נכונה לכל קלט חוקי ומגיב נכון לקלטים לא חוקיים.

### שלושה סוגי שגיאות

**1. שגיאת תחביר (Syntax Error)**
- מתגלה בזמן קומפילציה
- הקוד לא יתרגם כלל
\`\`\`c
printf("hello")   // חסרה נקודה-פסיק!
int x = ;         // חסר ערך
\`\`\`

**2. שגיאת זמן ריצה (Runtime Error)**
- הקוד מתקמפל, קורס בזמן ריצה
\`\`\`c
int arr[5];
arr[10] = 5;      // גלישת מערך
int x = 5 / 0;   // חלוקה באפס
int *p = NULL;
*p = 10;          // גישה לכתובת NULL
\`\`\`

**3. שגיאה לוגית (Logic Error)**
- הקוד מתקמפל ורץ, אך נותן תוצאה שגויה
- הכי קשה לאיתור!
\`\`\`c
// רצינו ממוצע, כתבנו:
int avg = a + b / 2;  // טעות! צריך (a+b)/2
// או:
for (i=0; i<=n; i++)  // <=במקום < → Off-by-one error
\`\`\`

---

## תחום קלטים חוקיים

לכל אלגוריתם יש תחום קלטים שהוא מיועד לטפל בו. חשוב לתעד:

\`\`\`c
// חישוב שורש ריבועי
// קלט חוקי: x >= 0
// קלט לא חוקי: x < 0
float safeSquareRoot(float x) {
    if (x < 0) {
        printf("שגיאה: שורש של שלילי\\n");
        return -1; // ערך שגיאה מוסכם
    }
    return sqrt(x);
}
\`\`\`

---

## בניית קלטי בדיקה

לבדיקה יסודית נבחר:

1. **ערכים גבוליים (Boundary Values)** – הערכים הקיצוניים של התחום
   - דוגמה: אם תחום 1-100, נבדוק 1, 100, 0, 101
2. **ערכים רגילים** – ערכים אמצעיים ייצוגיים
3. **מקרים מיוחדים** – 0, שליליים, מספרים גדולים מאוד
4. **קלטים לא חוקיים** – כדי לוודא שהתכנית מטפלת בהם נכון

---

## אימות עם טבלת מעקב

טבלת מעקב מאפשרת לעקוב אחרי ערכי משתנים שלב-שלב ולוודא שהאלגוריתם פועל נכון:

| שלב | קוד | משתנה 1 | משתנה 2 | פלט | הערה |
|-----|-----|---------|---------|-----|------|
| 1 | init | i=0 | sum=0 | — | — |
| 2 | loop i=1 | i=1 | sum=1 | — | — |
| ... | ... | ... | ... | ... | ... |

---

## חשיבות תיעוד

\`\`\`c
/*
 * פונקציה: calcAverage
 * תיאור: מחשבת ממוצע מערך ציונים
 * קלטים: arr[] - מערך ציונים, n - מספר ציונים (n >= 1)
 * פלטים: הממוצע כ-double
 * תנאי קדם: n >= 1, כל ציון בתחום [0,100]
 * תנאי אחר: ממוצע בתחום [0,100]
 */
double calcAverage(int arr[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i++)
        sum += arr[i];
    return (double)sum / n;
}
\`\`\``,code:`#include <stdio.h>
#include <math.h>
#include <stdlib.h>

// פונקציה בטוחה לשורש - בודקת קלט
double safeSquareRoot(double x) {
    if (x < 0) {
        printf("[שגיאה] שורש של מספר שלילי: %.2f\\n", x);
        return -1;
    }
    return sqrt(x);
}

// פונקציה בטוחה לחלוקה
double safeDivide(double a, double b) {
    if (b == 0) {
        printf("[שגיאה] חלוקה באפס!\\n");
        return 0;
    }
    return a / b;
}

// דוגמה לשגיאה לוגית ותיקונה
int wrongAverage(int a, int b) {
    return a + b / 2;  // שגוי! בגלל עדיפויות
}
int correctAverage(int a, int b) {
    return (a + b) / 2; // נכון
}

// חישוב ממוצע עם בדיקות
double calcAverage(int arr[], int n) {
    // בדיקת קלט
    if (n <= 0) {
        printf("[שגיאה] n חייב להיות חיובי\\n");
        return 0;
    }
    int sum = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] < 0 || arr[i] > 100) {
            printf("[אזהרה] ציון לא חוקי: %d (מדלג)\\n", arr[i]);
            n--;
            continue;
        }
        sum += arr[i];
    }
    return (double)sum / n;
}

int main() {
    printf("=== בדיקת safeSquareRoot ===\\n");
    printf("sqrt(16) = %.2f\\n", safeSquareRoot(16));
    printf("sqrt(0)  = %.2f\\n", safeSquareRoot(0));
    safeSquareRoot(-4);
    
    printf("\\n=== בדיקת safeDivide ===\\n");
    printf("10/4 = %.2f\\n", safeDivide(10, 4));
    safeDivide(10, 0);
    
    printf("\\n=== שגיאה לוגית ===\\n");
    printf("wrongAverage(4,8) = %d (שגוי, צריך 6)\\n", wrongAverage(4,8));
    printf("correctAverage(4,8) = %d (נכון)\\n", correctAverage(4,8));
    
    printf("\\n=== calcAverage עם בדיקות ===\\n");
    int grades[] = {85, 92, -5, 78, 120, 90};
    printf("ממוצע: %.2f\\n", calcAverage(grades, 6));
    
    return 0;
}`,traceTable:{headers:["בדיקה","קלט","תוצאה צפויה","תוצאה בפועל","תקין?"],rows:[["ערך רגיל","safeSquareRoot(16)","4.00","4.00","✓"],["ערך גבולי","safeSquareRoot(0)","0.00","0.00","✓"],["קלט לא חוקי","safeSquareRoot(-4)","שגיאה","הדפסת שגיאה","✓"],["חלוקה רגילה","safeDivide(10,4)","2.50","2.50","✓"],["חלוקה באפס","safeDivide(10,0)","שגיאה","הדפסת שגיאה","✓"],["שגיאה לוגית","wrongAverage(4,8)","6","8 (!)","✗"],["תוקן","correctAverage(4,8)","6","6","✓"]]},questions:[{q:"מה ההבדל בין שגיאת תחביר לשגיאה לוגית?",a:"שגיאת תחביר מונעת קומפילציה ומדווחת על ידי המהדר עם מיקום. שגיאה לוגית מאפשרת הידור והרצה אך הקוד נותן תוצאה שגויה – על המפתח לאתר אותה."},{q:"מה זה off-by-one error?",a:"שגיאה שבה לולאה מתבצעת פעם אחת יותר או פחות מהנדרש. דוגמה: for(i=0; i<=n; i++) כשצריך i<n. תוצאה: גלישת מערך או חישוב שגוי."},{q:"אילו קלטי בדיקה חשוב לבדוק תמיד?",a:"ערכים גבוליים (מינימום/מקסימום), ערך 0, מספרים שליליים, ערכים מחוץ לתחום, קלט ריק, ערכים מיוחדים (כגון מספר ראשוני כשמחפשים ראשוניים)."},{q:"למה חשוב לתעד את תחום הקלטים החוקיים?",a:"כדי שמשתמשי הפונקציה ידעו מה להעביר, כדי שיהיה ברור מה הפונקציה אמורה לעשות, ולסייע באיתור שגיאות. תנאי קדם (precondition) ותנאי אחר (postcondition)."}],exercises:['מצא את השגיאה/ות בקוד הבא: for(i=1; i<=10; i++) sum = i; printf("%d", sum);',"כתוב פונקציה safeLog(x) שמחשבת לוגריתם טבעי ובודקת שהקלט חיובי.","כתוב בדיקות לפונקציה שמחשבת ממוצע: בחר לפחות 5 קלטי בדיקה ונמק כל אחד.","כתוב פונקציה שמחשבת פקטוריאל עם בדיקות (קלטים לא חוקיים: שליליים, גדולים מ-20).","מצא את כל השגיאות בקוד: int max(int a, int b) { if (a > b) return a; return a; }"],challenge:"כתוב ספריה של פונקציות בטוחות: safeInput(min, max) שקוראת int בתחום נתון, safeDiv, safeSqrt, safeMod – כל אחת עם בדיקות מתאימות ותיעוד מלא.",quiz:[{q:"שגיאה לוגית היא:",options:["שגיאת תחביר שמונעת קומפילציה","שגיאה שגורמת לקריסה בזמן ריצה","קוד שרץ אך נותן תוצאה שגויה","שגיאת זיכרון"],correct:2,explanation:"שגיאה לוגית: הקוד מתקמפל ורץ, אך התוצאה שגויה. הכי קשה לאיתור."},{q:"מה off-by-one error?",options:["טעות בערך הראשוני","לולאה שרצה פעם אחת יותר או פחות","חלוקה באפס","גלישת מחסנית"],correct:1,explanation:"off-by-one: שגיאת לולאה שגורמת לביצוע פעם אחת יותר (<=במקום <) או פחות."},{q:"מה הפלט של: int x=a+b/2 כש-a=4, b=8?",options:["6","8","4","2"],correct:1,explanation:"עדיפויות: b/2=4 קודם, ואז a+4=8. כדי לקבל ממוצע נכון: (a+b)/2=6."},{q:"למה חשוב לבדוק ערכים גבוליים?",options:["כי הם הנפוצים","כי שגיאות מתרחשות לרוב בקצוות התחום","כדי לחסוך זמן","אין סיבה מיוחדת"],correct:1,explanation:"שגיאות מתרחשות לרוב בקצוות: ערך 0, מינימום, מקסימום, או ערכים סמוכים לגבולות."},{q:"מה סוג השגיאה ב: for(i=0; i<=n; i++) כשצריך לעבור n פעמים?",options:["שגיאת תחביר","שגיאת זמן ריצה","שגיאה לוגית (off-by-one)","אין שגיאה"],correct:2,explanation:"הלולאה רצה n+1 פעמים במקום n (0 עד n כולל). זוהי שגיאה לוגית אופיינית."},{q:"מה safeSquareRoot(-4) תחזיר לפי הקוד בדוגמה?",options:["0","-1","4","שגיאת קומפילציה"],correct:1,explanation:"בדיקת if(x<0) מחזירה -1 כערך שגיאה מוסכם."},{q:"מה ההבדל בין שגיאת syntax לשגיאת runtime?",options:["אין הבדל – שתיהן מונעות הרצה","syntax מגולה בקומפילציה, runtime – בזמן ריצה","runtime מגולה בקומפילציה","syntax קשה יותר לתיקון"],correct:1,explanation:"syntax error: המהדר מסרב לקמפל. runtime error: הקוד קומפל אך קורס בהרצה."},{q:"מה הפלט של: wrongAverage(4, 8) כשהפונקציה מחשבת a + b/2?",options:["6","8","4","12"],correct:1,explanation:"a + b/2 = 4 + 8/2 = 4 + 4 = 8. שגיאה לוגית! הנכון: (a+b)/2 = 6."},{q:"מה precondition?",options:["תנאי שחייב להתקיים לפני קריאת הפונקציה","תנאי שמובטח לאחר הריצה","תנאי בלולאה","בדיקת ערכי החזרה"],correct:0,explanation:"precondition (תנאי קדם) = הנחה על הקלט. הפונקציה לא אחראית לקלט לא חוקי."},{q:"מה postcondition?",options:["תנאי לאחר הפונקציה","מה מובטח שיתקיים בפלט אחרי ריצה תקינה","בדיקת overflow","ניהול זיכרון"],correct:1,explanation:"postcondition = מה מובטח שיהיה נכון לאחר הריצה. מתאר מה הפונקציה מחזירה."},{q:"מה segmentation fault?",options:["שגיאת תחביר","שגיאת לוגיקה","גישה לזיכרון לא חוקי בזמן ריצה","חריגה ממגבלת זמן"],correct:2,explanation:"segfault = גישה לכתובת זיכרון שאינה שייכת לתכנית. למשל: גישה ל-NULL pointer."},{q:"מה בדיקת 'ערך גבולי' עבור מערך בגודל 5?",options:["בדיקת arr[2] (אמצע)","בדיקת arr[0] ו-arr[4] (ראשון ואחרון)","בדיקת ערך שלילי","בדיקת 0"],correct:1,explanation:"ערכי גבול במערך = האינדקסים הקיצוניים: 0 (ראשון) ו-n-1 (אחרון)."},{q:"מה חלוקה באפס גורמת ב-C?",options:["מחזירה 0","מחזירה infinity","undefined behavior / קריסה","שגיאת קומפילציה"],correct:2,explanation:"חלוקת int באפס היא undefined behavior – בפועל גורמת לקריסה (SIGFPE)."},{q:"מה שגיאת 'integer overflow'?",options:["חלוקה באפס","תוצאת חישוב חורגת ממגבלת הטיפוס","גלישת מחסנית","קובץ גדול מדי"],correct:1,explanation:"int מחזיק עד ~2 מיליארד. חישוב שתוצאתו גדולה יותר יגלוש וייתן ערך שגוי."},{q:"מה מספר מינימלי של קלטי בדיקה לפונקציה שמחשבת abs(x)?",options:["1","2","3","5"],correct:2,explanation:"לפחות 3: מספר חיובי (x>0), אפס (x=0), מספר שלילי (x<0). בדיקת כל המקרים."}]},{id:6,title:"לולאות",icon:"🔄",hours:8,syllabus:"פרק 6 – 8 שעות",goals:["להשתמש ב-while, do-while ו-for","לדעת לבנות מונים, צוברים ומכפלים","להשתמש בזקיף לסיום לולאה","לבנות לולאות מקוננות","להשתמש ב-switch-case","להבחין בין סוגי הלולאות ולבחור הנכון"],theory:`## עקרון הביצוע החוזר

לולאה מאפשרת לבצע בלוק קוד מספר פעמים. השימוש בה הכרחי כשיש:
- פעולה שחוזרת על עצמה
- עיבוד רשימת נתונים
- חיפוש
- צבירה/מניין

---

## while – כשלא יודעים מראש כמה פעמים

\`\`\`c
while (condition) {
    // גוף הלולאה
    // חייב לשנות את התנאי כדי שלא תהיה לולאה אינסופית!
}
\`\`\`

**מחזור חיים:** בדוק תנאי → אם נכון: בצע גוף → חזור לבדיקה → אם שקר: צא

\`\`\`c
int i = 1, sum = 0;
while (i <= 10) {
    sum += i;
    i++;
}
// sum = 55
\`\`\`

---

## do-while – מבצע לפחות פעם אחת

\`\`\`c
do {
    // גוף מבוצע לפחות פעם אחת
} while (condition);
\`\`\`

שימושי לבדיקת תקינות קלט:
\`\`\`c
int choice;
do {
    printf("בחר (1-3): ");
    scanf("%d", &choice);
} while (choice < 1 || choice > 3);
\`\`\`

---

## for – כשיודעים מראש כמה פעמים

\`\`\`c
for (init; condition; update) {
    // גוף
}
\`\`\`

שלושת חלקי for:
- **init**: ביצוע פעם אחת לפני הלולאה (למשל: i=0)
- **condition**: נבדק לפני כל איטרציה
- **update**: מבוצע בסוף כל איטרציה (למשל: i++)

\`\`\`c
for (int i = 1; i <= 10; i++) {
    printf("%d ", i);
}
\`\`\`

---

## מונים, צוברים ומכפלים

\`\`\`c
int count = 0;   // מונה – מספר האירועים
int sum = 0;     // צובר – מצטבר סכום
int product = 1; // מכפיל – מצטבר מכפלה (מאותחל ל-1!)

int n;
while (scanf("%d", &n) == 1 && n != -1) {  // זקיף = -1
    if (n > 0) {
        count++;
        sum += n;
        product *= n;
    }
}
\`\`\`

---

## זקיף (Sentinel)

ערך מיוחד שמסמן את סוף הקלט:
\`\`\`c
int num;
printf("הכנס מספרים (-1 לסיום):\\n");
scanf("%d", &num);
while (num != -1) {
    // עבד num
    scanf("%d", &num);
}
\`\`\`

---

## לולאות מקוננות

לולאה בתוך לולאה – מספר ביצועים = מכפלת הגדלים:

\`\`\`c
for (int r = 1; r <= 3; r++) {
    for (int c = 1; c <= 3; c++) {
        printf("%3d", r * c);
    }
    printf("\\n");
}
\`\`\`

---

## switch-case לפי הסילבוס

\`\`\`c
int choice;
printf("תפריט:\\n1.הוסף 2.מחק 3.הצג\\n");
scanf("%d", &choice);

switch(choice) {
    case 1: addItem(); break;
    case 2: deleteItem(); break;
    case 3: showItems(); break;
    default: printf("בחירה לא חוקית\\n");
}
\`\`\`

---

## מתי להשתמש באיזה לולאה?

| לולאה | מתי |
|-------|-----|
| for | מספר ידוע של איטרציות |
| while | מספר לא ידוע, בדיקה לפני |
| do-while | מספר לא ידוע, בדיקה אחרי (לפחות פעם אחת) |`,code:`#include <stdio.h>

int main() {
    // === for – סכום 1 עד N ===
    int N = 10, sum = 0;
    for (int i = 1; i <= N; i++)
        sum += i;
    printf("סכום 1 עד %d = %d\\n", N, sum);
    
    // === for – לולאות מקוננות (טבלת כפל) ===
    printf("\\nטבלת כפל (3x3):\\n");
    for (int r = 1; r <= 3; r++) {
        for (int c = 1; c <= 3; c++)
            printf("%4d", r * c);
        printf("\\n");
    }
    
    // === while עם מונה, צובר ומכפיל ===
    int count = 0, total = 0, product = 1;
    int num;
    printf("\\nהכנס מספרים (זקיף=-1):\\n");
    scanf("%d", &num);
    while (num != -1) {
        count++;
        total += num;
        product *= num;
        scanf("%d", &num);
    }
    if (count > 0) {
        printf("נספרו: %d\\n", count);
        printf("סכום: %d\\n", total);
        printf("ממוצע: %.2f\\n", (float)total / count);
        printf("מכפלה: %d\\n", product);
    }
    
    // === do-while לבדיקת קלט ===
    int choice;
    do {
        printf("\\nבחר (1=חיבור, 2=כפל, 3=יציאה): ");
        scanf("%d", &choice);
        if (choice < 1 || choice > 3)
            printf("בחירה לא חוקית, נסה שוב\\n");
    } while (choice < 1 || choice > 3);
    
    // === switch-case ===
    int a = 4, b = 7;
    switch(choice) {
        case 1: printf("%d + %d = %d\\n", a, b, a+b); break;
        case 2: printf("%d * %d = %d\\n", a, b, a*b); break;
        case 3: printf("להתראות!\\n"); break;
    }
    
    // === הדפסת כוכביות (משולש) ===
    printf("\\nמשולש כוכביות (5 שורות):\\n");
    for (int row = 1; row <= 5; row++) {
        for (int star = 1; star <= row; star++)
            printf("*");
        printf("\\n");
    }
    
    return 0;
}`,traceTable:{headers:["i","sum (לפני)","sum += i","sum (אחרי)","תנאי i<=10"],rows:[["1","0","0+1","1","✓"],["2","1","1+2","3","✓"],["3","3","3+3","6","✓"],["4","6","6+4","10","✓"],["5","10","10+5","15","✓"],["...","...","...","...","✓"],["10","45","45+10","55","✓"],["11","55","—","55","✗ יציאה"]]},questions:[{q:"מה ההבדל העיקרי בין while ל-do-while?",a:"while בודק את התנאי לפני הביצוע הראשון – יתכן שהגוף לא יתבצע כלל. do-while מבצע את הגוף פעם אחת לפחות, ורק אחר כך בודק את התנאי."},{q:"מה זה זקיף (sentinel) ולמה משתמשים בו?",a:"ערך מיוחד שמסמן סוף קלט (לדוגמה -1 לרשימת ציונים, 0 לרשימת מחירים). משמש כשלא יודעים מראש כמה ערכים יוכנסו."},{q:"למה מכפיל מאותחל ל-1 ולא ל-0?",a:"כי מכפלה של כל מספר ב-0 היא 0. כדי שכפל יצבור נכון, צריך לאתחל ל-1 (יסוד הכפל). אם היינו מאתחלים ל-0, כל המכפלות יהיו 0."},{q:"כמה פעמים רץ: for(i=1; i<=N; i+=2)?",a:"⌈N/2⌉ פעמים. לדוגמה: N=10 → i=1,3,5,7,9 → 5 פעמים. N=9 → i=1,3,5,7,9 → 5 פעמים."},{q:"מה לולאה אינסופית ואיך נגרמת?",a:"לולאה שתנאי הסיום שלה לעולם לא מתקיים. גורמים: שכחת עדכון המשתנה (i++), תנאי שתמיד נכון (while(1)), שגיאה לוגית בתנאי."}],exercises:["כתוב תכנית שמחשבת סכום הספרות של מספר שלם חיובי (לדוגמה 1234 → 10).","כתוב תכנית שקוראת ציונים עד שמכניסים -1 ומדפיסה: מספר ציונים, ממוצע, מקסימום, מינימום.","כתוב לולאות מקוננות שמציירות ריבוע 5×5 של כוכביות.","כתוב תכנית שמחשבת n! (פקטוריאל) בלולאה לקלט n מהמשתמש.","כתוב תכנית שבודקת אם מספר הוא ראשוני (prime) – בדוק חלוקה ב-2 עד sqrt(n).","כתוב טבלת כפל שלמה (1×1 עד 10×10) עם כותרות שורה ועמודה מסודרות."],challenge:"כתוב תכנית שמשחקת 'ניחוש המספר': המחשב בוחר מספר אקראי 1-100, המשתמש מנחש, התכנית מדפיסה 'גדול יותר' / 'קטן יותר' עד שמנחשים נכון, ובסוף מציגה את מספר הניסיונות.",quiz:[{q:"כמה פעמים רץ: for(i=0; i<5; i++)?",options:["4","5","6","אינסוף"],correct:1,explanation:"i=0,1,2,3,4 → 5 פעמים. תנאי i<5 נכון עד i=4 (כולל)."},{q:"מה ההבדל בין while ל-do-while?",options:["while מהיר יותר","do-while מבצע לפחות פעם אחת","for יכול להחליף רק while","אין הבדל"],correct:1,explanation:"do-while בודק התנאי אחרי הביצוע, לכן גוף הלולאה מבוצע לפחות פעם אחת."},{q:"מה הערך הנכון לאתחל בו מכפיל?",options:["0","1","-1","N"],correct:1,explanation:"product = 1 מכיוון ש-1 הוא היסוד הנייטרלי לכפל. 0 יגרום לכפל 0 עם כל דבר."},{q:'מה הפלט של: for(i=10; i>0; i-=3) printf("%d ",i);',options:["10 7 4 1","10 7 4","10 7 4 1 -2","10 7 4 2"],correct:0,explanation:"i=10,7,4,1 → כולם >0. i=1-3=-2 → תנאי -2>0 שקר → יציאה. פלט: 10 7 4 1"},{q:"מה אלגוריתם הזקיף?",options:["בדיקת ערכי גבול","ערך מיוחד שמסמן סוף קלט ללולאה","משתנה גלובלי","בדיקת שגיאות"],correct:1,explanation:"sentinel = ערך מוסכם מיוחד שמסמן סיום קלט, כגון -1 לרשימת ציונים."},{q:"לולאת for(;;) ב-C היא:",options:["שגיאת תחביר","לולאה אינסופית","לולאה שרצה 0 פעמים","לולאה שרצה פעם אחת"],correct:1,explanation:"for(;;) = for ללא init, condition ו-update. תנאי ריק נחשב true → לולאה אינסופית."},{q:'מה הפלט: int sum=0; for(int i=1; i<=4; i++) sum+=i; printf("%d", sum);',options:["4","10","6","8"],correct:1,explanation:"sum = 1+2+3+4 = 10."},{q:'מה הפלט: int i=0; while(i<3) { printf("%d ", i); i+=2; }',options:["0 1 2","0 2","0 2 4","1 3"],correct:1,explanation:"i=0 (הדפס, i+=2→2), i=2 (הדפס, i+=2→4), i=4 (4<3=false → יציאה). פלט: 0 2"},{q:"כמה פעמים תרוץ לולאה מקוננת: for(i=1;i<=3;i++) for(j=1;j<=4;j++)?",options:["7","12","9","16"],correct:1,explanation:"3×4=12 פעמים. כל איטרציה חיצונית מריצה 4 איטרציות פנימיות."},{q:'מה הפלט: int n=5; do { printf("%d ",n); n--; } while(n>5);',options:["5","אין פלט","5 4 3","לולאה אינסופית"],correct:0,explanation:"do-while מבצע פעם אחת (n=5→הדפס 5, n=4), ואז בודק 4>5=false → יוצא. פלט: 5"},{q:"מה ייצוג break בלולאה?",options:["ממשיך לאיטרציה הבאה","יוצא מהלולאה הנוכחית מיד","עוצר את כל התכנית","חוזר להתחלת הלולאה"],correct:1,explanation:"break יוצא מהלולאה הפנימית ביותר מיד. continue מדלג לאיטרציה הבאה."},{q:"מה continue עושה בלולאה?",options:["יוצא מהלולאה","מדלג לאיטרציה הבאה","מאתחל מחדש את הלולאה","שקול ל-break"],correct:1,explanation:"continue מדלג על שאר גוף האיטרציה הנוכחית וממשיך לאיטרציה הבאה."},{q:'מה הפלט: for(int i=0;i<5;i++) { if(i==3) break; printf("%d ",i); }',options:["0 1 2 3 4","0 1 2","0 1 2 3","3 4"],correct:1,explanation:"i=0,1,2 מודפסים. כשi=3, break יוצא מהלולאה. פלט: 0 1 2"},{q:"מה מונה (counter) בתכנות?",options:["משתנה שמצביע על כתובת","משתנה שסופר כמה פעמים אירוע התרחש","לולאה שסופרת אחורה","משתנה גלובלי"],correct:1,explanation:"counter = משתנה שמאותחל ל-0 ומוגדל בכל פעם שאירוע מסוים קורה."},{q:'מה הפלט: int p=1; for(int i=1;i<=4;i++) p*=i; printf("%d",p);',options:["10","24","4","1"],correct:1,explanation:"p = 1×1×2×3×4 = 24 (4! = פקטוריאל 4)."}]},{id:7,title:"פונקציות",icon:"🔧",hours:8,syllabus:"פרק 7",goals:["לפרק תכנית לפונקציות","להבין פרמטרים, ארגומנטים וערכי החזרה","להכיר scope מקומי וגלובלי","להבין מודל ה-Stack","לכתוב אבטיפוסים (prototypes)"],theory:`## מהי פונקציה?

**פונקציה** היא בלוק קוד עם שם, שמבצע משימה מוגדרת ויכול לקבל פרמטרים ולהחזיר ערך.

**יתרונות:**
- מניעת כפילות קוד
- קריאות (readability)
- תחזוקה קלה
- שימוש חוזר
- בדיקה בנפרד

---

## מבנה פונקציה

\`\`\`c
return_type function_name(type param1, type param2, ...) {
    // גוף הפונקציה
    return value;  // אם אין החזרה: void
}
\`\`\`

דוגמה:
\`\`\`c
int add(int a, int b) {
    return a + b;
}
\`\`\`

---

## אבטיפוס (Prototype)

הצהרה על פונקציה לפני main, מאפשרת קריאה לפני ההגדרה:

\`\`\`c
// בראש הקובץ
int add(int a, int b);     // אבטיפוס
void printLine(int n);      // ניתן להשמיט שמות פרמטרים: void printLine(int);

int main() {
    printf("%d\\n", add(3, 4));  // אפשרי בגלל האבטיפוס
}

int add(int a, int b) {    // הגדרה
    return a + b;
}
\`\`\`

---

## scope – תחום חיות משתנים

**משתנה מקומי (Local):** קיים רק בתוך הפונקציה שבה הוגדר.
**משתנה גלובלי (Global):** מוגדר מחוץ לכל פונקציה, נגיש מכל מקום.

\`\`\`c
int global = 10;  // גלובלי

void func() {
    int local = 5;   // מקומי
    printf("%d %d\\n", global, local);  // שניהם נגישים
}

int main() {
    printf("%d\\n", global);  // נגיש
    // printf("%d\\n", local);  // שגיאה! local לא קיים כאן
}
\`\`\`

**עדיפות לשימוש במשתנים מקומיים!** גלובלים עלולים לגרום לבאגים קשים.

---

## מודל ה-Stack

כל קריאה לפונקציה יוצרת **stack frame** חדש:

\`\`\`
Stack:
├─ main (x=5, y=10)
│  └─ add (a=5, b=10)
│     └─ max (a=5, b=10)
└─ ...
\`\`\`

- כשפונקציה מסתיימת, ה-frame נמחק
- הפרמטרים הם **עותקים** של הארגומנטים (pass by value)

---

## העברה לפי ערך (Pass by Value)

\`\`\`c
void tryChange(int x) {
    x = 100;  // שינוי עותק מקומי בלבד!
}

int main() {
    int a = 5;
    tryChange(a);
    printf("%d\\n", a);  // עדיין 5!
}
\`\`\`

להשפיע על המשתנה המקורי: העברה לפי מצביע (פרק 10).`,code:`#include <stdio.h>

// ========== אבטיפוסים ==========
int max(int a, int b);
int min(int a, int b);
double average(int arr[], int n);
int sumDigits(int n);
int isPrime(int n);
void printLine(char ch, int len);

// ========== הגדרות ==========
int max(int a, int b) {
    return (a > b) ? a : b;
}

int min(int a, int b) {
    return (a < b) ? a : b;
}

double average(int arr[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i++)
        sum += arr[i];
    return (double)sum / n;
}

int sumDigits(int n) {
    int sum = 0;
    if (n < 0) n = -n;
    while (n > 0) {
        sum += n % 10;
        n /= 10;
    }
    return sum;
}

int isPrime(int n) {
    if (n < 2) return 0;
    for (int i = 2; i * i <= n; i++)
        if (n % i == 0) return 0;
    return 1;
}

void printLine(char ch, int len) {
    for (int i = 0; i < len; i++)
        printf("%c", ch);
    printf("\\n");
}

// ========== main ==========
int main() {
    printLine('=', 30);
    printf("  הדגמת פונקציות\\n");
    printLine('=', 30);
    
    printf("max(7, 12) = %d\\n", max(7, 12));
    printf("min(7, 12) = %d\\n", min(7, 12));
    
    int grades[] = {85, 92, 78, 96, 88, 74, 91};
    int n = 7;
    printf("ממוצע: %.2f\\n", average(grades, n));
    
    printf("sumDigits(12345) = %d\\n", sumDigits(12345));
    
    printf("\\nמספרים ראשוניים עד 30: ");
    for (int i = 2; i <= 30; i++)
        if (isPrime(i))
            printf("%d ", i);
    printf("\\n");
    
    printLine('-', 30);
    return 0;
}`,traceTable:{headers:["קריאה","Stack Frame","חישוב","ערך מוחזר"],rows:[["max(7,12)","a=7, b=12","(7>12)?7:12","12"],["average([85..],7)","arr=..., n=7","sum=604/7","86.28"],["sumDigits(123)","n=123","3+2+1","6"],["isPrime(7)","n=7","2,3 לא מחלקים","1 (כן)"],["isPrime(9)","n=9","9%3==0","0 (לא)"]]},questions:[{q:"מה ההבדל בין פרמטר לארגומנט?",a:"פרמטר הוא המשתנה בהגדרת הפונקציה (int add(int a, int b) – a,b הם פרמטרים). ארגומנט הוא הערך שמועבר בקריאה (add(3,4) – 3,4 הם ארגומנטים)."},{q:"מה עניין ה-Stack בפונקציות?",a:"בכל קריאה לפונקציה נוצר stack frame עם המשתנים המקומיים שלה. כשהפונקציה מסתיימת, ה-frame נהרס. לכן משתנים מקומיים לא קיימים לאחר החזרה מהפונקציה."},{q:"מדוע C עובדת pass-by-value?",a:"הפונקציה מקבלת עותק של הארגומנטים, לא את המשתנים המקוריים. לכן שינוי פרמטר בתוך הפונקציה לא משפיע על המשתנה המקורי ב-main."}],exercises:["כתוב פונקציה powerInt(base, exp) שמחשבת בחזקה שלמה ללא pow.","כתוב פונקציה gcd(a,b) שמחשבת מחלק משותף גדול לפי אלגוריתם אוקלידס.","כתוב פונקציה isPalindrome(n) שבודקת אם מספר שלם הוא פלינדרום.","כתוב פונקציות sumArray, minArray, maxArray, rangeArray לעבודה עם מערכים."],challenge:"כתוב ספריה מתמטית: gcd, lcm, isPrime, nextPrime, countPrimes(n). השתמש בכל הפונקציות ב-main להדגמה.",quiz:[{q:"מה מחזירה פונקציה void?",options:["0","NULL","לא מחזירה כלום","1"],correct:2,explanation:"void פירושו 'לא מחזיר ערך'. ניתן לכתוב return; ריק, או לא לכתוב return כלל."},{q:"מה pass-by-value?",options:["העברת כתובת המשתנה","העברת עותק של הערך","שינוי המשתנה המקורי","החזרת מספר ערכים"],correct:1,explanation:"pass-by-value: הפונקציה מקבלת עותק. שינויים בפונקציה לא משפיעים על המשתנה המקורי."},{q:"מה אבטיפוס (prototype)?",options:["הגדרת פונקציה","הצהרה על פונקציה לפני שימוש בה","סוג החזרה בלבד","פונקציה ריקה"],correct:1,explanation:"prototype = הצהרה על הfooter של הפונקציה (שם, טיפוסים, ערך החזרה) לפני ההגדרה."},{q:'מה הפלט: int add(int a,int b){return a+b;} printf("%d",add(3,4));',options:["3","4","7","שגיאה"],correct:2,explanation:"add(3,4) = 3+4 = 7."},{q:'מה הפלט: void f(int x){x=100;} int main(){int a=5; f(a); printf("%d",a);}',options:["100","5","0","שגיאה"],correct:1,explanation:"pass by value: x הוא עותק. שינוי x לא משפיע על a. פלט: 5."},{q:"מה scope גלובלי?",options:["משתנה שנגיש רק בפונקציה","משתנה מחוץ לכל פונקציה הנגיש מכולן","פרמטר פונקציה","משתנה מקומי"],correct:1,explanation:"גלובלי = מוגדר מחוץ לכל פונקציה, נגיש מכל פונקציה בקובץ."},{q:"מה isPrime(7) מחזיר?",options:["0","1","7","שגיאה"],correct:1,explanation:"7 ראשוני. אין מחלק בין 2 ל-sqrt(7)≈2.6. מחזיר 1 (כן)."},{q:"מה ה-Stack בהקשר פונקציות?",options:["מבנה נתונים למיון","אזור זיכרון שמנהל קריאות פונקציה – LIFO","ספריית פונקציות","סוג לולאה"],correct:1,explanation:"Stack (מחסנית) LIFO: קריאת פונקציה מוסיפה frame; חזרה ממנה מסירה אותו."},{q:'מה הפלט: int max(int a,int b){return a>b?a:b;} printf("%d",max(7,3));',options:["3","7","1","0"],correct:1,explanation:"7>3=true → מחזיר a=7."},{q:"כמה ערכים יכולה פונקציה להחזיר בreturn?",options:["כמה שרוצים","0 בלבד","1 בלבד (או void)","2"],correct:2,explanation:"return מחזיר ערך אחד בלבד. כדי להחזיר מספר ערכים: מצביעים או struct."},{q:"מה sumDigits(123) מחזיר?",options:["3","6","123","0"],correct:1,explanation:'1+2+3=6. הפונקציה מחלקת: 123%10=3, 12%10=2, 1%10=1. סה"כ=6.'},{q:"מה קורה לmשתנה מקומי אחרי שהפונקציה מסתיימת?",options:["נשמר בזיכרון","נמחק עם stack frame","הופך לגלובלי","מוחזר אוטומטית"],correct:1,explanation:"משתנה מקומי חי על ה-stack. כשהפונקציה חוזרת, ה-frame נמחק ואיתו כל המשתנים המקומיים."},{q:'מה הפלט: int f(int n){if(n==0)return 1; return n*f(n-1);} printf("%d",f(4));',options:["4","24","12","8"],correct:1,explanation:"f(4)=4*f(3)=4*3*f(2)=4*3*2*f(1)=4*3*2*1*f(0)=4*3*2*1*1=24 (פקטוריאל)."},{q:"מה recursion (רקורסיה)?",options:["לולאה","פונקציה שקוראת לעצמה","פונקציה ללא פרמטרים","macro"],correct:1,explanation:"רקורסיה = פונקציה שקוראת לעצמה. חייבת תנאי בסיס שמפסיק את הקריאות."},{q:"מה printLine('*', 5) תדפיס לפי קוד הדוגמה?",options:["5","*****","* * * * *","5*"],correct:1,explanation:"הפונקציה מדפיסה ch פעמים len: '*' * 5 = *****."}]},{id:8,title:"מערכים חד-ממדיים",icon:"📦",hours:8,syllabus:"פרק 8",goals:["להגדיר ולאתחל מערך","לגשת לאלמנטים עם אינדקסים","לעבד מערך בלולאה","להעביר מערך לפונקציה","לעבוד עם מחרוזות (מערכי char)"],theory:`## מהו מערך?

**מערך** הוא אוסף של משתנים **מאותו טיפוס** בזיכרון רציף, תחת שם אחד.

\`\`\`c
int grades[5];                      // הגדרה ללא אתחול
int grades[5] = {85, 92, 78, 96, 88}; // עם אתחול
int grades[] = {85, 92, 78, 96, 88};  // גודל מחושב
\`\`\`

**אינדקס מתחיל מ-0!**
\`\`\`
grades: [85][92][78][96][88]
index:   [0] [1] [2] [3] [4]
\`\`\`

---

## גישה לאלמנטים

\`\`\`c
int grades[5] = {85, 92, 78, 96, 88};
printf("%d\\n", grades[0]);  // 85 – ראשון
printf("%d\\n", grades[4]);  // 88 – אחרון
grades[2] = 100;              // שינוי אלמנט
\`\`\`

**שגיאה קלאסית:** גישה מחוץ לגבולות!
\`\`\`c
int arr[5];
arr[5] = 10;  // שגיאה! אינדקס 5 מחוץ לגבולות
\`\`\`

---

## מעבר על מערך

\`\`\`c
int arr[5] = {10, 20, 30, 40, 50};
int n = 5;

// מעבר לפי לולאה
for (int i = 0; i < n; i++)
    printf("arr[%d]=%d\\n", i, arr[i]);
\`\`\`

---

## העברת מערך לפונקציה

מערך תמיד מועבר **לפי כתובת** (לא לפי ערך):

\`\`\`c
void doubleAll(int arr[], int n) {
    for (int i = 0; i < n; i++)
        arr[i] *= 2;  // משנה את המערך המקורי!
}
\`\`\`

---

## מחרוזות (מערכי char)

מחרוזת ב-C היא מערך char שמסתיים ב-'\\0':

\`\`\`c
char name[20] = "Alice";  // {'A','l','i','c','e','\\0'}
char name2[20];
scanf("%s", name2);        // ללא & כי שם מערך = כתובת

printf("%s\\n", name);     // הדפסת מחרוזת
int len = strlen(name);    // אורך (5, לא כולל \\0)
\`\`\``,code:`#include <stdio.h>
#include <string.h>

// ========== פונקציות מערך ==========
void printArray(int arr[], int n) {
    printf("[");
    for (int i = 0; i < n; i++) {
        printf("%d", arr[i]);
        if (i < n-1) printf(", ");
    }
    printf("]\\n");
}

int findMax(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++)
        if (arr[i] > max) max = arr[i];
    return max;
}

int findMin(int arr[], int n) {
    int min = arr[0];
    for (int i = 1; i < n; i++)
        if (arr[i] < min) min = arr[i];
    return min;
}

double average(int arr[], int n) {
    int sum = 0;
    for (int i = 0; i < n; i++) sum += arr[i];
    return (double)sum / n;
}

void reverseArray(int arr[], int n) {
    for (int i = 0; i < n/2; i++) {
        int temp = arr[i];
        arr[i] = arr[n-1-i];
        arr[n-1-i] = temp;
    }
}

int countAbove(int arr[], int n, int threshold) {
    int count = 0;
    for (int i = 0; i < n; i++)
        if (arr[i] > threshold) count++;
    return count;
}

int main() {
    int grades[] = {85, 92, 78, 96, 88, 74, 91, 67, 83};
    int n = 9;
    
    printf("מערך ציונים:\\n");
    printArray(grades, n);
    printf("מקסימום: %d\\n", findMax(grades, n));
    printf("מינימום: %d\\n", findMin(grades, n));
    printf("ממוצע:   %.2f\\n", average(grades, n));
    printf("מעל 80:  %d\\n", countAbove(grades, n, 80));
    
    reverseArray(grades, n);
    printf("הפוך: ");
    printArray(grades, n);
    
    // מחרוזות
    char name[] = "Alice";
    printf("\\nשם: %s\\n", name);
    printf("אורך: %lu\\n", strlen(name));
    
    return 0;
}`,traceTable:{headers:["i","arr[i]","arr[i]>max?","max עדכני"],rows:[["init","85","init","85"],["1","92","92>85 ✓","92"],["2","78","78>92 ✗","92"],["3","96","96>92 ✓","96"],["4","88","88>96 ✗","96"],["5","74","74>96 ✗","96"],["6","91","91>96 ✗","96"],["→ תוצאה","","","96"]]},questions:[{q:"מה האינדקס הראשון ומה האחרון במערך בגודל N?",a:"ראשון: 0, אחרון: N-1. מערך grades[10] → ראשון grades[0], אחרון grades[9]."},{q:"למה מעבירים מערך לפונקציה ללא & בעוד int מועבר עם &?",a:"שם מערך ב-C הוא כתובת האלמנט הראשון שלו. לכן לא צריך &. int הוא ערך, ולהעברה לפי reference צריך &."}],exercises:["כתוב פונקציה secondMax(arr, n) שמחזירה את המקסימום השני.","כתוב פונקציה countOdd(arr, n) שסופרת מספרים אי-זוגיים.","כתוב פונקציה shiftLeft(arr, n) שמזיזה כל אלמנט שמאלה בעמדה אחת.","כתוב פונקציה mergeSorted(a, na, b, nb, result) שממזגת שני מערכים ממוינים."],challenge:"ממש מנגנון שמקבל מערך ציונים, מחשב ממוצע, סטיית תקן, ומדפיס לכל ציון את מרחקו מהממוצע בסטיות תקן (Z-score).",quiz:[{q:"מה האינדקס האחרון במערך int arr[8]?",options:["8","7","9","0"],correct:1,explanation:"מערך בגודל 8: אינדקסים 0 עד 7. arr[8] הוא מחוץ לגבולות!"},{q:"כשמעבירים מערך לפונקציה, שינויים בפונקציה:",options:["לא משפיעים על המקורי","משפיעים על המקורי","תלוי בטיפוס","שגיאת קומפילציה"],correct:1,explanation:"מערך מועבר כמצביע לאלמנט הראשון. שינויים בפונקציה משנים את המערך המקורי."},{q:'מה הפלט: int arr[]={10,20,30}; printf("%d",arr[1]);',options:["10","20","30","0"],correct:1,explanation:"arr[1] = אלמנט שני = 20. אינדקסים מתחילים ב-0."},{q:"מה findMax({85,92,78,96,88}, 5) מחזיר?",options:["85","92","96","88"],correct:2,explanation:"המקסימום במערך {85,92,78,96,88} הוא 96."},{q:"מה קורה ב: int arr[5]; arr[5]=10;?",options:["עובד תמיד","שגיאת קומפילציה","undefined behavior / גלישת גבולות","מרחיב את המערך"],correct:2,explanation:"arr[5] הוא מחוץ לגבולות (גודל 5 → אינדקסים 0-4). גלישת גבולות = undefined behavior."},{q:"מה ההבדל בין int arr[5] ל-int arr[]={1,2,3}?",options:["אין הבדל","הראשון: גודל 5, לא מאותחל. השני: גודל 3, מאותחל","השני חסר גודל ולא יתקמפל","הראשון מהיר יותר"],correct:1,explanation:"arr[5]: מקצה 5 int לא מאותחלים. arr[]={1,2,3}: המהדר מחשב גודל=3 אוטומטית."},{q:'מה הפלט: int a[]={2,4,6,8}; int s=0; for(int i=0;i<4;i++) s+=a[i]; printf("%d",s);',options:["10","20","8","24"],correct:1,explanation:"2+4+6+8=20."},{q:"כמה בתים תופס: int arr[10]?",options:["10","20","40","80"],correct:2,explanation:"sizeof(int)=4, 10 אלמנטים: 4×10=40 בתים."},{q:"מה reverseArray({1,2,3,4,5}, 5) תייצר?",options:["{5,4,3,2,1}","{1,2,3,4,5}","{5,1,2,3,4}","{4,3,2,1,5}"],correct:0,explanation:"הפיכת מערך מחליפה arr[0]↔arr[4], arr[1]↔arr[3]: {5,4,3,2,1}."},{q:"מה sizeof(arr)/sizeof(arr[0]) מחשב?",options:["גודל הבית הראשון","מספר האלמנטים במערך","גודל המערך בבתים","כתובת המערך"],correct:1,explanation:"גודל כולל / גודל אלמנט = מספר אלמנטים. דרך נפוצה לחשב גודל מערך."},{q:'מה הפלט: char name[]="Hi"; printf("%d",strlen(name));',options:["2","3","1","0"],correct:0,explanation:`strlen סופר תווים עד \\0 (לא כולל). "Hi" = 'H','i','\\0' → אורך 2.`},{q:"מהי שגיאה קלאסית עם מחרוזות ב-C?",options:["שימוש ב-strlen","חציית \\0 בקריאה/כתיבה","הגדרת מערך char","שימוש ב-printf %s"],correct:1,explanation:"buffer overflow = כתיבה מעבר לגודל המערך. למשל: strcpy(arr, מחרוזת ארוכה מ-arr)."},{q:'מה הפלט: int a[]={5,3,8,1}; printf("%d",a[0]+a[3]);',options:["6","13","8","5"],correct:0,explanation:"a[0]=5, a[3]=1. 5+1=6."},{q:"מה countAbove({80,90,70,95,85},5,80) מחזיר?",options:["2","3","4","5"],correct:1,explanation:"מעל 80 (לא כולל): 90,95,85 → 3 אלמנטים."},{q:'מה הפלט: int a[3]={0}; printf("%d %d %d",a[0],a[1],a[2]);',options:["0 0 0","? ? ?","1 2 3","שגיאה"],correct:0,explanation:"int a[3]={0} מאתחל כל האלמנטים ל-0. פלט: 0 0 0."}]},{id:9,title:"מערכים דו-ממדיים",icon:"🗂️",hours:6,syllabus:"פרק 9",goals:["להגדיר ולאתחל מטריצה","לגשת לאלמנטים עם שני אינדקסים","לעבד מטריצה בלולאות מקוננות","לחפש סדרתית ובינארית במערכים"],theory:`## מטריצה (מערך דו-ממדי)

מטריצה היא מערך של מערכים:

\`\`\`c
int mat[3][4];              // 3 שורות, 4 עמודות
int mat[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9,10,11,12}
};
printf("%d\\n", mat[1][2]); // 7 (שורה 1, עמודה 2)
\`\`\`

---

## מעבר על מטריצה

\`\`\`c
for (int i = 0; i < rows; i++) {       // לולאת שורות
    for (int j = 0; j < cols; j++) {   // לולאת עמודות
        printf("%4d", mat[i][j]);
    }
    printf("\\n");
}
\`\`\`

---

## פעולות נפוצות על מטריצה

\`\`\`c
// סכום שורה
int rowSum(int mat[][COLS], int row, int cols) {
    int s = 0;
    for (int j = 0; j < cols; j++) s += mat[row][j];
    return s;
}

// אלכסון ראשי
for (int i = 0; i < n; i++) diag += mat[i][i];

// אלכסון משני
for (int i = 0; i < n; i++) anti += mat[i][n-1-i];

// מטריצה סימטרית? mat[i][j] == mat[j][i]
\`\`\`

---

## חיפוש סדרתי (Sequential Search) – O(n)

\`\`\`c
int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++)
        if (arr[i] == target) return i;
    return -1;  // לא נמצא
}
\`\`\`

---

## חיפוש בינארי (Binary Search) – O(log n)

**דורש מערך ממוין!**

\`\`\`c
int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1;
    while (low <= high) {
        int mid = (low + high) / 2;
        if (arr[mid] == target) return mid;
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
\`\`\`

**למה O(log n)?** בכל שלב חוצים את המרחב לחצי: 1024 → 512 → 256 → ... → 1. מספר שלבים: log₂(n).`,code:`#include <stdio.h>
#define ROWS 4
#define COLS 4

void printMatrix(int mat[][COLS], int rows) {
    printf("     ");
    for (int j = 0; j < COLS; j++) printf("  [%d]", j);
    printf("\\n");
    for (int i = 0; i < rows; i++) {
        printf("[%d]  ", i);
        for (int j = 0; j < COLS; j++)
            printf("%5d", mat[i][j]);
        printf("\\n");
    }
}

int sumRow(int mat[][COLS], int row) {
    int s = 0;
    for (int j = 0; j < COLS; j++) s += mat[row][j];
    return s;
}

int findMax(int mat[][COLS], int rows) {
    int max = mat[0][0];
    for (int i = 0; i < rows; i++)
        for (int j = 0; j < COLS; j++)
            if (mat[i][j] > max) max = mat[i][j];
    return max;
}

// חיפוש בינארי
int binarySearch(int arr[], int n, int target) {
    int low = 0, high = n - 1, steps = 0;
    while (low <= high) {
        int mid = (low + high) / 2;
        steps++;
        printf("  שלב %d: בדוק arr[%d]=%d\\n", steps, mid, arr[mid]);
        if (arr[mid] == target) {
            printf("  נמצא ב-%d שלבים!\\n", steps);
            return mid;
        }
        if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    printf("  לא נמצא ב-%d שלבים\\n", steps);
    return -1;
}

int main() {
    int mat[ROWS][COLS] = {
        { 1, 2, 3, 4},
        { 5, 6, 7, 8},
        { 9,10,11,12},
        {13,14,15,16}
    };
    
    printf("=== מטריצה ===\\n");
    printMatrix(mat, ROWS);
    
    int diagSum = 0;
    for (int i = 0; i < ROWS; i++) diagSum += mat[i][i];
    printf("\\nאלכסון ראשי: ");
    for (int i = 0; i < ROWS; i++) printf("%d ", mat[i][i]);
    printf("= %d\\n", diagSum);
    
    printf("\\nסכום שורה 0: %d\\n", sumRow(mat, 0));
    printf("מקסימום: %d\\n", findMax(mat, ROWS));
    
    printf("\\n=== חיפוש בינארי ===\\n");
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    printf("מערך: 2 5 8 12 16 23 38 56 72 91\\n");
    printf("\\nחיפוש 23:\\n");
    binarySearch(arr, 10, 23);
    printf("\\nחיפוש 50:\\n");
    binarySearch(arr, 10, 50);
    
    return 0;
}`,traceTable:{headers:["שלב","low","high","mid","arr[mid]","פעולה"],rows:[["1","0","9","4","16","16<23 → low=5"],["2","5","9","7","56","56>23 → high=6"],["3","5","6","5","23","23==23 ✓ נמצא!"]]},questions:[{q:"מה ההבדל בין חיפוש סדרתי לבינארי?",a:"סדרתי: בודק כל אלמנט בסדר, O(n), עובד על כל מערך. בינארי: חוצה לחצי בכל שלב, O(log n), מחייב מערך ממוין."}],exercises:["כתוב פונקציה שמחשבת את סכום כל עמודה במטריצה.","כתוב פונקציה שבודקת אם מטריצה ריבועית היא סימטרית.","ממש כפל שתי מטריצות (n×m) × (m×k).","כתוב פונקציה שמוצאת את האלמנט הגדול ביותר בכל שורה.","כתוב פונקציה שמחשבת את סכום האלכסון הראשי והמשני.","ממש חיפוש בינארי עם ספירת שלבים ומדפיס כל השוואה.","כתוב פונקציה שמסובבת מטריצה 90 מעלות ימינה."],challenge:"ממש שחמט: צור מטריצה 8×8, הצב קצת כלים, כתוב פונקציה שבודקת מהלכים חוקיים לרץ.",quiz:[{q:"מה הסיבוכיות של חיפוש בינארי?",options:["O(n)","O(n²)","O(log n)","O(1)"],correct:2,explanation:"בכל שלב חוצים את מרחב החיפוש לחצי. מספר שלבים: log₂(n)."},{q:"מה דרוש לחיפוש בינארי?",options:["מערך ממוין","מערך עם מספרים ייחודיים","מערך גדול","אין דרישה"],correct:0,explanation:"חיפוש בינארי דורש מערך ממוין. ללא מיון התוצאה אינה מהימנה."},{q:'מה הפלט: int m[2][3]={{1,2,3},{4,5,6}}; printf("%d",m[1][2]);',options:["3","5","6","2"],correct:2,explanation:"m[1][2] = שורה 1 (שנייה), עמודה 2 (שלישית) = 6."},{q:"כמה אלמנטים יש במטריצה int mat[4][5]?",options:["9","20","45","25"],correct:1,explanation:"4 שורות × 5 עמודות = 20 אלמנטים."},{q:"מה האלכסון הראשי של מטריצה ריבועית?",options:["שורה ראשונה","עמודה אחרונה","האלמנטים שבהם i==j","שורה אחרונה"],correct:2,explanation:"אלכסון ראשי = כל mat[i][i]: mat[0][0], mat[1][1], mat[2][2]..."},{q:"מה הסיבוכיות של חיפוש סדרתי (linear)?",options:["O(1)","O(log n)","O(n)","O(n²)"],correct:2,explanation:"חיפוש סדרתי עובר על כל האלמנטים אחד אחד: O(n)."},{q:"חיפוש בינארי במערך של 1024 אלמנטים דורש לכל היותר כמה השוואות?",options:["10","512","1024","100"],correct:0,explanation:"log₂(1024) = 10. בכל שלב מחצים: 1024→512→256→...→1."},{q:"מה linearSearch({5,3,8,1,9}, 5, 8) מחזיר?",options:["8","2","3","-1"],correct:1,explanation:"8 נמצא באינדקס 2 (arr[0]=5, arr[1]=3, arr[2]=8). מחזיר 2."},{q:"מה מחזיר binarySearch אם הערך לא נמצא?",options:["0","NULL","-1","n"],correct:2,explanation:"מוסכם להחזיר -1 כערך שגיאה/לא נמצא (כי -1 אינו אינדקס חוקי)."},{q:'מה הפלט: int mat[3][3]={{1,2,3},{4,5,6},{7,8,9}}; int s=0; for(int i=0;i<3;i++) s+=mat[i][i]; printf("%d",s);',options:["9","15","12","45"],correct:1,explanation:"אלכסון ראשי: mat[0][0]+mat[1][1]+mat[2][2] = 1+5+9 = 15."},{q:"מה הבדל בין מטריצה סימטרית לא-סימטרית?",options:["מטריצה ריבועית לעומת מלבנית","mat[i][j]==mat[j][i] לכל i,j","כל הערכים זהים","האלכסון 0"],correct:1,explanation:"מטריצה סימטרית: mat[i][j] == mat[j][i] לכל i,j. כלומר שווה לצירה."},{q:"כמה שורות ועמודות יש ב-int mat[ROWS][COLS] כשROWS=3, COLS=4?",options:["4 שורות, 3 עמודות","3 שורות, 4 עמודות","7 שורות","12 שורות"],correct:1,explanation:"int mat[ROWS][COLS]: ROWS=3 שורות, COLS=4 עמודות."},{q:"מהו יתרון חיפוש בינארי על סדרתי?",options:["עובד על כל סוגי הנתונים","מהיר בהרבה: O(log n) לעומת O(n)","לא דורש מיון","פשוט יותר לתכנות"],correct:1,explanation:"O(log n) << O(n) לn גדול. למשל n=1,000,000: בינארי≤20 שלבים, סדרתי≤1,000,000."},{q:'מה הפלט: int mat[2][2]={{1,2},{3,4}}; printf("%d",mat[0][1]+mat[1][0]);',options:["3","5","7","6"],correct:1,explanation:"mat[0][1]=2, mat[1][0]=3. 2+3=5."},{q:"כיצד מגדירים פונקציה שמקבלת מטריצה int mat[ROWS][COLS]?",options:["void f(int mat[][])","void f(int mat[][COLS], int rows)","void f(int **mat)","void f(int mat[ROWS][COLS])"],correct:1,explanation:"בהעברת מטריצה לפונקציה, מספר העמודות חייב להיות מוגדר. השורות ניתן להשמיט."}]},{id:10,title:"מצביעים",icon:"👆",hours:8,syllabus:"פרק 10",goals:["להבין מהו מצביע וכיצד הוא עובד","להשתמש ב-& ו-*","להעביר פרמטרים לפי reference","להכיר שקילות מערך-מצביע"],theory:`## מהו מצביע?

**מצביע** הוא משתנה שמכיל **כתובת זיכרון** של משתנה אחר.

\`\`\`c
int x = 5;
int *ptr = &x;    // ptr מכיל את כתובת x
printf("%d\\n", *ptr);  // 5 – ניתור (dereference)
*ptr = 10;              // שינוי x דרך ptr
printf("%d\\n", x);     // 10
\`\`\`

- **&x** – כתובת (address of) x
- ***ptr** – ערך שנמצא בכתובת ptr (dereference)

---

## הגדרה ואתחול

\`\`\`c
int *p;        // מצביע ל-int (לא מאותחל – מסוכן!)
int *p = NULL; // מצביע NULL – בטוח
int x = 5;
p = &x;        // p מצביע על x
\`\`\`

---

## העברה לפי reference (Pass by Pointer)

\`\`\`c
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// קריאה:
int x=3, y=7;
swap(&x, &y);  // מעבר כתובות!
// עכשיו x=7, y=3
\`\`\`

---

## שקילות מערך-מצביע

\`\`\`c
int arr[] = {10, 20, 30};
int *p = arr;     // p מצביע על arr[0]

printf("%d\\n", arr[1]);   // 20
printf("%d\\n", *(p+1));   // 20 – שקול!
printf("%d\\n", p[1]);     // 20 – גם שקול!
\`\`\`

**arr+i** = כתובת arr[i], ***(arr+i)** = arr[i]

---

## מצביעים לפונקציות

\`\`\`c
int apply(int arr[], int n, int (*func)(int)) {
    int result = 0;
    for (int i = 0; i < n; i++)
        result += func(arr[i]);
    return result;
}
\`\`\``,code:`#include <stdio.h>
#include <stdlib.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// החזרת שתי תוצאות דרך מצביעים
void minMax(int arr[], int n, int *minVal, int *maxVal) {
    *minVal = *maxVal = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < *minVal) *minVal = arr[i];
        if (arr[i] > *maxVal) *maxVal = arr[i];
    }
}

// מעבר מערך במצביע
void printWithPtr(int *arr, int n) {
    for (int i = 0; i < n; i++)
        printf("%d ", *(arr + i));
    printf("\\n");
}

// מיון בועות עם מצביעים
void bubbleSort(int *arr, int n) {
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1])
                swap(&arr[j], &arr[j+1]);
}

int main() {
    int x = 3, y = 7;
    printf("לפני swap: x=%d, y=%d\\n", x, y);
    swap(&x, &y);
    printf("אחרי swap: x=%d, y=%d\\n", x, y);
    
    // מצביעים – הגדרה וניתור
    int val = 42;
    int *p = &val;
    printf("\\nval = %d\\n", val);
    printf("&val = %p\\n", (void*)&val);
    printf("p = %p\\n", (void*)p);
    printf("*p = %d\\n", *p);
    *p = 100;
    printf("אחרי *p=100: val=%d\\n", val);
    
    // minMax דרך מצביעים
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = 7, minV, maxV;
    minMax(arr, n, &minV, &maxV);
    printf("\\nmin=%d, max=%d\\n", minV, maxV);
    
    printf("לפני מיון: "); printWithPtr(arr, n);
    bubbleSort(arr, n);
    printf("אחרי מיון: "); printWithPtr(arr, n);
    
    return 0;
}`,traceTable:{headers:["שורה","x (0x100)","y (0x104)","*a","*b","temp"],rows:[["קריאת swap(&x,&y)","3","7","→x=3","→y=7","—"],["temp = *a","3","7","3","7","3"],["*a = *b","7","7","7","7","3"],["*b = temp","7","3","7","3","3"],["חזרה מ-swap","7","3","—","—","—"]]},questions:[{q:"מה ההבדל בין & ל-* בהגדרת מצביע?",a:"& (address-of): מחזיר את כתובת המשתנה. * בהגדרה: מגדיר שהמשתנה הוא מצביע. * בשימוש (dereference): מחזיר את הערך שבכתובת. int *p=&x: p מכיל כתובת x, *p מחזיר ערך x."}],exercises:["כתוב פונקציה שמקבלת מחרוזת ומחזירה מצביע לתו הראשון שאינו רווח.","כתוב פונקציה בטוחה לחיפוש בינארי שמחזירה NULL אם לא נמצא.","כתוב פונקציה swap(int *a, int *b) ובדוק אותה.","ממש מיון בועות עם מצביעים (ללא אינדקסים).","כתוב פונקציה minMax(int *arr, int n, int *minVal, int *maxVal) שמחזירה שניים דרך מצביעים.","כתוב פונקציה שמחזירה מצביע לאלמנט המקסימלי במערך.","ממש פונקציה שהופכת מחרוזת in-place דרך מצביעים."],challenge:"ממש qsort בעצמך עם פונקציית השוואה כמצביע לפונקציה.",quiz:[{q:"אם int *p = &x, מה *p?",options:["כתובת x","ערך x","כתובת p","NULL"],correct:1,explanation:"*p = dereference = הערך שנמצא בכתובת שp מצביע עליה = ערך x."},{q:"מה & עושה ב-C?",options:["AND ביטי","מחזיר כתובת המשתנה בזיכרון","מגדיר מצביע","ניתור (dereference)"],correct:1,explanation:"&x = כתובת המשתנה x בזיכרון. בהקשר מצביעים: int *p = &x."},{q:'מה הפלט: int x=5; int *p=&x; *p=10; printf("%d",x);',options:["5","10","0","כתובת"],correct:1,explanation:"*p=10 שינה את הערך שp מצביע עליו, כלומר שינה את x. פלט: 10."},{q:"מה NULL pointer?",options:["מצביע שמצביע על 0","מצביע לא מאותחל","ערך מיוחד שמסמן שהמצביע לא מצביע על כלום","מצביע פנוי לשימוש"],correct:2,explanation:"NULL = (void*)0. מסמן שהמצביע לא מצביע על כתובת חוקית. בטוח כביקורת."},{q:'מה הפלט: int a[]={1,2,3}; int *p=a; printf("%d",*(p+1));',options:["1","2","3","כתובת"],correct:1,explanation:"p מצביע על a[0]. p+1 מצביע על a[1]=2. *(p+1)=2."},{q:"מה void swap(int *a, int *b) עושה ב-swap(&x,&y)?",options:["מחליפה עותקים","מחליפה ערכי x ו-y דרך המצביעים","לא מחליפה כלום","שגיאת קומפילציה"],correct:1,explanation:"העברת &x,&y מאפשרת לפונקציה לשנות את x ו-y ישירות דרך ניתור."},{q:"מה arr[i] שקול ל?",options:["&arr+i","*(arr+i)","*arr[i]","arr+(i*4)"],correct:1,explanation:"arr[i] ≡ *(arr+i). שני הביטויים גוישים לאותה כתובת."},{q:"מה גדול יותר: sizeof(int*) או sizeof(int)?",options:["sizeof(int) תמיד גדול","שווים תמיד","sizeof(int*) תלוי בארכיטקטורה (4 או 8)","sizeof(int*) תמיד 2"],correct:2,explanation:"מצביע: 4 בתים ב-32-bit, 8 בתים ב-64-bit. sizeof(int)=4 תמיד."},{q:'מה הפלט: int x=3, y=7; swap(&x,&y); printf("%d %d",x,y);',options:["3 7","7 3","0 0","שגיאה"],correct:1,explanation:"swap מחליפה את הערכים דרך מצביעים. x=7, y=3. פלט: 7 3."},{q:"מה *NULL גורם?",options:["מחזיר 0","segmentation fault / undefined behavior","מחזיר NULL","שגיאת קומפילציה"],correct:1,explanation:"ניתור NULL = גישה לכתובת 0 → segfault. תמיד לבדוק ptr!=NULL לפני ניתור."},{q:"מה 'pointer arithmetic'?",options:["חיבור שני מצביעים","חיבור/חיסור int למצביע, קפיצה לאלמנט הבא/הקודם","כפל מצביע במספר","השוואת ערכים"],correct:1,explanation:"p+1 מקדם את המצביע ב-sizeof(*p) בתים. עבור int*: p+1 = p+4 כתובות."},{q:'מה הפלט: int *p=NULL; if(p) printf("A"); else printf("B");',options:["A","B","שגיאה","אין פלט"],correct:1,explanation:"NULL = 0 = שקר. if(NULL) → else → B."},{q:'מה הפלט: int a=5; int *p=&a; (*p)++; printf("%d",a);',options:["5","6","כתובת","שגיאה"],correct:1,explanation:"(*p)++ = קידום ערך a דרך המצביע. a מקבל 5+1=6."},{q:"כדי לקבל כתובת של משתנה x, כותבים:",options:["*x","&x","x*","->x"],correct:1,explanation:"&x מחזיר את כתובת x בזיכרון. *x הוא ניתור (ל-x שהוא מצביע)."},{q:"מה הסיבה העיקרית להעביר מצביע לפונקציה?",options:["לחסוך זיכרון","לאפשר לפונקציה לשנות את המשתנה המקורי","מהירות ריצה","לא צריך & בקריאה"],correct:1,explanation:"pass by pointer מאפשר לפונקציה לשנות את המשתנה המקורי דרך הניתור."}]},{id:11,title:"מחרוזות",icon:"📝",hours:6,syllabus:"פרק 11",goals:["להבין ייצוג מחרוזות כמערך char עם \\0","להשתמש בפונקציות string.h","לעבד מחרוזות (חיפוש, החלפה, ספירה)","להשתמש בפונקציות ctype.h"],theory:`## מחרוזות ב-C

מחרוזת ב-C היא **מערך char** שמסתיים ב-'\\0' (null terminator):

\`\`\`c
char str[] = "Hello";
// זהה ל: {'H','e','l','l','o','\\0'}
// גודל בזיכרון: 6 בתים!
\`\`\`

---

## פונקציות string.h

| פונקציה | תיאור | דוגמה |
|---------|--------|--------|
| strlen(s) | אורך (ללא \\0) | strlen("Hello")=5 |
| strcpy(d,s) | העתק src ל-dst | strcpy(a,b) |
| strncpy(d,s,n) | העתק עד n תווים | strncpy(a,b,10) |
| strcat(d,s) | שרשר src ל-dst | strcat(a," World") |
| strncat(d,s,n) | שרשר עד n תווים | — |
| strcmp(a,b) | השווה (0=שווה) | strcmp("ab","ab")=0 |
| strncmp(a,b,n) | השווה עד n | — |
| strchr(s,c) | מצא תו ראשון | strchr("hello",'l') |
| strrchr(s,c) | מצא תו אחרון | — |
| strstr(s,sub) | מצא תת-מחרוזת | strstr("hello","ell") |
| strtok(s,d) | פיצול לפי מפריד | strtok(str," ") |
| atoi(s) | string ל-int | atoi("42")=42 |
| atof(s) | string ל-double | atof("3.14") |

---

## פונקציות ctype.h

\`\`\`c
isalpha(c)   // האם אות?
isdigit(c)   // האם ספרה?
isspace(c)   // האם whitespace?
isupper(c)   // האם אות גדולה?
islower(c)   // האם אות קטנה?
toupper(c)   // המר לגדולה
tolower(c)   // המר לקטנה
\`\`\``,code:`#include <stdio.h>
#include <string.h>
#include <ctype.h>

// ספירת מילים במחרוזת
int countWords(char *str) {
    int count = 0;
    int inWord = 0;
    for (int i = 0; str[i]; i++) {
        if (!isspace(str[i]) && !inWord) {
            count++;
            inWord = 1;
        } else if (isspace(str[i]))
            inWord = 0;
    }
    return count;
}

// הפיכת מחרוזת
void reverseStr(char *str) {
    int n = strlen(str);
    for (int i = 0; i < n/2; i++) {
        char tmp = str[i];
        str[i] = str[n-1-i];
        str[n-1-i] = tmp;
    }
}

// בדיקת פלינדרום
int isPalindrome(char *str) {
    int n = strlen(str), i=0, j=n-1;
    while (i < j) {
        if (tolower(str[i]) != tolower(str[j])) return 0;
        i++; j--;
    }
    return 1;
}

int main() {
    char s1[100] = "Hello";
    char s2[] = " World";
    
    printf("אורך '%s': %lu\\n", s1, strlen(s1));
    strcat(s1, s2);
    printf("שרשור: %s\\n", s1);
    printf("מילים: %d\\n", countWords(s1));
    
    // strcmp
    printf("\\nהשוואה:\\n");
    printf("strcmp(abc,abc) = %d\\n", strcmp("abc","abc"));
    printf("strcmp(abc,abd) = %d\\n", strcmp("abc","abd"));
    
    // strtok
    printf("\\nפיצול לפי ' ':\\n");
    char sentence[] = "the quick brown fox";
    char *tok = strtok(sentence, " ");
    int i = 1;
    while (tok) {
        printf("  מילה %d: %s\\n", i++, tok);
        tok = strtok(NULL, " ");
    }
    
    // פלינדרום
    char words[][20] = {"racecar", "hello", "madam", "world"};
    for (i = 0; i < 4; i++)
        printf("\\n'%s' %s פלינדרום", words[i],
               isPalindrome(words[i]) ? "הוא" : "אינו");
    printf("\\n");
    
    // ctype
    printf("\\nניתוח '%s':\\n", "Hello123!");
    for (char *p = "Hello123!"; *p; p++) {
        if (isalpha(*p)) printf("'%c' אות\\n", *p);
        else if (isdigit(*p)) printf("'%c' ספרה\\n", *p);
        else printf("'%c' תו מיוחד\\n", *p);
    }
    
    return 0;
}`,traceTable:{headers:["פעולה","s1 לפני","s1 אחרי","תוצאה"],rows:[['strlen("Hello")',"Hello","—","5"],['strcat(s1," World")',"Hello","Hello World","—"],['strcmp("abc","abc")',"—","—","0 (שוות)"],['strcmp("abc","abd")',"—","—","-1 (abc<abd)"],['isPalindrome("racecar")',"—","—","1 (כן)"],['isPalindrome("hello")',"—","—","0 (לא)"]]},questions:[{q:"מה \\0 ולמה חשוב?",a:"תו null (ערך ASCII 0) שמסמן סוף מחרוזת ב-C. פונקציות כמו strlen, printf('%s') מחפשות \\0 כדי לדעת היכן המחרוזת מסתיימת. ללא \\0 תהיה גלישה מחוץ לגבולות."},{q:"מה מחזיר strcmp כשהמחרוזות שוות? כשהראשונה קטנה?",a:"0 כשהן שוות. ערך שלילי כשהראשונה קטנה לקסיקוגרפית. ערך חיובי כשהראשונה גדולה."}],exercises:["כתוב פונקציה שממירה מחרוזת לCamelCase.","כתוב פונקציה שסופרת הופעות של תו במחרוזת.","כתוב פונקציה שמחליפה כל הופעה של תת-מחרוזת באחרת.","כתוב פונקציה שבודקת אם שתי מחרוזות הן אנגרמות זו של זו.","ממש פונקציה trim(str) שמוחקת רווחים מתחילת וסוף מחרוזת.","כתוב פונקציה שממירה מחרוזת של מילים לCROSS_CASE.","ממש פונקציה שמשרשרת מערך מחרוזות עם מפריד בין כל שניים."],challenge:"ממש פונקציה שמנתחת ביטוי מתמטי פשוט כמחרוזת ('3+4*2') ומחשבת את התוצאה לפי סדר פעולות.",quiz:[{q:"מה מחזיר strlen('Hello')?",options:["6","5","4","0"],correct:1,explanation:"strlen סופר תווים עד \\0 (לא כולל). 'Hello' = 5 תווים."},{q:"מה מחזיר strcmp('abc','abc')?",options:["1","0","-1","true"],correct:1,explanation:"strcmp מחזיר 0 אם המחרוזות זהות."},{q:'כמה בתים תופסת המחרוזת "Hello" בזיכרון?',options:["5","6","4","10"],correct:1,explanation:"'H','e','l','l','o','\\0' = 6 בתים. ה-\\0 תופס בית נוסף."},{q:'מה הפלט: char s[]="abc"; printf("%d",strlen(s));',options:["4","3","2","0"],correct:1,explanation:'strlen("abc") = 3. לא סופר את ה-\\0.'},{q:'מה strcat("Hello", " World") מחזיר?',options:['"Hello"','" World"','"Hello World"',"שגיאה"],correct:2,explanation:'strcat שרשרת src אל dst ומחזיר מצביע ל-dst. התוצאה: "Hello World".'},{q:"מה הבדל בין strcpy ל-strncpy?",options:["אין הבדל","strncpy מעתיקה לכל היותר n תווים – בטוחה יותר","strcpy בטוחה יותר","strncpy מוסיפה \\0 תמיד"],correct:1,explanation:"strncpy(dst, src, n) מעתיקה עד n תווים. מגנה מ-buffer overflow."},{q:"מה isdigit('7') מחזיר?",options:["0","7","ערך לא-אפס (אמת)","'7'"],correct:2,explanation:"isdigit מחזיר ערך לא-אפס אם התו הוא ספרה (0-9). '7' היא ספרה."},{q:"מה toupper('a') מחזיר?",options:["'a'","'A'","65","שגיאה"],correct:1,explanation:"toupper ממיר אות קטנה לגדולה. 'a' → 'A'."},{q:'מה isPalindrome("racecar") מחזיר?',options:["0","1","7","שגיאה"],correct:1,explanation:'"racecar" הפוך = "racecar". פלינדרום → מחזיר 1.'},{q:'מה strtok("hello world", " ") מחזיר בקריאה הראשונה?',options:['"hello world"','"hello"','"world"',"NULL"],correct:1,explanation:'strtok מפצל לפי המפריד. קריאה ראשונה: מחזיר "hello".'},{q:'מה atoi("42abc") מחזיר?',options:["0","42","שגיאה",'"42abc"'],correct:1,explanation:'atoi ממיר מחרוזת ל-int עד שתוקע בתו לא-מספרי. "42abc" → 42.'},{q:`מה הפלט: char s[10]="Hi"; s[1]='o'; printf("%s",s);`,options:["Hi","Ho","H","oi"],correct:1,explanation:`s[1]='o' מחליף 'i' ב-'o'. המחרוזת הופכת ל-"Ho".`},{q:`מה strchr("hello", 'l') מחזיר?`,options:["NULL","2","מצביע לתו 'l' הראשון","'l'"],correct:2,explanation:"strchr מחזיר מצביע לתו הראשון שמוצא, או NULL אם לא נמצא."},{q:'מה strcmp("abc","abd") מחזיר?',options:["0","ערך שלילי","ערך חיובי","1"],correct:1,explanation:'"abc" < "abd" (c < d). strcmp מחזיר ערך שלילי כשהראשונה קטנה.'},{q:"מה הדרך הנכונה להשוות מחרוזות ב-C?",options:["if(s1 == s2)","if(strcmp(s1,s2)==0)","if(*s1 == *s2)","if(s1 equals s2)"],correct:1,explanation:"s1==s2 משווה כתובות, לא תוכן. strcmp(s1,s2)==0 משווה את התוכן."}]},{id:12,title:"מיון וחיפוש",icon:"🔍",hours:8,syllabus:"פרק 12",goals:["לממש מיון בועות (Bubble Sort)","לממש מיון הכנסה (Insertion Sort)","לממש מיון בחירה (Selection Sort)","לממש חיפוש בינארי","להבין סיבוכיות O(n), O(n²), O(log n)"],theory:`## אלגוריתמי מיון

### מיון בועות (Bubble Sort) – O(n²)
בכל מעבר, "בועות" (האיברים הגדולים) צפות למעלה:

\`\`\`c
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) {
                int t = arr[j]; arr[j] = arr[j+1]; arr[j+1] = t;
            }
}
\`\`\`

**אופטימיזציה:** אם לא היו החלפות במעבר – המערך כבר ממוין!

---

### מיון הכנסה (Insertion Sort) – O(n²)
הכנס כל איבר למקומו הנכון בחלק הממוין:

\`\`\`c
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
}
\`\`\`

**יתרון:** יעיל על מערכים כמעט-ממוינים.

---

### מיון בחירה (Selection Sort) – O(n²)
מצא את המינימום, שים בהתחלה, חזור:

\`\`\`c
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int minIdx = i;
        for (int j = i+1; j < n; j++)
            if (arr[j] < arr[minIdx]) minIdx = j;
        if (minIdx != i) {
            int t = arr[i]; arr[i] = arr[minIdx]; arr[minIdx] = t;
        }
    }
}
\`\`\`

---

## השוואת אלגוריתמי מיון

| אלגוריתם | מקרה ממוצע | מקרה גרוע | זיכרון | יציב? |
|----------|------------|-----------|--------|-------|
| Bubble | O(n²) | O(n²) | O(1) | כן |
| Insertion | O(n²) | O(n²) | O(1) | כן |
| Selection | O(n²) | O(n²) | O(1) | לא |
| Merge | O(n log n) | O(n log n) | O(n) | כן |
| Quick | O(n log n) | O(n²) | O(log n) | לא |`,code:`#include <stdio.h>

void printArr(int arr[], int n, const char *label) {
    printf("%s: ", label);
    for (int i = 0; i < n; i++) printf("%3d", arr[i]);
    printf("\\n");
}

void swap(int *a, int *b) { int t=*a; *a=*b; *b=t; }

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int swapped = 0;
        for (int j = 0; j < n-i-1; j++)
            if (arr[j] > arr[j+1]) { swap(&arr[j],&arr[j+1]); swapped=1; }
        if (!swapped) break; // אופטימיזציה
    }
}

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i], j = i-1;
        while (j >= 0 && arr[j] > key) { arr[j+1]=arr[j]; j--; }
        arr[j+1] = key;
    }
}

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int minI = i;
        for (int j = i+1; j < n; j++)
            if (arr[j] < arr[minI]) minI = j;
        if (minI != i) swap(&arr[i], &arr[minI]);
    }
}

int binarySearch(int arr[], int n, int t) {
    int lo=0, hi=n-1;
    while (lo <= hi) {
        int mid = (lo+hi)/2;
        if (arr[mid]==t) return mid;
        if (arr[mid]<t) lo=mid+1; else hi=mid-1;
    }
    return -1;
}

int main() {
    int a[] = {64,25,12,22,11}, n=5;
    int b[] = {64,25,12,22,11};
    int c[] = {64,25,12,22,11};
    
    printArr(a, n, "מקורי   ");
    
    bubbleSort(a, n);    printArr(a, n, "Bubble  ");
    insertionSort(b, n); printArr(b, n, "Insertion");
    selectionSort(c, n); printArr(c, n, "Selection");
    
    printf("\\nחיפוש בינארי:");
    printf("\\n  [11,12,22,25,64], מחפש 22:");
    printf(" אינדקס %d\\n", binarySearch(a,5,22));
    
    return 0;
}`,traceTable:{headers:["מעבר i","מערך לפני","החלפות","מערך אחרי"],rows:[["i=0","[64,25,12,22,11]","64↔25, 64↔12, 64↔22, 64↔11","[25,12,22,11,64]"],["i=1","[25,12,22,11,64]","25↔12, 25↔22, 25↔11","[12,22,11,25,64]"],["i=2","[12,22,11,25,64]","22↔11","[12,11,22,25,64]"],["i=3","[12,11,22,25,64]","12↔11","[11,12,22,25,64]"],["i=4","[11,12,22,25,64]","—","[11,12,22,25,64] ✓"]]},questions:[{q:"מה הסיבוכיות של Bubble Sort ולמה?",a:'O(n²) כי יש לולאה מקוננת: הלולאה החיצונית רצה n-1 פעמים, הפנימית עד n-1 פעמים. סה"כ ~n²/2 השוואות.'}],exercises:["ממש Insertion Sort על מערך מחרוזות.","כתוב פונקציה שבודקת כמה החלפות דרושות ב-Bubble Sort.","ממש Merge Sort.","כתוב Selection Sort ובדוק מספר ההשוואות לעומת Bubble Sort.","ממש חיפוש בינארי רקורסיבי.","מדוד זמן ריצה של 3 אלגוריתמי מיון על מערך n=1000.","כתוב מיון שמוין תחילה לפי שדה אחד ואחר כך לפי שדה שני (stable)."],challenge:"ממש counting sort (O(n+k)) ובדוק ביצועים מול bubble sort על מערך של 10,000 איברים.",quiz:[{q:"מה הסיבוכיות של Bubble Sort?",options:["O(n)","O(n log n)","O(n²)","O(1)"],correct:2,explanation:"Bubble Sort: שתי לולאות מקוננות → O(n²) במקרה הממוצע והגרוע."},{q:"מה יתרון Insertion Sort?",options:["תמיד מהיר מ-Quick Sort","יעיל על מערכים כמעט-ממוינים","O(n log n) בכל מקרה","לא דורש זיכרון"],correct:1,explanation:"Insertion Sort יעיל על מערכים קטנים או כמעט-ממוינים: O(n) במקרה הטוב."},{q:"מה הסיבוכיות של חיפוש בינארי?",options:["O(n)","O(n²)","O(log n)","O(1)"],correct:2,explanation:"בכל שלב מחצים את מרחב החיפוש: O(log n)."},{q:"מה Selection Sort עושה בכל איטרציה?",options:["מחליף כל זוג סמוך","מוצא את המינימום ומניח אותו במקומו","מכניס את האלמנט הנוכחי למקומו הנכון","מפצל את המערך לחצאים"],correct:1,explanation:"Selection Sort: בכל מעבר מוצא את המינימום בחלק הלא-ממוין ומחליף אותו לתחילה."},{q:"אלגוריתם מיון עם סיבוכיות O(n log n) מהיר יותר מ-O(n²) כי:",options:["הוא פשוט יותר","log n << n לn גדול","הוא דורש פחות זיכרון","הוא לא דורש החלפות"],correct:1,explanation:"לn=1000: O(n²)=1,000,000 פעולות, O(n log n)≈10,000. הבדל של פי 100."},{q:"מה stable sort?",options:["מיון שתמיד מצליח","מיון ששומר על הסדר היחסי של אלמנטים שווים","מיון ב-O(n log n) תמיד","מיון ללא החלפות"],correct:1,explanation:"stable = אלמנטים עם ערך זהה נשארים בסדרם המקורי. Insertion Sort הוא stable."},{q:"כמה פעמים Bubble Sort עובר על מערך n=5?",options:["5","4","25","10"],correct:1,explanation:"Bubble Sort מבצע n-1=4 מעברים. בכל מעבר האלמנט הגדול 'צף' למעלה."},{q:"מה הסיבוכיות של Selection Sort?",options:["O(n)","O(n log n)","O(n²)","O(log n)"],correct:2,explanation:"Selection Sort: לכל אחד מn האלמנטים, מחפשים מינימום ב-n-i אלמנטים: O(n²)."},{q:"מה מספר ההשוואות המינימלי לחיפוש בינארי במערך n=8?",options:["1","3","4","8"],correct:0,explanation:"במקרה הטוב, הערך הוא האמצעי ומוצאים ב-1 השוואה."},{q:"מה Merge Sort?",options:["מיון עם זקיף","מיון המבוסס על פיצול + מיזוג: O(n log n)","מיון ב-O(n²) תמיד","מיון בסיסי"],correct:1,explanation:"Merge Sort: פיצול רקורסיבי לחצאים, מיון כל חצי, מיזוג. סיבוכיות O(n log n)."},{q:"מה בדיקת אופטימיזציה ב-Bubble Sort?",options:["בדיקת גודל מערך","אם לא היו החלפות במעבר – המערך כבר ממוין, עצור","השוואת זוגות","שמירת מינימום"],correct:1,explanation:"אם מעבר שלם ללא החלפות, המערך ממוין. מאפשר יציאה מוקדמת: O(n) במקרה הטוב."},{q:'מה הפלט: bubbleSort({5,3,1,4,2}, 5) → printf("%d",arr[0]);',options:["5","3","1","2"],correct:2,explanation:"אחרי מיון עולה, האלמנט הראשון הוא הקטן ביותר = 1."},{q:"Insertion Sort מתאים ביותר ל:",options:["מיון מיליון אלמנטים","מערכים קטנים או כמעט-ממוינים","מיון מחרוזות בלבד","מיון פנימי במעבד"],correct:1,explanation:"Insertion Sort: O(n) על מערך ממוין, O(n²) כלל. עדיף לn קטן (<50)."},{q:"מה בינארי עדיף על סדרתי עבור n=1,000,000?",options:["בינארי: עד 20 שלבים, סדרתי: עד 1,000,000","בינארי לא עדיף","בינארי דורש מיון","שניהם דומים"],correct:0,explanation:"log₂(1,000,000)≈20. ההבדל העצום מצדיק את עלות המיון."},{q:"מה הסיבוכיות של Quick Sort במקרה הממוצע?",options:["O(n²)","O(n log n)","O(n)","O(log n)"],correct:1,explanation:"Quick Sort: O(n log n) ממוצע, O(n²) במקרה גרוע (pivot גרוע)."}]},{id:13,title:"מבנים ואיגודים",icon:"🏗️",hours:6,syllabus:"פרק 13",goals:["להגדיר struct עם שדות מטיפוסים שונים","ליצור ולגשת למבנים","להשתמש ב-typedef","לעבוד עם מצביעים למבנים (->)","להבין union"],theory:`## struct – מבנה נתונים

**struct** מאחד שדות מטיפוסים שונים:

\`\`\`c
struct Point {
    double x;
    double y;
};
struct Point p = {3.0, 4.0};
printf("%.1f\\n", p.x); // 3.0
\`\`\`

---

## typedef עם struct

\`\`\`c
typedef struct {
    char name[50];
    int age;
    float grade;
} Student;

Student s = {"Alice", 17, 95.5};
printf("%s: %.1f\\n", s.name, s.grade);
\`\`\`

---

## מצביע למבנה – אופרטור ->

\`\`\`c
Student s = {"Bob", 18, 88.0};
Student *p = &s;

printf("%s\\n", (*p).name);  // דרך * ו-.
printf("%s\\n", p->name);    // קיצור עם ->
p->grade = 90.0;             // שינוי דרך מצביע
\`\`\`

---

## union

כל השדות חולקים את אותו זיכרון:

\`\`\`c
union Data {
    int i;
    float f;
    char c;
};
// sizeof(union Data) = max(sizeof שדה)

union Data d;
d.i = 65;
printf("%c\\n", d.c); // 'A' – כתיבה ל-i השפיעה על c!
\`\`\``,code:`#include <stdio.h>
#include <string.h>
#include <math.h>

typedef struct {
    double x, y;
} Point;

typedef struct {
    char name[50];
    int age;
    float grade;
} Student;

double distance(Point p1, Point p2) {
    double dx = p2.x - p1.x;
    double dy = p2.y - p1.y;
    return sqrt(dx*dx + dy*dy);
}

void printStudent(Student *s) {
    printf("שם: %-15s גיל: %2d ציון: %.1f\\n",
           s->name, s->age, s->grade);
}

Student findBest(Student arr[], int n) {
    int best = 0;
    for (int i = 1; i < n; i++)
        if (arr[i].grade > arr[best].grade) best = i;
    return arr[best];
}

void sortStudents(Student arr[], int n) {
    for (int i = 0; i < n-1; i++)
        for (int j = 0; j < n-i-1; j++)
            if (arr[j].grade < arr[j+1].grade) {
                Student t = arr[j]; arr[j] = arr[j+1]; arr[j+1] = t;
            }
}

int main() {
    // Point
    Point p1 = {0, 0}, p2 = {3, 4};
    printf("מרחק: %.2f\\n", distance(p1, p2)); // 5.00
    
    // מערך סטודנטים
    Student class[] = {
        {"Alice", 17, 92.5},
        {"Bob",   18, 88.0},
        {"Carol", 17, 96.0},
        {"David", 19, 78.5},
        {"Eve",   17, 94.0}
    };
    int n = 5;
    
    printf("\\n=== כיתה ===\\n");
    for (int i = 0; i < n; i++) printStudent(&class[i]);
    
    printf("\\n=== ממוצע ===\\n");
    float sum = 0;
    for (int i = 0; i < n; i++) sum += class[i].grade;
    printf("ממוצע: %.2f\\n", sum/n);
    
    Student best = findBest(class, n);
    printf("\\nטוב ביותר: %s (%.1f)\\n", best.name, best.grade);
    
    sortStudents(class, n);
    printf("\\n=== ממוין לפי ציון ===\\n");
    for (int i = 0; i < n; i++) printStudent(&class[i]);
    
    return 0;
}`,traceTable:{headers:["שם","גיל","ציון","הטוב ביותר?"],rows:[["Alice","17","92.5",""],["Bob","18","88.0",""],["Carol","17","96.0","✓ מקסימום"],["David","19","78.5",""],["Eve","17","94.0",""]]},questions:[{q:"מה ההבדל בין . ל-> בגישה לשדות מבנה?",a:". משמש עם משתנה מסוג struct ישירות (s.name). -> משמש עם מצביע למבנה (p->name), שקול ל-(*p).name."}],exercises:["הגדר struct Rectangle ופונקציות area, perimeter.","מיין מערך Points לפי מרחק מהראשית.","הגדר struct Student עם שם, ת.ז., ומערך ציונים. כתוב פונקציות קריאה והדפסה.","ממש union שיכול להחזיק int, float, או char ופונקציה שמדפיסה לפי סוג.","כתוב פונקציה שממיינת מערך Structs לפי שדה נבחר.","הגדר struct LinkedNode {int val; struct LinkedNode *next;} ובנה רשימה מקושרת."],challenge:"ממש מערך dynamic של Students עם malloc, כולל הוספה, מחיקה וחיפוש לפי שם.",quiz:[{q:"אם Student *p, איך ניגשים לשדה grade?",options:["p.grade","p->grade","*p.grade","&p.grade"],correct:1,explanation:"p->grade שקול ל-(*p).grade. הסימן -> מנתר מצביע ואז ניגש לשדה."},{q:"מה struct ב-C?",options:["מחרוזת מיוחדת","מבנה נתונים המאגד שדות מטיפוסים שונים","מערך דינמי","סוג לולאה"],correct:1,explanation:"struct = record: אוסף שדות (fields) מטיפוסים שונים תחת שם אחד."},{q:'מה הפלט: struct P{int x,y;}; struct P p={3,4}; printf("%d",p.x+p.y);',options:["3","4","7","12"],correct:2,explanation:"p.x=3, p.y=4. 3+4=7."},{q:"מה -> עושה?",options:["השוואה","ניגש לשדה struct דרך מצביע","מחזיר כתובת","operator חץ"],correct:1,explanation:"p->field שקול ל-(*p).field. מנתר מצביע ומגיע לשדה."},{q:'מה הפלט: typedef struct{int x;}P; P a; a.x=10; printf("%d",a.x);',options:["0","10","שגיאה","P"],correct:1,explanation:"typedef יוצר שם P למבנה. a.x=10 → הדפסת 10."},{q:"מה union?",options:["כמו struct אבל כל השדות חולקים אותו זיכרון","union של שתי מחרוזות","מיזוג של שני מבנים","מבנה ירושה"],correct:0,explanation:"union: שדות חולקים אותו מקום בזיכרון. גודל = גודל השדה הגדול."},{q:"מה גודל struct{int a; double b; char c;} בזיכרון (בדרך כלל)?",options:["13 בתים","16 בתים (עם padding)","8 בתים","24 בתים"],correct:1,explanation:"int=4, double=8, char=1. עם padding/alignment: לרוב 16 בתים."},{q:'מה הפלט: struct P{int x;} p={5}; struct P q=p; q.x=10; printf("%d",p.x);',options:["5","10","0","שגיאה"],correct:0,explanation:"struct p מוקצה ב-copy. שינוי q.x לא משפיע על p.x. פלט: 5."},{q:"כיצד מעבירים struct לפונקציה ללא עותק (לחיסכון בזיכרון)?",options:["מעבירים כמו int","מעבירים מצביע: void f(Student *s)","מעבירים עם &&","לא ניתן"],correct:1,explanation:"העברת מצביע ל-struct: void f(Student *s). חוסך העתקת המבנה כולו."},{q:'מה הפלט: struct P{int n;}; P pts[3]={{1},{2},{3}}; printf("%d",pts[1].n);',options:["1","2","3","שגיאה"],correct:1,explanation:"pts[1] = אלמנט שני = {2}. pts[1].n = 2."},{q:"מה מאפיין union לעומת struct?",options:["union תמיד גדול יותר","union גודלו = גודל השדה הגדול בלבד","union לא ניתן לשימוש עם מצביעים","אין הבדל מעשי"],correct:1,explanation:"union{int i; double d;}: גודל=sizeof(double)=8. struct: 4+8=12 (לפחות)."},{q:"מה הדרך להגדיר struct ו-typedef ביחד?",options:["struct typedef Point{...}","typedef struct{double x,y;} Point;","define Point struct{...}","class Point{...}"],correct:1,explanation:"typedef struct{double x,y;} Point; מאפשר להשתמש ב-Point ישירות במקום struct Point."},{q:"כיצד מאתחלים struct?",options:["struct P p; p={1,2};","struct P p = {1, 2};","struct P p; init(p,1,2);","P p = new P(1,2);"],correct:1,explanation:"אתחול בהגדרה: struct P p = {val1, val2}; לפי סדר השדות."},{q:"מה מחזיר sizeof(union{int i; double d;})?",options:["4","8","12","16"],correct:1,explanation:"גודל union = גודל השדה הגדול = sizeof(double) = 8."},{q:"מה p->x שקול ל?",options:["p.x","(*p).x","&p.x","*p.x"],correct:1,explanation:"p->x ≡ (*p).x. קודם מנתרים את p, אז ניגשים לשדה x."}]},{id:14,title:"יחידות ספרייה ומאקרו",icon:"📚",hours:4,syllabus:"פרק 14",goals:["להבין מבנה קבצי header ומימוש","לכתוב מאקרו נכון עם סוגריים","לדעת הבדלים בין מאקרו לפונקציה","להשתמש בהידור מותנה (#ifdef)"],theory:`## ספריות ב-C

ספרייה = קוד לשימוש חוזר:
- **קובץ header (.h)** – הצהרות: prototypes, defines, types
- **קובץ מימוש (.c)** – הגדרות: קוד הפונקציות

---

## מאקרו (#define)

מאקרו הוא **החלפת טקסט** בזמן קומפילציה:

\`\`\`c
#define PI 3.14159265
#define MAX_SIZE 100
#define SQUARE(x) ((x)*(x))
#define MAX(a,b) ((a)>(b)?(a):(b))
\`\`\`

**חשוב: סוגריים!**
\`\`\`c
#define BAD_SQUARE(x) x*x
BAD_SQUARE(2+3) → 2+3*2+3 = 11 (שגוי!)

#define GOOD_SQUARE(x) ((x)*(x))
GOOD_SQUARE(2+3) → (2+3)*(2+3) = 25 (נכון!)
\`\`\`

---

## מאקרו לעומת פונקציה

| | מאקרו | פונקציה |
|---|-------|---------|
| קומפילציה | החלפה בtext | קריאה אמיתית |
| בדיקת טיפוסים | לא | כן |
| Debug | קשה | קל |
| קוד כפול | כן | לא |
| מהיר? | מעט יותר | תלוי |

**עדיף פונקציה** לרוב! מאקרו לקבועים פשוטים.

---

## הידור מותנה

\`\`\`c
#define DEBUG 1

#ifdef DEBUG
    printf("debug: x=%d\\n", x);
#endif

#ifndef MYLIB_H
#define MYLIB_H
// כל תוכן הheader
#endif
\`\`\``,code:`#include <stdio.h>

// קבועים
#define PI 3.14159265
#define E  2.71828182
#define MAX_ARRAY 100

// מאקרו עם סוגריים
#define SQUARE(x)   ((x)*(x))
#define CUBE(x)     ((x)*(x)*(x))
#define MAX(a,b)    ((a)>(b)?(a):(b))
#define MIN(a,b)    ((a)<(b)?(a):(b))
#define ABS(x)      ((x)>=0?(x):-(x))
#define IN_RANGE(x,lo,hi) ((x)>=(lo) && (x)<=(hi))
#define SWAP(a,b,t) ((t)=(a),(a)=(b),(b)=(t))

// הידור מותנה
#define DEBUG 1

double circleArea(double r) {
    return PI * SQUARE(r);
}

double sphereVolume(double r) {
    return (4.0/3.0) * PI * CUBE(r);
}

int main() {
    // מאקרו בפעולה
    printf("SQUARE(5) = %d\\n", SQUARE(5));
    printf("SQUARE(2+3) = %d\\n", SQUARE(2+3)); // 25, לא 11!
    printf("MAX(7,12) = %d\\n", MAX(7,12));
    printf("ABS(-5) = %d\\n", ABS(-5));
    printf("IN_RANGE(5,1,10) = %d\\n", IN_RANGE(5,1,10));
    
    printf("\\nשטח עיגול r=5: %.4f\\n", circleArea(5));
    printf("נפח כדור r=3: %.4f\\n", sphereVolume(3));
    
    // SWAP
    int x=3, y=7, t;
    printf("\\nלפני SWAP: x=%d y=%d\\n", x, y);
    SWAP(x, y, t);
    printf("אחרי SWAP: x=%d y=%d\\n", x, y);
    
    // הידור מותנה
#ifdef DEBUG
    printf("\\n[DEBUG] PI=%.10f\\n", PI);
    printf("[DEBUG] E=%.10f\\n", E);
#endif
    
    return 0;
}`,traceTable:{headers:["מאקרו","קלט","החלפה","תוצאה"],rows:[["SQUARE(5)","5","((5)*(5))","25"],["SQUARE(2+3)","2+3","((2+3)*(2+3))","25 ✓"],["BAD_SQUARE(2+3)","2+3","2+3*2+3","11 ✗"],["MAX(7,12)","7,12","((7)>(12)?(7):(12))","12"],["ABS(-5)","-5","((-5)>=0?(-5):-(-5))","5"]]},questions:[{q:"למה מאקרו SQUARE(x) חייב להיות ((x)*(x)) עם סוגריים כפולים?",a:"הסוגריים הפנימיים מגנים על x: SQUARE(2+3) → ((2+3)*(2+3))=25 ולא 2+3*2+3=11. הסוגריים החיצוניים מגנים על התוצאה כשנמצאת בתוך ביטוי."}],exercises:["כתוב מאקרו CLAMP(x,lo,hi) שמחזיר x מוגבל לתחום [lo,hi].","כתוב מאקרו IS_EVEN(n) שבודק אם מספר זוגי.","צור קובץ header math_utils.h עם מאקרו ואבטיפוסים.","כתוב מאקרו SWAP(a,b,type) שמחליף שני משתנים.","ממש include guard נכון עם #ifndef/#define/#endif.","כתוב מאקרו DEBUG_PRINT(x) שמדפיס רק אם DEBUG מוגדר.","הגדר מאקרו ARRAY_SIZE(arr) שמחשב מספר אלמנטים במערך."],challenge:"ממש ספרייה statistics.h עם פונקציות mean, variance, stddev ומאקרו שימושיים.",quiz:[{q:"מה #ifndef MYLIB_H משמש ל?",options:["בדיקת גרסה","מניעת הכללה כפולה של header","הגדרת macro","ייבוא ספרייה"],correct:1,explanation:"include guard: אם MYLIB_H לא מוגדר, הגדר אותו ואז כלול את תוכן הheader. מונע הכפלה."},{q:"מה #define MAX(a,b) ((a)>(b)?(a):(b)) עושה?",options:["מגדיר קבוע MAX","מגדיר מאקרו שמחזיר המקסימום","מגדיר פונקציה","שגיאת תחביר"],correct:1,explanation:"מאקרו פונקציה-דמוי. הסוגריים הכפולים מגנים מטעויות כמו MAX(a++,b)."},{q:"מה ההבדל בין מאקרו לפונקציה?",options:["אין הבדל","מאקרו: החלפת טקסט בקומפילציה, ללא type checking; פונקציה: קריאה בזמן ריצה","פונקציה מהירה יותר תמיד","מאקרו עובד רק עם int"],correct:1,explanation:"מאקרו = textual substitution. יתרון: מהיר (ללא overhead), חסרון: ללא type check ועלול להתנהג בצורה לא צפויה."},{q:'מה ההבדל בין #include <file.h> ל-#include "file.h"?',options:["אין הבדל",'<> מחפש בספריות מערכת, "" מחפש בתיקייה הנוכחית קודם','"" לקבצים מערכת בלבד',"<> לקבצים מקומיים"],correct:1,explanation:'<> = ספריות מערכת (כגון stdio.h). "" = קובץ מקומי של הפרויקט.'},{q:"מה #define PI 3.14159 עושה?",options:["משנה PI בזמן ריצה","מגדיר קבוע טקסטואלי שהמהדר מחליף לפני קומפילציה","יוצר משתנה גלובלי","מייבא ערך pi"],correct:1,explanation:"preprocessor מחליף כל הופעה של PI ב-3.14159 לפני קומפילציה."},{q:"מה #ifdef DEBUG...#endif עושה?",options:["הידור מותנה – קוד מקומפל רק אם DEBUG מוגדר","בדיקת שגיאות debug","הדפסת debug אוטומטית","מפסיק את הקומפילציה"],correct:0,explanation:"הידור מותנה: אם DEBUG מוגדר (-DDEBUG), הקוד בתוך ה-#ifdef יקומפל."},{q:"מה קובץ .h (header) מכיל?",options:["מימוש הפונקציות","הצהרות (prototypes), הגדרות מאקרו, typedef","קוד הרצה","הגדרות משתנים בלבד"],correct:1,explanation:"header: הצהרות, מאקרו, typedef, struct definitions. הmімוש בקובץ .c נפרד."},{q:"מה סכנת המאקרו: #define SQUARE(x) x*x?",options:["לא עובד עם float","SQUARE(1+2) = 1+2*1+2 = 7 במקום 9","אין סכנה","איטי מדי"],correct:1,explanation:"הרחבה: SQUARE(1+2) → 1+2*1+2 = 5. הפתרון: #define SQUARE(x) ((x)*(x))."},{q:"מה __LINE__ ו-__FILE__ ב-C?",options:["פונקציות debug","מאקרו מובנים – מספר שורה ושם קובץ","פקודות קומפילציה","ערכים קבועים"],correct:1,explanation:"Predefined macros: __LINE__ = מספר שורה נוכחית, __FILE__ = שם קובץ. שימושי ב-debug."},{q:"מה מאפשרת הנחיית #pragma?",options:["ייבוא ספרייה","הנחיות ספציפיות למהדר (כגון #pragma once)","הגדרת מאקרו","תיעוד"],correct:1,explanation:"#pragma once = אלטרנטיבה לinclude guard. ספציפי למהדר ולא תקני לחלוטין."},{q:"מה #undef MAX עושה?",options:["מגדיר MAX מחדש","מבטל הגדרת המאקרו MAX","שגיאת קומפילציה","מגדיר MAX=0"],correct:1,explanation:"#undef מבטל הגדרה קיימת של מאקרו. שימושי לheredefinition."},{q:"מה הדרך הנכונה לכתוב מאקרו עם מספר פקודות?",options:["#define F(x) {stmt1; stmt2;}","#define F(x) do{stmt1; stmt2;}while(0)","#define F(x) (stmt1, stmt2)","מאקרו לא יכול להכיל מספר פקודות"],correct:1,explanation:"do{...}while(0) מאפשר שימוש נכון עם if ללא סוגריים: if(c) F(x); else ..."},{q:'מה הפלט: #define DOUBLE(x) (x)+(x) printf("%d", 2*DOUBLE(3));',options:["12","9","6","8"],correct:1,explanation:"2*DOUBLE(3) → 2*(3)+(3) = 6+3 = 9. סכנה! צריך: #define DOUBLE(x) ((x)+(x))."},{q:"מה header guard מונע?",options:["שגיאות runtime","הכללה כפולה של אותו קובץ header","שגיאות syntax","דליפות זיכרון"],correct:1,explanation:"ללא guard, אם header נכלל פעמיים, struct/typedef מוגדרים פעמיים → שגיאת קומפילציה."},{q:"מה החיסרון של מאקרו לעומת inline function?",options:["מאקרו איטי יותר","ללא type checking, עלול לגרום לתופעות לוואי","מאקרו לא ניתן להגדרה","פחות גמיש"],correct:1,explanation:"מאקרו: ללא בדיקת טיפוסים, DOUBLE(i++) → i++ הוערך פעמיים. inline function בטוחה יותר."}]},{id:15,title:"הקצאת זיכרון דינמית",icon:"💾",hours:6,syllabus:"פרק 15",goals:["להבין הבדל Stack ו-Heap","להשתמש ב-malloc, calloc, realloc","לשחרר זיכרון עם free","להימנע מ-memory leaks"],theory:`## Stack לעומת Heap

**Stack:** זיכרון אוטומטי
- מנוהל אוטומטית
- גודל קבוע ידוע בזמן קומפילציה
- מהיר
- מוגבל בגודל (בד"כ 1-8 MB)

**Heap:** זיכרון דינמי
- מנוהל ידנית (malloc/free)
- גודל נקבע בזמן ריצה
- גמיש
- גדול (GBs)

---

## malloc, calloc, realloc

\`\`\`c
#include <stdlib.h>

// malloc – מקצה זיכרון לא מאופס
int *arr = (int*)malloc(n * sizeof(int));

// calloc – מקצה ומאפס ל-0
int *arr = (int*)calloc(n, sizeof(int));

// realloc – שינוי גודל
arr = (int*)realloc(arr, new_size * sizeof(int));

// בדיקה חיונית!
if (arr == NULL) {
    fprintf(stderr, "שגיאת הקצאה\\n");
    exit(1);
}
\`\`\`

---

## free – שחרור זיכרון

\`\`\`c
free(arr);
arr = NULL;  // חשוב! מניעת dangling pointer
\`\`\`

**זליגת זיכרון (Memory Leak):** שכחת free → הזיכרון נשאר תפוס עד סיום התכנית.

**Double free:** קריאה כפולה ל-free → התנהגות לא מוגדרת!`,code:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char name[50];
    float grade;
} Student;

int main() {
    int n;
    printf("כמה סטודנטים? ");
    scanf("%d", &n);
    
    // הקצאה דינמית
    Student *students = (Student*)malloc(n * sizeof(Student));
    if (!students) { fprintf(stderr,"שגיאת הקצאה!\\n"); return 1; }
    
    // קלט
    for (int i = 0; i < n; i++) {
        printf("שם סטודנט %d: ", i+1);
        scanf("%s", students[i].name);
        printf("ציון: ");
        scanf("%f", &students[i].grade);
    }
    
    // עיבוד
    float sum = 0;
    for (int i = 0; i < n; i++) sum += students[i].grade;
    printf("\\nממוצע: %.2f\\n", sum/n);
    
    // הגדלה דינמית
    n += 2;
    students = (Student*)realloc(students, n * sizeof(Student));
    if (!students) { fprintf(stderr,"שגיאת realloc!\\n"); return 1; }
    
    strcpy(students[n-2].name, "Extra1");
    students[n-2].grade = 85.0;
    strcpy(students[n-1].name, "Extra2");
    students[n-1].grade = 92.0;
    
    printf("\\nאחרי הגדלה (%d סטודנטים):\\n", n);
    for (int i = 0; i < n; i++)
        printf("  %s: %.1f\\n", students[i].name, students[i].grade);
    
    // שחרור חיוני!
    free(students);
    students = NULL;
    
    printf("\\nזיכרון שוחרר בהצלחה\\n");
    return 0;
}`,traceTable:{headers:["פעולה","זיכרון (Heap)","ptr","הערה"],rows:[["malloc(n×size)","מוקצה לא מאופס","כתובת חוקית","בדוק != NULL"],["calloc(n,size)","מוקצה, מאופס ל-0","כתובת חוקית","בטוח יותר"],["realloc(p,size2)","מוגדל/כווץ","עשוי להשתנות!","שמור ptr חדש"],["free(ptr)","שוחרר","dangling!","ptr=NULL מייד"]]},questions:[{q:"מה ההבדל בין malloc ל-calloc?",a:"malloc מקצה זיכרון ולא מאפס אותו (תוכן: זבל). calloc מקצה ומאפס הכל ל-0. calloc בטוח יותר אך מעט איטי יותר בגלל האיפוס."}],exercises:["כתוב פונקציה createMatrix(rows, cols) עם malloc דו-ממדי.","ממש מחסנית דינמית (push/pop עם realloc).","כתוב פונקציה safeStrDup שמשכפלת מחרוזת דינמית ומחזירה NULL בכישלון.","ממש תור (queue) דינמי עם malloc/realloc.","כתוב פונקציה freeMatrix(int **mat, int rows) שמשחררת מטריצה דינמית.","ממש dynamic array עם capacity שמוכפל בכל גלישה (כמו vector).","כתוב תכנית שקוראת n מספרים מהמשתמש, מקצה מערך דינמי, ומדפיסה ממוצע."],challenge:"ממש ספרייה dynamic_array עם: create, push_back, pop_back, get, size, free.",quiz:[{q:"מה מחזיר malloc כשנכשל?",options:["0","NULL","-1","שגיאה"],correct:1,explanation:"malloc מחזיר NULL כשלא מצליח להקצות זיכרון. תמיד לבדוק if(ptr==NULL)."},{q:"מה ההבדל בין Stack ל-Heap?",options:["Stack גדול יותר","Stack: אוטומטי, קטן. Heap: ידני (malloc), גדול","Heap מהיר יותר","אין הבדל"],correct:1,explanation:"Stack: מנוהל אוטומטית, מהיר, מוגבל (~8MB). Heap: malloc/free, גמיש, גדול (GBs)."},{q:"מה ההבדל בין malloc ל-calloc?",options:["אין הבדל","calloc מאפס את הזיכרון, malloc לא","malloc מאפס, calloc לא","calloc עבור טיפוסים גדולים בלבד"],correct:1,explanation:"malloc(n): מקצה n בתים, לא מאופס. calloc(n,size): מקצה ומאפס. calloc בטוח יותר."},{q:"מה memory leak?",options:["זיכרון פיזי פגום","הקצאת זיכרון שלא שוחרר → זיכרון אבוד","גישה לזיכרון לא חוקי","overflow"],correct:1,explanation:"memory leak = malloc ללא free. התכנית צורכת זיכרון שגדל עד שנגמר הזיכרון."},{q:"מה dangling pointer?",options:["מצביע NULL","מצביע שמצביע על זיכרון שכבר שוחרר","מצביע לא מאותחל","מצביע ל-stack"],correct:1,explanation:"אחרי free(p), p עדיין מכיל את הכתובת אבל הזיכרון שוחרר. גישה = undefined behavior."},{q:"מה realloc עושה?",options:["מאפס זיכרון קיים","משנה גודל הקצאה קיימת","מקצה זיכרון חדש בלבד","משחרר ומקצה מחדש תמיד"],correct:1,explanation:"realloc(ptr, new_size): מגדיל/מקטין הקצאה. עשוי להחזיר כתובת חדשה!"},{q:"מה int *arr = malloc(5*sizeof(int)) מקצה?",options:["5 בתים","20 בתים (5×4) לint","5 מצביעים","גודל לא ידוע"],correct:1,explanation:"sizeof(int)=4. 5×4=20 בתים. מקצה מקום ל-5 int-ים."},{q:'מה הפלט: int *p=malloc(sizeof(int)); *p=42; printf("%d",*p); free(p); p=NULL;',options:["NULL","42","0","שגיאה"],correct:1,explanation:"*p=42 שומר 42 בזיכרון. הדפסה לפני free: 42. p=NULL אחרי free מונע dangling pointer."},{q:"מה הסדר הנכון: free(ptr) ואז ptr=NULL, או ptr=NULL ואז free(ptr)?",options:["ptr=NULL קודם","free(ptr) קודם, ואז ptr=NULL","אין הבדל","לא צריך NULL"],correct:1,explanation:"free(ptr) משחרר. אחר כך ptr=NULL מונע גישה בטעות לזיכרון ששוחרר."},{q:"מה calloc(10, sizeof(double)) מקצה?",options:["10 בתים","80 בתים (10×8), מאופסים","80 בתים, לא מאופסים","10 double"],correct:1,explanation:"calloc(10, sizeof(double)): 10×8=80 בתים, כולם מאופסים ל-0."},{q:"איזה כלי עוזר לזהות memory leaks?",options:["gcc","valgrind","gdb","make"],correct:1,explanation:"valgrind = כלי לניתוח זיכרון: מזהה leaks, dangling pointers, uninitiated memory."},{q:"מה הסכנה ב: int *p=malloc(4); free(p); *p=5;?",options:["ללא סכנה","use-after-free: גישה לזיכרון ששוחרר","double free","שגיאת קומפילציה"],correct:1,explanation:"use-after-free = גישה לזיכרון שכבר הוחזר למערכת = undefined behavior, קריסה."},{q:"מה double free?",options:["שחרור double","קריאה כפולה ל-free על אותו מצביע","שחרור ב-2 פונקציות","שחרור מהיר"],correct:1,explanation:"double free: free(p) פעמיים. undefined behavior – עלול להביא לקריסה או פגיעת אבטחה."},{q:"מה ptr = realloc(ptr, new_size) עושה אם new_size=0?",options:["אינו שינוי","שחרור הזיכרון (כמו free)","מחזיר ptr המקורי","שגיאה"],correct:1,explanation:"realloc(ptr,0) = free(ptr). מחזיר NULL או כתובת שלא ניתן לגשת אליה."},{q:"מה הדרך הנכונה לבדוק תוצאת malloc?",options:["if(ptr > 0)","if(ptr != NULL)","if(ptr == 0)","לא צריך לבדוק"],correct:1,explanation:"תמיד: if(ptr == NULL) { /* שגיאה */ }. malloc יכול להיכשל אם אין זיכרון."}]},{id:16,title:"קלט/פלט לקבצים",icon:"📁",hours:6,syllabus:"פרק 16",goals:["לפתוח וסגור קבצים (fopen/fclose)","לקרוא ולכתוב קובצי טקסט","לעבוד עם קבצים בינאריים","להבין EOF"],theory:`## עבודה עם קבצים

\`\`\`c
FILE *f = fopen("name.txt", "r");
if (f == NULL) { perror("שגיאה"); return 1; }
// ...
fclose(f);
\`\`\`

**מצבי פתיחה:**
| מצב | משמעות |
|-----|--------|
| "r" | קריאה (חייב להתקיים) |
| "w" | כתיבה (מוחק תוכן) |
| "a" | הוספה לסוף |
| "r+" | קריאה+כתיבה |
| "rb"/"wb" | בינארי |

---

## קבצי טקסט

\`\`\`c
fprintf(f, "%d %.2f %s\\n", n, x, str);
fscanf(f, "%d", &n);
fgets(line, sizeof(line), f);   // שורה שלמה
fputs(str, f);
int c = fgetc(f);               // תו בודד
fputc('A', f);

while (fscanf(f, "%d", &n) == 1) { ... }  // עד EOF
while (fgets(line, 100, f)) { ... }         // עד EOF
\`\`\`

---

## קבצים בינאריים

\`\`\`c
fwrite(&data, sizeof(data), count, f);
fread(&data, sizeof(data), count, f);
\`\`\`

**יתרון:** שמירה ישירה של מבנים, מהיר יותר.`,code:`#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char name[50];
    int age;
    float grade;
} Student;

// כתיבה לקובץ טקסט
void writeTextFile(const char *fn, Student *arr, int n) {
    FILE *f = fopen(fn, "w");
    if (!f) { perror("כתיבה"); return; }
    fprintf(f, "%d\\n", n);
    for (int i = 0; i < n; i++)
        fprintf(f, "%s %d %.2f\\n", arr[i].name, arr[i].age, arr[i].grade);
    fclose(f);
    printf("נכתב לקובץ '%s'\\n", fn);
}

// קריאה מקובץ טקסט
void readTextFile(const char *fn) {
    FILE *f = fopen(fn, "r");
    if (!f) { perror("קריאה"); return; }
    int n;
    fscanf(f, "%d", &n);
    printf("\\n=== תוכן '%s' (%d רשומות) ===\\n", fn, n);
    Student s;
    for (int i = 0; i < n; i++) {
        fscanf(f, "%s %d %f", s.name, &s.age, &s.grade);
        printf("  %s, גיל %d, ציון %.2f\\n", s.name, s.age, s.grade);
    }
    fclose(f);
}

// קובץ בינארי
void writeBinary(const char *fn, Student *arr, int n) {
    FILE *f = fopen(fn, "wb");
    if (!f) { perror("בינארי כתיבה"); return; }
    fwrite(&n, sizeof(int), 1, f);
    fwrite(arr, sizeof(Student), n, f);
    fclose(f);
    printf("\\nנכתב לקובץ בינארי '%s'\\n", fn);
}

void readBinary(const char *fn) {
    FILE *f = fopen(fn, "rb");
    if (!f) { perror("בינארי קריאה"); return; }
    int n;
    fread(&n, sizeof(int), 1, f);
    Student *arr = (Student*)malloc(n * sizeof(Student));
    fread(arr, sizeof(Student), n, f);
    printf("\\n=== תוכן בינארי '%s' ===\\n", fn);
    for (int i = 0; i < n; i++)
        printf("  %s %d %.2f\\n", arr[i].name, arr[i].age, arr[i].grade);
    free(arr);
    fclose(f);
}

int main() {
    Student students[] = {
        {"Alice", 17, 92.5},
        {"Bob",   18, 88.0},
        {"Carol", 17, 96.0}
    };
    
    writeTextFile("students.txt", students, 3);
    readTextFile("students.txt");
    writeBinary("students.bin", students, 3);
    readBinary("students.bin");
    return 0;
}`,traceTable:{headers:["פעולה","מצב קובץ","נתון","הערה"],rows:[['fopen("w")',"נוצר/מאופס","—","מוחק תוכן קיים!"],["fprintf","כתיבה","Alice 17 92.50",""],["fclose","סגור","—","חיוני!"],['fopen("r")',"פתוח לקריאה","—",""],["fscanf→name","קריאה",'"Alice"',""],["fgets","שורה שלמה","כולל \\n",""],["fread binary","בינארי","sizeof(Student)","מהיר"]]},questions:[{q:'מה ההבדל בין "w" ל-"a" בfopen?',a:'"w" פותח לכתיבה ומוחק כל תוכן קיים. "a" פותח לכתיבה ומוסיף לסוף הקובץ הקיים.'}],exercises:["כתוב תכנית שסופרת שורות, מילים ותווים בקובץ טקסט.","כתוב תכנית שמעתיקה קובץ (כולל בינארי).","כתוב תכנית שממיינת שורות בקובץ טקסט ושומרת לקובץ חדש.","כתוב תכנית שמחפשת מחרוזת בקובץ ומדפיסה את מספרי השורות שבהן היא מופיעה.","ממש תכנית שמוחקת שורות כפולות מקובץ.","כתוב תכנית שקוראת קובץ CSV ומחשבת סטטיסטיקות על עמודה מספרית.","ממש תכנית שמציגה n השורות האחרונות של קובץ (כמו tail)."],challenge:"ממש ספר טלפונים מבוסס קובץ: הוסף, מחק, חפש, הצג כל הרשומות.",quiz:[{q:"מה מחזיר fscanf בסוף קובץ?",options:["0","EOF (-1)","NULL","1"],correct:1,explanation:"fscanf מחזיר EOF (שווה ל--1) כשמגיע לסוף הקובץ."},{q:"מה מחזיר fopen אם הקובץ לא נפתח?",options:["0","NULL","-1","EOF"],correct:1,explanation:"fopen מחזיר NULL בכישלון. תמיד: if(f==NULL) { perror(); return; }"},{q:'מה מצב "r" ב-fopen?',options:["קריאה + כתיבה","קריאה בלבד מהתחלה","כתיבה בלבד","הוספה לסוף"],correct:1,explanation:'"r" = read only. הקובץ חייב להתקיים. "w" = write (מוחק קיים), "a" = append.'},{q:'מה "a" ב-fopen?',options:["append – הוספה לסוף הקובץ","read all","כתיבה ממחיקה את הקיים","archive"],correct:0,explanation:'"a" = append: הכתיבה תמיד בסוף הקובץ. הקובץ נוצר אם לא קיים.'},{q:"מה חשוב לעשות אחרי fopen?",options:["rewind(f)","לבדוק if(f==NULL) ולסגור עם fclose בסוף","לקרוא fread","לקרוא fseek"],correct:1,explanation:"תמיד: לבדוק NULL, ולסגור fclose(f) בסוף. ללא fclose יתכן איבוד נתונים."},{q:'מה fprintf(f, "%d", 42) עושה?',options:["מדפיס ל-stdout",'כותב "42" לקובץ f',"קורא מהקובץ","מחזיר 42"],correct:1,explanation:"fprintf = printf לקובץ. כותב formatted text לקובץ f."},{q:"מה fgets(buf, 100, f) עושה?",options:["קוראת 100 שורות","קוראת שורה (עד \\n) מהקובץ לbuf","כותבת שורה","קוראת תו אחד"],correct:1,explanation:"fgets קוראת עד n-1 תווים או עד \\n. שמירת ה-\\n בbuf. בטוח מ-buffer overflow."},{q:"מה EOF?",options:["שגיאת קובץ","End Of File – ערך מיוחד (-1) המסמן סוף קובץ","ערך NULL","תחילת קובץ"],correct:1,explanation:'EOF = End Of File, בדרך כלל -1. מוחזר ע"י getc/fscanf בסוף הקובץ.'},{q:"מה fwrite עושה לעומת fprintf?",options:["fwrite כותב טקסט, fprintf בינארי","fwrite כותב בינארי (bytes גולמיים), fprintf כותב formatted text","אין הבדל","fwrite לא קיים"],correct:1,explanation:"fwrite(ptr,size,n,f): כותב n×size בתים גולמיים. מהיר יותר לנתונים בינאריים."},{q:"מה fseek(f, 0, SEEK_SET) עושה?",options:["מחזיר את גודל הקובץ","מזיז את מיקום הקריאה לתחילת הקובץ","מוחק את הקובץ","סוגר את הקובץ"],correct:1,explanation:"fseek(f, offset, origin): מזיז cursor. SEEK_SET=תחילה, 0=offset=0. שקול ל-rewind(f)."},{q:"מה ftell(f) מחזיר?",options:["גודל הקובץ","מיקום הנוכחי בקובץ (bytes מהתחלה)","מספר שורות","NULL"],correct:1,explanation:"ftell מחזיר את מיקום הcursor הנוכחי בבתים מתחילת הקובץ."},{q:'מה הבדל בין "rb" ל-"r"?',options:["אין הבדל ב-Linux","rb = קריאה בינארית, r = קריאת טקסט (המרת \\r\\n ב-Windows)","rb מהיר יותר","rb לקבצים גדולים"],correct:1,explanation:'ב-Windows: "r" ממיר \\r\\n ל-\\n. "rb" קורא raw bytes ללא המרה.'},{q:"מה fgetc(f) מחזיר?",options:["מחרוזת","תו אחד כ-int (או EOF)","שורה שלמה","מספר שלם"],correct:1,explanation:"fgetc קוראת תו אחד ומחזירה אותו כ-int (כדי לאפשר ייצוג EOF)."},{q:"למה חשוב לסגור קובץ עם fclose?",options:["לא חשוב","לוודא שנתונים נכתבו (flush), ושחרור משאבי OS","כדי למנוע קריסה","רק לקבצי כתיבה"],correct:1,explanation:"fclose: מבצע flush לbuffer, משחרר FILE*, וסוגר file descriptor. ללא זה: נתונים עלולים ללכת לאיבוד."},{q:"מה הדרך הנכונה לעבור על כל שורות קובץ?",options:["while(fread(...)) {...}","while(fgets(buf, SIZE, f) != NULL) {...}","for(fscanf(f,...); !EOF; ...) {...}","do{fgetc(f);}while(!EOF);"],correct:1,explanation:"fgets מחזיר NULL בסוף קובץ. while(fgets(...) != NULL) עובר על כל השורות."}]},{id:17,title:"עבודה עם ביטים",icon:"⚡",hours:4,syllabus:"פרק 17",goals:["להבין ייצוג בינארי של מספרים","לבצע פעולות bitwise (&, |, ^, ~)","להשתמש בהזזות (<< ו->>)","לדעת לבדוק, להציב ולאפס ביטים ספציפיים"],theory:`## ייצוג בינארי

כל מספר שלם מיוצג ב-bits:
- 5 = 00000101
- 12 = 00001100

---

## פעולות Bitwise

| פעולה | אופרטור | כלל | דוגמה |
|-------|---------|-----|--------|
| AND | & | 1&1=1, אחרת 0 | 5&12=4 |
| OR | \\| | 0\\|0=0, אחרת 1 | 5\\|12=13 |
| XOR | ^ | שונים=1, שווים=0 | 5^12=9 |
| NOT | ~ | הפוך כל bit | ~5=-6 |
| הזזה שמאלה | << | הכפל ב-2 | 5<<1=10 |
| הזזה ימינה | >> | חלוק ב-2 | 12>>1=6 |

---

## מניפולציות ביטים נפוצות

\`\`\`c
// בדיקת ביט i
int checkBit(int n, int i) { return (n >> i) & 1; }

// הצבת ביט i ל-1
int setBit(int n, int i)   { return n | (1 << i); }

// איפוס ביט i ל-0
int clearBit(int n, int i) { return n & ~(1 << i); }

// היפוך ביט i
int toggleBit(int n, int i){ return n ^ (1 << i); }

// בדיקת חזקת 2
int isPow2(int n) { return n > 0 && (n & (n-1)) == 0; }
\`\`\``,code:`#include <stdio.h>

void printBinary(int n, int bits) {
    for (int i = bits-1; i >= 0; i--)
        printf("%d", (n >> i) & 1);
    printf(" (%d)\\n", n);
}

int checkBit(int n, int i) { return (n >> i) & 1; }
int setBit(int n, int i)   { return n | (1 << i); }
int clearBit(int n, int i) { return n & ~(1 << i); }
int toggleBit(int n, int i){ return n ^ (1 << i); }
int countOnes(unsigned int n) {
    int c = 0;
    while (n) { c += n & 1; n >>= 1; }
    return c;
}

int main() {
    int a = 5, b = 12;
    
    printf("a  = "); printBinary(a,8);
    printf("b  = "); printBinary(b,8);
    printf("a&b= "); printBinary(a&b,8);
    printf("a|b= "); printBinary(a|b,8);
    printf("a^b= "); printBinary(a^b,8);
    printf("~a = "); printBinary(~a,8);
    printf("a<<1="); printBinary(a<<1,8);
    printf("b>>1="); printBinary(b>>1,8);
    
    printf("\\n=== מניפולציות ===\\n");
    int x = 0b10110010; // 178
    printf("x=   "); printBinary(x,8);
    printf("setBit(x,0)=  "); printBinary(setBit(x,0),8);
    printf("clearBit(x,1)="); printBinary(clearBit(x,1),8);
    printf("toggleBit(x,4)="); printBinary(toggleBit(x,4),8);
    printf("countOnes(x)=%d\\n", countOnes(x));
    
    printf("\\n=== שימושים ===\\n");
    printf("isPow2(8)=%d isPow2(6)=%d\\n",
           (8>0)&&((8&7)==0), (6>0)&&((6&5)==0));
    printf("5<<3 = %d (5*8)\\n", 5<<3);
    printf("40>>2 = %d (40/4)\\n", 40>>2);
    
    return 0;
}`,traceTable:{headers:["פעולה","a (bin)","b (bin)","תוצאה (bin)","עשרוני"],rows:[["a & b","00000101","00001100","00000100","4"],["a | b","00000101","00001100","00001101","13"],["a ^ b","00000101","00001100","00001001","9"],["~a","00000101","—","11111010","-6"],["a << 2","00000101","—","00010100","20"],["b >> 1","00001100","—","00000110","6"]]},questions:[{q:"מה עושה a << n?",a:"מזיז את ביטי a שמאלה n מקומות, שקול להכפלה ב-2^n. a<<3 = a×8."}],exercises:["כתוב פונקציה שבודקת אם מספר הוא חזקת 2 באמצעות bitwise.","כתוב XOR swap ללא משתנה זמני.","כתוב פונקציה countBits(n) שסופרת מספר ביטים דלוקים.","כתוב פונקציה שהופכת כל ביט של מספר (NOT).","ממש מחלקת רשאיות (permissions) עם 3 ביטים: קריאה, כתיבה, הרצה.","כתוב פונקציה שממירה מספר לבינארי כמחרוזת.","ממש פעולת Rotate Left על מספר שלם."],challenge:"ממש bitset: מבנה נתונים לניהול 64 דגלים ב-unsigned long long.",quiz:[{q:"מה תוצאת 6 ^ 6?",options:["6","0","12","1"],correct:1,explanation:"XOR של מספר עם עצמו = 0. כל ביט: 1^1=0, 0^0=0."},{q:"מה תוצאת 5 & 3?",options:["8","1","7","0"],correct:1,explanation:"5=101, 3=011. AND: 001 = 1."},{q:"מה תוצאת 5 | 3?",options:["8","7","2","1"],correct:1,explanation:"5=101, 3=011. OR: 111 = 7."},{q:"מה עושה 1 << 3?",options:["1","3","8","16"],correct:2,explanation:"1<<3 = 1×2³ = 8. הזזה שמאלה n מקומות = כפל ב-2^n."},{q:"מה עושה 40 >> 2?",options:["10","160","20","5"],correct:0,explanation:"40>>2 = 40/4 = 10. הזזה ימינה n = חלוקה ב-2^n."},{q:"מה ~0 שווה (לint של 32 ביט)?",options:["0","1","-1 (כל הביטים 1)","2^32"],correct:2,explanation:"NOT של 0 = כל הביטים הופכים ל-1. בייצוג two's complement: -1."},{q:"כיצד בודקים אם ביט i של x דלוק?",options:["x + (1<<i)","x & (1<<i)","x | (1<<i)","x ^ (1<<i)"],correct:1,explanation:"x & (1<<i): AND עם מסכה שרק ביט i דלוק. תוצאה לא-אפס = ביט דלוק."},{q:"כיצד מדליקים ביט i ב-x?",options:["x & ~(1<<i)","x | (1<<i)","x ^ (1<<i)","x - (1<<i)"],correct:1,explanation:"x | (1<<i): OR עם מסכה → ביט i הופך ל-1, שאר הביטים ללא שינוי."},{q:"כיצד מכבים ביט i ב-x?",options:["x | (1<<i)","x ^ (1<<i)","x & ~(1<<i)","x - i"],correct:2,explanation:"~(1<<i) = מסכה עם כל הביטים 1 חוץ מביט i. AND → ביט i=0, שאר ללא שינוי."},{q:"מה תוצאת 12 & 10?",options:["22","8","6","2"],correct:1,explanation:"12=1100, 10=1010. AND: 1000 = 8."},{q:"XOR ידוע כ-toggle. מה x ^ 1 עושה לביט הנמוך של x?",options:["מדליק אותו","מכבה אותו","הופך אותו (toggle)","אינו משנה"],correct:2,explanation:"XOR עם 1 הופך את הביט: 0→1, 1→0. זהו toggle."},{q:"מה n & (n-1) בודק?",options:["אם n ראשוני","אם n חזקת 2 (התוצאה תהיה 0)","אם n זוגי","אם n שלם"],correct:1,explanation:"אם n הוא חזקת 2: n=100...0, n-1=011...1. AND = 0. כלי נפוץ: if(n>0 && !(n&(n-1)))"},{q:'מה הפלט: printf("%d", 0xFF & 0x0F);',options:["255","15","240","0"],correct:1,explanation:"0xFF=11111111, 0x0F=00001111. AND: 00001111 = 15."},{q:"מה XOR swap עושה: a^=b; b^=a; a^=b;?",options:["מנקה את a","מחליף ערכי a ו-b ללא משתנה זמני","כופל ב-2","בודק שוויון"],correct:1,explanation:"XOR swap: מחליף ערכי שני משתנים ללא temp. טריק קלאסי. נכשל אם a==b."},{q:"מה הבדל בין & הביטי ל-&& הלוגי?",options:["אין הבדל","& פועל על כל הביטים, && על הערך הלוגי (true/false)","&& מהיר יותר","& עובד רק עם char"],correct:1,explanation:"5 & 3 = 1 (ביטי). 5 && 3 = 1 (לוגי – שניהם לא-אפס). || לעומת |."}]},{id:18,title:"רקורסיה",icon:"🌀",hours:8,syllabus:"פרק 18",goals:["להבין עיקרון הרקורסיה","לזהות ולהגדיר תנאי עצירה","לעקוב אחרי stack קריאות","לממש אלגוריתמים רקורסיביים","לדעת מתי רקורסיה ומתי איטרציה"],theory:`## מהי רקורסיה?

**רקורסיה** = פונקציה שקוראת לעצמה עם בעיה קטנה יותר, עד הגעה לתנאי עצירה.

---

## שני חלקים חיוניים

1. **תנאי עצירה (Base Case)** – מתי לעצור (חייב!)
2. **שלב רקורסיבי** – פישוט הבעיה וקריאה לעצמי

\`\`\`c
int factorial(int n) {
    if (n <= 1) return 1;           // Base case
    return n * factorial(n - 1);    // Recursive step
}
\`\`\`

---

## מודל ה-Stack

\`\`\`
factorial(4):
  4 * factorial(3)
        3 * factorial(2)
              2 * factorial(1)
                    return 1
              return 2*1 = 2
        return 3*2 = 6
  return 4*6 = 24
\`\`\`

---

## ללא תנאי עצירה → Stack Overflow!

\`\`\`c
int bad(int n) {
    return n + bad(n-1);  // לולאה אינסופית!
}
\`\`\`

---

## רקורסיה לעומת איטרציה

| | רקורסיה | איטרציה |
|---|---------|---------|
| קריאות | Stack frames | אחד |
| זיכרון | O(depth) | O(1) |
| מהירות | מעט איטי | מהיר |
| קריאות | לפעמים קל יותר | לפעמים קל יותר |

**כלל אצבע:** השתמש ברקורסיה כשהבעיה מוגדרת באופן טבעי רקורסיבי (עצים, fractal, backtracking).`,code:`#include <stdio.h>

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n-1);
}

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}

void printBinary(int n) {
    if (n > 1) printBinary(n/2);
    printf("%d", n%2);
}

int power(int base, int exp) {
    if (exp == 0) return 1;
    if (exp % 2 == 0) {
        int half = power(base, exp/2);
        return half * half;
    }
    return base * power(base, exp-1);
}

// חיפוש בינארי רקורסיבי
int binarySearch(int arr[], int lo, int hi, int t) {
    if (lo > hi) return -1;
    int mid = (lo+hi)/2;
    if (arr[mid] == t) return mid;
    if (arr[mid] < t) return binarySearch(arr, mid+1, hi, t);
    return binarySearch(arr, lo, mid-1, t);
}

// מגדלי האנוי
void hanoi(int n, char from, char to, char via) {
    if (n == 1) {
        printf("  הזז דיסק 1 מ-%c אל %c\\n", from, to);
        return;
    }
    hanoi(n-1, from, via, to);
    printf("  הזז דיסק %d מ-%c אל %c\\n", n, from, to);
    hanoi(n-1, via, to, from);
}

int main() {
    printf("5! = %d\\n", factorial(5));    // 120
    printf("8! = %d\\n", factorial(8));    // 40320
    
    printf("\\nפיבונאצ'י (0-10): ");
    for (int i=0; i<=10; i++) printf("%d ", fibonacci(i));
    printf("\\n");
    
    printf("\\ngcd(48,18) = %d\\n", gcd(48,18)); // 6
    printf("power(2,10) = %d\\n", power(2,10));  // 1024
    
    printf("\\n13 בבינארי: "); printBinary(13); printf("\\n");
    
    int arr[] = {1,3,5,7,9,11,13,15};
    printf("\\nחיפוש 7: אינדקס %d\\n", binarySearch(arr,0,7,7));
    printf("חיפוש 6: אינדקס %d\\n", binarySearch(arr,0,7,6));
    
    printf("\\n=== האנוי 3 דיסקים ===\\n");
    hanoi(3, 'A', 'C', 'B');
    
    return 0;
}`,traceTable:{headers:["קריאה","n","base case?","חישוב","מחזיר"],rows:[["factorial(4)","4","לא","4 × factorial(3)","?"],["factorial(3)","3","לא","3 × factorial(2)","?"],["factorial(2)","2","לא","2 × factorial(1)","?"],["factorial(1)","1","✓","return 1","1"],["← חזרה לf(2)","2","","2 × 1","2"],["← חזרה לf(3)","3","","3 × 2","6"],["← חזרה לf(4)","4","","4 × 6","24"]]},questions:[{q:"מה קורה ללא תנאי עצירה ברקורסיה?",a:"Stack overflow – הפונקציה קוראת לעצמה אינסוף פעמים, ה-stack מתמלא ומתרחשת קריסת תכנית."},{q:"מתי עדיף רקורסיה על איטרציה?",a:"כשהמבנה של הבעיה טבעית רקורסיבית: עצים, מעבר על גרף, backtracking, divide-and-conquer. לעומת זאת, לצבירות פשוטות (sum, factorial) – איטרציה עדיפה בזיכרון ומהירות."}],exercises:["כתוב פונקציה רקורסיבית לחישוב סכום ספרות של מספר.","ממש reverse string רקורסיבית.","כתוב פונקציה רקורסיבית שבודקת פלינדרום.","ממש merge sort רקורסיבי."],challenge:"ממש Sudoku solver: קבל לוח 9×9 חלקי, מלא באמצעות backtracking רקורסיבי.",quiz:[{q:"מה Stack Overflow ברקורסיה?",options:["שגיאת תחביר","קריסה בגלל רקורסיה אינסופית שממלאת את ה-stack","שגיאת זיכרון heap","שגיאת קומפילציה"],correct:1,explanation:"כל קריאה רקורסיבית מוסיפה frame ל-stack. רקורסיה ללא תנאי עצירה → stack מתמלא → קריסה."},{q:"מה הפלט של factorial(0)?",options:["0","1","שגיאה","-1"],correct:1,explanation:"0! = 1 בהגדרה. תנאי הבסיס: if(n<=1) return 1."},{q:"מה הסיבוכיות של fibonacci(n) הנאיבי (ללא memoization)?",options:["O(n)","O(n²)","O(2^n)","O(log n)"],correct:2,explanation:"fib(n) = fib(n-1)+fib(n-2). עץ קריאות כפולות: O(2^n) פעולות."},{q:"מה תנאי הבסיס (base case) ברקורסיה?",options:["הקריאה הראשונה","תנאי שעוצר את הרקורסיה ומחזיר תוצאה ישירה","הקריאה האחרונה","תנאי מעבר"],correct:1,explanation:"בלי תנאי בסיס: רקורסיה אינסופית. תנאי בסיס = המקרה הפשוט שנפתר ישירות."},{q:"מה הפלט: factorial(5)?",options:["25","120","720","5"],correct:1,explanation:"5! = 5×4×3×2×1 = 120."},{q:"מה gcd(48,18) מחזיר?",options:["6","18","48","3"],correct:0,explanation:"מחלק משותף גדול ביותר: gcd(48,18)=gcd(18,12)=gcd(12,6)=gcd(6,0)=6."},{q:"מה הפלט: fibonacci(7)?",options:["13","21","8","34"],correct:0,explanation:"סדרת פיבונאצ'י: 0,1,1,2,3,5,8,13,21. fib(7)=13."},{q:"מה היתרון של memoization ברקורסיה?",options:["מקצר את הקוד","שומר תוצאות מחושבות למניעת חישוב כפול → O(n) במקום O(2^n)","מונע stack overflow","מגדיל זיכרון"],correct:1,explanation:"memoization = שמירת תוצאות. fib(30) נאיבי: ~1M קריאות. עם memo: 30 קריאות."},{q:"מה מגדלי האנוי (Hanoi) עם n=3 דיסקים דורש?",options:["6 מהלכים","7 מהלכים","8 מהלכים","9 מהלכים"],correct:1,explanation:"מגדלי האנוי: 2^n - 1 מהלכים. n=3: 2³-1=7."},{q:"מה power(2, 10) מחזיר?",options:["512","1024","100","20"],correct:1,explanation:"2^10 = 1024."},{q:"מה הסיבוכיות של power(base, exp) המואץ (fast exponentiation)?",options:["O(n)","O(log n)","O(n²)","O(1)"],correct:1,explanation:"מחצים את exp בכל שלב: O(log n). למשל: 2^10 = (2^5)² = ((2^2)²×2)²."},{q:"מה printBinary(13) ידפיס?",options:["13","1101","1110","1011"],correct:1,explanation:"13 בבינארי = 8+4+1 = 1101."},{q:"מה ההבדל בין iteration (לולאה) ל-recursion?",options:["אין הבדל","recursion: פונקציה קוראת לעצמה (stack), iteration: לולאה חוזרת","recursion תמיד מהיר יותר","iteration: עבור מספרים בלבד"],correct:1,explanation:"רקורסיה: אלגנטית לבעיות שמתפרקות טבעית, אך overhead של stack. iteration: מהיר יותר בדרך כלל."},{q:"מה tail recursion?",options:["הקריאה הרקורסיבית בסוף הפונקציה, ניתנת לאופטימיזציה ל-O(1) stack","רקורסיה שמגיעה לsegfault","רקורסיה ב-loop","רקורסיה בלי תנאי"],correct:0,explanation:"Tail recursion: קריאה רקורסיבית היא הפקודה האחרונה. מהדרים מסוימים מאפסים אותה ל-loop."},{q:"מה backtracking?",options:["חזרה לתחילת הלולאה","חיפוש רקורסיבי שחוזר אחורה כשנתקל במבוי סתום","מיון הפוך","ניפוי שגיאות"],correct:1,explanation:"Backtracking: ניסיון פתרון → אם נכשל, חזרה ושינוי. שימוש: Sudoku, Queens, מבוך."}]}];function cp({code:v}){const[Y,M]=Pt.useState(!1),h=()=>{navigator.clipboard.writeText(v).catch(()=>{}),M(!0),setTimeout(()=>M(!1),1500)},T=G=>G.replace(/(#include|#define|#ifdef|#ifndef|#endif|int|float|char|double|void|return|if|else|while|for|do|switch|case|break|default|typedef|struct|union|const|unsigned|long|NULL|static)\b/g,"<k>$1</k>").replace(/("(?:[^"\\]|\\.)*")/g,"<s>$1</s>").replace(/(\/\/.*$)/g,"<c>$1</c>").replace(/\b(\d+\.?\d*[fFlLuU]*)\b/g,"<n>$1</n>").replace(/<k>/g,'<span style="color:#88c0d0;font-weight:600">').replace(/<\/k>/g,"</span>").replace(/<s>/g,'<span style="color:#a3be8c">').replace(/<\/s>/g,"</span>").replace(/<c>/g,'<span style="color:#616e88;font-style:italic">').replace(/<\/c>/g,"</span>").replace(/<n>/g,'<span style="color:#d08770">').replace(/<\/n>/g,"</span>");return d.jsxs("div",{style:{borderRadius:12,overflow:"hidden",border:"1px solid #1e3a5f"},children:[d.jsxs("div",{style:{background:"#0a1628",padding:"8px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #1e3a5f"},children:[d.jsx("span",{style:{color:s.muted,fontSize:11,fontFamily:"monospace",letterSpacing:2},children:"C SOURCE"}),d.jsx("button",{onClick:h,style:{background:"transparent",border:`1px solid ${Y?s.accent3:"#2a4a6a"}`,color:Y?s.accent3:s.muted,cursor:"pointer",fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:5,fontFamily:"inherit"},children:Y?"✓ הועתק":"COPY"})]}),d.jsx("pre",{style:{background:"#060d1a",color:"#cdd9e5",padding:"20px",margin:0,overflowX:"auto",fontSize:13,lineHeight:1.7,fontFamily:"'JetBrains Mono','Fira Code','Courier New',monospace",direction:"ltr",textAlign:"left"},children:v.split(`
`).map((G,L)=>d.jsxs("div",{style:{display:"flex",gap:0,minHeight:"1.7em"},children:[d.jsx("span",{style:{color:"#2a4a6a",userSelect:"none",minWidth:36,paddingRight:12,fontSize:11,lineHeight:1.7,flexShrink:0,textAlign:"right"},children:L+1}),d.jsx("span",{dangerouslySetInnerHTML:{__html:T(G)||" "}})]},L))})]})}function fp({data:v}){return v?d.jsx("div",{style:{overflowX:"auto",borderRadius:10,border:`1px solid ${s.border}`},children:d.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,fontFamily:"monospace"},children:[d.jsx("thead",{children:d.jsx("tr",{children:v.headers.map((Y,M)=>d.jsx("th",{style:{background:`${s.accent}18`,color:s.accent,padding:"10px 14px",textAlign:"center",borderBottom:`1px solid ${s.accent}33`,whiteSpace:"nowrap",fontFamily:"inherit",fontSize:12,letterSpacing:1},children:Y},M))})}),d.jsx("tbody",{children:v.rows.map((Y,M)=>d.jsx("tr",{style:{background:M%2===0?s.surface:s.card},children:Y.map((h,T)=>d.jsx("td",{style:{padding:"9px 14px",textAlign:"center",color:h.includes("✓")?s.accent3:h.includes("✗")||h.includes("שגוי")?s.danger:s.soft,borderBottom:`1px solid ${s.border}`},children:h},T))},M))})]})}):null}function rp({quiz:v,chapterId:Y,chapterTitle:M,onComplete:h}){const[T,G]=Pt.useState({}),[L,C]=Pt.useState(!1),[O,q]=Pt.useState(null),k=L?v.filter((at,R)=>T[R]===at.correct).length:0,j=L?Math.round(k/v.length*100):0,tt=()=>{C(!0);const at=v.filter((J,lt)=>T[lt]===J.correct).length,R=Math.round(at/v.length*100);(O===null||R>O)&&q(R),h(R)},Ot=()=>{G({}),C(!1)};return d.jsxs("div",{children:[L&&d.jsxs("div",{style:{marginBottom:24,padding:20,background:j===100?`${s.accent3}15`:j>=60?`${s.warn}15`:`${s.danger}15`,borderRadius:12,border:`1px solid ${j===100?s.accent3:j>=60?s.warn:s.danger}`,textAlign:"center"},children:[d.jsx("div",{style:{fontSize:40,marginBottom:6},children:j===100?"🏆":j>=80?"🌟":j>=60?"👍":"📚"}),d.jsxs("div",{style:{fontWeight:900,fontSize:28,color:j===100?s.accent3:j>=60?s.warn:s.danger},children:[k," / ",v.length]}),d.jsxs("div",{style:{fontWeight:800,fontSize:18,color:j===100?s.accent3:j>=60?s.warn:s.danger,marginTop:2},children:[j,"%"]}),d.jsx("div",{style:{color:s.muted,fontSize:13,marginTop:6},children:j===100?"מושלם! שלטת בחומר 💪":j>=80?"כמעט מושלם! עיין בתשובות האדומות.":j>=60?"טוב! עיין בתשובות הירוקות ונסה שוב.":"כדאי לחזור על החומר ולנסות שוב."}),O!==null&&O>j&&d.jsxs("div",{style:{color:s.accent2,fontSize:12,marginTop:6},children:["הניסיון הטוב ביותר שלך: ",O,"%"]}),d.jsx("button",{onClick:Ot,style:{marginTop:14,background:s.accent2,color:"#fff",border:"none",borderRadius:8,padding:"9px 24px",fontWeight:800,fontSize:14,cursor:"pointer"},children:"🔄 נסה שוב"})]}),v.map((at,R)=>d.jsxs("div",{style:{marginBottom:20,padding:18,background:s.surface,borderRadius:12,border:`1px solid ${L&&T[R]!==void 0?T[R]===at.correct?s.accent3+"44":s.danger+"44":s.border}`},children:[d.jsxs("div",{style:{fontWeight:700,marginBottom:14,color:s.text,fontSize:14,display:"flex",gap:10,alignItems:"flex-start"},children:[d.jsxs("span",{style:{background:s.card,color:s.accent,fontSize:11,fontWeight:900,padding:"2px 8px",borderRadius:6,flexShrink:0,border:`1px solid ${s.border}`},children:["Q",R+1]}),d.jsx("span",{children:at.q})]}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:at.options.map((J,lt)=>{let tn=s.card,zt=s.border,Mt=s.soft;return T[R]===lt&&!L&&(tn=`${s.accent}18`,zt=s.accent,Mt=s.accent),L&&lt===at.correct&&(tn=`${s.accent3}18`,zt=s.accent3,Mt=s.accent3),L&&T[R]===lt&&lt!==at.correct&&(tn=`${s.danger}18`,zt=s.danger,Mt=s.danger),d.jsxs("button",{onClick:()=>!L&&G(dn=>({...dn,[R]:lt})),style:{textAlign:"right",padding:"10px 16px",background:tn,border:`1px solid ${zt}`,borderRadius:8,color:Mt,cursor:L?"default":"pointer",fontFamily:"inherit",fontSize:13,transition:"all 0.15s",display:"flex",gap:10,alignItems:"center"},children:[d.jsx("span",{style:{background:`${Mt}22`,color:Mt,fontSize:11,fontWeight:900,minWidth:22,height:22,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:String.fromCharCode(65+lt)}),J,L&&lt===at.correct&&d.jsx("span",{style:{marginRight:"auto",color:s.accent3,fontSize:14},children:"✓"}),L&&T[R]===lt&&lt!==at.correct&&d.jsx("span",{style:{marginRight:"auto",color:s.danger,fontSize:14},children:"✗"})]},lt)})}),L&&T[R]!==at.correct&&at.explanation&&d.jsxs("div",{style:{marginTop:10,padding:"10px 14px",background:`${s.accent2}10`,borderRadius:8,border:`1px solid ${s.accent2}33`,color:s.soft,fontSize:13},children:["💡 ",d.jsx("strong",{style:{color:s.accent2},children:"הסבר:"})," ",at.explanation]})]},R)),L?d.jsx("button",{onClick:Ot,style:{background:s.accent2,color:"#fff",border:"none",borderRadius:10,padding:"12px 32px",fontWeight:900,fontSize:15,cursor:"pointer"},children:"🔄 נסה שוב"}):d.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[d.jsxs("button",{onClick:tt,disabled:Object.keys(T).length<v.length,style:{background:Object.keys(T).length<v.length?s.border:s.accent,color:"#000",border:"none",borderRadius:10,padding:"12px 32px",fontWeight:900,fontSize:15,cursor:Object.keys(T).length<v.length?"default":"pointer",opacity:Object.keys(T).length<v.length?.5:1},children:["הגש בוחן (",Object.keys(T).length,"/",v.length,")"]}),d.jsxs("span",{style:{color:s.muted,fontSize:13},children:["ענה על כל ",v.length," השאלות"]})]})]})}function op({text:v}){const Y=v.split(`
`),M=[];let h=!1,T=[];Y.forEach((C,O)=>{if(C.startsWith("```")){h?(M.push(d.jsx("div",{style:{borderRadius:8,overflow:"hidden",marginBottom:16,border:"1px solid #1e3a5f"},children:d.jsx("pre",{style:{background:"#060d1a",color:"#cdd9e5",padding:16,margin:0,overflowX:"auto",fontSize:12.5,lineHeight:1.65,fontFamily:"monospace",direction:"ltr",textAlign:"left"},children:T.join(`
`)})},O)),h=!1):(h=!0,T=[]);return}if(h){T.push(C);return}if(C.startsWith("## "))M.push(d.jsx("h2",{style:{color:s.accent,fontSize:17,fontWeight:800,margin:"24px 0 12px",borderBottom:`1px solid ${s.border}`,paddingBottom:8},children:C.slice(3)},O));else if(C.startsWith("### "))M.push(d.jsx("h3",{style:{color:s.accent2,fontSize:15,fontWeight:700,margin:"18px 0 8px"},children:C.slice(4)},O));else if(C.startsWith("| ")){const q=C.split("|").filter(j=>j.trim());q.every(j=>j.trim().match(/^-+$/))||M.push(d.jsx("tr",{children:q.map((j,tt)=>d.jsx("td",{style:{padding:"7px 14px",color:s.soft,fontSize:13,borderBottom:`1px solid ${s.border}`,fontFamily:j.trim().startsWith("`")?"monospace":"inherit"},dangerouslySetInnerHTML:{__html:j.trim().replace(/`([^`]+)`/g,'<code style="background:#0a1628;color:#88c0d0;padding:1px 6px;border-radius:4px;font-family:monospace;font-size:12px">$1</code>')}},tt))},O))}else C.startsWith("- ")?M.push(d.jsxs("div",{style:{display:"flex",gap:10,marginBottom:6,alignItems:"flex-start"},children:[d.jsx("span",{style:{color:s.accent,marginTop:2,flexShrink:0},children:"▸"}),d.jsx("span",{style:{color:s.soft,fontSize:14,lineHeight:1.7},dangerouslySetInnerHTML:{__html:C.slice(2).replace(/`([^`]+)`/g,'<code style="background:#0a1628;color:#88c0d0;padding:1px 6px;border-radius:4px;font-size:12px;font-family:monospace">$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong style="color:#e8f0fe">$1</strong>')}})]},O)):C.startsWith("---")?M.push(d.jsx("hr",{style:{border:"none",borderTop:`1px solid ${s.border}`,margin:"20px 0"}},O)):C.trim()?M.push(d.jsx("p",{style:{color:s.soft,fontSize:14,lineHeight:1.8,margin:"4px 0"},dangerouslySetInnerHTML:{__html:C.replace(/`([^`]+)`/g,'<code style="background:#0a1628;color:#88c0d0;padding:1px 6px;border-radius:4px;font-size:12px;font-family:monospace">$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong style="color:#e8f0fe">$1</strong>')}},O)):M.push(d.jsx("div",{style:{height:8}},O))});const G=[];let L=[];return M.forEach((C,O)=>{C&&C.type==="tr"?L.push(C):(L.length>0&&(G.push(d.jsx("div",{style:{overflowX:"auto",marginBottom:16,borderRadius:8,border:`1px solid ${s.border}`},children:d.jsx("table",{style:{width:"100%",borderCollapse:"collapse"},children:d.jsx("tbody",{children:L})})},`t${O}`)),L=[]),G.push(C))}),L.length>0&&G.push(d.jsx("div",{style:{overflowX:"auto",marginBottom:16,borderRadius:8,border:`1px solid ${s.border}`},children:d.jsx("table",{style:{width:"100%",borderCollapse:"collapse"},children:d.jsx("tbody",{children:L})})},"tlast")),d.jsx("div",{children:G})}function sp({chapter:v,onProgress:Y}){const[M,h]=Pt.useState("theory"),[T,G]=Pt.useState(null),L=[{id:"theory",label:"📖 תיאוריה"},{id:"code",label:"💻 קוד"},{id:"trace",label:"📊 מעקב"},{id:"questions",label:"🧠 שאלות"},{id:"exercises",label:"🛠 תרגילים"},{id:"quiz",label:`✅ בוחן (${v.quiz.length})`}];return d.jsxs("div",{children:[d.jsxs("div",{style:{marginBottom:24},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:10},children:[d.jsx("div",{style:{fontSize:40},children:v.icon}),d.jsxs("div",{children:[d.jsx("div",{style:{color:s.muted,fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase"},children:v.syllabus}),d.jsx("h2",{style:{margin:"2px 0 0",fontSize:26,color:s.text,fontWeight:900,letterSpacing:-.5},children:v.title})]})]}),d.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginTop:12},children:v.goals.map((C,O)=>d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,background:s.card,borderRadius:8,padding:"5px 12px",border:`1px solid ${s.border}`},children:[d.jsx("span",{style:{color:s.accent3,fontSize:10},children:"🎯"}),d.jsx("span",{style:{color:s.muted,fontSize:12},children:C})]},O))})]}),d.jsx("div",{style:{display:"flex",gap:4,marginBottom:20,overflowX:"auto",paddingBottom:4},children:L.map(C=>d.jsx("button",{onClick:()=>h(C.id),style:{padding:"8px 18px",borderRadius:8,border:"none",cursor:"pointer",whiteSpace:"nowrap",fontFamily:"inherit",fontWeight:M===C.id?800:500,fontSize:13,background:M===C.id?s.accent:s.card,color:M===C.id?"#000":s.muted},children:C.label},C.id))}),d.jsxs("div",{style:{background:s.card,borderRadius:16,padding:28,border:`1px solid ${s.border}`,minHeight:400},children:[M==="theory"&&d.jsx(op,{text:v.theory}),M==="code"&&d.jsx(cp,{code:v.code}),M==="trace"&&d.jsxs("div",{children:[d.jsx("div",{style:{color:s.muted,fontSize:13,marginBottom:16,padding:"10px 14px",background:s.surface,borderRadius:8,border:`1px solid ${s.border}`},children:"📊 טבלת מעקב – עקוב אחרי ערכי המשתנים בכל שלב:"}),d.jsx(fp,{data:v.traceTable})]}),M==="questions"&&d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[d.jsx("div",{style:{color:s.muted,fontSize:12,marginBottom:8},children:"לחץ על שאלה לראות את התשובה:"}),v.questions.map((C,O)=>d.jsxs("div",{style:{borderRadius:10,border:`1px solid ${T===O?s.accent2+"55":s.border}`,overflow:"hidden"},children:[d.jsxs("button",{onClick:()=>G(T===O?null:O),style:{width:"100%",textAlign:"right",padding:"14px 18px",background:T===O?`${s.accent2}12`:s.surface,border:"none",cursor:"pointer",fontFamily:"inherit",display:"flex",justifyContent:"space-between",alignItems:"center",color:s.text,fontWeight:600,fontSize:14},children:[d.jsx("span",{style:{color:s.accent2,fontSize:12},children:T===O?"▲":"▼"}),d.jsx("span",{children:C.q})]}),T===O&&d.jsxs("div",{style:{padding:"14px 18px",background:`${s.accent2}08`,borderTop:`1px solid ${s.border}`,color:s.soft,fontSize:14,lineHeight:1.8},children:["💡 ",d.jsx("strong",{style:{color:s.accent2},children:"תשובה:"})," ",C.a]})]},O))]}),M==="exercises"&&d.jsxs("div",{children:[d.jsx("div",{style:{color:s.accent,fontWeight:800,marginBottom:16,fontSize:15},children:"🛠 תרגילים מדורגים"}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:24},children:v.exercises.map((C,O)=>d.jsxs("div",{style:{display:"flex",gap:14,padding:"14px 18px",background:s.surface,borderRadius:10,border:`1px solid ${s.border}`},children:[d.jsx("span",{style:{background:s.accent,color:"#000",borderRadius:6,width:26,height:26,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:12,flexShrink:0},children:O+1}),d.jsx("span",{style:{color:s.soft,fontSize:14,lineHeight:1.7},children:C})]},O))}),d.jsxs("div",{style:{padding:20,background:`${s.warn}0f`,borderRadius:12,border:`1px solid ${s.warn}33`},children:[d.jsx("div",{style:{color:s.warn,fontWeight:800,marginBottom:10,fontSize:15},children:"🧪 משימת אתגר"}),d.jsx("div",{style:{color:s.soft,fontSize:14,lineHeight:1.7},children:v.challenge})]})]}),M==="quiz"&&d.jsxs("div",{children:[d.jsxs("div",{style:{color:s.accent,fontWeight:800,marginBottom:20,fontSize:15},children:["✅ בוחן – פרק ",v.id,": ",v.title,d.jsxs("span",{style:{color:s.muted,fontSize:12,fontWeight:400,marginRight:10},children:["(",v.quiz.length," שאלות)"]})]}),d.jsx(rp,{quiz:v.quiz,chapterId:v.id,chapterTitle:v.title,onComplete:C=>Y(v.id,C)},v.id)]})]})]})}function dp(){const[v,Y]=Pt.useState(null),[M,h]=Pt.useState({}),[T,G]=Pt.useState(!0),[L,C]=Pt.useState("home"),O=(R,J)=>h(lt=>({...lt,[R]:Math.max(lt[R]||0,J)})),q=Math.round(Object.values(M).reduce((R,J)=>R+J,0)/(Rn.length*100)*100),k=Object.keys(M).filter(R=>M[R]===100).length,j=Object.keys(M).length,tt=R=>{Y(R),C("chapter"),window.innerWidth<768&&G(!1)},Ot=v&&v.id<Rn.length?Rn[v.id]:null,at=v&&v.id>1?Rn[v.id-2]:null;return d.jsxs("div",{style:{minHeight:"100vh",background:s.bg,color:s.text,fontFamily:"'Segoe UI', Tahoma, sans-serif",direction:"rtl",display:"flex",flexDirection:"column",position:"relative"},children:[d.jsx(ip,{}),d.jsx(up,{}),d.jsxs("div",{style:{background:"rgba(10,8,32,0.85)",backdropFilter:"blur(16px)",borderBottom:`1px solid ${s.border}`,padding:"0 20px",display:"flex",alignItems:"center",gap:14,height:58,flexShrink:0,position:"sticky",top:0,zIndex:100},children:[d.jsx("button",{onClick:()=>G(R=>!R),style:{background:"transparent",border:"none",color:s.muted,cursor:"pointer",fontSize:18,padding:"4px 8px"},children:"☰"}),d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[d.jsx("span",{style:{fontSize:20},children:"🖥️"}),d.jsx("span",{style:{fontWeight:900,fontSize:16,color:s.accent,letterSpacing:-.5},children:"לומדים C"}),d.jsx("span",{style:{background:`${s.accent2}22`,color:s.accent2,border:`1px solid ${s.accent2}44`,borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:700},children:"18 פרקים"})]}),d.jsx("div",{style:{flex:1}}),d.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[d.jsxs("div",{style:{background:s.card,borderRadius:8,padding:"5px 12px",fontSize:12,border:`1px solid ${s.border}`,display:"flex",gap:6},children:[d.jsx("span",{style:{color:s.muted},children:"ציון:"}),d.jsxs("span",{style:{color:s.accent,fontWeight:800},children:[q,"%"]})]}),d.jsxs("div",{style:{background:s.card,borderRadius:8,padding:"5px 12px",fontSize:12,border:`1px solid ${s.border}`,display:"flex",gap:6},children:[d.jsx("span",{style:{color:s.muted},children:"הושלמו:"}),d.jsxs("span",{style:{color:s.accent3,fontWeight:800},children:[k,"/",Rn.length]})]})]})]}),d.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden",position:"relative",zIndex:1},children:[T&&d.jsxs("div",{style:{width:255,background:"rgba(10,8,32,0.85)",backdropFilter:"blur(12px)",borderLeft:`1px solid ${s.border}`,flexShrink:0,overflowY:"auto",padding:"8px 0"},children:[d.jsxs("button",{onClick:()=>{C("home")},style:{width:"100%",textAlign:"right",padding:"10px 18px",background:L==="home"?`${s.accent}18`:"transparent",border:"none",cursor:"pointer",color:L==="home"?s.accent:s.muted,fontFamily:"inherit",fontWeight:700,fontSize:13,display:"flex",gap:8,alignItems:"center",borderRight:L==="home"?`3px solid ${s.accent}`:"3px solid transparent"},children:[d.jsx("span",{children:"🏠"})," דף הבית"]}),d.jsx("div",{style:{height:1,background:s.border,margin:"6px 0"}}),Rn.map(R=>{const J=M[R.id]||0,lt=v?.id===R.id&&L==="chapter";return d.jsxs("button",{onClick:()=>tt(R),style:{width:"100%",textAlign:"right",padding:"9px 16px",background:lt?`${s.accent}12`:"transparent",border:"none",cursor:"pointer",color:lt?s.accent:s.text,fontFamily:"inherit",fontSize:12,display:"flex",gap:10,alignItems:"center",borderRight:lt?`3px solid ${s.accent}`:"3px solid transparent"},children:[d.jsx("span",{style:{fontSize:15,flexShrink:0},children:R.icon}),d.jsxs("div",{style:{flex:1,textAlign:"right"},children:[d.jsx("div",{style:{fontWeight:600,fontSize:12,color:lt?s.accent:s.soft},children:R.title}),d.jsx("div",{style:{marginTop:4,background:s.border,borderRadius:2,height:2,width:"100%"},children:d.jsx("div",{style:{background:J===100?s.accent3:J>0?s.accent:"transparent",width:`${J}%`,height:"100%",borderRadius:2,transition:"width 0.4s"}})})]}),d.jsx("span",{style:{color:J===100?s.accent3:s.muted,fontSize:10,fontWeight:800,flexShrink:0},children:J===100?"✓":J>0?`${J}%`:`P${R.id}`})]},R.id)})]}),d.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"28px 32px",maxWidth:"100%"},children:[L==="home"&&d.jsxs("div",{children:[d.jsxs("div",{style:{background:"linear-gradient(135deg,rgba(30,15,80,0.9) 0%,rgba(20,10,60,0.85) 100%)",borderRadius:20,padding:"44px 40px",marginBottom:32,border:`1px solid ${s.border}`,position:"relative",overflow:"hidden",backdropFilter:"blur(8px)"},children:[d.jsx("div",{style:{position:"absolute",top:-40,left:-40,width:200,height:200,background:`${s.accent}06`,borderRadius:"50%",pointerEvents:"none"}}),d.jsx("div",{style:{position:"absolute",bottom:-20,right:-20,width:140,height:140,background:`${s.accent2}06`,borderRadius:"50%",pointerEvents:"none"}}),d.jsxs("div",{style:{position:"relative"},children:[d.jsx("div",{style:{color:s.accent,fontWeight:900,fontSize:11,letterSpacing:4,textTransform:"uppercase",marginBottom:10},children:"קורס מלא לפי תוכנית הלימודים"}),d.jsxs("h1",{style:{margin:"0 0 14px",fontSize:42,fontWeight:900,lineHeight:1.15},children:["שפת ",d.jsx("span",{style:{color:s.accent},children:"C"})," מהיסוד"]}),d.jsx("p",{style:{color:s.muted,fontSize:15,lineHeight:1.8,maxWidth:520,margin:"0 0 28px"},children:"18 פרקים לפי הסילבוס הרשמי – תיאוריה מפורטת, דוגמאות קוד, טבלאות מעקב, שאלות, תרגילים ובחינות."}),d.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[d.jsx("button",{onClick:()=>tt(Rn[0]),style:{background:s.accent,color:"#000",border:"none",borderRadius:10,padding:"12px 28px",fontWeight:800,fontSize:15,cursor:"pointer"},children:"התחל ללמוד ←"}),j>0&&d.jsxs("button",{onClick:()=>tt(Rn[Math.min(j,Rn.length-1)]),style:{background:"transparent",color:s.accent,border:`1px solid ${s.accent}44`,borderRadius:10,padding:"12px 28px",fontWeight:700,fontSize:15,cursor:"pointer"},children:["המשך מפרק ",j+1]})]})]})]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:16,marginBottom:36},children:[{label:"פרקים",value:18,icon:"📚",color:s.accent},{label:"הושלמו",value:k,icon:"✅",color:s.accent3},{label:"פרקים התחלתי",value:j,icon:"📝",color:s.accent2},{label:"ציון כולל",value:`${q}%`,icon:"🏆",color:s.warn}].map((R,J)=>d.jsxs("div",{style:{background:s.card,borderRadius:14,padding:22,border:`1px solid ${s.border}`,textAlign:"center"},children:[d.jsx("div",{style:{fontSize:26,marginBottom:8},children:R.icon}),d.jsx("div",{style:{fontSize:30,fontWeight:900,color:R.color},children:R.value}),d.jsx("div",{style:{color:s.muted,fontSize:12,marginTop:4},children:R.label})]},J))}),q>0&&d.jsxs("div",{style:{marginBottom:32,padding:"16px 20px",background:s.card,borderRadius:14,border:`1px solid ${s.border}`},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:10},children:[d.jsx("span",{style:{color:s.muted,fontSize:13},children:"התקדמות כוללת"}),d.jsxs("span",{style:{color:s.accent,fontWeight:800},children:[q,"%"]})]}),d.jsx("div",{style:{background:s.surface,borderRadius:4,height:8},children:d.jsx("div",{style:{background:`linear-gradient(90deg, ${s.accent}, ${s.accent2})`,width:`${q}%`,height:"100%",borderRadius:4,transition:"width 0.6s"}})})]}),d.jsx("h2",{style:{color:s.text,fontWeight:800,marginBottom:18,fontSize:18},children:"📖 כל הפרקים"}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(210px, 1fr))",gap:14},children:Rn.map(R=>{const J=M[R.id]||0;return d.jsxs("button",{onClick:()=>tt(R),style:{textAlign:"right",background:s.card,border:`1px solid ${J===100?s.accent3+"55":s.border}`,borderRadius:14,padding:18,cursor:"pointer",fontFamily:"inherit",color:s.text,transition:"border-color 0.2s"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10},children:[d.jsx("span",{style:{fontSize:9,color:J===100?s.accent3:J>0?s.accent:s.muted,fontWeight:700,background:J===100?`${s.accent3}22`:J>0?`${s.accent}22`:s.surface,padding:"3px 8px",borderRadius:6,border:`1px solid ${J===100?s.accent3+"44":s.border}`},children:J===100?"✓ הושלם":J>0?`${J}%`:`פרק ${R.id}`}),d.jsx("span",{style:{fontSize:26},children:R.icon})]}),d.jsx("div",{style:{fontWeight:800,fontSize:14,marginBottom:5},children:R.title}),d.jsx("div",{style:{color:s.muted,fontSize:11,marginBottom:10},children:R.syllabus}),d.jsx("div",{style:{background:s.surface,borderRadius:3,height:3},children:d.jsx("div",{style:{background:J===100?s.accent3:s.accent,width:`${J}%`,height:"100%",borderRadius:3,transition:"width 0.4s"}})})]},R.id)})})]}),L==="chapter"&&v&&d.jsxs("div",{children:[d.jsxs("div",{style:{display:"flex",gap:8,marginBottom:24,flexWrap:"wrap"},children:[d.jsx("button",{onClick:()=>C("home"),style:{background:s.card,border:`1px solid ${s.border}`,borderRadius:8,padding:"8px 14px",cursor:"pointer",color:s.muted,fontFamily:"inherit",fontSize:13},children:"← בית"}),at&&d.jsxs("button",{onClick:()=>tt(at),style:{background:s.card,border:`1px solid ${s.border}`,borderRadius:8,padding:"8px 14px",cursor:"pointer",color:s.muted,fontFamily:"inherit",fontSize:13},children:["◀ ",at.title]}),Ot&&d.jsxs("button",{onClick:()=>tt(Ot),style:{background:s.accent,border:"none",borderRadius:8,padding:"8px 16px",cursor:"pointer",color:"#000",fontFamily:"inherit",fontWeight:700,fontSize:13},children:[Ot.title," ▶"]})]}),d.jsx(sp,{chapter:v,onProgress:O},v.id)]})]})]})]})}ap.createRoot(document.getElementById("root")).render(d.jsx(Pt.StrictMode,{children:d.jsx(dp,{})}));
