const Lesson = require("../models/index");

module.exports = {
  // index: function(req, res) {
  //   res.send("index");
  // },

  new: function(req, res) {
    res.render("lesson/new");
  },
  create: function(req, res) {
    res.redirect("/");
  },

  // /lesson/:id ???

  show: function(req, res) {
    // res.render("lesson/show");

    Lesson.findById(req.params.id).then(lesson => {
      res.render("lesson/show", { lesson });
    });
  },
  edit: function(req, res) {
    res.render("lesson/edit");
  },
  update: function(req, res) {
    res.redirect("/");
  },
  delete: function(req, res) {
    res.redirect("/");
  }
};
