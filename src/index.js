import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers';
import {Routes} from './routes';
import Navbar from './components/navbar';
import './stylesheets/app.css'


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


ReactDOM.render(
  <div>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <div id="app">
        <Navbar />
        <Routes />
      </div>
    </Provider>
  </div>,
  document.getElementById('root'));
