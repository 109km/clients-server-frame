import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { post, getQuery, Config } from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';
import './home.less';
import DreamList from '../../components/DreamList/DreamList';
import SiteNav from '../../components/SiteNav/SiteNav';
class Home extends Component {

  state = {
    items: [],
    isLogin: false
  }

  render() {
    return (
      <div className="page page-home">
        <DreamList items={this.state.items} />
        {
          this.props.user.username ? '' :
            <div className="logion-actions">
              <Link className="btn-login" to="/signup">
                注册
              </Link>
              <Link className="btn-login" to="/login">
                登录
              </Link>
            </div>
        }
        <SiteNav page="home" history={this.props.history} />
      </div>
    );
  }
  async componentDidMount() {
    const userData = await post(Config.apiUrl + '/user/detail/');
    const dreams = await post(Config.apiUrl + '/dream/list/');
    let isLogin = false;
    const user = userData.data;
    if (user.code === STATUS_CODE['SUCCESS'].code) {
      isLogin = true;
      this.props.setUserInfo(user.data);
    }
    
    this.setState({
      items: dreams.data.data.rows,
      isLogin: isLogin
    });
  }
}

export default Home;
