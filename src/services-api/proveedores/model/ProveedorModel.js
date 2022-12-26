const db = require('../../../db/conexion');
const { DataTypes } = require('sequelize');


const Proveedores = db.define('Proveedor', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: false } },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: false
        }
    },
}, {
    tableName: 'proveedores',
    timestamps: true,
    updatedAt: 'fecha_modificacion',
    createdAt: 'fecha_creacion'
})
module.exports = Proveedores;