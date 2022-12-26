const Marca = require('../../marcas/model/MarcaModel');

exports.index = async(req, res) => {
    console.log(req.usuario_id)
    res.send(await Marca.findAll());
}
exports.get = async(req, res) => {
    const id = req.params.id;
    const marcaID = await Marcas.findByPk(id);
    console.log(marcaID);

    try {
        const marcaEncontrada = await Marcas.findOne({ where: { id: id } });

        if (marcaEncontrada) {
            res.json({
                codigo: 200,
                mensaje: "marca encontrada",
                marca: marcaEncontrada
            })

        } else if (!marcaEncontrada) {
            res.json({
                codigo: 500,
                mensaje: "Marca no encontrada"
            })
        }
    } catch (error) {
        res.json({
            codigo: 500,
            mensaje: "Error, marca no encontrada"
        })
    }

}
exports.create = async(req, res) => {
    const { nombre } = req.body;


    try {
        const marcarCreada = await Marca.create({ nombre });
        if (marcarCreada) {
            res.json({
                codigo: 200,
                mensaje: 'Marca creada',
                marca: marcarCreada
            });
        } else {
            res.json({
                codigo: 500,
                mensaje: 'Marca no creada'
            });
        }
    } catch (error) {
        res.json({
            codigo: 500,
            mensaje: 'Marca no creada'
        });
    }
}
exports.update = async(req, res) => {
    const { id } = req.params
    const nombre = req.body.nombre;

    try {
        const marcaActualizada = await Marcas.update({ nombre: nombre }, {
            where: {
                id: id
            }
        });

        if (marcaActualizada == 1) {
            res.json({
                codigo: 200,
                mensaje: "Marca Actualizada"
            })
        } else {
            res.json({
                codigo: 500,
                mensaje: "Error al actualizar"
            })
        }
    } catch (error) {
        res.json({
            codigo: 500,
            mensaje: "Error al actualizar"
        })
    }




}
exports.delete = async(req, res) => {
    const id = req.params.id
    try {
        const marcaEliminada = await Marcas.destroy({
            where: {
                id: id
            }
        })
        if (marcaEliminada) {
            res.json({
                codigo: 200,
                mensaje: "Marca Eliminada"
            })
        }
    } catch (error) {
        res.json({
            codigo: 500,
            mensaje: "Marca no Eliminada"
        })
    }
}