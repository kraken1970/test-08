(this["webpackJsonptest-08"]=this["webpackJsonptest-08"]||[]).push([[0],{26:function(e,t,n){e.exports={myModal:"MyModal_myModal__3wunW",myModalContent:"MyModal_myModalContent__3NJ2c",active:"MyModal_active__2TUBd"}},27:function(e,t,n){e.exports={pageWrapper:"Pagination_pageWrapper__3kR_5",page:"Pagination_page__3d9h9",pageCurrent:"Pagination_pageCurrent__2_d2l"}},41:function(e,t,n){e.exports={myBtn:"MyButton_myBtn__2rvqy"}},42:function(e,t,n){e.exports={myInput:"MyInput_myInput__284B3"}},45:function(e,t,n){e.exports={loader:"Loader_loader__1MjUl",rotate:"Loader_rotate__3fyxQ"}},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(18),s=n.n(a),o=n(3),i=n(13),u=n(2),j=Object(c.createContext)(null),l=n(0),b=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"about"})})},p=n(5),d=n(47),O=n(41),h=n.n(O),x=function(e){var t=e.children,n=Object(d.a)(e,["children"]);return Object(l.jsx)("button",Object(p.a)(Object(p.a)({},n),{},{className:h.a.myBtn,children:t}))},f=n(42),v=n.n(f),m=r.a.forwardRef((function(e,t){return Object(l.jsx)("input",Object(p.a)(Object(p.a)({ref:t},e),{},{className:v.a.myInput}))})),g=function(){var e=Object(c.useContext)(j),t=(e.isAuth,e.setIsAuth);return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Autorization page"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(!0),localStorage.setItem("auth",!0)},children:[Object(l.jsx)(m,{type:"text",placeholder:"Enter your name"}),Object(l.jsx)(m,{type:"password",placeholder:"Enter your password"}),Object(l.jsx)(x,{children:"Enter"})]})]})},y=n(6),_=n.n(y),C=n(11),k=n(43),w=n(44),M=n(25),S=n.n(M),I=function(){function e(){Object(k.a)(this,e)}return Object(w.a)(e,null,[{key:"getAll",value:function(){var e=Object(C.a)(_.a.mark((function e(){var t,n,c,r=arguments;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:10,n=r.length>1&&void 0!==r[1]?r[1]:1,e.next=4,S.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_limit:t,_page:n}});case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getById",value:function(){var e=Object(C.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://jsonplaceholder.typicode.com/posts/"+t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCommentByPostId",value:function(){var e=Object(C.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://jsonplaceholder.typicode.com/posts/".concat(t,"/comments"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),N=n(45),A=n.n(N),P=function(){return Object(l.jsx)("div",{className:A.a.loader,children:Object(l.jsx)("p",{children:"LOADING..."})})},B=function(e){var t=Object(c.useState)(!1),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),u=i[0],j=i[1];return[function(){var t=Object(C.a)(_.a.mark((function t(){var n=arguments;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(!0),t.next=4,e.apply(void 0,n);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),j(t.t0.message);case 9:return t.prev=9,a(!1),t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})));return function(){return t.apply(this,arguments)}}(),r,u]},E=function(){var e=Object(u.h)(),t=Object(c.useState)({}),n=Object(o.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)([]),i=Object(o.a)(s,2),j=i[0],b=i[1],p=B(function(){var e=Object(C.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getById(t);case 2:n=e.sent,a(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d=Object(o.a)(p,3),O=d[0],h=d[1],x=(d[2],B(function(){var e=Object(C.a)(_.a.mark((function e(t){var n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getCommentByPostId(t);case 2:n=e.sent,b(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),f=Object(o.a)(x,3),v=f[0],m=f[1];f[2];return Object(c.useEffect)((function(){O(e.id),v(e.id)}),[]),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h1",{children:["Post ID = ",e.id]}),h?Object(l.jsx)(P,{}):Object(l.jsxs)("div",{children:[r.id,". ",r.title]}),Object(l.jsx)("h2",{children:"Comments"}),m?Object(l.jsx)(P,{}):Object(l.jsx)("div",{children:j.map((function(e){return Object(l.jsxs)("div",{style:{marginTop:15},children:[Object(l.jsx)("h4",{children:e.name}),Object(l.jsx)("h5",{children:e.email}),Object(l.jsx)("div",{children:e.body})]},e.id)}))})]})},L=n(24),D=function(e,t,n){var r=function(e,t){return Object(c.useMemo)((function(){return t?Object(L.a)(e).sort((function(e,n){return e[t].localeCompare(n[t])})):e}),[t,e])}(e,t);return Object(c.useMemo)((function(){return r.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}))}),[n,r])},q=function(e,t){return Math.ceil(e/t)},J=function(e){var t=e.options,n=e.defaultValue,c=e.value,r=e.onChange;return Object(l.jsxs)("select",{value:c,onChange:function(e){return r(e.target.value)},children:[Object(l.jsx)("option",{disabled:!0,value:"",children:n}),t&&t.map((function(e){return Object(l.jsx)("option",{value:e.value,children:e.name},e.value)}))]})},T=function(e){var t=e.filter,n=e.setFilter;return Object(l.jsxs)("div",{children:[Object(l.jsx)(m,{placeholder:"\u043f\u043e\u0438\u0441\u043a...",value:t.query,onChange:function(e){return n(Object(p.a)(Object(p.a)({},t),{},{query:e.target.value}))}}),Object(l.jsx)(J,{defaultValue:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",options:[{value:"title",name:"\u041f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e"},{value:"body",name:"\u041f\u043e \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044e"}],value:t.sort,onChange:function(e){return n(Object(p.a)(Object(p.a)({},t),{},{sort:e}))}})]})},V=function(e){var t=e.create,n=Object(c.useState)({title:"",body:""}),r=Object(o.a)(n,2),a=r[0],s=r[1];return Object(l.jsxs)("form",{children:[Object(l.jsx)(m,{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430",value:a.title,onChange:function(e){return s(Object(p.a)(Object(p.a)({},a),{},{title:e.target.value}))}}),Object(l.jsx)(m,{type:"text",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430",value:a.body,onChange:function(e){return s(Object(p.a)(Object(p.a)({},a),{},{body:e.target.value}))}}),Object(l.jsx)(x,{onClick:function(e){e.preventDefault();var n=Object(p.a)(Object(p.a)({},a),{},{id:Date.now()});t(n),s({title:"",body:""})},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442"})]})},W=n(82),F=n(81),R=function(e){var t=Object(u.g)();return Object(l.jsxs)("div",{className:"post",children:[Object(l.jsxs)("div",{className:"post__content",children:[Object(l.jsxs)("strong",{children:[e.number,". ",e.post.id,". ",e.post.title]}),Object(l.jsx)("div",{children:e.post.body})]}),Object(l.jsxs)("div",{className:"post__btns",children:[Object(l.jsx)(x,{onClick:function(){return t.push("/posts/".concat(e.post.id))},children:"Open"}),Object(l.jsx)(x,{onClick:function(){return e.remove(e.post)},children:"Delete"})]})]})},U=function(e){var t=e.posts,n=e.title,c=e.remove;return t.length?Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{style:{textAlign:"center"},children:n}),Object(l.jsx)(W.a,{children:t&&t.map((function(e,t){return Object(l.jsx)(F.a,{timeout:500,classNames:"post",children:Object(l.jsx)(R,{number:t+1,post:e,remove:c})},e.id)}))})]}):Object(l.jsx)("h1",{style:{textAlign:"center"},children:"\u041f\u043e\u0441\u0442\u043e\u0432 \u0435\u0449\u0451 \u043d\u0435\u0442!"})},z=n(15),G=n(23),Q=n.n(G),$=n(26),H=n.n($),K=function(e){var t=e.children,n=e.visible,c=e.setVisible;return Object(l.jsx)("div",{onClick:function(e){c(!1)},className:Q()(H.a.myModal,Object(z.a)({},H.a.active,n)),children:Object(l.jsx)("div",{onClick:function(e){return e.stopPropagation()},className:H.a.myModalContent,children:t})})},X=n(27),Y=n.n(X),Z=function(e){var t=e.totalPages,n=e.page,c=e.changePage,r=function(e){for(var t=[],n=0;n<e;n++)t.push(n+1);return t}(t);return Object(l.jsx)("div",{className:Y.a.pageWrapper,children:r.map((function(e){return Object(l.jsx)("span",{onClick:function(){return c(e)},className:Q()(Y.a.page,Object(z.a)({},Y.a.pageCurrent,n===e)),children:e},e)}))})};var ee=[{path:"/about",component:b,exact:!0},{path:"/posts",component:function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({sort:"",query:""}),s=Object(o.a)(a,2),i=s[0],u=s[1],j=Object(c.useState)(!1),b=Object(o.a)(j,2),p=b[0],d=b[1],O=Object(c.useState)(0),h=Object(o.a)(O,2),f=h[0],v=h[1],m=Object(c.useState)(10),g=Object(o.a)(m,2),y=g[0],k=(g[1],Object(c.useState)(1)),w=Object(o.a)(k,2),M=w[0],S=w[1],N=D(n,i.sort,i.query),A=B(function(){var e=Object(C.a)(_.a.mark((function e(t,n){var c,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getAll(t,n);case 2:c=e.sent,r(c.data),a=c.headers["x-total-count"],v(q(a,t));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),E=Object(o.a)(A,3),J=E[0],W=E[1],F=E[2];return Object(c.useEffect)((function(){J(y,M)}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(x,{onClick:function(){return d(!0)},style:{marginTop:"30px"},children:"Create post"}),Object(l.jsx)(K,{visible:p,setVisible:d,children:Object(l.jsx)(V,{create:function(e){r([].concat(Object(L.a)(n),[e])),d(!1)}})}),Object(l.jsx)("hr",{style:{margin:"15px 0"}}),Object(l.jsx)(T,{filter:i,setFilter:u}),F&&Object(l.jsxs)("h1",{children:["\u043e\u0448\u0438\u0431\u043a\u0430 $",F]}),Object(l.jsx)(U,{posts:N,remove:function(e){r(n.filter((function(t){return t.id!==e.id})))},title:"\u041f\u043e\u0441\u0442\u044b \u043f\u0440\u043e JS"}),W&&Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:Object(l.jsx)(P,{})}),Object(l.jsx)(Z,{page:M,changePage:function(e){S(e),J(y,e)},totalPages:f})]})},exact:!0},{path:"/posts/:id",component:E,exact:!0}],te=[{path:"/login",component:g,exact:!0}],ne=function(){var e=Object(c.useContext)(j),t=e.isAuth;return e.isLoading?Object(l.jsx)(P,{}):t?Object(l.jsxs)(u.d,{children:[ee.map((function(e){return Object(l.jsx)(u.b,{component:e.component,path:e.path,exact:e.exact},e.path)})),Object(l.jsx)(u.a,{to:"/posts"})]}):Object(l.jsxs)(u.d,{children:[te.map((function(e){return Object(l.jsx)(u.b,{component:e.component,path:e.path,exact:e.exact},e.path)})),Object(l.jsx)(u.a,{to:"/login"})]})},ce=function(){var e=Object(c.useContext)(j),t=(e.isAuth,e.setIsAuth);return Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)(x,{onClick:function(){t(!1),localStorage.removeItem("auth")},children:"Exit"}),Object(l.jsxs)("div",{className:"navbar__links",children:[Object(l.jsx)(i.b,{to:"/about",children:"About"}),Object(l.jsx)(i.b,{to:"/posts",children:"Posts"})]})]})};n(78);var re=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!0),s=Object(o.a)(a,2),u=s[0],b=s[1];return Object(c.useEffect)((function(){localStorage.getItem("auth")&&r(!0),b(!1)}),[]),Object(l.jsx)(j.Provider,{value:{isAuth:n,setIsAuth:r,isLoading:u},children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(ce,{}),Object(l.jsx)(ne,{})]})})};s.a.render(Object(l.jsx)(re,{}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.a4e5161b.chunk.js.map