import mongoose from 'mongoose'

const VentaSchema=mongoose.Schema({
    usuario:{type:mongoose.Types.ObjectId,ref:'Usuario',required:true},
    persona:{type:mongoose.Types.ObjectId,ref:'Persona',required:true},
    tipoComprobante:{type:String,maxlength:20},
    serieComprobante:{type:String, maxlength:20},
    numComprobante:{type:String,maxlength:20},
    impuesto:{type:String, maxlength:20},
    total:{type:String,maxlength:15},
    detalles:[{type:Array,maxlength:20,required:true,unique:true}],
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}

})

export default mongoose.model('Venta',VentaSchema);