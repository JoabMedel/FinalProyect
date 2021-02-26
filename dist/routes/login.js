"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _auth = require("../controllers/auth");

var _validators = require("../middlewares/validators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post("/login", (0, _validators.validate)(_validators.schemaLogin), _auth.login);
var _default = router;
exports.default = _default;