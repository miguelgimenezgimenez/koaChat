// const koa = require('koa');
// const app = koa();
// const serve = require('koa-static');
// const router = require('./router/routes.js');
// const bodyParser = require('koa-bodyparser');
// const db = require('./config/db.js');
// const notFound = require('./Controller/notFound.js');

var request = require("request");

request('http://api.opencagedata.com/geocode/v1/json?q=gracia%2C+barcelona&pretty=1&key=a9453e210c2d52e888b59e1862507186', function (err, response, body) {
  var json = JSON.parse(body);
  // responseJSON.response = json.results.bounds;
  // callback(null, responseJSON);

  var options = {
    url: 'https://api.foursquare.com/v2/venues/search?ll=41.402307,2.156227&q=Bar&2GXM3244FPNAHBCMDFOAWLS5HUBHY0UWC1BQNZXIN43MN3J2= MH2WNBIQHNPUA2WJZOIZNNZMNTPSKVGHS5WRLQDTYZDTL3EC&client_secret=CLIENT_SECRET&v=20161008',
    headers: {
      Authorization: 'Basic TUgyV05CSVFITlBVQTJXSlpPSVpOTlpNTlRQU0tWR0hTNVdSTFFEVFlaRFRMM0VDOjJHWE0zMjQ0RlBOQUhCQ01ERk9BV0xTNUhVQkhZMFVXQzFCUU5aWElONDNNTjNKMg=='
    }
  };
  request(options, function (err, response, body) {
    console.log(body);
    var corpse = JSON.parse(body);
    console.log(corpse.venues);
  });
  console.log(json.results[0].geometry);
});
//
// app.use(serve(__dirname + '/public'));
// app.use(bodyParser());
// app.use(router.routes());
// // app.use(notFound);
//
//
//
// db.connect(function(err) {
//   if (err) console.error('error connecting: ' + err.stack);
//   app.listen(3000);
// });
//
//
//
