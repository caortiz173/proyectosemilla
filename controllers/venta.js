import Venta from "../models/venta.js";
import modificar from "../db-helpers/modificar.js";

const vent = {
  ventaGet: async (req, res) => {
    const { value } = req.query;
    const venta = await Venta.find({
      $or: [
        { tipoComprobante: new RegExp(value, "i") },
        { numComprobante: new RegExp(value, "i") },
      ],
    })
      .populate('usuario', ['nombre', 'email'])
      .populate('persona', ['nombre', 'tipoDocumento'])
      .sort({ createdAt: -1 });
    res.json({
      venta,
    });
  },

  ventaPost: async (req, res) => {
    const {
      usuario,
      persona,
      tipoComprobante,
      serieComprobante,
      numComprobante,
      impuesto,
      total,
      detalles,
    } = req.body;
    const venta = new Venta({
      usuario,
      persona,
      tipoComprobante,
      serieComprobante,
      numComprobante,
      impuesto,
      total,
      detalles,
    });

    venta.total = venta.detalles.reduce(
      (acc, articulo) =>
        acc + (articulo.cantidad * articulo.precio - articulo.descuento),
      0
    );
    venta.impuesto = venta.total * 0.19;

    await venta.save();

    venta.detalles.map((articulo) => modificar.disminuirStock(articulo._id, articulo.cantidad));

    res.json({
      venta,
    });
  },
  ventaById: async (req, res) => {
    const { id } = req.params;
    const venta = await Venta.findById({ _id: id });
    res.json({
      venta,
    });
  },
  ventaPut: async (req, res) => {
    const { id } = req.params;
    const { _id, createdAt, __v, estado, ...resto } = req.body;

    const venta = await Venta.findByIdAndUpdate(id, resto);

    res.json({
      venta,
    });
  },
  ventaActivar: async (req, res) => {
    const { id } = req.params;
    const venta = await Venta.findByIdAndUpdate(id, { estado: 1 });

    venta.detalles.map((articulo) =>
      modificar.disminuirStock(articulo._id, articulo.cantidad)
    );

    res.json({
      venta,
    });
  },
  ventaDesactivar: async (req, res) => {
    const { id } = req.params;
    const venta = await Venta.findByIdAndUpdate(id, { estado: 0 });

    venta.detalles.map((articulo) =>
      modificar.aumentarStock(articulo._id, articulo.cantidad)
    );

    res.json({
      venta,
    });
  },
  ventaDelete: async (req, res) => {
    const { id } = req.params;
    const venta = await Venta.findByIdAndDelete(id);

    res.json({
      venta,
    });
  },
};

export { vent };
