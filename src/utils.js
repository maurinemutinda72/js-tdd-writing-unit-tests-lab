function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
  
    if (!/^[A-Za-z]+$/.test(word)) {
            return true;  // An empty string is considered a palindrome.
      }
  
    const cleanedWord = word.toLowerCase();
    return cleanedWord === cleanedWord.split('').reverse().join('');
  }
  
  module.exports = { isPalindrome };
