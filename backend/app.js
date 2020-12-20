const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const dbConnect = require("./controllers/dbConnect");

Object.assign = require("object-assign");
app.use(morgan("combined"));

app.use("/upload", express.static(path.join(__dirname, "public")));
app.use(express.json());

const arrayRouter = require("./routes/user");
app.use("/user", arrayRouter);

const resetRouter = require("./routes/posts");
app.use("/posts", resetRouter);

// error handling
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something bad happened!");
});

app.listen(dbConnect.port, dbConnect.ip);

module.exports = app;
