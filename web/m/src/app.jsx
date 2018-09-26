import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/home/home';
import DreamNew from './pages/dream/new/new';
import DreamGoal from './pages/dream/goal/goal';
import DreamTier from './pages/dream/tier/tier';
import DreamDetail from './pages/dream/detail/detail';
import PostNew from './pages/post/new/new';
import PostEdit from './pages/post/edit/edit';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
class App extends Component {
  render() {
    return (
      <div className="layout">
        <Route path="/" exact component={Home} />
        <Route path="/dream/new" component={DreamNew} />
        <Route path="/dream/goal" component={DreamGoal} />
        <Route path="/dream/tier" component={DreamTier} />
        <Route path="/dream/detail" component={DreamDetail} />
        <Route path="/post/new" component={PostNew} />
        <Route path="/post/edit" component={PostEdit} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    )
  }
}

export default App;