"use strict";

const nodemailer = require("nodemailer");

const myEmail = process.env?.EMAIL;
const password = process.env?.PASSWORD;


module.exports = (userEmail, temporarypassword) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: myEmail,
      pass: password,
    },
  });

  // Compose the email
  let mailOptions = {
    from: myEmail,
    to: userEmail,
    Subject: "Password reset",
    text: `Hello. Password reset code:${temporarypassword} `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("ERROR", error);
      res.errorStatusCode = 500;
      throw new Error(" Internal server error ");
    } else {
      res.status(200).json({ message: "Password reset email sent" });
    }
  });
};
