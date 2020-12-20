const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/ " });
const postModel = require("../models/posts");

//Tähän get posts/10 jos haluu 10 uusinta
router.get("/:many", async (req, res) => {
  const arrPosts = postModel.find({ sort: { createdAt: -1 }, limit: many });

  return res.json(arrPosts);
});

//Tähän upload post
router.post("/", async (req, res) => {
  if (req.body.user === null) {
    return res.status(400).json({ message: "bad content" });
  }
  if (req.body.content === null) {
    return res.status(400).json({ message: "bad content" });
  }
  if (req.body.author === null) {
    return res.status(400).json({ message: "bad content" });
  }
  //tee post
  let newPost = new postModel({
    user: req.body.user,
    content: req.body.content,
    author: req.body.author,
    photoName: null,
  });
  await newPost.save(function (err) {
    if (err) return res.status(500).json({ message: err.message });
  });

  return res.status(200).json({ message: "Post added" });
});

module.exports = router;
