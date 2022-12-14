const Candy = require('./candy');

describe('Candy', () => {
  it ('returns Aero candy', () => {
    const candy = new Candy('Aero',1.99);
    expect(candy.getName()).toEqual('Aero'); 
  });

  it ('returns Aero candy price', () => {
    const candy = new Candy('Aero',1.99);
    expect(candy.getPrice()).toBe(1.99); 
  });
});
