import React, { useState } from 'react';
import { Link } from 'react-router-dom'; //this is used to link to /chat path

import './Join.css';

const Join = (props) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const handleSignIn = () => {
    props.onSignIn(name, room)
  }

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContianer">
        <h1 className="headingJoin">It's Board Game Time: Connect4 or Chess?</h1>
        <h1 className="headingJoin">Join the Chat!</h1>
        <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
        <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
        {/* <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`${window.location.pathname}?name=${name}&room=${room}`}>
          <button className="buttonJoin mt-20" type="submitJoin">Sign In</button>
        </Link> */}
        <button onClick={handleSignIn} className="buttonJoin mt-20" type="submitJoin">Sign In</button>
        {/* <a href="/chess" className="btn btn-outline-white hotlink">play chess</a> */}
      </div>
    </div>
  );
}

export default Join;