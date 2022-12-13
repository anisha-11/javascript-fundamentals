const fizzbuzz = require('./fizzBuzz')

describe('fizzbuzz', () => {
  it('returns fizz when a multiple of 3', () => {
    expect(fizzbuzz(3)).toBe('fizz');
  });

  it('returns buzz when a multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz');
  });

  it('returns number when not multiple of 3 or 5', () => {
    expect(fizzbuzz(8)).toBe(8);
  });

  it('returns fizzbuzz when a multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz');
  });

  it('returns fizz when a multiple of 3', () => {
    expect(fizzbuzz(18)).toBe('fizz');
  });

  it('returns buzz when a multiple of 5', () => {
    expect(fizzbuzz(20)).toBe('buzz');
  });
});