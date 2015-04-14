'use strict';

var test = require('tape');
var deferr = require('../');

test('Should not throw with falsey argument', function (t) {
  t.doesNotThrow(function () {
    deferr(null);
  });
  t.end();
});

test('Should throw with error argument', function (t) {
  t.throws(function () {
    deferr(new Error());
  });
  t.end();
});
