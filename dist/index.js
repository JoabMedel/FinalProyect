"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _signup = _interopRequireDefault(require("./routes/signup"));

var _login = _interopRequireDefault(require("./routes/login"));

var _users = _interopRequireDefault(require("./routes/users"));

var _addRol = _interopRequireDefault(require("./routes/addRol"));

var _rolForUser = _interopRequireDefault(require("./routes/rolForUser"));

var _updatePassword = _interopRequireDefault(require("./routes/update-password"));

var _resetPassword = _interopRequireDefault(require("./routes/reset-password"));

var _sendMail = _interopRequireDefault(require("./routes/sendMail"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');

var app = express();
app.use(express.json());
app.use((0, _cors.default)());
app.use((0, _helmet.default)());
app.use("/api/v1", _signup.default);
app.use("/api/v1", _login.default);
app.use("/api/v1", _rolForUser.default);
app.use("/api/v1", _addRol.default);
app.use("/api/v1", _users.default);
app.use("/api/v1", _resetPassword.default);
app.use("/api/v1", _updatePassword.default);
app.use("/api/v1", _sendMail.default);
var _default = app;
exports.default = _default;