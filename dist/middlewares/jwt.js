"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateJWT = exports.generateJWT = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateJWT = user => {
  var token = _jsonwebtoken.default.sign(user, process.env.SECRET_KEY, {
    algorithm: "HS384",
    expiresIn: "1hr"
  });

  return token;
};

exports.generateJWT = generateJWT;

var validateJWT = (req, res) => {
  var bearerToken = req.headers.authorization;
  var token = bearerToken.split(' ')[1];

  if (token) {
    try {
      var decode = _jsonwebtoken.default.verify(token, process.env.SECRET_KEY);

      return decode;
    } catch (error) {
      console.error();
      return false;
    }
  } else {
    return false;
  }
};

exports.validateJWT = validateJWT;