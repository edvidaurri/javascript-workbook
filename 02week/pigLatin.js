'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// function pigLatin(word) {
// Making sure branch works.https://github.com/edvidaurri/javascript-workbook/pull/3

const pigLatin = (word) =>{
  //The toLowerCase() method returns the called string value and converts it to lower case.
  word = word.trim().toLowerCase();
    //The match() method searches for the first occurrence of the items in the array.
  const firstVowel = word.match(/[aeiou]/);
    // console.log(firstVowel);
  const firstword = word.indexOf(firstVowel);
    // return word + 'yay';
  if (firstword > -1) {
    return word.slice(firstword) + word.slice(0, firstword) + 'ay';
  }
  /// return word + 'way';
}
pigLatin('eight');





function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
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
