(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],p=0,f=[];p<s.length;p++)i=s[p],a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("e97f"),a=n.n(r);a.a},"18a9":function(e,t,n){},3659:function(e,t,n){"use strict";var r=n("18a9"),a=n.n(r);a.a},"484b":function(e,t,n){e.exports=n.p+"img/beansoak.f403cad7.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("video",{attrs:{playsinline:"",autoplay:"",muted:"",loop:"",poster:n("484b"),id:"bg-video"},domProps:{muted:!0}},[r("source",{attrs:{src:n("6a58"),type:"video/mp4"}})]),r("div",{staticClass:"scrim"}),r("header",[e._v("BEAN 🥣 BOWLER")]),r("div",{staticClass:"content"},[r("h2",[e._v("IS THERE A BEAN BOWL ON TODAY'S MENU?")]),r("p",[e._v(e._s(e.date))]),r("button",{attrs:{disabled:e.loading},on:{click:e.scrapeMenu}},[r("ScaleLoader",{attrs:{loading:e.loading,height:e.height,color:e.color}}),e.loading?e._e():r("span",[e._v("Calculate")])],1)]),e.loading?e._e():r("Results",{attrs:{scrapedText:e.scrapedText,beanList:e.beanList}}),e.error?r("div",[e._v("\n    Ho boy you broke the crap out of this app. GO HOME.\n  ")]):e._e()],1)},o=[],i=(n("4917"),n("8ea5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"results"},[e._v("\n  "+e._s(e.scrapedText)+"\n  "),n("div",{staticClass:"bean-list"},[e.beanSet.length?n("p",[e._v("I have detected "+e._s(e.beanSet.length)+" types of beans on the menu:")]):e._e(),e.beanSet.length?n("ul",e._l(e.beanSet,function(t){return n("li",{key:t},[e._v("\n        "+e._s(t.toUpperCase())+" BEAN\n      ")])})):e._e()])])}),s=[],u=(n("ac6a"),n("5df3"),n("4f7f"),n("8afe")),c={name:"Results",data:function(){return{beanSet:[]}},props:{scrapedText:String,beanList:Array},beforeMount:function(){this.beanSet=Object(u["a"])(new Set(this.beanList))}},l=c,p=(n("3659"),n("2877")),f=Object(p["a"])(l,i,s,!1,null,"5708d2ae",null);f.options.__file="Results.vue";var d=f.exports,b=n("6cb7"),h="https://bean-bowler.herokuapp.com",v={name:"app",components:{Results:d,ScaleLoader:b["a"]},data:function(){return{date:"--/--/----",scrapedText:"",beanList:[],loading:!1,height:"1em",color:"#ffaf54",error:null}},created:function(){this.date=this.printDate()},methods:{printDate:function(){return(new Date).toISOString().slice(0,10)},scrapeMenu:function(){var e=this;this.scrapedText="",this.error=null,this.loading=!0,fetch("".concat(h,"/api/menu")).then(function(e){if(e.status<400)return e.json();throw new Error(e.statusText)}).then(function(t){var n=t.beanBowls,r=t.fullMenuText;e.beanList=r?r.match(/\S+(?= bean)/gim):[],e.scrapedText=n?n.toUpperCase():"❌ NO ❌",e.loading=!1}).catch(function(t){e.loading=!1,e.error=t})}}},g=v,_=(n("034f"),Object(p["a"])(g,a,o,!1,null,null,null));_.options.__file="App.vue";var m=_.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(m)}}).$mount("#app")},"6a58":function(e,t,n){e.exports=n.p+"media/beansoak.44fd2d31.mp4"},e97f:function(e,t,n){}});
//# sourceMappingURL=app.aa807589.js.map