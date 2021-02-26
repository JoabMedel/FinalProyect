"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _users = require("../controllers/users");

var _expressJwt = _interopRequireDefault(require("express-jwt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');

var router = express.Router();
router.get("/users", (0, _expressJwt.default)({
  secret: process.env.SECRET_KEY,
  algorithms: ['HS384']
}), _users.getAll);
router.get("/users/:id", (0, _expressJwt.default)({
  secret: process.env.SECRET_KEY,
  algorithms: ['HS384']
}), _users.getUser);
var _default = router;
exports.default = _default;