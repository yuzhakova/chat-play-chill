import React from 'react';
// import Join from '../livechat/Join/Join';

export default function Homepage() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="split-section" id="split-1">
            <div className="split-box">
              <h1 className="split-heading">
                <span className="split-heading-main">Want to play chess?</span>
                <span className="split-heading-sub">follow the link</span>
              </h1>
              <a href="/chess" className="btn btn-outline-white">CHESS</a>
            </div>
          </div>
          
          <div className="split-section" id="split-2">
            <div className="split-box">
              <h1 className="split-heading">
                <span className="split-heading-main">Want to play connect4?</span>
                <span className="split-heading-sub">follow the link</span>
              </h1>
              <a href="/connect4" className="btn btn-outline-white">CONNECT4</a>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}