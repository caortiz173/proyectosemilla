import mongoose from 'mongoose'

const VentaSchema=mongoose.Schema({
    usuario:{type:mongoose.Types.ObjectId,ref:'Usuario',required:true},
    persona:{type:mongoose.Types.ObjectId,ref:'Persona',required:true},
    tipoComprobante:{type:String,maxlength:20},
    serieComprobante:{type:String, maxlength:20},
    numComprobante:{type:String,maxlength:20},
    impuesto:{type:Number, required:true},
    total:{type:String, required:true},
    detalles:[{
        _id: {type:String,required:true},
        articulo: {type:String,required:true},
        cantidad: {type:Number,required:true},
        precio: {type:Number,required:true},
        descuento: {type:Number,required:true},
    }],
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now}

})

export default mongoose.model('Venta',VentaSchema);