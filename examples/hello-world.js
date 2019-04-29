'use strict';

const http = require('../');

http.createServer(require('./middleware')('Hello '), function (req, res) {

  res.end('World!');

}).listen(1337, '127.0.0.1');

// eslint-disable-next-line no-console
console.log('Server running at http://127.0.0.1:1337/');

// Can still use otherwise as regular "http" API
// console.log(http.STATUS_CODES);
