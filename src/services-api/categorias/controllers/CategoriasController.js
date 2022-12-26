const Categorias = require("../model/CategoriaModel");

exports.index = async(req, res) => {

    res.send(await Categorias.findAll())

}
exports.get = async(req, res) => {
    const { id } = req.params
    await Categorias.findByPk(id)
}
exports.create = async(req, res) => {
    const { nombre, descripcion, ruta } = req.body
    try {
        const categoriaCreada = await Categorias.create({
            nombre: nombre,
            descripcion: descripcion,
            ruta: ruta

        })
        if (categoriaCreada) {
            res.json({
                codigo: "500",
                mensaje: "Categoria Creada",
                categoria: categoriaCreada
            })

        } else {
            res.json({
                codigo: "500",
                mensaje: "Categoria  no Creada"
            })
        }
    } catch (error) {
        res.json({ mensaje: error.message, codigo: "500" })

    }


}
exports.update = async(req, res) => {
    const id = req.params.id;
    const { nombre, descripcion, ruta } = req.body;

    const categoriaActualizada = await Categorias.update({
        nombre: nombre,
        descripcion: descripcion,
        ruta: ruta
    }, { where: { id: id } })

    if (categoriaActualizada) {
        res.json({
            codigo: "200",
            mensaje: "Categoria Actualizada",
            categoria: categoriaActualizada
        })

    } else {
        res.json({
            codigo: "500",
            mensaje: "Categoria  no Actualizada",
            categoria: categoriaActualizada
        })

    }



}
exports.delete = async(req, res) => {
    const { id } = req.params;

    Categorias.destroy({ where: { id: id } })

}