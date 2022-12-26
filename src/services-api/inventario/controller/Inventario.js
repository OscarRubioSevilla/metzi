const ArticuloSalida = require("../../articulos_venta/model/Articulo_VentaModel");
const ArticuloEntrada = require("../../articulos_entradas/model/Articulo_Entrada_Model");
const Articulo = require("../../articulos/model/ArticuloModel");

exports.index = async(req, res) => {
    const salida = await ArticuloSalida.findAll({
        where: {
            articulo_id: req.params.id
        }
    });
    const entrada = await ArticuloEntrada.findAll({
        where: {
            articulo_id: req.params.id
        }
    });
    const cantidadSalida = salida.reduce((acc, { cantidad }) => acc + cantidad, 0);
    const cantidadEntrada = entrada.reduce((acc, { cantidad }) => acc + cantidad, 0);
    const cantidadActual = cantidadEntrada - cantidadSalida;
    res.json({
        salida: cantidadSalida,
        entrada: cantidadEntrada,
        cantidadActual
    });
}