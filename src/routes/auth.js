"use strict";

const auth = require("../controllers/auth");

const router = require("express").Router();

router.route("/login").post(auth.login);
router.route("/logout").get(auth.logout);
router.route("/logout").post(auth.logout);
router.route("/changepassword").post(auth.forgotPasswordReceive);
router.route("/changepassword/:id").post(auth.forgotPasswordSend);

module.exports = router;
