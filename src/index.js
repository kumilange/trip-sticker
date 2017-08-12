import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import reducer from './reducer'
import App from './components/App/App';
import './index.css';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
 <Provider store={store}>
  <App />
 </Provider>,
 document.getElementById('root')
);