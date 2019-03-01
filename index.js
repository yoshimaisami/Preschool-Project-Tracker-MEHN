const express = require("express");
const app = express();
const parser = require("body-parser");
const methodOverride = require("method-override");

app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.use(require("./routes/index"));

app.listen(3300, () => console.log("listening on port 3300"));
