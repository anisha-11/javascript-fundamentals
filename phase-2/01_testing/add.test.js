const add = require('./add');

describe('add', () => {
  // test cases
  it('adds 2 and 2', () => {
    expect(add(2,2)).toBe(4);
    // TODO: write test
  });

  it('adds 0 and 5', () => {
    expect(add(0,5)).toBe(5);
  });
});