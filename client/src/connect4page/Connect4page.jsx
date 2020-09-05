import React from "react";
import Connect4Grid from "./Connect4Grid/Connect4Grid.tsx"
import Join from '../livechat/Join/Join';


export default function Connect4() {
  return (
    <div>
      <div className="container">

        <div className="split-section" id="split-1">
          <div className="split-box">
            <div className="board-container">
              <Connect4Grid />
            </div>
          </div>
        </div>

        <div className="split-section" id="split-2">
          <div className="split-box">
            <Join />
            <a href="/chess" className="btn btn-outline-white">play chess</a>
            <h1 className="split-heading">
            </h1>
          </div>
        </div>

      </div>
    </div>
  );
}
