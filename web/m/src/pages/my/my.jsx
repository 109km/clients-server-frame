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
        <List renderHeader={() => '个人中心'}>
          <Link className="link" to={`/account/`}>
            <Item
              thumb={Config.cdnUrl + "/images/icon-setting.png"}
              arrow="horizontal"
              onClick={() => { }}
            >账户设置</Item>
          </Link>
          <Link className="link" to={`/dream/edit/`}>
            <Item
              thumb={Config.cdnUrl + "/images/icon-edit.png"}
              onClick={() => { }}
              arrow="horizontal"
            >
              编辑个人项目
            </Item>
          </Link>
          <Link className="link" to={`/backers/`}>
            <Item
              thumb={ Config.cdnUrl + "/images/icon-backers.png"}
              onClick={() => { }}
              arrow="horizontal"
            >
              我的支持者
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