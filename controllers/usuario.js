import Usuario from '../models/usuario.js'
import bcryptjs from 'bcryptjs';
import {generarJWT} from '../middlewares/validar-JWT.js'

const user={
    usuarioGet: async(req, res) => {
        const {value}=req.query;
        const usuario=await Usuario
        .find({
            $or:[
                {nombre:new RegExp(value, 'i')},
                {apellido:new RegExp(value, 'i')},
                {genero:new RegExp(value, 'i')},
                {email:new RegExp(value, 'i')},
                {password:new RegExp(value, 'i')},
                {rol:new RegExp(value, 'i')}
            ]
        })
        .sort({'createdAt':-1})
        res.json({
            usuario
        })
    },

    login: async (req,res)=>{
        const {email,password}=req.body;
        const usuario=await Usuario.findOne({email})
        if(! usuario){
            return res.json({
                msg:'Usuario/Password no son correctos'
            })
        }
        if (usuario.estado===0){
            return res.json({
                msg:'Usuario/Password no son correctos:Estado'
            })
        }
        const validarPassword=bcryptjs.compareSync(password,usuario.password)
        if(! validarPassword){
            return res.json({
                msg: 'Usuario/Password no son correctos:Password'
            })
        }
        const token= await generarJWT(usuario.id)

        return res.json({
            usuario, 
            token
        })
    },
    
    usuarioPost: async(req,res) => {
        const {nombre,apellido,genero,email,password,rol}=req.body;
        const usuario = new Usuario({nombre,apellido,genero,email,password,rol})

        //encriptar
        const salt=bcryptjs.genSaltSync();
        usuario.password=bcryptjs.hashSync(password,salt)

        await usuario.save();

        res.json({
            usuario
        })
    
    },
    
    usuarioById : async(req,res) => {
        const {id}=req.params;
        const usuario=await Usuario.findOne({_id:id})
        res.json({
            usuario
        })
    },

    usuarioPut:async(req,res)=>{
        const {id}=req.params;
        const {_id,email,__v,createdAt,rol,estado,password,...resto}=req.body;

        if(password){
            const salt=bcryptjs.genSaltSync();
            resto.password=bcryptjs.hashSync(password,salt)   
        }

        const usuario=await Usuario.findByIdAndUpdate(id,resto)

        res.json({
            usuario
        })
    },

    usuarioActivar:async(req,res)=>{
        const {id}=req.params;
        const usuario =await Usuario.findByIdAndUpdate(id,{estado:1})

        res.json({
            usuario
        })
    },

    usuarioDesactivar:async(req,res)=>{
        const {id}=req.params;
        const usuario=await Usuario.findByIdAndUpdate(id,{estado:0})

        res.json({
            usuario
        })
    },

    usuarioDelete:async(req, res)=>{
        const {id}=req.params;
        const usuario=await Usuario.findByIdAndDelete(id)

        res.json({
            usuario
        })
    }

}

export {user};