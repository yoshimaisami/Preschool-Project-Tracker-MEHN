const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});

router.use("/lesson", require("./lesson.js"));

module.exports = router;
