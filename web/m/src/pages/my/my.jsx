import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { List } from 'antd-mobile';
import { post, Config } from '../../utils/util';
import './my.less';
import SiteNav from '../../components/SiteNav/SiteNav';

const Item = List.Item;
const Brief = Item.Brief;

class My extends Component {
  state = {
    userId: ''
  }
  render() {
    return (
      <div className="page page-my">
        <List renderHeader={() => 'Icon in the left'}>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => { }}
          >The wallet is {this.props.user.nickname}</Item>
          <Link to={`/dream/detail/?id=${this.state.userId}`}>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => { }}
              arrow="horizontal"
            >
              My Cost Ratio
            </Item>
          </Link>
        </List>
        <SiteNav page="my" history={this.props.history} />
      </div >
    );
  }
  async componentDidMount() {
    // const userResponse = await post(Config.apiUrl + '/user/detail/');
    // const user = userResponse.data.data;
    // this.props.setUserInfo(user);
  }
}

export default My;