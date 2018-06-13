// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsArray = require("../app/data/friends.js");



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
    res.json(friendsArray);
  });

 

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
   var newFriend = req.body;
   var yourFriend =[];
   var friends=[];
   var total=0;
   var totals=[];
   function compareNumbers(a, b) {
    return a - b;
  }
      friendsArray.push(newFriend);
      
      console.log(friendsArray.length-1);

      for(var i=0; i<friendsArray.length-1; i++){

        var friendName = friendsArray[i].name;
        var friendPhoto = friendsArray[i].photo;
        var friendScore = friendsArray[i].scores;
        total =0;
        

        for(var j=0; j<newFriend.scores.length; j++) {

          yourFriend[j] = Math.abs(parseInt(newFriend.scores[j])-parseInt(friendScore[j]));
          total += yourFriend[j];
        }
      var friendObj = {
        name:friendName,
        photo:friendPhoto,
        scoresDiff:total
      }
      friends.push(friendObj);
      totals.push(total);
      }
      
 
    console.log(friends);
    console.log(totals);
    totals.sort(compareNumbers);
    console.log(totals);

    for(var i=0; i<friends.length; i++){

      
        if(totals[0] === friends[i].scoresDiff) {
          
          res.json(friendsArray[i]);
        }
      
    }
   
  });

 
};
