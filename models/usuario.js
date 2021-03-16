import mongoose from 'mongoose';

const UsuarioSchema=mongoose.Schema({
    nombre:{type:String,required:true,maxlength:50},
    apellido:{type:String,required:true,maxlength:50},
    genero:{type:String,required:true,maxlength:50},
    email:{type:String,required:true,maxlength:50,unique:true},
    password:{type:String,required:true},
    estado:{type:Number,default:1},
    createdAt:{type:Date,default:Date.now},
});

export default mongoose.model('Usuario', UsuarioSchema);