import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="top">
      {/* <ul className="cool">
        <li>
        <a><strong>Chat Play Chill</strong></a>
        </li>
      </ul> */}
        <ul className="cool">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/chess">Chess</a>
          </li>
          <li>
            <a href="/connect4">Connect4</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
