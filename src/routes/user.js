"use strict";

const router = require("express").Router();
const user = require("../controllers/user");

const { isAdmin, isLogin } = require("../middlewares/permissions");

router.route("/").get(isAdmin, user.list).post(user.create);

router
  .route("/:id")
  .get(isLogin, user.read)
  .patch(isLogin, user.update)
  .put(isLogin, user.update)
  .delete(isLogin, user.delete);

module.exports = router;
