(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{426:function(t,e,r){var content=r(450);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(29).default)("5e3dada6",content,!0,{sourceMap:!1})},449:function(t,e,r){"use strict";var n=r(426);r.n(n).a},450:function(t,e,r){(e=r(28)(!1)).push([t.i,".member[data-v-40d8160c]{width:33.33333%;padding:0 15px;margin-bottom:32px}.member__title[data-v-40d8160c]{font-size:1.25em;font-weight:700;margin-bottom:8px!important}.member__img[data-v-40d8160c]{width:100%;height:300px;margin-bottom:16px}.member__img img[data-v-40d8160c]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}",""]),t.exports=e},465:function(t,e,r){"use strict";r.r(e);r(41);var n=r(13),o=r(408),c=r.n(o),m=r(409),d={components:{Hero:r(407).a},computed:{heroMessage:function(){var t=this.$i18n;return t.messages[t.locale].hero.team}},asyncData:function(t){t.context;var e=t.error,r=t.req,o=t.store;return Object(n.a)(regeneratorRuntime.mark((function t(){var n,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.getApi(m.a.apiEndpoint,{req:r});case 3:return n=t.sent,t.next=6,n.query(c.a.Predicates.at("document.type","members"),{lang:"en"==o.$i18n.locale?"en-us":"ru"});case 6:return d=t.sent,t.abrupt("return",{members:d.results});case 10:t.prev=10,t.t0=t.catch(0),e({statusCode:404,message:"Page not found"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},l=(r(449),r(25)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"team"}},[r("Hero",{attrs:{data:t.heroMessage}}),t._v(" "),r("div",{staticClass:"members"},[r("b-container",[r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{cols:"10"}},[r("b-row",t._l(t.members,(function(e,i){return r("div",{key:i,staticClass:"member"},[r("div",{staticClass:"member__img"},[r("img",{attrs:{src:e.data.avatar.url,alt:e.data.avatar.alt}})]),t._v(" "),r("p",{staticClass:"member__title"},[t._v(t._s(e.data.name[0].text))]),t._v(" "),r("p",{staticClass:"member__desc"},[t._v(t._s(e.data.job[0].text))])])})),0)],1)],1)],1)],1)],1)}),[],!1,null,"40d8160c",null);e.default=component.exports}}]);