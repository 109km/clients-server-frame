import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home/home';
import PostNew from './pages/post/new/new';
import PostEdit from './pages/post/edit/edit';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
class App extends Component {
  render() {
    return (
      <div className="layout">
        <Route path="/" exact component={Home} />
        <Route path="/post/new" component={PostNew} />
        <Route path="/post/edit" component={PostEdit} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    )
  }
}

export default App;