(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[410],{500:()=>{},861:()=>{},2307:()=>{},2564:()=>{},2944:()=>{},3095:(t,e,n)=>{"use strict";n.d(e,{n:()=>d});var r=n(8813),i=n(3760),o=n(3213),u=n(1542),s=n(468),a=class extends u.Q{#t;#e=void 0;#n;#r;constructor(t,e){super(),this.#t=t,this.setOptions(e),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){let e=this.options;this.options=this.#t.defaultMutationOptions(t),(0,s.f8)(this.options,e)||this.#t.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#n,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,s.EN)(e.mutationKey)!==(0,s.EN)(this.options.mutationKey)?this.reset():this.#n?.state.status==="pending"&&this.#n.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#n?.removeObserver(this)}onMutationUpdate(t){this.#i(),this.#o(t)}getCurrentResult(){return this.#e}reset(){this.#n?.removeObserver(this),this.#n=void 0,this.#i(),this.#o()}mutate(t,e){return this.#r=e,this.#n?.removeObserver(this),this.#n=this.#t.getMutationCache().build(this.#t,this.options),this.#n.addObserver(this),this.#n.execute(t)}#i(){let t=this.#n?.state??(0,i.$)();this.#e={...t,isPending:"pending"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset}}#o(t){o.j.batch(()=>{if(this.#r&&this.hasListeners()){let e=this.#e.variables,n=this.#e.context;t?.type==="success"?(this.#r.onSuccess?.(t.data,e,n),this.#r.onSettled?.(t.data,null,e,n)):t?.type==="error"&&(this.#r.onError?.(t.error,e,n),this.#r.onSettled?.(void 0,t.error,e,n))}this.listeners.forEach(t=>{t(this.#e)})})}},c=n(5785),l=n(7550);function d(t,e){let n=(0,c.jE)(e),[i]=r.useState(()=>new a(n,t));r.useEffect(()=>{i.setOptions(t)},[i,t]);let u=r.useSyncExternalStore(r.useCallback(t=>i.subscribe(o.j.batchCalls(t)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),s=r.useCallback((t,e)=>{i.mutate(t,e).catch(l.l)},[i]);if(u.error&&(0,l.G)(i.options.throwOnError,[u.error]))throw u.error;return{...u,mutate:s,mutateAsync:u.mutate}}},3760:(t,e,n)=>{"use strict";n.d(e,{$:()=>s,s:()=>u});var r=n(3213),i=n(9916),o=n(6976),u=class extends i.k{#u;#s;#a;constructor(t){super(),this.mutationId=t.mutationId,this.#s=t.mutationCache,this.#u=[],this.state=t.state||s(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#u.includes(t)||(this.#u.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#u=this.#u.filter(e=>e!==t),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#u.length||("pending"===this.state.status?this.scheduleGc():this.#s.remove(this))}continue(){return this.#a?.continue()??this.execute(this.state.variables)}async execute(t){this.#a=(0,o.II)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#c({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#c({type:"pause"})},onContinue:()=>{this.#c({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#s.canRun(this)});let e="pending"===this.state.status,n=!this.#a.canStart();try{if(!e){this.#c({type:"pending",variables:t,isPaused:n}),await this.#s.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#c({type:"pending",context:e,variables:t,isPaused:n})}let r=await this.#a.start();return await this.#s.config.onSuccess?.(r,t,this.state.context,this),await this.options.onSuccess?.(r,t,this.state.context),await this.#s.config.onSettled?.(r,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(r,null,t,this.state.context),this.#c({type:"success",data:r}),r}catch(e){try{throw await this.#s.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#s.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#c({type:"error",error:e})}}finally{this.#s.runNext(this)}}#c(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),r.j.batch(()=>{this.#u.forEach(e=>{e.onMutationUpdate(t)}),this.#s.notify({mutation:this,type:"updated",action:t})})}};function s(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},5413:()=>{},6231:(t,e,n)=>{"use strict";n.d(e,{A:()=>M});var r=n(8813);function i(t){return"[object Object]"===Object.prototype.toString.call(t)||Array.isArray(t)}function o(t,e){let n=Object.keys(t),r=Object.keys(e);return n.length===r.length&&JSON.stringify(Object.keys(t.breakpoints||{}))===JSON.stringify(Object.keys(e.breakpoints||{}))&&n.every(n=>{let r=t[n],u=e[n];return"function"==typeof r?`${r}`==`${u}`:i(r)&&i(u)?o(r,u):r===u})}function u(t){return t.concat().sort((t,e)=>t.name>e.name?1:-1).map(t=>t.options)}function s(t){return"number"==typeof t}function a(t){return"string"==typeof t}function c(t){return"boolean"==typeof t}function l(t){return"[object Object]"===Object.prototype.toString.call(t)}function d(t){return Math.abs(t)}function f(t){return Math.sign(t)}function h(t){return y(t).map(Number)}function p(t){return t[m(t)]}function m(t){return Math.max(0,t.length-1)}function g(t,e=0){return Array.from(Array(t),(t,n)=>e+n)}function y(t){return Object.keys(t)}function v(t,e){return void 0!==e.MouseEvent&&t instanceof e.MouseEvent}function b(){let t=[],e={add:function(n,r,i,o={passive:!0}){let u;return"addEventListener"in n?(n.addEventListener(r,i,o),u=()=>n.removeEventListener(r,i,o)):(n.addListener(i),u=()=>n.removeListener(i)),t.push(u),e},clear:function(){t=t.filter(t=>t())}};return e}function x(t=0,e=0){let n=d(t-e);function r(n){return n<t||n>e}return{length:n,max:e,min:t,constrain:function(n){return r(n)?n<t?t:e:n},reachedAny:r,reachedMax:function(t){return t>e},reachedMin:function(e){return e<t},removeOffset:function(t){return n?t-n*Math.ceil((t-e)/n):t}}}function w(t){let e=t;function n(t){return s(t)?t:t.get()}return{get:function(){return e},set:function(t){e=n(t)},add:function(t){e+=n(t)},subtract:function(t){e-=n(t)}}}function O(t,e){let n="x"===t.scroll?function(t){return`translate3d(${t}px,0px,0px)`}:function(t){return`translate3d(0px,${t}px,0px)`},r=e.style,i=null,o=!1;return{clear:function(){o||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))},to:function(e){if(o)return;let u=Math.round(100*t.direction(e))/100;u!==i&&(r.transform=n(u),i=u)},toggleActive:function(t){o=!t}}}let S={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function E(t,e,n){let r,i,o,u,M;let C=t.ownerDocument,k=C.defaultView,A=function(t){function e(t,e){return function t(e,n){return[e,n].reduce((e,n)=>(y(n).forEach(r=>{let i=e[r],o=n[r],u=l(i)&&l(o);e[r]=u?t(i,o):o}),e),{})}(t,e||{})}return{mergeOptions:e,optionsAtMedia:function(n){let r=n.breakpoints||{},i=y(r).filter(e=>t.matchMedia(e).matches).map(t=>r[t]).reduce((t,n)=>e(t,n),{});return e(n,i)},optionsMediaQueries:function(e){return e.map(t=>y(t.breakpoints||{})).reduce((t,e)=>t.concat(e),[]).map(t.matchMedia)}}}(k),R=(M=[],{init:function(t,e){return(M=e.filter(({options:t})=>!1!==A.optionsAtMedia(t).active)).forEach(e=>e.init(t,A)),e.reduce((t,e)=>Object.assign(t,{[e.name]:e}),{})},destroy:function(){M=M.filter(t=>t.destroy())}}),D=b(),j=function(){let t,e={},n={init:function(e){t=e},emit:function(r){return(e[r]||[]).forEach(e=>e(t,r)),n},off:function(t,r){return e[t]=(e[t]||[]).filter(t=>t!==r),n},on:function(t,r){return e[t]=(e[t]||[]).concat([r]),n},clear:function(){e={}}};return n}(),{mergeOptions:I,optionsAtMedia:P,optionsMediaQueries:F}=A,{on:L,off:N,emit:T}=j,H=!1,V=I(S,E.globalOptions),z=I(V),$=[];function U(e,n){!H&&(z=P(V=I(V,e)),$=n||$,function(){let{container:e,slides:n}=z;o=(a(e)?t.querySelector(e):e)||t.children[0];let r=a(n)?o.querySelectorAll(n):n;u=[].slice.call(r||o.children)}(),r=function e(n){let r=function(t,e,n,r,i,o,u){let l,S;let{align:E,axis:M,direction:C,startIndex:k,loop:A,duration:R,dragFree:D,dragThreshold:j,inViewThreshold:I,slidesToScroll:P,skipSnaps:F,containScroll:L,watchResize:N,watchSlides:T,watchDrag:H,watchFocus:V}=o,z={measure:function(t){let{offsetTop:e,offsetLeft:n,offsetWidth:r,offsetHeight:i}=t;return{top:e,right:n+r,bottom:e+i,left:n,width:r,height:i}}},$=z.measure(e),U=n.map(z.measure),B=function(t,e){let n="rtl"===e,r="y"===t,i=!r&&n?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":n?"right":"left",endEdge:r?"bottom":n?"left":"right",measureSize:function(t){let{height:e,width:n}=t;return r?e:n},direction:function(t){return t*i}}}(M,C),G=B.measureSize($),q={measure:function(t){return t/100*G}},K=function(t,e){let n={start:function(){return 0},center:function(t){return function(t){return e-t}(t)/2},end:r};function r(t){return e-t}return{measure:function(r,i){return a(t)?n[t](r):t(e,r,i)}}}(E,G),_=!A&&!!L,{slideSizes:J,slideSizesWithGaps:Q,startGap:X,endGap:Y}=function(t,e,n,r,i,o){let{measureSize:u,startEdge:s,endEdge:a}=t,c=n[0]&&i,l=function(){if(!c)return 0;let t=n[0];return d(e[s]-t[s])}(),f=c?parseFloat(o.getComputedStyle(p(r)).getPropertyValue(`margin-${a}`)):0,h=n.map(u),g=n.map((t,e,n)=>{let r=e===m(n);return e?r?h[e]+f:n[e+1][s]-t[s]:h[e]+l}).map(d);return{slideSizes:h,slideSizesWithGaps:g,startGap:l,endGap:f}}(B,$,U,n,A||!!L,i),W=function(t,e,n,r,i,o,u,a,c){let{startEdge:l,endEdge:f,direction:g}=t,y=s(n);return{groupSlides:function(t){return y?h(t).filter(t=>t%n==0).map(e=>t.slice(e,e+n)):t.length?h(t).reduce((n,s,c)=>{let h=p(n)||0,y=s===m(t),v=i[l]-o[h][l],b=i[l]-o[s][f],x=r||0!==h?0:g(u),w=d(b-(!r&&y?g(a):0)-(v+x));return c&&w>e+2&&n.push(s),y&&n.push(t.length),n},[]).map((e,n,r)=>{let i=Math.max(r[n-1]||0);return t.slice(i,e)}):[]}}}(B,G,P,A,$,U,X,Y,0),{snaps:Z,snapsAligned:tt}=function(t,e,n,r,i){let{startEdge:o,endEdge:u}=t,{groupSlides:s}=i,a=s(r).map(t=>p(t)[u]-t[0][o]).map(d).map(e.measure),c=r.map(t=>n[o]-t[o]).map(t=>-d(t)),l=s(c).map(t=>t[0]).map((t,e)=>t+a[e]);return{snaps:c,snapsAligned:l}}(B,K,$,U,W),te=-p(Z)+p(Q),{snapsContained:tn,scrollContainLimit:tr}=function(t,e,n,r,i){let o=x(-e+t,0),u=n.map((t,e)=>{let{min:r,max:i}=o,u=o.constrain(t),s=e===m(n);return e?s||function(t,e){return 1>=d(t-e)}(r,u)?r:function(t,e){return 1>=d(t-e)}(i,u)?i:u:i}).map(t=>parseFloat(t.toFixed(3))),s=function(){let t=u[0],e=p(u);return x(u.lastIndexOf(t),u.indexOf(e)+1)}();function a(t,e){return 1>=d(t-e)}return{snapsContained:function(){if(e<=t+2)return[o.max];if("keepSnaps"===r)return u;let{min:n,max:i}=s;return u.slice(n,i)}(),scrollContainLimit:s}}(G,te,tt,L,2),ti=_?tn:tt,{limit:to}=function(t,e,n){let r=e[0];return{limit:x(n?r-t:p(e),r)}}(te,ti,A),tu=function t(e,n,r){let{constrain:i}=x(0,e),o=e+1,u=s(n);function s(t){return r?d((o+t)%o):i(t)}function a(){return t(e,u,r)}let c={get:function(){return u},set:function(t){return u=s(t),c},add:function(t){return a().set(u+t)},clone:a};return c}(m(ti),k,A),ts=tu.clone(),ta=h(n),tc=({dragHandler:t,scrollBody:e,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(t.pointerDown()),e.seek()},tl=({scrollBody:t,translate:e,location:n,offsetLocation:r,previousLocation:i,scrollLooper:o,slideLooper:u,dragHandler:s,animation:a,eventHandler:c,scrollBounds:l,options:{loop:d}},f)=>{let h=t.settled(),p=!l.shouldConstrain(),m=d?h:h&&p;m&&!s.pointerDown()&&(a.stop(),c.emit("settle")),m||c.emit("scroll");let g=n.get()*f+i.get()*(1-f);r.set(g),d&&(o.loop(t.direction()),u.loop()),e.to(r.get())},td=function(t,e,n,r){let i=b(),o=1e3/60,u=null,s=0,a=0;function c(t){if(!a)return;u||(u=t,n(),n());let i=t-u;for(u=t,s+=i;s>=o;)n(),s-=o;r(s/o),a&&(a=e.requestAnimationFrame(c))}function l(){e.cancelAnimationFrame(a),u=null,s=0,a=0}return{init:function(){i.add(t,"visibilitychange",()=>{t.hidden&&(u=null,s=0)})},destroy:function(){l(),i.clear()},start:function(){a||(a=e.requestAnimationFrame(c))},stop:l,update:n,render:r}}(r,i,()=>tc(tM),t=>tl(tM,t)),tf=ti[tu.get()],th=w(tf),tp=w(tf),tm=w(tf),tg=w(tf),ty=function(t,e,n,r,i,o){let u=0,s=0,a=i,c=.68,l=t.get(),h=0;function p(t){return a=t,g}function m(t){return c=t,g}let g={direction:function(){return s},duration:function(){return a},velocity:function(){return u},seek:function(){let e=r.get()-t.get(),i=0;return a?(n.set(t),u+=e/a,u*=c,l+=u,t.add(u),i=l-h):(u=0,n.set(r),t.set(r),i=e),s=f(i),h=l,g},settled:function(){return .001>d(r.get()-e.get())},useBaseFriction:function(){return m(.68)},useBaseDuration:function(){return p(i)},useFriction:m,useDuration:p};return g}(th,tm,tp,tg,R,.68),tv=function(t,e,n,r,i){let{reachedAny:o,removeOffset:u,constrain:s}=r;function a(t){return t.concat().sort((t,e)=>d(t)-d(e))[0]}function c(e,r){let i=[e,e+n,e-n];if(!t)return e;if(!r)return a(i);let o=i.filter(t=>f(t)===r);return o.length?a(o):p(i)-n}return{byDistance:function(n,r){let a=i.get()+n,{index:l,distance:f}=function(n){let r=t?u(n):s(n),{index:i}=e.map((t,e)=>({diff:c(t-r,0),index:e})).sort((t,e)=>d(t.diff)-d(e.diff))[0];return{index:i,distance:r}}(a),h=!t&&o(a);if(!r||h)return{index:l,distance:n};let p=n+c(e[l]-f,0);return{index:l,distance:p}},byIndex:function(t,n){let r=c(e[t]-i.get(),n);return{index:t,distance:r}},shortcut:c}}(A,ti,te,to,tg),tb=function(t,e,n,r,i,o,u){function s(i){let s=i.distance,a=i.index!==e.get();o.add(s),s&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),a&&(n.set(e.get()),e.set(i.index),u.emit("select"))}return{distance:function(t,e){s(i.byDistance(t,e))},index:function(t,n){let r=e.clone().set(t);s(i.byIndex(r.get(),n))}}}(td,tu,ts,ty,tv,tg,u),tx=function(t){let{max:e,length:n}=t;return{get:function(t){return n?-((t-e)/n):0}}}(to),tw=b(),tO=function(t,e,n,r){let i;let o={},u=null,s=null,a=!1;return{init:function(){i=new IntersectionObserver(t=>{a||(t.forEach(t=>{o[e.indexOf(t.target)]=t}),u=null,s=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(t=>i.observe(t))},destroy:function(){i&&i.disconnect(),a=!0},get:function(t=!0){if(t&&u)return u;if(!t&&s)return s;let e=y(o).reduce((e,n)=>{let r=parseInt(n),{isIntersecting:i}=o[r];return(t&&i||!t&&!i)&&e.push(r),e},[]);return t&&(u=e),t||(s=e),e}}}(e,n,u,I),{slideRegistry:tS}=function(t,e,n,r,i,o){let{groupSlides:u}=i,{min:s,max:a}=r;return{slideRegistry:function(){let r=u(o);return 1===n.length?[o]:t&&"keepSnaps"!==e?r.slice(s,a).map((t,e,n)=>{let r=e===m(n);return e?r?g(m(o)-p(n)[0]+1,p(n)[0]):t:g(p(n[0])+1)}):r}()}}(_,L,ti,tr,W,ta),tE=function(t,e,n,r,i,o,u,a){let l={passive:!0,capture:!0},d=0;function f(t){"Tab"===t.code&&(d=new Date().getTime())}return{init:function(h){a&&(o.add(document,"keydown",f,!1),e.forEach((e,f)=>{o.add(e,"focus",e=>{(c(a)||a(h,e))&&function(e){if(new Date().getTime()-d>10)return;u.emit("slideFocusStart"),t.scrollLeft=0;let o=n.findIndex(t=>t.includes(e));s(o)&&(i.useDuration(0),r.index(o,0),u.emit("slideFocus"))}(f)},l)}))}}}(t,n,tS,tb,ty,tw,u,V),tM={ownerDocument:r,ownerWindow:i,eventHandler:u,containerRect:$,slideRects:U,animation:td,axis:B,dragHandler:function(t,e,n,r,i,o,u,s,a,l,h,p,m,g,y,w,O,S,E){let{cross:M,direction:C}=t,k=["INPUT","SELECT","TEXTAREA"],A={passive:!1},R=b(),D=b(),j=x(50,225).constrain(g.measure(20)),I={mouse:300,touch:400},P={mouse:500,touch:600},F=y?43:25,L=!1,N=0,T=0,H=!1,V=!1,z=!1,$=!1;function U(t){if(!v(t,r)&&t.touches.length>=2)return B(t);let e=o.readPoint(t),n=o.readPoint(t,M),u=d(e-N),a=d(n-T);if(!V&&!$&&(!t.cancelable||!(V=u>a)))return B(t);let c=o.pointerMove(t);u>w&&(z=!0),l.useFriction(.3).useDuration(.75),s.start(),i.add(C(c)),t.preventDefault()}function B(t){let e=h.byDistance(0,!1).index!==p.get(),n=o.pointerUp(t)*(y?P:I)[$?"mouse":"touch"],r=function(t,e){let n=p.add(-1*f(t)),r=h.byDistance(t,!y).distance;return y||d(t)<j?r:O&&e?.5*r:h.byIndex(n.get(),0).distance}(C(n),e),i=function(t,e){var n,r;if(0===t||0===e||d(t)<=d(e))return 0;let i=(n=d(t),r=d(e),d(n-r));return d(i/t)}(n,r);V=!1,H=!1,D.clear(),l.useDuration(F-10*i).useFriction(.68+i/50),a.distance(r,!y),$=!1,m.emit("pointerUp")}function G(t){z&&(t.stopPropagation(),t.preventDefault(),z=!1)}return{init:function(t){E&&R.add(e,"dragstart",t=>t.preventDefault(),A).add(e,"touchmove",()=>void 0,A).add(e,"touchend",()=>void 0).add(e,"touchstart",s).add(e,"mousedown",s).add(e,"touchcancel",B).add(e,"contextmenu",B).add(e,"click",G,!0);function s(s){(c(E)||E(t,s))&&function(t){let s=v(t,r);$=s,z=y&&s&&!t.buttons&&L,L=d(i.get()-u.get())>=2,(!s||0===t.button)&&!function(t){let e=t.nodeName||"";return k.includes(e)}(t.target)&&(H=!0,o.pointerDown(t),l.useFriction(0).useDuration(0),i.set(u),function(){let t=$?n:e;D.add(t,"touchmove",U,A).add(t,"touchend",B).add(t,"mousemove",U,A).add(t,"mouseup",B)}(),N=o.readPoint(t),T=o.readPoint(t,M),m.emit("pointerDown"))}(s)}},destroy:function(){R.clear(),D.clear()},pointerDown:function(){return H}}}(B,t,r,i,tg,function(t,e){let n,r;function i(t){return t.timeStamp}function o(n,r){let i=r||t.scroll,o=`client${"x"===i?"X":"Y"}`;return(v(n,e)?n:n.touches[0])[o]}return{pointerDown:function(t){return n=t,r=t,o(t)},pointerMove:function(t){let e=o(t)-o(r),u=i(t)-i(n)>170;return r=t,u&&(n=t),e},pointerUp:function(t){if(!n||!r)return 0;let e=o(r)-o(n),u=i(t)-i(n),s=i(t)-i(r)>170,a=e/u;return u&&!s&&d(a)>.1?a:0},readPoint:o}}(B,i),th,td,tb,ty,tv,tu,u,q,D,j,F,0,H),eventStore:tw,percentOfView:q,index:tu,indexPrevious:ts,limit:to,location:th,offsetLocation:tm,previousLocation:tp,options:o,resizeHandler:function(t,e,n,r,i,o,u){let s,a;let l=[t].concat(r),f=[],h=!1;function p(t){return i.measureSize(u.measure(t))}return{init:function(i){o&&(a=p(t),f=r.map(p),s=new ResizeObserver(n=>{(c(o)||o(i,n))&&function(n){for(let o of n){if(h)return;let n=o.target===t,u=r.indexOf(o.target),s=n?a:f[u];if(d(p(n?t:r[u])-s)>=.5){i.reInit(),e.emit("resize");break}}}(n)}),n.requestAnimationFrame(()=>{l.forEach(t=>s.observe(t))}))},destroy:function(){h=!0,s&&s.disconnect()}}}(e,u,i,n,B,N,z),scrollBody:ty,scrollBounds:function(t,e,n,r,i){let o=i.measure(10),u=i.measure(50),s=x(.1,.99),a=!1;function c(){return!!(!a&&t.reachedAny(n.get())&&t.reachedAny(e.get()))}return{shouldConstrain:c,constrain:function(i){if(!c())return;let a=t.reachedMin(e.get())?"min":"max",l=d(t[a]-e.get()),f=n.get()-e.get(),h=s.constrain(l/u);n.subtract(f*h),!i&&d(f)<o&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(t){a=!t}}}(to,tm,tg,ty,q),scrollLooper:function(t,e,n,r){let{reachedMin:i,reachedMax:o}=x(e.min+.1,e.max+.1);return{loop:function(e){if(!(1===e?o(n.get()):-1===e&&i(n.get())))return;let u=-1*e*t;r.forEach(t=>t.add(u))}}}(te,to,tm,[th,tm,tp,tg]),scrollProgress:tx,scrollSnapList:ti.map(tx.get),scrollSnaps:ti,scrollTarget:tv,scrollTo:tb,slideLooper:function(t,e,n,r,i,o,u,s,a){let c=h(i),l=h(i).reverse(),d=m(p(l,u[0]),n,!1).concat(m(p(c,e-u[0]-1),-n,!0));function f(t,e){return t.reduce((t,e)=>t-i[e],e)}function p(t,e){return t.reduce((t,n)=>f(t,e)>0?t.concat([n]):t,[])}function m(i,u,c){let l=o.map((t,n)=>({start:t-r[n]+.5+u,end:t+e-.5+u}));return i.map(e=>{let r=c?0:-n,i=c?n:0,o=l[e][c?"end":"start"];return{index:e,loopPoint:o,slideLocation:w(-1),translate:O(t,a[e]),target:()=>s.get()>o?r:i}})}return{canLoop:function(){return d.every(({index:t})=>.1>=f(c.filter(e=>e!==t),e))},clear:function(){d.forEach(t=>t.translate.clear())},loop:function(){d.forEach(t=>{let{target:e,translate:n,slideLocation:r}=t,i=e();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:d}}(B,G,te,J,Q,Z,ti,tm,n),slideFocus:tE,slidesHandler:(S=!1,{init:function(t){T&&(l=new MutationObserver(e=>{!S&&(c(T)||T(t,e))&&function(e){for(let n of e)if("childList"===n.type){t.reInit(),u.emit("slidesChanged");break}}(e)})).observe(e,{childList:!0})},destroy:function(){l&&l.disconnect(),S=!0}}),slidesInView:tO,slideIndexes:ta,slideRegistry:tS,slidesToScroll:W,target:tg,translate:O(B,e)};return tM}(t,o,u,C,k,n,j);return n.loop&&!r.slideLooper.canLoop()?e(Object.assign({},n,{loop:!1})):r}(z),F([V,...$.map(({options:t})=>t)]).forEach(t=>D.add(t,"change",B)),z.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(_),r.eventHandler.init(_),r.resizeHandler.init(_),r.slidesHandler.init(_),r.options.loop&&r.slideLooper.loop(),o.offsetParent&&u.length&&r.dragHandler.init(_),i=R.init(_,$)))}function B(t,e){let n=K();G(),U(I({startIndex:n},t),e),j.emit("reInit")}function G(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),R.destroy(),D.clear()}function q(t,e,n){z.active&&!H&&(r.scrollBody.useBaseFriction().useDuration(!0===e?0:z.duration),r.scrollTo.index(t,n||0))}function K(){return r.index.get()}let _={canScrollNext:function(){return r.index.add(1).get()!==K()},canScrollPrev:function(){return r.index.add(-1).get()!==K()},containerNode:function(){return o},internalEngine:function(){return r},destroy:function(){H||(H=!0,D.clear(),G(),j.emit("destroy"),j.clear())},off:N,on:L,emit:T,plugins:function(){return i},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:B,rootNode:function(){return t},scrollNext:function(t){q(r.index.add(1).get(),t,-1)},scrollPrev:function(t){q(r.index.add(-1).get(),t,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:q,selectedScrollSnap:K,slideNodes:function(){return u},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return U(e,n),setTimeout(()=>j.emit("init"),0),_}function M(t={},e=[]){let n=(0,r.useRef)(t),i=(0,r.useRef)(e),[s,a]=(0,r.useState)(),[c,l]=(0,r.useState)(),d=(0,r.useCallback)(()=>{s&&s.reInit(n.current,i.current)},[s]);return(0,r.useEffect)(()=>{o(n.current,t)||(n.current=t,d())},[t,d]),(0,r.useEffect)(()=>{!function(t,e){if(t.length!==e.length)return!1;let n=u(t),r=u(e);return n.every((t,e)=>o(t,r[e]))}(i.current,e)&&(i.current=e,d())},[e,d]),(0,r.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&c){E.globalOptions=M.globalOptions;let t=E(c,n.current,i.current);return a(t),()=>t.destroy()}a(void 0)},[c,a]),[l,s]}E.globalOptions=void 0,M.globalOptions=void 0},8415:()=>{},8956:(t,e,n)=>{"use strict";function r(t){var e=t.match(/^var\((.*)\)$/);return e?e[1]:t}function i(t,e){var n={};if("object"==typeof e)!function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i={};for(var o in e){var u=e[o],s=[...r,o];"string"==typeof u||"number"==typeof u||null==u?i[o]=n(u,s):"object"!=typeof u||Array.isArray(u)?console.warn('Skipping invalid key "'.concat(s.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(u)?"Array":typeof u,'"')):i[o]=t(u,n,s)}return i}(e,(e,i)=>{null!=e&&(n[r(function(t,e){var n=t;for(var r of e){if(!(r in n))throw Error("Path ".concat(e.join(" -> ")," does not exist in object"));n=n[r]}return n}(t,i))]=String(e))});else for(var i in t){var o=t[i];null!=o&&(n[r(i)]=o)}return Object.defineProperty(n,"toString",{value:function(){return Object.keys(this).map(t=>"".concat(t,":").concat(this[t])).join(";")},writable:!1}),n}n.d(e,{D:()=>i})},9334:()=>{},9497:()=>{}}]);