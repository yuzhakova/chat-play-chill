import React, { useState } from 'react';
import "./Connect4Grid.css";

enum Player {
  None = 0,
  One = 1,
  Two = 2
}

type Board = Player[];

interface State {
  board: Board;
  playerTurn: Player;
}

const findEmptyIndex = (board: Board, column: number) => {

  for (let i = 35 + column; i > 0; i-=7) {
    if (board[i] === Player.None) {
      return i
    }

  }
  return -1
}

const getNewPlayer = (player: Player) => {
  if (player === Player.None)
  return 'noPlayer';
  if (player === Player.One)
  return 'playerOne';
  if (player === Player.Two)
  return 'playerTwo';
}

const toggleTurn = (player: Player) => {
  return player === Player.One ? Player.Two : Player.One
}

const intitializeBoard = () => {
  const board = [];
  for (let i = 0; i < 42; i++) {
    board.push(Player.None);
  }
  return board;
};

class Connect4Grid extends React.Component<{}, State> {
  state: State = {
    board: intitializeBoard(),
    playerTurn: Player.One,
  };

  onClick = (index: number) => () => {
    const column = index % 7

    this.makeMove(column)
  }

  makeMove(column: number) {
    const { board, playerTurn }  = this.state

    const index = findEmptyIndex(board, column)

    const newBoard = board.slice();
    newBoard[index] = playerTurn;

    this.setState({
      board: newBoard,
      playerTurn: toggleTurn(playerTurn)
    })
  }

  connect4Grid = () => {
    const { board } = this.state;
    return board.map((player, index) => this.connect4GridPiece(player, index));
  };



  connect4GridPiece = (player: Player, index: number) => {
    return (
      <div
        className="cell"
        key={index}
        onClick={this.onClick (index)}
        data-player={getNewPlayer(player)}  
      ></div>
      
    );
  };

  render() {
    return (
      <div className="App">
        {/* {this.renderGameStatus() } */}
        <div className="board">{this.connect4Grid()}</div>
      </div>
    );
  }
}

export default Connect4Grid;






// export default function Grid() {
//   const Player = {
//     None: null,
//     One: 1,
//     Two: 2
//   };

//   // const Board = Player[];

//   // const [board, setBoard] = useState(Board);

//   const initializeBoard = function() {
//     const board = [];
//     for (let i = 0; i < 42; i++) {
//       board.push(Player.None)
//     }
//     console.log(board)
//     return board

//   }

//   const grid = function() {
//     const { board } = this.state

//     return board.map((player, index) => this.gridPieces(player, index))
//   }

//   const gridPieces = function(player: Player, index: number) {
//     return <div className="cell" key={index}></div>
    
//   }

//   return (
//     <div className="board">
//       {grid}
      
//     </div>
//   )
// }



