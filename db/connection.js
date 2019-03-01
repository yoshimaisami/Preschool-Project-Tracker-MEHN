const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/lessonplans", { useNewUrlParser: true });
mongoose.Promise = Promise;
module.exports = mongoose;
