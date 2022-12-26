const Ventas = require('../model/VentaModel');
const DetalleVenta = require('../../articulos_venta/model/Articulo_VentaModel');
const { controlInventario } = require('../../articulos/utiles/mostrarInventario');


exports.index = async(req, res) => {
    res.send(await Ventas.findAll({
        where: {
            usuario_id: req.usuario_id
        }
    }))
}
exports.get = async(req, res) => {
    const { id } = req.params
    res.send(await Ventas.findByPk(id))
}
exports.create = async(req, res) => {
    const usuario_id = req.usuario_id;
    const { tipo_pago, total_venta, estado_venta, articulos } = req.body;
    articulos.forEach(({ id, cantidad }) => {
        console.log(id);

        const { cantidadActual } = controlInventario(id);
    });


    res.json({ mensaje: 'articulos' })
        // try {
        //     const ventaCreada = await Ventas.create({
        //         usuario_id,
        //         tipo_pago: tipo_pago,
        //         total_venta: total_venta,
        //         estado_venta: estado_venta,
        //     })
        //     if (ventaCreada) {

    //         articulos.forEach(async({ id, cantidad, precio }, indice) => {
    //             const subtotal = precio * cantidad;
    //             await DetalleVenta.create({
    //                 articulo_id: id,
    //                 venta_id: ventaCreada.id,
    //                 cantidad, 
    //                 precio,
    //                 subtotal
    //             });
    //         });
    //         res.status(200).json({
    //             mensaje: 'Venta creada',
    //             venta: ventaCreada
    //         })
    //     } else {
    //         res.status(500).json({
    //             mensaje: 'Venta no creada'
    //         })
    //     }
    // } catch (error) {
    //     console.log(error.message)
    //     res.status(500).json({
    //         mensaje: 'Venta no creada'
    //     })
    // }
}
exports.update = async(req, res) => {
    res.send(await Ventas.findAll())
}
exports.delete = async(req, res) => {
    res.send(await Ventas.findAll())
}