import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/home';
import DreamNew from './pages/dream/new/new';
import DreamGoal from './pages/dream/goal/goal';
import DreamTier from './pages/dream/tier/tier';
import DreamDetail from './pages/dream/detail/detail';
import PostNew from './pages/post/new/new';
import PostEdit from './pages/post/edit/edit';
import PostDetail from './pages/post/detail/detail';
import Login from './pages/login/login';
import Logout from './pages/logout/logout';
import Signup from './pages/signup/signup';
import Explore from './pages/explore/explore';
import My from './containers/my';
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
        <Route path="/post/detail" component={PostDetail} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/signup" component={Signup} />
        <Route path="/explore" component={Explore} />
        <Route path="/my" component={My} />
      </div>
    )
  }
}

export default App;