"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

require("express-async-errors");

//dbConnection
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

//json
app.use(express.json());

//CORS
app.use(require("cors")());

//Authentication
app.use(require("./src/middlewares/authentication"));

//routes

app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcame to Blog App",
    documents: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
  });
});
app.use(require("./src/routes"));

//Synchronization
// require("./src/helpers/sync")()

app.use(require("./src/middlewares/errorHandler"));

app.listen(PORT, () =>
  console.log("Running: http://127.0.0.1:" + PORT)
);
