const db = require('../../../db/conexion');
const { DataTypes } = require('sequelize');

const Categoria = db.define('Categoria', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true } },
    descripcion: DataTypes.STRING,
    ruta: DataTypes.STRING
}, {
    tableName: 'categorias',
    timestamps: true,
    updatedAt: 'fecha_modificacion',
    createdAt: 'fecha_creacion',
})

module.exports = Categoria;