"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _roles = require("../controllers/roles");

var _validators = require("../middlewares/validators");

var _expressJwt = _interopRequireDefault(require("express-jwt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post("/roles/:roleId/", (0, _expressJwt.default)({
  secret: process.env.SECRET_KEY,
  algorithms: ['HS384']
}), (0, _validators.validate)(_validators.schemeAddRolUser), _roles.addRoleUser);
router.patch("/roleUser/:id", (0, _expressJwt.default)({
  secret: process.env.SECRET_KEY,
  algorithms: ['HS384']
}), (0, _validators.validate)(_validators.schemeUpdatRolUser), _roles.updateRoleUser);
var _default = router;
exports.default = _default;