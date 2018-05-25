var friendsData = require("../app/data/friends");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function (req, res) {
    var newResults = (req.body['scores']).map(Number);
    var totalDifference = 100;
    var friendIndex;
    for (var i = 0; i < friendsData.length; i++) {
      var firendResults = friendsData[i]['scores'];

      var tempDifference = 0;
      for (var j = 0; j < newResults.length; j++) {
        tempDifference += Math.abs(newResults[j] - firendResults[j]);
      }
      if (tempDifference < totalDifference) {
        totalDifference = tempDifference;
        friendIndex = i;
      }
    }
    res.json(friendsData[friendIndex]);
    friendsData.push(req.body);
  });
}