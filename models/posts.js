const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: String,
    required: true,
  },
  photoName: {
    type: String,
  },
});

module.exports = mongoose.model("PostSchema", schema);
