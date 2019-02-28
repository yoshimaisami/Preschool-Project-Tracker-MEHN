const { Lesson, Feedback } = require("../models/index"); //from Twitter Ex

module.exports = {
  new: function(req, res) {
    res.render("lesson/new");
  },
  create: function(req, res) {
    const { title, description } = req.body;
    Lesson.create({
      title,
      description,
      status: false
    }).then(lesson => {
      res.redirect(`/lesson/${lesson._id}`);
    });
  },

  show: function(req, res) {
    Lesson.findById(req.params.id)
      .populate("content feedbacks.content") //from Twitter Ex
      .then(lesson => {
        res.render("lesson/show", { lesson });
      });
  },

  edit: function(req, res) {
    Lesson.findById(req.params.id).then(lesson => {
      res.render("lesson/edit", { lesson });
    });
  },
  update: function(req, res) {
    const { title, description, status } = req.body;
    Lesson.findByIdAndUpdate(req.params.id, {
      title,
      description,
      status: status === "on"
    }).then(lesson => {
      lesson.feedbacks.push({ content }); //from Twitter Ex
      res.redirect(`/lesson/${lesson._id}`);
    });
  },

  delete: function(req, res) {
    Lesson.remove({ _id: req.params.id }).then(lesson => {
      console.log(lesson);
      res.redirect("/");
    });
  }
};
