import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Homepage from './homepage/Homepage'
import Chess from './chesspage/Chesspage'
import Connect4 from './connect4page/Connect4page'
import Chat from './livechat/Chat'

const Routing = () => {
  return (
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        {/* <Link to='/home'>Home</Link> */}
        <Link to='/chess'>Chess</Link>
        <Link to='/connect4'>Connect4</Link>
       </nav>
      <Switch>
        {/* <Route path='/home' component={Homepage}/> */}
        <Route path='/chess' component={Chess}/>
        <Route path='/connect4' component={Connect4}/>
        <Route path='/chat' component={Chat}/>
        <Route path='/' component={Homepage}/>
      </Switch> 
    </Router>
  )
}

export default Routing;
