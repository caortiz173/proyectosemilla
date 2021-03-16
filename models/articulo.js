import mongoose from 'mongoose';

const ArticuloSchema=mongoose.Schema({
    categoria:{type:String, required:true, maxlength:50},
    codigo:{type:String, required:true, maxlength:50, unique:true},
    nombre:{type:String, maxlength:20},
    descripcion:{type:String,maxlength:50,required:true},
    precioventa:{type:String, required:true},
    stock:{type:String, required:true},
    estado:{type:Number, default:1},
    createdAt:{type:Date,default:Date.now},
});

export default mongoose.model('Articulo', ArticuloSchema);