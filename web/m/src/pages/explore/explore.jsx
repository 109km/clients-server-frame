import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { createForm } from 'rc-form';
import { List, InputItem, Button, WhiteSpace, Toast, SearchBar } from 'antd-mobile';
import { post, Config } from '../../utils/util';
import './explore.less';
import SiteNav from '../../components/SiteNav/SiteNav';

class Explore extends Component {
  state = {
  }
  render() {
    return (
      <div className="page page-explore">
        <SearchBar placeholder="搜索" maxLength={32} />
        <SiteNav page="explore" history={this.props.history} />
      </div>
    );
  }
}
export default Explore;
