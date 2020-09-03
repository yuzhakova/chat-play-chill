import React, { useState } from 'react';
import { Link } from 'react-router-dom'; //this is used to link to /chat path

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContianer">
        <h1 className="headingJoin">It's Board Game Time: Connect4 or Chess?</h1>
        <h1 className="headingJoin">Join the Chat!</h1>
        <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
        <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
        <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className="buttonJoin mt-20" type="submitJoin">Sign In</button>
        </Link>
      </div>
    </div>
  );
}

export default Join;