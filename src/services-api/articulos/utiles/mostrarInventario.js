const ArticuloSalida = require("../../articulos_venta/model/Articulo_VentaModel");
const ArticuloEntrada = require("../../articulos_entradas/model/Articulo_Entrada_Model");

exports.controlInventario = async(id) => {
    const salida = await ArticuloSalida.findAll({
        where: { articulo_id: id }
    });
    const entrada = await ArticuloEntrada.findAll({
        where: { articulo_id: id }
    });
    const cantidadSalida = salida.reduce((acc, { cantidad }) => acc + cantidad, 0);
    const cantidadEntrada = entrada.reduce((acc, { cantidad }) => acc + cantidad, 0);
    const cantidadActual = cantidadEntrada - cantidadSalida;
    return {
        salida: cantidadSalida,
        entrada: cantidadEntrada,
        cantidadActual
    };
}