var t1=Object.create;var I0=Object.defineProperty;var e1=Object.getOwnPropertyDescriptor;var n1=Object.getOwnPropertyNames;var i1=Object.getPrototypeOf,s1=Object.prototype.hasOwnProperty;var Cs=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var a1=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of n1(t))!s1.call(e,s)&&s!==n&&I0(e,s,{get:()=>t[s],enumerable:!(i=e1(t,s))||i.enumerable});return e};var P0=(e,t,n)=>(n=e!=null?t1(i1(e)):{},a1(t||!e||!e.__esModule?I0(n,"default",{value:e,enumerable:!0}):n,e));var K0=Cs(Lt=>{"use strict";var cd=Symbol.for("react.transitional.element"),r1=Symbol.for("react.portal"),o1=Symbol.for("react.fragment"),l1=Symbol.for("react.strict_mode"),c1=Symbol.for("react.profiler"),u1=Symbol.for("react.consumer"),h1=Symbol.for("react.context"),f1=Symbol.for("react.forward_ref"),d1=Symbol.for("react.suspense"),p1=Symbol.for("react.memo"),V0=Symbol.for("react.lazy"),m1=Symbol.for("react.activity"),g1=Symbol.for("react.view_transition"),z0=Symbol.iterator;function _1(e){return e===null||typeof e!="object"?null:(e=z0&&e[z0]||e["@@iterator"],typeof e=="function"?e:null)}var G0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k0=Object.assign,X0={};function mr(e,t,n){this.props=e,this.context=t,this.refs=X0,this.updater=n||G0}mr.prototype.isReactComponent={};mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function W0(){}W0.prototype=mr.prototype;function ud(e,t,n){this.props=e,this.context=t,this.refs=X0,this.updater=n||G0}var hd=ud.prototype=new W0;hd.constructor=ud;k0(hd,mr.prototype);hd.isPureReactComponent=!0;var B0=Array.isArray;function ld(){}var _e={H:null,A:null,T:null,S:null},q0=Object.prototype.hasOwnProperty;function fd(e,t,n){var i=n.ref;return{$$typeof:cd,type:e,key:t,ref:i!==void 0?i:null,props:n}}function v1(e,t){return fd(e.type,t,e.props)}function dd(e){return typeof e=="object"&&e!==null&&e.$$typeof===cd}function y1(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var F0=/\/+/g;function od(e,t){return typeof e=="object"&&e!==null&&e.key!=null?y1(""+e.key):t.toString(36)}function x1(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(ld,ld):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function pr(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case cd:case r1:r=!0;break;case V0:return r=e._init,pr(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+od(e,0):i,B0(s)?(n="",r!=null&&(n=r.replace(F0,"$&/")+"/"),pr(s,t,n,"",function(c){return c})):s!=null&&(dd(s)&&(s=v1(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(F0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(B0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+od(i,l),r+=pr(i,t,n,a,s);else if(l=_1(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+od(i,l++),r+=pr(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return pr(x1(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Uc(e,t,n){if(e==null)return e;var i=[],s=0;return pr(e,i,"","",function(a){return t.call(n,a,s++)}),i}function S1(e){if(e._status===-1){var t=e._result,n=t();n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i,n.status===void 0&&(n.status="fulfilled",n.value=i))},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i,n.status===void 0&&(n.status="rejected",n.reason=i))}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var H0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Y0(e){var t=_e.T,n={};n.types=t!==null?t.types:null,_e.T=n;try{var i=e(),s=_e.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(ld,H0)}catch(a){H0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),_e.T=t}}function Z0(e){var t=_e.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else Y0(Z0.bind(null,e))}var M1={map:Uc,forEach:function(e,t,n){Uc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Uc(e,function(){t++}),t},toArray:function(e){return Uc(e,function(t){return t})||[]},only:function(e){if(!dd(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Lt.Activity=m1;Lt.Children=M1;Lt.Component=mr;Lt.Fragment=o1;Lt.Profiler=c1;Lt.PureComponent=ud;Lt.StrictMode=l1;Lt.Suspense=d1;Lt.ViewTransition=g1;Lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=_e;Lt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return _e.H.useMemoCache(e)}};Lt.addTransitionType=Z0;Lt.cache=function(e){return function(){return e.apply(null,arguments)}};Lt.cacheSignal=function(){return null};Lt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=k0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!q0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return fd(e.type,s,i)};Lt.createContext=function(e){return e={$$typeof:h1,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:u1,_context:e},e};Lt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)q0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return fd(e,a,s)};Lt.createRef=function(){return{current:null}};Lt.forwardRef=function(e){return{$$typeof:f1,render:e}};Lt.isValidElement=dd;Lt.lazy=function(e){return{$$typeof:V0,_payload:{_status:-1,_result:e},_init:S1}};Lt.memo=function(e,t){return{$$typeof:p1,type:e,compare:t===void 0?null:t}};Lt.startTransition=Y0;Lt.unstable_useCacheRefresh=function(){return _e.H.useCacheRefresh()};Lt.use=function(e){return _e.H.use(e)};Lt.useActionState=function(e,t,n){return _e.H.useActionState(e,t,n)};Lt.useCallback=function(e,t){return _e.H.useCallback(e,t)};Lt.useContext=function(e){return _e.H.useContext(e)};Lt.useDebugValue=function(){};Lt.useDeferredValue=function(e,t){return _e.H.useDeferredValue(e,t)};Lt.useEffect=function(e,t){return _e.H.useEffect(e,t)};Lt.useEffectEvent=function(e){return _e.H.useEffectEvent(e)};Lt.useId=function(){return _e.H.useId()};Lt.useImperativeHandle=function(e,t,n){return _e.H.useImperativeHandle(e,t,n)};Lt.useInsertionEffect=function(e,t){return _e.H.useInsertionEffect(e,t)};Lt.useLayoutEffect=function(e,t){return _e.H.useLayoutEffect(e,t)};Lt.useMemo=function(e,t){return _e.H.useMemo(e,t)};Lt.useOptimistic=function(e,t){return _e.H.useOptimistic(e,t)};Lt.useReducer=function(e,t,n){return _e.H.useReducer(e,t,n)};Lt.useRef=function(e){return _e.H.useRef(e)};Lt.useState=function(e){return _e.H.useState(e)};Lt.useSyncExternalStore=function(e,t,n){return _e.H.useSyncExternalStore(e,t,n)};Lt.useTransition=function(){return _e.H.useTransition()};Lt.version="19.3.1"});var Lc=Cs((vD,J0)=>{"use strict";J0.exports=K0()});var r_=Cs(Ae=>{"use strict";function _d(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<Oc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Oi(e){return e.length===0?null:e[0]}function Pc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>Oc(o,n))l<s&&0>Oc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>Oc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function Oc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ae.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Q0=performance,Ae.unstable_now=function(){return Q0.now()}):(pd=Date,j0=pd.now(),Ae.unstable_now=function(){return pd.now()-j0});var Q0,pd,j0,ns=[],Rs=[],b1=1,ni=null,cn=3,vd=!1,Yo=!1,Zo=!1,yd=!1,e_=typeof setTimeout=="function"?setTimeout:null,n_=typeof clearTimeout=="function"?clearTimeout:null,$0=typeof setImmediate<"u"?setImmediate:null;function Ic(e){for(var t=Oi(Rs);t!==null;){if(t.callback===null)Pc(Rs);else if(t.startTime<=e)Pc(Rs),t.sortIndex=t.expirationTime,_d(ns,t);else break;t=Oi(Rs)}}function xd(e){if(Zo=!1,Ic(e),!Yo)if(Oi(ns)!==null)Yo=!0,_r||(_r=!0,gr());else{var t=Oi(Rs);t!==null&&Sd(xd,t.startTime-e)}}var _r=!1,Ko=-1,i_=5,s_=-1;function a_(){return yd?!0:!(Ae.unstable_now()-s_<i_)}function md(){if(yd=!1,_r){var e=Ae.unstable_now();s_=e;var t=!0;try{t:{Yo=!1,Zo&&(Zo=!1,n_(Ko),Ko=-1),vd=!0;var n=cn;try{e:{for(Ic(e),ni=Oi(ns);ni!==null&&!(ni.expirationTime>e&&a_());){var i=ni.callback;if(typeof i=="function"){ni.callback=null,cn=ni.priorityLevel;var s=i(ni.expirationTime<=e);if(e=Ae.unstable_now(),typeof s=="function"){ni.callback=s,Ic(e),t=!0;break e}ni===Oi(ns)&&Pc(ns),Ic(e)}else Pc(ns);ni=Oi(ns)}if(ni!==null)t=!0;else{var a=Oi(Rs);a!==null&&Sd(xd,a.startTime-e),t=!1}}break t}finally{ni=null,cn=n,vd=!1}t=void 0}}finally{t?gr():_r=!1}}}var gr;typeof $0=="function"?gr=function(){$0(md)}:typeof MessageChannel<"u"?(gd=new MessageChannel,t_=gd.port2,gd.port1.onmessage=md,gr=function(){t_.postMessage(null)}):gr=function(){e_(md,0)};var gd,t_;function Sd(e,t){Ko=e_(function(){e(Ae.unstable_now())},t)}Ae.unstable_IdlePriority=5;Ae.unstable_ImmediatePriority=1;Ae.unstable_LowPriority=4;Ae.unstable_NormalPriority=3;Ae.unstable_Profiling=null;Ae.unstable_UserBlockingPriority=2;Ae.unstable_cancelCallback=function(e){e.callback=null};Ae.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):i_=0<e?Math.floor(1e3/e):5};Ae.unstable_getCurrentPriorityLevel=function(){return cn};Ae.unstable_next=function(e){switch(cn){case 1:case 2:case 3:var t=3;break;default:t=cn}var n=cn;cn=t;try{return e()}finally{cn=n}};Ae.unstable_requestPaint=function(){yd=!0};Ae.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=cn;cn=e;try{return t()}finally{cn=n}};Ae.unstable_scheduleCallback=function(e,t,n){var i=Ae.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:b1++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,_d(Rs,e),Oi(ns)===null&&e===Oi(Rs)&&(Zo?(n_(Ko),Ko=-1):Zo=!0,Sd(xd,n-i))):(e.sortIndex=s,_d(ns,e),Yo||vd||(Yo=!0,_r||(_r=!0,gr()))),e};Ae.unstable_shouldYield=a_;Ae.unstable_wrapCallback=function(e){var t=cn;return function(){var n=cn;cn=t;try{return e.apply(this,arguments)}finally{cn=n}}}});var l_=Cs((xD,o_)=>{"use strict";o_.exports=r_()});var h_=Cs(un=>{"use strict";var E1=Lc();function u_(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ds(){}var vn={d:{f:Ds,r:function(){throw Error(u_(522))},D:Ds,C:Ds,L:Ds,m:Ds,X:Ds,S:Ds,M:Ds},p:0,findDOMNode:null},T1=Symbol.for("react.portal"),A1=Symbol.for("react.recoverable"),c_=Symbol.for("react.optimistic_key");function w1(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T1,key:i==null?null:i===c_?c_:""+i,children:e,containerInfo:t,implementation:n}}var Jo=E1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function zc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=vn;un.browser=function(e){return{$$typeof:A1,_reason:e}};un.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(u_(299));return w1(e,t,null,n)};un.flushSync=function(e){var t=Jo.T,n=vn.p;try{if(Jo.T=null,vn.p=2,e)return e()}finally{Jo.T=t,vn.p=n,vn.d.f()}};un.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,vn.d.C(e,t))};un.prefetchDNS=function(e){typeof e=="string"&&vn.d.D(e)};un.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=zc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?vn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&vn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};un.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=zc(t.as,t.crossOrigin);vn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&vn.d.M(e)};un.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=zc(n,t.crossOrigin);vn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};un.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=zc(t.as,t.crossOrigin);vn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else vn.d.m(e)};un.requestFormReset=function(e){vn.d.r(e)};un.unstable_batchedUpdates=function(e,t){return e(t)};un.useFormState=function(e,t,n){return Jo.H.useFormState(e,t,n)};un.useFormStatus=function(){return Jo.H.useHostTransitionStatus()};un.version="19.3.1"});var p_=Cs((MD,d_)=>{"use strict";function f_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f_)}catch(e){console.error(e)}}f_(),d_.exports=h_()});var tM=Cs(vh=>{"use strict";var Xe=l_(),$v=Lc(),C1=p_();function k(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ty(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zl(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function ey(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ny(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m_(e){if(zl(e)!==e)throw Error(k(188))}function R1(e){var t=e.alternate;if(!t){if(t=zl(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return m_(s),e;if(a===i)return m_(s),t;a=a.sibling}throw Error(k(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error(k(189))}}if(n.alternate!==i)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function iy(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=iy(e),t!==null)return t;e=e.sibling}return null}function Un(e,t,n,i,s,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&Un(e.child,t,n,i,s,a))return!0;e=e.sibling}return!1}function Wa(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function g_(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function sy(e){var t=[null,null],n=Wa(e);return n===null||ay(t,e,n.child,{foundSelf:!1}),t}function ay(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&ay(e,t,n.child,i))return!0;n=n.sibling}return!1}function ke(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(k(559))}}var Er=null,$d=null;function D1(e,t,n){return e===n?!0:e===t?(Er=e,!0):!1}function N1(e,t,n){return e===n?($d=e,!1):e===t?($d!==null&&(Er=e),!0):!1}function __(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function tp(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var a=t;a;a=n(a))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var pe=Object.assign,U1=Symbol.for("react.element"),Bc=Symbol.for("react.transitional.element"),il=Symbol.for("react.portal"),Tr=Symbol.for("react.fragment"),ry=Symbol.for("react.strict_mode"),ep=Symbol.for("react.profiler"),oy=Symbol.for("react.consumer"),Hi=Symbol.for("react.context"),um=Symbol.for("react.forward_ref"),np=Symbol.for("react.suspense"),ip=Symbol.for("react.suspense_list"),hm=Symbol.for("react.memo"),Os=Symbol.for("react.lazy");Symbol.for("react.scope");var sp=Symbol.for("react.activity"),L1=Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var O1=Symbol.for("react.memo_cache_sentinel"),ap=Symbol.for("react.view_transition"),I1=Symbol.for("react.recoverable"),v_=Symbol.iterator;function Qo(e){return e===null||typeof e!="object"?null:(e=v_&&e[v_]||e["@@iterator"],typeof e=="function"?e:null)}var P1=Symbol.for("react.client.reference");function rp(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===P1?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Tr:return"Fragment";case ep:return"Profiler";case ry:return"StrictMode";case np:return"Suspense";case ip:return"SuspenseList";case sp:return"Activity";case ap:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case il:return"Portal";case Hi:return e.displayName||"Context";case oy:return(e._context.displayName||"Context")+".Consumer";case um:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hm:return t=e.displayName||null,t!==null?t:rp(e.type)||"Memo";case Os:t=e._payload,e=e._init;try{return rp(e(t))}catch{}}return null}var sl=Array.isArray,Rt=$v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=C1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ua={pending:!1,data:null,method:null,action:null},op=[],Ar=-1;function Yi(e){return{current:e}}function sn(e){0>Ar||(e.current=op[Ar],op[Ar]=null,Ar--)}function xe(e,t){Ar++,op[Ar]=e.current,e.current=t}var Xi=Yi(null),Sl=Yi(null),ks=Yi(null),Eu=Yi(null);function Tu(e,t){switch(xe(ks,t),xe(Sl,e),xe(Xi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Uv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Uv(t),e=RS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}sn(Xi),xe(Xi,e)}function qr(){sn(Xi),sn(Sl),sn(ks)}function lp(e){var t=e.memoizedState;t!==null&&(no._currentValue=t.memoizedState,xe(Eu,e)),t=Xi.current;var n=RS(t,e.type);t!==n&&(xe(Sl,e),xe(Xi,n))}function Au(e){Sl.current===e&&(sn(Xi),sn(Sl)),Eu.current===e&&(sn(Eu),no._currentValue=Ua)}var Md,y_;function Us(e){if(Md===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Md=t&&t[1]||"",y_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Md+e+y_}var bd=!1;function Ed(e,t){if(!e||bd)return"";bd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(_){var h=_}Reflect.construct(e,[],d)}else{try{d.call()}catch(_){h=_}d=!1;try{var p=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),d=!0,new e}finally{d&&(p!==void 0?Object.defineProperty(e.prototype,"props",p):delete e.prototype.props)}}}else{try{throw Error()}catch(_){h=_}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(_){if(_&&h&&typeof _.stack=="string")return[_.stack,h.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var f=`
`+l[i].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=i&&0<=s);break}}}finally{bd=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Us(n):""}function z1(e,t){switch(e.tag){case 26:case 27:case 5:return Us(e.type);case 16:return Us("Lazy");case 13:return e.child!==t&&t!==null?Us("Suspense Fallback"):Us("Suspense");case 19:return Us("SuspenseList");case 0:case 15:return Ed(e.type,!1);case 11:return Ed(e.type.render,!1);case 1:return Ed(e.type,!0);case 31:return Us("Activity");case 30:return Us("ViewTransition");default:return""}}function x_(e){try{var t="",n=null;do t+=z1(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var cp=Object.prototype.hasOwnProperty,fm=Xe.unstable_scheduleCallback,Td=Xe.unstable_cancelCallback,B1=Xe.unstable_shouldYield,F1=Xe.unstable_requestPaint,kn=Xe.unstable_now,H1=Xe.unstable_getCurrentPriorityLevel,ly=Xe.unstable_ImmediatePriority,cy=Xe.unstable_UserBlockingPriority,wu=Xe.unstable_NormalPriority,V1=Xe.unstable_LowPriority,uy=Xe.unstable_IdlePriority,G1=Xe.log,k1=Xe.unstable_setDisableYieldValue,Bl=null,Xn=null;function zs(e){if(typeof G1=="function"&&k1(e),Xn&&typeof Xn.setStrictMode=="function")try{Xn.setStrictMode(Bl,e)}catch{}}var Wn=Math.clz32?Math.clz32:q1,X1=Math.log,W1=Math.LN2;function q1(e){return e>>>=0,e===0?32:31-(X1(e)/W1|0)|0}var Fc=256,Hc=262144,Vc=4194304;function wa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $u(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=wa(i):(r&=o,r!==0?s=wa(r):n||(n=o&~e,n!==0&&(s=wa(n))))):(o=i&~a,o!==0?s=wa(o):r!==0?s=wa(r):n||(n=i&~e,n!==0&&(s=wa(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Fl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function hy(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Wn(n),s=1<<i;t|=e[i],n&=~s}return t}function Y1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fy(){var e=Vc;return Vc<<=1,(Vc&62914560)===0&&(Vc=4194304),e}function Ad(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Hl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Z1(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-Wn(n),d=1<<f;o[f]=0,l[f]=-1;var h=c[f];if(h!==null)for(c[f]=null,f=0;f<h.length;f++){var p=h[f];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&dy(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function dy(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Wn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function py(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Wn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function my(e,t){var n=t&-t;return n=(n&42)!==0?1:dm(n),(n&(e.suspendedLanes|t))!==0?0:n}function dm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pm(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function gy(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:QS(e.type))}function S_(e,t){var n=ee.p;try{return ee.p=e,t()}finally{ee.p=n}}var ms=Math.random().toString(36).slice(2),en="__reactFiber$"+ms,Ln="__reactProps$"+ms,ao="__reactContainer$"+ms,M_="__reactEvents$"+ms,K1="__reactListeners$"+ms,J1="__reactHandles$"+ms,b_="__reactResources$"+ms,Vl="__reactMarker$"+ms,Cu="__reactLoad$"+ms;function th(e){delete e[en],delete e[Ln],delete e[K1],delete e[J1]}function Da(e){var t;if(t=e[en])return t;for(var n=e.parentNode;n;){if(t=n[ao]||n[en]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hv(e);e!==null;){if(n=e[en])return n;e=Hv(e)}return t}e=n,n=e.parentNode}return null}function ro(e){if(e=e[en]||e[ao]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function al(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(k(33))}function Pr(e){var t=e[b_];return t||(t=e[b_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[Vl]=!0}function _y(e){e[Cu]=void 0}var vy=new Set,yy={};function qa(e,t){Yr(e,t),Yr(e+"Capture",t)}function Yr(e,t){for(yy[e]=t,e=0;e<t.length;e++)vy.add(t[e])}var Q1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),E_={},T_={};function j1(e){return cp.call(T_,e)?!0:cp.call(E_,e)?!1:Q1.test(e)?T_[e]=!0:(E_[e]=!0,!1)}var $t=!1;function A_(){var e=$t;return $t=!1,e}function au(e,t,n){if(j1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function Gc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function is(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function Fn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $1(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function up(e){if(!e._valueTracker){var t=xy(e)?"checked":"value";e._valueTracker=$1(e,t,""+e[t])}}function Sy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=xy(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var tE=/[\n"\\]/g;function oi(e){return e.replace(tE,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function hp(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Fn(t)):e.value!==""+Fn(t)&&(e.value=""+Fn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?r==="number"&&e.value==t?wd(e,Fn(e.value)):wd(e,Fn(t)):n!=null?wd(e,Fn(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Fn(o):e.removeAttribute("name")}function My(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){up(e);return}n=n!=null?""+Fn(n):"",t=t!=null?""+Fn(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),up(e)}function wd(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function zr(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Fn(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function by(e,t,n){if(t!=null&&(t=""+Fn(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Fn(n):""}function Ey(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(k(92));if(sl(i)){if(1<i.length)throw Error(k(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Fn(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),up(e)}function Zr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var eE=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function w_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||eE.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ty(e,t,n){if(t!=null&&typeof t!="object")throw Error(k(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",$t=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(w_(e,s,i),$t=!0)}else for(var a in t)t.hasOwnProperty(a)&&w_(e,a,t[a])}function mm(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),iE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ru(e){return iE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Vi(){}var fp=null;function gm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Br=null;function C_(e){var t=ro(e);if(t&&(e=t.stateNode)){var n=e[Ln]||null;t:switch(e=t.stateNode,t.type){case"input":if(hp(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+oi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Ln]||null;if(!s)throw Error(k(90));hp(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Sy(i)}break t;case"textarea":by(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&zr(e,!!n.multiple,t,!1)}}}var Cd=!1;function Ay(e,t,n){if(Cd)return e(t,n);Cd=!0;try{var i=e(t);return i}finally{if(Cd=!1,(wr!==null||Br!==null)&&(ph(),wr&&(t=wr,e=Br,Br=wr=null,C_(t),e)))for(t=0;t<e.length;t++)C_(e[t])}}function Ml(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Ln]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var cs=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dp=!1;if(cs)try{vr={},Object.defineProperty(vr,"passive",{get:function(){dp=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{dp=!1}var vr,Bs=null,_m=null,ou=null;function wy(){if(ou)return ou;var e,t=_m,n=t.length,i,s="value"in Bs?Bs.value:Bs.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return ou=s.slice(e,1<i?1-i:void 0)}function lu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function kc(){return!0}function R_(){return!1}function Mn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?kc:R_,this.isPropagationStopped=R_,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kc)},persist:function(){},isPersistent:kc}),t}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eh=Mn(sa),Gl=pe({},sa,{view:0,detail:0}),sE=Mn(Gl),Rd,Dd,jo,nh=pe({},Gl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jo&&(jo&&e.type==="mousemove"?(Rd=e.screenX-jo.screenX,Dd=e.screenY-jo.screenY):Dd=Rd=0,jo=e),Rd)},movementY:function(e){return"movementY"in e?e.movementY:Dd}}),D_=Mn(nh),aE=pe({},nh,{dataTransfer:0}),rE=Mn(aE),oE=pe({},Gl,{relatedTarget:0}),Nd=Mn(oE),lE=pe({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),cE=Mn(lE),uE=pe({},sa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hE=Mn(uE),fE=pe({},sa,{data:0}),N_=Mn(fE),dE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gE(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mE[e])?!!t[e]:!1}function vm(){return gE}var _E=pe({},Gl,{key:function(e){if(e.key){var t=dE[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=lu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vm,charCode:function(e){return e.type==="keypress"?lu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?lu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vE=Mn(_E),yE=pe({},nh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),U_=Mn(yE),xE=pe({},sa,{submitter:0}),SE=Mn(xE),ME=pe({},Gl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vm}),bE=Mn(ME),EE=pe({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),TE=Mn(EE),AE=pe({},nh,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wE=Mn(AE),CE=pe({},sa,{newState:0,oldState:0,source:0}),RE=Mn(CE),DE=[9,13,27,32],ym=cs&&"CompositionEvent"in window,ll=null;cs&&"documentMode"in document&&(ll=document.documentMode);var NE=cs&&"TextEvent"in window&&!ll,Cy=cs&&(!ym||ll&&8<ll&&11>=ll),L_=" ",O_=!1;function Ry(e,t){switch(e){case"keyup":return DE.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cr=!1;function UE(e,t){switch(e){case"compositionend":return Dy(t);case"keypress":return t.which!==32?null:(O_=!0,L_);case"textInput":return e=t.data,e===L_&&O_?null:e;default:return null}}function LE(e,t){if(Cr)return e==="compositionend"||!ym&&Ry(e,t)?(e=wy(),ou=_m=Bs=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cy&&t.locale!=="ko"?null:t.data;default:return null}}var OE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function I_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!OE[e.type]:t==="textarea"}function Ny(e,t,n,i){wr?Br?Br.push(i):Br=[i]:wr=i,t=Ju(t,"onChange"),0<t.length&&(n=new eh("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var cl=null,bl=null;function IE(e){AS(e,0)}function ih(e){var t=al(e);if(Sy(t))return e}function P_(e,t){if(e==="change")return t}var Uy=!1;cs&&(cs?(Wc="oninput"in document,Wc||(Ud=document.createElement("div"),Ud.setAttribute("oninput","return;"),Wc=typeof Ud.oninput=="function"),Xc=Wc):Xc=!1,Uy=Xc&&(!document.documentMode||9<document.documentMode));var Xc,Wc,Ud;function z_(){cl&&(cl.detachEvent("onpropertychange",Ly),bl=cl=null)}function Ly(e){if(e.propertyName==="value"&&ih(bl)){var t=[];Ny(t,bl,e,gm(e)),Ay(IE,t)}}function PE(e,t,n){e==="focusin"?(z_(),cl=t,bl=n,cl.attachEvent("onpropertychange",Ly)):e==="focusout"&&z_()}function zE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ih(bl)}function BE(e,t){if(e==="click")return ih(t)}function FE(e,t){if(e==="input"||e==="change")return ih(t)}function HE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Yn=typeof Object.is=="function"?Object.is:HE;function El(e,t){if(Yn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!cp.call(t,s)||!Yn(e[s],t[s]))return!1}return!0}function pp(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function B_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function F_(e,t){var n=B_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=B_(n)}}function Oy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Oy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Iy(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=pp(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pp(e.document)}return t}function xm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var VE=cs&&"documentMode"in document&&11>=document.documentMode,Rr=null,mp=null,ul=null,gp=!1;function H_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gp||Rr==null||Rr!==pp(i)||(i=Rr,"selectionStart"in i&&xm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ul&&El(ul,i)||(ul=i,i=Ju(mp,"onSelect"),0<i.length&&(t=new eh("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Rr)))}function Ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dr={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionrun:Ta("Transition","TransitionRun"),transitionstart:Ta("Transition","TransitionStart"),transitioncancel:Ta("Transition","TransitionCancel"),transitionend:Ta("Transition","TransitionEnd")},Ld={},Py={};cs&&(Py=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function Ya(e){if(Ld[e])return Ld[e];if(!Dr[e])return e;var t=Dr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Py)return Ld[e]=t[n];return e}var zy=Ya("animationend"),By=Ya("animationiteration"),Fy=Ya("animationstart"),GE=Ya("transitionrun"),kE=Ya("transitionstart"),XE=Ya("transitioncancel"),Hy=Ya("transitionend"),Vy=new Map,_p="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_p.push("scrollEnd");function Ei(e,t){Vy.set(e,t),qa(t,[e])}var WE=0;function us(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=bi.identifierPrefix;var n=WE++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function V_(e){if(e==null||typeof e=="string")return e;var t=null,n=Wr;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function gs(e,t){return e=V_(e),t=V_(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Ru=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],Nr=0,Sm=0;function sh(){for(var e=Nr,t=Sm=Nr=0;t<e;){var n=si[t];si[t++]=null;var i=si[t];si[t++]=null;var s=si[t];si[t++]=null;var a=si[t];if(si[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&Gy(n,s,a)}}function ah(e,t,n,i){si[Nr++]=e,si[Nr++]=t,si[Nr++]=n,si[Nr++]=i,Sm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Mm(e,t,n,i){return ah(e,t,n,i),Du(e)}function Za(e,t){return ah(e,null,null,t),Du(e)}function Gy(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Wn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function Du(e){if(50<xl)throw xl=0,vu=null,Error(k(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ur={};function qE(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(e,t,n,i){return new qE(e,t,n,i)}function bm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function os(e,t){var n=e.alternate;return n===null?(n=Dn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ky(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function cu(e,t,n,i,s,a){var r=0;if(i=e,typeof i=="function")bm(i)&&(r=1);else if(typeof i=="string")r=vA(e,n,Xi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(i){case sp:return e=Dn(31,n,t,s),e.elementType=sp,e.lanes=a,e;case Tr:return La(n.children,s,a,t);case ry:r=8,s|=24;break;case ep:return e=Dn(12,n,t,s|2),e.elementType=ep,e.lanes=a,e;case np:return e=Dn(13,n,t,s),e.elementType=np,e.lanes=a,e;case ip:return e=Dn(19,n,t,s),e.elementType=ip,e.lanes=a,e;case L1:case ap:return e=s|32,e=Dn(30,n,t,e),e.elementType=ap,e.lanes=a,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Hi:r=10;break t;case oy:r=9;break t;case um:r=11;break t;case hm:r=14;break t;case Os:r=16,i=null;break t}r=29,n=Error(k(130,e===null?"null":typeof e,"")),i=null}return t=Dn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function La(e,t,n,i){return e=Dn(7,e,i,t),e.lanes=n,e}function Od(e,t,n){return e=Dn(6,e,null,t),e.lanes=n,e}function Xy(e){var t=Dn(18,null,null,0);return t.stateNode=e,t}function Id(e,t,n){return t=Dn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var G_=new WeakMap;function li(e,t){if(typeof e=="object"&&e!==null){var n=G_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:x_(t)},G_.set(e,t),t)}return{value:e,source:t,stack:x_(t)}}var Lr=[],Or=0,Nu=null,Tl=0,ai=[],ri=0,$s=null,Gi=1,ki="";function as(e,t){Lr[Or++]=Tl,Lr[Or++]=Nu,Nu=e,Tl=t}function Wy(e,t,n){ai[ri++]=Gi,ai[ri++]=ki,ai[ri++]=$s,$s=e;var i=Gi;e=ki;var s=32-Wn(i)-1;i&=~(1<<s),n+=1;var a=32-Wn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Gi=1<<32-Wn(t)+s|n<<s|i,ki=a+e}else Gi=1<<a|n<<s|i,ki=e}function rh(e){e.return!==null&&(as(e,1),Wy(e,1,0))}function Em(e){for(;e===Nu;)Nu=Lr[--Or],Lr[Or]=null,Tl=Lr[--Or],Lr[Or]=null;for(;e===$s;)$s=ai[--ri],ai[ri]=null,ki=ai[--ri],ai[ri]=null,Gi=ai[--ri],ai[ri]=null}function qy(e,t){ai[ri++]=Gi,ai[ri++]=ki,ai[ri++]=$s,Gi=t.id,ki=t.overflow,$s=e}var je=null,ye=null,Gt=!1,Xs=null,ci=!1,vp=Error(k(519));function ta(e){var t=Error(k(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Al(li(t,e)),vp}function k_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[en]=e,t[Ln]=i,n){case"dialog":Wt("cancel",t),Wt("close",t);break;case"iframe":case"object":case"embed":Wt("load",t);break;case"video":case"audio":for(n=0;n<Dl.length;n++)Wt(Dl[n],t);break;case"source":Wt("error",t);break;case"img":case"image":case"link":Wt("error",t),Wt("load",t);break;case"details":Wt("toggle",t);break;case"input":Wt("invalid",t),My(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Wt("invalid",t);break;case"textarea":Wt("invalid",t),Ey(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||CS(t.textContent,n)?(i.popover!=null&&(Wt("beforetoggle",t),Wt("toggle",t)),i.onScroll!=null&&Wt("scroll",t),i.onScrollEnd!=null&&Wt("scrollend",t),i.onClick!=null&&(t.onclick=Vi),t=!0):t=!1,t||ta(e,!0)}function Uu(e){for(je=e.return;je;)switch(je.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:je=je.return}}function yr(e){if(e!==je)return!1;if(!Gt)return Uu(e),Gt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||nm(e.type,e.memoizedProps)),n=!n),n&&ye&&ta(e),Uu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));ye=Fv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));ye=Fv(e)}else t===27?(t=ye,aa(e.type)?(e=rm,rm=null,ye=e):ye=t):ye=je?ui(e.stateNode.nextSibling):null;return!0}function za(){ye=je=null,Gt=!1}function Pd(){var e=Xs;return e!==null&&(Cn===null?Cn=e:Cn.push.apply(Cn,e),Xs=null),e}function Al(e){Xs===null?Xs=[e]:Xs.push(e)}var yp=Yi(null),Ka=null,rs=null;function Fs(e,t,n){xe(yp,t._currentValue),t._currentValue=n}function ls(e){e._currentValue=yp.current,sn(yp)}function uu(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function xp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),uu(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error(k(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),uu(r,n,e),r=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),uu(s.return,n,e),r=s.child,r=r!==null?r.sibling:null):r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Ba(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error(k(387));if(r=r.memoizedProps,r!==null){var o=s.type;Yn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===Eu.current){if(r=s.alternate,r===null)throw Error(k(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(no):e=[no])}s=s.return}return e!==null&&xp(t,e,n,i),t.flags|=262144,e!==null}function Lu(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fa(e){Ka=e,rs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return Yy(Ka,e)}function qc(e,t){return Ka===null&&Fa(e),Yy(e,t)}function Yy(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},rs===null){if(e===null)throw Error(k(308));rs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else rs=rs.next=t;return n}var YE=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},ZE=Xe.unstable_scheduleCallback,KE=Xe.unstable_NormalPriority,Fe={$$typeof:Hi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tm(){return{controller:new YE,data:new Map,refCount:0}}function kl(e){e.refCount--,e.refCount===0&&ZE(KE,function(){e.controller.abort()})}function X_(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var rl=null;function JE(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var hl=null,Sp=0,Ha=0,Fr=null;function QE(e,t){if(hl===null){var n=hl=[];Sp=0,Ha=$m(),Fr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Sp++,t.then(W_,W_),t}function W_(){if(--Sp===0&&(rl=null,hl!==null)){Fr!==null&&(Fr.status="fulfilled");var e=hl;hl=null,Ha=0,Fr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var q_=Rt.S;Rt.S=function(e,t){if(hS=kn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&QE(e,t),rl!==null)for(var n=$r;n!==null;)X_(n,rl),n=n.next;if(n=e.types,n!==null){for(var i=$r;i!==null;)X_(i,n),i=i.next;if(Ha!==0){i=rl,i===null&&(i=rl=[]);for(var s=0;s<n.length;s++){var a=n[s];i.indexOf(a)===-1&&i.push(a)}}}q_!==null&&q_(e,t)};var Oa=Yi(null);function Am(){var e=Oa.current;return e!==null?e:de.pooledCache}function hu(e,t){t===null?xe(Oa,Oa.current):xe(Oa,t.pool)}function Zy(){var e=Am();return e===null?null:{parent:Fe._currentValue,pool:e}}var oo=Error(k(460)),wm=Error(k(474)),oh=Error(k(542)),Ou={then:function(){}};function Y_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ky(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Vi,Vi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,K_(e),e===void 0&&!("reason"in t)?Error(k(600)):e;default:if(typeof t.status=="string")t.then(Vi,Vi);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(k(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,K_(e),e}throw Ia=t,oo}}function Ca(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Ia=n,oo):n}}var Ia=null;function Z_(){if(Ia===null)throw Error(k(459));var e=Ia;return Ia=null,e}function K_(e){if(e===oo||e===oh)throw Error(k(483))}var Hr=null,wl=0;function Yc(e){var t=wl;return wl+=1,Hr===null&&(Hr=[]),Ky(Hr,e,t)}function Ns(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Zc(e,t){throw t.$$typeof===U1?Error(k(525)):(e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Jy(e){function t(u,g){if(e){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!e)return null;for(;g!==null;)t(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key===null?g.set(u.index,u):g.set(u.key,u),u=u.sibling;return g}function s(u,g){return u=os(u,g),u.index=0,u.sibling=null,u}function a(u,g,v){return u.index=v,e?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=134217730,g)):(u.flags|=1048576,g)}function r(u){return e&&u.alternate===null&&(u.flags|=134217730),u}function o(u,g,v,y){return g===null||g.tag!==6?(g=Od(v,u.mode,y),g.return=u,g):(g=s(g,v),g.return=u,g)}function l(u,g,v,y){var T=v.type;return T===Tr?(u=f(u,g,v.props.children,y,v.key),Ns(u,v),u):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Os&&Ca(T)===g.type)?(g=s(g,v.props),Ns(g,v),g.return=u,g):(g=cu(v.type,v.key,v.props,null,u.mode,y),Ns(g,v),g.return=u,g)}function c(u,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Id(v,u.mode,y),g.return=u,g):(g=s(g,v.children||[]),g.return=u,g)}function f(u,g,v,y,T){return g===null||g.tag!==7?(g=La(v,u.mode,y,T),g.return=u,g):(g=s(g,v),g.return=u,g)}function d(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Od(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Bc:return v=cu(g.type,g.key,g.props,null,u.mode,v),Ns(v,g),v.return=u,v;case il:return g=Id(g,u.mode,v),g.return=u,g;case Os:return g=Ca(g),d(u,g,v)}if(sl(g)||Qo(g))return g=La(g,u.mode,v,null),g.return=u,g;if(typeof g.then=="function")return d(u,Yc(g),v);if(g.$$typeof===Hi)return d(u,qc(u,g),v);Zc(u,g)}return null}function h(u,g,v,y){var T=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return T!==null?null:o(u,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Bc:return v.key===T?l(u,g,v,y):null;case il:return v.key===T?c(u,g,v,y):null;case Os:return v=Ca(v),h(u,g,v,y)}if(sl(v)||Qo(v))return T!==null?null:f(u,g,v,y,null);if(typeof v.then=="function")return h(u,g,Yc(v),y);if(v.$$typeof===Hi)return h(u,g,qc(u,v),y);Zc(u,v)}return null}function p(u,g,v,y,T){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return u=u.get(v)||null,o(g,u,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Bc:return u=u.get(y.key===null?v:y.key)||null,l(g,u,y,T);case il:return u=u.get(y.key===null?v:y.key)||null,c(g,u,y,T);case Os:return y=Ca(y),p(u,g,v,y,T)}if(sl(y)||Qo(y))return u=u.get(v)||null,f(g,u,y,T,null);if(typeof y.then=="function")return p(u,g,v,Yc(y),T);if(y.$$typeof===Hi)return p(u,g,v,qc(g,y),T);Zc(g,y)}return null}function _(u,g,v,y){for(var T=null,C=null,w=g,D=g=0,E=null;w!==null&&D<v.length;D++){w.index>D?(E=w,w=null):E=w.sibling;var b=h(u,w,v[D],y);if(b===null){w===null&&(w=E);break}e&&w&&b.alternate===null&&t(u,w),g=a(b,g,D),C===null?T=b:C.sibling=b,C=b,w=E}if(D===v.length)return n(u,w),Gt&&as(u,D),T;if(w===null){for(;D<v.length;D++)w=d(u,v[D],y),w!==null&&(g=a(w,g,D),C===null?T=w:C.sibling=w,C=w);return Gt&&as(u,D),T}for(w=i(w);D<v.length;D++)E=p(w,u,D,v[D],y),E!==null&&(e&&(b=E.alternate,b!==null&&w.delete(b.key===null?D:b.key)),g=a(E,g,D),C===null?T=E:C.sibling=E,C=E);return e&&w.forEach(function(U){return t(u,U)}),Gt&&as(u,D),T}function S(u,g,v,y){if(v==null)throw Error(k(151));for(var T=null,C=null,w=g,D=g=0,E=null,b=v.next();w!==null&&!b.done;D++,b=v.next()){w.index>D?(E=w,w=null):E=w.sibling;var U=h(u,w,b.value,y);if(U===null){w===null&&(w=E);break}e&&w&&U.alternate===null&&t(u,w),g=a(U,g,D),C===null?T=U:C.sibling=U,C=U,w=E}if(b.done)return n(u,w),Gt&&as(u,D),T;if(w===null){for(;!b.done;D++,b=v.next())b=d(u,b.value,y),b!==null&&(g=a(b,g,D),C===null?T=b:C.sibling=b,C=b);return Gt&&as(u,D),T}for(w=i(w);!b.done;D++,b=v.next())b=p(w,u,D,b.value,y),b!==null&&(e&&(E=b.alternate,E!==null&&w.delete(E.key===null?D:E.key)),g=a(b,g,D),C===null?T=b:C.sibling=b,C=b);return e&&w.forEach(function(F){return t(u,F)}),Gt&&as(u,D),T}function m(u,g,v,y){if(typeof v=="object"&&v!==null&&v.type===Tr&&v.key===null&&v.props.ref===void 0&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Bc:t:{for(var T=v.key;g!==null;){if(g.key===T){if(T=v.type,T===Tr){if(g.tag===7){n(u,g.sibling),y=s(g,v.props.children),Ns(y,v),y.return=u,u=y;break t}}else if(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Os&&Ca(T)===g.type){n(u,g.sibling),y=s(g,v.props),Ns(y,v),y.return=u,u=y;break t}n(u,g);break}else t(u,g);g=g.sibling}v.type===Tr?(y=La(v.props.children,u.mode,y,v.key),Ns(y,v),y.return=u,u=y):(y=cu(v.type,v.key,v.props,null,u.mode,y),Ns(y,v),y.return=u,u=y)}return r(u);case il:t:{for(T=v.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),y=s(g,v.children||[]),y.return=u,u=y;break t}else{n(u,g);break}else t(u,g);g=g.sibling}y=Id(v,u.mode,y),y.return=u,u=y}return r(u);case Os:return v=Ca(v),m(u,g,v,y)}if(sl(v))return _(u,g,v,y);if(Qo(v)){if(T=Qo(v),typeof T!="function")throw Error(k(150));return v=T.call(v),S(u,g,v,y)}if(typeof v.then=="function")return m(u,g,Yc(v),y);if(v.$$typeof===Hi)return m(u,g,qc(u,v),y);Zc(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),y=s(g,v),y.return=u,u=y):(n(u,g),y=Od(v,u.mode,y),y.return=u,u=y),r(u)):n(u,g)}return function(u,g,v,y){try{wl=0;var T=m(u,g,v,y);return Hr=null,T}catch(w){if(w===oo||w===oh)throw w;var C=Dn(29,w,null,u.mode);return C.lanes=y,C.return=u,C}finally{}}}var Va=Jy(!0),Qy=Jy(!1),Is=!1;function Cm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ws(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function qs(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(te&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Du(e),Gy(e,null,n),t}return ah(e,i,t,n),Du(e)}function fl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,py(e,n)}}function zd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var bp=!1;function dl(){if(bp){var e=Fr;if(e!==null)throw e}}function pl(e,t,n,i){bp=!1;var s=e.updateQueue;Is=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,f=c=l=null,o=a;do{var h=o.lane&-536870913,p=h!==o.lane;if(p?(Kt&h)===h:(i&h)===h){h!==0&&h===Ha&&(bp=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,S=o;h=t;var m=n;switch(S.tag){case 1:if(_=S.payload,typeof _=="function"){d=_.call(m,d,h);break t}d=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=S.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break t;d=pe({},d,h);break t;case 2:Is=!0}}h=o.callback,h!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[h]:p.push(h))}else p={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,r|=h;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);f===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=f,a===null&&(s.shared.lanes=0),ia|=r,e.lanes=r,e.memoizedState=d}}function jy(e,t){if(typeof e!="function")throw Error(k(191,e));e.call(t)}function $y(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)jy(n[e],t)}var ea=Yi(null),Iu=Yi(0);function J_(e,t){e=ps,xe(Iu,e),xe(ea,t),ps=e|t.baseLanes}function Ep(){xe(Iu,ps),xe(ea,ea.current)}function Rm(){ps=Iu.current,sn(ea),sn(Iu)}var on=Yi(null),hn=null;function Ys(e){var t=e.alternate;xe(an,an.current&1),xe(on,e),hn===null&&(t===null||ea.current!==null||t.memoizedState!==null)&&(hn=e)}function Tp(e){xe(an,an.current),xe(on,e),hn===null&&(hn=e)}function tx(e){e.tag===22?(xe(an,an.current),xe(on,e),hn===null&&(hn=e)):Zs()}function Zs(){xe(an,an.current),xe(on,on.current)}function Hn(e){sn(on),hn===e&&(hn=null),sn(an)}var an=Yi(0);function Cl(e,t){xe(on,on.current),xe(an,t)}function Dm(e){sn(an),sn(on),hn===e&&(hn=null)}function Pu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||am(n)||ig(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hs=0,zt=null,ue=null,Be=null,zu=!1,Vr=!1,Ga=!1,Bu=0,Rl=0,Gr=null,$E=0;function Le(){throw Error(k(321))}function Nm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yn(e[n],t[n]))return!1;return!0}function Um(e,t,n,i,s,a){return hs=a,zt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rt.H=e===null||e.memoizedState===null?Nx:Ux,Ga=!1,a=n(i,s),Ga=!1,Vr&&(a=nx(t,n,i,s)),ex(e),a}function ex(e){Rt.H=Fu;var t=ue!==null&&ue.next!==null;if(hs=0,Be=ue=zt=null,zu=!1,Rl=0,Gr=null,t)throw Error(k(300));e===null||He||(e=e.dependencies,e!==null&&Lu(e)&&(He=!0))}function nx(e,t,n,i){zt=e;var s=0;do{if(Vr&&(Gr=null),Rl=0,Vr=!1,25<=s)throw Error(k(301));if(s+=1,Be=ue=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Rt.H=oT,a=t(n,i)}while(Vr);return a}function tT(){var e=Rt.H,t=e.useState()[0];return t=typeof t.then=="function"?Xl(t):t,e=e.useState()[0],(ue!==null?ue.memoizedState:null)!==e&&(zt.flags|=1024),t}function Lm(){var e=Bu!==0;return Bu=0,e}function Om(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Im(e){if(zu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}zu=!1}hs=0,Be=ue=zt=null,Vr=!1,Rl=Bu=0,Gr=null}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?zt.memoizedState=Be=e:Be=Be.next=e,Be}function Pe(){if(ue===null){var e=zt.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=Be===null?zt.memoizedState:Be.next;if(t!==null)Be=t,ue=e;else{if(e===null)throw zt.alternate===null?Error(k(467)):Error(k(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},Be===null?zt.memoizedState=Be=e:Be=Be.next=e}return Be}function lh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xl(e){var t=Rl;return Rl+=1,Gr===null&&(Gr=[]),e=Ky(Gr,e,t),t=zt,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,Rt.H=t===null||t.memoizedState===null?Nx:Ux),e}function ch(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xl(e);if(e.$$typeof===I1)return;if(e.$$typeof===Hi)return nn(e)}throw Error(k(438,String(e)))}function Pm(e){var t=null,n=zt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=zt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=lh(),zt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=O1;return t.index++,n}function fs(e,t){return typeof t=="function"?t(e):t}function fu(e){var t=Pe();return zm(t,ue,e)}function zm(e,t,n){var i=e.queue;if(i===null)throw Error(k(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,f=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Kt&d)===d:(hs&d)===d){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Ha&&(f=!0);else if((hs&h)===h){c=c.next,h===Ha&&(f=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,zt.lanes|=h,ia|=h;d=c.action,Ga&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else h={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,r=a):l=l.next=h,zt.lanes|=d,ia|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Yn(a,e.memoizedState)&&(He=!0,f&&(n=Fr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Bd(e){var t=Pe(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Yn(a,t.memoizedState)||(He=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function ix(e,t,n){var i=zt,s=Pe(),a=Gt;if(a){if(n===void 0)throw Error(k(407));n=n()}else n=t();var r=!Yn((ue||s).memoizedState,n);if(r&&(s.memoizedState=n,He=!0),s=s.queue,Bm(rx.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||r||Be!==null&&(Be.memoizedState.tag&1)!==0,Kr(e?9:8,{destroy:void 0},ax.bind(null,i,s,n,t),null),e){if(i.flags|=2048,de===null)throw Error(k(349));a||(hs&127)!==0||sx(i,t,n)}return n}function sx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=zt.updateQueue,t===null?(t=lh(),zt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ax(e,t,n,i){t.value=n,t.getSnapshot=i,ox(t)&&lx(e)}function rx(e,t,n){return n(function(){ox(t)&&lx(e)})}function ox(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yn(e,n)}catch{return!0}}function lx(e){var t=Za(e,2);t!==null&&Nn(t,e,2)}function Ap(e){var t=Sn();if(typeof e=="function"){var n=e;if(e=n(),Ga){zs(!0);try{n()}finally{zs(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:e},t}function cx(e,t,n,i){return e.baseState=n,zm(e,ue,typeof i=="function"?i:fs)}function eT(e,t,n,i,s){if(hh(e))throw Error(k(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Rt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,ux(t,a)):(a.next=n.next,t.pending=n.next=a)}}function ux(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Rt.T,r={};r.types=a!==null?a.types:null,Rt.T=r;try{var o=n(s,i),l=Rt.S;l!==null&&l(r,o),Q_(e,t,o)}catch(c){wp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Rt.T=a}}else try{a=n(s,i),Q_(e,t,a)}catch(c){wp(e,t,c)}}function Q_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){j_(e,t,i)},function(i){return wp(e,t,i)}):j_(e,t,n)}function j_(e,t,n){t.status="fulfilled",t.value=n,hx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,ux(e,n)))}function wp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,hx(t),t=t.next;while(t!==i)}e.action=null}function hx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function fx(e,t){return t}function $_(e,t){if(Gt){var n=de.formState;if(n!==null){t:{var i=zt;if(Gt){if(ye){e:{for(var s=ye,a=ci;s.nodeType!==8;){if(!a){s=null;break e}if(s=ui(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){ye=ui(s.nextSibling),i=s.data==="F!";break t}}ta(i)}i=!1}i&&(t=n[0])}}return n=Sn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fx,lastRenderedState:t},n.queue=i,n=Cx.bind(null,zt,i),i.dispatch=n,i=Ap(!1),a=Gm.bind(null,zt,!1,i.queue),i=Sn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=eT.bind(null,zt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function tv(e){var t=Pe();return dx(t,ue,e)}function dx(e,t,n){if(t=zm(e,t,fx)[0],e=fu(fs)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Xl(t)}catch(r){throw r===oo?oh:r}else i=t;t=Pe();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(zt.flags|=2048,Kr(9,{destroy:void 0},nT.bind(null,s,n),null)),[i,a,e]}function nT(e,t){e.action=t}function ev(e){var t=Pe(),n=ue;if(n!==null)return dx(t,n,e);Pe(),t=t.memoizedState,n=Pe();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Kr(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=zt.updateQueue,t===null&&(t=lh(),zt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function px(){return Pe().memoizedState}function du(e,t,n,i){var s=Sn();zt.flags|=e,s.memoizedState=Kr(1|t,{destroy:void 0},n,i===void 0?null:i)}function uh(e,t,n,i){var s=Pe();i=i===void 0?null:i;var a=s.memoizedState.inst;ue!==null&&i!==null&&Nm(i,ue.memoizedState.deps)?s.memoizedState=Kr(t,a,n,i):(zt.flags|=e,s.memoizedState=Kr(1|t,a,n,i))}function nv(e,t){du(8390656,8,e,t)}function Bm(e,t){uh(2048,8,e,t)}function iT(e){zt.flags|=4;var t=zt.updateQueue;if(t===null)t=lh(),zt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function mx(e){var t=Pe().memoizedState;return iT({ref:t,nextImpl:e}),function(){if((te&2)!==0)throw Error(k(440));return t.impl.apply(void 0,arguments)}}function gx(e,t){return uh(4,2,e,t)}function _x(e,t){return uh(4,4,e,t)}function vx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yx(e,t,n){n=n!=null?n.concat([e]):null,uh(4,4,vx.bind(null,t,e),n)}function Fm(){}function xx(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Nm(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Sx(e,t){var n=Pe();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Nm(t,i[1]))return i[0];if(i=e(),Ga){zs(!0);try{e()}finally{zs(!1)}}return n.memoizedState=[i,t],i}function Hm(e,t,n){return n===void 0||(hs&1073741824)!==0&&(Kt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=dS(),zt.lanes|=e,ia|=e,n)}function Mx(e,t,n,i){return Yn(n,t)?n:ea.current!==null?(e=Hm(e,n,i),Yn(e,t)||(He=!0),e):(hs&106)===0||(hs&1073741824)!==0&&(Kt&261930)===0?(He=!0,e.memoizedState=n):(e=dS(),zt.lanes|=e,ia|=e,t)}function bx(e,t,n,i,s){var a=ee.p;ee.p=a!==0&&8>a?a:8;var r=Rt.T,o={};o.types=r!==null?r.types:null,Rt.T=o,Gm(e,!1,t,n);try{var l=s(),c=Rt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=jE(l,i);ml(e,t,f,qn(e))}else ml(e,t,i,qn(e))}catch(d){ml(e,t,{then:function(){},status:"rejected",reason:d},qn())}finally{ee.p=a,r!==null&&o.types!==null&&(r.types=o.types),Rt.T=r}}function sT(){}function Cp(e,t,n,i){if(e.tag!==5)throw Error(k(476));var s=Ex(e).queue;bx(e,s,t,Ua,n===null?sT:function(){return Tx(e),n(i)})}function Ex(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Ua,baseState:Ua,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:Ua},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fs,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Tx(e){var t=Ex(e);t.next===null&&(t=e.alternate.memoizedState),ml(e,t.next.queue,{},qn())}function Vm(){return nn(no)}function Ax(){return Pe().memoizedState}function wx(){return Pe().memoizedState}function aT(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=qn();e=Ws(n);var i=qs(t,e,n);i!==null&&(Nn(i,t,n),fl(i,t,n)),t={cache:Tm()},e.payload=t;return}t=t.return}}function rT(e,t,n){var i=qn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},hh(e)?Rx(t,n):(n=Mm(e,t,n,i),n!==null&&(Nn(n,e,i),Dx(n,t,i)))}function Cx(e,t,n){var i=qn();ml(e,t,n,i)}function ml(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(hh(e))Rx(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Yn(o,r))return ah(e,t,s,0),de===null&&sh(),!1}catch{}finally{}if(n=Mm(e,t,s,i),n!==null)return Nn(n,e,i),Dx(n,t,i),!0}return!1}function Gm(e,t,n,i){if(i={lane:2,revertLane:$m(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},hh(e)){if(t)throw Error(k(479))}else t=Mm(e,n,i,2),t!==null&&Nn(t,e,2)}function hh(e){var t=e.alternate;return e===zt||t!==null&&t===zt}function Rx(e,t){Vr=zu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dx(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,py(e,n)}}var Fu={readContext:nn,use:ch,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le,useEffectEvent:Le},Nx={readContext:nn,use:ch,useCallback:function(e,t){return Sn().memoizedState=[e,t===void 0?null:t],e},useContext:nn,useEffect:nv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,du(4194308,4,vx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return du(4194308,4,e,t)},useInsertionEffect:function(e,t){du(4,2,e,t)},useMemo:function(e,t){var n=Sn();t=t===void 0?null:t;var i=e();if(Ga){zs(!0);try{e()}finally{zs(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Sn();if(n!==void 0){var s=n(t);if(Ga){zs(!0);try{n(t)}finally{zs(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=rT.bind(null,zt,e),[i.memoizedState,e]},useRef:function(e){var t=Sn();return e={current:e},t.memoizedState=e},useState:function(e){e=Ap(e);var t=e.queue,n=Cx.bind(null,zt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Fm,useDeferredValue:function(e,t){var n=Sn();return Hm(n,e,t)},useTransition:function(){var e=Ap(!1);return e=bx.bind(null,zt,e.queue,!0,!1),Sn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=zt,s=Sn();if(Gt){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),de===null)throw Error(k(349));(Kt&127)!==0||sx(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,nv(rx.bind(null,i,a,e),[e]),i.flags|=2048,Kr(9,{destroy:void 0},ax.bind(null,i,a,n,t),null),n},useId:function(){var e=Sn(),t=de.identifierPrefix;if(Gt){var n=ki,i=Gi;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Bu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=$E++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Vm,useFormState:$_,useActionState:$_,useOptimistic:function(e){var t=Sn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Gm.bind(null,zt,!0,n),n.dispatch=t,[e,t]},useMemoCache:Pm,useCacheRefresh:function(){return Sn().memoizedState=aT.bind(null,zt)},useEffectEvent:function(e){var t=Sn(),n={impl:e};return t.memoizedState=n,function(){if((te&2)!==0)throw Error(k(440));return n.impl.apply(void 0,arguments)}}},Ux={readContext:nn,use:ch,useCallback:xx,useContext:nn,useEffect:Bm,useImperativeHandle:yx,useInsertionEffect:gx,useLayoutEffect:_x,useMemo:Sx,useReducer:fu,useRef:px,useState:function(){return fu(fs)},useDebugValue:Fm,useDeferredValue:function(e,t){var n=Pe();return Mx(n,ue.memoizedState,e,t)},useTransition:function(){var e=fu(fs)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Xl(e),t]},useSyncExternalStore:ix,useId:Ax,useHostTransitionStatus:Vm,useFormState:tv,useActionState:tv,useOptimistic:function(e,t){var n=Pe();return cx(n,ue,e,t)},useMemoCache:Pm,useCacheRefresh:wx,useEffectEvent:mx},oT={readContext:nn,use:ch,useCallback:xx,useContext:nn,useEffect:Bm,useImperativeHandle:yx,useInsertionEffect:gx,useLayoutEffect:_x,useMemo:Sx,useReducer:Bd,useRef:px,useState:function(){return Bd(fs)},useDebugValue:Fm,useDeferredValue:function(e,t){var n=Pe();return ue===null?Hm(n,e,t):Mx(n,ue.memoizedState,e,t)},useTransition:function(){var e=Bd(fs)[0],t=Pe().memoizedState;return[typeof e=="boolean"?e:Xl(e),t]},useSyncExternalStore:ix,useId:Ax,useHostTransitionStatus:Vm,useFormState:ev,useActionState:ev,useOptimistic:function(e,t){var n=Pe();return ue!==null?cx(n,ue,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Pm,useCacheRefresh:wx,useEffectEvent:mx};function Fd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Rp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=qn(),s=Ws(i);s.payload=t,n!=null&&(s.callback=n),t=qs(e,s,i),t!==null&&(Nn(t,e,i),fl(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=qn(),s=Ws(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=qs(e,s,i),t!==null&&(Nn(t,e,i),fl(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qn(),i=Ws(n);i.tag=2,t!=null&&(i.callback=t),t=qs(e,i,n),t!==null&&(Nn(t,e,n),fl(t,e,n))}};function iv(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!El(n,i)||!El(s,a):!0}function sv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Rp.enqueueReplaceState(t,t.state,null)}function ka(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=pe({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Lx(e){Ru(e)}function Ox(e){console.error(e)}function Ix(e){Ru(e)}function Hu(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function av(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Dp(e,t,n){return n=Ws(n),n.tag=3,n.payload={element:null},n.callback=function(){Hu(e,t)},n}function Px(e){return e=Ws(e),e.tag=3,e}function zx(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){av(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){av(t,n,i),typeof s!="function"&&(Ks===null?Ks=new Set([this]):Ks.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function lT(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Ba(t,n,s,!0),n=on.current,n!==null){switch(n.tag){case 31:case 13:case 19:return hn===null?Zu():n.alternate===null&&Oe===0&&(Oe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Ou?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),qd(e,i,s)),!1;case 22:return n.flags|=65536,i===Ou?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),qd(e,i,s)),!1}throw Error(k(435,n.tag))}return qd(e,i,s),Zu(),!1}if(Gt)return t=on.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==vp&&(e=Error(k(422),{cause:i}),Al(li(e,n)))):(i!==vp&&(t=Error(k(423),{cause:i}),Al(li(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=li(i,n),s=Dp(e.stateNode,i,s),zd(e,s),Oe!==4&&(Oe=2)),!1;var a=Error(k(520),{cause:i});if(a=li(a,n),yl===null?yl=[a]:yl.push(a),Oe!==4&&(Oe=2),t===null)return!0;i=li(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Dp(n.stateNode,i,e),zd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Ks===null||!Ks.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=Px(s),zx(s,e,n,i),zd(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var km=Error(k(461)),He=!1;function Ge(e,t,n,i){t.child=e===null?Qy(t,null,n,i):Va(t,e.child,n,i)}function rv(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Fa(t),i=Um(e,t,n,r,a,s),o=Lm(),e!==null&&!He?(Om(e,t,s),ds(e,t,s)):(Gt&&o&&rh(t),t.flags|=1,Ge(e,t,i,s),t.child)}function ov(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!bm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,Bx(e,t,a,i,s)):(e=cu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Wm(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:El,n(r,i)&&e.ref===t.ref)return ds(e,t,s)}return t.flags|=1,e=os(a,i),e.ref=t.ref,e.return=t,t.child=e}function Bx(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(El(a,i)&&e.ref===t.ref)if(He=!1,t.pendingProps=i=a,Wm(e,s))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,ds(e,t,s)}return Np(e,t,n,i,s)}function Fx(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return lv(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&hu(t,a!==null?a.cachePool:null),a!==null?J_(t,a):Ep(),tx(t);else return i=t.lanes=536870912,lv(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(hu(t,a.cachePool),J_(t,a),Zs(),t.memoizedState=null):(e!==null&&hu(t,null),Ep(),Zs());return Ge(e,t,s,n),t.child}function gl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lv(e,t,n,i,s){var a=Am();return a=a===null?null:{parent:Fe._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&hu(t,null),Ep(),tx(t),e!==null&&Ba(e,t,i,!0),t.childLanes=s,null}function pu(e,t){return t=fh({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function cv(e,t,n){return Va(t,e.child,null,n),e=pu(t,t.pendingProps),e.flags|=2,Hn(t),t.memoizedState=null,e}function cT(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Gt){if(i.mode==="hidden")return e=pu(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},gl(null,e);if(Tp(t),(e=ye)?(e=FS(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$s!==null?{id:Gi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},n=Xy(e),n.return=t,t.child=n,je=t,ye=null)):e=null,e===null)throw ta(t);return t.lanes=536870912,null}return pu(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(Tp(t),s)if(t.flags&256)t.flags&=-257,t=cv(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(k(558));else if(He||Ba(e,t,n,!1),s=(n&e.childLanes)!==0,He||s){if(ea.current===null){if(i=de,i!==null&&(r=my(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Za(e,r),Nn(i,e,r),km;Zu()}t=cv(e,t,n)}else e=a.treeContext,ye=ui(r.nextSibling),je=t,Gt=!0,Xs=null,ci=!1,e!==null&&qy(t,e),t=pu(t,i),t.flags|=134221824;return t}return e=os(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Sr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(k(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Np(e,t,n,i,s){return Fa(t),n=Um(e,t,n,i,void 0,s),i=Lm(),e!==null&&!He?(Om(e,t,s),ds(e,t,s)):(Gt&&i&&rh(t),t.flags|=1,Ge(e,t,n,s),t.child)}function uv(e,t,n,i,s,a){return Fa(t),t.updateQueue=null,n=nx(t,i,n,s),ex(e),i=Lm(),e!==null&&!He?(Om(e,t,a),ds(e,t,a)):(Gt&&i&&rh(t),t.flags|=1,Ge(e,t,n,a),t.child)}function hv(e,t,n,i,s){if(Fa(t),t.stateNode===null){var a=Ur,r=n.contextType;typeof r=="object"&&r!==null&&(a=nn(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Rp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},Cm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?nn(r):Ur,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Fd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Rp.enqueueReplaceState(a,a.state,null),pl(t,i,a,s),dl(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=ka(n,o);a.props=l;var c=a.context,f=n.contextType;r=Ur,typeof f=="object"&&f!==null&&(r=nn(f));var d=n.getDerivedStateFromProps;f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&sv(t,a,i,r),Is=!1;var h=t.memoizedState;a.state=h,pl(t,i,a,s),dl(),c=t.memoizedState,o||h!==c||Is?(typeof d=="function"&&(Fd(t,n,d,i),c=t.memoizedState),(l=Is||iv(t,n,l,i,h,c,r))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,Mp(e,t),r=t.memoizedProps,f=ka(n,r),a.props=f,d=t.pendingProps,h=a.context,c=n.contextType,l=Ur,typeof c=="object"&&c!==null&&(l=nn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||h!==l)&&sv(t,a,i,l),Is=!1,h=t.memoizedState,a.state=h,pl(t,i,a,s),dl();var p=t.memoizedState;r!==d||h!==p||Is||e!==null&&e.dependencies!==null&&Lu(e.dependencies)?(typeof o=="function"&&(Fd(t,n,o,i),p=t.memoizedState),(f=Is||iv(t,n,f,i,h,p,l)||e!==null&&e.dependencies!==null&&Lu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=f):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,Sr(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Va(t,e.child,null,s),t.child=Va(t,null,n,s)):Ge(e,t,n,s),t.memoizedState=a.state,e=t.child):e=ds(e,t,s),e}function fv(e,t,n,i){return za(),t.flags|=256,Ge(e,t,n,i),t.child}var Up={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lp(e){return{baseLanes:e,cachePool:Zy()}}function Op(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Gn),e}function Hx(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Gt){if(s?Ys(t):Zs(),(e=ye)?(e=FS(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$s!==null?{id:Gi,overflow:ki}:null,retryLane:536870912,hydrationErrors:null},n=Xy(e),n.return=t,t.child=n,je=t,ye=null)):e=null,e===null)throw ta(t);return ig(e)?t.lanes=32:t.lanes=536870912,null}return a=i.children,i=i.fallback,s?(Zs(),s=t.mode,a=fh({mode:"hidden",children:a},s),i=La(i,s,n,null),a.return=t,i.return=t,a.sibling=i,t.child=a,i=t.child,i.memoizedState=Lp(n),i.childLanes=Op(e,r,n),t.memoizedState=Up,gl(null,i)):(Ys(t),Xm(t,a))}var o=e.memoizedState;if(o!==null){var l=o.dehydrated;if(l!==null)return uT(e,t,a,r,i,l,o,n)}return s?(Zs(),s=i.fallback,a=t.mode,o=e.child,l=o.sibling,i=os(o,{mode:"hidden",children:i.children}),i.subtreeFlags=o.subtreeFlags&1206910976,l!==null?s=os(l,s):(s=La(s,a,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,gl(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Lp(n):(a=s.cachePool,a!==null?(o=Fe._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=Zy(),s={baseLanes:s.baseLanes|n,cachePool:a}),i.memoizedState=s,i.childLanes=Op(e,r,n),t.memoizedState=Up,gl(e.child,i)):(Ys(t),n=e.child,e=n.sibling,n=os(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Xm(e,t){return t=fh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function fh(e,t){return e=Dn(22,e,null,t),e.lanes=0,e}function Kc(e,t,n){return Va(t,e.child,null,n),e=Xm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uT(e,t,n,i,s,a,r,o){if(n)return t.flags&256?(Ys(t),t.flags&=-257,Kc(e,t,o)):t.memoizedState!==null?(Zs(),t.child=e.child,t.flags|=128,null):(Zs(),a=s.fallback,r=t.mode,s=fh({mode:"visible",children:s.children},r),a=La(a,r,o,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,Va(t,e.child,null,o),s=t.child,s.memoizedState=Lp(o),s.childLanes=Op(e,i,o),t.memoizedState=Up,gl(null,s));if(Ys(t),ig(a)){if(i=a.nextSibling&&a.nextSibling.dataset,i)var l=i.dgst;return i=l,i!==""&&(s=Error(k(419)),s.stack="",s.digest=i,Al({value:s,source:null,stack:null})),Kc(e,t,o)}if(He||Ba(e,t,o,!1),i=(o&e.childLanes)!==0,He||i){if(ea.current!==null)return Kc(e,t,o);if(i=de,i!==null&&(s=my(i,o),s!==0&&s!==r.retryLane))throw r.retryLane=s,Za(e,s),Nn(i,e,s),km;return am(a)||Zu(),Kc(e,t,o)}return am(a)?(t.flags|=192,t.child=e.child,null):(e=r.treeContext,ye=ui(a.nextSibling),je=t,Gt=!0,Xs=null,ci=!1,e!==null&&qy(t,e),t=Xm(t,s.children),t.flags|=134221824,t)}function dv(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),uu(e.return,t,n)}function pv(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Pu(n)===null&&(t=e),e=e.sibling}return t}function Jc(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function Hd(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Ip(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=an.current;if(t.flags&128)return Cl(t,r),null;var o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Cl(t,r),s==="backwards"&&e!==null?(Hd(e),Ge(e,t,i,n),Hd(e)):Ge(e,t,i,n),i=Gt?Tl:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dv(e,n,t);else if(e.tag===19)dv(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=pv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Hd(t)),Jc(t,!0,s,null,a,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Pu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Jc(t,!0,n,null,a,i);break;case"together":Jc(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=pv(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Jc(t,!1,s,n,a,i)}return t.child}function mv(e,t,n){var i=t.pendingProps;return Fs(t,t.type,i.value),Ge(e,t,i.children,n),t.child}function ds(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ia|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ba(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=os(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=os(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wm(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Lu(e)))}function hT(e,t,n){switch(t.tag){case 3:Tu(t,t.stateNode.containerInfo),Fs(t,Fe,e.memoizedState.cache),za();break;case 27:case 5:lp(t);break;case 4:Tu(t,t.stateNode.containerInfo);break;case 10:Fs(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Tp(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Ys(t),t.flags|=128,null;i=Ba(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?Hx(e,t,n):(Ys(t),e=ds(e,t,n),e!==null?e.sibling:null)}Ys(t);break;case 19:if(t.flags&128)return Ip(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Ba(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Ip(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Cl(t,an.current),i)break;return null;case 22:return t.lanes=0,Fx(e,t,n,t.pendingProps);case 24:Fs(t,Fe,e.memoizedState.cache)}return ds(e,t,n)}function Vx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Wm(e,n)&&(t.flags&128)===0)return He=!1,hT(e,t,n);He=(e.flags&131072)!==0}else He=!1,Gt&&(t.flags&1048576)!==0&&Wy(t,Tl,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ca(t.elementType),t.type=e,typeof e=="function")bm(e)?(i=ka(e,i),t.tag=1,t=hv(null,t,e,i,n)):(t.tag=0,t=Np(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===um){t.tag=11,t=rv(null,t,e,i,n);break t}else if(s===hm){t.tag=14,t=ov(null,t,e,i,n);break t}else if(s===Hi){t.tag=10,t.type=e,t=mv(null,t,n);break t}}throw t=rp(e)||e,Error(k(306,t,""))}}return t;case 0:return Np(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=ka(i,t.pendingProps),hv(e,t,i,s,n);case 3:t:{if(Tu(t,t.stateNode.containerInfo),e===null)throw Error(k(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,Mp(e,t),pl(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Fs(t,Fe,i),i!==a.cache&&xp(t,[Fe],n,!0),dl(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=fv(e,t,i,n);break t}else if(i!==s){s=li(Error(k(424)),t),Al(s),t=fv(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=ui(e.firstChild),je=t,Gt=!0,Xs=null,ci=!0,n=Qy(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(za(),i===s){t=ds(e,t,n);break t}Ge(e,t,i,n)}t=t.child}return t;case 26:return Sr(e,t),e===null?(n=Gv(t.type,null,t.pendingProps,null))?t.memoizedState=n:Gt||(t.stateNode=DS(t.type,t.pendingProps,ks.current,t)):t.memoizedState=Gv(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return lp(t),e===null&&Gt&&(i=t.stateNode=HS(t.type,t.pendingProps,ks.current),je=t,ci=!0,s=ye,aa(t.type)?(rm=s,ye=ui(i.firstChild)):ye=s),Ge(e,t,t.pendingProps.children,n),Sr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Gt&&((s=i=ye)&&(i=iA(i,t.type,t.pendingProps,ci),i!==null?(t.stateNode=i,je=t,ye=ui(i.firstChild),ci=!1,s=!0):s=!1),s||ta(t)),lp(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,nm(s,a)?i=null:r!==null&&nm(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=Um(e,t,tT,null,null,n),no._currentValue=s),Sr(e,t),Ge(e,t,i,n),t.child;case 6:return e===null&&Gt&&((e=n=ye)&&(n=sA(n,t.pendingProps,ci),n!==null?(t.stateNode=n,je=t,ye=null,e=!0):e=!1),e||ta(t)),null;case 13:return Hx(e,t,n);case 4:return Tu(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Va(t,null,i,n):Ge(e,t,i,n),t.child;case 11:return rv(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,Sr(e,t),Ge(e,t,i,n),t.child;case 8:return Ge(e,t,t.pendingProps.children,n),t.child;case 12:return Ge(e,t,t.pendingProps.children,n),t.child;case 10:return mv(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,Fa(t),s=nn(s),i=i(s),t.flags|=1,Ge(e,t,i,n),t.child;case 14:return ov(e,t,t.type,t.pendingProps,n);case 15:return Bx(e,t,t.type,t.pendingProps,n);case 19:return Ip(e,t,n);case 31:return cT(e,t,n);case 22:return Fx(e,t,n,t.pendingProps);case 24:return Fa(t),i=nn(Fe),e===null?(s=Am(),s===null&&(s=de,a=Tm(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},Cm(t),Fs(t,Fe,s)):((e.lanes&n)!==0&&(Mp(e,t),pl(t,null,null,n),dl()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Fs(t,Fe,i)):(i=a.cache,Fs(t,Fe,i),i!==s.cache&&xp(t,[Fe],n,!0))),Ge(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:Gt&&rh(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:Sr(e,t),Ge(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(k(156,t.tag))}function ss(e){e.flags|=4}function Vd(e,t,n,i,s){var a;if((a=(e.mode&32)!==0)&&(a=n===null?Wv(t,i):Wv(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(gS())e.flags|=8192;else throw Ia=Ou,wm}else e.flags&=-16777217}function gv(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!XS(t))if(gS())e.flags|=8192;else throw Ia=Ou,wm}function Qc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?fy():536870912,e.lanes|=t,Jr|=t)}function $o(e,t){if(!Gt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function fT(e,t,n){var i=t.pendingProps;switch(Em(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return ve(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),ls(Fe),qr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(yr(t)?ss(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Pd())),ve(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(ss(t),a!==null?(ve(t),gv(t,a)):(ve(t),Vd(t,s,null,i,n))):a?a!==e.memoizedState?(ss(t),ve(t),gv(t,a)):(ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&ss(t),ve(t),Vd(t,s,e,i,n)),null;case 27:if(Au(t),n=ks.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ss(t);else{if(!i){if(t.stateNode===null)throw Error(k(166));return ve(t),t.subtreeFlags&=-33554433,null}e=Xi.current,yr(t)?k_(t,e):(e=HS(s,i,n),t.stateNode=e,ss(t))}return ve(t),t.subtreeFlags&=-33554433,null;case 5:if(Au(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&ss(t);else{if(!i){if(t.stateNode===null)throw Error(k(166));return ve(t),t.subtreeFlags&=-33554433,null}if(a=Xi.current,yr(t))k_(t,a);else{var r=Ul(ks.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[en]=t,a[Ln]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(rn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&ss(t)}}return ve(t),t.subtreeFlags&=-33554433,Vd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&ss(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(k(166));if(e=ks.current,yr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=je,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[en]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||CS(e.nodeValue,n)),e||ta(t,!0)}else e=Ul(e).createTextNode(i),e[en]=t,t.stateNode=e}return ve(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=yr(t),n!==null){if(e===null){if(!i)throw Error(k(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(557));e[en]=t}else za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),e=!1}else n=Pd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Hn(t),t):(Hn(t),null);if((t.flags&128)!==0)throw Error(k(558))}return ve(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=yr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(k(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[en]=t}else za(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),s=!1}else s=Pd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(Hn(t),t):(Hn(t),null)}return Hn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Qc(t,t.updateQueue),ve(t),null);case 4:return qr(),e===null&&tg(t.stateNode.containerInfo),t.flags|=67108864,ve(t),null;case 10:return ls(t.type),ve(t),null;case 19:if(Dm(t),i=t.memoizedState,i===null)return ve(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)$o(i,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=Pu(e),a!==null){for(t.flags|=128,$o(i,!1),e=a.updateQueue,t.updateQueue=e,Qc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ky(n,e),n=n.sibling;return Cl(t,an.current&1|2),Gt&&as(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&kn()>qu&&(t.flags|=128,s=!0,$o(i,!1),t.lanes=4194304)}else{if(!s)if(e=Pu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Qc(t,e),$o(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!a.alternate&&!Gt)return ve(t),null}else 2*kn()-i.renderingStartTime>qu&&n!==536870912&&(t.flags|=128,s=!0,$o(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}if(i.tail!==null){e=i.tail;t:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=kn(),e.sibling=null,a=an.current,a=s?a&1|2:a&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||Gt?Cl(t,a):(n=a,xe(on,t),xe(an,n),hn===null&&(hn=t)),Gt&&as(t,i.treeForkCount),e}return ve(t),null;case 22:case 23:return Hn(t),Rm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),n=t.updateQueue,n!==null&&Qc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&sn(Oa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ls(Fe),ve(t),null;case 25:return null;case 30:return t.flags|=33554432,ve(t),null}throw Error(k(156,t.tag))}function dT(e,t){switch(Em(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ls(Fe),qr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Au(t),null;case 31:if(t.memoizedState!==null){if(Hn(t),t.alternate===null)throw Error(k(340));za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Hn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));za()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Dm(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return qr(),null;case 10:return ls(t.type),null;case 22:case 23:return Hn(t),Rm(),e!==null&&sn(Oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ls(Fe),null;case 25:return null;default:return null}}function Gx(e,t){switch(Em(t),t.tag){case 3:ls(Fe),qr();break;case 26:case 27:case 5:Au(t);break;case 4:qr();break;case 31:t.memoizedState!==null&&Hn(t);break;case 13:Hn(t);break;case 19:Dm(t);break;case 10:ls(t.type);break;case 22:case 23:Hn(t),Rm(),e!==null&&sn(Oa);break;case 24:ls(Fe)}}function Wl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){oe(t,t.return,o)}}function na(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(f){oe(s,l,f)}}}i=i.next}while(i!==a)}}catch(f){oe(t,t.return,f)}}function kx(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{$y(t,n)}catch(i){oe(e,e.return,i)}}}function Xx(e,t,n){n.props=ka(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){oe(e,t,i)}}function Bi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,a=us(e.memoizedProps,s);(s.ref===null||s.ref.name!==a)&&(s.ref=OS(a)),i=s.ref;break;case 7:if(e.stateNode===null){var r=new Zn(e);Un(e.child,!1,eA,r,void 0,void 0),e.stateNode=r}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){oe(e,t,o)}}function tn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){oe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){oe(e,t,s)}else n.current=null}function Vu(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)BS(e.stateNode,t[n])}function _v(e){for(var t=e.return;t!==null&&(Ym(t)&&BS(e.stateNode,t.stateNode),!qm(t));)t=t.return}function _l(e){for(var t=e.return;t!==null&&(Ym(t)&&nA(e.stateNode,t.stateNode),!qm(t));)t=t.return}function qm(e){return e.tag===5||e.tag===3||e.tag===27}function Ym(e){return e&&e.tag===7&&e.stateNode!==null}function Pp(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){oe(e,e.return,s)}}function Gd(e,t,n){try{var i=e.stateNode;zT(i,e.type,n,t),i[Ln]=t}catch(s){oe(e,e.return,s)}}function Wx(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&aa(e.type)||e.tag===4}function kd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Wx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&aa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function zp(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vi)),Vu(e,i),$t=!0;else if(s!==4&&(s===27&&(Vu(e,i),i=null,aa(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(zp(e,t,n,i),e=e.sibling;e!==null;)zp(e,t,n,i),e=e.sibling}function Gu(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),Vu(e,i),$t=!0;else if(s!==4&&(s===27&&(Vu(e,i),i=null,aa(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(Gu(e,t,n,i),e=e.sibling;e!==null;)Gu(e,t,n,i),e=e.sibling}function qx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);rn(t,i,n),t[en]=e,t[Ln]=n}catch(a){oe(e,e.return,a)}}var ku=!1,Vn=null;function vv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(ku=!0)}var Fi=null;function yv(){var e=Fi;return Fi=null,e}var Rn=0;function lo(e,t,n,i,s){return Rn=0,Yx(e.child,t,n,i,s)}function Yx(e,t,n,i,s){for(var a=!1;e!==null;){if(e.tag===5){var r=e.stateNode;if(i!==null){var o=im(r);i.push(o),o.view&&(a=!0)}else a||im(r).view&&(a=!0);ku=!0,NS(r,Rn===0?t:t+"_"+Rn,n),Rn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||Yx(e.child,t,n,i,s)&&(a=!0));e=e.sibling}return a}function qi(e,t){for(;e!==null;)e.tag===5?US(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||qi(e.child,t)),e=e.sibling}function mu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(mu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(k(544));var n=t.name;t=gs(t.default,t.share),t!=="none"&&(lo(e,n,t,null,!1)||qi(e.child,!1))}e=e.sibling}}function Bp(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=us(i,n),a=gs(i.default,n.paired?i.share:i.enter);a!=="none"?lo(e,s,a,null,!1)?(mu(e),n.paired||t||Qr(e,i.onEnter)):qi(e.child,!1):mu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Bp(e,t),e=e.sibling;else mu(e)}function Fp(e){if(Vn!==null&&Vn.size!==0){var t=Vn;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var a=gs(n.default,n.share);if(a!=="none"&&(lo(e,i,a,null,!1)?(a=e.stateNode,s.paired=a,a.paired=s,Qr(e,n.onShare)):qi(e.child,!1)),t.delete(i),t.size===0)break}}}Fp(e)}e=e.sibling}}}function Hp(e){if(e.tag===30){var t=e.memoizedProps,n=us(t,e.stateNode),i=Vn!==null?Vn.get(n):void 0,s=gs(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(lo(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,Vn.delete(n),Qr(e,t.onShare)):Qr(e,t.onExit):qi(e.child,!1)),Vn!==null&&Fp(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Hp(e),e=e.sibling;else Vn!==null&&Fp(e)}function Zx(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=us(t,e.stateNode);t=gs(t.default,t.update),e.flags&=-5,t!=="none"&&lo(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Zx(e);e=e.sibling}}function Vp(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,qi(e.child,!1))}Vp(e)}e=e.sibling}}function gu(e){if(e.tag===30)e.stateNode.paired=null,qi(e.child,!1),Vp(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)gu(e),e=e.sibling;else Vp(e)}function Kx(e){for(e=e.child;e!==null;)e.tag===30?qi(e.child,!1):(e.subtreeFlags&33554432)!==0&&Kx(e),e=e.sibling}function Zm(e,t,n,i,s,a,r){for(var o=!1;t!==null;){if(t.tag===5){var l=t.stateNode;if(a!==null&&Rn<a.length){var c=a[Rn],f=im(l);(c.view||f.view)&&(o=!0);var d;if(d=(e.flags&4)===0)if(f.clip)d=!0;else{d=c.rect;var h=f.rect;d=d.y!==h.y||d.x!==h.x||d.height!==h.height||d.width!==h.width}d&&(e.flags|=4),f.abs?f=!c.abs:(c=c.rect,f=f.rect,f=c.height!==f.height||c.width!==f.width),f&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&NS(l,Rn===0?n:n+"_"+Rn,s),o&&(e.flags&4)!==0||(Fi===null&&(Fi=[]),Fi.push(l,Rn===0?i:i+"_"+Rn,t.memoizedProps)),Rn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&r?e.flags|=t.flags&32:Zm(e,t.child,n,i,s,a,r)&&(o=!0));t=t.sibling}return o}function Jx(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=us(n,i),a=gs(n.default,n.update);if(t){i=i.clones;var r=i===null?null:i.map(kT)}else r=e.memoizedState,e.memoizedState=null;i=e;var o=e.child;Rn=0,s=Zm(i,o,s,s,a,r,!1),(e.flags&4)!==0&&s&&(t||Qr(e,n.onUpdate))}else(e.subtreeFlags&33554432)!==0&&Jx(e,t);e=e.sibling}}var Ke=!1,se=!1,Ii=!1,Xd=!1,xv=typeof WeakSet=="function"?WeakSet:Set,Je=null,Pi=!1,ol=!1,Xu=!1,Gp=!1;function pT(e,t,n){if(e=e.containerInfo,tm=io,e=Iy(e),xm(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var a=s.anchorOffset,r=s.focusNode;s=s.focusOffset;try{i.nodeType,r.nodeType}catch{i=null;break t}var o=0,l=-1,c=-1,f=0,d=0,h=e,p=null;e:for(;;){for(var _;h!==i||a!==0&&h.nodeType!==3||(l=o+a),h!==r||s!==0&&h.nodeType!==3||(c=o+s),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)p=h,h=_;for(;;){if(h===e)break e;if(p===i&&++f===a&&(l=o),p===r&&++d===s&&(c=o),(_=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=_}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(em={focusedElem:e,selectionRange:i},io=!1,n=(n&335544064)===n,Je=t,t=n?9270:1024;Je!==null;){if(e=Je,n&&(i=e.deletions,i!==null))for(a=0;a<i.length;a++)n&&Hp(i[a]);if(e.alternate===null&&(e.flags&2)!==0)n&&vv(e),jc(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&Hp(i),jc(n);continue}else if(i!==null&&i.memoizedState!==null){n&&vv(e),jc(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,Je=i):(n&&Zx(e),jc(n))}}Vn=null}function jc(e){for(;Je!==null;){var t=Je,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var a=t.stateNode;try{var r=ka(t.type,s);n=a.getSnapshotBeforeUpdate(r,i),a.__reactInternalSnapshotBeforeUpdate=n}catch(o){oe(t,t.return,o)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)sm(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":sm(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=us(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=gs(s.default,s.update),s!=="none"&&lo(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(k(163))}if(i=t.sibling,i!==null){i.return=t.return,Je=i;break}Je=t.return}}function Qx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:zi(e,n),i&4&&Wl(5,n);break;case 1:if(zi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){oe(n,n.return,r)}else{var s=ka(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){oe(n,n.return,r)}}i&64&&kx(n),i&512&&Bi(n,n.return);break;case 3:if(zi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{$y(e,t)}catch(r){oe(n,n.return,r)}}break;case 27:t===null&&i&4&&qx(n);case 26:case 5:zi(e,n),t===null&&i&4&&Pp(n),i&512&&Bi(n,n.return);break;case 12:zi(e,n);break;case 31:zi(e,n),i&4&&eS(e,n);break;case 13:zi(e,n),i&4&&nS(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=AT.bind(null,n),aA(e,n))));break;case 22:if(i=n.memoizedState!==null||Ke,!i){var a=t!==null&&t.memoizedState!==null||se;t=Ke,s=se,Ke=i,(se=a)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),xi(e,n,i)):zi(e,n),Ke=t,se=s}break;case 30:zi(e,n),i&512&&Bi(n,n.return);break;case 7:i&512&&Bi(n,n.return);default:zi(e,n)}}function kp(e,t){for(e=e.child;e!==null;)jx(e,t),e=e.sibling}function jx(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,a=e.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null;s.style.display=r==null||typeof r=="boolean"?"":(""+r).trim()}}catch(l){oe(e,e.return,l)}Xp(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,$t=!0}catch(l){oe(e,e.return,l)}break;case 18:try{var o=e.stateNode;t?Pv(o,!0):Pv(e.stateNode,!1)}catch(l){oe(e,e.return,l)}break;case 22:case 23:e.memoizedState===null&&kp(e,t);break;default:kp(e,t)}}function Xp(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var n=e,i=t;switch(n.tag){case 4:jx(n,i);break t;case 22:n.memoizedState===null&&Xp(n,i);break t;default:Xp(n,i)}}e=e.sibling}}function $x(e){var t=e.alternate;t!==null&&(e.alternate=null,$x(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&th(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var we=null,wn=!1;function yi(e,t,n){for(n=n.child;n!==null;)tS(e,t,n),n=n.sibling}function tS(e,t,n){if(Xn&&typeof Xn.onCommitFiberUnmount=="function")try{Xn.onCommitFiberUnmount(Bl,n)}catch{}switch(n.tag){case 26:se||tn(n,t),yi(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!se&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:se||tn(n,t),_l(n);var i=we,s=wn;aa(n.type)&&(we=n.stateNode,wn=!1),yi(e,t,n),VS(n.stateNode,n.type,n.memoizedProps),we=i,wn=s;break;case 5:se||tn(n,t),_l(n);case 6:if(n.tag===6&&_l(n),i=we,s=wn,we=null,yi(e,t,n),we=i,wn=s,we!==null)if(wn)try{(we.nodeType===9?we.body:we.nodeName==="HTML"?we.ownerDocument.body:we).removeChild(n.stateNode),$t=!0}catch(a){oe(n,t,a)}else try{we.removeChild(n.stateNode),$t=!0}catch(a){oe(n,t,a)}break;case 18:we!==null&&(wn?(e=we,Iv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),so(e)):Iv(we,n.stateNode));break;case 4:i=we,s=wn,we=n.stateNode.containerInfo,wn=!0,yi(e,t,n),we=i,wn=s;break;case 0:case 11:case 14:case 15:na(2,n,t),se||na(4,n,t),yi(e,t,n);break;case 1:se||(tn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Xx(n,t,i)),yi(e,t,n);break;case 21:yi(e,t,n);break;case 22:se=(i=se)||n.memoizedState!==null,yi(e,t,n),se=i;break;case 30:tn(n,t),yi(e,t,n);break;case 7:se||tn(n,t),yi(e,t,n);break;default:yi(e,t,n)}}function eS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{so(e)}catch(n){oe(t,t.return,n)}}}function nS(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{so(e)}catch(n){oe(t,t.return,n)}}function mT(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new xv),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new xv),t;default:throw Error(k(435,e.tag))}}function $c(e,t){var n=mT(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=wT.bind(null,e,i);i.then(s,s)}})}function yn(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var a=i[s],r=e,o=t,l=o;t:for(;l!==null;){switch(l.tag){case 27:if(aa(l.type)){we=l.stateNode,wn=!1;break t}break;case 5:we=l.stateNode,wn=!1;break t;case 3:case 4:we=l.stateNode.containerInfo,wn=!0;break t}l=l.return}if(we===null)throw Error(k(160));tS(r,o,a),we=null,wn=!1,r=a.alternate,r!==null&&(r.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)iS(t,e,n),t=t.sibling}var Si=null;function iS(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var a=0;a<i.length;a++){var r=i[a];r.ref.impl=r.nextImpl}yn(t,e,n),xn(e),s&4&&(na(3,e,e.return),Wl(3,e),na(5,e,e.return));break;case 1:yn(t,e,n),xn(e),s&512&&(se||i===null||tn(i,i.return)),s&64&&Ke&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(a=Si,yn(t,e,n),xn(e),s&512&&(se||i===null||tn(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(Ke)e.stateNode=DS(e.type,e.memoizedProps,t.containerInfo,e);else{t:{t=e.type,n=e.memoizedProps,s=a.ownerDocument||a;e:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[Vl]||i[en]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),rn(i,t,n),i[en]=e,Qe(i),t=i;break t;case"link":if(a=Xv("link","href",s).get(t+(n.href||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(r,1);break e}}i=s.createElement(t),rn(i,t,n),s.head.appendChild(i);break;case"meta":if(a=Xv("meta","content",s).get(t+(n.content||""))){for(r=0;r<a.length;r++)if(i=a[r],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(r,1);break e}}i=s.createElement(t),rn(i,t,n),s.head.appendChild(i);break;default:throw Error(k(468,t))}i[en]=e,Qe(i),t=i}e.stateNode=t}else Ke||om(a,e.type,e.stateNode);else e.stateNode=kv(a,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||se||t.parentNode.removeChild(t)):s.count--,n===null?Ke||om(a,e.type,e.stateNode):kv(a,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Gd(e,e.memoizedProps,i.memoizedProps);break;case 27:yn(t,e,n),xn(e),s&512&&(se||i===null||tn(i,i.return)),i!==null&&s&4&&Gd(e,e.memoizedProps,i.memoizedProps);break;case 5:if(a=Ii,Ii=!1,yn(t,e,n),Ii=a,xn(e),s&512&&(se||i===null||tn(i,i.return)),e.flags&32){t=e.stateNode;try{Zr(t,""),$t=!0}catch(f){oe(e,e.return,f)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Gd(e,t,i!==null?i.memoizedProps:t)),s&1024&&(Xd=!0);break;case 6:if(yn(t,e,n),xn(e),s&4){if(e.stateNode===null)throw Error(k(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,$t=!0}catch(f){oe(e,e.return,f)}}break;case 3:if($t=!1,xu=null,a=Si,Si=Ll(t.containerInfo),yn(t,e,n),Si=a,xn(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{so(t.containerInfo)}catch(f){oe(e,e.return,f)}Xd&&(Xd=!1,sS(e)),$t=!1;break;case 4:s=Ii,Ii=Ke,i=A_(),a=Si,Si=Ll(e.stateNode.containerInfo),yn(t,e,n),xn(e),Si=a,$t&&ol&&(Xu=!0),$t=i,Ii=s;break;case 12:yn(t,e,n),xn(e);break;case 31:yn(t,e,n),xn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,$c(e,t)));break;case 13:yn(t,e,n),xn(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(dh=kn()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,$c(e,t)));break;case 22:a=e.memoizedState!==null,r=i!==null&&i.memoizedState!==null;var o=Ke,l=se,c=Ii;Ke=o||a,Ii=c||a,se=l||r,yn(t,e,n),se=l,Ii=c,Ke=o,xn(e),s&8192&&(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,!a||i===null||r||Ke||se||(t=r||se,n=Ke,i=se,Ke=a||Ke,se=t,Ls(e,2),Ke=n,se=i),!a&&Ii||kp(e,a)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,$c(e,n))));break;case 19:yn(t,e,n),xn(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,$c(e,t)));break;case 30:s&512&&(se||i===null||tn(i,i.return)),s=A_(),a=ol,r=(n&335544064)===n,o=e.memoizedProps,ol=r&&gs(o.default,o.update)!=="none",yn(t,e,n),xn(e),r&&i!==null&&$t&&(e.flags|=4),ol=a,$t=s;break;case 21:break;case 7:s&512&&(se||i===null||tn(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:yn(t,e,n),xn(e)}}function xn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Wx(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Ym(s)){var a=s.stateNode;i===null?i=[a]:i.push(a)}if(qm(s))break;s=s.return}var r=i;if(n==null)throw Error(k(160));switch(n.tag){case 27:var o=n.stateNode,l=kd(e);Gu(e,l,o,r);break;case 5:var c=n.stateNode;n.flags&32&&(Zr(c,""),n.flags&=-33);var f=kd(e);Gu(e,f,c,r);break;case 3:case 4:var d=n.stateNode.containerInfo,h=kd(e);zp(e,h,d,r);break;default:throw Error(k(161))}}catch(p){oe(e,e.return,p)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;sS(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,io=!0,t.reset(),io=!1),e=e.sibling}}function xr(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)aS(t,e),t=t.sibling;else Jx(t,!1)}function aS(e,t){var n=e.alternate;if(n===null)Bp(e,!1);else switch(e.tag){case 3:if(Gp=Pi=!1,yv(),xr(t,e),!Pi&&!Xu){if(e=Fi,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];US(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Gp=!0}Fi=null;break;case 5:xr(t,e);break;case 4:i=Pi,Pi=!1,xr(t,e),Pi&&(Xu=!0),Pi=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?Bp(e,!1):xr(t,e));break;case 30:i=Pi,s=yv(),Pi=!1,xr(t,e),Pi&&(e.flags|=4);var a=e.memoizedProps,r=e.stateNode;t=us(a,r),r=us(n.memoizedProps,r);var o=gs(a.default,a.update);o==="none"?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,Rn=0,t=Zm(e,n,t,r,o,a,!0),Rn!==(a===null?0:a.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Qr(e,e.memoizedProps.onUpdate),Fi=s):s!==null&&(s.push.apply(s,Fi),Fi=s),Pi=(e.flags&32)!==0?!0:i;break;default:xr(t,e)}}function zi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qx(e,t.alternate,t),t=t.sibling}function Ls(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:na(4,n,n.return),Ls(n,i);break;case 1:tn(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&Xx(n,n.return,s),Ls(n,i);break;case 27:(i&2)!==0&&VS(n.stateNode,n.type,n.memoizedProps);case 5:tn(n,n.return),n.tag!==5&&n.tag!==27||_l(n),Ls(n,i);break;case 6:_l(n);break;case 26:tn(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||se||s.parentNode.removeChild(s),Ls(n,i);break;case 22:n.memoizedState===null&&Ls(n,i);break;case 30:tn(n,n.return),Ls(n,i);break;case 7:tn(n,n.return);default:Ls(n,i)}e=e.sibling}}function xi(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags,o=(n&1)!==0;switch(a.tag){case 0:case 11:case 15:xi(s,a,n),Wl(4,a);break;case 1:if(xi(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(f){oe(i,i.return,f)}if(i=a,s=i.updateQueue,s!==null){var l=i.stateNode;try{var c=s.shared.hiddenCallbacks;if(c!==null)for(s.shared.hiddenCallbacks=null,s=0;s<c.length;s++)jy(c[s],l)}catch(f){oe(i,i.return,f)}}o&&r&64&&kx(a),Bi(a,a.return);break;case 27:(n&2)!==0&&qx(a);case 5:a.tag!==5&&a.tag!==27||_v(a),xi(s,a,n),o&&i===null&&r&4&&Pp(a),Bi(a,a.return);break;case 6:_v(a);break;case 26:l=a.stateNode,a.memoizedState!==null||l===null||Ke||om(Ll(l.ownerDocument),a.type,l),xi(s,a,n),o&&i===null&&r&4&&Pp(a),Bi(a,a.return);break;case 12:xi(s,a,n);break;case 31:xi(s,a,n),o&&r&4&&eS(s,a);break;case 13:xi(s,a,n),o&&r&4&&nS(s,a);break;case 22:a.memoizedState===null&&xi(s,a,n),Bi(a,a.return);break;case 30:xi(s,a,n),Bi(a,a.return);break;case 7:Bi(a,a.return);default:xi(s,a,n)}t=t.sibling}}function Km(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&kl(n))}function Jm(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&kl(e))}function ii(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)rS(e,t,n,i),t=t.sibling;else s&&Kx(t)}function rS(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&gu(t);var a=t.flags;switch(t.tag){case 0:case 11:case 15:ii(e,t,n,i),a&2048&&Wl(9,t);break;case 1:ii(e,t,n,i);break;case 3:ii(e,t,n,i),s&&Gp&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),a&2048&&(a=null,t.alternate!==null&&(a=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==a&&(t.refCount++,a!=null&&kl(a)));break;case 12:if(a&2048){ii(e,t,n,i),a=t.stateNode;try{var r=t.memoizedProps,o=r.id,l=r.onPostCommit;typeof l=="function"&&l(o,t.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(c){oe(t,t.return,c)}}else ii(e,t,n,i);break;case 31:ii(e,t,n,i);break;case 13:ii(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,o=t.alternate,t.memoizedState!==null?(s&&o!==null&&o.memoizedState===null&&gu(o),r._visibility&2?ii(e,t,n,i):vl(e,t)):(s&&o!==null&&o.memoizedState!==null&&gu(t),r._visibility&2?ii(e,t,n,i):(r._visibility|=2,Mr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),a&2048&&Km(o,t);break;case 24:ii(e,t,n,i),a&2048&&Jm(t.alternate,t);break;case 30:s&&(a=t.alternate,a!==null&&(qi(a.child,!0),qi(t.child,!0))),ii(e,t,n,i);break;default:ii(e,t,n,i)}}function Mr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:Mr(a,r,o,l,s),Wl(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?Mr(a,r,o,l,s):vl(a,r):(f._visibility|=2,Mr(a,r,o,l,s)),s&&c&2048&&Km(r.alternate,r);break;case 24:Mr(a,r,o,l,s),s&&c&2048&&Jm(r.alternate,r);break;default:Mr(a,r,o,l,s)}t=t.sibling}}function vl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:vl(n,i),s&2048&&Km(i.alternate,i);break;case 24:vl(n,i),s&2048&&Jm(i.alternate,i);break;default:vl(n,i)}t=t.sibling}}var Ra=8192;function Aa(e,t,n){if(e.subtreeFlags&Ra)for(e=e.child;e!==null;)oS(e,t,n),e=e.sibling}function oS(e,t,n){switch(e.tag){case 26:Aa(e,t,n),e.flags&Ra&&(e.memoizedState!==null?yA(n,Si,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&qv(n,e)));break;case 5:Aa(e,t,n),e.flags&Ra&&(e=e.stateNode,(t&335544128)===t&&qv(n,e));break;case 3:case 4:var i=Si;Si=Ll(e.stateNode.containerInfo),Aa(e,t,n),Si=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ra,Ra=16777216,Aa(e,t,n),Ra=i):Aa(e,t,n));break;case 30:if((e.flags&Ra)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,Vn===null&&(Vn=new Map),Vn.set(i,s)}Aa(e,t,n);break;default:Aa(e,t,n)}}function lS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function tl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Je=i,uS(i,e)}lS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)cS(e),e=e.sibling}function cS(e){switch(e.tag){case 0:case 11:case 15:tl(e),e.flags&2048&&na(9,e,e.return);break;case 3:tl(e);break;case 12:tl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,_u(e)):tl(e);break;default:tl(e)}}function _u(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Je=i,uS(i,e)}lS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:na(8,t,t.return),_u(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,_u(t));break;default:_u(t)}e=e.sibling}}function uS(e,t){for(;Je!==null;){var n=Je;switch(n.tag){case 0:case 11:case 15:na(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:kl(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Je=i;else t:for(n=e;Je!==null;){i=Je;var s=i.sibling,a=i.return;if($x(i),i===n){Je=null;break t}if(s!==null){s.return=a,Je=s;break t}Je=a}}}var gT={getCacheForType:function(e){var t=nn(Fe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return nn(Fe).controller.signal}},_T=typeof WeakMap=="function"?WeakMap:Map,te=0,de=null,qt=null,Kt=0,ae=0,Bn=null,Hs=!1,co=!1,Qm=!1,ps=0,Oe=0,ia=0,Pa=0,Wu=0,Gn=0,Jr=0,yl=null,Cn=null,Wp=!1,dh=0,hS=0,qu=1/0,Yu=null,Ks=null,De=0,bi=null,Xa=null,Wi=0,qp=0,Yp=null,fS=null,kr=null,Xr=null,Wr=null,xl=0,vu=null;function qn(){return(te&2)!==0&&Kt!==0?Kt&-Kt:Rt.T!==null?$m():gy()}function dS(){if(Gn===0)if((Kt&536870912)===0||Gt){var e=Hc;Hc<<=1,(Hc&3932160)===0&&(Hc=262144),Gn=e}else Gn=536870912;return e=on.current,e!==null&&(e.flags|=32),Gn}function Qr(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=OS(us(e.memoizedProps,n))),Xr===null&&(Xr=[]),Xr.push(t.bind(null,i))}}function Nn(e,t,n){(e===de&&(ae===2||ae===9)||e.cancelPendingCommit!==null)&&(jr(e,0),Vs(e,Kt,Gn,!1)),Hl(e,n),((te&2)===0||e!==de)&&(e===de&&((te&2)===0&&(Pa|=n),Oe===4&&Vs(e,Kt,Gn,!1)),Zi(e))}function pS(e,t,n){if((te&6)!==0)throw Error(k(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Fl(e,t),s=i?xT(e,t):Wd(e,t,!0),a=i;do{if(s===0){co&&!i&&Vs(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vT(n)){s=Wd(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=yl;var l=o.current.memoizedState.isDehydrated;if(l&&(jr(o,r).flags|=256),r=Wd(o,r,!1),r!==2&&r!==6){if(Qm&&!l){o.errorRecoveryDisabledLanes|=a,Pa|=a,s=4;break t}a=Cn,Cn=s,a!==null&&(Cn===null?Cn=a:Cn.push.apply(Cn,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){jr(e,0),Vs(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error(k(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Vs(i,t,Gn,!Hs);break t;case 2:Cn=null;break;case 3:case 5:break;default:throw Error(k(329))}if((t&62914560)===t&&(s=dh+300-kn(),10<s)){if(Vs(i,t,Gn,!Hs),$u(i,0,!0)!==0)break t;Wi=t,i.timeoutHandle=eg(Sv.bind(null,i,n,Cn,Yu,Wp,t,Gn,Pa,Jr,Hs,a,"Throttled",-0,0),s);break t}Sv(i,n,Cn,Yu,Wp,t,Gn,Pa,Jr,Hs,a,null,-0,0)}}break}while(!0);Zi(e)}function Sv(e,t,n,i,s,a,r,o,l,c,f,d,h,p){e.timeoutHandle=-1;var _=t.subtreeFlags,S=(a&335544064)===a;if(d=null,(S||_&8192||(_&16785408)===16785408)&&(d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Vi},Vn=null,oS(t,a,d),S&&(_=d,S=e.containerInfo,S=(S.nodeType===9?S:S.ownerDocument).__reactViewTransition,S!=null&&(_.count++,_.waitingForViewTransition=!0,_=Ol.bind(_),S.finished.then(_,_))),_=(a&62914560)===a?dh-kn():(a&4194048)===a?hS-kn():0,_=xA(d,_),_!==null)){Wi=a,e.cancelPendingCommit=_(bv.bind(null,e,t,a,n,i,s,r,o,l,c,f,d,null,h,p)),Vs(e,a,r,!c);return}bv(e,t,a,n,i,s,r,o,l,c,f,d)}function vT(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Yn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vs(e,t,n,i){t=hy(e,t),t&=~Wu,t&=~Pa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Wn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&dy(e,n,t)}function ph(){return(te&6)===0?(ql(0,!1),!1):!0}function jm(){if(qt!==null){if(ae===0)var e=qt.return;else e=qt,rs=Ka=null,Im(e),Hr=null,wl=0,e=qt;for(;e!==null;)Gx(e.alternate,e),e=e.return;qt=null}}function jr(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,HT(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Wi=0,jm(),de=e,qt=n=os(e.current,null),Kt=t,ae=0,Bn=null,Hs=!1,co=Fl(e,t),Qm=!1,Jr=Gn=Wu=Pa=ia=Oe=0,Cn=yl=null,Wp=!1,ps=hy(e,t),sh(),n}function mS(e,t){zt=null,Rt.H=Fu,t===oo||t===oh?(t=Z_(),ae=3):t===wm?(t=Z_(),ae=4):ae=t===km?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Bn=t,qt===null&&(Oe=1,Hu(e,li(t,e.current)))}function gS(){var e=on.current;return e===null?!0:(Kt&4194048)===Kt?hn===null:(Kt&62914560)===Kt||(Kt&536870912)!==0?e===hn:!1}function _S(){var e=Rt.H;return Rt.H=Fu,e===null?Fu:e}function vS(){var e=Rt.A;return Rt.A=gT,e}function Zu(){Oe=4,Hs||(Kt&4194048)!==Kt&&on.current!==null||(co=!0),(ia&134217727)===0&&(Pa&134217727)===0||de===null||Vs(de,Kt,Gn,!1)}function Wd(e,t,n){var i=te;te|=2;var s=_S(),a=vS();(de!==e||Kt!==t)&&(Yu=null,jr(e,t)),t=!1;var r=Oe;t:do try{if(ae!==0&&qt!==null){var o=qt,l=Bn;switch(ae){case 8:jm(),r=6;break t;case 3:case 2:case 9:case 6:on.current===null&&(t=!0);var c=ae;if(ae=0,Bn=null,Ir(e,o,l,c),n&&co){r=0;break t}break;default:c=ae,ae=0,Bn=null,Ir(e,o,l,c)}}yT(),r=Oe;break}catch(f){mS(e,f)}while(!0);return t&&e.shellSuspendCounter++,rs=Ka=null,te=i,Rt.H=s,Rt.A=a,qt===null&&(de=null,Kt=0,sh()),r}function yT(){for(;qt!==null;)yS(qt)}function xT(e,t){var n=te;te|=2;var i=_S(),s=vS();de!==e||Kt!==t?(Yu=null,qu=kn()+500,jr(e,t)):co=Fl(e,t);t:do try{if(ae!==0&&qt!==null){t=qt;var a=Bn;e:switch(ae){case 1:ae=0,Bn=null,Ir(e,t,a,1);break;case 2:case 9:if(Y_(a)){ae=0,Bn=null,Mv(t);break}t=function(){ae!==2&&ae!==9||de!==e||(ae=7),Zi(e)},a.then(t,t);break t;case 3:ae=7;break t;case 4:ae=5;break t;case 7:Y_(a)?(ae=0,Bn=null,Mv(t)):(ae=0,Bn=null,Ir(e,t,a,7));break;case 5:var r=null;switch(qt.tag){case 26:r=qt.memoizedState;case 5:case 27:var o=qt;if(r?XS(r):o.stateNode.complete){ae=0,Bn=null;var l=o.sibling;if(l!==null)qt=l;else{var c=o.return;c!==null?(qt=c,mh(c)):qt=null}break e}}ae=0,Bn=null,Ir(e,t,a,5);break;case 6:ae=0,Bn=null,Ir(e,t,a,6);break;case 8:jm(),Oe=6;break t;default:throw Error(k(462))}}ST();break}catch(f){mS(e,f)}while(!0);return rs=Ka=null,Rt.H=i,Rt.A=s,te=n,qt!==null?0:(de=null,Kt=0,sh(),Oe)}function ST(){for(;qt!==null&&!B1();)yS(qt)}function yS(e){var t=Vx(e.alternate,e,ps);e.memoizedProps=e.pendingProps,t===null?mh(e):qt=t}function Mv(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=uv(n,t,t.pendingProps,t.type,void 0,Kt);break;case 11:t=uv(n,t,t.pendingProps,t.type.render,t.ref,Kt);break;case 5:Im(t);var i=t;i===je&&(Gt?(Uu(i),i.tag===5&&i.stateNode!=null&&(ye=i.stateNode)):(Uu(i),Gt=!0));default:Gx(n,t),t=qt=ky(t,ps),t=Vx(n,t,ps)}e.memoizedProps=e.pendingProps,t===null?mh(e):qt=t}function Ir(e,t,n,i){rs=Ka=null,Im(t),Hr=null,wl=0;var s=t.return;try{if(lT(e,s,t,n,Kt)){Oe=1,Hu(e,li(n,e.current)),qt=null;return}}catch(a){if(s!==null)throw qt=s,a;Oe=1,Hu(e,li(n,e.current)),qt=null;return}t.flags&32768?(Gt||i===1?e=!0:co||(Kt&536870912)!==0?e=!1:(Hs=e=!0,(i===2||i===9||i===3||i===6)&&(i=on.current,i!==null&&i.tag===13&&(i.flags|=16384))),xS(t,e)):mh(t)}function mh(e){var t=e;do{if((t.flags&32768)!==0){xS(t,Hs);return}e=t.return;var n=fT(t.alternate,t,ps);if(n!==null){qt=n;return}if(t=t.sibling,t!==null){qt=t;return}qt=t=e}while(t!==null);Oe===0&&(Oe=5)}function xS(e,t){do{var n=dT(e.alternate,e);if(n!==null){n.flags&=32767,qt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){qt=e;return}qt=e=n}while(e!==null);Oe=6,qt=null}function bv(e,t,n,i,s,a,r,o,l,c,f,d){e.cancelPendingCommit=null;do gh();while(De!==0);if((te&6)!==0)throw Error(k(327));if(t!==null){if(t===e.current)throw Error(k(177));e===de&&(qt=de=null,Kt=0),Xa=t,bi=e,Wi=n,Yp=s,fS=i,MT(e,t,n,r,o,l,d)}}function MT(e,t,n,i,s,a,r){var o=t.lanes|t.childLanes;if(qp=o,o|=Sm,Z1(e,n,o,i,s,a),Xr=null,(n&335544064)===n?(Wr=JE(e),i=10262):(Wr=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,CT(wu,function(){return Qp(),null})):(e.callbackNode=null,e.callbackPriority=0),ku=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Rt.T,Rt.T=null,s=ee.p,ee.p=2,a=te,te|=4;try{pT(e,t,n)}finally{te=a,ee.p=s,Rt.T=i}}De=1,ku?kr=qT(r,e.containerInfo,Wr,Zp,Kp,ET,Jp,Qp,bT,null,null):(Zp(),Kp(),Jp())}function bT(e){if(De!==0){var t=bi.onRecoverableError;t(e,{componentStack:null})}}function ET(){De===3&&(De=0,aS(Xa,bi),De=4)}function Zp(){if(De===1){De=0;var e=bi,t=Xa,n=Wi,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Rt.T,Rt.T=null;var s=ee.p;ee.p=2;var a=te;te|=4;try{ol=Xu=!1,iS(t,e,n),n=em;var r=Iy(e.containerInfo),o=n.focusedElem,l=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Oy(o.ownerDocument.documentElement,o)){if(l!==null&&xm(o)){var c=l.start,f=l.end;if(f===void 0&&(f=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(f,o.value.length);else{var d=o.ownerDocument||document,h=d&&d.defaultView||window;if(h.getSelection){var p=h.getSelection(),_=o.textContent.length,S=Math.min(l.start,_),m=l.end===void 0?S:Math.min(l.end,_);!p.extend&&S>m&&(r=m,m=S,S=r);var u=F_(o,S),g=F_(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var v=d.createRange();v.setStart(u.node,u.offset),p.removeAllRanges(),S>m?(p.addRange(v),p.extend(g.node,g.offset)):(v.setEnd(g.node,g.offset),p.addRange(v))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var y=d[o];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}io=!!tm,em=tm=null}finally{te=a,ee.p=s,Rt.T=i}}e.current=t,De=2}}function Kp(){if(De===2){De=0;var e=bi,t=Xa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Rt.T,Rt.T=null;var i=ee.p;ee.p=2;var s=te;te|=4;try{Qx(e,t.alternate,t)}finally{te=s,ee.p=i,Rt.T=n}}De=3}}function Jp(){if(De===4||De===3){De=0;var e=kr;kr=null,F1();var t=bi,n=Xa,i=Wi,s=fS,a=(i&335544064)===i?10262:10256;if((n.subtreeFlags&a)!==0||(n.flags&a)!==0?De=5:(De=0,Xa=bi=null,SS(t,t.pendingLanes)),a=t.pendingLanes,a===0&&(Ks=null),pm(i),n=n.stateNode,Xn&&typeof Xn.onCommitFiberRoot=="function")try{Xn.onCommitFiberRoot(Bl,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Rt.T,a=ee.p,ee.p=2,Rt.T=null;try{for(var r=t.onRecoverableError,o=0;o<s.length;o++){var l=s[o];r(l.value,{componentStack:l.stack})}}finally{Rt.T=n,ee.p=a}}if(s=Xr,r=Wr,Wr=null,s!==null&&(Xr=null,r===null&&(r=[]),e!==null))for(l=0;l<s.length;l++)n=(0,s[l])(r),n!==void 0&&e.finished.finally(n);(Wi&3)!==0&&gh(),Zi(t),a=t.pendingLanes,(i&261930)!==0&&(a&42)!==0?t===vu?xl++:(xl=0,vu=t):(xl=0,vu=null),ql(0,!1)}}function SS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,kl(t)))}function gh(){return kr!==null&&(kr.skipTransition(),kr=null),Zp(),Kp(),Jp(),Qp()}function Qp(){if(De!==5)return!1;var e=bi,t=qp;qp=0;var n=pm(Wi),i=Rt.T,s=ee.p;try{ee.p=32>n?32:n,Rt.T=null,n=Yp,Yp=null;var a=bi,r=Wi;if(De=0,Xa=bi=null,Wi=0,(te&6)!==0)throw Error(k(331));var o=te;if(te|=4,cS(a.current),rS(a,a.current,r,n),te=o,ql(0,!1),Xn&&typeof Xn.onPostCommitFiberRoot=="function")try{Xn.onPostCommitFiberRoot(Bl,a)}catch{}return!0}finally{ee.p=s,Rt.T=i,SS(e,t)}}function Ev(e,t,n){t=li(n,t),t=Dp(e.stateNode,t,2),e=qs(e,t,2),e!==null&&(Hl(e,2),Zi(e))}function oe(e,t,n){if(e.tag===3)Ev(e,e,n);else for(;t!==null;){if(t.tag===3){Ev(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ks===null||!Ks.has(i))){e=li(n,e),n=Px(2),i=qs(t,n,2),i!==null&&(zx(n,i,t,e),Hl(i,2),Zi(i));break}}t=t.return}}function qd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new _T;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Qm=!0,s.add(n),e=TT.bind(null,e,t,n),t.then(e,e))}function TT(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,de===e&&(Kt&n)===n&&((Oe===4||Oe===3&&(Kt&62914560)===Kt&&300>kn()-dh)&&(te&2)===0?jr(e,0):Wu|=n,Jr===Kt&&(Jr=0)),Zi(e)}function MS(e,t){t===0&&(t=fy()),e=Za(e,t),e!==null&&(Hl(e,t),Zi(e))}function AT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),MS(e,n)}function wT(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(k(314))}i!==null&&i.delete(t),MS(e,n)}function CT(e,t){return fm(e,t)}var $r=null,br=null,jp=!1,Ku=!1,Yd=!1,Gs=0;function Zi(e){e!==br&&e.next===null&&(br===null?$r=br=e:br=br.next=e),Ku=!0,jp||(jp=!0,DT())}function ql(e,t){if(!Yd&&Ku){Yd=!0;do for(var n=!1,i=$r;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Wn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,Tv(i,a))}else a=Kt,a=$u(i,i===de?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Fl(i,a)||(n=!0,Tv(i,a));i=i.next}while(n);Yd=!1}}function RT(){bS()}function bS(){Ku=jp=!1;var e=0;Gs!==0&&FT()&&(e=Gs);for(var t=kn(),n=null,i=$r;i!==null;){var s=i.next,a=ES(i,t);a===0?(i.next=null,n===null?$r=s:n.next=s,s===null&&(br=n)):(n=i,(e!==0||(a&3)!==0)&&(Ku=!0)),i=s}De!==0&&De!==5||ql(e,!1),Gs!==0&&(Gs=0)}function ES(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Wn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=Y1(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=de,n=Kt,n=$u(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ae===2||ae===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Td(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Fl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Td(i),pm(n)){case 2:case 8:n=cy;break;case 32:n=wu;break;case 268435456:n=uy;break;default:n=wu}return i=TS.bind(null,e),n=fm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Td(i),e.callbackPriority=2,e.callbackNode=null,2}function TS(e,t){if(De!==0&&De!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(gh()&&e.callbackNode!==n)return null;var i=Kt;return i=$u(e,e===de?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(pS(e,i,t),ES(e,kn()),e.callbackNode!=null&&e.callbackNode===n?TS.bind(null,e):null)}function Tv(e,t){if(gh())return null;pS(e,t,!0)}function DT(){VT(function(){(te&6)!==0?fm(ly,RT):bS()})}function $m(){if(Gs===0){var e=Ha;e===0&&(e=Fc,Fc<<=1,(Fc&261888)===0&&(Fc=256)),Gs=e}return Gs}function Av(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ru(e)}function NT(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=Av((s[Ln]||null).action),r=i.submitter;r&&(t=(t=r[Ln]||null)?Av(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new eh("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Gs!==0){var l=new FormData(s,r);Cp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=new FormData(s,r),Cp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(tu=0;tu<_p.length;tu++)eu=_p[tu],wv=eu.toLowerCase(),Cv=eu[0].toUpperCase()+eu.slice(1),Ei(wv,"on"+Cv);var eu,wv,Cv,tu;Ei(zy,"onAnimationEnd");Ei(By,"onAnimationIteration");Ei(Fy,"onAnimationStart");Ei("dblclick","onDoubleClick");Ei("focusin","onFocus");Ei("focusout","onBlur");Ei(GE,"onTransitionRun");Ei(kE,"onTransitionStart");Ei(XE,"onTransitionCancel");Ei(Hy,"onTransitionEnd");Yr("onMouseEnter",["mouseout","mouseover"]);Yr("onMouseLeave",["mouseout","mouseover"]);Yr("onPointerEnter",["pointerout","pointerover"]);Yr("onPointerLeave",["pointerout","pointerover"]);qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qa("onBeforeInput",["compositionend","keypress","textInput","paste"]);qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dl));function AS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Ru(f)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(f){Ru(f)}s.currentTarget=null,a=l}}}}function Wt(e,t){var n=t[M_];n===void 0&&(n=t[M_]=new Set);var i=e+"__bubble";n.has(i)||(wS(t,e,2,!1),n.add(i))}function Zd(e,t,n){var i=0;t&&(i|=4),wS(n,e,i,t)}var nu="_reactListening"+Math.random().toString(36).slice(2);function tg(e){if(!e[nu]){e[nu]=!0,vy.forEach(function(n){n!=="selectionchange"&&(UT.has(n)||Zd(n,!1,e),Zd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[nu]||(t[nu]=!0,Zd("selectionchange",!1,t))}}function wS(e,t,n,i){switch(QS(t)){case 2:var s=EA;break;case 8:s=TA;break;default:s=og}n=s.bind(null,t,n,e),s=void 0,!dp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Kd(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=Da(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Ay(function(){var c=a,f=gm(n),d=[];t:{var h=Vy.get(e);if(h!==void 0){var p=eh,_=e;switch(e){case"keypress":if(lu(n)===0)break t;case"keydown":case"keyup":p=vE;break;case"focusin":_="focus",p=Nd;break;case"focusout":_="blur",p=Nd;break;case"beforeblur":case"afterblur":p=Nd;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=D_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=rE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=bE;break;case zy:case By:case Fy:p=cE;break;case Hy:p=TE;break;case"scroll":case"scrollend":p=sE;break;case"wheel":p=wE;break;case"copy":case"cut":case"paste":p=hE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=U_;break;case"submit":p=SE;break;case"toggle":case"beforetoggle":p=RE}var S=(t&4)!==0,m=!S&&(e==="scroll"||e==="scrollend"),u=S?h!==null?h+"Capture":null:h;S=[];for(var g=c,v;g!==null;){var y=g;if(v=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||v===null||u===null||(y=Ml(g,u),y!=null&&S.push(Nl(g,y,v))),m)break;g=g.return}0<S.length&&(h=new p(h,_,null,n,f),d.push({event:h,listeners:S}))}}if((t&7)===0){t:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&n!==fp&&(_=n.relatedTarget||n.fromElement)&&(Da(_)||_[ao]))break t;(h||p)&&(_=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,h?(p=n.relatedTarget||n.toElement,h=c,p=p?Da(p):null,p!==null&&(m=zl(p),S=p.tag,p!==m||S!==5&&S!==27&&S!==6)&&(p=null)):(h=null,p=c),h!==p&&(S=D_,y="onMouseLeave",u="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(S=U_,y="onPointerLeave",u="onPointerEnter",g="pointer"),m=h==null?_:al(h),v=p==null?_:al(p),_=new S(y,g+"leave",h,n,f),_.target=m,_.relatedTarget=v,y=null,Da(f)===c&&(S=new S(u,g+"enter",p,n,f),S.target=v,S.relatedTarget=m,y=S),m=y,S=h&&p?tp(h,p,LT):null,h!==null&&Rv(d,_,h,S,!1),p!==null&&m!==null&&Rv(d,m,p,S,!0)))}t:{if(h=c?al(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=P_;else if(I_(h))if(Uy)T=FE;else{T=zE;var C=PE}else p=h.nodeName,!p||p.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&mm(c.elementType)&&(T=P_):T=BE;if(T&&(T=T(e,c))){Ny(d,T,n,f);break t}C&&C(e,h,c)}switch(C=c?al(c):window,e){case"focusin":(I_(C)||C.contentEditable==="true")&&(Rr=C,mp=c,ul=null);break;case"focusout":ul=mp=Rr=null;break;case"mousedown":gp=!0;break;case"contextmenu":case"mouseup":case"dragend":gp=!1,H_(d,n,f);break;case"selectionchange":if(VE)break;case"keydown":case"keyup":H_(d,n,f)}var w;if(ym)t:{switch(e){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else Cr?Ry(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(Cy&&n.locale!=="ko"&&(Cr||D!=="onCompositionStart"?D==="onCompositionEnd"&&Cr&&(w=wy()):(Bs=f,_m="value"in Bs?Bs.value:Bs.textContent,Cr=!0)),C=Ju(c,D),0<C.length&&(D=new N_(D,e,null,n,f),d.push({event:D,listeners:C}),w?D.data=w:(w=Dy(n),w!==null&&(D.data=w)))),(w=NE?UE(e,n):LE(e,n))&&(D=Ju(c,"onBeforeInput"),0<D.length&&(C=new N_("onBeforeInput","beforeinput",null,n,f),d.push({event:C,listeners:D}),C.data=w)),NT(d,e,c,n,f)}AS(d,t)})}function Nl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ju(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=Ml(e,n),s!=null&&i.unshift(Nl(e,s,a)),s=Ml(e,t),s!=null&&i.push(Nl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function LT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Rv(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Ml(n,a),c!=null&&r.unshift(Nl(n,c,l))):s||(c=Ml(n,a),c!=null&&r.push(Nl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var OT=/\r\n?/g,IT=/\u0000|\uFFFD/g;function Dv(e){return(typeof e=="string"?e:""+e).replace(OT,`
`).replace(IT,"")}function CS(e,t){return t=Dv(t),Dv(e)===t}function re(e,t,n,i,s,a){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||Zr(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&Zr(e,""+i);else return;break;case"className":Gc(e,"class",i);break;case"tabIndex":Gc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Gc(e,n,i);break;case"style":Ty(e,i,a);return;case"data":if(t!=="object"){Gc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ru(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&re(e,t,"name",s.name,s,null),re(e,t,"formEncType",s.formEncType,s,null),re(e,t,"formMethod",s.formMethod,s,null),re(e,t,"formTarget",s.formTarget,s,null)):(re(e,t,"encType",s.encType,s,null),re(e,t,"method",s.method,s,null),re(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ru(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Vi);return;case"onScroll":i!=null&&Wt("scroll",e);return;case"onScrollEnd":i!=null&&Wt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(k(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(k(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=ru(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Wt("beforetoggle",e),Wt("toggle",e),au(e,"popover",i);break;case"xlinkActuate":is(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":is(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":is(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":is(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":is(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":is(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":is(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":is(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":is(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":au(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=nE.get(n)||n,au(e,n,i);else return}$t=!0}function $p(e,t,n,i,s,a){switch(n){case"style":Ty(e,i,a);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(k(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(k(60));a?.__html!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")Zr(e,i);else if(typeof i=="number"||typeof i=="bigint")Zr(e,""+i);else return;break;case"onScroll":i!=null&&Wt("scroll",e);return;case"onScrollEnd":i!=null&&Wt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Vi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!yy.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),a=n.slice(2,s?n.length-7:void 0),t=e[Ln]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(a,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,s);break t}$t=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):au(e,n,i)}return}$t=!0}function rn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Wt("error",e),Wt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(k(137,t));default:re(e,t,a,r,n,null)}}s&&re(e,t,"srcSet",n.srcSet,n,null),i&&re(e,t,"src",n.src,n,null);return;case"input":Wt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":s=f;break;case"type":r=f;break;case"checked":l=f;break;case"defaultChecked":c=f;break;case"value":a=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(k(137,t));break;default:re(e,t,i,f,n,null)}}My(e,a,o,l,c,r,s,!1);return;case"select":Wt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:re(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?zr(e,!!i,t,!1):n!=null&&zr(e,!!i,n,!0);return;case"textarea":Wt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(k(91));break;default:re(e,t,r,o,n,null)}Ey(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:re(e,t,l,i,n,null)}return;case"dialog":Wt("beforetoggle",e),Wt("toggle",e),Wt("cancel",e),Wt("close",e);break;case"iframe":case"object":Wt("load",e);break;case"video":case"audio":for(i=0;i<Dl.length;i++)Wt(Dl[i],e);break;case"image":Wt("error",e),Wt("load",e);break;case"details":Wt("toggle",e);break;case"embed":case"source":case"link":Wt("error",e),Wt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(k(137,t));default:re(e,t,c,i,n,null)}return;default:if(mm(t)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&$p(e,t,f,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&re(e,t,o,i,n,null))}var PT={};function zT(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,f=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||re(e,t,p,null,i,d)}}for(var h in i){var p=i[h];if(d=n[h],i.hasOwnProperty(h)&&(p!=null||d!=null))switch(h){case"type":p!==d&&($t=!0),a=p;break;case"name":p!==d&&($t=!0),s=p;break;case"checked":p!==d&&($t=!0),c=p;break;case"defaultChecked":p!==d&&($t=!0),f=p;break;case"value":p!==d&&($t=!0),r=p;break;case"defaultValue":p!==d&&($t=!0),o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(k(137,t));break;default:p!==d&&re(e,t,h,p,i,d)}}hp(e,r,o,l,c,f,a,s);return;case"select":p=r=o=h=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||re(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":a!==l&&($t=!0),h=a;break;case"defaultValue":a!==l&&($t=!0),o=a;break;case"multiple":a!==l&&($t=!0),r=a;default:a!==l&&re(e,t,s,a,i,l)}t=o,n=r,i=p,h!=null?zr(e,!!n,h,!1):!!i!=!!n&&(t!=null?zr(e,!!n,t,!0):zr(e,!!n,n?[]:"",!1));return;case"textarea":p=h=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:re(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":s!==a&&($t=!0),h=s;break;case"defaultValue":s!==a&&($t=!0),p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(k(91));break;default:s!==a&&re(e,t,r,s,i,a)}by(e,h,p);return;case"option":for(var _ in n)if(h=n[_],n.hasOwnProperty(_)&&h!=null&&!i.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:re(e,t,_,null,i,h)}for(l in i)if(h=i[l],p=n[l],i.hasOwnProperty(l)&&h!==p&&(h!=null||p!=null))switch(l){case"selected":h!==p&&($t=!0),e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:re(e,t,l,h,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)h=n[S],n.hasOwnProperty(S)&&h!=null&&!i.hasOwnProperty(S)&&re(e,t,S,null,i,h);for(c in i)if(h=i[c],p=n[c],i.hasOwnProperty(c)&&h!==p&&(h!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(k(137,t));break;default:re(e,t,c,h,i,p)}return;default:if(mm(t)){for(var m in n)h=n[m],n.hasOwnProperty(m)&&h!==void 0&&!i.hasOwnProperty(m)&&$p(e,t,m,void 0,i,h);for(f in i)h=i[f],p=n[f],!i.hasOwnProperty(f)||h===p||h===void 0&&p===void 0||$p(e,t,f,h,i,p);return}}for(var u in n)h=n[u],n.hasOwnProperty(u)&&h!=null&&!i.hasOwnProperty(u)&&re(e,t,u,null,i,h);for(d in i)h=i[d],p=n[d],!i.hasOwnProperty(d)||h===p||h==null&&p==null||re(e,t,d,h,i,p)}function Nv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function BT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&Nv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var f=l.transferSize,d=l.initiatorType;f&&Nv(d)&&(l=l.responseEnd,r+=f*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var tm=null,em=null;function Ul(e){return e.nodeType===9?e:e.ownerDocument}function Uv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function RS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function DS(e,t,n,i){return n=Ul(n).createElement(e),n[en]=i,n[Ln]=t,rn(n,e,t),Qe(n),n}function nm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jd=null;function FT(){var e=window.event;return e&&e.type==="popstate"?e===Jd?!1:(Jd=e,!0):(Jd=null,!1)}var eg=typeof setTimeout=="function"?setTimeout:void 0,HT=typeof clearTimeout=="function"?clearTimeout:void 0,Lv=typeof Promise=="function"?Promise:void 0,Ov=typeof requestAnimationFrame=="function"?requestAnimationFrame:eg,VT=typeof queueMicrotask=="function"?queueMicrotask:typeof Lv<"u"?function(e){return Lv.resolve(null).then(e).catch(GT)}:eg;function GT(e){setTimeout(function(){throw e})}function aa(e){return e==="head"}function Iv(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),so(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")jd(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,jd(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[Vl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&jd(e.ownerDocument.body);n=s}while(n);so(t)}function Pv(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function NS(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var a=t[s];0<a.width&&0<a.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function US(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function LS(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function im(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return LS(t,n,e)}function kT(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return LS(t,n,e)}function XT(e){return e.documentElement.clientHeight}function WT(e){this.addEventListener("load",e),this.addEventListener("error",e)}function qT(e,t,n,i,s,a,r,o,l){var c=t.nodeType===9?t:t.ownerDocument;try{var f=c.startViewTransition({update:function(){var h=c.defaultView,p=h.navigation&&h.navigation.transition,_=c.fonts.status;i();var S=[];if(_==="loaded"&&(XT(c),c.fonts.status==="loading"&&S.push(c.fonts.ready)),_=S.length,e!==null)for(var m=e.suspenseyImages,u=0,g=0;g<m.length;g++){var v=m[g];if(!v.complete){var y=v.getBoundingClientRect();if(0<y.bottom&&0<y.right&&y.top<h.innerHeight&&y.left<h.innerWidth){if(u+=WS(v),u>Su){S.length=_;break}v=new Promise(WT.bind(v)),S.push(v)}}}if(0<S.length)return h=Promise.race([Promise.all(S),new Promise(function(T){return setTimeout(T,500)})]).then(s,s),(p?Promise.allSettled([p.finished,h]):h).then(a,a);if(s(),p)return p.finished.then(a,a);a()},types:n});c.__reactViewTransition=f;var d=[];return f.ready.then(function(){for(var h=c.documentElement.getAnimations({subtree:!0}),p=0;p<h.length;p++){var _=h[p],S=_.effect,m=S.pseudoElement;if(m!=null&&m.startsWith("::view-transition")){d.push(_),_=S.getKeyframes();for(var u=m=void 0,g=!0,v=0;v<_.length;v++){var y=_[v],T=y.width;if(m===void 0)m=T;else if(m!==T){g=!1;break}if(T=y.height,u===void 0)u=T;else if(u!==T){g=!1;break}delete y.width,delete y.height,y.transform==="none"&&delete y.transform}g&&m!==void 0&&u!==void 0&&(S.setKeyframes(_),g=getComputedStyle(S.target,S.pseudoElement),g.width!==m||g.height!==u)&&(g=_[0],g.width=m,g.height=u,g=_[_.length-1],g.width=m,g.height=u,S.setKeyframes(_))}}r()},function(h){c.__reactViewTransition===f&&(c.__reactViewTransition=null);try{if(typeof h=="object"&&h!==null)switch(h.name){case"InvalidStateError":(h.message==="View transition was skipped because document visibility state is hidden."||h.message==="Skipping view transition because document visibility state has become hidden."||h.message==="Skipping view transition because viewport size changed."||h.message==="Transition was aborted because of invalid state")&&(h=null)}h!==null&&l(h)}finally{i(),s(),r()}}),f.finished.finally(function(){for(var h=0;h<d.length;h++)d[h].cancel();c.__reactViewTransition===f&&(c.__reactViewTransition=null),o()}),f}catch{return i(),s(),r(),null}}function Na(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Na.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:pe({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)};Na.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var a=n[s].effect;a!==null&&a.target===e&&a.pseudoElement===t&&i.push(n[s])}return i};Na.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function OS(e){return{name:e,group:new Na("group",e),imagePair:new Na("image-pair",e),old:new Na("old",e),new:new Na("new",e)}}function Zn(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Zn.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(IS(a,e,t,n)===-1){var r=this,o=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(o=function(l){r.removeEventListener(e,t,n),typeof t=="function"?t.call(this,l):t.handleEvent(l)}),i!==null&&(s=r.removeEventListener.bind(r,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=to(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:o,cleanup:s}),Un(this._fragmentFiber.child,!1,YT,e,o,i)}this._eventListeners=a}};function YT(e,t,n,i){return ke(e).addEventListener(t,n,i),!1}Zn.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=IS(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var a=s.cleanup;s=to(s.optionsOrUseCapture),Un(this._fragmentFiber.child,!1,ZT,e,n,s),i.splice(t,1),a!==null&&a()}};function ZT(e,t,n,i){return ke(e).removeEventListener(t,n,i),!1}function to(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function zv(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function IS(e,t,n,i){if(e.length===0)return-1;i=zv(i);for(var s=0;s<e.length;s++){var a=e[s];if(a.type===t&&a.listener===n&&zv(a.optionsOrUseCapture)===i)return s}return-1}Zn.prototype.dispatchEvent=function(e){var t=Wa(this._fragmentFiber);if(t===null)return!0;t=ke(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var a=n[s];i.addEventListener(a.type,a.attachedListener,to(a.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)a=n[s],i.removeEventListener(a.type,a.attachedListener,to(a.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)};Zn.prototype.focus=function(e){Un(this._fragmentFiber.child,!0,PS,e,void 0,void 0)};function PS(e,t){return e.tag===6?!1:(e=ke(e),rA(e,t))}Zn.prototype.focusLast=function(e){var t=[];Un(this._fragmentFiber.child,!0,ng,t,void 0,void 0);for(var n=t.length-1;0<=n&&!PS(t[n],e);n--);};function ng(e,t){return t.push(e),!1}Zn.prototype.blur=function(){var e=Wa(this._fragmentFiber);e!==null&&(e=ke(e),e=Ul(e).activeElement,e!==null&&Un(this._fragmentFiber.child,!1,KT,e,void 0,void 0))};function KT(e,t){return e.tag===6?!1:(e=ke(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Zn.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),Un(this._fragmentFiber.child,!1,JT,e,void 0,void 0)};function JT(e,t){return e.tag===6||(e=ke(e),t.observe(e)),!1}Zn.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),Un(this._fragmentFiber.child,!1,QT,e,void 0,void 0);for(var n=t=0;n<Mi.length;n++){var i=Mi[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):Mi[t++]=i}Mi.length=t}};function QT(e,t){return e.tag===6||(e=ke(e),t.unobserve(e)),!1}var Mi=[],Qd=!1;function jT(e,t,n){Mi.push({fragmentInstance:e,observer:t,instance:n}),Qd||(Qd=!0,oA(function(){Qd=!1;var i=Mi;Mi=[];for(var s=0;s<i.length;s++){var a=i[s];a.observer.unobserve(a.instance)}}))}Zn.prototype.getClientRects=function(){var e=[];return Un(this._fragmentFiber.child,!1,$T,e,void 0,void 0),e};function $T(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=ke(e),t.push.apply(t,e.getClientRects());return!1}Zn.prototype.getRootNode=function(e){var t=Wa(this._fragmentFiber);return t===null?this:ke(t).getRootNode(e)};Zn.prototype.compareDocumentPosition=function(e){var t=Wa(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];Un(this._fragmentFiber.child,!1,ng,n,void 0,void 0);var i=ke(t);if(n.length===0){if(n=i,g_(this._fragmentFiber)){t:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break t}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=sy(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=ke(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=ke(n[0]),s=ke(n[n.length-1]);var a=g_(this._fragmentFiber)?t.parentElement:i;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var r=t.compareDocumentPosition(e),o=s.compareDocumentPosition(e),l=r&Node.DOCUMENT_POSITION_CONTAINED_BY||o&Node.DOCUMENT_POSITION_CONTAINED_BY;return o=i&&a&&r&Node.DOCUMENT_POSITION_FOLLOWING&&o&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||a&&s===e||l||o?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!a&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:r,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||tA(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function tA(e,t,n,i,s){var a=Da(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)t:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break t}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=s.ownerDocument,s===a||s===a.documentElement||s===a.body;t:{for(a=t,t=Wa(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break t}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=tp(n,a,__),t===null?t=!1:(Un(t,!0,D1,a,n),a=Er,Er=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===i)&&(t=tp(i,a,__),t===null?t=!1:(Un(t,!0,N1,a,i),a=Er,$d=Er=null,t=a!==null)),t):!1}function Bv(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Zn.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(k(566));var t=[];Un(this._fragmentFiber.child,!1,ng,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=sy(this._fragmentFiber);if(i=n?i[1]||i[0]||Wa(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=ke(i),Bv(e,n);return}if(i=ke(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=ke(s),Bv(s,n)):ke(s).scrollIntoView(e),i+=n?-1:1}};function eA(e,t){return e=ke(e),zS(e,t),!1}function zS(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function BS(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,to(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){for(var r=0,o=0;o<Mi.length;o++){var l=Mi[o];(l.fragmentInstance!==t||l.observer!==a||l.instance!==e)&&(Mi[r++]=l)}Mi.length=r,a.observe(e)}),zS(e,t))}function nA(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,to(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(a){typeof a.rootMargin=="string"?jT(t,a,e):a.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function sm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":sm(n),th(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function iA(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Vl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=ui(e.nextSibling),e===null)break}return null}function sA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ui(e.nextSibling),e===null))return null;return e}function FS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ui(e.nextSibling),e===null))return null;return e}function am(e){return e.data==="$?"||e.data==="$~"}function ig(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function aA(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ui(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var rm=null;function Fv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ui(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Hv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function rA(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function oA(e){Ov(function(){Ov(function(t){return e(t)})})}function HS(e,t,n){switch(t=Ul(n),e){case"html":if(e=t.documentElement,!e)throw Error(k(452));return e;case"head":if(e=t.head,!e)throw Error(k(453));return e;case"body":if(e=t.body,!e)throw Error(k(454));return e;default:throw Error(k(451))}}function VS(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&re(e,t,i,null,PT,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Vi&&(e.onclick=null),th(e)}function jd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);th(e)}var hi=new Map,Vv=new Set;function Ll(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var _s=ee.d;ee.d={f:lA,r:cA,D:uA,C:hA,L:fA,m:dA,X:mA,S:pA,M:gA};function lA(){var e=_s.f(),t=ph();return e||t}function cA(e){var t=ro(e);t!==null&&t.tag===5&&t.type==="form"?Tx(t):_s.r(e)}var uo=typeof document>"u"?null:document;function GS(e,t,n){var i=uo;if(i&&typeof t=="string"&&t){var s=oi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),Vv.has(s)||(Vv.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),rn(t,"link",e),Qe(t),i.head.appendChild(t)))}}function uA(e){_s.D(e),GS("dns-prefetch",e,null)}function hA(e,t){_s.C(e,t),GS("preconnect",e,t)}function fA(e,t,n){_s.L(e,t,n);var i=uo;if(i&&e&&t){var s='link[rel="preload"][as="'+oi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+oi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+oi(n.imageSizes)+'"]')):s+='[href="'+oi(e)+'"]';var a=s;switch(t){case"style":a=eo(e);break;case"script":a=ho(e)}if(!(hi.has(a)||(e=pe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),hi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Yl(a))||t==="script"&&i.querySelector(Zl(a))))){var r=i.createElement("link");rn(r,"link",e),t==="style"&&(r[Cu]=!0,r.onload=r.onerror=function(){_y(r)}),Qe(r),i.head.appendChild(r)}}}function dA(e,t){_s.m(e,t);var n=uo;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+oi(i)+'"][href="'+oi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=ho(e)}if(!hi.has(a)&&(e=pe({rel:"modulepreload",href:e},t),hi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Zl(a)))return}i=n.createElement("link"),rn(i,"link",e),Qe(i),n.head.appendChild(i)}}}function pA(e,t,n){_s.S(e,t,n);var i=uo;if(i&&e){var s=Pr(i).hoistableStyles,a=eo(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Yl(a)))o.loading=5;else{e=pe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=hi.get(a))&&sg(e,n);var l=r=i.createElement("link");Qe(l),rn(l,"link",e),l._p=new Promise(function(c,f){l.onload=c,l.onerror=f}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,yu(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function mA(e,t){_s.X(e,t);var n=uo;if(n&&e){var i=Pr(n).hoistableScripts,s=ho(e),a=i.get(s);a||(a=n.querySelector(Zl(s)),a||(e=pe({src:e,async:!0},t),(t=hi.get(s))&&ag(e,t),a=n.createElement("script"),Qe(a),rn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function gA(e,t){_s.M(e,t);var n=uo;if(n&&e){var i=Pr(n).hoistableScripts,s=ho(e),a=i.get(s);a||(a=n.querySelector(Zl(s)),a||(e=pe({src:e,async:!0,type:"module"},t),(t=hi.get(s))&&ag(e,t),a=n.createElement("script"),Qe(a),rn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function Gv(e,t,n,i){var s=(s=ks.current)?Ll(s):null;if(!s)throw Error(k(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=eo(n.href),t=Pr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=eo(n.href);var a=Pr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Yl(e)))?a._p||(r.instance=a,r.state.loading=5):(a=hi.get(e),a||(a={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},hi.set(e,a)),_A(s,e,a,r.state))),t&&i===null)throw Error(k(528,""));return r}if(t&&i!==null)throw Error(k(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=ho(n),t=Pr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(k(444,e))}}function eo(e){return'href="'+oi(e)+'"'}function Yl(e){return'link[rel="stylesheet"]['+e+"]"}function kS(e){return pe({},e,{"data-precedence":e.precedence,precedence:null})}function _A(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Cu]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[Cu]=!0,t.onload=t.onerror=_y.bind(null,t),rn(t,"link",n),Qe(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function ho(e){return'[src="'+oi(e)+'"]'}function Zl(e){return"script[async]"+e}function kv(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+oi(n.href)+'"]');if(i)return t.instance=i,Qe(i),i;var s=pe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Qe(i),rn(i,"style",s),yu(i,n.precedence,e),t.instance=i;case"stylesheet":s=eo(n.href);var a=e.querySelector(Yl(s));if(a)return t.state.loading|=4,t.instance=a,Qe(a),a;i=kS(n),(s=hi.get(s))&&sg(i,s),a=(e.ownerDocument||e).createElement("link"),Qe(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),rn(a,"link",i),t.state.loading|=4,yu(a,n.precedence,e),t.instance=a;case"script":return a=ho(n.src),(s=e.querySelector(Zl(a)))?(t.instance=s,Qe(s),s):(i=n,(s=hi.get(a))&&(i=pe({},n),ag(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),Qe(s),rn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(k(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,yu(i,n.precedence,e));return t.instance}function yu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function sg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ag(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var xu=null;function Xv(e,t,n){if(xu===null){var i=new Map,s=xu=new Map;s.set(n,i)}else s=xu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[Vl]||a[en]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function om(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function vA(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Wv(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function XS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function WS(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function qv(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=WS(t),e.suspenseyImages.push(t)),e=SA.bind(e),t.decode().then(e,e))}function yA(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=eo(i.href),a=t.querySelector(Yl(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ol.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Qe(a);return}a=t.ownerDocument||t,i=kS(i),(s=hi.get(s))&&sg(i,s),a=a.createElement("link"),Qe(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),rn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ol.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Su=0;function xA(e,t){return e.stylesheets&&e.count===0&&Mu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Mu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&Su===0&&(Su=62500*BT());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Mu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>Su?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function qS(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Mu(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Ol(){this.count--,qS(this)}function SA(){this.imgCount--,qS(this)}var Qu=null;function Mu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qu=new Map,t.forEach(MA,e),Qu=null,Ol.call(e))}function MA(e,t){if(!(t.state.loading&4)){var n=Qu.get(e);if(n)var i=n.get(null);else{n=new Map,Qu.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Ol.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var no={$$typeof:Hi,Provider:null,Consumer:null,_currentValue:Ua,_currentValue2:Ua,_threadCount:0};function bA(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ad(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ad(0),this.hiddenUpdates=Ad(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.transitionTypes=null,this.incompleteTransitions=new Map}function YS(e,t,n,i,s,a,r,o,l,c,f,d){return e=new bA(e,t,n,r,l,c,f,d,o),t=1,a===!0&&(t|=24),a=Dn(3,null,null,t),e.current=a,a.stateNode=e,t=Tm(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},Cm(a),e}function ZS(e){return e?(e=Ur,e):Ur}function KS(e,t,n,i,s,a){s=ZS(s),i.context===null?i.context=s:i.pendingContext=s,i=Ws(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=qs(e,i,t),n!==null&&(Nn(n,e,t),fl(n,e,t))}function Yv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function rg(e,t){Yv(e,t),(e=e.alternate)&&Yv(e,t)}function JS(e){if(e.tag===13||e.tag===31){var t=Za(e,67108864);t!==null&&Nn(t,e,67108864),rg(e,67108864)}}function Zv(e){if(e.tag===13||e.tag===31){var t=qn();t=dm(t);var n=Za(e,t);n!==null&&Nn(n,e,t),rg(e,t)}}var io=!0;function EA(e,t,n,i){var s=Rt.T;Rt.T=null;var a=ee.p;try{ee.p=2,og(e,t,n,i)}finally{ee.p=a,Rt.T=s}}function TA(e,t,n,i){var s=Rt.T;Rt.T=null;var a=ee.p;try{ee.p=8,og(e,t,n,i)}finally{ee.p=a,Rt.T=s}}function og(e,t,n,i){if(io){var s=lm(i);if(s===null)Kd(e,t,i,ju,n),Kv(e,i);else if(wA(s,e,t,n,i))i.stopPropagation();else if(Kv(e,i),t&4&&-1<AA.indexOf(e)){for(;s!==null;){var a=ro(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=wa(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Wn(r);o.entanglements[1]|=l,r&=~l}Zi(a),(te&6)===0&&(qu=kn()+500,ql(0,!1))}}break;case 31:case 13:o=Za(a,2),o!==null&&Nn(o,a,2),ph(),rg(a,2)}if(a=lm(i),a===null&&Kd(e,t,i,ju,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Kd(e,t,i,null,n)}}function lm(e){return e=gm(e),lg(e)}var ju=null;function lg(e){if(ju=null,e=Da(e),e!==null){var t=zl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=ey(t),e!==null)return e;e=null}else if(n===31){if(e=ny(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ju=e,null}function QS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(H1()){case ly:return 2;case cy:return 8;case wu:case V1:return 32;case uy:return 268435456;default:return 32}default:return 32}}var cm=!1,Js=null,Qs=null,js=null,Il=new Map,Pl=new Map,Ps=[],AA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kv(e,t){switch(e){case"focusin":case"focusout":Js=null;break;case"dragenter":case"dragleave":Qs=null;break;case"mouseover":case"mouseout":js=null;break;case"pointerover":case"pointerout":Il.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(t.pointerId)}}function el(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=ro(t),t!==null&&JS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function wA(e,t,n,i,s){switch(t){case"focusin":return Js=el(Js,e,t,n,i,s),!0;case"dragenter":return Qs=el(Qs,e,t,n,i,s),!0;case"mouseover":return js=el(js,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return Il.set(a,el(Il.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,Pl.set(a,el(Pl.get(a)||null,e,t,n,i,s)),!0}return!1}function jS(e){var t=Da(e.target);if(t!==null){var n=zl(t);if(n!==null){if(t=n.tag,t===13){if(t=ey(n),t!==null){e.blockedOn=t,S_(e.priority,function(){Zv(n)});return}}else if(t===31){if(t=ny(n),t!==null){e.blockedOn=t,S_(e.priority,function(){Zv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=lm(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);fp=i,n.target.dispatchEvent(i),fp=null}else return t=ro(n),t!==null&&JS(t),e.blockedOn=n,!1;t.shift()}return!0}function Jv(e,t,n){bu(e)&&n.delete(t)}function CA(){cm=!1,Js!==null&&bu(Js)&&(Js=null),Qs!==null&&bu(Qs)&&(Qs=null),js!==null&&bu(js)&&(js=null),Il.forEach(Jv),Pl.forEach(Jv)}function iu(e,t){e.blockedOn===t&&(e.blockedOn=null,cm||(cm=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,CA)))}var su=null;function Qv(e){su!==e&&(su=e,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,function(){su===e&&(su=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(lg(i||n)===null)continue;break}var a=ro(n);a!==null&&(e.splice(t,3),t-=3,Cp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function so(e){function t(l){return iu(l,e)}Js!==null&&iu(Js,e),Qs!==null&&iu(Qs,e),js!==null&&iu(js,e),Il.forEach(t),Pl.forEach(t);for(var n=0;n<Ps.length;n++){var i=Ps[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Ps.length&&(n=Ps[0],n.blockedOn===null);)jS(n),n.blockedOn===null&&Ps.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[Ln]||null;if(typeof a=="function")r||Qv(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[Ln]||null)o=r.formAction;else if(lg(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Qv(n)}}}function $S(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function cg(e){this._internalRoot=e}_h.prototype.render=cg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));var n=t.current,i=qn();KS(n,i,e,t,null,null)};_h.prototype.unmount=cg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;KS(e.current,2,null,e,null,null),ph(),t[ao]=null}};function _h(e){this._internalRoot=e}_h.prototype.unstable_scheduleHydration=function(e){if(e){var t=gy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ps.length&&t!==0&&t<Ps[n].priority;n++);Ps.splice(n,0,e),n===0&&jS(e)}};var jv=$v.version;if(jv!=="19.3.1")throw Error(k(527,jv,"19.3.1"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=R1(t),e=e!==null?iy(e):null,e=e===null?null:e.stateNode,e};var RA={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Rt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(nl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!nl.isDisabled&&nl.supportsFiber))try{Bl=nl.inject(RA),Xn=nl}catch{}var nl;vh.createRoot=function(e,t){if(!ty(e))throw Error(k(299));var n=!1,i="",s=Lx,a=Ox,r=Ix;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=YS(e,1,!1,null,null,n,i,null,s,a,r,$S),e[ao]=t.current,tg(e),new cg(t)};vh.hydrateRoot=function(e,t,n){if(!ty(e))throw Error(k(299));var i=!1,s="",a=Lx,r=Ox,o=Ix,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=YS(e,1,!0,t,n??null,i,s,l,a,r,o,$S),t.context=ZS(null),n=t.current,i=qn(),i=dm(i),s=Ws(i),s.callback=null,qs(n,s,i),n=i,t.current.lanes=n,Hl(t,n),Zi(t),e[ao]=t.current,tg(e),new _h(t)};vh.version="19.3.1"});var iM=Cs((ED,nM)=>{"use strict";function eM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eM)}catch(e){console.error(e)}}eM(),nM.exports=tM()});var ct=P0(Lc()),Yb=P0(iM());var ya={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},EM=0,Hg=1,TM=2;var Vg=1,AM=2,ji=3,Es=0,Tn=1,_i=2,Ts=0,nr=1,Gg=2,kg=3,Xg=4,wM=5,pa=100,CM=101,RM=102,DM=103,NM=104,UM=200,LM=201,OM=202,IM=203,Bh=204,Fh=205,PM=206,zM=207,BM=208,FM=209,HM=210,VM=211,GM=212,kM=213,XM=214,of=0,lf=1,cf=2,ir=3,uf=4,hf=5,ff=6,df=7,Wg=0,WM=1,qM=2,As=0,YM=1,ZM=2,KM=3,JM=4,QM=5,jM=6,$M=7;var qg=300,rr=301,or=302,pf=303,mf=304,bc=306,Hh=1e3,da=1001,Vh=1002,mi=1003,tb=1004;var Ec=1005;var Ri=1006,gf=1007;var Sa=1008;var Ui=1009,Yg=1010,Zg=1011,zo=1012,_f=1013,Ma=1014,$i=1015,Bo=1016,vf=1017,yf=1018,Fo=1020,Kg=35902,Jg=35899,Qg=1021,jg=1022,vi=1023,wo=1026,Ho=1027,$g=1028,xf=1029,t0=1030,Sf=1031;var Mf=1033,Tc=33776,Ac=33777,wc=33778,Cc=33779,bf=35840,Ef=35841,Tf=35842,Af=35843,wf=36196,Cf=37492,Rf=37496,Df=37808,Nf=37809,Uf=37810,Lf=37811,Of=37812,If=37813,Pf=37814,zf=37815,Bf=37816,Ff=37817,Hf=37818,Vf=37819,Gf=37820,kf=37821,Xf=36492,Wf=36494,qf=36495,Yf=36283,Zf=36284,Kf=36285,Jf=36286;var ec=2300,Gh=2301,zh=2302,Ug=2400,Lg=2401,Og=2402;var eb=3200,nb=3201;var e0=0,ib=1,ws="",Qn="srgb",sr="srgb-linear",nc="linear",le="srgb";var tr=7680;var Ig=519,sb=512,ab=513,rb=514,n0=515,ob=516,lb=517,cb=518,ub=519,Pg=35044;var i0="300 es",Ci=2e3,ic=2001;var Ki=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sM=1234567,$l=Math.PI/180,Co=180/Math.PI;function Vo(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[e&255]+fn[e>>8&255]+fn[e>>16&255]+fn[e>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[n&63|128]+fn[n>>8&255]+"-"+fn[n>>16&255]+fn[n>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function kt(e,t,n){return Math.max(t,Math.min(n,e))}function s0(e,t){return(e%t+t)%t}function DA(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function NA(e,t,n){return e!==t?(n-e)/(t-e):0}function tc(e,t,n){return(1-n)*e+n*t}function UA(e,t,n,i){return tc(e,t,1-Math.exp(-n*i))}function LA(e,t=1){return t-Math.abs(s0(e,t*2)-t)}function OA(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function IA(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function PA(e,t){return e+Math.floor(Math.random()*(t-e+1))}function zA(e,t){return e+Math.random()*(t-e)}function BA(e){return e*(.5-Math.random())}function FA(e){e!==void 0&&(sM=e);let t=sM+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function HA(e){return e*$l}function VA(e){return e*Co}function GA(e){return(e&e-1)===0&&e!==0}function kA(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function XA(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function WA(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),f=r((t+i)/2),d=a((t-i)/2),h=r((t-i)/2),p=a((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":e.set(o*f,l*d,l*h,o*c);break;case"YZY":e.set(l*h,o*f,l*d,o*c);break;case"ZXZ":e.set(l*d,l*h,o*f,o*c);break;case"XZX":e.set(o*f,l*_,l*p,o*c);break;case"YXY":e.set(l*p,o*f,l*_,o*c);break;case"ZYZ":e.set(l*_,l*p,o*f,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function To(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function bn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var a0={DEG2RAD:$l,RAD2DEG:Co,generateUUID:Vo,clamp:kt,euclideanModulo:s0,mapLinear:DA,inverseLerp:NA,lerp:tc,damp:UA,pingpong:LA,smoothstep:OA,smootherstep:IA,randInt:PA,randFloat:zA,randFloatSpread:BA,seededRandom:FA,degToRad:HA,radToDeg:VA,isPowerOfTwo:GA,ceilPowerOfTwo:kA,floorPowerOfTwo:XA,setQuaternionFromProperEuler:WA,normalize:bn,denormalize:To},Ot=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=kt(this.x,t.x,n.x),this.y=kt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=kt(this.x,t,n),this.y=kt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},gi=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],f=i[s+2],d=i[s+3],h=a[r+0],p=a[r+1],_=a[r+2],S=a[r+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d;return}if(o===1){t[n+0]=h,t[n+1]=p,t[n+2]=_,t[n+3]=S;return}if(d!==S||l!==h||c!==p||f!==_){let m=1-o,u=l*h+c*p+f*_+d*S,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let T=Math.sqrt(v),C=Math.atan2(T,u*g);m=Math.sin(m*C)/T,o=Math.sin(o*C)/T}let y=o*g;if(l=l*m+h*y,c=c*m+p*y,f=f*m+_*y,d=d*m+S*y,m===1-o){let T=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=T,c*=T,f*=T,d*=T}}t[n]=l,t[n+1]=c,t[n+2]=f,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],f=i[s+3],d=a[r],h=a[r+1],p=a[r+2],_=a[r+3];return t[n]=o*_+f*d+l*p-c*h,t[n+1]=l*_+f*h+c*d-o*p,t[n+2]=c*_+f*p+o*h-l*d,t[n+3]=f*_-o*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(s/2),d=o(a/2),h=l(i/2),p=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"YXZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"ZXY":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"ZYX":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"YZX":this._x=h*f*d+c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d-h*p*_;break;case"XZY":this._x=h*f*d-c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){let p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+f)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(kt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-i*c,this._z=a*f+r*c+i*l-s*o,this._w=r*f-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,a=this._z,r=this._w,o=r*t._w+i*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*r+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*a+n*this._z,this.normalize(),this}let c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=r*d+this._w*h,this._x=i*d+this._x*h,this._y=s*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(aM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(aM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),f=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*f,this.y=i+l*f+o*c-a*d,this.z=s+l*d+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=kt(this.x,t.x,n.x),this.y=kt(this.y,t.y,n.y),this.z=kt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=kt(this.x,t,n),this.y=kt(this.y,t,n),this.z=kt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ug.copy(this).projectOnVector(t),this.sub(ug)}reflect(t){return this.sub(ug.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(kt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ug=new I,aM=new gi,Bt=class e{constructor(t,n,i,s,a,r,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],_=i[8],S=s[0],m=s[3],u=s[6],g=s[1],v=s[4],y=s[7],T=s[2],C=s[5],w=s[8];return a[0]=r*S+o*g+l*T,a[3]=r*m+o*v+l*C,a[6]=r*u+o*y+l*w,a[1]=c*S+f*g+d*T,a[4]=c*m+f*v+d*C,a[7]=c*u+f*y+d*w,a[2]=h*S+p*g+_*T,a[5]=h*m+p*v+_*C,a[8]=h*u+p*y+_*w,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return n*r*f-n*o*c-i*a*f+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=f*r-o*c,h=o*l-f*a,p=c*a-r*l,_=n*d+i*h+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/_;return t[0]=d*S,t[1]=(s*c-f*i)*S,t[2]=(o*i-s*r)*S,t[3]=h*S,t[4]=(f*n-s*l)*S,t[5]=(s*a-o*n)*S,t[6]=p*S,t[7]=(i*l-c*n)*S,t[8]=(r*n-i*a)*S,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(hg.makeScale(t,n)),this}rotate(t){return this.premultiply(hg.makeRotation(-t)),this}translate(t,n){return this.premultiply(hg.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},hg=new Bt;function r0(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function sc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function hb(){let e=sc("canvas");return e.style.display="block",e}var rM={};function Ro(e){e in rM||(rM[e]=!0,console.warn(e))}function fb(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var oM=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lM=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qA(){let e={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===le&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===le&&(s.r=Ao(s.r),s.g=Ao(s.g),s.b=Ao(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ws?nc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Ro("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Ro("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[sr]:{primaries:t,whitePoint:i,transfer:nc,toXYZ:oM,fromXYZ:lM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:t,whitePoint:i,transfer:le,toXYZ:oM,fromXYZ:lM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),e}var Qt=qA();function bs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ao(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var fo,kh=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{fo===void 0&&(fo=sc("canvas")),fo.width=t.width,fo.height=t.height;let s=fo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=fo}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=sc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=bs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bs(n[i]/255)*255):n[i]=bs(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},YA=0,Do=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YA++}),this.uuid=Vo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(fg(s[r].image)):a.push(fg(s[r]))}else a=fg(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function fg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?kh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ZA=0,dg=new I,jn=class e extends Ki{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=da,s=da,a=Ri,r=Sa,o=vi,l=Ui,c=e.DEFAULT_ANISOTROPY,f=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZA++}),this.uuid=Vo(),this.name="",this.source=new Do(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dg).x}get height(){return this.source.getSize(dg).y}get depth(){return this.source.getSize(dg).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hh:t.x=t.x-Math.floor(t.x);break;case da:t.x=t.x<0?0:1;break;case Vh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hh:t.y=t.y-Math.floor(t.y);break;case da:t.y=t.y<0?0:1;break;case Vh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=qg;jn.DEFAULT_ANISOTROPY=1;var Ne=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],_=l[9],S=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+S)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let v=(c+1)/2,y=(p+1)/2,T=(u+1)/2,C=(f+h)/4,w=(d+S)/4,D=(_+m)/4;return v>y&&v>T?v<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(v),s=C/i,a=w/i):y>T?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=C/s,a=D/s):T<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(T),i=w/a,s=D/a),this.set(i,s,a,n),this}let g=Math.sqrt((m-_)*(m-_)+(d-S)*(d-S)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-S)/g,this.z=(h-f)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=kt(this.x,t.x,n.x),this.y=kt(this.y,t.y,n.y),this.z=kt(this.z,t.z,n.z),this.w=kt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=kt(this.x,t,n),this.y=kt(this.y,t,n),this.z=kt(this.z,t,n),this.w=kt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(kt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xh=class extends Ki{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ne(0,0,t,n),this.scissorTest=!1,this.viewport=new Ne(0,0,t,n);let s={width:t,height:n,depth:i.depth},a=new jn(s);this.textures=[];let r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new Do(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ji=class extends Xh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},ac=class extends jn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=mi,this.minFilter=mi,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wh=class extends jn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=mi,this.minFilter=mi,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ma=class{constructor(t=new I(1/0,1/0,1/0),n=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Ti.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Ti.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Ti.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ti):Ti.fromBufferAttribute(a,r),Ti.applyMatrix4(t.matrixWorld),this.expandByPoint(Ti);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yh.copy(i.boundingBox)),yh.applyMatrix4(t.matrixWorld),this.union(yh)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ti),Ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kl),xh.subVectors(this.max,Kl),po.subVectors(t.a,Kl),mo.subVectors(t.b,Kl),go.subVectors(t.c,Kl),ra.subVectors(mo,po),oa.subVectors(go,mo),Ja.subVectors(po,go);let n=[0,-ra.z,ra.y,0,-oa.z,oa.y,0,-Ja.z,Ja.y,ra.z,0,-ra.x,oa.z,0,-oa.x,Ja.z,0,-Ja.x,-ra.y,ra.x,0,-oa.y,oa.x,0,-Ja.y,Ja.x,0];return!pg(n,po,mo,go,xh)||(n=[1,0,0,0,1,0,0,0,1],!pg(n,po,mo,go,xh))?!1:(Sh.crossVectors(ra,oa),n=[Sh.x,Sh.y,Sh.z],pg(n,po,mo,go,xh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vs=[new I,new I,new I,new I,new I,new I,new I,new I],Ti=new I,yh=new ma,po=new I,mo=new I,go=new I,ra=new I,oa=new I,Ja=new I,Kl=new I,xh=new I,Sh=new I,Qa=new I;function pg(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){Qa.fromArray(e,a);let o=s.x*Math.abs(Qa.x)+s.y*Math.abs(Qa.y)+s.z*Math.abs(Qa.z),l=t.dot(Qa),c=n.dot(Qa),f=i.dot(Qa);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}var KA=new ma,Jl=new I,mg=new I,No=class{constructor(t=new I,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):KA.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jl.subVectors(t,this.center);let n=Jl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Jl,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mg.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jl.copy(t.center).add(mg)),this.expandByPoint(Jl.copy(t.center).sub(mg))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ys=new I,gg=new I,Mh=new I,la=new I,_g=new I,bh=new I,vg=new I,Uo=class{constructor(t=new I,n=new I(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ys)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=ys.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(ys.copy(this.origin).addScaledVector(this.direction,n),ys.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){gg.copy(t).add(n).multiplyScalar(.5),Mh.copy(n).sub(t).normalize(),la.copy(this.origin).sub(gg);let a=t.distanceTo(n)*.5,r=-this.direction.dot(Mh),o=la.dot(this.direction),l=-la.dot(Mh),c=la.lengthSq(),f=Math.abs(1-r*r),d,h,p,_;if(f>0)if(d=r*l-o,h=r*o-l,_=a*f,d>=0)if(h>=-_)if(h<=_){let S=1/f;d*=S,h*=S,p=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+c);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(gg).addScaledVector(Mh,h),p}intersectSphere(t,n){ys.subVectors(t.center,this.origin);let i=ys.dot(this.direction),s=ys.dot(ys)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),f>=0?(a=(t.min.y-h.y)*f,r=(t.max.y-h.y)*f):(a=(t.max.y-h.y)*f,r=(t.min.y-h.y)*f),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,ys)!==null}intersectTriangle(t,n,i,s,a){_g.subVectors(n,t),bh.subVectors(i,t),vg.crossVectors(_g,bh);let r=this.direction.dot(vg),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;la.subVectors(this.origin,t);let l=o*this.direction.dot(bh.crossVectors(la,bh));if(l<0)return null;let c=o*this.direction.dot(_g.cross(la));if(c<0||l+c>r)return null;let f=-o*la.dot(vg);return f<0?null:this.at(f/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class e{constructor(t,n,i,s,a,r,o,l,c,f,d,h,p,_,S,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,f,d,h,p,_,S,m)}set(t,n,i,s,a,r,o,l,c,f,d,h,p,_,S,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=_,u[11]=S,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/_o.setFromMatrixColumn(t,0).length(),a=1/_o.setFromMatrixColumn(t,1).length(),r=1/_o.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let h=r*f,p=r*d,_=o*f,S=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=h-S*c,n[9]=-o*l,n[2]=S-h*c,n[6]=_+p*c,n[10]=r*l}else if(t.order==="YXZ"){let h=l*f,p=l*d,_=c*f,S=c*d;n[0]=h+S*o,n[4]=_*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*f,n[9]=-o,n[2]=p*o-_,n[6]=S+h*o,n[10]=r*l}else if(t.order==="ZXY"){let h=l*f,p=l*d,_=c*f,S=c*d;n[0]=h-S*o,n[4]=-r*d,n[8]=_+p*o,n[1]=p+_*o,n[5]=r*f,n[9]=S-h*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let h=r*f,p=r*d,_=o*f,S=o*d;n[0]=l*f,n[4]=_*c-p,n[8]=h*c+S,n[1]=l*d,n[5]=S*c+h,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let h=r*l,p=r*c,_=o*l,S=o*c;n[0]=l*f,n[4]=S-h*d,n[8]=_*d+p,n[1]=d,n[5]=r*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*d+_,n[10]=h-S*d}else if(t.order==="XZY"){let h=r*l,p=r*c,_=o*l,S=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+S,n[5]=r*f,n[9]=p*d-_,n[2]=_*d-p,n[6]=o*f,n[10]=S*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(JA,t,QA)}lookAt(t,n,i){let s=this.elements;return Kn.subVectors(t,n),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),ca.crossVectors(i,Kn),ca.lengthSq()===0&&(Math.abs(i.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),ca.crossVectors(i,Kn)),ca.normalize(),Eh.crossVectors(Kn,ca),s[0]=ca.x,s[4]=Eh.x,s[8]=Kn.x,s[1]=ca.y,s[5]=Eh.y,s[9]=Kn.y,s[2]=ca.z,s[6]=Eh.z,s[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],_=i[2],S=i[6],m=i[10],u=i[14],g=i[3],v=i[7],y=i[11],T=i[15],C=s[0],w=s[4],D=s[8],E=s[12],b=s[1],U=s[5],F=s[9],G=s[13],q=s[2],K=s[6],W=s[10],nt=s[14],H=s[3],rt=s[7],ht=s[11],Et=s[15];return a[0]=r*C+o*b+l*q+c*H,a[4]=r*w+o*U+l*K+c*rt,a[8]=r*D+o*F+l*W+c*ht,a[12]=r*E+o*G+l*nt+c*Et,a[1]=f*C+d*b+h*q+p*H,a[5]=f*w+d*U+h*K+p*rt,a[9]=f*D+d*F+h*W+p*ht,a[13]=f*E+d*G+h*nt+p*Et,a[2]=_*C+S*b+m*q+u*H,a[6]=_*w+S*U+m*K+u*rt,a[10]=_*D+S*F+m*W+u*ht,a[14]=_*E+S*G+m*nt+u*Et,a[3]=g*C+v*b+y*q+T*H,a[7]=g*w+v*U+y*K+T*rt,a[11]=g*D+v*F+y*W+T*ht,a[15]=g*E+v*G+y*nt+T*Et,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],d=t[6],h=t[10],p=t[14],_=t[3],S=t[7],m=t[11],u=t[15];return _*(+a*l*d-s*c*d-a*o*h+i*c*h+s*o*p-i*l*p)+S*(+n*l*p-n*c*h+a*r*h-s*r*p+s*c*f-a*l*f)+m*(+n*c*d-n*o*p-a*r*d+i*r*p+a*o*f-i*c*f)+u*(-s*o*f-n*l*d+n*o*h+s*r*d-i*r*h+i*l*f)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=t[9],h=t[10],p=t[11],_=t[12],S=t[13],m=t[14],u=t[15],g=d*m*c-S*h*c+S*l*p-o*m*p-d*l*u+o*h*u,v=_*h*c-f*m*c-_*l*p+r*m*p+f*l*u-r*h*u,y=f*S*c-_*d*c+_*o*p-r*S*p-f*o*u+r*d*u,T=_*d*l-f*S*l-_*o*h+r*S*h+f*o*m-r*d*m,C=n*g+i*v+s*y+a*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/C;return t[0]=g*w,t[1]=(S*h*a-d*m*a-S*s*p+i*m*p+d*s*u-i*h*u)*w,t[2]=(o*m*a-S*l*a+S*s*c-i*m*c-o*s*u+i*l*u)*w,t[3]=(d*l*a-o*h*a-d*s*c+i*h*c+o*s*p-i*l*p)*w,t[4]=v*w,t[5]=(f*m*a-_*h*a+_*s*p-n*m*p-f*s*u+n*h*u)*w,t[6]=(_*l*a-r*m*a-_*s*c+n*m*c+r*s*u-n*l*u)*w,t[7]=(r*h*a-f*l*a+f*s*c-n*h*c-r*s*p+n*l*p)*w,t[8]=y*w,t[9]=(_*d*a-f*S*a-_*i*p+n*S*p+f*i*u-n*d*u)*w,t[10]=(r*S*a-_*o*a+_*i*c-n*S*c-r*i*u+n*o*u)*w,t[11]=(f*o*a-r*d*a-f*i*c+n*d*c+r*i*p-n*o*p)*w,t[12]=T*w,t[13]=(f*S*s-_*d*s+_*i*h-n*S*h-f*i*m+n*d*m)*w,t[14]=(_*o*s-r*S*s-_*i*l+n*S*l+r*i*m-n*o*m)*w,t[15]=(r*d*s-f*o*s+f*i*l-n*d*l-r*i*h+n*o*h)*w,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+i,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,f=r+r,d=o+o,h=a*c,p=a*f,_=a*d,S=r*f,m=r*d,u=o*d,g=l*c,v=l*f,y=l*d,T=i.x,C=i.y,w=i.z;return s[0]=(1-(S+u))*T,s[1]=(p+y)*T,s[2]=(_-v)*T,s[3]=0,s[4]=(p-y)*C,s[5]=(1-(h+u))*C,s[6]=(m+g)*C,s[7]=0,s[8]=(_+v)*w,s[9]=(m-g)*w,s[10]=(1-(h+S))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,a=_o.set(s[0],s[1],s[2]).length(),r=_o.set(s[4],s[5],s[6]).length(),o=_o.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Ai.copy(this);let c=1/a,f=1/r,d=1/o;return Ai.elements[0]*=c,Ai.elements[1]*=c,Ai.elements[2]*=c,Ai.elements[4]*=f,Ai.elements[5]*=f,Ai.elements[6]*=f,Ai.elements[8]*=d,Ai.elements[9]*=d,Ai.elements[10]*=d,n.setFromRotationMatrix(Ai),i.x=a,i.y=r,i.z=o,this}makePerspective(t,n,i,s,a,r,o=Ci,l=!1){let c=this.elements,f=2*a/(n-t),d=2*a/(i-s),h=(n+t)/(n-t),p=(i+s)/(i-s),_,S;if(l)_=a/(r-a),S=r*a/(r-a);else if(o===Ci)_=-(r+a)/(r-a),S=-2*r*a/(r-a);else if(o===ic)_=-r/(r-a),S=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=Ci,l=!1){let c=this.elements,f=2/(n-t),d=2/(i-s),h=-(n+t)/(n-t),p=-(i+s)/(i-s),_,S;if(l)_=1/(r-a),S=r/(r-a);else if(o===Ci)_=-2/(r-a),S=-(r+a)/(r-a);else if(o===ic)_=-1/(r-a),S=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},_o=new I,Ai=new ze,JA=new I(0,0,0),QA=new I(1,1,1),ca=new I,Eh=new I,Kn=new I,cM=new ze,uM=new gi,Di=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],d=s[2],h=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-kt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return cM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return uM.setFromEuler(this),this.setFromQuaternion(uM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";var rc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jA=0,hM=new I,vo=new gi,xs=new ze,Th=new I,Ql=new I,$A=new I,tw=new gi,fM=new I(1,0,0),dM=new I(0,1,0),pM=new I(0,0,1),mM={type:"added"},ew={type:"removed"},yo={type:"childadded",child:null},yg={type:"childremoved",child:null},mn=class e extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jA++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new I,n=new Di,i=new gi,s=new I(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new Bt}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return vo.setFromAxisAngle(t,n),this.quaternion.multiply(vo),this}rotateOnWorldAxis(t,n){return vo.setFromAxisAngle(t,n),this.quaternion.premultiply(vo),this}rotateX(t){return this.rotateOnAxis(fM,t)}rotateY(t){return this.rotateOnAxis(dM,t)}rotateZ(t){return this.rotateOnAxis(pM,t)}translateOnAxis(t,n){return hM.copy(t).applyQuaternion(this.quaternion),this.position.add(hM.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(fM,t)}translateY(t){return this.translateOnAxis(dM,t)}translateZ(t){return this.translateOnAxis(pM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Th.copy(t):Th.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ql.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xs.lookAt(Ql,Th,this.up):xs.lookAt(Th,Ql,this.up),this.quaternion.setFromRotationMatrix(xs),s&&(xs.extractRotation(s.matrixWorld),vo.setFromRotationMatrix(xs),this.quaternion.premultiply(vo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mM),yo.child=t,this.dispatchEvent(yo),yo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(ew),yg.child=t,this.dispatchEvent(yg),yg.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xs.multiply(t.parent.matrixWorld)),t.applyMatrix4(xs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mM),yo.child=t,this.dispatchEvent(yo),yo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ql,t,$A),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ql,tw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),d=r(t.shapes),h=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};mn.DEFAULT_UP=new I(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wi=new I,Ss=new I,xg=new I,Ms=new I,xo=new I,So=new I,gM=new I,Sg=new I,Mg=new I,bg=new I,Eg=new Ne,Tg=new Ne,Ag=new Ne,fa=class e{constructor(t=new I,n=new I,i=new I){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),wi.subVectors(t,n),s.cross(wi);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){wi.subVectors(s,n),Ss.subVectors(i,n),xg.subVectors(t,n);let r=wi.dot(wi),o=wi.dot(Ss),l=wi.dot(xg),c=Ss.dot(Ss),f=Ss.dot(xg),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let h=1/d,p=(c*l-o*f)*h,_=(r*f-o*l)*h;return a.set(1-p-_,_,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ms)===null?!1:Ms.x>=0&&Ms.y>=0&&Ms.x+Ms.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,Ms)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ms.x),l.addScaledVector(r,Ms.y),l.addScaledVector(o,Ms.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Eg.setScalar(0),Tg.setScalar(0),Ag.setScalar(0),Eg.fromBufferAttribute(t,n),Tg.fromBufferAttribute(t,i),Ag.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Eg,a.x),r.addScaledVector(Tg,a.y),r.addScaledVector(Ag,a.z),r}static isFrontFacing(t,n,i,s){return wi.subVectors(i,n),Ss.subVectors(t,n),wi.cross(Ss).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wi.subVectors(this.c,this.b),Ss.subVectors(this.a,this.b),wi.cross(Ss).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;xo.subVectors(s,i),So.subVectors(a,i),Sg.subVectors(t,i);let l=xo.dot(Sg),c=So.dot(Sg);if(l<=0&&c<=0)return n.copy(i);Mg.subVectors(t,s);let f=xo.dot(Mg),d=So.dot(Mg);if(f>=0&&d<=f)return n.copy(s);let h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return r=l/(l-f),n.copy(i).addScaledVector(xo,r);bg.subVectors(t,a);let p=xo.dot(bg),_=So.dot(bg);if(_>=0&&p<=_)return n.copy(a);let S=p*c-l*_;if(S<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(So,o);let m=f*_-p*d;if(m<=0&&d-f>=0&&p-_>=0)return gM.subVectors(a,s),o=(d-f)/(d-f+(p-_)),n.copy(s).addScaledVector(gM,o);let u=1/(m+S+h);return r=S*u,o=h*u,n.copy(i).addScaledVector(xo,r).addScaledVector(So,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},db={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ua={h:0,s:0,l:0},Ah={h:0,s:0,l:0};function wg(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Yt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Qt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Qt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Qt.workingColorSpace){if(t=s0(t,1),n=kt(n,0,1),i=kt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=wg(r,a,t+1/3),this.g=wg(r,a,t),this.b=wg(r,a,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,n=Qn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Qn){let i=db[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}copyLinearToSRGB(t){return this.r=Ao(t.r),this.g=Ao(t.g),this.b=Ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qn){return Qt.workingToColorSpace(dn.copy(this),t),Math.round(kt(dn.r*255,0,255))*65536+Math.round(kt(dn.g*255,0,255))*256+Math.round(kt(dn.b*255,0,255))}getHexString(t=Qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Qt.workingColorSpace){Qt.workingToColorSpace(dn.copy(this),n);let i=dn.r,s=dn.g,a=dn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,f=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=f<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,n=Qt.workingColorSpace){return Qt.workingToColorSpace(dn.copy(this),n),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=Qn){Qt.workingToColorSpace(dn.copy(this),t);let n=dn.r,i=dn.g,s=dn.b;return t!==Qn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ua),this.setHSL(ua.h+t,ua.s+n,ua.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ua),t.getHSL(Ah);let i=tc(ua.h,Ah.h,n),s=tc(ua.s,Ah.s,n),a=tc(ua.l,Ah.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},dn=new Yt;Yt.NAMES=db;var nw=0,ga=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nw++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=nr,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=Fh,this.blendEquation=pa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(i.blending=this.blending),this.side!==Es&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bh&&(i.blendSrc=this.blendSrc),this.blendDst!==Fh&&(i.blendDst=this.blendDst),this.blendEquation!==pa&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ig&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},oc=class extends ga{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Wg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ve=new I,wh=new Ot,iw=0,En=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iw++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Pg,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)wh.fromBufferAttribute(this,n),wh.applyMatrix3(t),this.setXY(n,wh.x,wh.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyMatrix3(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyMatrix4(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.applyNormalMatrix(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ve.fromBufferAttribute(this,n),Ve.transformDirection(t),this.setXYZ(n,Ve.x,Ve.y,Ve.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=To(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=bn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=To(n,this.array)),n}setX(t,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=To(n,this.array)),n}setY(t,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=To(n,this.array)),n}setZ(t,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=To(n,this.array)),n}setW(t,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array),s=bn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=bn(n,this.array),i=bn(i,this.array),s=bn(s,this.array),a=bn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pg&&(t.usage=this.usage),t}};var lc=class extends En{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var cc=class extends En{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var pi=class extends En{constructor(t,n,i){super(new Float32Array(t),n,i)}},sw=0,fi=new ze,Cg=new mn,Mo=new I,Jn=new ma,jl=new ma,$e=new I,Qi=class e extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sw++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(r0(t)?cc:lc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Bt().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,n,i){return fi.makeTranslation(t,n,i),this.applyMatrix4(fi),this}scale(t,n,i){return fi.makeScale(t,n,i),this.applyMatrix4(fi),this}lookAt(t){return Cg.lookAt(t),Cg.updateMatrix(),this.applyMatrix4(Cg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mo).negate(),this.translate(Mo.x,Mo.y,Mo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new pi(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ma);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];Jn.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new No);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];jl.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(Jn.min,jl.min),Jn.expandByPoint($e),$e.addVectors(Jn.max,jl.max),Jn.expandByPoint($e)):(Jn.expandByPoint(jl.min),Jn.expandByPoint(jl.max))}Jn.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)$e.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared($e));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)$e.fromBufferAttribute(o,c),l&&(Mo.fromBufferAttribute(t,c),$e.add(Mo)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new I,l[D]=new I;let c=new I,f=new I,d=new I,h=new Ot,p=new Ot,_=new Ot,S=new I,m=new I;function u(D,E,b){c.fromBufferAttribute(i,D),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,b),h.fromBufferAttribute(a,D),p.fromBufferAttribute(a,E),_.fromBufferAttribute(a,b),f.sub(c),d.sub(c),p.sub(h),_.sub(h);let U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(S.copy(f).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(U),o[D].add(S),o[E].add(S),o[b].add(S),l[D].add(m),l[E].add(m),l[b].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let D=0,E=g.length;D<E;++D){let b=g[D],U=b.start,F=b.count;for(let G=U,q=U+F;G<q;G+=3)u(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let v=new I,y=new I,T=new I,C=new I;function w(D){T.fromBufferAttribute(s,D),C.copy(T);let E=o[D];v.copy(E),v.sub(T.multiplyScalar(T.dot(E))).normalize(),y.crossVectors(C,E);let U=y.dot(l[D])<0?-1:1;r.setXYZW(D,v.x,v.y,v.z,U)}for(let D=0,E=g.length;D<E;++D){let b=g[D],U=b.start,F=b.count;for(let G=U,q=U+F;G<q;G+=3)w(t.getX(G+0)),w(t.getX(G+1)),w(t.getX(G+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);let s=new I,a=new I,r=new I,o=new I,l=new I,c=new I,f=new I,d=new I;if(t)for(let h=0,p=t.count;h<p;h+=3){let _=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,S),r.fromBufferAttribute(n,m),f.subVectors(r,a),d.subVectors(s,a),f.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)s.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),f.subVectors(r,a),d.subVectors(s,a),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)$e.fromBufferAttribute(t,n),$e.normalize(),t.setXYZ(n,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,l){let c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f),p=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*f;for(let u=0;u<f;u++)h[_++]=c[p++]}return new En(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let f=0,d=c.length;f<d;f++){let h=c[f],p=t(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){let p=c[d];f.push(p.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let f=s[c];this.setAttribute(c,f.clone(n))}let a=t.morphAttributes;for(let c in a){let f=[],d=a[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,f=r.length;c<f;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},_M=new ze,ja=new Uo,Ch=new No,vM=new I,Rh=new I,Dh=new I,Nh=new I,Rg=new I,Uh=new I,yM=new I,Lh=new I,On=class extends mn{constructor(t=new Qi,n=new oc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){Uh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let f=o[l],d=a[l];f!==0&&(Rg.fromBufferAttribute(d,t),r?Uh.addScaledVector(Rg,f):Uh.addScaledVector(Rg.sub(n),f))}n.add(Uh)}return n}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ch.copy(i.boundingSphere),Ch.applyMatrix4(a),ja.copy(t.ray).recast(t.near),!(Ch.containsPoint(ja.origin)===!1&&(ja.intersectSphere(Ch,vM)===null||ja.origin.distanceToSquared(vM)>(t.far-t.near)**2))&&(_M.copy(a).invert(),ja.copy(t.ray).applyMatrix4(_M),!(i.boundingBox!==null&&ja.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,ja)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,d=a.attributes.normal,h=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,S=h.length;_<S;_++){let m=h[_],u=r[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,T=v;y<T;y+=3){let C=o.getX(y),w=o.getX(y+1),D=o.getX(y+2);s=Oh(this,u,t,i,c,f,d,C,w,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,u=S;m<u;m+=3){let g=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);s=Oh(this,r,t,i,c,f,d,g,v,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,S=h.length;_<S;_++){let m=h[_],u=r[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,T=v;y<T;y+=3){let C=y,w=y+1,D=y+2;s=Oh(this,u,t,i,c,f,d,C,w,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,u=S;m<u;m+=3){let g=m,v=m+1,y=m+2;s=Oh(this,r,t,i,c,f,d,g,v,y),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function aw(e,t,n,i,s,a,r,o){let l;if(t.side===Tn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===Es,o),l===null)return null;Lh.copy(o),Lh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(Lh);return c<n.near||c>n.far?null:{distance:c,point:Lh.clone(),object:e}}function Oh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,Rh),e.getVertexPosition(l,Dh),e.getVertexPosition(c,Nh);let f=aw(e,t,n,i,Rh,Dh,Nh,yM);if(f){let d=new I;fa.getBarycoord(yM,Rh,Dh,Nh,d),s&&(f.uv=fa.getInterpolatedAttribute(s,o,l,c,d,new Ot)),a&&(f.uv1=fa.getInterpolatedAttribute(a,o,l,c,d,new Ot)),r&&(f.normal=fa.getInterpolatedAttribute(r,o,l,c,d,new I),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new I,materialIndex:0};fa.getNormal(Rh,Dh,Nh,h.normal),f.face=h,f.barycoord=d}return f}var Lo=class e extends Qi{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],f=[],d=[],h=0,p=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new pi(c,3)),this.setAttribute("normal",new pi(f,3)),this.setAttribute("uv",new pi(d,2));function _(S,m,u,g,v,y,T,C,w,D,E){let b=y/w,U=T/D,F=y/2,G=T/2,q=C/2,K=w+1,W=D+1,nt=0,H=0,rt=new I;for(let ht=0;ht<W;ht++){let Et=ht*U-G;for(let Xt=0;Xt<K;Xt++){let me=Xt*b-F;rt[S]=me*g,rt[m]=Et*v,rt[u]=q,c.push(rt.x,rt.y,rt.z),rt[S]=0,rt[m]=0,rt[u]=C>0?1:-1,f.push(rt.x,rt.y,rt.z),d.push(Xt/w),d.push(1-ht/D),nt+=1}}for(let ht=0;ht<D;ht++)for(let Et=0;Et<w;Et++){let Xt=h+Et+K*ht,me=h+Et+K*(ht+1),be=h+(Et+1)+K*(ht+1),ne=h+(Et+1)+K*ht;l.push(Xt,me,ne),l.push(me,be,ne),H+=6}o.addGroup(p,H,E),p+=H,h+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function lr(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function gn(e){let t={};for(let n=0;n<e.length;n++){let i=lr(e[n]);for(let s in i)t[s]=i[s]}return t}function rw(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function o0(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var pb={clone:lr,merge:gn},ow=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ni=class extends ga{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ow,this.fragmentShader=lw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lr(t.uniforms),this.uniformsGroups=rw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},uc=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ha=new I,xM=new Ot,SM=new Ot,pn=class extends uc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Co*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($l*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Co*2*Math.atan(Math.tan($l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ha.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ha.x,ha.y).multiplyScalar(-t/ha.z),ha.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ha.x,ha.y).multiplyScalar(-t/ha.z)}getViewSize(t,n){return this.getViewBounds(t,xM,SM),n.subVectors(SM,xM)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan($l*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},bo=-90,Eo=1,qh=class extends mn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new pn(bo,Eo,t,n);s.layers=this.layers,this.add(s);let a=new pn(bo,Eo,t,n);a.layers=this.layers,this.add(a);let r=new pn(bo,Eo,t,n);r.layers=this.layers,this.add(r);let o=new pn(bo,Eo,t,n);o.layers=this.layers,this.add(o);let l=new pn(bo,Eo,t,n);l.layers=this.layers,this.add(l);let c=new pn(bo,Eo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,f]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,a),t.setRenderTarget(i,1,s),t.render(n,r),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,s),t.render(n,f),t.setRenderTarget(d,h,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},hc=class extends jn{constructor(t=[],n=rr,i,s,a,r,o,l,c,f){super(t,n,i,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yh=class extends Ji{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new hc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Lo(5,5,5),a=new Ni({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Ts});a.uniforms.tEquirect.value=n;let r=new On(s,a),o=n.minFilter;return n.minFilter===Sa&&(n.minFilter=Ri),new qh(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}},er=class extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},cw={type:"move"},Oo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let S of t.hand.values()){let m=n.getJointPose(S,i),u=this._getHandJoint(c,S);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cw)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new er;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var fc=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}};var Dg=new I,uw=new I,hw=new Bt,di=class{constructor(t=new I(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=Dg.subVectors(i,n).cross(uw.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(Dg),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:n.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||hw.getNormalMatrix(t),s=this.coplanarPoint(Dg).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},$a=new No,fw=new Ot(.5,.5),Ih=new I,Io=class{constructor(t=new di,n=new di,i=new di,s=new di,a=new di,r=new di){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Ci,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],f=a[4],d=a[5],h=a[6],p=a[7],_=a[8],S=a[9],m=a[10],u=a[11],g=a[12],v=a[13],y=a[14],T=a[15];if(s[0].setComponents(c-r,p-f,u-_,T-g).normalize(),s[1].setComponents(c+r,p+f,u+_,T+g).normalize(),s[2].setComponents(c+o,p+d,u+S,T+v).normalize(),s[3].setComponents(c-o,p-d,u-S,T-v).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,p-h,u-m,T-y).normalize();else if(s[4].setComponents(c-l,p-h,u-m,T-y).normalize(),n===Ci)s[5].setComponents(c+l,p+h,u+m,T+y).normalize();else if(n===ic)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$a.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($a)}intersectsSprite(t){$a.center.set(0,0,0);let n=fw.distanceTo(t.center);return $a.radius=.7071067811865476+n,$a.applyMatrix4(t.matrixWorld),this.intersectsSphere($a)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Ih.x=s.normal.x>0?t.max.x:t.min.x,Ih.y=s.normal.y>0?t.max.y:t.min.y,Ih.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ih)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var dc=class extends jn{constructor(t,n,i=Ma,s,a,r,o=mi,l=mi,c,f=wo,d=1){if(f!==wo&&f!==Ho)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:n,depth:d};super(h,s,a,r,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Do(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},pc=class extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var mc=class e extends Qi{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,f=l+1,d=t/o,h=n/l,p=[],_=[],S=[],m=[];for(let u=0;u<f;u++){let g=u*h-r;for(let v=0;v<c;v++){let y=v*d-a;_.push(y,-g,0),S.push(0,0,1),m.push(v/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){let v=g+c*u,y=g+c*(u+1),T=g+1+c*(u+1),C=g+1+c*u;p.push(v,y,C),p.push(y,T,C)}this.setIndex(p),this.setAttribute("position",new pi(_,3)),this.setAttribute("normal",new pi(S,3)),this.setAttribute("uv",new pi(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var gc=class extends ga{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e0,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Zh=class extends ga{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Kh=class extends ga{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ph(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function dw(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var ar=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jh=class extends ar{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ug,endingEnd:Ug}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Lg:a=t,o=2*n-i;break;case Og:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Lg:r=t,l=2*i-n;break;case Og:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,f=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*f,this._offsetNext=r*f}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,p=this._weightNext,_=(i-n)/(s-n),S=_*_,m=S*_,u=-h*m+2*h*S-h*_,g=(1+h)*m+(-1.5-2*h)*S+(-.5+h)*_+1,v=(-1-p)*m+(1.5+p)*S+.5*_,y=p*m-p*S;for(let T=0;T!==o;++T)a[T]=u*r[f+T]+g*r[c+T]+v*r[l+T]+y*r[d+T];return a}},Qh=class extends ar{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,f=(i-n)/(s-n),d=1-f;for(let h=0;h!==o;++h)a[h]=r[c+h]*d+r[l+h]*f;return a}},jh=class extends ar{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$n=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ph(n,this.TimeBufferType),this.values=Ph(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Ph(t.times,Array),values:Ph(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new jh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Jh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case ec:n=this.InterpolantFactoryMethodDiscrete;break;case Gh:n=this.InterpolantFactoryMethodLinear;break;case zh:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ec;case this.InterpolantFactoryMethodLinear:return Gh;case this.InterpolantFactoryMethodSmooth:return zh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&dw(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===zh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],f=t[o+1];if(c!==f&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,h=d-i,p=d+i;for(let _=0;_!==i;++_){let S=n[d+_];if(S!==n[h+_]||S!==n[p+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,h=r*i;for(let p=0;p!==i;++p)n[h+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=Gh;var _a=class extends $n{constructor(t,n,i){super(t,n,i)}};_a.prototype.ValueTypeName="bool";_a.prototype.ValueBufferType=Array;_a.prototype.DefaultInterpolation=ec;_a.prototype.InterpolantFactoryMethodLinear=void 0;_a.prototype.InterpolantFactoryMethodSmooth=void 0;var $h=class extends $n{constructor(t,n,i,s){super(t,n,i,s)}};$h.prototype.ValueTypeName="color";var tf=class extends $n{constructor(t,n,i,s){super(t,n,i,s)}};tf.prototype.ValueTypeName="number";var ef=class extends ar{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let f=c+o;c!==f;c+=4)gi.slerpFlat(a,0,r,c-o,r,c,l);return a}},_c=class extends $n{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new ef(this.times,this.values,this.getValueSize(),t)}};_c.prototype.ValueTypeName="quaternion";_c.prototype.InterpolantFactoryMethodSmooth=void 0;var va=class extends $n{constructor(t,n,i){super(t,n,i)}};va.prototype.ValueTypeName="string";va.prototype.ValueBufferType=Array;va.prototype.DefaultInterpolation=ec;va.prototype.InterpolantFactoryMethodLinear=void 0;va.prototype.InterpolantFactoryMethodSmooth=void 0;var nf=class extends $n{constructor(t,n,i,s){super(t,n,i,s)}};nf.prototype.ValueTypeName="vector";var sf=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(f){o++,a===!1&&s.onStart!==void 0&&s.onStart(f,r,o),a=!0},this.itemEnd=function(f){r++,s.onProgress!==void 0&&s.onProgress(f,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){let d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=c.length;d<h;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},mb=new sf,af=class{constructor(t){this.manager=t!==void 0?t:mb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};af.DEFAULT_MATERIAL_NAME="__DEFAULT";var vc=class extends mn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},yc=class extends vc{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Yt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},Ng=new ze,MM=new I,bM=new I,zg=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=Ui,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;MM.setFromMatrixPosition(t.matrixWorld),n.position.copy(MM),bM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(bM),n.updateMatrixWorld(),Ng.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ng,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ng)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var xc=class extends uc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Bg=class extends zg{constructor(){super(new xc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sc=class extends vc{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Bg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var rf=class extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var l0="\\[\\]\\.:\\/",pw=new RegExp("["+l0+"]","g"),c0="[^"+l0+"]",mw="[^"+l0.replace("\\.","")+"]",gw=/((?:WC+[\/:])*)/.source.replace("WC",c0),_w=/(WCOD+)?/.source.replace("WCOD",mw),vw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",c0),yw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",c0),xw=new RegExp("^"+gw+_w+vw+yw+"$"),Sw=["material","materials","bones","map"],Fg=class{constructor(t,n,i){let s=i||Me.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Me=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pw,"")}static parseTrackName(t){let n=xw.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);Sw.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=Fg;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var TD=new Float32Array(1);var Po=class{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(kt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Mc=class extends Ki{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function u0(e,t,n,i){let s=Mw(i);switch(n){case Qg:return e*t;case $g:return e*t/s.components*s.byteLength;case xf:return e*t/s.components*s.byteLength;case t0:return e*t*2/s.components*s.byteLength;case Sf:return e*t*2/s.components*s.byteLength;case jg:return e*t*3/s.components*s.byteLength;case vi:return e*t*4/s.components*s.byteLength;case Mf:return e*t*4/s.components*s.byteLength;case Tc:case Ac:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case wc:case Cc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ef:case Af:return Math.max(e,16)*Math.max(t,8)/4;case bf:case Tf:return Math.max(e,8)*Math.max(t,8)/2;case wf:case Cf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Rf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Df:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Nf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Uf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Lf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Of:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case If:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Pf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case zf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Bf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ff:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Hf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Vf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Gf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case kf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Xf:case Wf:case qf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Yf:case Zf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Kf:case Jf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Mw(e){switch(e){case Ui:case Yg:return{byteLength:1,components:1};case zo:case Zg:case Bo:return{byteLength:2,components:1};case vf:case yf:return{byteLength:2,components:4};case Ma:case _f:case $i:return{byteLength:4,components:1};case Kg:case Jg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Fb(){let e=null,t=!1,n=null,i=null;function s(a,r){n(a,r),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function Ew(e){let t=new WeakMap;function n(o,l){let c=o.array,f=o.usage,d=c.byteLength,h=e.createBuffer();e.bindBuffer(l,h),e.bufferData(l,c,f),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let f=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,f);else{d.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<d.length;p++){let _=d[h],S=d[p];S.start<=_.start+_.count+1?_.count=Math.max(_.count,S.start+S.count-_.start):(++h,d[h]=S)}d.length=h+1;for(let p=0,_=d.length;p<_;p++){let S=d[p];e.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var Tw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Aw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ww=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Uw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ow=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ww=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Kw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$w=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eC="gl_FragColor = linearToOutputTexel( gl_FragColor );",nC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,sC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_C=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,EC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,VC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$C=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,oR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_R=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,SR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ER=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,UR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,LR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$R=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,n2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,i2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:Tw,alphahash_pars_fragment:Aw,alphamap_fragment:ww,alphamap_pars_fragment:Cw,alphatest_fragment:Rw,alphatest_pars_fragment:Dw,aomap_fragment:Nw,aomap_pars_fragment:Uw,batching_pars_vertex:Lw,batching_vertex:Ow,begin_vertex:Iw,beginnormal_vertex:Pw,bsdfs:zw,iridescence_fragment:Bw,bumpmap_pars_fragment:Fw,clipping_planes_fragment:Hw,clipping_planes_pars_fragment:Vw,clipping_planes_pars_vertex:Gw,clipping_planes_vertex:kw,color_fragment:Xw,color_pars_fragment:Ww,color_pars_vertex:qw,color_vertex:Yw,common:Zw,cube_uv_reflection_fragment:Kw,defaultnormal_vertex:Jw,displacementmap_pars_vertex:Qw,displacementmap_vertex:jw,emissivemap_fragment:$w,emissivemap_pars_fragment:tC,colorspace_fragment:eC,colorspace_pars_fragment:nC,envmap_fragment:iC,envmap_common_pars_fragment:sC,envmap_pars_fragment:aC,envmap_pars_vertex:rC,envmap_physical_pars_fragment:_C,envmap_vertex:oC,fog_vertex:lC,fog_pars_vertex:cC,fog_fragment:uC,fog_pars_fragment:hC,gradientmap_pars_fragment:fC,lightmap_pars_fragment:dC,lights_lambert_fragment:pC,lights_lambert_pars_fragment:mC,lights_pars_begin:gC,lights_toon_fragment:vC,lights_toon_pars_fragment:yC,lights_phong_fragment:xC,lights_phong_pars_fragment:SC,lights_physical_fragment:MC,lights_physical_pars_fragment:bC,lights_fragment_begin:EC,lights_fragment_maps:TC,lights_fragment_end:AC,logdepthbuf_fragment:wC,logdepthbuf_pars_fragment:CC,logdepthbuf_pars_vertex:RC,logdepthbuf_vertex:DC,map_fragment:NC,map_pars_fragment:UC,map_particle_fragment:LC,map_particle_pars_fragment:OC,metalnessmap_fragment:IC,metalnessmap_pars_fragment:PC,morphinstance_vertex:zC,morphcolor_vertex:BC,morphnormal_vertex:FC,morphtarget_pars_vertex:HC,morphtarget_vertex:VC,normal_fragment_begin:GC,normal_fragment_maps:kC,normal_pars_fragment:XC,normal_pars_vertex:WC,normal_vertex:qC,normalmap_pars_fragment:YC,clearcoat_normal_fragment_begin:ZC,clearcoat_normal_fragment_maps:KC,clearcoat_pars_fragment:JC,iridescence_pars_fragment:QC,opaque_fragment:jC,packing:$C,premultiplied_alpha_fragment:tR,project_vertex:eR,dithering_fragment:nR,dithering_pars_fragment:iR,roughnessmap_fragment:sR,roughnessmap_pars_fragment:aR,shadowmap_pars_fragment:rR,shadowmap_pars_vertex:oR,shadowmap_vertex:lR,shadowmask_pars_fragment:cR,skinbase_vertex:uR,skinning_pars_vertex:hR,skinning_vertex:fR,skinnormal_vertex:dR,specularmap_fragment:pR,specularmap_pars_fragment:mR,tonemapping_fragment:gR,tonemapping_pars_fragment:_R,transmission_fragment:vR,transmission_pars_fragment:yR,uv_pars_fragment:xR,uv_pars_vertex:SR,uv_vertex:MR,worldpos_vertex:bR,background_vert:ER,background_frag:TR,backgroundCube_vert:AR,backgroundCube_frag:wR,cube_vert:CR,cube_frag:RR,depth_vert:DR,depth_frag:NR,distanceRGBA_vert:UR,distanceRGBA_frag:LR,equirect_vert:OR,equirect_frag:IR,linedashed_vert:PR,linedashed_frag:zR,meshbasic_vert:BR,meshbasic_frag:FR,meshlambert_vert:HR,meshlambert_frag:VR,meshmatcap_vert:GR,meshmatcap_frag:kR,meshnormal_vert:XR,meshnormal_frag:WR,meshphong_vert:qR,meshphong_frag:YR,meshphysical_vert:ZR,meshphysical_frag:KR,meshtoon_vert:JR,meshtoon_frag:QR,points_vert:jR,points_frag:$R,shadow_vert:t2,shadow_frag:e2,sprite_vert:n2,sprite_frag:i2},at={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},ts={basic:{uniforms:gn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:gn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:gn([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:gn([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:gn([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:gn([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:gn([at.points,at.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:gn([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:gn([at.common,at.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:gn([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:gn([at.sprite,at.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:gn([at.common,at.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:gn([at.lights,at.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};ts.physical={uniforms:gn([ts.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};var Qf={r:0,b:0,g:0},cr=new Di,s2=new ze;function a2(e,t,n,i,s,a,r){let o=new Yt(0),l=a===!0?0:1,c,f,d=null,h=0,p=null;function _(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:t).get(y)),y}function S(v){let y=!1,T=_(v);T===null?u(o,l):T&&T.isColor&&(u(T,1),y=!0);let C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(v,y){let T=_(y);T&&(T.isCubeTexture||T.mapping===bc)?(f===void 0&&(f=new On(new Lo(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:lr(ts.backgroundCube.uniforms),vertexShader:ts.backgroundCube.vertexShader,fragmentShader:ts.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),cr.copy(y.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),f.material.uniforms.envMap.value=T,f.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(s2.makeRotationFromEuler(cr)),f.material.toneMapped=Qt.getTransfer(T.colorSpace)!==le,(d!==T||h!==T.version||p!==e.toneMapping)&&(f.material.needsUpdate=!0,d=T,h=T.version,p=e.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new On(new mc(2,2),new Ni({name:"BackgroundMaterial",uniforms:lr(ts.background.uniforms),vertexShader:ts.background.vertexShader,fragmentShader:ts.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(T.colorSpace)!==le,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||h!==T.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=T,h=T.version,p=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,y){v.getRGB(Qf,o0(e)),i.buffers.color.setClear(Qf.r,Qf.g,Qf.b,y,r)}function g(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(o,l)},render:S,addToRenderList:m,dispose:g}}function r2(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null),a=s,r=!1;function o(b,U,F,G,q){let K=!1,W=d(G,F,U);a!==W&&(a=W,c(a.object)),K=p(b,G,F,q),K&&_(b,G,F,q),q!==null&&t.update(q,e.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,y(b,U,F,G),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return e.createVertexArray()}function c(b){return e.bindVertexArray(b)}function f(b){return e.deleteVertexArray(b)}function d(b,U,F){let G=F.wireframe===!0,q=i[b.id];q===void 0&&(q={},i[b.id]=q);let K=q[U.id];K===void 0&&(K={},q[U.id]=K);let W=K[G];return W===void 0&&(W=h(l()),K[G]=W),W}function h(b){let U=[],F=[],G=[];for(let q=0;q<n;q++)U[q]=0,F[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:G,object:b,attributes:{},index:null}}function p(b,U,F,G){let q=a.attributes,K=U.attributes,W=0,nt=F.getAttributes();for(let H in nt)if(nt[H].location>=0){let ht=q[H],Et=K[H];if(Et===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(Et=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(Et=b.instanceColor)),ht===void 0||ht.attribute!==Et||Et&&ht.data!==Et.data)return!0;W++}return a.attributesNum!==W||a.index!==G}function _(b,U,F,G){let q={},K=U.attributes,W=0,nt=F.getAttributes();for(let H in nt)if(nt[H].location>=0){let ht=K[H];ht===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(ht=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(ht=b.instanceColor));let Et={};Et.attribute=ht,ht&&ht.data&&(Et.data=ht.data),q[H]=Et,W++}a.attributes=q,a.attributesNum=W,a.index=G}function S(){let b=a.newAttributes;for(let U=0,F=b.length;U<F;U++)b[U]=0}function m(b){u(b,0)}function u(b,U){let F=a.newAttributes,G=a.enabledAttributes,q=a.attributeDivisors;F[b]=1,G[b]===0&&(e.enableVertexAttribArray(b),G[b]=1),q[b]!==U&&(e.vertexAttribDivisor(b,U),q[b]=U)}function g(){let b=a.newAttributes,U=a.enabledAttributes;for(let F=0,G=U.length;F<G;F++)U[F]!==b[F]&&(e.disableVertexAttribArray(F),U[F]=0)}function v(b,U,F,G,q,K,W){W===!0?e.vertexAttribIPointer(b,U,F,q,K):e.vertexAttribPointer(b,U,F,G,q,K)}function y(b,U,F,G){S();let q=G.attributes,K=F.getAttributes(),W=U.defaultAttributeValues;for(let nt in K){let H=K[nt];if(H.location>=0){let rt=q[nt];if(rt===void 0&&(nt==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),nt==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor)),rt!==void 0){let ht=rt.normalized,Et=rt.itemSize,Xt=t.get(rt);if(Xt===void 0)continue;let me=Xt.buffer,be=Xt.type,ne=Xt.bytesPerElement,Y=be===e.INT||be===e.UNSIGNED_INT||rt.gpuType===_f;if(rt.isInterleavedBufferAttribute){let Q=rt.data,pt=Q.stride,Ut=rt.offset;if(Q.isInstancedInterleavedBuffer){for(let bt=0;bt<H.locationSize;bt++)u(H.location+bt,Q.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let bt=0;bt<H.locationSize;bt++)m(H.location+bt);e.bindBuffer(e.ARRAY_BUFFER,me);for(let bt=0;bt<H.locationSize;bt++)v(H.location+bt,Et/H.locationSize,be,ht,pt*ne,(Ut+Et/H.locationSize*bt)*ne,Y)}else{if(rt.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)u(H.location+Q,rt.meshPerAttribute);b.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Q=0;Q<H.locationSize;Q++)m(H.location+Q);e.bindBuffer(e.ARRAY_BUFFER,me);for(let Q=0;Q<H.locationSize;Q++)v(H.location+Q,Et/H.locationSize,be,ht,Et*ne,Et/H.locationSize*Q*ne,Y)}}else if(W!==void 0){let ht=W[nt];if(ht!==void 0)switch(ht.length){case 2:e.vertexAttrib2fv(H.location,ht);break;case 3:e.vertexAttrib3fv(H.location,ht);break;case 4:e.vertexAttrib4fv(H.location,ht);break;default:e.vertexAttrib1fv(H.location,ht)}}}}g()}function T(){D();for(let b in i){let U=i[b];for(let F in U){let G=U[F];for(let q in G)f(G[q].object),delete G[q];delete U[F]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;let U=i[b.id];for(let F in U){let G=U[F];for(let q in G)f(G[q].object),delete G[q];delete U[F]}delete i[b.id]}function w(b){for(let U in i){let F=i[U];if(F[b.id]===void 0)continue;let G=F[b.id];for(let q in G)f(G[q].object),delete G[q];delete F[b.id]}}function D(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:g}}function o2(e,t,n){let i;function s(c){i=c}function a(c,f){e.drawArrays(i,c,f),n.update(f,i,1)}function r(c,f,d){d!==0&&(e.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function o(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let _=0;_<d;_++)p+=f[_];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)r(c[_],f[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let _=0;for(let S=0;S<d;S++)_+=f[S]*h[S];n.update(_,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function l2(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==vi&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let D=w===Bo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ui&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==$i&&!D)}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),y=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:S,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:T,maxSamples:C}}function c2(e){let t=this,n=null,i=0,s=!1,a=!1,r=new di,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let p=d.length!==0||h||i!==0||s;return s=h,i=d.length,p},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){let _=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!s||_===null||_.length===0||a&&!m)a?f(null):c();else{let g=a?0:i,v=g*4,y=u.clippingState||null;l.value=y,y=f(_,h,v,p);for(let T=0;T!==v;++T)y[T]=n[T];u.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(d,h,p,_){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=l.value,_!==!0||m===null){let u=p+S*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,y=p;v!==S;++v,y+=4)r.copy(d[v]).applyMatrix4(g,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}function u2(e){let t=new WeakMap;function n(r,o){return o===pf?r.mapping=rr:o===mf&&(r.mapping=or),r}function i(r){if(r&&r.isTexture){let o=r.mapping;if(o===pf||o===mf)if(t.has(r)){let l=t.get(r).texture;return n(l,r.mapping)}else{let l=r.image;if(l&&l.height>0){let c=new Yh(l.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",s),n(c.texture,r.mapping)}else return null}}return r}function s(r){let o=r.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}var ko=4,gb=[.125,.215,.35,.446,.526,.582],fr=20,h0=new xc,_b=new Yt,f0=null,d0=0,p0=0,m0=!1,hr=(1+Math.sqrt(5))/2,Go=1/hr,vb=[new I(-hr,Go,0),new I(hr,Go,0),new I(-Go,0,hr),new I(Go,0,hr),new I(0,hr,-Go),new I(0,hr,Go),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],h2=new I,td=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=h2}=a;f0=this._renderer.getRenderTarget(),d0=this._renderer.getActiveCubeFace(),p0=this._renderer.getActiveMipmapLevel(),m0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sb(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xb(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(f0,d0,p0),this._renderer.xr.enabled=m0,t.scissorTest=!1,jf(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===rr||t.mapping===or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),f0=this._renderer.getRenderTarget(),d0=this._renderer.getActiveCubeFace(),p0=this._renderer.getActiveMipmapLevel(),m0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Bo,format:vi,colorSpace:sr,depthBuffer:!1},s=yb(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yb(t,n,i);let{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f2(a)),this._blurMaterial=d2(a,t,n)}return s}_compileMaterial(t){let n=new On(this._lodPlanes[0],t);this._renderer.compile(n,h0)}_sceneToCubeUV(t,n,i,s,a){let l=new pn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(_b),d.toneMapping=As,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let S=new oc({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),m=new On(new Lo,S),u=!1,g=t.background;g?g.isColor&&(S.color.copy(g),t.background=null,u=!0):(S.color.copy(_b),u=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+f[v],a.y,a.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+f[v],a.z)):(l.up.set(0,c[v],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+f[v]));let T=this._cubeSize;jf(s,y*T,v>2?T:0,T,T),d.setRenderTarget(s),u&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=h,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===rr||t.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sb()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xb());let a=s?this._cubemapMaterial:this._equirectMaterial,r=new On(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;jf(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,h0)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let a=1;a<s;a++){let r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=vb[(s-a-1)%vb.length];this._blur(t,a-1,a,r,o)}n.autoClear=i}_blur(t,n,i,s,a){let r=this._pingPongRenderTarget;this._halfBlur(t,r,n,i,s,"latitudinal",a),this._halfBlur(r,t,i,i,s,"longitudinal",a)}_halfBlur(t,n,i,s,a,r,o){let l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,d=new On(this._lodPlanes[s],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*fr-1),S=a/_,m=isFinite(a)?1+Math.floor(f*S):fr;m>fr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);let u=[],g=0;for(let w=0;w<fr;++w){let D=w/S,E=Math.exp(-D*D/2);u.push(E),w===0?g+=E:w<m&&(g+=2*E)}for(let w=0;w<u.length;w++)u[w]=u[w]/g;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;let y=this._sizeLods[s],T=3*y*(s>v-ko?s-v+ko:0),C=4*(this._cubeSize-y);jf(n,T,C,3*y,2*y),l.setRenderTarget(n),l.render(d,h0)}};function f2(e){let t=[],n=[],i=[],s=e,a=e-ko+1+gb.length;for(let r=0;r<a;r++){let o=Math.pow(2,s);n.push(o);let l=1/o;r>e-ko?l=gb[r-e+ko-1]:r===0&&(l=0),i.push(l);let c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,_=6,S=3,m=2,u=1,g=new Float32Array(S*_*p),v=new Float32Array(m*_*p),y=new Float32Array(u*_*p);for(let C=0;C<p;C++){let w=C%3*2/3-1,D=C>2?0:-1,E=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];g.set(E,S*_*C),v.set(h,m*_*C);let b=[C,C,C,C,C,C];y.set(b,u*_*C)}let T=new Qi;T.setAttribute("position",new En(g,S)),T.setAttribute("uv",new En(v,m)),T.setAttribute("faceIndex",new En(y,u)),t.push(T),s>ko&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function yb(e,t,n){let i=new Ji(e,t,n);return i.texture.mapping=bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jf(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function d2(e,t,n){let i=new Float32Array(fr),s=new I(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:T0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function xb(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:T0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function Sb(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:T0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ts,depthTest:!1,depthWrite:!1})}function T0(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function p2(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===pf||l===mf,f=l===rr||l===or;if(c||f){let d=t.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new td(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||f&&p&&s(p)?(n===null&&(n=new td(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function a(o){let l=o.target;l.removeEventListener("dispose",a);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:r}}function m2(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ro("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function g2(e,t,n,i){let s={},a=new WeakMap;function r(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",r),delete s[h.id];let p=a.get(h);p&&(t.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,n.memory.geometries++),h}function l(d){let h=d.attributes;for(let p in h)t.update(h[p],e.ARRAY_BUFFER)}function c(d){let h=[],p=d.index,_=d.attributes.position,S=0;if(p!==null){let g=p.array;S=p.version;for(let v=0,y=g.length;v<y;v+=3){let T=g[v+0],C=g[v+1],w=g[v+2];h.push(T,C,C,w,w,T)}}else if(_!==void 0){let g=_.array;S=_.version;for(let v=0,y=g.length/3-1;v<y;v+=3){let T=v+0,C=v+1,w=v+2;h.push(T,C,C,w,w,T)}}else return;let m=new(r0(h)?cc:lc)(h,1);m.version=S;let u=a.get(d);u&&t.remove(u),a.set(d,m)}function f(d){let h=a.get(d);if(h){let p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function _2(e,t,n){let i;function s(h){i=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function l(h,p){e.drawElements(i,p,a,h*r),n.update(p,i,1)}function c(h,p,_){_!==0&&(e.drawElementsInstanced(i,p,a,h*r,_),n.update(p,i,_))}function f(h,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,h,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];n.update(m,i,1)}function d(h,p,_,S){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/r,p[u],S[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,h,0,S,0,_);let u=0;for(let g=0;g<_;g++)u+=p[g]*S[g];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function v2(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function y2(e,t,n){let i=new WeakMap,s=new Ne;function a(r,o,l){let c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0,h=i.get(o);if(h===void 0||h.count!==d){let E=function(){w.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],v=0;p===!0&&(v=1),_===!0&&(v=2),S===!0&&(v=3);let y=o.attributes.position.count*v,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let C=new Float32Array(y*T*4*d),w=new ac(C,y,T,d);w.type=$i,w.needsUpdate=!0;let D=v*4;for(let b=0;b<d;b++){let U=m[b],F=u[b],G=g[b],q=y*T*4*b;for(let K=0;K<U.count;K++){let W=K*D;p===!0&&(s.fromBufferAttribute(U,K),C[q+W+0]=s.x,C[q+W+1]=s.y,C[q+W+2]=s.z,C[q+W+3]=0),_===!0&&(s.fromBufferAttribute(F,K),C[q+W+4]=s.x,C[q+W+5]=s.y,C[q+W+6]=s.z,C[q+W+7]=0),S===!0&&(s.fromBufferAttribute(G,K),C[q+W+8]=s.x,C[q+W+9]=s.y,C[q+W+10]=s.z,C[q+W+11]=G.itemSize===4?s.w:1)}}h={count:d,texture:w,size:new Ot(y,T)},i.set(o,h),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function x2(e,t,n,i){let s=new WeakMap;function a(l){let c=i.render.frame,f=l.geometry,d=t.get(l,f);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function r(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:r}}var Hb=new jn,Mb=new dc(1,1),Vb=new ac,Gb=new Wh,kb=new hc,bb=[],Eb=[],Tb=new Float32Array(16),Ab=new Float32Array(9),wb=new Float32Array(4);function Wo(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=bb[s];if(a===void 0&&(a=new Float32Array(s),bb[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function We(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function qe(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function nd(e,t){let n=Eb[t];n===void 0&&(n=new Int32Array(t),Eb[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function S2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function M2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(We(n,t))return;e.uniform2fv(this.addr,t),qe(n,t)}}function b2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(We(n,t))return;e.uniform3fv(this.addr,t),qe(n,t)}}function E2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(We(n,t))return;e.uniform4fv(this.addr,t),qe(n,t)}}function T2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(We(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),qe(n,t)}else{if(We(n,i))return;wb.set(i),e.uniformMatrix2fv(this.addr,!1,wb),qe(n,i)}}function A2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(We(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),qe(n,t)}else{if(We(n,i))return;Ab.set(i),e.uniformMatrix3fv(this.addr,!1,Ab),qe(n,i)}}function w2(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(We(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),qe(n,t)}else{if(We(n,i))return;Tb.set(i),e.uniformMatrix4fv(this.addr,!1,Tb),qe(n,i)}}function C2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function R2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(We(n,t))return;e.uniform2iv(this.addr,t),qe(n,t)}}function D2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(We(n,t))return;e.uniform3iv(this.addr,t),qe(n,t)}}function N2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(We(n,t))return;e.uniform4iv(this.addr,t),qe(n,t)}}function U2(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function L2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(We(n,t))return;e.uniform2uiv(this.addr,t),qe(n,t)}}function O2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(We(n,t))return;e.uniform3uiv(this.addr,t),qe(n,t)}}function I2(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(We(n,t))return;e.uniform4uiv(this.addr,t),qe(n,t)}}function P2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(Mb.compareFunction=n0,a=Mb):a=Hb,n.setTexture2D(t||a,s)}function z2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Gb,s)}function B2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||kb,s)}function F2(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Vb,s)}function H2(e){switch(e){case 5126:return S2;case 35664:return M2;case 35665:return b2;case 35666:return E2;case 35674:return T2;case 35675:return A2;case 35676:return w2;case 5124:case 35670:return C2;case 35667:case 35671:return R2;case 35668:case 35672:return D2;case 35669:case 35673:return N2;case 5125:return U2;case 36294:return L2;case 36295:return O2;case 36296:return I2;case 35678:case 36198:case 36298:case 36306:case 35682:return P2;case 35679:case 36299:case 36307:return z2;case 35680:case 36300:case 36308:case 36293:return B2;case 36289:case 36303:case 36311:case 36292:return F2}}function V2(e,t){e.uniform1fv(this.addr,t)}function G2(e,t){let n=Wo(t,this.size,2);e.uniform2fv(this.addr,n)}function k2(e,t){let n=Wo(t,this.size,3);e.uniform3fv(this.addr,n)}function X2(e,t){let n=Wo(t,this.size,4);e.uniform4fv(this.addr,n)}function W2(e,t){let n=Wo(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function q2(e,t){let n=Wo(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Y2(e,t){let n=Wo(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Z2(e,t){e.uniform1iv(this.addr,t)}function K2(e,t){e.uniform2iv(this.addr,t)}function J2(e,t){e.uniform3iv(this.addr,t)}function Q2(e,t){e.uniform4iv(this.addr,t)}function j2(e,t){e.uniform1uiv(this.addr,t)}function $2(e,t){e.uniform2uiv(this.addr,t)}function t3(e,t){e.uniform3uiv(this.addr,t)}function e3(e,t){e.uniform4uiv(this.addr,t)}function n3(e,t,n){let i=this.cache,s=t.length,a=nd(n,s);We(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let r=0;r!==s;++r)n.setTexture2D(t[r]||Hb,a[r])}function i3(e,t,n){let i=this.cache,s=t.length,a=nd(n,s);We(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||Gb,a[r])}function s3(e,t,n){let i=this.cache,s=t.length,a=nd(n,s);We(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||kb,a[r])}function a3(e,t,n){let i=this.cache,s=t.length,a=nd(n,s);We(i,a)||(e.uniform1iv(this.addr,a),qe(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||Vb,a[r])}function r3(e){switch(e){case 5126:return V2;case 35664:return G2;case 35665:return k2;case 35666:return X2;case 35674:return W2;case 35675:return q2;case 35676:return Y2;case 5124:case 35670:return Z2;case 35667:case 35671:return K2;case 35668:case 35672:return J2;case 35669:case 35673:return Q2;case 5125:return j2;case 36294:return $2;case 36295:return t3;case 36296:return e3;case 35678:case 36198:case 36298:case 36306:case 35682:return n3;case 35679:case 36299:case 36307:return i3;case 35680:case 36300:case 36308:case 36293:return s3;case 36289:case 36303:case 36311:case 36292:return a3}}var _0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=H2(n.type)}},v0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=r3(n.type)}},y0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},g0=/(\w+)(\])?(\[|\.)?/g;function Cb(e,t){e.seq.push(t),e.map[t.id]=t}function o3(e,t,n){let i=e.name,s=i.length;for(g0.lastIndex=0;;){let a=g0.exec(i),r=g0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){Cb(n,c===void 0?new _0(o,e,t):new v0(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new y0(o),Cb(n,d)),n=d}}}var Xo=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(n,s),r=t.getUniformLocation(n,a.name);o3(a,r,this)}}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function Rb(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var l3=37297,c3=0;function u3(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var Db=new Bt;function h3(e){Qt._getMatrix(Db,Qt.workingColorSpace,e);let t=`mat3( ${Db.elements.map(n=>n.toFixed(4))} )`;switch(Qt.getTransfer(e)){case nc:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Nb(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+u3(e.getShaderSource(t),o)}else return a}function f3(e,t){let n=h3(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function d3(e,t){let n;switch(t){case YM:n="Linear";break;case ZM:n="Reinhard";break;case KM:n="Cineon";break;case JM:n="ACESFilmic";break;case jM:n="AgX";break;case $M:n="Neutral";break;case QM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var $f=new I;function p3(){Qt.getLuminanceCoefficients($f);let e=$f.x.toFixed(4),t=$f.y.toFixed(4),n=$f.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rc).join(`
`)}function g3(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function _3(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function Rc(e){return e!==""}function Ub(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lb(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var v3=/^[ \t]*#include +<([\w\d./]+)>/gm;function x0(e){return e.replace(v3,x3)}var y3=new Map;function x3(e,t){let n=Vt[t];if(n===void 0){let i=y3.get(t);if(i!==void 0)n=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return x0(n)}var S3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ob(e){return e.replace(S3,M3)}function M3(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Ib(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function b3(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Vg?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===AM?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===ji&&(t="SHADOWMAP_TYPE_VSM"),t}function E3(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case rr:case or:t="ENVMAP_TYPE_CUBE";break;case bc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function T3(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case or:t="ENVMAP_MODE_REFRACTION";break}return t}function A3(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Wg:t="ENVMAP_BLENDING_MULTIPLY";break;case WM:t="ENVMAP_BLENDING_MIX";break;case qM:t="ENVMAP_BLENDING_ADD";break}return t}function w3(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function C3(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=b3(n),c=E3(n),f=T3(n),d=A3(n),h=w3(n),p=m3(n),_=g3(a),S=s.createProgram(),m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Rc).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Rc).join(`
`),u.length>0&&(u+=`
`)):(m=[Ib(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rc).join(`
`),u=[Ib(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==As?"#define TONE_MAPPING":"",n.toneMapping!==As?Vt.tonemapping_pars_fragment:"",n.toneMapping!==As?d3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,f3("linearToOutputTexel",n.outputColorSpace),p3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rc).join(`
`)),r=x0(r),r=Ub(r,n),r=Lb(r,n),o=x0(o),o=Ub(o,n),o=Lb(o,n),r=Ob(r),o=Ob(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===i0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===i0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let v=g+m+r,y=g+u+o,T=Rb(s,s.VERTEX_SHADER,v),C=Rb(s,s.FRAGMENT_SHADER,y);s.attachShader(S,T),s.attachShader(S,C),n.index0AttributeName!==void 0?s.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(S,0,"position"),s.linkProgram(S);function w(U){if(e.debug.checkShaderErrors){let F=s.getProgramInfoLog(S)||"",G=s.getShaderInfoLog(T)||"",q=s.getShaderInfoLog(C)||"",K=F.trim(),W=G.trim(),nt=q.trim(),H=!0,rt=!0;if(s.getProgramParameter(S,s.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,S,T,C);else{let ht=Nb(s,T,"vertex"),Et=Nb(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(S,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+K+`
`+ht+`
`+Et)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(W===""||nt==="")&&(rt=!1);rt&&(U.diagnostics={runnable:H,programLog:K,vertexShader:{log:W,prefix:m},fragmentShader:{log:nt,prefix:u}})}s.deleteShader(T),s.deleteShader(C),D=new Xo(s,S),E=_3(s,S)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(S,l3)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=c3++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=C,this}var R3=0,S0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new M0(t),n.set(t,i)),i}},M0=class{constructor(t){this.id=R3++,this.code=t,this.usedTimes=0}};function D3(e,t,n,i,s,a,r){let o=new rc,l=new S0,c=new Set,f=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,p=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,b,U,F,G){let q=F.fog,K=G.geometry,W=E.isMeshStandardMaterial?F.environment:null,nt=(E.isMeshStandardMaterial?n:t).get(E.envMap||W),H=nt&&nt.mapping===bc?nt.image.height:null,rt=_[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Et=ht!==void 0?ht.length:0,Xt=0;K.morphAttributes.position!==void 0&&(Xt=1),K.morphAttributes.normal!==void 0&&(Xt=2),K.morphAttributes.color!==void 0&&(Xt=3);let me,be,ne,Y;if(rt){let ie=ts[rt];me=ie.vertexShader,be=ie.fragmentShader}else me=E.vertexShader,be=E.fragmentShader,l.update(E),ne=l.getVertexShaderID(E),Y=l.getFragmentShaderID(E);let Q=e.getRenderTarget(),pt=e.state.buffers.depth.getReversed(),Ut=G.isInstancedMesh===!0,bt=G.isBatchedMesh===!0,Jt=!!E.map,ln=!!E.matcap,R=!!nt,Ee=!!E.aoMap,Pt=!!E.lightMap,Dt=!!E.bumpMap,_t=!!E.normalMap,Te=!!E.displacementMap,vt=!!E.emissiveMap,Ht=!!E.metalnessMap,Ze=!!E.roughnessMap,Ie=E.anisotropy>0,A=E.clearcoat>0,x=E.dispersion>0,P=E.iridescence>0,X=E.sheen>0,J=E.transmission>0,V=Ie&&!!E.anisotropyMap,Mt=A&&!!E.clearcoatMap,it=A&&!!E.clearcoatNormalMap,yt=A&&!!E.clearcoatRoughnessMap,xt=P&&!!E.iridescenceMap,tt=P&&!!E.iridescenceThicknessMap,ut=X&&!!E.sheenColorMap,Ct=X&&!!E.sheenRoughnessMap,St=!!E.specularMap,ot=!!E.specularColorMap,Ft=!!E.specularIntensityMap,N=J&&!!E.transmissionMap,et=J&&!!E.thicknessMap,st=!!E.gradientMap,dt=!!E.alphaMap,j=E.alphaTest>0,Z=!!E.alphaHash,gt=!!E.extensions,It=As;E.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(It=e.toneMapping);let ge={shaderID:rt,shaderType:E.type,shaderName:E.name,vertexShader:me,fragmentShader:be,defines:E.defines,customVertexShaderID:ne,customFragmentShaderID:Y,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:bt,batchingColor:bt&&G._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&G.instanceColor!==null,instancingMorph:Ut&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?e.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:sr,alphaToCoverage:!!E.alphaToCoverage,map:Jt,matcap:ln,envMap:R,envMapMode:R&&nt.mapping,envMapCubeUVHeight:H,aoMap:Ee,lightMap:Pt,bumpMap:Dt,normalMap:_t,displacementMap:h&&Te,emissiveMap:vt,normalMapObjectSpace:_t&&E.normalMapType===ib,normalMapTangentSpace:_t&&E.normalMapType===e0,metalnessMap:Ht,roughnessMap:Ze,anisotropy:Ie,anisotropyMap:V,clearcoat:A,clearcoatMap:Mt,clearcoatNormalMap:it,clearcoatRoughnessMap:yt,dispersion:x,iridescence:P,iridescenceMap:xt,iridescenceThicknessMap:tt,sheen:X,sheenColorMap:ut,sheenRoughnessMap:Ct,specularMap:St,specularColorMap:ot,specularIntensityMap:Ft,transmission:J,transmissionMap:N,thicknessMap:et,gradientMap:st,opaque:E.transparent===!1&&E.blending===nr&&E.alphaToCoverage===!1,alphaMap:dt,alphaTest:j,alphaHash:Z,combine:E.combine,mapUv:Jt&&S(E.map.channel),aoMapUv:Ee&&S(E.aoMap.channel),lightMapUv:Pt&&S(E.lightMap.channel),bumpMapUv:Dt&&S(E.bumpMap.channel),normalMapUv:_t&&S(E.normalMap.channel),displacementMapUv:Te&&S(E.displacementMap.channel),emissiveMapUv:vt&&S(E.emissiveMap.channel),metalnessMapUv:Ht&&S(E.metalnessMap.channel),roughnessMapUv:Ze&&S(E.roughnessMap.channel),anisotropyMapUv:V&&S(E.anisotropyMap.channel),clearcoatMapUv:Mt&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:it&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&S(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&S(E.sheenRoughnessMap.channel),specularMapUv:St&&S(E.specularMap.channel),specularColorMapUv:ot&&S(E.specularColorMap.channel),specularIntensityMapUv:Ft&&S(E.specularIntensityMap.channel),transmissionMapUv:N&&S(E.transmissionMap.channel),thicknessMapUv:et&&S(E.thicknessMap.channel),alphaMapUv:dt&&S(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(_t||Ie),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!K.attributes.uv&&(Jt||dt),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:pt,skinning:G.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Xt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:It,decodeVideoTexture:Jt&&E.map.isVideoTexture===!0&&Qt.getTransfer(E.map.colorSpace)===le,decodeVideoTextureEmissive:vt&&E.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(E.emissiveMap.colorSpace)===le,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_i,flipSided:E.side===Tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:gt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&E.extensions.multiDraw===!0||bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function u(E){let b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(let U in E.defines)b.push(U),b.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(g(b,E),v(b,E),b.push(e.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function g(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function v(E,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),E.push(o.mask)}function y(E){let b=_[E.type],U;if(b){let F=ts[b];U=pb.clone(F.uniforms)}else U=E.uniforms;return U}function T(E,b){let U;for(let F=0,G=f.length;F<G;F++){let q=f[F];if(q.cacheKey===b){U=q,++U.usedTimes;break}}return U===void 0&&(U=new C3(e,b,E,a),f.push(U)),U}function C(E){if(--E.usedTimes===0){let b=f.indexOf(E);f[b]=f[f.length-1],f.pop(),E.destroy()}}function w(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:T,releaseProgram:C,releaseShaderCache:w,programs:f,dispose:D}}function N3(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function U3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Pb(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function zb(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(d,h,p,_,S,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:S,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=S,u.group=m),t++,u}function o(d,h,p,_,S,m){let u=r(d,h,p,_,S,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):n.push(u)}function l(d,h,p,_,S,m){let u=r(d,h,p,_,S,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||U3),i.length>1&&i.sort(h||Pb),s.length>1&&s.sort(h||Pb)}function f(){for(let d=t,h=e.length;d<h;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:f,sort:c}}function L3(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new zb,e.set(i,[r])):s>=a.length?(r=new zb,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function O3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new I,color:new Yt};break;case"SpotLight":n={position:new I,direction:new I,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new I,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new I,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":n={color:new Yt,position:new I,halfWidth:new I,halfHeight:new I};break}return e[t.id]=n,n}}}function I3(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var P3=0;function z3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function B3(e){let t=new O3,n=I3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,a=new ze,r=new ze;function o(c){let f=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,S=0,m=0,u=0,g=0,v=0,y=0,T=0,C=0,w=0;c.sort(z3);for(let E=0,b=c.length;E<b;E++){let U=c[E],F=U.color,G=U.intensity,q=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=F.r*G,d+=F.g*G,h+=F.b*G;else if(U.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(U.sh.coefficients[W],G);w++}else if(U.isDirectionalLight){let W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let nt=U.shadow,H=n.get(U);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=U.shadow.matrix,g++}i.directional[p]=W,p++}else if(U.isSpotLight){let W=t.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(F).multiplyScalar(G),W.distance=q,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,i.spot[S]=W;let nt=U.shadow;if(U.map&&(i.spotLightMap[T]=U.map,T++,nt.updateMatrices(U),U.castShadow&&C++),i.spotLightMatrix[S]=nt.matrix,U.castShadow){let H=n.get(U);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,i.spotShadow[S]=H,i.spotShadowMap[S]=K,y++}S++}else if(U.isRectAreaLight){let W=t.get(U);W.color.copy(F).multiplyScalar(G),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=W,m++}else if(U.isPointLight){let W=t.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),W.distance=U.distance,W.decay=U.decay,U.castShadow){let nt=U.shadow,H=n.get(U);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,H.shadowCameraNear=nt.camera.near,H.shadowCameraFar=nt.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=U.shadow.matrix,v++}i.point[_]=W,_++}else if(U.isHemisphereLight){let W=t.get(U);W.skyColor.copy(U.color).multiplyScalar(G),W.groundColor.copy(U.groundColor).multiplyScalar(G),i.hemi[u]=W,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=at.LTC_FLOAT_1,i.rectAreaLTC2=at.LTC_FLOAT_2):(i.rectAreaLTC1=at.LTC_HALF_1,i.rectAreaLTC2=at.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;let D=i.hash;(D.directionalLength!==p||D.pointLength!==_||D.spotLength!==S||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==g||D.numPointShadows!==v||D.numSpotShadows!==y||D.numSpotMaps!==T||D.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,D.directionalLength=p,D.pointLength=_,D.spotLength=S,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=g,D.numPointShadows=v,D.numSpotShadows=y,D.numSpotMaps=T,D.numLightProbes=w,i.version=P3++)}function l(c,f){let d=0,h=0,p=0,_=0,S=0,m=f.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){let v=c[u];if(v.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isSpotLight){let y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(v.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),_++}else if(v.isPointLight){let y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){let y=i.hemi[S];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),S++}}}return{setup:o,setupView:l,state:i}}function Bb(e){let t=new B3(e),n=[],i=[];function s(f){c.camera=f,n.length=0,i.length=0}function a(f){n.push(f)}function r(f){i.push(f)}function o(){t.setup(n)}function l(f){t.setupView(n,f)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function F3(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new Bb(e),t.set(s,[o])):a>=r.length?(o=new Bb(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var H3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function G3(e,t,n){let i=new Io,s=new Ot,a=new Ot,r=new Ne,o=new Zh({depthPacking:nb}),l=new Kh,c={},f=n.maxTextureSize,d={[Es]:Tn,[Tn]:Es,[_i]:_i},h=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:H3,fragmentShader:V3}),p=h.clone();p.defines.HORIZONTAL_PASS=1;let _=new Qi;_.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new On(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vg;let u=this.type;this.render=function(C,w,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let E=e.getRenderTarget(),b=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),F=e.state;F.setBlending(Ts),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let G=u!==ji&&this.type===ji,q=u===ji&&this.type!==ji;for(let K=0,W=C.length;K<W;K++){let nt=C[K],H=nt.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let rt=H.getFrameExtents();if(s.multiply(rt),a.copy(H.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/rt.x),s.x=a.x*rt.x,H.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/rt.y),s.y=a.y*rt.y,H.mapSize.y=a.y)),H.map===null||G===!0||q===!0){let Et=this.type!==ji?{minFilter:mi,magFilter:mi}:{};H.map!==null&&H.map.dispose(),H.map=new Ji(s.x,s.y,Et),H.map.texture.name=nt.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();let ht=H.getViewportCount();for(let Et=0;Et<ht;Et++){let Xt=H.getViewport(Et);r.set(a.x*Xt.x,a.y*Xt.y,a.x*Xt.z,a.y*Xt.w),F.viewport(r),H.updateMatrices(nt,Et),i=H.getFrustum(),y(w,D,H.camera,nt,this.type)}H.isPointLightShadow!==!0&&this.type===ji&&g(H,D),H.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(E,b,U)};function g(C,w){let D=t.update(S);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ji(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(w,null,D,h,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(w,null,D,p,S,null)}function v(C,w,D,E){let b=null,U=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)b=U;else if(b=D.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let F=b.uuid,G=w.uuid,q=c[F];q===void 0&&(q={},c[F]=q);let K=q[G];K===void 0&&(K=b.clone(),q[G]=K,w.addEventListener("dispose",T)),b=K}if(b.visible=w.visible,b.wireframe=w.wireframe,E===ji?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:d[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,D.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let F=e.properties.get(b);F.light=D}return b}function y(C,w,D,E,b){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===ji)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);let G=t.update(C),q=C.material;if(Array.isArray(q)){let K=G.groups;for(let W=0,nt=K.length;W<nt;W++){let H=K[W],rt=q[H.materialIndex];if(rt&&rt.visible){let ht=v(C,rt,E,b);C.onBeforeShadow(e,C,w,D,G,ht,H),e.renderBufferDirect(D,null,G,ht,C,H),C.onAfterShadow(e,C,w,D,G,ht,H)}}}else if(q.visible){let K=v(C,q,E,b);C.onBeforeShadow(e,C,w,D,G,K,null),e.renderBufferDirect(D,null,G,K,C,null),C.onAfterShadow(e,C,w,D,G,K,null)}}let F=C.children;for(let G=0,q=F.length;G<q;G++)y(F[G],w,D,E,b)}function T(C){C.target.removeEventListener("dispose",T);for(let D in c){let E=c[D],b=C.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}var k3={[of]:lf,[cf]:ff,[uf]:df,[ir]:hf,[lf]:of,[ff]:cf,[df]:uf,[hf]:ir};function X3(e,t){function n(){let N=!1,et=new Ne,st=null,dt=new Ne(0,0,0,0);return{setMask:function(j){st!==j&&!N&&(e.colorMask(j,j,j,j),st=j)},setLocked:function(j){N=j},setClear:function(j,Z,gt,It,ge){ge===!0&&(j*=It,Z*=It,gt*=It),et.set(j,Z,gt,It),dt.equals(et)===!1&&(e.clearColor(j,Z,gt,It),dt.copy(et))},reset:function(){N=!1,st=null,dt.set(-1,0,0,0)}}}function i(){let N=!1,et=!1,st=null,dt=null,j=null;return{setReversed:function(Z){if(et!==Z){let gt=t.get("EXT_clip_control");Z?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),et=Z;let It=j;j=null,this.setClear(It)}},getReversed:function(){return et},setTest:function(Z){Z?Q(e.DEPTH_TEST):pt(e.DEPTH_TEST)},setMask:function(Z){st!==Z&&!N&&(e.depthMask(Z),st=Z)},setFunc:function(Z){if(et&&(Z=k3[Z]),dt!==Z){switch(Z){case of:e.depthFunc(e.NEVER);break;case lf:e.depthFunc(e.ALWAYS);break;case cf:e.depthFunc(e.LESS);break;case ir:e.depthFunc(e.LEQUAL);break;case uf:e.depthFunc(e.EQUAL);break;case hf:e.depthFunc(e.GEQUAL);break;case ff:e.depthFunc(e.GREATER);break;case df:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}dt=Z}},setLocked:function(Z){N=Z},setClear:function(Z){j!==Z&&(et&&(Z=1-Z),e.clearDepth(Z),j=Z)},reset:function(){N=!1,st=null,dt=null,j=null,et=!1}}}function s(){let N=!1,et=null,st=null,dt=null,j=null,Z=null,gt=null,It=null,ge=null;return{setTest:function(ie){N||(ie?Q(e.STENCIL_TEST):pt(e.STENCIL_TEST))},setMask:function(ie){et!==ie&&!N&&(e.stencilMask(ie),et=ie)},setFunc:function(ie,es,Li){(st!==ie||dt!==es||j!==Li)&&(e.stencilFunc(ie,es,Li),st=ie,dt=es,j=Li)},setOp:function(ie,es,Li){(Z!==ie||gt!==es||It!==Li)&&(e.stencilOp(ie,es,Li),Z=ie,gt=es,It=Li)},setLocked:function(ie){N=ie},setClear:function(ie){ge!==ie&&(e.clearStencil(ie),ge=ie)},reset:function(){N=!1,et=null,st=null,dt=null,j=null,Z=null,gt=null,It=null,ge=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,f={},d={},h=new WeakMap,p=[],_=null,S=!1,m=null,u=null,g=null,v=null,y=null,T=null,C=null,w=new Yt(0,0,0),D=0,E=!1,b=null,U=null,F=null,G=null,q=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,nt=0,H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=nt>=1):H.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=nt>=2);let rt=null,ht={},Et=e.getParameter(e.SCISSOR_BOX),Xt=e.getParameter(e.VIEWPORT),me=new Ne().fromArray(Et),be=new Ne().fromArray(Xt);function ne(N,et,st,dt){let j=new Uint8Array(4),Z=e.createTexture();e.bindTexture(N,Z),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let gt=0;gt<st;gt++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(et,0,e.RGBA,1,1,dt,0,e.RGBA,e.UNSIGNED_BYTE,j):e.texImage2D(et+gt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,j);return Z}let Y={};Y[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),Y[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[e.TEXTURE_2D_ARRAY]=ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Y[e.TEXTURE_3D]=ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Q(e.DEPTH_TEST),r.setFunc(ir),Dt(!1),_t(Hg),Q(e.CULL_FACE),Ee(Ts);function Q(N){f[N]!==!0&&(e.enable(N),f[N]=!0)}function pt(N){f[N]!==!1&&(e.disable(N),f[N]=!1)}function Ut(N,et){return d[N]!==et?(e.bindFramebuffer(N,et),d[N]=et,N===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=et),N===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=et),!0):!1}function bt(N,et){let st=p,dt=!1;if(N){st=h.get(et),st===void 0&&(st=[],h.set(et,st));let j=N.textures;if(st.length!==j.length||st[0]!==e.COLOR_ATTACHMENT0){for(let Z=0,gt=j.length;Z<gt;Z++)st[Z]=e.COLOR_ATTACHMENT0+Z;st.length=j.length,dt=!0}}else st[0]!==e.BACK&&(st[0]=e.BACK,dt=!0);dt&&e.drawBuffers(st)}function Jt(N){return _!==N?(e.useProgram(N),_=N,!0):!1}let ln={[pa]:e.FUNC_ADD,[CM]:e.FUNC_SUBTRACT,[RM]:e.FUNC_REVERSE_SUBTRACT};ln[DM]=e.MIN,ln[NM]=e.MAX;let R={[UM]:e.ZERO,[LM]:e.ONE,[OM]:e.SRC_COLOR,[Bh]:e.SRC_ALPHA,[HM]:e.SRC_ALPHA_SATURATE,[BM]:e.DST_COLOR,[PM]:e.DST_ALPHA,[IM]:e.ONE_MINUS_SRC_COLOR,[Fh]:e.ONE_MINUS_SRC_ALPHA,[FM]:e.ONE_MINUS_DST_COLOR,[zM]:e.ONE_MINUS_DST_ALPHA,[VM]:e.CONSTANT_COLOR,[GM]:e.ONE_MINUS_CONSTANT_COLOR,[kM]:e.CONSTANT_ALPHA,[XM]:e.ONE_MINUS_CONSTANT_ALPHA};function Ee(N,et,st,dt,j,Z,gt,It,ge,ie){if(N===Ts){S===!0&&(pt(e.BLEND),S=!1);return}if(S===!1&&(Q(e.BLEND),S=!0),N!==wM){if(N!==m||ie!==E){if((u!==pa||y!==pa)&&(e.blendEquation(e.FUNC_ADD),u=pa,y=pa),ie)switch(N){case nr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gg:e.blendFunc(e.ONE,e.ONE);break;case kg:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Xg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case nr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Gg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case kg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,v=null,T=null,C=null,w.set(0,0,0),D=0,m=N,E=ie}return}j=j||et,Z=Z||st,gt=gt||dt,(et!==u||j!==y)&&(e.blendEquationSeparate(ln[et],ln[j]),u=et,y=j),(st!==g||dt!==v||Z!==T||gt!==C)&&(e.blendFuncSeparate(R[st],R[dt],R[Z],R[gt]),g=st,v=dt,T=Z,C=gt),(It.equals(w)===!1||ge!==D)&&(e.blendColor(It.r,It.g,It.b,ge),w.copy(It),D=ge),m=N,E=!1}function Pt(N,et){N.side===_i?pt(e.CULL_FACE):Q(e.CULL_FACE);let st=N.side===Tn;et&&(st=!st),Dt(st),N.blending===nr&&N.transparent===!1?Ee(Ts):Ee(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),a.setMask(N.colorWrite);let dt=N.stencilWrite;o.setTest(dt),dt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),vt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Q(e.SAMPLE_ALPHA_TO_COVERAGE):pt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(N){b!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),b=N)}function _t(N){N!==EM?(Q(e.CULL_FACE),N!==U&&(N===Hg?e.cullFace(e.BACK):N===TM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):pt(e.CULL_FACE),U=N}function Te(N){N!==F&&(W&&e.lineWidth(N),F=N)}function vt(N,et,st){N?(Q(e.POLYGON_OFFSET_FILL),(G!==et||q!==st)&&(e.polygonOffset(et,st),G=et,q=st)):pt(e.POLYGON_OFFSET_FILL)}function Ht(N){N?Q(e.SCISSOR_TEST):pt(e.SCISSOR_TEST)}function Ze(N){N===void 0&&(N=e.TEXTURE0+K-1),rt!==N&&(e.activeTexture(N),rt=N)}function Ie(N,et,st){st===void 0&&(rt===null?st=e.TEXTURE0+K-1:st=rt);let dt=ht[st];dt===void 0&&(dt={type:void 0,texture:void 0},ht[st]=dt),(dt.type!==N||dt.texture!==et)&&(rt!==st&&(e.activeTexture(st),rt=st),e.bindTexture(N,et||Y[N]),dt.type=N,dt.texture=et)}function A(){let N=ht[rt];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{e.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{e.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{e.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function V(){try{e.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{e.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{e.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{e.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{e.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function tt(){try{e.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(N){me.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),me.copy(N))}function Ct(N){be.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),be.copy(N))}function St(N,et){let st=c.get(et);st===void 0&&(st=new WeakMap,c.set(et,st));let dt=st.get(N);dt===void 0&&(dt=e.getUniformBlockIndex(et,N.name),st.set(N,dt))}function ot(N,et){let dt=c.get(et).get(N);l.get(et)!==dt&&(e.uniformBlockBinding(et,dt,N.__bindingPointIndex),l.set(et,dt))}function Ft(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},rt=null,ht={},d={},h=new WeakMap,p=[],_=null,S=!1,m=null,u=null,g=null,v=null,y=null,T=null,C=null,w=new Yt(0,0,0),D=0,E=!1,b=null,U=null,F=null,G=null,q=null,me.set(0,0,e.canvas.width,e.canvas.height),be.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Q,disable:pt,bindFramebuffer:Ut,drawBuffers:bt,useProgram:Jt,setBlending:Ee,setMaterial:Pt,setFlipSided:Dt,setCullFace:_t,setLineWidth:Te,setPolygonOffset:vt,setScissorTest:Ht,activeTexture:Ze,bindTexture:Ie,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:P,texImage2D:xt,texImage3D:tt,updateUBOMapping:St,uniformBlockBinding:ot,texStorage2D:it,texStorage3D:yt,texSubImage2D:X,texSubImage3D:J,compressedTexSubImage2D:V,compressedTexSubImage3D:Mt,scissor:ut,viewport:Ct,reset:Ft}}function W3(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ot,f=new WeakMap,d,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return p?new OffscreenCanvas(A,x):sc("canvas")}function S(A,x,P){let X=1,J=Ie(A);if((J.width>P||J.height>P)&&(X=P/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let V=Math.floor(X*J.width),Mt=Math.floor(X*J.height);d===void 0&&(d=_(V,Mt));let it=x?_(V,Mt):d;return it.width=V,it.height=Mt,it.getContext("2d").drawImage(A,0,0,V,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+V+"x"+Mt+")."),it}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){e.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(A,x,P,X,J=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let V=x;if(x===e.RED&&(P===e.FLOAT&&(V=e.R32F),P===e.HALF_FLOAT&&(V=e.R16F),P===e.UNSIGNED_BYTE&&(V=e.R8)),x===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(V=e.R8UI),P===e.UNSIGNED_SHORT&&(V=e.R16UI),P===e.UNSIGNED_INT&&(V=e.R32UI),P===e.BYTE&&(V=e.R8I),P===e.SHORT&&(V=e.R16I),P===e.INT&&(V=e.R32I)),x===e.RG&&(P===e.FLOAT&&(V=e.RG32F),P===e.HALF_FLOAT&&(V=e.RG16F),P===e.UNSIGNED_BYTE&&(V=e.RG8)),x===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(V=e.RG8UI),P===e.UNSIGNED_SHORT&&(V=e.RG16UI),P===e.UNSIGNED_INT&&(V=e.RG32UI),P===e.BYTE&&(V=e.RG8I),P===e.SHORT&&(V=e.RG16I),P===e.INT&&(V=e.RG32I)),x===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(V=e.RGB8UI),P===e.UNSIGNED_SHORT&&(V=e.RGB16UI),P===e.UNSIGNED_INT&&(V=e.RGB32UI),P===e.BYTE&&(V=e.RGB8I),P===e.SHORT&&(V=e.RGB16I),P===e.INT&&(V=e.RGB32I)),x===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(V=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(V=e.RGBA16UI),P===e.UNSIGNED_INT&&(V=e.RGBA32UI),P===e.BYTE&&(V=e.RGBA8I),P===e.SHORT&&(V=e.RGBA16I),P===e.INT&&(V=e.RGBA32I)),x===e.RGB&&(P===e.UNSIGNED_INT_5_9_9_9_REV&&(V=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(V=e.R11F_G11F_B10F)),x===e.RGBA){let Mt=J?nc:Qt.getTransfer(X);P===e.FLOAT&&(V=e.RGBA32F),P===e.HALF_FLOAT&&(V=e.RGBA16F),P===e.UNSIGNED_BYTE&&(V=Mt===le?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT_4_4_4_4&&(V=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(V=e.RGB5_A1)}return(V===e.R16F||V===e.R32F||V===e.RG16F||V===e.RG32F||V===e.RGBA16F||V===e.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function y(A,x){let P;return A?x===null||x===Ma||x===Fo?P=e.DEPTH24_STENCIL8:x===$i?P=e.DEPTH32F_STENCIL8:x===zo&&(P=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ma||x===Fo?P=e.DEPTH_COMPONENT24:x===$i?P=e.DEPTH_COMPONENT32F:x===zo&&(P=e.DEPTH_COMPONENT16),P}function T(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==mi&&A.minFilter!==Ri?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){let x=A.target;x.removeEventListener("dispose",C),D(x),x.isVideoTexture&&f.delete(x)}function w(A){let x=A.target;x.removeEventListener("dispose",w),b(x)}function D(A){let x=i.get(A);if(x.__webglInit===void 0)return;let P=A.source,X=h.get(P);if(X){let J=X[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(A),Object.keys(X).length===0&&h.delete(P)}i.remove(A)}function E(A){let x=i.get(A);e.deleteTexture(x.__webglTexture);let P=A.source,X=h.get(P);delete X[x.__cacheKey],r.memory.textures--}function b(A){let x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(x.__webglFramebuffer[X]))for(let J=0;J<x.__webglFramebuffer[X].length;J++)e.deleteFramebuffer(x.__webglFramebuffer[X][J]);else e.deleteFramebuffer(x.__webglFramebuffer[X]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[X])}else{if(Array.isArray(x.__webglFramebuffer))for(let X=0;X<x.__webglFramebuffer.length;X++)e.deleteFramebuffer(x.__webglFramebuffer[X]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let X=0;X<x.__webglColorRenderbuffer.length;X++)x.__webglColorRenderbuffer[X]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[X]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let P=A.textures;for(let X=0,J=P.length;X<J;X++){let V=i.get(P[X]);V.__webglTexture&&(e.deleteTexture(V.__webglTexture),r.memory.textures--),i.remove(P[X])}i.remove(A)}let U=0;function F(){U=0}function G(){let A=U;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function q(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function K(A,x){let P=i.get(A);if(A.isVideoTexture&&Ht(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&P.__version!==A.version){let X=A.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(P,A,x);return}}else A.isExternalTexture&&(P.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+x)}function W(A,x){let P=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&P.__version!==A.version){Y(P,A,x);return}n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+x)}function nt(A,x){let P=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&P.__version!==A.version){Y(P,A,x);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+x)}function H(A,x){let P=i.get(A);if(A.version>0&&P.__version!==A.version){Q(P,A,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+x)}let rt={[Hh]:e.REPEAT,[da]:e.CLAMP_TO_EDGE,[Vh]:e.MIRRORED_REPEAT},ht={[mi]:e.NEAREST,[tb]:e.NEAREST_MIPMAP_NEAREST,[Ec]:e.NEAREST_MIPMAP_LINEAR,[Ri]:e.LINEAR,[gf]:e.LINEAR_MIPMAP_NEAREST,[Sa]:e.LINEAR_MIPMAP_LINEAR},Et={[sb]:e.NEVER,[ub]:e.ALWAYS,[ab]:e.LESS,[n0]:e.LEQUAL,[rb]:e.EQUAL,[cb]:e.GEQUAL,[ob]:e.GREATER,[lb]:e.NOTEQUAL};function Xt(A,x){if(x.type===$i&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ri||x.magFilter===gf||x.magFilter===Ec||x.magFilter===Sa||x.minFilter===Ri||x.minFilter===gf||x.minFilter===Ec||x.minFilter===Sa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,rt[x.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,rt[x.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,rt[x.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,ht[x.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,ht[x.minFilter]),x.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,Et[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===mi||x.minFilter!==Ec&&x.minFilter!==Sa||x.type===$i&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function me(A,x){let P=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));let X=x.source,J=h.get(X);J===void 0&&(J={},h.set(X,J));let V=q(x);if(V!==A.__cacheKey){J[V]===void 0&&(J[V]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),J[V].usedTimes++;let Mt=J[A.__cacheKey];Mt!==void 0&&(J[A.__cacheKey].usedTimes--,Mt.usedTimes===0&&E(x)),A.__cacheKey=V,A.__webglTexture=J[V].texture}return P}function be(A,x,P){return Math.floor(Math.floor(A/P)/x)}function ne(A,x,P,X){let V=A.updateRanges;if(V.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,P,X,x.data);else{V.sort((tt,ut)=>tt.start-ut.start);let Mt=0;for(let tt=1;tt<V.length;tt++){let ut=V[Mt],Ct=V[tt],St=ut.start+ut.count,ot=be(Ct.start,x.width,4),Ft=be(ut.start,x.width,4);Ct.start<=St+1&&ot===Ft&&be(Ct.start+Ct.count-1,x.width,4)===ot?ut.count=Math.max(ut.count,Ct.start+Ct.count-ut.start):(++Mt,V[Mt]=Ct)}V.length=Mt+1;let it=e.getParameter(e.UNPACK_ROW_LENGTH),yt=e.getParameter(e.UNPACK_SKIP_PIXELS),xt=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let tt=0,ut=V.length;tt<ut;tt++){let Ct=V[tt],St=Math.floor(Ct.start/4),ot=Math.ceil(Ct.count/4),Ft=St%x.width,N=Math.floor(St/x.width),et=ot,st=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ft),e.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,Ft,N,et,st,P,X,x.data)}A.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,it),e.pixelStorei(e.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(e.UNPACK_SKIP_ROWS,xt)}}function Y(A,x,P){let X=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(X=e.TEXTURE_3D);let J=me(A,x),V=x.source;n.bindTexture(X,A.__webglTexture,e.TEXTURE0+P);let Mt=i.get(V);if(V.version!==Mt.__version||J===!0){n.activeTexture(e.TEXTURE0+P);let it=Qt.getPrimaries(Qt.workingColorSpace),yt=x.colorSpace===ws?null:Qt.getPrimaries(x.colorSpace),xt=x.colorSpace===ws||it===yt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let tt=S(x.image,!1,s.maxTextureSize);tt=Ze(x,tt);let ut=a.convert(x.format,x.colorSpace),Ct=a.convert(x.type),St=v(x.internalFormat,ut,Ct,x.colorSpace,x.isVideoTexture);Xt(X,x);let ot,Ft=x.mipmaps,N=x.isVideoTexture!==!0,et=Mt.__version===void 0||J===!0,st=V.dataReady,dt=T(x,tt);if(x.isDepthTexture)St=y(x.format===Ho,x.type),et&&(N?n.texStorage2D(e.TEXTURE_2D,1,St,tt.width,tt.height):n.texImage2D(e.TEXTURE_2D,0,St,tt.width,tt.height,0,ut,Ct,null));else if(x.isDataTexture)if(Ft.length>0){N&&et&&n.texStorage2D(e.TEXTURE_2D,dt,St,Ft[0].width,Ft[0].height);for(let j=0,Z=Ft.length;j<Z;j++)ot=Ft[j],N?st&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,ot.width,ot.height,ut,Ct,ot.data):n.texImage2D(e.TEXTURE_2D,j,St,ot.width,ot.height,0,ut,Ct,ot.data);x.generateMipmaps=!1}else N?(et&&n.texStorage2D(e.TEXTURE_2D,dt,St,tt.width,tt.height),st&&ne(x,tt,ut,Ct)):n.texImage2D(e.TEXTURE_2D,0,St,tt.width,tt.height,0,ut,Ct,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&et&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,St,Ft[0].width,Ft[0].height,tt.depth);for(let j=0,Z=Ft.length;j<Z;j++)if(ot=Ft[j],x.format!==vi)if(ut!==null)if(N){if(st)if(x.layerUpdates.size>0){let gt=u0(ot.width,ot.height,x.format,x.type);for(let It of x.layerUpdates){let ge=ot.data.subarray(It*gt/ot.data.BYTES_PER_ELEMENT,(It+1)*gt/ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,It,ot.width,ot.height,1,ut,ge)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,ot.width,ot.height,tt.depth,ut,ot.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,j,St,ot.width,ot.height,tt.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?st&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,ot.width,ot.height,tt.depth,ut,Ct,ot.data):n.texImage3D(e.TEXTURE_2D_ARRAY,j,St,ot.width,ot.height,tt.depth,0,ut,Ct,ot.data)}else{N&&et&&n.texStorage2D(e.TEXTURE_2D,dt,St,Ft[0].width,Ft[0].height);for(let j=0,Z=Ft.length;j<Z;j++)ot=Ft[j],x.format!==vi?ut!==null?N?st&&n.compressedTexSubImage2D(e.TEXTURE_2D,j,0,0,ot.width,ot.height,ut,ot.data):n.compressedTexImage2D(e.TEXTURE_2D,j,St,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?st&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,ot.width,ot.height,ut,Ct,ot.data):n.texImage2D(e.TEXTURE_2D,j,St,ot.width,ot.height,0,ut,Ct,ot.data)}else if(x.isDataArrayTexture)if(N){if(et&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,St,tt.width,tt.height,tt.depth),st)if(x.layerUpdates.size>0){let j=u0(tt.width,tt.height,x.format,x.type);for(let Z of x.layerUpdates){let gt=tt.data.subarray(Z*j/tt.data.BYTES_PER_ELEMENT,(Z+1)*j/tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,ut,Ct,gt)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ut,Ct,tt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,St,tt.width,tt.height,tt.depth,0,ut,Ct,tt.data);else if(x.isData3DTexture)N?(et&&n.texStorage3D(e.TEXTURE_3D,dt,St,tt.width,tt.height,tt.depth),st&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ut,Ct,tt.data)):n.texImage3D(e.TEXTURE_3D,0,St,tt.width,tt.height,tt.depth,0,ut,Ct,tt.data);else if(x.isFramebufferTexture){if(et)if(N)n.texStorage2D(e.TEXTURE_2D,dt,St,tt.width,tt.height);else{let j=tt.width,Z=tt.height;for(let gt=0;gt<dt;gt++)n.texImage2D(e.TEXTURE_2D,gt,St,j,Z,0,ut,Ct,null),j>>=1,Z>>=1}}else if(Ft.length>0){if(N&&et){let j=Ie(Ft[0]);n.texStorage2D(e.TEXTURE_2D,dt,St,j.width,j.height)}for(let j=0,Z=Ft.length;j<Z;j++)ot=Ft[j],N?st&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,ut,Ct,ot):n.texImage2D(e.TEXTURE_2D,j,St,ut,Ct,ot);x.generateMipmaps=!1}else if(N){if(et){let j=Ie(tt);n.texStorage2D(e.TEXTURE_2D,dt,St,j.width,j.height)}st&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ut,Ct,tt)}else n.texImage2D(e.TEXTURE_2D,0,St,ut,Ct,tt);m(x)&&u(X),Mt.__version=V.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Q(A,x,P){if(x.image.length!==6)return;let X=me(A,x),J=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+P);let V=i.get(J);if(J.version!==V.__version||X===!0){n.activeTexture(e.TEXTURE0+P);let Mt=Qt.getPrimaries(Qt.workingColorSpace),it=x.colorSpace===ws?null:Qt.getPrimaries(x.colorSpace),yt=x.colorSpace===ws||Mt===it?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let xt=x.isCompressedTexture||x.image[0].isCompressedTexture,tt=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let Z=0;Z<6;Z++)!xt&&!tt?ut[Z]=S(x.image[Z],!0,s.maxCubemapSize):ut[Z]=tt?x.image[Z].image:x.image[Z],ut[Z]=Ze(x,ut[Z]);let Ct=ut[0],St=a.convert(x.format,x.colorSpace),ot=a.convert(x.type),Ft=v(x.internalFormat,St,ot,x.colorSpace),N=x.isVideoTexture!==!0,et=V.__version===void 0||X===!0,st=J.dataReady,dt=T(x,Ct);Xt(e.TEXTURE_CUBE_MAP,x);let j;if(xt){N&&et&&n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,Ft,Ct.width,Ct.height);for(let Z=0;Z<6;Z++){j=ut[Z].mipmaps;for(let gt=0;gt<j.length;gt++){let It=j[gt];x.format!==vi?St!==null?N?st&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,0,0,It.width,It.height,St,It.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,Ft,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,0,0,It.width,It.height,St,ot,It.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,Ft,It.width,It.height,0,St,ot,It.data)}}}else{if(j=x.mipmaps,N&&et){j.length>0&&dt++;let Z=Ie(ut[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,Ft,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){N?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ut[Z].width,ut[Z].height,St,ot,ut[Z].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ft,ut[Z].width,ut[Z].height,0,St,ot,ut[Z].data);for(let gt=0;gt<j.length;gt++){let ge=j[gt].image[Z].image;N?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,0,0,ge.width,ge.height,St,ot,ge.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,Ft,ge.width,ge.height,0,St,ot,ge.data)}}else{N?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,St,ot,ut[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ft,St,ot,ut[Z]);for(let gt=0;gt<j.length;gt++){let It=j[gt];N?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,0,0,St,ot,It.image[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,Ft,St,ot,It.image[Z])}}}m(x)&&u(e.TEXTURE_CUBE_MAP),V.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function pt(A,x,P,X,J,V){let Mt=a.convert(P.format,P.colorSpace),it=a.convert(P.type),yt=v(P.internalFormat,Mt,it,P.colorSpace),xt=i.get(x),tt=i.get(P);if(tt.__renderTarget=x,!xt.__hasExternalTextures){let ut=Math.max(1,x.width>>V),Ct=Math.max(1,x.height>>V);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?n.texImage3D(J,V,yt,ut,Ct,x.depth,0,Mt,it,null):n.texImage2D(J,V,yt,ut,Ct,0,Mt,it,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),vt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,J,tt.__webglTexture,0,Te(x)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,X,J,tt.__webglTexture,V),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ut(A,x,P){if(e.bindRenderbuffer(e.RENDERBUFFER,A),x.depthBuffer){let X=x.depthTexture,J=X&&X.isDepthTexture?X.type:null,V=y(x.stencilBuffer,J),Mt=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,it=Te(x);vt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,it,V,x.width,x.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,it,V,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,V,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Mt,e.RENDERBUFFER,A)}else{let X=x.textures;for(let J=0;J<X.length;J++){let V=X[J],Mt=a.convert(V.format,V.colorSpace),it=a.convert(V.type),yt=v(V.internalFormat,Mt,it,V.colorSpace),xt=Te(x);P&&vt(x)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,xt,yt,x.width,x.height):vt(x)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xt,yt,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,yt,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function bt(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=i.get(x.depthTexture);X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let J=X.__webglTexture,V=Te(x);if(x.depthTexture.format===wo)vt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0,V):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0);else if(x.depthTexture.format===Ho)vt(x)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0,V):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Jt(A){let x=i.get(A),P=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let X=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),X){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=X}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let X=A.texture.mipmaps;X&&X.length>0?bt(x.__webglFramebuffer[0],A):bt(x.__webglFramebuffer,A)}else if(P){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]===void 0)x.__webglDepthbuffer[X]=e.createRenderbuffer(),Ut(x.__webglDepthbuffer[X],A,!1);else{let J=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer[X];e.bindRenderbuffer(e.RENDERBUFFER,V),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,V)}}else{let X=A.texture.mipmaps;if(X&&X.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),Ut(x.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,V=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,V),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,V)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ln(A,x,P){let X=i.get(A);x!==void 0&&pt(X.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&Jt(A)}function R(A){let x=A.texture,P=i.get(A),X=i.get(x);A.addEventListener("dispose",w);let J=A.textures,V=A.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(X.__webglTexture===void 0&&(X.__webglTexture=e.createTexture()),X.__version=x.version,r.memory.textures++),V){P.__webglFramebuffer=[];for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer[it]=[];for(let yt=0;yt<x.mipmaps.length;yt++)P.__webglFramebuffer[it][yt]=e.createFramebuffer()}else P.__webglFramebuffer[it]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){P.__webglFramebuffer=[];for(let it=0;it<x.mipmaps.length;it++)P.__webglFramebuffer[it]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(Mt)for(let it=0,yt=J.length;it<yt;it++){let xt=i.get(J[it]);xt.__webglTexture===void 0&&(xt.__webglTexture=e.createTexture(),r.memory.textures++)}if(A.samples>0&&vt(A)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let it=0;it<J.length;it++){let yt=J[it];P.__webglColorRenderbuffer[it]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[it]);let xt=a.convert(yt.format,yt.colorSpace),tt=a.convert(yt.type),ut=v(yt.internalFormat,xt,tt,yt.colorSpace,A.isXRRenderTarget===!0),Ct=Te(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ct,ut,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+it,e.RENDERBUFFER,P.__webglColorRenderbuffer[it])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),Ut(P.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(V){n.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),Xt(e.TEXTURE_CUBE_MAP,x);for(let it=0;it<6;it++)if(x.mipmaps&&x.mipmaps.length>0)for(let yt=0;yt<x.mipmaps.length;yt++)pt(P.__webglFramebuffer[it][yt],A,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,yt);else pt(P.__webglFramebuffer[it],A,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(x)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Mt){for(let it=0,yt=J.length;it<yt;it++){let xt=J[it],tt=i.get(xt),ut=e.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ut,tt.__webglTexture),Xt(ut,xt),pt(P.__webglFramebuffer,A,xt,e.COLOR_ATTACHMENT0+it,ut,0),m(xt)&&u(ut)}n.unbindTexture()}else{let it=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(it=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(it,X.__webglTexture),Xt(it,x),x.mipmaps&&x.mipmaps.length>0)for(let yt=0;yt<x.mipmaps.length;yt++)pt(P.__webglFramebuffer[yt],A,x,e.COLOR_ATTACHMENT0,it,yt);else pt(P.__webglFramebuffer,A,x,e.COLOR_ATTACHMENT0,it,0);m(x)&&u(it),n.unbindTexture()}A.depthBuffer&&Jt(A)}function Ee(A){let x=A.textures;for(let P=0,X=x.length;P<X;P++){let J=x[P];if(m(J)){let V=g(A),Mt=i.get(J).__webglTexture;n.bindTexture(V,Mt),u(V),n.unbindTexture()}}}let Pt=[],Dt=[];function _t(A){if(A.samples>0){if(vt(A)===!1){let x=A.textures,P=A.width,X=A.height,J=e.COLOR_BUFFER_BIT,V=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Mt=i.get(A),it=x.length>1;if(it)for(let xt=0;xt<x.length;xt++)n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let yt=A.texture.mipmaps;yt&&yt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let xt=0;xt<x.length;xt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),it){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);let tt=i.get(x[xt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,tt,0)}e.blitFramebuffer(0,0,P,X,0,0,P,X,J,e.NEAREST),l===!0&&(Pt.length=0,Dt.length=0,Pt.push(e.COLOR_ATTACHMENT0+xt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Pt.push(V),Dt.push(V),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Dt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Pt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),it)for(let xt=0;xt<x.length;xt++){n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[xt]);let tt=i.get(x[xt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,tt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let x=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function Te(A){return Math.min(s.maxSamples,A.samples)}function vt(A){let x=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ht(A){let x=r.render.frame;f.get(A)!==x&&(f.set(A,x),A.update())}function Ze(A,x){let P=A.colorSpace,X=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||P!==sr&&P!==ws&&(Qt.getTransfer(P)===le?(X!==vi||J!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),x}function Ie(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=nt,this.setTextureCube=H,this.rebindTextures=ln,this.setupRenderTarget=R,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=vt}function q3(e,t){function n(i,s=ws){let a,r=Qt.getTransfer(s);if(i===Ui)return e.UNSIGNED_BYTE;if(i===vf)return e.UNSIGNED_SHORT_4_4_4_4;if(i===yf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Kg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Jg)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yg)return e.BYTE;if(i===Zg)return e.SHORT;if(i===zo)return e.UNSIGNED_SHORT;if(i===_f)return e.INT;if(i===Ma)return e.UNSIGNED_INT;if(i===$i)return e.FLOAT;if(i===Bo)return e.HALF_FLOAT;if(i===Qg)return e.ALPHA;if(i===jg)return e.RGB;if(i===vi)return e.RGBA;if(i===wo)return e.DEPTH_COMPONENT;if(i===Ho)return e.DEPTH_STENCIL;if(i===$g)return e.RED;if(i===xf)return e.RED_INTEGER;if(i===t0)return e.RG;if(i===Sf)return e.RG_INTEGER;if(i===Mf)return e.RGBA_INTEGER;if(i===Tc||i===Ac||i===wc||i===Cc)if(r===le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Tc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Tc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ac)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bf||i===Ef||i===Tf||i===Af)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===bf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ef)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Af)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wf||i===Cf||i===Rf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===wf||i===Cf)return r===le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Rf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Df||i===Nf||i===Uf||i===Lf||i===Of||i===If||i===Pf||i===zf||i===Bf||i===Ff||i===Hf||i===Vf||i===Gf||i===kf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Df)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Of)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===If)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Pf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ff)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kf)return r===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xf||i===Wf||i===qf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Xf)return r===le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yf||i===Zf||i===Kf||i===Jf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Yf)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Zf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var Y3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,b0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new pc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new Ni({vertexShader:Y3,fragmentShader:Z3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new On(new mc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},E0=class extends Ki{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,_=null,S=typeof XRWebGLBinding<"u",m=new b0,u={},g=n.getContextAttributes(),v=null,y=null,T=[],C=[],w=new Ot,D=null,E=new pn;E.viewport=new Ne;let b=new pn;b.viewport=new Ne;let U=[E,b],F=new rf,G=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=T[Y];return Q===void 0&&(Q=new Oo,T[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=T[Y];return Q===void 0&&(Q=new Oo,T[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=T[Y];return Q===void 0&&(Q=new Oo,T[Y]=Q),Q.getHandSpace()};function K(Y){let Q=C.indexOf(Y.inputSource);if(Q===-1)return;let pt=T[Q];pt!==void 0&&(pt.update(Y.inputSource,Y.frame,c||r),pt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",nt);for(let Y=0;Y<T.length;Y++){let Q=C[Y];Q!==null&&(C[Y]=null,T[Y].disconnect(Q))}G=null,q=null,m.reset();for(let Y in u)delete u[Y];t.setRenderTarget(v),p=null,h=null,d=null,s=null,y=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",W),s.addEventListener("inputsourceschange",nt),g.xrCompatible!==!0&&await n.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Ut=null,bt=null;g.depth&&(bt=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pt=g.stencil?Ho:wo,Ut=g.stencil?Fo:Ma);let Jt={colorFormat:n.RGBA8,depthFormat:bt,scaleFactor:a};d=this.getBinding(),h=d.createProjectionLayer(Jt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Ji(h.textureWidth,h.textureHeight,{format:vi,type:Ui,depthTexture:new dc(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let pt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,pt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ji(p.framebufferWidth,p.framebufferHeight,{format:vi,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(Y){for(let Q=0;Q<Y.removed.length;Q++){let pt=Y.removed[Q],Ut=C.indexOf(pt);Ut>=0&&(C[Ut]=null,T[Ut].disconnect(pt))}for(let Q=0;Q<Y.added.length;Q++){let pt=Y.added[Q],Ut=C.indexOf(pt);if(Ut===-1){for(let Jt=0;Jt<T.length;Jt++)if(Jt>=C.length){C.push(pt),Ut=Jt;break}else if(C[Jt]===null){C[Jt]=pt,Ut=Jt;break}if(Ut===-1)break}let bt=T[Ut];bt&&bt.connect(pt)}}let H=new I,rt=new I;function ht(Y,Q,pt){H.setFromMatrixPosition(Q.matrixWorld),rt.setFromMatrixPosition(pt.matrixWorld);let Ut=H.distanceTo(rt),bt=Q.projectionMatrix.elements,Jt=pt.projectionMatrix.elements,ln=bt[14]/(bt[10]-1),R=bt[14]/(bt[10]+1),Ee=(bt[9]+1)/bt[5],Pt=(bt[9]-1)/bt[5],Dt=(bt[8]-1)/bt[0],_t=(Jt[8]+1)/Jt[0],Te=ln*Dt,vt=ln*_t,Ht=Ut/(-Dt+_t),Ze=Ht*-Dt;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ze),Y.translateZ(Ht),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Ie=ln+Ht,A=R+Ht,x=Te-Ze,P=vt+(Ut-Ze),X=Ee*R/A*Ie,J=Pt*R/A*Ie;Y.projectionMatrix.makePerspective(x,P,X,J,Ie,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Et(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,pt=Y.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),F.near=b.near=E.near=Q,F.far=b.far=E.far=pt,(G!==F.near||q!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),G=F.near,q=F.far),F.layers.mask=Y.layers.mask|6,E.layers.mask=F.layers.mask&3,b.layers.mask=F.layers.mask&5;let Ut=Y.parent,bt=F.cameras;Et(F,Ut);for(let Jt=0;Jt<bt.length;Jt++)Et(bt[Jt],Ut);bt.length===2?ht(F,E,b):F.projectionMatrix.copy(E.projectionMatrix),Xt(Y,F,Ut)};function Xt(Y,Q,pt){pt===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(pt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Co*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return u[Y]};let me=null;function be(Y,Q){if(f=Q.getViewerPose(c||r),_=Q,f!==null){let pt=f.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Ut=!1;pt.length!==F.cameras.length&&(F.cameras.length=0,Ut=!0);for(let R=0;R<pt.length;R++){let Ee=pt[R],Pt=null;if(p!==null)Pt=p.getViewport(Ee);else{let _t=d.getViewSubImage(h,Ee);Pt=_t.viewport,R===0&&(t.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(y))}let Dt=U[R];Dt===void 0&&(Dt=new pn,Dt.layers.enable(R),Dt.viewport=new Ne,U[R]=Dt),Dt.matrix.fromArray(Ee.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Ee.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),R===0&&(F.matrix.copy(Dt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ut===!0&&F.cameras.push(Dt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&S){d=i.getBinding();let R=d.getDepthInformation(pt[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(bt&&bt.includes("camera-access")&&S){t.state.unbindTexture(),d=i.getBinding();for(let R=0;R<pt.length;R++){let Ee=pt[R].camera;if(Ee){let Pt=u[Ee];Pt||(Pt=new pc,u[Ee]=Pt);let Dt=d.getCameraImage(Ee);Pt.sourceTexture=Dt}}}}for(let pt=0;pt<T.length;pt++){let Ut=C[pt],bt=T[pt];Ut!==null&&bt!==void 0&&bt.update(Ut,Q,c||r)}me&&me(Y,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),_=null}let ne=new Fb;ne.setAnimationLoop(be),this.setAnimationLoop=function(Y){me=Y},this.dispose=function(){}}},ur=new Di,K3=new ze;function J3(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,o0(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,g,v,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),d(m,u)):u.isMeshPhongMaterial?(a(m,u),f(m,u)):u.isMeshStandardMaterial?(a(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(a(m,u),_(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),S(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Tn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Tn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let g=t.get(u),v=g.envMap,y=g.envMapRotation;v&&(m.envMap.value=v,ur.copy(y),ur.x*=-1,ur.y*=-1,ur.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),m.envMapRotation.value.setFromMatrix4(K3.makeRotationFromEuler(ur)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Tn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function S(m,u){let g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Q3(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){let y=v.program;i.uniformBlockBinding(g,y)}function c(g,v){let y=s[g.id];y===void 0&&(_(g),y=f(g),s[g.id]=y,g.addEventListener("dispose",m));let T=v.program;i.updateUBOMapping(g,T);let C=t.render.frame;a[g.id]!==C&&(h(g),a[g.id]=C)}function f(g){let v=d();g.__bindingPointIndex=v;let y=e.createBuffer(),T=g.__size,C=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,y),e.bufferData(e.UNIFORM_BUFFER,T,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,y),y}function d(){for(let g=0;g<o;g++)if(r.indexOf(g)===-1)return r.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){let v=s[g.id],y=g.uniforms,T=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let C=0,w=y.length;C<w;C++){let D=Array.isArray(y[C])?y[C]:[y[C]];for(let E=0,b=D.length;E<b;E++){let U=D[E];if(p(U,C,E,T)===!0){let F=U.__offset,G=Array.isArray(U.value)?U.value:[U.value],q=0;for(let K=0;K<G.length;K++){let W=G[K],nt=S(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,F+q,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,q),q+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,v,y,T){let C=g.value,w=v+"_"+y;if(T[w]===void 0)return typeof C=="number"||typeof C=="boolean"?T[w]=C:T[w]=C.clone(),!0;{let D=T[w];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return T[w]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function _(g){let v=g.uniforms,y=0,T=16;for(let w=0,D=v.length;w<D;w++){let E=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,U=E.length;b<U;b++){let F=E[b],G=Array.isArray(F.value)?F.value:[F.value];for(let q=0,K=G.length;q<K;q++){let W=G[q],nt=S(W),H=y%T,rt=H%nt.boundary,ht=H+rt;y+=rt,ht!==0&&T-ht<nt.storage&&(y+=T-ht),F.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=nt.storage}}}let C=y%T;return C>0&&(y+=T-C),g.__size=y,g.__cache={},this}function S(g){let v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){let v=g.target;v.removeEventListener("dispose",m);let y=r.indexOf(v.__bindingPointIndex);r.splice(y,1),e.deleteBuffer(s[v.id]),delete s[v.id],delete a[v.id]}function u(){for(let g in s)e.deleteBuffer(s[g]);r=[],s={},a={}}return{bind:l,update:c,dispose:u}}var ed=class{constructor(t={}){let{canvas:n=hb(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;let _=new Uint32Array(4),S=new Int32Array(4),m=null,u=null,g=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=As,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,T=!1;this._outputColorSpace=Qn;let C=0,w=0,D=null,E=-1,b=null,U=new Ne,F=new Ne,G=null,q=new Yt(0),K=0,W=n.width,nt=n.height,H=1,rt=null,ht=null,Et=new Ne(0,0,W,nt),Xt=new Ne(0,0,W,nt),me=!1,be=new Io,ne=!1,Y=!1,Q=new ze,pt=new I,Ut=new Ne,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function ln(){return D===null?H:1}let R=i;function Ee(M,L){return n.getContext(M,L)}try{let M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",st,!1),n.addEventListener("webglcontextrestored",dt,!1),n.addEventListener("webglcontextcreationerror",j,!1),R===null){let L="webgl2";if(R=Ee(L,M),R===null)throw Ee(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Pt,Dt,_t,Te,vt,Ht,Ze,Ie,A,x,P,X,J,V,Mt,it,yt,xt,tt,ut,Ct,St,ot,Ft;function N(){Pt=new m2(R),Pt.init(),St=new q3(R,Pt),Dt=new l2(R,Pt,t,St),_t=new X3(R,Pt),Dt.reversedDepthBuffer&&h&&_t.buffers.depth.setReversed(!0),Te=new v2(R),vt=new N3,Ht=new W3(R,Pt,_t,vt,Dt,St,Te),Ze=new u2(y),Ie=new p2(y),A=new Ew(R),ot=new r2(R,A),x=new g2(R,A,Te,ot),P=new x2(R,x,A,Te),tt=new y2(R,Dt,Ht),it=new c2(vt),X=new D3(y,Ze,Ie,Pt,Dt,ot,it),J=new J3(y,vt),V=new L3,Mt=new F3(Pt),xt=new a2(y,Ze,Ie,_t,P,p,l),yt=new G3(y,P,Dt),Ft=new Q3(R,Te,Dt,_t),ut=new o2(R,Pt,Te),Ct=new _2(R,Pt,Te),Te.programs=X.programs,y.capabilities=Dt,y.extensions=Pt,y.properties=vt,y.renderLists=V,y.shadowMap=yt,y.state=_t,y.info=Te}N();let et=new E0(y,R);this.xr=et,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let M=Pt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Pt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(W,nt,!1))},this.getSize=function(M){return M.set(W,nt)},this.setSize=function(M,L,z=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=M,nt=L,n.width=Math.floor(M*H),n.height=Math.floor(L*H),z===!0&&(n.style.width=M+"px",n.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set(W*H,nt*H).floor()},this.setDrawingBufferSize=function(M,L,z){W=M,nt=L,H=z,n.width=Math.floor(M*z),n.height=Math.floor(L*z),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(U)},this.getViewport=function(M){return M.copy(Et)},this.setViewport=function(M,L,z,B){M.isVector4?Et.set(M.x,M.y,M.z,M.w):Et.set(M,L,z,B),_t.viewport(U.copy(Et).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Xt)},this.setScissor=function(M,L,z,B){M.isVector4?Xt.set(M.x,M.y,M.z,M.w):Xt.set(M,L,z,B),_t.scissor(F.copy(Xt).multiplyScalar(H).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(M){_t.setScissorTest(me=M)},this.setOpaqueSort=function(M){rt=M},this.setTransparentSort=function(M){ht=M},this.getClearColor=function(M){return M.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(M=!0,L=!0,z=!0){let B=0;if(M){let O=!1;if(D!==null){let $=D.texture.format;O=$===Mf||$===Sf||$===xf}if(O){let $=D.texture.type,lt=$===Ui||$===Ma||$===zo||$===Fo||$===vf||$===yf,mt=xt.getClearColor(),ft=xt.getClearAlpha(),wt=mt.r,Nt=mt.g,Tt=mt.b;lt?(_[0]=wt,_[1]=Nt,_[2]=Tt,_[3]=ft,R.clearBufferuiv(R.COLOR,0,_)):(S[0]=wt,S[1]=Nt,S[2]=Tt,S[3]=ft,R.clearBufferiv(R.COLOR,0,S))}else B|=R.COLOR_BUFFER_BIT}L&&(B|=R.DEPTH_BUFFER_BIT),z&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",st,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",j,!1),xt.dispose(),V.dispose(),Mt.dispose(),vt.dispose(),Ze.dispose(),Ie.dispose(),P.dispose(),ot.dispose(),Ft.dispose(),X.dispose(),et.dispose(),et.removeEventListener("sessionstart",Li),et.removeEventListener("sessionend",R0),ba.stop()};function st(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let M=Te.autoReset,L=yt.enabled,z=yt.autoUpdate,B=yt.needsUpdate,O=yt.type;N(),Te.autoReset=M,yt.enabled=L,yt.autoUpdate=z,yt.needsUpdate=B,yt.type=O}function j(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Z(M){let L=M.target;L.removeEventListener("dispose",Z),gt(L)}function gt(M){It(M),vt.remove(M)}function It(M){let L=vt.get(M).programs;L!==void 0&&(L.forEach(function(z){X.releaseProgram(z)}),M.isShaderMaterial&&X.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,z,B,O,$){L===null&&(L=bt);let lt=O.isMesh&&O.matrixWorld.determinant()<0,mt=Zb(M,L,z,B,O);_t.setMaterial(B,lt);let ft=z.index,wt=1;if(B.wireframe===!0){if(ft=x.getWireframeAttribute(z),ft===void 0)return;wt=2}let Nt=z.drawRange,Tt=z.attributes.position,Zt=Nt.start*wt,ce=(Nt.start+Nt.count)*wt;$!==null&&(Zt=Math.max(Zt,$.start*wt),ce=Math.min(ce,($.start+$.count)*wt)),ft!==null?(Zt=Math.max(Zt,0),ce=Math.min(ce,ft.count)):Tt!=null&&(Zt=Math.max(Zt,0),ce=Math.min(ce,Tt.count));let Ue=ce-Zt;if(Ue<0||Ue===1/0)return;ot.setup(O,B,mt,z,ft);let Se,fe=ut;if(ft!==null&&(Se=A.get(ft),fe=Ct,fe.setIndex(Se)),O.isMesh)B.wireframe===!0?(_t.setLineWidth(B.wireframeLinewidth*ln()),fe.setMode(R.LINES)):fe.setMode(R.TRIANGLES);else if(O.isLine){let At=B.linewidth;At===void 0&&(At=1),_t.setLineWidth(At*ln()),O.isLineSegments?fe.setMode(R.LINES):O.isLineLoop?fe.setMode(R.LINE_LOOP):fe.setMode(R.LINE_STRIP)}else O.isPoints?fe.setMode(R.POINTS):O.isSprite&&fe.setMode(R.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ro("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))fe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let At=O._multiDrawStarts,Ce=O._multiDrawCounts,jt=O._multiDrawCount,Pn=ft?A.get(ft).bytesPerElement:1,dr=vt.get(B).currentProgram.getUniforms();for(let zn=0;zn<jt;zn++)dr.setValue(R,"_gl_DrawID",zn),fe.render(At[zn]/Pn,Ce[zn])}else if(O.isInstancedMesh)fe.renderInstances(Zt,Ue,O.count);else if(z.isInstancedBufferGeometry){let At=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ce=Math.min(z.instanceCount,At);fe.renderInstances(Zt,Ue,Ce)}else fe.render(Zt,Ue)};function ge(M,L,z){M.transparent===!0&&M.side===_i&&M.forceSinglePass===!1?(M.side=Tn,M.needsUpdate=!0,Nc(M,L,z),M.side=Es,M.needsUpdate=!0,Nc(M,L,z),M.side=_i):Nc(M,L,z)}this.compile=function(M,L,z=null){z===null&&(z=M),u=Mt.get(z),u.init(L),v.push(u),z.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),M!==z&&M.traverseVisible(function(O){O.isLight&&O.layers.test(L.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();let B=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let $=O.material;if($)if(Array.isArray($))for(let lt=0;lt<$.length;lt++){let mt=$[lt];ge(mt,z,O),B.add(mt)}else ge($,z,O),B.add($)}),u=v.pop(),B},this.compileAsync=function(M,L,z=null){let B=this.compile(M,L,z);return new Promise(O=>{function $(){if(B.forEach(function(lt){vt.get(lt).currentProgram.isReady()&&B.delete(lt)}),B.size===0){O(M);return}setTimeout($,10)}Pt.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let ie=null;function es(M){ie&&ie(M)}function Li(){ba.stop()}function R0(){ba.start()}let ba=new Fb;ba.setAnimationLoop(es),typeof self<"u"&&ba.setContext(self),this.setAnimationLoop=function(M){ie=M,et.setAnimationLoop(M),M===null?ba.stop():ba.start()},et.addEventListener("sessionstart",Li),et.addEventListener("sessionend",R0),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(L),L=et.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,L,D),u=Mt.get(M,v.length),u.init(L),v.push(u),Q.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),be.setFromProjectionMatrix(Q,Ci,L.reversedDepth),Y=this.localClippingEnabled,ne=it.init(this.clippingPlanes,Y),m=V.get(M,g.length),m.init(),g.push(m),et.enabled===!0&&et.isPresenting===!0){let $=y.xr.getDepthSensingMesh();$!==null&&ad($,L,-1/0,y.sortObjects)}ad(M,L,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(rt,ht),Jt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Jt&&xt.addToRenderList(m,M),this.info.render.frame++,ne===!0&&it.beginShadows();let z=u.state.shadowsArray;yt.render(z,M,L),ne===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,O=m.transmissive;if(u.setupLights(),L.isArrayCamera){let $=L.cameras;if(O.length>0)for(let lt=0,mt=$.length;lt<mt;lt++){let ft=$[lt];N0(B,O,M,ft)}Jt&&xt.render(M);for(let lt=0,mt=$.length;lt<mt;lt++){let ft=$[lt];D0(m,M,ft,ft.viewport)}}else O.length>0&&N0(B,O,M,L),Jt&&xt.render(M),D0(m,M,L);D!==null&&w===0&&(Ht.updateMultisampleRenderTarget(D),Ht.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(y,M,L),ot.resetDefaultState(),E=-1,b=null,v.pop(),v.length>0?(u=v[v.length-1],ne===!0&&it.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function ad(M,L,z,B){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||be.intersectsSprite(M)){B&&Ut.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Q);let lt=P.update(M),mt=M.material;mt.visible&&m.push(M,lt,mt,z,Ut.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||be.intersectsObject(M))){let lt=P.update(M),mt=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ut.copy(M.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ut.copy(lt.boundingSphere.center)),Ut.applyMatrix4(M.matrixWorld).applyMatrix4(Q)),Array.isArray(mt)){let ft=lt.groups;for(let wt=0,Nt=ft.length;wt<Nt;wt++){let Tt=ft[wt],Zt=mt[Tt.materialIndex];Zt&&Zt.visible&&m.push(M,lt,Zt,z,Ut.z,Tt)}}else mt.visible&&m.push(M,lt,mt,z,Ut.z,null)}}let $=M.children;for(let lt=0,mt=$.length;lt<mt;lt++)ad($[lt],L,z,B)}function D0(M,L,z,B){let O=M.opaque,$=M.transmissive,lt=M.transparent;u.setupLightsView(z),ne===!0&&it.setGlobalState(y.clippingPlanes,z),B&&_t.viewport(U.copy(B)),O.length>0&&Dc(O,L,z),$.length>0&&Dc($,L,z),lt.length>0&&Dc(lt,L,z),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function N0(M,L,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[B.id]===void 0&&(u.state.transmissionRenderTarget[B.id]=new Ji(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?Bo:Ui,minFilter:Sa,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let $=u.state.transmissionRenderTarget[B.id],lt=B.viewport||U;$.setSize(lt.z*y.transmissionResolutionScale,lt.w*y.transmissionResolutionScale);let mt=y.getRenderTarget(),ft=y.getActiveCubeFace(),wt=y.getActiveMipmapLevel();y.setRenderTarget($),y.getClearColor(q),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),Jt&&xt.render(z);let Nt=y.toneMapping;y.toneMapping=As;let Tt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),u.setupLightsView(B),ne===!0&&it.setGlobalState(y.clippingPlanes,B),Dc(M,z,B),Ht.updateMultisampleRenderTarget($),Ht.updateRenderTargetMipmap($),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let ce=0,Ue=L.length;ce<Ue;ce++){let Se=L[ce],fe=Se.object,At=Se.geometry,Ce=Se.material,jt=Se.group;if(Ce.side===_i&&fe.layers.test(B.layers)){let Pn=Ce.side;Ce.side=Tn,Ce.needsUpdate=!0,U0(fe,z,B,At,Ce,jt),Ce.side=Pn,Ce.needsUpdate=!0,Zt=!0}}Zt===!0&&(Ht.updateMultisampleRenderTarget($),Ht.updateRenderTargetMipmap($))}y.setRenderTarget(mt,ft,wt),y.setClearColor(q,K),Tt!==void 0&&(B.viewport=Tt),y.toneMapping=Nt}function Dc(M,L,z){let B=L.isScene===!0?L.overrideMaterial:null;for(let O=0,$=M.length;O<$;O++){let lt=M[O],mt=lt.object,ft=lt.geometry,wt=lt.group,Nt=lt.material;Nt.allowOverride===!0&&B!==null&&(Nt=B),mt.layers.test(z.layers)&&U0(mt,L,z,ft,Nt,wt)}}function U0(M,L,z,B,O,$){M.onBeforeRender(y,L,z,B,O,$),M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(y,L,z,B,M,$),O.transparent===!0&&O.side===_i&&O.forceSinglePass===!1?(O.side=Tn,O.needsUpdate=!0,y.renderBufferDirect(z,L,B,O,M,$),O.side=Es,O.needsUpdate=!0,y.renderBufferDirect(z,L,B,O,M,$),O.side=_i):y.renderBufferDirect(z,L,B,O,M,$),M.onAfterRender(y,L,z,B,O,$)}function Nc(M,L,z){L.isScene!==!0&&(L=bt);let B=vt.get(M),O=u.state.lights,$=u.state.shadowsArray,lt=O.state.version,mt=X.getParameters(M,O.state,$,L,z),ft=X.getProgramCacheKey(mt),wt=B.programs;B.environment=M.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(M.isMeshStandardMaterial?Ie:Ze).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,wt===void 0&&(M.addEventListener("dispose",Z),wt=new Map,B.programs=wt);let Nt=wt.get(ft);if(Nt!==void 0){if(B.currentProgram===Nt&&B.lightsStateVersion===lt)return O0(M,mt),Nt}else mt.uniforms=X.getUniforms(M),M.onBeforeCompile(mt,y),Nt=X.acquireProgram(mt,ft),wt.set(ft,Nt),B.uniforms=mt.uniforms;let Tt=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Tt.clippingPlanes=it.uniform),O0(M,mt),B.needsLights=Jb(M),B.lightsStateVersion=lt,B.needsLights&&(Tt.ambientLightColor.value=O.state.ambient,Tt.lightProbe.value=O.state.probe,Tt.directionalLights.value=O.state.directional,Tt.directionalLightShadows.value=O.state.directionalShadow,Tt.spotLights.value=O.state.spot,Tt.spotLightShadows.value=O.state.spotShadow,Tt.rectAreaLights.value=O.state.rectArea,Tt.ltc_1.value=O.state.rectAreaLTC1,Tt.ltc_2.value=O.state.rectAreaLTC2,Tt.pointLights.value=O.state.point,Tt.pointLightShadows.value=O.state.pointShadow,Tt.hemisphereLights.value=O.state.hemi,Tt.directionalShadowMap.value=O.state.directionalShadowMap,Tt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Tt.spotShadowMap.value=O.state.spotShadowMap,Tt.spotLightMatrix.value=O.state.spotLightMatrix,Tt.spotLightMap.value=O.state.spotLightMap,Tt.pointShadowMap.value=O.state.pointShadowMap,Tt.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=Nt,B.uniformsList=null,Nt}function L0(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=Xo.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function O0(M,L){let z=vt.get(M);z.outputColorSpace=L.outputColorSpace,z.batching=L.batching,z.batchingColor=L.batchingColor,z.instancing=L.instancing,z.instancingColor=L.instancingColor,z.instancingMorph=L.instancingMorph,z.skinning=L.skinning,z.morphTargets=L.morphTargets,z.morphNormals=L.morphNormals,z.morphColors=L.morphColors,z.morphTargetsCount=L.morphTargetsCount,z.numClippingPlanes=L.numClippingPlanes,z.numIntersection=L.numClipIntersection,z.vertexAlphas=L.vertexAlphas,z.vertexTangents=L.vertexTangents,z.toneMapping=L.toneMapping}function Zb(M,L,z,B,O){L.isScene!==!0&&(L=bt),Ht.resetTextureUnits();let $=L.fog,lt=B.isMeshStandardMaterial?L.environment:null,mt=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:sr,ft=(B.isMeshStandardMaterial?Ie:Ze).get(B.envMap||lt),wt=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Nt=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Tt=!!z.morphAttributes.position,Zt=!!z.morphAttributes.normal,ce=!!z.morphAttributes.color,Ue=As;B.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ue=y.toneMapping);let Se=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,fe=Se!==void 0?Se.length:0,At=vt.get(B),Ce=u.state.lights;if(ne===!0&&(Y===!0||M!==b)){let _n=M===b&&B.id===E;it.setState(B,M,_n)}let jt=!1;B.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Ce.state.version||At.outputColorSpace!==mt||O.isBatchedMesh&&At.batching===!1||!O.isBatchedMesh&&At.batching===!0||O.isBatchedMesh&&At.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&At.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&At.instancing===!1||!O.isInstancedMesh&&At.instancing===!0||O.isSkinnedMesh&&At.skinning===!1||!O.isSkinnedMesh&&At.skinning===!0||O.isInstancedMesh&&At.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&At.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&At.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&At.instancingMorph===!1&&O.morphTexture!==null||At.envMap!==ft||B.fog===!0&&At.fog!==$||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==it.numPlanes||At.numIntersection!==it.numIntersection)||At.vertexAlphas!==wt||At.vertexTangents!==Nt||At.morphTargets!==Tt||At.morphNormals!==Zt||At.morphColors!==ce||At.toneMapping!==Ue||At.morphTargetsCount!==fe)&&(jt=!0):(jt=!0,At.__version=B.version);let Pn=At.currentProgram;jt===!0&&(Pn=Nc(B,L,O));let dr=!1,zn=!1,qo=!1,Re=Pn.getUniforms(),ti=At.uniforms;if(_t.useProgram(Pn.program)&&(dr=!0,zn=!0,qo=!0),B.id!==E&&(E=B.id,zn=!0),dr||b!==M){_t.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Re.setValue(R,"projectionMatrix",M.projectionMatrix),Re.setValue(R,"viewMatrix",M.matrixWorldInverse);let An=Re.map.cameraPosition;An!==void 0&&An.setValue(R,pt.setFromMatrixPosition(M.matrixWorld)),Dt.logarithmicDepthBuffer&&Re.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Re.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,zn=!0,qo=!0)}if(O.isSkinnedMesh){Re.setOptional(R,O,"bindMatrix"),Re.setOptional(R,O,"bindMatrixInverse");let _n=O.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Re.setValue(R,"boneTexture",_n.boneTexture,Ht))}O.isBatchedMesh&&(Re.setOptional(R,O,"batchingTexture"),Re.setValue(R,"batchingTexture",O._matricesTexture,Ht),Re.setOptional(R,O,"batchingIdTexture"),Re.setValue(R,"batchingIdTexture",O._indirectTexture,Ht),Re.setOptional(R,O,"batchingColorTexture"),O._colorsTexture!==null&&Re.setValue(R,"batchingColorTexture",O._colorsTexture,Ht));let ei=z.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&tt.update(O,z,Pn),(zn||At.receiveShadow!==O.receiveShadow)&&(At.receiveShadow=O.receiveShadow,Re.setValue(R,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ti.envMap.value=ft,ti.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(ti.envMapIntensity.value=L.environmentIntensity),zn&&(Re.setValue(R,"toneMappingExposure",y.toneMappingExposure),At.needsLights&&Kb(ti,qo),$&&B.fog===!0&&J.refreshFogUniforms(ti,$),J.refreshMaterialUniforms(ti,B,H,nt,u.state.transmissionRenderTarget[M.id]),Xo.upload(R,L0(At),ti,Ht)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Xo.upload(R,L0(At),ti,Ht),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Re.setValue(R,"center",O.center),Re.setValue(R,"modelViewMatrix",O.modelViewMatrix),Re.setValue(R,"normalMatrix",O.normalMatrix),Re.setValue(R,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let _n=B.uniformsGroups;for(let An=0,rd=_n.length;An<rd;An++){let Ea=_n[An];Ft.update(Ea,Pn),Ft.bind(Ea,Pn)}}return Pn}function Kb(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function Jb(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,L,z){let B=vt.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),vt.get(M.texture).__webglTexture=L,vt.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:z,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,L){let z=vt.get(M);z.__webglFramebuffer=L,z.__useDefaultFramebuffer=L===void 0};let Qb=R.createFramebuffer();this.setRenderTarget=function(M,L=0,z=0){D=M,C=L,w=z;let B=!0,O=null,$=!1,lt=!1;if(M){let ft=vt.get(M);if(ft.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(ft.__webglFramebuffer===void 0)Ht.setupRenderTarget(M);else if(ft.__hasExternalTextures)Ht.rebindTextures(M,vt.get(M.texture).__webglTexture,vt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Tt=M.depthTexture;if(ft.__boundDepthTexture!==Tt){if(Tt!==null&&vt.has(Tt)&&(M.width!==Tt.image.width||M.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(M)}}let wt=M.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(lt=!0);let Nt=vt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Nt[L])?O=Nt[L][z]:O=Nt[L],$=!0):M.samples>0&&Ht.useMultisampledRTT(M)===!1?O=vt.get(M).__webglMultisampledFramebuffer:Array.isArray(Nt)?O=Nt[z]:O=Nt,U.copy(M.viewport),F.copy(M.scissor),G=M.scissorTest}else U.copy(Et).multiplyScalar(H).floor(),F.copy(Xt).multiplyScalar(H).floor(),G=me;if(z!==0&&(O=Qb),_t.bindFramebuffer(R.FRAMEBUFFER,O)&&B&&_t.drawBuffers(M,O),_t.viewport(U),_t.scissor(F),_t.setScissorTest(G),$){let ft=vt.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+L,ft.__webglTexture,z)}else if(lt){let ft=L;for(let wt=0;wt<M.textures.length;wt++){let Nt=vt.get(M.textures[wt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+wt,Nt.__webglTexture,z,ft)}}else if(M!==null&&z!==0){let ft=vt.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ft.__webglTexture,z)}E=-1},this.readRenderTargetPixels=function(M,L,z,B,O,$,lt,mt=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&lt!==void 0&&(ft=ft[lt]),ft){_t.bindFramebuffer(R.FRAMEBUFFER,ft);try{let wt=M.textures[mt],Nt=wt.format,Tt=wt.type;if(!Dt.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-B&&z>=0&&z<=M.height-O&&(M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+mt),R.readPixels(L,z,B,O,St.convert(Nt),St.convert(Tt),$))}finally{let wt=D!==null?vt.get(D).__webglFramebuffer:null;_t.bindFramebuffer(R.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(M,L,z,B,O,$,lt,mt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=vt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&lt!==void 0&&(ft=ft[lt]),ft)if(L>=0&&L<=M.width-B&&z>=0&&z<=M.height-O){_t.bindFramebuffer(R.FRAMEBUFFER,ft);let wt=M.textures[mt],Nt=wt.format,Tt=wt.type;if(!Dt.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Zt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Zt),R.bufferData(R.PIXEL_PACK_BUFFER,$.byteLength,R.STREAM_READ),M.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+mt),R.readPixels(L,z,B,O,St.convert(Nt),St.convert(Tt),0);let ce=D!==null?vt.get(D).__webglFramebuffer:null;_t.bindFramebuffer(R.FRAMEBUFFER,ce);let Ue=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await fb(R,Ue,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Zt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,$),R.deleteBuffer(Zt),R.deleteSync(Ue),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,L=null,z=0){let B=Math.pow(2,-z),O=Math.floor(M.image.width*B),$=Math.floor(M.image.height*B),lt=L!==null?L.x:0,mt=L!==null?L.y:0;Ht.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,z,0,0,lt,mt,O,$),_t.unbindTexture()};let jb=R.createFramebuffer(),$b=R.createFramebuffer();this.copyTextureToTexture=function(M,L,z=null,B=null,O=0,$=null){$===null&&(O!==0?(Ro("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),$=O,O=0):$=0);let lt,mt,ft,wt,Nt,Tt,Zt,ce,Ue,Se=M.isCompressedTexture?M.mipmaps[$]:M.image;if(z!==null)lt=z.max.x-z.min.x,mt=z.max.y-z.min.y,ft=z.isBox3?z.max.z-z.min.z:1,wt=z.min.x,Nt=z.min.y,Tt=z.isBox3?z.min.z:0;else{let ei=Math.pow(2,-O);lt=Math.floor(Se.width*ei),mt=Math.floor(Se.height*ei),M.isDataArrayTexture?ft=Se.depth:M.isData3DTexture?ft=Math.floor(Se.depth*ei):ft=1,wt=0,Nt=0,Tt=0}B!==null?(Zt=B.x,ce=B.y,Ue=B.z):(Zt=0,ce=0,Ue=0);let fe=St.convert(L.format),At=St.convert(L.type),Ce;L.isData3DTexture?(Ht.setTexture3D(L,0),Ce=R.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ht.setTexture2DArray(L,0),Ce=R.TEXTURE_2D_ARRAY):(Ht.setTexture2D(L,0),Ce=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,L.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,L.unpackAlignment);let jt=R.getParameter(R.UNPACK_ROW_LENGTH),Pn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),dr=R.getParameter(R.UNPACK_SKIP_PIXELS),zn=R.getParameter(R.UNPACK_SKIP_ROWS),qo=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Se.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Se.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,wt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Nt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Tt);let Re=M.isDataArrayTexture||M.isData3DTexture,ti=L.isDataArrayTexture||L.isData3DTexture;if(M.isDepthTexture){let ei=vt.get(M),_n=vt.get(L),An=vt.get(ei.__renderTarget),rd=vt.get(_n.__renderTarget);_t.bindFramebuffer(R.READ_FRAMEBUFFER,An.__webglFramebuffer),_t.bindFramebuffer(R.DRAW_FRAMEBUFFER,rd.__webglFramebuffer);for(let Ea=0;Ea<ft;Ea++)Re&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,vt.get(M).__webglTexture,O,Tt+Ea),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,vt.get(L).__webglTexture,$,Ue+Ea)),R.blitFramebuffer(wt,Nt,lt,mt,Zt,ce,lt,mt,R.DEPTH_BUFFER_BIT,R.NEAREST);_t.bindFramebuffer(R.READ_FRAMEBUFFER,null),_t.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||vt.has(M)){let ei=vt.get(M),_n=vt.get(L);_t.bindFramebuffer(R.READ_FRAMEBUFFER,jb),_t.bindFramebuffer(R.DRAW_FRAMEBUFFER,$b);for(let An=0;An<ft;An++)Re?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ei.__webglTexture,O,Tt+An):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ei.__webglTexture,O),ti?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,_n.__webglTexture,$,Ue+An):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,_n.__webglTexture,$),O!==0?R.blitFramebuffer(wt,Nt,lt,mt,Zt,ce,lt,mt,R.COLOR_BUFFER_BIT,R.NEAREST):ti?R.copyTexSubImage3D(Ce,$,Zt,ce,Ue+An,wt,Nt,lt,mt):R.copyTexSubImage2D(Ce,$,Zt,ce,wt,Nt,lt,mt);_t.bindFramebuffer(R.READ_FRAMEBUFFER,null),_t.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ti?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(Ce,$,Zt,ce,Ue,lt,mt,ft,fe,At,Se.data):L.isCompressedArrayTexture?R.compressedTexSubImage3D(Ce,$,Zt,ce,Ue,lt,mt,ft,fe,Se.data):R.texSubImage3D(Ce,$,Zt,ce,Ue,lt,mt,ft,fe,At,Se):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,$,Zt,ce,lt,mt,fe,At,Se.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,$,Zt,ce,Se.width,Se.height,fe,Se.data):R.texSubImage2D(R.TEXTURE_2D,$,Zt,ce,lt,mt,fe,At,Se);R.pixelStorei(R.UNPACK_ROW_LENGTH,jt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Pn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,dr),R.pixelStorei(R.UNPACK_SKIP_ROWS,zn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,qo),$===0&&L.generateMipmaps&&R.generateMipmap(Ce),_t.unbindTexture()},this.initRenderTarget=function(M){vt.get(M).__webglFramebuffer===void 0&&Ht.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ht.setTextureCube(M,0):M.isData3DTexture?Ht.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ht.setTexture2DArray(M,0):Ht.setTexture2D(M,0),_t.unbindTexture()},this.resetState=function(){C=0,w=0,D=null,_t.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Qt._getUnpackColorSpace()}};var Xb={type:"change"},w0={type:"start"},qb={type:"end"},id=new Uo,Wb=new di,$3=Math.cos(70*a0.DEG2RAD),Ye=new I,In=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},A0=1e-6,sd=class extends Mc{constructor(t,n=null){super(t,n),this.state=he.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ya.ROTATE,MIDDLE:ya.DOLLY,RIGHT:ya.PAN},this.touches={ONE:xa.ROTATE,TWO:xa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new gi,this._lastTargetPosition=new I,this._quat=new gi().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Po,this._sphericalDelta=new Po,this._scale=1,this._panOffset=new I,this._rotateStart=new Ot,this._rotateEnd=new Ot,this._rotateDelta=new Ot,this._panStart=new Ot,this._panEnd=new Ot,this._panDelta=new Ot,this._dollyStart=new Ot,this._dollyEnd=new Ot,this._dollyDelta=new Ot,this._dollyDirection=new I,this._mouse=new Ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eD.bind(this),this._onPointerDown=tD.bind(this),this._onPointerUp=nD.bind(this),this._onContextMenu=cD.bind(this),this._onMouseWheel=aD.bind(this),this._onKeyDown=rD.bind(this),this._onTouchStart=oD.bind(this),this._onTouchMove=lD.bind(this),this._onMouseDown=iD.bind(this),this._onMouseMove=sD.bind(this),this._interceptControlDown=uD.bind(this),this._interceptControlUp=hD.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xb),this.update(),this.state=he.NONE}update(t=null){let n=this.object.position;Ye.copy(n).sub(this.target),Ye.applyQuaternion(this._quat),this._spherical.setFromVector3(Ye),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=In:i>Math.PI&&(i-=In),s<-Math.PI?s+=In:s>Math.PI&&(s-=In),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(Ye.setFromSpherical(this._spherical),Ye.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ye),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let o=Ye.length();r=this._clampDistance(o*this._scale);let l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=Ye.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(id.origin.copy(this.object.position),id.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(id.direction))<$3?this.object.lookAt(this.target):(Wb.setFromNormalAndCoplanarPoint(this.object.up,this.target),id.intersectPlane(Wb,this.target))))}else if(this.object.isOrthographicCamera){let r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>A0||8*(1-this._lastQuaternion.dot(this.object.quaternion))>A0||this._lastTargetPosition.distanceToSquared(this.target)>A0?(this.dispatchEvent(Xb),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?In/60*this.autoRotateSpeed*t:In/60/60*this.autoRotateSpeed}_getZoomScale(t){let n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Ye.setFromMatrixColumn(n,0),Ye.multiplyScalar(-t),this._panOffset.add(Ye)}_panUp(t,n){this.screenSpacePanning===!0?Ye.setFromMatrixColumn(n,1):(Ye.setFromMatrixColumn(n,0),Ye.crossVectors(this.object.up,Ye)),Ye.multiplyScalar(t),this._panOffset.add(Ye)}_pan(t,n){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ye.copy(s).sub(this.target);let a=Ye.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*n*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,a=n-i.top,r=i.width,o=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(In*this._rotateDelta.x/n.clientHeight),this._rotateUp(In*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(In*this._rotateDelta.x/n.clientHeight),this._rotateUp(In*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+n.x)*.5,o=(t.pageY+n.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Ot,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){let n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function tD(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function eD(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function nD(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qb),this.state=he.NONE;break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function iD(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ya.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=he.DOLLY;break;case ya.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=he.ROTATE}break;case ya.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(w0)}function sD(e){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function aD(e){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(e.preventDefault(),this.dispatchEvent(w0),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(qb))}function rD(e){this.enabled!==!1&&this._handleKeyDown(e)}function oD(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case xa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=he.TOUCH_ROTATE;break;case xa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case xa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=he.TOUCH_DOLLY_PAN;break;case xa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(w0)}function lD(e){switch(this._trackPointer(e),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=he.NONE}}function cD(e){this.enabled!==!1&&e.preventDefault()}function uD(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hD(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var C0=new WeakMap;function fD({mesh:e,theme:t}){let n=(0,ct.useRef)(null),i=(0,ct.useRef)(null),s=(0,ct.useRef)(null),[a,r]=(0,ct.useState)(!1),[o,l]=(0,ct.useState)("");(0,ct.useEffect)(()=>{let f=n.current;if(!e||!f)return;let d;try{d=new ed({antialias:!0}),l("")}catch{l("WebGL is unavailable in this browser.");return}d.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.appendChild(d.domElement);let h=new fc;h.background=new Yt(t==="Dark"?"#16232b":"#f5f8f7");let p=new pn(35,1,.1,1e5);p.up.set(0,0,1);let _=new Qi;_.setAttribute("position",new pi(e.vertices,3)),_.setIndex(new En(new Uint32Array(e.faces),1)),_.computeVertexNormals(),_.computeBoundingBox();let S=new I;_.boundingBox.getCenter(S),_.translate(-S.x,-S.y,-S.z);let m=new I;_.boundingBox.getSize(m);let u=Math.max(m.x,m.y,m.z,1),g=new gc({color:"#48bba8",roughness:.48,metalness:.05,side:_i}),v=new On(_,g);h.add(v),h.add(new yc(16777215,5796716,2.5));let y=new Sc(16777215,3);y.position.set(u,-u,u*2),h.add(y);let T=new sd(p,d.domElement);T.enableDamping=!0;function C(){p.position.set(0,-u*2.1,u*.25),T.target.set(0,0,0),T.update()}C(),s.current?.key===e.key&&(p.position.fromArray(s.current.position),T.target.fromArray(s.current.target),T.update()),i.current={reset:C,material:g},g.wireframe=a;let w=new ResizeObserver(()=>{let D=f.clientWidth,E=f.clientHeight;!D||!E||(d.setSize(D,E),p.aspect=D/E,p.updateProjectionMatrix())});return w.observe(f),d.setAnimationLoop(()=>{T.update(),d.render(h,p)}),()=>{s.current={key:e.key,position:p.position.toArray(),target:T.target.toArray()},w.disconnect(),d.setAnimationLoop(null),T.dispose(),_.dispose(),g.dispose(),d.dispose(),d.domElement.remove(),i.current=null}},[e?.key,t]),(0,ct.useEffect)(()=>{i.current&&(i.current.material.wireframe=a)},[a]);function c(){n.current?.closest(".mesh-card")?.requestFullscreen?.()}return ct.default.createElement("div",{className:"mesh-card"},ct.default.createElement("div",{className:"mesh-host",ref:n,"aria-label":"Interactive 3D vessel reconstruction"}),!e&&ct.default.createElement("div",{className:"mesh-empty"},"No nonempty vessel mesh is available."),o&&ct.default.createElement("div",{className:"mesh-empty"},o),ct.default.createElement("div",{className:"mesh-tools"},ct.default.createElement("button",{type:"button",disabled:!e,onClick:()=>i.current?.reset()},"Reset view"),ct.default.createElement("button",{type:"button",disabled:!e,"aria-pressed":a,onClick:()=>r(!a)},"Wireframe"),ct.default.createElement("button",{type:"button",disabled:!e,onClick:c},"Fullscreen")),ct.default.createElement("span",{className:"mesh-hint"},"Drag to rotate \xB7 Scroll to zoom"))}function dD({prediction:e,scan:t,reference:n,opacity:i,showTruth:s}){return ct.default.createElement("article",{className:"scan-card"},ct.default.createElement("h3",null,e.name),ct.default.createElement("div",{className:"scan-image"},ct.default.createElement("img",{src:t,alt:"Selected CTA slice"}),e.overlay&&ct.default.createElement("img",{src:e.overlay,className:"scan-layer",style:{opacity:i},alt:""}),s&&n&&ct.default.createElement("img",{src:n,className:"scan-layer",alt:""})),e.note&&ct.default.createElement("p",{className:"status"},e.note))}function pD({data:e,setStateValue:t}){let[n,i]=(0,ct.useState)(.5),[s,a]=(0,ct.useState)(!1),[r,o]=(0,ct.useState)(e.controls.index);(0,ct.useEffect)(()=>{o(e.controls.index)},[e.controls.index,e.controls.plane]);function l(){r!==e.controls.index&&t("controls",{...e.controls,index:r})}function c(d){t("controls",{plane:d.target.value,index:null})}function f(d,h){return d==null?"\u2014":Number(d).toFixed(h==="hd95_mm"?2:4)}return ct.default.createElement("div",{className:"research-dashboard","data-theme":e.theme},ct.default.createElement("div",{className:"dashboard-controls"},ct.default.createElement("label",null,"Orientation",ct.default.createElement("select",{value:e.controls.plane,onChange:c},ct.default.createElement("option",null,"Axial"),ct.default.createElement("option",null,"Coronal"),ct.default.createElement("option",null,"Sagittal"))),ct.default.createElement("label",{className:"opacity-control"},"Overlay opacity",ct.default.createElement("input",{type:"range",min:"0",max:"1",step:"0.05",value:n,onChange:d=>i(Number(d.target.value))})),ct.default.createElement("label",{className:"truth-control"},ct.default.createElement("input",{type:"checkbox",checked:s,disabled:!e.reference,onChange:d=>a(d.target.checked)}),"Ground-truth outline")),ct.default.createElement("div",{className:"dashboard-grid"},ct.default.createElement("div",{className:"main-column"},ct.default.createElement("section",{className:"mesh-section"},ct.default.createElement("div",{className:"section-heading"},ct.default.createElement("h3",null,"3D vessels"),ct.default.createElement("span",null,e.meshName)),ct.default.createElement(fD,{mesh:e.mesh,theme:e.theme})),ct.default.createElement("section",{className:"results-card"},ct.default.createElement("h3",null,"Results"),ct.default.createElement("div",{className:"table-scroll"},ct.default.createElement("table",null,ct.default.createElement("thead",null,ct.default.createElement("tr",null,ct.default.createElement("th",null,"Model"),ct.default.createElement("th",null,"Dice \u2191"),ct.default.createElement("th",null,"clDice \u2191"),ct.default.createElement("th",null,"Recall \u2191"),ct.default.createElement("th",null,"HD95 \u2193"))),ct.default.createElement("tbody",null,e.results.map(d=>ct.default.createElement("tr",{key:d.model},ct.default.createElement("td",null,d.model),["dice","cldice","recall","hd95_mm"].map(h=>ct.default.createElement("td",{key:h},f(d[h],h)))))))),ct.default.createElement("p",{className:"status"},"Full-volume case metrics \xB7 HD95 in mm"))),ct.default.createElement("div",{className:"scan-column"},e.predictions.map(d=>ct.default.createElement(dD,{key:d.name,prediction:d,scan:e.scan,reference:e.reference,opacity:n,showTruth:s})),ct.default.createElement("div",{className:"slice-control"},ct.default.createElement("label",{htmlFor:"case-slice"},"Slice ",r+1," / ",e.sliceCount),ct.default.createElement("input",{id:"case-slice",type:"range",min:"0",max:e.sliceCount-1,value:r,disabled:e.sliceCount<=1,onChange:d=>o(Number(d.target.value)),onPointerUp:l,onKeyUp:l,onBlur:l}),r!==e.controls.index&&ct.default.createElement("p",{className:"status"},"Updating selected slice\u2026")))))}function mD({parentElement:e,data:t,setStateValue:n}){let i=C0.get(e);return i||(i=(0,Yb.createRoot)(e.querySelector(".dashboard-root")),C0.set(e,i)),i.render(ct.default.createElement(pD,{data:t,setStateValue:n})),()=>{i.unmount(),C0.delete(e)}}export{mD as default};
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
