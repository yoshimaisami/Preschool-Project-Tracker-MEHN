const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Feedback = new Schema({
  author: String,
  content: String
  // add key for lesson id
});

const Lesson = new Schema({
  title: String,
  author: String,
  description: String,
  time: String,
  materials: String,
  prerequs: String,
  agelevel: String,
  instructions: String,
  feedbacks: [Feedback]
});

module.exports = {
  Lesson: mongoose.model("Lesson", Lesson)
};
