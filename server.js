const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/cuup", (req, res) => {
  res.render("cuup");
});

app.get("/dvsty", (req, res) => {
  res.render("dvsty");
});

app.listen(process.env.PORT || 5000, "0.0.0.0");
