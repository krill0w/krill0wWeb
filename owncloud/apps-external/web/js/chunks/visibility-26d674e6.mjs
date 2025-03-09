var p=Object.defineProperty;var E=(o,e,t)=>e in o?p(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var s=(o,e,t)=>(E(o,typeof e!="symbol"?e+"":e,t),t);import{d,c as f,f as m,g,o as v,aW as b,C as x,D as C,I as D,V as M,aX as n,A as S}from"./vendor-2c44cb30.mjs";import{_ as T,k as _}from"./eventBus-bf81ca73.mjs";import{u as I}from"./useStore-acb4016c.mjs";const F=d({name:"AppLoadingSpinner"}),R={class:"oc-flex oc-flex-middle oc-flex-center oc-height-1-1 oc-width-1-1"};function w(o,e,t,r,i,u){const a=g("oc-spinner");return v(),f("div",R,[m(a,{id:"app-loading-spinner",size:"large","aria-hidden":!0,"aria-label":""})])}const B=T(F,[["render",w]]),H=()=>b(),N=()=>_("$previewService"),V=()=>{const o=I(),{$gettext:e}=x();return{checkSpaceNameModalInput:r=>{if(r.trim()==="")return o.dispatch("setModalInputErrorMessage",e("Space name cannot be empty"));if(r.length>255)return o.dispatch("setModalInputErrorMessage",e("Space name cannot exceed 255 characters"));if(/[/\\.:?*"><|]/.test(r))return o.dispatch("setModalInputErrorMessage",e(`Space name cannot contain the following characters: / \\\\ . : ? * " > < |'`));o.dispatch("setModalInputErrorMessage",null)}}},q=(o="")=>{const e=C(0),t=async()=>{await M();const r=document.querySelector(o||"#files-app-bar"),i=r?r.getBoundingClientRect().height:0;e.value!==i&&(e.value=i)};return window.onresize=t,D(t),{y:e,refresh:t}},J=(o,e,t)=>{var a;const r=t.$el.getBoundingClientRect(),u=e.clientY===0?((a=e.srcElement)==null?void 0:a.getBoundingClientRect().top)||0:e.clientY;o.setProps({getReferenceClientRect:()=>({width:0,height:0,top:u,bottom:u,left:e.type==="contextmenu"?e.clientX:r.x,right:e.type==="contextmenu"?e.clientX:r.x})}),o.show()},h=o=>(o||"").split("_")[0],c=(o,e,t=n.DATETIME_MED)=>o.setLocale(h(e)).toLocaleString(t),k=(o,e,t=n.DATETIME_MED)=>c(n.fromJSDate(o),e,t),z=(o,e,t=n.DATETIME_MED)=>c(n.fromHTTP(o),e,t),W=(o,e,t=n.DATETIME_MED)=>c(n.fromISO(o),e,t),X=(o,e,t=n.DATETIME_MED)=>c(n.fromRFC2822(o),e,t),l=(o,e)=>o.setLocale(h(e)).toRelative(),K=(o,e)=>l(n.fromJSDate(o),e),Y=(o,e)=>l(n.fromHTTP(o),e),j=(o,e)=>l(n.fromISO(o),e),G=(o,e)=>l(n.fromRFC2822(o),e),O=1048576,Q=(o,e)=>{const t=typeof o=="string"?parseInt(o):o;return t<0?"":isNaN(t)?"?":S(t,{round:t<O?0:1,locale:h(e)})},U={ignoreLocation:!0,threshold:0,useExtendedSearch:!0};class y{constructor(e,t,r){s(this,"state");s(this,"observeEnter");s(this,"observeExit");s(this,"onEnterCallCount");s(this,"onExitCallCount");s(this,"onEnter");s(this,"onExit");s(this,"threshold");s(this,"unobserver");this.unobserver=e,this.threshold=t,this.onEnter=r.onEnter,this.onExit=r.onExit,this.observeEnter=!!r.onEnter,this.observeExit=!!r.onExit,this.onEnterCallCount=0,this.onExitCallCount=0}request(e,t){const r={element:t,unobserve:()=>this.unobserve(e,t)};e===0&&this.observeEnter&&this.onEnter?(this.onEnterCallCount++,this.onEnter({callCount:this.onEnterCallCount,...r})):this.state===0&&e===1&&this.observeExit&&this.onExit&&(this.onExitCallCount++,this.onExit({callCount:this.onExitCallCount,...r})),this.state=e}unobserve(e,t){e===0?this.observeEnter=!1:e===1&&(this.observeExit=!1),!this.observeEnter&&!this.observeExit&&this.unobserver(t)}}class Z{constructor(e={}){s(this,"targets");s(this,"intersectionObserver");s(this,"options");this.options={root:e.root,rootMargin:e.rootMargin,threshold:e.threshold||0},this.targets=new WeakMap,this.intersectionObserver=new IntersectionObserver(this.trigger.bind(this),this.options)}observe(e,t={},r){!t.onEnter&&!t.onExit||(this.targets.set(e,new y(this.unobserve.bind(this),r||this.options.threshold||0,{onEnter:t.onEnter,onExit:t.onExit})),this.intersectionObserver.observe(e))}unobserve(e){this.targets.delete(e),this.intersectionObserver.unobserve(e)}disconnect(){this.targets=new WeakMap,this.intersectionObserver.disconnect()}trigger(e){e.forEach(t=>{const r=this.targets.get(t.target);r&&r.request(t.isIntersecting&&t.intersectionRatio>r.threshold?0:1,t.target)})}}export{B as A,Z as V,J as a,z as b,W as c,U as d,k as e,c as f,X as g,Q as h,l as i,Y as j,j as k,K as l,G as m,h as n,q as o,N as p,V as q,H as u};
