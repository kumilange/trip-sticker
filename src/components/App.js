import React, { Component } from 'react';

import Map from '../containers/Map'
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
      </div>
    );
}

export default App;
