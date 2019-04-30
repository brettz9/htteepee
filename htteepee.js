'use strict';

const http = require('http');

const stack = require('stack');

const _hs = http.createServer;

http.createServer = function createServer (...args) {
  return _hs.call(
    http,
    stack(...args)
  );
};

http.createMiddlewareServer = function (...mws) {
  return function createServer (...serverArgs) {
    return _hs.call(
      http,
      stack(...mws, ...serverArgs)
    ); // We really just need to support one argument for createServer()
  };
};

http.createMiddleware = function (...mws) {
  http.createServer = http.createMiddlewareServer(...mws);
  return http;
};

module.exports = http;
