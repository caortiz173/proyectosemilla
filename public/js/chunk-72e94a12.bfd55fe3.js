(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72e94a12"],{"0e8f":function(t,e,a){"use strict";a("20f6");var o=a("e8f2");e["a"]=Object(o["a"])("flex")},4368:function(t,e,a){},"6a6c":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("v-toolbar",{staticClass:"black",attrs:{app:""}},[a("v-btn",{staticClass:"ma-2",attrs:{color:"primary",dark:""},on:{click:t.atras}},[a("v-icon",{attrs:{dark:"",left:""}},[t._v(" mdi-arrow-left ")]),t._v("Atrás ")],1),a("v-spacer"),a("v-spacer"),a("v-badge",{attrs:{bordered:"",color:"error",icon:"mdi-lock",overlap:""}},[a("v-btn",{staticClass:"black--text",attrs:{color:"white",depressed:""},on:{click:t.cerrar}},[t._v(" Cerrar Sesión ")])],1)],1)],1),a("div",[a("v-layout",{attrs:{"align-start":""}},[a("v-flex",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("Ventas")]),a("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),a("v-spacer"),0==t.verNuevo?a("v-text-field",{staticClass:"text-xs-center",attrs:{"append-icon":"mdi-magnify",label:"Búsqueda","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}):t._e(),a("v-spacer"),0==t.verNuevo?a("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},on:{click:function(e){return t.mostrarNuevo()}}},[t._v("Nuevo")]):t._e(),a("v-dialog",{attrs:{"max-width":"1000px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Seleccione un artículo")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[a("v-text-field",{staticClass:"text-xs-center",attrs:{"append-icon":"mdi-magnify",label:"Búsqueda"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.listarArticulos()}},model:{value:t.texto,callback:function(e){t.texto=e},expression:"texto"}}),[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.cabeceraArticulos,items:t.artic},scopedSlots:t._u([{key:"item.seleccionar",fn:function(e){var o=e.item;return[o.estado?[a("v-icon",{attrs:{small:""},on:{click:function(e){return t.agregarDetalle(o)}}},[t._v(" mdi-plus ")])]:t._e()]}},{key:"item.estado",fn:function(e){var o=e.item;return[o.estado?a("div",[a("span",{staticClass:"blue--text"},[t._v("Activo")])]):a("div",[a("span",{staticClass:"red--text"},[t._v("Inactivo")])])]}}],null,!0)})]],2)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:""},on:{click:t.close}},[t._v(" Cancelar ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.Modal,callback:function(e){t.Modal=e},expression:"Modal"}},[a("v-card",[1==t.Accion?a("v-card-title",{staticClass:"headline"},[t._v(" Activar Item ")]):t._e(),2==t.Accion?a("v-card-title",{staticClass:"headline"},[t._v(" Desactivar Item ")]):t._e(),a("v-card-text",[t._v(" Estás a punto de "),1==t.Accion?a("span",[t._v("activar ")]):t._e(),2==t.Accion?a("span",[t._v("desactivar ")]):t._e(),t._v(" el item "+t._s(t.Nombre)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(e){return t.activarDesactivarCerrar()}}},[t._v(" Cancelar ")]),1==t.Accion?a("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(e){return t.activar()}}},[t._v(" Activar ")]):t._e(),2==t.Accion?a("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(e){return t.desactivar()}}},[t._v(" Desactivar ")]):t._e()],1)],1)],1)],1),0==t.verNuevo?a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.vent,search:t.search},scopedSlots:t._u([{key:"item.opciones",fn:function(e){var o=e.item;return[o.estado?[a("v-icon",{attrs:{small:""},on:{click:function(e){return t.activarDesactivarMostrar(2,o)}}},[t._v(" mdi-server-network ")])]:[a("v-icon",{attrs:{small:""},on:{click:function(e){return t.activarDesactivarMostrar(1,o)}}},[t._v(" mdi-server-off ")])]]}},{key:"item.estado",fn:function(e){var o=e.item;return[o.estado?a("div",[a("span",{staticClass:"blue--text"},[t._v("Activo")])]):a("div",[a("span",{staticClass:"red--text"},[t._v("Inactivo")])])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.listar()}}},[t._v("Actualizar")])]},proxy:!0}],null,!0)}):t._e(),t.verNuevo?a("v-container",{staticClass:"pa-4 white",attrs:{"grid-list-sm":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm4:"",md4:"",lg4:"",xl4:""}},[a("v-select",{attrs:{items:t.comprobantes,label:"Tipo Comprobante"},model:{value:t.tipoComprobante,callback:function(e){t.tipoComprobante=e},expression:"tipoComprobante"}})],1),a("v-flex",{attrs:{xs12:"",sm4:"",md4:"",lg4:"",xl4:""}},[a("v-text-field",{attrs:{label:"Serie Comprobante"},model:{value:t.serieComprobante,callback:function(e){t.serieComprobante=e},expression:"serieComprobante"}})],1),a("v-flex",{attrs:{xs12:"",sm4:"",md4:"",lg4:"",xl4:""}},[a("v-text-field",{attrs:{label:"Número Comprobante"},model:{value:t.numComprobante,callback:function(e){t.numComprobante=e},expression:"numComprobante"}})],1),a("v-flex",{attrs:{xs12:"",sm4:"",md4:"",lg4:"",xl4:""}},[a("v-select",{attrs:{items:t.pers,label:"Cliente"},model:{value:t.persona,callback:function(e){t.persona=e},expression:"persona"}})],1),a("v-flex",{attrs:{xs12:"",sm4:"",md4:"",lg4:"",xl4:""}},[a("v-text-field",{attrs:{type:"number",label:"Impuesto"},model:{value:t.impuesto,callback:function(e){t.impuesto=e},expression:"impuesto"}})],1),a("v-flex",{attrs:{xs12:"",sm8:"",md8:"",lg8:"",x8:""}},[a("v-text-field",{attrs:{label:"Código"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.buscarCodigo()}},model:{value:t.codigo,callback:function(e){t.codigo=e},expression:"codigo"}})],1),a("v-flex",{attrs:{xs12:"",sm2:"",md2:"",lg2:"",xl2:""}},[a("v-btn",{attrs:{small:"",fab:"",dark:"",color:"primary"},on:{click:function(e){return t.mostrarModalArticulos()}}},[a("v-icon",{attrs:{dark:""}},[t._v("mdi-plus")])],1)],1),a("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.errorArticulo,expression:"errorArticulo"}],attrs:{xs12:"",sm2:"",md2:"",lg2:"",xl2:""}},[a("div",{staticClass:"red--text",domProps:{textContent:t._s(t.errorArticulo)}})]),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.cabeceraDetalles,items:t.detalles,"hide-actions":""},scopedSlots:t._u([{key:"item.borrar",fn:function(e){var o=e.item;return[[a("v-icon",{attrs:{small:""},on:{click:function(e){return t.eliminarDetalle(t.detalles,o)}}},[t._v(" mdi-delete ")])]]}},{key:"item.cantidad",fn:function(e){var o=e.item;return[[a("v-text-field",{attrs:{type:"number"},model:{value:o.cantidad,callback:function(e){t.$set(o,"cantidad",e)},expression:"item.cantidad"}})]]}},{key:"item.descuento",fn:function(e){var o=e.item;return[[a("v-text-field",{attrs:{type:"number"},model:{value:o.descuento,callback:function(e){t.$set(o,"descuento",e)},expression:"item.descuento"}})]]}},{key:"item.subtotal",fn:function(e){var o=e.item;return[[a("v-text",{domProps:{textContent:t._s(o.precio*o.cantidad-o.descuento)}})]]}}],null,!0)},[a("template",{slot:"no-data"},[a("h3",[t._v("No hay artículos agregados al detalle.")])])],2),a("v-flex",{staticClass:"text-xs-right"},[a("strong",[t._v("Total Parcial:")]),t._v(" $ "+t._s(t.totalParcial=(t.total-t.totalImpuesto).toFixed(2))+" ")]),a("v-flex",{staticClass:"text-xs-right"},[a("strong",[t._v("Total Impuesto:")]),t._v(" $ "+t._s(t.totalImpuesto=(t.total*t.impuesto/(1+t.impuesto)).toFixed(2))+" ")]),a("v-flex",{staticClass:"text-xs-right"},[a("strong",[t._v("Total Neto:")]),t._v(" $ "+t._s(t.total=t.calcularTotal)+" ")])]],2),a("v-flex",{directives:[{name:"show",rawName:"v-show",value:t.valida,expression:"valida"}],attrs:{xs12:"",sm12:"",md12:""}},t._l(t.validaMensaje,(function(e){return a("div",{key:e,staticClass:"red--text",domProps:{textContent:t._s(e)}})})),0),a("v-flex",{attrs:{xs12:"",sm12:"",md12:"",lg12:"",xl12:""}},[a("v-btn",{attrs:{color:"primary",flat:""},nativeOn:{click:function(e){return t.ocultarNuevo()}}},[t._v("Cancelar")]),0==t.verDetalle?a("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){return t.guardar()}}},[t._v("Guardar")]):t._e()],1)],1)],1):t._e()],1)],1)],1)])},r=[],s=(a("d81d"),a("a434"),a("3d20")),i=a.n(s),l=a("bc3a"),n=a.n(l),c={data:function(){return{dialog:!1,search:"",vent:[],headers:[{text:"Usuario",value:"usuario.nombre",sortable:!1},{text:"Cliente",value:"persona.nombre",sortable:!0},{text:"Tipo Comprobante",value:"tipoComprobante",sortable:!0},{text:"Serie comprobante",value:"serieComprobante",sortable:!1},{text:"Número comprobante",value:"numComprobante",sortable:!1},{text:"Fecha",value:"createdAt",sortable:!1},{text:"Impuesto",value:"impuesto",sortable:!1},{text:"Total",value:"total",sortable:!1},{text:"Estado",value:"estado",sortable:!1},{text:"Opciones",value:"opciones",sortable:!1}],id:"",persona:"",pers:[],tipoComprobante:"",comprobantes:["NOTA DEBITO","FACTURA","NOTA CREDITO"],serieComprobante:"",numComprobante:"",impuesto:.19,codigo:"",cabeceraDetalles:[{text:"Borrar",value:"borrar",sortable:!1},{text:"Artículo",value:"articulo",sortable:!1},{text:"Cantidad",value:"cantidad",sortable:!1},{text:"Precio",value:"precio",sortable:!1},{text:"Descuento",value:"descuento",sortable:!1},{text:"Sub Total",value:"subtotal",sortable:!1}],detalles:[],verNuevo:0,errorArticulo:null,total:0,totalParcial:0,totalImpuesto:0,texto:"",artic:[],cabeceraArticulos:[{text:"Seleccionar",value:"seleccionar",sortable:!1},{text:"Código",value:"codigo",sortable:!1},{text:"Nombre",value:"nombre",sortable:!0},{text:"Categoría",value:"categoria.nombre",sortable:!0},{text:"Stock",value:"stock",sortable:!1},{text:"Precio Venta",value:"precioventa",sortable:!1},{text:"Descripción",value:"descripcion",sortable:!1},{text:"Estado",value:"estado",sortable:!1}],verDetalle:0,valida:0,validaMensaje:[],Modal:0,Accion:0,Nombre:"",Id:"",fecha:null}},computed:{calcularTotal:function(){for(var t=0,e=0;e<this.detalles.length;e++)t=t+this.detalles[e].cantidad*this.detalles[e].precio-this.detalles[e].descuento;return t}},watch:{dialog:function(t){t||this.close()}},created:function(){this.listar(),this.selectPersona()},methods:{selectPersona:function(){var t=this,e=[],a={headers:{token:this.$store.state.token}};n.a.get("pers",a).then((function(a){e=a.data.persona,console.log(a.data),e.map((function(e){t.pers.push({text:e.nombre,value:e._id})}))})).catch((function(t){console.log(t)}))},listarArticulos:function(){var t=this,e={headers:{token:this.$store.state.token}};n.a.get("artic",e).then((function(e){console.log(e.data.artic),t.artic=e.data.articulo})).catch((function(t){console.log(t)}))},mostrarModalArticulos:function(){this.dialog=1,this.listarArticulos()},agregarDetalle:function(t){console.log(t),this.errorArticulo=null,1==this.encuentra(t._id)?this.errorArticulo="El artículo ya ha sido agregado.":(this.detalles.push({_id:t._id,articulo:t.nombre,cantidad:1,precio:t.precioventa,descuento:0}),this.codigo="")},encuentra:function(t){for(var e=0,a=0;a<this.detalles.length;a++)this.detalles[a]._id==t&&(e=!0);return e},eliminarDetalle:function(t,e){console.log(t,"   /   ",e);var a=t.indexOf(e);-1!=a&&t.splice(a,1)},listarDetalles:function(t){var e=this,a={headers:{token:this.$store.state.token}};n.a.get("vent/".concat(t),a).then((function(t){console.log(t.data.detalles),e.detalles=t.data.venta.detalles})).catch((function(t){console.log(t)}))},listar:function(){var t=this,e={headers:{token:this.$store.state.token}};n.a.get("vent",e).then((function(e){console.log(e.data.vent),t.vent=e.data.venta})).catch((function(t){console.log(t)}))},limpiar:function(){this.id="",this.tipoComprobante="",this.serieComprobante="",this.numComprobante="",this.impuesto=.18,this.codigo="",this.total=0,this.totalParcial=0,this.totalImpuesto=0,this.detalles=[],this.verNuevo=0,this.valida=0,this.validaMensaje=[],this.verDetalle=0},validar:function(){return this.valida=0,this.validaMensaje=[],this.persona||this.validaMensaje.push("Seleccione un Cliente."),this.numComprobante||this.validaMensaje.push("Ingrese el número del comprobante."),this.validaMensaje.length&&(this.valida=1),this.valida},mostrarNuevo:function(){this.selectPersona(),this.verNuevo=1},ocultarNuevo:function(){this.verNuevo=0,this.limpiar()},guardar:function(){var t=this,e={headers:{token:this.$store.state.token}};this.validar()||n.a.post("vent",{persona:this.persona,usuario:this.$store.state.usuario._id,tipoComprobante:this.tipoComprobante,serieComprobante:this.serieComprobante,numComprobante:this.numComprobante,impuesto:this.impuesto,total:this.total,detalles:this.detalles},e).then((function(){t.limpiar(),t.close(),t.listar()})).catch((function(t){console.log(t.response)}))},atras:function(){this.$router.push("/menu")},cerrar:function(){i.a.fire({background:"black",position:"top-center",icon:"success",title:"Su sesión ha finalizado con éxito",showConfirmButton:!1,timer:1500}),this.$store.dispatch("setToken",""),this.$router.push("/roles")},activarDesactivarMostrar:function(t,e){this.Modal=1,this.Nombre=e.numComprobante,this.Id=e._id,1==t?this.Accion=1:2==t?this.Accion=2:this.Modal=0},activarDesactivarCerrar:function(){this.Modal=0},activar:function(){var t=this,e={headers:{token:this.$store.state.token}};n.a.put("vent/activar/".concat(this.Id),{},e).then((function(){t.Modal=0,t.Accion=0,t.Nombre="",t.Id="",t.listar()})).catch((function(t){console.log(t)}))},desactivar:function(){var t=this,e={headers:{token:this.$store.state.token}};n.a.put("vent/desactivar/".concat(this.Id),{},e).then((function(){t.Modal=0,t.Accion=0,t.Nombre="",t.Id="",t.listar()})).catch((function(t){console.log(t)}))},close:function(){this.dialog=!1}}},u=c,d=(a("e218"),a("2877")),v=a("6544"),m=a.n(v),p=a("4ca6"),f=a("8336"),h=a("b0af"),b=a("99d9"),x=a("a523"),C=a("8fea"),g=a("169a"),k=a("ce7e"),_=a("0e8f"),y=a("132d"),A=a("a722"),N=a("b974"),w=a("2fa4"),D=a("8654"),T=a("71d9"),I=a("2a7f"),M=Object(d["a"])(u,o,r,!1,null,null,null);e["default"]=M.exports;m()(M,{VBadge:p["a"],VBtn:f["a"],VCard:h["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VContainer:x["a"],VDataTable:C["a"],VDialog:g["a"],VDivider:k["a"],VFlex:_["a"],VIcon:y["a"],VLayout:A["a"],VSelect:N["a"],VSpacer:w["a"],VTextField:D["a"],VToolbar:T["a"],VToolbarTitle:I["a"]})},a722:function(t,e,a){"use strict";a("20f6");var o=a("e8f2");e["a"]=Object(o["a"])("layout")},e218:function(t,e,a){"use strict";a("4368")}}]);
//# sourceMappingURL=chunk-72e94a12.bfd55fe3.js.map