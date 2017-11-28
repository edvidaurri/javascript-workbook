import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Square = (props) => {
  return (
    <button className='square' onClick={props.onClick}>
      {props.value}
      </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculatewin(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  renderSquare(i) {
    return <Square
    value={this.state.squares[i]}
    onClick={() => this.handleClick(i)}/>
  }

  render() {
    const win = calculatewin(this.state.squares);
    let status;
    if (win) {
      status = `${win} is the Winner!`;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">

        </div>
      </div>
    );
  }
}
const calculatewin = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //Horizontal Win
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //Verticla Win
    [0, 4, 8], [2, 4, 6], //Diagonal Win
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default Square && Board && Game;
