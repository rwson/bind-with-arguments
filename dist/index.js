"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

var functionMap = {
  AsyncWith: function AsyncWith(excutor, target) {
    for (
      var _len = arguments.length,
        argus = new Array(_len > 2 ? _len - 2 : 0),
        _key = 2;
      _key < _len;
      _key++
    ) {
      argus[_key - 2] = arguments[_key];
    }

    return (
      /*#__PURE__*/
      _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.next = 2;
                  return excutor.apply(target, argus);

                case 2:
                  return _context.abrupt("return", _context.sent);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })
      )
    );
  },
  AsyncEmpty: (function() {
    var _AsyncEmpty = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(excutor, target) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.next = 2;
                return excutor.call(target);

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })
    );

    function AsyncEmpty(_x, _x2) {
      return _AsyncEmpty.apply(this, arguments);
    }

    return AsyncEmpty;
  })(),
  SyncWith: function SyncWith(excutor, target) {
    for (
      var _len2 = arguments.length,
        argus = new Array(_len2 > 2 ? _len2 - 2 : 0),
        _key2 = 2;
      _key2 < _len2;
      _key2++
    ) {
      argus[_key2 - 2] = arguments[_key2];
    }

    return function() {
      return excutor.apply(target, argus);
    };
  },
  SyncEmpty: function SyncEmpty(excutor, target) {
    return excutor.call(target);
  }
};

function bindWithArguments(target, name, descriptor) {
  var excutor = target[name];
  var excutorType = {}.toString.call(excutor).slice(8, -1);
  var asyncCall = excutorType === "AsyncFunction" ? "Async" : "Sync";
  var emptyCall = excutor.length === 0 ? "Empty" : "With";
  var fnType = "".concat(asyncCall).concat(emptyCall);
  return Object.assign(target, descriptor, {
    value: functionMap[fnType].bind(null, excutor, target)
  });
}

var _default = bindWithArguments;
exports.default = _default;
