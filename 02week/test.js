'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(a, b) {
  const hand1 = a.trim().toLowerCase();
  const hand2 = b.trim().toLowerCase();

//.indexOf method searches for first occurance of an object and returns index position.
  const rpsArr = ['rock', 'paper', 'scissors', 'bomb'];
  if (rpsArr.indexOf(hand1) > -1 && rpsArr.indexOf(hand2) > -1) {
//if statement makes string 'bomb' trump all other strings.
    if (hand1 === 'bomb') {
      return "Hand one wins!";
    } else if (hand2 === 'bomb') {
      return "Hand two wins!";
//else if statement determines game a tie if both variables are equal.
    } else if (hand1 === hand2) {
      return "It's a tie!";

      // Make conditional statement for Hand1 to win.
    } else if (hand1 === 'rock' && hand2 === 'scissors' || hand1 === 'paper' && hand2 === 'rock' || hand1 === 'scissors' && hand2 === 'paper') {
      return "Hand one wins!";
      // Make conditional statement for Hand2 to win.


    } else if (hand1 === 'scissors' && hand2 === 'rock' || hand1 === 'paper' && hand2 === 'scissors' || hand1 === 'rock' && hand2 === 'paper') {
    } else if (hand1 === 'rock' && hand2 === 'paper' || hand1 === 'paper' && hand2 === 'scissors' || hand1 === 'scissors' && hand2 === 'rock') {

      return "Hand two wins!";
    }
  } else {
    return "Invalid entry!";
  }
}
rockPaperScissors('rock', 'paper');


function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}
//Test

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });

    it('should detect if hand1 wins', () => {
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
    });
    it('should detect if hand2 wins', () => {
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
    });
    it('should detect if input is secret word entry for hand1 to win', () => {
      assert.equal(rockPaperScissors('bomb', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('bomb', 'paper'), "Hand one wins!");
      assert.equal(rockPaperScissors('bomb', 'scissors'), "Hand one wins!");
    });
    it('should detect if input is secret word entry for hand2 to win', () => {
      assert.equal(rockPaperScissors('rock', 'bomb'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'bomb'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors', 'bomb'), "Hand two wins!");
    });

    it('should detect if input is invalid entry', () => {
      assert.equal(rockPaperScissors('roc1', 'rock'), "Invalid entry!");
      assert.equal(rockPaperScissors('paper', 'dragon'), "Invalid entry!");
      assert.equal(rockPaperScissors('scissrs', 'cissors'), "Invalid entry!");
    });

  });
} else {

  getPrompt();

}
