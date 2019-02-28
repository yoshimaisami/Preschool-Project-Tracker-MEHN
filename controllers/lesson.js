const Lesson = require("../models/index");

module.exports = {
  // index: function(req, res) {
  //   res.send("index");
  // },

  new: function(req, res) {
    res.render("lesson/new");
  },
  create: function(req, res) {
    // res.redirect("/");

    const { title, description } = req.body;
    Lesson.create({
      title,
      description,
      status: false
    }).then(lesson => {
      res.redirect(`/lesson/${lesson._id}`);
    });
  },

  // /lesson/:id ???

  show: function(req, res) {
    // res.render("lesson/show");

    Lesson.findById(req.params.id).then(lesson => {
      res.render("lesson/show", { lesson });
    });
  },
  edit: function(req, res) {
    // res.render("lesson/edit");

    Lesson.findById(req.params.id).then(lesson => {
      res.render("lesson/edit", { lesson });
    });
  },
  update: function(req, res) {
    // res.redirect("/");
    const { title, description, status } = req.body;

    Lesson.findByIdAndUpdate(req.params.id, {
      title,
      description,
      status: status === "on"
    }).then(lesson => {
      res.redirect(`/lesson/${lesson._id}`);
    });
  },
  delete: function(req, res) {
    res.redirect("/");
  }
};
