var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos (username) {
  // fetch github user repo
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}
function getTotalStars (stars) {
  return stars.data.reduce(function (prev, current) {
    return prev + current.stargazers_count;
  }, 0)
}

function getPlayersData (player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}
function calculateScores (players) {
  // return an array and winner
  return[
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

var helpers = {
  getPlayersInfo (players) {
    // Fetch Github Data
    return axios.all(players.map(function(username) {
      return getUserInfo(username)
    }))
    .then(function (info){
      return info.map(function(user) {
        return user.data
      })
    }).catch(function(err) {
      console.warn("Error in get players info", err)
    })
  },
  battle (players) {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (err){console.warn("Error in get battle function: ", err)})
  }
};

module.exports = helpers;
