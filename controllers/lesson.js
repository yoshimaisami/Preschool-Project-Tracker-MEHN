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
  show: function(req, res) {
    res.render("lesson/show");
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
