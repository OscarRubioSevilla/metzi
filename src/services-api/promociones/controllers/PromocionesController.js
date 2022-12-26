const Promociones = require('../model/PromocionModel');


exports.index = async(req, res) => {
    res.send(await Promociones.findAll())
}
exports.get = async(req, res) => {
    const id = req.params.id
    res.send(await Promociones.findByPk(id))
}
exports.create = async(req, res) => {
    const { nombre, descuento } = req.body
    try {
        const promocionCreada = await Promociones.create({
            nombre: nombre,
            descuento: descuento

        })
        if (promocionCreada) {
            res.json({
                codigo: '200',
                mensaje: 'Promocion Creada',
                promocion: promocionCreada
            })


        }
    } catch (error) {
        res.json({
            codigo: '200',
            mensaje: error.message
        })

    }
}
exports.update = async(req, res) => {
    const { id } = req.params;
    const { nombre, descuento } = req.body
    try {
        const promocionActualizada = await Promociones.update({
            nombre: nombre,
            descuento: descuento
        }, { where: { id: id } })

        if (promocionActualizada == 1) {
            res.json({
                codigo: 200,
                mensaje: 'Promocion Actualizada',
                promocion: promocionActualizada
            })
        } else if (promocionActualizada == 0) {
            res.json({
                codigo: 500,
                mensaje: 'Promocion no Actualizada',

            })
        }
    } catch (error) {
        res.json({
            mensaje: error.message,
            codigo: 500,


        })
    }

}
exports.delete = async(req, res) => {
    await Promociones.findAll()
}