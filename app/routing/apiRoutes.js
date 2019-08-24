var friendsData = require("../data/friends");
var path = require("path");

module.exports = function (app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
      });

    app.post("/api/tables", function(req, res) {
        friendsData.push(req.body);
      });

};