// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
    {
        "name":"Cogeta",
        "photo":"https://vignette.wikia.nocookie.net/the-dragon-ball/images/d/d3/356453-gogeta.jpg/revision/latest?cb=20121231201610",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Goku",
        "photo":"https://pbs.twimg.com/media/Dcy789zVwAIfjw7.jpg",
        "scores":[
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
          ]
      },
      {
        "name":"Prince Vegeta",
        "photo":"http://cdn2.gamedots.mx/media/gd/styles/gallerie/public/images/2017/08/vegetarisa.jpg",
        "scores":[
            1,
            1,
            1,
            2,
            1,
            1,
            1,
            1,
            1,
            1
          ]
      }
      
  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  
  module.exports = friendsArray;