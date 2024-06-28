"use strict";

const mongoose = require("mongoose");
/* ------------------------------------------------------- *
{
  "user_id": "65343222b67e9681f937f001",
  "token": "...tokenKey..."
}
/* ------------------------------------------------------- */
// Token Model:

const TokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    collection: "tokens",
    timestamps: true,
  }
);

module.exports = mongoose.model("Token", TokenSchema);
