"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _googleapis = require("googleapis");

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var googleClientId = process.env.GOOGLE_CLIENT_ID;
var googleSecret = process.env.GOOGLE_SECRET;
var googleRefreshToken = process.env.GOOGLE_REFRESH_TOKEN;
var Oauth2 = _googleapis.google.auth.OAuth2;
var oauth2Client = new Oauth2(googleClientId, googleSecret, "https://developers.google.com/oauthplayground");
oauth2Client.setCredentials({
  "refresh_token": googleRefreshToken
});
var accessToken = oauth2Client.getAccessToken();

var smtpTransport = _nodemailer.default.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "pedrofelipeortiz@gmail.com",
    clientId: googleClientId,
    clientSecret: googleSecret,
    refreshToken: googleRefreshToken,
    accessToken: accessToken
  },
  tls: {
    rejectUnauthorized: false
  }
});

var sendEmail = (emailSolicited, token, userId) => {
  console.log(token, userId);
  var url = "http://localhost:8080/users?tkn=" + token + "&uid=" + userId;

  var templateEmail = _fs.default.readFileSync(_path.default.join(__dirname, "..", "templates", "lost_password.html"));

  console.log('token' + token);
  var mailOptions = {
    from: "pedrofelipeortiz@gmail.com",
    to: emailSolicited,
    subject: "Solicitud para cambio de contrasena",
    text: url
  };
  console.log(templateEmail);
  smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });
};

var _default = sendEmail;
exports.default = _default;