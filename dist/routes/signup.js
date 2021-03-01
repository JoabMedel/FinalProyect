"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _auth = require("../controllers/auth");

var _validators = require("../middlewares/validators");

var express = require('express');

var router = express.Router();
router.post("/users", (0, _validators.validate)(_validators.userSchema), _auth.signUp);
var _default = router;
exports.default = _default;