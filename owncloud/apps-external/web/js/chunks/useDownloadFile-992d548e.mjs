import{a0 as g,z as w}from"./useDriveResolver-f387970c.mjs";import{u as C}from"./useAuthService-746ac4ed.mjs";import{u as b}from"./useStore-acb4016c.mjs";import{C as f,v as y,K as d}from"./vendor-2c44cb30.mjs";const u=(t,n)=>{const e=document.createElement("a");e.style.display="none",document.body.appendChild(e),e.href=t,e.setAttribute("download",n),e.click(),document.body.removeChild(e)},D=()=>{const t=b(),n=g({store:t}),e=w(),m=C(),{$gettext:i}=f();return{downloadFile:async(s,l=null)=>{const{owncloudSdk:a}=m,h=t.getters["runtime/auth/isUserContextReady"];let o=null,c={"X-Request-ID":y()};if(d(n)?o=s.downloadURL:(l===null?o=`${a.helpers._davPath}${s.webDavPath}`:o=a.fileVersions.getFileVersionUrl(s.fileId,l),c={Authorization:"Bearer "+t.getters["runtime/auth/accessToken"]}),h&&d(e)){try{if((await fetch(o,{method:"HEAD",headers:c})).status===200){const p=await a.signUrl(o);u(p,s.name);return}}catch(r){console.error(r)}t.dispatch("showMessage",{title:i("Download failed"),desc:i("File could not be located"),status:"danger",autoClose:{enabled:!0}});return}u(o,s.name)}}};export{u as t,D as u};
