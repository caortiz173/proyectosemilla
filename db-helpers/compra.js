import Compra from '../models/compra.js'

const existecompraById=async(id)=>{
    const existe=await Compra.findById(id)

    if(! existe) throw new Error(`no existe compra para el id: ${id}`)

}

const existecompraByNombre=async(nombre)=>{
    const existe=await Compra.findOne({nombre})

    if(! existe) throw new Error(`ya existe un compra con ese nombre`)
}

export {existecompraById,existecompraByNombre}