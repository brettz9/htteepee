'use strict';

module.exports = require('../').createMiddleware(
  require('./middleware')(
    'Hello '
  ),
  // This can of course be different middleware
  require('./middleware')(
    'there '
  )
);
