const Proveedores = require("../model/ProveedorModel");

exports.index = async(req, res) => {
    res.send(await Proveedores.findAll())
}
exports.get = async(req, res) => {
    const { id } = req.params
    res.send(await Proveedores.findByPk(id));
}
exports.create = async(req, res) => {
    const { nombre, correo } = req.body;
    try {
        const ProveedoreCreado = await Proveedores.create({
            nombre: nombre,
            correo: correo
        })
        if (ProveedoreCreado) {
            res.json({
                codigo: 200,
                mensaje: "Proveedor Creado",
                proveedor: ProveedoreCreado
            })
        } else {
            res.json({
                codigo: 500,
                mensaje: "Proveedor no Creado"
            })
        }
    } catch (error) {
        res.json({
            codigo: 500,
            mensaje: error.message
        })
    }
}
exports.update = async(req, res) => {
    const { nombre, correo } = req.body;
    const { id } = req.params;
    try {
        const proveedorActualizado = await Proveedores.update({
            nombre: nombre,
            correo: correo
        }, { where: { id: id } })

        if (proveedorActualizado == 1) {
            res.json({
                mensaje: 'Proveedor Actualizado',
                codigo: 200,
                proveedor: proveedorActualizado
            })

        } else {
            res.json({
                mensaje: 'Proveedor No Actualizado',
                codigo: 500,
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
    const { id } = req.params;
    const proveedorEliminado = await Proveedores.destroy({ where: { id: id } })
    if (proveedorEliminado) {
        res.json({
            mensaje: 'Proveedor Eliminado',
            codigo: 200
        })
    } else {
        res.json({
            mensaje: 'Proveedor no Eliminado',
            codigo: 500
        })
    }
}