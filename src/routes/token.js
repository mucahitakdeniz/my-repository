"use strict";

const token = require("../controllers/token");

const router = require("express").Router();
const { isAdmin } = require("../middlewares/permissions");

router.route("/").get(isAdmin, token.list);
router.route("/:id").delete(token.delete);

module.exports = router;
