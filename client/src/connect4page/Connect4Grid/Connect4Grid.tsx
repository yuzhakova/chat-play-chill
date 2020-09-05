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

  connect4Grid = () => {
    const { board } = this.state;
    return board.map((player, index) => this.connect4GridPiece(player, index));
  };


  connect4GridPiece = (player: Player, index: number) => {
    return (
      <div
        className="cell"
        key={index}
      />
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



