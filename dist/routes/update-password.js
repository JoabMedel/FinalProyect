"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _updatePassword = require("../controllers/updatePassword");

var _validators = require("../middlewares/validators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.patch("/users", (0, _validators.validate)(_validators.userSchema), _updatePassword.updateUser);
var _default = router;
exports.default = _default;