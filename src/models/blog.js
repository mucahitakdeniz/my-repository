"use strict";

const mongoose = require("mongoose");
const Comment = require("./comment");
/* ------------------------------------------------------- *
{
    "title": " Title",
    "content": "...content... ",
    "status": "p",
    "image": "...url...",
    "category_id": "65baabb1a9f41227c047d8a0"
    "author": "test"
}
 ------------------------------------------------------- */
// Blog Model:

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["p", "d"],
      default: "p",
    },
    image: {
      type: String,
      trim: true,
      default:
        "https://th.bing.com/th/id/OIP.s4Owt_DFJzU5XqxwgM7yoAHaHa?w=192&h=190&c=7&r=0&o=5&pid=1.7",
    },

    likes_n: {
      type: Array,
      default: [],
    },
    likes: {
      type: Number,
      default: function () {
        return this.likes_n.length;
      },
      transform: function () {
        return this.likes_n.length;
      },
    },
    post_views_n: {
      type: Array,
      default: [],
    },
    post_views: {
      type: Number,
      default: function () {
        return this.post_views_n.length;
      },
      transform: function () {
        return this.post_views_n.length;
      },
    },
    comment_count: {
      type: Number,
      default: 0,
    },

    author: {
      type: String,
      required: true,
      trim: true,
    },
    author_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
    category_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Category",
    },
  },
  {
    collection: "blogs",
    timestamps: true,
  }
);

BlogSchema.pre("init", function (data) {
  data.createds = data.createdAt.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
});

module.exports = mongoose.model("Blog", BlogSchema);
