(self.webpackChunkethscango=self.webpackChunkethscango||[]).push([[483],{5862:function(e,t,n){"use strict";n.d(t,{Jp:function(){return d},SB:function(){return x},_L:function(){return u},nw:function(){return h},o3:function(){return f},sb:function(){return p}});var r=n(5861),s=n(7757),a=n.n(s),c=n(1912),i=n(4527),l=n(9601),o=i.yl("homestead",{etherscan:"RRGX2T9UHU34WNT1V78GWJMGFSUKFFX6ID",infura:"80a2cde872574b6380285aedb7c3fc77",alchemy:"NGRnDW4RdxfHH_ZgkWkvds6I3wiEQcGi"}),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,s,c,i,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.getTransaction(t);case 3:if(n=e.sent){e.next=6;break}return e.abrupt("return",null);case 6:return r=n.hash,s=n.blockNumber,c=n.from,i=n.to,u=n.value,e.abrupt("return",{hash:r,blockNumber:s,from:c,to:i,value:l.dF(u._hex)});case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.getBlockWithTransactions();case 3:return t=e.sent,n=t.transactions.slice(0,10),e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.getBalance(t);case 3:return n=e.sent,r=l.dF(n._hex),e.abrupt("return",r.slice(0,7));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.getGasPrice();case 3:return t=e.sent,n=l.bM(t,"gwei"),e.abrupt("return",Number(n));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD");case 3:return t=e.sent,n=t.data,e.abrupt("return",Number(n.USD));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.getBlockNumber();case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},1052:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(5861),s=n(9439),a=n(7757),c=n.n(a),i=n(2791),l=n(8977),o=n(3077),u=n(5967),d=n(1912),p=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("https://api.coincap.io/v2/assets/ethereum/history?interval=d1");case 3:return t=e.sent,n=t.data.data,r=n.map((function(e){return e})),s=r.slice(330),e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),f=n(184);u.kL.register(u.uw,u.f$,u.od,u.jn,u.u);var x=function(){var e=(0,i.useState)([]),t=(0,s.Z)(e,2),n=t[0],a=t[1],u=(0,i.useState)([]),d=(0,s.Z)(u,2),x=d[0],h=d[1];(0,i.useEffect)((function(){function e(){return e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,a(t.map((function(e){return Math.floor(e.priceUsd)}))),h(t.map((function(e){return(0,l.Z)(e.time,"MM/dd/yyyy")})));case 5:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var m={labels:x.map((function(e){return e})),datasets:[{label:"Price $",data:n.map((function(e){return e})),borderColor:"black",pointBorderWidth:0,pointBackgroundColor:"transparent",borderWidth:2.5,tension:.5}]};return(0,f.jsx)(f.Fragment,{children:n.length>1&&(0,f.jsx)("div",{style:{maxWidth:"300px",maxHeight:"200px"},children:(0,f.jsx)(o.x1,{data:m,options:{responsive:!0,plugins:{},gridLines:!1,scales:{x:{grid:{display:!1}},y:{grid:{display:!1}}}}})})})},h=n(5862),m=n(978),v=function(){var e=(0,i.useState)([]),t=(0,s.Z)(e,2),n=t[0],a=t[1];return(0,i.useEffect)((function(){function e(){return e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.nw)();case 2:t=e.sent,a(t),console.log("inside component",t);case 5:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,f.jsxs)("div",{className:"flex items-center  m-1 p-4 w-1/4 border border-solid border-indigo-500/75 rounded",children:[(0,f.jsx)(m.hY9,{className:"mr-2 text-purple-600",size:48}),(0,f.jsxs)("div",{className:"flex justify-between w-full",children:[(0,f.jsx)("h3",{className:"w-40 text-lg",children:"The most recently mined block"}),(0,f.jsx)("p",{className:"text-lg font-bold",children:n})]})]})},b=n(6907),w=n(7693),j=n(2147),g={background:{color:"#065f46"},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},retina_detect:!0,fullScreen:{enable:!1}},y=n(8617),N=function(){var e=(0,i.useState)(""),t=(0,s.Z)(e,2),n=t[0],r=t[1];return(0,f.jsxs)("div",{className:"relative w-full md:w-2/3 lg:w-2/4 my-11 md:ml-10  dark:text-white ",children:[(0,f.jsxs)("h2",{className:"flex items-center text-2xl leading-relaxed py-2 mr-4 whitespace-nowrap ",children:[(0,f.jsx)(m.dvN,{className:"mr-1 text-purple-600",size:36})," ETH Chain Explorer"]}),(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("Query:",n),r("")},className:"flex items-center",children:[(0,f.jsx)("input",{className:"w-full pl-2 h-9 rounded outline-none dark:text-black ",type:"text",name:"query",value:n,autoComplete:"off",placeholder:"Search by Address or Txn Hash",autoFocus:!0,required:!0,onChange:function(e){r(e.currentTarget.value)}}),(0,f.jsx)("button",{type:"submit",className:"flex justify-center items-center rounded bg-gray-700 ml-1 w-11 h-10",children:(0,f.jsx)(y.G4C,{className:" text-purple-600",size:30})})]})]})},k=function(){var e=(0,i.useCallback)(function(){var e=(0,r.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.R)(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return(0,f.jsxs)("div",{className:"relative p-4",children:[(0,f.jsx)(w.Z,{className:"absolute top-0 left-0 w-full h-full",options:g,init:e}),(0,f.jsx)(N,{})]})},Z=n(7425),E=function(){var e=(0,i.useState)(0),t=(0,s.Z)(e,2),n=t[0],a=t[1];return(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.o3)();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,f.jsx)(f.Fragment,{children:n?(0,f.jsxs)("div",{className:"flex items-center  m-1 p-4 w-1/4 border border-solid border-indigo-500/75 rounded",children:[(0,f.jsx)(Z.wkj,{className:"mr-2 text-purple-600",size:48}),(0,f.jsxs)("div",{className:"flex justify-between w-full",children:[(0,f.jsx)("h3",{className:"w-40 text-lg",children:"MED GAS PRICE"}),(0,f.jsxs)("p",{className:"text-lg font-bold",children:[Math.floor(n)," Gwei"]})]})]}):null})},S=n(6355),_=n(1087),C=function(){var e=(0,i.useState)([]),t=(0,s.Z)(e,2),n=t[0],a=t[1];return(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.Jp)();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("div",{className:"container px-4",children:[(0,f.jsx)("p",{className:"font-bold",children:"Latest Transactions"}),(0,f.jsx)("div",{className:"flex ",children:(0,f.jsxs)("ul",{className:"flex flex-col items-center",children:[n.length>0&&n.map((function(e){return(0,f.jsxs)("li",{className:"border border-solid border-indigo-500/75 rounded mb-2 p-2",children:[(0,f.jsxs)("div",{className:"flex overflow-hidden max-w-sm items-center",children:[(0,f.jsx)(S.ehg,{style:{marginRight:"5px"}}),(0,f.jsx)(_.rU,{to:"transactions/".concat(e.hash),className:"text-ellipsis overflow-hidden text-blue-500 hover:text-blue-900",children:(0,f.jsx)("p",{className:"text-sm text-ellipsis overflow-hidden",children:e.hash})})]}),(0,f.jsxs)("div",{className:"flex flex-col",children:[(0,f.jsx)("p",{className:"text-xs text-ellipsis overflow-hidden",children:"from"}),(0,f.jsx)(_.rU,{to:"address/".concat(e.from),children:(0,f.jsx)("p",{className:"text-xs text-ellipsis overflow-hidden text-blue-500 hover:text-blue-900",children:e.from})}),(0,f.jsx)("p",{className:"text-xs text-ellipsis overflow-hidden",children:"to"}),(0,f.jsx)(_.rU,{to:"address/".concat(e.from),className:"text-ellipsis overflow-hidden text-blue-500 hover:text-blue-900",children:(0,f.jsx)("p",{className:"text-xs",children:e.to})})]})]},e.hash)})),(0,f.jsx)("div",{className:"w-full mx-auto",children:(0,f.jsx)("button",{className:"block w-full text-xs text-sky-500 hover:bg-sky-600 hover:text-slate-50  bg-gray-300 rounded-sm p-1 mb-1",children:"View all transactions"})})]})})]})})},T=function(){var e=(0,r.Z)(c().mark((function e(){var t,n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("https://api.coincap.io/v2/assets");case 3:return t=e.sent,n=t.data.data,r=n[1].marketCapUsd,e.abrupt("return","$"+Math.floor(r));case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=(0,i.useState)(null),t=(0,s.Z)(e,2),n=t[0],a=t[1];return(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,f.jsx)(f.Fragment,{children:n?(0,f.jsxs)("div",{className:"flex items-center  m-1 p-4 w-1/4 border border-solid border-indigo-500/75 rounded",children:[(0,f.jsx)(Z.lct,{className:"mr-2 text-purple-600",size:48}),(0,f.jsxs)("div",{className:"flex justify-between w-full",children:[(0,f.jsx)("h3",{className:"w-40 text-lg",children:"MARKET CAP ETH"}),(0,f.jsx)("p",{className:"text-lg font-bold",children:n})]})]}):null})},z=function(){var e=(0,i.useState)(null),t=(0,s.Z)(e,2),n=t[0],a=t[1];return(0,i.useEffect)((function(){function e(){return(e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.SB)();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,f.jsx)(f.Fragment,{children:n?(0,f.jsxs)("div",{className:"flex items-center  m-1 p-4 w-1/4 border border-solid border-indigo-500/75 rounded",children:[(0,f.jsx)(S.$$w,{className:"mr-2 text-purple-600",size:48}),(0,f.jsxs)("div",{className:"flex justify-between w-full",children:[(0,f.jsx)("h3",{className:"w-40 text-lg",children:"ETHER PRICE"}),(0,f.jsxs)("p",{className:"text-lg font-bold",children:[n,"$"]})]})]}):null})};function H(){return(0,f.jsxs)("div",{children:[(0,f.jsx)(b.ql,{children:(0,f.jsx)("title",{children:"Home"})}),(0,f.jsx)(k,{}),(0,f.jsx)(z,{}),(0,f.jsx)(v,{}),(0,f.jsx)(E,{}),(0,f.jsx)(F,{}),(0,f.jsx)("div",{children:(0,f.jsx)(x,{})}),(0,f.jsx)(C,{})]})}},6601:function(){}}]);
//# sourceMappingURL=483.50f9ec9e.chunk.js.map