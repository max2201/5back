const { sequelize, Sequelize } = require('.');

const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {});

module.exports = User;
