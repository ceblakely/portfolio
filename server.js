const express = require("express");
const app = express();
const path = require("path");
const port = 5000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, function () {
  console.log("Congratulations on ur portfolio!!");
});
