const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
  title: String,
  author: String,
  description: String,
  time: String,
  materials: String,
  prerequs: String,
  agelevel: String,
  instructions: String,
  status: Boolean
});

module.exports = mongoose.model("Lesson", LessonSchema);
