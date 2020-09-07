//most important socket.io logic is stored in this file

import React, { useState, useEffect } from 'react'; //useState and useEffect lifecycle methods inside the hooks
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from './InfoBar/InfoBar';
import Input from './Input/Input';
import Messages from './Message/Messages';
import TextContainer from './TextContainer/TextContainer';

import './Chat.css';

const Chat = ({ location, socket, name, room, users, messages }) => { //hook useEffect lets you use lifecycle methods/side effects in function componenets
  const [message, setMessage] = useState('');
  
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