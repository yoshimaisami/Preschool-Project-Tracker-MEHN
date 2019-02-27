const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/lessonplans");

mongoose.Promise = Promise;

module.exports = mongoose;
