import React from 'react';

import Map from '../../containers/Map'
import Modal from '../../containers/Modal'
import Toast from '../Toast/Toast'
import './App.css';
import logo from '../../img/logo.png'

const App = (props) => {
  return (
    <div className="App">
      <header>
        <h1>
          <a href="/" className="logo-link">
            <img src={logo} alt="logo" className="logo"/>
            Trip Sticker
          </a>
        </h1>
      </header>
      <main className="main">
        <div id="map">
          <Map />
        </div>
      </main>
      <Modal />
      <Toast />
    </div>
  );
}

export default App;
