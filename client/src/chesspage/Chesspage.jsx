import React, { useEffect, useState } from 'react';
import './Chesspage.css';
import { gameSubject, initGame, resetGame } from './Game/Game';
import Board from './Board/Board';

function Chess() {
  const [board, setBoard] = useState([])
  // const [isGameOver, setIsGameOver] = useState()
  const [result, setResult] = useState()
  const [turn, setTurn] = useState()


  useEffect(() => {
    
    initGame()
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board)
      // setIsGameOver(game.isGameOver)
      setResult(game.result)
      setTurn(game.turn)
    })

    
    return () => subscribe.unsubscribe()
  }, [])
  
  return (
    <div>
      <div className="container">
     
        (
          <h2 className="vertical-text">
          <button onClick={resetGame}>
            <span className="vertical-text">NEW GAME
            </span>
          </button>
          </h2>
        )
        <div className="board-container">
          <Board board={board} turn={turn}/>
        </div>
        {result && <p className="vertical-text">{result}</p>}
      </div>
    </div>
  );
}

export default Chess