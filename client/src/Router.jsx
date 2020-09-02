import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Homepage from './homepage/Homepage'
import Chess from './chesspage/Chesspage'
import Connect4 from './connect4page/Connect4page'

const Routing = () => {
  return (
    <Router>
      <nav>
        <Link to='/home'>Homepage</Link>
        <Link to='/chess'>Chess</Link>
        <Link to='/connect4'>Connect4</Link>
       </nav>
      <Switch>
        <Route path='/home' component={Homepage}/>
        <Route path='/chess' component={Chess}/>
        <Route path='/connect4' component={Connect4}/>
      </Switch> 
    </Router>
  )
}

export default Routing;
