const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Feedback = new Schema({
  title: String,
  author: String,
  content: String
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
  Lesson: mongoose.model("Lesson", Lesson),
  Feedback: mongoose.model("Feedback", Feedback)
};
