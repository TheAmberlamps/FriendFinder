// Defines requirements
var express = require("express");
var path = require("path");

var app = express();

// Dynamic port handling
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded());
app.use(express.json());


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
  });

