(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc80f2cc"],{1423:function(s,t,a){"use strict";a("5ccc")},"1b05":function(s,t,a){s.exports=a.p+"img/almacenista.f1c1d193.jpg"},"5ccc":function(s,t,a){},"6d8b":function(s,t,a){"use strict";a.r(t);var i=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"container-fluid"},[a("br"),a("div",{staticClass:"container"},[a("div",{staticClass:"login-wrap"}),s._m(0),a("div",{staticClass:"login-html"},[a("input",{staticClass:"sign-in",attrs:{id:"tab-1",type:"radio",name:"tab",checked:""}}),a("label",{staticClass:"tab",attrs:{for:"tab-1"}},[s._v("almacenista")]),a("input",{staticClass:"for-pwd",attrs:{id:"tab-2",type:"radio",name:"tab"}}),a("label",{staticClass:"tab",attrs:{for:"tab-2"}}),a("div",{staticClass:"login-form"},[a("div",{staticClass:"sign-in-htm"},[a("div",{staticClass:"group"},[a("label",{staticClass:"label",attrs:{for:"user"}},[s._v("Usuario o Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.usuario.user,expression:"usuario.user"}],staticClass:"input",attrs:{id:"user",type:"text"},domProps:{value:s.usuario.user},on:{input:function(t){t.target.composing||s.$set(s.usuario,"user",t.target.value)}}})]),a("div",{staticClass:"group"},[a("label",{staticClass:"label",attrs:{for:"pass"}},[s._v("Contraseña")]),a("input",{directives:[{name:"model",rawName:"v-model",value:s.usuario.pass,expression:"usuario.pass"}],staticClass:"input",attrs:{id:"pass",type:"password","data-type":"password"},domProps:{value:s.usuario.pass},on:{input:function(t){t.target.composing||s.$set(s.usuario,"pass",t.target.value)}}})]),a("div",{staticClass:"group"},[a("input",{staticClass:"button",attrs:{type:"submit",value:"Entrar"},on:{click:s.entrar}})]),a("div")])])])]),a("link",{attrs:{rel:"stylesheet",href:"css/all.min.css"}})])},e=[function(){var s=this,t=s.$createElement,i=s._self._c||t;return i("div",{staticClass:"d-flex justify-content-center"},[i("div",{staticClass:"brand_logo_container"},[i("img",{staticClass:"brand_logo",attrs:{src:a("1b05"),alt:"Logo"}})])])}],r=a("bc3a"),n=a.n(r),o={name:"loginalmacenista",data:function(){return{usuario:{user:null,pass:null}}},props:{loginalmacenista:String},methods:{entrar:function(){var s=this;n.a.post("user/login",{email:s.usuario.user,password:s.usuario.pass}).then((function(t){s.$store.dispatch("setToken",t.data),s.$router.push("/menu")})).catch((function(s){var t=s.response;console.log(t.data.msg)}))}}},l=o,u=(a("1423"),a("2877")),c=Object(u["a"])(l,i,e,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-dc80f2cc.a52492f5.js.map