const { DataTypes } = require('sequelize');
const db = require('../../../db/conexion');
const Articulo = require("../../articulos/model/ArticuloModel");
const Promocion = require("../../promociones/model/PromocionModel")

const Articulos_promociones = db.define('Articulos_promociones', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true },
    articulo_id: {
        type: DataTypes.BIGINT(11),
        references: {
            model: Articulo,
            key: 'id'
        },
    },
    promocion_id: {
        type: DataTypes.BIGINT(11),
        references: {
            model: Promocion,
            key: 'id'
        }
    },
}, {
    timestamps: true,
    updatedAt: 'fecha_modificacion',
    createdAt: 'fecha_creacion',
    tableName: 'articulos_promocion'

})

module.exports = Articulos_promociones;