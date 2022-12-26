const { DataTypes } = require('sequelize');
const db = require('../../../db/conexion');

const Articulo = require("../../articulos/model/ArticuloModel");
const Proveedores = require('../../proveedores/model/ProveedorModel');



const Articulos_entrada = db.define('ArticulosEntrada', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true },
    articulo_id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        references: {
            model: Articulo,
            key: 'id'
        },
    },
    proveedor_id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        references: {
            model: Proveedores,
            key: 'id'
        }
    },
    cantidad: { type: DataTypes.INTEGER, allowNull: false, validate: { notEmpty: false } }
}, {
    timestamps: true,
    updatedAt: 'fecha_modificacion',
    createdAt: 'fecha_creacion',
    tableName: 'articulos_entrada'

})

module.exports = Articulos_entrada;