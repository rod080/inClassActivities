var express = require("express");

var app = express();
var PORT = 3000;

var exphbs = require("express-handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "@Dolphin080",
  database: "wishes_db"
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");





app.get("/", function(req, res) {
    connection.query("SELECT * FROM wishes;", function(err, data) {
      if (err) throw err;
      res.render("index", { wishes: data }); //first param is the name of the view we want ot render 
    });
  });

  app.post("/", function(req, res) {
    console.log(req.body)
    connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.wish], function(err, result) {
      if (err)  return console.log(error);
  
      res.redirect("/");
    });
  });


// app.get("/", function(req, res) {
// });

// app.post("/", function(req, res) {
// });


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
