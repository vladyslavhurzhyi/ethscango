"use strict";(self.webpackChunkethscango=self.webpackChunkethscango||[]).push([[75],{75:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(861),s=n(439),a=n(757),i=n.n(a),o=n(791),u=n(977),c=n(77),l=n(152),d=n(912),p=function(){var e=(0,r.Z)(i().mark((function e(){var t,n,r,s,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("https://api.coincap.io/v2/assets/ethereum/history?interval=d1");case 3:return t=e.sent,n=t.data,console.log("data.rev",n.data.reverse()),r=n.data.reverse(),s=r.map((function(e){return e})),a=s.slice(330),e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),h=n(184);l.kL.register(l.uw,l.f$,l.od,l.jn,l.u);var f=function(){var e=(0,o.useState)([]),t=(0,s.Z)(e,2),n=t[0],a=t[1],l=(0,o.useState)([]),d=(0,s.Z)(l,2),f=d[0],x=d[1];(0,o.useEffect)((function(){function e(){return e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,a(t.map((function(e){return Math.floor(e.priceUsd)}))),x(t.map((function(e){return(0,u.Z)(e.time,"MM/dd/yyyy")})));case 5:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var v={labels:f.map((function(e){return e})),datasets:[{label:"Price $",data:n.map((function(e){return e})),borderColor:"black",pointBorderWidth:0,borderWidth:2.5,tension:.5}]};return(0,h.jsx)(h.Fragment,{children:n.length>1&&(0,h.jsx)("div",{style:{maxWidth:"300px",maxHeight:"200px"},children:(0,h.jsx)(c.x1,{data:v,options:{responsive:!0,plugins:{},gridLines:!1,scales:{x:{grid:{display:!1}},y:{grid:{display:!1}}}}})})})},x=n(617),v=n(978),m=function(){var e=(0,o.useState)(""),t=(0,s.Z)(e,2),n=t[0],r=t[1];return(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{children:[(0,h.jsx)(v.dvN,{size:"36px",color:"#0b5394"})," ETH Chain Explorer"]}),(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("Query:",n),r("")},children:[(0,h.jsx)("input",{type:"text",name:"query",value:n,autoComplete:"off",placeholder:"Search by Address or Txn Hash",autoFocus:!0,required:!0,onChange:function(e){r(e.currentTarget.value)}}),(0,h.jsx)("button",{type:"submit",children:(0,h.jsx)(x.G4C,{size:"20px",color:"#66161c"})})]})]})};function y(){return(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"text-3xl font-bold underline",children:"EthScanGo"}),(0,h.jsx)(m,{}),(0,h.jsx)("div",{children:(0,h.jsx)(f,{})})]})}}}]);
//# sourceMappingURL=75.670d73d9.chunk.js.map