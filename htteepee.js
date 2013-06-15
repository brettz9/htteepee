/*globals module, require*/

var stack = require('stack'),
    http = require('http'),
    _hs = http.createServer;

http.createServer = function createServer () {
    'use strict';
    return _hs.call(http,
        stack.apply(stack, Array.prototype.slice.call(arguments))
    );
};

module.exports = http;
