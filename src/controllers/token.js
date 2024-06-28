"use strict";

const Token = require("../models/token");

module.exports = {
  list: async (req, res) => {
    /*
            #swagger.ignore = true
        */

    const data = await Token.find();
    res.status(200).send({
      error: false,
      data,
    });
  },

  delete: async (req, res) => {
    /*
            #swagger.ignore = true
        */
    const data = await Token.deleteOne({ _id: req.params.id });

    res.status(data.deletetCount ? 204 : 404).send({
      error: !data.deletetCount,
      data,
    });
  },
};
