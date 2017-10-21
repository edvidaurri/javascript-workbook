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

function horizontalWin() {
  /* Run an if conditional statement to make rows all equal to the same stri
  In "0" row make variable for function horizontalWin equal to to columns "0,
  "1", "2". [[0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]]
  */
  if ((board[0][0] === board[0][1] && board[0][1] === board[0][2]) || (board[1][0]
    === board[1][1] && board[1][1] === board[1][2]) || (board[2][0] === board[2][1] &&
    board[2][1] === board[2][2])) {
  return `Player ${playerTurn} Wins!`;
}
}
}

function verticalWin() {
  /* Run an if conditional statement to make rows all equal to the same stri
  In "0" row make variable for function horizontalWin equal to to columns "0,
  "1", "2". [[0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]]
  */
  // Your code here
}

function diagonalWin() {
  /* Run an if conditional statement to make rows all equal to the same stri
  In "0" row make variable for function horizontalWin equal to to columns "0,
  "1", "2". [[0,0], [0,1], [0,2], [1,0], [1,1], [1,2], [2,0], [2,1], [2,2]]
  */
  // Your code here
}

function checkForWin() {
  // Your code here
}

function ticTacToe(row, column) {
  // Your code here
  /* call printBoard function 
  */
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
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
