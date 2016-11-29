const controller = require('../Controller/getStoredMessage');
const router = require('koa-router')();
//
router.get('/getStoredMessages', controller.getStoredMessages);
router.post('/store', controller.storeMessage);

module.exports = router;