'use strict';

const http = require('../');

http.createServer = http.createMiddlewareServer(require('./middleware')(
  'Hello '
));

module.exports = http;
