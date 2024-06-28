"use strict";

const Blog = require("../models/blog");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "List Blogs"
         */
    const data = await Blog.find()
      .sort({ createdAt: -1 })
      .populate(["category_id"]);
    res.status(202).send(data);
  },

  create: async (req, res) => {
    /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Create Blog"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "title": "...title...",
                    "content": "...content...",
                    "status": ["p","d"],
                    "image": "...url...",
                    "category_id":"65baabb1a9f41227c047d8a0",

                }
            }
        */
    req.body.author = req.user.user_name;
    req.body.author_id = req.user._id;

    const data = await Blog.create(req.body);
    res.status(201).send({
      error: false,
      result: data,
      send: req.body,
    });
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Get Single Blog"
        */
    const data = await Blog.findOne({ _id: req.params.id }).populate([
      "category_id",
      "author",
    ]);
    res.status(200).send({
      error: false,
      result: data,
    });
    if (!data.post_views_n.includes(req.user._id)) {
      data.post_views_n.push(req.user._id);
      await Blog.updateOne(
        { _id: req.params.id },
        {
          post_views_n: data.post_views_n,
        }
      );
    }
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Update Blog"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "title": "...title...",
                    "content": "...content...",
                    "status": "p",
                    "author": "user_id",
                }
            }
        */
    const currentBlog = await Blog.findOne({ _id: req.params.id });
    if (req.user._id.equals(currentBlog.author_id) || req.user.is_admin) {
      const data = await Blog.updateOne({ _id: req.params.id }, req.body);
      res.status(202).send({
        error: false,
        result: data,
        send: req.body,
        newdata: await Blog.findOne({ _id: req.params.id }),
      });
    } else {
      res.errorStatusCode = 403;
      throw new Error(
        "Uyarı ! Yalnızca admin veya blog sahibi bu işlemi yapabilir"
      );
    }
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Delete Blog"
        */
    const currentBlog = await Blog.findOne({ _id: req.params.id });
    if (req.user._id.equals(currentBlog.author_id) || req.user.is_admin) {
      const data = await Blog.deleteOne({ _id: req.params.id });
      res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
    } else {
      res.errorStatusCode = 403;
      throw new Error(
        "Uyarı ! Yalnızca admin veya blog sahibi bu işlemi yapabilir"
      );
    }
  },
  like: async (req, res) => {
    /*
            #swagger.tags = ["Blogs"]
            #swagger.summary = "like or dislike Blog"   
        */
    const currentBlog = await Blog.findOne({ _id: req.params.id });
    const like = currentBlog.likes_n.indexOf(req.user._id);
    if (like == -1) {
      currentBlog.likes_n.push(req.user._id);
    } else {
      currentBlog.likes_n.splice(like, 1);
    }
    const data = await Blog.updateOne(
      { _id: req.params.id },
      { likes_n: currentBlog.likes_n }
    );
    res.status(202).send({
      error: false,
      result: data,
      send: req.body,
      newdata: await Blog.findOne({ _id: req.params.id }),
    });
  },
};
