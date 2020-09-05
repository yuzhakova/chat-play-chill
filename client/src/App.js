import React from 'react';
import './App.css';
import Routing from './Router.jsx'
import Navbar from './Navbar';
// import Homepage from './homepage/Homepage'


function App() {
  return (
    <div>
      <Navbar />
      < Routing />

      
      {/* < Homepage /> */}
      {/* <Connect4 /> */}
      {/* <Chess /> */}
    </div>
  );
}

export default App;
