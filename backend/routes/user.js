const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/ " });

//Tähän image get
router.get("/", async (req, res) => {
  return "toimii";
});

//Tähän image update
//NOTES: formdatassa kuvan pitää olla userImage niminen
router.post("/", upload.single("userImage"), async (req, res) => {
  return "toimii";
});

module.exports = router;
