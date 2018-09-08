import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route } from 'react-router-dom';
import './global.less';
import registerServiceWorker from './registerServiceWorker';
import Home from './pages/home/home'


ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={Home}></Route>
  </BrowserRouter>,
document.getElementById('root'));
registerServiceWorker();
