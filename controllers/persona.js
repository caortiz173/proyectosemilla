import Persona from '../models/persona.js'
import bcryptjs from 'bcryptjs';

const pers={

    personaGet: async (req,res) =>{
        const {value}= req.query;
        const persona= await Persona
        .find({
            $or:[
                {tipopersona:new RegExp(value, 'i')},
                {nombre:new RegExp(value, 'i')},
                {tipodocumento:new RegExp(value, 'i')},
                {numdocumento:new RegExp(value, 'i')},
                {direccion:new RegExp(value, 'i')},
                {telefono:new RegExp(value, 'i')},
                {email:new RegExp(value, 'i')},
                {rol:new RegExp(value, 'i')}
            ]
        })

        .sort({'createdAt':-1})
        res.json({
            persona
        })
    },

    personaPost: async(req,res) => {
        const {tipopersona,nombre,tipodocumento,numdocumento,direccion,telefono,email}=req.body;
        const persoan = new Usuario({tipopersona,nombre,tipodocumento,numdocumento,direccion,telefono,email})

        //encriptar
        const salt=bcryptjs.genSaltSync();
        persona.password=bcryptjs.hashSync(password,salt)

        await persona.save();

        res.json({
            persona
        })
    
    },
    
    personaById : async(req,res) => {
        const {id}=req.params;
        const persona=await Persona.findOne({_id:id})
        res.json({
            persona
        })
    },

    personaPut:async(req,res)=>{
        const {id}=req.params;
        const {_id,tipopersona,nombre,tipodocumento,numdocumento,direccion,telefono,email,rol,estado,__v,createdAt,...resto}=req.body;

        if(password){
            const salt=bcryptjs.genSaltSync();
            resto.password=bcryptjs.hashSync(password,salt)   
        }

        const persona=await Persona.findByIdAndUpdate(id,resto)

        res.json({
            persona
        })
    },

    personaActivar:async(req,res)=>{
        const {id}=req.params;
        const persona =await Persona.findByIdAndUpdate(id,{estado:1})

        res.json({
            persona
        })
    },

    personaDesactivar:async(req,res)=>{
        const {id}=req.params;
        const persona=await Persona.findByIdAndUpdate(id,{estado:0})

        res.json({
            persona
        })
    },

    personaDelete:async(req, res)=>{
        const {id}=req.params;
        const persona=await Persona.findByIdAndDelete(id)

        res.json({
            persona
        })
    }
}

export {pers};