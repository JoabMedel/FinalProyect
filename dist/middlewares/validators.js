"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = exports.schemeUpdatRolUser = exports.schemeAddRolUser = exports.schemeRol = exports.schemeRessetPassword = exports.schemaLogin = exports.userSchema = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _spanishJoiMessages = _interopRequireDefault(require("../utils/spanish-joi-messages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var userSchema = _joi.default.object({
  firstName: _joi.default.string().required().label("nombre").messages(_spanishJoiMessages.default),
  lastName: _joi.default.string().required().messages(_spanishJoiMessages.default),
  email: _joi.default.string().email().required().messages(_spanishJoiMessages.default),
  password: _joi.default.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages(_spanishJoiMessages.default),
  repeat_password: _joi.default.ref('password')
});

exports.userSchema = userSchema;

var schemaLogin = _joi.default.object({
  email: _joi.default.string().email().required().messages(_spanishJoiMessages.default),
  password: _joi.default.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages(_spanishJoiMessages.default)
});

exports.schemaLogin = schemaLogin;

var schemeRessetPassword = _joi.default.object({
  email: _joi.default.string().email().required().messages(_spanishJoiMessages.default)
});

exports.schemeRessetPassword = schemeRessetPassword;

var schemeRol = _joi.default.object({
  name: _joi.default.string().required().label("nombre").messages(_spanishJoiMessages.default)
});

exports.schemeRol = schemeRol;

var schemeAddRolUser = _joi.default.object({
  userId: _joi.default.number().integer()
});

exports.schemeAddRolUser = schemeAddRolUser;

var schemeUpdatRolUser = _joi.default.object({
  userId: _joi.default.number().integer(),
  roleId: _joi.default.number().integer()
});

exports.schemeUpdatRolUser = schemeUpdatRolUser;

var validate = schema => {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (req, res, next) {
      try {
        yield schema.validateAsync(req.body);
        next();
      } catch (err) {
        console.log(err.details[0].context);
        res.status(400).json({
          message: err.message
        });
      }
    });

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.validate = validate;