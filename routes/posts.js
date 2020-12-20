const express = require("express");
const router = express.Router();
const postModel = require("../models/posts");

//Tähän get posts/10 jos haluu 10 uusinta
router.get("/:many", async (req, res) => {
  console.log(req.params.many);
  let arrPosts = postModel
    .find({})
    .sort({ createdAt: "desc" })
    .limit(Number(req.params.many))
    .exec((err, docs) => {
      res.json({ body: docs });
    });
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

  return res.json({ message: "Added" });
});

module.exports = router;
