import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { createForm } from 'rc-form';
import { List, InputItem, Button, WhiteSpace, Toast, SearchBar } from 'antd-mobile';
import { post, Config } from '../../utils/util';
import './explore.less';
import SiteNav from '../../components/SiteNav/SiteNav';
import DreamList from '../../components/DreamList/DreamList';
import STATUS_CODE from '../../utils/statusCode';

class Explore extends Component {
  state = {
    items: []
  }
  render() {
    return (
      <div className="page page-explore">
        <SearchBar placeholder="搜索" maxLength={32} />
        <DreamList items={this.state.items} />
        <SiteNav page="explore" history={this.props.history} />
      </div>
    );
  }
  async componentDidMount() {
    const userData = await post(Config.apiUrl + '/user/detail/');
    const user = userData.data;
    if (user.code === STATUS_CODE['SUCCESS'].code) {
      this.props.setUserInfo(user.data);
    }

    const dreams = await this.props.getExploreFeeds(0, 5);
    const searchResults = await this.props.searchDreams('2');
    
    this.setState({
      items: dreams.data.feeds
    });
  }
}
export default Explore;
