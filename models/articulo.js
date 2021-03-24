import mongoose from 'mongoose';

const ArticuloSchema=mongoose.Schema({
    categoria:{type:mongoose.Schema.Types.ObjectId,ref:'Categoria',required:true},
    codigo:{type:String, required:true, maxlength:70, unique:true},
    nombre:{type:String,required:true, maxlength:50},
    descripcion:{type:String,maxlength:255},
    precioventa:{type:String, required:true},
    stock:{type:String, required:true},
    estado:{type:Number, default:1},
    createdAt:{type:Date,default:Date.now},
});

export default mongoose.model('Articulo', ArticuloSchema);