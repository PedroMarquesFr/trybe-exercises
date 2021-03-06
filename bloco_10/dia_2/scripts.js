const fetch = require("node-fetch");

const uppercase = (str, callback) => {
  return callback(str.toUpperCase());
};

/////////

const users = {
  4: { name: "Mark" },
  5: { name: "Paul" },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: "User with " + id + " not found." });
  });
};

const getUserName = (userID) => {
  setTimeout(() => {}, 3000);
  return findUserById(userID).then((user) => user.name);
};

////////

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

module.exports = {
  uppercase,
  getUserName,
  getRepos,
};
