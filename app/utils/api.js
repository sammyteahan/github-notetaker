var api = {
  getRepos(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    // es6 string interpolation ^^^ same as:
    // var url = 'https://api.github.com/users/' + username + '/repos';
    return fetch(url).then((res) => res.json());
  },
  getBio(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    return fetch(url).then((res) => res.json());
  }
};

module.exports = api;