var A=Object.defineProperty,M=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var b=(s,t,r)=>t in s?A(s,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[t]=r,N=(s,t)=>{for(var r in t||(t={}))W.call(t,r)&&b(s,r,t[r]);if(f)for(var r of f(t))$.call(t,r)&&b(s,r,t[r]);return s},w=(s,t)=>M(s,z(t));import{r as l,a,m as o,j as e,F as x}from"./vendor.71bb7add.js";import{N as H}from"./Notification.c472b7b3.js";import{C as I,s as R}from"./index.9f64425f.js";import{A as v}from"./index.esm.ba826541.js";function D(){const{initLottery:s,lotteryManager:t,lotteryEntryFee:r,lotteryPlayers:d,winner:y,lotteryPrice:u,isLotteryInit:h,startLottery:k,lotteryStatus:i,enterLottery:j,endLottery:E,isEther:C,currentAccount:n}=l.exports.useContext(I),[F,L]=l.exports.useState({lotteryTimeRemaining:0,lotteryManager:null,lotteryEntryFee:0,lotteryPlayers:[],lotteryWinner:null,lotteryPrice:0}),[P,T]=l.exports.useState(!1),[g,_]=l.exports.useState(!1);l.exports.useEffect(()=>{n===t.toLowerCase()&&(n||t.toLowerCase()!==null)&&T(!0)});let m="";y!=="0x0000000000000000000000000000000000000000"&&(m=y),typeof i=="object"&&!Array.isArray(i)&&i!==null&&alert(`Participation Successful! Transaction Hash: ${i.hash} 
 From: ${n}`),console.log("\u{1F480}",h,i,g),l.exports.useEffect(()=>{async function c(){await s(),L(()=>w(N({},F),{lotteryManager:t,lotteryEntryFee:r,lotteryPlayers:d,lotteryPrice:u}))}c()},[]);const p={hidden:{opacity:0,y:300},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:75,delay:.1}}};return a("div",{className:"flex-1 bg-main bg-cover bg-fixed pt-5 space-y-8 text-slate-200",children:[a(o.div,{className:"container bg-zinc-900 mx-auto border border-slate-500 p-4 my-4 rounded-lg max-w-lg",variants:p,initial:"hidden",animate:"visible",children:[a("h1",{className:"antialiased font-medium text-2xl tracking-wide",children:["Lottery Game"," ",i=="1"&&e("span",{className:"text-xs p-2 bg-slate-300 shadow-lg shadow-slate-600 rounded-full text-teal-600 antialiased font-bold",children:"Started"}),i=="2"&&e("span",{className:"text-xs p-2 bg-slate-300 shadow-lg shadow-slate-600 rounded-full text-rose-600 antialiased font-bold",children:"Ended"})]}),a("div",{className:"pt-3",children:[a("h3",{className:"text-sm",children:["Total Players:"," ",e("span",{className:"text-teal-400 text-lg",children:d.length})]}),a("h3",{className:"text-sm",children:["Manager:"," ",e("span",{className:"text-teal-400 text-xs",children:e("a",{href:`https://ropsten.etherscan.io/address/${t}`,target:"_blank",rel:"noreferrer",className:"text-xs tracking-wide uppercase text-teal-400",children:t})})]}),a("h3",{className:"text-sm",children:["Entry Fee:"," ",e("span",{className:" text-teal-400 text-lg",children:+r/10**18})," ","ETH"]}),a("h3",{className:"text-sm",children:["Winning Price:"," ",e("span",{className:"text-teal-400 text-lg",children:u})," ETH"]})]})]}),n?e(o.div,{className:"container mx-auto bg-zinc-900 border border-slate-500 p-5 my-4 rounded-lg max-w-lg",variants:p,initial:"hidden",animate:"visible",children:h?e("div",{className:"container mx-auto",children:P?e(x,{children:e("form",{action:"",children:e("div",{className:"flex justify-center gap-3",children:i!="1"?e("button",{type:"button",className:"px-7 py-2 bg-green-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-green-600",onClick:()=>{k()},children:"Start"}):e("button",{type:"button",className:"px-7 py-2 bg-red-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-red-600",onClick:()=>{E()},children:"End Now"})})})}):e(x,{children:i=="1"&&!g?a("div",{className:"tracking-wider text-slate-200 justify-evenly",children:[a("h6",{className:"text-xs text-red-500 antialiased tracking-widest uppercase font-semibold",children:[" ",e(v,{className:"inline"})," Only Use Ropsten Test Network"]}),a("h1",{className:"pt-4 text-sm text-slate-400 text-justify",children:[" ","The lottery Manager can start the lottery and it will end after the remaining time has passed."]}),e("div",{className:"pt-5 flex justify-center",children:e("button",{type:"button",className:"px-7 py-2 bg-yellow-400 rounded-lg text-slate-800 hover:shadow-lg hover:shadow-yellow-600",disabled:!h,onClick:()=>{j()},children:"Enter"})})]}):a("div",{className:"tracking-wider text-slate-200 justify-evenly",children:[a("h6",{className:"text-xs text-red-500 antialiased tracking-widest uppercase font-semibold",children:[" ",e(v,{className:"inline"})," Only Use Ropsten Test Network"]}),a("h1",{className:"pt-4 text-sm text-slate-400 text-justify",children:[" ","The lottery Manager will start the lottery soon don't forget to participate to win the prize money."]})]})})}):e("div",{className:"bg-zinc-900 flex-1 items-center py-4 flex justify-center",children:e("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"})})}):e(o.div,{className:"container mx-auto bg-zinc-900 border border-slate-500 p-5 my-4 rounded-lg max-w-lg",variants:p,initial:"hidden",animate:"visible",children:e("div",{className:"flex flex-row gap-2 antialiased tracking-wider text-slate-200 justify-evenly",children:"\u26A0\uFE0F Connect your wallet to participate in the lottery"})}),n&&a(x,{children:[d.length>1?a(o.div,{className:"container mx-auto border border-slate-700 text-slate-400 light-gradient p-4 my-4 rounded-lg max-w-lg",initial:{opacity:0},animate:{opacity:1},transition:{duration:2.1},children:[e("h1",{className:"antialiased font-medium text-2xl tracking-wide",children:"Players"}),d.map((c,S)=>e("p",{className:"pt-3 text-teal-400",children:e("a",{href:`https://ropsten.etherscan.io/address/${c}`,target:"_blank",rel:"noreferrer",className:"tracking-wide uppercase text-teal-400 hover:cursor-pointer",children:R(c)})},S))]}):"",i=="2"?a(o.div,{className:"container mx-auto border border-slate-700 text-slate-400 light-gradient p-4 my-4 rounded-lg max-w-lg",initial:{opacity:0},animate:{opacity:1},transition:{duration:2.1},children:[e("h1",{className:"antialiased font-medium text-2xl tracking-wide",children:"Winner"}),e("p",{className:"pt-3 text-teal-400 hover:cursor-pointer",children:e("a",{href:`https://ropsten.etherscan.io/address/${m}`,target:"_blank",rel:"noreferrer",className:"tracking-wide uppercase text-teal-400 hover:cursor-pointer",children:m})})]}):" "]}),e(H,{props:{id:"Lottery",isEther:C,account:n}})]})}export{D as default};
