import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/home';
import DreamNew from './containers/dream/new';
import DreamEdit from './containers/dream/edit';
import DreamGoal from './containers/dream/goal';
import DreamTier from './containers/dream/tier';
import DreamDetail from './containers/dream/detail';
import PostNew from './containers/post/new';
import PostEdit from './pages/post/edit/edit';
import PostDetail from './containers/post/detail';
import Login from './pages/login/login';
import Logout from './pages/logout/logout';
import Signup from './pages/signup/signup';
import Explore from './containers/explore';
import My from './containers/my';
import Account from './containers/account';
class App extends Component {
  render() {
    return (
      <div className="layout">
        <Route path="/" exact component={Home} />
        <Route path="/dream/new" component={DreamNew} />
        <Route path="/dream/edit" component={DreamEdit} />
        <Route path="/dream/goal" component={DreamGoal} />
        <Route path="/dream/tier" component={DreamTier} />
        <Route path="/dream/detail" component={DreamDetail} />
        <Route path="/post/new" component={PostNew} />
        <Route path="/post/edit" component={PostEdit} />
        <Route path="/post/detail" component={PostDetail} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/signup" component={Signup} />
        <Route path="/explore" component={Explore} />
        <Route path="/my" component={My} />
        <Route path="/account" component={Account} />
      </div>
    )
  }
}

export default App;