(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{197:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),i=t(3),o=t.n(i),l=(t(100),t(101),t(22)),c=t(34),u=r.a.createContext({}),d=function(n){return{type:"setData",payload:n}};d.toString=function(){return"setData"};var s=function(){return{type:"fetching"}};s.toString=function(){return"fetching"};var p=function(n){return{type:"setError",payload:n}};p.toString=function(){return"setError"};var f=function(n){return{type:"sortyBy",payload:n}};f.toString=function(){return"sortyBy"};var m={list:[],sortBy:"download",status:"idle",error:""};var b=function(n,e){switch(e.type){case d.toString():return Object(l.a)({},n,{list:e.payload,status:"fetched"});case s.toString():return Object(l.a)({},n,{status:"fetching"});case p.toString():return Object(l.a)({},n,{status:"error",error:e.payload});case f.toString():return Object(l.a)({},n,{sortBy:e.payload});default:return n}};var g=function(n){var e=n.children,t=Object(a.useReducer)(b,m),i=Object(c.a)(t,2),o=i[0],d=i[1];return r.a.createElement(u.Provider,{value:Object(l.a)({},o,{dispatch:d})},e)},v=t(7),h=t(8);function w(){var n=Object(v.a)(["\n  color: white;\n  &:before {\n    content: '';\n    position: absolute;\n    top: 6px;\n    background: #ff8e00;\n    width: 25px;\n    height: 70%;\n    z-index: -1;\n    transform: translateX(-6px);\n  }\n"]);return w=function(){return n},n}function x(){var n=Object(v.a)(["\n  font-size: 1.5rem;\n  margin: 0;\n  position: relative;\n  text-transform: uppercase;\n  letter-spacing: 10px;\n  color: #797979;\n"]);return x=function(){return n},n}function E(){var n=Object(v.a)(["\n  padding: 20px;\n  border-bottom: 2px solid #eee;\n  text-align: center;\n  margin-bottom: 3rem;\n  img {\n    width: 150px;\n    height: auto;\n  }\n"]);return E=function(){return n},n}var j=h.a.div(E()),O=h.a.h1(x()),y=h.a.span(w());var S=function(){return r.a.createElement(j,null,r.a.createElement(O,null,r.a.createElement(y,null,"T"),"arifer"))},k=t(93),q=t.n(k),z=[{id:"5c4e2805f17777a2521af955",name:"reprehenderit",download:26,upload:3,price:204,benefits:["nulla id","qui mollit","quis aute","cupidatat velit","irure sunt"]},{id:"5c4e28052915af6ed7162489",name:"qui",download:11,upload:3,price:199,benefits:["eiusmod mollit","exercitation nulla","dolor enim"]},{id:"5c4e280591e5cbfc67c047e6",name:"consectetur",download:36,upload:11,price:95,benefits:["elit duis","veniam id","ut incididunt"]},{id:"5c4e2805c4afb9b1587a5da7",name:"enim",download:18,upload:11,price:300,benefits:["dolor excepteur","id adipisicing","Lorem consequat","sunt minim","ullamco tempor"]},{id:"5c4e2805cf0f7219bc5737d0",name:"consectetur",download:6,upload:3,price:206,benefits:["enim deserunt","minim aliquip","enim ea"]},{id:"5c4e2805afa8cb330d3667bf",name:"nostrud",download:19,upload:6,price:135,benefits:["nostrud eu","quis voluptate","amet magna"]},{id:"5c4e28056e6da18b6766e39d",name:"est",download:29,upload:5,price:260,benefits:["laboris do","labore irure","veniam labore","anim quis","duis fugiat"]},{id:"5c4e28057d1dbb3efd08f921",name:"dolore",download:12,upload:6,price:58,benefits:["ad dolore","aliquip nostrud","amet in","do ut"]},{id:"5c4e2805444c5831fdd05849",name:"deserunt",download:8,upload:4,price:170,benefits:["duis ea","culpa proident","cillum et","ad excepteur","aliqua consequat"]},{id:"5c4e2805fef61d6bdf5df0fb",name:"elit",download:22,upload:2,price:269,benefits:["velit qui","sunt laboris","aliquip enim","eiusmod et"]},{id:"5c4e2805a4b0d3d9401fbb12",name:"duis",download:29,upload:6,price:220,benefits:["id duis","sunt laboris","nisi laboris","eiusmod occaecat","est ipsum"]},{id:"5c4e2805c3389db9da9d951f",name:"ullamco",download:6,upload:14,price:179,benefits:["fugiat et","non anim","nostrud voluptate"]},{id:"5c4e28052019e544ce0e91a7",name:"pariatur",download:14,upload:1,price:295,benefits:["anim cillum","dolore aliquip","culpa irure","consequat deserunt","enim veniam"]},{id:"5c4e28053933225fa70515a9",name:"et",download:9,upload:4,price:249,benefits:["laboris sint","ad consectetur","commodo est","nostrud id","dolore dolor"]}],C=function(){return new Promise(function(n){var e=1700*window.Math.random()+300;window.setTimeout(function(){return n(z)},e)})},M=t(89),B=t.n(M),D=t(64),W=t.n(D);function J(){var n=Object(v.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 15px;\n  margin: 3rem 0 1rem;\n  align-items: center;\n  justify-content: space-between;\n\n  span {\n    font-weight: bold;\n    white-space: nowrap;\n    padding-right: 8px;\n  }\n\n  .ant-input-search .anticon-close-circle {\n    padding-right: 5px;\n  }\n"]);return J=function(){return n},n}function L(){var n=Object(v.a)(["\n  display: flex;\n  align-items: center;\n"]);return L=function(){return n},n}var P=B.a.Search,T=W.a.Option,U=[{value:"download",children:"Download Speed"},{value:"upload",children:"Upload Speed"}].map(function(n){return r.a.createElement(T,Object.assign({},n,{key:n.value}))}),_=h.a.div(L()),F=h.a.div(J());var I=function(n){var e=n.onSortChange,t=n.onSearchChange;return r.a.createElement(F,null,r.a.createElement(_,null,r.a.createElement(P,{placeholder:"Search tariff name",onChange:function(n){var e=n.target;return t(e.value)},style:{width:"100%",minWidth:"100px"},allowClear:!0})),r.a.createElement(_,null,r.a.createElement("span",null,"Sort by: "),r.a.createElement(W.a,{style:{width:"100%"},defaultValue:"download",onChange:e},U)))},N=t(13),R=t.n(N);function V(){var n=Object(v.a)(["\n  @media (min-width: ","px) {\n    display: none;\n  }\n"]);return V=function(){return n},n}function X(){var n=Object(v.a)(["\n  display: none;\n\n  @media (min-width: ","px) {\n    display: block;\n  }\n"]);return X=function(){return n},n}function Y(){var n=Object(v.a)(["\n  display: none;\n\n  @media (min-width: ","px) {\n    display: block;\n  }\n"]);return Y=function(){return n},n}var $=500,A=700,G=h.a.div(Y(),$),H=h.a.div(X(),A),K=h.a.div(V(),$);function Q(){var n=Object(v.a)(["\n  margin-top: 10px;\n  text-align: right;\n"]);return Q=function(){return n},n}function Z(){var n=Object(v.a)(["\n  padding: 10px 14px;\n  background: transparent;\n  border: 1px solid #ff8e00;\n  color: #ff8e00;\n  display: inline-block;\n  text-align: center;\n  width: 100%;\n  max-width: 160px;\n  transition: all 150ms ease-in;\n\n  &:hover {\n    background: #ff8e00;\n    border-color: transparent;\n    color: white;\n  }\n"]);return Z=function(){return n},n}function nn(){var n=Object(v.a)(["\n  font-weight: bold;\n  text-align: right;\n  font-size: 1.4rem;\n  margin-bottom: 5px;\n"]);return nn=function(){return n},n}function en(){var n=Object(v.a)(["\n  text-align: right;\n"]);return en=function(){return n},n}function tn(){var n=Object(v.a)(["\n  margin: 0;\n  padding: 0;\n"]);return tn=function(){return n},n}function an(){var n=Object(v.a)(["\n  margin-bottom: 10px;\n  > div > p {\n    margin-bottom: 0;\n    font-weight: bold;\n  }\n  > i {\n    padding-right: 7px;\n  }\n"]);return an=function(){return n},n}function rn(){var n=Object(v.a)(["\n  margin: 0;\n  padding: 0;\n"]);return rn=function(){return n},n}function on(){var n=Object(v.a)(["\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: 150px 1fr 1fr;\n  justify-content: space-between;\n  align-items: center;\n  @media (min-width: ","px) {\n    grid-template-columns: 200px 1fr 1fr;\n  }\n  @media (min-width: ","px) {\n    grid-template-columns: 170px 1fr 1fr 1fr;\n  }\n"]);return on=function(){return n},n}function ln(){var n=Object(v.a)(["\n  position: absolute;\n  top: 30%;\n  transform: translateY(-50%);\n  left: -2px;\n  font-size: 90px;\n  color: #f5f5f5;\n  z-index: -1;\n  font-weight: bold;\n  pointer-events: none;\n"]);return ln=function(){return n},n}function cn(){var n=Object(v.a)(["\n  padding: 20px;\n  border: 1px solid #ccc;\n  margin-bottom: 1rem;\n  position: relative;\n  overflow: hidden;\n  transition: border-color 300ms;\n  &:hover {\n    border-color: #9c9c9c;\n  }\n"]);return cn=function(){return n},n}var un=h.a.li(cn()),dn=h.a.span(ln()),sn=h.a.div(on(),$,A),pn=h.a.h3(rn()),fn=h.a.div(an()),mn=h.a.ul(tn()),bn=h.a.div(en()),gn=h.a.p(nn()),vn=h.a.a(Z()),hn=Object(h.a)(K)(Q());var wn=function(n){var e=n.index,t=n.name,a=n.download,i=n.upload,o=n.price,l=n.benefits;return r.a.createElement(un,null,r.a.createElement(dn,null,e),r.a.createElement(sn,null,r.a.createElement(pn,null,t),r.a.createElement("div",{className:""},r.a.createElement(fn,null,r.a.createElement(H,null,r.a.createElement("p",null,"Download")),r.a.createElement(R.a,{type:"arrow-down"}),r.a.createElement("span",null,a," Mbit/s")),r.a.createElement(G,null,r.a.createElement(fn,null,r.a.createElement(H,null,r.a.createElement("p",null,"Upload")),r.a.createElement(R.a,{type:"arrow-up"}),r.a.createElement("span",null,i," Mbit/s")))),r.a.createElement(H,null,r.a.createElement(mn,null,l.map(function(n){return r.a.createElement("li",{key:n},n)}))),r.a.createElement(bn,null,r.a.createElement(gn,null,o," \u20ac"),r.a.createElement(G,null,r.a.createElement(vn,{href:"#",title:"See more details for ".concat(t)},"More details")))),r.a.createElement(hn,null,r.a.createElement(vn,{href:"#",title:"See more details for ".concat(t)},"More details")))};function xn(){var n=Object(v.a)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]);return xn=function(){return n},n}function En(){var n=Object(v.a)(["\n  width: 90%;\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return En=function(){return n},n}function jn(){var n=Object(v.a)(["\n  text-align: center;\n  padding: 60px 0;\n"]);return jn=function(){return n},n}var On=h.a.div(jn()),yn=h.a.div(En()),Sn=h.a.ul(xn());var kn=function(){var n=Object(a.useState)("download"),e=Object(c.a)(n,2),t=e[0],i=e[1],o=Object(a.useState)(""),l=Object(c.a)(o,2),s=l[0],p=l[1],f=Object(a.useContext)(u),m=f.dispatch,b=f.list,g=f.status;if(Object(a.useEffect)(function(){C().then(function(n){m(d(n))})},[]),"fetched"!==g)return r.a.createElement(On,null,r.a.createElement(q.a,{tip:"Loading..."}));var v=Object(a.useMemo)(function(){return function(n,e){return n.sort(function(n,t){return t[e]-n[e]})}(b,t)},[b,t]),h=Object(a.useMemo)(function(){return n=v,(e=s)?n.filter(function(n){return n.name.indexOf(e)>-1}):n;var n,e});return r.a.createElement(yn,null,r.a.createElement(I,{onSortChange:i,onSearchChange:p}),r.a.createElement(Sn,null,h.map(function(n,e){return r.a.createElement(wn,Object.assign({},n,{key:n.id,index:e}))})))};function qn(){var n=Object(v.a)(["\n  position: fixed;\n  bottom: 0;\n  width: 100%\n  background: linear-gradient(to top, white 60%, rgba(255, 255, 255, 0));\n  padding: 60px 0 10px;\n  text-align: center\n  font-weight: bold;\n  a {\n    color: currentColor;\n    padding: 0 10px;\n    font-size: .8rem;\n  }\n"]);return qn=function(){return n},n}var zn=h.a.footer(qn());var Cn=function(){return r.a.createElement(zn,null,r.a.createElement("a",{href:"http://twitter.com/jonalvarezz",rel:"noopener noreferrer",target:"_blank"},"@jonalvarezz"),r.a.createElement("a",{href:"https://github.com/jonalvarezz/tarifer-app",rel:"noopener noreferrer",target:"_blank"},"See source"))};var Mn=function(){return r.a.createElement(g,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(kn,null),r.a.createElement(Cn,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Mn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},95:function(n,e,t){n.exports=t(197)}},[[95,2,1]]]);
//# sourceMappingURL=main.be557ddf.chunk.js.map