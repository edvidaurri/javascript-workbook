'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



//check for tie, if tie return tie, if not check for win.

function rockPaperScissors(a, b) {
  const hand1 = a.trim().toLowerCase();
  const hand2 = b.trim().toLowerCase();
  const rpsArr = ['rock', 'paper', 'scissors', 'bomb'];
  if (rpsArr.indexOf(hand1) > -1 && rpsArr.indexOf(hand2) > -1) {} else {
    return "Invalid entry!";
  }

  if (hand1 === 'bomb') {
    return "Hand one wins!";
  } else if (hand2 === 'bomb') {
    return "Hand two wins!";
  } else if (hand1 === hand2) {
    return "It's a tie!";

    // Make conditional statement for Hand1 to win.


  } else if (hand1 === 'rock' && hand2 === 'scissors' || hand1 === 'paper' && hand2 === 'rock' || hand1 === 'scissors' && hand2 === 'paper') {
    return "Hand one wins!";
    // Make conditional statement for Hand2 to win.

  } else {
    return "Hand two wins!";
  }
}

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log(rockPaperScissors(answer1, answer2));
      getPrompt();
    });
  });
}

// Tests

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
  });
} else {

  getPrompt();

}
