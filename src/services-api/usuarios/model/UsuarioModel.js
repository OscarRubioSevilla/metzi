const db = require('../../../db/conexion');
const { DataTypes } = require('sequelize');
const { encriptar, comparar } = require('../../../utils/encriptar');



const Usuario = db.define('Usuario', {
    id: {
        type: DataTypes.BIGINT(11),
        autoIncrement: true,
        primaryKey: true,

    },
    rol: { type: DataTypes.ENUM(['Administrador', 'Vendedor']), allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: false } },
    apellido_m: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: false } },
    apellido_p: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: false } },
    correo: { type: DataTypes.STRING, allowNull: false, validate: { isEmail: true } },
    contrasena: { type: DataTypes.STRING, allowNull: false },

}, {
    hooks: {
        beforeCreate: async(usuario) => {
            if (usuario.contrasena) {
                usuario.contrasena = await encriptar(usuario.contrasena);
            }
        },
        beforeUpdate: async(usuario) => {
            if (usuario.contrasena) {
                usuario.contrasena = await encriptar(usuario.contrasena);
            }
        }
    },
    tableName: 'usuarios',
    timestamps: true,
    updatedAt: 'fecha_modificacion',
    createdAt: 'fecha_creacion'
});

module.exports = Usuario;