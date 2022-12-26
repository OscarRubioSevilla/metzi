const db = require('../../../db/conexion');
const { DataTypes } = require('sequelize');
const Articulos = require('../../articulos/model/ArticuloModel');


const Configuracion = db.define('Configuracion', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true },
    articulo_id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        validate: { notEmpty: false },
        references: {
            model: Articulos,
            key: 'id'
        }
    },
    talla: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: false } },
    color: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: false } },
    material: DataTypes.STRING,
    genero: { type: DataTypes.ENUM(['Hombre', 'Mujer', "Indefinido"]), allowNull: false }
}, {
    timestamps: true,
    updatedAt: 'fecha_modificacion',
    createdAt: 'fecha_creacion',
    tableName: 'configuracion_articulo'
})

module.exports = Configuracion;