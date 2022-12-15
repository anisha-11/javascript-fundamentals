const Weather = require('./weather');

describe('Weather', () => {
  it('gets the weather', () => {
    const client = {
      fetchWeatherData: (place, callback) => {
        callback({
          main: 'mist',
          temp: '-0.07',
        });
      }
    };

    const weather = new Weather(client);
    weather.fetch('London');
    expect(weather.getWeatherData()).toEqual({
      main: 'mist',
      temp: '-0.07',
    });
  });
});