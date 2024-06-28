"use strict";

const category = require("../controllers/category");

const router = require("express").Router();
const { isAdmin, isLogin } = require("../middlewares/permissions");

router.route("/").get(isLogin, category.list).post(isAdmin, category.create);
router
  .route("/:id")
  .get(isLogin, category.read)
  .patch(isAdmin, category.update)
  .put(isAdmin, category.update)
  .delete(isAdmin, category.delete);

module.exports = router;
