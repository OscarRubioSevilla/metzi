const { Sequelize } = require('sequelize');

module.exports = sequelize = new Sequelize('metzi_dev', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});