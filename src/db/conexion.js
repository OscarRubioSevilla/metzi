const { Sequelize } = require('sequelize');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = require('../configToken/config');


module.exports = sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'mariadb'
});