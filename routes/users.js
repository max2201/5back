const Router = require('koa-router');
const users = new Router();

const User = require('../models/user');

users.get('/', async (ctx) => {
    const allUsers = await User.findAll();

    ctx.body = allUsers;
});

module.exports = users;
