const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/projects", (req, res) => {
  res.render("projects");
});
app.get("/articles", (req, res) => {
  res.render("/articles");
});

app.listen(port);
