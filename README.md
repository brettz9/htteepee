# htteepee

A teepee you can use for adding layers over your Node HTTP servers!

Allows you to easily add middleware layers to your Node.js server.

Uses [stack](https://github.com/creationix/stack/) but allowing for a very
minor simplification in API usage.

## Installation

```shell
npm i htteepee
```

## Usage

Just change:

```js
const http = require('http');
```

...to this:

```js
const http = require('htteepee');
```

...and add your middleware functions to the beginning of `createServer` calls
(without need for an extra require and wrapping):

```js
http.createServer(require('./middleware')('Hello'), function (req, res) {

  res.end('World!');

}).listen(1337, '127.0.0.1');
```

Or, if you want to minimize interference with source files even more, you
can require your own file containing the baked in middleware:

```js
const http = require('./baked-in-middleware');

http.createServer(function (req, res) {

  res.end('World!');

}).listen(1337, '127.0.0.1');
```

...and use the `createMiddlewareServer` method inside the required
middleware file:

```js
const http = require('htteepee');

http.createServer = http.createMiddlewareServer(require('./middleware')(
  'Hello '
));

module.exports = http;
```

or for an even easier API, use `createMiddleware`:

```js
module.exports = require('htteepee').createMiddleware(require('./middleware')(
  'Hello '
));
```

## API

### `createServer(...callbacks)`

Passes on all callbacks to [stack](https://github.com/creationix/stack/)
and uses the result to set up an http server.

Each callback accepted by stack is a function which accepts three arguments:
`req`, `res`, and `next`. The latter should be called with no arguments to
continue the chain or be called with an `Error` object whose `stack` property
will be printed and logged and the chain discontinued.

(Note: The last argument can be your regular `createServer(req, res)` handler
where no `next` argument is expected unless you wish to default to the
404/500 behavior mentioned below.)

Will give a 404 Not Found if no processing has occurred (e.g., if no callbacks
are passed in or the chain was continued by all callbacks including the last
one).

Will give a 500 Error if an exception is thrown by one of the callbacks or
if `next` were called by one of them with an `Error` (or any truthy item).

### `createMiddlewareServer(...middlewareCallbacks)`

Accepts middleware callbacks of the same signature described under
`createServer` (but the final argument is not expected to be the main
application `createServer` callback).

Returns a function which can be set on `htteepee` (or used standalone)
to function as the main application `createServer`.

## `createMiddleware(...middlewareCallbacks)`

Replaces the `htteepee` `createServer` with the result of calling
`createMiddlewareServer` with the `middlewareCallbacks` arguments.

## To-dos

1. Demos with multiple middleware
1. Tests
1. https
