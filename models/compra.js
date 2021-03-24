import mongoose from  'mongoose';

const CompraSchema=mongoose.Schema({
    usuario:{type:mongoose.Types.ObjectId,ref:'Usuario',required:true},
    persona:{type:mongoose.Types.ObjectId,ref:'Persona',required:true},
    tipoComprobante:{type:String,maxlength:50},
    serieComprobante:{type:String, maxlength:50},
    numComprobante:{type:String,maxlength:20},
    impuesto:{type:String, maxlength:50},
    total:{type:String,maxlength:15},
    detalles:[{type:Array,maxlength:70,required:true,unique:true}],
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}
})

export default mongoose.model('Compra',CompraSchema);