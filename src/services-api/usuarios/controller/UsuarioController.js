const Usuarios = require("../model/UsuarioModel");
const Usuario = require("../model/UsuarioModel");
const { comparar } = require('../../../utils/encriptar');
const { crearToken } = require('../../../utils/jwt')

exports.login = async(req, res) => {

    try {
        const usuario = await Usuario.findOne({ where: { correo: req.body.correo } });

        if (!usuario) {
            res.json({
                mensaje: "Correo o contraseña incorrecto",
                codigo: 500
            })
        }
        const validado = await comparar(req.body.contrasena, usuario.contrasena);
        if (validado) {
            const token = crearToken(usuario);

            res.json({
                mensaje: 'Autenticación correcta',
                token,
                codigo: 200
            });
        } else {
            res.json({ mensaje: "Contraseña o correo incorrecto", codigo: 500 });
        }
    } catch (error) {
        res.json({
            mensaje: error.message
        });
    }
}
exports.index = async(req, res) => {
    res.send(await Usuarios.findAll())
}

exports.get = async(req, res) => {
    const { id } = req.params
    res.send(await Usuario.findByPk(id))
}
exports.create = async(req, res) => {
    const { rol, nombre, apellido_m, apellido_p, correo, contrasena } = req.body;

    try {
        const usuarioCreado = await Usuario.create({
            rol: rol,
            nombre: nombre,
            apellido_m: apellido_m,
            apellido_p: apellido_p,
            correo: correo,
            contrasena: contrasena
        })

        if (usuarioCreado) {
            res.json({
                codigo: 200,
                mensaje: 'Usuario Creado',
                usuario: usuarioCreado
            })

        } else {
            res.json({
                codigo: 500,
                mensaje: 'Usuario no Creado'

            })

        }
    } catch (err) {
        res.json({
            codigo: 500,
            mensaje: err.message
        })
    }
}
exports.update = async(req, res) => {
    const { rol, nombre, apellido_m, apellido_p, correo, contrasena } = req.body;
    const { id } = req.params
    const usurioActualizado = await Usuario.update({
        rol: rol,
        nombre: nombre,
        apellido_m: apellido_m,
        apellido_p: apellido_p,
        correo: correo,
        contrasena: contrasena
    }, { where: { id: id } })
    if (usurioActualizado == 1) {
        res.json({
            codigo: 200,
            mensaje: "Usuario Actualizado"
        })
    } else {
        res.json({
            codigo: 500,
            mensaje: 'Usuario No actualizado'
        })
    }
}
exports.delete = async(req, res) => {
    const { id } = req.params
    const usuarioElimiando = await Usuario.destroy({ where: { id: id } })
    if (usuarioElimiando) {
        res.json({ mensaje: 'Usuario Eliminado', codigo: 200, oro: usuarioElimiando })
    } else {
        res.json({ mensaje: 'Usuario  no Eliminado o no existe', codigo: 500, usuarioElimiando })
    }
}