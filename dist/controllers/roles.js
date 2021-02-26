"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateRoleUser = exports.updateRole = exports.addRoleUser = exports.addRole = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var {
  Roles,
  UserRoles
} = require("../models");

var addRole = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    try {
      var results = yield Roles.create(req.body);
      return res.status(201).json(results);
    } catch (error) {
      console.log(error);
    }
  });

  return function addRole(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.addRole = addRole;

var addRoleUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    console.log('ingresa');
    console.log(req.params.roleId);
    var userRole = {
      userId: req.body.userId,
      roleId: req.params.roleId
    };

    try {
      var results = yield UserRoles.create(userRole);
      return res.status(201).json(results);
    } catch (error) {
      console.log(error);
    }
  });

  return function addRoleUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.addRoleUser = addRoleUser;

var updateRole = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var findRole = yield Roles.findOne({
      where: {
        id: req.params.id
      }
    });

    if (findRole) {
      try {
        Roles.update({
          name: req.body.name
        }, {
          where: {
            id: req.params.id
          }
        });
        res.status(200).json({
          message: "actualizacion exitosa"
        });
      } catch (error) {
        res.satatus(500).json({
          message: "ocurrio un error intente mas tarde"
        });
      }
    } else {
      res.status(400).json({
        message: "hubo un problema para actualizar rol"
      });
    }
  });

  return function updateRole(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateRole = updateRole;

var updateRoleUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    var findUserRol = yield UserRoles.findOne({
      where: {
        id: req.params.id
      }
    });

    if (findUserRol) {
      try {
        UserRoles.update({
          userId: req.body.userId,
          roleId: req.body.roleId
        }, {
          where: {
            id: req.params.id
          }
        });
        res.status(200).json({
          message: "actualizacion exitosa"
        });
      } catch (error) {
        res.satatus(500).json({
          message: "ocurrio un error intente mas tarde"
        });
      }
    } else {
      res.status(400).json({
        message: "hubo un problema para actualizar rol de usuario"
      });
    }
  });

  return function updateRoleUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateRoleUser = updateRoleUser;