(this["webpackJsonpsearch-books"]=this["webpackJsonpsearch-books"]||[]).push([[0],{47:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),i=n(20),s=n.n(i),o=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),r(t),i(t),s(t)}))},a=n(23),u=n(9),j=n(8),b=n.n(j),l=n(1),h=n(2),O=function(t){var e=t.book,n=e.title,c=e.first_publish_year,r=e.cover_i,i=e.author_name;return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"http://covers.openlibrary.org/b/id/".concat(r,"-M.jpg"),alt:""}),Object(h.jsx)("h4",{children:n}),Object(h.jsx)("p",{children:c}),Object(h.jsx)("p",{children:i&&i.length>0&&i.join()})]})},f=function(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],r=e[1],i=Object(c.useState)("prevText"),s=Object(u.a)(i,2),o=s[0],j=s[1],f=Object(c.useState)([]),p=Object(u.a)(f,2),d=p[0],g=p[1],v=Object(c.useState)(""),x=Object(u.a)(v,2),y=x[0],m=x[1],B=Object(c.useState)(""),S=Object(u.a)(B,2),k=S[0],D=S[1],_=Object(l.d)(),C=Object(l.e)();return Object(c.useEffect)((function(){k&&_.push("?".concat(k))}),[_,k]),Object(c.useEffect)((function(){var t=b.a.parse(C.search),e=t.q,n=t.sortBy;if(e&&e!==o&&(r(e),fetch("http://openlibrary.org/search.json?title=".concat(e)).then((function(t){return t.json()})).then((function(t){g(t.docs?t.docs:[]),j(e)}),(function(t){console.log(t)}))),m(n),n){var c=Object(a.a)(d);"title"===n?(c.sort((function(t,e){return t.title.localeCompare(e.title)})),g(c)):"publishDate"===n&&(c.sort((function(t,e){return new Date(t.first_publish_year).getTime()-new Date(e.first_publish_year).getTime()})),g(c))}}),[C.search,o]),Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n&&D(b.a.stringify({q:n,sortBy:y}))},children:[Object(h.jsx)("input",{name:"search",type:"text",value:n,onChange:function(t){return r(t.target.value)}}),Object(h.jsx)("button",{type:"submit",name:"searchButton",children:"Search Books"}),Object(h.jsxs)("label",{children:["Sort By:",Object(h.jsxs)("select",{value:y,onChange:function(t){"title"===t.target.value?D(b.a.stringify({q:n,sortBy:"title"})):"publishDate"===t.target.value?D(b.a.stringify({q:n,sortBy:"publishDate"})):D(b.a.stringify({q:n,sortBy:""}))},children:[Object(h.jsx)("option",{value:""}),Object(h.jsx)("option",{value:"title",children:"Book Title"}),Object(h.jsx)("option",{value:"publishDate",children:"Book First Published Year"})]})]}),Object(h.jsx)("div",{children:d.length>0&&d.map((function(t,e){return Object(h.jsx)(O,{book:t},e)}))})]})})},p=n(22);s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(p.a,{children:Object(h.jsx)(f,{})})}),document.getElementById("root")),o()}},[[47,1,2]]]);
//# sourceMappingURL=main.380038c9.chunk.js.map