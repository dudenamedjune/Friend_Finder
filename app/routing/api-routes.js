// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends.js");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate Javascript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friends array)
  // ---------------------------------------------------------------------------

app.post('/api/friends', function(req, res){
  var newFriend = req.body;
  friends.push(newFriend);
  res.json(match(newFriend));
});

// ---------------------------------------------------------------------------
// I added this below code so you could clear out the table while working with the functionality.
// Don"t worry about it!

app.post("/api/clear", function() {
  // Empty out the arrays of data
  friends = [];

  console.log(friends);
});

};

function match(newFriend){

    var lowestDiff = 50;
    var match;
    var diff = 0;

  			for( var i in friends){
          for(var j in newFriend.scores){

  				diff += Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
  			}if(diff <= lowestDiff){
  				lowestDiff = diff;
  				match = friends[i];
  			}
      }
      console.log(match);
      return match;
  }
