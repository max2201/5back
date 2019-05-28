const Router = require('koa-router');
const auth = new Router();

const User = require('../models/user');

auth.post('/signup', async (ctx) => {
    const user = await User.create({
        username: ctx.request.body.username,
        email: ctx.request.body.email,
        password: ctx.request.body.password,
    });

    ctx.body = user;
});

module.exports = auth;
