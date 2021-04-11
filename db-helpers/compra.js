import Compra from '../models/compra.js'

const existecompraById=async(id)=>{
    const existe=await Compra.findById(id)

    if(! existe) throw new Error(`no existe compra para el id: ${id}`)

}


export {
    existecompraById
   
}