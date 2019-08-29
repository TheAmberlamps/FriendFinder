var friendsData = require("../data/friends");
var objMaker = [];
var friendsVals = [];

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      console.log("Displaying the friends table.")
      res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
      console.log("attempting to update the friends table: \n");
      // friendsData.push(req.body);
      console.log(req.body.scores);
      for(i=0; i < friendsData.length; i++){
        console.log("\nfriendsData" + i + ".scores: " + friendsData[i].scores);
        console.log("\nsubtraction function " + i + ": " + parseInt(req.body.scores[0]) + " minus " + parseInt(friendsData[i].scores[0]));
        var sub0 = Math.abs(req.body.scores[0] - friendsData[i].scores[0]);
        console.log("\n" + sub0);
        console.log("\nsubtraction function " + i + ": " + parseInt(req.body.scores[1]) + " minus " + parseInt(friendsData[i].scores[1]));
        var sub1 = Math.abs(req.body.scores[1] - friendsData[i].scores[1]);
        console.log("\n" + sub1);
        console.log("\nsubtraction function " + i + ": " + parseInt(req.body.scores[2]) + " minus " + parseInt(friendsData[i].scores[2]));
        var sub2 = Math.abs(req.body.scores[2] - friendsData[i].scores[2]);
        console.log("\n" + sub2);
        console.log("\nsubtraction function " + i + ": " + parseInt(req.body.scores[3]) + " minus " + parseInt(friendsData[i].scores[3]));
        var sub3 = Math.abs(req.body.scores[3] - friendsData[i].scores[3]);
        console.log("\n" + sub3);
        console.log("\nsubtraction function " + i + ": " + parseInt(req.body.scores[4]) + " minus " + parseInt(friendsData[i].scores[4]));
        var sub4 = Math.abs(req.body.scores[4] - friendsData[i].scores[4]);
        console.log("\n" + sub4);
        console.log("\nsubtraction function " + i + ": " + parseInt(req.body.scores[5]) + " minus " + parseInt(friendsData[i].scores[5]));
        var sub5 = Math.abs(req.body.scores[5] - friendsData[i].scores[5]);
        console.log("\n" + sub5);
        console.log("\nsubtraction function " + i + ": " + parseInt(req.body.scores[6]) + " minus " + parseInt(friendsData[i].scores[6]));
        var sub6 = Math.abs(req.body.scores[6] - friendsData[i].scores[6]);
        console.log("\n" + sub6);
        console.log("\nsubtraction function " + i + ": " + parseInt(req.body.scores[7]) + " minus " + parseInt(friendsData[i].scores[7]));
        var sub7 = Math.abs(req.body.scores[7] - friendsData[i].scores[7]);
        console.log("\n" + sub7);
        console.log("\nsubtraction function " + i + ": " + parseInt(req.body.scores[8]) + " minus " + parseInt(friendsData[i].scores[8]));
        var sub8 = Math.abs(req.body.scores[8] - friendsData[i].scores[8]);
        console.log("\n" + sub8);
        console.log("\nsubtraction function " + i + ": " + parseInt(req.body.scores[9]) + " minus " + parseInt(friendsData[i].scores[9]));
        var sub9 = Math.abs(req.body.scores[9] - friendsData[i].scores[9]);
        console.log("\n" + sub9);
        var total = sub0 + sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8 + sub9
        console.log("\nTotal: " + total);
      }
      res.json(true);
    });

};