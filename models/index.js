const Sequelize = require('sequelize');

const sequelize = new Sequelize('test-database', 'postgres', '1', { host: 'localhost', dialect: 'postgres' });

module.exports = { sequelize, Sequelize };
