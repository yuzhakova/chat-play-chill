import React from 'react';

import livechat from './icons/livechat.png';
import exit from './icons/exit.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="livechat" src={livechat} alt="livechat" />
      <h3>Chat Room {room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src={exit} alt="exit" /></a>
    </div>
  </div>
);

export default InfoBar;