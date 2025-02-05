const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  test('returns true for palindromes', () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test('returns false for non-palindromes', () => {
    expect(isPalindrome("car")).toBe(false);
  });

  test('returns true for mixed-case palindromes', () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  test('returns true for an empty string', () => {
    expect(isPalindrome("")).toBe(true);
  });


 
});

