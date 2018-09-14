import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home/home';
import Edit from './pages/edit/edit';
import Login from './pages/login/login';
class App extends Component {
  render() {
    return (
      <div className="layout">
        <Route path="/" exact component={Home} />
        <Route path="/edit" component={Edit} />
        <Route path="/login" component={Login} />
      </div>
    )
  }
}

export default App;