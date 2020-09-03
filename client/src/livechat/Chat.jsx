//most important socket.io logic is stored in this file

import React, { useState, useEffect } from 'react'; //useState and useEffect lifecycle methods inside the hooks
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';

let socket;

const Chat = ({ location }) => { //hook useEffect lets you use lifecycle methods/side effects in function componenets
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'localhost:5000';
  
  useEffect(() => {
    const { name, room } = queryString.parse(location.search); //this is to retrieve the data users entered when joining

    socket = io(ENDPOINT); //pass end-point server

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, ()=> {
    
    });

    return () => { //used for disconnecting events/unmounting
      socket.emit('disconnect') //the naming 'disconnect' must be the same as server side

      socket.off(); //used to turn off an instance of the client socket
    }
  }, [ENDPOINT, location.search]);

  return (
    <h1>Chat</h1>
  )
}

export default Chat;