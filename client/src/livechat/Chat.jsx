//most important socket.io logic is stored in this file

import React, { useState, useEffect } from 'react'; //useState and useEffect lifecycle methods inside the hooks
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from './InfoBar/InfoBar';
import Input from './Input/Input';
import Messages from './Message/Messages';
import TextContainer from './TextContainer/TextContainer';

import './Chat.css';

let socket;

const Chat = ({ location }) => { //hook useEffect lets you use lifecycle methods/side effects in function componenets
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000';
  
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT); //pass end-point server

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (error) => { //setup for users joining
      if(error) {
        alert(error);
      }
    });

    return () => { //used for disconnecting events/unmounting
      socket.emit('disconnect') //the naming 'disconnect' must be the same as server side

      socket.off();
    } 
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages(messages => [...messages, message]);
    })
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []) //run array only when messages change

  //function for sending messages & clear after sent
  const sendMessage = (event) => {
    event.preventDefault(); //prevent default behavior of full browser refresh with a keypress/button click
    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }
  //main component for chat
  return (
    <div className="outerContainerChat">
      <div className="containerChat">
        <InfoBar room={room} />
        <Messages messages={messages} name={name}/> 
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />

      </div>
      <TextContainer users={users}/>
    </div>
  );
}

export default Chat;