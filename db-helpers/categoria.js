import Categoria from '../models/categoria.js'

const existecategoriaById=async(id)=>{
    const existe=await Categoria.findById(id)

    if(! existe) throw new Error(`no existe categoria para el id: ${id}`)

}

const existecategoriaByNombre=async(nombre)=>{
    const existe=await Categoria.findOne({nombre})

    if(! existe) throw new Error(`ya existe un categoria con ese nombre: ${nombre}`)
}

export {existecategoriaById,existecategoriaByNombre}