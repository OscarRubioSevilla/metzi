const Configuracion = require('../../configuracion/model/ConfiguracionModel')

exports.index = async(req, res) => {
    res.send(await Configuracion.findAll())
};
exports.get = async(req, res) => {
    const { id } = req.params;

    const ConfigEncontrada = await Configuracion.findByPk(id);

    if (ConfigEncontrada) {
        res.json({
            codigo: '200',
            mensaje: 'Configuracion encontrada',
            configuracion: ConfigEncontrada
        })
    } else if (!ConfigEncontrada) {
        res.json({
            codigo: "500",
            mensaje: 'Configuracion no encontrada',
        })
    }

}

exports.create = async(req, res) => {
    const { articulo_id, talla, color, material, genero } = req.body

    try {
        const configCreada = await Configuracion.create({
            articulo_id: articulo_id,
            talla: talla,
            color: color,
            material: material,
            genero: genero
        })

        if (configCreada) {
            res.json({
                codigo: '200',
                mensaje: 'Configuracion Creada'
            })

        }

    } catch (err) {

        res.json({
            codigo: '500',
            mensaje: err.message
        })
    }


}
exports.update = async(req, res) => {
    const { id } = req.params
    const { articulo_id, talla, color, material, genero } = req.body

    try {
        const configActualizada = await Configuracion.update({
            articulo_id: articulo_id,
            talla: talla,
            color: color,
            material: material,
            genero: genero
        }, {
            where: {
                id: id
            }
        })
        if (configActualizada) {
            res.json({
                codigo: "200",
                mensaje: "Configuracion Actualizada"
            })

        } else {
            res.json({
                codigo: '500',
                mensaje: "Configuracion no Actualizada"
            })
        }
    } catch (error) {
        res.json({
            codigo: '500',
            mensaje: "Configuracion no Actualizada"
        })
    }

}
exports.delete = async(req, res) => {
    const id = req.params.id
    try {
        const configEliminada = await Configuracion.destroy({ where: { id: id } })

        if (configEliminada) {
            res.json({
                mensaje: 'Configuracion Eliminada',
                codigo: '200'
            })
        } else {
            res.json({
                mensaje: 'Configuracion no Eliminada',
                codigo: '500'
            })
        }
    } catch (error) {
        res.json({
            mensaje: 'Configuracion no Eliminada',
            codigo: '500'
        })
    }

}