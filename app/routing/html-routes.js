app.get("/survey", function(req, res) {
  res.render("../public/survey.html");
});

app.get("/", function(req, res) {
  res.render("../public/home.htnl");
});
