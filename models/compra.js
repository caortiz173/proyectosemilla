import mongoose from  'mongoose';

const CompraSchema=mongoose.Schema({
    usuario:{type:mongoose.Types.ObjectId,ref:'Usuario',required:true},
    persona:{type:mongoose.Types.ObjectId,ref:'Persona',required:true},
    tipoComprobante:{type:String,maxlength:50},
    serieComprobante:{type:String, maxlength:50},
    numComprobante:{type:String,maxlength:20},
    impuesto:{type:Number, maxlength:50, required:true},
    total:{type:Number,maxlength:15, required:true},
    detalles:[{
        _id: {type:String,required:true},
        articulo: {type:String,required:true},
        cantidad: {type:Number,required:true},
        precio: {type:Number,required:true},
    }],
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}
})

export default mongoose.model('Compra',CompraSchema);