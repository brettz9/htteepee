'use strict';

const http = require('../htteepee.js');

http.createServer = http.createMiddlewareServer(
  require('./middleware.js')(
    'Hello '
  ),
  // This can of course be different middleware
  require('./middleware.js')(
    'there '
  )
);

module.exports = http;
