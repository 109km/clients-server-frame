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
    items: [],
    fullItems: []
  }
  render() {
    return (
      <div className="page page-explore">
        <SearchBar placeholder="搜索" maxLength={32} onChange={this.onSearchChange} />
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
    const dreams = await this.props.getExploreFeeds(0, 10);
    this.setState({
      items: dreams.data.feeds,
      fullItems: dreams.data.feeds
    });
  }
  onSearchChange = async (value) => {
    const searchResults = await this.props.searchDreams(value);
    this.setState({
      items: searchResults.data.feeds
    });
  }
}
export default Explore;
