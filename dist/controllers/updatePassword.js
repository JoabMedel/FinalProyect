"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = void 0;

var _models = require("../models/");

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var updateUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      var {
        password
      } = req.body;
      var findToken = yield _models.ResetTokens.findOne({
        where: {
          token: req.query.tkn,
          active: true
        }
      });

      if (findToken) {
        if (findToken.expirationDate > (0, _moment.default)()) {
          var pass = password;

          var encryptpass = _bcryptjs.default.hashSync(pass, 10);

          password = encryptpass;

          _models.Users.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: password
          }, {
            where: {
              id: req.query.uid,
              token: req.query.tkn
            }
          });

          _models.ResetTokens.update({
            active: false
          }, {
            where: {
              token: req.query.tkn
            }
          });

          return res.status(201).json({
            message: "Actualizacion exitosa"
          });
        } else {
          _models.ResetTokens.update({
            active: false
          }, {
            where: {
              token: req.query.tkn
            }
          });

          res.status(401).json({
            message: "tiempo de actualizacion expirado"
          });
        }
      } else {
        return res.status(401).json({
          message: "token invalido"
        });
      }
    } catch (error) {
      res.status(401).json({
        message: "intenta mas tarde"
      });
    }
  });

  return function updateUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;