class Thermostat {
  constructor() {
    this.temp = 20
    this.power_saving_mode = false
  };

  getTemperature() {
    return this.temp
  };

  up() {
    if (this.power_saving_mode) {
      if(this.temp < 25) {
        this.temp += 1
      }
    } else this.temp += 1
  };
   

  down() {
    this.temp -= 1
  };

  setPowerSavingMode(bool) {
    this.power_saving_mode = bool;
  };

  reset() {
    this.temp = 20;
  };

  checkEnergyUsage() {
    if(this.temp < 18) {
      return 'low';
    } else if (this.temp <= 25) {
      return 'medium';
    } else {
      return 'high';
    };
  };
};

module.exports = Thermostat;