const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Kon'nichiwa Sekai!");
});

app.listen(3300, () => console.log("listening on port 3300"));

const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.use(require("./routes/index"));

app.listen(3300, () => console.log("listening on port 3300"));
