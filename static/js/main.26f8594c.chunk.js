(this["webpackJsonpsearch-books"]=this["webpackJsonpsearch-books"]||[]).push([[0],{47:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),s=n(20),i=n.n(s),o=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),s(t),i(t)}))},a=n(23),u=n(9),b=n(8),j=n.n(b),l=n(1),h=n(2),O=function(t){var e=t.book,n=e.title,c=e.first_publish_year,r=e.cover_i,s=e.author_name;return Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:"http://covers.openlibrary.org/b/id/".concat(r,"-M.jpg"),alt:""}),Object(h.jsx)("h4",{children:n}),Object(h.jsx)("p",{children:c}),Object(h.jsx)("p",{children:s&&s.length>0&&s.join()})]})},f=function(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],r=e[1],s=Object(c.useState)("prevText"),i=Object(u.a)(s,2),o=i[0],b=i[1],f=Object(c.useState)([]),p=Object(u.a)(f,2),d=p[0],g=p[1],v=Object(c.useState)(""),x=Object(u.a)(v,2),y=x[0],m=x[1],B=Object(c.useState)(""),k=Object(u.a)(B,2),S=k[0],D=k[1],_=Object(l.d)(),C=Object(l.e)();return Object(c.useEffect)((function(){S&&_.push("/search-books/?".concat(S))}),[_,S]),Object(c.useEffect)((function(){var t=j.a.parse(C.search),e=t.q,n=t.sortBy;if(e&&e!==o&&(r(e),fetch("https://openlibrary.org/search.json?title=".concat(e)).then((function(t){return t.json()})).then((function(t){g(t.docs?t.docs:[]),b(e)}),(function(t){console.log(t)}))),m(n),n){var c=Object(a.a)(d);"title"===n?(c.sort((function(t,e){return t.title.localeCompare(e.title)})),g(c)):"publishDate"===n&&(c.sort((function(t,e){return new Date(t.first_publish_year).getTime()-new Date(e.first_publish_year).getTime()})),g(c))}}),[C.search,o]),Object(h.jsx)("div",{children:Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n&&D(j.a.stringify({q:n,sortBy:y}))},children:[Object(h.jsx)("input",{name:"search",type:"text",value:n,onChange:function(t){return r(t.target.value)}}),Object(h.jsx)("button",{type:"submit",name:"searchButton",children:"Search Books"}),Object(h.jsxs)("label",{children:["Sort By:",Object(h.jsxs)("select",{value:y,onChange:function(t){"title"===t.target.value?D(j.a.stringify({q:n,sortBy:"title"})):"publishDate"===t.target.value?D(j.a.stringify({q:n,sortBy:"publishDate"})):D(j.a.stringify({q:n,sortBy:""}))},children:[Object(h.jsx)("option",{value:""}),Object(h.jsx)("option",{value:"title",children:"Book Title"}),Object(h.jsx)("option",{value:"publishDate",children:"Book First Published Year"})]})]}),Object(h.jsx)("div",{children:d.length>0&&d.map((function(t,e){return Object(h.jsx)(O,{book:t},e)}))})]})})},p=n(22);i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(p.a,{children:Object(h.jsx)(f,{})})}),document.getElementById("root")),o()}},[[47,1,2]]]);
//# sourceMappingURL=main.26f8594c.chunk.js.map