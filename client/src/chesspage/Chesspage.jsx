import React, { useEffect, useState } from 'react';
import './Chesspage.css';
import { gameSubject } from './Game/Game';
import Board from './Board/Board';

function Chess() {
  const [board, setBoard] = useState([])
  useEffect(() => {
    const subscribe = gameSubject.subscribe((game) => 
      setBoard(game.board)
    )
    return () => subscribe.unsubscribe()
  }, [])

  return (
    <div>
      <div className="container">
        <div className="board-container">
          <Board board={board} />
        </div>
        
        <p>This is the Chesspage</p>
        <table>
          <tbody>
            <tr>
              <td><img src="https://www.chess.com/bundles/web/images/web/board-puzzles.600ddf36.png" alt=""></img></td>
              {/* this is where chess component is rendered */}
              <td>This is where live chat component is placed</td>
              {/* this is where live chat component is placed */}
            </tr>
          </tbody> 
        </table>
      </div>
    </div>
  );
}

export default Chess