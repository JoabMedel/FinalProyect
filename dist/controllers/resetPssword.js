"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createToken = exports.resetpasword = void 0;

var _models = require("../models/");

var _uuid = require("uuid");

var _moment = _interopRequireDefault(require("moment"));

var _nodemailer = _interopRequireDefault(require("../utils/nodemailer"));

var _lost_password = require("../templates/lost_password");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var resetpasword = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var findUser = yield _models.Users.findOne({
      where: {
        email: req.body.email
      }
    });
    var token = 0;

    if (findUser) {
      req.body.token = (0, _uuid.v4)();
      req.body.active = true;
      req.body.expirationDate = (0, _moment.default)().add(1, "hours");
      req.body.userId = findUser.id;
      var tokens = {
        token: req.body.token,
        expirationDate: req.body.expirationDate,
        userId: req.body.userId,
        active: req.body.active
      };
      var sendToken = yield createToken(tokens);
      var tokenuuid = sendToken.dataValues.token;

      try {
        (0, _nodemailer.default)(findUser.email, tokenuuid, findUser.id);
        res.status(201).json({
          message: "token enviado correctamente"
        });
      } catch (_unused) {
        res.status(401).json({
          message: "intente mas tarde"
        });
      }
    } else {
      res.status(401).json({
        message: "correo invalido"
      });
    }
  });

  return function resetpasword(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.resetpasword = resetpasword;

var createToken = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (tokenBody) {
    var token = _models.ResetTokens.create({
      token: tokenBody.token,
      expirationDate: tokenBody.expirationDate,
      userId: tokenBody.userId,
      active: tokenBody.active
    });

    return token;
  });

  return function createToken(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createToken = createToken;