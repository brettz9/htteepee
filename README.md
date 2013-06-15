htteepee
=======

A teepee you can use to cover your Node HTTP servers!

Allows you to easily add middleware layers to your Node.js server.

    ```npm install htteepee```

Uses [stack](https://github.com/creationix/stack/) but allowing for a very minor simplification in API usage.

Just change:

    ```var http = require('http');```

...to this:

    ```var http = require('htteepee');```

...and add your middleware functions to the beginning of createServer calls (without need for an extra require and wrapping):

    ```http.createServer(require('./middleware')('Hello'), function (req, res) {

        res.end('World!');

    }).listen(1337, '127.0.0.1');```
