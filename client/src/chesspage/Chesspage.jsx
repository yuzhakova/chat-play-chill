import React from "react";

export default function Chess() {
  return (
    <div>
      <div>
        <p>This is the Chesspage</p>
        <table>
          <tr>
            <td><img src="https://www.chess.com/bundles/web/images/web/board-puzzles.600ddf36.png"></img></td>
            {/* this is where chess component is rendered */}
            <td>This is where live chat component is placed</td>
            {/* this is where live chat component is placed */}
          </tr>
        </table>
        
      </div>
    </div>
  );
}
