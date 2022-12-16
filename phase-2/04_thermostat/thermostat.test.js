const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  it('gets initial temp of 20', () => {
    thermostat = new Thermostat()
    expect(thermostat.getTemperature()).toEqual({"temperature":20})
  });

  it('temp goes up by 2', () => {
    thermostat = new Thermostat()
    thermostat.up()
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual({"temperature":22})
  });

  it('temp goes down by 1', () => {
    thermostat = new Thermostat()
    thermostat.down()
    expect(thermostat.getTemperature()).toEqual({"temperature":19})
  });

  it('max temp is 25', () => {
    thermostat = new Thermostat()
    thermostat.setPowerSavingMode(true)
    for (let x = 0; x < 25; x++) {
        thermostat.up()
    }
    expect(thermostat.getTemperature()).toEqual({"temperature":25})
  });

  it('no more max temp', () => {
    thermostat = new Thermostat()
    thermostat.setPowerSavingMode(true)
    thermostat.setPowerSavingMode(false)
    for (let x = 0; x < 10; x++) {
      thermostat.up
    }
    expect(thermostat.getTemperature()).toEqual({"temperature":10})
  });

  it('temp resets to intial 20', () => {
    thermostat = new Thermostat()
    thermostat.up()
    thermostat.up()
    expect(thermostat.getTemperature()).toEqual({"temperature":20})
  });
})