const apiKey = require('./apiKey');

const { get } = require('callback-fetch');
// const apiKey = '858ab62c211a8616b6c7f2cbc08a2ac0'; // include our key
const city = 'London';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

let weatherData = null;

get(apiUrl, (response) => {
  weatherData = JSON.parse(response);
  console.log(weatherData.main.temp);
  console.log(weatherData.weather[0].main);
});

console.log('Requesting weather data');