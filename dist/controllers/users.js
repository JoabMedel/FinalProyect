"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = exports.getAll = void 0;

var _models = require("../models/");

var _jwt = require("../middlewares/jwt");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getAll = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      var results = yield _models.Users.findAll();
      res.json(results);
    } catch (error) {
      res.status(400).json({
        messsage: "Hubo un error al procesar tu petición"
      });
    }
  });

  return function getAll(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAll = getAll;

var getUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    try {
      var results = yield _models.Users.findOne({
        where: {
          id: req.params.id
        }
      });
      res.json(results);
    } catch (error) {
      res.status(400).json({
        messsage: "Hubo un error al procesar tu petición"
      });
    }
  });

  return function getUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUser = getUser;