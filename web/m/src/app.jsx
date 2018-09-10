import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home/home'
import Edit from './pages/edit/edit'


class App extends Component {
  render() {
    return (
      <div className="layout">
        <Route path="/" exact component={Home} />
        <Route path="/edit" component={Edit} />
      </div>
    )
  }
}

export default App;