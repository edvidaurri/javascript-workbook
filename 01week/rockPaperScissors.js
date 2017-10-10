'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2) {
  //check for tie, if tie return tie, if not check for win.
  console.log
  if (hand1 === hand2) {
    return "It's a tie!";
  } else {
    //if hand1 chooses rock and hand2 chooses scissors, return hand1 wins.
    //else hand2 wins.

    // if (hand1 === 'rock' && hand2 === 'scissors' || hand1 === 'paper' && hand2 === 'rock' || hand1 === 'scissors' && hand2 === 'paper') {
    //   return 'Hand one wins!';


    //if hand1 chooses Paper and hand2 chooses rock, return hand1 wins.
    //else hand2 wins.
    if (hand1 === 'rock' && hand2 === 'paper'){
      return 'Hand one wins';
    }
    else if (hand1 === 'paper' && hand2 === 'rock') {
      return 'Hand one wins!';
    }

    //if hand1 chooses scissors and hand2 chooses paper, return hand1 wins.
    //else hand2 wins.

    else if (hand1 === 'scissors' && hand2 === 'paper') {
      return 'Hand one wins!';

      //else return hand2 wins.

    } else {
      return 'Hand two wins!';
    }
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
