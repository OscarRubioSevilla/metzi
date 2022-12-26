const db = require('../../../db/conexion');
const { DataTypes } = require('sequelize');
const Usuarios = require('../../usuarios/model/UsuarioModel');


const Ventas = db.define('Venta', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true },
    usuario_id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        validate: { notEmpty: false },
        references: {
            model: Usuarios,
            key: 'id'
        }
    },
    tipo_pago: { type: DataTypes.ENUM(['Efectivo', 'Tarjeta debito']), defaultValue: 'Efectivo' },
    total_venta: { type: DataTypes.FLOAT, allowNull: false, validate: { notEmpty: false } },
    estado_venta: {
        type: DataTypes.ENUM(
            [
                'Pagado',
                'Entregado',
                'Enviado',
                'Cancelado'
            ]),
        allowNull: false,
        validate: { notEmpty: false }
    },

}, {
    tableName: 'ventas',
    timestamps: true,
    updatedAt: 'fecha_modificacion',
    createdAt: 'fecha_creacion'
})

module.exports = Ventas;