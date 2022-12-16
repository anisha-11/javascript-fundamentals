class Thermostat {
  constructor() {
    this.temp = 20
    this.temp = {temperature: 20};
    this.power_saving_mode = false
  };

  getTemperature() {
    return this.temp
  };

  up() {
    if (this.power_saving_mode) {
      if(this.temp.temperature < 25) {
        this.temp.temperature += 1
      }
    } else this.temp.temperature += 1
  };
   

  down() {
    this.temp.temperature -= 1
  };

  setPowerSavingMode(bool) {
    this.power_saving_mode = bool;
  };

  reset() {
    this.temp = 20;
    this.temp.temperature = 20
  };

  checkEnergyUsage() {
    if(this.temp.temperature < 18) {
      return 'low';
    } else if (this.temp.temperature <= 25) {
      return 'medium';
    } else {
      return 'high';
    };
  };
};

module.exports = Thermostat;