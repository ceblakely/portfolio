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
app.get("/cuupProcess", (req, res) => {
  res.render("cuupProcess");
});

app.get("/dvstyProcess", (req, res) => {
  res.render("dvstyProcess");
});

app.listen(process.env.PORT || 5000, "0.0.0.0");
