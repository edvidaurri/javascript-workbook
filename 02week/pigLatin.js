'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
//Write out variable to check for item in the array.
//Assign 'const firstVowel' to an array [] The items in array:['a', 'e', 'i', 'o', 'u']
//Use the .indexOf method in an "if statement" to determine if item is in the array.
// for words that start with a vowel have "ay" appended to the end of the word.
//Assign a variable 'const firstLetter' for words that are not in the array.
//Words that start with a consonant have all consonant letters up to the first vowel moved to the end of the word.
//Use .slice method to remove consonant that are in front of the first vowel.
//Use .slice method along with the index position and 'firstLetter' and return the consonant(s) to the end and add 'ay' to end of method.



}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
