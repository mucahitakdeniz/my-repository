"use strict";

const User = require("../models/user");
const Token = require("../models/token");
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "List Users"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
    const data = await User.find();
    res.status(200).send({
      error: false,
      data,
    });
  },
  create: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Create User"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "user_name": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name": "test",
                    "last_name": "test",
                    "image": "...url...",
                    "bio": "I am ...",
                }
            }
        */
    req.body.is_admin = false;
    req.body.is_active = true;

    const data = await User.create(req.body);
    if (data.user_name) {
      const token = passwordEncrypt(new Date() + data._id);
      await Token.create({ token: token, user_id: data.id });
      res.status(201).send({
        error: false,
        body: req.body,
        token: token.token,
        user_id: data?._id,
        user_name: data?.user_name,
        is_admin: data?.is_admin,
        is_active: data?.is_active,
        image: data?.image,
        email: data?.email,

      });
    }
  },
  read: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Get Single User"
        */
    let filter = req.user._id;
    if (req.user.is_admin || req.user._id == req.params.id) {
      filter = req.params.id;
    }
    const data = await User.findOne({ _id: filter });
    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Update User"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "user_name": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name": "test",
                    "last_name": "test",
                    "image": "...url...",
                    "bio": "I am ...",
                }
            }
        */
    if (!req.user.is_admin) {
      req.body.is_admin = false;
    }
    if (req.user.is_admin || req.user._id == req.params.id) {
      const data = await User.updateOne({ _id: req.params.id }, req.body);
      res.status(200).send({
        error: false,
        data,
        user: await User.findOne({ _id: req.params.id }),
      });
    } else {
      res.errorStatusCode = 403;
      throw new Error(
        "Uyarı ! Yalnızca admin ve hesap sahibi bu işlemi yapabilir"
      );
    }
  },
  delete: async (req, res) => {
    /*
            #swagger.tags = ["Users"]
            #swagger.summary = "Delete User"
        */
    const data = await User.deleteOne({ _id: req.params.id });

    res.status(data.deletetCount ? 204 : 404).send({
      error: !data.deletetCount,
      data,
    });
  },
};
