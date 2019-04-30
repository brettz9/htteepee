'use strict';

const http = require('../');

http.createServer = http.createMiddlewareServer(
  require('./middleware')(
    'Hello '
  ),
  // This can of course be different middleware
  require('./middleware')(
    'there '
  )
);

module.exports = http;
