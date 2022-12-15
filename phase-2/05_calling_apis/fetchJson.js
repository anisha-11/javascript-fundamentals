const {get} = require('callback-fetch');

const fetchJson = (url, callback) => {
  const responseObject = get(url, (body) => { return JSON.parse(body) });
  console.log(responseObject);
  callback(responseObject)
}

module.exports = fetchJson;