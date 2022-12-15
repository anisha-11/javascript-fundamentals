const {get} = require('callback-fetch');
const apiKey = require('./apiKey');

class WeatherClient {
  fetchWeatherData = (city, callback) => {
    url = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
    get(url, (body) => {callback(JSON.parse(body))})
  };
};

module.exports = WeatherClient