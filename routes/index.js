const Router = require('koa-router');

const router = new Router();
const users = require('./users');
const auth = require('./auth');

router.use('/users', users.routes());
router.use('/auth', auth.routes());

module.exports = router;
