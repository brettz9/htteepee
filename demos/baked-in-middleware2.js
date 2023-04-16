'use strict';

module.exports = require('../htteepee.js').createMiddleware(
  require('./middleware.js')(
    'Hello '
  ),
  // This can of course be different middleware
  require('./middleware.js')(
    'there '
  )
);
