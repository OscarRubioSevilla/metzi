const db = require('../../../db/conexion');
const { DataTypes } = require('sequelize');
const Articulo = require("../../articulos/model/ArticuloModel");
const Venta = require("../../ventas/model/VentaModel");


const Articulos_venta = db.define('Articulos_venta', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true },
    venta_id: {
        type: DataTypes.BIGINT(11),
        references: {
            model: Venta,
            key: 'id'
        },
    },
    articulo_id: {
        type: DataTypes.BIGINT(11),
        references: {
            model: Articulo,
            key: 'id'
        },
    },
    cantidad: DataTypes.INTEGER,
    precio: DataTypes.FLOAT,
    subtotal: DataTypes.FLOAT
}, {
    timestamps: true,
    updatedAt: 'fecha_modificacion',
    createdAt: 'fecha_creacion',
    tableName: 'detalle_venta'

})

module.exports = Articulos_venta;