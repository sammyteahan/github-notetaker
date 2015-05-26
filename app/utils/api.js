var api = {
  getRepos(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}/repos`;
    // es6 string interpolation ^^^ same as:
    // var url = 'https://api.github.com/users/' + username + '/repos';
    return fetch(url).then((response) => response.json());
  },
  getBio(username) {
    username = username.toLowerCase().trim();
    var url = `https://api.github.com/users/${username}`;
    return fetch(url).then((response) => response.json());
  },
  /**
  * Use of Firebase restful api (add .json)
  */
  getNotes(username) {
    username = username.toLowerCase().trim();
    var url = `https://github-db.firebaseio.com/${username}.json`;
    return fetch(url).then((response) => response.json());
  },
  addNote(username, note) {
    username = username.toLowerCase().trim();
    var url = `https://github-db.firebaseio.com/${username}.json`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(note)
    }).then((response) => response.json());
  }
};

module.exports = api;