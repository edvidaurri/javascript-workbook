'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Function pigLatin(letter) takes the first letter(s) of a word that are not
//vowels and removes it and sends it to the back of the string and adds “ay”.

//If first letter is a vowel just return and add “yay” to the end of word.
//Find index of first vowel. Create a variable called “firstVowel”.

//Use Regex method “.match” for variable and create a string “aeiou”
//to search for first occurring vowel in string when function is called.

//Use .indexOf() method to return the first occurrence of item within
//the array when function is called.

//Once position of first vowel is found, create a variable “firstLetterPosition”
//and run an if statement to determine if position of first letter is not >0 or
//does not start with a vowel then use .slice method to remove letter(s) that
//are before the first vowel in string and send to back of string and + “ay”.

const pigLatin = (letter) => {
  //Use .toLowerCase and .trim methods to pass test for Uppercase and spaces.
  letter = letter.toLowerCase().trim();

  //Regular Expression method .match will  retrieves the matches when matching
  // a string against a regular expression.
  const firstVowel = letter.match(/[aeiou]/);

  //Use .idexOf method to find first occurrence of vowel.
  const firstLetterPosition = letter.indexOf(firstVowel);
  //Use if statement to find letter(s) that precede the first occurance of a
  //vowel and send to back of word and add "ay".
  if (firstLetterPosition > 0) {

    return letter.slice(firstLetterPosition) + letter.slice(0, firstLetterPosition) + "ay";
  } else {
    
  //Otherwise just add "yay" to end of word that starts with a vowel.
    return letter + "yay";
  }
}

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
