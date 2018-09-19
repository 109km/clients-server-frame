import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home/home';
import Edit from './pages/edit/edit';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
class App extends Component {
  render() {
    return (
      <div className="layout">
        <Route path="/" exact component={Home} />
        <Route path="/edit" component={Edit} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    )
  }
}

export default App;