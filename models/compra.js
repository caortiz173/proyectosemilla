import mongoose from  'mongoose';

const CompraSchema=mongoose.Schema({
    usuario:{type:mongoose.Types.ObjectId,ref:'Usuario'},
    persona:{type:mongoose.Types.ObjectId,ref:'Persona'},
    tipoComprobante:{type:String,maxlength:50},
    serieComprobante:{type:String, maxlength:50},
    numComprobante:{type:String,maxlength:20},
    impuesto:{type:Number, maxlength:50},
    total:{type:Number,maxlength:15},
    detalles:[{
        _id: {type:String,maxlength:15},
        articulo: {type:String,maxlength:15},
        cantidad: {type:Number,maxlength:50},
        precio: {type:Number,maxlength:50},
    }],
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}
})

export default mongoose.model('Compra',CompraSchema);