import Persona from '../models/persona.js'

const existepersonaById=async(id)=>{
    const existe=await Persona.findById(id)

    if(! existe) throw new Error(`no exsiste persona con el id: ${id}`)

}


export {
    existepersonaById
}