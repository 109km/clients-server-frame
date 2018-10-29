import React, { Component } from 'react';
import { NavBar} from 'antd-mobile';
import { Link } from 'react-router-dom';

import './TopNav.less';

class TopNav extends Component {
  render() {
    return (
      <div className="com-top-nav">
        {
          this.props.user.username ? '' :
            <NavBar
              mode="dark"
              rightContent={[
                <Link key="0" className="btn-login" to="/signup">
                  注册
              </Link>,
                <Link key="1" className="btn-login" to="/login">
                  登录
              </Link>
              ]}
            ></NavBar>
        }
      </div>
    );
  }
}

export default TopNav;