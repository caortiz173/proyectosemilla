import mongoose from 'mongoose';

const ArticuloSchema=mongoose.Schema({
    categoria:{type:mongoose.Types.ObjectId,ref:'Categoria'},
    codigo:{type:String, required:true, maxlength:70, unique:true},
    nombre:{type:String, required:true, maxlength:50, unique:true},
    descripcion:{type:String, required:true, maxlength:255},
    precioventa:{type:String, required:true, maxlength:100},
    stock:{type:String, required:true, maxlength:100},
    estado:{type:Number, default:1},
    createdAt:{type:Date,default:Date.now},
});

export default mongoose.model('Articulo', ArticuloSchema);