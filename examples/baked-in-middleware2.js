'use strict';

module.exports = require('../').createMiddleware(require('./middleware')(
  'Hello '
));
