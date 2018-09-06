import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route } from 'react-router-dom';
import './global.css';
import registerServiceWorker from './registerServiceWorker';
import Home from './page/home/home'


ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Home}></Route>
  </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
