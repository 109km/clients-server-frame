import React, { Component } from 'react';
import { Button, NavBar, Icon } from 'antd-mobile';
import { Link } from 'react-router-dom';
import { post, getQuery, Config } from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';
import './home.less';
import DreamList from '../../components/DreamList/DreamList';
import SiteNav from '../../components/SiteNav/SiteNav';
class Home extends Component {

  state = {
    items: []
  }

  render() {
    return (
      <div className="page page-home">
        {
          this.props.user.username ? '' :
          <NavBar
            mode="dark"
            // icon={<Icon type="home" />}
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
        <DreamList items={this.state.items} />
        <SiteNav page="home" history={this.props.history} />
      </div>
    );
  }
  async componentDidMount() {
    const userData = await post(Config.apiUrl + '/user/detail/');
    const dreams = await post(Config.apiUrl + '/dream/list/');
    const user = userData.data;
    if (user.code === STATUS_CODE['SUCCESS'].code) {
      this.props.setUserInfo(user.data);
    }

    this.setState({
      items: dreams.data.data.rows
    });
  }
}

export default Home;
