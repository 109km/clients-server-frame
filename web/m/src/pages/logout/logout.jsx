import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Cookies from 'js-cookie';
import './logout.less';
class Logout extends Component {
  render() {
    return (
      <div className="page">
        退出成功！
      </div>
    );
  }
  componentDidMount() {
    Cookies.remove('sessionId');
    this.props.history.push({
      pathname: '/'
    });
  }
}

export default withRouter(Logout);
