'use strict';
/* Develop a program that allows blocks to move to and from the 3 stacks.
The caveat is that only smaller blocks can be stacked on top of larger blocks.
The object of game is to move all blocks from the initial stack to the last stack.*/


const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
/*The stacks object has 3 keys (a, b, c) and the key values 4, 3, 2, 1 are in an array.
The .pop method will be used to remove the last element from the stacks array.
Then the .push method will be used to place the removed value (block) that was popped
and place it in any of the other stacks.*/
const movePiece = (startStack, endStack) => {
  stacks[endStack].push(stacks[startStack].pop());
}

/*A move is legal is when a smaller block is placed in an empty stack by itself,
 if a stack is occupied by a larger block then the move is not allowed. The .length
 method is used to make the occupied stack equal to 0. */
const isLegal = (startStack, endStack) => {
  // Your code here
  if (stacks[endStack].length === 0) {
    return true;
  } else if (stacks[startStack].pop() < stacks[endStack].pop()) {
    return true;
  } else {
    return false;
  }
}
/*To check for win  a condition will need to be set up where all 4 of the blocks
 will have to be moved from stack.a to either stack.b or stack.c. If this condition
 is met then it will be returned as true. If neither condition is met then it is
 a false conditional statement. The .length method will be used to determine if
 all 4 blocks are stacked on stacks.b or stacks.c */
const checkForWin = () => {
  // Your code here
  if (stacks.c.length === 4) {
    return true;
  } else {
    return false;
  }
}

/*Use an If statement for the function movePiece can move from one stack to
another and if function isLegal is a legitimate move then run towersOfHanoi
function until there is a win. */
const towersOfHanoi = (startStack, endStack) => {
  if (movePiece(startStack, endStack)) {
    isLegal(startStack, endStack)
  }
  checkForWin();
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, {
        a: [4, 3, 2],
        b: [1],
        c: []
      });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = {
        a: [],
        b: [],
        c: [4, 3, 2, 1]
      };
      assert.equal(checkForWin(), true);
      stacks = {
        a: [1],
        b: [4, 3, 2],
        c: []
      };
      assert.equal(checkForWin(), false);
    });
  });

  /* Test for when game ends by moving all blocks to stack.c only. It would look like
  this a[]b[]c[4,3,2,1] */
  describe('#checkForWin()', () => {
    it('should detect a win only in "stacks c"', () => {
      stacks = {
        a: [],
        b: [],
        c: [4, 3, 2, 1]
      };
      assert.equal(checkForWin(), true);
      stacks = {
        a: [],
        b: [4, 3, 2, 1],
        c: []
      };
      assert.equal(checkForWin(), false);
    });
  });

  /* Test to not allow for an illegal input of character in start stack or end stack.
  Only a, b, and c characters would be allowed.*/

} else {

  getPrompt();

}
