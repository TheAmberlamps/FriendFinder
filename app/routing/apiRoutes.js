var friendsData = require("../data/friends");
var objMaker = [];

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      console.log("Displaying the friends table.")
      res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
      
      for(i=0; i < friendsData.length; i++){

        var sub0 = Math.abs(req.body.scores[0] - friendsData[i].scores[0]);
        
        var sub1 = Math.abs(req.body.scores[1] - friendsData[i].scores[1]);
        
        var sub2 = Math.abs(req.body.scores[2] - friendsData[i].scores[2]);
        
        var sub3 = Math.abs(req.body.scores[3] - friendsData[i].scores[3]);
        
        var sub4 = Math.abs(req.body.scores[4] - friendsData[i].scores[4]);
        
        var sub5 = Math.abs(req.body.scores[5] - friendsData[i].scores[5]);
        
        var sub6 = Math.abs(req.body.scores[6] - friendsData[i].scores[6]);
        
        var sub7 = Math.abs(req.body.scores[7] - friendsData[i].scores[7]);
        
        var sub8 = Math.abs(req.body.scores[8] - friendsData[i].scores[8]);
     
        var sub9 = Math.abs(req.body.scores[9] - friendsData[i].scores[9]);

        // Totals the score comparison
        var total = sub0 + sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9;
        // Pushes the total to a temporary array
        objMaker.push(total);
        
      }
      friendsData.push(req.body);
      // Finds the closest match and then outputs its index location
      var index = objMaker.indexOf(Math.min.apply(null, objMaker));
      // Empties array
      objMaker = [];
      // Response
      res.json(friendsData[index]);
    });

};