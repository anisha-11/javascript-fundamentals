class Weather {
  constructor(client) {
    this.client = client;
  }

  fetch(place) {
    this.client.fetchWeatherData(place, (body) => {
      this.body = body;
    });
  }

  getWeatherData() {
    return this.body;
  };
};

module.exports = Weather;