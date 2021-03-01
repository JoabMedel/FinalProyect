"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMail = void 0;

var _nodemailer = _interopRequireDefault(require("../utils/nodemailer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendMail = (req, res) => {
  try {
    (0, _nodemailer.default)();
    res.json({
      message: "El correo ha sido enviado satisfactoriamente"
    });
  } catch (error) {
    console.log(error);
  }
};

exports.sendMail = sendMail;