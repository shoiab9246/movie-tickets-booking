const nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b2fef7185e563e",
      pass: "be67bd0f193b10"
    }
  });

     module.exports = transport;
