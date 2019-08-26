var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      console.log("Displaying the friends table: \n");
      res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {

    });
    

}