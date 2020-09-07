import React from 'react';

import livechat from './icons/livechat.png';
import exit from './icons/exit.png';

import './InfoBar.css';

const InfoBar = ({ room }) => {
  const logout = () => {
    localStorage.setItem('chatPlayChill::User', '{}')
    window.location.href = '/'
  }
  return (<div className="infoBar">
    <div className="leftInnerContainer">
      <img className="livechat" src={livechat} alt="livechat" />
      <h3>Chat Room {room}</h3>
    </div>
    <div className="rightInnerContainer">
      <img onClick={logout} src={exit} alt="exit" />
    </div>
  </div>)
};

export default InfoBar;