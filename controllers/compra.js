import Compra from '../models/compra.js'

const compr = {
    compraGet: async (req, res) => {
        const { value } = req.query;
        const compra = await Compra
            .find({
                $or: [
                    {usuario: new RegExp(value, 'i') },
                    { persona: new RegExp(value, 'i') },
                    { tipoComprobante: new RegExp(value, 'i') },
                    { serieComprobante: new RegExp(value, 'i') },
                    { numComprobante: new RegExp(value, 'i') },
                    { impuesto: new RegExp(value, 'i') },
                    { total: new RegExp(value, 'i') },
                    { detalle: new RegExp(value, 'i') },
                ]
            })
            .sort({ 'createdAt': -1 })
        res.json({
            compra
        })
    },

    compraPost: async (req, res) => {
        console.log(req.body)
        const { usuario, persona,tipoComprobante,serieComprobante,numComprobante, impuesto, total, detalles } = req.body;
        const compra = new Compra({  usuario, persona,tipoComprobante,serieComprobante,numComprobante, impuesto, total, detalles})

        await compra.save();
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

        res.json({
            compra
        })
    },
    compraDesactivar: async (req, res) => {
        const { id } = req.params;
        const compra = await Compra.findByIdAndUpdate(id, { estado: 0 })

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