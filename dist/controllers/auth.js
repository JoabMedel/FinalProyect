"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = exports.login = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jwt = require("../middlewares/jwt");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var {
  Users
} = require("../models");

var login = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var {
      email,
      password
    } = req.body; //Solicitar el registro del usuario que tenga el email solicitado

    try {
      var results = yield Users.findOne({
        where: {
          email
        }
      });
      console.log(email); //Comparar la contraseña

      var validPassword = _bcryptjs.default.compareSync(password, results.password);

      if (validPassword) {
        //Generar la contraseña
        var token = (0, _jwt.generateJWT)({
          id: results.id,
          firstName: results.firstName,
          lastName: results.lastName,
          email: email
        });
        res.json({
          message: "Has iniciado sesión correctamente",
          token
        });
      } else {
        //Enviaremos un error
        res.status(401).json({
          message: "Las credenciales son incorrectas"
        });
      }
    } catch (error) {
      res.status(401).json({
        message: "Las credenciales son incorrectas"
      });
    }
  });

  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.login = login;

var signUp = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var {
      email,
      password
    } = req.body;
    var results = yield Users.findOne({
      where: {
        email: email
      }
    });

    if (results) {
      return res.status(400).json({
        message: "400 - verificar datos"
      });
    } else {
      try {
        var pass = req.body.password;

        var encryptedPass = _bcryptjs.default.hashSync(pass, 10); //encripto la contraseña con bcrypt


        req.body.password = encryptedPass; //reasignando la contraseña encriptada

        var _results = yield Users.create(req.body);

        return res.status(201).json(_results);
      } catch (error) {
        console.log(error);
      }
    }
  });

  return function signUp(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signUp = signUp;