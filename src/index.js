import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux';
import store from './redux/store'

// import App from './App'
import Nav from 'components/Nav'
import getRouter from '@/router';
import './index.css';
// ========================================
import '../mock/mock.js'

ReactDOM.render(
  (
    <Provider store={store}>
      <Router>
        <Nav />
        { getRouter() }
      </Router>
    </Provider>
  ),
  document.getElementById('app')
);
