const db = require('../../../db/conexion');
const { DataTypes } = require('sequelize');
const Marcas = require('../../marcas/model/MarcaModel');
const Categorias = require('../../categorias/model/CategoriaModel');


const Articulos = db.define('Articulo', {
    id: { type: DataTypes.BIGINT(11), primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: false } },
    marca_id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        references: {
            model: Marcas,
            key: 'id'
        }
    },
    categoria_id: {
        type: DataTypes.BIGINT(11),
        allowNull: false,
        references: {
            model: Categorias,
            key: 'id'
        }
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            notEmpty: false,
            isFloat: true
        }
    },
    configurable: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        validate: {
            notEmpty: false
        }
    },
    existencias: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            notEmpty: false
        }
    },
    sku: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true,
            isAlphanumeric: true
        }
    },
    codigo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isNumeric: true
        }
    },
    descripcion: {
        type: DataTypes.STRING
    },
}, {
    tableName: 'articulos',
    timestamps: true,
    updatedAt: 'fecha_modificacion',
    createdAt: 'fecha_creacion'
})

module.exports = Articulos;