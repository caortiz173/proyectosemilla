import Compra from '../models/compra.js';
import modificar from "../db-helpers/modificar.js";


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
            .populate('usuario', ['nombre', 'email'])
            .populate('persona', ['nombre', 'tipoDocumento'])
            .sort({ 'createdAt': -1 })
        res.json({
            compra,
        })
    },


    compraPost: async (req, res) => {
        console.log(req.body)
        const { usuario, persona,tipoComprobante,serieComprobante,numComprobante, impuesto, total, detalles } = req.body;
        const compra = new Compra({ usuario,persona,tipoComprobante,serieComprobante,numComprobante, impuesto, total, detalles})

        compra.total= compra.detalles.reduce((acc, articulo)=> acc + (articulo.cantidad*articulo.precio),0)
        compra.impuesto= compra.total*0.19
 
        await compra.save();

        compra.detalles.map((articulo)=> modificar.aumentarStock(articulo._id,articulo.cantidad))

        res.json({
            compra
        })

    },
    compraById: async (req, res) => {
        const { id } = req.params;
        const compra = await Compra
        .findOne({ _id: id })
        .populate("usuario", ["nombre", "email"])
        .populate("persona", ["nombre", "tipodocumento"]);

        res.json({
            compra
        })
    },
    compraPut: async (req, res) => {
        const { id } = req.params;
        const { _id, createdAt, __v, estado, ...resto } = req.body;

        const compra = await Compra.findByIdAndUpdate(id, resto)

        res.json({
            compra,
        })
    },
    compraActivar: async (req, res) => {
        const { id } = req.params;
        const compra = await Compra.findByIdAndUpdate(id, { estado: 1 })

        compra.detalles.map((articulo)=> modificar.aumentarStock(articulo._id,articulo.cantidad))

        res.json({
            compra
        })
    },

    compraDesactivar: async (req, res) => {
        const { id } = req.params;
        const compra = await Compra.findByIdAndUpdate(id, { estado: 0 })

        compra.detalles.map((articulo)=> modificar.disminuirStock(articulo._id,articulo.cantidad))

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