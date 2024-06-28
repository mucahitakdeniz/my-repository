"use strict";

const comment = require("../controllers/comment");

const router = require("express").Router();
const { isLogin } = require("../middlewares/permissions");

router.route("/").get(comment.list).post(isLogin, comment.create);
router.route("/:id").get(comment.list);
router
  .route("/:id")
  .post(isLogin, comment.update)
  .put(isLogin, comment.update)
  .patch(isLogin, comment.update)
  .delete(isLogin, comment.delete);

//------------------------------

module.exports = router;
