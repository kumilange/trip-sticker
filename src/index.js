import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import './index.css';
import reducer from './reducer'
import App from './components/App';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
<Provider store={store}>
 <App />
</Provider>,
document.getElementById('root'));