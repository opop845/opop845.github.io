(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{101:function(e,t,c){},109:function(e,t,c){"use strict";c.r(t);var n,i,s=c(0),a=c.n(s),r=c(21),o=c.n(r),j=(c(82),c(30)),d=c(5),l=(c(83),c(118)),h=c(116),b=c(119),p=c(117),O=c(76),x=[{id:0,title:"White and Black",content:"Born in France",price:12e4,image:"https://codingapple1.github.io/shop/shoes1.jpg"},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4,image:"https://codingapple1.github.io/shop/shoes2.jpg"},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4,image:"https://codingapple1.github.io/shop/shoes3.jpg"}],u=c(40),m=c(9),g=c(57),f=c(55),v=c.n(f),N=c(58),k=(c(101),c(1)),w=N.a.div(n||(n=Object(g.a)(["\n  padding: 20px;\n  background: #eeeeee;\n"]))),B=N.a.h4(i||(i=Object(g.a)(["\n  font-size: 25px;\n  color: ",";\n"])),(function(e){return e.color}));function D(e){var t=Object(s.useState)(!1),c=Object(d.a)(t,2),n=c[0],i=c[1];Object(s.useEffect)((function(){var e=setTimeout((function(){i(!0)}),2e3);return function(){clearTimeout(e)}}),[]);var a=Object(m.g)().id,r=Object(m.f)();return Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)(w,{children:Object(k.jsx)(B,{className:"red",children:"\uc0c1\uc138\ud398\uc774\uc9c0"})}),0==n?Object(k.jsx)("div",{className:"my-alert",children:Object(k.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null,Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("div",{className:"col-md-6",children:Object(k.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(Number(a)+1)+".jpg",width:"100%"})}),Object(k.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(k.jsx)("h4",{className:"pt-5",children:e.shoes[a].title}),Object(k.jsx)("p",{children:e.shoes[a].content}),Object(k.jsx)("p",{children:e.shoes[a].price}),Object(k.jsx)(S,{}),Object(k.jsx)("button",{className:"btn btn-danger",children:"\uc8fc\ubb38\ud558\uae30"}),Object(k.jsx)("button",{className:"btn btn-danger",onClick:function(){r.push("/sdfsdf")},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})}function S(){return Object(k.jsx)("p",{children:"\uc7ac\uace0"})}function y(e){return Object(k.jsxs)("div",{className:"col-md-4",children:[Object(k.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.Data.id+1)+".jpg",width:"100%"}),Object(k.jsx)("h4",{children:e.Data.title}),Object(k.jsxs)("p",{children:[e.Data.content," & ",e.Data.price]})]})}var C=function(){var e=Object(s.useState)(x),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(l.a,{bg:"light",expand:"lg",children:Object(k.jsxs)(h.a,{children:[Object(k.jsx)(l.a.Brand,{href:"#home",children:"React-Bootstrap"}),Object(k.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(k.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(k.jsxs)(b.a,{className:"me-auto",children:[Object(k.jsx)(b.a.Link,{as:u.b,to:"/",children:"Home"}),Object(k.jsx)(b.a.Link,{as:u.b,to:"/detail",children:"Link"}),Object(k.jsxs)(p.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(k.jsx)(p.a.Item,{href:"#action/3.1",children:"Action"}),Object(k.jsx)(p.a.Item,{href:"#action/3.2",children:"Another action"}),Object(k.jsx)(p.a.Item,{href:"#action/3.3",children:"Something"}),Object(k.jsx)(p.a.Divider,{}),Object(k.jsx)(p.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})}),Object(k.jsxs)(m.c,{children:[Object(k.jsxs)(m.a,{exact:!0,path:"/",children:[Object(k.jsxs)("div",{className:"jumbotron",children:[Object(k.jsx)("h1",{children:"Hello, world!"}),Object(k.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(k.jsx)("p",{children:Object(k.jsx)(O.a,{variant:"primary",children:"Learn more"})}),Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(k.jsx)(y,{Data:e},t)}))})})]}),Object(k.jsx)("button",{className:"btn btn-primary",onClick:function(){v.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){n([].concat(Object(j.a)(c),Object(j.a)(e.data)))})).catch((function(){}))},children:"\ub354\ubcf4\uae30"})]}),Object(k.jsx)(m.a,{path:"/detail/:id",children:Object(k.jsx)(D,{shoes:c})}),Object(k.jsx)(m.a,{path:"/:id",children:Object(k.jsx)("div",{children:"\uc544\ubb34\uac70\ub098 \uc801\uc5c8\uc744\ub54c"})})]})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,120)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};o.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(u.a,{children:Object(k.jsx)(C,{})})}),document.getElementById("root")),I()},82:function(e,t,c){},83:function(e,t,c){}},[[109,1,2]]]);
//# sourceMappingURL=main.f9c70a95.chunk.js.map