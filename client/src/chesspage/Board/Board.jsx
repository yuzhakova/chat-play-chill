import React from 'react';
import BoardSquare from './BoardSquare';

export default function Board({ board }) {
  return (
    <div className="board">
      {board.flat().map((piece, i) => (
        <div key={i} className="square">
          <BoardSquare piece={ piece } />
        </div>
      ))}
    </div>
  )
}




