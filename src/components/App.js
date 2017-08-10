import React, { Component } from 'react';

import Map from './Map'
import './App.css';

const App = (props) => {
    return (
      <div className="App">
        <header>
          <h1>Trip Sticker</h1>
        </header>
        <main className="main">
           <div id="map">
            <Map />
          </div> 
        </main>
        <footer>Footer</footer>
      </div>
    );
}

export default App;
