(function(t){function e(e){for(var n,c,r=e[0],o=e[1],u=e[2],l=0,f=[];l<r.length;l++)c=r[l],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&f.push(i[c][0]),i[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,c=1;c<a.length;c++){var r=a[c];0!==i[r]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},c={app:0},i={app:0},s=[];function r(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-02f70cfc":"d2a67a3c","chunk-17907244":"a89ffecd","chunk-2d0e5e97":"c03ea901","chunk-2ed8427c":"a492678b","chunk-35a6224f":"b4aa0430","chunk-527cd790":"23f114ea","chunk-7ce48c47":"3b3b190c"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={"chunk-02f70cfc":1,"chunk-17907244":1,"chunk-2ed8427c":1,"chunk-35a6224f":1,"chunk-527cd790":1,"chunk-7ce48c47":1};c[t]?e.push(c[t]):0!==c[t]&&a[t]&&e.push(c[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-02f70cfc":"5ff23dd5","chunk-17907244":"88c61f5e","chunk-2d0e5e97":"31d6cfe0","chunk-2ed8427c":"5acf4d8e","chunk-35a6224f":"4f158e39","chunk-527cd790":"ae38b23f","chunk-7ce48c47":"6ce4ba25"}[t]+".css",i=o.p+n,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var u=s[r],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===i))return e()}var f=document.getElementsByTagName("style");for(r=0;r<f.length;r++){u=f[r],l=u.getAttribute("data-href");if(l===n||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete c[t],d.parentNode.removeChild(d),a(s)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){c[t]=0})));var n=i[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+c+")",f.name="ChunkLoadError",f.type=n,f.request=c,a[1](f)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0058":function(t,e,a){"use strict";a("1007")},"034f":function(t,e,a){"use strict";a("85ec")},"07a7":function(t,e,a){},"0b43":function(t,e,a){},1007:function(t,e,a){},"140b":function(t,e,a){"use strict";a("cdeb")},"2a3f":function(t,e,a){"use strict";a("2edf")},"2edf":function(t,e,a){},"2ff0":function(t,e,a){"use strict";a("4329")},"3f36":function(t,e,a){"use strict";a("57ad")},4329:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e),a.d(e,"bus",(function(){return vt}));a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a(t.layout,{tag:"component"},[a("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[a("router-view")],1)],1)],1)],1)])},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"default-layout"},[a("Navbar"),t._t("default"),a("Footer")],2)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav"},[a("div",{staticClass:"left-nav"},[a("Logo"),a("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),a("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),a("router-link",{attrs:{to:"/blogs"}},[t._v("Blogs")]),t._v(" | ")],1),a("div",{staticClass:"right-nav"},[t._m(0),a("button",{staticClass:"login-button",on:{click:function(e){return t.$router.push({path:"/login"})}}},[t._v("Login")])])])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-bar",staticStyle:{width:"60%"}},[a("input",{attrs:{type:"text",placeholder:"Find topics..."}}),a("div",{staticClass:"fa fa-search",staticStyle:{margin:"0 10px"}})])}],l=a("ed15"),f={components:{Logo:l["a"]}},d=f,h=(a("65d2"),a("2877")),m=Object(h["a"])(d,o,u,!1,null,"2773bdda",null),p=m.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"content"},[a("h1",[t._v("Want to connect?")]),a("p",[t._v("Contact us with the links in description below to get more information. Hope you enjoy your time on my website.")]),a("a",{attrs:{href:"#"}},[a("div",{staticClass:"fa fa-twitter"})]),a("a",{attrs:{href:"#"}},[a("div",{staticClass:"fa fa-instagram"})]),a("a",{attrs:{href:""}},[a("div",{staticClass:"fa fa-linkedin-square"})])])])}],g={},_=g,y=(a("d614"),Object(h["a"])(_,v,b,!1,null,"3cb6873d",null)),C=y.exports,x={components:{Navbar:p,Footer:C}},k=x,E=(a("0058"),Object(h["a"])(k,s,r,!1,null,"0c6369e8",null)),w=E.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"unauth-layout"},[a("Logo"),t._t("default")],2)},S=[],H={components:{Logo:l["a"]}},j=H,O=(a("2ff0"),Object(h["a"])(j,$,S,!1,null,"6acb5f93",null)),L=O.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"secret-layout"},[a("Sidebar"),a("div",{staticClass:"content"},[a("Navbarlogin"),t._t("default")],2)],1)},P=[],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar"},[a("div",{staticClass:"logo",on:{click:function(e){return t.$router.push({path:"/"})}}},[a("div",{staticClass:"white",staticStyle:{color:"#2c3e50"}},[t._v("nu")]),t._v(" ntimum. ")]),a("ul",{staticClass:"dashboard-menu"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),a("li",{on:{click:function(e){return t.$router.push({path:"/"})}}},[a("div",{staticClass:"fa fa-sign-out",staticStyle:{margin:"0 20px 0 30px",width:"30px"}}),a("span",[t._v("Log Out")])])])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("div",{staticClass:"fa fa-map-o",staticStyle:{margin:"0 20px 0 30px",width:"30px"}}),a("span",[t._v("Dashboard")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("div",{staticClass:"fa fa-user-o",staticStyle:{margin:"0 20px 0 30px",width:"30px"}}),a("span",[t._v("Profile")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("div",{staticClass:"fa fa-pencil",staticStyle:{margin:"0 20px 0 30px",width:"30px"}}),a("span",[t._v("Write a Post")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("div",{staticClass:"fa fa-bookmark-o",staticStyle:{margin:"0 20px 0 30px",width:"30px"}}),a("span",[t._v("All Posts")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("div",{staticClass:"fa fa-cube",staticStyle:{margin:"0 20px 0 30px",width:"30px"}}),a("span",[t._v("Resources")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("div",{staticClass:"fa fa-cog",staticStyle:{margin:"0 20px 0 30px",width:"30px"}}),a("span",[t._v("Settings")])])}],I={data:function(){return{menuLists:[{id:0,name:"Dashboard",icon:'<div class="fa fa-map-o"></div>',active:!0}]}}},M=I,N=(a("cb86"),Object(h["a"])(M,T,A,!1,null,"003d2e56",null)),D=N.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("div",{staticClass:"left-nav"}),n("div",{staticClass:"right-nav"},[n("div",{staticClass:"fa fa-search",staticStyle:{margin:"auto 15px"}}),n("div",{staticClass:"fa fa-bell-o",staticStyle:{margin:"auto 15px"}}),n("div",{staticClass:"avt",staticStyle:{margin:"auto 15px"}},[n("img",{attrs:{src:a("a891")}})])])])}],B={data:function(){return{}}},U=B,W=(a("b7fc"),Object(h["a"])(U,F,R,!1,null,"0c98700b",null)),J=W.exports,K={components:{Sidebar:D,Navbarlogin:J}},z=K,G=(a("140b"),Object(h["a"])(z,q,P,!1,null,"730e6352",null)),Q=G.exports,V={components:{defaultLayout:w,unauthLayout:L,secretLayout:Q},data:function(){return{loggIn:!0}},created:function(){console.log(this.$route)},computed:{layout:function(){return"unauth"===this.$route.meta.layout?"unauthLayout":"secret"===this.$route.meta.layout?"secretLayout":"defaultLayout"}}},X=V,Y=(a("034f"),Object(h["a"])(X,c,i,!1,null,null,null)),Z=Y.exports,tt=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t._m(0),t._m(1),a("Tags"),t._m(2)],1)},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("img",{attrs:{alt:"Home photo",src:"https://images2.alphacoders.com/650/thumb-1920-650266.jpg"}}),a("div",{staticClass:"intro"},[a("div",{staticClass:"type",staticStyle:{color:"gray"}},[t._v("FEATURED ARTICLE")]),a("h2",{staticClass:"title"},[t._v("World's Most Dangerous Technology Ever Made.")]),a("div",{staticClass:"more",staticStyle:{display:"flex",color:"gray"}},[a("em",[a("span",{staticClass:"author"},[t._v("Ralph Hawkins . ")]),a("span",{staticClass:"time"},[t._v(" May 7, 2019 (10 mins read)")])])]),a("p",[t._v("Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("Editor’s Picks"),a("span")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("img",{attrs:{src:"https://images4.alphacoders.com/310/thumb-1920-31004.jpg",alt:""}}),a("div",{staticClass:"infor"},[a("div",{staticClass:"type",staticStyle:{color:"gray"}},[t._v("FEATURED ARTICLE")]),a("h2",{staticClass:"title"},[t._v('Mysterious "City of Illusion" appeared off the lake.')]),a("div",{staticClass:"more",staticStyle:{display:"flex",color:"gray"}},[a("em",[a("span",{staticClass:"author"},[t._v("Ralph Hawkins . ")]),a("span",{staticClass:"time"},[t._v(" May 7, 2019 (10 mins read)")])])]),a("p",[t._v("Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.")])])])}],nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tags"},[t._m(0),a("div",{staticClass:"search-item"},t._l(t.searchItems,(function(e){return a("button",{key:t.search-e},[t._v(t._s(e.hashtag))])})),0)])},ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-bar"},[a("input",{attrs:{type:"text",placeholder:"Find the topics you care about..."}}),a("div",{staticClass:"fa fa-search"})])}],it={name:"Tags",data:function(){return{searchItems:[{hashtag:"#technology",content:"Hehe abcd"},{hashtag:"#lifeandlove",content:"Hehe abcd"},{hashtag:"#essentialism",content:"Hehe abcd"},{hashtag:"#webdevelopment",content:"Hehe abcd"},{hashtag:"#fashion",content:"Hehe abcd"},{hashtag:"#architecture",content:"Hehe abcd"},{hashtag:"#sports",content:"Hehe abcd"},{hashtag:"#entertainment",content:"Hehe abcd"},{hashtag:"#graphicdesign",content:"Hehe abcd"},{hashtag:"#travel",content:"Hehe abcd"},{hashtag:"#anime",content:"Hehe abcd"},{hashtag:"#worldhistory",content:"Hehe abcd"},{hashtag:"#computers",content:"Hehe abcd"},{hashtag:"#minimalism",content:"Hehe abcd"},{hashtag:"#novels",content:"Hehe abcd"},{hashtag:"#filmmaking",content:"Hehe abcd"},{hashtag:"#smartphones",content:"Hehe abcd"},{hashtag:"#security",content:"Hehe abcd"},{hashtag:"#occupation",content:"Hehe abcd"}]}}},st=it,rt=(a("ff21"),Object(h["a"])(st,nt,ct,!1,null,"b705c8fe",null)),ot=rt.exports,ut={name:"Home",components:{Tags:ot},created:function(){console.log(this.$route)}},lt=ut,ft=(a("3f36"),Object(h["a"])(lt,et,at,!1,null,"63da4a8d",null)),dt=ft.exports;n["a"].use(tt["a"]);var ht=[{path:"/",name:"Home",component:dt},{path:"/about",name:"About",component:function(){return a.e("chunk-17907244").then(a.bind(null,"f820"))},layout:"defaultLayout"},{path:"/blogs",name:"Blogs",component:function(){return a.e("chunk-02f70cfc").then(a.bind(null,"8cf7"))}},{path:"/blog/:id",component:function(){return a.e("chunk-7ce48c47").then(a.bind(null,"054f"))}},{path:"/login",component:function(){return a.e("chunk-2ed8427c").then(a.bind(null,"a55b"))},meta:{layout:"unauth"}},{path:"/signup",component:function(){return a.e("chunk-527cd790").then(a.bind(null,"5c9c"))},meta:{layout:"unauth"}},{path:"*",component:function(){return a.e("chunk-2d0e5e97").then(a.bind(null,"9703"))},meta:{layout:"unauth"}},{path:"/dashboard",component:function(){return a.e("chunk-35a6224f").then(a.bind(null,"7277"))},meta:{layout:"secret"}}],mt=new tt["a"]({mode:"history",base:"/",routes:ht}),pt=mt;n["a"].config.productionTip=!1;var vt=new n["a"];new n["a"]({router:pt,render:function(t){return t(Z)}}).$mount("#app")},"57ad":function(t,e,a){},"606f":function(t,e,a){},"65d2":function(t,e,a){"use strict";a("eab7")},"85ec":function(t,e,a){},a891:function(t,e,a){t.exports=a.p+"img/avt.9691b1d4.jpg"},b7fc:function(t,e,a){"use strict";a("0b43")},cb86:function(t,e,a){"use strict";a("07a7")},cdeb:function(t,e,a){},d614:function(t,e,a){"use strict";a("ec5b")},eab7:function(t,e,a){},ec5b:function(t,e,a){},ed15:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo",on:{click:function(e){return t.$router.push({path:"/"})}}},[a("div",{staticClass:"black",staticStyle:{color:"white"}},[t._v("nu")]),t._v(" ntimum. ")])},c=[],i=(a("2a3f"),a("2877")),s={},r=Object(i["a"])(s,n,c,!1,null,"e4337970",null);e["a"]=r.exports},ff21:function(t,e,a){"use strict";a("606f")}});
//# sourceMappingURL=app.a4def8b8.js.map