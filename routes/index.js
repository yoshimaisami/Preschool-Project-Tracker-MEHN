const express = require("express");
const router = express.Router();
const Lesson = require("../models/index");

router.get("/", function(req, res) {
  // res.render("index");
  //plural (lessons)???
  Lesson.find({}).then(lessons => {
    res.render("index", { lessons });
  });
});

router.use("/lesson", require("./lesson.js"));

module.exports = router;
