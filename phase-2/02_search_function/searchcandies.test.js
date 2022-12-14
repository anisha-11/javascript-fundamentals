const searchCandies = require('./searchcandies');

describe('array of objects', () => {
  it('returns mars and maltesers', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

  it('returns correct price', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });

  it('returns correct candies in lowercase', () => {
    expect(searchCandies('ma', 2)).toEqual(['Mars']);
  });
});