webpackJsonp([6],{Uuc0:function(e,c){},rd9F:function(e,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var s={components:{navs:a("vB3B").a},name:"",data:function(){return{checkedNames:[],datas:{age:"18",xes:"男",naem:"ihje"},sets:[[1,2,3,4,5],[6,7,8,9,10]],name:[{age:"18"},{age:"15"}],object:{title:"How to do lists in Vue",author:"Jane Doe",publishedAt:"2016-04-10"}}},methods:{warn:function(e,c){c&&c.preventDefault(),console.log(c),alert(e)}},mounted:function(){},created:function(){},computed:{},watch:{}},n={render:function(){var e=this,c=e.$createElement,a=e._self._c||c;return a("div",{staticClass:"header"},[e._v("\n    其他\n\n    \n    "),a("button",{on:{click:function(c){return e.warn("Form cannot be submitted yet.",c)}}},[e._v("\n      Submit\n    ")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"jack",value:"jack"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"jack")>-1:e.checkedNames},on:{change:function(c){var a=e.checkedNames,s=c.target,n=!!s.checked;if(Array.isArray(a)){var t=e._i(a,"jack");s.checked?t<0&&(e.checkedNames=a.concat(["jack"])):t>-1&&(e.checkedNames=a.slice(0,t).concat(a.slice(t+1)))}else e.checkedNames=n}}}),e._v(" "),a("label",{attrs:{for:"jack"}},[e._v("Jacasdk")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"john",value:"John"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"John")>-1:e.checkedNames},on:{change:function(c){var a=e.checkedNames,s=c.target,n=!!s.checked;if(Array.isArray(a)){var t=e._i(a,"John");s.checked?t<0&&(e.checkedNames=a.concat(["John"])):t>-1&&(e.checkedNames=a.slice(0,t).concat(a.slice(t+1)))}else e.checkedNames=n}}}),e._v(" "),a("label",{attrs:{for:"john"}},[e._v("John")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedNames,expression:"checkedNames"}],attrs:{type:"checkbox",id:"mike",value:"Mike"},domProps:{checked:Array.isArray(e.checkedNames)?e._i(e.checkedNames,"Mike")>-1:e.checkedNames},on:{change:function(c){var a=e.checkedNames,s=c.target,n=!!s.checked;if(Array.isArray(a)){var t=e._i(a,"Mike");s.checked?t<0&&(e.checkedNames=a.concat(["Mike"])):t>-1&&(e.checkedNames=a.slice(0,t).concat(a.slice(t+1)))}else e.checkedNames=n}}}),e._v(" "),a("label",{attrs:{for:"mike"}},[e._v("Mike")]),e._v(" "),a("br"),e._v(" "),a("span",[e._v("Checked names: "+e._s(e.checkedNames))]),e._v(" "),a("navs")],1)},staticRenderFns:[]};var t=a("VU/8")(s,n,!1,function(e){a("Uuc0")},"data-v-222b7084",null);c.default=t.exports}});
//# sourceMappingURL=6.f38d2c9709e112df11ec.js.map