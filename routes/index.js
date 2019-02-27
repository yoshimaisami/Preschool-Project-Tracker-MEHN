const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.send("homepage");
});

router.use("/lesson", require("./lesson.js"));

module.exports = router;
