import mongoose from 'mongoose';

const PersonaSchema=mongoose.Schema({
    tipopersona:{type:String,requird:true,maxlength:50,uniqued:true},
    nombre:{type:String,required:true,maxlength:50},
    tipodocumento:{type:String,required:true,maxlength:50},
    numdocumento:{type:String,required:true},
    direccion:{type:String,required:true},
    telefono:{type:String,required:true,maxlength:20},
    email:{type:String,required:true,maxlength:50,unique:true},
    estado:{type:Number,default:1},
    createAt:{type:Date,default:Date.now}
});

export default mongoose.model('Persona', PersonaSchema);