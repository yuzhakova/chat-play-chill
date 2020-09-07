import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import io from 'socket.io-client';
import queryString from 'query-string';
import Homepage from './homepage/Homepage'
import Chess from './chesspage/Chesspage'
import Connect4 from './connect4page/Connect4page'
import Chat from './livechat/Chat'


// let socket;
const ENDPOINT = 'localhost:5000';
// const ENDPOINT = 'https://chat-play-chill.herokuapp.com/';

const socket = io(ENDPOINT); //pass end-point server
const location = window.location;

const Routing = () => {
  const savedUser = JSON.parse(localStorage.getItem('chatPlayChill::User') || '{}');
  const [name, setName] = useState(savedUser.name || '');
  const [room, setRoom] = useState(savedUser.room || '');
  const [users, setUsers] = useState('');
  const [messages, setMessages] = useState([]);

  const [chessState, setChessState] = useState(localStorage.getItem('savedGame'))

  const onSignIn = (name, room) => {
    setName(name);
    setRoom(room);
    localStorage.setItem('chatPlayChill::User', JSON.stringify({ name, room }))
  }

  useEffect(() => {
    socket.on('chessState', (chessState) => {
      setChessState(chessState)
    })

    socket.on('message', (message) => {
      setMessages(messages => [...messages, message]);
    })
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
    if (name && room) {
      socket.emit('join', { name, room }, (error) => { //setup for users joining
        if(error) {
          alert(error);
        }
      });
    }


    return () => { //used for disconnecting events/unmounting
      socket.emit('disconnect') //the naming 'disconnect' must be the same as server side

      socket.off();
    } 
  }, [ENDPOINT, location.search, name, room]);

  if (!socket) {
    return null;
  }

  return (
    <Router>
      <nav>
        {/* <Link to='/'>Home</Link> */}
        {/* <Link to='/home'>Home</Link> */}
        {/* <Link to='/chess'>Chess</Link>
        <Link to='/connect4'>Connect4</Link> */}
       </nav>
      <Switch>
        {/* <Route path='/home' component={Homepage}/> */}
        <Route path='/chess' >
          <Chess
            chessState={chessState}
            socket={socket}
            name={name}
            room={room}
            messages={messages}
            users={users}
            onSignIn={onSignIn}
          />
        </Route>
        <Route path='/connect4' >
          <Connect4
              chessState={chessState}
              socket={socket}
              name={name}
              room={room}
              messages={messages}
              users={users}
              onSignIn={onSignIn}
            />
          </Route>
        {/* <Route path='/chat'>
          <Chat
            name={name}
            socket={socket}
            room={room}
            messages={messages}
            users={users}
          />
        </Route> */}
        <Route path='/' component={Homepage}/>
      </Switch> 
    </Router>
  )
}

export default Routing;
