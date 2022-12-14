function countVowelConsonant(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return str.split('').reduce((acc, curr) => acc + (vowels.includes(curr) ? 1 : 2), 0)
}
// I don't know RegEx srry. 
// I'll check the basics of regex later 


/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
  it('returns total of vowels(1) and consonants(2) to be added', () => {
      // arrange
      const value = 'abcde';
      // act
      const result = countVowelConsonant(value);
      // log
      console.log("result: ", result);
      // assert
      expect(result).toBe(8);
  });
  
  it('returns total of vowels(3) and consonants(5) to be added', () => {
      // arrange
      const value = 'imissher';
      // act
      const result = countVowelConsonant(value);
      // log
      console.log("result: ", result);
      // assert
      expect(result).toBe(13);
  });
  
  it('returns total of vowels(3) and consonants(7) to be added', () => {
      // arrange
      const value = 'crxtzonceu';
      // act
      const result = countVowelConsonant(value);
      // log
      console.log("result: ", result);
      // assert
      expect(result).toBe(17);
  });
});