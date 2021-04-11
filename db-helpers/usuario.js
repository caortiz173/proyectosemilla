import Usuario from '../models/usuario.js'

const existeusuarioById=async(id)=>{
    const existe=await Usuario.findById(id)

    if(! existe) throw new Error(`no exsiste usuario con el id: ${id}`)

}


export {
    existeusuarioById

}