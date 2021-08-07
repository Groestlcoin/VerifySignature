(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2274:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var s=t(5893),i=t(7757),a=t.n(i),r=t(2137),c=t(9008),l=t(3151),o=t.n(l),d=t(367),u=t.n(d),h=t(1664),x="Verify bitcoin address signature online",m="Verify bitcoin address signature online";function f(e){var n=e.children,t=e.home;return(0,s.jsxs)("div",{className:o().container,children:[(0,s.jsxs)(c.default,{children:[(0,s.jsx)("link",{rel:"icon",href:"/VerifySignature/favicon.png"}),(0,s.jsx)("meta",{name:"description",content:x}),(0,s.jsx)("meta",{property:"og:image",content:"https://og-image.vercel.app/".concat(encodeURI(m),".png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg")}),(0,s.jsx)("meta",{name:"og:title",content:m}),(0,s.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,s.jsx)("header",{className:o().header,children:t?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("h1",{className:u().heading2Xl,children:x})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("h2",{className:u().headingLg,children:(0,s.jsx)(h.default,{href:"/",children:(0,s.jsx)("a",{className:u().colorInherit,children:x})})})})}),(0,s.jsx)("main",{children:n}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("footer",{className:"footer mt-auto py-3 bg-light",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("span",{className:"text-muted",children:["This page works offline. ",(0,s.jsx)("a",{href:"https://github.com/BlueWallet/VerifySignature",target:"_blank",children:"Fork me on Github!"})]})," ",(0,s.jsx)("br",{})]})})]})}var g=t(5723),_=t(7294),j=t(1163),p=t(7790),v=t.n(p),b=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",{});case 2:return e.next=4,fetch("https://blockstream.info/api/address/".concat(n));case 4:return t=e.sent,e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();function N(){var e,n,t=(0,j.useRouter)(),i=t.query,a=i.a,r=i.m,l=i.s,o=(0,_.useState)(""),d=o[0],h=o[1],x=(0,_.useState)(""),p=x[0],N=x[1],w=(0,_.useState)(""),y=w[0],k=w[1],S=(0,_.useState)(!1),C=S[0],F=S[1],I=(0,g.ZP)("".concat(d),b),T=I.data;I.error;(0,_.useEffect)((function(){X()}),[d,p,y]),(0,_.useEffect)((function(){a&&h(String(a)),r&&N(String(r)),l&&k(String(l)),X()}),[a,r,l]);var X=function(){F(!1);try{t.push("/?a=".concat(d,"&m=").concat(encodeURIComponent(p),"&s=").concat(encodeURIComponent(y)),null,{shallow:!0});var e=v().verify(p,d,y,null,!0);console.log({message:p,address:d,signature:y,verified:e}),F(e)}catch(n){console.warn(n.message)}};return(0,s.jsxs)(f,{home:!0,children:[(0,s.jsx)(c.default,{children:(0,s.jsx)("title",{children:m})}),(0,s.jsx)("section",{className:"".concat(u().headingMd," ").concat(u().padding1px),children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),X()},children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col",children:"address:"}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)("input",{type:"text",size:29,value:d,onChange:function(e){return h(e.target.value)}})})]}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col",children:"message:"}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)("textarea",{rows:5,cols:30,value:p,onChange:function(e){return N(e.target.value)}})})]}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col",children:"signature:"}),(0,s.jsx)("div",{className:"col",children:(0,s.jsx)("textarea",{rows:5,cols:30,value:y,onChange:function(e){return k(e.target.value)}})})]})]}),(0,s.jsx)("br",{}),(null===T||void 0===T?void 0:T.chain_stats)&&(0,s.jsxs)("span",{children:["address has ",(0,s.jsxs)("i",{children:[((null===T||void 0===T||null===(e=T.chain_stats)||void 0===e?void 0:e.funded_txo_sum)-(null===T||void 0===T||null===(n=T.chain_stats)||void 0===n?void 0:n.spent_txo_sum))/1e8," BTC"]})]}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),C&&(0,s.jsx)("b",{children:"Signature verified!"})||(0,s.jsx)("i",{children:"Signature not verified"})]})})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2274)}])},3151:function(e){e.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",backToHome:"layout_backToHome__1vZsp"}},367:function(e){e.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm"}},9214:function(){},5568:function(){},2361:function(){},4616:function(){},2644:function(){}},function(e){e.O(0,[246,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);