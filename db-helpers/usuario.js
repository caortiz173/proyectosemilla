import Usuario from '../models/usuario.js'

const existeusuarioById=async(id)=>{
    const existe=await Usuario.findById(id)

    if(! existe) throw new Error(`no exsiste usuario con el id: ${id}`)

}

const existeusuarioByNombre=async(nombre)=>{
    const existe=await Usuario.findOne({nombre})

    if(! existe) throw new Error(`ya existe un usuario con ese nombre`)

}

export {existeusuarioById,existeusuarioByNombre}