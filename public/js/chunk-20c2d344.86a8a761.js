(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20c2d344"],{"17a5":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("v-toolbar",{staticClass:"black",attrs:{app:""}},[a("v-btn",{staticClass:"ma-2",attrs:{color:"primary",dark:""},on:{click:t.atras}},[a("v-icon",{attrs:{dark:"",left:""}},[t._v(" mdi-arrow-left ")]),t._v("Atrás ")],1),a("v-spacer"),a("v-text-field",{attrs:{dark:"","prepend-icon":"mdi-magnify",label:"Búsqueda","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),a("v-spacer"),a("v-badge",{attrs:{bordered:"",color:"error",icon:"mdi-lock",overlap:""}},[a("v-btn",{staticClass:"black--text",attrs:{color:"white",depressed:""},on:{click:t.cerrar}},[t._v(" Cerrar Sesión ")])],1)],1)],1),a("br"),a("div",{staticClass:"container"},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.artic,search:t.search,"sort-by":"calories"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:""}},[a("v-toolbar-title",[t._v("Articulos")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-btn",{on:{click:function(e){return t.imprimir()}}},[a("v-icon",[t._v("mdi-printer")])],1),a("v-spacer"),a("v-dialog",{attrs:{persistent:"","max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",o,!1),i),[t._v(" Nuevo ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Articulos")])]),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Categoria"},model:{value:t.editedItem.categoria,callback:function(e){t.$set(t.editedItem,"categoria",e)},expression:"editedItem.categoria"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Código"},model:{value:t.editedItem.codigo,callback:function(e){t.$set(t.editedItem,"codigo",e)},expression:"editedItem.codigo"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Nombre"},model:{value:t.editedItem.nombre,callback:function(e){t.$set(t.editedItem,"nombre",e)},expression:"editedItem.nombre"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Descripción"},model:{value:t.editedItem.descripcion,callback:function(e){t.$set(t.editedItem,"descripcion",e)},expression:"editedItem.descripcion"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Precio_venta"},model:{value:t.editedItem.precioventa,callback:function(e){t.$set(t.editedItem,"precioventa",e)},expression:"editedItem.precioventa"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Stock"},model:{value:t.editedItem.stock,callback:function(e){t.$set(t.editedItem,"stock",e)},expression:"editedItem.stock"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Estado"},model:{value:t.editedItem.estado,callback:function(e){t.$set(t.editedItem,"estado",e)},expression:"editedItem.estado"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancelar ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.guardar}},[t._v(" Guardar ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"290"},model:{value:t.Modal,callback:function(e){t.Modal=e},expression:"Modal"}},[a("v-card",[1==t.Accion?a("v-card-title",{staticClass:"headline"},[t._v(" Activar Item ")]):t._e(),2==t.Accion?a("v-card-title",{staticClass:"headline"},[t._v(" Desactivar Item ")]):t._e(),a("v-card-text",[t._v(" Estás a punto de "),1==t.Accion?a("span",[t._v("activar ")]):t._e(),2==t.Accion?a("span",[t._v("desactivar ")]):t._e(),t._v(" el item "+t._s(t.Nombre)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(e){return t.activarDesactivarCerrar()}}},[t._v(" Cancelar ")]),1==t.Accion?a("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(e){return t.activar()}}},[t._v(" Activar ")]):t._e(),2==t.Accion?a("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(e){return t.desactivar()}}},[t._v(" Desactivar ")]):t._e()],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Are you sure you want to delete this item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.opciones",fn:function(e){var i=e.item;return[a("v-icon",{staticClass:"mr-2",attrs:{color:"primary",small:""},on:{click:function(e){return t.editar(i)}}},[t._v(" mdi-pencil ")]),i.estado?[a("v-icon",{attrs:{small:""},on:{click:function(e){return t.activarDesactivarMostrar(2,i)}}},[t._v(" mdi-block-helper ")])]:[a("v-icon",{attrs:{small:""},on:{click:function(e){return t.activarDesactivarMostrar(1,i)}}},[t._v(" mdi-check ")])]]}},{key:"item.estado",fn:function(e){var i=e.item;return[i.estado?a("div",[a("span",{staticClass:"green--text"},[t._v("Activo")])]):a("div",[a("span",{staticClass:"red--text"},[t._v("Inactivo")])])]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v(" Reset ")])]},proxy:!0}],null,!0)})],1)])},o=[],c=(a("d81d"),a("bc3a")),r=a.n(c),s=a("3d20"),n=a.n(s),d=a("8baf"),l=(a("0da4"),{name:"articulos",components:{},data:function(){return{search:"",artic:[],zb:0,dialog:!1,headers:[{text:"Código",align:"start",sortable:!1,value:"codigo"},{text:"Categoría",value:"categoria.nombre"},{text:"Nombre",value:"nombre"},{text:"Stock",value:"stock"},{text:"Precio",value:"precioventa"},{text:"Descripción",value:"descripcion"},{text:"Estado",value:"estado"},{text:"Opciones",value:"opciones",sortable:!1}],editedItem:{codigo:"",categoria:"",nombre:"",stock:"",precioventa:0,descripcion:"",estado:0}}},created:function(){this.listarArticulos()},methods:{listarArticulos:function(){var t=this,e={headers:{token:this.$store.state.token}};r.a.get("artic",e).then((function(e){console.log(e.data.artic),t.artic=e.data.articulo})).catch((function(t){console.log(t.response)}))},guardar:function(){var t=this;if(0==this.zb){console.log("Estoy guardando",this.zb);var e=this,a={headers:{token:this.$store.state.token}};r.a.post("artic",{categoria:this.editedItem.categoria,codigo:this.editedItem.codigo,nombre:this.editedItem.nombre,descripcion:this.editedItem.descripcion,precioventa:this.editedItem.precioventa,stock:this.editedItem.stock,estado:this.editedItem.estado},a).then((function(a){console.log(a.data),e.listarArticulos(),t.editedItem.categoria="",t.editedItem.codigo="",t.editedItem.nombre="",t.editedItem.descripcion="",t.editedItem.precioventa="",t.editedItem.stock="",t.editedItem.estado=""})).catch((function(t){console.log(t.response)}))}else{console.log("Estoy editando"+this.zb+" id "+this.id);var i=this,o={headers:{token:this.$store.state.token}};r.a.put("artic/".concat(this.id),{categoria:this.editedItem.categoria.nombre,codigo:this.editedItem.codigo,nombre:this.editedItem.nombre,descripcion:this.editedItem.descripcion,precioventa:this.editedItem.precioventa,stock:this.editedItem.stock},o).then((function(e){console.log(e.data),i.listarArticulos(),t.editedItem.categoria.nombre="",t.editedItem.codigo="",t.editedItem.nombre="",t.editedItem.descripcion="",t.editedItem.precioventa="",t.editedItem.stock="",t.editedItem.estado=""})).catch((function(t){console.log(t.data)}))}},editar:function(t){this.zb=1,console.log(t),this.id=t._id,this.editedItem.categoria=t.categoria.nombre,this.editedItem.codigo=t.codigo,this.editedItem.nombre=t.nombre,this.editedItem.descripcion=t.descripcion,this.editedItem.precioventa=t.precioventa,this.editedItem.stock=t.stock,this.dialog=!0},activarDesactivarMostrar:function(t,e){var a=e._id;if(console.log(t),2==t){console.log(a);var i=this,o={headers:{token:this.$store.state.token}};r.a.put("artic/desactivar/".concat(a),{estado:0},o).then((function(){i.listarArticulos()})).catch((function(t){console.log(t)}))}else if(1==t){console.log(a);var c=this,s={headers:{token:this.$store.state.token}};r.a.put("artic/activar/".concat(a),{estado:1},s).then((function(){c.listarArticulos()})).catch((function(t){console.log(t)}))}},activar:function(){var t=this,e={headers:{token:this.$store.state.token}};r.a.put("categoria/activar/".concat(t.Id),{},e).then((function(){t.Modal=0,t.Accion=0,t.Nombre="",t.Id="",t.listar()})).catch((function(t){console.log(t)}))},desactivar:function(){var t=this,e={headers:{token:this.$store.state.token}};r.a.put("categoria/desactivar/".concat(t.Id),{},e).then((function(){t.Modal=0,t.Accion=0,t.Nombre="",t.Id="",t.listar()})).catch((function(t){console.log(t)}))},atras:function(){this.$router.push("/menu")},cerrar:function(){n.a.fire({background:"black",position:"top-center",icon:"success",title:"Su sesión ha finalizado con éxito",showConfirmButton:!1,timer:1500}),this.$store.dispatch("setToken",""),this.$router.push("/roles")},imprimir:function(){var t=[{title:"Codigo",dataKey:"codigo"},{title:"Nombre",dataKey:"nombre"},{title:"Categoria",dataKey:"categoria"},{title:"Stock",dataKey:"stock"},{title:"Precioventa",dataKey:"precioventa"},{title:"Descripcion",dataKey:"descripcion"},{title:"Estado",dataKey:"estado"}],e=[];this.artic.map((function(t){e.push({codigo:t.codigo,nombre:t.nombre,categoria:t.categoria,stock:t.stock,precioventa:t.precioventa,descripcion:t.descripcion,estado:t.estado})}));var a=new d["default"]("p","pt");a.autoTable(t,e,{margin:{top:60},addPageContent:function(){a.text("Lista de Articulos",40,30)}}),a.save("Articulos.pdf")}}}),v=l,m=(a("c08c"),a("2877")),u=a("6544"),p=a.n(u),h=a("4ca6"),b=a("8336"),f=a("b0af"),g=a("99d9"),k=a("62ad"),I=a("a523"),x=a("8fea"),_=a("169a"),C=a("ce7e"),y=a("132d"),A=a("0fd9"),$=a("2fa4"),V=a("8654"),w=a("71d9"),D=a("2a7f"),T=Object(m["a"])(v,i,o,!1,null,null,null);e["default"]=T.exports;p()(T,{VBadge:h["a"],VBtn:b["a"],VCard:f["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VCol:k["a"],VContainer:I["a"],VDataTable:x["a"],VDialog:_["a"],VDivider:C["a"],VIcon:y["a"],VRow:A["a"],VSpacer:$["a"],VTextField:V["a"],VToolbar:w["a"],VToolbarTitle:D["a"]})},"939b":function(t,e,a){},c08c:function(t,e,a){"use strict";a("939b")}}]);
//# sourceMappingURL=chunk-20c2d344.86a8a761.js.map