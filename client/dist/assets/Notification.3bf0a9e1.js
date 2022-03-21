import{r as g,d as w,a as l,g as a,j as e,m as o}from"./vendor.e9de0a5c.js";const x=({props:t})=>{const[i,c]=g.exports.useState(!0),n={hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1,transition:{type:"spring",damping:9,delay:1,duration:.3}}};let d=!1;t.id==="Home"&&(d=!0);const r=()=>{c(!1)},h=s=>e(a,{children:e(o.section,{className:"absolute right-10 top-28 m-4",variants:n,initial:"hidden",animate:"visible",children:l("div",{id:"toast-danger",className:"flex items-center w-full max-w-xs p-5 text-gray-200 backdrop-blur-sm bg-slate-900/30 border border-slate-700 rounded-lg shadow-xl",role:"alert",children:[e("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-slate-200 bg-red-700 rounded-lg",children:e("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})}),e("div",{className:"text-sm font-normal antialiased tracking-wide p-2",children:s}),l("button",{type:"button",className:"text-red-700 rounded-lg p-1 transition duration-300 hover:bg-red-800 hover:text-slate-300","data-collapse-toggle":"toast-danger","aria-label":"Close",onClick:()=>{r()},children:[e("span",{className:"sr-only",children:"Close"}),e("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})]})})}),m=s=>e(a,{children:e(o.section,{className:"absolute right-10 top-28",variants:n,initial:"hidden",animate:"visible",children:l("div",{id:"toast-warning",className:"relative flex items-center w-full max-w-xs p-5 \r backdrop-blur-sm bg-slate-600/30\r text-slate-300 bg-slate-500 border border-slate-700 rounded-lg shadow-xl",role:"alert",children:[e("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-slate-200 bg-amber-700 rounded-lg",children:e("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})}),e("div",{className:"text-sm font-normal antialiased tracking-wide p-2",children:s}),l("button",{type:"button",className:"text-red-700 rounded-lg p-1 transition duration-300 hover:bg-red-800 hover:text-slate-300","data-collapse-toggle":"toast-warning","aria-label":"Close",onClick:()=>{r()},children:[e("span",{className:"sr-only",children:"Close"}),e("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})]})})}),u=s=>e(a,{children:e(o.section,{className:"absolute right-10 top-28 m-4",variants:n,initial:"hidden",animate:"visible",children:l("div",{id:"toast-success",className:"flex items-center w-full max-w-xs p-5 text-gray-300 backdrop-blur-lg bg-slate-400/30 border border-slate-700 rounded-lg shadow-xl",role:"alert",children:[e("div",{className:"inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-slate-200 bg-green-700 rounded-lg",children:e("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),e("div",{className:"ml-3 text-sm font-normal antialiased tracking-wide",children:s}),l("button",{type:"button",className:"text-red-700 rounded-lg p-1 transition duration-300 hover:bg-red-800 hover:text-slate-300","data-collapse-toggle":"toast-success","aria-label":"Close",onClick:()=>r(),children:[e("span",{className:"sr-only",children:"Close"}),e("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})]})]})})});return w.createPortal(l(a,{children:[i&&!d&&t.isEther&&!t.account&&e(a,{children:m("Connect your wallet")}),i&&!t.isEther&&e(a,{children:h("Please install MetaMask")}),i&&t.login&&e(a,{children:u("Wallet connected successfully.")})]}),document.getElementById("notification"))};export{x as N};
