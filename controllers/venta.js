import Venta from '../models/venta.js'

const vent = {
    ventaGet: async (req, res) => {
        const { value } = req.query;
        const venta = await Venta
            .find({
                $or: [
                    { usuario: new RegExp(value, 'i') },
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
            venta
        })
    },

    ventaPost: async (req, res) => {
        console.log(req.body)
        const { usuario, persona, tipoComprobante, serieComprobante, numComprobante, impuesto, total, detalles } = req.body;
        const venta = new Venta({ usuario, persona, tipoComprobante, serieComprobante, numComprobante, impuesto, total, detalles })

        await venta.save();
        res.json({
            venta
        })

    },
    ventaById: async (req, res) => {
        const { id } = req.params;
        const venta = await Venta.findById({ _id: id })
        res.json({
            venta
        })
    },
    ventaPut: async (req, res) => {
        const { id } = req.params;
        const { _id, createdAt, __v, estado, ...resto } = req.body;

        const venta = await Venta.findByIdAndUpdate(id, resto)

        res.json({
            venta
        })
    },
    ventaActivar: async (req, res) => {
        const { id } = req.params;
        const venta = await Venta.findByIdAndUpdate(id, { estado: 1 })

        res.json({
            venta
        })
    },
    ventaDesactivar: async (req, res) => {
        const { id } = req.params;
        const venta = await Venta.findByIdAndUpdate(id, { estado: 0 })

        res.json({
            venta
        })
    },
    ventaDelete: async (req, res) => {
        const { id } = req.params;
        const venta = await Venta.findByIdAndDelete(id)

        res.json({
            venta
        })
    }
}

export { vent };