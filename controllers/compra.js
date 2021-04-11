import Compra from '../models/compra.js';
import Articulo from '../models/articulo.js'


const compr = {
    compraGet: async (req, res) => {
        const { value } = req.query;
        const compra = await Compra
            .find({
                $or: [
                    { tipoComprobante: new RegExp(value, 'i') },
                    { numComprobante: new RegExp(value, 'i') },
                   
                ]
            })
            .populate('usuarios', ['nombre', 'email'])
            .populate('personas', ['nombre', 'tipoDocumento'])
            .sort({ 'createdAt': -1 })
        res.json({
            compra
        })
    },

    aumentarStock:async(id,cantidad)=>{
        let {stock}=await Articulo.findById(id);
        stock=parseInt(stock)+parseInt(cantidad)

        await Articulo.findByIdAndUpdate({id},stock)
    },

    disminuirStock: async(id,cantidad)=>{
        let {stock}=await Articulo.findById(id);
        stock=parseInt(stock)-parseInt(cantidad)

        await Articulo.findByIdAndUpdate({id},stock)
    },

    compraPost: async (req, res) => {
        console.log(req.body)
        const { usuario, persona,tipoComprobante,serieComprobante,numComprobante, impuesto, total, detalles } = req.body;
        const compra = new Compra({ usuario,persona,tipoComprobante,serieComprobante,numComprobante, impuesto, total, detalles})

        compra.total= compra.detalles.reduce((acc, articulo)=> acc + (articulo.cantidad*articulo.precio),0)
        compra.ipuesto= compra.total*0.19

        await compra.save();

        detalles.map((articulo)=> aumentarStock(articulo._id,articulo.cantidad))

        res.json({
            compra
        })

    },
    compraById: async (req, res) => {
        const { id } = req.params;
        const compra = await Compra.findById({ _id: id })
        res.json({
            compra
        })
    },
    compraPut: async (req, res) => {
        const { id } = req.params;
        const { _id, createdAt, __v, estado, ...resto } = req.body;

        const compra = await Compra.findByIdAndUpdate(id, resto)

        res.json({
            compra
        })
    },
    compraActivar: async (req, res) => {
        const { id } = req.params;
        const compra = await Compra.findByIdAndUpdate(id, { estado: 1 })

        detalles.map((articulo)=> aumentarStock(articulo._id,articulo.cantidad))

        res.json({
            compra
        })
    },

    compraDesactivar: async (req, res) => {
        const { id } = req.params;
        const compra = await Compra.findByIdAndUpdate(id, { estado: 0 })

        detalles.map((articulo)=> disminuirStock(articulo._id,articulo.cantidad))

        res.json({
            compra
        })
    },
    compraDelete: async (req, res) => {
        const { id } = req.params;
        const compra = await Compra.findByIdAndDelete(id)

        res.json({
            compra
        })
    }
}

export {compr};