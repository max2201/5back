const Router = require('koa-router');

const router = new Router();
const users = require('./users');
const auth = require('./auth');

router.use('/api/users', users.routes());
router.use('/api/auth', auth.routes());

module.exports = router;
