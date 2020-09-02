import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Join from './Components/Join/Join';



function App() {
  return (
    <div>
      <h1>Chat Play Chill</h1>
      <Router>
          <Switch>
            <Route path="/" exact component={Join} />
            {/* <Route path="/chat" component={Chat} /> */}
          </Switch>
        </Router>
    </div>
  );
}

export default App;
