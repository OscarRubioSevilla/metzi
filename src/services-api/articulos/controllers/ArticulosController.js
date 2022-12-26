const Articulos = require('../model/ArticuloModel');
const { controlInventario } = require('../utiles/mostrarInventario')

exports.index = async(req, res) => {
    res.json(await Articulos.findAll());
}
exports.inventario = async(req, res) => {
    res.json(await controlInventario(req.params.id));
}
exports.get = async(req, res) => {
    const id = req.params.id
    const ArticuloID = await Articulos.findByPk(id);
    if (ArticuloID) {
        res.json({
            mensaje: "Articulo encontrado",
            codigo: 200,
            articulo: ArticuloID
        })
    }
}
exports.create = async(req, res) => {
    const { nombre, precio, configurable, existencias, sku, codigo, descripcion } = req.body;

    try {
        const articuloCreado = await Articulos.create({
            nombre: nombre,
            precio: precio,
            configurable: configurable,
            existencias: existencias,
            sku: sku,
            codigo: codigo,
            descripcion: descripcion
        })
        if (articuloCreado) {
            res.json({
                codigo: 200,
                mensaje: 'Marca creada',
                articulo: articuloCreado
            })
        } else {
            res.json({
                codigo: 500,
                mensaje: 'Articulo no creado'
            })
        }
    } catch (error) {
        res.json({
            codigo: 500,
            mensaje: 'Marca no creada'
        });
    }
    res.send('Articulo creado');
}
exports.update = async(req, res) => {
    const id = req.params.id;
    const { nombre, precio, configurable, existencias, sku, codigo, descripcion } = req.body;


    try {
        const articuloModificado = await Articulos.update({
            nombre: nombre,
            precio: precio,
            configurable: configurable,
            existencias: existencias,
            sku: sku,
            codigo: codigo,
            descripcion: descripcion
        }, {
            where: {
                id: id
            }
        })

        if (articuloModificado == 1) {
            res.json({
                codigo: 200,
                mensaje: 'Articulo modificado',
                articulo: articuloModificado

            })


        } else {
            res.json({
                codigo: 500,
                mensaje: 'Fallo al actualizar Articulo'
            })


        }


    } catch (error) {
        res.json({
            codigo: 500,
            mensaje: error.message
        })

    }


}
exports.delete = async(req, res) => {
    const id = req.params.id;
    console.log(id)
    try {
        const marcaEliminada = await Articulos.destroy({
            where: {
                id: id
            }
        });
        if (marcaEliminada) {
            res.json({
                codigo: '200',
                mensaje: "Marca Eliminada"
            })
        }

    } catch (error) {
        res.json({
            codigo: '500',
            mensaje: "Marca no Eliminada"
        })

    }
}