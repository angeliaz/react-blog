import React from 'react'
import style from '@/index.css';

class Square extends React.Component {
  render() {
    return (
      <button
        className={style["square"]}
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return (
    <Square 
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}/>
    );
  }

  render() {
    return (
      <div>
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

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [
        {squares: Array(9).fill(null)}
      ],
      xIsNext: true,
      currentStep: 0
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.currentStep + 1)
    const current = history[history.length - 1]
    
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) return
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      history: history.concat([{squares}]),
      xIsNext: !this.state.xIsNext,
      currentStep: history.length
    })
  }

  jumpTo(index) {
    this.setState({
      currentStep: index,
      xIsNext: index % 2 === 0
    })
  }

  render() {
    const current = this.state.history[this.state.currentStep]
    const winner = calculateWinner(current.squares)
    const status = winner ? `winner is ${winner}` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`

    const moves = this.state.history.map((item, index) => {
      return (
        <li key={index}>
          <button onClick={() => this.jumpTo(index)}>{`Go to move ${index}`}</button>
        </li>
      )
    })
   
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(x) => this.handleClick(x)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
