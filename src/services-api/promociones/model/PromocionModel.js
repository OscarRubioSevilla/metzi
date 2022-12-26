const db = require('../../../db/conexion');
const { DataTypes } = require('sequelize');


const Promociones = db.define('Promocion', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true },
    nombre: DataTypes.STRING,
    descuento: DataTypes.STRING,

}, {
    timestamps: true,
    tableName: 'promociones',
    updatedAt: 'fecha_modificacion',
    createdAt: 'fecha_creacion'
})

module.exports = Promociones;