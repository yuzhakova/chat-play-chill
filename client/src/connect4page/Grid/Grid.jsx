import React, { useState } from 'react';
import "./Grid.css";

export default function Grid() {
  const Player = {
    None: null,
    One: 1,
    Two: 2
  };

  // const Board = Player[];

  // const [board, setBoard] = useState(Board);

  const initializeBoard = function() {
    const board = [];
    for (let i = 0; i < 42; i++) {
      board.push(Player.None)
    }
    console.log(board)
    return board

  }

  const grid = function() {
    const { board } = this.state

    return board.map((player, index) => this.gridPieces(player, index))
  }

  const gridPieces = function(player: Player, index: number) {
    return <div className="cell" key={index}></div>
    
  }

  return (
    <div className="board">
      {grid}
    </div>
  )
}



