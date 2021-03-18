import Persona from '../models/persona.js'

const existepersonaById=async(id)=>{
    const existe=await Persona.findById(id)

    if(! existe) throw new Error(`no exsiste persona con el id: ${id}`)

}

const existepersonaByNombre=async(nombre)=>{
    const existe=await Persona.findOne({nombre})

    if(! existe) throw new Error(`ya existe un persona con ese nombre`)

}

export {existepersonaById,existepersonaByNombre}