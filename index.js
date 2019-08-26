// Defines requirements
var express = require("express");

var app = express();

// Dynamic port handling
var PORT = process.env.PORT || 3000;

// Middleware to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// js routing, have to move this into its own file in the routing subdir later
app.get("/data/friends.js", function(req, res) {
  console.log(res);
  });

// Starts the server and begins listening  
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });