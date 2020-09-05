import React, { useState } from 'react';
import "./Grid.css";

enum Player {
  None = null,
  One = 1,
  Two = 2
}

type Board = Player[];

interface State {
  board: Board;
  playerTurn: Player;
  gameState: GameState | Player
}

const intitializeBoard = () => {
  const board = [];
  for (let i = 0; i < 42; i++) {
    board.push(Player.None);
  }
  return board;
};

class Grid extends React.Component<{}, State> {
  state: State = {
    board: intitializeBoard(),
    playerTurn: Player.One,
  };

  grid = () => {
    const { board } = this.state;
    return board.map((player, index) => this.gridPiece(player, index));
  };


  gridPiece = (player: Player, index: number) => {
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
        <div className="board">{this.grid()}</div>
      </div>
    );
  }
}

export default Grid;

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



