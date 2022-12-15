const { get } = require('callback-fetch');

const fetchRepositoryInfo = (urlNew, callback) => {
  url = 'https://api.github.com/repos/' + urlNew 
  get(url, (body) => {callback(JSON.parse(body))})
};

module.exports = fetchRepositoryInfo;

