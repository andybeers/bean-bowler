(function(e){function t(t){for(var r,i,u=t[0],c=t[1],s=t[2],f=0,p=[];f<u.length;f++)i=u[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("e97f"),o=n.n(r);o.a},"336b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("IS THERE A BEAN BOWL ON TODAY'S MENU?")]),n("h3",[e._v(e._s(e.date))]),n("button",{attrs:{disabled:e.loading},on:{click:e.scrapeMenu}},[n("ScaleLoader",{attrs:{loading:e.loading,height:e.height,color:e.color}}),e.loading?e._e():n("span",[e._v("Calculate")])],1),e.loading?e._e():n("Results",{attrs:{scrapedText:e.scrapedText}}),e.error?n("div",[e._v("\n    Ho boy you broke the crap out of this app. GO HOME.\n    "+e._s(e.error)+"\n  ")]):e._e()],1)},a=[],i=(n("8ea5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"results"},[e._v("\n  "+e._s(e.scrapedText)+"\n")])}),u=[],c={name:"Results",props:{scrapedText:String}},s=c,l=(n("e0df"),n("2877")),f=Object(l["a"])(s,i,u,!1,null,"6641a14e",null);f.options.__file="Results.vue";var p=f.exports,d=n("6cb7"),h={name:"app",components:{Results:p,ScaleLoader:d["a"]},data:function(){return{date:"--/--/----",scrapedText:"",loading:!1,height:"1em",color:"#ffaf54",error:null}},created:function(){this.date=this.printDate()},methods:{printDate:function(){return(new Date).toISOString().slice(0,10)},scrapeMenu:function(){var e=this;this.scrapedText="",this.error=null,this.loading=!0,fetch("http://localhost:3000/api/menu").then(function(e){if(e.status<400)return e.json();throw new Error(e.statusText)}).then(function(t){var n=t.menu;e.scrapedText=n||"Not today, Sparkie",e.loading=!1}).catch(function(t){e.loading=!1,e.error=t})}}},v=h,b=(n("034f"),Object(l["a"])(v,o,a,!1,null,null,null));b.options.__file="App.vue";var g=b.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(g)}}).$mount("#app")},e0df:function(e,t,n){"use strict";var r=n("336b"),o=n.n(r);o.a},e97f:function(e,t,n){}});
//# sourceMappingURL=app.2446551e.js.map