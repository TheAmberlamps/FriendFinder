// Defines requirements
var express = require("express");
var path = require("path");

var app = express();

// Dynamic port handling
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// html routing, have to move these into their own js files in the routing subdir later
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
  });



// Starts the server and begins listening  
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });