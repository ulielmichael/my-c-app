(function(){const W=document.createElement("link").relList;if(W&&W.supports&&W.supports("modulepreload"))return;for(const B of document.querySelectorAll('link[rel="modulepreload"]'))h(B);new MutationObserver(B=>{for(const Q of B)if(Q.type==="childList")for(const H of Q.addedNodes)H.tagName==="LINK"&&H.rel==="modulepreload"&&h(H)}).observe(document,{childList:!0,subtree:!0});function j(B){const Q={};return B.integrity&&(Q.integrity=B.integrity),B.referrerPolicy&&(Q.referrerPolicy=B.referrerPolicy),B.crossOrigin==="use-credentials"?Q.credentials="include":B.crossOrigin==="anonymous"?Q.credentials="omit":Q.credentials="same-origin",Q}function h(B){if(B.ep)return;B.ep=!0;const Q=j(B);fetch(B.href,Q)}})();var cf={exports:{}},za={};var pd;function k1(){if(pd)return za;pd=1;var A=Symbol.for("react.transitional.element"),W=Symbol.for("react.fragment");function j(h,B,Q){var H=null;if(Q!==void 0&&(H=""+Q),B.key!==void 0&&(H=""+B.key),"key"in B){Q={};for(var q in B)q!=="key"&&(Q[q]=B[q])}else Q=B;return B=Q.ref,{$$typeof:A,type:h,key:H,ref:B!==void 0?B:null,props:Q}}return za.Fragment=W,za.jsx=j,za.jsxs=j,za}var gd;function $1(){return gd||(gd=1,cf.exports=k1()),cf.exports}var p=$1(),ff={exports:{}},X={};var vd;function F1(){if(vd)return X;vd=1;var A=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),H=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),J=Symbol.iterator;function vt(o){return o===null||typeof o!="object"?null:(o=J&&o[J]||o["@@iterator"],typeof o=="function"?o:null)}var Tt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L=Object.assign,tt={};function xt(o,T,M){this.props=o,this.context=T,this.refs=tt,this.updater=M||Tt}xt.prototype.isReactComponent={},xt.prototype.setState=function(o,T){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,T,"setState")},xt.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function Fl(){}Fl.prototype=xt.prototype;function Yt(o,T,M){this.props=o,this.context=T,this.refs=tt,this.updater=M||Tt}var fl=Yt.prototype=new Fl;fl.constructor=Yt,L(fl,xt.prototype),fl.isPureReactComponent=!0;var Al=Array.isArray;function Xt(){}var lt={H:null,A:null,T:null,S:null},Zt=Object.prototype.hasOwnProperty;function El(o,T,M){var R=M.ref;return{$$typeof:A,type:o,key:T,ref:R!==void 0?R:null,props:M}}function Vn(o,T){return El(o.type,T,o.props)}function Tl(o){return typeof o=="object"&&o!==null&&o.$$typeof===A}function Vt(o){var T={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(M){return T[M]})}var En=/\/+/g;function ql(o,T){return typeof o=="object"&&o!==null&&o.key!=null?Vt(""+o.key):T.toString(36)}function bl(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(Xt,Xt):(o.status="pending",o.then(function(T){o.status==="pending"&&(o.status="fulfilled",o.value=T)},function(T){o.status==="pending"&&(o.status="rejected",o.reason=T)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function S(o,T,M,R,V){var k=typeof o;(k==="undefined"||k==="boolean")&&(o=null);var ut=!1;if(o===null)ut=!0;else switch(k){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(o.$$typeof){case A:case W:ut=!0;break;case Z:return ut=o._init,S(ut(o._payload),T,M,R,V)}}if(ut)return V=V(o),ut=R===""?"."+ql(o,0):R,Al(V)?(M="",ut!=null&&(M=ut.replace(En,"$&/")+"/"),S(V,T,M,"",function(Me){return Me})):V!=null&&(Tl(V)&&(V=Vn(V,M+(V.key==null||o&&o.key===V.key?"":(""+V.key).replace(En,"$&/")+"/")+ut)),T.push(V)),1;ut=0;var Qt=R===""?".":R+":";if(Al(o))for(var zt=0;zt<o.length;zt++)R=o[zt],k=Qt+ql(R,zt),ut+=S(R,T,M,k,V);else if(zt=vt(o),typeof zt=="function")for(o=zt.call(o),zt=0;!(R=o.next()).done;)R=R.value,k=Qt+ql(R,zt++),ut+=S(R,T,M,k,V);else if(k==="object"){if(typeof o.then=="function")return S(bl(o),T,M,R,V);throw T=String(o),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return ut}function _(o,T,M){if(o==null)return o;var R=[],V=0;return S(o,R,"","",function(k){return T.call(M,k,V++)}),R}function G(o){if(o._status===-1){var T=o._result;T=T(),T.then(function(M){(o._status===0||o._status===-1)&&(o._status=1,o._result=M)},function(M){(o._status===0||o._status===-1)&&(o._status=2,o._result=M)}),o._status===-1&&(o._status=0,o._result=T)}if(o._status===1)return o._result.default;throw o._result}var rt=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},ht={map:_,forEach:function(o,T,M){_(o,function(){T.apply(this,arguments)},M)},count:function(o){var T=0;return _(o,function(){T++}),T},toArray:function(o){return _(o,function(T){return T})||[]},only:function(o){if(!Tl(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return X.Activity=D,X.Children=ht,X.Component=xt,X.Fragment=j,X.Profiler=B,X.PureComponent=Yt,X.StrictMode=h,X.Suspense=O,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=lt,X.__COMPILER_RUNTIME={__proto__:null,c:function(o){return lt.H.useMemoCache(o)}},X.cache=function(o){return function(){return o.apply(null,arguments)}},X.cacheSignal=function(){return null},X.cloneElement=function(o,T,M){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var R=L({},o.props),V=o.key;if(T!=null)for(k in T.key!==void 0&&(V=""+T.key),T)!Zt.call(T,k)||k==="key"||k==="__self"||k==="__source"||k==="ref"&&T.ref===void 0||(R[k]=T[k]);var k=arguments.length-2;if(k===1)R.children=M;else if(1<k){for(var ut=Array(k),Qt=0;Qt<k;Qt++)ut[Qt]=arguments[Qt+2];R.children=ut}return El(o.type,V,R)},X.createContext=function(o){return o={$$typeof:H,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:Q,_context:o},o},X.createElement=function(o,T,M){var R,V={},k=null;if(T!=null)for(R in T.key!==void 0&&(k=""+T.key),T)Zt.call(T,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(V[R]=T[R]);var ut=arguments.length-2;if(ut===1)V.children=M;else if(1<ut){for(var Qt=Array(ut),zt=0;zt<ut;zt++)Qt[zt]=arguments[zt+2];V.children=Qt}if(o&&o.defaultProps)for(R in ut=o.defaultProps,ut)V[R]===void 0&&(V[R]=ut[R]);return El(o,k,V)},X.createRef=function(){return{current:null}},X.forwardRef=function(o){return{$$typeof:q,render:o}},X.isValidElement=Tl,X.lazy=function(o){return{$$typeof:Z,_payload:{_status:-1,_result:o},_init:G}},X.memo=function(o,T){return{$$typeof:E,type:o,compare:T===void 0?null:T}},X.startTransition=function(o){var T=lt.T,M={};lt.T=M;try{var R=o(),V=lt.S;V!==null&&V(M,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(Xt,rt)}catch(k){rt(k)}finally{T!==null&&M.types!==null&&(T.types=M.types),lt.T=T}},X.unstable_useCacheRefresh=function(){return lt.H.useCacheRefresh()},X.use=function(o){return lt.H.use(o)},X.useActionState=function(o,T,M){return lt.H.useActionState(o,T,M)},X.useCallback=function(o,T){return lt.H.useCallback(o,T)},X.useContext=function(o){return lt.H.useContext(o)},X.useDebugValue=function(){},X.useDeferredValue=function(o,T){return lt.H.useDeferredValue(o,T)},X.useEffect=function(o,T){return lt.H.useEffect(o,T)},X.useEffectEvent=function(o){return lt.H.useEffectEvent(o)},X.useId=function(){return lt.H.useId()},X.useImperativeHandle=function(o,T,M){return lt.H.useImperativeHandle(o,T,M)},X.useInsertionEffect=function(o,T){return lt.H.useInsertionEffect(o,T)},X.useLayoutEffect=function(o,T){return lt.H.useLayoutEffect(o,T)},X.useMemo=function(o,T){return lt.H.useMemo(o,T)},X.useOptimistic=function(o,T){return lt.H.useOptimistic(o,T)},X.useReducer=function(o,T,M){return lt.H.useReducer(o,T,M)},X.useRef=function(o){return lt.H.useRef(o)},X.useState=function(o){return lt.H.useState(o)},X.useSyncExternalStore=function(o,T,M){return lt.H.useSyncExternalStore(o,T,M)},X.useTransition=function(){return lt.H.useTransition()},X.version="19.2.4",X}var bd;function hf(){return bd||(bd=1,ff.exports=F1()),ff.exports}var Ul=hf(),rf={exports:{}},Aa={},of={exports:{}},sf={};var Sd;function I1(){return Sd||(Sd=1,(function(A){function W(S,_){var G=S.length;S.push(_);t:for(;0<G;){var rt=G-1>>>1,ht=S[rt];if(0<B(ht,_))S[rt]=_,S[G]=ht,G=rt;else break t}}function j(S){return S.length===0?null:S[0]}function h(S){if(S.length===0)return null;var _=S[0],G=S.pop();if(G!==_){S[0]=G;t:for(var rt=0,ht=S.length,o=ht>>>1;rt<o;){var T=2*(rt+1)-1,M=S[T],R=T+1,V=S[R];if(0>B(M,G))R<ht&&0>B(V,M)?(S[rt]=V,S[R]=G,rt=R):(S[rt]=M,S[T]=G,rt=T);else if(R<ht&&0>B(V,G))S[rt]=V,S[R]=G,rt=R;else break t}}return _}function B(S,_){var G=S.sortIndex-_.sortIndex;return G!==0?G:S.id-_.id}if(A.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var Q=performance;A.unstable_now=function(){return Q.now()}}else{var H=Date,q=H.now();A.unstable_now=function(){return H.now()-q}}var O=[],E=[],Z=1,D=null,J=3,vt=!1,Tt=!1,L=!1,tt=!1,xt=typeof setTimeout=="function"?setTimeout:null,Fl=typeof clearTimeout=="function"?clearTimeout:null,Yt=typeof setImmediate<"u"?setImmediate:null;function fl(S){for(var _=j(E);_!==null;){if(_.callback===null)h(E);else if(_.startTime<=S)h(E),_.sortIndex=_.expirationTime,W(O,_);else break;_=j(E)}}function Al(S){if(L=!1,fl(S),!Tt)if(j(O)!==null)Tt=!0,Xt||(Xt=!0,Vt());else{var _=j(E);_!==null&&bl(Al,_.startTime-S)}}var Xt=!1,lt=-1,Zt=5,El=-1;function Vn(){return tt?!0:!(A.unstable_now()-El<Zt)}function Tl(){if(tt=!1,Xt){var S=A.unstable_now();El=S;var _=!0;try{t:{Tt=!1,L&&(L=!1,Fl(lt),lt=-1),vt=!0;var G=J;try{l:{for(fl(S),D=j(O);D!==null&&!(D.expirationTime>S&&Vn());){var rt=D.callback;if(typeof rt=="function"){D.callback=null,J=D.priorityLevel;var ht=rt(D.expirationTime<=S);if(S=A.unstable_now(),typeof ht=="function"){D.callback=ht,fl(S),_=!0;break l}D===j(O)&&h(O),fl(S)}else h(O);D=j(O)}if(D!==null)_=!0;else{var o=j(E);o!==null&&bl(Al,o.startTime-S),_=!1}}break t}finally{D=null,J=G,vt=!1}_=void 0}}finally{_?Vt():Xt=!1}}}var Vt;if(typeof Yt=="function")Vt=function(){Yt(Tl)};else if(typeof MessageChannel<"u"){var En=new MessageChannel,ql=En.port2;En.port1.onmessage=Tl,Vt=function(){ql.postMessage(null)}}else Vt=function(){xt(Tl,0)};function bl(S,_){lt=xt(function(){S(A.unstable_now())},_)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(S){S.callback=null},A.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Zt=0<S?Math.floor(1e3/S):5},A.unstable_getCurrentPriorityLevel=function(){return J},A.unstable_next=function(S){switch(J){case 1:case 2:case 3:var _=3;break;default:_=J}var G=J;J=_;try{return S()}finally{J=G}},A.unstable_requestPaint=function(){tt=!0},A.unstable_runWithPriority=function(S,_){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var G=J;J=S;try{return _()}finally{J=G}},A.unstable_scheduleCallback=function(S,_,G){var rt=A.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?rt+G:rt):G=rt,S){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=G+ht,S={id:Z++,callback:_,priorityLevel:S,startTime:G,expirationTime:ht,sortIndex:-1},G>rt?(S.sortIndex=G,W(E,S),j(O)===null&&S===j(E)&&(L?(Fl(lt),lt=-1):L=!0,bl(Al,G-rt))):(S.sortIndex=ht,W(O,S),Tt||vt||(Tt=!0,Xt||(Xt=!0,Vt()))),S},A.unstable_shouldYield=Vn,A.unstable_wrapCallback=function(S){var _=J;return function(){var G=J;J=_;try{return S.apply(this,arguments)}finally{J=G}}}})(sf)),sf}var xd;function P1(){return xd||(xd=1,of.exports=I1()),of.exports}var df={exports:{}},Gt={};var zd;function th(){if(zd)return Gt;zd=1;var A=hf();function W(O){var E="https://react.dev/errors/"+O;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var Z=2;Z<arguments.length;Z++)E+="&args[]="+encodeURIComponent(arguments[Z])}return"Minified React error #"+O+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(){}var h={d:{f:j,r:function(){throw Error(W(522))},D:j,C:j,L:j,m:j,X:j,S:j,M:j},p:0,findDOMNode:null},B=Symbol.for("react.portal");function Q(O,E,Z){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:D==null?null:""+D,children:O,containerInfo:E,implementation:Z}}var H=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function q(O,E){if(O==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Gt.createPortal=function(O,E){var Z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(W(299));return Q(O,E,null,Z)},Gt.flushSync=function(O){var E=H.T,Z=h.p;try{if(H.T=null,h.p=2,O)return O()}finally{H.T=E,h.p=Z,h.d.f()}},Gt.preconnect=function(O,E){typeof O=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,h.d.C(O,E))},Gt.prefetchDNS=function(O){typeof O=="string"&&h.d.D(O)},Gt.preinit=function(O,E){if(typeof O=="string"&&E&&typeof E.as=="string"){var Z=E.as,D=q(Z,E.crossOrigin),J=typeof E.integrity=="string"?E.integrity:void 0,vt=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;Z==="style"?h.d.S(O,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:D,integrity:J,fetchPriority:vt}):Z==="script"&&h.d.X(O,{crossOrigin:D,integrity:J,fetchPriority:vt,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Gt.preinitModule=function(O,E){if(typeof O=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var Z=q(E.as,E.crossOrigin);h.d.M(O,{crossOrigin:Z,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&h.d.M(O)},Gt.preload=function(O,E){if(typeof O=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var Z=E.as,D=q(Z,E.crossOrigin);h.d.L(O,Z,{crossOrigin:D,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Gt.preloadModule=function(O,E){if(typeof O=="string")if(E){var Z=q(E.as,E.crossOrigin);h.d.m(O,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:Z,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else h.d.m(O)},Gt.requestFormReset=function(O){h.d.r(O)},Gt.unstable_batchedUpdates=function(O,E){return O(E)},Gt.useFormState=function(O,E,Z){return H.H.useFormState(O,E,Z)},Gt.useFormStatus=function(){return H.H.useHostTransitionStatus()},Gt.version="19.2.4",Gt}var Ad;function lh(){if(Ad)return df.exports;Ad=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(W){console.error(W)}}return A(),df.exports=th(),df.exports}var Ed;function nh(){if(Ed)return Aa;Ed=1;var A=P1(),W=hf(),j=lh();function h(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)l+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function B(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Q(t){var l=t,n=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,(l.flags&4098)!==0&&(n=l.return),t=l.return;while(t)}return l.tag===3?n:null}function H(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function q(t){if(t.tag===31){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function O(t){if(Q(t)!==t)throw Error(h(188))}function E(t){var l=t.alternate;if(!l){if(l=Q(t),l===null)throw Error(h(188));return l!==t?null:t}for(var n=t,e=l;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(e=a.return,e!==null){n=e;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return O(a),t;if(i===e)return O(a),l;i=i.sibling}throw Error(h(188))}if(n.return!==e.return)n=a,e=i;else{for(var u=!1,c=a.child;c;){if(c===n){u=!0,n=a,e=i;break}if(c===e){u=!0,e=a,n=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===n){u=!0,n=i,e=a;break}if(c===e){u=!0,e=i,n=a;break}c=c.sibling}if(!u)throw Error(h(189))}}if(n.alternate!==e)throw Error(h(190))}if(n.tag!==3)throw Error(h(188));return n.stateNode.current===n?t:l}function Z(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t;for(t=t.child;t!==null;){if(l=Z(t),l!==null)return l;t=t.sibling}return null}var D=Object.assign,J=Symbol.for("react.element"),vt=Symbol.for("react.transitional.element"),Tt=Symbol.for("react.portal"),L=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),xt=Symbol.for("react.profiler"),Fl=Symbol.for("react.consumer"),Yt=Symbol.for("react.context"),fl=Symbol.for("react.forward_ref"),Al=Symbol.for("react.suspense"),Xt=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),El=Symbol.for("react.activity"),Vn=Symbol.for("react.memo_cache_sentinel"),Tl=Symbol.iterator;function Vt(t){return t===null||typeof t!="object"?null:(t=Tl&&t[Tl]||t["@@iterator"],typeof t=="function"?t:null)}var En=Symbol.for("react.client.reference");function ql(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===En?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case L:return"Fragment";case xt:return"Profiler";case tt:return"StrictMode";case Al:return"Suspense";case Xt:return"SuspenseList";case El:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Tt:return"Portal";case Yt:return t.displayName||"Context";case Fl:return(t._context.displayName||"Context")+".Consumer";case fl:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lt:return l=t.displayName||null,l!==null?l:ql(t.type)||"Memo";case Zt:l=t._payload,t=t._init;try{return ql(t(l))}catch{}}return null}var bl=Array.isArray,S=W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_=j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},rt=[],ht=-1;function o(t){return{current:t}}function T(t){0>ht||(t.current=rt[ht],rt[ht]=null,ht--)}function M(t,l){ht++,rt[ht]=t.current,t.current=l}var R=o(null),V=o(null),k=o(null),ut=o(null);function Qt(t,l){switch(M(k,l),M(V,t),M(R,null),l.nodeType){case 9:case 11:t=(t=l.documentElement)&&(t=t.namespaceURI)?Gs(t):0;break;default:if(t=l.tagName,l=l.namespaceURI)l=Gs(l),t=Qs(l,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}T(R),M(R,t)}function zt(){T(R),T(V),T(k)}function Me(t){t.memoizedState!==null&&M(ut,t);var l=R.current,n=Qs(l,t.type);l!==n&&(M(V,t),M(R,n))}function Ea(t){V.current===t&&(T(R),T(V)),ut.current===t&&(T(ut),va._currentValue=G)}var Xi,mf;function Tn(t){if(Xi===void 0)try{throw Error()}catch(n){var l=n.stack.trim().match(/\n( *(at )?)/);Xi=l&&l[1]||"",mf=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xi+t+mf}var Zi=!1;function Vi(t,l){if(!t||Zi)return"";Zi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(l){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(v){var g=v}Reflect.construct(t,[],z)}else{try{z.call()}catch(v){g=v}t.call(z.prototype)}}else{try{throw Error()}catch(v){g=v}(z=t())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(v){if(v&&g&&typeof v.stack=="string")return[v.stack,g.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=e.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var f=u.split(`
`),y=c.split(`
`);for(a=e=0;e<f.length&&!f[e].includes("DetermineComponentFrameRoot");)e++;for(;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;if(e===f.length||a===y.length)for(e=f.length-1,a=y.length-1;1<=e&&0<=a&&f[e]!==y[a];)a--;for(;1<=e&&0<=a;e--,a--)if(f[e]!==y[a]){if(e!==1||a!==1)do if(e--,a--,0>a||f[e]!==y[a]){var b=`
`+f[e].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=e&&0<=a);break}}}finally{Zi=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Tn(n):""}function Od(t,l){switch(t.tag){case 26:case 27:case 5:return Tn(t.type);case 16:return Tn("Lazy");case 13:return t.child!==l&&l!==null?Tn("Suspense Fallback"):Tn("Suspense");case 19:return Tn("SuspenseList");case 0:case 15:return Vi(t.type,!1);case 11:return Vi(t.type.render,!1);case 1:return Vi(t.type,!0);case 31:return Tn("Activity");default:return""}}function yf(t){try{var l="",n=null;do l+=Od(t,n),n=t,t=t.return;while(t);return l}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var wi=Object.prototype.hasOwnProperty,Ki=A.unstable_scheduleCallback,Ji=A.unstable_cancelCallback,_d=A.unstable_shouldYield,jd=A.unstable_requestPaint,It=A.unstable_now,Md=A.unstable_getCurrentPriorityLevel,pf=A.unstable_ImmediatePriority,gf=A.unstable_UserBlockingPriority,Ta=A.unstable_NormalPriority,Dd=A.unstable_LowPriority,vf=A.unstable_IdlePriority,Ud=A.log,qd=A.unstable_setDisableYieldValue,De=null,Pt=null;function Il(t){if(typeof Ud=="function"&&qd(t),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(De,t)}catch{}}var tl=Math.clz32?Math.clz32:Nd,Rd=Math.log,Bd=Math.LN2;function Nd(t){return t>>>=0,t===0?32:31-(Rd(t)/Bd|0)|0}var Oa=256,_a=262144,ja=4194304;function On(t){var l=t&42;if(l!==0)return l;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ma(t,l,n){var e=t.pendingLanes;if(e===0)return 0;var a=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=e&134217727;return c!==0?(e=c&~i,e!==0?a=On(e):(u&=c,u!==0?a=On(u):n||(n=c&~t,n!==0&&(a=On(n))))):(c=e&~i,c!==0?a=On(c):u!==0?a=On(u):n||(n=e&~t,n!==0&&(a=On(n)))),a===0?0:l!==0&&l!==a&&(l&i)===0&&(i=a&-a,n=l&-l,i>=n||i===32&&(n&4194048)!==0)?l:a}function Ue(t,l){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&l)===0}function Cd(t,l){switch(t){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bf(){var t=ja;return ja<<=1,(ja&62914560)===0&&(ja=4194304),t}function Wi(t){for(var l=[],n=0;31>n;n++)l.push(t);return l}function qe(t,l){t.pendingLanes|=l,l!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Hd(t,l,n,e,a,i){var u=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,y=t.hiddenUpdates;for(n=u&~n;0<n;){var b=31-tl(n),z=1<<b;c[b]=0,f[b]=-1;var g=y[b];if(g!==null)for(y[b]=null,b=0;b<g.length;b++){var v=g[b];v!==null&&(v.lane&=-536870913)}n&=~z}e!==0&&Sf(t,e,0),i!==0&&a===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~l))}function Sf(t,l,n){t.pendingLanes|=l,t.suspendedLanes&=~l;var e=31-tl(l);t.entangledLanes|=l,t.entanglements[e]=t.entanglements[e]|1073741824|n&261930}function xf(t,l){var n=t.entangledLanes|=l;for(t=t.entanglements;n;){var e=31-tl(n),a=1<<e;a&l|t[e]&l&&(t[e]|=l),n&=~a}}function zf(t,l){var n=l&-l;return n=(n&42)!==0?1:ki(n),(n&(t.suspendedLanes|l))!==0?0:n}function ki(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $i(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Af(){var t=_.p;return t!==0?t:(t=window.event,t===void 0?32:rd(t.type))}function Ef(t,l){var n=_.p;try{return _.p=t,l()}finally{_.p=n}}var Pl=Math.random().toString(36).slice(2),Rt="__reactFiber$"+Pl,wt="__reactProps$"+Pl,wn="__reactContainer$"+Pl,Fi="__reactEvents$"+Pl,Yd="__reactListeners$"+Pl,Gd="__reactHandles$"+Pl,Tf="__reactResources$"+Pl,Re="__reactMarker$"+Pl;function Ii(t){delete t[Rt],delete t[wt],delete t[Fi],delete t[Yd],delete t[Gd]}function Kn(t){var l=t[Rt];if(l)return l;for(var n=t.parentNode;n;){if(l=n[wn]||n[Rt]){if(n=l.alternate,l.child!==null||n!==null&&n.child!==null)for(t=Js(t);t!==null;){if(n=t[Rt])return n;t=Js(t)}return l}t=n,n=t.parentNode}return null}function Jn(t){if(t=t[Rt]||t[wn]){var l=t.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return t}return null}function Be(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t.stateNode;throw Error(h(33))}function Wn(t){var l=t[Tf];return l||(l=t[Tf]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function Ut(t){t[Re]=!0}var Of=new Set,_f={};function _n(t,l){kn(t,l),kn(t+"Capture",l)}function kn(t,l){for(_f[t]=l,t=0;t<l.length;t++)Of.add(l[t])}var Qd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jf={},Mf={};function Ld(t){return wi.call(Mf,t)?!0:wi.call(jf,t)?!1:Qd.test(t)?Mf[t]=!0:(jf[t]=!0,!1)}function Da(t,l,n){if(Ld(l))if(n===null)t.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(l);return;case"boolean":var e=l.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(l);return}}t.setAttribute(l,""+n)}}function Ua(t,l,n){if(n===null)t.removeAttribute(l);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttribute(l,""+n)}}function Rl(t,l,n,e){if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(l,n,""+e)}}function rl(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Df(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function Xd(t,l,n){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,l);if(!t.hasOwnProperty(l)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var a=e.get,i=e.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return a.call(this)},set:function(u){n=""+u,i.call(this,u)}}),Object.defineProperty(t,l,{enumerable:e.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function Pi(t){if(!t._valueTracker){var l=Df(t)?"checked":"value";t._valueTracker=Xd(t,l,""+t[l])}}function Uf(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var n=l.getValue(),e="";return t&&(e=Df(t)?t.checked?"true":"false":t.value),t=e,t!==n?(l.setValue(t),!0):!1}function qa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Zd=/[\n"\\]/g;function ol(t){return t.replace(Zd,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function tu(t,l,n,e,a,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),l!=null?u==="number"?(l===0&&t.value===""||t.value!=l)&&(t.value=""+rl(l)):t.value!==""+rl(l)&&(t.value=""+rl(l)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),l!=null?lu(t,u,rl(l)):n!=null?lu(t,u,rl(n)):e!=null&&t.removeAttribute("value"),a==null&&i!=null&&(t.defaultChecked=!!i),a!=null&&(t.checked=a&&typeof a!="function"&&typeof a!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+rl(c):t.removeAttribute("name")}function qf(t,l,n,e,a,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),l!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||l!=null)){Pi(t);return}n=n!=null?""+rl(n):"",l=l!=null?""+rl(l):n,c||l===t.value||(t.value=l),t.defaultValue=l}e=e??a,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=c?t.checked:!!e,t.defaultChecked=!!e,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Pi(t)}function lu(t,l,n){l==="number"&&qa(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function $n(t,l,n,e){if(t=t.options,l){l={};for(var a=0;a<n.length;a++)l["$"+n[a]]=!0;for(n=0;n<t.length;n++)a=l.hasOwnProperty("$"+t[n].value),t[n].selected!==a&&(t[n].selected=a),a&&e&&(t[n].defaultSelected=!0)}else{for(n=""+rl(n),l=null,a=0;a<t.length;a++){if(t[a].value===n){t[a].selected=!0,e&&(t[a].defaultSelected=!0);return}l!==null||t[a].disabled||(l=t[a])}l!==null&&(l.selected=!0)}}function Rf(t,l,n){if(l!=null&&(l=""+rl(l),l!==t.value&&(t.value=l),n==null)){t.defaultValue!==l&&(t.defaultValue=l);return}t.defaultValue=n!=null?""+rl(n):""}function Bf(t,l,n,e){if(l==null){if(e!=null){if(n!=null)throw Error(h(92));if(bl(e)){if(1<e.length)throw Error(h(93));e=e[0]}n=e}n==null&&(n=""),l=n}n=rl(l),t.defaultValue=n,e=t.textContent,e===n&&e!==""&&e!==null&&(t.value=e),Pi(t)}function Fn(t,l){if(l){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=l;return}}t.textContent=l}var Vd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nf(t,l,n){var e=l.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?e?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="":e?t.setProperty(l,n):typeof n!="number"||n===0||Vd.has(l)?l==="float"?t.cssFloat=n:t[l]=(""+n).trim():t[l]=n+"px"}function Cf(t,l,n){if(l!=null&&typeof l!="object")throw Error(h(62));if(t=t.style,n!=null){for(var e in n)!n.hasOwnProperty(e)||l!=null&&l.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var a in l)e=l[a],l.hasOwnProperty(a)&&n[a]!==e&&Nf(t,a,e)}else for(var i in l)l.hasOwnProperty(i)&&Nf(t,i,l[i])}function nu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ra(t){return Kd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Bl(){}var eu=null;function au(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var In=null,Pn=null;function Hf(t){var l=Jn(t);if(l&&(t=l.stateNode)){var n=t[wt]||null;t:switch(t=l.stateNode,l.type){case"input":if(tu(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),l=n.name,n.type==="radio"&&l!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ol(""+l)+'"][type="radio"]'),l=0;l<n.length;l++){var e=n[l];if(e!==t&&e.form===t.form){var a=e[wt]||null;if(!a)throw Error(h(90));tu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(l=0;l<n.length;l++)e=n[l],e.form===t.form&&Uf(e)}break t;case"textarea":Rf(t,n.value,n.defaultValue);break t;case"select":l=n.value,l!=null&&$n(t,!!n.multiple,l,!1)}}}var iu=!1;function Yf(t,l,n){if(iu)return t(l,n);iu=!0;try{var e=t(l);return e}finally{if(iu=!1,(In!==null||Pn!==null)&&(Si(),In&&(l=In,t=Pn,Pn=In=null,Hf(l),t)))for(l=0;l<t.length;l++)Hf(t[l])}}function Ne(t,l){var n=t.stateNode;if(n===null)return null;var e=n[wt]||null;if(e===null)return null;n=e[l];t:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(h(231,l,typeof n));return n}var Nl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Nl)try{var Ce={};Object.defineProperty(Ce,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Ce,Ce),window.removeEventListener("test",Ce,Ce)}catch{uu=!1}var tn=null,cu=null,Ba=null;function Gf(){if(Ba)return Ba;var t,l=cu,n=l.length,e,a="value"in tn?tn.value:tn.textContent,i=a.length;for(t=0;t<n&&l[t]===a[t];t++);var u=n-t;for(e=1;e<=u&&l[n-e]===a[i-e];e++);return Ba=a.slice(t,1<e?1-e:void 0)}function Na(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function Ca(){return!0}function Qf(){return!1}function Kt(t){function l(n,e,a,i,u){this._reactName=n,this._targetInst=a,this.type=e,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ca:Qf,this.isPropagationStopped=Qf,this}return D(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ca)},persist:function(){},isPersistent:Ca}),l}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ha=Kt(jn),He=D({},jn,{view:0,detail:0}),Jd=Kt(He),fu,ru,Ye,Ya=D({},He,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ye&&(Ye&&t.type==="mousemove"?(fu=t.screenX-Ye.screenX,ru=t.screenY-Ye.screenY):ru=fu=0,Ye=t),fu)},movementY:function(t){return"movementY"in t?t.movementY:ru}}),Lf=Kt(Ya),Wd=D({},Ya,{dataTransfer:0}),kd=Kt(Wd),$d=D({},He,{relatedTarget:0}),ou=Kt($d),Fd=D({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Id=Kt(Fd),Pd=D({},jn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),t0=Kt(Pd),l0=D({},jn,{data:0}),Xf=Kt(l0),n0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},e0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function i0(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=a0[t])?!!l[t]:!1}function su(){return i0}var u0=D({},He,{key:function(t){if(t.key){var l=n0[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=Na(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?e0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(t){return t.type==="keypress"?Na(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Na(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),c0=Kt(u0),f0=D({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=Kt(f0),r0=D({},He,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),o0=Kt(r0),s0=D({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),d0=Kt(s0),h0=D({},Ya,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),m0=Kt(h0),y0=D({},jn,{newState:0,oldState:0}),p0=Kt(y0),g0=[9,13,27,32],du=Nl&&"CompositionEvent"in window,Ge=null;Nl&&"documentMode"in document&&(Ge=document.documentMode);var v0=Nl&&"TextEvent"in window&&!Ge,Vf=Nl&&(!du||Ge&&8<Ge&&11>=Ge),wf=" ",Kf=!1;function Jf(t,l){switch(t){case"keyup":return g0.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var te=!1;function b0(t,l){switch(t){case"compositionend":return Wf(l);case"keypress":return l.which!==32?null:(Kf=!0,wf);case"textInput":return t=l.data,t===wf&&Kf?null:t;default:return null}}function S0(t,l){if(te)return t==="compositionend"||!du&&Jf(t,l)?(t=Gf(),Ba=cu=tn=null,te=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return Vf&&l.locale!=="ko"?null:l.data;default:return null}}var x0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kf(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!x0[t.type]:l==="textarea"}function $f(t,l,n,e){In?Pn?Pn.push(e):Pn=[e]:In=e,l=_i(l,"onChange"),0<l.length&&(n=new Ha("onChange","change",null,n,e),t.push({event:n,listeners:l}))}var Qe=null,Le=null;function z0(t){Rs(t,0)}function Ga(t){var l=Be(t);if(Uf(l))return t}function Ff(t,l){if(t==="change")return l}var If=!1;if(Nl){var hu;if(Nl){var mu="oninput"in document;if(!mu){var Pf=document.createElement("div");Pf.setAttribute("oninput","return;"),mu=typeof Pf.oninput=="function"}hu=mu}else hu=!1;If=hu&&(!document.documentMode||9<document.documentMode)}function tr(){Qe&&(Qe.detachEvent("onpropertychange",lr),Le=Qe=null)}function lr(t){if(t.propertyName==="value"&&Ga(Le)){var l=[];$f(l,Le,t,au(t)),Yf(z0,l)}}function A0(t,l,n){t==="focusin"?(tr(),Qe=l,Le=n,Qe.attachEvent("onpropertychange",lr)):t==="focusout"&&tr()}function E0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ga(Le)}function T0(t,l){if(t==="click")return Ga(l)}function O0(t,l){if(t==="input"||t==="change")return Ga(l)}function _0(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var ll=typeof Object.is=="function"?Object.is:_0;function Xe(t,l){if(ll(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var n=Object.keys(t),e=Object.keys(l);if(n.length!==e.length)return!1;for(e=0;e<n.length;e++){var a=n[e];if(!wi.call(l,a)||!ll(t[a],l[a]))return!1}return!0}function nr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function er(t,l){var n=nr(t);t=0;for(var e;n;){if(n.nodeType===3){if(e=t+n.textContent.length,t<=l&&e>=l)return{node:n,offset:l-t};t=e}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=nr(n)}}function ar(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?ar(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function ir(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var l=qa(t.document);l instanceof t.HTMLIFrameElement;){try{var n=typeof l.contentWindow.location.href=="string"}catch{n=!1}if(n)t=l.contentWindow;else break;l=qa(t.document)}return l}function yu(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}var j0=Nl&&"documentMode"in document&&11>=document.documentMode,le=null,pu=null,Ze=null,gu=!1;function ur(t,l,n){var e=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gu||le==null||le!==qa(e)||(e=le,"selectionStart"in e&&yu(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Ze&&Xe(Ze,e)||(Ze=e,e=_i(pu,"onSelect"),0<e.length&&(l=new Ha("onSelect","select",null,l,n),t.push({event:l,listeners:e}),l.target=le)))}function Mn(t,l){var n={};return n[t.toLowerCase()]=l.toLowerCase(),n["Webkit"+t]="webkit"+l,n["Moz"+t]="moz"+l,n}var ne={animationend:Mn("Animation","AnimationEnd"),animationiteration:Mn("Animation","AnimationIteration"),animationstart:Mn("Animation","AnimationStart"),transitionrun:Mn("Transition","TransitionRun"),transitionstart:Mn("Transition","TransitionStart"),transitioncancel:Mn("Transition","TransitionCancel"),transitionend:Mn("Transition","TransitionEnd")},vu={},cr={};Nl&&(cr=document.createElement("div").style,"AnimationEvent"in window||(delete ne.animationend.animation,delete ne.animationiteration.animation,delete ne.animationstart.animation),"TransitionEvent"in window||delete ne.transitionend.transition);function Dn(t){if(vu[t])return vu[t];if(!ne[t])return t;var l=ne[t],n;for(n in l)if(l.hasOwnProperty(n)&&n in cr)return vu[t]=l[n];return t}var fr=Dn("animationend"),rr=Dn("animationiteration"),or=Dn("animationstart"),M0=Dn("transitionrun"),D0=Dn("transitionstart"),U0=Dn("transitioncancel"),sr=Dn("transitionend"),dr=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function Sl(t,l){dr.set(t,l),_n(l,[t])}var Qa=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},sl=[],ee=0,Su=0;function La(){for(var t=ee,l=Su=ee=0;l<t;){var n=sl[l];sl[l++]=null;var e=sl[l];sl[l++]=null;var a=sl[l];sl[l++]=null;var i=sl[l];if(sl[l++]=null,e!==null&&a!==null){var u=e.pending;u===null?a.next=a:(a.next=u.next,u.next=a),e.pending=a}i!==0&&hr(n,a,i)}}function Xa(t,l,n,e){sl[ee++]=t,sl[ee++]=l,sl[ee++]=n,sl[ee++]=e,Su|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function xu(t,l,n,e){return Xa(t,l,n,e),Za(t)}function Un(t,l){return Xa(t,null,null,l),Za(t)}function hr(t,l,n){t.lanes|=n;var e=t.alternate;e!==null&&(e.lanes|=n);for(var a=!1,i=t.return;i!==null;)i.childLanes|=n,e=i.alternate,e!==null&&(e.childLanes|=n),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(a=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,a&&l!==null&&(a=31-tl(n),t=i.hiddenUpdates,e=t[a],e===null?t[a]=[l]:e.push(l),l.lane=n|536870912),i):null}function Za(t){if(50<sa)throw sa=0,Dc=null,Error(h(185));for(var l=t.return;l!==null;)t=l,l=t.return;return t.tag===3?t.stateNode:null}var ae={};function q0(t,l,n,e){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nl(t,l,n,e){return new q0(t,l,n,e)}function zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Cl(t,l){var n=t.alternate;return n===null?(n=nl(t.tag,l,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=l,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,l=t.dependencies,n.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function mr(t,l){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=l,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,l=n.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),t}function Va(t,l,n,e,a,i){var u=0;if(e=t,typeof t=="function")zu(t)&&(u=1);else if(typeof t=="string")u=H1(t,n,R.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case El:return t=nl(31,n,l,a),t.elementType=El,t.lanes=i,t;case L:return qn(n.children,a,i,l);case tt:u=8,a|=24;break;case xt:return t=nl(12,n,l,a|2),t.elementType=xt,t.lanes=i,t;case Al:return t=nl(13,n,l,a),t.elementType=Al,t.lanes=i,t;case Xt:return t=nl(19,n,l,a),t.elementType=Xt,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Yt:u=10;break t;case Fl:u=9;break t;case fl:u=11;break t;case lt:u=14;break t;case Zt:u=16,e=null;break t}u=29,n=Error(h(130,t===null?"null":typeof t,"")),e=null}return l=nl(u,n,l,a),l.elementType=t,l.type=e,l.lanes=i,l}function qn(t,l,n,e){return t=nl(7,t,e,l),t.lanes=n,t}function Au(t,l,n){return t=nl(6,t,null,l),t.lanes=n,t}function yr(t){var l=nl(18,null,null,0);return l.stateNode=t,l}function Eu(t,l,n){return l=nl(4,t.children!==null?t.children:[],t.key,l),l.lanes=n,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}var pr=new WeakMap;function dl(t,l){if(typeof t=="object"&&t!==null){var n=pr.get(t);return n!==void 0?n:(l={value:t,source:l,stack:yf(l)},pr.set(t,l),l)}return{value:t,source:l,stack:yf(l)}}var ie=[],ue=0,wa=null,Ve=0,hl=[],ml=0,ln=null,Ol=1,_l="";function Hl(t,l){ie[ue++]=Ve,ie[ue++]=wa,wa=t,Ve=l}function gr(t,l,n){hl[ml++]=Ol,hl[ml++]=_l,hl[ml++]=ln,ln=t;var e=Ol;t=_l;var a=32-tl(e)-1;e&=~(1<<a),n+=1;var i=32-tl(l)+a;if(30<i){var u=a-a%5;i=(e&(1<<u)-1).toString(32),e>>=u,a-=u,Ol=1<<32-tl(l)+a|n<<a|e,_l=i+t}else Ol=1<<i|n<<a|e,_l=t}function Tu(t){t.return!==null&&(Hl(t,1),gr(t,1,0))}function Ou(t){for(;t===wa;)wa=ie[--ue],ie[ue]=null,Ve=ie[--ue],ie[ue]=null;for(;t===ln;)ln=hl[--ml],hl[ml]=null,_l=hl[--ml],hl[ml]=null,Ol=hl[--ml],hl[ml]=null}function vr(t,l){hl[ml++]=Ol,hl[ml++]=_l,hl[ml++]=ln,Ol=l.id,_l=l.overflow,ln=t}var Bt=null,yt=null,nt=!1,nn=null,yl=!1,_u=Error(h(519));function en(t){var l=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw we(dl(l,t)),_u}function br(t){var l=t.stateNode,n=t.type,e=t.memoizedProps;switch(l[Rt]=t,l[wt]=e,n){case"dialog":F("cancel",l),F("close",l);break;case"iframe":case"object":case"embed":F("load",l);break;case"video":case"audio":for(n=0;n<ha.length;n++)F(ha[n],l);break;case"source":F("error",l);break;case"img":case"image":case"link":F("error",l),F("load",l);break;case"details":F("toggle",l);break;case"input":F("invalid",l),qf(l,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":F("invalid",l);break;case"textarea":F("invalid",l),Bf(l,e.value,e.defaultValue,e.children)}n=e.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||l.textContent===""+n||e.suppressHydrationWarning===!0||Hs(l.textContent,n)?(e.popover!=null&&(F("beforetoggle",l),F("toggle",l)),e.onScroll!=null&&F("scroll",l),e.onScrollEnd!=null&&F("scrollend",l),e.onClick!=null&&(l.onclick=Bl),l=!0):l=!1,l||en(t,!0)}function Sr(t){for(Bt=t.return;Bt;)switch(Bt.tag){case 5:case 31:case 13:yl=!1;return;case 27:case 3:yl=!0;return;default:Bt=Bt.return}}function ce(t){if(t!==Bt)return!1;if(!nt)return Sr(t),nt=!0,!1;var l=t.tag,n;if((n=l!==3&&l!==27)&&((n=l===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||wc(t.type,t.memoizedProps)),n=!n),n&&yt&&en(t),Sr(t),l===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(317));yt=Ks(t)}else if(l===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(317));yt=Ks(t)}else l===27?(l=yt,vn(t.type)?(t=$c,$c=null,yt=t):yt=l):yt=Bt?gl(t.stateNode.nextSibling):null;return!0}function Rn(){yt=Bt=null,nt=!1}function ju(){var t=nn;return t!==null&&($t===null?$t=t:$t.push.apply($t,t),nn=null),t}function we(t){nn===null?nn=[t]:nn.push(t)}var Mu=o(null),Bn=null,Yl=null;function an(t,l,n){M(Mu,l._currentValue),l._currentValue=n}function Gl(t){t._currentValue=Mu.current,T(Mu)}function Du(t,l,n){for(;t!==null;){var e=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,e!==null&&(e.childLanes|=l)):e!==null&&(e.childLanes&l)!==l&&(e.childLanes|=l),t===n)break;t=t.return}}function Uu(t,l,n,e){var a=t.child;for(a!==null&&(a.return=t);a!==null;){var i=a.dependencies;if(i!==null){var u=a.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=a;for(var f=0;f<l.length;f++)if(c.context===l[f]){i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Du(i.return,n,t),e||(u=null);break t}i=c.next}}else if(a.tag===18){if(u=a.return,u===null)throw Error(h(341));u.lanes|=n,i=u.alternate,i!==null&&(i.lanes|=n),Du(u,n,t),u=null}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===t){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}}function fe(t,l,n,e){t=null;for(var a=l,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var u=a.alternate;if(u===null)throw Error(h(387));if(u=u.memoizedProps,u!==null){var c=a.type;ll(a.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(a===ut.current){if(u=a.alternate,u===null)throw Error(h(387));u.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(t!==null?t.push(va):t=[va])}a=a.return}t!==null&&Uu(l,t,n,e),l.flags|=262144}function Ka(t){for(t=t.firstContext;t!==null;){if(!ll(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Nn(t){Bn=t,Yl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Nt(t){return xr(Bn,t)}function Ja(t,l){return Bn===null&&Nn(t),xr(t,l)}function xr(t,l){var n=l._currentValue;if(l={context:l,memoizedValue:n,next:null},Yl===null){if(t===null)throw Error(h(308));Yl=l,t.dependencies={lanes:0,firstContext:l},t.flags|=524288}else Yl=Yl.next=l;return n}var R0=typeof AbortController<"u"?AbortController:function(){var t=[],l=this.signal={aborted:!1,addEventListener:function(n,e){t.push(e)}};this.abort=function(){l.aborted=!0,t.forEach(function(n){return n()})}},B0=A.unstable_scheduleCallback,N0=A.unstable_NormalPriority,Ot={$$typeof:Yt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new R0,data:new Map,refCount:0}}function Ke(t){t.refCount--,t.refCount===0&&B0(N0,function(){t.controller.abort()})}var Je=null,Ru=0,re=0,oe=null;function C0(t,l){if(Je===null){var n=Je=[];Ru=0,re=Cc(),oe={status:"pending",value:void 0,then:function(e){n.push(e)}}}return Ru++,l.then(zr,zr),l}function zr(){if(--Ru===0&&Je!==null){oe!==null&&(oe.status="fulfilled");var t=Je;Je=null,re=0,oe=null;for(var l=0;l<t.length;l++)(0,t[l])()}}function H0(t,l){var n=[],e={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return t.then(function(){e.status="fulfilled",e.value=l;for(var a=0;a<n.length;a++)(0,n[a])(l)},function(a){for(e.status="rejected",e.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),e}var Ar=S.S;S.S=function(t,l){cs=It(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&C0(t,l),Ar!==null&&Ar(t,l)};var Cn=o(null);function Bu(){var t=Cn.current;return t!==null?t:mt.pooledCache}function Wa(t,l){l===null?M(Cn,Cn.current):M(Cn,l.pool)}function Er(){var t=Bu();return t===null?null:{parent:Ot._currentValue,pool:t}}var se=Error(h(460)),Nu=Error(h(474)),ka=Error(h(542)),$a={then:function(){}};function Tr(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Or(t,l,n){switch(n=t[n],n===void 0?t.push(l):n!==l&&(l.then(Bl,Bl),l=n),l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,jr(t),t;default:if(typeof l.status=="string")l.then(Bl,Bl);else{if(t=mt,t!==null&&100<t.shellSuspendCounter)throw Error(h(482));t=l,t.status="pending",t.then(function(e){if(l.status==="pending"){var a=l;a.status="fulfilled",a.value=e}},function(e){if(l.status==="pending"){var a=l;a.status="rejected",a.reason=e}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,jr(t),t}throw Yn=l,se}}function Hn(t){try{var l=t._init;return l(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Yn=n,se):n}}var Yn=null;function _r(){if(Yn===null)throw Error(h(459));var t=Yn;return Yn=null,t}function jr(t){if(t===se||t===ka)throw Error(h(483))}var de=null,We=0;function Fa(t){var l=We;return We+=1,de===null&&(de=[]),Or(de,t,l)}function ke(t,l){l=l.props.ref,t.ref=l!==void 0?l:null}function Ia(t,l){throw l.$$typeof===J?Error(h(525)):(t=Object.prototype.toString.call(l),Error(h(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)))}function Mr(t){function l(s,r){if(t){var m=s.deletions;m===null?(s.deletions=[r],s.flags|=16):m.push(r)}}function n(s,r){if(!t)return null;for(;r!==null;)l(s,r),r=r.sibling;return null}function e(s){for(var r=new Map;s!==null;)s.key!==null?r.set(s.key,s):r.set(s.index,s),s=s.sibling;return r}function a(s,r){return s=Cl(s,r),s.index=0,s.sibling=null,s}function i(s,r,m){return s.index=m,t?(m=s.alternate,m!==null?(m=m.index,m<r?(s.flags|=67108866,r):m):(s.flags|=67108866,r)):(s.flags|=1048576,r)}function u(s){return t&&s.alternate===null&&(s.flags|=67108866),s}function c(s,r,m,x){return r===null||r.tag!==6?(r=Au(m,s.mode,x),r.return=s,r):(r=a(r,m),r.return=s,r)}function f(s,r,m,x){var C=m.type;return C===L?b(s,r,m.props.children,x,m.key):r!==null&&(r.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zt&&Hn(C)===r.type)?(r=a(r,m.props),ke(r,m),r.return=s,r):(r=Va(m.type,m.key,m.props,null,s.mode,x),ke(r,m),r.return=s,r)}function y(s,r,m,x){return r===null||r.tag!==4||r.stateNode.containerInfo!==m.containerInfo||r.stateNode.implementation!==m.implementation?(r=Eu(m,s.mode,x),r.return=s,r):(r=a(r,m.children||[]),r.return=s,r)}function b(s,r,m,x,C){return r===null||r.tag!==7?(r=qn(m,s.mode,x,C),r.return=s,r):(r=a(r,m),r.return=s,r)}function z(s,r,m){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Au(""+r,s.mode,m),r.return=s,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case vt:return m=Va(r.type,r.key,r.props,null,s.mode,m),ke(m,r),m.return=s,m;case Tt:return r=Eu(r,s.mode,m),r.return=s,r;case Zt:return r=Hn(r),z(s,r,m)}if(bl(r)||Vt(r))return r=qn(r,s.mode,m,null),r.return=s,r;if(typeof r.then=="function")return z(s,Fa(r),m);if(r.$$typeof===Yt)return z(s,Ja(s,r),m);Ia(s,r)}return null}function g(s,r,m,x){var C=r!==null?r.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return C!==null?null:c(s,r,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case vt:return m.key===C?f(s,r,m,x):null;case Tt:return m.key===C?y(s,r,m,x):null;case Zt:return m=Hn(m),g(s,r,m,x)}if(bl(m)||Vt(m))return C!==null?null:b(s,r,m,x,null);if(typeof m.then=="function")return g(s,r,Fa(m),x);if(m.$$typeof===Yt)return g(s,r,Ja(s,m),x);Ia(s,m)}return null}function v(s,r,m,x,C){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return s=s.get(m)||null,c(r,s,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case vt:return s=s.get(x.key===null?m:x.key)||null,f(r,s,x,C);case Tt:return s=s.get(x.key===null?m:x.key)||null,y(r,s,x,C);case Zt:return x=Hn(x),v(s,r,m,x,C)}if(bl(x)||Vt(x))return s=s.get(m)||null,b(r,s,x,C,null);if(typeof x.then=="function")return v(s,r,m,Fa(x),C);if(x.$$typeof===Yt)return v(s,r,m,Ja(r,x),C);Ia(r,x)}return null}function U(s,r,m,x){for(var C=null,et=null,N=r,K=r=0,P=null;N!==null&&K<m.length;K++){N.index>K?(P=N,N=null):P=N.sibling;var at=g(s,N,m[K],x);if(at===null){N===null&&(N=P);break}t&&N&&at.alternate===null&&l(s,N),r=i(at,r,K),et===null?C=at:et.sibling=at,et=at,N=P}if(K===m.length)return n(s,N),nt&&Hl(s,K),C;if(N===null){for(;K<m.length;K++)N=z(s,m[K],x),N!==null&&(r=i(N,r,K),et===null?C=N:et.sibling=N,et=N);return nt&&Hl(s,K),C}for(N=e(N);K<m.length;K++)P=v(N,s,K,m[K],x),P!==null&&(t&&P.alternate!==null&&N.delete(P.key===null?K:P.key),r=i(P,r,K),et===null?C=P:et.sibling=P,et=P);return t&&N.forEach(function(An){return l(s,An)}),nt&&Hl(s,K),C}function Y(s,r,m,x){if(m==null)throw Error(h(151));for(var C=null,et=null,N=r,K=r=0,P=null,at=m.next();N!==null&&!at.done;K++,at=m.next()){N.index>K?(P=N,N=null):P=N.sibling;var An=g(s,N,at.value,x);if(An===null){N===null&&(N=P);break}t&&N&&An.alternate===null&&l(s,N),r=i(An,r,K),et===null?C=An:et.sibling=An,et=An,N=P}if(at.done)return n(s,N),nt&&Hl(s,K),C;if(N===null){for(;!at.done;K++,at=m.next())at=z(s,at.value,x),at!==null&&(r=i(at,r,K),et===null?C=at:et.sibling=at,et=at);return nt&&Hl(s,K),C}for(N=e(N);!at.done;K++,at=m.next())at=v(N,s,K,at.value,x),at!==null&&(t&&at.alternate!==null&&N.delete(at.key===null?K:at.key),r=i(at,r,K),et===null?C=at:et.sibling=at,et=at);return t&&N.forEach(function(W1){return l(s,W1)}),nt&&Hl(s,K),C}function dt(s,r,m,x){if(typeof m=="object"&&m!==null&&m.type===L&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case vt:t:{for(var C=m.key;r!==null;){if(r.key===C){if(C=m.type,C===L){if(r.tag===7){n(s,r.sibling),x=a(r,m.props.children),x.return=s,s=x;break t}}else if(r.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Zt&&Hn(C)===r.type){n(s,r.sibling),x=a(r,m.props),ke(x,m),x.return=s,s=x;break t}n(s,r);break}else l(s,r);r=r.sibling}m.type===L?(x=qn(m.props.children,s.mode,x,m.key),x.return=s,s=x):(x=Va(m.type,m.key,m.props,null,s.mode,x),ke(x,m),x.return=s,s=x)}return u(s);case Tt:t:{for(C=m.key;r!==null;){if(r.key===C)if(r.tag===4&&r.stateNode.containerInfo===m.containerInfo&&r.stateNode.implementation===m.implementation){n(s,r.sibling),x=a(r,m.children||[]),x.return=s,s=x;break t}else{n(s,r);break}else l(s,r);r=r.sibling}x=Eu(m,s.mode,x),x.return=s,s=x}return u(s);case Zt:return m=Hn(m),dt(s,r,m,x)}if(bl(m))return U(s,r,m,x);if(Vt(m)){if(C=Vt(m),typeof C!="function")throw Error(h(150));return m=C.call(m),Y(s,r,m,x)}if(typeof m.then=="function")return dt(s,r,Fa(m),x);if(m.$$typeof===Yt)return dt(s,r,Ja(s,m),x);Ia(s,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,r!==null&&r.tag===6?(n(s,r.sibling),x=a(r,m),x.return=s,s=x):(n(s,r),x=Au(m,s.mode,x),x.return=s,s=x),u(s)):n(s,r)}return function(s,r,m,x){try{We=0;var C=dt(s,r,m,x);return de=null,C}catch(N){if(N===se||N===ka)throw N;var et=nl(29,N,null,s.mode);return et.lanes=x,et.return=s,et}}}var Gn=Mr(!0),Dr=Mr(!1),un=!1;function Cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function cn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function fn(t,l,n){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(it&2)!==0){var a=e.pending;return a===null?l.next=l:(l.next=a.next,a.next=l),e.pending=l,l=Za(t),hr(t,null,n),l}return Xa(t,e,l,n),Za(t)}function $e(t,l,n){if(l=l.updateQueue,l!==null&&(l=l.shared,(n&4194048)!==0)){var e=l.lanes;e&=t.pendingLanes,n|=e,l.lanes=n,xf(t,n)}}function Yu(t,l){var n=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,n===e)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=u:i=i.next=u,n=n.next}while(n!==null);i===null?a=i=l:i=i.next=l}else a=i=l;n={baseState:e.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:e.shared,callbacks:e.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=l:t.next=l,n.lastBaseUpdate=l}var Gu=!1;function Fe(){if(Gu){var t=oe;if(t!==null)throw t}}function Ie(t,l,n,e){Gu=!1;var a=t.updateQueue;un=!1;var i=a.firstBaseUpdate,u=a.lastBaseUpdate,c=a.shared.pending;if(c!==null){a.shared.pending=null;var f=c,y=f.next;f.next=null,u===null?i=y:u.next=y,u=f;var b=t.alternate;b!==null&&(b=b.updateQueue,c=b.lastBaseUpdate,c!==u&&(c===null?b.firstBaseUpdate=y:c.next=y,b.lastBaseUpdate=f))}if(i!==null){var z=a.baseState;u=0,b=y=f=null,c=i;do{var g=c.lane&-536870913,v=g!==c.lane;if(v?(I&g)===g:(e&g)===g){g!==0&&g===re&&(Gu=!0),b!==null&&(b=b.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var U=t,Y=c;g=l;var dt=n;switch(Y.tag){case 1:if(U=Y.payload,typeof U=="function"){z=U.call(dt,z,g);break t}z=U;break t;case 3:U.flags=U.flags&-65537|128;case 0:if(U=Y.payload,g=typeof U=="function"?U.call(dt,z,g):U,g==null)break t;z=D({},z,g);break t;case 2:un=!0}}g=c.callback,g!==null&&(t.flags|=64,v&&(t.flags|=8192),v=a.callbacks,v===null?a.callbacks=[g]:v.push(g))}else v={lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},b===null?(y=b=v,f=z):b=b.next=v,u|=g;if(c=c.next,c===null){if(c=a.shared.pending,c===null)break;v=c,c=v.next,v.next=null,a.lastBaseUpdate=v,a.shared.pending=null}}while(!0);b===null&&(f=z),a.baseState=f,a.firstBaseUpdate=y,a.lastBaseUpdate=b,i===null&&(a.shared.lanes=0),hn|=u,t.lanes=u,t.memoizedState=z}}function Ur(t,l){if(typeof t!="function")throw Error(h(191,t));t.call(l)}function qr(t,l){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Ur(n[t],l)}var he=o(null),Pa=o(0);function Rr(t,l){t=Wl,M(Pa,t),M(he,l),Wl=t|l.baseLanes}function Qu(){M(Pa,Wl),M(he,he.current)}function Lu(){Wl=Pa.current,T(he),T(Pa)}var el=o(null),pl=null;function rn(t){var l=t.alternate;M(At,At.current&1),M(el,t),pl===null&&(l===null||he.current!==null||l.memoizedState!==null)&&(pl=t)}function Xu(t){M(At,At.current),M(el,t),pl===null&&(pl=t)}function Br(t){t.tag===22?(M(At,At.current),M(el,t),pl===null&&(pl=t)):on()}function on(){M(At,At.current),M(el,el.current)}function al(t){T(el),pl===t&&(pl=null),T(At)}var At=o(0);function ti(t){for(var l=t;l!==null;){if(l.tag===13){var n=l.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Wc(n)||kc(n)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Ql=0,w=null,ot=null,_t=null,li=!1,me=!1,Qn=!1,ni=0,Pe=0,ye=null,Y0=0;function bt(){throw Error(h(321))}function Zu(t,l){if(l===null)return!1;for(var n=0;n<l.length&&n<t.length;n++)if(!ll(t[n],l[n]))return!1;return!0}function Vu(t,l,n,e,a,i){return Ql=i,w=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,S.H=t===null||t.memoizedState===null?vo:ic,Qn=!1,i=n(e,a),Qn=!1,me&&(i=Cr(l,n,e,a)),Nr(t),i}function Nr(t){S.H=na;var l=ot!==null&&ot.next!==null;if(Ql=0,_t=ot=w=null,li=!1,Pe=0,ye=null,l)throw Error(h(300));t===null||jt||(t=t.dependencies,t!==null&&Ka(t)&&(jt=!0))}function Cr(t,l,n,e){w=t;var a=0;do{if(me&&(ye=null),Pe=0,me=!1,25<=a)throw Error(h(301));if(a+=1,_t=ot=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}S.H=bo,i=l(n,e)}while(me);return i}function G0(){var t=S.H,l=t.useState()[0];return l=typeof l.then=="function"?ta(l):l,t=t.useState()[0],(ot!==null?ot.memoizedState:null)!==t&&(w.flags|=1024),l}function wu(){var t=ni!==0;return ni=0,t}function Ku(t,l,n){l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~n}function Ju(t){if(li){for(t=t.memoizedState;t!==null;){var l=t.queue;l!==null&&(l.pending=null),t=t.next}li=!1}Ql=0,_t=ot=w=null,me=!1,Pe=ni=0,ye=null}function Lt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?w.memoizedState=_t=t:_t=_t.next=t,_t}function Et(){if(ot===null){var t=w.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var l=_t===null?w.memoizedState:_t.next;if(l!==null)_t=l,ot=t;else{if(t===null)throw w.alternate===null?Error(h(467)):Error(h(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},_t===null?w.memoizedState=_t=t:_t=_t.next=t}return _t}function ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ta(t){var l=Pe;return Pe+=1,ye===null&&(ye=[]),t=Or(ye,t,l),l=w,(_t===null?l.memoizedState:_t.next)===null&&(l=l.alternate,S.H=l===null||l.memoizedState===null?vo:ic),t}function ai(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ta(t);if(t.$$typeof===Yt)return Nt(t)}throw Error(h(438,String(t)))}function Wu(t){var l=null,n=w.updateQueue;if(n!==null&&(l=n.memoCache),l==null){var e=w.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(l={data:e.data.map(function(a){return a.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),n===null&&(n=ei(),w.updateQueue=n),n.memoCache=l,n=l.data[l.index],n===void 0)for(n=l.data[l.index]=Array(t),e=0;e<t;e++)n[e]=Vn;return l.index++,n}function Ll(t,l){return typeof l=="function"?l(t):l}function ii(t){var l=Et();return ku(l,ot,t)}function ku(t,l,n){var e=t.queue;if(e===null)throw Error(h(311));e.lastRenderedReducer=n;var a=t.baseQueue,i=e.pending;if(i!==null){if(a!==null){var u=a.next;a.next=i.next,i.next=u}l.baseQueue=a=i,e.pending=null}if(i=t.baseState,a===null)t.memoizedState=i;else{l=a.next;var c=u=null,f=null,y=l,b=!1;do{var z=y.lane&-536870913;if(z!==y.lane?(I&z)===z:(Ql&z)===z){var g=y.revertLane;if(g===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),z===re&&(b=!0);else if((Ql&g)===g){y=y.next,g===re&&(b=!0);continue}else z={lane:0,revertLane:y.revertLane,gesture:null,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(c=f=z,u=i):f=f.next=z,w.lanes|=g,hn|=g;z=y.action,Qn&&n(i,z),i=y.hasEagerState?y.eagerState:n(i,z)}else g={lane:z,revertLane:y.revertLane,gesture:y.gesture,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null},f===null?(c=f=g,u=i):f=f.next=g,w.lanes|=z,hn|=z;y=y.next}while(y!==null&&y!==l);if(f===null?u=i:f.next=c,!ll(i,t.memoizedState)&&(jt=!0,b&&(n=oe,n!==null)))throw n;t.memoizedState=i,t.baseState=u,t.baseQueue=f,e.lastRenderedState=i}return a===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function $u(t){var l=Et(),n=l.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=t;var e=n.dispatch,a=n.pending,i=l.memoizedState;if(a!==null){n.pending=null;var u=a=a.next;do i=t(i,u.action),u=u.next;while(u!==a);ll(i,l.memoizedState)||(jt=!0),l.memoizedState=i,l.baseQueue===null&&(l.baseState=i),n.lastRenderedState=i}return[i,e]}function Hr(t,l,n){var e=w,a=Et(),i=nt;if(i){if(n===void 0)throw Error(h(407));n=n()}else n=l();var u=!ll((ot||a).memoizedState,n);if(u&&(a.memoizedState=n,jt=!0),a=a.queue,Pu(Qr.bind(null,e,a,t),[t]),a.getSnapshot!==l||u||_t!==null&&_t.memoizedState.tag&1){if(e.flags|=2048,pe(9,{destroy:void 0},Gr.bind(null,e,a,n,l),null),mt===null)throw Error(h(349));i||(Ql&127)!==0||Yr(e,l,n)}return n}function Yr(t,l,n){t.flags|=16384,t={getSnapshot:l,value:n},l=w.updateQueue,l===null?(l=ei(),w.updateQueue=l,l.stores=[t]):(n=l.stores,n===null?l.stores=[t]:n.push(t))}function Gr(t,l,n,e){l.value=n,l.getSnapshot=e,Lr(l)&&Xr(t)}function Qr(t,l,n){return n(function(){Lr(l)&&Xr(t)})}function Lr(t){var l=t.getSnapshot;t=t.value;try{var n=l();return!ll(t,n)}catch{return!0}}function Xr(t){var l=Un(t,2);l!==null&&Ft(l,t,2)}function Fu(t){var l=Lt();if(typeof t=="function"){var n=t;if(t=n(),Qn){Il(!0);try{n()}finally{Il(!1)}}}return l.memoizedState=l.baseState=t,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ll,lastRenderedState:t},l}function Zr(t,l,n,e){return t.baseState=n,ku(t,ot,typeof e=="function"?e:Ll)}function Q0(t,l,n,e,a){if(fi(t))throw Error(h(485));if(t=l.action,t!==null){var i={payload:a,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};S.T!==null?n(!0):i.isTransition=!1,e(i),n=l.pending,n===null?(i.next=l.pending=i,Vr(l,i)):(i.next=n.next,l.pending=n.next=i)}}function Vr(t,l){var n=l.action,e=l.payload,a=t.state;if(l.isTransition){var i=S.T,u={};S.T=u;try{var c=n(a,e),f=S.S;f!==null&&f(u,c),wr(t,l,c)}catch(y){Iu(t,l,y)}finally{i!==null&&u.types!==null&&(i.types=u.types),S.T=i}}else try{i=n(a,e),wr(t,l,i)}catch(y){Iu(t,l,y)}}function wr(t,l,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(e){Kr(t,l,e)},function(e){return Iu(t,l,e)}):Kr(t,l,n)}function Kr(t,l,n){l.status="fulfilled",l.value=n,Jr(l),t.state=n,l=t.pending,l!==null&&(n=l.next,n===l?t.pending=null:(n=n.next,l.next=n,Vr(t,n)))}function Iu(t,l,n){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do l.status="rejected",l.reason=n,Jr(l),l=l.next;while(l!==e)}t.action=null}function Jr(t){t=t.listeners;for(var l=0;l<t.length;l++)(0,t[l])()}function Wr(t,l){return l}function kr(t,l){if(nt){var n=mt.formState;if(n!==null){t:{var e=w;if(nt){if(yt){l:{for(var a=yt,i=yl;a.nodeType!==8;){if(!i){a=null;break l}if(a=gl(a.nextSibling),a===null){a=null;break l}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){yt=gl(a.nextSibling),e=a.data==="F!";break t}}en(e)}e=!1}e&&(l=n[0])}}return n=Lt(),n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:l},n.queue=e,n=yo.bind(null,w,e),e.dispatch=n,e=Fu(!1),i=ac.bind(null,w,!1,e.queue),e=Lt(),a={state:l,dispatch:null,action:t,pending:null},e.queue=a,n=Q0.bind(null,w,a,i,n),a.dispatch=n,e.memoizedState=t,[l,n,!1]}function $r(t){var l=Et();return Fr(l,ot,t)}function Fr(t,l,n){if(l=ku(t,l,Wr)[0],t=ii(Ll)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var e=ta(l)}catch(u){throw u===se?ka:u}else e=l;l=Et();var a=l.queue,i=a.dispatch;return n!==l.memoizedState&&(w.flags|=2048,pe(9,{destroy:void 0},L0.bind(null,a,n),null)),[e,i,t]}function L0(t,l){t.action=l}function Ir(t){var l=Et(),n=ot;if(n!==null)return Fr(l,n,t);Et(),l=l.memoizedState,n=Et();var e=n.queue.dispatch;return n.memoizedState=t,[l,e,!1]}function pe(t,l,n,e){return t={tag:t,create:n,deps:e,inst:l,next:null},l=w.updateQueue,l===null&&(l=ei(),w.updateQueue=l),n=l.lastEffect,n===null?l.lastEffect=t.next=t:(e=n.next,n.next=t,t.next=e,l.lastEffect=t),t}function Pr(){return Et().memoizedState}function ui(t,l,n,e){var a=Lt();w.flags|=t,a.memoizedState=pe(1|l,{destroy:void 0},n,e===void 0?null:e)}function ci(t,l,n,e){var a=Et();e=e===void 0?null:e;var i=a.memoizedState.inst;ot!==null&&e!==null&&Zu(e,ot.memoizedState.deps)?a.memoizedState=pe(l,i,n,e):(w.flags|=t,a.memoizedState=pe(1|l,i,n,e))}function to(t,l){ui(8390656,8,t,l)}function Pu(t,l){ci(2048,8,t,l)}function X0(t){w.flags|=4;var l=w.updateQueue;if(l===null)l=ei(),w.updateQueue=l,l.events=[t];else{var n=l.events;n===null?l.events=[t]:n.push(t)}}function lo(t){var l=Et().memoizedState;return X0({ref:l,nextImpl:t}),function(){if((it&2)!==0)throw Error(h(440));return l.impl.apply(void 0,arguments)}}function no(t,l){return ci(4,2,t,l)}function eo(t,l){return ci(4,4,t,l)}function ao(t,l){if(typeof l=="function"){t=t();var n=l(t);return function(){typeof n=="function"?n():l(null)}}if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function io(t,l,n){n=n!=null?n.concat([t]):null,ci(4,4,ao.bind(null,l,t),n)}function tc(){}function uo(t,l){var n=Et();l=l===void 0?null:l;var e=n.memoizedState;return l!==null&&Zu(l,e[1])?e[0]:(n.memoizedState=[t,l],t)}function co(t,l){var n=Et();l=l===void 0?null:l;var e=n.memoizedState;if(l!==null&&Zu(l,e[1]))return e[0];if(e=t(),Qn){Il(!0);try{t()}finally{Il(!1)}}return n.memoizedState=[e,l],e}function lc(t,l,n){return n===void 0||(Ql&1073741824)!==0&&(I&261930)===0?t.memoizedState=l:(t.memoizedState=n,t=rs(),w.lanes|=t,hn|=t,n)}function fo(t,l,n,e){return ll(n,l)?n:he.current!==null?(t=lc(t,n,e),ll(t,l)||(jt=!0),t):(Ql&42)===0||(Ql&1073741824)!==0&&(I&261930)===0?(jt=!0,t.memoizedState=n):(t=rs(),w.lanes|=t,hn|=t,l)}function ro(t,l,n,e,a){var i=_.p;_.p=i!==0&&8>i?i:8;var u=S.T,c={};S.T=c,ac(t,!1,l,n);try{var f=a(),y=S.S;if(y!==null&&y(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var b=H0(f,e);la(t,l,b,cl(t))}else la(t,l,e,cl(t))}catch(z){la(t,l,{then:function(){},status:"rejected",reason:z},cl())}finally{_.p=i,u!==null&&c.types!==null&&(u.types=c.types),S.T=u}}function Z0(){}function nc(t,l,n,e){if(t.tag!==5)throw Error(h(476));var a=oo(t).queue;ro(t,a,l,G,n===null?Z0:function(){return so(t),n(e)})}function oo(t){var l=t.memoizedState;if(l!==null)return l;l={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ll,lastRenderedState:G},next:null};var n={};return l.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ll,lastRenderedState:n},next:null},t.memoizedState=l,t=t.alternate,t!==null&&(t.memoizedState=l),l}function so(t){var l=oo(t);l.next===null&&(l=t.alternate.memoizedState),la(t,l.next.queue,{},cl())}function ec(){return Nt(va)}function ho(){return Et().memoizedState}function mo(){return Et().memoizedState}function V0(t){for(var l=t.return;l!==null;){switch(l.tag){case 24:case 3:var n=cl();t=cn(n);var e=fn(l,t,n);e!==null&&(Ft(e,l,n),$e(e,l,n)),l={cache:qu()},t.payload=l;return}l=l.return}}function w0(t,l,n){var e=cl();n={lane:e,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fi(t)?po(l,n):(n=xu(t,l,n,e),n!==null&&(Ft(n,t,e),go(n,l,e)))}function yo(t,l,n){var e=cl();la(t,l,n,e)}function la(t,l,n,e){var a={lane:e,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fi(t))po(l,a);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=l.lastRenderedReducer,i!==null))try{var u=l.lastRenderedState,c=i(u,n);if(a.hasEagerState=!0,a.eagerState=c,ll(c,u))return Xa(t,l,a,0),mt===null&&La(),!1}catch{}if(n=xu(t,l,a,e),n!==null)return Ft(n,t,e),go(n,l,e),!0}return!1}function ac(t,l,n,e){if(e={lane:2,revertLane:Cc(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},fi(t)){if(l)throw Error(h(479))}else l=xu(t,n,e,2),l!==null&&Ft(l,t,2)}function fi(t){var l=t.alternate;return t===w||l!==null&&l===w}function po(t,l){me=li=!0;var n=t.pending;n===null?l.next=l:(l.next=n.next,n.next=l),t.pending=l}function go(t,l,n){if((n&4194048)!==0){var e=l.lanes;e&=t.pendingLanes,n|=e,l.lanes=n,xf(t,n)}}var na={readContext:Nt,use:ai,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useLayoutEffect:bt,useInsertionEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useSyncExternalStore:bt,useId:bt,useHostTransitionStatus:bt,useFormState:bt,useActionState:bt,useOptimistic:bt,useMemoCache:bt,useCacheRefresh:bt};na.useEffectEvent=bt;var vo={readContext:Nt,use:ai,useCallback:function(t,l){return Lt().memoizedState=[t,l===void 0?null:l],t},useContext:Nt,useEffect:to,useImperativeHandle:function(t,l,n){n=n!=null?n.concat([t]):null,ui(4194308,4,ao.bind(null,l,t),n)},useLayoutEffect:function(t,l){return ui(4194308,4,t,l)},useInsertionEffect:function(t,l){ui(4,2,t,l)},useMemo:function(t,l){var n=Lt();l=l===void 0?null:l;var e=t();if(Qn){Il(!0);try{t()}finally{Il(!1)}}return n.memoizedState=[e,l],e},useReducer:function(t,l,n){var e=Lt();if(n!==void 0){var a=n(l);if(Qn){Il(!0);try{n(l)}finally{Il(!1)}}}else a=l;return e.memoizedState=e.baseState=a,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:a},e.queue=t,t=t.dispatch=w0.bind(null,w,t),[e.memoizedState,t]},useRef:function(t){var l=Lt();return t={current:t},l.memoizedState=t},useState:function(t){t=Fu(t);var l=t.queue,n=yo.bind(null,w,l);return l.dispatch=n,[t.memoizedState,n]},useDebugValue:tc,useDeferredValue:function(t,l){var n=Lt();return lc(n,t,l)},useTransition:function(){var t=Fu(!1);return t=ro.bind(null,w,t.queue,!0,!1),Lt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,l,n){var e=w,a=Lt();if(nt){if(n===void 0)throw Error(h(407));n=n()}else{if(n=l(),mt===null)throw Error(h(349));(I&127)!==0||Yr(e,l,n)}a.memoizedState=n;var i={value:n,getSnapshot:l};return a.queue=i,to(Qr.bind(null,e,i,t),[t]),e.flags|=2048,pe(9,{destroy:void 0},Gr.bind(null,e,i,n,l),null),n},useId:function(){var t=Lt(),l=mt.identifierPrefix;if(nt){var n=_l,e=Ol;n=(e&~(1<<32-tl(e)-1)).toString(32)+n,l="_"+l+"R_"+n,n=ni++,0<n&&(l+="H"+n.toString(32)),l+="_"}else n=Y0++,l="_"+l+"r_"+n.toString(32)+"_";return t.memoizedState=l},useHostTransitionStatus:ec,useFormState:kr,useActionState:kr,useOptimistic:function(t){var l=Lt();l.memoizedState=l.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=n,l=ac.bind(null,w,!0,n),n.dispatch=l,[t,l]},useMemoCache:Wu,useCacheRefresh:function(){return Lt().memoizedState=V0.bind(null,w)},useEffectEvent:function(t){var l=Lt(),n={impl:t};return l.memoizedState=n,function(){if((it&2)!==0)throw Error(h(440));return n.impl.apply(void 0,arguments)}}},ic={readContext:Nt,use:ai,useCallback:uo,useContext:Nt,useEffect:Pu,useImperativeHandle:io,useInsertionEffect:no,useLayoutEffect:eo,useMemo:co,useReducer:ii,useRef:Pr,useState:function(){return ii(Ll)},useDebugValue:tc,useDeferredValue:function(t,l){var n=Et();return fo(n,ot.memoizedState,t,l)},useTransition:function(){var t=ii(Ll)[0],l=Et().memoizedState;return[typeof t=="boolean"?t:ta(t),l]},useSyncExternalStore:Hr,useId:ho,useHostTransitionStatus:ec,useFormState:$r,useActionState:$r,useOptimistic:function(t,l){var n=Et();return Zr(n,ot,t,l)},useMemoCache:Wu,useCacheRefresh:mo};ic.useEffectEvent=lo;var bo={readContext:Nt,use:ai,useCallback:uo,useContext:Nt,useEffect:Pu,useImperativeHandle:io,useInsertionEffect:no,useLayoutEffect:eo,useMemo:co,useReducer:$u,useRef:Pr,useState:function(){return $u(Ll)},useDebugValue:tc,useDeferredValue:function(t,l){var n=Et();return ot===null?lc(n,t,l):fo(n,ot.memoizedState,t,l)},useTransition:function(){var t=$u(Ll)[0],l=Et().memoizedState;return[typeof t=="boolean"?t:ta(t),l]},useSyncExternalStore:Hr,useId:ho,useHostTransitionStatus:ec,useFormState:Ir,useActionState:Ir,useOptimistic:function(t,l){var n=Et();return ot!==null?Zr(n,ot,t,l):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Wu,useCacheRefresh:mo};bo.useEffectEvent=lo;function uc(t,l,n,e){l=t.memoizedState,n=n(e,l),n=n==null?l:D({},l,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cc={enqueueSetState:function(t,l,n){t=t._reactInternals;var e=cl(),a=cn(e);a.payload=l,n!=null&&(a.callback=n),l=fn(t,a,e),l!==null&&(Ft(l,t,e),$e(l,t,e))},enqueueReplaceState:function(t,l,n){t=t._reactInternals;var e=cl(),a=cn(e);a.tag=1,a.payload=l,n!=null&&(a.callback=n),l=fn(t,a,e),l!==null&&(Ft(l,t,e),$e(l,t,e))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var n=cl(),e=cn(n);e.tag=2,l!=null&&(e.callback=l),l=fn(t,e,n),l!==null&&(Ft(l,t,n),$e(l,t,n))}};function So(t,l,n,e,a,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,i,u):l.prototype&&l.prototype.isPureReactComponent?!Xe(n,e)||!Xe(a,i):!0}function xo(t,l,n,e){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(n,e),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(n,e),l.state!==t&&cc.enqueueReplaceState(l,l.state,null)}function Ln(t,l){var n=l;if("ref"in l){n={};for(var e in l)e!=="ref"&&(n[e]=l[e])}if(t=t.defaultProps){n===l&&(n=D({},n));for(var a in t)n[a]===void 0&&(n[a]=t[a])}return n}function zo(t){Qa(t)}function Ao(t){console.error(t)}function Eo(t){Qa(t)}function ri(t,l){try{var n=t.onUncaughtError;n(l.value,{componentStack:l.stack})}catch(e){setTimeout(function(){throw e})}}function To(t,l,n){try{var e=t.onCaughtError;e(n.value,{componentStack:n.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function fc(t,l,n){return n=cn(n),n.tag=3,n.payload={element:null},n.callback=function(){ri(t,l)},n}function Oo(t){return t=cn(t),t.tag=3,t}function _o(t,l,n,e){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=e.value;t.payload=function(){return a(i)},t.callback=function(){To(l,n,e)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){To(l,n,e),typeof a!="function"&&(mn===null?mn=new Set([this]):mn.add(this));var c=e.stack;this.componentDidCatch(e.value,{componentStack:c!==null?c:""})})}function K0(t,l,n,e,a){if(n.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(l=n.alternate,l!==null&&fe(l,n,a,!0),n=el.current,n!==null){switch(n.tag){case 31:case 13:return pl===null?xi():n.alternate===null&&St===0&&(St=3),n.flags&=-257,n.flags|=65536,n.lanes=a,e===$a?n.flags|=16384:(l=n.updateQueue,l===null?n.updateQueue=new Set([e]):l.add(e),Rc(t,e,a)),!1;case 22:return n.flags|=65536,e===$a?n.flags|=16384:(l=n.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([e])},n.updateQueue=l):(n=l.retryQueue,n===null?l.retryQueue=new Set([e]):n.add(e)),Rc(t,e,a)),!1}throw Error(h(435,n.tag))}return Rc(t,e,a),xi(),!1}if(nt)return l=el.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=a,e!==_u&&(t=Error(h(422),{cause:e}),we(dl(t,n)))):(e!==_u&&(l=Error(h(423),{cause:e}),we(dl(l,n))),t=t.current.alternate,t.flags|=65536,a&=-a,t.lanes|=a,e=dl(e,n),a=fc(t.stateNode,e,a),Yu(t,a),St!==4&&(St=2)),!1;var i=Error(h(520),{cause:e});if(i=dl(i,n),oa===null?oa=[i]:oa.push(i),St!==4&&(St=2),l===null)return!0;e=dl(e,n),n=l;do{switch(n.tag){case 3:return n.flags|=65536,t=a&-a,n.lanes|=t,t=fc(n.stateNode,e,t),Yu(n,t),!1;case 1:if(l=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(mn===null||!mn.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Oo(a),_o(a,t,n,e),Yu(n,a),!1}n=n.return}while(n!==null);return!1}var rc=Error(h(461)),jt=!1;function Ct(t,l,n,e){l.child=t===null?Dr(l,null,n,e):Gn(l,t.child,n,e)}function jo(t,l,n,e,a){n=n.render;var i=l.ref;if("ref"in e){var u={};for(var c in e)c!=="ref"&&(u[c]=e[c])}else u=e;return Nn(l),e=Vu(t,l,n,u,i,a),c=wu(),t!==null&&!jt?(Ku(t,l,a),Xl(t,l,a)):(nt&&c&&Tu(l),l.flags|=1,Ct(t,l,e,a),l.child)}function Mo(t,l,n,e,a){if(t===null){var i=n.type;return typeof i=="function"&&!zu(i)&&i.defaultProps===void 0&&n.compare===null?(l.tag=15,l.type=i,Do(t,l,i,e,a)):(t=Va(n.type,null,e,l,l.mode,a),t.ref=l.ref,t.return=l,l.child=t)}if(i=t.child,!gc(t,a)){var u=i.memoizedProps;if(n=n.compare,n=n!==null?n:Xe,n(u,e)&&t.ref===l.ref)return Xl(t,l,a)}return l.flags|=1,t=Cl(i,e),t.ref=l.ref,t.return=l,l.child=t}function Do(t,l,n,e,a){if(t!==null){var i=t.memoizedProps;if(Xe(i,e)&&t.ref===l.ref)if(jt=!1,l.pendingProps=e=i,gc(t,a))(t.flags&131072)!==0&&(jt=!0);else return l.lanes=t.lanes,Xl(t,l,a)}return oc(t,l,n,e,a)}function Uo(t,l,n,e){var a=e.children,i=t!==null?t.memoizedState:null;if(t===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((l.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,t!==null){for(e=l.child=t.child,a=0;e!==null;)a=a|e.lanes|e.childLanes,e=e.sibling;e=a&~i}else e=0,l.child=null;return qo(t,l,i,n,e)}if((n&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wa(l,i!==null?i.cachePool:null),i!==null?Rr(l,i):Qu(),Br(l);else return e=l.lanes=536870912,qo(t,l,i!==null?i.baseLanes|n:n,n,e)}else i!==null?(Wa(l,i.cachePool),Rr(l,i),on(),l.memoizedState=null):(t!==null&&Wa(l,null),Qu(),on());return Ct(t,l,a,n),l.child}function ea(t,l){return t!==null&&t.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function qo(t,l,n,e,a){var i=Bu();return i=i===null?null:{parent:Ot._currentValue,pool:i},l.memoizedState={baseLanes:n,cachePool:i},t!==null&&Wa(l,null),Qu(),Br(l),t!==null&&fe(t,l,e,!0),l.childLanes=a,null}function oi(t,l){return l=di({mode:l.mode,children:l.children},t.mode),l.ref=t.ref,t.child=l,l.return=t,l}function Ro(t,l,n){return Gn(l,t.child,null,n),t=oi(l,l.pendingProps),t.flags|=2,al(l),l.memoizedState=null,t}function J0(t,l,n){var e=l.pendingProps,a=(l.flags&128)!==0;if(l.flags&=-129,t===null){if(nt){if(e.mode==="hidden")return t=oi(l,e),l.lanes=536870912,ea(null,t);if(Xu(l),(t=yt)?(t=ws(t,yl),t=t!==null&&t.data==="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:ln!==null?{id:Ol,overflow:_l}:null,retryLane:536870912,hydrationErrors:null},n=yr(t),n.return=l,l.child=n,Bt=l,yt=null)):t=null,t===null)throw en(l);return l.lanes=536870912,null}return oi(l,e)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(Xu(l),a)if(l.flags&256)l.flags&=-257,l=Ro(t,l,n);else if(l.memoizedState!==null)l.child=t.child,l.flags|=128,l=null;else throw Error(h(558));else if(jt||fe(t,l,n,!1),a=(n&t.childLanes)!==0,jt||a){if(e=mt,e!==null&&(u=zf(e,n),u!==0&&u!==i.retryLane))throw i.retryLane=u,Un(t,u),Ft(e,t,u),rc;xi(),l=Ro(t,l,n)}else t=i.treeContext,yt=gl(u.nextSibling),Bt=l,nt=!0,nn=null,yl=!1,t!==null&&vr(l,t),l=oi(l,e),l.flags|=4096;return l}return t=Cl(t.child,{mode:e.mode,children:e.children}),t.ref=l.ref,l.child=t,t.return=l,t}function si(t,l){var n=l.ref;if(n===null)t!==null&&t.ref!==null&&(l.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(h(284));(t===null||t.ref!==n)&&(l.flags|=4194816)}}function oc(t,l,n,e,a){return Nn(l),n=Vu(t,l,n,e,void 0,a),e=wu(),t!==null&&!jt?(Ku(t,l,a),Xl(t,l,a)):(nt&&e&&Tu(l),l.flags|=1,Ct(t,l,n,a),l.child)}function Bo(t,l,n,e,a,i){return Nn(l),l.updateQueue=null,n=Cr(l,e,n,a),Nr(t),e=wu(),t!==null&&!jt?(Ku(t,l,i),Xl(t,l,i)):(nt&&e&&Tu(l),l.flags|=1,Ct(t,l,n,i),l.child)}function No(t,l,n,e,a){if(Nn(l),l.stateNode===null){var i=ae,u=n.contextType;typeof u=="object"&&u!==null&&(i=Nt(u)),i=new n(e,i),l.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cc,l.stateNode=i,i._reactInternals=l,i=l.stateNode,i.props=e,i.state=l.memoizedState,i.refs={},Cu(l),u=n.contextType,i.context=typeof u=="object"&&u!==null?Nt(u):ae,i.state=l.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(uc(l,n,u,e),i.state=l.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&cc.enqueueReplaceState(i,i.state,null),Ie(l,e,i,a),Fe(),i.state=l.memoizedState),typeof i.componentDidMount=="function"&&(l.flags|=4194308),e=!0}else if(t===null){i=l.stateNode;var c=l.memoizedProps,f=Ln(n,c);i.props=f;var y=i.context,b=n.contextType;u=ae,typeof b=="object"&&b!==null&&(u=Nt(b));var z=n.getDerivedStateFromProps;b=typeof z=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=l.pendingProps!==c,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||y!==u)&&xo(l,i,e,u),un=!1;var g=l.memoizedState;i.state=g,Ie(l,e,i,a),Fe(),y=l.memoizedState,c||g!==y||un?(typeof z=="function"&&(uc(l,n,z,e),y=l.memoizedState),(f=un||So(l,n,f,e,g,y,u))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(l.flags|=4194308)):(typeof i.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=e,l.memoizedState=y),i.props=e,i.state=y,i.context=u,e=f):(typeof i.componentDidMount=="function"&&(l.flags|=4194308),e=!1)}else{i=l.stateNode,Hu(t,l),u=l.memoizedProps,b=Ln(n,u),i.props=b,z=l.pendingProps,g=i.context,y=n.contextType,f=ae,typeof y=="object"&&y!==null&&(f=Nt(y)),c=n.getDerivedStateFromProps,(y=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==z||g!==f)&&xo(l,i,e,f),un=!1,g=l.memoizedState,i.state=g,Ie(l,e,i,a),Fe();var v=l.memoizedState;u!==z||g!==v||un||t!==null&&t.dependencies!==null&&Ka(t.dependencies)?(typeof c=="function"&&(uc(l,n,c,e),v=l.memoizedState),(b=un||So(l,n,b,e,g,v,f)||t!==null&&t.dependencies!==null&&Ka(t.dependencies))?(y||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(e,v,f),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(e,v,f)),typeof i.componentDidUpdate=="function"&&(l.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(l.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(l.flags|=1024),l.memoizedProps=e,l.memoizedState=v),i.props=e,i.state=v,i.context=f,e=b):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(l.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(l.flags|=1024),e=!1)}return i=e,si(t,l),e=(l.flags&128)!==0,i||e?(i=l.stateNode,n=e&&typeof n.getDerivedStateFromError!="function"?null:i.render(),l.flags|=1,t!==null&&e?(l.child=Gn(l,t.child,null,a),l.child=Gn(l,null,n,a)):Ct(t,l,n,a),l.memoizedState=i.state,t=l.child):t=Xl(t,l,a),t}function Co(t,l,n,e){return Rn(),l.flags|=256,Ct(t,l,n,e),l.child}var sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function dc(t){return{baseLanes:t,cachePool:Er()}}function hc(t,l,n){return t=t!==null?t.childLanes&~n:0,l&&(t|=ul),t}function Ho(t,l,n){var e=l.pendingProps,a=!1,i=(l.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(At.current&2)!==0),u&&(a=!0,l.flags&=-129),u=(l.flags&32)!==0,l.flags&=-33,t===null){if(nt){if(a?rn(l):on(),(t=yt)?(t=ws(t,yl),t=t!==null&&t.data!=="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:ln!==null?{id:Ol,overflow:_l}:null,retryLane:536870912,hydrationErrors:null},n=yr(t),n.return=l,l.child=n,Bt=l,yt=null)):t=null,t===null)throw en(l);return kc(t)?l.lanes=32:l.lanes=536870912,null}var c=e.children;return e=e.fallback,a?(on(),a=l.mode,c=di({mode:"hidden",children:c},a),e=qn(e,a,n,null),c.return=l,e.return=l,c.sibling=e,l.child=c,e=l.child,e.memoizedState=dc(n),e.childLanes=hc(t,u,n),l.memoizedState=sc,ea(null,e)):(rn(l),mc(l,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(i)l.flags&256?(rn(l),l.flags&=-257,l=yc(t,l,n)):l.memoizedState!==null?(on(),l.child=t.child,l.flags|=128,l=null):(on(),c=e.fallback,a=l.mode,e=di({mode:"visible",children:e.children},a),c=qn(c,a,n,null),c.flags|=2,e.return=l,c.return=l,e.sibling=c,l.child=e,Gn(l,t.child,null,n),e=l.child,e.memoizedState=dc(n),e.childLanes=hc(t,u,n),l.memoizedState=sc,l=ea(null,e));else if(rn(l),kc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var y=u.dgst;u=y,e=Error(h(419)),e.stack="",e.digest=u,we({value:e,source:null,stack:null}),l=yc(t,l,n)}else if(jt||fe(t,l,n,!1),u=(n&t.childLanes)!==0,jt||u){if(u=mt,u!==null&&(e=zf(u,n),e!==0&&e!==f.retryLane))throw f.retryLane=e,Un(t,e),Ft(u,t,e),rc;Wc(c)||xi(),l=yc(t,l,n)}else Wc(c)?(l.flags|=192,l.child=t.child,l=null):(t=f.treeContext,yt=gl(c.nextSibling),Bt=l,nt=!0,nn=null,yl=!1,t!==null&&vr(l,t),l=mc(l,e.children),l.flags|=4096);return l}return a?(on(),c=e.fallback,a=l.mode,f=t.child,y=f.sibling,e=Cl(f,{mode:"hidden",children:e.children}),e.subtreeFlags=f.subtreeFlags&65011712,y!==null?c=Cl(y,c):(c=qn(c,a,n,null),c.flags|=2),c.return=l,e.return=l,e.sibling=c,l.child=e,ea(null,e),e=l.child,c=t.child.memoizedState,c===null?c=dc(n):(a=c.cachePool,a!==null?(f=Ot._currentValue,a=a.parent!==f?{parent:f,pool:f}:a):a=Er(),c={baseLanes:c.baseLanes|n,cachePool:a}),e.memoizedState=c,e.childLanes=hc(t,u,n),l.memoizedState=sc,ea(t.child,e)):(rn(l),n=t.child,t=n.sibling,n=Cl(n,{mode:"visible",children:e.children}),n.return=l,n.sibling=null,t!==null&&(u=l.deletions,u===null?(l.deletions=[t],l.flags|=16):u.push(t)),l.child=n,l.memoizedState=null,n)}function mc(t,l){return l=di({mode:"visible",children:l},t.mode),l.return=t,t.child=l}function di(t,l){return t=nl(22,t,null,l),t.lanes=0,t}function yc(t,l,n){return Gn(l,t.child,null,n),t=mc(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function Yo(t,l,n){t.lanes|=l;var e=t.alternate;e!==null&&(e.lanes|=l),Du(t.return,l,n)}function pc(t,l,n,e,a,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:e,tail:n,tailMode:a,treeForkCount:i}:(u.isBackwards=l,u.rendering=null,u.renderingStartTime=0,u.last=e,u.tail=n,u.tailMode=a,u.treeForkCount=i)}function Go(t,l,n){var e=l.pendingProps,a=e.revealOrder,i=e.tail;e=e.children;var u=At.current,c=(u&2)!==0;if(c?(u=u&1|2,l.flags|=128):u&=1,M(At,u),Ct(t,l,e,n),e=nt?Ve:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yo(t,n,l);else if(t.tag===19)Yo(t,n,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break t;for(;t.sibling===null;){if(t.return===null||t.return===l)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(a){case"forwards":for(n=l.child,a=null;n!==null;)t=n.alternate,t!==null&&ti(t)===null&&(a=n),n=n.sibling;n=a,n===null?(a=l.child,l.child=null):(a=n.sibling,n.sibling=null),pc(l,!1,a,n,i,e);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=l.child,l.child=null;a!==null;){if(t=a.alternate,t!==null&&ti(t)===null){l.child=a;break}t=a.sibling,a.sibling=n,n=a,a=t}pc(l,!0,n,null,i,e);break;case"together":pc(l,!1,null,null,void 0,e);break;default:l.memoizedState=null}return l.child}function Xl(t,l,n){if(t!==null&&(l.dependencies=t.dependencies),hn|=l.lanes,(n&l.childLanes)===0)if(t!==null){if(fe(t,l,n,!1),(n&l.childLanes)===0)return null}else return null;if(t!==null&&l.child!==t.child)throw Error(h(153));if(l.child!==null){for(t=l.child,n=Cl(t,t.pendingProps),l.child=n,n.return=l;t.sibling!==null;)t=t.sibling,n=n.sibling=Cl(t,t.pendingProps),n.return=l;n.sibling=null}return l.child}function gc(t,l){return(t.lanes&l)!==0?!0:(t=t.dependencies,!!(t!==null&&Ka(t)))}function W0(t,l,n){switch(l.tag){case 3:Qt(l,l.stateNode.containerInfo),an(l,Ot,t.memoizedState.cache),Rn();break;case 27:case 5:Me(l);break;case 4:Qt(l,l.stateNode.containerInfo);break;case 10:an(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,Xu(l),null;break;case 13:var e=l.memoizedState;if(e!==null)return e.dehydrated!==null?(rn(l),l.flags|=128,null):(n&l.child.childLanes)!==0?Ho(t,l,n):(rn(l),t=Xl(t,l,n),t!==null?t.sibling:null);rn(l);break;case 19:var a=(t.flags&128)!==0;if(e=(n&l.childLanes)!==0,e||(fe(t,l,n,!1),e=(n&l.childLanes)!==0),a){if(e)return Go(t,l,n);l.flags|=128}if(a=l.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),M(At,At.current),e)break;return null;case 22:return l.lanes=0,Uo(t,l,n,l.pendingProps);case 24:an(l,Ot,t.memoizedState.cache)}return Xl(t,l,n)}function Qo(t,l,n){if(t!==null)if(t.memoizedProps!==l.pendingProps)jt=!0;else{if(!gc(t,n)&&(l.flags&128)===0)return jt=!1,W0(t,l,n);jt=(t.flags&131072)!==0}else jt=!1,nt&&(l.flags&1048576)!==0&&gr(l,Ve,l.index);switch(l.lanes=0,l.tag){case 16:t:{var e=l.pendingProps;if(t=Hn(l.elementType),l.type=t,typeof t=="function")zu(t)?(e=Ln(t,e),l.tag=1,l=No(null,l,t,e,n)):(l.tag=0,l=oc(null,l,t,e,n));else{if(t!=null){var a=t.$$typeof;if(a===fl){l.tag=11,l=jo(null,l,t,e,n);break t}else if(a===lt){l.tag=14,l=Mo(null,l,t,e,n);break t}}throw l=ql(t)||t,Error(h(306,l,""))}}return l;case 0:return oc(t,l,l.type,l.pendingProps,n);case 1:return e=l.type,a=Ln(e,l.pendingProps),No(t,l,e,a,n);case 3:t:{if(Qt(l,l.stateNode.containerInfo),t===null)throw Error(h(387));e=l.pendingProps;var i=l.memoizedState;a=i.element,Hu(t,l),Ie(l,e,null,n);var u=l.memoizedState;if(e=u.cache,an(l,Ot,e),e!==i.cache&&Uu(l,[Ot],n,!0),Fe(),e=u.element,i.isDehydrated)if(i={element:e,isDehydrated:!1,cache:u.cache},l.updateQueue.baseState=i,l.memoizedState=i,l.flags&256){l=Co(t,l,e,n);break t}else if(e!==a){a=dl(Error(h(424)),l),we(a),l=Co(t,l,e,n);break t}else for(t=l.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,yt=gl(t.firstChild),Bt=l,nt=!0,nn=null,yl=!0,n=Dr(l,null,e,n),l.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rn(),e===a){l=Xl(t,l,n);break t}Ct(t,l,e,n)}l=l.child}return l;case 26:return si(t,l),t===null?(n=Fs(l.type,null,l.pendingProps,null))?l.memoizedState=n:nt||(n=l.type,t=l.pendingProps,e=ji(k.current).createElement(n),e[Rt]=l,e[wt]=t,Ht(e,n,t),Ut(e),l.stateNode=e):l.memoizedState=Fs(l.type,t.memoizedProps,l.pendingProps,t.memoizedState),null;case 27:return Me(l),t===null&&nt&&(e=l.stateNode=Ws(l.type,l.pendingProps,k.current),Bt=l,yl=!0,a=yt,vn(l.type)?($c=a,yt=gl(e.firstChild)):yt=a),Ct(t,l,l.pendingProps.children,n),si(t,l),t===null&&(l.flags|=4194304),l.child;case 5:return t===null&&nt&&((a=e=yt)&&(e=E1(e,l.type,l.pendingProps,yl),e!==null?(l.stateNode=e,Bt=l,yt=gl(e.firstChild),yl=!1,a=!0):a=!1),a||en(l)),Me(l),a=l.type,i=l.pendingProps,u=t!==null?t.memoizedProps:null,e=i.children,wc(a,i)?e=null:u!==null&&wc(a,u)&&(l.flags|=32),l.memoizedState!==null&&(a=Vu(t,l,G0,null,null,n),va._currentValue=a),si(t,l),Ct(t,l,e,n),l.child;case 6:return t===null&&nt&&((t=n=yt)&&(n=T1(n,l.pendingProps,yl),n!==null?(l.stateNode=n,Bt=l,yt=null,t=!0):t=!1),t||en(l)),null;case 13:return Ho(t,l,n);case 4:return Qt(l,l.stateNode.containerInfo),e=l.pendingProps,t===null?l.child=Gn(l,null,e,n):Ct(t,l,e,n),l.child;case 11:return jo(t,l,l.type,l.pendingProps,n);case 7:return Ct(t,l,l.pendingProps,n),l.child;case 8:return Ct(t,l,l.pendingProps.children,n),l.child;case 12:return Ct(t,l,l.pendingProps.children,n),l.child;case 10:return e=l.pendingProps,an(l,l.type,e.value),Ct(t,l,e.children,n),l.child;case 9:return a=l.type._context,e=l.pendingProps.children,Nn(l),a=Nt(a),e=e(a),l.flags|=1,Ct(t,l,e,n),l.child;case 14:return Mo(t,l,l.type,l.pendingProps,n);case 15:return Do(t,l,l.type,l.pendingProps,n);case 19:return Go(t,l,n);case 31:return J0(t,l,n);case 22:return Uo(t,l,n,l.pendingProps);case 24:return Nn(l),e=Nt(Ot),t===null?(a=Bu(),a===null&&(a=mt,i=qu(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),l.memoizedState={parent:e,cache:a},Cu(l),an(l,Ot,a)):((t.lanes&n)!==0&&(Hu(t,l),Ie(l,null,null,n),Fe()),a=t.memoizedState,i=l.memoizedState,a.parent!==e?(a={parent:e,cache:e},l.memoizedState=a,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=a),an(l,Ot,e)):(e=i.cache,an(l,Ot,e),e!==a.cache&&Uu(l,[Ot],n,!0))),Ct(t,l,l.pendingProps.children,n),l.child;case 29:throw l.pendingProps}throw Error(h(156,l.tag))}function Zl(t){t.flags|=4}function vc(t,l,n,e,a){if((l=(t.mode&32)!==0)&&(l=!1),l){if(t.flags|=16777216,(a&335544128)===a)if(t.stateNode.complete)t.flags|=8192;else if(hs())t.flags|=8192;else throw Yn=$a,Nu}else t.flags&=-16777217}function Lo(t,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!nd(l))if(hs())t.flags|=8192;else throw Yn=$a,Nu}function hi(t,l){l!==null&&(t.flags|=4),t.flags&16384&&(l=t.tag!==22?bf():536870912,t.lanes|=l,Se|=l)}function aa(t,l){if(!nt)switch(t.tailMode){case"hidden":l=t.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function pt(t){var l=t.alternate!==null&&t.alternate.child===t.child,n=0,e=0;if(l)for(var a=t.child;a!==null;)n|=a.lanes|a.childLanes,e|=a.subtreeFlags&65011712,e|=a.flags&65011712,a.return=t,a=a.sibling;else for(a=t.child;a!==null;)n|=a.lanes|a.childLanes,e|=a.subtreeFlags,e|=a.flags,a.return=t,a=a.sibling;return t.subtreeFlags|=e,t.childLanes=n,l}function k0(t,l,n){var e=l.pendingProps;switch(Ou(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(l),null;case 1:return pt(l),null;case 3:return n=l.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),l.memoizedState.cache!==e&&(l.flags|=2048),Gl(Ot),zt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(ce(l)?Zl(l):t===null||t.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,ju())),pt(l),null;case 26:var a=l.type,i=l.memoizedState;return t===null?(Zl(l),i!==null?(pt(l),Lo(l,i)):(pt(l),vc(l,a,null,e,n))):i?i!==t.memoizedState?(Zl(l),pt(l),Lo(l,i)):(pt(l),l.flags&=-16777217):(t=t.memoizedProps,t!==e&&Zl(l),pt(l),vc(l,a,t,e,n)),null;case 27:if(Ea(l),n=k.current,a=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==e&&Zl(l);else{if(!e){if(l.stateNode===null)throw Error(h(166));return pt(l),null}t=R.current,ce(l)?br(l):(t=Ws(a,e,n),l.stateNode=t,Zl(l))}return pt(l),null;case 5:if(Ea(l),a=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==e&&Zl(l);else{if(!e){if(l.stateNode===null)throw Error(h(166));return pt(l),null}if(i=R.current,ce(l))br(l);else{var u=ji(k.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof e.is=="string"?u.createElement("select",{is:e.is}):u.createElement("select"),e.multiple?i.multiple=!0:e.size&&(i.size=e.size);break;default:i=typeof e.is=="string"?u.createElement(a,{is:e.is}):u.createElement(a)}}i[Rt]=l,i[wt]=e;t:for(u=l.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===l)break t;for(;u.sibling===null;){if(u.return===null||u.return===l)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}l.stateNode=i;t:switch(Ht(i,a,e),a){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Zl(l)}}return pt(l),vc(l,l.type,t===null?null:t.memoizedProps,l.pendingProps,n),null;case 6:if(t&&l.stateNode!=null)t.memoizedProps!==e&&Zl(l);else{if(typeof e!="string"&&l.stateNode===null)throw Error(h(166));if(t=k.current,ce(l)){if(t=l.stateNode,n=l.memoizedProps,e=null,a=Bt,a!==null)switch(a.tag){case 27:case 5:e=a.memoizedProps}t[Rt]=l,t=!!(t.nodeValue===n||e!==null&&e.suppressHydrationWarning===!0||Hs(t.nodeValue,n)),t||en(l,!0)}else t=ji(t).createTextNode(e),t[Rt]=l,l.stateNode=t}return pt(l),null;case 31:if(n=l.memoizedState,t===null||t.memoizedState!==null){if(e=ce(l),n!==null){if(t===null){if(!e)throw Error(h(318));if(t=l.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(h(557));t[Rt]=l}else Rn(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;pt(l),t=!1}else n=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return l.flags&256?(al(l),l):(al(l),null);if((l.flags&128)!==0)throw Error(h(558))}return pt(l),null;case 13:if(e=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(a=ce(l),e!==null&&e.dehydrated!==null){if(t===null){if(!a)throw Error(h(318));if(a=l.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(h(317));a[Rt]=l}else Rn(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;pt(l),a=!1}else a=ju(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),a=!0;if(!a)return l.flags&256?(al(l),l):(al(l),null)}return al(l),(l.flags&128)!==0?(l.lanes=n,l):(n=e!==null,t=t!==null&&t.memoizedState!==null,n&&(e=l.child,a=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(a=e.alternate.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==a&&(e.flags|=2048)),n!==t&&n&&(l.child.flags|=8192),hi(l,l.updateQueue),pt(l),null);case 4:return zt(),t===null&&Qc(l.stateNode.containerInfo),pt(l),null;case 10:return Gl(l.type),pt(l),null;case 19:if(T(At),e=l.memoizedState,e===null)return pt(l),null;if(a=(l.flags&128)!==0,i=e.rendering,i===null)if(a)aa(e,!1);else{if(St!==0||t!==null&&(t.flags&128)!==0)for(t=l.child;t!==null;){if(i=ti(t),i!==null){for(l.flags|=128,aa(e,!1),t=i.updateQueue,l.updateQueue=t,hi(l,t),l.subtreeFlags=0,t=n,n=l.child;n!==null;)mr(n,t),n=n.sibling;return M(At,At.current&1|2),nt&&Hl(l,e.treeForkCount),l.child}t=t.sibling}e.tail!==null&&It()>vi&&(l.flags|=128,a=!0,aa(e,!1),l.lanes=4194304)}else{if(!a)if(t=ti(i),t!==null){if(l.flags|=128,a=!0,t=t.updateQueue,l.updateQueue=t,hi(l,t),aa(e,!0),e.tail===null&&e.tailMode==="hidden"&&!i.alternate&&!nt)return pt(l),null}else 2*It()-e.renderingStartTime>vi&&n!==536870912&&(l.flags|=128,a=!0,aa(e,!1),l.lanes=4194304);e.isBackwards?(i.sibling=l.child,l.child=i):(t=e.last,t!==null?t.sibling=i:l.child=i,e.last=i)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=It(),t.sibling=null,n=At.current,M(At,a?n&1|2:n&1),nt&&Hl(l,e.treeForkCount),t):(pt(l),null);case 22:case 23:return al(l),Lu(),e=l.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(l.flags|=8192):e&&(l.flags|=8192),e?(n&536870912)!==0&&(l.flags&128)===0&&(pt(l),l.subtreeFlags&6&&(l.flags|=8192)):pt(l),n=l.updateQueue,n!==null&&hi(l,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),e=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),e!==n&&(l.flags|=2048),t!==null&&T(Cn),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),l.memoizedState.cache!==n&&(l.flags|=2048),Gl(Ot),pt(l),null;case 25:return null;case 30:return null}throw Error(h(156,l.tag))}function $0(t,l){switch(Ou(l),l.tag){case 1:return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return Gl(Ot),zt(),t=l.flags,(t&65536)!==0&&(t&128)===0?(l.flags=t&-65537|128,l):null;case 26:case 27:case 5:return Ea(l),null;case 31:if(l.memoizedState!==null){if(al(l),l.alternate===null)throw Error(h(340));Rn()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 13:if(al(l),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(h(340));Rn()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return T(At),null;case 4:return zt(),null;case 10:return Gl(l.type),null;case 22:case 23:return al(l),Lu(),t!==null&&T(Cn),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 24:return Gl(Ot),null;case 25:return null;default:return null}}function Xo(t,l){switch(Ou(l),l.tag){case 3:Gl(Ot),zt();break;case 26:case 27:case 5:Ea(l);break;case 4:zt();break;case 31:l.memoizedState!==null&&al(l);break;case 13:al(l);break;case 19:T(At);break;case 10:Gl(l.type);break;case 22:case 23:al(l),Lu(),t!==null&&T(Cn);break;case 24:Gl(Ot)}}function ia(t,l){try{var n=l.updateQueue,e=n!==null?n.lastEffect:null;if(e!==null){var a=e.next;n=a;do{if((n.tag&t)===t){e=void 0;var i=n.create,u=n.inst;e=i(),u.destroy=e}n=n.next}while(n!==a)}}catch(c){ft(l,l.return,c)}}function sn(t,l,n){try{var e=l.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var i=a.next;e=i;do{if((e.tag&t)===t){var u=e.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,a=l;var f=n,y=c;try{y()}catch(b){ft(a,f,b)}}}e=e.next}while(e!==i)}}catch(b){ft(l,l.return,b)}}function Zo(t){var l=t.updateQueue;if(l!==null){var n=t.stateNode;try{qr(l,n)}catch(e){ft(t,t.return,e)}}}function Vo(t,l,n){n.props=Ln(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(e){ft(t,l,e)}}function ua(t,l){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof n=="function"?t.refCleanup=n(e):n.current=e}}catch(a){ft(t,l,a)}}function jl(t,l){var n=t.ref,e=t.refCleanup;if(n!==null)if(typeof e=="function")try{e()}catch(a){ft(t,l,a)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){ft(t,l,a)}else n.current=null}function wo(t){var l=t.type,n=t.memoizedProps,e=t.stateNode;try{t:switch(l){case"button":case"input":case"select":case"textarea":n.autoFocus&&e.focus();break t;case"img":n.src?e.src=n.src:n.srcSet&&(e.srcset=n.srcSet)}}catch(a){ft(t,t.return,a)}}function bc(t,l,n){try{var e=t.stateNode;v1(e,t.type,n,l),e[wt]=l}catch(a){ft(t,t.return,a)}}function Ko(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&vn(t.type)||t.tag===4}function Sc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Ko(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&vn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xc(t,l,n){var e=t.tag;if(e===5||e===6)t=t.stateNode,l?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,l):(l=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,l.appendChild(t),n=n._reactRootContainer,n!=null||l.onclick!==null||(l.onclick=Bl));else if(e!==4&&(e===27&&vn(t.type)&&(n=t.stateNode,l=null),t=t.child,t!==null))for(xc(t,l,n),t=t.sibling;t!==null;)xc(t,l,n),t=t.sibling}function mi(t,l,n){var e=t.tag;if(e===5||e===6)t=t.stateNode,l?n.insertBefore(t,l):n.appendChild(t);else if(e!==4&&(e===27&&vn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(mi(t,l,n),t=t.sibling;t!==null;)mi(t,l,n),t=t.sibling}function Jo(t){var l=t.stateNode,n=t.memoizedProps;try{for(var e=t.type,a=l.attributes;a.length;)l.removeAttributeNode(a[0]);Ht(l,e,n),l[Rt]=t,l[wt]=n}catch(i){ft(t,t.return,i)}}var Vl=!1,Mt=!1,zc=!1,Wo=typeof WeakSet=="function"?WeakSet:Set,qt=null;function F0(t,l){if(t=t.containerInfo,Zc=Ni,t=ir(t),yu(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var e=n.getSelection&&n.getSelection();if(e&&e.rangeCount!==0){n=e.anchorNode;var a=e.anchorOffset,i=e.focusNode;e=e.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break t}var u=0,c=-1,f=-1,y=0,b=0,z=t,g=null;l:for(;;){for(var v;z!==n||a!==0&&z.nodeType!==3||(c=u+a),z!==i||e!==0&&z.nodeType!==3||(f=u+e),z.nodeType===3&&(u+=z.nodeValue.length),(v=z.firstChild)!==null;)g=z,z=v;for(;;){if(z===t)break l;if(g===n&&++y===a&&(c=u),g===i&&++b===e&&(f=u),(v=z.nextSibling)!==null)break;z=g,g=z.parentNode}z=v}n=c===-1||f===-1?null:{start:c,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vc={focusedElem:t,selectionRange:n},Ni=!1,qt=l;qt!==null;)if(l=qt,t=l.child,(l.subtreeFlags&1028)!==0&&t!==null)t.return=l,qt=t;else for(;qt!==null;){switch(l=qt,i=l.alternate,t=l.flags,l.tag){case 0:if((t&4)!==0&&(t=l.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)a=t[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,n=l,a=i.memoizedProps,i=i.memoizedState,e=n.stateNode;try{var U=Ln(n.type,a);t=e.getSnapshotBeforeUpdate(U,i),e.__reactInternalSnapshotBeforeUpdate=t}catch(Y){ft(n,n.return,Y)}}break;case 3:if((t&1024)!==0){if(t=l.stateNode.containerInfo,n=t.nodeType,n===9)Jc(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(h(163))}if(t=l.sibling,t!==null){t.return=l.return,qt=t;break}qt=l.return}}function ko(t,l,n){var e=n.flags;switch(n.tag){case 0:case 11:case 15:Kl(t,n),e&4&&ia(5,n);break;case 1:if(Kl(t,n),e&4)if(t=n.stateNode,l===null)try{t.componentDidMount()}catch(u){ft(n,n.return,u)}else{var a=Ln(n.type,l.memoizedProps);l=l.memoizedState;try{t.componentDidUpdate(a,l,t.__reactInternalSnapshotBeforeUpdate)}catch(u){ft(n,n.return,u)}}e&64&&Zo(n),e&512&&ua(n,n.return);break;case 3:if(Kl(t,n),e&64&&(t=n.updateQueue,t!==null)){if(l=null,n.child!==null)switch(n.child.tag){case 27:case 5:l=n.child.stateNode;break;case 1:l=n.child.stateNode}try{qr(t,l)}catch(u){ft(n,n.return,u)}}break;case 27:l===null&&e&4&&Jo(n);case 26:case 5:Kl(t,n),l===null&&e&4&&wo(n),e&512&&ua(n,n.return);break;case 12:Kl(t,n);break;case 31:Kl(t,n),e&4&&Io(t,n);break;case 13:Kl(t,n),e&4&&Po(t,n),e&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=u1.bind(null,n),O1(t,n))));break;case 22:if(e=n.memoizedState!==null||Vl,!e){l=l!==null&&l.memoizedState!==null||Mt,a=Vl;var i=Mt;Vl=e,(Mt=l)&&!i?Jl(t,n,(n.subtreeFlags&8772)!==0):Kl(t,n),Vl=a,Mt=i}break;case 30:break;default:Kl(t,n)}}function $o(t){var l=t.alternate;l!==null&&(t.alternate=null,$o(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&Ii(l)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gt=null,Jt=!1;function wl(t,l,n){for(n=n.child;n!==null;)Fo(t,l,n),n=n.sibling}function Fo(t,l,n){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(De,n)}catch{}switch(n.tag){case 26:Mt||jl(n,l),wl(t,l,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Mt||jl(n,l);var e=gt,a=Jt;vn(n.type)&&(gt=n.stateNode,Jt=!1),wl(t,l,n),ya(n.stateNode),gt=e,Jt=a;break;case 5:Mt||jl(n,l);case 6:if(e=gt,a=Jt,gt=null,wl(t,l,n),gt=e,Jt=a,gt!==null)if(Jt)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(n.stateNode)}catch(i){ft(n,l,i)}else try{gt.removeChild(n.stateNode)}catch(i){ft(n,l,i)}break;case 18:gt!==null&&(Jt?(t=gt,Zs(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),je(t)):Zs(gt,n.stateNode));break;case 4:e=gt,a=Jt,gt=n.stateNode.containerInfo,Jt=!0,wl(t,l,n),gt=e,Jt=a;break;case 0:case 11:case 14:case 15:sn(2,n,l),Mt||sn(4,n,l),wl(t,l,n);break;case 1:Mt||(jl(n,l),e=n.stateNode,typeof e.componentWillUnmount=="function"&&Vo(n,l,e)),wl(t,l,n);break;case 21:wl(t,l,n);break;case 22:Mt=(e=Mt)||n.memoizedState!==null,wl(t,l,n),Mt=e;break;default:wl(t,l,n)}}function Io(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{je(t)}catch(n){ft(l,l.return,n)}}}function Po(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{je(t)}catch(n){ft(l,l.return,n)}}function I0(t){switch(t.tag){case 31:case 13:case 19:var l=t.stateNode;return l===null&&(l=t.stateNode=new Wo),l;case 22:return t=t.stateNode,l=t._retryCache,l===null&&(l=t._retryCache=new Wo),l;default:throw Error(h(435,t.tag))}}function yi(t,l){var n=I0(t);l.forEach(function(e){if(!n.has(e)){n.add(e);var a=c1.bind(null,t,e);e.then(a,a)}})}function Wt(t,l){var n=l.deletions;if(n!==null)for(var e=0;e<n.length;e++){var a=n[e],i=t,u=l,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(vn(c.type)){gt=c.stateNode,Jt=!1;break t}break;case 5:gt=c.stateNode,Jt=!1;break t;case 3:case 4:gt=c.stateNode.containerInfo,Jt=!0;break t}c=c.return}if(gt===null)throw Error(h(160));Fo(i,u,a),gt=null,Jt=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)ts(l,t),l=l.sibling}var xl=null;function ts(t,l){var n=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wt(l,t),kt(t),e&4&&(sn(3,t,t.return),ia(3,t),sn(5,t,t.return));break;case 1:Wt(l,t),kt(t),e&512&&(Mt||n===null||jl(n,n.return)),e&64&&Vl&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?e:n.concat(e))));break;case 26:var a=xl;if(Wt(l,t),kt(t),e&512&&(Mt||n===null||jl(n,n.return)),e&4){var i=n!==null?n.memoizedState:null;if(e=t.memoizedState,n===null)if(e===null)if(t.stateNode===null){t:{e=t.type,n=t.memoizedProps,a=a.ownerDocument||a;l:switch(e){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Re]||i[Rt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(e),a.head.insertBefore(i,a.querySelector("head > title"))),Ht(i,e,n),i[Rt]=t,Ut(i),e=i;break t;case"link":var u=td("link","href",a).get(e+(n.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(c,1);break l}}i=a.createElement(e),Ht(i,e,n),a.head.appendChild(i);break;case"meta":if(u=td("meta","content",a).get(e+(n.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(c,1);break l}}i=a.createElement(e),Ht(i,e,n),a.head.appendChild(i);break;default:throw Error(h(468,e))}i[Rt]=t,Ut(i),e=i}t.stateNode=e}else ld(a,t.type,t.stateNode);else t.stateNode=Ps(a,e,t.memoizedProps);else i!==e?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,e===null?ld(a,t.type,t.stateNode):Ps(a,e,t.memoizedProps)):e===null&&t.stateNode!==null&&bc(t,t.memoizedProps,n.memoizedProps)}break;case 27:Wt(l,t),kt(t),e&512&&(Mt||n===null||jl(n,n.return)),n!==null&&e&4&&bc(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Wt(l,t),kt(t),e&512&&(Mt||n===null||jl(n,n.return)),t.flags&32){a=t.stateNode;try{Fn(a,"")}catch(U){ft(t,t.return,U)}}e&4&&t.stateNode!=null&&(a=t.memoizedProps,bc(t,a,n!==null?n.memoizedProps:a)),e&1024&&(zc=!0);break;case 6:if(Wt(l,t),kt(t),e&4){if(t.stateNode===null)throw Error(h(162));e=t.memoizedProps,n=t.stateNode;try{n.nodeValue=e}catch(U){ft(t,t.return,U)}}break;case 3:if(Ui=null,a=xl,xl=Mi(l.containerInfo),Wt(l,t),xl=a,kt(t),e&4&&n!==null&&n.memoizedState.isDehydrated)try{je(l.containerInfo)}catch(U){ft(t,t.return,U)}zc&&(zc=!1,ls(t));break;case 4:e=xl,xl=Mi(t.stateNode.containerInfo),Wt(l,t),kt(t),xl=e;break;case 12:Wt(l,t),kt(t);break;case 31:Wt(l,t),kt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,yi(t,e)));break;case 13:Wt(l,t),kt(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(gi=It()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,yi(t,e)));break;case 22:a=t.memoizedState!==null;var f=n!==null&&n.memoizedState!==null,y=Vl,b=Mt;if(Vl=y||a,Mt=b||f,Wt(l,t),Mt=b,Vl=y,kt(t),e&8192)t:for(l=t.stateNode,l._visibility=a?l._visibility&-2:l._visibility|1,a&&(n===null||f||Vl||Mt||Xn(t)),n=null,l=t;;){if(l.tag===5||l.tag===26){if(n===null){f=n=l;try{if(i=f.stateNode,a)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=f.stateNode;var z=f.memoizedProps.style,g=z!=null&&z.hasOwnProperty("display")?z.display:null;c.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(U){ft(f,f.return,U)}}}else if(l.tag===6){if(n===null){f=l;try{f.stateNode.nodeValue=a?"":f.memoizedProps}catch(U){ft(f,f.return,U)}}}else if(l.tag===18){if(n===null){f=l;try{var v=f.stateNode;a?Vs(v,!0):Vs(f.stateNode,!1)}catch(U){ft(f,f.return,U)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===t)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break t;for(;l.sibling===null;){if(l.return===null||l.return===t)break t;n===l&&(n=null),l=l.return}n===l&&(n=null),l.sibling.return=l.return,l=l.sibling}e&4&&(e=t.updateQueue,e!==null&&(n=e.retryQueue,n!==null&&(e.retryQueue=null,yi(t,n))));break;case 19:Wt(l,t),kt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,yi(t,e)));break;case 30:break;case 21:break;default:Wt(l,t),kt(t)}}function kt(t){var l=t.flags;if(l&2){try{for(var n,e=t.return;e!==null;){if(Ko(e)){n=e;break}e=e.return}if(n==null)throw Error(h(160));switch(n.tag){case 27:var a=n.stateNode,i=Sc(t);mi(t,i,a);break;case 5:var u=n.stateNode;n.flags&32&&(Fn(u,""),n.flags&=-33);var c=Sc(t);mi(t,c,u);break;case 3:case 4:var f=n.stateNode.containerInfo,y=Sc(t);xc(t,y,f);break;default:throw Error(h(161))}}catch(b){ft(t,t.return,b)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function ls(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var l=t;ls(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),t=t.sibling}}function Kl(t,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)ko(t,l.alternate,l),l=l.sibling}function Xn(t){for(t=t.child;t!==null;){var l=t;switch(l.tag){case 0:case 11:case 14:case 15:sn(4,l,l.return),Xn(l);break;case 1:jl(l,l.return);var n=l.stateNode;typeof n.componentWillUnmount=="function"&&Vo(l,l.return,n),Xn(l);break;case 27:ya(l.stateNode);case 26:case 5:jl(l,l.return),Xn(l);break;case 22:l.memoizedState===null&&Xn(l);break;case 30:Xn(l);break;default:Xn(l)}t=t.sibling}}function Jl(t,l,n){for(n=n&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var e=l.alternate,a=t,i=l,u=i.flags;switch(i.tag){case 0:case 11:case 15:Jl(a,i,n),ia(4,i);break;case 1:if(Jl(a,i,n),e=i,a=e.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(y){ft(e,e.return,y)}if(e=i,a=e.updateQueue,a!==null){var c=e.stateNode;try{var f=a.shared.hiddenCallbacks;if(f!==null)for(a.shared.hiddenCallbacks=null,a=0;a<f.length;a++)Ur(f[a],c)}catch(y){ft(e,e.return,y)}}n&&u&64&&Zo(i),ua(i,i.return);break;case 27:Jo(i);case 26:case 5:Jl(a,i,n),n&&e===null&&u&4&&wo(i),ua(i,i.return);break;case 12:Jl(a,i,n);break;case 31:Jl(a,i,n),n&&u&4&&Io(a,i);break;case 13:Jl(a,i,n),n&&u&4&&Po(a,i);break;case 22:i.memoizedState===null&&Jl(a,i,n),ua(i,i.return);break;case 30:break;default:Jl(a,i,n)}l=l.sibling}}function Ac(t,l){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Ke(n))}function Ec(t,l){t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Ke(t))}function zl(t,l,n,e){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)ns(t,l,n,e),l=l.sibling}function ns(t,l,n,e){var a=l.flags;switch(l.tag){case 0:case 11:case 15:zl(t,l,n,e),a&2048&&ia(9,l);break;case 1:zl(t,l,n,e);break;case 3:zl(t,l,n,e),a&2048&&(t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Ke(t)));break;case 12:if(a&2048){zl(t,l,n,e),t=l.stateNode;try{var i=l.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,l.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){ft(l,l.return,f)}}else zl(t,l,n,e);break;case 31:zl(t,l,n,e);break;case 13:zl(t,l,n,e);break;case 23:break;case 22:i=l.stateNode,u=l.alternate,l.memoizedState!==null?i._visibility&2?zl(t,l,n,e):ca(t,l):i._visibility&2?zl(t,l,n,e):(i._visibility|=2,ge(t,l,n,e,(l.subtreeFlags&10256)!==0||!1)),a&2048&&Ac(u,l);break;case 24:zl(t,l,n,e),a&2048&&Ec(l.alternate,l);break;default:zl(t,l,n,e)}}function ge(t,l,n,e,a){for(a=a&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var i=t,u=l,c=n,f=e,y=u.flags;switch(u.tag){case 0:case 11:case 15:ge(i,u,c,f,a),ia(8,u);break;case 23:break;case 22:var b=u.stateNode;u.memoizedState!==null?b._visibility&2?ge(i,u,c,f,a):ca(i,u):(b._visibility|=2,ge(i,u,c,f,a)),a&&y&2048&&Ac(u.alternate,u);break;case 24:ge(i,u,c,f,a),a&&y&2048&&Ec(u.alternate,u);break;default:ge(i,u,c,f,a)}l=l.sibling}}function ca(t,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var n=t,e=l,a=e.flags;switch(e.tag){case 22:ca(n,e),a&2048&&Ac(e.alternate,e);break;case 24:ca(n,e),a&2048&&Ec(e.alternate,e);break;default:ca(n,e)}l=l.sibling}}var fa=8192;function ve(t,l,n){if(t.subtreeFlags&fa)for(t=t.child;t!==null;)es(t,l,n),t=t.sibling}function es(t,l,n){switch(t.tag){case 26:ve(t,l,n),t.flags&fa&&t.memoizedState!==null&&Y1(n,xl,t.memoizedState,t.memoizedProps);break;case 5:ve(t,l,n);break;case 3:case 4:var e=xl;xl=Mi(t.stateNode.containerInfo),ve(t,l,n),xl=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=fa,fa=16777216,ve(t,l,n),fa=e):ve(t,l,n));break;default:ve(t,l,n)}}function as(t){var l=t.alternate;if(l!==null&&(t=l.child,t!==null)){l.child=null;do l=t.sibling,t.sibling=null,t=l;while(t!==null)}}function ra(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var n=0;n<l.length;n++){var e=l[n];qt=e,us(e,t)}as(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)is(t),t=t.sibling}function is(t){switch(t.tag){case 0:case 11:case 15:ra(t),t.flags&2048&&sn(9,t,t.return);break;case 3:ra(t);break;case 12:ra(t);break;case 22:var l=t.stateNode;t.memoizedState!==null&&l._visibility&2&&(t.return===null||t.return.tag!==13)?(l._visibility&=-3,pi(t)):ra(t);break;default:ra(t)}}function pi(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var n=0;n<l.length;n++){var e=l[n];qt=e,us(e,t)}as(t)}for(t=t.child;t!==null;){switch(l=t,l.tag){case 0:case 11:case 15:sn(8,l,l.return),pi(l);break;case 22:n=l.stateNode,n._visibility&2&&(n._visibility&=-3,pi(l));break;default:pi(l)}t=t.sibling}}function us(t,l){for(;qt!==null;){var n=qt;switch(n.tag){case 0:case 11:case 15:sn(8,n,l);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var e=n.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:Ke(n.memoizedState.cache)}if(e=n.child,e!==null)e.return=n,qt=e;else t:for(n=t;qt!==null;){e=qt;var a=e.sibling,i=e.return;if($o(e),e===n){qt=null;break t}if(a!==null){a.return=i,qt=a;break t}qt=i}}}var P0={getCacheForType:function(t){var l=Nt(Ot),n=l.data.get(t);return n===void 0&&(n=t(),l.data.set(t,n)),n},cacheSignal:function(){return Nt(Ot).controller.signal}},t1=typeof WeakMap=="function"?WeakMap:Map,it=0,mt=null,$=null,I=0,ct=0,il=null,dn=!1,be=!1,Tc=!1,Wl=0,St=0,hn=0,Zn=0,Oc=0,ul=0,Se=0,oa=null,$t=null,_c=!1,gi=0,cs=0,vi=1/0,bi=null,mn=null,Dt=0,yn=null,xe=null,kl=0,jc=0,Mc=null,fs=null,sa=0,Dc=null;function cl(){return(it&2)!==0&&I!==0?I&-I:S.T!==null?Cc():Af()}function rs(){if(ul===0)if((I&536870912)===0||nt){var t=_a;_a<<=1,(_a&3932160)===0&&(_a=262144),ul=t}else ul=536870912;return t=el.current,t!==null&&(t.flags|=32),ul}function Ft(t,l,n){(t===mt&&(ct===2||ct===9)||t.cancelPendingCommit!==null)&&(ze(t,0),pn(t,I,ul,!1)),qe(t,n),((it&2)===0||t!==mt)&&(t===mt&&((it&2)===0&&(Zn|=n),St===4&&pn(t,I,ul,!1)),Ml(t))}function os(t,l,n){if((it&6)!==0)throw Error(h(327));var e=!n&&(l&127)===0&&(l&t.expiredLanes)===0||Ue(t,l),a=e?e1(t,l):qc(t,l,!0),i=e;do{if(a===0){be&&!e&&pn(t,l,0,!1);break}else{if(n=t.current.alternate,i&&!l1(n)){a=qc(t,l,!1),i=!1;continue}if(a===2){if(i=l,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){l=u;t:{var c=t;a=oa;var f=c.current.memoizedState.isDehydrated;if(f&&(ze(c,u).flags|=256),u=qc(c,u,!1),u!==2){if(Tc&&!f){c.errorRecoveryDisabledLanes|=i,Zn|=i,a=4;break t}i=$t,$t=a,i!==null&&($t===null?$t=i:$t.push.apply($t,i))}a=u}if(i=!1,a!==2)continue}}if(a===1){ze(t,0),pn(t,l,0,!0);break}t:{switch(e=t,i=a,i){case 0:case 1:throw Error(h(345));case 4:if((l&4194048)!==l)break;case 6:pn(e,l,ul,!dn);break t;case 2:$t=null;break;case 3:case 5:break;default:throw Error(h(329))}if((l&62914560)===l&&(a=gi+300-It(),10<a)){if(pn(e,l,ul,!dn),Ma(e,0,!0)!==0)break t;kl=l,e.timeoutHandle=Ls(ss.bind(null,e,n,$t,bi,_c,l,ul,Zn,Se,dn,i,"Throttled",-0,0),a);break t}ss(e,n,$t,bi,_c,l,ul,Zn,Se,dn,i,null,-0,0)}}break}while(!0);Ml(t)}function ss(t,l,n,e,a,i,u,c,f,y,b,z,g,v){if(t.timeoutHandle=-1,z=l.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bl},es(l,i,z);var U=(i&62914560)===i?gi-It():(i&4194048)===i?cs-It():0;if(U=G1(z,U),U!==null){kl=i,t.cancelPendingCommit=U(bs.bind(null,t,l,i,n,e,a,u,c,f,b,z,null,g,v)),pn(t,i,u,!y);return}}bs(t,l,i,n,e,a,u,c,f)}function l1(t){for(var l=t;;){var n=l.tag;if((n===0||n===11||n===15)&&l.flags&16384&&(n=l.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var e=0;e<n.length;e++){var a=n[e],i=a.getSnapshot;a=a.value;try{if(!ll(i(),a))return!1}catch{return!1}}if(n=l.child,l.subtreeFlags&16384&&n!==null)n.return=l,l=n;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function pn(t,l,n,e){l&=~Oc,l&=~Zn,t.suspendedLanes|=l,t.pingedLanes&=~l,e&&(t.warmLanes|=l),e=t.expirationTimes;for(var a=l;0<a;){var i=31-tl(a),u=1<<i;e[i]=-1,a&=~u}n!==0&&Sf(t,n,l)}function Si(){return(it&6)===0?(da(0),!1):!0}function Uc(){if($!==null){if(ct===0)var t=$.return;else t=$,Yl=Bn=null,Ju(t),de=null,We=0,t=$;for(;t!==null;)Xo(t.alternate,t),t=t.return;$=null}}function ze(t,l){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,x1(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),kl=0,Uc(),mt=t,$=n=Cl(t.current,null),I=l,ct=0,il=null,dn=!1,be=Ue(t,l),Tc=!1,Se=ul=Oc=Zn=hn=St=0,$t=oa=null,_c=!1,(l&8)!==0&&(l|=l&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=l;0<e;){var a=31-tl(e),i=1<<a;l|=t[a],e&=~i}return Wl=l,La(),n}function ds(t,l){w=null,S.H=na,l===se||l===ka?(l=_r(),ct=3):l===Nu?(l=_r(),ct=4):ct=l===rc?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,il=l,$===null&&(St=1,ri(t,dl(l,t.current)))}function hs(){var t=el.current;return t===null?!0:(I&4194048)===I?pl===null:(I&62914560)===I||(I&536870912)!==0?t===pl:!1}function ms(){var t=S.H;return S.H=na,t===null?na:t}function ys(){var t=S.A;return S.A=P0,t}function xi(){St=4,dn||(I&4194048)!==I&&el.current!==null||(be=!0),(hn&134217727)===0&&(Zn&134217727)===0||mt===null||pn(mt,I,ul,!1)}function qc(t,l,n){var e=it;it|=2;var a=ms(),i=ys();(mt!==t||I!==l)&&(bi=null,ze(t,l)),l=!1;var u=St;t:do try{if(ct!==0&&$!==null){var c=$,f=il;switch(ct){case 8:Uc(),u=6;break t;case 3:case 2:case 9:case 6:el.current===null&&(l=!0);var y=ct;if(ct=0,il=null,Ae(t,c,f,y),n&&be){u=0;break t}break;default:y=ct,ct=0,il=null,Ae(t,c,f,y)}}n1(),u=St;break}catch(b){ds(t,b)}while(!0);return l&&t.shellSuspendCounter++,Yl=Bn=null,it=e,S.H=a,S.A=i,$===null&&(mt=null,I=0,La()),u}function n1(){for(;$!==null;)ps($)}function e1(t,l){var n=it;it|=2;var e=ms(),a=ys();mt!==t||I!==l?(bi=null,vi=It()+500,ze(t,l)):be=Ue(t,l);t:do try{if(ct!==0&&$!==null){l=$;var i=il;l:switch(ct){case 1:ct=0,il=null,Ae(t,l,i,1);break;case 2:case 9:if(Tr(i)){ct=0,il=null,gs(l);break}l=function(){ct!==2&&ct!==9||mt!==t||(ct=7),Ml(t)},i.then(l,l);break t;case 3:ct=7;break t;case 4:ct=5;break t;case 7:Tr(i)?(ct=0,il=null,gs(l)):(ct=0,il=null,Ae(t,l,i,7));break;case 5:var u=null;switch($.tag){case 26:u=$.memoizedState;case 5:case 27:var c=$;if(u?nd(u):c.stateNode.complete){ct=0,il=null;var f=c.sibling;if(f!==null)$=f;else{var y=c.return;y!==null?($=y,zi(y)):$=null}break l}}ct=0,il=null,Ae(t,l,i,5);break;case 6:ct=0,il=null,Ae(t,l,i,6);break;case 8:Uc(),St=6;break t;default:throw Error(h(462))}}a1();break}catch(b){ds(t,b)}while(!0);return Yl=Bn=null,S.H=e,S.A=a,it=n,$!==null?0:(mt=null,I=0,La(),St)}function a1(){for(;$!==null&&!_d();)ps($)}function ps(t){var l=Qo(t.alternate,t,Wl);t.memoizedProps=t.pendingProps,l===null?zi(t):$=l}function gs(t){var l=t,n=l.alternate;switch(l.tag){case 15:case 0:l=Bo(n,l,l.pendingProps,l.type,void 0,I);break;case 11:l=Bo(n,l,l.pendingProps,l.type.render,l.ref,I);break;case 5:Ju(l);default:Xo(n,l),l=$=mr(l,Wl),l=Qo(n,l,Wl)}t.memoizedProps=t.pendingProps,l===null?zi(t):$=l}function Ae(t,l,n,e){Yl=Bn=null,Ju(l),de=null,We=0;var a=l.return;try{if(K0(t,a,l,n,I)){St=1,ri(t,dl(n,t.current)),$=null;return}}catch(i){if(a!==null)throw $=a,i;St=1,ri(t,dl(n,t.current)),$=null;return}l.flags&32768?(nt||e===1?t=!0:be||(I&536870912)!==0?t=!1:(dn=t=!0,(e===2||e===9||e===3||e===6)&&(e=el.current,e!==null&&e.tag===13&&(e.flags|=16384))),vs(l,t)):zi(l)}function zi(t){var l=t;do{if((l.flags&32768)!==0){vs(l,dn);return}t=l.return;var n=k0(l.alternate,l,Wl);if(n!==null){$=n;return}if(l=l.sibling,l!==null){$=l;return}$=l=t}while(l!==null);St===0&&(St=5)}function vs(t,l){do{var n=$0(t.alternate,t);if(n!==null){n.flags&=32767,$=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!l&&(t=t.sibling,t!==null)){$=t;return}$=t=n}while(t!==null);St=6,$=null}function bs(t,l,n,e,a,i,u,c,f){t.cancelPendingCommit=null;do Ai();while(Dt!==0);if((it&6)!==0)throw Error(h(327));if(l!==null){if(l===t.current)throw Error(h(177));if(i=l.lanes|l.childLanes,i|=Su,Hd(t,n,i,u,c,f),t===mt&&($=mt=null,I=0),xe=l,yn=t,kl=n,jc=i,Mc=a,fs=e,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,f1(Ta,function(){return Es(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||e){e=S.T,S.T=null,a=_.p,_.p=2,u=it,it|=4;try{F0(t,l,n)}finally{it=u,_.p=a,S.T=e}}Dt=1,Ss(),xs(),zs()}}function Ss(){if(Dt===1){Dt=0;var t=yn,l=xe,n=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||n){n=S.T,S.T=null;var e=_.p;_.p=2;var a=it;it|=4;try{ts(l,t);var i=Vc,u=ir(t.containerInfo),c=i.focusedElem,f=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&ar(c.ownerDocument.documentElement,c)){if(f!==null&&yu(c)){var y=f.start,b=f.end;if(b===void 0&&(b=y),"selectionStart"in c)c.selectionStart=y,c.selectionEnd=Math.min(b,c.value.length);else{var z=c.ownerDocument||document,g=z&&z.defaultView||window;if(g.getSelection){var v=g.getSelection(),U=c.textContent.length,Y=Math.min(f.start,U),dt=f.end===void 0?Y:Math.min(f.end,U);!v.extend&&Y>dt&&(u=dt,dt=Y,Y=u);var s=er(c,Y),r=er(c,dt);if(s&&r&&(v.rangeCount!==1||v.anchorNode!==s.node||v.anchorOffset!==s.offset||v.focusNode!==r.node||v.focusOffset!==r.offset)){var m=z.createRange();m.setStart(s.node,s.offset),v.removeAllRanges(),Y>dt?(v.addRange(m),v.extend(r.node,r.offset)):(m.setEnd(r.node,r.offset),v.addRange(m))}}}}for(z=[],v=c;v=v.parentNode;)v.nodeType===1&&z.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<z.length;c++){var x=z[c];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}Ni=!!Zc,Vc=Zc=null}finally{it=a,_.p=e,S.T=n}}t.current=l,Dt=2}}function xs(){if(Dt===2){Dt=0;var t=yn,l=xe,n=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||n){n=S.T,S.T=null;var e=_.p;_.p=2;var a=it;it|=4;try{ko(t,l.alternate,l)}finally{it=a,_.p=e,S.T=n}}Dt=3}}function zs(){if(Dt===4||Dt===3){Dt=0,jd();var t=yn,l=xe,n=kl,e=fs;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?Dt=5:(Dt=0,xe=yn=null,As(t,t.pendingLanes));var a=t.pendingLanes;if(a===0&&(mn=null),$i(n),l=l.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(De,l,void 0,(l.current.flags&128)===128)}catch{}if(e!==null){l=S.T,a=_.p,_.p=2,S.T=null;try{for(var i=t.onRecoverableError,u=0;u<e.length;u++){var c=e[u];i(c.value,{componentStack:c.stack})}}finally{S.T=l,_.p=a}}(kl&3)!==0&&Ai(),Ml(t),a=t.pendingLanes,(n&261930)!==0&&(a&42)!==0?t===Dc?sa++:(sa=0,Dc=t):sa=0,da(0)}}function As(t,l){(t.pooledCacheLanes&=l)===0&&(l=t.pooledCache,l!=null&&(t.pooledCache=null,Ke(l)))}function Ai(){return Ss(),xs(),zs(),Es()}function Es(){if(Dt!==5)return!1;var t=yn,l=jc;jc=0;var n=$i(kl),e=S.T,a=_.p;try{_.p=32>n?32:n,S.T=null,n=Mc,Mc=null;var i=yn,u=kl;if(Dt=0,xe=yn=null,kl=0,(it&6)!==0)throw Error(h(331));var c=it;if(it|=4,is(i.current),ns(i,i.current,u,n),it=c,da(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(De,i)}catch{}return!0}finally{_.p=a,S.T=e,As(t,l)}}function Ts(t,l,n){l=dl(n,l),l=fc(t.stateNode,l,2),t=fn(t,l,2),t!==null&&(qe(t,2),Ml(t))}function ft(t,l,n){if(t.tag===3)Ts(t,t,n);else for(;l!==null;){if(l.tag===3){Ts(l,t,n);break}else if(l.tag===1){var e=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(mn===null||!mn.has(e))){t=dl(n,t),n=Oo(2),e=fn(l,n,2),e!==null&&(_o(n,e,l,t),qe(e,2),Ml(e));break}}l=l.return}}function Rc(t,l,n){var e=t.pingCache;if(e===null){e=t.pingCache=new t1;var a=new Set;e.set(l,a)}else a=e.get(l),a===void 0&&(a=new Set,e.set(l,a));a.has(n)||(Tc=!0,a.add(n),t=i1.bind(null,t,l,n),l.then(t,t))}function i1(t,l,n){var e=t.pingCache;e!==null&&e.delete(l),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,mt===t&&(I&n)===n&&(St===4||St===3&&(I&62914560)===I&&300>It()-gi?(it&2)===0&&ze(t,0):Oc|=n,Se===I&&(Se=0)),Ml(t)}function Os(t,l){l===0&&(l=bf()),t=Un(t,l),t!==null&&(qe(t,l),Ml(t))}function u1(t){var l=t.memoizedState,n=0;l!==null&&(n=l.retryLane),Os(t,n)}function c1(t,l){var n=0;switch(t.tag){case 31:case 13:var e=t.stateNode,a=t.memoizedState;a!==null&&(n=a.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(h(314))}e!==null&&e.delete(l),Os(t,n)}function f1(t,l){return Ki(t,l)}var Ei=null,Ee=null,Bc=!1,Ti=!1,Nc=!1,gn=0;function Ml(t){t!==Ee&&t.next===null&&(Ee===null?Ei=Ee=t:Ee=Ee.next=t),Ti=!0,Bc||(Bc=!0,o1())}function da(t,l){if(!Nc&&Ti){Nc=!0;do for(var n=!1,e=Ei;e!==null;){if(t!==0){var a=e.pendingLanes;if(a===0)var i=0;else{var u=e.suspendedLanes,c=e.pingedLanes;i=(1<<31-tl(42|t)+1)-1,i&=a&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Ds(e,i))}else i=I,i=Ma(e,e===mt?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(i&3)===0||Ue(e,i)||(n=!0,Ds(e,i));e=e.next}while(n);Nc=!1}}function r1(){_s()}function _s(){Ti=Bc=!1;var t=0;gn!==0&&S1()&&(t=gn);for(var l=It(),n=null,e=Ei;e!==null;){var a=e.next,i=js(e,l);i===0?(e.next=null,n===null?Ei=a:n.next=a,a===null&&(Ee=n)):(n=e,(t!==0||(i&3)!==0)&&(Ti=!0)),e=a}Dt!==0&&Dt!==5||da(t),gn!==0&&(gn=0)}function js(t,l){for(var n=t.suspendedLanes,e=t.pingedLanes,a=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-tl(i),c=1<<u,f=a[u];f===-1?((c&n)===0||(c&e)!==0)&&(a[u]=Cd(c,l)):f<=l&&(t.expiredLanes|=c),i&=~c}if(l=mt,n=I,n=Ma(t,t===l?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,n===0||t===l&&(ct===2||ct===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&Ji(e),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Ue(t,n)){if(l=n&-n,l===t.callbackPriority)return l;switch(e!==null&&Ji(e),$i(n)){case 2:case 8:n=gf;break;case 32:n=Ta;break;case 268435456:n=vf;break;default:n=Ta}return e=Ms.bind(null,t),n=Ki(n,e),t.callbackPriority=l,t.callbackNode=n,l}return e!==null&&e!==null&&Ji(e),t.callbackPriority=2,t.callbackNode=null,2}function Ms(t,l){if(Dt!==0&&Dt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Ai()&&t.callbackNode!==n)return null;var e=I;return e=Ma(t,t===mt?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(os(t,e,l),js(t,It()),t.callbackNode!=null&&t.callbackNode===n?Ms.bind(null,t):null)}function Ds(t,l){if(Ai())return null;os(t,l,!0)}function o1(){z1(function(){(it&6)!==0?Ki(pf,r1):_s()})}function Cc(){if(gn===0){var t=re;t===0&&(t=Oa,Oa<<=1,(Oa&261888)===0&&(Oa=256)),gn=t}return gn}function Us(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ra(""+t)}function qs(t,l){var n=l.ownerDocument.createElement("input");return n.name=l.name,n.value=l.value,t.id&&n.setAttribute("form",t.id),l.parentNode.insertBefore(n,l),t=new FormData(t),n.parentNode.removeChild(n),t}function s1(t,l,n,e,a){if(l==="submit"&&n&&n.stateNode===a){var i=Us((a[wt]||null).action),u=e.submitter;u&&(l=(l=u[wt]||null)?Us(l.formAction):u.getAttribute("formAction"),l!==null&&(i=l,u=null));var c=new Ha("action","action",null,e,a);t.push({event:c,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(gn!==0){var f=u?qs(a,u):new FormData(a);nc(n,{pending:!0,data:f,method:a.method,action:i},null,f)}}else typeof i=="function"&&(c.preventDefault(),f=u?qs(a,u):new FormData(a),nc(n,{pending:!0,data:f,method:a.method,action:i},i,f))},currentTarget:a}]})}}for(var Hc=0;Hc<bu.length;Hc++){var Yc=bu[Hc],d1=Yc.toLowerCase(),h1=Yc[0].toUpperCase()+Yc.slice(1);Sl(d1,"on"+h1)}Sl(fr,"onAnimationEnd"),Sl(rr,"onAnimationIteration"),Sl(or,"onAnimationStart"),Sl("dblclick","onDoubleClick"),Sl("focusin","onFocus"),Sl("focusout","onBlur"),Sl(M0,"onTransitionRun"),Sl(D0,"onTransitionStart"),Sl(U0,"onTransitionCancel"),Sl(sr,"onTransitionEnd"),kn("onMouseEnter",["mouseout","mouseover"]),kn("onMouseLeave",["mouseout","mouseover"]),kn("onPointerEnter",["pointerout","pointerover"]),kn("onPointerLeave",["pointerout","pointerover"]),_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_n("onBeforeInput",["compositionend","keypress","textInput","paste"]),_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ha));function Rs(t,l){l=(l&4)!==0;for(var n=0;n<t.length;n++){var e=t[n],a=e.event;e=e.listeners;t:{var i=void 0;if(l)for(var u=e.length-1;0<=u;u--){var c=e[u],f=c.instance,y=c.currentTarget;if(c=c.listener,f!==i&&a.isPropagationStopped())break t;i=c,a.currentTarget=y;try{i(a)}catch(b){Qa(b)}a.currentTarget=null,i=f}else for(u=0;u<e.length;u++){if(c=e[u],f=c.instance,y=c.currentTarget,c=c.listener,f!==i&&a.isPropagationStopped())break t;i=c,a.currentTarget=y;try{i(a)}catch(b){Qa(b)}a.currentTarget=null,i=f}}}}function F(t,l){var n=l[Fi];n===void 0&&(n=l[Fi]=new Set);var e=t+"__bubble";n.has(e)||(Bs(l,t,2,!1),n.add(e))}function Gc(t,l,n){var e=0;l&&(e|=4),Bs(n,t,e,l)}var Oi="_reactListening"+Math.random().toString(36).slice(2);function Qc(t){if(!t[Oi]){t[Oi]=!0,Of.forEach(function(n){n!=="selectionchange"&&(m1.has(n)||Gc(n,!1,t),Gc(n,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[Oi]||(l[Oi]=!0,Gc("selectionchange",!1,l))}}function Bs(t,l,n,e){switch(rd(l)){case 2:var a=X1;break;case 8:a=Z1;break;default:a=lf}n=a.bind(null,l,n,t),a=void 0,!uu||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(a=!0),e?a!==void 0?t.addEventListener(l,n,{capture:!0,passive:a}):t.addEventListener(l,n,!0):a!==void 0?t.addEventListener(l,n,{passive:a}):t.addEventListener(l,n,!1)}function Lc(t,l,n,e,a){var i=e;if((l&1)===0&&(l&2)===0&&e!==null)t:for(;;){if(e===null)return;var u=e.tag;if(u===3||u===4){var c=e.stateNode.containerInfo;if(c===a)break;if(u===4)for(u=e.return;u!==null;){var f=u.tag;if((f===3||f===4)&&u.stateNode.containerInfo===a)return;u=u.return}for(;c!==null;){if(u=Kn(c),u===null)return;if(f=u.tag,f===5||f===6||f===26||f===27){e=i=u;continue t}c=c.parentNode}}e=e.return}Yf(function(){var y=i,b=au(n),z=[];t:{var g=dr.get(t);if(g!==void 0){var v=Ha,U=t;switch(t){case"keypress":if(Na(n)===0)break t;case"keydown":case"keyup":v=c0;break;case"focusin":U="focus",v=ou;break;case"focusout":U="blur",v=ou;break;case"beforeblur":case"afterblur":v=ou;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=kd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=o0;break;case fr:case rr:case or:v=Id;break;case sr:v=d0;break;case"scroll":case"scrollend":v=Jd;break;case"wheel":v=m0;break;case"copy":case"cut":case"paste":v=t0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Zf;break;case"toggle":case"beforetoggle":v=p0}var Y=(l&4)!==0,dt=!Y&&(t==="scroll"||t==="scrollend"),s=Y?g!==null?g+"Capture":null:g;Y=[];for(var r=y,m;r!==null;){var x=r;if(m=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||m===null||s===null||(x=Ne(r,s),x!=null&&Y.push(ma(r,x,m))),dt)break;r=r.return}0<Y.length&&(g=new v(g,U,null,n,b),z.push({event:g,listeners:Y}))}}if((l&7)===0){t:{if(g=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",g&&n!==eu&&(U=n.relatedTarget||n.fromElement)&&(Kn(U)||U[wn]))break t;if((v||g)&&(g=b.window===b?b:(g=b.ownerDocument)?g.defaultView||g.parentWindow:window,v?(U=n.relatedTarget||n.toElement,v=y,U=U?Kn(U):null,U!==null&&(dt=Q(U),Y=U.tag,U!==dt||Y!==5&&Y!==27&&Y!==6)&&(U=null)):(v=null,U=y),v!==U)){if(Y=Lf,x="onMouseLeave",s="onMouseEnter",r="mouse",(t==="pointerout"||t==="pointerover")&&(Y=Zf,x="onPointerLeave",s="onPointerEnter",r="pointer"),dt=v==null?g:Be(v),m=U==null?g:Be(U),g=new Y(x,r+"leave",v,n,b),g.target=dt,g.relatedTarget=m,x=null,Kn(b)===y&&(Y=new Y(s,r+"enter",U,n,b),Y.target=m,Y.relatedTarget=dt,x=Y),dt=x,v&&U)l:{for(Y=y1,s=v,r=U,m=0,x=s;x;x=Y(x))m++;x=0;for(var C=r;C;C=Y(C))x++;for(;0<m-x;)s=Y(s),m--;for(;0<x-m;)r=Y(r),x--;for(;m--;){if(s===r||r!==null&&s===r.alternate){Y=s;break l}s=Y(s),r=Y(r)}Y=null}else Y=null;v!==null&&Ns(z,g,v,Y,!1),U!==null&&dt!==null&&Ns(z,dt,U,Y,!0)}}t:{if(g=y?Be(y):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var et=Ff;else if(kf(g))if(If)et=O0;else{et=E0;var N=A0}else v=g.nodeName,!v||v.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?y&&nu(y.elementType)&&(et=Ff):et=T0;if(et&&(et=et(t,y))){$f(z,et,n,b);break t}N&&N(t,g,y),t==="focusout"&&y&&g.type==="number"&&y.memoizedProps.value!=null&&lu(g,"number",g.value)}switch(N=y?Be(y):window,t){case"focusin":(kf(N)||N.contentEditable==="true")&&(le=N,pu=y,Ze=null);break;case"focusout":Ze=pu=le=null;break;case"mousedown":gu=!0;break;case"contextmenu":case"mouseup":case"dragend":gu=!1,ur(z,n,b);break;case"selectionchange":if(j0)break;case"keydown":case"keyup":ur(z,n,b)}var K;if(du)t:{switch(t){case"compositionstart":var P="onCompositionStart";break t;case"compositionend":P="onCompositionEnd";break t;case"compositionupdate":P="onCompositionUpdate";break t}P=void 0}else te?Jf(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Vf&&n.locale!=="ko"&&(te||P!=="onCompositionStart"?P==="onCompositionEnd"&&te&&(K=Gf()):(tn=b,cu="value"in tn?tn.value:tn.textContent,te=!0)),N=_i(y,P),0<N.length&&(P=new Xf(P,t,null,n,b),z.push({event:P,listeners:N}),K?P.data=K:(K=Wf(n),K!==null&&(P.data=K)))),(K=v0?b0(t,n):S0(t,n))&&(P=_i(y,"onBeforeInput"),0<P.length&&(N=new Xf("onBeforeInput","beforeinput",null,n,b),z.push({event:N,listeners:P}),N.data=K)),s1(z,t,y,n,b)}Rs(z,l)})}function ma(t,l,n){return{instance:t,listener:l,currentTarget:n}}function _i(t,l){for(var n=l+"Capture",e=[];t!==null;){var a=t,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=Ne(t,n),a!=null&&e.unshift(ma(t,a,i)),a=Ne(t,l),a!=null&&e.push(ma(t,a,i))),t.tag===3)return e;t=t.return}return[]}function y1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Ns(t,l,n,e,a){for(var i=l._reactName,u=[];n!==null&&n!==e;){var c=n,f=c.alternate,y=c.stateNode;if(c=c.tag,f!==null&&f===e)break;c!==5&&c!==26&&c!==27||y===null||(f=y,a?(y=Ne(n,i),y!=null&&u.unshift(ma(n,y,f))):a||(y=Ne(n,i),y!=null&&u.push(ma(n,y,f)))),n=n.return}u.length!==0&&t.push({event:l,listeners:u})}var p1=/\r\n?/g,g1=/\u0000|\uFFFD/g;function Cs(t){return(typeof t=="string"?t:""+t).replace(p1,`
`).replace(g1,"")}function Hs(t,l){return l=Cs(l),Cs(t)===l}function st(t,l,n,e,a,i){switch(n){case"children":typeof e=="string"?l==="body"||l==="textarea"&&e===""||Fn(t,e):(typeof e=="number"||typeof e=="bigint")&&l!=="body"&&Fn(t,""+e);break;case"className":Ua(t,"class",e);break;case"tabIndex":Ua(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":Ua(t,n,e);break;case"style":Cf(t,e,i);break;case"data":if(l!=="object"){Ua(t,"data",e);break}case"src":case"href":if(e===""&&(l!=="a"||n!=="href")){t.removeAttribute(n);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(n);break}e=Ra(""+e),t.setAttribute(n,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(l!=="input"&&st(t,l,"name",a.name,a,null),st(t,l,"formEncType",a.formEncType,a,null),st(t,l,"formMethod",a.formMethod,a,null),st(t,l,"formTarget",a.formTarget,a,null)):(st(t,l,"encType",a.encType,a,null),st(t,l,"method",a.method,a,null),st(t,l,"target",a.target,a,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(n);break}e=Ra(""+e),t.setAttribute(n,e);break;case"onClick":e!=null&&(t.onclick=Bl);break;case"onScroll":e!=null&&F("scroll",t);break;case"onScrollEnd":e!=null&&F("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(h(61));if(n=e.__html,n!=null){if(a.children!=null)throw Error(h(60));t.innerHTML=n}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}n=Ra(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(n,""+e):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":e===!0?t.setAttribute(n,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(n,e):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(n,e):t.removeAttribute(n);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(n):t.setAttribute(n,e);break;case"popover":F("beforetoggle",t),F("toggle",t),Da(t,"popover",e);break;case"xlinkActuate":Rl(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Rl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Rl(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Rl(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Rl(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Rl(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Rl(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Rl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Rl(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Da(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=wd.get(n)||n,Da(t,n,e))}}function Xc(t,l,n,e,a,i){switch(n){case"style":Cf(t,e,i);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(h(61));if(n=e.__html,n!=null){if(a.children!=null)throw Error(h(60));t.innerHTML=n}}break;case"children":typeof e=="string"?Fn(t,e):(typeof e=="number"||typeof e=="bigint")&&Fn(t,""+e);break;case"onScroll":e!=null&&F("scroll",t);break;case"onScrollEnd":e!=null&&F("scrollend",t);break;case"onClick":e!=null&&(t.onclick=Bl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_f.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),l=n.slice(2,a?n.length-7:void 0),i=t[wt]||null,i=i!=null?i[n]:null,typeof i=="function"&&t.removeEventListener(l,i,a),typeof e=="function")){typeof i!="function"&&i!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(l,e,a);break t}n in t?t[n]=e:e===!0?t.setAttribute(n,""):Da(t,n,e)}}}function Ht(t,l,n){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":F("error",t),F("load",t);var e=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var u=n[i];if(u!=null)switch(i){case"src":e=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,l));default:st(t,l,i,u,n,null)}}a&&st(t,l,"srcSet",n.srcSet,n,null),e&&st(t,l,"src",n.src,n,null);return;case"input":F("invalid",t);var c=i=u=a=null,f=null,y=null;for(e in n)if(n.hasOwnProperty(e)){var b=n[e];if(b!=null)switch(e){case"name":a=b;break;case"type":u=b;break;case"checked":f=b;break;case"defaultChecked":y=b;break;case"value":i=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(h(137,l));break;default:st(t,l,e,b,n,null)}}qf(t,i,c,f,y,u,a,!1);return;case"select":F("invalid",t),e=u=i=null;for(a in n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":e=c;default:st(t,l,a,c,n,null)}l=i,n=u,t.multiple=!!e,l!=null?$n(t,!!e,l,!1):n!=null&&$n(t,!!e,n,!0);return;case"textarea":F("invalid",t),i=a=e=null;for(u in n)if(n.hasOwnProperty(u)&&(c=n[u],c!=null))switch(u){case"value":e=c;break;case"defaultValue":a=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(h(91));break;default:st(t,l,u,c,n,null)}Bf(t,e,a,i);return;case"option":for(f in n)n.hasOwnProperty(f)&&(e=n[f],e!=null)&&(f==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":st(t,l,f,e,n,null));return;case"dialog":F("beforetoggle",t),F("toggle",t),F("cancel",t),F("close",t);break;case"iframe":case"object":F("load",t);break;case"video":case"audio":for(e=0;e<ha.length;e++)F(ha[e],t);break;case"image":F("error",t),F("load",t);break;case"details":F("toggle",t);break;case"embed":case"source":case"link":F("error",t),F("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(y in n)if(n.hasOwnProperty(y)&&(e=n[y],e!=null))switch(y){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,l));default:st(t,l,y,e,n,null)}return;default:if(nu(l)){for(b in n)n.hasOwnProperty(b)&&(e=n[b],e!==void 0&&Xc(t,l,b,e,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(e=n[c],e!=null&&st(t,l,c,e,n,null))}function v1(t,l,n,e){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,u=null,c=null,f=null,y=null,b=null;for(v in n){var z=n[v];if(n.hasOwnProperty(v)&&z!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":f=z;default:e.hasOwnProperty(v)||st(t,l,v,null,e,z)}}for(var g in e){var v=e[g];if(z=n[g],e.hasOwnProperty(g)&&(v!=null||z!=null))switch(g){case"type":i=v;break;case"name":a=v;break;case"checked":y=v;break;case"defaultChecked":b=v;break;case"value":u=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,l));break;default:v!==z&&st(t,l,g,v,e,z)}}tu(t,u,c,f,y,b,i,a);return;case"select":v=u=c=g=null;for(i in n)if(f=n[i],n.hasOwnProperty(i)&&f!=null)switch(i){case"value":break;case"multiple":v=f;default:e.hasOwnProperty(i)||st(t,l,i,null,e,f)}for(a in e)if(i=e[a],f=n[a],e.hasOwnProperty(a)&&(i!=null||f!=null))switch(a){case"value":g=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==f&&st(t,l,a,i,e,f)}l=c,n=u,e=v,g!=null?$n(t,!!n,g,!1):!!e!=!!n&&(l!=null?$n(t,!!n,l,!0):$n(t,!!n,n?[]:"",!1));return;case"textarea":v=g=null;for(c in n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!e.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:st(t,l,c,null,e,a)}for(u in e)if(a=e[u],i=n[u],e.hasOwnProperty(u)&&(a!=null||i!=null))switch(u){case"value":g=a;break;case"defaultValue":v=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(h(91));break;default:a!==i&&st(t,l,u,a,e,i)}Rf(t,g,v);return;case"option":for(var U in n)g=n[U],n.hasOwnProperty(U)&&g!=null&&!e.hasOwnProperty(U)&&(U==="selected"?t.selected=!1:st(t,l,U,null,e,g));for(f in e)g=e[f],v=n[f],e.hasOwnProperty(f)&&g!==v&&(g!=null||v!=null)&&(f==="selected"?t.selected=g&&typeof g!="function"&&typeof g!="symbol":st(t,l,f,g,e,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Y in n)g=n[Y],n.hasOwnProperty(Y)&&g!=null&&!e.hasOwnProperty(Y)&&st(t,l,Y,null,e,g);for(y in e)if(g=e[y],v=n[y],e.hasOwnProperty(y)&&g!==v&&(g!=null||v!=null))switch(y){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,l));break;default:st(t,l,y,g,e,v)}return;default:if(nu(l)){for(var dt in n)g=n[dt],n.hasOwnProperty(dt)&&g!==void 0&&!e.hasOwnProperty(dt)&&Xc(t,l,dt,void 0,e,g);for(b in e)g=e[b],v=n[b],!e.hasOwnProperty(b)||g===v||g===void 0&&v===void 0||Xc(t,l,b,g,e,v);return}}for(var s in n)g=n[s],n.hasOwnProperty(s)&&g!=null&&!e.hasOwnProperty(s)&&st(t,l,s,null,e,g);for(z in e)g=e[z],v=n[z],!e.hasOwnProperty(z)||g===v||g==null&&v==null||st(t,l,z,g,e,v)}function Ys(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function b1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,l=0,n=performance.getEntriesByType("resource"),e=0;e<n.length;e++){var a=n[e],i=a.transferSize,u=a.initiatorType,c=a.duration;if(i&&c&&Ys(u)){for(u=0,c=a.responseEnd,e+=1;e<n.length;e++){var f=n[e],y=f.startTime;if(y>c)break;var b=f.transferSize,z=f.initiatorType;b&&Ys(z)&&(f=f.responseEnd,u+=b*(f<c?1:(c-y)/(f-y)))}if(--e,l+=8*(i+u)/(a.duration/1e3),t++,10<t)break}}if(0<t)return l/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Zc=null,Vc=null;function ji(t){return t.nodeType===9?t:t.ownerDocument}function Gs(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qs(t,l){if(t===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&l==="foreignObject"?0:t}function wc(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var Kc=null;function S1(){var t=window.event;return t&&t.type==="popstate"?t===Kc?!1:(Kc=t,!0):(Kc=null,!1)}var Ls=typeof setTimeout=="function"?setTimeout:void 0,x1=typeof clearTimeout=="function"?clearTimeout:void 0,Xs=typeof Promise=="function"?Promise:void 0,z1=typeof queueMicrotask=="function"?queueMicrotask:typeof Xs<"u"?function(t){return Xs.resolve(null).then(t).catch(A1)}:Ls;function A1(t){setTimeout(function(){throw t})}function vn(t){return t==="head"}function Zs(t,l){var n=l,e=0;do{var a=n.nextSibling;if(t.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(e===0){t.removeChild(a),je(l);return}e--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")e++;else if(n==="html")ya(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,ya(n);for(var i=n.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Re]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=u}}else n==="body"&&ya(t.ownerDocument.body);n=a}while(n);je(l)}function Vs(t,l){var n=t;t=0;do{var e=n.nextSibling;if(n.nodeType===1?l?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(l?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),e&&e.nodeType===8)if(n=e.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=e}while(n)}function Jc(t){var l=t.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var n=l;switch(l=l.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Jc(n),Ii(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function E1(t,l,n,e){for(;t.nodeType===1;){var a=n;if(t.nodeName.toLowerCase()!==l.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[Re])switch(l){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==a.rel||t.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||t.getAttribute("title")!==(a.title==null?null:a.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(a.src==null?null:a.src)||t.getAttribute("type")!==(a.type==null?null:a.type)||t.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(l==="input"&&t.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=gl(t.nextSibling),t===null)break}return null}function T1(t,l,n){if(l==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gl(t.nextSibling),t===null))return null;return t}function ws(t,l){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=gl(t.nextSibling),t===null))return null;return t}function Wc(t){return t.data==="$?"||t.data==="$~"}function kc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function O1(t,l){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=l;else if(t.data!=="$?"||n.readyState!=="loading")l();else{var e=function(){l(),n.removeEventListener("DOMContentLoaded",e)};n.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function gl(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return t}var $c=null;function Ks(t){t=t.nextSibling;for(var l=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(l===0)return gl(t.nextSibling);l--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||l++}t=t.nextSibling}return null}function Js(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(l===0)return t;l--}else n!=="/$"&&n!=="/&"||l++}t=t.previousSibling}return null}function Ws(t,l,n){switch(l=ji(n),t){case"html":if(t=l.documentElement,!t)throw Error(h(452));return t;case"head":if(t=l.head,!t)throw Error(h(453));return t;case"body":if(t=l.body,!t)throw Error(h(454));return t;default:throw Error(h(451))}}function ya(t){for(var l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ii(t)}var vl=new Map,ks=new Set;function Mi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var $l=_.d;_.d={f:_1,r:j1,D:M1,C:D1,L:U1,m:q1,X:B1,S:R1,M:N1};function _1(){var t=$l.f(),l=Si();return t||l}function j1(t){var l=Jn(t);l!==null&&l.tag===5&&l.type==="form"?so(l):$l.r(t)}var Te=typeof document>"u"?null:document;function $s(t,l,n){var e=Te;if(e&&typeof l=="string"&&l){var a=ol(l);a='link[rel="'+t+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),ks.has(a)||(ks.add(a),t={rel:t,crossOrigin:n,href:l},e.querySelector(a)===null&&(l=e.createElement("link"),Ht(l,"link",t),Ut(l),e.head.appendChild(l)))}}function M1(t){$l.D(t),$s("dns-prefetch",t,null)}function D1(t,l){$l.C(t,l),$s("preconnect",t,l)}function U1(t,l,n){$l.L(t,l,n);var e=Te;if(e&&t&&l){var a='link[rel="preload"][as="'+ol(l)+'"]';l==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+ol(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+ol(n.imageSizes)+'"]')):a+='[href="'+ol(t)+'"]';var i=a;switch(l){case"style":i=Oe(t);break;case"script":i=_e(t)}vl.has(i)||(t=D({rel:"preload",href:l==="image"&&n&&n.imageSrcSet?void 0:t,as:l},n),vl.set(i,t),e.querySelector(a)!==null||l==="style"&&e.querySelector(pa(i))||l==="script"&&e.querySelector(ga(i))||(l=e.createElement("link"),Ht(l,"link",t),Ut(l),e.head.appendChild(l)))}}function q1(t,l){$l.m(t,l);var n=Te;if(n&&t){var e=l&&typeof l.as=="string"?l.as:"script",a='link[rel="modulepreload"][as="'+ol(e)+'"][href="'+ol(t)+'"]',i=a;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=_e(t)}if(!vl.has(i)&&(t=D({rel:"modulepreload",href:t},l),vl.set(i,t),n.querySelector(a)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ga(i)))return}e=n.createElement("link"),Ht(e,"link",t),Ut(e),n.head.appendChild(e)}}}function R1(t,l,n){$l.S(t,l,n);var e=Te;if(e&&t){var a=Wn(e).hoistableStyles,i=Oe(t);l=l||"default";var u=a.get(i);if(!u){var c={loading:0,preload:null};if(u=e.querySelector(pa(i)))c.loading=5;else{t=D({rel:"stylesheet",href:t,"data-precedence":l},n),(n=vl.get(i))&&Fc(t,n);var f=u=e.createElement("link");Ut(f),Ht(f,"link",t),f._p=new Promise(function(y,b){f.onload=y,f.onerror=b}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Di(u,l,e)}u={type:"stylesheet",instance:u,count:1,state:c},a.set(i,u)}}}function B1(t,l){$l.X(t,l);var n=Te;if(n&&t){var e=Wn(n).hoistableScripts,a=_e(t),i=e.get(a);i||(i=n.querySelector(ga(a)),i||(t=D({src:t,async:!0},l),(l=vl.get(a))&&Ic(t,l),i=n.createElement("script"),Ut(i),Ht(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(a,i))}}function N1(t,l){$l.M(t,l);var n=Te;if(n&&t){var e=Wn(n).hoistableScripts,a=_e(t),i=e.get(a);i||(i=n.querySelector(ga(a)),i||(t=D({src:t,async:!0,type:"module"},l),(l=vl.get(a))&&Ic(t,l),i=n.createElement("script"),Ut(i),Ht(i,"link",t),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(a,i))}}function Fs(t,l,n,e){var a=(a=k.current)?Mi(a):null;if(!a)throw Error(h(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(l=Oe(n.href),n=Wn(a).hoistableStyles,e=n.get(l),e||(e={type:"style",instance:null,count:0,state:null},n.set(l,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Oe(n.href);var i=Wn(a).hoistableStyles,u=i.get(t);if(u||(a=a.ownerDocument||a,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=a.querySelector(pa(t)))&&!i._p&&(u.instance=i,u.state.loading=5),vl.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},vl.set(t,n),i||C1(a,t,n,u.state))),l&&e===null)throw Error(h(528,""));return u}if(l&&e!==null)throw Error(h(529,""));return null;case"script":return l=n.async,n=n.src,typeof n=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=_e(n),n=Wn(a).hoistableScripts,e=n.get(l),e||(e={type:"script",instance:null,count:0,state:null},n.set(l,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,t))}}function Oe(t){return'href="'+ol(t)+'"'}function pa(t){return'link[rel="stylesheet"]['+t+"]"}function Is(t){return D({},t,{"data-precedence":t.precedence,precedence:null})}function C1(t,l,n,e){t.querySelector('link[rel="preload"][as="style"]['+l+"]")?e.loading=1:(l=t.createElement("link"),e.preload=l,l.addEventListener("load",function(){return e.loading|=1}),l.addEventListener("error",function(){return e.loading|=2}),Ht(l,"link",n),Ut(l),t.head.appendChild(l))}function _e(t){return'[src="'+ol(t)+'"]'}function ga(t){return"script[async]"+t}function Ps(t,l,n){if(l.count++,l.instance===null)switch(l.type){case"style":var e=t.querySelector('style[data-href~="'+ol(n.href)+'"]');if(e)return l.instance=e,Ut(e),e;var a=D({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),Ut(e),Ht(e,"style",a),Di(e,n.precedence,t),l.instance=e;case"stylesheet":a=Oe(n.href);var i=t.querySelector(pa(a));if(i)return l.state.loading|=4,l.instance=i,Ut(i),i;e=Is(n),(a=vl.get(a))&&Fc(e,a),i=(t.ownerDocument||t).createElement("link"),Ut(i);var u=i;return u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),Ht(i,"link",e),l.state.loading|=4,Di(i,n.precedence,t),l.instance=i;case"script":return i=_e(n.src),(a=t.querySelector(ga(i)))?(l.instance=a,Ut(a),a):(e=n,(a=vl.get(i))&&(e=D({},n),Ic(e,a)),t=t.ownerDocument||t,a=t.createElement("script"),Ut(a),Ht(a,"link",e),t.head.appendChild(a),l.instance=a);case"void":return null;default:throw Error(h(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(e=l.instance,l.state.loading|=4,Di(e,n.precedence,t));return l.instance}function Di(t,l,n){for(var e=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=e.length?e[e.length-1]:null,i=a,u=0;u<e.length;u++){var c=e[u];if(c.dataset.precedence===l)i=c;else if(i!==a)break}i?i.parentNode.insertBefore(t,i.nextSibling):(l=n.nodeType===9?n.head:n,l.insertBefore(t,l.firstChild))}function Fc(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.title==null&&(t.title=l.title)}function Ic(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.integrity==null&&(t.integrity=l.integrity)}var Ui=null;function td(t,l,n){if(Ui===null){var e=new Map,a=Ui=new Map;a.set(n,e)}else a=Ui,e=a.get(n),e||(e=new Map,a.set(n,e));if(e.has(t))return e;for(e.set(t,null),n=n.getElementsByTagName(t),a=0;a<n.length;a++){var i=n[a];if(!(i[Re]||i[Rt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(l)||"";u=t+u;var c=e.get(u);c?c.push(i):e.set(u,[i])}}return e}function ld(t,l,n){t=t.ownerDocument||t,t.head.insertBefore(n,l==="title"?t.querySelector("head > title"):null)}function H1(t,l,n){if(n===1||l.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;return l.rel==="stylesheet"?(t=l.disabled,typeof l.precedence=="string"&&t==null):!0;case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function nd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Y1(t,l,n,e){if(n.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Oe(e.href),i=l.querySelector(pa(a));if(i){l=i._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(t.count++,t=qi.bind(t),l.then(t,t)),n.state.loading|=4,n.instance=i,Ut(i);return}i=l.ownerDocument||l,e=Is(e),(a=vl.get(a))&&Fc(e,a),i=i.createElement("link"),Ut(i);var u=i;u._p=new Promise(function(c,f){u.onload=c,u.onerror=f}),Ht(i,"link",e),n.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,l),(l=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=qi.bind(t),l.addEventListener("load",n),l.addEventListener("error",n))}}var Pc=0;function G1(t,l){return t.stylesheets&&t.count===0&&Bi(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var e=setTimeout(function(){if(t.stylesheets&&Bi(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+l);0<t.imgBytes&&Pc===0&&(Pc=62500*b1());var a=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bi(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Pc?50:800)+l);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(a)}}:null}function qi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Bi(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ri=null;function Bi(t,l){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ri=new Map,l.forEach(Q1,t),Ri=null,qi.call(t))}function Q1(t,l){if(!(l.state.loading&4)){var n=Ri.get(t);if(n)var e=n.get(null);else{n=new Map,Ri.set(t,n);for(var a=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var u=a[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),e=u)}e&&n.set(null,e)}a=l.instance,u=a.getAttribute("data-precedence"),i=n.get(u)||e,i===e&&n.set(null,a),n.set(u,a),this.count++,e=qi.bind(this),a.addEventListener("load",e),a.addEventListener("error",e),i?i.parentNode.insertBefore(a,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(a,t.firstChild)),l.state.loading|=4}}var va={$$typeof:Yt,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function L1(t,l,n,e,a,i,u,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=e,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function ed(t,l,n,e,a,i,u,c,f,y,b,z){return t=new L1(t,l,n,u,f,y,b,z,c),l=1,i===!0&&(l|=24),i=nl(3,null,null,l),t.current=i,i.stateNode=t,l=qu(),l.refCount++,t.pooledCache=l,l.refCount++,i.memoizedState={element:e,isDehydrated:n,cache:l},Cu(i),t}function ad(t){return t?(t=ae,t):ae}function id(t,l,n,e,a,i){a=ad(a),e.context===null?e.context=a:e.pendingContext=a,e=cn(l),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=fn(t,e,l),n!==null&&(Ft(n,t,l),$e(n,t,l))}function ud(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<l?n:l}}function tf(t,l){ud(t,l),(t=t.alternate)&&ud(t,l)}function cd(t){if(t.tag===13||t.tag===31){var l=Un(t,67108864);l!==null&&Ft(l,t,67108864),tf(t,67108864)}}function fd(t){if(t.tag===13||t.tag===31){var l=cl();l=ki(l);var n=Un(t,l);n!==null&&Ft(n,t,l),tf(t,l)}}var Ni=!0;function X1(t,l,n,e){var a=S.T;S.T=null;var i=_.p;try{_.p=2,lf(t,l,n,e)}finally{_.p=i,S.T=a}}function Z1(t,l,n,e){var a=S.T;S.T=null;var i=_.p;try{_.p=8,lf(t,l,n,e)}finally{_.p=i,S.T=a}}function lf(t,l,n,e){if(Ni){var a=nf(e);if(a===null)Lc(t,l,e,Ci,n),od(t,e);else if(w1(a,t,l,n,e))e.stopPropagation();else if(od(t,e),l&4&&-1<V1.indexOf(t)){for(;a!==null;){var i=Jn(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=On(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var f=1<<31-tl(u);c.entanglements[1]|=f,u&=~f}Ml(i),(it&6)===0&&(vi=It()+500,da(0))}}break;case 31:case 13:c=Un(i,2),c!==null&&Ft(c,i,2),Si(),tf(i,2)}if(i=nf(e),i===null&&Lc(t,l,e,Ci,n),i===a)break;a=i}a!==null&&e.stopPropagation()}else Lc(t,l,e,null,n)}}function nf(t){return t=au(t),ef(t)}var Ci=null;function ef(t){if(Ci=null,t=Kn(t),t!==null){var l=Q(t);if(l===null)t=null;else{var n=l.tag;if(n===13){if(t=H(l),t!==null)return t;t=null}else if(n===31){if(t=q(l),t!==null)return t;t=null}else if(n===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null)}}return Ci=t,null}function rd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Md()){case pf:return 2;case gf:return 8;case Ta:case Dd:return 32;case vf:return 268435456;default:return 32}default:return 32}}var af=!1,bn=null,Sn=null,xn=null,ba=new Map,Sa=new Map,zn=[],V1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function od(t,l){switch(t){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":ba.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(l.pointerId)}}function xa(t,l,n,e,a,i){return t===null||t.nativeEvent!==i?(t={blockedOn:l,domEventName:n,eventSystemFlags:e,nativeEvent:i,targetContainers:[a]},l!==null&&(l=Jn(l),l!==null&&cd(l)),t):(t.eventSystemFlags|=e,l=t.targetContainers,a!==null&&l.indexOf(a)===-1&&l.push(a),t)}function w1(t,l,n,e,a){switch(l){case"focusin":return bn=xa(bn,t,l,n,e,a),!0;case"dragenter":return Sn=xa(Sn,t,l,n,e,a),!0;case"mouseover":return xn=xa(xn,t,l,n,e,a),!0;case"pointerover":var i=a.pointerId;return ba.set(i,xa(ba.get(i)||null,t,l,n,e,a)),!0;case"gotpointercapture":return i=a.pointerId,Sa.set(i,xa(Sa.get(i)||null,t,l,n,e,a)),!0}return!1}function sd(t){var l=Kn(t.target);if(l!==null){var n=Q(l);if(n!==null){if(l=n.tag,l===13){if(l=H(n),l!==null){t.blockedOn=l,Ef(t.priority,function(){fd(n)});return}}else if(l===31){if(l=q(n),l!==null){t.blockedOn=l,Ef(t.priority,function(){fd(n)});return}}else if(l===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hi(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var n=nf(t.nativeEvent);if(n===null){n=t.nativeEvent;var e=new n.constructor(n.type,n);eu=e,n.target.dispatchEvent(e),eu=null}else return l=Jn(n),l!==null&&cd(l),t.blockedOn=n,!1;l.shift()}return!0}function dd(t,l,n){Hi(t)&&n.delete(l)}function K1(){af=!1,bn!==null&&Hi(bn)&&(bn=null),Sn!==null&&Hi(Sn)&&(Sn=null),xn!==null&&Hi(xn)&&(xn=null),ba.forEach(dd),Sa.forEach(dd)}function Yi(t,l){t.blockedOn===l&&(t.blockedOn=null,af||(af=!0,A.unstable_scheduleCallback(A.unstable_NormalPriority,K1)))}var Gi=null;function hd(t){Gi!==t&&(Gi=t,A.unstable_scheduleCallback(A.unstable_NormalPriority,function(){Gi===t&&(Gi=null);for(var l=0;l<t.length;l+=3){var n=t[l],e=t[l+1],a=t[l+2];if(typeof e!="function"){if(ef(e||n)===null)continue;break}var i=Jn(n);i!==null&&(t.splice(l,3),l-=3,nc(i,{pending:!0,data:a,method:n.method,action:e},e,a))}}))}function je(t){function l(f){return Yi(f,t)}bn!==null&&Yi(bn,t),Sn!==null&&Yi(Sn,t),xn!==null&&Yi(xn,t),ba.forEach(l),Sa.forEach(l);for(var n=0;n<zn.length;n++){var e=zn[n];e.blockedOn===t&&(e.blockedOn=null)}for(;0<zn.length&&(n=zn[0],n.blockedOn===null);)sd(n),n.blockedOn===null&&zn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(e=0;e<n.length;e+=3){var a=n[e],i=n[e+1],u=a[wt]||null;if(typeof i=="function")u||hd(n);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(a=i,u=i[wt]||null)c=u.formAction;else if(ef(a)!==null)continue}else c=u.action;typeof c=="function"?n[e+1]=c:(n.splice(e,3),e-=3),hd(n)}}}function md(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return a=u})},focusReset:"manual",scroll:"manual"})}function l(){a!==null&&(a(),a=null),e||setTimeout(n,20)}function n(){if(!e&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,a=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(n,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),a!==null&&(a(),a=null)}}}function uf(t){this._internalRoot=t}Qi.prototype.render=uf.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(h(409));var n=l.current,e=cl();id(n,e,t,l,null,null)},Qi.prototype.unmount=uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;id(t.current,2,null,t,null,null),Si(),l[wn]=null}};function Qi(t){this._internalRoot=t}Qi.prototype.unstable_scheduleHydration=function(t){if(t){var l=Af();t={blockedOn:null,target:t,priority:l};for(var n=0;n<zn.length&&l!==0&&l<zn[n].priority;n++);zn.splice(n,0,t),n===0&&sd(t)}};var yd=W.version;if(yd!=="19.2.4")throw Error(h(527,yd,"19.2.4"));_.findDOMNode=function(t){var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(h(188)):(t=Object.keys(t).join(","),Error(h(268,t)));return t=E(l),t=t!==null?Z(t):null,t=t===null?null:t.stateNode,t};var J1={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Li=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Li.isDisabled&&Li.supportsFiber)try{De=Li.inject(J1),Pt=Li}catch{}}return Aa.createRoot=function(t,l){if(!B(t))throw Error(h(299));var n=!1,e="",a=zo,i=Ao,u=Eo;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(e=l.identifierPrefix),l.onUncaughtError!==void 0&&(a=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(u=l.onRecoverableError)),l=ed(t,1,!1,null,null,n,e,null,a,i,u,md),t[wn]=l.current,Qc(t),new uf(l)},Aa.hydrateRoot=function(t,l,n){if(!B(t))throw Error(h(299));var e=!1,a="",i=zo,u=Ao,c=Eo,f=null;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.formState!==void 0&&(f=n.formState)),l=ed(t,1,!0,l,n??null,e,a,f,i,u,c,md),l.context=ad(null),n=l.current,e=cl(),e=ki(e),a=cn(e),a.callback=null,fn(n,a,e),n=e,l.current.lanes=n,qe(l,n),Ml(l),t[wn]=l.current,Qc(t),new Qi(l)},Aa.version="19.2.4",Aa}var Td;function eh(){if(Td)return rf.exports;Td=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(W){console.error(W)}}return A(),rf.exports=nh(),rf.exports}var ah=eh();const d={bg:"#070b14",surface:"#0d1424",card:"#111d2e",border:"#1a2d45",accent:"#00c8ff",accent2:"#a855f7",accent3:"#10d98a",warn:"#f59e0b",danger:"#f43f5e",text:"#e8f0fe",muted:"#5a7499",soft:"#8ba4c4"},Dl=[{id:1,title:"מודל חישוב בסיסי",icon:"⚙️",hours:12,syllabus:"פרק 1 – 12 שעות",goals:["להכיר את מודל החישוב של משתנים ושינוי ערכים","להבין את האלגוריתם הסדרתי הפשוט","להכיר טיפוסי נתונים: int, float, double, char, enum","לדעת להשתמש באופרטורים חשבוניים, לוגיים ועל ביטים","להשתמש בפונקציות מתמטיות מספריית math.h","להכיר המרת טיפוסים (casting) ו-sizeof"],theory:`## מהו משתנה?

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
}`,traceTable:{headers:["שורה","a","b","פעולה","תוצאה"],rows:[["int a=10, b=3","10","3","הגדרה","—"],["a + b","10","3","חיבור","13"],["a - b","10","3","חיסור","7"],["a * b","10","3","כפל","30"],["a / b","10","3","חילוק שלם","3 (לא 3.33!)"],["a % b","10","3","שארית","1"],["(float)a/b","10","3","casting → חילוק","3.3333"],["x=5; x++","—","—","קידום לאחר","מחזיר 5, ואז x=6"],["++x (x=6)","—","—","קידום לפני","x=7, מחזיר 7"]]},questions:[{q:"מה ההבדל בין int ל-double?",a:"int שומר מספרים שלמים בלבד (4 בתים), double שומר מספרים עשרוניים בדיוק גבוה (8 בתים). חילוק int/int מחזיר int."},{q:"מה ההבדל בין x++ ל-++x?",a:"x++ (postfix) מחזיר את הערך המקורי ואז מגדיל. ++x (prefix) מגדיל קודם ואז מחזיר. בהשמה: int a=x++ נותן a=ערן_ישן; int b=++x נותן b=ערך_חדש."},{q:"למה 7/2 שווה 3 ולא 3.5 בשפת C?",a:"כי שני האופרנדים הם int, לכן C מבצעת חילוק שלם ומשמיטה את השארית. כדי לקבל 3.5 צריך: (float)7/2 או 7.0/2."},{q:"מה עושה sizeof?",a:"מחזיר את מספר הבתים שהטיפוס או המשתנה תופס בזיכרון. שימושי לקוד נייד ולהקצאת זיכרון."},{q:"מה ההבדל בין ceil ל-floor?",a:"ceil עיגול למעלה (ceil(3.2)=4), floor עיגול למטה (floor(3.9)=3). שניהם מחזירים double."},{q:"מה תפקיד srand(time(NULL))?",a:"מאתחל את מחולל המספרים האקראיים עם זרע המבוסס על השעה הנוכחית. ללא זה, rand() יחזיר את אותה סדרת מספרים בכל הרצה."}],exercises:["כתוב תכנית שמחשבת היקף ושטח עיגול לפי רדיוס שמוגדר בקוד (π ≈ 3.14159).","כתוב תכנית שמחשבת מרחק בין שתי נקודות (x1,y1) ו-(x2,y2) באמצעות sqrt.","הגדר enum עם ימי השבוע (SUN=0 עד SAT=6). הדפס את הערך המספרי של יום שלישי.","כתוב תכנית שמחשבת את שורשי המשוואה הריבועית ax²+bx+c=0. השתמש ב-sqrt ו-fabs.","הדפס את גדלי כל טיפוסי הנתונים הבסיסיים באמצעות sizeof.","כתוב תכנית שמייצרת 10 מספרים אקראיים בתחום 1-100 ומחשבת את ממוצעם."],challenge:"כתוב מחשבון מדעי: קבל שני מספרים ואופרטור (+,-,*,/,%) מהמשתמש. חשב גם sqrt של כל אחד מהם, והדפס תוצאות בפורמט מסודר.",quiz:[{q:'מה יהיה הפלט של: int x=7, y=2; printf("%d", x/y);',options:["3.5","3","4","שגיאת קומפילציה"],correct:1},{q:"מה ההבדל בין float ל-double?",options:["אין הבדל","float = 4 בתים (7 ספרות), double = 8 בתים (15 ספרות)","double = 4 בתים, float = 8 בתים","float לא קיים ב-C"],correct:1},{q:'מה הפלט של: int x=5; printf("%d", x++);',options:["6","5","שגיאה","4"],correct:1},{q:"מה מחזיר sizeof(double)?",options:["4","2","8","16"],correct:2},{q:'מה הפלט של: printf("%d", 10 % 3);',options:["3","1","0","3.33"],correct:1},{q:"כדי לחשב שורש ריבועי ב-C, משתמשים ב:",options:["square(x)","sqrt(x) מ-math.h","Math.sqrt(x)","root(x)"],correct:1}]},{id:2,title:"קלט / פלט",icon:"💬",hours:6,syllabus:"פרק 2 – 6 שעות",goals:["להשתמש ב-printf לפלט מעוצב","להשתמש ב-scanf לקריאת קלט","לקרוא ולכתוב תווים בודדים (getchar/putchar)","להכיר את כל מציינות הטיפוס (%d, %f, %c, %s...)","לדעת לעצב פלט: רוחב שדה, עיגול, יישור","להבין ניתוב קלט/פלט"],theory:`## printf – פלט מעוצב

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
}`,traceTable:{headers:["פורמט","ערך","פלט מתקבל","הערה"],rows:[["%d","42","42","עשרוני רגיל"],["%o","255","377","אוקטלי"],["%x","255","ff","hex קטן"],["%X","255","FF","hex גדול"],["%f","3.14","3.140000","6 ספרות ברירת מחדל"],["%.2f","3.14159","3.14","2 ספרות אחרי הנקודה"],["%10d","42","        42","ימין, רוחב 10"],["%-10d","42","42        ","שמאל, רוחב 10"],["%e","12345.0","1.234500e+04","מדעי"]]},questions:[{q:"למה חייבים & לפני משתנה ב-scanf?",a:"scanf צריך לדעת לאן בזיכרון לכתוב את הנתון שנקרא. & מחזיר את כתובת הזיכרון של המשתנה. ללא & נשלח ערך המשתנה (שהוא זבל) כאילו היה כתובת, וזה גורם לשגיאת זיכרון."},{q:"מה ההבדל בין %f ל-%.2f ל-%8.3f?",a:"%f מדפיס 6 ספרות אחרי הנקודה. %.2f מדפיס בדיוק 2 ספרות. %8.3f מדפיס ברוחב שדה של 8, עם 3 ספרות אחרי הנקודה (מיושר ימינה)."},{q:"מה מחזיר scanf ולמה זה שימושי?",a:'scanf מחזיר את מספר הפריטים שנקראו בהצלחה. שימוש: if(scanf("%d",&x)!=1) לטיפול בקלט לא חוקי.'},{q:'למה כדאי לכתוב scanf(" %c", &c) עם רווח לפני %c?',a:"הרווח לפני %c גורם ל-scanf לדלג על whitespace (רווחים, טאבים, שורות חדשות) שנשארו מקריאה קודמת. ללא הרווח, %c עלול לקרוא את תו ה-newline שנשאר מה-Enter הקודם."}],exercises:["כתוב תכנית שמקבלת שם, ציון במתמטיקה וציון באנגלית ומדפיסה דוח מסודר בפורמט טבלאי.","כתוב תכנית שמדפיסה טבלת המרה בין מעלות צלזיוס (0,10,20,...,100) לפרנהייט.","קרא 4 מספרים שלמים בשורה אחת (scanf אחד) וחשב סכום ומכפלה.","כתוב תכנית שמדפיסה מספר שלם בשלושה בסיסים: עשרוני, אוקטלי והקסדצימלי.","קרא שני מספרים וכתוב פלט מיושר בעמודות (רוחב 10) כולל הסכום, ההפרש, המכפלה והמנה."],challenge:"כתוב תכנית שמקבלת ממוצעי 5 מקצועות ומדפיסה דוח ציונים מסודר עם ממוצע כולל, ציון מקסימלי ומינימלי, כשכל שדה מיושר בעמודות מסודרות.",quiz:[{q:"מה הפורמט להדפסת מספר ממשי עם בדיוק 3 ספרות אחרי הנקודה?",options:["%3f","%d.3","%.3f","%f(3)"],correct:2},{q:'מה הפלט של: printf("%o", 8);',options:["8","10","0x8","1000"],correct:1},{q:'מה הפלט של: printf("%X", 255);',options:["255","ff","FF","0xFF"],correct:2},{q:"בקריאת מחרוזת עם scanf, צריך & לפני המשתנה?",options:["כן תמיד","לא – שם מערך הוא כבר כתובת","תלוי בגודל","כן אבל רק ב-Windows"],correct:1},{q:"מה עושה %-10d בניגוד ל-%10d?",options:["מדפיס מספר שלילי","מדפיס עם יישור שמאלה","מדפיס ממולא בפסים","מדפיס ב-hex"],correct:1}]},{id:3,title:"מבוא לפיתוח אלגוריתמים",icon:"🧩",hours:4,syllabus:"פרק 3 – 4 שעות",goals:["לפרק בעיה מורכבת לתת-בעיות פשוטות","לבנות אלגוריתם שלב אחר שלב (top-down)","לכתוב אלגוריתם מילולי לפני קידוד","להבין את הקשר בין תת-בעיות לחלקי הפתרון","לדעת לזהות קלטים ופלטים של כל תת-בעיה"],theory:`## מהו אלגוריתם?

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
}`,traceTable:{headers:["שלב","תת-בעיה","פרמטרים","חישוב","תוצאה"],rows:[["1","circleArea(5)","r=5","π×5²","78.5398"],["2","circlePerimeter(5)","r=5","2×π×5","31.4159"],["3","average3(85,92,78)","a,b,c","(85+92+78)/3","85.00"],["4","finalGrade(85,95)","exam=85, hw=95","0.7×85+0.3×95","88.00"],["5","calcBMI(70,1.75)","w=70, h=1.75","70/1.75²","22.86"]]},questions:[{q:"מה ההבדל בין אלגוריתם מילולי לפסאודו-קוד?",a:"אלגוריתם מילולי כתוב בשפה טבעית (עברית/אנגלית) ופחות מדויק. פסאודו-קוד כתוב במבנה קרוב לקוד תכנות עם מבני בקרה ברורים, אך עדיין לא שפת תכנות ספציפית."},{q:"מה היתרון בפירוק לתת-בעיות?",a:"קוד קריא יותר, ניתן לבדוק כל תת-בעיה בנפרד, שימוש חוזר (reuse), חלוקת עבודה בין מפתחים, קל יותר לתחזוקה ותיקון שגיאות."},{q:"מה הצעד הראשון בפיתוח אלגוריתם?",a:"הבנת הבעיה: מה בדיוק מתבקש? מה הקלטים? מה הפלטים? מה מרחב הפתרונות? לפעמים כדאי לפתור דוגמה קונקרטית ביד לפני הכללה."},{q:"למה לא תמיד מספיק אלגוריתם סדרתי?",a:"אלגוריתם סדרתי (ללא תנאים ולולאות) לא יכול להתמודד עם מקרים שונים או כמות משתנה של נתונים. לדוגמה, למיין N מספרים ל-N כלשהו, חייבים לולאה."}],exercises:["כתוב אלגוריתם מילולי לחישוב ציון בגרות כולל בחינות בית ספריות ובחינות ממלכתיות.","פרק את הבעיה הבאה לתת-בעיות: 'כתוב תכנית שמנהלת מלאי חנות: הוסף מוצר, עדכן כמות, הצג מוצרים עם מלאי נמוך'.","כתוב פסאודו-קוד למציאת כל המספרים הראשוניים מ-1 עד N.","כתוב אלגוריתם מילולי לחישוב משכנתה: קלט=סכום, ריבית שנתית, מספר שנים; פלט=תשלום חודשי."],challenge:"בנה מחשבון BMI שלם: קבל גובה ומשקל, חשב BMI, קבע קטגוריה (Underweight<18.5, Normal 18.5-24.9, Overweight 25-29.9, Obese≥30), והצג הסבר ועצה לכל קטגוריה.",quiz:[{q:"מה השלב הנכון לכתיבת קוד C בפיתוח אלגוריתם?",options:["הצעד הראשון","לאחר הבנת הבעיה ותכנון פסאודו-קוד","לא צריך פסאודו-קוד","אחרי הבדיקה"],correct:1},{q:"מה גישת Top-Down?",options:["כתיבת קוד מהשורה הראשונה","פירוק הבעיה הגדולה לתת-בעיות קטנות","בדיקה לפני כתיבה","תיעוד לאחר קידוד"],correct:1},{q:"מה חייב לכלול כל אלגוריתם?",options:["לולאות","פונקציות","סופיות ובהירות","קבצי header"],correct:2}]},{id:4,title:"ביצוע מותנה",icon:"🔀",hours:6,syllabus:"פרק 4 – 6 שעות",goals:["להשתמש ב-if בגרסה פשוטה, מפוצלת ומרובדת","להבין תנאים בוליאניים ואופרטורים לוגיים","לבנות טבלאות אמת ל-AND, OR, NOT","לדעת מתי להשתמש ב-switch-case","להכיר אופרטור תלתי (ternary)"],theory:`## ביצוע מותנה – if

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
}`,traceTable:{headers:["ציון",">=90?",">=80?",">=70?",">=60?","פלט"],rows:[["95","✓","–","–","–","מצוין (A)"],["83","✗","✓","–","–","טוב מאוד (B)"],["72","✗","✗","✓","–","טוב (C)"],["65","✗","✗","✗","✓","מספיק (D)"],["45","✗","✗","✗","✗","נכשל (F)"],["-5","–","–","–","–","ציון לא חוקי!"]]},questions:[{q:"מה ההבדל בין = ל-== ב-C?",a:"= היא אופרטור הצבה (משנה ערך המשתנה). == היא אופרטור השוואה (בודק שוויון). if(x=5) תמיד נכון כי ההצבה מחזירה 5 (לא-אפס). if(x==5) נכון רק אם x שווה ל-5."},{q:"מה קורה אם שוכחים break ב-switch?",a:"Fall-through: הביצוע ממשיך לcase הבא ללא בדיקת הערך. לפעמים זה מכוון (case6: case7: printf('סוף שבוע')), אך לרוב זו שגיאה."},{q:"מתי עדיף switch על if-else?",a:"switch עדיף כשבודקים ערך שלם אחד מול מספר ערכים ספציפיים – קוד קריא יותר ולעיתים מהיר יותר. if-else הכרחי לתנאים מורכבים, טווחים, ממשיים, מחרוזות."},{q:"מהי התנהגות short-circuit evaluation ב-C?",a:"ב-A&&B, אם A שקר, B לא נבדק כלל. ב-A||B, אם A נכון, B לא נבדק. שימושי: if(ptr!=NULL && ptr->val>0) – אם ptr=NULL, הביטוי השני לא מוערך ולא יגרום לשגיאה."}],exercises:["כתוב תכנית שמקבלת שנה ומדפיסה אם היא שנה מעוברת (מתחלקת ב-4 אבל לא ב-100, או מתחלקת ב-400).","כתוב מחשבון הנחות לכרטיסי קולנוע: ילד עד 12 = 50%, סטודנט עם תעודה = 30%, ותיק מעל 65 = 40%, אחרים = 0%.","קבל 3 מספרים ומצא את הגדול, האמצעי והקטן ביניהם.","כתוב תכנית שמקבלת שלוש צלעות ומדפיסה: לא משולש / שווה-צלעות / שווה-שוקיים / כללי.","כתוב תכנית שממירה ציון מספרי לציון אות (A-F) ומדפיסה גם הכוונה ('כל הכבוד!', 'עוד קצת מאמץ' וכו').","כתוב מנוע חישוב מס הכנסה: עד 75,000₪ = 10%, 75,001-214,000₪ = 14%, מעל 214,000₪ = 20%."],challenge:"כתוב משחק 'אבן-נייר-מספריים': קבל בחירת שני שחקנים (1=אבן, 2=נייר, 3=מספריים), קבע מנצח, הצג הסבר (מספריים חותכות נייר, נייר עוטף אבן, אבן שוברת מספריים).",quiz:[{q:"מה הפלט של: int x=5; if(x=10) printf('yes'); else printf('no');",options:["no","yes","שגיאת קומפילציה","אין פלט"],correct:1},{q:"מה יגרום לfall-through ב-switch?",options:["שימוש ב-default","שכחת break","ערך לא מוגדר ב-case","שגיאת syntax"],correct:1},{q:'מה הפלט של: printf("%d", (7>3) && (2<1));',options:["1","0","שגיאה","true"],correct:1},{q:"מה מגבלת switch ב-C?",options:["עובד רק עם מספרים שלמים וchar","עובד רק עם float","מגבלת 5 cases","אין מגבלה"],correct:0},{q:'מה הפלט של: int a=3,b=5; printf("%d", (a>b)?a:b);',options:["3","5","1","0"],correct:1}]},{id:5,title:"נכונות אלגוריתמים",icon:"✅",hours:4,syllabus:"פרק 5 – 4 שעות",goals:["להבין את מושג נכונות אלגוריתם","להכיר שגיאות syntax, runtime ולוגיות","לדעת לבנות קלטי בדיקה (כולל ערכי גבול)","לאמת אלגוריתם עם טבלת מעקב","להכיר את חשיבות תיעוד תחום הקלטים החוקיים"],theory:`## נכונות אלגוריתם

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
}`,traceTable:{headers:["בדיקה","קלט","תוצאה צפויה","תוצאה בפועל","תקין?"],rows:[["ערך רגיל","safeSquareRoot(16)","4.00","4.00","✓"],["ערך גבולי","safeSquareRoot(0)","0.00","0.00","✓"],["קלט לא חוקי","safeSquareRoot(-4)","שגיאה","הדפסת שגיאה","✓"],["חלוקה רגילה","safeDivide(10,4)","2.50","2.50","✓"],["חלוקה באפס","safeDivide(10,0)","שגיאה","הדפסת שגיאה","✓"],["שגיאה לוגית","wrongAverage(4,8)","6","8 (!)","✗"],["תוקן","correctAverage(4,8)","6","6","✓"]]},questions:[{q:"מה ההבדל בין שגיאת תחביר לשגיאה לוגית?",a:"שגיאת תחביר מונעת קומפילציה ומדווחת על ידי המהדר עם מיקום. שגיאה לוגית מאפשרת הידור והרצה אך הקוד נותן תוצאה שגויה – על המפתח לאתר אותה."},{q:"מה זה off-by-one error?",a:"שגיאה שבה לולאה מתבצעת פעם אחת יותר או פחות מהנדרש. דוגמה: for(i=0; i<=n; i++) כשצריך i<n. תוצאה: גלישת מערך או חישוב שגוי."},{q:"אילו קלטי בדיקה חשוב לבדוק תמיד?",a:"ערכים גבוליים (מינימום/מקסימום), ערך 0, מספרים שליליים, ערכים מחוץ לתחום, קלט ריק, ערכים מיוחדים (כגון מספר ראשוני כשמחפשים ראשוניים)."},{q:"למה חשוב לתעד את תחום הקלטים החוקיים?",a:"כדי שמשתמשי הפונקציה ידעו מה להעביר, כדי שיהיה ברור מה הפונקציה אמורה לעשות, ולסייע באיתור שגיאות. תנאי קדם (precondition) ותנאי אחר (postcondition)."}],exercises:['מצא את השגיאה/ות בקוד הבא: for(i=1; i<=10; i++) sum = i; printf("%d", sum);',"כתוב פונקציה safeLog(x) שמחשבת לוגריתם טבעי ובודקת שהקלט חיובי.","כתוב בדיקות לפונקציה שמחשבת ממוצע: בחר לפחות 5 קלטי בדיקה ונמק כל אחד.","כתוב פונקציה שמחשבת פקטוריאל עם בדיקות (קלטים לא חוקיים: שליליים, גדולים מ-20).","מצא את כל השגיאות בקוד: int max(int a, int b) { if (a > b) return a; return a; }"],challenge:"כתוב ספריה של פונקציות בטוחות: safeInput(min, max) שקוראת int בתחום נתון, safeDiv, safeSqrt, safeMod – כל אחת עם בדיקות מתאימות ותיעוד מלא.",quiz:[{q:"שגיאה לוגית היא:",options:["שגיאת תחביר שמונעת קומפילציה","שגיאה שגורמת לקריסה בזמן ריצה","קוד שרץ אך נותן תוצאה שגויה","שגיאת זיכרון"],correct:2},{q:"מה off-by-one error?",options:["טעות בערך הראשוני","לולאה שרצה פעם אחת יותר או פחות","חלוקה באפס","גלישת מחסנית"],correct:1},{q:"מה הפלט של: int x=a+b/2 כש-a=4, b=8?",options:["6","8","4","2"],correct:1},{q:"למה חשוב לבדוק ערכים גבוליים?",options:["כי הם הנפוצים","כי שגיאות מתרחשות לרוב בקצוות התחום","כדי לחסוך זמן","אין סיבה מיוחדת"],correct:1}]},{id:6,title:"לולאות",icon:"🔄",hours:8,syllabus:"פרק 6 – 8 שעות",goals:["להשתמש ב-while, do-while ו-for","לדעת לבנות מונים, צוברים ומכפלים","להשתמש בזקיף לסיום לולאה","לבנות לולאות מקוננות","להשתמש ב-switch-case","להבחין בין סוגי הלולאות ולבחור הנכון"],theory:`## עקרון הביצוע החוזר

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
}`,traceTable:{headers:["i","sum (לפני)","sum += i","sum (אחרי)","תנאי i<=10"],rows:[["1","0","0+1","1","✓"],["2","1","1+2","3","✓"],["3","3","3+3","6","✓"],["4","6","6+4","10","✓"],["5","10","10+5","15","✓"],["...","...","...","...","✓"],["10","45","45+10","55","✓"],["11","55","—","55","✗ יציאה"]]},questions:[{q:"מה ההבדל העיקרי בין while ל-do-while?",a:"while בודק את התנאי לפני הביצוע הראשון – יתכן שהגוף לא יתבצע כלל. do-while מבצע את הגוף פעם אחת לפחות, ורק אחר כך בודק את התנאי."},{q:"מה זה זקיף (sentinel) ולמה משתמשים בו?",a:"ערך מיוחד שמסמן סוף קלט (לדוגמה -1 לרשימת ציונים, 0 לרשימת מחירים). משמש כשלא יודעים מראש כמה ערכים יוכנסו."},{q:"למה מכפיל מאותחל ל-1 ולא ל-0?",a:"כי מכפלה של כל מספר ב-0 היא 0. כדי שכפל יצבור נכון, צריך לאתחל ל-1 (יסוד הכפל). אם היינו מאתחלים ל-0, כל המכפלות יהיו 0."},{q:"כמה פעמים רץ: for(i=1; i<=N; i+=2)?",a:"⌈N/2⌉ פעמים. לדוגמה: N=10 → i=1,3,5,7,9 → 5 פעמים. N=9 → i=1,3,5,7,9 → 5 פעמים."},{q:"מה לולאה אינסופית ואיך נגרמת?",a:"לולאה שתנאי הסיום שלה לעולם לא מתקיים. גורמים: שכחת עדכון המשתנה (i++), תנאי שתמיד נכון (while(1)), שגיאה לוגית בתנאי."}],exercises:["כתוב תכנית שמחשבת סכום הספרות של מספר שלם חיובי (לדוגמה 1234 → 10).","כתוב תכנית שקוראת ציונים עד שמכניסים -1 ומדפיסה: מספר ציונים, ממוצע, מקסימום, מינימום.","כתוב לולאות מקוננות שמציירות ריבוע 5×5 של כוכביות.","כתוב תכנית שמחשבת n! (פקטוריאל) בלולאה לקלט n מהמשתמש.","כתוב תכנית שבודקת אם מספר הוא ראשוני (prime) – בדוק חלוקה ב-2 עד sqrt(n).","כתוב טבלת כפל שלמה (1×1 עד 10×10) עם כותרות שורה ועמודה מסודרות."],challenge:"כתוב תכנית שמשחקת 'ניחוש המספר': המחשב בוחר מספר אקראי 1-100, המשתמש מנחש, התכנית מדפיסה 'גדול יותר' / 'קטן יותר' עד שמנחשים נכון, ובסוף מציגה את מספר הניסיונות.",quiz:[{q:"כמה פעמים רץ: for(i=0; i<5; i++)?",options:["4","5","6","אינסוף"],correct:1},{q:"מה ההבדל בין while ל-do-while?",options:["while מהיר יותר","do-while מבצע לפחות פעם אחת","for יכול להחליף רק while","אין הבדל"],correct:1},{q:"מה הערך הנכון לאתחל בו מכפיל?",options:["0","1","-1","N"],correct:1},{q:'מה הפלט של: for(i=10; i>0; i-=3) printf("%d ",i);',options:["10 7 4 1","10 7 4","10 7 4 1 -2","10 7 4 2"],correct:0},{q:"מה אלגוריתם הזקיף?",options:["בדיקת ערכי גבול","ערך מיוחד שמסמן סוף קלט ללולאה","משתנה גלובלי","בדיקת שגיאות"],correct:1},{q:"לולאת for(;;) ב-C היא:",options:["שגיאת תחביר","לולאה אינסופית","לולאה שרצה 0 פעמים","לולאה שרצה פעם אחת"],correct:1}]},{id:7,title:"פונקציות",icon:"🔧",hours:8,syllabus:"פרק 7",goals:["לפרק תכנית לפונקציות","להבין פרמטרים, ארגומנטים וערכי החזרה","להכיר scope מקומי וגלובלי","להבין מודל ה-Stack","לכתוב אבטיפוסים (prototypes)"],theory:`## מהי פונקציה?

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
}`,traceTable:{headers:["קריאה","Stack Frame","חישוב","ערך מוחזר"],rows:[["max(7,12)","a=7, b=12","(7>12)?7:12","12"],["average([85..],7)","arr=..., n=7","sum=604/7","86.28"],["sumDigits(123)","n=123","3+2+1","6"],["isPrime(7)","n=7","2,3 לא מחלקים","1 (כן)"],["isPrime(9)","n=9","9%3==0","0 (לא)"]]},questions:[{q:"מה ההבדל בין פרמטר לארגומנט?",a:"פרמטר הוא המשתנה בהגדרת הפונקציה (int add(int a, int b) – a,b הם פרמטרים). ארגומנט הוא הערך שמועבר בקריאה (add(3,4) – 3,4 הם ארגומנטים)."},{q:"מה עניין ה-Stack בפונקציות?",a:"בכל קריאה לפונקציה נוצר stack frame עם המשתנים המקומיים שלה. כשהפונקציה מסתיימת, ה-frame נהרס. לכן משתנים מקומיים לא קיימים לאחר החזרה מהפונקציה."},{q:"מדוע C עובדת pass-by-value?",a:"הפונקציה מקבלת עותק של הארגומנטים, לא את המשתנים המקוריים. לכן שינוי פרמטר בתוך הפונקציה לא משפיע על המשתנה המקורי ב-main."}],exercises:["כתוב פונקציה powerInt(base, exp) שמחשבת בחזקה שלמה ללא pow.","כתוב פונקציה gcd(a,b) שמחשבת מחלק משותף גדול לפי אלגוריתם אוקלידס.","כתוב פונקציה isPalindrome(n) שבודקת אם מספר שלם הוא פלינדרום.","כתוב פונקציות sumArray, minArray, maxArray, rangeArray לעבודה עם מערכים."],challenge:"כתוב ספריה מתמטית: gcd, lcm, isPrime, nextPrime, countPrimes(n). השתמש בכל הפונקציות ב-main להדגמה.",quiz:[{q:"מה מחזירה פונקציה void?",options:["0","NULL","לא מחזירה כלום","1"],correct:2},{q:"מה pass-by-value?",options:["העברת כתובת המשתנה","העברת עותק של הערך","שינוי המשתנה המקורי","החזרת מספר ערכים"],correct:1},{q:"מה אבטיפוס (prototype)?",options:["הגדרת פונקציה","הצהרה על פונקציה לפני שימוש בה","סוג החזרה בלבד","פונקציה ריקה"],correct:1}]},{id:8,title:"מערכים חד-ממדיים",icon:"📦",hours:8,syllabus:"פרק 8",goals:["להגדיר ולאתחל מערך","לגשת לאלמנטים עם אינדקסים","לעבד מערך בלולאה","להעביר מערך לפונקציה","לעבוד עם מחרוזות (מערכי char)"],theory:`## מהו מערך?

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
}`,traceTable:{headers:["i","arr[i]","arr[i]>max?","max עדכני"],rows:[["init","85","init","85"],["1","92","92>85 ✓","92"],["2","78","78>92 ✗","92"],["3","96","96>92 ✓","96"],["4","88","88>96 ✗","96"],["5","74","74>96 ✗","96"],["6","91","91>96 ✗","96"],["→ תוצאה","","","96"]]},questions:[{q:"מה האינדקס הראשון ומה האחרון במערך בגודל N?",a:"ראשון: 0, אחרון: N-1. מערך grades[10] → ראשון grades[0], אחרון grades[9]."},{q:"למה מעבירים מערך לפונקציה ללא & בעוד int מועבר עם &?",a:"שם מערך ב-C הוא כתובת האלמנט הראשון שלו. לכן לא צריך &. int הוא ערך, ולהעברה לפי reference צריך &."}],exercises:["כתוב פונקציה secondMax(arr, n) שמחזירה את המקסימום השני.","כתוב פונקציה countOdd(arr, n) שסופרת מספרים אי-זוגיים.","כתוב פונקציה shiftLeft(arr, n) שמזיזה כל אלמנט שמאלה בעמדה אחת.","כתוב פונקציה mergeSorted(a, na, b, nb, result) שממזגת שני מערכים ממוינים."],challenge:"ממש מנגנון שמקבל מערך ציונים, מחשב ממוצע, סטיית תקן, ומדפיס לכל ציון את מרחקו מהממוצע בסטיות תקן (Z-score).",quiz:[{q:"מה האינדקס האחרון במערך int arr[8]?",options:["8","7","9","0"],correct:1},{q:"כשמעבירים מערך לפונקציה, שינויים בפונקציה:",options:["לא משפיעים על המקורי","משפיעים על המקורי","תלוי בטיפוס","שגיאת קומפילציה"],correct:1}]},{id:9,title:"מערכים דו-ממדיים",icon:"🗂️",hours:6,syllabus:"פרק 9",goals:["להגדיר ולאתחל מטריצה","לגשת לאלמנטים עם שני אינדקסים","לעבד מטריצה בלולאות מקוננות","לחפש סדרתית ובינארית במערכים"],theory:`## מטריצה (מערך דו-ממדי)

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
}`,traceTable:{headers:["שלב","low","high","mid","arr[mid]","פעולה"],rows:[["1","0","9","4","16","16<23 → low=5"],["2","5","9","7","56","56>23 → high=6"],["3","5","6","5","23","23==23 ✓ נמצא!"]]},questions:[{q:"מה ההבדל בין חיפוש סדרתי לבינארי?",a:"סדרתי: בודק כל אלמנט בסדר, O(n), עובד על כל מערך. בינארי: חוצה לחצי בכל שלב, O(log n), מחייב מערך ממוין."}],exercises:["כתוב פונקציה שמחשבת את סכום כל עמודה במטריצה.","כתוב פונקציה שבודקת אם מטריצה ריבועית היא סימטרית.","ממש כפל שתי מטריצות (n×m) × (m×k)."],challenge:"ממש שחמט: צור מטריצה 8×8, הצב קצת כלים, כתוב פונקציה שבודקת מהלכים חוקיים לרץ.",quiz:[{q:"מה הסיבוכיות של חיפוש בינארי?",options:["O(n)","O(n²)","O(log n)","O(1)"],correct:2},{q:"מה דרוש לחיפוש בינארי?",options:["מערך ממוין","מערך עם מספרים ייחודיים","מערך גדול","אין דרישה"],correct:0}]},{id:10,title:"מצביעים",icon:"👆",hours:8,syllabus:"פרק 10",goals:["להבין מהו מצביע וכיצד הוא עובד","להשתמש ב-& ו-*","להעביר פרמטרים לפי reference","להכיר שקילות מערך-מצביע"],theory:`## מהו מצביע?

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
}`,traceTable:{headers:["שורה","x (0x100)","y (0x104)","*a","*b","temp"],rows:[["קריאת swap(&x,&y)","3","7","→x=3","→y=7","—"],["temp = *a","3","7","3","7","3"],["*a = *b","7","7","7","7","3"],["*b = temp","7","3","7","3","3"],["חזרה מ-swap","7","3","—","—","—"]]},questions:[{q:"מה ההבדל בין & ל-* בהגדרת מצביע?",a:"& (address-of): מחזיר את כתובת המשתנה. * בהגדרה: מגדיר שהמשתנה הוא מצביע. * בשימוש (dereference): מחזיר את הערך שבכתובת. int *p=&x: p מכיל כתובת x, *p מחזיר ערך x."}],exercises:["כתוב פונקציה שמקבלת מחרוזת ומחזירה מצביע לתו הראשון שאינו רווח.","כתוב פונקציה בטוחה לחיפוש בינארי שמחזירה NULL אם לא נמצא."],challenge:"ממש qsort בעצמך עם פונקציית השוואה כמצביע לפונקציה.",quiz:[{q:"אם int *p = &x, מה *p?",options:["כתובת x","ערך x","כתובת p","NULL"],correct:1}]},{id:11,title:"מחרוזות",icon:"📝",hours:6,syllabus:"פרק 11",goals:["להבין ייצוג מחרוזות כמערך char עם \\0","להשתמש בפונקציות string.h","לעבד מחרוזות (חיפוש, החלפה, ספירה)","להשתמש בפונקציות ctype.h"],theory:`## מחרוזות ב-C

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
}`,traceTable:{headers:["פעולה","s1 לפני","s1 אחרי","תוצאה"],rows:[['strlen("Hello")',"Hello","—","5"],['strcat(s1," World")',"Hello","Hello World","—"],['strcmp("abc","abc")',"—","—","0 (שוות)"],['strcmp("abc","abd")',"—","—","-1 (abc<abd)"],['isPalindrome("racecar")',"—","—","1 (כן)"],['isPalindrome("hello")',"—","—","0 (לא)"]]},questions:[{q:"מה \\0 ולמה חשוב?",a:"תו null (ערך ASCII 0) שמסמן סוף מחרוזת ב-C. פונקציות כמו strlen, printf('%s') מחפשות \\0 כדי לדעת היכן המחרוזת מסתיימת. ללא \\0 תהיה גלישה מחוץ לגבולות."},{q:"מה מחזיר strcmp כשהמחרוזות שוות? כשהראשונה קטנה?",a:"0 כשהן שוות. ערך שלילי כשהראשונה קטנה לקסיקוגרפית. ערך חיובי כשהראשונה גדולה."}],exercises:["כתוב פונקציה שממירה מחרוזת לCamelCase.","כתוב פונקציה שסופרת הופעות של תו במחרוזת.","כתוב פונקציה שמחליפה כל הופעה של תת-מחרוזת באחרת."],challenge:"ממש פונקציה שמנתחת ביטוי מתמטי פשוט כמחרוזת ('3+4*2') ומחשבת את התוצאה לפי סדר פעולות.",quiz:[{q:"מה מחזיר strlen('Hello')?",options:["6","5","4","0"],correct:1},{q:"מה מחזיר strcmp('abc','abc')?",options:["1","0","-1","true"],correct:1}]},{id:12,title:"מיון וחיפוש",icon:"🔍",hours:8,syllabus:"פרק 12",goals:["לממש מיון בועות (Bubble Sort)","לממש מיון הכנסה (Insertion Sort)","לממש מיון בחירה (Selection Sort)","לממש חיפוש בינארי","להבין סיבוכיות O(n), O(n²), O(log n)"],theory:`## אלגוריתמי מיון

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
}`,traceTable:{headers:["מעבר i","מערך לפני","החלפות","מערך אחרי"],rows:[["i=0","[64,25,12,22,11]","64↔25, 64↔12, 64↔22, 64↔11","[25,12,22,11,64]"],["i=1","[25,12,22,11,64]","25↔12, 25↔22, 25↔11","[12,22,11,25,64]"],["i=2","[12,22,11,25,64]","22↔11","[12,11,22,25,64]"],["i=3","[12,11,22,25,64]","12↔11","[11,12,22,25,64]"],["i=4","[11,12,22,25,64]","—","[11,12,22,25,64] ✓"]]},questions:[{q:"מה הסיבוכיות של Bubble Sort ולמה?",a:'O(n²) כי יש לולאה מקוננת: הלולאה החיצונית רצה n-1 פעמים, הפנימית עד n-1 פעמים. סה"כ ~n²/2 השוואות.'}],exercises:["ממש Insertion Sort על מערך מחרוזות.","כתוב פונקציה שבודקת כמה החלפות דרושות ב-Bubble Sort.","ממש Merge Sort."],challenge:"ממש counting sort (O(n+k)) ובדוק ביצועים מול bubble sort על מערך של 10,000 איברים.",quiz:[{q:"מה הסיבוכיות של חיפוש בינארי?",options:["O(n)","O(n²)","O(log n)","O(1)"],correct:2},{q:"מה יתרון Insertion Sort?",options:["תמיד מהיר מ-Quick Sort","יעיל על מערכים כמעט-ממוינים","O(n log n) בכל מקרה","לא דורש זיכרון"],correct:1}]},{id:13,title:"מבנים ואיגודים",icon:"🏗️",hours:6,syllabus:"פרק 13",goals:["להגדיר struct עם שדות מטיפוסים שונים","ליצור ולגשת למבנים","להשתמש ב-typedef","לעבוד עם מצביעים למבנים (->)","להבין union"],theory:`## struct – מבנה נתונים

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
}`,traceTable:{headers:["שם","גיל","ציון","הטוב ביותר?"],rows:[["Alice","17","92.5",""],["Bob","18","88.0",""],["Carol","17","96.0","✓ מקסימום"],["David","19","78.5",""],["Eve","17","94.0",""]]},questions:[{q:"מה ההבדל בין . ל-> בגישה לשדות מבנה?",a:". משמש עם משתנה מסוג struct ישירות (s.name). -> משמש עם מצביע למבנה (p->name), שקול ל-(*p).name."}],exercises:["הגדר struct Rectangle ופונקציות area, perimeter.","מיין מערך Points לפי מרחק מהראשית."],challenge:"ממש מערך dynamic של Students עם malloc, כולל הוספה, מחיקה וחיפוש לפי שם.",quiz:[{q:"אם Student *p, איך ניגשים לשדה grade?",options:["p.grade","p->grade","*p.grade","&p.grade"],correct:1}]},{id:14,title:"יחידות ספרייה ומאקרו",icon:"📚",hours:4,syllabus:"פרק 14",goals:["להבין מבנה קבצי header ומימוש","לכתוב מאקרו נכון עם סוגריים","לדעת הבדלים בין מאקרו לפונקציה","להשתמש בהידור מותנה (#ifdef)"],theory:`## ספריות ב-C

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
}`,traceTable:{headers:["מאקרו","קלט","החלפה","תוצאה"],rows:[["SQUARE(5)","5","((5)*(5))","25"],["SQUARE(2+3)","2+3","((2+3)*(2+3))","25 ✓"],["BAD_SQUARE(2+3)","2+3","2+3*2+3","11 ✗"],["MAX(7,12)","7,12","((7)>(12)?(7):(12))","12"],["ABS(-5)","-5","((-5)>=0?(-5):-(-5))","5"]]},questions:[{q:"למה מאקרו SQUARE(x) חייב להיות ((x)*(x)) עם סוגריים כפולים?",a:"הסוגריים הפנימיים מגנים על x: SQUARE(2+3) → ((2+3)*(2+3))=25 ולא 2+3*2+3=11. הסוגריים החיצוניים מגנים על התוצאה כשנמצאת בתוך ביטוי."}],exercises:["כתוב מאקרו CLAMP(x,lo,hi) שמחזיר x מוגבל לתחום [lo,hi].","כתוב מאקרו IS_EVEN(n) שבודק אם מספר זוגי.","צור קובץ header math_utils.h עם מאקרו ואבטיפוסים."],challenge:"ממש ספרייה statistics.h עם פונקציות mean, variance, stddev ומאקרו שימושיים.",quiz:[{q:"מה #ifndef MYLIB_H משמש ל?",options:["בדיקת גרסה","מניעת הכללה כפולה של header","הגדרת macro","ייבוא ספרייה"],correct:1}]},{id:15,title:"הקצאת זיכרון דינמית",icon:"💾",hours:6,syllabus:"פרק 15",goals:["להבין הבדל Stack ו-Heap","להשתמש ב-malloc, calloc, realloc","לשחרר זיכרון עם free","להימנע מ-memory leaks"],theory:`## Stack לעומת Heap

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
}`,traceTable:{headers:["פעולה","זיכרון (Heap)","ptr","הערה"],rows:[["malloc(n×size)","מוקצה לא מאופס","כתובת חוקית","בדוק != NULL"],["calloc(n,size)","מוקצה, מאופס ל-0","כתובת חוקית","בטוח יותר"],["realloc(p,size2)","מוגדל/כווץ","עשוי להשתנות!","שמור ptr חדש"],["free(ptr)","שוחרר","dangling!","ptr=NULL מייד"]]},questions:[{q:"מה ההבדל בין malloc ל-calloc?",a:"malloc מקצה זיכרון ולא מאפס אותו (תוכן: זבל). calloc מקצה ומאפס הכל ל-0. calloc בטוח יותר אך מעט איטי יותר בגלל האיפוס."}],exercises:["כתוב פונקציה createMatrix(rows, cols) עם malloc דו-ממדי.","ממש מחסנית דינמית (push/pop עם realloc)."],challenge:"ממש ספרייה dynamic_array עם: create, push_back, pop_back, get, size, free.",quiz:[{q:"מה מחזיר malloc כשנכשל?",options:["0","NULL","-1","שגיאה"],correct:1}]},{id:16,title:"קלט/פלט לקבצים",icon:"📁",hours:6,syllabus:"פרק 16",goals:["לפתוח וסגור קבצים (fopen/fclose)","לקרוא ולכתוב קובצי טקסט","לעבוד עם קבצים בינאריים","להבין EOF"],theory:`## עבודה עם קבצים

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
}`,traceTable:{headers:["פעולה","מצב קובץ","נתון","הערה"],rows:[['fopen("w")',"נוצר/מאופס","—","מוחק תוכן קיים!"],["fprintf","כתיבה","Alice 17 92.50",""],["fclose","סגור","—","חיוני!"],['fopen("r")',"פתוח לקריאה","—",""],["fscanf→name","קריאה",'"Alice"',""],["fgets","שורה שלמה","כולל \\n",""],["fread binary","בינארי","sizeof(Student)","מהיר"]]},questions:[{q:'מה ההבדל בין "w" ל-"a" בfopen?',a:'"w" פותח לכתיבה ומוחק כל תוכן קיים. "a" פותח לכתיבה ומוסיף לסוף הקובץ הקיים.'}],exercises:["כתוב תכנית שסופרת שורות, מילים ותווים בקובץ טקסט.","כתוב תכנית שמעתיקה קובץ (כולל בינארי)."],challenge:"ממש ספר טלפונים מבוסס קובץ: הוסף, מחק, חפש, הצג כל הרשומות.",quiz:[{q:"מה מחזיר fscanf בסוף קובץ?",options:["0","EOF (-1)","NULL","1"],correct:1}]},{id:17,title:"עבודה עם ביטים",icon:"⚡",hours:4,syllabus:"פרק 17",goals:["להבין ייצוג בינארי של מספרים","לבצע פעולות bitwise (&, |, ^, ~)","להשתמש בהזזות (<< ו->>)","לדעת לבדוק, להציב ולאפס ביטים ספציפיים"],theory:`## ייצוג בינארי

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
}`,traceTable:{headers:["פעולה","a (bin)","b (bin)","תוצאה (bin)","עשרוני"],rows:[["a & b","00000101","00001100","00000100","4"],["a | b","00000101","00001100","00001101","13"],["a ^ b","00000101","00001100","00001001","9"],["~a","00000101","—","11111010","-6"],["a << 2","00000101","—","00010100","20"],["b >> 1","00001100","—","00000110","6"]]},questions:[{q:"מה עושה a << n?",a:"מזיז את ביטי a שמאלה n מקומות, שקול להכפלה ב-2^n. a<<3 = a×8."}],exercises:["כתוב פונקציה שבודקת אם מספר הוא חזקת 2 באמצעות bitwise.","כתוב XOR swap ללא משתנה זמני."],challenge:"ממש bitset: מבנה נתונים לניהול 64 דגלים ב-unsigned long long.",quiz:[{q:"מה תוצאת 6 ^ 6?",options:["6","0","12","1"],correct:1}]},{id:18,title:"רקורסיה",icon:"🌀",hours:8,syllabus:"פרק 18",goals:["להבין עיקרון הרקורסיה","לזהות ולהגדיר תנאי עצירה","לעקוב אחרי stack קריאות","לממש אלגוריתמים רקורסיביים","לדעת מתי רקורסיה ומתי איטרציה"],theory:`## מהי רקורסיה?

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
}`,traceTable:{headers:["קריאה","n","base case?","חישוב","מחזיר"],rows:[["factorial(4)","4","לא","4 × factorial(3)","?"],["factorial(3)","3","לא","3 × factorial(2)","?"],["factorial(2)","2","לא","2 × factorial(1)","?"],["factorial(1)","1","✓","return 1","1"],["← חזרה לf(2)","2","","2 × 1","2"],["← חזרה לf(3)","3","","3 × 2","6"],["← חזרה לf(4)","4","","4 × 6","24"]]},questions:[{q:"מה קורה ללא תנאי עצירה ברקורסיה?",a:"Stack overflow – הפונקציה קוראת לעצמה אינסוף פעמים, ה-stack מתמלא ומתרחשת קריסת תכנית."},{q:"מתי עדיף רקורסיה על איטרציה?",a:"כשהמבנה של הבעיה טבעית רקורסיבית: עצים, מעבר על גרף, backtracking, divide-and-conquer. לעומת זאת, לצבירות פשוטות (sum, factorial) – איטרציה עדיפה בזיכרון ומהירות."}],exercises:["כתוב פונקציה רקורסיבית לחישוב סכום ספרות של מספר.","ממש reverse string רקורסיבית.","כתוב פונקציה רקורסיבית שבודקת פלינדרום.","ממש merge sort רקורסיבי."],challenge:"ממש Sudoku solver: קבל לוח 9×9 חלקי, מלא באמצעות backtracking רקורסיבי.",quiz:[{q:"מה Stack Overflow ברקורסיה?",options:["שגיאת תחביר","קריסה בגלל רקורסיה אינסופית שממלאת את ה-stack","שגיאת זיכרון heap","שגיאת קומפילציה"],correct:1},{q:"מה הפלט של factorial(0)?",options:["0","1","שגיאה","-1"],correct:1},{q:"מה הסיבוכיות של fibonacci(n) הנאיבי (ללא memoization)?",options:["O(n)","O(n²)","O(2^n)","O(log n)"],correct:2}]}];function ih({code:A}){const[W,j]=Ul.useState(!1),h=()=>{navigator.clipboard.writeText(A).catch(()=>{}),j(!0),setTimeout(()=>j(!1),1500)},B=Q=>Q.replace(/(#include|#define|#ifdef|#ifndef|#endif|int|float|char|double|void|return|if|else|while|for|do|switch|case|break|default|typedef|struct|union|const|unsigned|long|NULL|static)\b/g,"<k>$1</k>").replace(/("(?:[^"\\]|\\.)*")/g,"<s>$1</s>").replace(/(\/\/.*$)/g,"<c>$1</c>").replace(/\b(\d+\.?\d*[fFlLuU]*)\b/g,"<n>$1</n>").replace(/<k>/g,'<span style="color:#88c0d0;font-weight:600">').replace(/<\/k>/g,"</span>").replace(/<s>/g,'<span style="color:#a3be8c">').replace(/<\/s>/g,"</span>").replace(/<c>/g,'<span style="color:#616e88;font-style:italic">').replace(/<\/c>/g,"</span>").replace(/<n>/g,'<span style="color:#d08770">').replace(/<\/n>/g,"</span>");return p.jsxs("div",{style:{borderRadius:12,overflow:"hidden",border:"1px solid #1e3a5f"},children:[p.jsxs("div",{style:{background:"#0a1628",padding:"8px 16px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #1e3a5f"},children:[p.jsx("span",{style:{color:d.muted,fontSize:11,fontFamily:"monospace",letterSpacing:2},children:"C SOURCE"}),p.jsx("button",{onClick:h,style:{background:"transparent",border:`1px solid ${W?d.accent3:"#2a4a6a"}`,color:W?d.accent3:d.muted,cursor:"pointer",fontSize:11,fontWeight:700,padding:"3px 10px",borderRadius:5,fontFamily:"inherit"},children:W?"✓ הועתק":"COPY"})]}),p.jsx("pre",{style:{background:"#060d1a",color:"#cdd9e5",padding:"20px",margin:0,overflowX:"auto",fontSize:13,lineHeight:1.7,fontFamily:"'JetBrains Mono','Fira Code','Courier New',monospace",direction:"ltr",textAlign:"left"},children:A.split(`
`).map((Q,H)=>p.jsxs("div",{style:{display:"flex",gap:0,minHeight:"1.7em"},children:[p.jsx("span",{style:{color:"#2a4a6a",userSelect:"none",minWidth:36,paddingRight:12,fontSize:11,lineHeight:1.7,flexShrink:0,textAlign:"right"},children:H+1}),p.jsx("span",{dangerouslySetInnerHTML:{__html:B(Q)||" "}})]},H))})]})}function uh({data:A}){return A?p.jsx("div",{style:{overflowX:"auto",borderRadius:10,border:`1px solid ${d.border}`},children:p.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13,fontFamily:"monospace"},children:[p.jsx("thead",{children:p.jsx("tr",{children:A.headers.map((W,j)=>p.jsx("th",{style:{background:`${d.accent}18`,color:d.accent,padding:"10px 14px",textAlign:"center",borderBottom:`1px solid ${d.accent}33`,whiteSpace:"nowrap",fontFamily:"inherit",fontSize:12,letterSpacing:1},children:W},j))})}),p.jsx("tbody",{children:A.rows.map((W,j)=>p.jsx("tr",{style:{background:j%2===0?d.surface:d.card},children:W.map((h,B)=>p.jsx("td",{style:{padding:"9px 14px",textAlign:"center",color:h.includes("✓")?d.accent3:h.includes("✗")||h.includes("שגוי")?d.danger:d.soft,borderBottom:`1px solid ${d.border}`},children:h},B))},j))})]})}):null}function ch({quiz:A,onComplete:W}){const[j,h]=Ul.useState({}),[B,Q]=Ul.useState(!1),H=B?A.filter((q,O)=>j[O]===q.correct).length:0;return p.jsxs("div",{children:[A.map((q,O)=>p.jsxs("div",{style:{marginBottom:20,padding:18,background:d.surface,borderRadius:12,border:`1px solid ${d.border}`},children:[p.jsxs("div",{style:{fontWeight:700,marginBottom:14,color:d.text,fontSize:14},children:[p.jsxs("span",{style:{color:d.muted,fontSize:12,marginLeft:8},children:["Q",O+1]}),q.q]}),p.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:q.options.map((E,Z)=>{let D=d.card,J=d.border,vt=d.soft;return j[O]===Z&&!B&&(D=`${d.accent}18`,J=d.accent,vt=d.accent),B&&Z===q.correct&&(D=`${d.accent3}18`,J=d.accent3,vt=d.accent3),B&&j[O]===Z&&Z!==q.correct&&(D=`${d.danger}18`,J=d.danger,vt=d.danger),p.jsxs("button",{onClick:()=>!B&&h(Tt=>({...Tt,[O]:Z})),style:{textAlign:"right",padding:"10px 16px",background:D,border:`1px solid ${J}`,borderRadius:8,color:vt,cursor:B?"default":"pointer",fontFamily:"inherit",fontSize:13,transition:"all 0.15s"},children:[p.jsxs("span",{style:{color:d.muted,marginLeft:8,fontSize:11},children:[String.fromCharCode(65+Z),"."]}),E]},Z)})})]},O)),B?p.jsxs("div",{style:{padding:20,background:H===A.length?`${d.accent3}15`:H>=A.length*.6?`${d.warn}15`:`${d.danger}15`,borderRadius:12,border:`1px solid ${H===A.length?d.accent3:H>=A.length*.6?d.warn:d.danger}`,textAlign:"center"},children:[p.jsx("div",{style:{fontSize:36,marginBottom:6},children:H===A.length?"🏆":H>=A.length*.6?"👍":"📚"}),p.jsxs("div",{style:{fontWeight:900,fontSize:22,color:H===A.length?d.accent3:H>=A.length*.6?d.warn:d.danger},children:[H," / ",A.length]}),p.jsx("div",{style:{color:d.muted,fontSize:13,marginTop:4},children:H===A.length?"מושלם! שלטת בחומר.":H>=A.length*.6?"טוב! עיין בתשובות הירוקות.":"כדאי לחזור על החומר."})]}):p.jsxs("button",{onClick:()=>{Q(!0);const q=A.filter((O,E)=>j[E]===O.correct).length;W(Math.round(q/A.length*100))},disabled:Object.keys(j).length<A.length,style:{background:Object.keys(j).length<A.length?d.border:d.accent,color:"#000",border:"none",borderRadius:10,padding:"12px 32px",fontWeight:900,fontSize:15,cursor:Object.keys(j).length<A.length?"default":"pointer",opacity:Object.keys(j).length<A.length?.5:1},children:["הגש בוחן (",Object.keys(j).length,"/",A.length,")"]})]})}function fh({text:A}){const W=A.split(`
`),j=[];let h=!1,B=[];W.forEach((q,O)=>{if(q.startsWith("```")){h?(j.push(p.jsx("div",{style:{borderRadius:8,overflow:"hidden",marginBottom:16,border:"1px solid #1e3a5f"},children:p.jsx("pre",{style:{background:"#060d1a",color:"#cdd9e5",padding:16,margin:0,overflowX:"auto",fontSize:12.5,lineHeight:1.65,fontFamily:"monospace",direction:"ltr",textAlign:"left"},children:B.join(`
`)})},O)),h=!1):(h=!0,B=[]);return}if(h){B.push(q);return}if(q.startsWith("## "))j.push(p.jsx("h2",{style:{color:d.accent,fontSize:17,fontWeight:800,margin:"24px 0 12px",borderBottom:`1px solid ${d.border}`,paddingBottom:8},children:q.slice(3)},O));else if(q.startsWith("### "))j.push(p.jsx("h3",{style:{color:d.accent2,fontSize:15,fontWeight:700,margin:"18px 0 8px"},children:q.slice(4)},O));else if(q.startsWith("| ")){const E=q.split("|").filter(D=>D.trim());E.every(D=>D.trim().match(/^-+$/))||j.push(p.jsx("tr",{children:E.map((D,J)=>p.jsx("td",{style:{padding:"7px 14px",color:d.soft,fontSize:13,borderBottom:`1px solid ${d.border}`,fontFamily:D.trim().startsWith("`")?"monospace":"inherit"},dangerouslySetInnerHTML:{__html:D.trim().replace(/`([^`]+)`/g,'<code style="background:#0a1628;color:#88c0d0;padding:1px 6px;border-radius:4px;font-family:monospace;font-size:12px">$1</code>')}},J))},O))}else q.startsWith("- ")?j.push(p.jsxs("div",{style:{display:"flex",gap:10,marginBottom:6,alignItems:"flex-start"},children:[p.jsx("span",{style:{color:d.accent,marginTop:2,flexShrink:0},children:"▸"}),p.jsx("span",{style:{color:d.soft,fontSize:14,lineHeight:1.7},dangerouslySetInnerHTML:{__html:q.slice(2).replace(/`([^`]+)`/g,'<code style="background:#0a1628;color:#88c0d0;padding:1px 6px;border-radius:4px;font-size:12px;font-family:monospace">$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong style="color:#e8f0fe">$1</strong>')}})]},O)):q.startsWith("---")?j.push(p.jsx("hr",{style:{border:"none",borderTop:`1px solid ${d.border}`,margin:"20px 0"}},O)):q.trim()?j.push(p.jsx("p",{style:{color:d.soft,fontSize:14,lineHeight:1.8,margin:"4px 0"},dangerouslySetInnerHTML:{__html:q.replace(/`([^`]+)`/g,'<code style="background:#0a1628;color:#88c0d0;padding:1px 6px;border-radius:4px;font-size:12px;font-family:monospace">$1</code>').replace(/\*\*([^*]+)\*\*/g,'<strong style="color:#e8f0fe">$1</strong>')}},O)):j.push(p.jsx("div",{style:{height:8}},O))});const Q=[];let H=[];return j.forEach((q,O)=>{q&&q.type==="tr"?H.push(q):(H.length>0&&(Q.push(p.jsx("div",{style:{overflowX:"auto",marginBottom:16,borderRadius:8,border:`1px solid ${d.border}`},children:p.jsx("table",{style:{width:"100%",borderCollapse:"collapse"},children:p.jsx("tbody",{children:H})})},`t${O}`)),H=[]),Q.push(q))}),H.length>0&&Q.push(p.jsx("div",{style:{overflowX:"auto",marginBottom:16,borderRadius:8,border:`1px solid ${d.border}`},children:p.jsx("table",{style:{width:"100%",borderCollapse:"collapse"},children:p.jsx("tbody",{children:H})})},"tlast")),p.jsx("div",{children:Q})}function rh({chapter:A,onProgress:W}){const[j,h]=Ul.useState("theory"),[B,Q]=Ul.useState(null),H=[{id:"theory",label:"📖 תיאוריה"},{id:"code",label:"💻 קוד"},{id:"trace",label:"📊 מעקב"},{id:"questions",label:"🧠 שאלות"},{id:"exercises",label:"🛠 תרגילים"},{id:"quiz",label:"✅ בוחן"}];return p.jsxs("div",{children:[p.jsxs("div",{style:{marginBottom:24},children:[p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:10},children:[p.jsx("div",{style:{fontSize:40},children:A.icon}),p.jsxs("div",{children:[p.jsx("div",{style:{color:d.muted,fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase"},children:A.syllabus}),p.jsx("h2",{style:{margin:"2px 0 0",fontSize:26,color:d.text,fontWeight:900,letterSpacing:-.5},children:A.title})]})]}),p.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginTop:12},children:A.goals.map((q,O)=>p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,background:d.card,borderRadius:8,padding:"5px 12px",border:`1px solid ${d.border}`},children:[p.jsx("span",{style:{color:d.accent3,fontSize:10},children:"🎯"}),p.jsx("span",{style:{color:d.muted,fontSize:12},children:q})]},O))})]}),p.jsx("div",{style:{display:"flex",gap:4,marginBottom:20,overflowX:"auto",paddingBottom:4},children:H.map(q=>p.jsx("button",{onClick:()=>h(q.id),style:{padding:"8px 18px",borderRadius:8,border:"none",cursor:"pointer",whiteSpace:"nowrap",fontFamily:"inherit",fontWeight:j===q.id?800:500,fontSize:13,background:j===q.id?d.accent:d.card,color:j===q.id?"#000":d.muted},children:q.label},q.id))}),p.jsxs("div",{style:{background:d.card,borderRadius:16,padding:28,border:`1px solid ${d.border}`,minHeight:400},children:[j==="theory"&&p.jsx(fh,{text:A.theory}),j==="code"&&p.jsx(ih,{code:A.code}),j==="trace"&&p.jsxs("div",{children:[p.jsx("div",{style:{color:d.muted,fontSize:13,marginBottom:16,padding:"10px 14px",background:d.surface,borderRadius:8,border:`1px solid ${d.border}`},children:"📊 טבלת מעקב – עקוב אחרי ערכי המשתנים בכל שלב:"}),p.jsx(uh,{data:A.traceTable})]}),j==="questions"&&p.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[p.jsx("div",{style:{color:d.muted,fontSize:12,marginBottom:8},children:"לחץ על שאלה לראות את התשובה:"}),A.questions.map((q,O)=>p.jsxs("div",{style:{borderRadius:10,border:`1px solid ${B===O?d.accent2+"55":d.border}`,overflow:"hidden"},children:[p.jsxs("button",{onClick:()=>Q(B===O?null:O),style:{width:"100%",textAlign:"right",padding:"14px 18px",background:B===O?`${d.accent2}12`:d.surface,border:"none",cursor:"pointer",fontFamily:"inherit",display:"flex",justifyContent:"space-between",alignItems:"center",color:d.text,fontWeight:600,fontSize:14},children:[p.jsx("span",{style:{color:d.accent2,fontSize:12},children:B===O?"▲":"▼"}),p.jsx("span",{children:q.q})]}),B===O&&p.jsxs("div",{style:{padding:"14px 18px",background:`${d.accent2}08`,borderTop:`1px solid ${d.border}`,color:d.soft,fontSize:14,lineHeight:1.8},children:["💡 ",p.jsx("strong",{style:{color:d.accent2},children:"תשובה:"})," ",q.a]})]},O))]}),j==="exercises"&&p.jsxs("div",{children:[p.jsx("div",{style:{color:d.accent,fontWeight:800,marginBottom:16,fontSize:15},children:"🛠 תרגילים מדורגים"}),p.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:24},children:A.exercises.map((q,O)=>p.jsxs("div",{style:{display:"flex",gap:14,padding:"14px 18px",background:d.surface,borderRadius:10,border:`1px solid ${d.border}`},children:[p.jsx("span",{style:{background:d.accent,color:"#000",borderRadius:6,width:26,height:26,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:900,fontSize:12,flexShrink:0},children:O+1}),p.jsx("span",{style:{color:d.soft,fontSize:14,lineHeight:1.7},children:q})]},O))}),p.jsxs("div",{style:{padding:20,background:`${d.warn}0f`,borderRadius:12,border:`1px solid ${d.warn}33`},children:[p.jsx("div",{style:{color:d.warn,fontWeight:800,marginBottom:10,fontSize:15},children:"🧪 משימת אתגר"}),p.jsx("div",{style:{color:d.soft,fontSize:14,lineHeight:1.7},children:A.challenge})]})]}),j==="quiz"&&p.jsxs("div",{children:[p.jsxs("div",{style:{color:d.accent,fontWeight:800,marginBottom:20,fontSize:15},children:["✅ בוחן – פרק ",A.id,": ",A.title,p.jsxs("span",{style:{color:d.muted,fontSize:12,fontWeight:400,marginRight:10},children:["(",A.quiz.length," שאלות)"]})]}),p.jsx(ch,{quiz:A.quiz,onComplete:q=>W(A.id,q)})]})]})]})}function oh(){const[A,W]=Ul.useState(null),[j,h]=Ul.useState({}),[B,Q]=Ul.useState(!0),[H,q]=Ul.useState("home"),O=(L,tt)=>h(xt=>({...xt,[L]:Math.max(xt[L]||0,tt)})),E=Math.round(Object.values(j).reduce((L,tt)=>L+tt,0)/(Dl.length*100)*100),Z=Object.keys(j).filter(L=>j[L]===100).length,D=Object.keys(j).length,J=L=>{W(L),q("chapter"),window.innerWidth<768&&Q(!1)},vt=A&&A.id<Dl.length?Dl[A.id]:null,Tt=A&&A.id>1?Dl[A.id-2]:null;return p.jsxs("div",{style:{minHeight:"100vh",background:d.bg,color:d.text,fontFamily:"'Segoe UI', Tahoma, sans-serif",direction:"rtl",display:"flex",flexDirection:"column"},children:[p.jsxs("div",{style:{background:d.surface,borderBottom:`1px solid ${d.border}`,padding:"0 20px",display:"flex",alignItems:"center",gap:14,height:58,flexShrink:0,position:"sticky",top:0,zIndex:100},children:[p.jsx("button",{onClick:()=>Q(L=>!L),style:{background:"transparent",border:"none",color:d.muted,cursor:"pointer",fontSize:18,padding:"4px 8px"},children:"☰"}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[p.jsx("span",{style:{fontSize:20},children:"🖥️"}),p.jsx("span",{style:{fontWeight:900,fontSize:16,color:d.accent,letterSpacing:-.5},children:"לומדים C"}),p.jsx("span",{style:{background:`${d.accent2}22`,color:d.accent2,border:`1px solid ${d.accent2}44`,borderRadius:6,padding:"2px 8px",fontSize:11,fontWeight:700},children:"18 פרקים"})]}),p.jsx("div",{style:{flex:1}}),p.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[p.jsxs("div",{style:{background:d.card,borderRadius:8,padding:"5px 12px",fontSize:12,border:`1px solid ${d.border}`,display:"flex",gap:6},children:[p.jsx("span",{style:{color:d.muted},children:"ציון:"}),p.jsxs("span",{style:{color:d.accent,fontWeight:800},children:[E,"%"]})]}),p.jsxs("div",{style:{background:d.card,borderRadius:8,padding:"5px 12px",fontSize:12,border:`1px solid ${d.border}`,display:"flex",gap:6},children:[p.jsx("span",{style:{color:d.muted},children:"הושלמו:"}),p.jsxs("span",{style:{color:d.accent3,fontWeight:800},children:[Z,"/",Dl.length]})]})]})]}),p.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[B&&p.jsxs("div",{style:{width:255,background:d.surface,borderLeft:`1px solid ${d.border}`,flexShrink:0,overflowY:"auto",padding:"8px 0"},children:[p.jsxs("button",{onClick:()=>{q("home")},style:{width:"100%",textAlign:"right",padding:"10px 18px",background:H==="home"?`${d.accent}18`:"transparent",border:"none",cursor:"pointer",color:H==="home"?d.accent:d.muted,fontFamily:"inherit",fontWeight:700,fontSize:13,display:"flex",gap:8,alignItems:"center",borderRight:H==="home"?`3px solid ${d.accent}`:"3px solid transparent"},children:[p.jsx("span",{children:"🏠"})," דף הבית"]}),p.jsx("div",{style:{height:1,background:d.border,margin:"6px 0"}}),Dl.map(L=>{const tt=j[L.id]||0,xt=A?.id===L.id&&H==="chapter";return p.jsxs("button",{onClick:()=>J(L),style:{width:"100%",textAlign:"right",padding:"9px 16px",background:xt?`${d.accent}12`:"transparent",border:"none",cursor:"pointer",color:xt?d.accent:d.text,fontFamily:"inherit",fontSize:12,display:"flex",gap:10,alignItems:"center",borderRight:xt?`3px solid ${d.accent}`:"3px solid transparent"},children:[p.jsx("span",{style:{fontSize:15,flexShrink:0},children:L.icon}),p.jsxs("div",{style:{flex:1,textAlign:"right"},children:[p.jsx("div",{style:{fontWeight:600,fontSize:12,color:xt?d.accent:d.soft},children:L.title}),p.jsx("div",{style:{marginTop:4,background:d.border,borderRadius:2,height:2,width:"100%"},children:p.jsx("div",{style:{background:tt===100?d.accent3:tt>0?d.accent:"transparent",width:`${tt}%`,height:"100%",borderRadius:2,transition:"width 0.4s"}})})]}),p.jsx("span",{style:{color:tt===100?d.accent3:d.muted,fontSize:10,fontWeight:800,flexShrink:0},children:tt===100?"✓":tt>0?`${tt}%`:`P${L.id}`})]},L.id)})]}),p.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"28px 32px",maxWidth:"100%"},children:[H==="home"&&p.jsxs("div",{children:[p.jsxs("div",{style:{background:`linear-gradient(135deg, ${d.card} 0%, #0f1a35 100%)`,borderRadius:20,padding:"44px 40px",marginBottom:32,border:`1px solid ${d.border}`,position:"relative",overflow:"hidden"},children:[p.jsx("div",{style:{position:"absolute",top:-40,left:-40,width:200,height:200,background:`${d.accent}06`,borderRadius:"50%",pointerEvents:"none"}}),p.jsx("div",{style:{position:"absolute",bottom:-20,right:-20,width:140,height:140,background:`${d.accent2}06`,borderRadius:"50%",pointerEvents:"none"}}),p.jsxs("div",{style:{position:"relative"},children:[p.jsx("div",{style:{color:d.accent,fontWeight:900,fontSize:11,letterSpacing:4,textTransform:"uppercase",marginBottom:10},children:"קורס מלא לפי תוכנית הלימודים"}),p.jsxs("h1",{style:{margin:"0 0 14px",fontSize:42,fontWeight:900,lineHeight:1.15},children:["שפת ",p.jsx("span",{style:{color:d.accent},children:"C"})," מהיסוד"]}),p.jsx("p",{style:{color:d.muted,fontSize:15,lineHeight:1.8,maxWidth:520,margin:"0 0 28px"},children:"18 פרקים לפי הסילבוס הרשמי – תיאוריה מפורטת, דוגמאות קוד, טבלאות מעקב, שאלות, תרגילים ובחינות."}),p.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[p.jsx("button",{onClick:()=>J(Dl[0]),style:{background:d.accent,color:"#000",border:"none",borderRadius:10,padding:"12px 28px",fontWeight:800,fontSize:15,cursor:"pointer"},children:"התחל ללמוד ←"}),D>0&&p.jsxs("button",{onClick:()=>J(Dl[Math.min(D,Dl.length-1)]),style:{background:"transparent",color:d.accent,border:`1px solid ${d.accent}44`,borderRadius:10,padding:"12px 28px",fontWeight:700,fontSize:15,cursor:"pointer"},children:["המשך מפרק ",D+1]})]})]})]}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:16,marginBottom:36},children:[{label:"פרקים",value:18,icon:"📚",color:d.accent},{label:"הושלמו",value:Z,icon:"✅",color:d.accent3},{label:"בוחנים עברו",value:D,icon:"📝",color:d.accent2},{label:"ציון כולל",value:`${E}%`,icon:"🏆",color:d.warn}].map((L,tt)=>p.jsxs("div",{style:{background:d.card,borderRadius:14,padding:22,border:`1px solid ${d.border}`,textAlign:"center"},children:[p.jsx("div",{style:{fontSize:26,marginBottom:8},children:L.icon}),p.jsx("div",{style:{fontSize:30,fontWeight:900,color:L.color},children:L.value}),p.jsx("div",{style:{color:d.muted,fontSize:12,marginTop:4},children:L.label})]},tt))}),E>0&&p.jsxs("div",{style:{marginBottom:32,padding:"16px 20px",background:d.card,borderRadius:14,border:`1px solid ${d.border}`},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:10},children:[p.jsx("span",{style:{color:d.muted,fontSize:13},children:"התקדמות כוללת"}),p.jsxs("span",{style:{color:d.accent,fontWeight:800},children:[E,"%"]})]}),p.jsx("div",{style:{background:d.surface,borderRadius:4,height:8},children:p.jsx("div",{style:{background:`linear-gradient(90deg, ${d.accent}, ${d.accent2})`,width:`${E}%`,height:"100%",borderRadius:4,transition:"width 0.6s"}})})]}),p.jsx("h2",{style:{color:d.text,fontWeight:800,marginBottom:18,fontSize:18},children:"📖 כל הפרקים"}),p.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(210px, 1fr))",gap:14},children:Dl.map(L=>{const tt=j[L.id]||0;return p.jsxs("button",{onClick:()=>J(L),style:{textAlign:"right",background:d.card,border:`1px solid ${tt===100?d.accent3+"55":d.border}`,borderRadius:14,padding:18,cursor:"pointer",fontFamily:"inherit",color:d.text,transition:"border-color 0.2s"},children:[p.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10},children:[p.jsx("span",{style:{fontSize:9,color:tt===100?d.accent3:tt>0?d.accent:d.muted,fontWeight:700,background:tt===100?`${d.accent3}22`:tt>0?`${d.accent}22`:d.surface,padding:"3px 8px",borderRadius:6,border:`1px solid ${tt===100?d.accent3+"44":d.border}`},children:tt===100?"✓ הושלם":tt>0?`${tt}%`:`פרק ${L.id}`}),p.jsx("span",{style:{fontSize:26},children:L.icon})]}),p.jsx("div",{style:{fontWeight:800,fontSize:14,marginBottom:5},children:L.title}),p.jsx("div",{style:{color:d.muted,fontSize:11,marginBottom:10},children:L.syllabus}),p.jsx("div",{style:{background:d.surface,borderRadius:3,height:3},children:p.jsx("div",{style:{background:tt===100?d.accent3:d.accent,width:`${tt}%`,height:"100%",borderRadius:3,transition:"width 0.4s"}})})]},L.id)})})]}),H==="chapter"&&A&&p.jsxs("div",{children:[p.jsxs("div",{style:{display:"flex",gap:8,marginBottom:24,flexWrap:"wrap"},children:[p.jsx("button",{onClick:()=>q("home"),style:{background:d.card,border:`1px solid ${d.border}`,borderRadius:8,padding:"8px 14px",cursor:"pointer",color:d.muted,fontFamily:"inherit",fontSize:13},children:"← בית"}),Tt&&p.jsxs("button",{onClick:()=>J(Tt),style:{background:d.card,border:`1px solid ${d.border}`,borderRadius:8,padding:"8px 14px",cursor:"pointer",color:d.muted,fontFamily:"inherit",fontSize:13},children:["◀ ",Tt.title]}),vt&&p.jsxs("button",{onClick:()=>J(vt),style:{background:d.accent,border:"none",borderRadius:8,padding:"8px 16px",cursor:"pointer",color:"#000",fontFamily:"inherit",fontWeight:700,fontSize:13},children:[vt.title," ▶"]})]}),p.jsx(rh,{chapter:A,onProgress:O})]})]})]})]})}ah.createRoot(document.getElementById("root")).render(p.jsx(Ul.StrictMode,{children:p.jsx(oh,{})}));
