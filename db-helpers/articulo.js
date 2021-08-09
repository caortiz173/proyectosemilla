import Articulo from '../models/articulo.js'

const existearticuloById=async(id)=>{
    const existe=await Articulo.findById(id)

    if(! existe) throw new Error(`no existe articulo para el id: ${id}`)

}

const existearticuloByNombre=async(nombre)=>{
    const existe=await Articulo.findOne({nombre})

    if(existe) throw new Error(`ya existe un articulo con ese nombre`)
}

const existearticuloByCodigo=async(codigo)=>{
    const existe=await Articulo.findOne({codigo})

    if(existe) throw new Error(`ya existe un articulo con ese codigo`)
}




export {
    existearticuloById,
    existearticuloByNombre,
    existearticuloByCodigo,
}