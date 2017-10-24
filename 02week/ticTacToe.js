'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/*Player must get 3 in a row. First player selects a position in one of 3 rows
on the board then selects a position in one of 3 columns. Next player repeats
same senerio. Game is over when a player is able to align 3 in a row verticle,
column or diagonal.
*/

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

/* Run an conditional statement to make rows all equal to the same string
In rows  make variable for function horizontalWin equal:Row "0"
=> [[0,0], [0,1], [0,2] and Row "1" => [1,0], [1,1], [1,2]
and Row"2 => [2,0], [2,1], [2,2]].*/
const horizontalWin = () => {
  if ((board[0][0] === board[0][1] && board[0][1] === board[0][2]) || (board[1][0] === board[1][1] && board[1][1] === board[1][2]) || (board[2][0] === board[2][1] &&
      board[2][1] === board[2][2])) {
    return true;
  }
}

/* Run an conditional statement to make columns all equal to the same string
In columns "0", "1", "2" make variable 'block' for function verticalWin equal:
Column "0" =>[0,0], [1,0], [2,0] and Column "1" => [0,1], [1,1], ]2,0}
Column "2" =>[0,2], [1,2],[2,2]. */
const verticalWin = () => {
  if ((board[0][0] === board[1][0] && board[1][0] === board[2][0]) || (board[0][1] === board[1][1] && board[1][1] === board[2][1]) || (board[0][2] === board[1][2] &&
      board[1][2] === board[2][2])) {
    return true;
  }
}

/* Run an conditional statement to make equal to the same string
 make variable 'block' for function diagonalWin equal:[0,0], [1,1], [2,2] and
 => [0,2], [1,1], ]2,0}. */
const diagonalWin = () => {
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2] || (board[0][2] === board[1][1] && board[1][1] === board[2][0])) {
    return true;
  }
}


const checkForWin = () => {
  if (horizontalWin() || verticalWin() || diagonalWin()) {
    console.log(`Player ${playerTurn} Wins!`);
  } else if (turnCount === 9) {
    console.log("It's a tie!")
  } else {
    return false;
  }

}

function ticTacToe(row, column) {

  if (playerTurn === 'X') {
    playerTurn = 'O';
  } else {
    playerTurn = 'X';
  }
  if (board[row][column] === ' ') {
    board[row].splice(column, 1, playerTurn);
  }
  return false;
  // } else {
    // console.log(`The winner is player ${playerTurn}.  Start a new game`);
    // return true;
  // } else {
    // console.log('Please choose another block!  That one is taken!');
  // } else {
    // console.log('Please enter a valid index.  Valid values are 0, 1, 2');
}


function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [
        [' ', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [
        ['O', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', ' ']
      ]);
    });
    it('should check for vertical wins', () => {
      board = [
        [' ', 'X', ' '],
        [' ', 'X', ' '],
        [' ', 'X', ' ']
      ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [
        ['X', 'X', 'X'],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [
        ['X', ' ', ' '],
        [' ', 'X', ' '],
        [' ', ' ', 'X']
      ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
