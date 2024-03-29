const { Lesson, Feedback } = require("../models/index");

module.exports = {
  new: function(req, res) {
    res.render("lesson/new");
  },
  create: function(req, res) {
    const { title, description } = req.body;
    Lesson.create({
      title,
      description
    })
      .then(lesson => {
        res.redirect(`/lesson/${lesson._id}`);
      })
      .catch(err => {
        console.log(err);
      });
  },

  show: function(req, res) {
    Lesson.findById({ _id: req.params.id })
      .then(lesson => {
        res.render("lesson/show", { lesson });
      })
      .catch(err => {
        console.log(err);
      });
  },

  edit: function(req, res) {
    Lesson.findById(req.params.id)
      .then(lesson => {
        res.render("lesson/edit", { lesson });
      })
      .catch(err => {
        console.log(err);
      });
  },
  update: function(req, res) {
    const { title, description } = req.body;
    Lesson.findByIdAndUpdate(req.params.id, {
      title,
      description
    })
      .then(lesson => {
        res.redirect(`/lesson/${lesson._id}`);
      })
      .catch(err => {
        console.log(err);
      });
  },

  delete: function(req, res) {
    Lesson.remove({ _id: req.params.id })
      .then(lesson => {
        console.log(lesson);
        res.redirect("/");
      })
      .catch(err => {
        console.log(err);
      });
  },
  feedback: function(req, res) {
    const feedback = {
      author: req.body.author,
      content: req.body.content
    };
    Lesson.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { feedbacks: feedback } }
    )
      .then(lesson => {
        res.redirect(`/lesson/${lesson._id}`);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
