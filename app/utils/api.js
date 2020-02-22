export function fetchPopularRepos (language) {
  const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`)

  return fetch(endpoint)
    .then((res) => res.json())
    .then(( { items, message }) => {
      if (!items) {
        throw new Error(message)
      }

      return items
    })
}

export const getErrorMessage = (message, username) => {
  if (message === 'Not Found') return `${username} doesn't exsist`
  return message;
}

export const fetchUser = user => {
    const fetchedUser = `https://api.github.com/users/${user}`

    return fetch(fetchedUser)
      .then((res) => res.json())
      .then((profile) => {
        if (profile.message) {
          throw new Error(getErrorMessage(profile.message, user))
        }
        return profile;
      })
};

export const fetchRepos = user => {
  const fetchedRepos = `https://api.github.com/users/${user}/repos`;

  return fetch(fetchedRepos)
    .then((res) => res.json())
    .then((repos) => {
      if (repos.message) {
        throw new Error(getErrorMessage(repos.message, user))
      }
      return repos;
    })
};

export const calculateScore = (followers, repos) => (followers * 3) + getStarsCount(repos);

export const getStarsCount = (repos) => repos.reduce((count, {stargazers_count }) => count + stargazers_count, 0);

export const getUserData = (player) => {
  return Promise.all([
    fetchRepos(player),
    fetchUser(player)
  ]).then(([ repos, profile ]) => ({
      profile,
      score: calculateScore(profile.followers, repos)
  }))
}

export const sortWinner = players => players.sort((a, b) => b.score - a.score)

export const battle = (players) => (
  Promise.all([
    getUserData(players[0]),
    getUserData(players[1])
  ]).then((results) => sortWinner(results))
)