const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("port", process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(app.get(port), function () {
  console.log("Congratulations on ur portfolio!!");
});
