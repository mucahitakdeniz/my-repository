"use strict";

const mongoose = require("mongoose");
/* ------------------------------------------------------- *
{
    "content": "...comment...",
    "author_id": "user_id",
    "blog_id": "blog_id",
}
 ------------------------------------------------------- */
// Comment Model:

const CommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
    },
    author_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    author_name: {
      type: String,
      required: true,
      ref: "User",
    },
    blog_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Blog",
    },
  },
  {
    collection: "comments",
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", CommentSchema);
