"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[918],{25:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(689),a=n(87),u="EditorList_editorListUl__Yarbz",s="EditorList_editorListLi__CmhNJ",c="EditorList_editorListLink__Y-wjl",i=n(184),o=function(t){var e=t.films,n=(0,r.TH)();return(0,i.jsx)("ul",{className:u,children:e.map((function(t){return(0,i.jsx)("li",{className:s,children:(0,i.jsx)(a.rU,{className:c,to:"/movies/".concat(t.id),state:{from:n},children:t.title})},t.id)}))})}},918:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(439),a=n(791),u=n(782),s=n(25),c="Form_searchForm__eyCyq",i="Form_formInput__sgOCo",o="Form_formBtn__u8Ete",f=n(184),l=function(t){var e=t.searchMovies,n=(0,a.useState)(""),u=(0,r.Z)(n,2),s=u[0],l=u[1];return(0,f.jsxs)("form",{className:c,onSubmit:function(t){t.preventDefault(),e(s.toLowerCase())},children:[(0,f.jsx)("input",{className:i,type:"text",name:"query",autoFocus:!0,value:s,onChange:function(t){l(t.target.value)}}),(0,f.jsx)("button",{className:o,type:"submit",children:"Search"})]})},p=n(975),d="Movies_noMovieP__MU7+O",v=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],c=e[1],i=(0,a.useState)(!1),o=(0,r.Z)(i,2),v=o[0],m=o[1],h=(0,a.useState)(!1),_=(0,r.Z)(h,2),Z=_[0],g=_[1];return(0,f.jsxs)("main",{children:[(0,f.jsx)(l,{searchMovies:function(t){m(!0),(0,p.Ml)(t).then((function(t){c(t),g(0===t.length)})).catch((function(t){console.log(t)})).finally((function(){m(!1)}))}}),v&&(0,f.jsx)(u.Z,{}),Z&&(0,f.jsx)("p",{className:d,children:"There is no movies with this request. Please, try again"}),n&&(0,f.jsx)(s.Z,{films:n})]})}},975:function(t,e,n){n.d(e,{Bt:function(){return l},Ml:function(){return i},Tg:function(){return c},Y5:function(){return o},wL:function(){return f}});var r=n(165),a=n(861),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="a5406dd14816b26728050ce2e3dfdd5f",c=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=918.9060b9df.chunk.js.map