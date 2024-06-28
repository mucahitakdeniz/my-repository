"use strict";

const router = require("express").Router();
const {isAdmin, isLogin} =require('../middlewares/permissions')

router.use("/users", require("../routes/user"));
router.use("/blogs", require("../routes/blog"));
router.use("/categories", require("../routes/category"));
router.use("/comments", require("../routes/comment"));
router.use("/auth", require("../routes/auth"))
router.use("/tokens", require("../routes/token"))

router.use("/documents", require("../routes/document"));

module.exports = router;
