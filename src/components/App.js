import React from 'react';

import Map from '../containers/Map'
import Modal from '../containers/Modal'
import './App.css';

const App = (props) => {
  return (
    <div className="App">
      <header>
        <h1><a href="/">Trip Sticker</a></h1>
      </header>
      <main className="main">
         <div id="map">
          <Map />
        </div>
      </main>
      <Modal />
    </div>
  );
}

export default App;
