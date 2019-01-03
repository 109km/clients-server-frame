import React, { Component } from 'react';
// import { Button, NavBar, Icon } from 'antd-mobile';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import { post, getQuery, Config } from '../../utils/util';
import STATUS_CODE from '../../utils/statusCode';
import './home.less';
import DreamList from '../../components/DreamList/DreamList';
import SiteNav from '../../components/SiteNav/SiteNav';
import TopNav from '../../components/TopNav/TopNav';
class Home extends Component {

  state = {
    items: []
  }

  render() {
    return (
      <div className="page page-home">
        <TopNav user={this.props.user} />
        <DreamList items={this.state.items} />
        <SiteNav page="home" history={this.props.history} />
        {/* <Button>Styled components</Button> */}
      </div>
    );
  }
  async componentDidMount() {
    const userData = await post(Config.apiUrl + '/user/detail/');
    const user = userData.data;
    if (user.code === STATUS_CODE['SUCCESS'].code) {
      this.props.setUserInfo(user.data);
    }

    const dreams = await this.props.getHomeFeeds(0, 5);
    this.setState({
      items: dreams.data.feeds
    });
  }
}

export default Home;
