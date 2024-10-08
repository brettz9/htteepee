'use strict';
module.exports = function middleware (prefix) {
  return function (req, res, next) {
    const _end = res.end;
    res.end = function (data) {
      _end.call(res, prefix + data);
    };
    next();
  };
};
