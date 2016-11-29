const koa = require('koa');
const app = koa();
const serve = require('koa-static');
// var bodyParser = require('koa-body');
const router = require('./router/routes.js');
var bodyParser = require('koa-bodyparser');

app.use(serve(__dirname + '/public'));
app.use(bodyParser());
app.use(router.routes());

app.listen(3000);

console.log('listening on port 3000');


