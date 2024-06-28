"use strict";

const { mongoose } = require("../configs/dbConnection");

/* ------------------------------------------------------- *
{  "_id": "65ba90b9b47ed0a4b115492b"
    "user_name": "admin"*,
    "password": "aA*123456"*,
    "email": "test@site.com"*,
    "first_name": "test",
    "last_name": "test",
    "image": "url",
    "bio": "I am ...",
    "is_active": true,
    "is_admin":false
    "recall_password":""
}
 ------------------------------------------------------- */
// User Model:

const UserSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    recall_password: {
      type: String,
      trim: true,
      default: "",
    },

    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
      default:""
    },
    bio: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    collection: "users",
    timestamps: true,
  }
);

const passwordEncrypt = require("../helpers/passwordEncrypt");

UserSchema.pre(["save", "updateOne"], function (next) {
  const data = this?._update || this;

  const isEmailValidated = data.email
    ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
    : true;

  if (isEmailValidated) {
    if (data?.password) {
      const isPasswordValidated =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,:;_+/-]).{8,}$/.test(
          data.password
        );
      if (isPasswordValidated) {
        this.password = data.password = passwordEncrypt(data.password);
        next();
      } else {
        next(new Error("Password not validated"));
      }
    } else next();
  } else {
    next(new Error("Email not validated"));
  }
});

module.exports = mongoose.model("User", UserSchema);
