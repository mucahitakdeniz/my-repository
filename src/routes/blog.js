"use strict";

const blog = require("../controllers/blog");

const router = require("express").Router();
const { isLogin } = require("../middlewares/permissions");

router.route("/").get(blog.list).post(isLogin, blog.create);
router
  .route("/:id")
  .get(isLogin, blog.read)
  .patch(isLogin, blog.update)
  .put(isLogin, blog.update)
  .delete(isLogin, blog.delete);
router.route("/like/:id").get(isLogin, blog.like);

//------------------------------

module.exports = router;
