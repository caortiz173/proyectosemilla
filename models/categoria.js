import mongoose from 'mongoose'

const CategoriaSchema=mongoose.Schema({
    nombre:{type:String,required:true,maxlength:50,unique:true},
    descripcion:{type:String,maxlength:150},
    estado:{type:Number,default:1},//estado:1 activo estado:0 como inactivo
    createAt:{type:Date,default:Date.now}
});

export default mongoose.model('Categoria',CategoriaSchema);