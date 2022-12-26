const db = require('../../../db/conexion');
const { DataTypes } = require('sequelize');


const Marcas = db.define('Marca', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: false } }
}, {
    timestamps: true,
    tableName: 'marcas',
    updatedAt: 'fecha_modificacion',
    createdAt: 'fecha_creacion'
});

module.exports = Marcas;