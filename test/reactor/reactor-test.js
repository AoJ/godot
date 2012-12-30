/*
 * expire-test.js: Tests for the Expire reactor stream.
 *
 * (C) 2012, Nodejitsu Inc.
 *
 */

var assert = require('assert'),
    vows = require('vows'),
    godot = require('../../lib/godot');

vows.describe('godot/reactor').addBatch({
  "Godot reactor": {
    "should have the correct primiatives": function () {
      ['aggregate', 'change', 'email', 'expire', 'forward', 'sms', 'where'].forEach(function (method) {
        assert.isFunction(godot.reactor.Reactor.prototype[method]);
      });
    },
    "the register() method": {
      "when redefining a method": function () {
        assert.throws(
          function () {
            godot.reactor.register('expire', function () {})
          },
          /Cannot redefine/
        );
      }
    }
  }
}).export(module);