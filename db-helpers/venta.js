import Venta from '../models/venta.js'

const existeventaById=async(id)=>{
    const existe=await Venta.findById(id)

    if(! existe) throw new Error(`no exsiste venta con el id: ${id}`)

}


export {
    existeventaById
}
