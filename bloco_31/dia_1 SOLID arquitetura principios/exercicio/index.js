require("dotenv").config();

const express = require("express");
var cors = require("cors");
const rescue = require("express-rescue");
const db = require("./models/connection");
const middlewares = require("./middlewares");

const router = require("./routes");

const app = express();

db.once("open", () => console.log("Hello Mongoose, connected to MongoDB"));
db.on("error", (err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use(middlewares.log);

app.use(rescue(router));

app.use(middlewares.err);

app.listen(process.env.PORT, () =>
  console.log(`listen port: ${process.env.PORT}`)
);
