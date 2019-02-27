const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
  title: String,
  author: String,
  materials: String,
  time: String,
  prerequs: String,
  agelevel: String,
  instructions: String
});

module.exports = mongoose.model("Lesson", LessonSchema);
