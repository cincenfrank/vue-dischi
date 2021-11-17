(function(t){function e(e){for(var r,a,s=e[0],o=e[1],c=e[2],f=0,p=[];f<s.length;f++)a=s[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],r=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(r=!1)}r&&(l.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={app:0},l=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=o;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("Main")],1)},l=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("img",{attrs:{src:n("cf05"),alt:"logo"}})])}],o={name:"Header"},c=o,u=n("2877"),f=Object(u["a"])(c,a,s,!1,null,null,null),p=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"main"},[n("div",{staticClass:"container"},[n("Shell")],1)])},d=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shell"},[n("FilterRow",{attrs:{filterList:t.filterData},on:{onFilterChanged:t.onFilterChange}}),t._l(t.displayList,(function(t,e){return n("MovieCard",{key:e,attrs:{title:t.title,artist:t.author,imageDesc:t.title+" cover",imagePath:t.poster,year:t.year}})})),t.loading?n("Loader"):t._e()],2)},v=[],b=n("3835"),g=(n("b64b"),n("d3b7"),n("4fad"),n("caad"),n("2532"),n("159b"),n("bc3a")),_=n.n(g),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"movie-card",attrs:{href:"#"}},[n("img",{attrs:{src:t.imagePath,alt:t.imageDesc}}),n("h3",{staticClass:"title"},[t._v(t._s(t.title))]),n("ul",[n("li",[t._v(t._s(t.artist))]),n("li",[t._v(t._s(t.year))])])])},O=[],j={name:"MovieCard",props:{artist:String,year:String,title:String,imagePath:String,imageDesc:String}},L=j,C=Object(u["a"])(L,y,O,!1,null,null,null),F=C.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loader"},[r("img",{attrs:{src:n("cf05"),alt:"logo"}}),r("h4",[t._v("LOADING SHELL...")])])}],E={name:"Loader"},w=E,$=Object(u["a"])(w,x,S,!1,null,null,null),k=$.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter-row"},[t._l(t.filterList,(function(e,r){return n("div",{key:r,staticClass:"filter-column"},[n("label",{attrs:{for:r}},[t._v(t._s(r))]),n("FilterSelect",{ref:r,refInFor:!0,attrs:{value:t.filterObject[r],selectName:r,valueList:e},on:{onChange:t.filterChanged}})],1)})),n("button",{on:{click:t.applyFilter}},[t._v("Filter")]),n("button",{on:{click:t.resetFilter}},[t._v("Remove Filter")])],2)},P=[],M=(n("07ac"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{directives:[{name:"model",rawName:"v-model",value:t.filterValue,expression:"filterValue"}],attrs:{id:t.selectName},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.filterValue=e.target.multiple?n:n[0]},t.emitValue]}},t._l(t.valueList,(function(e,r){return n("option",{key:r+"-option",domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)}),V=[],N={name:"FilterSelect",props:{valueList:Array,selectName:String},data:function(){return{filterValue:""}},methods:{emitValue:function(){this.$emit("onChange",this.selectName,this.filterValue)},resetFilter:function(){this.filterValue=""}}},A=N,H=Object(u["a"])(A,M,V,!1,null,null,null),R=H.exports,T={components:{FilterSelect:R},name:"FilterRow",props:{filterList:Object},data:function(){return{filterObject:{}}},methods:{filterChanged:function(t,e){this.filterObject[t]=e},applyFilter:function(){this.$emit("onFilterChanged",this.filterObject)},resetFilter:function(){Object.values(this.$refs).forEach((function(t){t[0].resetFilter()})),this.filterObject={},this.$emit("onFilterChanged",this.filterObject)}}},q=T,I=Object(u["a"])(q,D,P,!1,null,null,null),J=I.exports,U={components:{MovieCard:F,Loader:k,FilterRow:J},name:"Shell",data:function(){return{apiEndpoint:"https://flynn.boolean.careers/exercises/api/array/music",albumList:[],displayList:[],loading:!0,filterObject:{},keysExcludedList:["poster"]}},methods:{fetchData:function(){var t=this;this.loading=!0,_.a.get(this.apiEndpoint).then((function(e){t.albumList=e.data.response,t.populateDisplayList(),setTimeout((function(){t.loading=!1}),2e3)}))},onFilterChange:function(t){this.filterObject=t,this.populateDisplayList()},populateDisplayList:function(){var t=this;0===Object.keys(this.filterObject).length?this.displayList=this.albumList:this.displayList=this.albumList.reduce((function(e,n){for(var r=!0,i=0,l=Object.entries(t.filterObject);i<l.length;i++){var a=Object(b["a"])(l[i],2),s=a[0],o=a[1];if(n[s]!==o){r=!1;break}}return r&&e.push(n),e}),[])},generateUniqueList:function(t){return this.albumList.reduce((function(e,n){return e.includes(n[t])||e.push(n[t]),e}),[])}},computed:{filterData:function(){var t=this,e={};return this.albumList.length>1&&Object.keys(this.albumList[0]).forEach((function(n){t.keysExcludedList.includes(n)||(e[n]=t.generateUniqueList(n))})),e}},mounted:function(){this.fetchData()}},G=U,z=Object(u["a"])(G,m,v,!1,null,null,null),B=z.exports,K={components:{Shell:B},name:"Main"},Q=K,W=Object(u["a"])(Q,h,d,!1,null,null,null),X=W.exports,Y={name:"App",components:{Header:p,Main:X}},Z=Y,tt=(n("5c0b"),Object(u["a"])(Z,i,l,!1,null,null,null)),et=tt.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(et)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.6a8ba62e.png"}});
//# sourceMappingURL=app.af9fe027.js.map