import Venta from '../models/venta.js'

const existeventaById=async(id)=>{
    const existe=await Venta.findById(id)

    if(! existe) throw new Error(`no exsiste venta con el id: ${id}`)

}

const existeventaByNombre=async(nombre)=>{
    const existe=await Venta.findOne({nombre})

    if(! existe) throw new Error(`ya existe un venta con ese nombre: ${nombre}`)

}

export {existeventaById,existeventaByNombre}