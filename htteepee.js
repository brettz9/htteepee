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

http.createMiddlewareServer = function (...args) {
  // Todo: Replace with `const mws = args.flat();` after Node 11/12 assumed
  const mws = args.reduce(function (arr, arg) {
    // We only need a single depth, so this is sufficient
    return arr.concat(arg);
  }, []);
  return function createServer (...serverArgs) {
    return _hs.call(
      http,
      stack(...mws, ...serverArgs)
    ); // We really just need to support one argument for createServer()
  };
};

module.exports = http;
