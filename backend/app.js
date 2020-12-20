const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const dbConnect = require("./controllers/dbConnect");
const postsRouter = require("./routes/posts");
const cors = require("cors");

Object.assign = require("object-assign");
app.use(morgan("combined"));
app.use(cors());

app.use("/upload", express.static(path.join(__dirname, "public")));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/posts", postsRouter);

// error handling
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something bad happened!");
});

app.listen(dbConnect.port, dbConnect.ip);
console.log("Running on http://" + dbConnect.ip + ":" + dbConnect.port);
