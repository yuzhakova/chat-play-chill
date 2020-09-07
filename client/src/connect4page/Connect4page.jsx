import React from "react";
import Connect4Grid from "./Connect4Grid/Connect4Grid.tsx"
import Join from '../livechat/Join/Join';
import Chat from '../livechat/Chat';


export default function Connect4({ socket, name, room, users, messages, onSignIn }) {
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
          {name && room ? (
              <Chat
                name={name}
                socket={socket}
                room={room}
                messages={messages}
                users={users}
              />
            ) : (
              <Join onSignIn={onSignIn} />
            )}
            {/* <a href="/chess" className="btn btn-outline-white">play chess</a> */}
            <h1 className="split-heading">
            </h1>
          </div>
        </div>

      </div>
    </div>
  );
}
